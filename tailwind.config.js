/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'livvic': ['Livvic', 'sans-serif'], 
      },
      colors:{
        '014e56': '#014e56',
        'f67e7e': '#f67e7e',
        '79c8c7': '#79c8c7',
        '2c6269': '#2c6269',
        '004047': '#004047',
        '012f34': '#012f34',
        '002529': '#002529',
        'ebecf0': '#ebecf0',
      },
      maxWidth:{
        base: '1150px',
      }, 
    },
  },
  plugins: [],
}