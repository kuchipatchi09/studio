/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F7F6F2',
        ink: '#2B2B2E',
        signal: '#3158A6',
        line: '#E7E6E1',
        mugwort: '#556042',
        'grey-1': '#E7E6E1',
        'grey-3': '#C2C1BB',
        'grey-7': '#888783',
        'grey-9': '#535356',
        'grey-11': '#3A3A3D',
      },
      fontFamily: {
        sans: [
          '"IBM Plex Sans"',
          '"Pretendard Variable"',
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif'
        ],
        mono: [
          '"IBM Plex Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'monospace'
        ],
      },
      maxWidth: {
        'content': '1440px',
      },
    },
  },
  plugins: [],
}
