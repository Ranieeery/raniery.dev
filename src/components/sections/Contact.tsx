import { ExternalLink } from "@/components/ui/ExternalLink";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { profile } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

type ContactProps = { locale: Locale; dict: Dictionary; index: number };

export function Contact({ locale, dict, index }: ContactProps) {
  const t = dict.contact;

  return (
    <Section id="contact" index={index} title={t.title}>
      <div data-reveal>
        <p className="max-w-xl leading-relaxed text-muted md:text-lg">
          {t.lead}
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="group mt-10 inline-flex max-w-full items-center gap-3 text-[clamp(1.5rem,5vw,3.25rem)] leading-tight font-semibold tracking-tight break-all transition-colors duration-200 hover:text-accent-text"
        >
          <span className="link-underline">{profile.email}</span>
          <Icon
            name="arrowUpRight"
            size={28}
            className="shrink-0 transition-transform duration-300 ease-out-soft group-hover:translate-x-1 group-hover:-translate-y-1"
          />
          <span className="sr-only"> — {t.emailLabel}</span>
        </a>
      </div>

      <ul
        data-reveal
        className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-line pt-8"
      >
        {profile.social.map((link) => (
          <li key={link.id}>
            <ExternalLink
              href={link.href}
              newTabHint={dict.a11y.opensInNewTab}
              className="inline-flex min-h-11 items-center gap-2.5 text-muted transition-colors duration-200 hover:text-fg"
            >
              <Icon name={link.id} size={18} />
              {link.label}
            </ExternalLink>
          </li>
        ))}
        <li>
          <a
            href={profile.cv[locale]}
            download
            className="inline-flex min-h-11 items-center gap-2.5 text-muted transition-colors duration-200 hover:text-fg"
          >
            <Icon name="download" size={18} />
            {dict.common.downloadCv}
          </a>
        </li>
      </ul>
    </Section>
  );
}
