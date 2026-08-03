import {createRouter} from '@tanstack/react-router';
import {routeTree} from './routeTree.gen';

export function getRouter() {
  return createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: 'intent',
  });
}

declare module '@tanstack/react-router' {
  // Module augmentation must use interface (merges with TanStack's Register).
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions -- declaration merging
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
