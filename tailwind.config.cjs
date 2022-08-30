/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#0E101B",
        "ColorText":"#909AAB",
        "ColorsHover":"#1A1D29"
      },
    },
  },
  plugins: [],
}