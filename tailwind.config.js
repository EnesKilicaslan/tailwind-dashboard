module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // class, 'media' or boolean
  theme: {
    extend: {
      colors: {
        primary: '#51e1ac',
        accent: '#ff73bb',
        secondary: '#6f7682',
        grayIcon: '#57606c',
      },
    },
  },
  variants: {},
  plugins: [],
};