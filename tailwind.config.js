/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["DM Serif Display", "serif"],
        mono: ["DM Mono", "monospace"],
        sans: ["Outfit", "sans-serif"],
      },
      colors: {
        accent: "#7c6aff",
        "accent-light": "#a594ff",
        "accent-dark": "#5046d4",
        teal: "#00d4c8",
        green: "#22d37a",
        amber: "#f5a623",
      },
    },
  },
  plugins: [],
};