import type { Config } from "tailwindcss";


const {fontFamily} = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      theme:{
        screens:{
          'xs': "475px",
          'sm':"640px",
          'md':"768px",
          'lg':"1024px",
          "xl":"1280px",
          '2xl':'1536px',
        }
      },
      fontFamily:{
        sans: ['Montserrat', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
