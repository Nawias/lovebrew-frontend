/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        potionAppear: {
          "0%": {
            opacity: 0,
            transform: "rotate(30deg)",
          },

          "18%": {
            transform: "rotate(-20deg)",
          },

          "50%": {
            transform: "rotate(15deg)",
          },

          "68%": {
            transform: "rotate(-5deg)",
          },

          "100%": {
            transform: "rotate(0deg)",
            opacity: 1,
          },
        },
      },
      animation: {
        potionAppear: "potionAppear 2s ease-out 0s 1",
      },
    },
  },
  plugins: [],
};
