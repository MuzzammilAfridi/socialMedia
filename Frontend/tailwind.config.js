/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '480px',
      'md': '768px',
      'lg': '1176px',
      'xl': '1440px',
     
    },
    extend: {},
  },
  plugins: [],
}

