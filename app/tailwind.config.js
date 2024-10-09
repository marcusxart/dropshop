/** @type {import('tailwindcss').Config} */
import scrollbarPlugin from "tailwind-scrollbar";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      gridTemplateColumns: {
        "auto-fill-100": "repeat(auto-fill, minmax(160px, 1fr))",
        "auto-fit-100": "repeat(auto-fit, minmax(160px, 1fr))",
      },
      boxShadow: {
        "card-shadow": "-4px 1px 65px -1px rgba(224, 198, 130, 0.4)",
        "input-border": "inset 0px 0px 0px 1.2px #FFC72780 ",
        "input-border-hover": "inset 0px 0px 0px 1.2px #F8C534 ",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [scrollbarPlugin(), require("tailwind-scrollbar-hide")],
};
