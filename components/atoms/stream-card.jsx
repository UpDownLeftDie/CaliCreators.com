import { string, bool, shape, number } from "prop-types";
import Card from "./card";
import ExtraLifeMemberButtons from "./extralife-member-buttons";
import ProgressBar from "./progress-bar";
import useElementSize from "../../src/hooks";

function StreamCard({
  avatarImageURL,
  fundraisingGoal,
  links,
  streamer,
  streamIsLive,
  sumDonations,
  timeEnd,
  timeStart,
  twitchUsername,
}) {
  const windowSize = useElementSize(window);
  const breakPoint = 600;
  const pastBreakPoint = windowSize.width < breakPoint;
  const options = {
    hour: "numeric",
    minute: "numeric",
    weekday: "short",
    month: "short",
    day: "numeric",
  };
  let startDate = null;
  let endDate = null;
  {
    const tempStart = new Date(timeStart);
    const tempEnd = new Date(timeEnd);
    startDate = tempStart.toLocaleDateString(undefined, options);
    endDate = tempEnd.toLocaleDateString(undefined, options);
  }
  let ribbon = {};
  if (streamIsLive) {
    if (pastBreakPoint) {
      ribbon = {
        ...ribbon,
        text: "Live now!",
      };
    }
  }
  return (
    <div className={`cardWrapper${streamIsLive ? " isLive" : ""}`}>
      <Card isPulsing={streamIsLive} ribbon={ribbon}>
        <div className="streamCard">
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.twitch.tv/${twitchUsername}`}
          >
            <img
              className="streamerAvatar"
              src={avatarImageURL}
              alt={`${streamer}'s profile`}
            />
            <div className="center">
              <h3>{streamer}</h3>
              <div className="times">
                <div>
                  <b>Starts: </b>
                  <u>{startDate}</u>
                </div>
                <div>
                  <b>&nbsp;Till: </b>
                  <u>{endDate}</u>
                </div>
              </div>
              {fundraisingGoal ? (
                <ProgressBar
                  progress={sumDonations}
                  goal={fundraisingGoal}
                  goalText=""
                  progressText=""
                  inlineText
                  isMoney
                  width={75}
                  height={30}
                  displayProgress
                />
              ) : null}
            </div>
          </a>
          <ExtraLifeMemberButtons
            streamIsLive={streamIsLive}
            links={{ donate: links.donate }}
            columnLayout={!pastBreakPoint}
          />
        </div>
      </Card>
      <style jsx>
        {`
          a {
            color: black;
            text-decoration: none;
          }
          .cardWrapper {
            display: grid;
            position: relative;
            width: 85%;
            min-width: 280px;
            box-sizing: border-box;
          }
          .streamCard {
            border-radius: 20px;
            box-sizing: border-box;
            display: grid;
            grid-template-columns: auto 100px;
            grid-auto-flow: column;
            align-items: center;
            margin: 0 auto;
            grid-column-gap: 20px;
            column-gap: 20px;
          }
          .isLive {
            width: 100%;
          }
          a {
            display: grid;
            grid-template-columns: 100px auto;
            grid-auto-flow: column;
            align-items: center;
          }
          .streamerAvatar {
            border-radius: 50%;
            border: #000 solid 3px;
            align-self: center;
            justify-self: start;
            object-fit: cover;
            width: 100px;
            max-height: 100%;
          }
          .isLive .streamerAvatar {
            border: red solid 3px;
          }
          .center {
            display: flex;
            flex-direction: column;
            place-items: center;
          }
          .times {
            margin: 5px 0 5px 0;
          }
          h3 {
            padding: 0;
            margin: 0;
          }
          @media (max-width: ${breakPoint}px) {
            a, .streamCard, .center {
              display: flex;
              flex-direction: column;
              place-items: center;
              width: 100%;
          }
        `}
      </style>
    </div>
  );
}

StreamCard.defaultProps = {
  streamIsLive: false,
  sumDonations: 0,
  avatarImageURL:
    "https://assets.donordrive.com/clients/extralife/img/avatar-constituent-default.gif",
  fundraisingGoal: 0,
  links: {},
};

StreamCard.propTypes = {
  avatarImageURL: string,
  fundraisingGoal: number,
  links: shape({
    donate: string,
    // stream: string.isRequired,
  }),
  streamer: string.isRequired,
  streamIsLive: bool,
  sumDonations: number,
  timeEnd: string.isRequired,
  timeStart: string.isRequired,
  twitchUsername: string.isRequired,
};

export default StreamCard;
