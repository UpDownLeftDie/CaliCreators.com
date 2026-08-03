import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import type { Metadata, Viewport } from "next";
import { Kanit, Knewave } from "next/font/google";
import type { ReactNode } from "react";
import GitHubForkRibbon from "react-github-fork-ribbon";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-kanit",
  display: "swap",
});

const knewave = Knewave({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-knewave",
  display: "swap",
});

const siteUrl = "https://calicreators.com";

export const metadata: Metadata = {
  title: {
    template: "%s | CaliCreators",
    default: "Cali Creators MeetUps",
  },
  description:
    "We're the meetup groups for Twitch, Facebook, streamers, and gamers in California! Find the closest one to you or come to all our events!",
  referrer: "origin-when-cross-origin",
  openGraph: {
    url: siteUrl,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/twitchsocal.gif`,
        width: 800,
        height: 800,
      },
    ],
  },
  keywords: [
    "CaliCreators",
    "California Creators",
    "Twitch",
    "YouTube",
    "live streaming",
    "twitch streaming",
    "twitch meetup",
    "twitchcon",
    "twitch convention",
    "twitch events",
    "twitch meetup california",
    "twitch los angeles",
    "twitch orange county",
    "twitch oc",
    "twitch events near me",
  ],
  icons: {
    apple: "/apple-touch-icon.png",
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  colorScheme: "dark",
  width: "device-width",
  minimumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${kanit.variable} ${knewave.variable}`}>
      <body className={kanit.className}>
        <GitHubForkRibbon
          href="https://github.com/UpDownLeftDie/CaliCreators.com"
          target="_blank"
          position="right"
        >
          Contribute on GitHub!
        </GitHubForkRibbon>
        <div className="site-shell">
          {children}
          <div className="footer">
            <p>
              This site is not affiliated or endorsed by Twitch, Facebook, or
              Meetup.
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
