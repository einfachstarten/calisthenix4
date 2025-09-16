/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f8ff',
          100: '#dce9ff',
          200: '#b8d2ff',
          300: '#93bbff',
          400: '#6da3ff',
          500: '#4d8cff',
          600: '#3b6edb',
          700: '#2b52b0',
          800: '#1c377f',
          900: '#0d1d4d',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Archivo"', 'system-ui', 'sans-serif'],
        mono: ['"Roboto Mono"', 'monospace'],
      },
      boxShadow: {
        soft: '0 15px 45px -25px rgba(34, 64, 154, 0.45)',
      },
    },
  },
  plugins: [],
}
