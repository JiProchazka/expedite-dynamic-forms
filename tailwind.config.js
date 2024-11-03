/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        error: colors.red
      }
    }
  },
  plugins: [require("flowbite/plugin")],
  safelist: [
    "text-green-500",
    "bg-green-100",
    "dark:bg-green-800",
    "dark:text-green-200",
    "text-red-500",
    "bg-red-100",
    "dark:bg-red-800",
    "dark:text-red-200",
    "text-yellow-500",
    "bg-yellow-100",
    "dark:bg-yellow-800",
    "dark:text-yellow-200"
  ]
}
