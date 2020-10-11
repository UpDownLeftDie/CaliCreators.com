import App from 'next/app';
import Router from 'next/router';

import * as gtag from '../lib/gtag';

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Component {...pageProps} />
        <style jsx global>{`
          html,
          body {
            height: 100%;
            margin: 0;
            padding: 0;
          }
          body {
            background-color: #7230d3;
            font-family: 'Kanit', sans-serif, Avenir Next, Avenir, Helvetica,
              sans-serif;
            overflow: hidden;
          }
          body::before {
            content: '';
            background-image: url('/funky-lines.png');
            background-size: 700px;
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            opacity: 0.25;
          }
        `}</style>
      </>
    );
  }
}

export default MyApp;
