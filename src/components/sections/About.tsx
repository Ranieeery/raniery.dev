import { Section } from "@/components/ui/Section";
import type { Dictionary } from "@/i18n/get-dictionary";

type AboutProps = { dict: Dictionary; index: number };

export function About({ dict, index }: AboutProps) {
  const t = dict.about;
  const [lead, ...paragraphs] = t.paragraphs;

  return (
    <Section id="about" index={index} title={t.title}>
      <div data-reveal>
        <p className="text-2xl leading-snug font-medium tracking-tight md:text-3xl md:leading-snug">
          {lead}
        </p>
        <div className="mt-8 max-w-2xl space-y-5 leading-relaxed text-muted md:text-lg md:leading-relaxed">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <dl
        data-reveal
        className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 lg:grid-cols-4"
      >
        {t.facts.map((fact) => (
          <div key={fact.label}>
            <dt className="font-mono text-xs tracking-wider text-subtle uppercase">
              {fact.label}
            </dt>
            <dd className="mt-2 font-medium">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
