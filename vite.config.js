import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/skyDeeta/",
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'dist/index.html',
          dest: '.', // copy to dist/
          rename: '404.html',
        },
      ],
      watch: {},
    }),
  ],
  build: {
    rollupOptions: {
      input: 'index.html',
    },
  },
})
