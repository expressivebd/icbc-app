import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        istok: ["var(--font-istok-web)"],
      },

      colors: {
        primary: "#005073",
        secondary: "#2E4049",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography, require("@tailwindcss/aspect-ratio")],
} satisfies Config;
