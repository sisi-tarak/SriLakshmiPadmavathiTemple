/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xs": {
        max: "424px",
      },
      xs: {
        min: "425px",
      },
      sm: {
        min: "640px",
      },
      md: {
        min: "768px",
      },
      lg: {
        min: "1024px",
      },
      xl: {
        min: "1280px",
      },
      "2xl": {
        min: "1536px",
      },
      "3xl": {
        min: "1936px",
      },
    },
    extend: {
      fontFamily: {
        playFair: ["Playfair Display", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        mainColor: "#C0322E",
        secondaryColor: "#25292F",
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
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      backgroundImage: {
        sevaImg: "url('./assets/sbg1.svg')",
        sevaImg2: "url('./assets/sbg2.svg')",
        sevaImg3: "url('./assets/sb3.svg')",
        sevaImg4: "url('./assets/sbg4.svg')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  important: "#root",
};
