import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
    image: {
        remotePatterns: [{ protocol: "https" }],
      },
      compressHTML: false,
      output: 'server',
      adapter: netlify(),
});

 