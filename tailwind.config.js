/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["DM Serif Display", "serif"],
        mono: ["DM Mono", "monospace"],
        sans: ["Outfit", "sans-serif"],
      },
      colors: {
        gold: "#d4af37",
        "gold-light": "#e8c84a",
        "gold-dark": "#b8942a",
      },
    },
  },
  plugins: [],
};