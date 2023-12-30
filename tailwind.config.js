/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-in-out",
        "fade-in-up-1s": "fade-in-up 1s ease-in-out",
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      width: { 86: "22rem" },
      screens: {
        xs: { max: "480px" },
        md2: { max: "640px" },
        max9: { max: "899px" },
        min9: { min: "900px" },
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
