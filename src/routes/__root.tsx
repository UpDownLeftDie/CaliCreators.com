import {type ComponentType, type ReactNode, lazy, Suspense} from 'react';
import {
  ClientOnly,
  Link,
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from '@tanstack/react-router';
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import appCss from '../styles/globals.css?url';

type ForkRibbonProps = {
  children: ReactNode;
  href: string;
  target?: string;
  position?: string;
};

const GitHubForkRibbon = lazy(async () => {
  const mod = await import('react-github-fork-ribbon');
  const exported = mod as unknown as {
    default:
      | ComponentType<ForkRibbonProps>
      | {default: ComponentType<ForkRibbonProps>};
  };
  return {
    default: (typeof exported.default === 'function'
      ? exported
      : exported.default
    ).default as ComponentType<ForkRibbonProps>,
  };
});

config.autoAddCss = false;

const siteUrl = 'https://calicreators.com';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {charSet: 'utf8'},
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, minimum-scale=1',
      },
      {name: 'color-scheme', content: 'dark'},
      {
        name: 'description',
        content:
          "We're the meetup groups for Twitch, Facebook, streamers, and gamers in California! Find the closest one to you or come to all our events!",
      },
      {name: 'referrer', content: 'origin-when-cross-origin'},
      {property: 'og:url', content: siteUrl},
      {property: 'og:locale', content: 'en_US'},
      {property: 'og:type', content: 'website'},
      {property: 'og:image', content: `${siteUrl}/twitchsocal.gif`},
      {property: 'og:image:width', content: '800'},
      {property: 'og:image:height', content: '800'},
      {
        name: 'keywords',
        content:
          'CaliCreators, California Creators, Twitch, YouTube, live streaming, twitch streaming, twitch meetup, twitchcon, twitch convention, twitch events, twitch meetup california, twitch los angeles, twitch orange county, twitch oc, twitch events near me',
      },
      {title: 'Cali Creators MeetUps'},
    ],
    links: [
      {rel: 'stylesheet', href: appCss},
      {rel: 'apple-touch-icon', href: '/apple-touch-icon.png'},
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {rel: 'manifest', href: '/site.webmanifest'},
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});

function NotFound() {
  return (
    <div className="hero">
      <div className="title-wrapper">
        <h1 className="title">404</h1>
      </div>
      <p className="description">That page doesn’t exist.</p>
      <p className="description">
        <Link to="/" style={{color: '#fff'}}>
          Back to Cali Creators
        </Link>
      </p>
    </div>
  );
}

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({children}: Readonly<{children: ReactNode}>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <ClientOnly fallback={null}>
          <Suspense fallback={null}>
            <GitHubForkRibbon
              href="https://github.com/UpDownLeftDie/CaliCreators.com"
              target="_blank"
              position="right"
            >
              Contribute on GitHub!
            </GitHubForkRibbon>
          </Suspense>
        </ClientOnly>
        <div className="site-shell">
          {children}
          <div className="footer">
            <p>
              This site is not affiliated or endorsed by Twitch, Facebook, or
              Meetup.
            </p>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
