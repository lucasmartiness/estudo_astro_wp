import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    image: {
        remotePatterns: [{ protocol: "https" }],
      },
      compressHTML: false

});