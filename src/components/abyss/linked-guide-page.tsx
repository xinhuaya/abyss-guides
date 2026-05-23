import Container from '@/components/layout/container';
import { LocaleLink } from '@/i18n/navigation';
import { getBaseUrl } from '@/lib/urls';
import type { LucideIcon } from 'lucide-react';
import { AlertTriangleIcon, BookOpenIcon } from 'lucide-react';
import type { ComponentProps } from 'react';

type LocaleHref = ComponentProps<typeof LocaleLink>['href'];

type LinkedGuidePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  pathname: string;
  icon: LucideIcon;
  quickAnswer: string;
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
  sections,
  table,
  caution,
  related,
  sources,
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
      datePublished: '2026-05-23',
      dateModified: '2026-05-23',
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
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(106,240,224,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(106,240,224,.15) 1px, transparent 1px)',
            backgroundSize: '42px 42px',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_74%_20%,rgba(64,224,208,.18),transparent_34%),radial-gradient(circle_at_18%_80%,rgba(240,139,79,.12),transparent_30%),linear-gradient(180deg,rgba(3,19,20,.16),rgba(1,9,12,.96))]"
        />
        <Container className="relative px-4 py-16 md:py-24">
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
        </Container>
      </section>

      <Container className="px-4 py-12">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="space-y-8">
            <section className="border border-cyan-200/15 bg-[#082226] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f08b4f]">
                Quick answer
              </p>
              <p className="mt-4 text-lg leading-8 text-[#d7eee8]">
                {quickAnswer}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                Route notes
              </h2>
              <div className="mt-5 grid gap-4">
                {sections.map((section) => (
                  <section
                    key={section.title}
                    className="border border-cyan-200/12 bg-[#071f23] p-5"
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
                Checked May 23, 2026 against current Subnautica 2 reporting.
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
