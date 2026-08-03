import PropTypes from 'prop-types';
const {arrayOf, string} = PropTypes;
import {TwitchEmbed as ReactTwitchEmbed} from 'react-twitch-embed';
import TweetButton from './tweet-button.jsx';
import styles from './twitch-embed.module.css';

function TwitchEmbed({twitchUsername, twitter, groupTwitter, hashtags}) {
  const twitterUsername = twitter ? `@${twitter}` : twitchUsername;
  const tweetText = `I'm watching ${twitterUsername} stream for Extra Life raising money for charity! Come and support!`;
  const tweetUrl = `https://twitch.tv/${twitchUsername}`;
  const viaAccount = groupTwitter;
  return (
    <div className={styles.twitchWrapper}>
      <script async src="https://platform.twitter.com/widgets.js" />
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
          channel={twitchUsername}
          theme="dark"
          width="100%"
          height="100%"
          withChat={false}
        />
      </div>
    </div>
  );
}

TwitchEmbed.defaultProps = {
  twitter: null,
  groupTwitter: null,
  hashtags: [],
};

TwitchEmbed.propTypes = {
  twitchUsername: string.isRequired,
  twitter: string,
  groupTwitter: string,
  hashtags: arrayOf(string),
};

export default TwitchEmbed;
