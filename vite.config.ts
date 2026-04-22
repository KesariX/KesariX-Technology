import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => ({
  plugins: [react()],
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
          // Vendor chunks
          if (id.includes('node_modules/react')) {
            return 'vendor-react'
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-framer'
          }
          if (id.includes('node_modules/three')) {
            return 'vendor-three'
          }
          // React-dependent libraries (must be with React)
          if (id.includes('node_modules/lucide-react') || id.includes('node_modules/react-router')) {
            return 'vendor-react'
          }
          if (id.includes('node_modules')) {
            return 'vendor-other'
          }
          // Route chunks
          if (id.includes('src/pages/')) {
            const match = id.match(/src\/pages\/([A-Za-z]+)\.tsx/)
            return match ? `page-${match[1].toLowerCase()}` : 'pages'
          }
          // Component chunks
          if (id.includes('src/components/')) {
            return 'components'
          }
        },
      },
    },
    cssCodeSplit: true,
    sourcemap: 'hidden',
    chunkSizeWarningLimit: 1000,
  },
}))
