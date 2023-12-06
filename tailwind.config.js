/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'light-cyan' : 'hsl(172, 67%, 65%)',
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
  variants: {
    extend: {
      borderWidth: ['responsive', 'hover', 'focus', 'active'],
      borderColor: ['responsive', 'hover', 'focus', 'active'],
      borderStyle: ['responsive', 'hover', 'focus', 'active'],
    }
  },
  plugins: [],
}

