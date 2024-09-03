import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        black: {
            DEFAULT: '#000',
            100: '#2C3E50'
          },
        blue: {
            DEFAULT: '#ADD8E6',
            100: '#466D93',
            200: '#4BA3C7',
            300: '#87CEEB',
            400: '#B0E0E6', 
          },
        },
      fontFamily: {
        serif: ['EB Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
};
export default config;
