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
      },
      animation:{
        slide:'slide 5s infinite linear',
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
