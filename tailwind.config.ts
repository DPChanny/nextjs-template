import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/styles/**/*.{js, jsx, ts, tsx, css, scss, sass}",
    "./src/components/**/*.{js, jsx, ts, tsx, css, scss, sass}",
    "./src/app/**/*.{js, jsx, ts, tsx, css, scss, sass}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
