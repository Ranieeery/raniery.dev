import Link from "next/link";
import { LanguageSwitcher } from "@/components/controls/LanguageSwitcher";
import { ThemeToggle } from "@/components/controls/ThemeToggle";
import { Logo } from "@/components/ui/Logo";
import { profile } from "@/content/profile";
import { locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";
import { getNavItems } from "./nav-items";

type HeaderProps = { locale: Locale; dict: Dictionary };

export function Header({ locale, dict }: HeaderProps) {
  const items = getNavItems(dict);
  const otherLocale = locales.find((l) => l !== locale) ?? locale;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href={`/${locale}`}
          aria-label={`${profile.name}, ${dict.a11y.homeLink}`}
          className="-mx-2 inline-flex min-h-11 items-center rounded-full px-2 transition-opacity duration-200 hover:opacity-75"
        >
          <Logo />
        </Link>

        <div className="flex items-center gap-1">
          <DesktopNav items={items} label={dict.a11y.primaryNav} />

          <LanguageSwitcher
            target={otherLocale}
            short={dict.language.short}
            label={dict.language.switchLabel}
          />
          <ThemeToggle
            labels={{
              toDark: dict.a11y.switchToDark,
              toLight: dict.a11y.switchToLight,
            }}
          />
          <MobileMenu
            items={items}
            labels={{
              open: dict.a11y.openMenu,
              close: dict.a11y.closeMenu,
              nav: dict.a11y.primaryNav,
            }}
          />
        </div>
      </div>
    </header>
  );
}
