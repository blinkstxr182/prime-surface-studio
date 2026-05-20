import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0A0A0A",
          carbon: "#1A1A1A",
          gray: "#2A2A2A",
          silver: "#C0C0C0",
          accent: "#C6F73C",
          "accent-dark": "#9BD127",
          "accent-glow": "rgba(198,247,60,0.3)",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem,8vw,7rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem,5vw,4.5rem)", { lineHeight: "1", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(2rem,4vw,3.5rem)", { lineHeight: "1.05" }],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(198,247,60,0.08) 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(26,26,26,0.9) 0%, rgba(42,42,42,0.4) 100%)",
      },
      boxShadow: {
        "accent-glow": "0 0 30px rgba(198,247,60,0.25)",
        "accent-glow-lg": "0 0 60px rgba(198,247,60,0.3)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(198,247,60,0.1)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(198,247,60,0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(198,247,60,0.5)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [animate],
};

export default config;
