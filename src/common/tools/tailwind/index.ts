import type { Config } from "tailwindcss";

import { themingSystemPlugin } from "./plugins/themingSystemPlugin";

export default {
  content: [""],
  theme: {
    extend: {},
  },
  plugins: [themingSystemPlugin],
} satisfies Config;
