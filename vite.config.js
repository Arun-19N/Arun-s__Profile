import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Arun-s__Profile/', // Match your repo name EXACTLY
})