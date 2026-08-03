import {
  faDiscord,
  faInstagram,
  faTwitch,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
const {shape, string} = PropTypes;
import styles from './social-icons.module.css';

const brands = {
  discord: faDiscord,
  twitter: faTwitter,
  twitch: faTwitch,
  instagram: faInstagram,
};

const siteUrls = {
  twitter: 'https://www.twitter.com',
  twitch: 'https://www.twitch.tv',
  discord: 'https://discord.gg',
  instagram: 'https://www.instagram.com',
};

function SocialIcons({links, groupName}) {
  const icons = Object.entries(links).map((link) => (
    <a
      key={link[0]}
      href={`${siteUrls[link[0]]}/${link[1]}`}
      aria-label={`${groupName}'s ${link[0]}`}
      title={link[0].charAt(0).toUpperCase() + link[0].slice(1)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={brands[link[0]]} />
    </a>
  ));
  return <div className={styles.socialicons}>{icons}</div>;
}

SocialIcons.propTypes = {
  links: shape({
    twitter: string.isRequired,
    instagram: string,
    discord: string,
    twitch: string,
  }).isRequired,
  groupName: string.isRequired,
};

export default SocialIcons;
