/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["lato"],
        monoton: ["Monoton"]
      },
    },
    colors: {
      primary: "#020f24",
      white: "#FFFFFF",
      secondary: "#64FFDA",
      trial: "#0c1421"
    },
  },
  plugins: [],
};
// #031229, #0c1421, #020f24, #64FFDA
// 21, 26, 30