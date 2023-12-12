const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    minWidth: {
      '96': '96px'
    },
    extend: {
      filter: {
        'darkmap': 'var(--map-tiles-filter)'
      }
    },
    // Add fonts to font family
    fontFamily: {
      'sans': ['Akzidenz', 'Arial', ...defaultTheme.fontFamily.sans],
      'serif': ['Libre Caslon', ...defaultTheme.fontFamily.serif],
      'mono': [...defaultTheme.fontFamily.mono]
    },
    fontSize: {
      'xs': '.85rem',
      'sm': '0.9rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem'
     }
  },
  darkMode: 'class', // or 'media' or 'class
  variants: {
    extend: {
      'backgroundColor': ['disabled']
    },
  },
  safelist: [
    'text-orange-500',
    'text-green-500',
    'text-blue-500',
    'text-red-500',
    {
      pattern: /text-([a-z]+)-(500)/,
    }
  ],
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
