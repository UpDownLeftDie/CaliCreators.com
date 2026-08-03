import styles from './tweet-button.module.css';

const emptyHashtags: string[] = [];

type Props = {
  url?: string;
  hashtags?: string[];
  viaAccount?: string;
  text: string;
};

function buildTweetIntentUrl({
  text,
  url,
  hashtags,
  viaAccount,
}: Readonly<Props>): string {
  const parameters = new URLSearchParams();
  parameters.set('text', text);

  if (typeof url === 'string' && url !== '') {
    parameters.set('url', url);
  }

  if (hashtags !== undefined && hashtags.length > 0) {
    parameters.set('hashtags', hashtags.join(','));
  }

  if (typeof viaAccount === 'string' && viaAccount !== '') {
    parameters.set('via', viaAccount);
  }

  return `https://twitter.com/intent/tweet?${parameters.toString()}`;
}

export default function TweetButton({
  url,
  hashtags = emptyHashtags,
  viaAccount,
  text,
}: Readonly<Props>) {
  const href = buildTweetIntentUrl({text, url, hashtags, viaAccount});

  return (
    <span className={styles.tweetButton}>
      <a
        href={href}
        className="twitter-mention-button"
        data-show-count="false"
        data-text={text}
        data-url={url}
        data-hashtags={hashtags.join(',')}
        data-via={viaAccount}
        target="_blank"
        rel="noreferrer"
      >
        Tweet
      </a>
    </span>
  );
}
