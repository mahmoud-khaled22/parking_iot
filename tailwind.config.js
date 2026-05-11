/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0f172a',
        'navy-light': '#1e293b',
      }
    }
  },
  plugins: [],
}
