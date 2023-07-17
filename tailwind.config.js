/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-red': '#992346',
        'theme-blue': '#645CA7',
        'theme-black': '#322C36',
        'theme-pink': '#E48DC7',
        'theme-white': '#EBC7E7',
      }
    },
  },
  plugins: [],
}