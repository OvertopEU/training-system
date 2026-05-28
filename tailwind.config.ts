import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fff8dc",
          100: "#f8e7a2",
          200: "#e4c766",
          300: "#cda342",
          400: "#b88725",
          500: "#a66f12",
          600: "#87570b"
        },
        obsidian: "#050505",
        ink: "#0b0b0b"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        gold: "0 0 48px rgba(205, 163, 66, .24)"
      },
      backgroundImage: {
        "gold-line": "linear-gradient(90deg, transparent, rgba(228,199,102,.75), transparent)",
        "cinema": "radial-gradient(circle at 30% 20%, rgba(205,163,66,.18), transparent 26%), radial-gradient(circle at 80% 10%, rgba(255,255,255,.07), transparent 22%), linear-gradient(135deg, #050505 0%, #101010 50%, #050505 100%)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
