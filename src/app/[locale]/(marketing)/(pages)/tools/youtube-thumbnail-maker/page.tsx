import { ThumbAIWorkbench } from '@/components/thumbai/workbench';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  const wt = await getTranslations({
    locale,
    namespace: 'ThumbAIWorkbench.meta',
  });

  return constructMetadata({
    title: `${wt('title')} | ${t('name')}`,
    description: wt('description'),
    locale,
    pathname: '/tools/youtube-thumbnail-maker',
  });
}

export default function YouTubeThumbnailMakerPage() {
  return <ThumbAIWorkbench />;
}
