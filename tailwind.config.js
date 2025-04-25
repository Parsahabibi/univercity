/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#60A5FA',
          DEFAULT: '#3B82F6',
          dark: '#1D4ED8',
        },
        purple: {
          light: '#C084FC',
          DEFAULT: '#A855F7', 
          main:'#47316D',
          dark: '#7E22CE',
        },
        red: {
          light: '#F87171',
          DEFAULT: '#EF4444',
          dark: '#B91C1C',
        },
        green:{
          main:'#99E142',
          dark:'#98E041',
        },
        gray:{
          main:'#E3E3E3',
          dark:'#3C3C3C',
        }
      },
    },
  },
  plugins: [],
}
