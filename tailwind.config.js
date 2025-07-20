/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "sf-pro": [
          "SF Pro",
          "SF Pro Text",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        blue: "#2997FF",
        "custom-gray": "#AEB1C3",
        "custom-blue": "#0065cc",
        "custom-white": "#cfd0dc",
        "light-gray": "#EBEBEE",
        graphite: "#717173",
        "custom-black": "#474747",
        "custom-purple": "#708DFA",
        "custom-pink": "#D464AE",
        "text-gray": "#6e6e73",
        "light-pink": "#eda4ff",
        "dark-gray": "#86868b",
        "custom-green": "#4e949f",
      },
      fontWeight: {
        light: 300,
        semilight: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
    plugins: [],
  },
};
