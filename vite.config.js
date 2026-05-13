import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Strip console.* and debugger in production builds
function stripConsolePlugin() {
  return {
    name: 'strip-console',
    renderChunk(code) {
      return code
        .replace(/\bconsole\s*\.\s*\w+\s*\([^)]*\)\s*;?/g, '')
        .replace(/\bdebugger\s*;/g, '')
    },
  }
}

export default defineConfig({
  plugins: [react(), stripConsolePlugin()],

  build: {
    target: 'es2020',

    // oxc is Vite 8's built-in minifier (no extra install, bundled with rolldown)
    minify: 'oxc',

    rollupOptions: {
      output: {
        // manualChunks presence keeps Vite 8/rolldown in rollup-compatible mode,
        // which correctly generates the main entry bundle. Rolldown currently
        // ignores the function body and produces empty vendor stubs, but the
        // main index bundle is properly emitted — which is what matters.
        manualChunks(id) {
          if (id.includes('node_modules/three'))         return 'vendor-three'
          if (id.includes('node_modules/gsap'))          return 'vendor-gsap'
          if (id.includes('node_modules/framer-motion')) return 'vendor-framer'
          if (id.includes('node_modules/lenis'))         return 'vendor-lenis'
          if (
            id.includes('node_modules/react/') ||
            id.includes('node_modules/react-dom/') ||
            id.includes('node_modules/react-router-dom/')
          ) return 'vendor-react'
        },
      },
    },

    chunkSizeWarningLimit: 800,
    assetsInlineLimit: 4096,
    sourcemap: false,
    cssCodeSplit: true,
  },
})
