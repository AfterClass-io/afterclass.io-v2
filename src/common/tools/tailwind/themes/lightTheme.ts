import { type Config } from "tailwindcss";

import { generateThemeTailwindConfig } from "../functions/generateThemeTailwindConfig";
import { themeToCssVariables } from "../functions/themeToCssVariables";
import { APP_THEMES } from "./appTheme";

/**
 * Editable Tailwind config for theme
 * @param twConfig - Passed in from plugin's addBase({ theme }) function
 * @returns - Raw Tailwind theme object
 */
export const lightThemeConfig = (_twConfig: Partial<Config> = {}) => {
  return {
    colors: {
      primary: {
        default: "#5039D4",
        dark: "#2E1E8A",
      },
      secondary: {
        default: "#EA9C42",
      },
      element: {
        secondary: "#E1DDF8",
        tertiary: "#E5E4EC",
        disabled: "#DDDDDF",
      },
      bg: {
        base: "#F1F1F3",
        alt: "#ECECEF",
      },
      surface: {
        base: "#ECECEF",
        elevated: "#E6E6EA",
      },
      border: {
        primary: "#432CC3",
        secondary: "#D4CEF2",
        default: "#D7D7DF",
        elevated: "#D1D1DC",
      },
      text: {
        "on-primary": "#F2F2F3",
        "on-secondary": "#5039D4",
        "on-tertiary": "#56565D",
        "em-high": "#070708",
        "em-mid": "#56565D",
        "em-low": "#7A7A85",
        placeholder: "#AFAFB6",
        error: "#DC2626",
      },
    },
  };
};

/**
 * Converts tailwind config object to flattened CSS variables
 * @param twConfig - Passed in from plugin's addBase({ theme }) function
 * @returns - Returns flat CSS variables object derived from theme config
 */
export const lightCssVariables = (twConfig: Config["theme"]) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore – argument didn't match
  return themeToCssVariables(lightThemeConfig(twConfig));
};

/**
 * Nest tailwind config with theme as parent key
 * @returns - Tailwind theme's object { colors: { badmanners: { color1: '#000' }}}
 */
export const lightTailwindConfig = generateThemeTailwindConfig(
  APP_THEMES.light,
  {
    colors: {
      ...lightThemeConfig().colors,
      // Add non-standard colors here
      // yellow: '#FFFF77',
    },
  }
);
