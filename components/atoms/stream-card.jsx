import { string, bool } from 'prop-types';

const StreamCard = ({
  twitchUsername,
  timeStart,
  timeEnd,
  streamIsLive,
  streamer,
}) => {
  console.log({
    twitchUsername,
    timeStart,
    timeEnd,
    streamIsLive,
    streamer,
  });
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={`https://www.twitch.tv/${twitchUsername || streamer}`}
    >
      <div className="scheduledStream">
        <h3>{streamer}</h3>
        <div>
          Starts:
          {timeStart}
        </div>
        <div>
          Till:
          {timeEnd}
        </div>
      </div>
      <style jsx>
        {`
          .scheduledStream {
            background: #fff;
            border-radius: 20px;
            width: 100%;
          }
        `}
      </style>
    </a>
  );
};

StreamCard.defaultProps = {
  twitchUsername: null,
  streamIsLive: false,
};

StreamCard.propTypes = {
  twitchUsername: string,
  timeStart: string.isRequired,
  timeEnd: string.isRequired,
  streamIsLive: bool,
  streamer: string.isRequired,
};

export default StreamCard;
