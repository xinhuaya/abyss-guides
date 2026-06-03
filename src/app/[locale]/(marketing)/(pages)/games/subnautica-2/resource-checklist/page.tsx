import { AbyssUpdateAlertCard } from '@/components/abyss/update-alert-card';
import { ResourceChecklist } from '@/components/abyss/resource-checklist';
import Container from '@/components/layout/container';
import { LocaleLink } from '@/i18n/navigation';
import {
  ABYSS_OFFICIAL_TRAILER_EMBED_URL,
  ABYSS_OFFICIAL_TRAILER_URL,
} from '@/lib/abyss-media-schema';
import { constructMetadata } from '@/lib/metadata';
import { getImageUrl, getUrlWithLocale } from '@/lib/urls';
import { Routes } from '@/routes';
import {
  ArrowRightIcon,
  BoxesIcon,
  ExternalLinkIcon,
  ListChecksIcon,
  PlayCircleIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const copyByLocale = {
  en: {
    metadataTitle:
      'Subnautica 2 Resource Checklist - Early Materials, Base Parts, and Vehicle Prep',
    metadataDescription:
      'Track Subnautica 2 materials, base-building parts, Tadpole vehicle prep, and crafting blockers with a fast browser-saved resource checklist.',
    eyebrow: 'Subnautica 2 player tool',
    title: 'Resource Checklist',
    description:
      'Use this lightweight checklist before a dive, during a base move, or after a patch changes your route. It saves in your browser only, so you can tick items without an account.',
    updated: 'Checked June 3, 2026',
    quickTitle: 'What this tool is for',
    quickBody:
      'This is not a full recipe calculator yet. It is a practical route list for materials players commonly forget: early tools, first base parts, Tadpole prep, and advanced route blockers.',
    sourceTitle: 'Visual notes and source media',
    imageTitle: 'Original checklist art',
    imageBody:
      'Abyss Guides uses original chibi deep-sea art for tool pages instead of copying wiki screenshots or fan uploads.',
    videoTitle: 'Official Subnautica 2 gameplay trailer',
    videoBody:
      'Use the official trailer for mood, vehicles, and biome context. Do not treat trailer scenes as exact material coordinates.',
    sourceLabel: 'Source: Official Subnautica YouTube embed',
    readNextTitle: 'Use the checklist with these routes',
  },
  zh: {
    metadataTitle: 'Subnautica 2 资源清单 - 前期材料、基地和载具准备',
    metadataDescription:
      '用本地保存的 Subnautica 2 资源清单追踪前期材料、基地部件、Tadpole 载具准备和制作卡点。',
    eyebrow: 'Subnautica 2 玩家工具',
    title: '资源清单',
    description:
      '下潜前、搬基地前、或者补丁改变路线后，可以用这个轻量清单检查材料。它只保存在当前浏览器，不需要账号。',
    updated: '检查日期：2026 年 6 月 3 日',
    quickTitle: '这个工具适合做什么',
    quickBody:
      '这还不是完整配方计算器。第一版先解决最常见的问题：前期工具、第一座基地、Tadpole 准备，以及容易忘记的高级路线材料。',
    sourceTitle: '图文笔记和来源媒体',
    imageTitle: '本站原创清单图',
    imageBody:
      'Abyss Guides 的工具页继续使用原创 Q 版深海图，不直接搬运 Wiki 截图或玩家上传图片。',
    videoTitle: 'Subnautica 2 官方实机预告',
    videoBody:
      '官方预告适合用来看氛围、载具和生态区感觉，不要把预告画面当成精确采集坐标。',
    sourceLabel: '来源：Subnautica 官方 YouTube 嵌入视频',
    readNextTitle: '搭配这些路线一起用',
  },
};

function getCopy(locale: Locale) {
  return locale === 'zh' ? copyByLocale.zh : copyByLocale.en;
}

const related = [
  {
    href: Routes.Subnautica2Beginner,
    label: 'Beginner route',
    note: 'Plan the first safe loop before checking rare materials.',
  },
  {
    href: Routes.Subnautica2Resources,
    label: 'Resources index',
    note: 'Open the broader material table when a checklist item is unclear.',
  },
  {
    href: Routes.Subnautica2Crafting,
    label: 'Crafting chains',
    note: 'Use recipe pages when one material turns into another blocker.',
  },
  {
    href: Routes.Subnautica2Tadpole,
    label: 'Tadpole guide',
    note: 'Turn vehicle prep into a route, not a random shopping list.',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = getCopy(locale);

  return constructMetadata({
    title: copy.metadataTitle,
    description: copy.metadataDescription,
    locale,
    pathname: Routes.Subnautica2ResourceChecklist,
  });
}

export default async function ResourceChecklistPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);
  const pageUrl = getUrlWithLocale(Routes.Subnautica2ResourceChecklist, locale);
  const imageUrl = getImageUrl('/abyss/chibi-resource-checklist.webp');
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: copy.metadataTitle,
      description: copy.metadataDescription,
      url: pageUrl,
      image: imageUrl,
      applicationCategory: 'GameApplication',
      operatingSystem: 'Any',
      inLanguage: locale,
      isAccessibleForFree: true,
      about: {
        '@type': 'VideoGame',
        name: 'Subnautica 2',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Abyss Guides',
          item: getUrlWithLocale(Routes.Root, locale),
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Subnautica 2',
          item: getUrlWithLocale(Routes.Subnautica2, locale),
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: copy.title,
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#031314] text-[#dff8f0]">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <section className="relative overflow-hidden border-b border-cyan-200/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-right opacity-50"
          style={{
            backgroundImage: "url('/abyss/chibi-resource-checklist.webp')",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,12,18,.98)_0%,rgba(3,19,20,.9)_46%,rgba(3,19,20,.52)_78%,rgba(1,9,12,.82)_100%),radial-gradient(circle_at_18%_76%,rgba(240,139,79,.14),transparent_28%)]"
        />
        <Container className="relative px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
              <ListChecksIcon className="size-4" />
              {copy.eyebrow}
            </div>
            <h1 className="break-words text-4xl font-semibold leading-tight text-[#e8fff9] md:text-6xl">
              {copy.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#a9c9c3]">
              {copy.description}
            </p>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#f08b4f]">
              {copy.updated}
            </p>
          </div>
        </Container>
      </section>

      <Container className="px-4 py-12">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="space-y-8">
            <section className="border border-cyan-200/15 bg-[#082226] p-6">
              <div className="flex items-center gap-3 text-[#78ead7]">
                <BoxesIcon className="size-5" />
                <h2 className="text-2xl font-semibold text-[#effffb]">
                  {copy.quickTitle}
                </h2>
              </div>
              <p className="mt-4 leading-8 text-[#abc8c3]">{copy.quickBody}</p>
            </section>

            <ResourceChecklist locale={locale} />

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                {copy.sourceTitle}
              </h2>
              <div className="mt-5 grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
                <figure className="overflow-hidden border border-cyan-200/12 bg-[#071f23]">
                  <div
                    className="h-64 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg,rgba(3,19,20,.08),rgba(3,19,20,.42)),url('/abyss/chibi-resource-checklist.webp')",
                    }}
                  />
                  <figcaption className="border-t border-cyan-200/12 p-5">
                    <h3 className="font-semibold text-[#78ead7]">
                      {copy.imageTitle}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                      {copy.imageBody}
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[#f08b4f]">
                      Source: Abyss Guides original artwork
                    </p>
                  </figcaption>
                </figure>

                <section className="overflow-hidden border border-cyan-200/12 bg-[#071f23]">
                  <div className="aspect-video bg-[#020b0d]">
                    <iframe
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="h-full w-full"
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      src={ABYSS_OFFICIAL_TRAILER_EMBED_URL}
                      title={copy.videoTitle}
                    />
                  </div>
                  <div className="border-t border-cyan-200/12 p-5">
                    <div className="flex items-center gap-2 text-[#78ead7]">
                      <PlayCircleIcon className="size-4" />
                      <h3 className="font-semibold">{copy.videoTitle}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                      {copy.videoBody}
                    </p>
                    <a
                      className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#f08b4f] hover:text-[#ffb27e]"
                      href={ABYSS_OFFICIAL_TRAILER_URL}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {copy.sourceLabel}
                      <ExternalLinkIcon className="size-3.5" />
                    </a>
                  </div>
                </section>
              </div>
            </section>

            <AbyssUpdateAlertCard locale={locale} />
          </article>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <h2 className="text-lg font-semibold text-[#effffb]">
                {copy.readNextTitle}
              </h2>
              <div className="mt-4 grid gap-3 text-sm">
                {related.map((item) => (
                  <LocaleLink
                    className="group block border-l border-cyan-200/18 pl-3 hover:border-[#78ead7]"
                    href={item.href}
                    key={item.href}
                  >
                    <span className="flex items-center gap-2 font-semibold text-[#78ead7]">
                      {item.label}
                      <ArrowRightIcon className="size-4 transition group-hover:translate-x-1" />
                    </span>
                    <span className="mt-1 block leading-5 text-[#9fbdb6]">
                      {item.note}
                    </span>
                  </LocaleLink>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </Container>
    </main>
  );
}
