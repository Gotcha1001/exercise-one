/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD58",
        "secondary-500": "#FFC132",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')"

      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
        star: "url('./assets/star1.png')",
      },
      boxShadow: {
        neon: "0 0 30px theme('colors.purple.500'), 0 0 60px theme('colors.purple.900')",
        sunset:
          "0 0 30px theme('colors.orange.400'), 0 0 60px theme('colors.orange.600')",
        sky: "0 0 30px theme('colors.blue.400'), 0 0 60px theme('colors.blue.600')",
        nature:
          "0 0 30px theme('colors.green.400'), 0 0 60px theme('colors.green.600')",
        teal: "0 0 30px theme('colors.teal.400'), 0 0 60px theme('colors.teal.600')",
        // New colors
        purple:
          "0 0 30px theme('colors.purple.300'), 0 0 60px theme('colors.purple.700')",
        red: "0 0 30px theme('colors.red.400'), 0 0 60px theme('colors.red.600')",
        grey: "0 0 30px theme('colors.gray.400'), 0 0 60px theme('colors.gray.600')",
        yellow:
          "0 0 30px theme('colors.yellow.400'), 0 0 60px theme('colors.yellow.600')",
        pink: "0 0 30px theme('colors.pink.400'), 0 0 60px theme('colors.pink.600')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
};
