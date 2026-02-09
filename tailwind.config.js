export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0b1215",
          surface: "#0f1a1f",
          elevated: "#132329",
          border: "#1f2a30",
          text: "#e6f4ea",
          muted: "#94a3b8",

          accent: "#22c55e",
          accentSoft: "#86efac",
        },
      },

      boxShadow: {
        glow: "0 0 60px rgba(34,197,94,0.35)",
        glowLg: "0 0 120px rgba(34,197,94,0.45)",
      },

      animation: {
        spinFast: "spin 1.2s ease-in-out 2",
        float: "float 6s ease-in-out infinite",
        fadeUp: "fadeUp 0.8s ease forwards",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}
