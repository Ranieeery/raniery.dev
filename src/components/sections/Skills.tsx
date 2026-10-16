import { Section } from "@/components/ui/Section";
import { skills } from "@/content/profile";
import type { Dictionary } from "@/i18n/get-dictionary";

type SkillsProps = { dict: Dictionary; index: number };

export function Skills({ dict, index }: SkillsProps) {
  const t = dict.skills;

  return (
    <Section id="skills" index={index} title={t.title}>
      <dl className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.id} data-reveal className="border-t border-line pt-5">
            <dt className="font-mono text-xs tracking-wider text-subtle uppercase">
              {t.groups[group.id]}
            </dt>
            <dd className="mt-3 leading-relaxed">
              <ul className="flex flex-wrap gap-x-4 gap-y-1">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
