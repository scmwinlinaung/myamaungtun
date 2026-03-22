import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3000,
    open: true,
    headers: {
      'Content-Type': 'text/javascript'
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});
