/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': { 'max': '639px' }, // Targeting screens smaller than 640px for home image adjust
        'ssm':{'max': '638px'},  //for item list adjust
        'moreSmall':{'max':'595px'},
        'middle':{'min':'955px',
          'max':'1100px'},
      },
      perspective:{
        1200: '1200px',
      }
    },
  },
  plugins: [],
}