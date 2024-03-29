/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode:'jit',
  theme: {
    fontFamily: {
      main: ['Poppins','sans-serif']
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman'
    },
    extend: {
      width: {
        main: '1220px'
      },
      backgroundColor: {
        main: '#ee3131',
        overlay: 'rbga(0,0,0,0.9)'
      },
      colors: {
        main: '#ee3131'
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
        '5': '5 5 0%',
        '6': '6 6 0%',
        '7': '7 7 0%',
        '8': '8 8 0%',
      },
      keyframes: {
        'slide-top': {
          '0%': {
           ' -webkit-transform' : ' translateY(40px)',
           ' transform' : ' translateY(20px)'
          },
          '100%':{
            ' -webkit-transform' : ' translateY(0)',
           ' transform' : ' translateY(0)'
          }
        },
        'slide-top-sm': {
          '0%': {
           ' -webkit-transform' : ' translateY(4px)',
           ' transform' : ' translateY(4px)'
          },
          '100%':{
            ' -webkit-transform' : ' translateY(0)',
           ' transform' : ' translateY(0)'
          }
        },
        'slide-right': {
          '0%': {
           ' -webkit-transform' : ' translateX(-1000px)',
           ' transform' : ' translateX(-1000px)'
          },
          '100%':{
            ' -webkit-transform' : ' translateX(0)',
           ' transform' : ' translateX(0)'
          }
        }
      },
      animation: {
        'slide-top': 'slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-top-sm': 'slide-top 0.2s linear both',
        'slide-right': 'slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'

      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/forms'),
  ],
};
