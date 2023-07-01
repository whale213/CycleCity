/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        glass: "rgba(255,255,255,0.25)",
        blush: "#C4627A",
        grey: "#2D2E33",
        fedora: "#575558",
        onyx: "#3D3D3D",
        silver: "A1A1A1",
        warning: "#C90000",
        thistle: "#C1B2CC",
        ultraViolet: "#575481",
        seashell: "#FFF4EB",
      },
    },
  },
  plugins: [],
};
