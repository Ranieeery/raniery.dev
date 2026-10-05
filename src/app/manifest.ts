import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { themeColors } from "@/lib/theme-colors";

export default function manifest(): MetadataRoute.Manifest {
  const dict = getDictionary(defaultLocale);

  return {
    name: profile.shortName,
    short_name: profile.firstName,
    description: dict.meta.description,
    start_url: `/${defaultLocale}`,
    display: "standalone",
    background_color: themeColors.light.background,
    theme_color: themeColors.accent,
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
  };
}
