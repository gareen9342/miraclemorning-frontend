const colors = require("tailwindcss/colors");
const typography = require("@tailwindcss/typography");
const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
    },
    // fontFamily: { body: "Open Sans" },
    // extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    typography,
    plugin(({ addBase, theme }) => {
      addBase({
        h1: {
          color: theme("colors.black.700"),
          fontWeight: 300,
          fontSize: theme("fontSize.2xl"),
        },
        p: {
          fontWeight: 200,
          fontSize: theme("fontSize.m"),
        },
      });
    }),
  ],
};
