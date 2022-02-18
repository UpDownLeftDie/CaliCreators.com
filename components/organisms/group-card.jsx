import React from 'react';
import Head from 'next/head';
import { bool, number, shape, string } from 'prop-types';
import moment from 'moment';
import SocialIcons from '../molecules/social-icons';
import LoadingIcon from '../atoms/loading-icon';
import Ribbon from '../atoms/ribbon';
import CharityBanner from '../molecules/charity-banner';

const GroupCard = ({ group, loading, totalCards, position }) => {
  const isFirst = !loading && position === 1;
  const isLast = !loading && position === totalCards;
  let backgroundImage = '';
  let socialIcons = null;
  let startsInSevenDays = null;
  let nextEvent = {
    title: 'TBA',
    date: 'Click here for updates',
    url: loading ? '#' : group.url,
  };

  if (!loading) {
    if (group.path) {
      backgroundImage = `background-image: url('/${group.path}');`;
    }
    if (group.links && group.name) {
      socialIcons = <SocialIcons links={group.links} groupName={group.name} />;
    }

    if (Object.keys(group.nextEvent).length) {
      const { url, title } = group.nextEvent;
      const startDate = group.nextEvent.start_date;
      const sevenDays = moment().add(8, 'days');
      startsInSevenDays = moment(startDate).isBefore(sevenDays);

      nextEvent = {
        ...nextEvent,
        title,
        date: moment(startDate).format('MMM Do YYYY'),
        url: loading ? '#' : url,
      };
    }
  }

  let cardInfo = (
    <>
      <span className="loadingIcon">
        <LoadingIcon />
      </span>
      <style jsx>
        {`
          .loadingIcon {
            position: absolute;
            font-size: 100px;
            top: 50%;
            right: 50%;
            transform: translate(50%, -50%);
          }
        `}
      </style>
    </>
  );
  const charityBanner =
    !loading && group?.charity ? (
      <CharityBanner charity={group.charity} />
    ) : null;
  if (!loading) {
    cardInfo = (
      <>
        <h4>Next Event</h4>
        <h3>{group.name}</h3>
        <h5 className="event-title">{nextEvent.title}</h5>
        <span className="event-date">{nextEvent.date}</span>
        <style jsx>
          {`
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
          `}
        </style>
      </>
    );
  }

  const renderRibbon = (startsSoon) => {
    if (startsSoon) return <Ribbon text="Soon!" />;
    return null;
  };

  let firstLastClass = '';
  if (isFirst) {
    firstLastClass = 'first-card';
  } else if (isLast) {
    firstLastClass = 'last-card';
  }
  return (
    <>
      <Head>
        <link rel="preload" href={group.path} as="image" />
      </Head>
      <span className={`card-container ${firstLastClass}`}>
        {charityBanner}
        <a href={nextEvent.url} name={group.name}>
          <div className={`card ${startsInSevenDays ? 'glow' : ''}`}>
            {renderRibbon(startsInSevenDays)}
            {cardInfo}
            <span className="cardBackground" />
          </div>
        </a>
        {socialIcons}
        <style jsx>
          {`
            .card-container {
              position: absolute;
              display: inline-block;
              transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
              transform: translateX(-50%);
              left: 50%;
            }
            .first-card {
              transform: translateX(0%);
              left: 0%;
            }
            .last-card {
              transform: translateX(-100%);
              left: 100%;
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
              filter: drop-shadow(0 5px 3px rgba(0, 0, 0, 0.4))
                drop-shadow(0 -4px 3px rgba(0, 0, 0, 0.3));
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
              content: '';
              border-radius: 20px;
              position: absolute;
              z-index: -1;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              filter: drop-shadow(0 8px 6px rgba(0, 0, 0, 0.3))
                drop-shadow(0 0px 6px rgba(0, 0, 0, 0.2));
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
            .cardBackground {
              background: ${loading ? '#3d2769' : '#555'};
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
            .cardBackground:before {
              content: '';
              position: absolute;
              height: 100%;
              width: 100%;
              border-radius: 20px;
              background-color: rgba(0, 0, 0, 0.4);
            }

            @media (max-width: 900px) {
              .card-container {
                position: relative;
                margin: 0 auto;
                width: 80%;
                transform: translateX(0);
                left: 0%;
                margin-bottom: 75px;
              }
              .last-card {
                margin-bottom: 15px;
              }
              .card {
                width: auto;
                margin-bottom: 15px;
              }
              .card p {
                font-size: 26px;
              }
            }
          `}
        </style>
      </span>
    </>
  );
};

GroupCard.propTypes = {
  loading: bool.isRequired,
  totalCards: number.isRequired,
  position: number.isRequired,
  group: shape({
    url: string.isRequired,
    path: string.isRequired,
    links: shape({
      twitter: string.isRequired,
      discord: string,
      instagram: string,
      twitch: string,
    }).isRequired,
    name: string.isRequired,
    nextEvent: shape({
      url: string,
      start_date: string,
      title: string,
    }),
    charity: shape({
      url: string.isRequired,
      image: string.isRequired,
    }),
  }).isRequired,
};

export default GroupCard;
