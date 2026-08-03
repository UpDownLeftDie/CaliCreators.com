import PropTypes from 'prop-types';
const {arrayOf, string} = PropTypes;
import styles from './tweet-button.module.css';

function TweetButton({url, hashtags, viaAccount, text}) {
  return (
    <span className={styles.tweetButton}>
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
