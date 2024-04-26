/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  darkMode: 'class', 
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '15xl': '0.938rem',
        '17xl': '1.063rem',
        'heading': '4.5rem',
        'subHeading': '3rem',
      },
      colors: {
        'gmp-purple': '#4b6ef8',
        'gmp-lightblue': '#32aff6',
        'gmp-darkblue': '#0548a6',
        primary:{
          '100' : '#506EF7',
          '200' : '#35AFF8',
          '300' : '#4F6DF4'
        }
      },
      minWidth: {
        '16': '4rem',
        '24': '6rem',
        '40': '10rem',
        '44': '11rem'
      },
      margin: {
        '15': '.938rem',
        '7.5': '1.875rem'
      }
    },
    container: {
      maxWidth: {
        lg: '73.375rem'
      }
    },
    backgroundPosition: {
      bottom: 'bottom',
      'bottom-4': '10% center',
    }

  },
  plugins: [],
})

