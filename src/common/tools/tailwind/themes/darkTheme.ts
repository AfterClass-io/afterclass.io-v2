import { type Config } from "tailwindcss";

import { generateThemeTailwindConfig } from "../functions/generateThemeTailwindConfig";
import { themeToCssVariables } from "../functions/themeToCssVariables";
import { APP_THEMES } from "./appTheme";

/**
 * Editable Tailwind config for theme
 * @param twConfig - Passed in from plugin's addBase({ theme }) function
 * @returns - Raw Tailwind theme object
 */
export const darkThemeConfig = (_twConfig: Partial<Config> = {}) => {
  return {
    colors: {
      primary: {
        default: "#6E84F7",
        dark: "#2E1E8A",
      },
      secondary: {
        default: "#EA9C42",
      },
      element: {
        secondary: "#1A1344",
        tertiary: "#14131B",
        disabled: "#1E1E1F",
      },
      bg: {
        base: "#131316",
        alt: "#17171C",
      },
      surface: {
        base: "#1C1C21",
        elevated: "#232329",
      },
      border: {
        primary: "#5A74FC",
        secondary: "#241A5B",
        default: "#2D2D39",
        elevated: "#373743",
      },
      text: {
        "on-primary": "#F2F2F3",
        "on-secondary": "#9485E5",
        "on-tertiary": "#A2A2A9",
        "em-high": "#F2F2F3",
        "em-mid": "#A2A2A9",
        "em-low": "#7A7A85",
        placeholder: "#494950",
      },
    },
  };
};

/**
 * Converts tailwind config object to flattened CSS variables
 * @param twConfig - Passed in from plugin's addBase({ theme }) function
 * @returns - Returns flat CSS variables object derived from theme config
 */
export const darkCssVariables = (twConfig: Config["theme"]) =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore – argument didn't match
  themeToCssVariables(darkThemeConfig(twConfig));

/**
 * Nest tailwind config with theme as parent key
 * @returns - Tailwind theme's object { colors: { badmanners: { color1: '#000' }}}
 */
export const darkTailwindConfig = generateThemeTailwindConfig(APP_THEMES.dark, {
  colors: {
    ...darkThemeConfig().colors,
    // Add non-standard colors here
    // yellow: '#FFFF77',
  },
});
