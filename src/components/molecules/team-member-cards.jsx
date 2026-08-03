import PropTypes from 'prop-types';
const {arrayOf, shape, string, number, bool} = PropTypes;
import TeamMemberCard from '../atoms/team-member-card.jsx';
import styles from './team-member-cards.module.css';

function TeamMemberCards({teamMembers}) {
  const cards =
    teamMembers.map((teamMember) => {
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
          avatarImageURL={avatarImageURL}
          fundraisingGoal={fundraisingGoal}
          isTeamCaptain={isTeamCaptain}
          links={links}
          isStreamLive={streamIsLive}
          sumDonations={sumDonations}
          twitchUsername={twitchUsername}
        />
      );
    }) || [];

  return <div className={styles.teamMemberCards}>{cards}</div>;
}

TeamMemberCards.propTypes = {
  teamMembers: arrayOf(
    shape({
      avatarImageURL: string.isRequired,
      displayName: string.isRequired,
      fundraisingGoal: number.isRequired,
      isTeamCaptain: bool,
      links: shape({
        donate: string,
        page: string,
        stream: string,
      }),
      streamIsLive: bool,
      sumDonations: number,
      twitchUsername: string,
    }),
  ).isRequired,
};

export default TeamMemberCards;
