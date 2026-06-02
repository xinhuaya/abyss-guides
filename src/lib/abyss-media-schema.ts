import type { Locale } from 'next-intl';

export const ABYSS_OFFICIAL_TRAILER_URL =
  'https://www.youtube.com/watch?v=6t2nDHldoSk';
export const ABYSS_OFFICIAL_TRAILER_EMBED_URL =
  'https://www.youtube-nocookie.com/embed/6t2nDHldoSk';
export const ABYSS_OFFICIAL_TRAILER_THUMBNAIL_URL =
  'https://i.ytimg.com/vi/6t2nDHldoSk/hqdefault.jpg';

export function createAbyssImageObject({
  caption,
  imageUrl,
  locale,
  pageUrl,
}: {
  caption: string;
  imageUrl: string;
  locale: Locale;
  pageUrl: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    '@id': `${pageUrl}#primaryimage`,
    url: imageUrl,
    contentUrl: imageUrl,
    caption,
    creditText: 'Abyss Guides original artwork',
    inLanguage: locale,
  };
}

export function createAbyssVideoObject({
  description,
  locale,
  name,
  pageUrl,
}: {
  description: string;
  locale: Locale;
  name: string;
  pageUrl: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': `${pageUrl}#official-video`,
    name,
    description,
    url: ABYSS_OFFICIAL_TRAILER_URL,
    embedUrl: ABYSS_OFFICIAL_TRAILER_EMBED_URL,
    thumbnailUrl: [ABYSS_OFFICIAL_TRAILER_THUMBNAIL_URL],
    inLanguage: locale,
    isBasedOn: ABYSS_OFFICIAL_TRAILER_URL,
  };
}
