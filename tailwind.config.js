/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
        vazir: ['vazir'],
        tanha: ['tanha']
    },
    extend: {
        colors: {
            blue: '#A8D1E7',
            background: '#FGFAF2',
            hover: '#D4A3C4'
        }
    }
} ,
  plugins: [],

}

