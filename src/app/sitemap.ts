import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/profile";
import { htmlLang, locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((l) => [htmlLang[l], `${siteUrl}/${l}`])
  );

  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "pt" ? 1 : 0.9,
    alternates: { languages },
  }));
}
