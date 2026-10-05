"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import type { NavItem } from "./nav-items";
import { useActiveSection } from "./use-active-section";

type MobileMenuProps = {
  items: NavItem[];
  labels: { open: string; close: string; nav: string };
};

/** Disclosure-style navigation for small screens. */
export function MobileMenu({ items, labels }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const active = useActiveSection(items.map((item) => item.id));

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    const desktop = window.matchMedia("(min-width: 1024px)");
    function onResize() {
      if (desktop.matches) setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? labels.close : labels.open}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-11 items-center justify-center rounded-full text-fg transition-colors duration-200 hover:bg-surface-hover"
      >
        <Icon name={open ? "close" : "menu"} />
      </button>

      <nav
        id={panelId}
        aria-label={labels.nav}
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-bg"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8">
          {items.map((item) => (
            <li key={item.id} className="border-b border-line last:border-b-0">
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? "location" : undefined}
                onClick={() => setOpen(false)}
                className="flex min-h-13 items-center justify-between text-lg font-medium hover:text-accent-text aria-[current]:text-accent-text"
              >
                {item.label}
                {active === item.id && (
                  <span
                    aria-hidden
                    className="size-1.5 rounded-full bg-accent"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
