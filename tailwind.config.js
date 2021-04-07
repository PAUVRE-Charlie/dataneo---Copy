const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        blue : {
          light: '#DCE6FF',
          dark : '#0601B8',
          DEFAULT: '#0062FF',
        },
        grey : {
          darktext: "#44444F",
          text: '#636E95',
          dark : '#242f57',
          DEFAULT: '#97A0C3',
          light:'#F1F1F5',
          veryLight: '#FAFCFE',
          background:'#F2F2F2',
        },
        alert: {
          red: '#FC5A5A',
          redBackground:'rgba(252, 90, 90, 0.2)',
          green: '#3DD598',
          greenBackground : 'rgba(61, 213, 152, 0.2)',
          orange: '#FF974A',
          orangeBackground: 'rgba(255, 151, 74, 0.2)',
        },
      },
      fontSize: {
        'xxs': '10px',
        'x2l' : '1.375rem',
      },
      lineHeight:{
        '3.5': '14px',
      },
      maxWidth: {
        'content' : 'fit-content',
        '56' : '14rem',
        '60' : '15rem',
        '72' : '18rem',
      },
      minWidth: {
        'content' : 'fit-content',
        '20' : '5rem',
        '32' : '8rem',
        '36' : '9rem',
        '60' : '15rem',
        '72' : '18rem',
        '80' : '20rem',
        '96' : '24rem',
        '100' : '37.5rem',
      },
      maxHeight: {
        '48' : '12em',
        '80' : '20rem',
      },
      width:{
        'content':'fit-content',
        '0.75' : '3px',
        '200': '700px',
      },
      height: {
        'content' : 'fit-content',
        'university' : '28.5rem',
        '18' : '4.5rem',
        '13' : '3.25rem',
        '11/12' : '91.666667%',
        'map': '500px'
      },
      padding : {
        '2.5':'10px',
        '3.5' : '14px',
        '4.5' : '18px',
        '1/5' : '20%',
      },
      margin: {
        '-0.25':'-1px',
        '-0.5':'-2px',
      },
      boxShadow: {
        'header' : 'inset 0px -1px 0px #E2E2EA'
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
      borderColor: ['important'],
      borderRadius: ['important'],
      padding: ['hover'],
      margin: ['important','hover','group-hover'],
      display: ['group-hover', 'important'],
      textColor: ['important', 'disabled'],
      backgroundColor: ['important', 'disabled'],
      flexGrow:['important'],
      flexShrink:['important'],
      position:['important'],
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('important', ({ container }) => {
        container.walkRules(rule => {
          rule.selector = `.\\!${rule.selector.slice(1)}`
          rule.walkDecls(decl => {
            decl.important = true
          })
        })
      })
    })
  ]
}
