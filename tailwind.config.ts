import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        progressFill: "progressFill 3s linear forwards",
        moveLine: "moveLine 1.5s linear infinite",
      },
      keyframes: {
        progressFill: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        moveLine: {
          from: { "background-position": "0 0" },
          to: { "background-position": "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
