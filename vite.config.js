// vite.config.js
//
// Scope: Create a configuration file for Vite to specify how the build tool should handle the project's assets and transformations. This file should include configurations for React support and settings for integrating Tailwind CSS. It will set up the necessary plugins and define the build output settings, ensuring that the React and Tailwind CSS work seamlessly together.

import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
export default defineConfig({
  plugins: [reactRefresh()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()]
    }
  }
});