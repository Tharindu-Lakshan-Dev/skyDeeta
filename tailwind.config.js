/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          electric: "#00AEEF",
          blue: "#004AAD",
        },
        secondary: {
          gray: "#707070",
          charcoal: "#333333",
          white: "#FFFFFF",
        },
        accent: {
          cyan: "#D0F0FF",
          silver: "#C0C0C0",
        },
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        dark: {
          100: "#1E293B",
          200: "#0F172A",
          300: "#020617",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      screens: {
        xs: '480px',
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}