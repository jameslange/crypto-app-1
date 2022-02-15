module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(15rem, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        "auto-fit": "repeat(auto-fit, minmax(0, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(0, 1fr))",
      },
      aspectRatio: {
        "1/1.5": "1 / 1.5",
      },
    },
    colors: {
      palBlue: "#5F647F",
      palBrown: "#82714e",
      palSilver: "#DAE2E4",
      palDark: "#040020",
      white: "#F5FFFA",
      // ...
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
