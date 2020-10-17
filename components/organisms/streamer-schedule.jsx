import { arrayOf, shape, string, bool } from 'prop-types';
import StreamCard from '../atoms/stream-card';
import checkIfEventIsLive from '../../src/utils';

const StreamerSchedule = ({ schedule, teamMembers }) => {
  if (!schedule) return null;
  const streams = schedule.map((stream) => {
    const teamMember =
      teamMembers.find((member) => {
        if (!member?.twitchUsername) return false;
        return (
          stream.streamer.toLowerCase() === member.twitchUsername.toLowerCase()
        );
      }) || {};
    const { timeStart, timeEnd, streamer } = stream;
    const { twitchUsername, avatarImageURL } = teamMember;
    const streamIsLive = checkIfEventIsLive(timeStart, timeEnd);
    console.log(streamer, streamIsLive, timeStart, timeEnd);
    return (
      <StreamCard
        key={streamer}
        {...{
          twitchUsername,
          timeStart,
          timeEnd,
          streamIsLive,
          streamer,
          avatarImageURL,
        }}
      />
    );
  });
  return (
    <div>
      {streams}
      <style jsx>
        {`
          display: grid;
          grid-row-gap: 20px;
          row-gap: 20px;
          width: 100%;
          justify-items: center;
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
      avatarImageURL: string.isRequired,
    })
  ).isRequired,
};

export default StreamerSchedule;
