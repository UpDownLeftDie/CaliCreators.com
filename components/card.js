import React from 'react'
import moment from 'moment'
// import Link from 'next/link'

const images = [
  {groupName: 'Twitch LA', path: 'la.webp'},
  {groupName: 'OC Streamers', path: 'oc.webp'},
  {groupName: 'Twitch SD', path: 'sd.webp'}
];

const findNextEvent = (city, upcomingEvents) => {
  return upcomingEvents.find(event => {
    if (event.chapter.city === city) return true;
    return false;
  })
}

const Card = ({groupName, city, href, upcomingEvents}) => {
  let img = images.find(i => i.groupName.toLowerCase() === groupName.toLowerCase());
  let backgroundImage = '';
  if (img) backgroundImage = `background-image: url('/static/${img.path}');`;

  const nextEventInfo = findNextEvent(city, upcomingEvents);
  let nextEvent = {
    title: 'TBA',
    date: 'Click here for updates',
    url: href
  }
  if (nextEventInfo) {
    const {url, start_date, title} = nextEventInfo;

    nextEvent = {
      ...nextEvent,
      title,
      date: moment(start_date).format("MMM Do YYYY"),
      url
    }
  }

  return (
    <>
      <a href={nextEvent.url} name={groupName}>
        <div className='card'>
          <h3>{groupName}</h3>
          <h4>Next Event</h4>
          <h5 className="event-title">{nextEvent.title}</h5>
          <span className="event-date">{nextEvent.date}</span>
        </div>
      </a>  
      <style jsx>{`
        a:link { text-decoration: none }
        .card {
          padding: 18px;
          width: 200px;
          height: 300px;
          color: #fff;
          text-align: left;
          text-decoration: none;
          background: #660000;
          ${backgroundImage}
          background-size: cover;
          background-position: center;
          transition: filter 150ms, transform 200ms;
          filter: drop-shadow(0 5px 3px rgba(0,0,0,0.4));
          border-radius: 20px;
          text-shadow: 0 2px 10px rgba(0,0,0,0.8);
          word-break: break-word;
        }
        .card:hover {
          transform: scale(1.06);
          filter: drop-shadow(0 8px 6px rgba(0,0,0,0.3));
        }
        .card h3 {
          margin: 0;
          color: #fff;
          font-size: 22px;
          font-weight: 700;
          position: absolute;
          bottom: 10px;
        }
        .card h4 {
          font-weight: 700;
          font-size: 20px;
          margin: 12px 0 0;
        }
        .card .event-date {
          font-size: 18px;
          color: #fff;
          font-weight: 400;
          text-decoration: overline;
          margin-top: 8px;
          display: block;
        }
        .card .event-title {
          font-weight: 700;
          font-size: 2em;
          margin: 12px 0 0;
          overflow: hidden;
          max-height: 180px;
          line-height: 35px;
        }
        @media (max-width: 840px) {
          a { width: 80% }
          .card {
            width: auto;
            margin-bottom: 25px;
          }
          .card h3 {
            font-size: 30px;
          }
          .card h4 {
            font-size: 28px;
          }
          .card .event-title {
            max-height: 145px;
          }
          .card p {
            font-size: 26px;
          }
      }
      `}</style>
    </>
  )
};

export default Card
