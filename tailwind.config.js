/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg))",
        "bg-panel": "hsl(var(--bg-panel))",
        "bg-panel-2": "hsl(var(--bg-panel-2))",
        ink: "hsl(var(--ink))",
        "ink-dim": "hsl(var(--ink-dim))",
        "ink-faint": "hsl(var(--ink-faint))",
        line: "hsl(var(--line) / <alpha-value>)",
        "line-strong": "hsl(var(--line-strong) / <alpha-value>)",
        accent: "hsl(var(--accent))",
        "accent-ink": "hsl(var(--accent-ink))",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'IBM Plex Sans'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      maxWidth: {
        sheet: "1180px",
      },
      keyframes: {
        pulse2: {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "100%": { transform: "scale(2.6)", opacity: "0" },
        },
        draw: {
          to: { strokeDashoffset: "0" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
      },
      animation: {
        pulse2: "pulse2 1.8s ease-out infinite",
        draw: "draw 2.6s ease forwards .3s",
        bob: "bob 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};