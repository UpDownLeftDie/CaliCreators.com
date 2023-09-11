import { arrayOf, string } from 'prop-types';

function TweetButton({ url, hashtags, viaAccount, text }) {
  return (
    <span>
      <a
        href="https://twitter.com/intent/tweet"
        className="twitter-mention-button"
        data-show-count="false"
        data-text={text}
        data-url={url}
        data-hashtags={hashtags}
        data-via={viaAccount}
        target="_blank"
        rel="noreferrer"
      >
        Tweet
      </a>
      <style jsx>
        {`
          margin: 0 10px;
          vertical-align: middle;
        `}
      </style>
    </span>
  );
}
TweetButton.defaultProps = {
  hashtags: [],
  url: undefined,
  viaAccount: undefined,
};

TweetButton.propTypes = {
  hashtags: arrayOf(string),
  url: string,
  viaAccount: string,
  text: string.isRequired,
};

export default TweetButton;
