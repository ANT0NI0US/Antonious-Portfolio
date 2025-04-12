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
        rotateCard: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(1turn)" },
        },
      },
      animation: {
        textEffect: "move 4s linear infinite",
        rotateCard:
          "rotateCard 5s linear(0 0%, 0.22 2.1%, 0.86 6.5%, 1.11 8.6%, 1.3 10.7%, 1.35 11.8%, 1.37 12.9%, 1.37 13.7%, 1.36 14.5%, 1.32 16.2%, 1.03 21.8%, 0.94 24%, 0.89 25.9%, 0.88 26.85%, 0.87 27.8%, 0.87 29.25%, 0.88 30.7%, 0.91 32.4%, 0.98 36.4%, 1.01 38.3%, 1.04 40.5%, 1.05 42.7%, 1.05 44.1%, 1.04 45.7%, 1 53.3%, 0.99 55.4%, 0.98 57.5%, 0.99 60.7%, 1 68.1%, 1.01 72.2%, 1 86.7%, 1 100%) infinite",
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
