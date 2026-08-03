import {createServerFn} from '@tanstack/react-start';
import {staticFunctionMiddleware} from '@tanstack/start-static-server-functions';
import groupsJson from '../data/groups.json';
import type {Group, Groups} from '../lib/schemas';

export const getGroups = createServerFn({method: 'GET'})
  .middleware([staticFunctionMiddleware])
  .handler((): Groups => groupsJson.groups as Groups);

export const getGroup = createServerFn({method: 'GET'})
  .middleware([staticFunctionMiddleware])
  .validator((data: {groupKey: string}) => data)
  .handler(({data}): {groupKey: string; group: Group} => {
    const groups = groupsJson.groups as Groups;
    if (!Object.hasOwn(groups, data.groupKey)) {
      throw new Error(`Unknown group: ${data.groupKey}`);
    }

    return {groupKey: data.groupKey, group: groups[data.groupKey]};
  });
