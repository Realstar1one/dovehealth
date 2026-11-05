import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://dovestarhealth.com',
  output: 'static',
  adapter: cloudflare(),
});
