/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        glass: "rgba(255,255,255,0.25)",
        brown: "rgb(30, 30, 17);",
        blush: "rgb(196,98,122)",
        grey: "rgb(45,46,51)",
        lightGrey: "rgba(45, 46, 51, 0.4)",
        lightThistle: "rgba(193,178,204,0.2)",
        thistle: "rgba(193,178,204)",
        ultraViolet: "#575481",
        seashell: "#FFF4EB",
      },
    },
  },
  plugins: [],
};
