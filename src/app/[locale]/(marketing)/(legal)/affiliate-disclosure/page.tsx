import Container from '@/components/layout/container';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Affiliate Disclosure',
    description:
      'Affiliate disclosure for Abyss Guides, including how affiliate links may be used on guide and equipment pages.',
    locale,
    pathname: '/affiliate-disclosure',
  });
}

export default function AffiliateDisclosurePage() {
  return (
    <main className="min-h-screen bg-[#031314] text-[#dff8f0]">
      <Container className="px-4 py-16 md:py-24">
        <article className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f08b4f]">
            Disclosure
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal md:text-6xl">
            Affiliate Disclosure
          </h1>
          <div className="mt-8 space-y-7 text-base leading-8 text-[#abc8c3]">
            <p>
              Some pages on Abyss Guides may include affiliate links. If you
              click one of those links and make a purchase, Abyss Guides may
              earn a commission at no extra cost to you.
            </p>
            <p>
              Affiliate links may appear on pages about hardware, controllers,
              headsets, performance settings, game services, or other products
              that are relevant to the guide topic.
            </p>
            <p>
              Affiliate relationships do not control guide conclusions. The
              site should prioritize useful player information, clear
              corrections, and transparent labeling.
            </p>
            <p>
              Abyss Guides is an independent fan-made guide site and is not
              affiliated with Unknown Worlds Entertainment, Krafton, or the
              official Subnautica 2 team.
            </p>
          </div>
        </article>
      </Container>
    </main>
  );
}
