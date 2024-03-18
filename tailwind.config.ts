import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...require("tailwindcss/defaultTheme").fontFamily.sans],
        serif: [
          "Bitter",
          ...require("tailwindcss/defaultTheme").fontFamily.serif,
        ],
      },
      colors: {
        ...require("tailwindcss/defaultTheme").colors,

        "night-violet": "#21093A",

        "plum-purple": "#AA93FF",
        "light-lavender": "#E3D2FF",
        "almost-white": "#F0F0EA",
        "pale-khaki": "#D9D4A7",

        "night-violet-lighter-200": "#60378B",
        "plum-purple-darker-100": "#9F85FF",
        "plum-purple-lighter-100": "#BBA8FF",
        "almost-white-lighter-200": "#F9F9F6",
        "almost-white-lighter-300": "#FBFBF9",

        "gray-200": "#606060",
        "gray-300": "#9C9C9C",
        "gray-400": "#DEDEDE",
        error: "#EB5757",
      },

      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontSize: {
        base: ["1rem", { lineHeight: "1.375rem" }],
        "2xl": ["1.25rem", { lineHeight: "1.75rem" }],
        "3xl": ["1.375rem", { lineHeight: "1.75rem" }],
        "5xl": ["2.125rem", { lineHeight: "2.5rem" }],
        "6xl": ["2.625rem", { lineHeight: "3rem" }],
        sm: ["0.875rem", { lineHeight: "1.1875rem" }],
        xl: ["1.125rem", { lineHeight: "1.5rem" }],
        xs: ["0.75rem", { lineHeight: "1rem" }],
        xxs: ["0.625rem", { lineHeight: "0.875rem" }],
      },
    },
  },
};
