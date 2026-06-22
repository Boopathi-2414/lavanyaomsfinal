import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',

      devOptions: {
        enabled: true,
        type: 'module',
      },

      includeAssets: ['favicon.png', 'apple-touch-icon.png'],

      manifest: {
        name: 'Lavanya Aari Materials – OMS',
        short_name: 'Lavanya OMS',
        description: 'Lavanya Aari Materials – Order Management System',
        theme_color: '#7c3aed',
        background_color: '#f5f3ff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        scope: '/',
        icons: [
          {
            src: 'icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'icons/icon-maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },

      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
      },
    }),
  ],
  base: '/',
  server: { port: 5173 },
  build: { outDir: 'dist' },
  optimizeDeps: {
    include: ['pdfjs-dist', 'xlsx'],
  },
});
