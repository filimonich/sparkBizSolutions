import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import injectHtml from 'vite-plugin-html-inject';
import sassGlobImports from 'vite-plugin-sass-glob-import';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  root: './src',
  publicDir: './../public',
  build: {
    minify: false,
    outDir: './../docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: '/index.html',
        other: '/pages/modal.html',
      },
    },
  },

  plugins: [vue(), injectHtml(), sassGlobImports()],
});
