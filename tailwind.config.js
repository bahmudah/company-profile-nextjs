const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro', 'ui-sans-serif', 'system-ui'],
        mono: ['IBM Plex Mono', 'ui-monospace'],
      },
      colors: {
        primarygray: '#F7F7FB',
        linegray: '#E8E8FB',
        borderField: '#BFBFE3',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        '.bg-hero': {
          'background-image': 'url(/header-hero.png)',
          'background-size': 'cover',
          'background-position': 'bottom',
          'background-repeat': 'no-repeat',
        },
        '.shadow-skill': {
          'box-shadow': '0px 15px 30px rgba(0, 0, 0, 0.1)',
        },
      };

      addUtilities(utilities);
    }),
  ],
};
