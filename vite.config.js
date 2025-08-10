import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/CPOD/',
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'public/index.html')
      }
    }
  }
})
