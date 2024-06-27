/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'index.html',
    './Server/*.{js, ts, jsx, tsx}',
    './firebase.js'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'light-theme': {
          background: '#f5f5f5',
          text: '#333333',
          primary: '#4169E1',
          secondary: '#f8f9fa',
          border: '#ced4da',
        },
        'dark-theme': {
          background: '#090a12',
          text: '#f8f9fa',
          primary: '#4169E1',
          secondary: '#f8f9fa',
          border: '#ced4da',
        },
        fill: {
          1: 'rgba(255, 255, 255, 0.10)',
        },
        indigo: {
          500: "#6172F3",
          700: "#3538CD",
        },
        success: {
          25: "#F6FEF9",
          50: "#ECFDF3",
          100: "#D1FADF",
          600: "#039855",
          700: "#027A48",
          900: "#054F31",
        },
        pink: {
          25: "#FEF6FB",
          100: "#FCE7F6",
          500: "#EE46BC",
          600: "#DD2590",
          700: "#C11574",
          900: "#851651",
        },
        blue: {
          25: "#F5FAFF",
          100: "#D1E9FF",
          500: "#2E90FA",
          600: "#1570EF",
          700: "#175CD3",
          900: "#194185",
        },
        sky: {
          1: "#F3F9FF",
        },
        black: {
          1: "#00214F",
          2: "#344054",
        },
        gray: {
          25: "#FCFCFD",
          200: "#EAECF0",
          300: "#D0D5DD",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          900: "#101828",
        },
        richBlack: {
          1: "#11151C",
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        "green-gradient": "linear-gradient(90deg, #01797A 0%, #489399 100%)",
      },
      fontFamily: {
        "title": ["Cormorant Garamond", "serif"],
        "text": ["Quicksand", "serif"],
        'playwrite-slovenko': ["Playwrite SK", "sans-serif"],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    daisyui,
  ],
}

