/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'ice-light': '#F8F9FE',
        'yellow-light': '#FFD09C',
        'yellow-light-hover': '#ffdc9c',
        'blue-main': '#536CDD',
        'blue-secondary': '#7C92F5',
        'light-blue': '#ADD0FD',
        'purple': '#372A60',
        'light-purple': '#a49fb9',
        'gray': {
          '100': '#edf0fc',
          '600': '#2C2C2C',
          '700': '#242424',
        }
      }
    },
    fontFamily: {
      sans: [
        "Poppins, sans-serif",
      ],
    },
    screens: {
      'mobile': '540px',
      // => @media (min-width: 640px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
