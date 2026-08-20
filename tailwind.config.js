/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        border: "var(--border)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-tertiary": "var(--text-tertiary)",
        hover: "var(--hover)",
        "code-bg": "var(--code-bg)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        display: ["5rem", { lineHeight: "0.9", letterSpacing: "-0.03em", fontWeight: "700" }],
      },
      spacing: {
        "sidebar": "240px",
      },
      screens: {
        "md": "768px",
        "lg": "1024px",
      },
      gridTemplateColumns: {
        "layout": "240px 1fr",
      },
    },
  },
  plugins: [],
}
