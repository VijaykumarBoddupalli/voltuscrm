import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border, 220 13% 91%) / 1)", // ✅ Fixed HSL syntax
        input: "hsl(var(--input, 220 13% 91%) / 1)",
        ring: "hsl(var(--ring, 220 13% 91%) / 1)",
        background: "hsl(var(--background, 0 0% 100%) / 1)",
        foreground: "hsl(var(--foreground, 222 47% 11%) / 1)",
        primary: {
          DEFAULT: "hsl(var(--primary, 220 90% 56%) / 1)",
          foreground: "hsl(var(--primary-foreground, 0 0% 100%) / 1)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary, 240 10% 30%) / 1)",
          foreground: "hsl(var(--secondary-foreground, 0 0% 100%) / 1)",
        },
      },
      borderRadius: {
        lg: "var(--radius, 12px)",
        md: "calc(var(--radius, 12px) - 2px)",
        sm: "calc(var(--radius, 12px) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
