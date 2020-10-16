import { arrayOf, shape, string, bool } from 'prop-types';
import StreamCard from '../atoms/stream-card';

const StreamerSchedule = ({ schedule, teamMembers }) => {
  if (!schedule) return null;
  const sortedSchedule = schedule.sort(
    (a, b) => new Date(a.timeStart).getTime() - new Date(b.timeStart).getTime()
  );
  console.log({ sortedSchedule });
  const streams = sortedSchedule.map((stream) => {
    const teamMember =
      teamMembers.find((member) => {
        if (!member?.twitchUsername) return false;
        return (
          stream.streamer.toLowerCase() === member.twitchUsername.toLowerCase()
        );
      }) || {};
    const { timeStart, timeEnd, streamer } = stream;
    const { twitchUsername, streamIsLive } = teamMember;
    return (
      <StreamCard
        twitchUsername={twitchUsername}
        timeStart={timeStart}
        timeEnd={timeEnd}
        streamIsLive={streamIsLive}
        streamer={streamer}
      />
    );
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
    })
  ).isRequired,
  teamMembers: arrayOf(
    shape({
      twitchUsername: string,
      displayName: string.isRequired,
      streamIsLive: bool,
    })
  ).isRequired,
};

export default StreamerSchedule;
