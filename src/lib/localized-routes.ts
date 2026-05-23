import { routing } from '@/i18n/routing';
import { Routes } from '@/routes';
import type { Locale } from 'next-intl';

const localizedRoutes: Partial<Record<Locale, ReadonlySet<string>>> = {
  zh: new Set([Routes.Root, Routes.Subnautica2]),
  ru: new Set([Routes.Root, Routes.Subnautica2]),
  de: new Set([Routes.Root, Routes.Subnautica2]),
  fr: new Set([Routes.Root, Routes.Subnautica2]),
  'pt-BR': new Set([Routes.Root, Routes.Subnautica2]),
  'es-419': new Set([Routes.Root, Routes.Subnautica2]),
  ko: new Set([Routes.Root, Routes.Subnautica2]),
  ja: new Set([Routes.Root, Routes.Subnautica2]),
};

export function normalizeRoutePath(
  pathname: string | undefined = Routes.Root
): string {
  if (!pathname || pathname === Routes.Root) {
    return Routes.Root;
  }

  const withoutQuery = pathname.split(/[?#]/)[0] || Routes.Root;
  return withoutQuery.length > 1
    ? withoutQuery.replace(/\/+$/, '')
    : withoutQuery;
}

export function isRouteReadyForLocale(
  pathname: string | undefined,
  locale?: Locale | null
): boolean {
  if (!locale || locale === routing.defaultLocale || locale === 'default') {
    return true;
  }

  const readyRoutes = localizedRoutes[locale];
  return readyRoutes?.has(normalizeRoutePath(pathname)) ?? false;
}

export function getReadyLocalesForPathname(pathname: string): Locale[] {
  return routing.locales.filter((locale) =>
    isRouteReadyForLocale(pathname, locale)
  );
}
