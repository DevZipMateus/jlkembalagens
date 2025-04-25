import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#c1c8d1",
        input: "#c1c8d1",
        ring: "#4a4e58",
        background: "#ffffff",
        foreground: "#3c3f46",
        primary: {
          DEFAULT: "#4a4e58",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#c1c8d1",
          foreground: "#3c3f46",
        },
        accent: {
          DEFAULT: "#3c3f46",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#c1c8d1",
          foreground: "#4a4e58",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
