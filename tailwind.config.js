/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        anton: ["Anton", "sans-serif"],
      },
      animation: {
        "scroll-left": "scrollLeft 60s linear infinite",
        "scroll-right": "scrollRight 60s linear infinite",
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, // ← Change here
        },
        scrollRight: {
          "0%": { transform: "translateX(-50%)" }, // ← And here
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
