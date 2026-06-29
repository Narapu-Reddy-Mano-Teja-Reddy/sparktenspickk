/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        secondary: '#0F0F0F',
        card: '#181818',
        'primary-gold': '#C89B3C',
        'secondary-gold': '#E7C97F',
        foreground: '#FFFFFF',
        muted: '#BDBDBD',
        border: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        heading: ['Michroma', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
