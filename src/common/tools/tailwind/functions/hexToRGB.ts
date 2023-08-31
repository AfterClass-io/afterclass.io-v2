import { inputToRGB } from "@ctrl/tinycolor";

/**
 * Converts color input into `r g b` format using tinycolor lib
 * @param {ColorInput} value - The color input e.g #000
 * @returns {string} String in format `${r} ${g} ${b}`
 */
export const hexToRGB = (value: string | undefined): string => {
  if (!value) return "";
  // check if the color is valid
  // get the rgb values of the color
  const { r, g, b } = inputToRGB(value);
  // return the rgb values in a string
  return `${r} ${g} ${b}`;
};
