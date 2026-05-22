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
    title:
      'Subnautica 2 Guide Hub - Beginner Tips, Resources, Crafting, Map, and Co-op',
    description:
      'Start here for Subnautica 2 beginner tips, resource locations, crafting recipes, map and biome notes, co-op help, settings fixes, and Early Access updates.',
    locale,
    pathname: '/games/subnautica-2',
  });
}

const sections = [
  ['Beginner Guide', 'First-session priorities, safe routes, scanning habits, and base planning.'],
  ['Resources', 'Material tables, farming notes, and individual resource pages as data is verified.'],
  ['Crafting', 'Recipe tracking, blueprint unlock notes, and calculator-ready recipe structure.'],
  ['Map & Biomes', 'Route planning, safety notes, base-friendly areas, and danger markers.'],
  ['Co-op', 'Team roles, shared storage habits, setup checks, and multiplayer troubleshooting.'],
  ['Roadmap', 'Early Access changes, patch summaries, and guide pages that need updating.'],
];

export default function Subnautica2HubPage() {
  return (
    <main className="bg-[#f7f3ea] text-[#10201f] dark:bg-[#07110f] dark:text-[#e8efe8]">
      <Container className="px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#bf6f45]">
            Last updated May 22, 2026
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal md:text-6xl">
            Subnautica 2 Guide Hub
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#4e5d59] dark:text-[#b9c9c3]">
            Subnautica 2 is in Early Access, so guides need to stay flexible.
            This hub organizes beginner routes, resources, crafting, map notes,
            co-op help, settings, and updates in one place.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sections.map(([title, description]) => (
            <section
              key={title}
              id={title.toLowerCase().replaceAll(' ', '-').replace('&', 'and')}
              className="border border-[#10201f]/10 bg-[#fffdf7] p-5 dark:border-white/10 dark:bg-[#10201f]"
            >
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#53615e] dark:text-[#b7c4bf]">
                {description}
              </p>
            </section>
          ))}
        </div>

        <section
          id="updates"
          className="mt-12 border border-[#10201f]/10 bg-[#efe7d8] p-6 dark:border-white/10 dark:bg-[#0b1715]"
        >
          <h2 className="text-2xl font-semibold">Editorial rule</h2>
          <p className="mt-4 max-w-3xl leading-8 text-[#4e5d59] dark:text-[#b9c9c3]">
            Exact resource locations, recipes, and platform details should be
            published only after gameplay verification or official/current
            sources. Early Access pages should show a visible last-updated date.
          </p>
        </section>

        <p className="mt-12 text-sm leading-6 text-[#65716d] dark:text-[#aab8b2]">
          Abyss Guides is an independent fan-made guide site and is not
          affiliated with Unknown Worlds Entertainment, Krafton, or the official
          Subnautica 2 team. Game names, trademarks, and assets belong to their
          respective owners.
        </p>
      </Container>
    </main>
  );
}
