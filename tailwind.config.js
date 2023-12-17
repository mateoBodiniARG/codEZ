/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: { 86: "22rem" },
      screens: {
        xs: { max: "480px" },
        md2: { max: "640px" },
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
