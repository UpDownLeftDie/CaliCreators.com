import StreamCard from '../molecules/stream-card';
import checkIfEventIsLive from '../../lib/utils';
import styles from './streamer-schedule.module.css';

type ScheduleItem = {
  streamer: string;
  twitter?: string;
  timeStart: string;
  timeEnd: string;
};

type TeamMember = {
  twitchUsername?: string;
  displayName: string;
  avatarImageURL?: string;
  sumDonations?: number;
  fundraisingGoal?: number;
  links?: {
    donate?: string;
    stream?: string;
  };
};

type Props = {
  schedule: ScheduleItem[] | undefined;
  teamMembers: TeamMember[];
};

export default function StreamerSchedule({
  schedule,
  teamMembers,
}: Readonly<Props>) {
  if (schedule === undefined) {
    return null;
  }

  const streams = schedule.map((stream) => {
    const teamMember = teamMembers.find(
      (member) =>
        stream.streamer.trim().toLowerCase() ===
        member.twitchUsername?.toLowerCase(),
    );
    const {timeStart, timeEnd, streamer} = stream;
    const isStreamLive = checkIfEventIsLive(timeStart, timeEnd);

    return (
      <StreamCard
        key={streamer}
        twitchUsername={teamMember?.twitchUsername ?? streamer}
        timeStart={timeStart}
        timeEnd={timeEnd}
        isStreamLive={isStreamLive}
        streamer={streamer}
        avatarImageURL={teamMember?.avatarImageURL}
        links={teamMember?.links}
        sumDonations={teamMember?.sumDonations}
        fundraisingGoal={teamMember?.fundraisingGoal}
      />
    );
  });

  return <div className={styles.streamerSchedule}>{streams}</div>;
}
