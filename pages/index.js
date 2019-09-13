import React from 'react'
import Head from 'next/head'
import Card from '../components/card'
import fetch from 'isomorphic-unfetch';

const siteTitle = "Twitch SoCal";
const description = "We're the meetup groups for Twitch in Southern California!<br/>Find the closest one to you or come to all our events!";
const url = "https://twitchsocal.com";

const Home = ({upcomingEvents}) => (
  <div style={{
    minHeight: '100%', position: 'absolute', width: '100%'
  }}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{siteTitle}.com</title>
      <link href="https://fonts.googleapis.com/css?family=Kanit:300,400,700|Knewave&display=swap" rel="stylesheet"></link>
      <meta name="Description" content={description.replace('<br/>', ' ')}></meta>
      <meta property="og:title" content={siteTitle}></meta>
      <meta property="og:url" content={url}></meta>
      <meta property="og:image" content={`${url}/static/twitchsocal.gif`}></meta>
      <meta property="og:image:width" content="800"></meta>
      <meta property="og:image:height" content="800"></meta>
      <meta property="og:description" content={description.replace('<br/>', ' ')}></meta>
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
    </Head>

    <div className='hero'>
      <span className="title-wrapper">
        <h1 className='title'>{siteTitle}</h1>
      </span>
      <p className='description' dangerouslySetInnerHTML={{__html: description}}></p>

      <div className='row'>
        <Card groupName={"Twitch La"} city={"Los Angeles"} href={"https://meetups.twitch.tv/los-angeles/"} upcomingEvents={upcomingEvents} /> 
        <Card groupName={"OC Streamers"} city={"Orange"} href={"https://www.meetup.com/ocstreamers"} upcomingEvents={upcomingEvents} /> 
        <Card groupName={"Twitch SD"} city={"San Diego"} href={"https://meetups.twitch.tv/san-diego/"} upcomingEvents={upcomingEvents} /> 
      </div>
    </div>
    <div className='footer'>
        <p>This site is not affiliated or endorsed by Twitch or Meetup.</p>
    </div>

    <style jsx>{`
      :global(html, body) {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      :global(body) {
        background-color: #5F3F9F;
        background-image: url('/static/cubes_@2X.webp');
        font-family: 'Kanit', sans-serif, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      .hero {
        width: 100%;
        color: #fff;
      }
      .title {
        margin: 0;
        width: 100%;
        margin-top: 80px;
        line-height: 1.15;
        font-size: 48px;
        font-family: 'Knewave', sans-serif;
        animation: colorwipe 6s infinite;
        background: rgb(255,255,255);
        background: linear-gradient(15deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 15%, rgba(131,58,180,1) 25%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 75%, rgba(255,255,255,1) 80%, rgba(255,255,255,1) 100%);
        background-size: 900%;
        background-position: 0%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .title-wrapper {
        filter: drop-shadow(0 5px 5px rgba(0,0,0,0.4));
        display: block;
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
        max-width: 880px;
        margin: 40px auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .footer {
        color: #ddd;
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
        0% { background-position: 0%; }
        35% { background-position: 0%; }
        100% {background-position: 100%; }
      }
    `}</style>
  </div>
)

Home.getInitialProps = async() => {
  const meetupComReq = fetch('https://api.meetup.com/ocstreamers/events?&sign=true&photo-host=secure&page=5&has_ended=false',
    {
      mode: 'cors',
    });

  const twitchReq = fetch(
    'https://meetups.twitch.tv/api/search/?result_types=upcoming_event&country_code=Earth', 
    {
      mode: 'cors',
    });
  
  const meetupCom = await meetupComReq;
  const twitch = await twitchReq;

  const meetupComJson = await meetupCom.json();
  const twitchJson = await twitch.json();
  const upcomingEvents = mergeEventLists(twitchJson, meetupComJson);
  return { upcomingEvents }
}

function mergeEventLists(twitch, meetup) {
  let eventList = twitch.results;
  const meetupList = meetup.map(event => {
    const city = event.group.localized_location.split(',')[0];
    return {
      chapter: {
        city
      },
      url: event.link,
      start_date: event.local_date,
      title: event.name
    }
  });
  
  return eventList.concat(meetupList);
}

export default Home
