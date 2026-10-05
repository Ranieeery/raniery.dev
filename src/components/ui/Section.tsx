import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  index: number;
  title: string;
  children: ReactNode;
};

/**
 * Two-column editorial layout on wide screens: a numbered label on the left,
 * content on the right. Stacks on mobile.
 */
export function Section({ id, index, title, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="border-t border-line py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 md:grid-cols-12 md:gap-8">
        <header className="md:col-span-4 lg:col-span-3" data-reveal>
          <div className="md:sticky md:top-28">
            <p className="font-mono text-xs tracking-wider text-accent-text">
              {String(index).padStart(2, "0")}
            </p>
            <h2
              id={headingId}
              className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl"
            >
              {title}
            </h2>
          </div>
        </header>
        <div className="md:col-span-8 lg:col-span-9">{children}</div>
      </div>
    </section>
  );
}
