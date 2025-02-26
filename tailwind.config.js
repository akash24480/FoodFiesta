/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        customYellow: "#f5c332",
      },
      keyframes: {
        upDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },

        upDown2:{
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)", scale:1.1 },
        },

        upDown3: {
          "0%": { transform: "translateY(0) scale(1)" }, // Start
          "33%": { transform: "translateY(-10px) scale(1.1)" }, // Move up & scale
          "66%": { transform: "translateY(5px) scale(0.95)" }, // Move slightly down & shrink
          "100%": { transform: "translateY(0) scale(1)" }, // Back to normal
        },

        zoomInOut: {
          "0%, 100%": { transform: "scale(1)" }, // Normal size
          "50%": { transform: "scale(1.1)" }, // Slightly zoomed in
        },

      },
      animation: {
        upDown: "upDown 3s ease-in-out infinite",
        upDown2: "upDown 4s ease-in-out infinite",
        upDown3: "upDown3 5s ease-in-out infinite",
        zoomInOut: "zoomInOut 2s ease-in-out infinite",

      },
    },
  },
  plugins: [],
}

