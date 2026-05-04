import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import webfontDownload from 'vite-plugin-webfont-dl'

export default defineConfig(() => ({
  plugins: [react(), webfontDownload()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    target: 'es2020',
    minify: 'esbuild',
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          // Normalize to forward slashes for cross-platform matching
          const nid = id.replace(/\\/g, '/')

          // Three.js — rolldown deduplicates this automatically into page-aiagents
          // NeuralNetwork is lazy-loaded from Hero so Three.js doesn't block initial render
          // Framer Motion in its own chunk
          if (nid.includes('node_modules/framer-motion')) {
            return 'vendor-framer'
          }
          // React core + router + lucide in shared vendor chunk
          if (
            nid.includes('node_modules/react/') ||
            nid.includes('node_modules/react-dom/') ||
            nid.includes('node_modules/react-router') ||
            nid.includes('node_modules/lucide-react') ||
            nid.includes('node_modules/react-helmet')
          ) {
            return 'vendor-react'
          }
          // Remaining node_modules
          if (nid.includes('node_modules')) {
            return 'vendor-other'
          }
          // Route chunks — each page gets its own bundle
          if (nid.includes('src/pages/')) {
            const match = nid.match(/src\/pages\/([A-Za-z]+)\.tsx/)
            return match ? `page-${match[1].toLowerCase()}` : 'pages'
          }
          // 3D components travel with the pages that use them (no forced merge)
        },
      },
    },
    cssCodeSplit: true,
    sourcemap: 'true',
    chunkSizeWarningLimit: 1000,
  },
}))
