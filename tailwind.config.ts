import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vermilion: {
          DEFAULT: "#8F1018",
          dark: "#690A10",
          light: "#B21B26",
        },
        maroon: {
          DEFAULT: "#4A0710",
          deep: "#240307",
          dark: "#33050B",
          card: "#3E060D",
          light: "#610D18",
        },
        festiveRed: {
          DEFAULT: "#C62828",
          light: "#E53935",
          dark: "#A31A1A",
        },
        antiqueGold: {
          DEFAULT: "#D4AF57",
          light: "#F5DE93",
          pale: "#FCF3CF",
          dark: "#9B7829",
          brass: "#C59B27",
        },
        saffron: {
          DEFAULT: "#E9A23B",
          light: "#F6B85E",
          dark: "#C57B14",
        },
        parchment: {
          DEFAULT: "#FFF4DD",
          light: "#FFF9EB",
          card: "#FDF0D0",
          border: "#EEDBBA",
        },
        darkText: {
          DEFAULT: "#451B13",
          muted: "#6B3326",
          subtle: "#8A4D3E",
        },
      },
      fontFamily: {
        devanagari: ["var(--font-noto-sans-devanagari)", "sans-serif"],
        devanagariDisplay: ["var(--font-rozha)", "var(--font-noto-serif-devanagari)", "serif"],
        heading: ["var(--font-cinzel)", "var(--font-rozha)", "serif"],
        body: ["var(--font-noto-sans-devanagari)", "sans-serif"],
      },
      boxShadow: {
        goldGlow: "0 0 25px rgba(212, 175, 87, 0.45)",
        goldGlowLg: "0 0 45px rgba(212, 175, 87, 0.65)",
        diyaGlow: "0 0 30px rgba(233, 162, 59, 0.6), 0 0 60px rgba(198, 40, 40, 0.3)",
        cardFestive: "0 10px 30px -5px rgba(36, 3, 7, 0.6), 0 0 15px rgba(212, 175, 87, 0.2)",
        aartiThali: "0 15px 45px rgba(0, 0, 0, 0.8), 0 0 40px rgba(212, 175, 87, 0.5)",
      },
      backgroundImage: {
        "gold-shimmer": "linear-gradient(135deg, #F5DE93 0%, #D4AF57 50%, #9B7829 100%)",
        "maroon-gradient": "linear-gradient(180deg, #4A0710 0%, #240307 100%)",
        "radial-flame": "radial-gradient(circle, rgba(246, 184, 94, 0.9) 0%, rgba(233, 162, 59, 0.6) 45%, rgba(198, 40, 40, 0) 70%)",
        "radial-halo": "radial-gradient(circle, rgba(212, 175, 87, 0.35) 0%, rgba(143, 16, 24, 0.15) 50%, transparent 75%)",
      },
      animation: {
        "flame-flicker": "flicker 2.5s infinite ease-in-out",
        "halo-pulse": "pulseGlow 3s infinite ease-in-out",
        "spin-slow": "spin 25s linear infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "shimmer-pass": "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { transform: "scale(1) skewX(0deg)", opacity: "0.95" },
          "25%": { transform: "scale(1.08, 0.96) skewX(-1.5deg)", opacity: "1" },
          "50%": { transform: "scale(0.96, 1.05) skewX(1deg)", opacity: "0.9" },
          "75%": { transform: "scale(1.04, 0.98) skewX(-0.5deg)", opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.06)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
