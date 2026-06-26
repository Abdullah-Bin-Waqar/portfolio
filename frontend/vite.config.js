import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/', // Replace "portfolio" if your repo has a different name

  plugins: [react()],

  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:5000'
    }
  }
});