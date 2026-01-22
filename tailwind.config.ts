import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0b1b33",
          800: "#10254a",
          700: "#17315e",
        },
        brass: {
          600: "#b08d57",
          500: "#c6a46a",
        },
      },
      boxShadow: {
        soft: "0 12px 30px rgba(16, 37, 74, 0.10)",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#475569',
            a: {
              color: '#c6a46a',
              '&:hover': {
                color: '#b08d57',
              },
              textDecoration: 'none',
              fontWeight: '500',
            },
            h2: {
              color: '#0b1b33',
              fontWeight: '700',
              marginTop: '2em',
              marginBottom: '0.75em',
            },
            h3: {
              color: '#0b1b33',
              fontWeight: '600',
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
            strong: {
              color: '#0b1b33',
              fontWeight: '600',
            },
            ul: {
              marginTop: '1em',
              marginBottom: '1em',
            },
            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
