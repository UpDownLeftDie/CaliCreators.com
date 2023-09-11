import { arrayOf, shape, string, number, bool } from 'prop-types';
import TeamMemberCard from '../atoms/team-member-card';

function TeamMemberCards({ teamMembers }) {
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
          {...{
            displayName,
            avatarImageURL,
            fundraisingGoal,
            isTeamCaptain,
            links,
            streamIsLive,
            sumDonations,
            twitchUsername,
          }}
        />
      );
    }) || [];

  return (
    <div>
      {cards}
      <style jsx>
        {`
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          padding-top: 40px;
        `}
      </style>
    </div>
  );
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
