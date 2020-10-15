import { array } from 'prop-types';
import TeamMemberCard from '../atoms/teamMemberCard';
const TeamMemberCards = ({ teamMembers }) => {
  const cards =
    teamMembers.map((teamMember) => {
      return <TeamMemberCard key={teamMember.displayName} {...teamMember} />;
    }) || [];

  return (
    <div>
      {cards}
      <style jsx>
        {`
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        `}
      </style>
    </div>
  );
};

TeamMemberCard.propTypes = {
  teamMembers: Array.isRequired,
};

export default TeamMemberCards;
