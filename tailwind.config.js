/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/banner.svg')",
      },
      backgroundPosition: {
        bannerPosition: "center top",
      },
      colors: {
        primary: "#5922A9",
        primaryLight: "#B7AEDA",
        primaryLighter: "#EFEDF1",
        lemon: "#DDFEBF",
        peach: "#FAEACC",
        textDefault: "#313033",
        textSuccess: "#1FB564",
        textNeutral: "#79767A",
      },
      boxShadow: {
        purple: "10px 10px 0px #5922a9",
      },
    },
  },
  plugins: [],
};
