import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aesthetic-production.fr',
  
  output: 'static',
  integrations: [sitemap({
    lastmod: new Date(),
    filter: (page) => page !== 'https://aesthetic-production.fr/',
  })],
});