// Note: cannot use alias like "@/" here
import { themingSystemPlugin } from "./src/common/tools/tailwind/plugins/themingSystemPlugin";
import { fontFamily } from "tailwindcss/defaultTheme";

import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", ...fontFamily.sans],
        display: ["var(--font-poppins)", "Poppins", ...fontFamily.sans],
      },
    },
  },
  plugins: [themingSystemPlugin],
} satisfies Config;
