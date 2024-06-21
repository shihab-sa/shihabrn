// tailwind.config.js
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  // theme: {
  //   extend: {},
  // },
  daisyui: {
    themes: ["light", "black", "cupcake", "night", "nord", "synthwave"],
  },
  plugins: [require("daisyui"), nextui()],
};
