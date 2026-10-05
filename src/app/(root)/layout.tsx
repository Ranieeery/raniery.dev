import type { ReactNode } from "react";
import { defaultLocale, htmlLang } from "@/i18n/config";
import { localeRedirectScript } from "@/lib/locale-script";
import { themeScript } from "@/lib/theme-script";
import "../globals.css";

/**
 * Root layout for `/` only. The page immediately redirects to a locale, so it
 * renders no fonts or chrome — just the theme background to avoid a flash.
 */
export default function RedirectLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={htmlLang[defaultLocale]} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: localeRedirectScript }} />
        <noscript>
          <meta httpEquiv="refresh" content={`0; url=/${defaultLocale}`} />
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
