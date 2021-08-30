const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        lg: {
          css: [
            {
              color: theme('colors.gray.800'),
              h1: {
                fontWeight: '900',
                fontSize: '1.5rem',
              },
              h2: {
                fontWeight: '700',
                fontSize: '1.5rem',
              },
              strong: {
                fontWeight: '700',
                fontSize: '1.5rem'
              },
              p: {
                color: theme('colors.gray.200'),
                lineHeight: '1.5rem',
              },
              h3: {
                fontWeight: '800',
                color: theme('colors.gray.100'),

              },
            },
          ]
        },
      }),
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
