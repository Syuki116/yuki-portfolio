/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas:         "#F8F7F4",
        surface:        "#EFEDE8",
        rule:           "#E0DDD7",
        sage:           "#7A9E87",
        "sage-light":   "#C4D9CC",
        ink:            "#1C2128",
        muted:          "#6B7280",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        sans:    ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};