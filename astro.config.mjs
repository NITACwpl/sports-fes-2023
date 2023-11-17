import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    adapter: nodejs({
        mode: 'middleware' // または'standalone'
      }),
      output: 'hybrid',
});
