import {createServerFn} from '@tanstack/react-start';
import {staticFunctionMiddleware} from '@tanstack/start-static-server-functions';
import extralifeJson from '../data/extralife.json';
import {loadExtraLifeTeam} from '../lib/extralife';
import type {ExtraLifeGroup} from '../lib/schemas';
import {getGroup} from './groups.functions';

export const getExtraLifeConfig = createServerFn({method: 'GET'})
  .middleware([staticFunctionMiddleware])
  .validator((data: {groupKey: string}) => data)
  .handler(({data}): ExtraLifeGroup => {
    const configs = extralifeJson as Record<string, ExtraLifeGroup>;
    if (!Object.hasOwn(configs, data.groupKey)) {
      throw new Error(`No Extra Life config for group: ${data.groupKey}`);
    }

    return configs[data.groupKey];
  });

export const getExtraLifePage = createServerFn({method: 'GET'})
  .middleware([staticFunctionMiddleware])
  .validator((data: {groupKey: string}) => data)
  .handler(async ({data}) => {
    const [{group}, config] = await Promise.all([
      getGroup({data: {groupKey: data.groupKey}}),
      getExtraLifeConfig({data: {groupKey: data.groupKey}}),
    ]);

    return {
      groupKey: data.groupKey,
      group,
      config,
    };
  });

export const fetchExtraLifeTeam = createServerFn({method: 'GET'})
  .validator((data: {teamId: string}) => data)
  .handler(async ({data}) => loadExtraLifeTeam(data.teamId));
