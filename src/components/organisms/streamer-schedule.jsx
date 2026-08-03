import PropTypes from 'prop-types';
const {arrayOf, number, shape, string} = PropTypes;
import StreamCard from '../atoms/stream-card.jsx';
import checkIfEventIsLive from '../../lib/utils';
import styles from './streamer-schedule.module.css';

function StreamerSchedule({schedule, teamMembers}) {
  if (schedule === undefined || schedule === null) {
    return null;
  }

  const streams = [];
  for (const stream of schedule) {
    const teamMember =
      teamMembers.find(
        (member) =>
          stream.streamer.trim().toLowerCase() ===
          member?.twitchUsername?.toLowerCase(),
      ) ?? {};
    const {timeStart, timeEnd, streamer} = stream;
    const {
      twitchUsername,
      avatarImageURL,
      links,
      sumDonations,
      fundraisingGoal,
    } = teamMember;
    const isStreamLive = checkIfEventIsLive(timeStart, timeEnd);
    streams.push(
      <StreamCard
        key={streamer}
        twitchUsername={twitchUsername || streamer}
        timeStart={timeStart}
        timeEnd={timeEnd}
        isStreamLive={isStreamLive}
        streamer={streamer}
        avatarImageURL={avatarImageURL}
        links={links}
        sumDonations={sumDonations}
        fundraisingGoal={fundraisingGoal}
      />,
    );
  }

  return <div className={styles.streamerSchedule}>{streams}</div>;
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
