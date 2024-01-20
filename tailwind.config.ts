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
      zIndex: {
        elevated: "1",
        header: "10",
        "header-sidebar": "11",
        modal: "50",
        popover: "51",
        tooltip: "52",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", ...fontFamily.sans],
        display: ["var(--font-poppins)", "Poppins", ...fontFamily.sans],
      },
      boxShadow: {
        modal:
          "0px 0px 0px 0px rgba(7, 7, 8, 0.05), 0px 2px 5px 0px rgba(7, 7, 8, 0.05), 0px 9px 9px 0px rgba(7, 7, 8, 0.04), 0px 21px 13px 0px rgba(7, 7, 8, 0.03), 0px 38px 15px 0px rgba(7, 7, 8, 0.01), 0px 59px 16px 0px rgba(7, 7, 8, 0.00)",
      },
    },
  },
  plugins: [themingSystemPlugin, tailwindCssAnimatePlugin],
}) satisfies Config;
