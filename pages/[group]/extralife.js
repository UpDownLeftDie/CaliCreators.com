import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import TeamMemberCards from '../../components/molecules/teamMemberCards';
import Header from '../../components/atoms/header';
import LoadingIcon from '../../components/atoms/loading-icon';
import ProgressBar from '../../components/atoms/progress-bar';
let data = require('./data.json');

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
      const participants = results[1].sort((a, b) => {
        if (a.isTeamCaptain) return -1;
        return a.displayName.localeCompare(b.displayName);
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

  if (!team?.teamID) return <LoadingIcon />;

  return (
    <div className={'page'}>
      <Header title={team.name} />
      <a href={team.links.page}>Join team</a>
      <ProgressBar
        progress={team.sumDonations}
        goal={team.fundraisingGoal}
        progressText="Raised"
        goalText="Goal"
        isMoney={true}
      />
      <TeamMemberCards teamMembers={team?.participants} />
      <style jsx>{`
        .page {
          width: 100%;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default ExtraLifeTeam;
