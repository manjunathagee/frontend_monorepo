import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

export default {
  content: ["./src/**/*.tsx"],
  presets: [sharedConfig],
  theme: {
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
      "rubik-italic": ["Rubik-Italic", "sans-serif"],
    },
    extend: {
      colors: {
        purple: "hsl(277deg 91%, 56%)",
        grey: {
          500: "hsl(216deg 25% 25%)",
          300: "hsl(215deg 27% 32%)",
          200: "hsl(219deg 13% 44%)",
        },
        green: "hsl(219 deg 13% 44%)",
        "light-grey": {
          300: "hsl(216deg 47% 78%)",
          200: "hsl(220deg 38% 97%)",
          100: "#EDF1F9",
        },
        white: "hsl(0deg 0% 100%)",
        red: {
          500: "hsl(0deg 82% 63%)",
        },
      },
      backgroundImage: {
        "light-dual-images":
          "url(./src/assets/images/light_ellipses_top_left.svg), url(./src/assets/images/light_ellipses_bottom_right.svg)",
        "dark-dual-images":
          "url(./src/assets/images/dark_ellipses_top_left.png), url(./src/assets/images/dark_ellipses_bottom_right.png)",
      },
      backgroundPosition: {
        "top-left-bottom-right": "top left, bottom right",
      },
    },
  },
  plugins: [],
} satisfies Config;
