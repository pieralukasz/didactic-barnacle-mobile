module.exports = {
  root: true,
  extends: [
    "@react-native-community",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  ignorePatterns: [".eslintrc.js", "babel.config.js", "metro.config.js"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  rules: {
    "linebreak-style": "off",
    "no-duplicate-imports": "error",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "react/require-default-props": "off",
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": 0,
    "react/destructuring-assignment": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-namespace": "off",
  },
};
