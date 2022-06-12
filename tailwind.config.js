/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/App.vue',
    './src/pages/**/*.{vue,js,ts,jsx,tsx}',
    './src/layouts/**/*.{vue,js,ts,jsx,tsx}',
    './src/components/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: { extend: {} },
  plugins: [require('@tailwindcss/forms')],
};
