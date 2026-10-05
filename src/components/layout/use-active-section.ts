import { useSyncExternalStore } from "react";

/** Distance from the top of the viewport (below the sticky header) used as the reading line. */
const READING_LINE = 0.35;

function subscribe(onChange: () => void) {
  let frame = 0;
  const schedule = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(onChange);
  };

  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  return () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", schedule);
  };
}

function getActive(ids: readonly string[]): string | null {
  const scrolledToBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 2;
  if (scrolledToBottom) return ids[ids.length - 1] ?? null;

  const line = window.innerHeight * READING_LINE;
  let active: string | null = null;

  for (const id of ids) {
    const section = document.getElementById(id);
    if (section && section.getBoundingClientRect().top <= line) active = id;
  }

  return active;
}

/**
 * Scroll spy: returns the id of the section currently under the reading line,
 * or null above the first section (the hero) and during server rendering.
 */
export function useActiveSection(ids: readonly string[]): string | null {
  return useSyncExternalStore(
    subscribe,
    () => getActive(ids),
    () => null
  );
}
