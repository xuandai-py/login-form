import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   
    define: {
      SERVER_PATH: process.env.VITE_SERVER_PATH,
    },
})
