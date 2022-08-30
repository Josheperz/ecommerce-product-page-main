/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    
    fontSize: {
      'xs': '.70rem',
      'sm': '.80rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    screens: {
      sm: '400px',
      md: '576px',
      lg: '976px',
      xl: '1440px',
    },
  },
  plugins: [],
}
