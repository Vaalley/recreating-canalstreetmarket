/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#5ea3ec",
        "primary-red": "#f64444",
        "primary-yellow": "#ffb400",
      }
    },
  },
  plugins: [],
}

