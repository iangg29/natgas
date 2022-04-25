module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/*.html",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "bebas-regular": ["Bebas Neue Regular", "sans-serif"],
        "bebas-bold": ["Bebas Neue Bold", "sans-serif"],
        "bebas-light": ["Bebas Neue Light", "sans-serif"],
        "bebas-thin": ["Bebas Neue Thin", "sans-serif"],
        "gilroy-light": ["Gilroy Light", "sans-serif"],
        "gilroy-extrabold": ["Gilroy Extra Bold", "sans-serif"],
        "helvetica-bold": ["Helvetica Neue Bold", "sans-serif"],
        "helvetica-light": ["Helvetica Neue Light", "sans-serif"],
        "helvetica-medium": ["Helvetica Neue Medium", "sans-serif"],
        "helvetica-regular": ["Helvetica Neue Regular", "sans-serif"],
        "quicksand-regular": ["Quicksand Regular", "sans-serif"],
        "quicksand-bold": ["Quicksand Bold", "sans-serif"],
      },
      colors: {
        "natgas-azul-claro": "#007DBA",
        "natgas-azul": "#002b49",
        "natgas-verde": "#43B02A",
        "natgas-gris-cool": "#888B8D",
        "natgas-sec-one": "#00A99D",
        "natgas-sec-two": "#098B90",
      },
      keyframes: {
        "move-bg": {
          to: {
            backgroundPosition: "400% 0",
          },
        },
      },
      animation: {
        "move-bg": "move-bg 8s infinite linear",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
};
