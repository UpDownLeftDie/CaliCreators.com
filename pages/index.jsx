import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import moment from 'moment';
import GroupCard from '../components/organisms/group-card';

const data = require('./data.json');

const siteTitle = 'Cali Creators MeetUps';
const description =
  "We're the meetup groups for Twitch, Facebook, streamers, and gamers in California!<br/>Find the closest one to you or come to all our events!";
const url = 'https://calicreators.com';

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

async function getUpcomingMeetupEvents() {
  const cacheBuster = `&${Math.floor(Math.random() * 1000)}`;
  // TODO remove hardcoded group name, dynamically get from data.json
  let meetupUrl = `https://api.meetup.com/ocstreamers/events?&sign=true&photo-host=secure&page=5&has_ended=false${cacheBuster}`;
  if (process.env.ENV !== 'development')
    meetupUrl = `https://lym20nhb8j.execute-api.us-west-2.amazonaws.com/dev?url=${meetupUrl}`;
  const meetupComReq = await fetch(meetupUrl).catch((err) => {
    console.log(err);
  });

  if (meetupComReq) {
    const meetupComJson = await meetupComReq.json();
    return convertMeetupToTwitch(meetupComJson);
  }
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return [];
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

  useEffect(() => {
    getUpcomingTwitchEvents().then((twitchEvents) => {
      setTwitchEvents({ events: twitchEvents, loading: false });
    });
  }, []);

  useEffect(() => {
    getUpcomingMeetupEvents().then((meetupEvents) => {
      setMeetupEvents({ events: meetupEvents, loading: false });
    });
  }, []);

  const findNextEvent = (groups, upcomingEvents) => {
    return groups.map((group) => {
      const nextEvent = upcomingEvents.find((event) => {
        if (event.chapter.city === group.city) return true;
        return false;
      });
      return {
        ...group,
        nextEvent: nextEvent || {},
      };
    });
  };

  const renderCards = () => {
    const upcomingEvents = upcomingTwitchEvents.events.concat(
      upcomingMeetupEvents.events
    );
    const loading =
      upcomingTwitchEvents.loading || upcomingMeetupEvents.loading;
    const groupsWithEvents = findNextEvent(data.groups, upcomingEvents).sort(
      (a, b) => {
        if (!a.nextEvent.start_date) return 1;
        if (!b.nextEvent.start_date) return -1;
        return (
          new Date(a.nextEvent.start_date) - new Date(b.nextEvent.start_date)
        );
      }
    );
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{siteTitle}</title>
        <meta name="Description" content={description.replace('<br/>', ' ')} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${url}/twitchsocal.gif`} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta
          property="og:description"
          content={description.replace('<br/>', ' ')}
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Head>

      <div className="hero">
        <span className="title-wrapper">
          <h1 className="title">{siteTitle}</h1>
        </span>
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <div className="row">{renderCards()}</div>
      </div>

      <style jsx>
        {`
          .hero {
            color: #fff;
            min-height: 100%;
            width: 100%;
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
