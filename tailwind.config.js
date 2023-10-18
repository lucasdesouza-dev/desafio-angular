/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: { boxShadow: {
      '3xl': '4px 4px 10px  rgba(0, 0, 0, 1.0)',
    }},
  },
  plugins: [],
}