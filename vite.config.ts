import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    // This is a desktop (Electron) app loaded from local disk, so a single
    // large bundle (~1.4 MB, mostly KaTeX + nerdamer) costs nothing at runtime.
    chunkSizeWarningLimit: 2000,
  },
})
