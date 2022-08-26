/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    env: {
      customKey: "my-value",
    },
    extend: {},
    colors: {
      black: "#121212",
      white: "#ffffff",
      gray: "#d1d5db",
      lightgray: "#e2e8f0",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      bubblegum: "#ff77e9",
      bermuda: "#06b6d4",
    },
  },

  plugins: [],
};
