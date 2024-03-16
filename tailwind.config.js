/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1a202c', // Dark shade for a powerful look
        'secondary': '#2d3748', // Complementary to the primary for depth
        'accent': '#f6ad55', // Bright, engaging color for calls to action
        'rival': '#e53e3e', // Red tone to signify competition
        'ally': '#3182ce', // Blue tone to denote team spirit
      },
      typography: {
        'body': {
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 'normal',
        },
        'headline': {
          fontFamily: 'Impact, Charcoal, sans-serif',
          fontWeight: 'bold',
        },
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [],
}

