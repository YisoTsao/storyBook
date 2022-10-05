/** @type {import('tailwindcss').Config} */

const colors = require('./colorConfig');

module.exports = {
  theme: {
    extend: {
      borderRadius: {
        '1/2': '50%',
      },
      colors,
    },
  },
  plugins: [],
  purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}', './stories/*.{js,jsx}'],
};
