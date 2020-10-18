import { string, number, bool, shape } from 'prop-types';
import ProgressBar from './progress-bar';
import Card from './card';

const Wrapper = ({ children, links, streamIsLive, twitchUsername }) => {
  if (links?.page) {
    let href = links.page;
    if (streamIsLive && twitchUsername) {
      href = `https://www.twitch.tv/${twitchUsername}`;
    }
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {children}
        <style jsx>
          {`
            display: grid;
            text-decoration: none;
            place-items: center;
            min-height: 200px;
            color: #444;
          `}
        </style>
      </a>
    );
  }
  return children;
};

const getButton = (link, text) => {
  return (
    <a
      href={link}
      className={`memberButton ${text}`}
      target="_blank"
      rel="noreferrer"
    >
      {text}
      <style jsx>
        {`
          a {
          }

          .memberButton {
            width: 100%;
            padding: 5px;
            border-radius: 8px;
            box-sizing: border-box;
            height: 40px;
            place-items: center;
            font-weight: bold;
            display: grid;
            background: #26c2eb;
            color: #ffffff;
            text-decoration: none !important;
          }
          .Twitch {
            background: #772ce8;
          }
          .Twitch:hover,
          .Twitch:focus {
            background: #541da5;
          }
          .Donate {
            background: #7fd836;
          }
          .Donate:hover {
            background: #47b200;
          }
        `}
      </style>
    </a>
  );
};

const getTwitchButton = (link) => getButton(link, 'Twitch');
const getDonateButton = (link) => getButton(link, 'Donate');

const getButtons = (links, streamIsLive) => {
  if (!links?.donate && !links?.stream) return null;
  const donateButton = links?.donate ? getDonateButton(links.donate) : null;
  let twitchButton = null;
  if (!streamIsLive && links?.stream) {
    twitchButton = getTwitchButton(links.stream);
  }
  return (
    <div className="buttonContainer">
      {twitchButton}
      {donateButton}
      <style jsx>
        {`
          :global(.buttonContainer) {
            margin-top: 5px;
            display: grid;
            grid-auto-columns: 1fr 1fr;
            grid-auto-flow: column;
            grid-row: 1;
            grid-column-gap: 7px;
          }
        `}
      </style>
    </div>
  );
};

const TeamMemberCard = ({
  avatarImageURL,
  displayName,
  fundraisingGoal,
  isTeamCaptain,
  links,
  streamIsLive,
  twitchUsername,
  sumDonations,
}) => {
  let ribbon = {};
  if (isTeamCaptain) {
    ribbon = {
      ...ribbon,
      text: 'Team Captain',
      color: '#e0bd00',
    };
  }
  if (streamIsLive) {
    ribbon = {
      ...ribbon,
      text: 'Live now!',
    };
  }
  const buttons = getButtons(links, streamIsLive);
  return (
    <Card ribbon={ribbon} isGlowing={streamIsLive}>
      <div className="team-member-card">
        <Wrapper
          links={links}
          streamIsLive={streamIsLive}
          twitchUsername={twitchUsername}
        >
          <img src={avatarImageURL} alt={`${displayName}'s profile`} />
          <div className="name">{displayName}</div>
          <ProgressBar
            progress={sumDonations || 0}
            goal={fundraisingGoal}
            height={20}
            isMoney
            displayProgress
            displayPercent={false}
          />
        </Wrapper>
        {buttons}
      </div>
      <style jsx>
        {`
          :global(.team-member-card) {
            width: 200px;

            box-sizing: border-box;
            color: #000;
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
            font-weight: bold;
            align-self: baseline;
          }
        `}
      </style>
    </Card>
  );
};

TeamMemberCard.defaultProps = {
  isTeamCaptain: false,
  links: {},
  streamIsLive: false,
  sumDonations: 0,
  twitchUsername: null,
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
  twitchUsername: string,
};

export default TeamMemberCard;
