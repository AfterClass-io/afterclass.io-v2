"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { APP_THEMES } from "@/common/tools/tailwind/themes/appTheme";
import { inter, poppins } from "@/common/fonts";

const NEXT_THEMES = Object.keys(APP_THEMES).map((key) => key);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* This is required for fonts to work in Portal too */}
      <style global jsx>{`
        :root {
          --font-inter: ${inter.style.fontFamily};
          --font-poppins: ${poppins.style.fontFamily};
        }
      `}</style>
      <NextThemeProvider
        attribute="class"
        defaultTheme={APP_THEMES.dark}
        themes={NEXT_THEMES}
      >
        {children}
      </NextThemeProvider>
    </>
  );
}
