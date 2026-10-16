import type { CSSProperties } from "react";

const STEP_MS = 60;
const MAX_STEPS = 4;

/**
 * Staggers `[data-reveal]` items of a list by their position, capped so items
 * far down a long list don't wait noticeably. Read by `globals.css`.
 */
export function revealDelay(index: number): CSSProperties {
  return {
    "--reveal-delay": `${Math.min(index, MAX_STEPS) * STEP_MS}ms`,
  } as CSSProperties;
}
