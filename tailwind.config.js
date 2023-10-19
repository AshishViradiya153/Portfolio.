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
        "hero-pattern": "url('/images/mountain2.webp') ",
      },
      fontFamily: {
        dosis: ["Dosis", "sans-serif"],
      },
      colors: {
        primary: "#392657",
      },
    },
  },
};
