import { getPathWithLocale } from '@/lib/urls';
import { Routes } from '@/routes';
import { redirect } from 'next/navigation';
import type { Locale } from 'next-intl';

export default async function LegacyThumbnailMakerRedirect({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  redirect(getPathWithLocale(Routes.Subnautica2, locale));
}
