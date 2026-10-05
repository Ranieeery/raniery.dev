import { Section } from "@/components/ui/Section";
import { certificates, education } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { formatPeriod } from "@/lib/format";

type EducationProps = { locale: Locale; dict: Dictionary; index: number };

export function Education({ locale, dict, index }: EducationProps) {
  const t = dict.education;
  const allCertificates = [...t.certificates, ...certificates];

  return (
    <Section id="education" index={index} title={t.title}>
      <ol className="space-y-10">
        {education.map((entry) => (
          <li
            key={entry.id}
            data-reveal
            className="grid gap-2 lg:grid-cols-[11rem_1fr] lg:gap-8"
          >
            <p className="font-mono text-xs leading-7 text-subtle">
              {formatPeriod(entry.period, locale, dict.common.present)}
            </p>
            <div>
              <h3 className="text-lg font-semibold tracking-tight md:text-xl">
                {t.items[entry.id].degree}
              </h3>
              <p className="mt-1 text-muted">
                {entry.institution}
                {entry.inProgress && (
                  <span className="ml-2 font-mono text-xs text-accent-text">
                    {t.inProgress}
                  </span>
                )}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-16 grid gap-12 border-t border-line pt-10 lg:grid-cols-[1fr_16rem]">
        <div data-reveal>
          <h3 className="font-mono text-xs tracking-wider text-subtle uppercase">
            {t.certificatesTitle}
          </h3>
          <ul className="dash-list mt-5 space-y-2.5 leading-relaxed text-muted">
            {allCertificates.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>

        <div data-reveal>
          <h3 className="font-mono text-xs tracking-wider text-subtle uppercase">
            {t.languagesTitle}
          </h3>
          <dl className="mt-5 space-y-4">
            {t.languages.map((language) => (
              <div key={language.name}>
                <dt className="font-medium">{language.name}</dt>
                <dd className="mt-0.5 text-sm leading-relaxed text-muted">
                  {language.level}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
