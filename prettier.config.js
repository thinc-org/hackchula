/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  singleQuote: false,
  semi: true,
  trailingComma: "es5",
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  endOfLine: "auto",
};

export default config;
