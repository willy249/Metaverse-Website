/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // 啟用暗黑模式，這裡設置為 "class"，表示使用 CSS 類名來切換暗黑模式
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        parisienne: ["Parisienne", "cursive"],
      },
      colors: {
        primary: "#00C2FF",
        secondary: "#DD0BFF",
        dark: "#111111",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
