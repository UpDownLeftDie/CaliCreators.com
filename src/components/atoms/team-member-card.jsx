import PropTypes from 'prop-types';
const {bool, node, number, shape, string} = PropTypes;
import Card from './card.jsx';
import ExtraLifeMemberButtons from './extralife-member-buttons.jsx';
import ProgressBar from './progress-bar.jsx';
import styles from './team-member-card.module.css';

function LinkWrapper({children, links, isStreamLive, twitchUsername}) {
  if (links?.page === undefined || links.page === '') {
    return children;
  }

  const href =
    isStreamLive && twitchUsername
      ? `https://www.twitch.tv/${twitchUsername}`
      : links.page;

  return (
    <a href={href} target="_blank" rel="noreferrer" className={styles.link}>
      {children}
    </a>
  );
}

LinkWrapper.defaultProps = {
  links: {},
  isStreamLive: false,
  twitchUsername: '',
};

LinkWrapper.propTypes = {
  children: node.isRequired,
  links: shape({
    page: string,
  }),
  isStreamLive: bool,
  twitchUsername: string,
};

function TeamMemberCard({
  avatarImageURL,
  displayName,
  fundraisingGoal,
  isTeamCaptain,
  links,
  isStreamLive,
  twitchUsername,
  sumDonations,
}) {
  let ribbon = {};
  if (isTeamCaptain) {
    ribbon = {
      ...ribbon,
      text: 'Team Captain',
      color: '#e0bd00',
    };
  }

  if (isStreamLive) {
    ribbon = {
      ...ribbon,
      color: undefined,
      text: 'Live now!',
      isLeftSide: true,
    };
  }

  return (
    <Card ribbon={ribbon} isGlowing={isStreamLive}>
      <div className={styles.teamMemberCard}>
        <LinkWrapper
          links={links}
          isStreamLive={isStreamLive}
          twitchUsername={twitchUsername}
        >
          <img src={avatarImageURL} alt={`${displayName}'s profile`} />
          <div className={styles.name}>{displayName}</div>
          <ProgressBar
            isMoney
            isDisplayProgress
            progress={sumDonations || 0}
            goal={fundraisingGoal}
            height={20}
            isDisplayPercent={false}
          />
        </LinkWrapper>
        <ExtraLifeMemberButtons links={links} isStreamLive={isStreamLive} />
      </div>
    </Card>
  );
}

TeamMemberCard.defaultProps = {
  isTeamCaptain: false,
  links: {},
  isStreamLive: false,
  sumDonations: 0,
  twitchUsername: null,
};

TeamMemberCard.propTypes = {
  avatarImageURL: string.isRequired,
  displayName: string.isRequired,
  fundraisingGoal: number.isRequired,
  sumDonations: number,
  isTeamCaptain: bool,
  links: shape({
    donate: string,
    page: string,
    stream: string,
  }),
  isStreamLive: bool,
  twitchUsername: string,
};

export default TeamMemberCard;
