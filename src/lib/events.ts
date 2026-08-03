import type {TwitchEvent} from './schemas';

type MeetupEvent = {
  group: {localized_location: string};
  time: string | number;
  utc_offset: number;
  link: string;
  name: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function asTwitchEvent(value: unknown): TwitchEvent | undefined {
  if (!isRecord(value)) return;
  const chapter = value.chapter;
  if (!isRecord(chapter) || typeof chapter.city !== 'string') return;
  if (typeof value.url !== 'string') return;
  if (typeof value.start_date !== 'string') return;
  if (typeof value.title !== 'string') return;
  return {
    chapter: {city: chapter.city},
    url: value.url,
    start_date: value.start_date,
    title: value.title,
  };
}

function asMeetupEvent(value: unknown): MeetupEvent | undefined {
  if (!isRecord(value)) return;
  const group = value.group;
  if (!isRecord(group) || typeof group.localized_location !== 'string') return;
  if (typeof value.time !== 'string' && typeof value.time !== 'number') return;
  if (typeof value.utc_offset !== 'number') return;
  if (typeof value.link !== 'string') return;
  if (typeof value.name !== 'string') return;
  return {
    group: {localized_location: group.localized_location},
    time: value.time,
    utc_offset: value.utc_offset,
    link: value.link,
    name: value.name,
  };
}

function convertMeetupToTwitch(meetup: MeetupEvent[]): TwitchEvent[] {
  return meetup.map((event) => {
    const city = event.group.localized_location.split(',', 1)[0] ?? '';
    const offsetHours = event.utc_offset / 3_600_000;
    const startDate = new Date(event.time);
    const local = new Date(startDate.getTime() + offsetHours * 3_600_000);
    const pad = (n: number) => String(n).padStart(2, '0');
    const startDateIso = `${local.getUTCFullYear()}-${pad(local.getUTCMonth() + 1)}-${pad(local.getUTCDate())}T${pad(local.getUTCHours())}:${pad(local.getUTCMinutes())}:${pad(local.getUTCSeconds())}`;

    return {
      chapter: {city},
      url: event.link,
      start_date: startDateIso,
      title: event.name,
    };
  });
}

function cacheBuster(): number {
  return Date.now();
}

export async function loadTwitchEvents(): Promise<TwitchEvent[]> {
  const response = await fetch(
    `https://meetups.twitch.tv/api/search/?result_types=upcoming_event&country_code=Earth&${cacheBuster()}`,
  );

  if (!response.ok) {
    return [];
  }

  const json = (await response.json()) as {results?: unknown};
  if (!Array.isArray(json.results)) {
    return [];
  }

  return json.results.flatMap((item) => {
    const event = asTwitchEvent(item);
    return event ? [event] : [];
  });
}

export async function loadMeetupEvents(
  meetupUrlIds: string[],
): Promise<TwitchEvent[]> {
  if (meetupUrlIds.length === 0) {
    return [];
  }

  const bust = cacheBuster();
  const responses = await Promise.all(
    meetupUrlIds.map(async (meetupId) => {
      const meetupUrl = `https://api.meetup.com/${meetupId}/events?&sign=true&photo-host=secure&page=5&has_ended=false&${bust}`;
      const meetupUrlProxy = `https://lym20nhb8j.execute-api.us-west-2.amazonaws.com/dev?url=${meetupUrl}`;
      return fetch(meetupUrlProxy);
    }),
  );

  const events = await Promise.all(
    responses.map(async (response) => {
      if (!response.ok) {
        return [] as MeetupEvent[];
      }

      const json: unknown = await response.json();
      if (!Array.isArray(json)) {
        return [];
      }

      return json.flatMap((item) => {
        const event = asMeetupEvent(item);
        return event ? [event] : [];
      });
    }),
  );

  return convertMeetupToTwitch(events.flat());
}
