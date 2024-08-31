/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textpink: "#F85E9F", 
        purpple1:"#5D50C6",// Corrected hex color code
        customBlue: '#1e3a8a',
        customRed: 'rgba(255, 0, 0, 0.10)', // Custom color
      },
    },
  },
  plugins: [],
}
