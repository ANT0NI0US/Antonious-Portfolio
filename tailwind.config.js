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
      keyframes: {
        move: {
          "0%, 100%": { left: "0" },
          "50%": { left: "calc(100% - 60px)" },
        },
      },
      animation: {
        textEffect: "move 4s linear infinite",
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
