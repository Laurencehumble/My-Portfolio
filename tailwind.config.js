/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      fontFamily: {
        work_sans: ["Work Sans", "sans-serif"],
        patua_one: ["Patua One", "serif"],
    },
    keyframes: {
      updown: {
        '0%': { transform: 'translateY(-20px)' },
        '50%': { transform: 'translateY(0px)' },
        '100%': { transform: 'translateY(-20px)' },
      },
    },
    animation: {
      updown: 'updown 2s infinite alternate', // Corrected to use the 'updown' keyframe
    },   
    },
  },
  plugins: [],
}

