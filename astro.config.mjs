import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://freeagentsdev.com',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
        },
      },
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
      // Serve src/pages/index.astro at "/" instead of Astro's default redirect HTML.
      redirectToDefaultLocale: false,
    },
  },
});
