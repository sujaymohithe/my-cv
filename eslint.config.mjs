import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import tailwindPlugin from "eslint-plugin-tailwindcss";
import { jsdoc } from "eslint-plugin-jsdoc";

export default defineConfig([
  // Next.js base
  ...nextVitals,
  ...nextTs,

  // JSDoc plugin config
  jsdoc({
    config: "flat/recommended-typescript",
    rules: {
      "jsdoc/require-jsdoc": [
        "warn",
        {
          require: {
            FunctionDeclaration: true,
            MethodDefinition: true,
            ClassDeclaration: true,
            ArrowFunctionExpression: false,
            FunctionExpression: false,
          },
        },
      ],
      "jsdoc/require-param-description": "off",
      "jsdoc/require-returns-description": "off",
      "jsdoc/require-param-type": "off",
      "jsdoc/require-returns-type": "off",
    },
    settings: {
      jsdoc: {
        mode: "typescript",
      },
    },
  }),

  // Tailwind (separate to avoid conflicts)
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      tailwindcss: tailwindPlugin,
    },
    rules: {
      // Warn when Tailwind classes are out of order
      "tailwindcss/classnames-order": "warn",
      // Warn on invalid or unknown Tailwind class names - off since we have custom classes
      "tailwindcss/no-custom-classname": "off",
    },
    settings: {
      tailwindcss: {
        // Path to your Tailwind config
        config: "./tailwind.config.js",
        // Optional: if you use classnames/cn helpers
        callees: ["classnames", "cn"],
      },
    },
  },

  // Global ignores last (takes precedence)
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
