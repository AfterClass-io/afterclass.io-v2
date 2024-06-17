/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  singleQuote: false,
  trailingComma: "all",
  arrowParens: "always",
  tabWidth: 2,
  printWidth: 80,
  jsxSingleQuote: false,
  endOfLine: "lf",
};

module.exports = config;
