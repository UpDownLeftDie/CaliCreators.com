import React, { useState, useLayoutEffect } from 'react';
import { string, bool, shape, number } from 'prop-types';
import Card from './card';
import ExtraLifeMemberButtons from './extralife-member-buttons';
import ProgressBar from './progress-bar';

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(0);
  useLayoutEffect(() => {
    function updateWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  return windowWidth;
}

const StreamCard = ({
  twitchUsername,
  timeStart,
  timeEnd,
  streamIsLive,
  streamer,
  avatarImageURL,
  links,
  fundraisingGoal,
  sumDonations,
}) => {
  const windowWidth = useWindowWidth();
  const breakPoint = 600;
  const pastBreakPoint = windowWidth < breakPoint;
  const options = {
    hour: 'numeric',
    weekday: 'short',
    month: 'short',
    day: 'numeric',
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
  if (streamIsLive && pastBreakPoint) {
    ribbon = {
      ...ribbon,
      text: 'Live now!',
    };
  }
  return (
    <div className={`cardWrapper  ${streamIsLive ? 'isLive' : ''}`}>
      <Card isGlowing={streamIsLive} ribbon={ribbon}>
        <div className="streamCard">
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.twitch.tv/${twitchUsername || streamer}`}
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
            width: 80%;
            min-width: 280px;
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
};

StreamCard.defaultProps = {
  twitchUsername: null,
  streamIsLive: false,
  sumDonations: 0,
  avatarImageURL:
    'https://assets.donordrive.com/clients/extralife/img/avatar-constituent-default.gif',
};

StreamCard.propTypes = {
  twitchUsername: string,
  timeStart: string.isRequired,
  timeEnd: string.isRequired,
  streamIsLive: bool,
  streamer: string.isRequired,
  avatarImageURL: string,
  fundraisingGoal: number.isRequired,
  sumDonations: number,
  links: shape({
    donate: string.isRequired,
    // stream: string.isRequired,
  }).isRequired,
};

export default StreamCard;
