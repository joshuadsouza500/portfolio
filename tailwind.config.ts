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
      },
      colors: {
        backgroundw: "#F7F7F7",
        backgroundb: "#090908",
        green: "#00806E",
        text: "#BFBFB1",
      },
    },
  },
  plugins: [],
};
export default config;