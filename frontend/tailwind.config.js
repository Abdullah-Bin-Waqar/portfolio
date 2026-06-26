export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0066FF',
        primaryDark: '#003D99',
        primaryLight: '#EFF6FF',
        surface: '#F8F9FA',
        surfaceSoft: '#F4F8FF',
        text: '#111827',
        muted: '#64748B'
      },
      boxShadow: {
        soft: '0 24px 80px rgba(15,23,42,0.08)',
        glow: '0 20px 80px rgba(0,102,255,0.15)'
      }
    }
  },
  plugins: []
};
