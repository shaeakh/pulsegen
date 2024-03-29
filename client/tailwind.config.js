/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#19392e",
          "secondary": "#9EB384",
          "accent": "#CEDEBD",
          "neutral": "#f3f4f6",
          "base-100": "#ffffff",
          "info": "#0000ff",
          "success": "#19392e",
          "warning": "#FD8D14",
          "error": "#ff0000",
          "gry" : "#61615f"
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}