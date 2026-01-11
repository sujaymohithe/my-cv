# JSDoc

The project uses JSDoc convention for comments that forces us to write comprehensive comments for the functions.

You can find the configurations for JSDoc in `eslint.config.mjs`.

```js
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
```
