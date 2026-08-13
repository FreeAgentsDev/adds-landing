import {
  defaultLocale,
  isLocale,
  locales,
  routeSlugs,
  type Locale,
  type RouteKey,
} from './config';

export function localePath(locale: Locale, route: RouteKey = 'home', hash = ''): string {
  const slug = routeSlugs[route][locale];
  const base = slug ? `/${locale}/${slug}` : `/${locale}`;
  return hash ? `${base}${hash.startsWith('#') ? hash : `#${hash}`}` : base;
}

/** Map current pathname to the equivalent path in another locale. */
export function switchLocalePath(pathname: string, target: Locale): string {
  const parts = pathname.replace(/\/+$/, '').split('/').filter(Boolean);
  const currentLocale = parts[0] && isLocale(parts[0]) ? parts[0] : defaultLocale;
  const rest = parts[0] && isLocale(parts[0]) ? parts.slice(1) : parts;
  const currentSlug = rest.join('/');

  let routeKey: RouteKey = 'home';
  for (const key of Object.keys(routeSlugs) as RouteKey[]) {
    if (routeSlugs[key][currentLocale] === currentSlug) {
      routeKey = key;
      break;
    }
  }

  return localePath(target, routeKey);
}

export function alternateUrls(site: string, pathname: string): { locale: Locale; href: string }[] {
  const base = site.replace(/\/$/, '');
  return locales.map((locale) => ({
    locale,
    href: `${base}${switchLocalePath(pathname, locale)}`,
  }));
}

export function getLocaleFromPath(pathname: string): Locale {
  const first = pathname.split('/').filter(Boolean)[0];
  return first && isLocale(first) ? first : defaultLocale;
}
