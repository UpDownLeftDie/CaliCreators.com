import { arrayOf, number, shape, string } from 'prop-types';
import StreamCard from '../atoms/stream-card';
import checkIfEventIsLive from '../../src/utils';

function StreamerSchedule({ schedule, teamMembers }) {
  if (!schedule) return null;
  const streams = schedule.reduce((acc, stream) => {
    const teamMember =
      teamMembers.find(
        (member) =>
          stream.streamer.trim().toLowerCase() ===
          member?.twitchUsername?.toLowerCase(),
      ) || {};
    const { timeStart, timeEnd, streamer } = stream;
    const {
      twitchUsername,
      avatarImageURL,
      links,
      sumDonations,
      fundraisingGoal,
    } = teamMember;
    const streamIsLive = checkIfEventIsLive(timeStart, timeEnd);
    acc.push(
      <StreamCard
        key={streamer}
        {...{
          twitchUsername: twitchUsername || streamer,
          timeStart,
          timeEnd,
          streamIsLive,
          streamer,
          avatarImageURL,
          links,
          sumDonations,
          fundraisingGoal,
        }}
      />,
    );
    return acc;
  }, []);

  return (
    <div>
      {streams}
      <style jsx>
        {`
          display: grid;
          grid-row-gap: 10px;
          row-gap: 10px;
          padding: 10px 30px;
          box-sizing: border-box;
          width: 100%;
          justify-items: center;
        `}
      </style>
    </div>
  );
}

StreamerSchedule.propTypes = {
  schedule: arrayOf(
    shape({
      streamer: string.isRequired,
      twitter: string,
      timeStart: string.isRequired,
      timeEnd: string.isRequired,
    }),
  ).isRequired,
  teamMembers: arrayOf(
    shape({
      twitchUsername: string,
      displayName: string.isRequired,
      avatarImageURL: string.isRequired,
      sumDonations: number,
      fundraisingGoal: number.isRequired,
      links: shape({
        donate: string,
        stream: string,
      }),
    }),
  ).isRequired,
};

export default StreamerSchedule;
