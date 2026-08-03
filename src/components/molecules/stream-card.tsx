import Card from '../atoms/card';
import type {RibbonConfig} from '../atoms/ribbon-config';
import ProgressBar from '../atoms/progress-bar';
import {useIsMediaQuery} from '../../lib/hooks';
import ExtraLifeMemberButtons from './extralife-member-buttons';
import styles from './stream-card.module.css';

const defaultAvatar =
  'https://assets.donordrive.com/clients/extralife/img/avatar-constituent-default.gif';

const emptyLinks: {donate?: string} = {};

type Props = {
  avatarImageURL?: string;
  fundraisingGoal?: number;
  links?: {donate?: string};
  streamer: string;
  isStreamLive?: boolean;
  sumDonations?: number;
  timeEnd: string;
  timeStart: string;
  twitchUsername: string;
};

const dateOptions: Intl.DateTimeFormatOptions = {
  hour: 'numeric',
  minute: 'numeric',
  weekday: 'short',
  month: 'short',
  day: 'numeric',
};

export default function StreamCard({
  avatarImageURL = defaultAvatar,
  fundraisingGoal = 0,
  links = emptyLinks,
  streamer,
  isStreamLive = false,
  sumDonations = 0,
  timeEnd,
  timeStart,
  twitchUsername,
}: Readonly<Props>) {
  // Mobile-only live ribbon; SSR assumes desktop to avoid a false ribbon flash.
  const isMobile = useIsMediaQuery('(max-width: 599px)');
  const startDate = new Date(timeStart).toLocaleDateString(
    undefined,
    dateOptions,
  );
  const endDate = new Date(timeEnd).toLocaleDateString(undefined, dateOptions);

  const ribbon: RibbonConfig[] | undefined =
    isStreamLive && isMobile ? [{text: 'Live now!'}] : undefined;

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
              {fundraisingGoal > 0 ? (
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
            isColumnLayout={!isMobile}
          />
        </div>
      </Card>
    </div>
  );
}
