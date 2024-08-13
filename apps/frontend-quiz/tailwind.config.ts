import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

export default {
  content: ["./src/**/*.tsx"],
  presets: [sharedConfig],
  theme: {},
  plugins: [],
} satisfies Config;
