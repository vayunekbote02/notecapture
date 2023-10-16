/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        x: ["Montserrat", "sans-serif"],
        c: ["Source Code Pro", "monospace"],
      },
    },
  },
  plugins: [],
};
