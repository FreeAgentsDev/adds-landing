import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://freeagentsdev.com',
  integrations: [
    tailwind(),
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
        },
      },
      // Root `/` is only a language trampoline — do not index it.
      filter: (page) => {
        try {
          const { pathname } = new URL(page);
          return pathname !== '/' && pathname !== '';
        } catch {
          return true;
        }
      },
      serialize(item) {
        const pairs = [
          ['/en/solutions/', '/es/soluciones/'],
          ['/en/case-studies/', '/es/casos-de-exito/'],
        ];
        const url = new URL(item.url);
        for (const [enPath, esPath] of pairs) {
          if (url.pathname === enPath || url.pathname === esPath) {
            item.links = [
              { url: `https://freeagentsdev.com${enPath}`, lang: 'en' },
              { url: `https://freeagentsdev.com${esPath}`, lang: 'es' },
            ];
          }
        }
        return item;
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
