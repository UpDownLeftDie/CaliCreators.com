import {useSyncExternalStore} from 'react';

function subscribeToMediaQuery(query: string, onStoreChange: () => void) {
  const mediaQueryList = globalThis.matchMedia(query);
  mediaQueryList.addEventListener('change', onStoreChange);
  return () => {
    mediaQueryList.removeEventListener('change', onStoreChange);
  };
}

/** Client media query; SSR/snapshot before hydrate uses `isServerMatch`. */
export function useIsMediaQuery(
  query: string,
  isServerMatch: () => boolean = () => false,
): boolean {
  return useSyncExternalStore(
    (onStoreChange) => subscribeToMediaQuery(query, onStoreChange),
    () => globalThis.matchMedia(query).matches,
    isServerMatch,
  );
}
