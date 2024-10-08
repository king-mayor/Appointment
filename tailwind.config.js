/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: {
      primary: "#5f6FFF",

    },
    
    extend: {
      fontFamily:{
        fredoka: ["Fredoka", "sans-serif"]
      }
      
    
    },
  },
  plugins: [],
}

