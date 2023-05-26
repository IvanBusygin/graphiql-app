/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkRed: '#a22162',
        grayDark: '#212A3B',
        grayLight: '#313949',
        grayText: '#CED0D3',
      },
      screens: {
        max550: { max: '550px' },
      },
    },
    screens: {
      toosmall: { max: '319px' },
      xs: { max: '640px' },
      md: { max: '768px' },
      lg: { min: '640px' },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        '.scrollbar': {
          overflowY: 'auto',
          scrollbarColor: '#ff0000',
          scrollbarWidth: 'thin',
        },
        '.scrollbar::-webkit-scrollbar': {
          height: '2px',
          width: '10px',
        },
        '.scrollbar::-webkit-scrollbar-thumb': {
          backgroundColor: '#313949',
          border: '1px solid #CED0D3',
          borderRadius: '10px',
        },
        '.scrollbar::-webkit-scrollbar-track-piece': {
          backgroundColor: '#00000000',
        },
        '.scrollbar::-webkit-scrollbar-button:single-button:vertical:decrement': {
          height: '0px',
          backgroundColor: '#00000000',
        },
      });
    }),
  ],
};
