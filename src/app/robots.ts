import type { MetadataRoute } from 'next';
import { getBaseUrl } from '@/lib/urls';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/*',
        '/_next/*',
        '/admin/*',
        '/auth/*',
        '/dashboard/*',
        '/payment/*',
        '/settings/*',
        '/tools/*',
        '/pricing',
        '/blog/*',
        '/docs/*',
        '/ai',
        '/waitlist',
        '/changelog',
        '/roadmap',
        '/test',
      ],
    },
    sitemap: `${getBaseUrl()}/sitemap.xml`,
  };
}
