import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
    darkMode: ["class"],
    content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],

  theme: {
  	extend: {
  		fontFamily: {
  			montserrat: ["var(--font-montserrat)"],
  			istok: ["var(--font-istok-web)"]
  		},
  		colors: {
  			primary: '#005073',
  			secondary: '#2E4049'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography, require("@tailwindcss/aspect-ratio"), require("tailwindcss-animate")],
} satisfies Config;
