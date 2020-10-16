import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import TeamMemberCards from '../../components/molecules/teamMemberCards';
import Header from '../../components/atoms/header';
import LoadingIcon from '../../components/atoms/loading-icon';
import ProgressBar from '../../components/atoms/progress-bar';
import StreamerSchedule from '../../components/organisms/streamer-schedule';
const data = require('./data.json');

const API_BASE = 'https://www.extra-life.org/api';

const ExtraLifeTeam = () => {
  const router = useRouter();
  const { group } = router.query;
  const groupData = data[group];

  const [team, setTeam] = useState({});
  console.log(team);
  useEffect(() => {
    async function fetchTeam() {
      const res = await fetch(`${API_BASE}/teams/${groupData.id}`);
      const team = await res.json();
      return team;
    }
    async function fetchTeamMembers() {
      const res = await fetch(`${API_BASE}/teams/${groupData.id}/participants`);
      const teamMembers = await res.json();
      return teamMembers;
    }
    async function getData() {
      const results = await Promise.all([fetchTeam(), fetchTeamMembers()]);
      //! TEST
      // TODO REMOVE THIS
      results[1][11].streamIsLive = true;
      //!
      const participants = results[1]
        .sort((a, b) => {
          return a.displayName.localeCompare(b.displayName);
        })
        .sort((a, b) => {
          if (a.streamIsLive) return -1;
          if (b.streamIsLive) return 1;
          return 0;
        })
        .map((member) => {
          if (member?.links?.stream) {
            const stream = member.links.stream;
            const regex = stream.match(/channel=(.*)/);
            if (regex?.[1]) {
              member.twitchUsername = regex[1];
              return member;
            }
          }
          return member;
        });

      const team = {
        ...results[0],
        participants,
      };
      console.log(team);
      setTeam(team);
    }
    if (groupData?.id) getData();
  }, [groupData]);

  if (!team?.participants) return <LoadingIcon />;

  console.log(groupData.schedule);
  return (
    <div className={'page'}>
      <Header title={team.name} />
      <a href={team.links.page} className={'teamLink'}>
        Join Team
      </a>
      <ProgressBar
        progress={team.sumDonations}
        goal={team.fundraisingGoal}
        progressText="Raised"
        goalText="Goal"
        isMoney={true}
        width={80}
      />
      <TeamMemberCards teamMembers={team.participants} />
      {groupData?.schedule && (
        <StreamerSchedule
          schedule={groupData.schedule}
          teamMembers={team.participants}
        />
      )}
      <style jsx>{`
        .page {
          width: 100%;
          text-align: center;
        }
        .teamLink {
          color: #fff;
          font-size: 24px;
        }
      `}</style>
    </div>
  );
};

export default ExtraLifeTeam;
