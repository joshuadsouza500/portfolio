import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        backgroundw: "#ffffff",
        backgroundb: "#000000",
        green: "#00806E",
        text: "#BFBFB1",
      },
      maxWidth: {
        "8xl": "1440px",
      },
      keyframes: {
        chevronScroll: {
          "0%": { opacity: "1", transform: "translateY(0)" },

          "100%": { opacity: "0", top: "100%" },
        },
        chevronScroll2: {
          "0%": { opacity: "1", transform: "translateY(0)" },

          "100%": { opacity: "0", transform: "translateY(50%)", top: "50%" },
        },
      },
      animation: {
        chevronScroll: "chevronScroll 2s infinite",
        chevronScroll2: "chevronScroll2 2s infinite ",
      },
    },
  },
  plugins: [],
};
export default config;
