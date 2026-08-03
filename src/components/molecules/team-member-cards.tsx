import TeamMemberCard from './team-member-card';
import styles from './team-member-cards.module.css';

type TeamMember = {
  avatarImageURL?: string;
  displayName: string;
  fundraisingGoal?: number;
  isTeamCaptain?: boolean;
  links?: {
    donate?: string;
    page?: string;
    stream?: string;
  };
  streamIsLive?: boolean;
  sumDonations?: number;
  twitchUsername?: string;
};

type Props = {
  teamMembers: TeamMember[];
};

const defaultAvatar =
  'https://assets.donordrive.com/clients/extralife/img/avatar-constituent-default.gif';

export default function TeamMemberCards({teamMembers}: Readonly<Props>) {
  const cards = teamMembers.map((teamMember) => {
    const {
      displayName,
      avatarImageURL,
      fundraisingGoal,
      isTeamCaptain,
      links,
      streamIsLive,
      sumDonations,
      twitchUsername,
    } = teamMember;
    return (
      <TeamMemberCard
        key={teamMember.displayName}
        displayName={displayName}
        avatarImageURL={avatarImageURL ?? defaultAvatar}
        fundraisingGoal={fundraisingGoal ?? 0}
        isTeamCaptain={isTeamCaptain}
        links={links}
        isStreamLive={streamIsLive}
        sumDonations={sumDonations}
        twitchUsername={twitchUsername}
      />
    );
  });

  return <div className={styles.teamMemberCards}>{cards}</div>;
}
