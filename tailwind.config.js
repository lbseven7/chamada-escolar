/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      'btn-color': '#87C1C4',
      'primary-bg': '#E8E7E7',
      'secundary-bg': '#67b0b4',
      'font-color': '#FFFFFF',
      'prymary-title': '#737373',
      'secundary-title': '#878B8B',
      error: '#D62828',
    },
  },
  plugins: [],
};
