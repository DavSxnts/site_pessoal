import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{
      colors:{
        'd-blue-500': '#6699FF',
        'd-blue-900': '#306998',
        'd-gray-500': '#1e1e1e ',

      },
      width:{
        120: '30rem',
        125: '31.25rem',
      },
      height:{
        125: '31.25rem'
      }
    }
  },
  plugins: [],
};
export default config;
