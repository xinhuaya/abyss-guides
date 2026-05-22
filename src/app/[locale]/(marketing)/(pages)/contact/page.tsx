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
    title: 'Contact Abyss Guides',
    description:
      'Contact Abyss Guides for corrections, Subnautica 2 guide updates, affiliate questions, or general feedback.',
    locale,
    pathname: '/contact',
  });
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#031314] text-[#dff8f0]">
      <Container className="px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f08b4f]">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal md:text-6xl">
            Send corrections, tips, or questions.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#abc8c3]">
            If you notice outdated Early Access information, a broken link, or a
            guide that needs a clearer answer, send a note. Corrections are
            especially useful after Subnautica 2 patches.
          </p>
        </div>

        <section className="mt-10 max-w-2xl border border-cyan-200/12 bg-[#071f23] p-6">
          <h2 className="text-2xl font-semibold">Email</h2>
          <p className="mt-4 leading-8 text-[#abc8c3]">
            Contact Abyss Guides at{' '}
            <a
              className="text-[#78ead7] underline-offset-4 hover:underline"
              href="mailto:support@abyssguides.com"
            >
              support@abyssguides.com
            </a>
            .
          </p>
          <p className="mt-4 text-sm leading-6 text-[#8ba39e]">
            For guide corrections, include the page URL, the detail that should
            be changed, and the source or patch version if available.
          </p>
        </section>
      </Container>
    </main>
  );
}
