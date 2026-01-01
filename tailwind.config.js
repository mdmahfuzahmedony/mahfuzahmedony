/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <--- Add this line
  daisyui: {
  themes: false, // এটি দিলে DaisyUI এর ডিফল্ট থিম আপনার ডিজাইন নষ্ট করবে না
},
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // If you are using daisyUI
}