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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#5922A9",
        primaryLight: "#B7AEDA",
        lemon: "#DDFEBF",
        peach: "#FAEACC",
        textDefault: "#313033",
        textSuccess: "#1FB564",
        textNeutral: "#79767A",
      },
    },
  },
  plugins: [],
};
