import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      borderColor: { 'white-20': 'rgba(255, 255, 255, 0.2)' },
      backgroundImage: { main: "url('/assets/img/bg.png')" },
    },
  },
  plugins: [],
}
export default config
