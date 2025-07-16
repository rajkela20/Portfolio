export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Base colors
        slate: {
          850: '#18212f', // Extra dark shade for dark mode backgrounds
        },
        // Custom colors
        primary: {
          light: '#3b82f6', // Vibrant blue-500
          DEFAULT: '#2563eb', // blue-600
          dark: '#1d4ed8', // blue-700
        },
        secondary: {
          light: '#8b5cf6', // Purple-500
          DEFAULT: '#7c3aed', // Purple-600
          dark: '#6d28d9', // Purple-700
        },
        accent: {
          light: '#10b981', // Emerald-500
          DEFAULT: '#059669', // Emerald-600
          dark: '#047857', // Emerald-700
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}