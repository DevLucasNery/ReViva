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
        violeta:'#6842A8',
        azul_claro: '#758CF2',
        branco:'#F2F2F2'
      },
    },
  },
  plugins: [],
};
export default config;
