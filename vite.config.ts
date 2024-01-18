import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  preprocessorOptions: {
    scss: {
      additionalData: '@use "@/styles/themes.module.scss"as *;'
    }
  },
  plugins: [react()],
})
