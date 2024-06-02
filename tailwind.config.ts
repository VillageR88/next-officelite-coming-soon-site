import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        tablet: '700px',
        screen1200: '1200px',
        screenInBetween: '1000px',
      },
      fontFamily: {
        kumbhSans: ['var(--font-kumbhSans)'],
      },
      colors: {
        gray1: '#121212',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

export default config;
