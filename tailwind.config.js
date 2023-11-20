/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'strong-cyan' : 'hsl(172, 67%, 45%)',
        'very-dark-cyan' : 'hsl(183, 100%, 15%)',
        'dark-grayish-cyan' : 'hsl(186, 14%, 43%)',
        'grayish-cyan' : 'hsl(184, 14%, 56%)',
        'light-grayish-cyan' : 'hsl(185, 41%, 84%)',
        'very-light-grayish-cyan' : 'hsl(189, 41%, 97%)',
        'white' : 'hsl(0, 0%, 100%)'
      },
      fontSize: {
        'inputs': ['24px']
      },
      fontFamily: {
        'myFont': ['"Space Mono"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

