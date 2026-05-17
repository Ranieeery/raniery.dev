import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
      colors: {
        first: "var(--first-color)",
        "first-second": "var(--first-color-second)",
        "first-alt": "var(--first-color-alt)",
        "first-lighter": "var(--first-color-lighter)",
        title: "var(--title-color)",
        text: "var(--text-color)",
        "text-light": "var(--text-color-light)",
        body: "var(--body-color)",
        container: "var(--container-color)",
        contact: "var(--contact-color)",
      },
      spacing: {
        header: "var(--header-height)",
      },
      zIndex: {
        tooltip: "var(--z-tooltip)",
        fixed: "var(--z-fixed)",
        modal: "var(--z-modal)",
      },
      fontSize: {
        big: "var(--big-font-size)",
        h1: "var(--h1-font-size)",
        h2: "var(--h2-font-size)",
        h3: "var(--h3-font-size)",
        normal: "var(--normal-font-size)",
        small: "var(--small-font-size)",
        smaller: "var(--smaller-font-size)",
      },
      fontWeight: {
        medium: "var(--font-medium)",
        "semi-bold": "var(--font-semi-bold)",
      },
      margin: {
        "mb-0-25": "var(--mb-0-25)",
        "mb-0-5": "var(--mb-0-5)",
        "mb-0-75": "var(--mb-0-75)",
        "mb-1": "var(--mb-1)",
        "mb-1-5": "var(--mb-1-5)",
        "mb-2": "var(--mb-2)",
        "mb-2-5": "var(--mb-2-5)",
        "mb-3": "var(--mb-3)",
      },
    },
  },
  plugins: [],
};

export default config;
