/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
       boxShadow: {
      '3xl': '4px 4px 10px  rgba(0, 0, 0, 1.0)',
     'boxlist' : '0px 4px 4px 0px #00000040'

    }},
    keyframes: {
      scale: {
        '0%': { transform: 'scale(1)' },
        '100%': { transform: 'scale(1.5)' },
      }
    },
    animation: {
      scale: 'scale 1s infinite alternate'
    }
  
  },
  plugins: [],
}