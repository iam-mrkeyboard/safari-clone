import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tazamaafricasafari.com',
  integrations: [tailwind(), sitemap()],
  image: {
    remotePatterns: [],
  },
});
