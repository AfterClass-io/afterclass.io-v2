import { type RecursiveKeyValuePair } from "tailwindcss/types/config";

import { flattenObject } from "./flattenObject";

interface ObjToCssVariablesConfig {
  prefix?: string;
  convertHexToRgb?: boolean;
}

/**
 * Converts a nested object into CSS custom properties with optional prefixing and hex-to-RGB conversion.
 *
 * @param {RecursiveKeyValuePair<string, string>} obj - The nested object to convert into CSS custom properties.
 * @param {ObjToCssVariablesConfig} options - Optional configuration for custom property generation.
 * @param {string} options.prefix - The prefix to add to each custom property (e.g., '--prefix-key').
 * @param {boolean} options.convertHexToRgb - Whether to convert HEX color values to RGB format.
 * @returns {Record<string, string>} An object containing CSS custom properties.
 *
 * @template ObjToCssVariablesConfig - The type of the configuration object for custom property generation.
 */
export const objToCssVariables = (
  obj: RecursiveKeyValuePair<string, string>,
  { prefix = undefined, convertHexToRgb = true }: ObjToCssVariablesConfig
) => {
  const colors = flattenObject(obj, { convertHexToRgb });
  return Object.keys(colors).reduce((acc, key) => {
    const _prefix = prefix ? "--" + prefix + "-" : "--";
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore – Element implicitly has an type because expression of type can't be used to index type {}.
    acc[`${_prefix}${key}`] = colors[key];
    return acc;
  }, {});
};
