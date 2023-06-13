import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
  build: {
    sourcemap: true,
    target: 'modules',
    lib: {
      entry: 'src/main.ts',
      name: 'svelte-carrot',
      fileName: 'svelte-carrot',
      formats: ['es'],
    },
  },
});
