import { string, number, bool, shape } from 'prop-types';
import ProgressBar from './progress-bar';

const Wrapper = ({ children, links, streamIsLive, twitchUsername }) => {
  if (links?.page) {
    let href = links.page;
    if (streamIsLive && twitchUsername) {
      href = `https://www.twitch.tv/${twitchUsername}`;
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        style={{ display: 'grid' }}
      >
        {children}
      </a>
    );
  }
  return children;
};

const TeamMemberCard = ({
  avatarImageURL,
  displayName,
  fundraisingGoal,
  // isTeamCaptain,
  links,
  streamIsLive,
  twitchUsername,
  sumDonations,
}) => {
  return (
    <Wrapper
      links={links}
      streamIsLive={streamIsLive}
      twitchUsername={twitchUsername}
    >
      <div className="team-member-card">
        <img src={`https:${avatarImageURL}`} alt={`${displayName}'s profile`} />
        <div className="name">{displayName}</div>
        <ProgressBar
          progress={sumDonations || 0}
          goal={fundraisingGoal}
          height={20}
        />
      </div>
      <style jsx>
        {`
          a {
            display: grid;
          }
          :global(.team-member-card) {
            width: 200px;
            min-height: 200px;
            border-radius: 20px;
            box-sizing: border-box;
            color: #000;
            background: #fff;
            display: grid;
            place-items: center;
            padding: 10px 15px;
            margin: 10px;
          }
          img {
            border-radius: 50%;
            width: 100px;
            height: 100px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
            margin: 0 10px 10px;
          }
          .name {
            font-size: 1.1rem;
            line-height: 1;
            text-align: center;
          }
        `}
      </style>
    </Wrapper>
  );
};

TeamMemberCard.defaultProps = {
  // isTeamCaptain: false,
  links: {},
  streamIsLive: false,
  sumDonations: 0,
  twitchUsername: null,
};

TeamMemberCard.propTypes = {
  avatarImageURL: string.isRequired,
  displayName: string.isRequired,
  fundraisingGoal: number.isRequired,
  // isTeamCaptain: bool,
  links: shape({
    donate: string,
    page: string,
    stream: string,
  }),
  streamIsLive: bool,
  sumDonations: number,
  twitchUsername: string,
};

export default TeamMemberCard;
