import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import moment from 'moment';
import GroupCard from '../components/organisms/group-card';

const data = require('./data.json');

const meetupUrlIds = [];
const guildedUrlObjs = [];
const twitchUrlIds = [];
Object.values(data.groups).forEach((group) => {
  const url = new URL(group.url);
  const urlPaths = url.pathname.split('/');
  const cid = url.searchParams.get('cid');
  switch (true) {
    case group.url.indexOf('meetups.twitch.tv') > -1:
      // Not needed at the moment
      if (urlPaths.length > 1) twitchUrlIds.push(urlPaths[1]);
      break;
    case group.url.indexOf('meetups.com') > -1:
      if (urlPaths.length > 1) meetupUrlIds.push(urlPaths[1]);
      break;
    case group.url.indexOf('guilded.gg') > -1:
      if (
        cid &&
        url.searchParams.get('intent') === 'event' &&
        group.guildedURLKey
      ) {
        guildedUrlObjs.push({
          city: group.city,
          guildedUrl: group.guildedURLKey,
          cid,
        });
      }
      break;
    default:
      break;
  }
});

const siteTitle = 'Cali Creators MeetUps';
const description =
  "We're the meetup groups for Twitch, Facebook, streamers, and gamers in California!<br/>Find the closest one to you or come to all our events!";

function convertMeetupToTwitch(meetup) {
  const meetupList = meetup.map((event) => {
    const city = event.group.localized_location.split(',')[0];
    const startDate = moment
      .utc(event.time)
      .utcOffset(event.utc_offset / 3600000)
      .format();
    return {
      chapter: {
        city,
      },
      url: event.link,
      start_date: startDate,
      title: event.name,
    };
  });

  return meetupList;
}

function convertGuildedToTwitch(guildedGroupsEvents) {
  const guildedList = guildedGroupsEvents.reduce((acc, guildedGroup) => {
    const events = guildedGroup.events.map((event) => {
      const startDate = moment
        .utc(event.happensAt)
        // .utcOffset(event.utc_offset / 3600000)
        .format();
      const group = Object.entries(data.groups).find(
        ([, groupData]) =>
          groupData.city.toLowerCase() === event.city.toLowerCase()
      )[1];
      const guildedUrl = group?.guildedURLKey;
      return {
        chapter: {
          city: event.city,
        },
        url: `https://www.guilded.gg/${guildedUrl}/groups/${event.groupId}/channels/${event.channelId}/calendar/${event.eventId}`,
        start_date: startDate,
        title: event.name,
      };
    });
    return acc.concat(events);
  }, []);

  return guildedList;
}

async function getUpcomingTwitchEvents() {
  const cacheBuster = `&${Math.floor(Math.random() * 1000)}`;
  const twitchReq = await fetch(
    `https://meetups.twitch.tv/api/search/?result_types=upcoming_event&country_code=Earth${cacheBuster}`
  ).catch((err) => {
    console.log(err);
  });

  const twitchJson = await twitchReq.json();

  if (twitchJson) {
    return twitchJson.results;
  }

  return [];
}

async function getUpcomingGuildedEvents() {
  if (guildedUrlObjs.length < 1) return [];

  const cacheBuster = `&${Math.floor(Math.random() * 1000)}`;
  const startDate = encodeURIComponent(
    new Date(Date.now() - 24 * 60 * 60000).toISOString()
  ); // 1 day ago
  const endDate = encodeURIComponent(
    new Date(Date.now() + 6 * 30 * 24 * 60 * 60000).toISOString()
  ); // 6 months from now

  const guildedReqs = guildedUrlObjs.map(async (guildedUrlObj) => {
    const guildedUrl = `https://www.guilded.gg/api/channels/${guildedUrlObj.cid}/events?endDate=${endDate}&maxItems=250&startDate=${startDate}${cacheBuster}`;
    // const meetupUrlProxy = `https://lym20nhb8j.execute-api.us-west-2.amazonaws.com/dev?url=${meetupUrl}`;
    const res = await fetch(guildedUrl);
    const json = await res.json();
    if (json?.events?.length > 0) {
      json.events = json.events.map((event) => {
        const eventWithCity = event;
        eventWithCity.city = guildedUrlObj.city;
        return eventWithCity;
      });
    }

    return json;
  });
  const guildedResponses = await Promise.all(guildedReqs).catch((err) => {
    console.log(err);
  });

  return convertGuildedToTwitch(guildedResponses);
}

async function getUpcomingMeetupEvents() {
  if (meetupUrlIds.length < 1) return [];

  const cacheBuster = `&${Math.floor(Math.random() * 1000)}`;
  const meetupReqs = meetupUrlIds.map((meetupId) => {
    const meetupUrl = `https://api.meetup.com/${meetupId}/events?&sign=true&photo-host=secure&page=5&has_ended=false${cacheBuster}`;
    const meetupUrlProxy = `https://lym20nhb8j.execute-api.us-west-2.amazonaws.com/dev?url=${meetupUrl}`;
    return fetch(meetupUrlProxy);
  });

  const responses = await Promise.all(meetupReqs).catch((err) => {
    console.log(err);
  });

  const meetupResJsons = await Promise.all(responses.map((res) => res.json()));
  return convertMeetupToTwitch(meetupResJsons);
}

const Home = () => {
  const [upcomingTwitchEvents, setTwitchEvents] = useState({
    events: [],
    loading: true,
  });
  const [upcomingMeetupEvents, setMeetupEvents] = useState({
    events: [],
    loading: true,
  });
  const [upcomingGuildedEvents, setGuildedEvents] = useState({
    events: [],
    loading: true,
  });

  const fiveMinsBefore = (date) => new Date(date - 5 * 60000);

  useEffect(() => {
    const cachedData = JSON.parse(localStorage.getItem('twitchEvents') || '{}');
    if (cachedData?.updatedAt) {
      const fiveMinsAgo = fiveMinsBefore(Date.now());
      if (new Date(cachedData.updatedAt) > fiveMinsAgo) {
        setTwitchEvents({ events: cachedData.events, loading: false });
        return;
      }
    }
    getUpcomingTwitchEvents().then((twitchEvents) => {
      localStorage.setItem(
        'twitchEvents',
        JSON.stringify({
          events: twitchEvents,
          updatedAt: Date.now(),
        })
      );
      setTwitchEvents({ events: twitchEvents, loading: false });
    });
  }, []);

  useEffect(() => {
    const cachedData = JSON.parse(localStorage.getItem('meetupEvents') || '{}');
    if (cachedData?.updatedAt) {
      const fiveMinsAgo = fiveMinsBefore(Date.now());
      if (new Date(cachedData.updatedAt) > fiveMinsAgo) {
        setMeetupEvents({ events: cachedData.events, loading: false });
        return;
      }
    }

    getUpcomingMeetupEvents().then((meetupEvents) => {
      localStorage.setItem(
        'meetupEvents',
        JSON.stringify({
          events: meetupEvents,
          updatedAt: Date.now(),
        })
      );
      setMeetupEvents({ events: meetupEvents, loading: false });
    });
  }, []);

  useEffect(() => {
    const cachedData = JSON.parse(
      localStorage.getItem('guildedEvents') || '{}'
    );
    if (cachedData?.updatedAt) {
      const fiveMinsAgo = fiveMinsBefore(Date.now());
      if (new Date(cachedData.updatedAt) > fiveMinsAgo) {
        setGuildedEvents({ events: cachedData.events, loading: false });
        return;
      }
    }

    getUpcomingGuildedEvents().then((guildedEvents) => {
      localStorage.setItem(
        'guildedEvents',
        JSON.stringify({
          events: guildedEvents,
          updatedAt: Date.now(),
        })
      );
      setGuildedEvents({ events: guildedEvents, loading: false });
    });
  }, []);

  const findNextEvent = (groups, upcomingEvents) =>
    groups.map((group) => {
      const nextEvent = upcomingEvents.find((event) => {
        if (event.chapter.city === group.city) return true;
        return false;
      });
      return {
        ...group,
        nextEvent: nextEvent || {},
      };
    });

  const renderCards = () => {
    const upcomingEvents = upcomingTwitchEvents.events.concat(
      upcomingMeetupEvents.events,
      upcomingGuildedEvents.events
    );
    const loading =
      upcomingTwitchEvents.loading ||
      upcomingMeetupEvents.loading ||
      upcomingGuildedEvents.loading;
    const groupsWithEvents = findNextEvent(
      Object.values(data.groups),
      upcomingEvents
    ).sort((a, b) => {
      if (!a.nextEvent.start_date) return 1;
      if (!b.nextEvent.start_date) return -1;
      return (
        new Date(a.nextEvent.start_date) - new Date(b.nextEvent.start_date)
      );
    });
    return groupsWithEvents.map((groupWithEvent, i) => (
      <GroupCard
        key={groupWithEvent.name}
        group={groupWithEvent}
        loading={loading}
        totalCards={groupsWithEvents.length}
        position={i + 1}
      />
    ));
  };

  return (
    <>
      <Head>
        <title key="title">{siteTitle}</title>
        <meta property="og:title" key="og:title" content={siteTitle} />
        <meta
          property="og:description"
          key="og:description"
          content={description.replace('<br/>', ' ')}
        />
        <meta
          name="Description"
          key="description"
          content={description.replace('<br/>', ' ')}
        />
        <link
          rel="preconnect"
          href="https://lym20nhb8j.execute-api.us-west-2.amazonaws.com"
        />
        <link rel="preconnect" href="https://meetups.twitch.tv" />
        <link rel="preconnect" href="https://www.guilded.gg" />
      </Head>
      <div className="hero">
        <span className="title-wrapper">
          <h1 className="title">{siteTitle}</h1>
        </span>
        <p
          className="description"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="row">{renderCards()}</div>
      </div>
      <style jsx>
        {`
          .hero {
            color: #fff;
            width: 100%;
            padding: 50px 16px 0 16px;
          }
          .title {
            margin: 0;
            width: 100%;
            min-height: 120px;
            line-height: 1.15;
            font-size: 48px;
            font-family: 'Knewave', sans-serif;
            animation: colorwipe 6s infinite;
            background: rgb(255, 255, 255);
            background: linear-gradient(
              40deg,
              rgba(255, 255, 255, 1) 0%,
              rgba(255, 255, 255, 1) 25%,
              rgba(131, 58, 180, 1) 30%,
              rgba(253, 29, 29, 1) 55%,
              rgba(252, 176, 69, 1) 70%,
              rgba(255, 255, 255, 1) 75%,
              rgba(255, 255, 255, 1) 100%
            );
            background-size: 2400px;
            background-position: 0%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .title-wrapper {
            filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.4));
            display: block;
            width: 300px;
            margin: 0 auto;
          }
          .title,
          .description {
            text-align: center;
          }
          .description {
            font-size: 22px;
            font-weight: 300;
            font-family: 'Kanit', sans-serif;
          }
          .row {
            max-width: 1000px;
            margin: 65px auto;
            position: relative;
            min-height: 410px;
          }

          @media (max-width: 900px) {
            .row {
              display: flex;
              flex-direction: row;
              flex-direction: column;
              align-items: center;
            }
          }
          @keyframes colorwipe {
            0% {
              background-position: 0%;
            }
            100% {
              background-position: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

export default Home;
