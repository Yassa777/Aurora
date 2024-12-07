/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all your React files
  ],
  theme: {
    extend: {
      fontFamily: {
        script: ['"`Cookie"', 'cursive'], // Add your custom font
      },
    },
  },
  plugins: [],
};


