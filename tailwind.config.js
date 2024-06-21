// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // theme: {
  //   extend: {},
  // },
  daisyui: {
    themes: ["light", "black", "cupcake", "night", "nord", "synthwave"],
  },
  plugins: [require("daisyui")],
};
