/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'bg-color':'#dfdcd6',
        'main-color':'#0f1923',
        'detail-color':'#6e6e6e'
      },
      fontFamily:{
        'GoodTimes':['GoodTimes'],
        'Sansation':['Sansation'],
        'sans':['Sansation'],
      },
      backgroundImage: {
        'paper': "url('/public/background.jpg')",
      }
    },
  },
  
  plugins: [],
}
