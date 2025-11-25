/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /** BRANDING PRINCIPAL */
        primary: '#003A68',
        secondary: '#2AC5D7',

        /** ANCIENNES COULEURS (tu peux les supprimer si inutiles) */
        deepBlue: '#002A5C',
        royalBlue: '#004F9E',
        gold: '#D4AF37',
        lightGray: '#F4F4F4',
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
