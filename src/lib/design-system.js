// Design System Constants for Onzur Media Studio

export const colors = {
  // Primary Colors
  primary: '#00B9FF',
  secondary: '#04E4FF', 
  accent: '#9536E5',
  
  // Background Colors
  dark: '#00042A',
  darkBlue: '#131848',
  lightBlue: '#D9F0FF',
  
  // Text Colors
  white: '#FFFFFF',
  textLight: 'rgba(255, 255, 255, 0.90)',
  textMuted: 'rgba(255, 255, 255, 0.80)',
  textDark: '#1B2C5C',
  textDarkMuted: 'rgba(27, 44, 92, 0.80)',
};

export const spacing = {
  // Base spacing unit (4px)
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
  '4xl': '5rem',    // 80px
  
  // Section spacing
  sectionPadding: '5rem',      // py-20
  containerPadding: '1rem',    // px-4
  gridGap: '2rem',            // gap-8
};

export const typography = {
  // Font sizes
  xs: '0.75rem',     // 12px
  sm: '0.875rem',    // 14px
  base: '1rem',      // 16px
  lg: '1.125rem',    // 18px
  xl: '1.25rem',     // 20px
  '2xl': '1.5rem',   // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem',  // 36px
  '5xl': '3rem',     // 48px
  '6xl': '3.75rem',  // 60px
  '7xl': '4.5rem',   // 72px
  
  // Font weights
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  black: '900',
};

export const borderRadius = {
  none: '0',
  sm: '0.5rem',      // 8px
  md: '1rem',        // 16px
  lg: '1.5rem',      // 24px
  xl: '2rem',        // 32px
  full: '9999px',
};

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
};

export const transitions = {
  fast: '150ms ease-in-out',
  normal: '300ms ease-in-out',
  slow: '500ms ease-in-out',
};

export const breakpoints = {
  sm: '640px',
  md: '768px', 
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Common CSS classes for consistency
export const commonStyles = {
  // Sections
  section: 'py-20',
  sectionDark: 'bg-[#00042A] py-20',
  sectionLight: 'bg-gradient-to-b from-white to-[#D9F0FF] py-20',
  
  // Containers
  container: 'container mx-auto px-4 max-w-7xl',
  
  // Professional Typography
  heading1: 'heading-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight',
  heading2: 'heading-primary text-4xl md:text-5xl font-semibold tracking-tight',
  heading3: 'heading-secondary text-2xl md:text-3xl font-medium tracking-tight',
  heading4: 'heading-secondary text-xl md:text-2xl font-medium',
  bodyLarge: 'body-professional text-lg md:text-xl leading-relaxed',
  bodyBase: 'body-professional text-base md:text-lg leading-relaxed',
  bodySmall: 'body-professional text-sm md:text-base leading-relaxed',
  bodyEmphasis: 'body-emphasis text-base md:text-lg font-medium',
  
  // Buttons
  buttonPrimary: 'inline-flex items-center justify-center bg-gradient-to-r from-[#00B9FF] to-[#04E4FF] text-white px-8 py-4 rounded-full font-poppins font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg',
  buttonSecondary: 'inline-flex items-center justify-center bg-transparent border-2 border-[#04E4FF] text-[#04E4FF] px-8 py-4 rounded-full font-poppins font-semibold tracking-wide transition-all duration-300 hover:bg-[#04E4FF] hover:text-white',
  buttonGhost: 'inline-flex items-center justify-center text-[#04E4FF] px-6 py-3 rounded-lg font-poppins font-medium tracking-wide transition-colors duration-300 hover:bg-[#04E4FF]/10',
  
  // Cards
  cardGlass: 'bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 transition-all duration-300 hover:bg-white/15 hover:shadow-lg',
  cardSolid: 'bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl',
  
  // Gradients
  gradientPrimary: 'bg-gradient-to-r from-[#00B9FF] to-[#04E4FF]',
  gradientSecondary: 'bg-gradient-to-r from-[#04E4FF] to-[#9536E5]',
  gradientText: 'bg-clip-text text-transparent bg-gradient-to-r from-[#00B9FF] to-[#04E4FF]',
};