/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor:{
        'cyan-blue':'#03cdff'
      },
      fontSize:{
        '50px':'2.3rem'
      }
      }
    },
  plugins: [
    '@tailwindcss/overflow'
  ],
}