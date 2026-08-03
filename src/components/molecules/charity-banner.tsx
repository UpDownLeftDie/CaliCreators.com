import styles from './charity-banner.module.css';

type Props = {
  charity: {
    internalPage: boolean;
    imageKey: string;
    url: string;
  };
};

function CharityBanner({charity}: Readonly<Props>) {
  if (charity.url === '') {
    return null;
  }

  const {url} = charity;
  const image =
    charity.imageKey === 'extralife' ? '/extralife-icon.png' : charity.imageKey;

  const isInternalLink = !url.toLowerCase().startsWith('http');

  const content = (
    <>
      <img src={image} alt="Extra Life" width={254} height={213} />
      <span>Extra Life Team</span>
    </>
  );

  if (isInternalLink) {
    return (
      <a href={url} className={styles.charityWrapper}>
        {content}
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={styles.charityWrapper}
    >
      {content}
    </a>
  );
}

export default CharityBanner;
