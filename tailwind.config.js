/** @type {import('tailwindcss').Config} */
import lineClamp from "@tailwindcss/line-clamp";
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        dark: "#292827",
        primary: "#D9272B",
        white: "#FFFFFF",

        slate: "#A4AEBE",
        grayLight: "#E7E7E7",
        cream: "#FFFBF3",
      },
    },
  },
  plugins: [lineClamp],
};
