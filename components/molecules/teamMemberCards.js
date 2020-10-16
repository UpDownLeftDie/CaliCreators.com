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
          margin: 40px 0;
        `}
      </style>
    </div>
  );
};

TeamMemberCard.propTypes = {
  teamMembers: array.isRequired,
};

export default TeamMemberCards;
