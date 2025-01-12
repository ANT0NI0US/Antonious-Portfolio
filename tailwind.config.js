// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          xs: "1.5rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        merienda: ["Merienda", "cursive"],
        Monoton: ["Monoton"],
      },
      backgroundPosition: {
        "custom-pos": "0 0",
      },
      keyframes: {
        upDown: {
          "0%": { transform: "translateY(-20px)" },
          "50%": { transform: "translateY(20px)" },
          "100%": { transform: "translateY(-20px)" },
        },
        homeCursorText: {
          "0%, 10%, 100%": { width: "0" },
          "65%, 78%, 85%": { width: "100%", opacity: 1 },
          "75%, 81%": { opacity: 0 },
        },
        homeText: {
          "0%, 10%, 100%": { backgroundPosition: "-18rem 0" },
          "65%, 85%": { backgroundPosition: "0 0" },
        },
      },
      animation: {
        banner: "upDown 6s ease-in-out infinite",
        cursor: "homeCursorText 6s linear infinite",
        stroke: "homeText 6s linear infinite",
      },
      height: {
        screen: "100dvh",
      },
      colors: {
        main: "#151515",
        primary: "#dbf227",
        secondary: "#292836",
        light: "#daf3ff",
        orange: "#c18500",
        gradient1: "#989898",
        gradient2: "#686868",
      },
      screens: {
        xs: "350px",
      },
    },
  },
  plugins: [],
};
