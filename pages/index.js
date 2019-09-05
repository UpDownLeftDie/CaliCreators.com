import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Card from '../components/card'

const Home = () => (
  <div style={{
    minHeight: '100%', position: 'absolute', width: '100%'
  }}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>TwtichSoCal.com</title>
      <link href="https://fonts.googleapis.com/css?family=Kanit:300,400,700|Knewave&display=swap" rel="stylesheet"></link>
    </Head>

    <div className='hero'>
      <h1 className='title'>Twitch SoCal</h1>
      <p className='description'>
        We're the meetup group for Twitch in Southern California!<br/>Find the closest one to you or come to all our events!
      </p>

      <div className='row'>
        <Card name={"Twitch La"} /> 
        <Card name={"OC Streamers"} /> 
        <Card name={"Twitch SD"} /> 
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
        background-image: url('/static/cubes_@2X.png');
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
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
        font-family: 'Knewave', sans-serif;
        text-shadow: 0 5px 5px rgba(0,0,0,0.4);
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
    `}</style>
  </div>
)

export default Home
