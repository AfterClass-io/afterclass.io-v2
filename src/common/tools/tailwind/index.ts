import type { Config } from "tailwindcss";
import tailwindCssAnimatePlugin from "tailwindcss-animate";

import { themingSystemPlugin } from "./plugins/themingSystemPlugin";

export default {
  content: [""],
  theme: {
    extend: {},
  },
  plugins: [themingSystemPlugin, tailwindCssAnimatePlugin],
} satisfies Config;
