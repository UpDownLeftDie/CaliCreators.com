/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import App from 'next/app';
import Router from 'next/router';

import * as gtag from '../lib/gtag';

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <div className="container">
        <Component {...pageProps} />
        <div className="footer">
          <p>
            This site is not affiliated or endorsed by Twitch, Facebook, or
            Meetup.
          </p>
        </div>
        <style jsx global>
          {`
            html {
              min-height: 100%;
            }
            html,
            body,
            #__next {
              height: 100%;
              width: 100%;
              margin: 0;
              padding: 0;
            }
            body {
              background-color: #7230d3;
              color: #fff;
              font-family: 'Kanit', sans-serif, Avenir Next, Avenir, Helvetica,
                sans-serif;
            }
            .container::before {
              content: '';
              z-index: -999;
              background-image: url('/funky-lines.png');
              background-size: 700px;
              position: absolute;
              top: 0px;
              right: 0px;
              bottom: 0px;
              left: 0px;
              opacity: 0.25;
            }
            .container {
              position: relative;
              min-height: 100%;
              min-width: 350px;
              padding: 50px 16px 16px 16px;
              box-sizing: border-box;
              display: grid;
              grid-template-rows: 1fr auto;
              justify-items: center;
              overflow: hidden;
            }
            .footer {
              color: #fff;
              bottom: 0;
              width: 100%;
              text-align: center;
              font-weight: 100;
              font-style: italic;
              font-size: 14px;
              padding-top: 50px;
            }
            .footer > p {
              margin: 0;
            }
          `}
        </style>
      </div>
    );
  }
}

export default MyApp;
