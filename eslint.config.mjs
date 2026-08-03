import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  eslintConfigPrettier,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "node_modules/**",
    "next-env.d.ts",
  ]),
  {
    plugins: {
      prettier,
    },
    settings: {
      react: {
        version: "19.2",
      },
    },
    rules: {
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": "error",
      "prettier/prettier": [
        "error",
        {
          endOfLine: "lf",
          singleQuote: false,
          bracketSameLine: false,
          trailingComma: "all",
        },
      ],
      "react/react-in-jsx-scope": "off",
      "react/no-unknown-property": [
        2,
        {
          ignore: ["jsx", "global"],
        },
      ],
    },
  },
]);
