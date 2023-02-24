const color = require("tailwindcss/colors");

const theme = {
  primary: {
    50: "#01080E",
    100: "#011627",
    200: "#011221",
  },
  secondary: {
    50: "#607B96",
    100: "#3C9D93",
    200: "#4D5BCE",
    300: "#FFFFFF",
  },
  accent: {
    50: "#FEA55F",
    100: "#43D9AD",
    2000: "#E99287",
    300: "#C98BDF",
  },
  stroke: "#1E2D3D",
  background: "#011627",
  body: "#010c16",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...color,
        ...theme,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
