import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'static',
  build: {
    format: 'file',
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@/components': path.resolve(__dirname, './src/components'),
      },
    },
  },
});
