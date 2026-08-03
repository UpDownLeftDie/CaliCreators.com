import {createFileRoute, notFound} from '@tanstack/react-router';
import groupsJson from '../data/groups.json';
import extralifeJson from '../data/extralife.json';
import type {
  ExtraLifeGroup,
  ExtraLifeSearch,
  Group,
  Groups,
} from '../lib/schemas';
import {ExtraLifePage} from '../components/extra-life-page';

function validateExtraLifeSearch(
  search: Record<string, unknown>,
): ExtraLifeSearch {
  let promote: boolean | undefined;
  if (search.promote === true || search.promote === 'true') {
    promote = true;
  } else if (search.promote === false || search.promote === 'false') {
    promote = false;
  }

  return {
    promote,
    member: typeof search.member === 'string' ? search.member : undefined,
  };
}

export const Route = createFileRoute('/$group/extralife')({
  validateSearch: validateExtraLifeSearch,
  loader({params}) {
    const groups = groupsJson.groups as Groups;
    const configs = extralifeJson as Record<string, ExtraLifeGroup>;
    const group = groups[params.group] as Group | undefined;
    const config = configs[params.group];

    if (!group || !config) {
      // eslint-disable-next-line @typescript-eslint/only-throw-error -- required router control flow
      throw notFound();
    }

    return {
      groupKey: params.group,
      group,
      config,
    };
  },
  component: ExtraLifeRoute,
  head({loaderData}) {
    const teamName = loaderData?.group.name ?? 'Extra Life';
    const description = `${teamName} Extra Life Team Page. We're raising money to help our local children's hospital!`;
    const pageUrl = `https://calicreators.com/${loaderData?.groupKey ?? ''}/extralife`;

    return {
      meta: [
        {title: `${teamName} Extra Life Team | Cali Creators`},
        {name: 'description', content: `${teamName} ${description}`},
        {
          property: 'og:title',
          content: `${teamName} Extra Life Team | Cali Creators`,
        },
        {property: 'og:description', content: description},
        {property: 'og:url', content: pageUrl},
        {
          property: 'og:image',
          content: 'https://calicreators.com/extralife-icon.png',
        },
        {property: 'og:image:width', content: '255'},
        {property: 'og:image:height', content: '255'},
      ],
      links: [{rel: 'preconnect', href: 'https://www.extra-life.org'}],
      scripts: [
        {src: 'https://platform.twitter.com/widgets.js', async: true},
        {src: 'https://embed.twitch.tv/embed/v1.js', async: true},
      ],
    };
  },
});

function ExtraLifeRoute() {
  const data = Route.useLoaderData();
  const search = Route.useSearch();
  return <ExtraLifePage {...data} search={search} />;
}
