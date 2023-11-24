"use client";

import { APP_THEMES } from "@/common/tools/tailwind/themes/appTheme";
import { ThemeProvider } from "next-themes";

const NEXT_THEMES = Object.keys(APP_THEMES).map((key) => key);

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={APP_THEMES.dark}
      themes={NEXT_THEMES}
    >
      {children}
    </ThemeProvider>
  );
};
