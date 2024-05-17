import { transform } from "next/dist/build/swc";
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
      width:{
        '40ch':'40ch',
        '30ch':'30ch',
        '60ch':'60ch',
      },
      keyframes:{
        slide:{
          "0%":{transform:'translateX(0%)'},
          '100%': {transform:'translateX(-100%)'}
        },
        fadeIn:{
          "from": {opacity: '0', transform:'translateX(-50px)'},
          'to' : {opacity: '1', transform:'translateX(0)'}
        }
      },
      animation:{
        slide:'slide 10s infinite linear',
        fadeIn:'.5s ease-in fadeIn'
      },
        screens:{
          'xs': "475px",
          'sm':"640px",
          'md':"768px",
          'lg':"1024px",
          "xl":"1280px",
          '2xl':'1536px',
        },
      fontFamily:{
        sans: ['Montserrat', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
