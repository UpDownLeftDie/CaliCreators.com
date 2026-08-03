import {createServerFn} from '@tanstack/react-start';
import {loadMeetupEvents, loadTwitchEvents} from '../lib/events';

export const fetchTwitchEvents = createServerFn({method: 'GET'}).handler(
  async () => loadTwitchEvents(),
);

export const fetchMeetupEvents = createServerFn({method: 'GET'})
  .validator((data: {meetupUrlIds: string[]}) => data)
  .handler(async ({data}) => loadMeetupEvents(data.meetupUrlIds));
