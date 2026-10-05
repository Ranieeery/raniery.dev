import { Section } from "@/components/ui/Section";
import { TechList } from "@/components/ui/TechList";
import { experience } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { formatPeriod } from "@/lib/format";

type ExperienceProps = { locale: Locale; dict: Dictionary; index: number };

export function Experience({ locale, dict, index }: ExperienceProps) {
  const t = dict.experience;

  return (
    <Section id="experience" index={index} title={t.title}>
      <ol className="space-y-16">
        {experience.map((job) => {
          const copy = t.items[job.id];

          return (
            <li
              key={job.id}
              data-reveal
              className="grid gap-4 lg:grid-cols-[11rem_1fr] lg:gap-8"
            >
              <p className="font-mono text-xs leading-7 text-subtle">
                {formatPeriod(job.period, locale, dict.common.present)}
              </p>

              <article>
                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                  {copy.role}
                </h3>
                <p className="mt-1 text-muted">
                  <span className="font-medium text-fg">{copy.company}</span>
                  <span aria-hidden> · </span>
                  <span className="sr-only">, </span>
                  {copy.location}
                </p>

                <ul className="dash-list mt-6 space-y-3 leading-relaxed text-muted">
                  {copy.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <TechList
                  items={job.stack}
                  label={dict.common.stackLabel}
                  className="mt-6"
                />
              </article>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
