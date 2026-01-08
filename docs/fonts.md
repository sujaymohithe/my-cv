# Fonts Architecture

This project uses **Next.js Fonts** together with **Tailwind CSS**.

## Why Next.js Fonts?

- Self-hosted fonts (no external CDN)
- Prevents layout shift (CLS)
- Automatic optimization

## How fonts are loaded

Fonts are imported in `app/layout.tsx`:

```ts
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
```

What this step does:

- Downloads and optimizes the font
- Defines CSS variables: --font-geist-sans anf --font-geist-mono
- Exposes a class (geistSans.variable) that makes the variables available in the DOM

## How fonts are applied

Fonts are applied using Tailwind utilities, not global CSS.

### Layout file

```html
<body
  className={`${geistSans.variable} 
  ${geistMono.variable} 
  font-sans 
  antialiased`}
></body>
```

This does two things:

- Defines the CSS variables in the DOM
- Applies the font using Tailwind (font-sans)

### Tailwind configuration

Tailwind is configured to consume the font variables:

```js
// tailwind.config.js
theme: {
  extend: {
    fontFamily: {
      sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      mono: ["var(--font-geist-mono)", "monospace"],
    },
  },
}
```

This ensures: 
 - font-sans -> Geist Sans
 - font-mono -> Geist Mono

 ## That's All! Done

 ### Important rules
- Do NOT set font-family in global.css
- Always use Tailwind utilities
- Fonts must be loaded in layout.tsx
- Tailwind controls typography
