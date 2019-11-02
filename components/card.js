import React, { Fragment } from "react";
import moment from "moment";
import SocialIcons from "../components/social-icons";
import LoadingIcon from "../components/loading-icon";

const groupsInfo = [
  {
    name: "Twitch LA",
    path: "la.webp",
    links: [
      {
        site: "twitter",
        href: "https://twitter.com/TwitchLosAngele"
      },
      {
        site: "discord",
        href: "https://discord.gg/8E75rA5"
      },
      {
        site: "instagram",
        href: "https://www.instagram.com/twitch_LA"
      }
    ]
  },
  {
    name: "OC Streamers",
    path: "oc.webp",
    links: [
      {
        site: "twitter",
        href: "https://twitter.com/OCStreamers"
      },
      {
        site: "discord",
        href: "https://discord.gg/a5SUFUK"
      },
      {
        site: "instagram",
        href: "https://www.instagram.com/ocstreamers"
      }
    ]
  },
  {
    name: "Twitch SD",
    path: "sd.webp",
    links: [
      {
        site: "twitch",
        href: "https://www.twitch.tv/twitch_sandiego"
      },
      {
        site: "twitter",
        href: "https://twitter.com/TwitchSanDiego"
      },
      {
        site: "discord",
        href: "https://t.co/m0wLLQNnk8"
      }
    ]
  }
];

const findNextEvent = (city, upcomingEvents) => {
  return upcomingEvents.find(event => {
    if (event.chapter.city === city) return true;
    return false;
  });
};

const Card = ({ groupName, city, href, upcomingEvents }) => {
  const group = groupsInfo.find(
    i => i.name.toLowerCase() === groupName.toLowerCase()
  );
  let backgroundImage = "";
  let socialIcons = null;
  if (group) {
    backgroundImage = `background-image: url('/static/${group.path}');`;
    socialIcons = <SocialIcons links={group.links} groupName={group.name} />;
  }

  const nextEventInfo = findNextEvent(city, upcomingEvents);
  let nextEvent = {
    title: "TBA",
    date: "Click here for updates",
    url: href
  };

  if (nextEventInfo) {
    const { url, start_date, title } = nextEventInfo;

    nextEvent = {
      ...nextEvent,
      title,
      date: moment(start_date).format("MMM Do YYYY"),
      url
    };
  }

  let cardInfo = (
    <Fragment>
      <span className="loadingIcon">
        <LoadingIcon />
      </span>
      <style jsx>{`
        .loadingIcon {
          position: absolute;
          font-size: 100px;
          top: 50%;
          transform: translate(50%, -50%);
        }
      `}</style>
    </Fragment>
  );
  if (upcomingEvents.length) {
    cardInfo = (
      <Fragment>
        <h4>Next Event</h4>
        <h5 className="event-title">{nextEvent.title}</h5>
        <span className="event-date">{nextEvent.date}</span>
        <style jsx>{`
          h4 {
            font-weight: 700;
            font-size: 20px;
            margin: 12px 0 0;
          }
          .event-date {
            font-size: 18px;
            color: #fff;
            font-weight: 400;
            text-decoration: overline;
            margin-top: 8px;
            display: block;
          }
          .event-title {
            font-weight: 700;
            font-size: 2em;
            margin: 12px 0 0;
            overflow: hidden;
            max-height: 180px;
            line-height: 35px;
          }
          @media (max-width: 840px) {
            h4 {
              font-size: 28px;
            }
            .event-title {
              max-height: 145px;
            }
          }
        `}</style>
      </Fragment>
    );
  }

  return (
    <span className="card-container">
      <a href={nextEvent.url} name={groupName}>
        <div className="card">
          <h3>{groupName}</h3>
          {cardInfo}
        </div>
      </a>
      {socialIcons}
      <style jsx>{`
        a:link {
          text-decoration: none;
        }
        .card {
          width: 200px;
          height: 300px;
          padding: 18px;
          color: #fff;
          text-align: left;
          text-decoration: none;
          background: #3d2769;
          ${backgroundImage}
          background-size: cover;
          background-position: center;
          transition: all 150ms, transform 200ms;
          filter: drop-shadow(0 5px 3px rgba(0, 0, 0, 0.4));
          border-radius: 20px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
          word-break: break-word;
        }
        .card:hover {
          transform: scale(1.06);
          filter: drop-shadow(0 8px 6px rgba(0, 0, 0, 0.3));
        }
        .card h3 {
          margin: 0;
          color: #fff;
          font-size: 22px;
          font-weight: 700;
          position: absolute;
          bottom: 10px;
        }

        @media (max-width: 840px) {
          .card-container {
            width: 80%;
          }
          .card {
            width: auto;
            margin-bottom: 15px;
          }
          .card h3 {
            font-size: 30px;
          }
          .card p {
            font-size: 26px;
          }
        }
      `}</style>
    </span>
  );
};

export default Card;
