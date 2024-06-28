module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {
      '2xl': '1536px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
