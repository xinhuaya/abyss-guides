import { createMDX } from 'fumadocs-mdx/next';
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const localeRedirectPrefixes = [
  '',
  '/en',
  '/zh',
  '/ru',
  '/de',
  '/fr',
  '/pt-BR',
  '/es-419',
  '/ko',
  '/ja',
];

function getLocalizedDestination(prefix: string, destination: string) {
  return prefix && prefix !== '/en' ? `${prefix}${destination}` : destination;
}

function getLocalizedRedirects(sources: string[], destination: string) {
  return sources.flatMap((source) =>
    localeRedirectPrefixes.map((prefix) => ({
      source: `${prefix}${source}`,
      destination: getLocalizedDestination(prefix, destination),
      permanent: false,
    }))
  );
}

/**
 * https://nextjs.org/docs/app/api-reference/config/next-config-js
 */
const nextConfig: NextConfig = {
  // Docker standalone output
  ...(process.env.DOCKER_BUILD === 'true' && { output: 'standalone' }),

  /* config options here */
  devIndicators: false,

  // https://nextjs.org/docs/architecture/nextjs-compiler#remove-console
  // Remove all console.* calls in production only
  compiler: {
    // removeConsole: process.env.NODE_ENV === 'production',
  },

  // https://nextjs.org/docs/app/api-reference/config/next-config-js/htmlLimitedBots
  // This config allows you to specify a list of user agents that should receive
  // blocking metadata instead of streaming metadata
  // Only target actual bots/crawlers, not all user agents (which would disable streaming SSR for everyone)
  htmlLimitedBots:
    /Googlebot|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Sogou|facebookexternalhit|Twitterbot|LinkedInBot|WhatsApp|TelegramBot|Applebot/,

  images: {
    // https://vercel.com/docs/image-optimization/managing-image-optimization-costs#minimizing-image-optimization-costs
    // https://nextjs.org/docs/app/api-reference/components/image#unoptimized
    // vercel has limits on image optimization, 1000 images per month
    unoptimized: process.env.DISABLE_IMAGE_OPTIMIZATION === 'true',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.mksaas.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
      },
      {
        protocol: 'https',
        hostname: 'html.tailus.io',
      },
      {
        protocol: 'https',
        hostname: 'service.firecrawl.dev',
      },
    ],
  },
  async rewrites() {
    return [
      // Rewrite markdown requests to llms.mdx route
      // All markdownUrl includes locale prefix (e.g., /en/docs/xxx.mdx)
      {
        source: '/:locale/docs/:path*.mdx',
        destination: '/:locale/docs/llms.mdx/:path*',
      },
    ];
  },
  async redirects() {
    return [
      ...getLocalizedRedirects(
        [
          '/pricing',
          '/tools',
          '/tools/:path*',
          '/blog',
          '/blog/:path*',
          '/docs',
          '/docs/:path*',
          '/ai',
          '/waitlist',
          '/changelog',
          '/roadmap',
          '/test',
        ],
        '/games/subnautica-2'
      ),
      ...getLocalizedRedirects(
        [
          '/auth',
          '/auth/:path*',
          '/dashboard',
          '/dashboard/:path*',
          '/settings',
          '/settings/:path*',
          '/admin',
          '/admin/:path*',
          '/payment',
          '/payment/:path*',
        ],
        '/'
      ),
    ];
  },
};

/**
 * You can specify the path to the request config file or use the default one (@/i18n/request.ts)
 *
 * https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing#next-config
 */
const withNextIntl = createNextIntlPlugin();

/**
 * https://fumadocs.dev/docs/ui/manual-installation
 * https://fumadocs.dev/docs/mdx/plugin
 */
const withMDX = createMDX();

export default withMDX(withNextIntl(nextConfig));
