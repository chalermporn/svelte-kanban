import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'
import { hostname } from 'os'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    https: true
  },
  optimizeDeps: {
    exclude: ['tinro']
  },
  plugins: [svelte({ hot: !process.env.VITEST })],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
