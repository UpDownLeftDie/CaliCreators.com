"use client";
import moment from "moment";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";

const fiveMinsBefore = (date: number) => new Date(date - 5 * 60000);

const GroupCard = dynamic(() => import("./components/organisms/group-card"), {
  ssr: false,
});

const siteTitle = "Cali Creators MeetUps";

type Groups = { [key: string]: Group };
type Group = {
  nextEvent?: TwitchEvent;
  city: string;
  name: string;
  imagePath: string;
  url: string;
  links: {
    twitter?: string;
    instagram?: string;
    discord?: string;
    twitch?: string;
  };
  charity?: {
    internalPage: boolean;
    url: string;
    imageKey: string;
  };
};
type CachedTwitchEvents = {
  updatedAt: number;
  events: TwitchEvent[];
};
type TwitchEvent = {
  chapter: {
    city: string;
  };
  url: string;
  start_date: string;
  title: string;
};
type MeetupEvent = {
  group: {
    localized_location: string;
  };
  time: string;
  utc_offset: number;
  link: string;
  startDate: string;
  name: string;
};

function convertMeetupToTwitch(meetup: MeetupEvent[]): TwitchEvent[] {
  const meetupList = meetup.map((event) => {
    const city = event.group.localized_location.split(",")[0];
    const startDate = moment
      .utc(event.time)
      .utcOffset(event.utc_offset / 3600000)
      .format();
    return {
      chapter: {
        city,
      },
      url: event.link,
      start_date: startDate,
      title: event.name,
    };
  });

  return meetupList;
}

async function getUpcomingTwitchEvents(): Promise<TwitchEvent[]> {
  const cacheBuster = `&${Math.floor(Math.random() * 1000)}`;
  const twitchRes = await fetch(
    `https://meetups.twitch.tv/api/search/?result_types=upcoming_event&country_code=Earth${cacheBuster}`,
  ).catch((err) => {
    console.log(err);
  });

  if (twitchRes) {
    const twitchJson = await twitchRes.json();
    if (twitchJson) {
      return twitchJson.results;
    }
  }

  return [];
}

async function getUpcomingMeetupEvents(
  meetupUrlIds: string[],
): Promise<TwitchEvent[]> {
  if (meetupUrlIds.length < 1) return [];

  const cacheBuster = `&${Math.floor(Math.random() * 1000)}`;
  const meetupRequests = meetupUrlIds.map((meetupId) => {
    const meetupUrl = `https://api.meetup.com/${meetupId}/events?&sign=true&photo-host=secure&page=5&has_ended=false${cacheBuster}`;
    const meetupUrlProxy = `https://lym20nhb8j.execute-api.us-west-2.amazonaws.com/dev?url=${meetupUrl}`;
    return fetch(meetupUrlProxy);
  });

  const responses = await Promise.all(meetupRequests).catch((err) => {
    console.log(err);
  });

  if (!responses) {
    return [];
  }

  const meetupResJSONs: MeetupEvent[] = await Promise.all(
    responses.map((res) => res.json()),
  );
  return convertMeetupToTwitch(meetupResJSONs);
}

type HomeProps = Readonly<{
  groups: Groups;
}>;

export default function Home({ groups }: HomeProps) {
  const meetupUrlIds = useMemo(() => {
    const ids: string[] = [];
    Object.values(groups ?? {}).forEach((group) => {
      const url = new URL(group.url);
      const urlPaths = url.pathname.split("/");
      if (group.url.includes("meetups.com") && urlPaths.length > 1) {
        ids.push(urlPaths[1]);
      }
    });
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
    let ignore = false;

    async function loadTwitchEvents() {
      const cachedData: CachedTwitchEvents = JSON.parse(
        localStorage.getItem("twitchEvents") || "{}",
      );
      if (cachedData?.updatedAt) {
        const fiveMinsAgo = fiveMinsBefore(Date.now());
        if (new Date(cachedData.updatedAt) > fiveMinsAgo) {
          if (!ignore) {
            setUpcomingTwitchEvents({
              events: cachedData.events,
              loading: false,
            });
          }
          return;
        }
      }

      const twitchEvents = await getUpcomingTwitchEvents();
      localStorage.setItem(
        "twitchEvents",
        JSON.stringify({
          events: twitchEvents,
          updatedAt: Date.now(),
        }),
      );
      if (!ignore) {
        setUpcomingTwitchEvents({ events: twitchEvents, loading: false });
      }
    }

    void loadTwitchEvents();
    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    let ignore = false;

    async function loadMeetupEvents() {
      const cachedData: CachedTwitchEvents = JSON.parse(
        localStorage.getItem("meetupEvents") || "{}",
      );
      if (cachedData?.updatedAt) {
        const fiveMinsAgo = fiveMinsBefore(Date.now());
        if (new Date(cachedData.updatedAt) > fiveMinsAgo) {
          if (!ignore) {
            setUpcomingMeetupEvents({
              events: cachedData.events,
              loading: false,
            });
          }
          return;
        }
      }

      const meetupEvents = await getUpcomingMeetupEvents(meetupUrlIds);
      localStorage.setItem(
        "meetupEvents",
        JSON.stringify({
          events: meetupEvents,
          updatedAt: Date.now(),
        }),
      );
      if (!ignore) {
        setUpcomingMeetupEvents({ events: meetupEvents, loading: false });
      }
    }

    void loadMeetupEvents();
    return () => {
      ignore = true;
    };
  }, [meetupUrlIds]);

  function findNextEvent(
    groups: Groups,
    upcomingEvents: TwitchEvent[],
  ): Group[] {
    return Object.values(groups).map((group) => {
      const nextEvent = upcomingEvents.find((event) => {
        if (event.chapter.city === group.city) return true;
        return false;
      });
      return {
        ...group,
        nextEvent,
      };
    });
  }

  const renderCards = () => {
    const upcomingEvents = upcomingTwitchEvents.events.concat(
      upcomingMeetupEvents.events,
    );
    const loading =
      upcomingTwitchEvents.loading || upcomingMeetupEvents.loading;
    const groupsWithEvents = findNextEvent(groups, upcomingEvents).sort(
      (a, b) => {
        if (!a.nextEvent?.start_date) return 1;
        if (!b.nextEvent?.start_date) return -1;
        return (
          new Date(a.nextEvent.start_date).getTime() -
          new Date(b.nextEvent.start_date).getTime()
        );
      },
    );
    return groupsWithEvents.map((groupWithEvent, i: number) => (
      <GroupCard
        key={groupWithEvent.name}
        group={groupWithEvent}
        loading={loading}
        totalCards={groupsWithEvents.length}
        position={i + 1}
      />
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
