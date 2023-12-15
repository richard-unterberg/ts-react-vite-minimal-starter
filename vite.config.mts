import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  base: '/', // for gh pages use schema '/{page-name}/'
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      'tailwind.config.js': path.join(__dirname, 'tailwind.config.js'),
    },
  },
  optimizeDeps: {
    include: ['tailwind.config.js'],
  },
  build: {
    commonjsOptions: {
      include: ['tailwind.config.js', 'node_modules/**'],
    },
  },
})
