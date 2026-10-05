import type { Dictionary } from "@/i18n/get-dictionary";

const navIds = [
  "about",
  "experience",
  "projects",
  "skills",
  "education",
  "contact",
] as const satisfies readonly (keyof Dictionary["nav"])[];

export type NavItem = { id: string; label: string };

export function getNavItems(dict: Dictionary): NavItem[] {
  return navIds.map((id) => ({ id, label: dict.nav[id] }));
}
