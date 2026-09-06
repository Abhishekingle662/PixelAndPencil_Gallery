import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Vercel serves this build from dist (see vercel.json outputDirectory)
  server: { host: true, port: 5173 },
})
