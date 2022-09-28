/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      borderRadius: {
        '1/2': '50%',
      },
    },
  },
  plugins: [],
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
};
