module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '500px',
        'md': '700px',
        'lg': '1200px',
        'xl': '1375px',
        // => @media (min-width: 992px) { ... }
      },
      colors : {
        orange: '#F47D48'
      }
    },
  },
  plugins: [],
}
