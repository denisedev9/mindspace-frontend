import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/mindspace-frontend/',
  plugins: [react()],
  server: {
    fs: {
      allow: ['..'],
    },
    proxy: {
      '/affirmations': {
        target: 'https://www.affirmations.dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/affirmations/, ''),
      },
    },
  },
})