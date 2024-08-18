/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          100: '#C689C6',
          200: '#937dc2',
        },
        white: '#ffffff',
        black: '#0f0f0f',
      },
    },
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    },
    // fontSize: {
    //   '4.5xl': '2.5rem'
    // }
  },
  plugins: [],
  darkMode:'selector',
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   theme: {
//  
//   }
// }