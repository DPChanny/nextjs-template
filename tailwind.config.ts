import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.{ts,tsx,css}", "./src/**/*.{ts,tsx,css}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
