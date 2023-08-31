import { type Config } from "tailwindcss";

import { objToCssVariables } from "./objToCssVariables";
import { type RecursiveKeyValuePair } from "tailwindcss/types/config";

/**
 * Converts a Tailwind CSS config object into CSS custom properties (variables).
 *
 * @param {Config} config - The Tailwind CSS config object, e.g., { colors: {...}, borderRadius: {...} }
 * @returns {Record<string, string>} An object containing CSS custom properties representing the Tailwind CSS config.
 *
 * @template Config - The type of the Tailwind CSS config object.
 */
export const themeToCssVariables = (config: Config) => {
  return Object.keys(config).reduce((acc, key) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const value: RecursiveKeyValuePair<string, string> = config[key];
    if (key === "colors") {
      acc = {
        ...acc,
        ...objToCssVariables(value, {
          prefix: "app",
        }),
      };
    } else {
      acc = {
        ...acc,
        ...objToCssVariables(value, {
          prefix: "app",
          convertHexToRgb: false,
        }),
      };
    }
    return acc;
  }, {});
};
