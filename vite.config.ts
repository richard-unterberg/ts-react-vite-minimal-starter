import path from 'path'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/ts-react-vite-minimal-starter/', // remove for using root
  plugins: [react(), UnoCSS()],
  optimizeDeps: {
    include: ['react/jsx-runtime', 'react', 'react-dom'],
  },
  build: {
    minify: true,
    cssMinify: 'esbuild',
  },
  server: {
    port: 3001,
  },
  preview: {
    port: 3002,
  },
  ssr: {
    noExternal: ['tailwind-styled-components', 'react-spinners', 'react-helmet-async'],
  },
  resolve: {
    alias: {
      '#components': path.resolve(__dirname, './src/components/'),
      '#lib': path.resolve(__dirname, './src/lib/'),
      '#root': __dirname,
    },
  },
})
