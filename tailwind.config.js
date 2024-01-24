/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'moirai': ['Moirai One','sans-serif'],
      'gruppo': ['Gruppo', 'sans-serif'],
      'syncopate': ['Syncopate', 'sans-serif'],
      'thasadith': ['Thasadith', 'sans-serif']
    }
  },
  plugins: [],
}

