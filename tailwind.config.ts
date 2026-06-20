import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red:        '#C73A2B',
          'red-dark': '#a52d20',
          green:      '#1a3a5c',
          gold:       '#D8A24C',
          beige:      '#FDF6EC',
          cream:      '#FAF3E8',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
        sans:  ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        float:    'float 6s ease-in-out infinite',
        'fade-up':'fadeUp 0.7s ease-out both',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)'  },
          '50%':     { transform: 'translateY(-18px)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)'    },
        },
      },
      boxShadow: {
        card:       '0 4px 24px rgba(0,0,0,0.07)',
        'card-hover':'0 14px 44px rgba(0,0,0,0.13)',
      },
    },
  },
  plugins: [],
} satisfies Config
