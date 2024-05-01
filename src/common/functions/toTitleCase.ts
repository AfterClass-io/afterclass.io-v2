/**
 * Converts space delimited string of words into title case.
 *
 * @param s - The string to convert to title case.
 * @returns String in the title case.
 *
 * @example
 * const s = "THE QUICK BROWN FOX";
 * console.log(toTitleCase(s)); // Output: "The Quick Brown Fox"
 */
export function toTitleCase(s: string) {
  return s.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
  );
}
