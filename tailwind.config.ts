/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {},
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
<<<<<<< HEAD
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@vidstack/react/tailwind.cjs'),
  ],
=======
>>>>>>> 2e8427da4f61760ec89951d4975e609419fa157a
};
