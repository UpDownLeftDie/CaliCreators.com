import React, { useState, useEffect, Fragment } from "react";
import Head from "next/head";
import Card from "../components/card";
import fetch from "isomorphic-unfetch";

const siteTitle = "CA Creators";
const description =
  "We're the meetup groups for Twitch, Mixer, streamers, and gamers in California!<br/>Find the closest one to you or come to all our events!";
const url = "https://cacreators.com";

// const groups = [
//   { city: "Los Angeles", groupName: "Twitch LA" },
//   { city: "Orange", groupName: "OC Streamers" },
//   { city: "San Diego", groupName: "TwitchSD" }
// ];

const Home = () => {
  const [upcomingTwitchEvents, setTwitchEvents] = useState([]);
  const [upcomingMeetupEvents, setMeetupEvents] = useState([]);

  useEffect(() => {
    getUpcomingTwitchEvents().then(twithcEvents => {
      setTwitchEvents(twithcEvents);
    });
  }, []);

  useEffect(() => {
    getUpcomingMeetupEvents().then(meetupEvents => {
      setMeetupEvents(meetupEvents);
    });
  }, []);

  const findNextEvent = (city, upcomingEvents) => {
    return upcomingEvents.find(event => {
      if (event.chapter.city === city) return true;
      return false;
    });
  };

  const renderCards = () => {
    return (
      <Fragment>
        <Card
          groupName={"Twitch La"}
          city={"Los Angeles"}
          href={"https://meetups.twitch.tv/los-angeles/"}
          upcomingEvents={upcomingTwitchEvents}
        />
        <Card
          groupName={"OC Streamers"}
          city={"Orange"}
          href={"https://www.meetup.com/ocstreamers"}
          upcomingEvents={upcomingMeetupEvents}
        />
        <Card
          groupName={"Twitch SD"}
          city={"San Diego"}
          href={"https://meetups.twitch.tv/san-diego/"}
          upcomingEvents={upcomingTwitchEvents}
        />
      </Fragment>
    );
  };

  return (
    <div
      style={{
        minHeight: "100%",
        position: "absolute",
        width: "100%"
      }}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{siteTitle}.com</title>
        <meta
          name="Description"
          content={description.replace("<br/>", " ")}
        ></meta>
        <meta property="og:title" content={siteTitle}></meta>
        <meta property="og:url" content={url}></meta>
        <meta
          property="og:image"
          content={`${url}/static/twitchsocal.gif`}
        ></meta>
        <meta property="og:image:width" content="800"></meta>
        <meta property="og:image:height" content="800"></meta>
        <meta
          property="og:description"
          content={description.replace("<br/>", " ")}
        ></meta>
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
        ></p>

        <div className="row">{renderCards()}</div>
      </div>
      <div className="footer">
        <p>
          This site is not affiliated or endorsed by Twitch, Mixer, or Meetup.
        </p>
      </div>

      <style jsx>{`
        :global(html, body) {
          height: 100%;
          margin: 0;
          padding: 0;
        }
        :global(body) {
          background-color: #9146ff;
          background-image: url("/static/funky-lines.webp");
          background-size: 600px;
          font-family: "Kanit", sans-serif, Avenir Next, Avenir, Helvetica,
            sans-serif;
        }
        .hero {
          width: 100%;
          color: #fff;
        }
        .title {
          margin: 0;
          width: 100%;
          margin-top: 50px;
          line-height: 1.15;
          font-size: 48px;
          font-family: "Knewave", sans-serif;
          animation: colorwipe 6s infinite;
          background: rgb(255, 255, 255);
          background: linear-gradient(
            15deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 1) 15%,
            rgba(131, 58, 180, 1) 25%,
            rgba(253, 29, 29, 1) 50%,
            rgba(252, 176, 69, 1) 75%,
            rgba(255, 255, 255, 1) 80%,
            rgba(255, 255, 255, 1) 100%
          );
          background-size: 900%;
          background-position: 0%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .title-wrapper {
          filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.4));
          display: block;
        }
        .title,
        .description {
          text-align: center;
        }
        .description {
          font-size: 22px;
          font-weight: 300;
          font-family: "Kanit", sans-serif;
        }
        .row {
          max-width: 880px;
          margin: 40px auto;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .footer {
          color: #fff;
          position: absolute;
          bottom: 0;
          width: 100%;
          text-align: center;
          font-weight: 100;
          font-style: italic;
          font-family: sans-serif;
        }
        @media (max-width: 840px) {
          .row {
            flex-direction: column;
            align-items: center;
          }
        }
        @keyframes colorwipe {
          0% {
            background-position: 0%;
          }
          35% {
            background-position: 0%;
          }
          100% {
            background-position: 100%;
          }
        }
      `}</style>
    </div>
  );
};

async function getUpcomingTwitchEvents() {
  const cacheBuster = `&${Math.floor(Math.random() * 1000)}`;
  const twitchReq = await fetch(
    `https://meetups.twitch.tv/api/search/?result_types=upcoming_event&country_code=Earth${cacheBuster}`
  ).catch(err => {
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
  const meetupComReq = await fetch(
    `https://shielded-plateau-06167.herokuapp.com/https://api.meetup.com/ocstreamers/events?&sign=true&photo-host=secure&page=5&has_ended=false${cacheBuster}`
  ).catch(err => {
    console.log(err);
  });

  if (meetupComReq) {
    const meetupComJson = await meetupComReq.json();
    return convertMeetupToTwitch(meetupComJson);
  }

  return [];
}

function convertMeetupToTwitch(meetup) {
  const meetupList = meetup.map(event => {
    const city = event.group.localized_location.split(",")[0];
    return {
      chapter: {
        city
      },
      url: event.link,
      start_date: event.local_date,
      title: event.name
    };
  });

  return meetupList;
}

export default Home;
