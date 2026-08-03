import styles from './charity-banner.module.css';

type Props = {
  charity: {
    imageKey: string;
    url: string;
  };
};

function resolveImage(imageKey: string): {src: string; alt: string} {
  if (imageKey === 'extralife') {
    return {src: '/extralife-icon.png', alt: 'Extra Life'};
  }

  return {src: imageKey, alt: 'Charity'};
}

export default function CharityBanner({charity}: Readonly<Props>) {
  if (charity.url === '') {
    return null;
  }

  const {url} = charity;
  const {src, alt} = resolveImage(charity.imageKey);
  const isInternalLink = !url.toLowerCase().startsWith('http');

  const content = (
    <>
      <img src={src} alt={alt} width={254} height={213} />
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
