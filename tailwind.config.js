module.exports = {
  content: [
    './index.html',
    './src/App.vue',
    './src/pages/**/*.{vue,js,ts,jsx,tsx}',
    './src/layouts/**/*.{vue,js,ts,jsx,tsx}',
    './src/components/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: { extend: {} },
  plugins: [require('@tailwindcss/forms')],
};
