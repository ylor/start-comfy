const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono Variable", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
