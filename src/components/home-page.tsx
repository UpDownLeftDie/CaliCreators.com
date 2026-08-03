import {lazy, Suspense, useEffect, useMemo, useState} from 'react';
import type {Groups, TwitchEvent} from '../lib/schemas';
import {loadMeetupEvents, loadTwitchEvents} from '../lib/events';

const GroupCard = lazy(async () => import('./organisms/group-card'));

const siteTitle = 'Cali Creators MeetUps';
const fiveMinutesMs = 5 * 60_000;
const fiveMinsBefore = (date: number) => new Date(date - fiveMinutesMs);

type CachedTwitchEvents = {
  updatedAt: number;
  events: TwitchEvent[];
};

type HomeProps = Readonly<{
  groups: Groups;
}>;

function readCachedEvents(storageKey: string): CachedTwitchEvents {
  const raw = localStorage.getItem(storageKey);
  if (typeof raw !== 'string' || raw === '') {
    return {updatedAt: 0, events: []};
  }

  return JSON.parse(raw) as CachedTwitchEvents;
}

function isCacheFresh(updatedAt: number | undefined): boolean {
  if (updatedAt === undefined || updatedAt === 0) {
    return false;
  }

  const fiveMinsAgo = fiveMinsBefore(Date.now());
  return new Date(updatedAt) > fiveMinsAgo;
}

export function HomePage({groups}: HomeProps) {
  const meetupUrlIds = useMemo(() => {
    const ids: string[] = [];
    for (const group of Object.values(groups ?? {})) {
      const url = new URL(group.url);
      const urlPaths = url.pathname.split('/');
      if (group.url.includes('meetups.com') && urlPaths.length > 1) {
        ids.push(urlPaths[1]);
      }
    }

    return ids;
  }, [groups]);

  const [upcomingTwitchEvents, setUpcomingTwitchEvents] = useState<{
    events: TwitchEvent[];
    loading: boolean;
  }>({
    events: [],
    loading: true,
  });
  const [upcomingMeetupEvents, setUpcomingMeetupEvents] = useState<{
    events: TwitchEvent[];
    loading: boolean;
  }>({
    events: [],
    loading: true,
  });

  useEffect(() => {
    let isIgnore = false;

    async function fetchAndCacheTwitchEvents() {
      const cachedData = readCachedEvents('twitchEvents');
      if (isCacheFresh(cachedData.updatedAt)) {
        if (!isIgnore) {
          setUpcomingTwitchEvents({
            events: cachedData.events,
            loading: false,
          });
        }

        return;
      }

      const twitchEvents = await loadTwitchEvents();
      localStorage.setItem(
        'twitchEvents',
        JSON.stringify({
          events: twitchEvents,
          updatedAt: Date.now(),
        }),
      );
      if (!isIgnore) {
        setUpcomingTwitchEvents({events: twitchEvents, loading: false});
      }
    }

    void fetchAndCacheTwitchEvents();
    return () => {
      isIgnore = true;
    };
  }, []);

  useEffect(() => {
    let isIgnore = false;

    async function fetchAndCacheMeetupEvents() {
      const cachedData = readCachedEvents('meetupEvents');
      if (isCacheFresh(cachedData.updatedAt)) {
        if (!isIgnore) {
          setUpcomingMeetupEvents({
            events: cachedData.events,
            loading: false,
          });
        }

        return;
      }

      const meetupEvents = await loadMeetupEvents(meetupUrlIds);
      localStorage.setItem(
        'meetupEvents',
        JSON.stringify({
          events: meetupEvents,
          updatedAt: Date.now(),
        }),
      );
      if (!isIgnore) {
        setUpcomingMeetupEvents({events: meetupEvents, loading: false});
      }
    }

    void fetchAndCacheMeetupEvents();
    return () => {
      isIgnore = true;
    };
  }, [meetupUrlIds]);

  function findNextEvent(groupMap: Groups, upcomingEvents: TwitchEvent[]) {
    return Object.values(groupMap).map((group) => {
      const nextEvent = upcomingEvents.find(
        (event) => event.chapter.city === group.city,
      );
      return {
        ...group,
        nextEvent,
      };
    });
  }

  const renderCards = () => {
    const upcomingEvents = [
      ...upcomingTwitchEvents.events,
      ...upcomingMeetupEvents.events,
    ];
    const isLoading =
      upcomingTwitchEvents.loading || upcomingMeetupEvents.loading;
    const groupsWithEvents = findNextEvent(groups, upcomingEvents).toSorted(
      (a, b) => {
        const aStart = a.nextEvent?.start_date;
        if (typeof aStart !== 'string' || aStart === '') {
          return 1;
        }

        const bStart = b.nextEvent?.start_date;
        if (typeof bStart !== 'string' || bStart === '') {
          return -1;
        }

        return new Date(aStart).getTime() - new Date(bStart).getTime();
      },
    );
    return groupsWithEvents.map((groupWithEvent, i: number) => (
      <Suspense key={groupWithEvent.name} fallback={null}>
        <GroupCard
          group={groupWithEvent}
          isLoading={isLoading}
          totalCards={groupsWithEvents.length}
          position={i + 1}
        />
      </Suspense>
    ));
  };

  return (
    <div className="hero">
      <span className="title-wrapper">
        <h1 className="title">{siteTitle}</h1>
      </span>
      <p className="description">
        We&apos;re the meetup groups for Twitch, Facebook, streamers, and gamers
        in California!
        <br />
        Find the closest one to you or come to all our events!
      </p>
      <div className="row">{renderCards()}</div>
    </div>
  );
}
