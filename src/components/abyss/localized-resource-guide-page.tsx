import Container from '@/components/layout/container';
import { LocaleLink } from '@/i18n/navigation';
import { getBaseUrl, getPathWithLocale, getUrlWithLocale } from '@/lib/urls';
import { Routes } from '@/routes';
import type { LucideIcon } from 'lucide-react';
import {
  AlertTriangleIcon,
  ChevronRightIcon,
  HelpCircleIcon,
  ListIcon,
  RadarIcon,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import type { ComponentProps } from 'react';

type LocaleHref = ComponentProps<typeof LocaleLink>['href'];

export type ResourceGuideSection = {
  title: string;
  body: string;
};

export type ResourceGuideCopy = {
  eyebrow: string;
  title: string;
  description: string;
  publishedAt?: string;
  updatedAt?: string;
  checkedAt?: string;
  quickLabel: string;
  quickAnswer: string;
  contentsLabel: string;
  routeTitle: string;
  routeSteps: ResourceGuideSection[];
  tableTitle: string;
  tableHeaders: [string, string];
  tableRows: Array<[string, string]>;
  visualTitle?: string;
  visualItems?: Array<{
    label: string;
    value: string;
    note: string;
  }>;
  cautionTitle: string;
  cautionBody: string;
  faqTitle: string;
  faqs: ResourceGuideSection[];
  readNextTitle: string;
  related: Array<{
    href: LocaleHref;
    label: string;
  }>;
  sourcesTitle: string;
  sourceBody: string;
  cardKicker: string;
  cardBody: string;
  cardTypeLabel: string;
  cardTypeValue: string;
  cardVerifiedLabel: string;
  cardStatusLabel: string;
  cardStatusValue: string;
};

type LocalizedResourceGuidePageProps = {
  locale: Locale;
  pathname: Routes;
  icon: LucideIcon;
  copy: ResourceGuideCopy;
  sources: Array<{
    href: string;
    label: string;
  }>;
};

const DEFAULT_CONTENT_DATE = '2026-05-23';

function formatGuideDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'long',
    timeZone: 'UTC',
    year: 'numeric',
  }).format(new Date(`${date}T00:00:00.000Z`));
}

export function LocalizedResourceGuidePage({
  locale,
  pathname,
  icon: Icon,
  copy,
  sources,
}: LocalizedResourceGuidePageProps) {
  const baseUrl = getBaseUrl().replace(/\/$/, '');
  const pageUrl = getUrlWithLocale(pathname, locale).replace(/\/$/, '');
  const hubUrl = `${baseUrl}${getPathWithLocale(Routes.Subnautica2, locale)}`;
  const publishedAt = copy.publishedAt ?? DEFAULT_CONTENT_DATE;
  const updatedAt = copy.updatedAt ?? publishedAt;
  const checkedAt = copy.checkedAt ?? formatGuideDate(updatedAt, locale);
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: copy.title,
      description: copy.description,
      url: pageUrl,
      datePublished: publishedAt,
      dateModified: updatedAt,
      inLanguage: locale,
      author: {
        '@type': 'Organization',
        name: 'Abyss Guides',
        url: baseUrl,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Abyss Guides',
        url: baseUrl,
      },
      mainEntityOfPage: pageUrl,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Abyss Guides',
          item: baseUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Subnautica 2',
          item: hubUrl,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: copy.title,
          item: pageUrl,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: copy.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.title,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.body,
        },
      })),
    },
  ];

  return (
    <main className="min-h-screen bg-[#031314] text-[#dff8f0]">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <section className="relative overflow-hidden border-b border-cyan-200/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-right opacity-40"
          style={{
            backgroundImage: "url('/abyss/chibi-deep-sea-hero.webp')",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(106,240,224,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(106,240,224,.15) 1px, transparent 1px)',
            backgroundSize: '42px 42px',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,12,18,.96)_0%,rgba(3,19,20,.86)_46%,rgba(3,19,20,.55)_74%,rgba(1,9,12,.74)_100%),radial-gradient(circle_at_18%_80%,rgba(240,139,79,.12),transparent_30%),linear-gradient(180deg,rgba(3,19,20,.16),rgba(1,9,12,.96))]"
        />
        <Container className="relative px-4 py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
                <Icon className="size-4" />
                {copy.eyebrow}
              </div>
              <h1 className="text-balance break-words text-3xl font-semibold leading-tight text-[#e8fff9] sm:text-4xl md:text-6xl">
                {copy.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#a9c9c3]">
                {copy.description}
              </p>
            </div>
            <aside className="border border-cyan-200/20 bg-[#041d22]/88 p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-cyan-200/15 pb-3 text-xs uppercase tracking-[0.18em] text-[#9fe6d4]">
                <span>{copy.cardKicker}</span>
                <span>EA</span>
              </div>
              <div className="mt-5 flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center border border-cyan-200/20 bg-cyan-300/10">
                  <Icon className="size-6 text-[#78ead7]" />
                </div>
                <div className="min-w-0">
                  <p className="break-words text-sm font-semibold text-[#effffb]">
                    {copy.title}
                  </p>
                  <p className="mt-2 break-words text-sm leading-6 text-[#a9c9c3]">
                    {copy.cardBody}
                  </p>
                </div>
              </div>
              <div className="mt-5 grid gap-2 text-sm text-[#d1e8e2]">
                <div className="flex flex-col items-start gap-1 border border-cyan-200/10 bg-cyan-300/5 px-3 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                  <span className="min-w-0 break-words">
                    {copy.cardTypeLabel}
                  </span>
                  <span className="min-w-0 break-words text-[#78ead7] sm:text-right">
                    {copy.cardTypeValue}
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 border border-cyan-200/10 bg-cyan-300/5 px-3 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                  <span className="min-w-0 break-words">
                    {copy.cardVerifiedLabel}
                  </span>
                  <span className="min-w-0 break-words text-[#f08b4f] sm:text-right">
                    {checkedAt}
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1 border border-cyan-200/10 bg-cyan-300/5 px-3 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                  <span className="min-w-0 break-words">
                    {copy.cardStatusLabel}
                  </span>
                  <span className="min-w-0 break-words text-[#78ead7] sm:text-right">
                    {copy.cardStatusValue}
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <Container className="px-4 py-12">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="space-y-8">
            <nav
              aria-label={copy.contentsLabel}
              className="border border-cyan-200/12 bg-[#071f23] p-5"
            >
              <div className="flex items-center gap-2 text-[#78ead7]">
                <ListIcon className="size-4" />
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em]">
                  {copy.contentsLabel}
                </h2>
              </div>
              <div className="mt-4 grid gap-2 md:grid-cols-2">
                {copy.routeSteps.map((section, index) => (
                  <a
                    className="flex items-center gap-2 border border-cyan-200/10 bg-cyan-300/5 px-3 py-2 text-sm text-[#d1e8e2] hover:border-cyan-200/30 hover:text-[#78ead7]"
                    href={`#route-step-${index + 1}`}
                    key={section.title}
                  >
                    <ChevronRightIcon className="size-4 text-[#f08b4f]" />
                    {section.title}
                  </a>
                ))}
              </div>
            </nav>

            <section className="border border-cyan-200/15 bg-[#082226] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f08b4f]">
                {copy.quickLabel}
              </p>
              <p className="mt-4 text-lg leading-8 text-[#d7eee8]">
                {copy.quickAnswer}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                {copy.routeTitle}
              </h2>
              <div className="mt-5 grid gap-4">
                {copy.routeSteps.map((section, index) => (
                  <section
                    className="border border-cyan-200/12 bg-[#071f23] p-5"
                    id={`route-step-${index + 1}`}
                    key={section.title}
                  >
                    <div className="flex items-center gap-2 text-[#78ead7]">
                      <RadarIcon className="size-4" />
                      <h3 className="font-semibold">{section.title}</h3>
                    </div>
                    <p className="mt-3 leading-7 text-[#abc8c3]">
                      {section.body}
                    </p>
                  </section>
                ))}
              </div>
            </section>

            {copy.visualItems && copy.visualItems.length > 0 ? (
              <section>
                <h2 className="text-3xl font-semibold text-[#effffb]">
                  {copy.visualTitle}
                </h2>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  {copy.visualItems.map((item, index) => (
                    <section
                      className="relative overflow-hidden border border-cyan-200/12 bg-[#071f23] p-5"
                      key={item.label}
                    >
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 h-1 bg-[#123a40]"
                      >
                        <div
                          className="h-full bg-[#f08b4f]"
                          style={{
                            width: `${Math.min(100, (index + 1) * 33)}%`,
                          }}
                        />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#78ead7]">
                        {item.label}
                      </p>
                      <p className="mt-4 text-2xl font-semibold text-[#effffb]">
                        {item.value}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                        {item.note}
                      </p>
                    </section>
                  ))}
                </div>
              </section>
            ) : null}

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                {copy.tableTitle}
              </h2>
              <div className="mt-5 overflow-hidden border border-cyan-200/12">
                <table className="w-full border-collapse bg-[#071f23] text-left text-sm">
                  <thead className="bg-[#0b2d33] text-[#dff8f0]">
                    <tr>
                      <th className="p-4 font-semibold">
                        {copy.tableHeaders[0]}
                      </th>
                      <th className="p-4 font-semibold">
                        {copy.tableHeaders[1]}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {copy.tableRows.map(([use, why]) => (
                      <tr key={use} className="border-t border-cyan-200/10">
                        <td className="p-4 align-top font-medium text-[#78ead7]">
                          {use}
                        </td>
                        <td className="p-4 leading-6 text-[#abc8c3]">{why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="border border-cyan-200/12 bg-[#082226] p-6">
              <div className="flex items-center gap-3">
                <AlertTriangleIcon className="size-6 text-[#f08b4f]" />
                <h2 className="text-3xl font-semibold text-[#effffb]">
                  {copy.cautionTitle}
                </h2>
              </div>
              <p className="mt-4 leading-8 text-[#abc8c3]">
                {copy.cautionBody}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                {copy.faqTitle}
              </h2>
              <div className="mt-5 grid gap-4">
                {copy.faqs.map((faq) => (
                  <section
                    className="border border-cyan-200/12 bg-[#071f23] p-5"
                    key={faq.title}
                  >
                    <div className="flex items-center gap-2 text-[#78ead7]">
                      <HelpCircleIcon className="size-4" />
                      <h3 className="font-semibold">{faq.title}</h3>
                    </div>
                    <p className="mt-3 leading-7 text-[#abc8c3]">{faq.body}</p>
                  </section>
                ))}
              </div>
            </section>
          </article>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="overflow-hidden border border-cyan-200/12 bg-[#071f23]">
              <div
                aria-hidden="true"
                className="h-40 bg-cover bg-right"
                style={{
                  backgroundImage: "url('/abyss/chibi-deep-sea-hero.webp')",
                }}
              />
              <div className="border-t border-cyan-200/12 p-5">
                <Icon className="mb-4 size-6 text-[#f08b4f]" />
                <h2 className="text-lg font-semibold text-[#effffb]">
                  {copy.sourcesTitle}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                  {copy.sourceBody}
                </p>
                <div className="mt-4 grid gap-2 text-sm">
                  {sources.map((source) => (
                    <a
                      className="text-[#78ead7] hover:underline"
                      href={source.href}
                      key={source.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {source.label}
                    </a>
                  ))}
                </div>
              </div>
            </section>

            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <h2 className="text-lg font-semibold text-[#effffb]">
                {copy.readNextTitle}
              </h2>
              <div className="mt-4 grid gap-3 text-sm">
                {copy.related.map((item) => (
                  <LocaleLink
                    className="text-[#78ead7] hover:underline"
                    href={item.href}
                    key={item.label}
                  >
                    {item.label}
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
