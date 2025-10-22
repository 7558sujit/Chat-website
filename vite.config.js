import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // plugins: [react()],
  server: {
    host: "localhost",  // 👈 forces Vite to bind to localhost instead of 127.0.0.1
    port: 5173,
  },
})
