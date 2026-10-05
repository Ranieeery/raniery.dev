import { ExternalLink } from "@/components/ui/ExternalLink";
import { Icon } from "@/components/ui/Icon";
import { profile } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

type HeroProps = { locale: Locale; dict: Dictionary };

export function Hero({ locale, dict }: HeroProps) {
  const t = dict.hero;

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="mx-auto max-w-6xl px-5 pt-16 pb-20 sm:px-8 md:pt-28 md:pb-32"
    >
      <div className="hero-enter">
        <p className="font-mono text-xs font-medium tracking-[0.18em] text-accent-text uppercase">
          {t.role}
        </p>

        <h1
          id="hero-title"
          className="mt-6 text-[clamp(2.75rem,10vw,7.25rem)] leading-[0.95] font-semibold tracking-[-0.035em]"
        >
          {profile.firstName}
          <span className="block text-muted">{profile.lastName}</span>
        </h1>

        <p className="mt-10 max-w-2xl text-xl leading-relaxed text-muted md:text-2xl md:leading-relaxed">
          {t.headline}
        </p>

        <div className="mt-12 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-accent-text px-6 text-sm font-medium text-on-accent transition-[background-color,transform] duration-200 hover:-translate-y-px hover:bg-accent-strong dark:bg-accent dark:hover:bg-accent-strong"
            >
              {t.ctaContact}
              <Icon name="arrowDown" size={16} />
            </a>
            <a
              href={profile.cv[locale]}
              download
              className="inline-flex h-12 items-center gap-2 rounded-full border border-line px-6 text-sm font-medium transition-[border-color,transform] duration-200 hover:-translate-y-px hover:border-fg"
            >
              {dict.common.downloadCv}
              <Icon name="download" size={16} />
            </a>
            <ul className="flex gap-3">
              {profile.social.map((link) => (
                <li key={link.id}>
                  <ExternalLink
                    href={link.href}
                    newTabHint={dict.a11y.opensInNewTab}
                    title={link.label}
                    className="inline-flex size-12 items-center justify-center rounded-full border border-line text-muted transition-[border-color,color,transform] duration-200 hover:-translate-y-px hover:border-fg hover:text-fg"
                  >
                    <Icon name={link.id} size={18} />
                    <span className="sr-only">{link.label}</span>
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </div>

          <ul className="flex flex-col gap-1 font-mono text-xs text-subtle md:items-end">
            <li>{t.location}</li>
            <li className="inline-flex items-center gap-2">
              <span
                aria-hidden
                className="neon-dot inline-block size-1.5 rounded-full"
              />
              {t.current}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
