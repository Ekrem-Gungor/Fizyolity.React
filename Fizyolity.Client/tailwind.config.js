/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        transparent: "transparent",
      },
      stroke: {
        white: "#ffffff",
      },
      colors: {
        fizyolity: "var(--fzylty-color)",
        fizyolityhover: "var(--fzylty-hover-color)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".stroke-white": {
          "-webkit-text-fill-color": "transparent",
          "-webkit-text-stroke": "1px white",
        },
      });
    }),
  ],
};
