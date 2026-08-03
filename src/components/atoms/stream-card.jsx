import PropTypes from 'prop-types';
const {string, bool, shape, number} = PropTypes;
import useElementSize from '../../lib/hooks';
import Card from './card.jsx';
import ExtraLifeMemberButtons from './extralife-member-buttons.jsx';
import ProgressBar from './progress-bar.jsx';
import styles from './stream-card.module.css';

function StreamCard({
  avatarImageURL,
  fundraisingGoal,
  links,
  streamer,
  isStreamLive,
  sumDonations,
  timeEnd,
  timeStart,
  twitchUsername,
}) {
  const windowSize = useElementSize(globalThis);
  const breakPoint = 600;
  const isPastBreakPoint = windowSize.width < breakPoint;
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  };
  let startDate = null;
  let endDate = null;
  {
    const temporaryStart = new Date(timeStart);
    const temporaryEnd = new Date(timeEnd);
    startDate = temporaryStart.toLocaleDateString(undefined, options);
    endDate = temporaryEnd.toLocaleDateString(undefined, options);
  }

  let ribbon = {};
  if (isStreamLive && isPastBreakPoint) {
    ribbon = {
      ...ribbon,
      text: 'Live now!',
    };
  }

  const liveClass = isStreamLive ? ` ${styles.isLive}` : '';

  return (
    <div className={`${styles.cardWrapper}${liveClass}`}>
      <Card isPulsing={isStreamLive} ribbon={ribbon}>
        <div className={styles.streamCard}>
          <a
            className={styles.link}
            target="_blank"
            rel="noreferrer"
            href={`https://www.twitch.tv/${twitchUsername}`}
          >
            <img
              className={styles.streamerAvatar}
              src={avatarImageURL}
              alt={`${streamer}'s profile`}
            />
            <div className={styles.center}>
              <h3>{streamer}</h3>
              <div className={styles.times}>
                <div>
                  <b>Starts: </b>
                  <u>{startDate}</u>
                </div>
                <div>
                  <b>&nbsp;Till: </b>
                  <u>{endDate}</u>
                </div>
              </div>
              {fundraisingGoal ? (
                <ProgressBar
                  isInlineText
                  isMoney
                  isDisplayProgress
                  progress={sumDonations}
                  goal={fundraisingGoal}
                  goalText=""
                  progressText=""
                  width={75}
                  height={30}
                />
              ) : null}
            </div>
          </a>
          <ExtraLifeMemberButtons
            isStreamLive={isStreamLive}
            links={{donate: links.donate}}
            isColumnLayout={!isPastBreakPoint}
          />
        </div>
      </Card>
    </div>
  );
}

StreamCard.defaultProps = {
  isStreamLive: false,
  sumDonations: 0,
  avatarImageURL:
    'https://assets.donordrive.com/clients/extralife/img/avatar-constituent-default.gif',
  fundraisingGoal: 0,
  links: {},
};

StreamCard.propTypes = {
  avatarImageURL: string,
  fundraisingGoal: number,
  links: shape({
    donate: string,
  }),
  streamer: string.isRequired,
  isStreamLive: bool,
  sumDonations: number,
  timeEnd: string.isRequired,
  timeStart: string.isRequired,
  twitchUsername: string.isRequired,
};

export default StreamCard;
