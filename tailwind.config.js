const {fontFamily} = require("tailwindcss/defaultTheme")
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)", ...fontFamily.sans],
        sono: ["var(--font-sono)", ...fontFamily.mono]
      },
      borderRadius: {
        '50': '50%'
      },
      spacing: {
        '4.5': '18px',
      }
    },
  },
  plugins: [],
};
