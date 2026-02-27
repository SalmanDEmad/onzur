/** @type {import('tailwindcss').Config} */
const { COLOR_PALETTE } = require('./colors.config.js');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors from colors.config.js COLOR_PALETTE
        'brand-primary': COLOR_PALETTE.PRIMARY,      // #00B9FF - Main brand blue
        'brand-secondary': COLOR_PALETTE.SECONDARY,  // #04E4FF - Electric cyan
        'brand-accent': COLOR_PALETTE.ACCENT,        // #9536E5 - Purple
        'brand-dark': COLOR_PALETTE.DARK,           // #00042A - Deep navy (main background)
        'brand-dark-blue': COLOR_PALETTE.DARK_BLUE, // #131848 - Dark blue
        'brand-light-blue': COLOR_PALETTE.LIGHT_BLUE, // #D9F0FF - Light blue
        'brand-white': COLOR_PALETTE.WHITE,         // #FFFFFF - White
        'brand-text-dark': COLOR_PALETTE.TEXT_DARK, // #1B2C5C - Dark text
        
        // Keep existing colors for backward compatibility
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        
        // Background colors
        dark: 'rgb(var(--color-dark) / <alpha-value>)',
        'dark-blue': 'rgb(var(--color-dark-blue) / <alpha-value>)',
        'light-blue': 'rgb(var(--color-light-blue) / <alpha-value>)',
        
        // Text colors
        'text-light': 'rgb(var(--color-text-light) / <alpha-value>)',
        'text-muted': 'rgb(var(--color-text-muted) / <alpha-value>)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
        'source-sans': ['var(--font-source-sans)'],
      },
    },
  },
  plugins: [],
}
