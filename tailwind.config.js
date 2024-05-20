/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryBrown: '#72351C',
        strokeInput: '#D2D2D2',
        textInput: '#737373',
        black2: '#2D2D2D',
      },
    },
  },
  plugins: [],
};
