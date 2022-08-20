module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: [
      "plugin:vue/vue3-essential",
      "eslint:recommended", /*eslint应用在vue中的必须配置*/
      "@vue/typescript/recommended",
      "@vue/prettier",
      "@vue/prettier/@typescript-eslint"
    ],
    parserOptions: {
      ecmaVersion: 2020,
      ecmaFeatures: {
        jsx: true
      }
    },
    rules: {
      "no-console": "off",
      "no-debugger": "off",
      "@typescript-eslint/no-explicit-any": ["off"],
      "@typescript-eslint/no-var-requires": 0
    }
  };
  