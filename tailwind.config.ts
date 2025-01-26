import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,svg}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,svg}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,svg}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx,svg}",
    "./public/**/*.svg", // Include SVG paths
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray2: "var(--gray2)",
        gray1: "var(--gray1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
