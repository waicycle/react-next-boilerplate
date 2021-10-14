module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{js,jsx,ts,tsx,vue}',
    './pages/**/*.{js,jsx,ts,tsx,vue}'
  ],
  
  darkMode: "class",
  theme: {
    fontFamily: {
      'sans': "'Inter var', Roboto, Arial, sans-serif",
      'serif': 'Merriweather, Georgia, serif'
    },
    extend: {
      backgroundImage: theme => ({
        'splash-light': "url('/damier-light.jpg')",
        'splash-dark': "url('/damier-dark.jpg')"
      }),
      colors: {
        brand: {
          50: "#EFF6FF",
          100: "#ccebf3",
          200: "#99d7e7",
          300: "#66c3da",
          400: "#33afce",
          500: "#009bc2",
          600: "#007c9b",
          700: "#005d74",
          800: "#003e4e",
          900: "#001f27"
        },
        key: {
          50: "#EFF6FF",
          100: "#ccebf3",
          200: "#99d7e7",
          300: "#66c3da",
          400: "#33afce",
          500: "#009bc2",
          600: "#007c9b",
          700: "#005d74",
          800: "#003e4e",
          900: "#001f27"
        },
      },
      zIndex: {
        '-10': '-10',
        '999': '999',
      },
      boxShadow: {
        ss: '0 0 100px 10px rgba(0, 0, 0, 0.05)',
      }
    }
  },
  variants: {
    extend: {
      boxDecorationBreak: ["hover"],
    },
  },
  plugins: [
    // require('tailwindcss-hero-patterns'),
    // require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}







