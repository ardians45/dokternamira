/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        teal: {
          deep: '#025D73',   // Primary Deep Teal
          soft: '#2EB2C2',   // Secondary Soft Teal
          light: '#E6F7F8',  // Light Mint/Teal Background
          hover: '#014758',  // Darker shade for active state
          tint: '#F0FDF4',   // Lightest Mint
        },
        accent: {
          pink: '#F3A3B5',   // Syar'i Beauty Care Accent
        },
        slate: {
          main: '#1E293B',
          dark: '#0F3A44',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Plus Jakarta Sans', 'serif'],
      },
    },
  },
  plugins: [],
}
