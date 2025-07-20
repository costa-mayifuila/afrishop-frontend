// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ✅ plugin oficial para Tailwind v4
  ],
  define: {
    global: {},
    'process.env': {},
  },
  build: {
    rollupOptions: {
      external: ['fs', 'path', 'os', 'stream', 'videojs-contrib-hls']
    }
  }
})
