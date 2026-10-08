import { ImageResponse } from "next/og";
import { profile, siteUrl } from "@/content/profile";
import { defaultLocale, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { ogImage } from "@/lib/seo";
import { themeColors } from "@/lib/theme-colors";

export const size = ogImage.size;
export const contentType = ogImage.contentType;

export function generateImageMetadata({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = params;
  const dict = getDictionary(isLocale(lang) ? lang : defaultLocale);
  return [{ id: ogImage.id, alt: dict.meta.ogAlt, size, contentType }];
}

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(isLocale(lang) ? lang : defaultLocale);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: themeColors.dark.background,
        color: themeColors.dark.foreground,
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 26,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: themeColors.dark.accent,
        }}
      >
        {dict.hero.role}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 104,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: -3,
          }}
        >
          {profile.shortName}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 34,
            lineHeight: 1.35,
            color: themeColors.dark.muted,
            maxWidth: 940,
          }}
        >
          {dict.hero.headline}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 24,
          color: themeColors.dark.subtle,
        }}
      >
        <span>{new URL(siteUrl).host}</span>
        <span>{profile.focusStack.join(" · ")}</span>
      </div>
    </div>,
    size
  );
}
