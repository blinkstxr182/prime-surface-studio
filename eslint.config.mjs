import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // React Hook Form's watch() is safe to use despite React Compiler warning
      "react-hooks/incompatible-library": "warn",
      // Allow deferred setState in effects (we use setTimeout to defer)
      "react-hooks/set-state-in-effect": "warn",
    },
  },
]);

export default eslintConfig;
