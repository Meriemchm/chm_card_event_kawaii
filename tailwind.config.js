/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        kawaiiPink: "#F092B9",
        kawaiiPurple: "#d8b4fe",
        kawaiiBlue: "#a5f3fc",
        kawaiiYellow: "#fef9c3",
      },
    },
  },
  plugins: [],
};
