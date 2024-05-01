import {
  type Config,
  type KeyValuePair,
  type RecursiveKeyValuePair,
  type ResolvableTo,
} from "tailwindcss/types/config";

interface TwThemeConfig {
  colors: RecursiveKeyValuePair<string, string>;
  borderRadius?: KeyValuePair<string, string>;
  boxShadow?: KeyValuePair<string, string>;
}

/**
 * Generate theme config with colors nested under theme name
 * @param {keyof typeof AppTheme} themeName - AppTheme name
 * @param {object} param1 - Add { colors } that is similar to tailwind theme colors
 * @returns - Nested theme e.g. { colors: { [themeName]: param1.colors }}
 */
export const generateThemeTailwindConfig = (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore – AppTheme only refers to a type, but is being used as a value here.
  themeName: keyof typeof AppTheme,
  { colors, borderRadius, boxShadow }: TwThemeConfig,
) => {
  return {
    colors: {
      [themeName]: colors,
    } as ResolvableTo<RecursiveKeyValuePair<string, string>>,

    borderRadius: {
      [themeName]: borderRadius,
    } as unknown as ResolvableTo<KeyValuePair<string, string>>,

    boxShadow: {
      [themeName]: boxShadow,
    } as unknown as ResolvableTo<KeyValuePair<string, string>>,
  } satisfies Config["theme"];
};
