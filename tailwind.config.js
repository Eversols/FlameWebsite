/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollSnapType: {
        y: 'y mandatory',
      },
      scrollBehavior: {
        smooth: 'smooth',
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
