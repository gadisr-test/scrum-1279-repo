// vite.config.js
//
// Scope: Create a configuration file for Vite to specify how the build tool should handle the project's assets and transformations. This file should include configurations for React support and settings for integrating Tailwind CSS. It will set up the necessary plugins and define the build output settings, ensuring that the React and Tailwind CSS work seamlessly together.

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        injectTo: 'head',
        tags: [{
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/tailwindcss@^2.0/dist/tailwind.min.css'
          }
        }]
      }
    })
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});