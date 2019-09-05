import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
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
        <Link href='https://meetups.twitch.tv/los-angeles/'>
          <a className='card'>
            <h3>Twitch LA</h3>
            <h4>Next Event</h4>
            <p>TBD</p>
          </a>
        </Link>
        <Link href='https://www.meetup.com/ocstreamers'>
          <a className='card'>
            <h3>OC Streamers</h3>
            <h4>Next Event</h4>
            <p>9/21<br />Beach Cleanup</p>
          </a>
        </Link>
        <Link href='https://meetups.twitch.tv/san-diego/'>
          <a className='card'>
            <h3>Twitch SD</h3>
            <h4>Next Event</h4>
            <p>TDB</p>
          </a>
        </Link>
      </div>
    </div>

    <style jsx>{`
      :global(body) {
        background-color: #5F3F9F;
        margin: 0;
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
      .card {
        padding: 18px;
        width: 180px;
        height: 300px;
        color: #fff;
        text-align: left;
        text-decoration: none;
        background: #660000;
        transition: filter 150ms, transform 200ms;
        filter: drop-shadow(0 5px 3px rgba(0,0,0,0.4));
        border-radius: 20px;
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
    `}</style>
  </div>
)

export default Home
