import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { getBaseUrl } from '@/lib/urls';

const hiddenPaths = [
  '/api/*',
  '/_next/*',
  '/admin/*',
  '/auth/*',
  '/dashboard/*',
  '/payment/*',
  '/settings/*',
  '/tools/*',
  '/pricing',
  '/blog',
  '/blog/*',
  '/docs',
  '/docs/*',
  '/ai',
  '/waitlist',
  '/changelog',
  '/roadmap',
  '/test',
];

const localizedHiddenPaths = routing.locales.flatMap((locale) =>
  hiddenPaths.map((path) => `/${locale}${path}`)
);

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [...hiddenPaths, ...localizedHiddenPaths],
    },
    sitemap: `${getBaseUrl()}/sitemap.xml`,
  };
}
