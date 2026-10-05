import { ImageResponse } from "next/og";
import { themeColors } from "@/lib/theme-colors";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon; same "RG" monogram as `icon.svg`, without rounded corners (iOS applies its own mask). */
export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: themeColors.accent,
        color: themeColors.onAccent,
        fontSize: 80,
        fontWeight: 700,
        letterSpacing: -3,
      }}
    >
      RG
    </div>,
    size
  );
}
