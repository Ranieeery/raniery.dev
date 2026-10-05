"use client";

import type { NavItem } from "./nav-items";
import { useActiveSection } from "./use-active-section";

type DesktopNavProps = { items: NavItem[]; label: string };

export function DesktopNav({ items, label }: DesktopNavProps) {
  const active = useActiveSection(items.map((item) => item.id));

  return (
    <nav aria-label={label} className="hidden lg:block">
      <ul className="mr-3 flex items-center gap-7 text-sm text-muted">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={active === item.id ? "location" : undefined}
              className="link-underline nav-link py-1 transition-colors duration-200 hover:text-fg aria-[current]:text-fg"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
