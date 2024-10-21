import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        verde_escuro:'#00543D',
        verde_claro: '#97D700',
        branco:'#F2F2F2'
      },
    },
  },
  plugins: [],
};
export default config;
