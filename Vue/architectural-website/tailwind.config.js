/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}',],
  theme: {
    extend: {
      colors: {
        primary: '#1a237e',
        secondary: '#3949ab',
        accent: '#ff6f00',
        background: '#f5f5f5',
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

