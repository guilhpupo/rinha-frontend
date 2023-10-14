/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        accent: "#4E9590",
        dark: "#000000",
        button: "linear-gradient(180deg, #E4E4E4 0%, #F7F7F7 100%)",
        brackets: "#F2CAB8",
        gray: "#BFBFBF",
        invalid: "#BF0E0E",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
