/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { string } from 'prop-types';
import TeamMemberCards from '../../components/molecules/team-member-cards';
import Header from '../../components/atoms/header';
import LoadingIcon from '../../components/atoms/loading-icon';
import ProgressBar from '../../components/atoms/progress-bar';
import StreamerSchedule from '../../components/organisms/streamer-schedule';
import Collapsible from '../../components/molecules/collapsible';
import CollapseArrow from '../../components/atoms/collapse-arrow';
import checkIfEventIsLive from '../../src/utils';

const data = require('./data.json');

const EXTRA_LIFE_ORG = 'https://www.extra-life.org';
const API_BASE = `${EXTRA_LIFE_ORG}/api`;

function sortSchedule(schedule) {
  return schedule
    .filter((stream) => {
      return new Date() < new Date(stream.timeEnd);
    })
    .sort(
      (a, b) =>
        new Date(a.timeStart).getTime() - new Date(b.timeStart).getTime()
    );
}

function getScheduleTimeRange(schedule) {
  const start = new Date(schedule[0].timeStart);
  const end = new Date(schedule[schedule.length - 1].timeEnd);
  return { start, end };
}

function sortParticipants(participants) {
  return participants
    .sort((a, b) => {
      if (a.streamIsLive && !b.streamIsLive) return -1;
      if (b.streamIsLive && !a.streamIsLive) return 1;
      const donationsDiff = b.sumDonations - a.sumDonations;
      if (donationsDiff === 0)
        return a.displayName.localeCompare(b.displayName);
      return donationsDiff;
    })
    .map((member) => {
      let newMember = {
        ...member,
        avatarImageURL: `https:${member.avatarImageURL}`,
      };
      if (member?.links?.stream) {
        const { stream } = member.links;
        const regex = stream.match(/channel=(.*)/);
        if (regex?.[1]) {
          newMember = { ...newMember, twitchUsername: regex[1] };
          return newMember;
        }
      }
      return newMember;
    });
}

const ExtraLifeTeam = ({ name }) => {
  const router = useRouter();
  const { group } = router.query;
  const groupData = data[group];
  const schedule = groupData?.schedule?.length
    ? sortSchedule(groupData.schedule)
    : [];
  const [team, setTeam] = useState({ name });
  const [isLoading, setIsLoading] = useState(!team?.participants);
  const [isTeamCollapsed, setIsTeamCollapsed] = useState(false);
  const [isScheduleCollapsed, setIsScheduleCollapsed] = useState(false);
  const handleTeamCollapse = () => {
    setIsTeamCollapsed(!isTeamCollapsed);
    setIsScheduleCollapsed(false);
  };
  const handleScheduleCollapse = () => {
    setIsScheduleCollapsed(!isScheduleCollapsed);
    setIsTeamCollapsed(false);
  };

  useEffect(() => {
    async function fetchTeam() {
      const res = await fetch(`${API_BASE}/teams/${groupData.id}`);
      const fetchedTeam = await res.json();
      return fetchedTeam;
    }
    async function fetchTeamMembers() {
      const res = await fetch(`${API_BASE}/teams/${groupData.id}/participants`);
      const fetchedTeamMembers = await res.json();
      return fetchedTeamMembers;
    }
    async function getData() {
      const storageKey = `${group}-extralife`;
      const cachedData = JSON.parse(localStorage.getItem(storageKey) || '{}');
      const fiveMinsAgo = new Date(Date.now() - 5 * 60000);
      let newTeam = {};
      if (
        cachedData?.updatedAt &&
        new Date(cachedData.updatedAt) > fiveMinsAgo
      ) {
        newTeam = cachedData.team;
      } else {
        const results = await Promise.all([fetchTeam(), fetchTeamMembers()]);
        const participants = sortParticipants(results[1]);

        newTeam = {
          ...results[0],
          participants,
        };
        const teamStorage = {
          team: newTeam,
          updatedAt: Date.now(),
        };
        localStorage.setItem(storageKey, JSON.stringify(teamStorage));
      }
      setTeam(newTeam);
      setIsLoading(false);
    }
    if (groupData?.id) getData();
  }, [group, groupData]);

  const siteTitle = `${team.name} Extra Life Team | Cali Creators`;
  const description = `${team.name} Extra Life Team Page. We're raising money to help our local children's hospital!`;
  const url = 'https://calicreators.com';
  const pageUrl = `${url}${router.asPath}`;
  const head = (
    <Head>
      <title key="title">{siteTitle}</title>
      <meta property="og:title" key="og:title" content={siteTitle} />
      <meta
        property="og:description"
        key="og:description"
        content={description}
      />
      <meta
        name="Description"
        key="description"
        content={`${team.name} ${description}`}
      />
      <meta property="og:url" key="og:url" content={pageUrl} />
      <meta
        property="og:image"
        key="og:image"
        content={`${url}/extralife-icon.png`}
      />
      <meta property="og:image:width" key="og:image:width" content="255" />
      <meta property="og:image:height" key="og:image:height" content="255" />
      <link rel="preconnect" href={EXTRA_LIFE_ORG} />
      <script src="https://embed.twitch.tv/embed/v1.js" />
    </Head>
  );

  let pageContents = (
    <div>
      <LoadingIcon />
      <style jsx>
        {`
          margin-top: 0px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          display: grid;
          place-items: center;
          font-size: 10rem;
        `}
      </style>
    </div>
  );
  let isEventLive = false;
  if (schedule?.length) {
    const scheduleTimeRange = getScheduleTimeRange(schedule) || {};
    isEventLive = checkIfEventIsLive(
      scheduleTimeRange.start,
      scheduleTimeRange.end
    );
  }
  const scheduleContent = () => {
    let cssClass = 'upcoming';
    let title = 'Upcoming Schedule ';
    if (isEventLive) {
      cssClass = 'live';
      title = 'Live Schedule ';
    }
    return (
      <div className={`streamerSchedule ${cssClass}`}>
        <h2>
          <button type="button" onClick={handleScheduleCollapse}>
            {title}
            <CollapseArrow isCollapsed={isScheduleCollapsed} />
          </button>
        </h2>
        <Collapsible isCollapsed={isScheduleCollapsed}>
          <StreamerSchedule
            schedule={schedule}
            teamMembers={team.participants}
          />
        </Collapsible>
        <style jsx>
          {`
            .streamerSchedule {
              margin-top: 40px;
              width: 100%;
              max-width: 800px;
            }
            .streamerSchedule.upcoming h2 {
              margin-left: 10%;
            }
            :global(h2 button) {
              font-family: inherit;
              font-size: inherit;
              line-height: inherit;
              margin: 0;
              font-weight: inherit;
              background: inherit;
              border: inherit;
              color: inherit;
            }
            :global(h2 button:focus:not(:focus-visible)) {
              outline: none;
            }

            @media (max-width: 600px) {
              .streamerSchedule.upcoming h2 {
                text-align: center;
                margin-left: 0;
              }
            }
          `}
        </style>
      </div>
    );
  };
  if (!isLoading)
    pageContents = (
      <>
        {schedule?.length > 0 && isEventLive && scheduleContent()}
        <div id="twitchPlayer" />
        <div className="teamMembers">
          <a href={team.links.page} className="teamLink">
            Join Team
          </a>
          <h2>
            <button type="button" onClick={handleTeamCollapse}>
              Team Members&nbsp;
              <CollapseArrow isCollapsed={isTeamCollapsed} />
            </button>
          </h2>
          <Collapsible isCollapsed={isTeamCollapsed}>
            <TeamMemberCards teamMembers={team.participants} />
          </Collapsible>
        </div>
        {schedule?.length > 0 && !isEventLive && scheduleContent()}
        <style jsx>
          {`
            .teamLink {
              color: #fff;
              padding: 15px;
              border-radius: 8px;
              font-size: 24px;
              background: #26c2eb;
              text-decoration: none;
              font-weight: bold;
            }
            .teamLink:hover {
              background: #13a2c8;
            }
            .teamMembers {
              margin-top: 40px;
              text-align: center;
              position: relative;
            }
          `}
        </style>
      </>
    );

  return (
    <>
      {head}
      <div className="page">
        <Header title={team.name || name} />
        <h2 className="subheader">Extra Life Team</h2>
        <Link href="/">
          <a className="homeLink">Home</a>
        </Link>
        <ProgressBar
          progress={team.sumDonations}
          goal={team.fundraisingGoal}
          progressText="Raised"
          goalText="Goal"
          isMoney
          width={80}
          displayProgress
          isLoading
        />
        {pageContents}
        <style jsx>
          {`
            .page {
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-items: center;
              align-items: center;
            }
            .subheader {
              padding: 0;
              margin: 0;
            }
            .homeLink {
              color: #fff;
              font-size: 18px;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default ExtraLifeTeam;

ExtraLifeTeam.propTypes = {
  name: string.isRequired,
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { group: 'oc' } }, { params: { group: 'sd' } }],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const groups = {
    oc: { name: 'OC Streamers' },
    sd: { name: 'Twitch San Diego' },
  };

  return {
    props: { ...(groups[params.group] || {}) }, // will be passed to the page component as props
  };
}
