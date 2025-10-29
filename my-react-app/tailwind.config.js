/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003366',
          light: '#004080',
        },
        secondary: '#4f46e5'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
          '100%': { transform: 'translateY(0px)' }
        },
        wave: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(6px)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 600ms ease-out both',
        float: 'float 6s ease-in-out infinite',
        'wave-slow': 'wave 4s linear infinite'
      },
      boxShadow: {
        'soft-xl': '0 10px 30px rgba(2,6,23,0.08)'
      }
    }
  },
  plugins: [],
}