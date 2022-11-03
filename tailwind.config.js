/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js, jsx}", "./components/**/*.{js, jsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        button: "0 0 20px 20px #5135FF inset",
      },
      backgroundImage: {
        hero: "url('/background.png')",
      },
      fontFamily:{
        cinnamonbold: "cinnamonbold",
        cinnamonextralight: "cinnamonextralight",
        cinnamonsemibold: "cinnamonsemibold",
        cinnamonextrabold: "cinnamonextrabold"
      }
    },
  },
  plugins: [],
}
