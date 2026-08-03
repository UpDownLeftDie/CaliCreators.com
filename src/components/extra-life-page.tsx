import {Link} from '@tanstack/react-router';
import {useEffect, useState} from 'react';
import {loadExtraLifeTeam, type ExtraLifeParticipant} from '../lib/extralife';
import type {ExtraLifeGroup, ExtraLifeSearch, Group} from '../lib/schemas';
import checkIfEventIsLive from '../lib/utils';
import CollapseArrow from './atoms/collapse-arrow';
import Header from './atoms/header';
import LoadingIcon from './atoms/loading-icon';
import ProgressBar from './atoms/progress-bar';
import styles from './extra-life-page.module.css';
import Collapsible from './molecules/collapsible';
import SocialIcons from './molecules/social-icons';
import TeamMemberCards from './molecules/team-member-cards';
import TweetButton from './molecules/tweet-button';
import TwitchEmbed from './molecules/twitch-embed';
import StreamerSchedule from './organisms/streamer-schedule';

type TeamState = {
  name?: string;
  fundraisingGoal?: number;
  sumDonations?: number;
  links?: {page?: string};
  participants?: ExtraLifeParticipant[];
};

type ScheduleItem = NonNullable<ExtraLifeGroup['schedule']>[number];

const fiveMinutesMs = 5 * 60_000;
const twentyFourHoursMs = 24 * 60_000 * 60;

function sortSchedule(schedule: NonNullable<ExtraLifeGroup['schedule']>) {
  return schedule
    .filter((stream) => new Date() < new Date(stream.timeEnd))
    .toSorted(
      (a, b) =>
        new Date(a.timeStart).getTime() - new Date(b.timeStart).getTime(),
    );
}

function getScheduleTimeRange(
  schedule: ScheduleItem[],
): {start: Date; end: Date} | undefined {
  const first = schedule.at(0);
  const last = schedule.at(-1);
  if (!first || !last) {
    return undefined;
  }

  return {
    start: new Date(first.timeStart),
    end: new Date(last.timeEnd),
  };
}

function readCachedTeam(storageKey: string): {
  updatedAt?: number;
  team?: TeamState;
} {
  const raw = localStorage.getItem(storageKey);
  if (typeof raw !== 'string' || raw === '') {
    return {};
  }

  return JSON.parse(raw) as {updatedAt?: number; team?: TeamState};
}

type Props = Readonly<{
  groupKey: string;
  group: Group;
  config: ExtraLifeGroup;
  search: ExtraLifeSearch;
}>;

export function ExtraLifePage({groupKey, group, config, search}: Props) {
  const schedule =
    config.schedule !== undefined && config.schedule.length > 0
      ? sortSchedule(config.schedule)
      : [];
  const [team, setTeam] = useState<TeamState>({name: group.name});
  const [isLoading, setIsLoading] = useState(true);
  const [isTeamCollapsed, setIsTeamCollapsed] = useState(false);
  const [isScheduleCollapsed, setIsScheduleCollapsed] = useState(false);
  const [now, setNow] = useState(() => Date.now());
  const teamName =
    (team.name === undefined || team.name === '' ? group : team).name ??
    group.name;

  const handleTeamCollapse = () => {
    setIsTeamCollapsed(!isTeamCollapsed);
    setIsScheduleCollapsed(false);
  };

  const handleScheduleCollapse = () => {
    setIsScheduleCollapsed(!isScheduleCollapsed);
    setIsTeamCollapsed(false);
  };

  useEffect(() => {
    async function getData() {
      const storageKey = `${groupKey}-extralife`;
      const cachedData = readCachedTeam(storageKey);
      const fiveMinsAgo = new Date(Date.now() - fiveMinutesMs);
      const {updatedAt} = cachedData;
      let teamData = cachedData.team;

      if (updatedAt === undefined || new Date(updatedAt) < fiveMinsAgo) {
        const {team: fetchedTeam} = await loadExtraLifeTeam(config.id);

        if (fetchedTeam !== null && Object.keys(fetchedTeam).length > 0) {
          teamData = fetchedTeam;
        }

        localStorage.setItem(
          storageKey,
          JSON.stringify({
            team: teamData,
            updatedAt: Date.now(),
          }),
        );
      }

      setNow(Date.now());
      setTeam(teamData ?? {name: group.name});
      setIsLoading(false);
    }

    void getData();
  }, [config.id, group.name, groupKey]);

  let isEventLive = false;
  let isPromoteSchedule = search.promote === true;
  const scheduleTimeRange = getScheduleTimeRange(schedule);
  if (scheduleTimeRange !== undefined) {
    const {start: scheduleStart, end: scheduleEnd} = scheduleTimeRange;
    const twentyFourHours = new Date(
      scheduleStart.getTime() - twentyFourHoursMs,
    );
    isEventLive = checkIfEventIsLive(scheduleStart, scheduleEnd);
    isPromoteSchedule =
      search.promote === true || isEventLive || now > twentyFourHours.getTime();
  }

  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZoneName: 'short',
  };
  const startDate = scheduleTimeRange?.start.toLocaleDateString(
    undefined,
    options,
  );
  const endDate = scheduleTimeRange?.end.toLocaleDateString(undefined, options);

  const scheduleContent = () => {
    const rangeText = `${startDate} to ${endDate}`;
    let cssClass: string | undefined = styles.upcoming;
    let title = `Upcoming Schedule - ${rangeText} `;
    let twitchEmbed = null;
    let shareButton = null;
    if (isPromoteSchedule && isEventLive && schedule[0] !== undefined) {
      cssClass = undefined;
      title = 'Live Schedule ';
      twitchEmbed = (
        <TwitchEmbed
          twitchUsername={schedule[0].streamer}
          twitter={schedule[0].twitter}
          groupTwitter={group.links.twitter}
          hashtags={config.hashtags}
        />
      );
    }

    if (!isEventLive) {
      shareButton = (
        <div className={styles.shareContainer}>
          Share and support:&nbsp;
          <TweetButton
            text={`Check out the upcoming ExtraLife charity event for @${group.links.twitter} on ${startDate}`}
            hashtags={config.hashtags}
            url={`https://calicreators.com/${groupKey}/extralife`}
          />
        </div>
      );
    }

    const upcomingClass = cssClass === undefined ? '' : ` ${cssClass}`;

    return (
      <>
        {twitchEmbed}
        <div className={`${styles.streamerSchedule}${upcomingClass}`}>
          {shareButton}
          <h2>
            <button
              type="button"
              aria-expanded={!isScheduleCollapsed}
              onClick={handleScheduleCollapse}
            >
              {title}
              <CollapseArrow isCollapsed={isScheduleCollapsed} />
            </button>
          </h2>
          <Collapsible isCollapsed={isScheduleCollapsed}>
            <StreamerSchedule
              schedule={schedule}
              teamMembers={team.participants ?? []}
            />
          </Collapsible>
        </div>
      </>
    );
  };

  let pageContents = (
    <div className={styles.loading}>
      <LoadingIcon />
    </div>
  );

  if (!isLoading) {
    const teamPage = team.links?.page;
    pageContents = (
      <>
        {schedule.length > 0 && isPromoteSchedule ? scheduleContent() : null}
        {typeof teamPage === 'string' && teamPage !== '' ? (
          <div className={styles.teamMembers}>
            <a href={teamPage} className={styles.teamLink}>
              Join Team
            </a>
            <h2 className={styles.sectionHeader}>
              <button
                type="button"
                aria-expanded={!isTeamCollapsed}
                onClick={handleTeamCollapse}
              >
                Team Members&nbsp;
                <CollapseArrow isCollapsed={isTeamCollapsed} />
              </button>
            </h2>
            <Collapsible isCollapsed={isTeamCollapsed}>
              <TeamMemberCards teamMembers={team.participants ?? []} />
            </Collapsible>
          </div>
        ) : null}
        {schedule.length > 0 && !isPromoteSchedule && scheduleContent()}
      </>
    );
  }

  const hasFundraisingGoal =
    typeof team.fundraisingGoal === 'number' && team.fundraisingGoal !== 0;

  return (
    <div className={styles.page}>
      <Header title={teamName} />
      <h2 className={styles.subheader}>Extra Life Team</h2>
      <div style={{width: '200px'}}>
        <SocialIcons groupName={group.name} links={group.links} />
      </div>
      <Link to="/" className={styles.homeLink}>
        Cali Creators Home
      </Link>
      {hasFundraisingGoal ? (
        <ProgressBar
          isMoney
          isDisplayProgress
          isLoading={isLoading}
          progress={team.sumDonations}
          goal={team.fundraisingGoal}
          progressText="Raised"
          goalText="Goal"
          width={80}
        />
      ) : null}
      {pageContents}
    </div>
  );
}
