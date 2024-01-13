import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "secondary-hover": "var(--secondary-hover)",
        "gradiant-color": "var(--gradiant-color)",
        "black-one-color": "var(--black-one-color)",
        "black-two-color": "var(--black-two-color)",
        "black-three-color": "var(--black-three-color)",
        "white-color": "var(--white-color)",
        "gray-one-color": "var(--gray-one-color)",
        "gray-two-color": "var(--gray-two-color)",
        "gray-three-color": "var(--gray-three-color)",
        "gray-four-color": "var(--gray-four-color)",
        "success-color": "var(--success-color)",
        "info-color": "var(--info-color)",
        "danger-color": "var(--danger-color)",
        "warning-color": "var(--warning-color)",
        "main-color": "var(--main-color)",
        "main-color-hover": "var(--main-color-hover)",
        "orange-color": "var(--orange-color)",
        "orange-color-hover": "var(--orange-color-hover)",
        "blue-gradient": "var(--blue-gradient)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  important: true,
};
export default config;
