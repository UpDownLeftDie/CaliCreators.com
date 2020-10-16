import { arrayOf, shape, string, bool } from 'prop-types';

const Stream = ({
  twitchUsername,
  timeStart,
  timeEnd,
  streamIsLive,
  streamer,
}) => {
  console.log({ twitchUsername, timeStart, timeEnd, streamIsLive, streamer });
  return (
    <a
      target="_blank"
      href={`https://www.twitch.tv/${twitchUsername || streamer}`}>
      <div className={'scheduledStream'}>
        <h3>{streamer}</h3>
        <div>Starts: {timeStart}</div>
        <div>Till: {timeEnd}</div>
      </div>
      <style jsx>{`
        .scheduledStream {
          background: #fff;
          border-radius: 20px;
          width: 100%;
        }
      `}</style>
    </a>
  );
};

const StreamerSchedule = ({ schedule, teamMembers }) => {
  if (!schedule) return null;
  const sortedSchedule = schedule.sort(
    (a, b) => new Date(a.timeStart).getTime() - new Date(b.timeStart).getTime(),
  );
  console.log({ sortedSchedule });
  const streams = sortedSchedule.map((stream) => {
    let teamMember =
      teamMembers.find((teamMember) => {
        if (!teamMember?.twitchUsername) return false;
        return (
          stream.streamer.toLowerCase() ===
          teamMember.twitchUsername.toLowerCase()
        );
      }) || {};
    return <Stream {...teamMember} {...stream} />;
  });
  return (
    <div>
      {streams}
      <style jsx>
        {`
          display: grid;
          grid-gap: 5px;
          max-width: 800px;
        `}
      </style>
    </div>
  );
};

StreamerSchedule.propTypes = {
  schedule: arrayOf(
    shape({
      streamer: string.isRequired,
      timeStart: string.isRequired,
      timeEnd: string.isRequired,
    }),
  ).isRequired,
  teamMembers: arrayOf(
    shape({
      twitchUsername: string,
      displayName: string.isRequired,
      streamIsLive: bool,
    }),
  ).isRequired,
};

export default StreamerSchedule;
