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
    title: 'About Abyss Guides',
    description:
      'Learn about Abyss Guides, an independent fan-made guide site for Subnautica 2 and deep-sea survival games.',
    locale,
    pathname: '/about',
  });
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#031314] text-[#dff8f0]">
      <Container className="px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f08b4f]">
            Independent fan guide
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal md:text-6xl">
            About Abyss Guides
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#abc8c3]">
            Abyss Guides is a practical guide site for deep-sea survival and
            exploration games, starting with Subnautica 2 Early Access. The goal
            is to publish clear routes, resource notes, crafting data, map
            planning, co-op help, and update summaries that players can use
            while actually playing.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            [
              'Useful first',
              'Pages should answer the player question quickly before adding deeper detail.',
            ],
            [
              'Verified when possible',
              'Early Access details can change, so exact locations and recipes should be checked before they are treated as final.',
            ],
            [
              'Independent',
              'Abyss Guides is not affiliated with the official Subnautica 2 team or its publishers.',
            ],
          ].map(([title, body]) => (
            <section
              key={title}
              className="border border-cyan-200/12 bg-[#071f23] p-6"
            >
              <h2 className="text-xl font-semibold text-[#effffb]">{title}</h2>
              <p className="mt-4 leading-7 text-[#abc8c3]">{body}</p>
            </section>
          ))}
        </div>

        <section className="mt-10 border border-cyan-200/12 bg-[#082226] p-6">
          <h2 className="text-2xl font-semibold">Fan-site disclaimer</h2>
          <p className="mt-4 leading-8 text-[#abc8c3]">
            Abyss Guides is an independent fan-made guide site and is not
            affiliated with Unknown Worlds Entertainment, Krafton, or the
            official Subnautica 2 team. Game names, trademarks, and assets
            belong to their respective owners.
          </p>
        </section>
      </Container>
    </main>
  );
}
