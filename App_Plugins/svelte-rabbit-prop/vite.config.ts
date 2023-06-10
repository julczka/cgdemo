// import { defineConfig } from "vite";
// import { svelte } from "@sveltejs/vite-plugin-svelte";
// import sveltePreprocess from "svelte-preprocess";

// export default defineConfig({
//   plugins: [
//     svelte({
//       preprocess: sveltePreprocess({}),
//       exclude: '*.component.svelte',
//       emitCss: false,
//     }),
//     svelte({
//       preprocess: sveltePreprocess(),
//       include: 'App.svelte',
//       compilerOptions: {
//         customElement: true,
//       },
//       emitCss: false,
//     }),
//   ],

// });

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
    target: "modules",
    lib: {
      entry: "src/main.ts",
      name: "rabbit-prop-svelte",
      fileName: "rabbit-prop-svelte",
      formats: ["es"],
    },
  },
});