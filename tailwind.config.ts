import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        card: '684px'
      },
      width: {
        card: '398px',
        "card-mobile": '310px'
      },
      fontSize: {
        headerMain: '34px',
        headerSub: '26px',
        "headerMain-mobile": '17px',
        "headerSub-mobile": '13px',
      },
      colors: {
        "customized-blue-1": "#004CFF",
        "customized-blue-2": "#F2F6FA",
        "customized-red": "#FF1B1B",
        "customized-gray-1": "#00000029",
        "customized-gray-2": "#929292"
      }
    },
  },
  plugins: [],
};
export default config;
