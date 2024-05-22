/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryBrown: '#72351C',
        brown2: '#391B0E',
        strokeInput: '#D2D2D2',
        textInput: '#737373',
        black2: '#2D2D2D',
        cream1: '#D2B183',
        cream2: '#E1C8A9',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
