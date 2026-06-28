import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Raise the chunk-size warning threshold (three.js is large but expected)
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Manual chunk splitting for optimal long-term caching
        manualChunks(id) {
          // Three.js in its own chunk — rarely changes, big library
          if (id.includes('three')) return 'three'
          // GSAP in its own chunk
          if (id.includes('gsap')) return 'gsap'
          // Framer Motion
          if (id.includes('framer-motion')) return 'framer'
          // React core
          if (id.includes('react-dom') || id.includes('react-router')) return 'react-vendor'
          // Lenis smooth scroll
          if (id.includes('lenis')) return 'lenis'
          // react-helmet-async
          if (id.includes('react-helmet')) return 'helmet'
        },
        // Hashed filenames for immutable long-term caching
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
})
