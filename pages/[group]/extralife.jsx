import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
// import Head from 'next/head';
import TeamMemberCards from '../../components/molecules/team-member-cards';
import Header from '../../components/atoms/header';
import LoadingIcon from '../../components/atoms/loading-icon';
import ProgressBar from '../../components/atoms/progress-bar';
import StreamerSchedule from '../../components/organisms/streamer-schedule';
import checkIfEventIsLive from '../../src/utils';

const data = require('./data.json');

const API_BASE = 'https://www.extra-life.org/api';

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
      console.log(a.displayName, a.links);
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
      //! TEST
      // TODO REMOVE THIS
      results?.[1]?.[9] ? (results[1][9].streamIsLive = true) : null;
      //!
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
  }, [groupData]);
  if (!team?.participants) return <LoadingIcon />;

  let isEventLive = false;
  if (schedule?.length) {
    const scheduleTimeRange = getScheduleTimeRange(schedule) || {};
    isEventLive = checkIfEventIsLive(
      scheduleTimeRange.start,
      scheduleTimeRange.end
    );
  }
  return (
    <div className="page">
      <Header title={team.name} />
      <a href={team.links.page} className="teamLink">
        Join Team
      </a>
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
          .teamLink {
            color: #fff;
            font-size: 24px;
          }
          .teamMembers {
            margin-top: 40px;
            text-align: center;
          }
          .streamerSchedule {
            margin-top: 40px;
            width: 100%;
            max-width: 800px;
          }
          .streamerSchedule.upcoming h2 {
            margin-left: 10%;
          }
        `}
      </style>
    </div>
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
