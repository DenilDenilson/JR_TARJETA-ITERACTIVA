const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    screen: {
      'xl': '1440px',
    },

    extend: {
      
      fontFamily: {
        'sans': ['Manrope', ...defaultTheme.fontFamily.sans],
      },

      colors:{
        //### Primary

        'Soft_Cyan': 'hsl(174, 77%, 80%)', // (Full Slider Bar)
        'Strong_Cyan': 'hsl(174, 86%, 45%)', // (Slider Backround)
        'Light_Grayish_Red': 'hsl(14, 92%, 95%)', //(Discount Background)
        'Light_Red': 'hsl(15, 100%, 70%)', //(Discount Text)
        'Pale_Blue': 'hsl(226, 100%, 87%)', //(CTA Text)

        //### Neutral

        'White': 'hsl(0, 0%, 100%)', //(Pricing Component Background)
        'Very_Pale_Blue': 'hsl(230, 100%, 99%)', //(Main Background)
        'Light_Grayish_White': 'hsl(224, 65%, 95%)', //(Empty Slider Bar)
        'Light_Grayish_Blue': 'hsl(223, 50%, 87%)', //(Toggle Background)
        'Grayish_Blue': 'hsl(225, 20%, 60%)', //(Text)
        'Dark_Desaturated_Blue': 'hsl(227, 35%, 25%)', //(Text & CTA Background)
      },
    },
  },
  plugins: [],
}