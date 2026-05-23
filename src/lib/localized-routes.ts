import { routing } from '@/i18n/routing';
import { Routes } from '@/routes';
import type { Locale } from 'next-intl';

const localizedRoutes: Partial<Record<Locale, ReadonlySet<string>>> = {
  zh: new Set([
    Routes.Root,
    Routes.Subnautica2,
    Routes.Subnautica2Beginner,
    Routes.Subnautica2Silver,
    Routes.Subnautica2Copper,
    Routes.Subnautica2AirTank,
    Routes.Subnautica2Scanner,
  ]),
  ru: new Set([
    Routes.Root,
    Routes.Subnautica2,
    Routes.Subnautica2Beginner,
    Routes.Subnautica2Silver,
    Routes.Subnautica2Copper,
    Routes.Subnautica2AirTank,
    Routes.Subnautica2Scanner,
  ]),
  de: new Set([
    Routes.Root,
    Routes.Subnautica2,
    Routes.Subnautica2Beginner,
    Routes.Subnautica2Silver,
    Routes.Subnautica2Copper,
    Routes.Subnautica2AirTank,
    Routes.Subnautica2Scanner,
  ]),
  fr: new Set([
    Routes.Root,
    Routes.Subnautica2,
    Routes.Subnautica2Beginner,
    Routes.Subnautica2Silver,
    Routes.Subnautica2Copper,
    Routes.Subnautica2AirTank,
    Routes.Subnautica2Scanner,
  ]),
  'pt-BR': new Set([
    Routes.Root,
    Routes.Subnautica2,
    Routes.Subnautica2Beginner,
    Routes.Subnautica2Silver,
    Routes.Subnautica2Copper,
    Routes.Subnautica2AirTank,
    Routes.Subnautica2Scanner,
  ]),
  'es-419': new Set([
    Routes.Root,
    Routes.Subnautica2,
    Routes.Subnautica2Beginner,
    Routes.Subnautica2Silver,
    Routes.Subnautica2Copper,
    Routes.Subnautica2AirTank,
    Routes.Subnautica2Scanner,
  ]),
  ko: new Set([
    Routes.Root,
    Routes.Subnautica2,
    Routes.Subnautica2Beginner,
    Routes.Subnautica2Silver,
    Routes.Subnautica2Copper,
    Routes.Subnautica2AirTank,
    Routes.Subnautica2Scanner,
  ]),
  ja: new Set([
    Routes.Root,
    Routes.Subnautica2,
    Routes.Subnautica2Beginner,
    Routes.Subnautica2Silver,
    Routes.Subnautica2Copper,
    Routes.Subnautica2AirTank,
    Routes.Subnautica2Scanner,
  ]),
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
