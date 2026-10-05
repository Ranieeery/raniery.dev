import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { profile } from "@/content/profile";
import type { Dictionary } from "@/i18n/get-dictionary";

type FooterProps = { dict: Dictionary };

export function Footer({ dict }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-subtle sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div className="flex flex-col gap-2">
          <Logo variant="closing" className="text-fg opacity-80" />
          <p>
            © {year} {profile.name}. {dict.footer.note}
          </p>
        </div>
        <a
          href="#top"
          className="inline-flex items-center gap-2 self-start transition-colors duration-200 hover:text-fg sm:self-auto"
        >
          {dict.a11y.backToTop}
          <Icon name="arrowUp" size={16} />
        </a>
      </div>
    </footer>
  );
}
