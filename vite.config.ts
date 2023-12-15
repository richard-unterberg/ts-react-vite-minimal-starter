import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  base: '/', // for gh pages use schema '/{page-name}/'
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      'tailwind.config': path.resolve(__dirname, 'tailwind.config.js'),
    },
  },
  optimizeDeps: {
    include: ['tailwind.config'],
  },
})
