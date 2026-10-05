"use client";

import type { MouseEvent } from "react";
import { htmlLang, LOCALE_STORAGE_KEY, type Locale } from "@/i18n/config";

type LanguageSwitcherProps = {
  target: Locale;
  short: string;
  label: string;
};

/**
 * Links to the same page in the other language, keeping the current #section,
 * and remembers the choice so `/` sends the visitor straight to it next time.
 */
export function LanguageSwitcher({
  target,
  short,
  label,
}: LanguageSwitcherProps) {
  const href = `/${target}`;

  function switchLanguage(event: MouseEvent<HTMLAnchorElement>) {
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, target);
    } catch {
      // Storage can be unavailable (private mode); the link still works.
    }
    if (window.location.hash) {
      event.currentTarget.href = href + window.location.hash;
    }
  }

  return (
    <a
      href={href}
      hrefLang={htmlLang[target]}
      lang={htmlLang[target]}
      title={label}
      onClick={switchLanguage}
      className="inline-flex h-11 min-w-11 items-center justify-center rounded-full px-3 font-mono text-xs font-medium tracking-wider text-muted transition-colors duration-200 hover:bg-surface-hover hover:text-fg"
    >
      {short}
      <span className="sr-only"> — {label}</span>
    </a>
  );
}
