import {createFileRoute} from '@tanstack/react-router';
import groupsJson from '../data/groups.json';
import type {Groups} from '../lib/schemas';
import {HomePage} from '../components/home-page';

export const Route = createFileRoute('/')({
  loader() {
    return {groups: groupsJson.groups as Groups};
  },
  component: HomeRoute,
  head: () => ({
    meta: [{title: 'Cali Creators MeetUps'}],
  }),
});

function HomeRoute() {
  const {groups} = Route.useLoaderData();
  return <HomePage groups={groups} />;
}
