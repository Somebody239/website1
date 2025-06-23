/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00ff88",
        "primary-hover": "#00cc6a",
        secondary: "#6b7280",
        "neon-green": "#00ff88",
        "neon-pink": "#ff0080",
        "neon-blue": "#0080ff",
        "neon-orange": "#ff8000",
        "neon-purple": "#8000ff",
      },
      fontFamily: {
        sans: [
          "Inter Variable",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
      },
      spacing: {
        section: "2rem",
        container: "1rem",
      },
      borderRadius: {
        container: "0.75rem",
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon-green': '0 0 20px rgba(0, 255, 136, 0.3)',
        'neon-pink': '0 0 20px rgba(255, 0, 128, 0.3)',
        'neon-blue': '0 0 20px rgba(0, 128, 255, 0.3)',
        'neon-orange': '0 0 20px rgba(255, 128, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
