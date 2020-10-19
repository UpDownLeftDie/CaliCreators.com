/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import TeamMemberCards from '../../components/molecules/team-member-cards';
import Header from '../../components/atoms/header';
import LoadingIcon from '../../components/atoms/loading-icon';
import ProgressBar from '../../components/atoms/progress-bar';
import StreamerSchedule from '../../components/organisms/streamer-schedule';
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

const ExtraLifeTeam = () => {
  const router = useRouter();
  const { group } = router.query;
  const groupData = data[group];
  const schedule = groupData?.schedule?.length
    ? sortSchedule(groupData.schedule)
    : [];
  const [team, setTeam] = useState({});

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
      if (cachedData?.updatedAt) {
        const fiveMinsAgo = new Date(Date.now() - 5 * 60000);
        if (new Date(cachedData.updatedAt) > fiveMinsAgo) {
          setTeam(cachedData.team);
          return;
        }
      }
      const results = await Promise.all([fetchTeam(), fetchTeamMembers()]);
      const participants = sortParticipants(results[1]);

      const newTeam = {
        ...results[0],
        participants,
      };
      const teamStorage = {
        team: newTeam,
        updatedAt: Date.now(),
      };
      localStorage.setItem(storageKey, JSON.stringify(teamStorage));
      setTeam(newTeam);
    }
    if (groupData?.id) getData();
  }, [group, groupData]);

  const siteTitle = 'Extra Life Team | Cali Creators';
  const description = "Extra Life's Team Page";
  const url = 'https://calicreators.com';
  const head = (
    <Head>
      <title key="title">{`${team.name} ${siteTitle}`}</title>
      <meta
        property="og:title"
        key="og:title"
        content={`${team.name} ${siteTitle}`}
      />
      <meta
        property="og:description"
        key="og:description"
        content={`${team.name} ${description}`}
      />
      <meta
        name="Description"
        key="description"
        content={`${team.name} ${description}`}
      />
      <meta property="og:url" key="og:url" content={`${url}${router.asPath}`} />
      <meta property="og:url" key="ogurl" content={url} />
      <meta
        property="og:image"
        key="og:image"
        content={`${url}/extralife-icon.png`}
      />
      <meta property="og:image:width" key="og:image:width" content="254" />
      <meta property="og:image:height" key="og:image:height" content="213" />
      <link rel="preconnect" href={EXTRA_LIFE_ORG} />
    </Head>
  );

  if (!team?.participants)
    return (
      <>
        {head}
        <div>
          <LoadingIcon />
          <style jsx>
            {`
              display: grid;
              place-items: center;
              font-size: 10rem;
            `}
          </style>
        </div>
      </>
    );
  let isEventLive = false;
  if (schedule?.length) {
    const scheduleTimeRange = getScheduleTimeRange(schedule) || {};
    isEventLive = checkIfEventIsLive(
      scheduleTimeRange.start,
      scheduleTimeRange.end
    );
  }

  return (
    <>
      {head}
      <div className="page">
        <Header title={team.name} />
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
        />
        {schedule?.length > 0 && isEventLive && (
          <div className="streamerSchedule live">
            <h2>Live Schedule</h2>
            <StreamerSchedule
              schedule={schedule}
              teamMembers={team.participants}
            />
          </div>
        )}
        <div className="teamMembers">
          <a href={team.links.page} className="teamLink">
            Join Team
          </a>
          <h2>Team Members</h2>
          <TeamMemberCards teamMembers={team.participants} />
        </div>
        {schedule?.length > 0 && !isEventLive && (
          <div className="streamerSchedule upcoming">
            <h2>Upcoming Event</h2>
            <StreamerSchedule
              schedule={schedule}
              teamMembers={team.participants}
            />
          </div>
        )}
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
          .streamerSchedule {
            margin-top: 40px;
            width: 100%;
            max-width: 800px;
          }
          .streamerSchedule.upcoming h2 {
            margin-left: 10%;
          }
          @media (max-width: 600px) {
            .streamerSchedule.upcoming h2 {
              text-align: center;
              margin-left: 0;
          }
        `}
        </style>
      </div>
    </>
  );
};

export default ExtraLifeTeam;

export async function getStaticPaths() {
  return {
    paths: [{ params: { group: 'oc' } }, { params: { group: 'sd' } }],
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
