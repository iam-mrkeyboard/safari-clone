/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00AA6C',
          dark: '#009960',
          light: '#E6F9F1',
          50: '#E6F9F1',
          100: '#C2F0DE',
          200: '#99E1BD',
          300: '#70D29C',
          400: '#47C37B',
          500: '#00AA6C',
          600: '#009960',
          700: '#007A4D',
          800: '#005C3A',
          900: '#003E27',
        },
        dark: '#1a1a1a',
        darker: '#0d0d0d',
        lighter: '#f5f5f5',
        lightest: '#fafafa',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        amiora: ['Amiora', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee var(--duration, 40s) linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
