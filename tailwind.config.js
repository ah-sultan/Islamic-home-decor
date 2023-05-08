const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '12px'
    },

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1200px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', ...fontFamily.sans],
      },

      colors: {
        "primary": "#77037B",
        "accent": "orange",
        "dark": "#252734",
        "darkBlue": "#0E111F",
        "light": "#F6F6F8",
        'text-color': '#000',
        "nav": '#fff'
      },
    },
    keyframes : {
      "stickyNav" : {
        "0%" : {top : '-200px'},
        "100%" : {top : "0"}
      },
      "heightPlus" : { 
        "0" : {height : 0},
        "100%" : {height : 'auto'}
      },
      "heightMinas" : { 
        "0" : {height :"auto",},
        "100%" : {height : 0}
      }
    },
    animation : {
      "stickyNav" : 'stickyNav .7s ease-in',
    }
  },
  plugins: [

  ],
}
