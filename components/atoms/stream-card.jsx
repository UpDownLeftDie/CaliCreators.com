import { string, bool } from 'prop-types';
// import Card from './card';

const StreamCard = ({
  twitchUsername,
  timeStart,
  timeEnd,
  streamIsLive,
  streamer,
  avatarImageURL,
}) => {
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

  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={`https://www.twitch.tv/${twitchUsername || streamer}`}
    >
      {/* <Card> */}
      <div className="streamCard">
        <img
          className="streamerAvatar"
          src={avatarImageURL}
          alt={`${streamer}'s profile`}
        />
        <div className="right">
          <h3>{streamer}</h3>
          <div className="times">
            <div>
              Starts:&nbsp;
              {startDate}
            </div>
            <div>
              Till:&nbsp;
              {endDate}
            </div>
          </div>
        </div>
      </div>
      {/* </Card> */}
      <style jsx>
        {`
          & {
            width: ${streamIsLive ? '100%' : '80%'};
            box-sizing: border-box;
          }
          :global(.streamCard) {
            border-radius: 20px;
            background: #fff;
            width: 100%;
            padding: 10px;
            display: grid;
            grid-template-columns: 100px auto;
            grid-template-rows: auto;
            align-items: center;
            margin: 0 auto;
            grid-column-gap: 20px;
            column-gap: 20px;
          }
          :global(.isLive) {
            width: 100%;
          }
          :global(.streamerAvatar) {
            border-radius: 50%;
            grid-column-start: 1;
            place-self: center;
            object-fit: cover;
            width: 100%;
            max-height: 100%;
          }
          :global(.right) {
            grid-column-start: 2;
            display: flex;
            flex-direction: column;
          }
          h3 {
            padding: 0;
            margin: 0;
          }
          .time {
          }
        `}
      </style>
    </a>
  );
};

StreamCard.defaultProps = {
  twitchUsername: null,
  streamIsLive: false,
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
};

export default StreamCard;
