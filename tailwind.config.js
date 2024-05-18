/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["32px", "29.26px"],
      "3xl": ["48px", "50px"],
      "4xl": ["64px", "58px"],
      "8xl": ["128px", "106px"],
    },
    extend: {
      fontFamily: {
        "bright-retro": ["brightRetro", "sans-serif"],
        gotham: ["gotham", "sans-serif"],
      },
      colors: {
        primary: "#F6DEA8",
        coral: "#DD7047",
        charcoal: "#0E0E0E",
        purple: "#804E8F",
        olive: "#2A481D",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      // backgroundImage: {
      //   hero: "url('assets/images/mainShirt.jpg')",
      //   nav: "url('assets/images/mesh-gradient.png')",
      // },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
