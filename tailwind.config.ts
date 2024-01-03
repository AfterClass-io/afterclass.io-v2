// Note: cannot use alias like "@/" here
import { themingSystemPlugin } from "./src/common/tools/tailwind/plugins/themingSystemPlugin";
import tailwindCssAnimatePlugin from "tailwindcss-animate";
import { fontFamily } from "tailwindcss/defaultTheme";

import { type Config } from "tailwindcss";
import { withTV } from "tailwind-variants/dist/transformer";

// withTv is required for tailwind-variants resposnive variants to work
export default withTV({
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", ...fontFamily.sans],
        display: ["var(--font-poppins)", "Poppins", ...fontFamily.sans],
      },
    },
  },
  plugins: [themingSystemPlugin, tailwindCssAnimatePlugin],
}) satisfies Config;
