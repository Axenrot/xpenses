/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#1fb6ff",
        secondary: "#7e5bef",
        warning: "#ff7849",
        success: "#13ce66",
        sun: "#ffc82c",
        neutral: "#8492a6",
        "gray-dark": "#273444",
        "gray-light": "#d3dce6",
        danger: "#990011",
        charcoal: "#101820",
        butter: "#FEE715",
      },
    },
  },
  plugins: [],
};
