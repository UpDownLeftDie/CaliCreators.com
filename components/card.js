import React, { Fragment } from "react";
import moment from "moment";
import SocialIcons from "../components/social-icons";
import LoadingIcon from "../components/loading-icon";
import SoonBanner from "../components/soon-banner";

const Card = props => {
  const { group, loading } = props;
  let backgroundImage = "";
  let socialIcons = null;
  let startsInSevenDays = null;
  let nextEvent = {
    title: "TBA",
    date: "Click here for updates",
    url: loading ? "#" : group.url
  };

  if (!loading) {
    if (group.path) {
      backgroundImage = `background-image: url('/static/${group.path}');`;
    }
    if (group.links && group.name) {
      socialIcons = <SocialIcons links={group.links} groupName={group.name} />;
    }

    if (Object.keys(group.nextEvent).length) {
      const { url, start_date, title } = group.nextEvent;
      const sevenDays = moment().add(8, "days");
      startsInSevenDays = moment(start_date).isBefore(sevenDays);

      nextEvent = {
        ...nextEvent,
        title,
        date: moment(start_date).format("MMM Do YYYY"),
        url: loading ? "#" : url
      };
    }
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
          right: 50%;
          transform: translate(50%, -50%);
        }
      `}</style>
    </Fragment>
  );
  if (!loading) {
    cardInfo = (
      <Fragment>
        <h4>Next Event</h4>
        <h3>{group.name}</h3>
        <h5 className="event-title">{nextEvent.title}</h5>
        <span className="event-date">{nextEvent.date}</span>
        <style jsx>{`
          h4 {
            font-weight: 700;
            font-size: 20px;
            margin: 12px 0 0;
          }
          h3 {
            margin: 0;
            color: #fff;
            font-size: 22px;
            font-weight: 700;
            position: absolute;
            bottom: 10px;
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
          @media (max-width: 900px) {
            h4 {
              font-size: 28px;
            }
            h3 {
              font-size: 30px;
            }
            .event-title {
              max-height: 145px;
            }
          }
        `}</style>
      </Fragment>
    );
  }

  const renderSoonBanner = startsSoon => {
    if (startsSoon) return <SoonBanner />;
    return;
  };

  return (
    <span className="card-container">
      <a href={nextEvent.url} name={group.name}>
        <div className={`card ${startsInSevenDays ? "glow" : ""}`}>
          {renderSoonBanner(startsInSevenDays)}
          {cardInfo} <span className="card-background"></span>
        </div>
      </a>
      {socialIcons}
      <style jsx>{`
        .card-container {
          position: relative;
        }
        a:link {
          text-decoration: none;
        }
        .card {
          position: relative;
          width: 250px;
          height: 300px;
          padding: 18px;
          color: #fff;
          text-align: left;
          text-decoration: none;
          transition: all 150ms, transform 150ms cubic-bezier(0, 0, 0.2, 1);
          filter: drop-shadow(0 5px 3px rgba(0, 0, 0, 0.4));
          border-radius: 20px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
          word-break: break-word;
        }
        .glow {
          animation: fadein 1.5s ease-out infinite alternate;
        }
        @keyframes fadein {
          from {
            filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.2));
          }
          to {
            filter: drop-shadow(0 0 25px rgba(255, 255, 255, 1));
          }
        }
        .card::after {
          content: "";
          border-radius: 20px;
          position: absolute;
          z-index: -1;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 8px 6px rgba(0, 0, 0, 0.3));
          opacity: 0;
          transition: all 150ms, transform 150ms cubic-bezier(0, 0, 0.2, 1);
        }
        .card:hover {
          transform: scale(1.06);
          -webkit-font-smoothing: subpixel-antialiased;
        }
        .card:hover::after {
          opacity: 1;
        }
        .card-background {
          background: ${loading ? "#3d2769" : "#555"};
          ${backgroundImage}
          background-size: cover;
          background-position: center;
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          border-radius: 20px;
          z-index: -100;
          top: 0;
        }
        .card-background:before {
          content: "";
          position: absolute;
          height: 100%;
          width: 100%;
          border-radius: 20px;
          background-color: rgba(0, 0, 0, 0.4);
        }

        @media (max-width: 900px) {
          .card-container {
            width: 80%;
          }
          .card {
            width: auto;
            margin-bottom: 15px;
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
