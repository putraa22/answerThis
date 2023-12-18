/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        //Base
        dark: {
          50: '#EAEAEA',
          100: '#D5D5D5',
          200: '#C0C0C0',
          300: '#AAAAAA',
          400: '#959595',
          500: '#808080',
          600: '#6B6B6B',
          700: '#565656',
          800: '#414141',
          900: '#2B2B2B',
        },

        //Progress
        statusProgress: '#3498DB',
        statusRevision: '#F1C40F',
        statusLate: '#D0342C',
        statusDelivered: '#27AE60',
        statusCompleted: '#1DBF73',
        statusCanceled: '#9C9C9C',
        statusDispute: '#9B59B6',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        justme: ['Just Me Again Down Here', 'sans-serif'],
      },
      screens: {
        'sm': '550px',
        'md': '800px',
      },
    },
  },
  plugins: [],
}