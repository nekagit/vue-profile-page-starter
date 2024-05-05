/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}'
  ],
  theme: {
    extend: {fontFamily: {
        libre: ['"Libre Baskerville"', ...defaultTheme.fontFamily.sans]
      }}
  },
  plugins: []
}
