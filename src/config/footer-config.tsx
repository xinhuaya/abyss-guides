'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import { useTranslations } from 'next-intl';
import { websiteConfig } from './website';

/**
 * Get footer config with translations
 *
 * NOTICE: used in client components only
 *
 * docs:
 * https://mksaas.com/docs/config/footer
 *
 * @returns The footer config with translated titles
 */
export function useFooterLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.footer');

  return [
    {
      title: t('product.title'),
      items: [
        {
          title: t('product.items.guideHub'),
          href: Routes.Subnautica2,
          external: false,
        },
        {
          title: t('product.items.resources'),
          href: Routes.Subnautica2Resources,
          external: false,
        },
        {
          title: t('product.items.updates'),
          href: Routes.Subnautica2Updates,
          external: false,
        },
      ],
    },
    {
      title: t('resources.title'),
      items: [
        ...(websiteConfig.blog.enable
          ? [
              {
                title: t('resources.items.blog'),
                href: Routes.Blog,
                external: false,
              },
            ]
          : []),
        {
          title: t('resources.items.contact'),
          href: Routes.Contact,
          external: false,
        },
      ],
    },
    {
      title: t('legal.title'),
      items: [
        {
          title: t('legal.items.cookiePolicy'),
          href: Routes.CookiePolicy,
          external: false,
        },
        {
          title: t('legal.items.affiliateDisclosure'),
          href: Routes.AffiliateDisclosure,
          external: false,
        },
        {
          title: t('legal.items.privacyPolicy'),
          href: Routes.PrivacyPolicy,
          external: false,
        },
        {
          title: t('legal.items.termsOfService'),
          href: Routes.TermsOfService,
          external: false,
        },
      ],
    },
  ];
}
