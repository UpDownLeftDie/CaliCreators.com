import {
  faDiscord,
  faInstagram,
  faTwitch,
  faTwitter,
  type IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styles from './social-icons.module.css';

const brands: Record<string, IconDefinition> = {
  discord: faDiscord,
  twitter: faTwitter,
  twitch: faTwitch,
  instagram: faInstagram,
};

const siteUrls: Record<string, string> = {
  twitter: 'https://www.twitter.com',
  twitch: 'https://www.twitch.tv',
  discord: 'https://discord.gg',
  instagram: 'https://www.instagram.com',
};

type Props = {
  links: {
    twitter?: string;
    instagram?: string;
    discord?: string;
    twitch?: string;
  };
  groupName: string;
};

export default function SocialIcons({links, groupName}: Readonly<Props>) {
  const icons = Object.entries(links).flatMap(([key, handle]) => {
    if (typeof handle !== 'string' || handle === '') {
      return [];
    }

    const icon = Object.hasOwn(brands, key) ? brands[key] : undefined;
    const baseUrl = Object.hasOwn(siteUrls, key) ? siteUrls[key] : undefined;
    if (icon === undefined || baseUrl === undefined) {
      return [];
    }

    return [
      <a
        key={key}
        href={`${baseUrl}/${handle}`}
        aria-label={`${groupName}'s ${key}`}
        title={key.charAt(0).toUpperCase() + key.slice(1)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={icon} />
      </a>,
    ];
  });

  return <div className={styles.socialicons}>{icons}</div>;
}
