"use client";

import { useSyncExternalStore } from "react";
import { Icon } from "@/components/ui/Icon";
import { THEME_STORAGE_KEY } from "@/lib/theme-script";

type Theme = "light" | "dark";

function readTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage can be unavailable (private mode); the choice just won't persist.
  }
}

function switchTheme(theme: Theme) {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion) {
    applyTheme(theme);
    return;
  }

  if (typeof document.startViewTransition === "function") {
    document.startViewTransition(() => applyTheme(theme));
    return;
  }

  const root = document.documentElement;
  root.classList.add("theme-transition");
  applyTheme(theme);
  window.setTimeout(() => root.classList.remove("theme-transition"), 320);
}

type ThemeToggleProps = { labels: { toDark: string; toLight: string } };

export function ThemeToggle({ labels }: ThemeToggleProps) {
  // Server snapshot is null: the icon is chosen by CSS until hydration, so the
  // markup never disagrees with the theme set by the inline head script.
  const theme = useSyncExternalStore<Theme | null>(
    subscribe,
    readTheme,
    () => null
  );
  const next: Theme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => switchTheme(next)}
      aria-label={next === "dark" ? labels.toDark : labels.toLight}
      title={next === "dark" ? labels.toDark : labels.toLight}
      className="inline-flex size-11 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:bg-surface-hover hover:text-fg"
    >
      <Icon name="moon" className="dark:hidden" />
      <Icon name="sun" className="hidden dark:block" />
    </button>
  );
}
