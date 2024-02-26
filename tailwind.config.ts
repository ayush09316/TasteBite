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
      'main': '#FF642F',
      'main-dark':'#c94518',
      'main-light': '#FFD7C9',
      'gray-dark': '#E3F1FF',
      'gray': '#7F7F7F',
      'gray-light': '#E8E8E8',
      'prim': '#E8EBF1',
    },
    
    },
  },
  plugins: [],
};
export default config;
