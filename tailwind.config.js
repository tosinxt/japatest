/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      pc: { min: "768px" },
      tablet: { min: "640px", max: "767px" },
    },
    extend: {
      backgroundImage: {
        banner: "url('/banner.svg')",
      },
      backgroundPosition: {
        bannerPosition: "center top",
      },
      colors: {
        primary: "#5922A9",
        primaryLight: "#f1ecf1",
        primaryLighter: "#EFEDF1",
        lemon: "#DDFEBF",
        peach: "#FAEACC",
        textDefault: "#313033",
        textSuccess: "#1FB564",
        textNeutral: "#79767A",
      },
      boxShadow: {
        purple: "10px 10px 1px #ffffff, 11px 11px 0 #5922a9 ",
      },
      borderColor: {
        boxGradient:
          "linear-gradient(90deg, #7D2F99 0%, #FF5FCC 27%, #451A83 53%, #B543AF 80%, #451A83 100%)",
      },
    },
  },
  plugins: [],
};
