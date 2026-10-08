import type { Metadata } from "next";
import { htmlLang, localeNames, locales } from "@/i18n/config";
import { buildRedirectMetadata } from "@/lib/seo";

export const metadata: Metadata = buildRedirectMetadata();

/** Fallback links, only visible if the redirect script cannot run. */
export default function RootRedirectPage() {
  return (
    <noscript>
      <main className="flex min-h-dvh items-center justify-center gap-6 font-sans text-sm">
        {locales.map((locale) => (
          <a
            key={locale}
            href={`/${locale}`}
            hrefLang={htmlLang[locale]}
            lang={htmlLang[locale]}
            className="underline underline-offset-4"
          >
            {localeNames[locale]}
          </a>
        ))}
      </main>
    </noscript>
  );
}
