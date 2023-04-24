/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient": {
          DEFAULT: `linear-gradient(
          134.24deg,
          #ced2de 15.47%,
          #eceff4 94.71%
        )`,
          dark: `linear-gradient(134.24deg, #2A303E 15.47%, #393E51 94.71%)`,
        },
        "secondary-gradient": `linear-gradient(
          134.24deg,
          #c15d17 15.47%,
          #df8419 94.71%
        )`,
        "third-gradient": {
          DEFAULT: ` linear-gradient(134.24deg, #A0ADC4 15.47%, #C5CEDF 94.71%);`,
          dark: `linear-gradient(134.24deg, #465262 15.47%, #626B7C 94.71%);`,
        },
        "back-gradient": `linear-gradient(180deg, #242833 0%, #16181D 100%);`,
      },
      colors: {
        primary: { DEFAULT: "#D0D3E2", dark: "#252B38" },
        secondary: "#D07419",
        third: { DEFAULT: "#B0B9CA", dark: "#545F71" },
        back: "#DEE1EA",
      },
    },
  },
  plugins: [],
};
