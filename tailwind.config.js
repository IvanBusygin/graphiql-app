/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

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
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        '.scrollbar': {
          overflowY: 'auto',
          scrollbarColor: `#313949`,
          scrollbarWidth: '8px',
        },
        '.scrollbar::-webkit-scrollbar': {
          height: '1px',
          width: '16px',
        },
        '.scrollbar::-webkit-scrollbar-thumb': {
          backgroundColor: '#212A3B',
          borderRadius: '8px',
          border: '4px solid #313949',
        },
        '.scrollbar::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#212A3B',
        },
        '.scrollbar::-webkit-scrollbar-track-piece': {
          backgroundColor: '#313949',
          borderRadius: '8px',
        },
      });
    }),
  ],
};
