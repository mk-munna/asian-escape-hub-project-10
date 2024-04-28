
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "Montserrat",
        Outfit: ["Outfit"],
        OpenSans: ["Open Sans"],
        Amaranth: ["Amaranth"],
        PlayFairDisplay: ["Playfair Display"],

      },
      colors: {
        "primary": "#008A75",
        "secondary": "#FFE500"
      }
    },
  },
  plugins: [require("daisyui")],
}