import PropTypes from 'prop-types';
const {bool, shape, string} = PropTypes;
import styles from './extralife-member-buttons.module.css';

const getButton = (link, text, variantClass) => (
  <a
    href={link}
    className={`${styles.memberButton} ${variantClass}`}
    target="_blank"
    rel="noreferrer"
  >
    {text}
  </a>
);

const getTwitchButton = (link) => getButton(link, 'Twitch', styles.twitch);
const getDonateButton = (link) => getButton(link, 'Donate', styles.donate);

function ExtraLifeMemberButtons({links, isStreamLive, isColumnLayout}) {
  if (!links?.donate && !links?.stream) {
    return null;
  }

  const donateButton = links?.donate ? getDonateButton(links.donate) : null;
  let twitchButton = null;
  if (!isStreamLive && links?.stream) {
    const match = links.stream.match(/channel=(?<channel>.*)/v);
    const channel = match?.groups?.channel;
    if (typeof channel === 'string' && channel !== '') {
      twitchButton = getTwitchButton(`https://www.twitch.tv/${channel}`);
    }
  }

  return (
    <div
      className={`${styles.buttonContainer} ${isColumnLayout ? styles.column : ''}`}
    >
      {twitchButton}
      {donateButton}
    </div>
  );
}

ExtraLifeMemberButtons.defaultProps = {
  links: {},
  isStreamLive: false,
  isColumnLayout: false,
};

ExtraLifeMemberButtons.propTypes = {
  links: shape({
    donate: string,
    stream: string,
  }),
  isStreamLive: bool,
  isColumnLayout: bool,
};

export default ExtraLifeMemberButtons;
