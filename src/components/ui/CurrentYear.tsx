"use client";

import { useSyncExternalStore } from "react";

/** The year never changes while the page is open, so there is nothing to subscribe to. */
function subscribe() {
  return () => {};
}

type CurrentYearProps = { fallback: number };

/**
 * The visitor's current year. The static HTML carries the build year
 * (`fallback`), which stays visible without JavaScript and is replaced on
 * hydration.
 */
export function CurrentYear({ fallback }: CurrentYearProps) {
  return useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => fallback
  );
}
