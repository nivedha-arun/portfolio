/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "16px",
        sm: "24px",
        md: "34px",
        lg: "90px",
        xl: "76px",
        "2xl": "76px",
        "3xl": "96px",
        "4xl": "136px",
      },
      center: true,
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1440px) { ... }

      "3xl": "1600px",
      // => @media (min-width: 1600px) { ... }

      "4xl": "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      fontFamily: {
        'clash' : ['ClashDisplay-Bold', 'system-ui', 'sans-serif'],
        'poppins' : ['Poppins', 'system-ui', 'sans-serif']
      },
      colors: {
        "primary": "#8F20FF",
        "body": '#BCBCBC',
      }
    },
  },
  plugins: [],
}

