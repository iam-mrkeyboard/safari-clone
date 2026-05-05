/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#A87133',
        dark: '#1a1a1a',
        darker: '#0d0d0d',
        lighter: '#f5f5f5',
        lightest: '#fafafa',
        tripadvisor: '#35E0A1',
        tripadvisorDark: '#2B9E73',
        tripadvisorLight: '#E6F9F1',
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
