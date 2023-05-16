/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkRed: '#a22162',
      },
      screens: {
        max550: { max: '550px' },
      },
    },
  },
  plugins: [],
};
