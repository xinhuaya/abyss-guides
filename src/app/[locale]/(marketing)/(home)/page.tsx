import { AbyssHome } from '@/components/abyss/home';
import { constructMetadata } from '@/lib/metadata';
import { getUrlWithLocale } from '@/lib/urls';
import { Routes } from '@/routes';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

/**
 * https://next-intl.dev/docs/environments/actions-metadata-route-handlers#metadata-api
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return constructMetadata({
    title: t('title'),
    description: t('description'),
    locale,
    pathname: '',
  });
}

interface HomePageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  const homeUrl = getUrlWithLocale(Routes.Root, locale);
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: t('name'),
      description: t('description'),
      url: homeUrl,
      inLanguage: locale,
      publisher: {
        '@type': 'Organization',
        name: 'Abyss Guides',
        url: homeUrl,
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${homeUrl}api/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Abyss Guides primary guide sections',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Subnautica 2 Guide Hub',
          url: getUrlWithLocale(Routes.Subnautica2, locale),
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Subnautica 2 Resources',
          url: getUrlWithLocale(Routes.Subnautica2Resources, locale),
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Subnautica 2 Crafting',
          url: getUrlWithLocale(Routes.Subnautica2Crafting, locale),
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Subnautica 2 Updates',
          url: getUrlWithLocale(Routes.Subnautica2Updates, locale),
        },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="flex flex-col">
        <AbyssHome locale={locale} />
      </div>
    </>
  );
}
