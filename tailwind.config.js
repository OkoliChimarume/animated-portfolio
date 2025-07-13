/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FCFCFC",
        "primary-dark": "#CBCACE",
        secondary: "#141414",
      },
      fontFamily: {
        intertight: ["Intertight", "sans-serif"],
        sans: ['DM Sans Variable', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
