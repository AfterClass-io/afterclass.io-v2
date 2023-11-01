import rgb from "../functions/rgb";

export const APP_THEMES = {
  dark: "dark",
  light: "light",
};

export type AppTheme = keyof typeof APP_THEMES;

export const appTheme = {
  colors: {
    primary: {
      default: rgb(`--app-primary-default`),
      dark: rgb(`--app-primary-dark`),
    },
    secondary: {
      default: rgb("--app-secondary-default"),
    },
    element: {
      secondary: rgb("--app-element-secondary"),
      tertiary: rgb("--app-element-tertiary"),
      disabled: rgb("--app-element-disabled"),
    },
    bg: {
      base: rgb("--app-bg-base"),
      alt: rgb("--app-bg-alt"),
    },
    surface: {
      base: rgb("--app-surface-base"),
      elevated: rgb("--app-surface-elevated"),
    },
    border: {
      primary: rgb("--app-border-primary"),
      secondary: rgb("--app-border-secondary"),
      default: rgb("--app-border-default"),
      elevated: rgb("--app-border-elevated"),
    },
    text: {
      "on-primary": rgb("--app-text-on-primary"),
      "on-secondary": rgb("--app-text-on-secondary"),
      "on-tertiary": rgb("--app-text-on-tertiary"),
      "em-high": rgb("--app-text-em-high"),
      "em-mid": rgb("--app-text-em-mid"),
      "em-low": rgb("--app-text-em-low"),
      placeholder: rgb("--app-text-placeholder"),
      error: rgb("--app-text-error"),
    },
  },
};
