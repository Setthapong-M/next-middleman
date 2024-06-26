/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "green100": "#E2ECE1",
        "green200": "#B5C69C",
        "yellow100": "#FCE029",
        "wrong": "#CD3636",
        "grey100": "#F3F3F3",
        "grey200": "#717171",
        "grey300": "#333333",
        "grey400": "#222222",
      },
      fontFamily: {
        sans: ['var(--font-sukhumvitText)']
      }
    },
  },
  plugins: [],
};
