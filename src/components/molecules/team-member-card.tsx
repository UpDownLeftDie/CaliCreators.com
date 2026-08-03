import type {ReactNode} from 'react';
import Card from '../atoms/card';
import ProgressBar from '../atoms/progress-bar';
import type {RibbonConfig} from '../atoms/ribbon-config';
import ExtraLifeMemberButtons from './extralife-member-buttons';
import styles from './team-member-card.module.css';

type Links = {
  donate?: string;
  page?: string;
  stream?: string;
};

const emptyLinks: Links = {};

type LinkWrapperProps = {
  children: ReactNode;
  links?: Links;
  isStreamLive?: boolean;
  twitchUsername?: string;
};

function LinkWrapper({
  children,
  links = emptyLinks,
  isStreamLive = false,
  twitchUsername = '',
}: Readonly<LinkWrapperProps>) {
  if (links.page === undefined || links.page === '') {
    return <div className={styles.link}>{children}</div>;
  }

  const href =
    isStreamLive && twitchUsername !== ''
      ? `https://www.twitch.tv/${twitchUsername}`
      : links.page;

  return (
    <a href={href} target="_blank" rel="noreferrer" className={styles.link}>
      {children}
    </a>
  );
}

type Props = {
  avatarImageURL: string;
  displayName: string;
  fundraisingGoal: number;
  isTeamCaptain?: boolean;
  links?: Links;
  isStreamLive?: boolean;
  twitchUsername?: string;
  sumDonations?: number;
};

function buildRibbons(
  isTeamCaptain: boolean,
  isStreamLive: boolean,
): RibbonConfig[] {
  const ribbons: RibbonConfig[] = [];

  if (isTeamCaptain) {
    ribbons.push({
      text: 'Team Captain',
      color: '#e0bd00',
    });
  }

  if (isStreamLive) {
    ribbons.push({
      text: 'Live now!',
      isLeftSide: true,
    });
  }

  return ribbons;
}

export default function TeamMemberCard({
  avatarImageURL,
  displayName,
  fundraisingGoal,
  isTeamCaptain = false,
  links = emptyLinks,
  isStreamLive = false,
  twitchUsername,
  sumDonations = 0,
}: Readonly<Props>) {
  const ribbons = buildRibbons(isTeamCaptain, isStreamLive);

  return (
    <Card ribbon={ribbons} isGlowing={isStreamLive}>
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
            progress={sumDonations}
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
