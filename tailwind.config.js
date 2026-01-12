/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
      },
      screens: {
        xs: "480px",
        xl: "1200px",
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        light: "var(--light)",
        gray: "var(--gray)",
        "light-gray": "var(--light-gray)",
        "dark-gray": "var(--dark-gray)",
        "subtle-gray": "var(--subtle-gray)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: "var(--text)",
        muted: "var(--muted)",
        contrast: "var(--contrast)",
        accent: "var(--accent)",
        dark: {
          DEFAULT: "var(--dark)",
          hover: "var(--dark-hover)",
          contrast: "var(--dark-contrast)",
        },
        stroke: {
          DEFAULT: "var(--stroke)",
          hover: "var(--stroke-hover)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { transform: "translateY(10px)", opacity: 0 },
          to: { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 300ms ease-out infinite",
        slideUp: "slideUp 400ms ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
