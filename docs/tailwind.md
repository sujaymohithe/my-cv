# Tailwind CSS Setup & Architecture

This project uses **Tailwind CSS v3** as the primary styling system, combined with:
- CSS variables for design tokens
- ESLint for class validation and ordering
- Prettier for formatting and class sorting

The goal is:
- Predictable styling and customised
- Strong consistency across components
- Easy theming and future white-label support (out-of-scope)

---

## Tailwind Version

- **Tailwind CSS:** `3.4.17`
- **PostCSS:** `8.x`
- **Autoprefixer:** enabled

Tailwind v3 is intentionally used for stability and ecosystem compatibility (Turbopack + Tailwind 4 is very strict).

---

## File Overview

| File | Responsibility |
|----|----|
| `tailwind.config.js` | Design system, tokens, utilities |
| `postcss.config.mjs` | Tailwind + Autoprefixer pipeline |
| `eslint.config.mjs` | Tailwind linting & class order |
| `global.css` | CSS variables and base colors |
| `docs/fonts.md` | Font architecture |

---

## Content Scanning

Tailwind scans the following paths for class usage:

```js
//tailwind.config.js
content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
]
```

## Design Tokens (CSS Variables)

Colors and other tokens are defined as CSS Variables in globals.css:

```css
/*globals.css*/
:root {
  --primary: #10b981;
  --secondary: #848993;
}
```

Tailwind maps these tokens:

```js
//tailwind.config.js
colors: {
  primary: "var(--primary)",
  secondary: "var(--secondary)",
}
```

Layout & Container:

- Containers are centered by default
- Consistent horizontal padding across breakpoints

```js
//tailwind.config.js
container: {
  center: true,
  padding: "1.5rem",
}
```

Responsive Breakpoints:

- xs: Small phones
- xl: Wide desktop screens

Used in addition to Tailwind’s default breakpoints. Meaning below ones are extended/overriden.

```js
//tailwind.config.js
extend: {
  screens: {
    xs: "480px",
    xl: "1200px",
  }
}
```

Animations:

Custom animations are defined using Tailwind’s extension system: Out of scope for this project

ESLint + Tailwind:

Tailwind linting is handled by eslint-plugin-tailwindcss.
Example rules:
```js
//eslint.config.mjs
"tailwindcss/classnames-order": "warn", //ensures consistent class ordering
"tailwindcss/no-custom-classname": "off", //allow custom classes or Non-Tailwind utility classes
```

Tailwind config resolution:

This allows ESLint to correctly analyze classnames built via helpers.
```js
//eslint.config.mjs
settings: {
  tailwindcss: {
    config: "./tailwind.config.js",
    callees: ["classnames", "cn"],
  },
}
```

PostCSS Pipeline:

- Tailwind generates utilities
- Autoprefixer ensures browser compatibility

```js
//postcss.config.mjs
plugins: {
  tailwindcss: {},
  autoprefixer: {},
}
```
In-short: This tells Next.js: "When you see CSS, run Tailwind and Autoprefixer on it.”

 ## That's All! Done