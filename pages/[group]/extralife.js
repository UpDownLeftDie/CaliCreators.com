import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Card from '../../components/organisms/card';
import LoadingIcon from '../../components/atoms/loading-icon';
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
      setTeam(team);
    }
    if (groupData?.id) fetchTeam();
  }, [groupData]);

  if (!team?.teamID) return <LoadingIcon />;

  return <div>{team.name}</div>;
};

export default ExtraLifeTeam;
