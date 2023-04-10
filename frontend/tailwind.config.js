/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        'glass': '0 8px 32px 0 rgba( 31, 38, 135, 0.37 ), 0 1px 6px 0 rgba( 31, 38, 135, 0.28 )',
      },
      backdropBlur: {
        'glass': '10px',
      },
      backgroundColor: {
        'glass': 'rgba( 255, 255, 255, 0.25 )',
      },
      backdropFilter: {
        'glass': 'blur( 4px )',
      },
    },
  },
  plugins: [],
}

