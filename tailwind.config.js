/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',   // Small screens (e.g., mobile phones)
        'md': '768px',   // Medium screens (e.g., tablets)
        'lg': '1024px',  // Large screens (e.g., desktops)
        'xl': '1280px',  // Extra large screens
        // Add more custom screen sizes as needed
      },
      fontFamily: {
        'kaushan': ['Kaushan Script', 'cursive'],
      },
    },
  },
  plugins: [],
}