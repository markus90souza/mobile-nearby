/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#FCFDFE',
          200: '#E1EBF4',
          300: '#C4D0DB',
          400: '#73808C',
          500: '#45525F',
          600: '#1A1F24',
        },

        green: {
          soft: '#E9F3EF',
          light: '#3B9B62',
          base: '#257F49',
          dark: '#052914',
        },

        red: {
          light: '#FDEDED',
          base: '#F94144',
        },
      },
      fontFamily: {
        'rubik-r': ['Rubik_400Regular'],
        'rubik-m': ['Rubik_500Medium'],
        'rubik-sb': ['Rubik_600SemiBold'],
        'rubik-b': ['Rubik_700Bold'],
      },
    },
  },
  plugins: [],
}