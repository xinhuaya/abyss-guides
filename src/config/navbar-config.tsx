'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import { useTranslations } from 'next-intl';
import { websiteConfig } from './website';

/**
 * Get navbar config with translations
 *
 * NOTICE: used in client components only
 *
 * docs:
 * https://mksaas.com/docs/config/navbar
 *
 * @returns The navbar config with translated titles and descriptions
 */
export function useNavbarLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.navbar');

  return [
    {
      title: t('guideHub.title'),
      href: Routes.Subnautica2,
      external: false,
    },
    {
      title: t('resources.title'),
      href: Routes.Subnautica2Resources,
      external: false,
    },
    {
      title: t('crafting.title'),
      href: Routes.Subnautica2Crafting,
      external: false,
    },
    {
      title: t('updates.title'),
      href: Routes.Subnautica2Updates,
      external: false,
    },
    ...(websiteConfig.blog.enable
      ? [
          {
            title: t('blog.title'),
            href: Routes.Blog,
            external: false,
          },
        ]
      : []),
  ];
}
