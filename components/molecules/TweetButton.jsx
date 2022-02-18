import { arrayOf, string } from 'prop-types';

const TweetButton = ({ url, hashtags, viaAccount, text }) => (
  // let parameters = {
  //   text,
  // };
  // if (url)
  //   parameters = {
  //     ...parameters,
  //     url,
  //   };
  // if (viaAccount)
  //   parameters = {
  //     ...parameters,
  //     via: viaAccount,
  //   };
  // if (hashtags)
  //   parameters = {
  //     ...parameters,
  //     hashtags: hashtags.join(','),
  //   };
  // const urlParameters = Object.entries(parameters)
  //   .map((parameter) => {
  //     return `${parameter[0]}=${encodeURIComponent(parameter[1])}`;
  //   })
  //   .join('&');
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
