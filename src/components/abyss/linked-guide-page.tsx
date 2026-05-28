import Container from '@/components/layout/container';
import { LocaleLink } from '@/i18n/navigation';
import { getBaseUrl } from '@/lib/urls';
import type { LucideIcon } from 'lucide-react';
import {
  AlertTriangleIcon,
  BookOpenIcon,
  ChevronRightIcon,
  ListIcon,
  RadarIcon,
} from 'lucide-react';
import type { ComponentProps } from 'react';

type LocaleHref = ComponentProps<typeof LocaleLink>['href'];

type LinkedGuidePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  pathname: string;
  icon: LucideIcon;
  quickAnswer: string;
  fieldNotesTitle?: string;
  fieldNotes?: Array<{
    title: string;
    body: string;
  }>;
  routeChecklistTitle?: string;
  routeChecklist?: string[];
  sections: Array<{
    title: string;
    body: string;
    items?: string[];
  }>;
  table?: {
    title: string;
    headers: [string, string];
    rows: Array<[string, string]>;
  };
  caution?: {
    title: string;
    body: string;
  };
  related: Array<{
    href: LocaleHref;
    label: string;
  }>;
  sources: Array<{
    href: string;
    label: string;
  }>;
  publishedAt?: string;
  updatedAt?: string;
  checkedAt?: string;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
};

export function LinkedGuidePage({
  eyebrow,
  title,
  description,
  pathname,
  icon: Icon,
  quickAnswer,
  fieldNotesTitle,
  fieldNotes,
  routeChecklistTitle,
  routeChecklist,
  sections,
  table,
  caution,
  related,
  sources,
  publishedAt = '2026-05-23',
  updatedAt = '2026-05-23',
  checkedAt = 'May 23, 2026',
  faqs,
}: LinkedGuidePageProps) {
  const baseUrl = getBaseUrl().replace(/\/$/, '');
  const pageUrl = `${baseUrl}${pathname}`;
  const faqItems =
    faqs && faqs.length > 0
      ? faqs
      : [
          {
            question: title,
            answer: quickAnswer,
          },
        ];
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description,
      url: pageUrl,
      datePublished: publishedAt,
      dateModified: updatedAt,
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
          item: `${baseUrl}/games/subnautica-2`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: title,
          item: pageUrl,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
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
                {eyebrow}
              </div>
              <h1 className="text-balance text-4xl font-semibold leading-tight text-[#e8fff9] md:text-6xl">
                {title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#a9c9c3]">
                {description}
              </p>
            </div>
            <aside className="border border-cyan-200/20 bg-[#041d22]/88 p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-cyan-200/15 pb-3 text-xs uppercase tracking-[0.18em] text-[#9fe6d4]">
                <span>Abyss wiki card</span>
                <span>EA</span>
              </div>
              <div className="mt-5 flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center border border-cyan-200/20 bg-cyan-300/10">
                  <Icon className="size-6 text-[#78ead7]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#effffb]">
                    {title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#a9c9c3]">
                    Independent guide notes, route logic, and patch-sensitive
                    planning.
                  </p>
                </div>
              </div>
              <div className="mt-5 grid gap-2 text-sm text-[#d1e8e2]">
                <div className="flex items-center justify-between border border-cyan-200/10 bg-cyan-300/5 px-3 py-2">
                  <span>Type</span>
                  <span className="text-[#78ead7]">Guide</span>
                </div>
                <div className="flex items-center justify-between border border-cyan-200/10 bg-cyan-300/5 px-3 py-2">
                  <span>Verified</span>
                  <span className="text-[#f08b4f]">{checkedAt}</span>
                </div>
                <div className="flex items-center justify-between border border-cyan-200/10 bg-cyan-300/5 px-3 py-2">
                  <span>Status</span>
                  <span className="text-[#78ead7]">Early Access</span>
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
              aria-label="Guide contents"
              className="border border-cyan-200/12 bg-[#071f23] p-5"
            >
              <div className="flex items-center gap-2 text-[#78ead7]">
                <ListIcon className="size-4" />
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em]">
                  Contents
                </h2>
              </div>
              <div className="mt-4 grid gap-2 md:grid-cols-2">
                {sections.map((section) => (
                  <a
                    className="flex items-center gap-2 border border-cyan-200/10 bg-cyan-300/5 px-3 py-2 text-sm text-[#d1e8e2] hover:border-cyan-200/30 hover:text-[#78ead7]"
                    href={`#${section.title
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, '-')
                      .replace(/(^-|-$)/g, '')}`}
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
                Quick answer
              </p>
              <p className="mt-4 text-lg leading-8 text-[#d7eee8]">
                {quickAnswer}
              </p>
            </section>

            {fieldNotes?.length || routeChecklist?.length ? (
              <section className="grid gap-4 md:grid-cols-[minmax(0,1fr)_280px]">
                {fieldNotes?.length ? (
                  <section className="overflow-hidden border border-cyan-200/12 bg-[#071f23]">
                    <div
                      aria-hidden="true"
                      className="h-28 bg-cover bg-center opacity-80"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg,rgba(3,19,20,.18),rgba(3,19,20,.88)),url('/abyss/chibi-deep-sea-hero.webp')",
                      }}
                    />
                    <div className="p-5">
                      <h2 className="text-2xl font-semibold text-[#effffb]">
                        {fieldNotesTitle}
                      </h2>
                      <div className="mt-4 grid gap-4">
                        {fieldNotes.map((note) => (
                          <section
                            className="border-l-2 border-[#f08b4f] pl-4"
                            key={note.title}
                          >
                            <h3 className="font-semibold text-[#78ead7]">
                              {note.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-[#abc8c3]">
                              {note.body}
                            </p>
                          </section>
                        ))}
                      </div>
                    </div>
                  </section>
                ) : null}

                {routeChecklist?.length ? (
                  <aside className="border border-cyan-200/12 bg-[#082226] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f08b4f]">
                      {routeChecklistTitle}
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-[#d1e8e2]">
                      {routeChecklist.map((item) => (
                        <li className="flex gap-3" key={item}>
                          <span
                            aria-hidden="true"
                            className="mt-2 size-1.5 shrink-0 bg-[#78ead7]"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </aside>
                ) : null}
              </section>
            ) : null}

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                Route notes
              </h2>
              <div className="mt-5 grid gap-4">
                {sections.map((section) => (
                  <section
                    key={section.title}
                    className="border border-cyan-200/12 bg-[#071f23] p-5"
                    id={section.title
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, '-')
                      .replace(/(^-|-$)/g, '')}
                  >
                    <h3 className="text-xl font-semibold text-[#effffb]">
                      {section.title}
                    </h3>
                    <p className="mt-3 leading-7 text-[#abc8c3]">
                      {section.body}
                    </p>
                    {section.items ? (
                      <ul className="mt-5 grid gap-3">
                        {section.items.map((item) => (
                          <li
                            key={item}
                            className="border-l-2 border-[#f08b4f] pl-3 text-sm leading-6 text-[#d1e8e2]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}
              </div>
            </section>

            {table ? (
              <section>
                <h2 className="text-3xl font-semibold text-[#effffb]">
                  {table.title}
                </h2>
                <div className="mt-5 overflow-hidden border border-cyan-200/12">
                  <table className="w-full border-collapse bg-[#071f23] text-left text-sm">
                    <thead className="bg-[#0b2d33] text-[#dff8f0]">
                      <tr>
                        <th className="p-4 font-semibold">
                          {table.headers[0]}
                        </th>
                        <th className="p-4 font-semibold">
                          {table.headers[1]}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map(([left, right]) => (
                        <tr key={left} className="border-t border-cyan-200/10">
                          <td className="p-4 align-top font-medium text-[#78ead7]">
                            {left}
                          </td>
                          <td className="p-4 leading-6 text-[#abc8c3]">
                            {right}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ) : null}

            {caution ? (
              <section className="border border-cyan-200/12 bg-[#082226] p-6">
                <div className="flex items-center gap-3">
                  <AlertTriangleIcon className="size-6 text-[#f08b4f]" />
                  <h2 className="text-3xl font-semibold text-[#effffb]">
                    {caution.title}
                  </h2>
                </div>
                <p className="mt-4 leading-8 text-[#abc8c3]">{caution.body}</p>
              </section>
            ) : null}
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
                <div className="flex items-center gap-2 text-[#78ead7]">
                  <RadarIcon className="size-4" />
                  <h2 className="text-lg font-semibold text-[#effffb]">
                    Field note
                  </h2>
                </div>
                <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                  Original Abyss Guides art. No official game images, logos, or
                  creature artwork are used here.
                </p>
              </div>
            </section>

            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <h2 className="text-lg font-semibold text-[#effffb]">
                Read next
              </h2>
              <div className="mt-4 grid gap-3 text-sm">
                {related.map((item) => (
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

            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <BookOpenIcon className="mb-4 size-6 text-[#f08b4f]" />
              <h2 className="text-lg font-semibold text-[#effffb]">
                Source note
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                Checked {checkedAt} against current Subnautica 2 reporting.
                Early Access details can change after patches.
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
            </section>
          </aside>
        </div>
      </Container>
    </main>
  );
}
