"use client";

import { useEffect } from "react";

/**
 * Marks `[data-reveal]` elements as revealed when they scroll into view.
 * The hiding itself is pure CSS and only applies when JS is running and the
 * user has not asked for reduced motion.
 */
export function RevealObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      "[data-reveal]:not([data-revealed])"
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.setAttribute("data-revealed", ""));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
