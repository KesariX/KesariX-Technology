import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('gsap')) return 'gsap-vendor'
            if (id.includes('three')) return 'three-vendor'
            if (id.includes('lenis')) return 'lenis-vendor'
            if (id.includes('react-router')) return 'router-vendor'
            if (id.includes('react-dom')) return 'react-dom-vendor'
            if (id.includes('react')) return 'react-vendor'
          }
        },
      },
    },
  },
})
