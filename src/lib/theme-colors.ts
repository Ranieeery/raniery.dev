/**
 * Hex equivalents of the CSS tokens in `globals.css`, for places that cannot
 * read CSS variables: the browser theme-color, the web manifest and the
 * generated Open Graph image. Keep in sync with `globals.css`.
 */
export const themeColors = {
  accent: "#6257e0",
  onAccent: "#ffffff",
  light: { background: "#fcfcff" },
  dark: {
    background: "#171627",
    foreground: "#f2f2f4",
    muted: "#bdbcc6",
    subtle: "#9e9cab",
    accent: "#a9a3f7",
  },
} as const;
