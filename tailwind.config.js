/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans"],
      },
      colors: {
        'custom-bg': '#141619'
      },
      textColor: {
        'custom-gray': '#999999',
      },
    },

  },
  plugins: [],
};

