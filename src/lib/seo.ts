import type { Metadata } from "next";
import { profile, siteUrl } from "@/content/profile";
import {
  defaultLocale,
  htmlLang,
  locales,
  ogLocale,
  type Locale,
} from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

export function languageAlternates(): Record<string, string> {
  const entries = locales.map((l) => [htmlLang[l], `/${l}`] as const);
  return {
    ...Object.fromEntries(entries),
    "x-default": `/${defaultLocale}`,
  };
}

export function buildMetadata(locale: Locale, dict: Dictionary): Metadata {
  const { title, description } = dict.meta;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    applicationName: profile.shortName,
    authors: [{ name: profile.name, url: siteUrl }],
    creator: profile.name,
    alternates: {
      canonical: `/${locale}`,
      languages: languageAlternates(),
    },
    openGraph: {
      type: "profile",
      url: `/${locale}`,
      siteName: profile.shortName,
      title,
      description,
      locale: ogLocale[locale],
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => ogLocale[l]),
      firstName: profile.firstName,
      lastName: profile.lastName,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export function personJsonLd(locale: Locale, dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.shortName,
    url: `${siteUrl}/${locale}`,
    email: `mailto:${profile.email}`,
    jobTitle: dict.hero.role,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Contagem",
      addressRegion: "MG",
      addressCountry: "BR",
    },
    sameAs: profile.social.map((link) => link.href),
    knowsLanguage: ["pt-BR", "en"],
  };
}
