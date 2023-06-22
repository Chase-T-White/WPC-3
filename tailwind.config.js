/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "primary-color": "#ee850b",
      white: "#fff",
      dark: "#141618",
      gray: "#4b4a48",
      "bg-light": "#e6e6e6",
      "bg-gradient-dark": "#1f1f1fd5",
      "bg-dark-orange": "#1d1d1d",
    },
  },
  plugins: [],
};
