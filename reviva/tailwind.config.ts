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
        verde_escuro:'#1E4808',
        verde_claro: '#D1E8D3',
        branco:'#F2F2F2'
      },
    },
  },
  plugins: [],
};
export default config;
