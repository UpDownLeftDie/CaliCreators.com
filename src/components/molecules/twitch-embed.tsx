import {useEffect} from 'react';
import {TwitchEmbed as ReactTwitchEmbed} from 'react-twitch-embed';
import TweetButton from './tweet-button';
import styles from './twitch-embed.module.css';

const twitterWidgetsSrc = 'https://platform.twitter.com/widgets.js';
const emptyHashtags: string[] = [];

function ensureTwitterWidgetsScript() {
  const existing = document.querySelector<HTMLScriptElement>(
    `script[src="${CSS.escape(twitterWidgetsSrc)}"]`,
  );
  if (existing !== null) {
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = twitterWidgetsSrc;
  document.body.append(script);
}

type Props = {
  twitchUsername: string;
  twitter?: string;
  groupTwitter?: string;
  hashtags?: string[];
};

export default function TwitchEmbed({
  twitchUsername,
  twitter,
  groupTwitter,
  hashtags = emptyHashtags,
}: Readonly<Props>) {
  useEffect(() => {
    ensureTwitterWidgetsScript();
  }, []);

  const twitterUsername =
    typeof twitter === 'string' && twitter !== ''
      ? `@${twitter}`
      : twitchUsername;
  const tweetText = `I'm watching ${twitterUsername} stream for Extra Life raising money for charity! Come and support!`;
  const tweetUrl = `https://twitch.tv/${twitchUsername}`;
  const viaAccount =
    typeof groupTwitter === 'string' && groupTwitter !== ''
      ? groupTwitter
      : undefined;

  return (
    <div className={styles.twitchWrapper}>
      <h2>LIVE NOW:</h2>
      {'  '}
      <h3>
        <a
          href={`https://www.twitch.tv/${twitchUsername}`}
          target="_blank"
          rel="noreferrer"
        >
          {twitchUsername}
        </a>
        <TweetButton
          text={tweetText}
          hashtags={hashtags}
          url={tweetUrl}
          viaAccount={viaAccount}
        />
      </h3>
      <div className={styles.twitchEmbedWrapper}>
        <ReactTwitchEmbed
          darkMode
          channel={twitchUsername}
          height="100%"
          width="100%"
          withChat={false}
        />
      </div>
    </div>
  );
}
