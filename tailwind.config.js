/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'poppins' : '"Poppins", "sans-serif"',
        'playfair': '"Playfair Display", "serif"',
        'greatVibes': '"Great Vibes", "cursive"',
        'lobster': '"Lobster", "sans-serif"',
        'lobsterTwo': '"Lobster Two", "sans-serif"'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}