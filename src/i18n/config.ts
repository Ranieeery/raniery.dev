export const locales = ["pt", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

/** Locale whose link preview (Open Graph, Twitter card) `/` shows. */
export const previewLocale: Locale = "pt";

/** BCP 47 tags used for `<html lang>`, hreflang and Intl formatting. */
export const htmlLang: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
};

/** Each language's name in that language, for language pickers. */
export const localeNames: Record<Locale, string> = {
  pt: "Português",
  en: "English",
};

/** Open Graph locale identifiers. */
export const ogLocale: Record<Locale, string> = {
  pt: "pt_BR",
  en: "en_US",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** localStorage key holding the language the visitor picked in the switcher. */
export const LOCALE_STORAGE_KEY = "lang";
