const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}",
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      borderStyle: {
        'dotted': 'dotted',
        'dashed': 'dashed',
        'double': 'double',
        'groove': 'groove',
        'ridge': 'ridge',
        'inset': 'inset',
        'outset': 'outset',
        'none': 'none',
      },
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [
    require("tailwindcss-fluid-type"),
    require('flowbite/plugin')
  ],
};
