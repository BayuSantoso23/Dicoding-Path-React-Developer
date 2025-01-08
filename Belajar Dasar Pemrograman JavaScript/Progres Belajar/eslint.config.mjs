import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];

// Example from dicoding
// “off” atau 0: aturan tersebut tidak dipermasalahkan atau dimatikan.
// “warn” atau 1: aturan ditetapkan sebagai peringatan saja saat dilanggar.
// “error” atau 2: aturan wajib dipatuhi dan program dapat mengalami error.
// {
//   rules: {
//     "no-duplicate-imports": "off",
//     "no-use-before-define": "error",
//     "constructor-super": "error",
//     "no-var": "warn",
//     "no-unreachable": "warn",
//     "no-extra-boolean-cast": "warn"
//   }
// }