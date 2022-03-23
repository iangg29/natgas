module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/*.html",
  ],
  theme: {
    extend: {
      colors: {
        "natgas-azul-claro": "#007DBA",
        "natgas-azul": "#002b49",
        "natgas-verde": "#43B02A",
        "natgas-gris-cool": "#888B8D",
        "natgas-sec-one": "#00A99D",
        "natgas-sec-two": "#098B90",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require('flowbite/plugin')],
};
