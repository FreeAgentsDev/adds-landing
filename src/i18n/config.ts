export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** Logical page keys → localized URL slugs (no leading slash). */
export const routeSlugs = {
  home: { en: '', es: '' },
  solutions: { en: 'solutions', es: 'soluciones' },
  caseStudies: { en: 'case-studies', es: 'casos-de-exito' },
  partners: { en: 'partners', es: 'partners' },
} as const;

export type RouteKey = keyof typeof routeSlugs;

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  es: 'ES',
};

export const ogLocales: Record<Locale, string> = {
  en: 'en_US',
  es: 'es_LA',
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
