import React from 'react'
import Link from 'next/link'

const links = [
  { href: 'https://meetups.twitch.tv/los-angeles/', name: 'Twitch LA' },
  { href: 'https://www.meetup.com/ocstreamers', name: 'OC Streamers' },
  { href: 'https://meetups.twitch.tv/san-diego/', name: 'Twitch SD' }
];

const images = [
  {name: 'Twitch LA', path: 'la.jpg'},
  {name: 'OC Streamers', path: 'oc.jpg'},
  {name: 'Twitch SD', path: 'sd.jpg'}
];

const Card = (props) => {
  let link = links.find(l => l.name.toLowerCase() === props.name.toLowerCase());
  let img = images.find(i => i.name.toLowerCase() === props.name.toLowerCase());
  if (!link) link = { href:'https://meetups.twitch.tv/', name: 'Twitch Meetups' };

  let backgroundImage = '';
  if (img) backgroundImage = `background-image: url('/static/${img.path}');`;

  let nextEventDate = 'TBD';
  // TODO: get next event info

  return (
    <>
      <Link href={link.href} name={link.name}>
        <a className='card'>
          <h3>{link.name}</h3>
          <h4>Next Event</h4>
          <p>{nextEventDate}</p>
        </a>
      </Link>  
      <style jsx>{`
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
        .card p {
          margin: 0;
          padding: 6px 0 0;
          font-size: 18px;
          color: #fff;
          font-weight: 400;
        }
        @media (max-width: 840px) {
          .card {
            width: 80%;
            margin-bottom: 25px;
          }
          .card h3 {
            font-size: 30px;
          }
          .card h4 {
            font-size: 28px;
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
