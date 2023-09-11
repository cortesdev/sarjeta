/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', // Add TypeScript file extensions
    './public/index.html',
    "./node_modules/flowbite/**/*.js"
  ], theme: {
    extend: {},
  },
  plugins: [],
}