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
        zorange: 'rgb(217,141,103)',
        zburgundy: 'rgb(147,73,85)',
        zpurple: 'rgb(85,57,75)',
        zlpurple: 'rgb(102, 68, 90)',
        zgrey: 'rgb(145,117,110)',
        zgreen: 'rgb(176,193,178)',
        zlgreen: 'rgb(216,219,207)',

      }
    },
  },
  plugins: [],
}
