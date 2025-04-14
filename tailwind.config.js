/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html,css}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
        'mono': ['Fira Code', 'monospace'],
      }
    },
  },
  plugins: [tailwindScrollbar],
}

