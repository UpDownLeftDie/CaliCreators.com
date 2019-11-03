// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../lib/gtag";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preconnect"
            href="https://shielded-plateau-06167.herokuapp.com"
          />
          <link rel="preconnect" href="https://stats.g.doubleclick.net" />
          <link rel="preconnect" href="https://meetups.twitch.tv" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `
            }}
          />
          <link
            href="https://fonts.googleapis.com/css?family=Kanit:300,400,700|Knewave&display=swap"
            rel="stylesheet"
          ></link>
          <script src="https://kit.fontawesome.com/d03f0d01ad.js"></script>
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
