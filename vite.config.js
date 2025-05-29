import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path';
// import sitemap from 'vite-plugin-sitemap'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // sitemap({
    //   hostname: 'https://mhlrp2025.com',
    //   routes: [
    //     '/', '/about', '/important-dates', '/call-for-papers', '/paper-submission',
    //     '/committee', '/speakers', '/registration', '/payment-details',
    //     '/program-schedule', '/venue', '/contact'
    //   ]
    // })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
    },
  },
})
