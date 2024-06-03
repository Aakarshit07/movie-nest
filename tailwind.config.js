/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-beige': '#ECE8E5',
        'soft-gray': "#E5E9EC"
      }
    },
  },
  plugins: [],
}

