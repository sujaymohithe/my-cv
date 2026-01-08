import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import tailwindPlugin from "eslint-plugin-tailwindcss";

export default defineConfig([
  // Next.js recommended rules
  ...nextVitals,
  ...nextTs,

  // Tailwind plugin configuration
  {
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

  // Ignore Next.js build output folders
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);
