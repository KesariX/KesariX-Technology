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
        // Explicit file name patterns keep Vite 8/rolldown in rollup-compatible
        // output mode (needed to emit the main entry bundle) without triggering
        // the empty-vendor-stub bug that manualChunks causes in rolldown.
        chunkFileNames:  'assets/[name]-[hash].js',
        entryFileNames:  'assets/[name]-[hash].js',
        assetFileNames:  'assets/[name]-[hash].[ext]',
      },
    },

    chunkSizeWarningLimit: 800,
    assetsInlineLimit: 4096,
    sourcemap: false,
    cssCodeSplit: true,
  },
})
