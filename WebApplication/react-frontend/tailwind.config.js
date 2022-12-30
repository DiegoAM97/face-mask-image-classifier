/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'intro': "url('/src/images/home-background.jpg')",
      }
    },
  },
  plugins: [],
}