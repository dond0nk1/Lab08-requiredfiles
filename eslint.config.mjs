// import js from "@eslint/js";
// import globals from "globals";
// import pluginReact from "eslint-plugin-react";
// import { defineConfig } from "eslint/config";


// export default defineConfig([
//   { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"] },
//   { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: {...globals.browser, ...globals.node} } },
//   pluginReact.configs.flat.recommended,
// ]);

// Edited gotten from: https://github.com/jsx-eslint/eslint-plugin-react#configuration

// import react from 'eslint-plugin-react';
// import globals from 'globals';

// export default [
//   {
//     files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
//     plugins: {
//       react,
//     },
//     languageOptions: {
//       parserOptions: {
//         ecmaFeatures: {
//           jsx: true,
//         },
//       },
//       globals: {
//         ...globals.browser,
//       },
//     },
//     rules: {
//       'react/jsx-uses-react': 'error',
//       'react/jsx-uses-vars': 'error',
//     },
//     // ... others are omitted for brevity
//   },
// ];

// Updated eslint with security configuration
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginSecurity from "eslint-plugin-security";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      security: pluginSecurity
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
      "security/detect-eval-with-expression": "error",
    }
  }
];