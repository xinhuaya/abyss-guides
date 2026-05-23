import Container from '@/components/layout/container';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
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
  [
    Routes.Subnautica2Beginner,
    'Beginner Guide',
    'First-session priorities, safe routes, scanning habits, and base planning.',
  ],
  [
    Routes.Subnautica2Resources,
    'Resources',
    'Material tables, farming notes, and individual resource pages as data is verified.',
  ],
  [
    Routes.Subnautica2Crafting,
    'Crafting',
    'Recipe tracking, blueprint unlock notes, and calculator-ready recipe structure.',
  ],
  [
    Routes.Subnautica2Map,
    'Map & Biomes',
    'Route planning, safety notes, base-friendly areas, and danger markers.',
  ],
  [
    Routes.Subnautica2Coop,
    'Co-op',
    'Team roles, shared storage habits, setup checks, and multiplayer troubleshooting.',
  ],
  [
    Routes.Subnautica2Updates,
    'Roadmap',
    'Early Access changes, patch summaries, and guide pages that need updating.',
  ],
];

const priorityResources = [
  {
    href: Routes.Subnautica2Silver,
    title: 'Where to Find Silver',
    description:
      'Early-game air tank and electronics bottleneck with patch-sensitive route notes.',
  },
  {
    href: Routes.Subnautica2Troilite,
    title: 'Where to Find Troilite',
    description:
      'Late-route rare material guide for Mangalloy, Metal Farms, and safer planning.',
  },
];

export default function Subnautica2HubPage() {
  return (
    <main className="bg-[#031314] text-[#dff8f0]">
      <Container className="px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#bf6f45]">
            Last updated May 22, 2026
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal md:text-6xl">
            Subnautica 2 Guide Hub
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#a9c9c3]">
            Subnautica 2 is in Early Access, so guides need to stay flexible.
            This hub organizes beginner routes, resources, crafting, map notes,
            co-op help, settings, and updates in one place.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sections.map(([href, title, description]) => (
            <LocaleLink
              key={title}
              id={title.toLowerCase().replaceAll(' ', '-').replace('&', 'and')}
              href={href}
              className="border border-cyan-200/12 bg-[#071f23] p-5 transition hover:-translate-y-1 hover:border-cyan-200/40"
            >
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                {description}
              </p>
            </LocaleLink>
          ))}
        </div>

        <section className="mt-12 border border-cyan-200/12 bg-[#082226] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#bf6f45]">
            High-demand resource pages
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-[#effffb]">
            Start with the materials players get stuck on
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {priorityResources.map((item) => (
              <LocaleLink
                key={item.title}
                href={item.href}
                className="border border-cyan-200/12 bg-[#071f23] p-5 transition hover:-translate-y-1 hover:border-cyan-200/40"
              >
                <h3 className="text-xl font-semibold text-[#78ead7]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                  {item.description}
                </p>
              </LocaleLink>
            ))}
          </div>
        </section>

        <section
          id="updates"
          className="mt-12 border border-cyan-200/12 bg-[#082226] p-6"
        >
          <h2 className="text-2xl font-semibold">Editorial rule</h2>
          <p className="mt-4 max-w-3xl leading-8 text-[#abc8c3]">
            Exact resource locations, recipes, and platform details should be
            published only after gameplay verification or official/current
            sources. Early Access pages should show a visible last-updated date.
          </p>
        </section>

        <p className="mt-12 text-sm leading-6 text-[#8ba39e]">
          Abyss Guides is an independent fan-made guide site and is not
          affiliated with Unknown Worlds Entertainment, Krafton, or the official
          Subnautica 2 team. Game names, trademarks, and assets belong to their
          respective owners.
        </p>
      </Container>
    </main>
  );
}
