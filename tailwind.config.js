
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        "secondary": "#FFE500",
        "Common": "#F7921E",
        "dark": "#1D232A"
      }
    },
  },
  plugins: [require("daisyui")],
}