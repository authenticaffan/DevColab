/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {},
    colors: {
      'themecolor' : '#11c591' 
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
