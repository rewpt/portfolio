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
        zlorange: 'rgb(255, 176, 138)',
        zburgundy: 'rgb(147,73,85)',
        zlburgundy: 'rgb(158, 81, 93)',
        zpurple: 'rgb(85,57,75)',
        zlpurple: 'rgb(102, 68, 90)',
        zvlpurple: 'rgb(133, 90, 118)',
        zvlpurple: 'rgb(143, 93, 125)',
        zgrey: 'rgb(145,117,110)',
        zgreen: 'rgb(176,193,178)',
        zlgreen: 'rgb(216,219,207)',
        zdgreen: 'rgb(161, 171, 130)',
        zbg: '#FBFBFD',

      }
    },
  },
  plugins: [],
}
