import { defineConfig } from 'astro/config';

export default defineConfig({
  // C'est LA ligne vitale pour que le Footer et le BaseHead ne plantent pas
  site: 'https://aesthetic-production.fr', 
  
  output: 'static',
});