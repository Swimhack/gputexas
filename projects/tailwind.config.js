/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#ff4d00',
          600: '#e64500',
        },
      },
    },
  },
  plugins: [],
}