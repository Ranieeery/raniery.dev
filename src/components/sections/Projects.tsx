import { ExternalLink } from "@/components/ui/ExternalLink";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { TechList } from "@/components/ui/TechList";
import { projects } from "@/content/profile";
import type { Dictionary } from "@/i18n/get-dictionary";

type ProjectsProps = { dict: Dictionary; index: number };

export function Projects({ dict, index }: ProjectsProps) {
  const t = dict.projects;

  return (
    <Section id="projects" index={index} title={t.title}>
      <p data-reveal className="max-w-xl leading-relaxed text-muted md:text-lg">
        {t.intro}
      </p>

      <ol className="mt-10 border-t border-line">
        {projects.map((project, i) => {
          const copy = t.items[project.id];
          const name = copy.name ?? project.name ?? project.id;

          return (
            <li
              key={project.id}
              data-reveal
              className="group relative isolate grid grid-cols-[2.5rem_1fr_auto] gap-x-4 border-b border-line py-8 before:absolute before:inset-y-0 before:-inset-x-3 before:-z-10 before:rounded-sm before:bg-surface-hover before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] hover:before:opacity-100 has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-accent sm:grid-cols-[3.5rem_1fr_auto]"
            >
              <span
                aria-hidden
                className="pt-1.5 font-mono text-xs text-subtle"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                  <ExternalLink
                    href={project.repo}
                    newTabHint={dict.a11y.opensInNewTab}
                    className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
                  >
                    {name}
                    <span className="sr-only"> — {t.repo}</span>
                  </ExternalLink>
                </h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-muted">
                  {copy.summary}
                </p>
                <TechList
                  items={project.stack}
                  label={dict.common.stackLabel}
                  className="mt-4"
                />
              </div>

              <Icon
                name="arrowUpRight"
                className="mt-1 text-subtle transition-[color,transform] duration-300 ease-out-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-text"
              />
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
