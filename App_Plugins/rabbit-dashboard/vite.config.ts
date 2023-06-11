// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: 'src/umbraco-rabbit.element.ts',
      name: 'main',
      formats: ['es'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['@umbraco-cms/backoffice'],
    },
  },
  base: '/App_Plugins/rabbit-dashboard/dist',
});
