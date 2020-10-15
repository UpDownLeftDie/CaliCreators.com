import { string, number, bool, shape } from 'prop-types';
import ProgressBar from '../atoms/progress-bar';
const TeamMemberCard = ({
  avatarImageURL,
  displayName,
  fundraisingGoal,
  isTeamCaptain,
  links,
  streamIsLive,
  sumDonations,
}) => {
  return (
    <>
      <div className={'team-member-card'}>
        <img src={`https:${avatarImageURL}`} />
        <div className={'name'}>{displayName}</div>
        <ProgressBar
          progress={sumDonations || 0}
          goal={fundraisingGoal}
          height={20}
        />
        <style jsx>
          {`
            :global(.team-member-card) {
              width: 200px;
              border-radius: 20px;
              box-sizing: border-box;
              padding: 10px;
              color: #000;
              background: #fff;
              display: grid;
              place-items: center;
              margin: 10px;
            }
            img {
              border-radius: 50%;
              width: 100px;
              height: 100px;
              box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
              margin: 10px;
            }
            .name {
              font-size: 1.2rem;
              line-height: 1;
              text-align: center;
            }
          `}
        </style>
      </div>
    </>
  );
};

TeamMemberCard.propTypes = {
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
};

export default TeamMemberCard;
