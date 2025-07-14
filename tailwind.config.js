/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#FE8C00",
        white: {
          DEFAULT: "#FFFFFF",
          100: "#FAFAFA",
          200: "#FE8C00",
        },
        gray: {
          100: "#878787",
          200: "#878787",
        },
        dark: {
          100: "#181C2E",
        },
        error: "#F14141",
        success: "#2F9B65",
      },
      fontFamily: {
        quicksand: ["QuickSand-Regular", "sans-serif"],
        "quicksand-bold": ["QuickSand-Bold", "sans-serif"],
        "quicksand-semibold": ["QuickSand-SemiBold", "sans-serif"],
        "quicksand-light": ["QuickSand-Light", "sans-serif"],
        "quicksand-medium": ["QuickSand-Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
