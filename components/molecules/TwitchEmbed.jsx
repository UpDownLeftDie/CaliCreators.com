import { arrayOf, string } from 'prop-types';
import { TwitchEmbed as ReactTwitchEmbed } from 'react-twitch-embed';
import TweetButton from './TweetButton';

const TwitchEmbed = ({ twitchUsername, twitter, groupTwitter, hashtags }) => {
  const twitterUsername = twitter ? `@${twitter}` : twitchUsername;
  const tweetText = `I'm watching ${twitterUsername} streaming for Extra Life raising money for charity! Come and support!`;
  const tweetUrl = `https://twitch.tv/${twitchUsername}`;
  const viaAccount = groupTwitter;
  return (
    <div className="twitchWrapper">
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      />
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
      <div className="twitchEmbedWrapper">
        <ReactTwitchEmbed
          channel={twitchUsername}
          theme="dark"
          width="100%"
          height="100%"
          withChat={false}
        />
      </div>
      <style jsx>
        {`
          h2,
          h3 {
            display: inline-block;
            vertical-align: middle;
          }
          a {
            color: white;
          }
          .twitchWrapper {
            margin: 40px 0 0 0;
            width: 100%;
            max-width: 622px;
          }
          .twitchEmbedWrapper {
            height: 100%;
            width: 100%;
            height: 350px;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 8px 10px rgba(0, 0, 0, 0.7);
          }
        `}
      </style>
    </div>
  );
};

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
