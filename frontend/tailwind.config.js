/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        Poppins:["Poppins","sans-serif"],
        inter:["Inter", "sans-serif"],
        barlow:["barlow", "sans-serif"]
      },
    },
  },
  plugins: [],
}