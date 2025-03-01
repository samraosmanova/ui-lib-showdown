import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

// https://vite.dev/config/
export default defineConfig({
  server: { 
    https: true, 
    host: 'betterpayment.de',
    port: 3000
   }, 
  plugins: [react(), mkcert()],
})

