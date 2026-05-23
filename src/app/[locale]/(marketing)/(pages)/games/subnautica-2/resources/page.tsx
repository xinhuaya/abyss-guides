import Container from '@/components/layout/container';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import {
  AlertCircleIcon,
  BoxesIcon,
  CircleDotIcon,
  FlaskConicalIcon,
  PickaxeIcon,
  RouteIcon,
  ScanLineIcon,
} from 'lucide-react';
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
      'Subnautica 2 Resources Guide - Materials, Farming, and Crafting Uses',
    description:
      'A Subnautica 2 resources guide for Early Access materials, farming priorities, crafting bottlenecks, resource routes, and future resource location pages.',
    locale,
    pathname: Routes.Subnautica2Resources,
  });
}

const resourceGroups = [
  {
    title: 'Basic construction materials',
    icon: BoxesIcon,
    body: 'Materials used constantly for tools, early base pieces, storage, and repeated crafting. These should become the first individual resource pages because players search them often.',
    examples: ['Titanium', 'Copper', 'Quartz', 'Metal Salvage'],
  },
  {
    title: 'Electronics and upgrade materials',
    icon: ScanLineIcon,
    body: 'Resources that block tools, scanners, upgrade paths, or base systems. These usually become high-value guide pages because players hit progression walls here.',
    examples: [
      'Silver',
      'Gold',
      'Copper Wire',
      'Computer Chip-style components',
    ],
  },
  {
    title: 'Processed materials',
    icon: FlaskConicalIcon,
    body: 'Materials made from raw resources or special stations. These are best handled with crafting-chain tables, not isolated paragraphs.',
    examples: ['Ingots', 'Mangalloy Ingot', 'Advanced processed materials'],
  },
  {
    title: 'Rare and late-route materials',
    icon: PickaxeIcon,
    body: 'Materials tied to deeper routes, advanced upgrades, or current endgame tasks. These pages need careful verification because Early Access updates can change availability.',
    examples: ['Atacamite', 'Troilite', 'Strontium-style rare materials'],
  },
];

const priorityResources = [
  [
    'Titanium',
    'Early construction, tools, storage, and base expansion.',
    'High',
  ],
  ['Copper', 'Electronics, wiring, and early progression recipes.', 'High'],
  [
    'Silver',
    'Known early bottleneck for some players; watch patch changes.',
    'High',
  ],
  [
    'Quartz',
    'Glass-related crafting and useful early recipe families.',
    'Medium',
  ],
  ['Gold', 'Electronics and mid-game recipe paths.', 'Medium'],
  [
    'Atacamite',
    'Reported as important for Mangalloy Ingots and later progression.',
    'Late-route',
  ],
  [
    'Troilite',
    'Reported as a rarer material used in Mangalloy Ingot crafting.',
    'Late-route',
  ],
];

const pagePlan = [
  {
    title: 'Where to Find Silver in Subnautica 2',
    body: 'High-priority bottleneck page with early-game route notes, patch caveats, and crafting uses.',
    href: Routes.Subnautica2Silver,
  },
  {
    title: 'Where to Find Troilite in Subnautica 2',
    body: 'Rare late-route material page for Mangalloy Ingots, Metal Farms, and route safety.',
    href: Routes.Subnautica2Troilite,
  },
  {
    title: 'Where to Find Atacamite in Subnautica 2',
    body: 'Alien Ruins material page tied to Mangalloy Ingots and power-plant progression.',
    href: Routes.Subnautica2Atacamite,
  },
  {
    title: 'How to Make Mangalloy Ingots in Subnautica 2',
    body: 'Processed-material page connecting Troilite, Atacamite, Titanium Ingots, and advanced builds.',
    href: Routes.Subnautica2Mangalloy,
  },
  {
    title: 'How to Build a Metal Farm in Subnautica 2',
    body: 'Production-system page for scanning, building, powering, and duplicating rare metals.',
    href: Routes.Subnautica2MetalFarm,
  },
  {
    title: 'Where to Find Titanium in Subnautica 2',
    body: 'Basic material page with common route, uses, and farming notes.',
  },
  {
    title: 'Where to Find Copper in Subnautica 2',
    body: 'Early electronics page with route safety and recipe links.',
  },
];

export default function ResourcesGuidePage() {
  return (
    <main className="min-h-screen bg-[#031314] text-[#dff8f0]">
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
          className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(64,224,208,.18),transparent_34%),radial-gradient(circle_at_18%_82%,rgba(240,139,79,.10),transparent_28%),linear-gradient(180deg,rgba(3,19,20,.16),rgba(1,9,12,.96))]"
        />
        <Container className="relative px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
              <BoxesIcon className="size-4" />
              Early Access material index
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-[#e8fff9] md:text-6xl">
              Subnautica 2 Resources Guide
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#a9c9c3]">
              This is the main resource hub for Subnautica 2 materials, crafting
              bottlenecks, farming priorities, and future individual resource
              location pages. It is designed for Early Access, where exact
              routes can change after patches.
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
                The safest way to approach Subnautica 2 resources is to build
                repeatable routes instead of chasing every material at once.
                Stockpile basic construction materials first, then solve
                electronics bottlenecks, then track processed and rare materials
                through crafting chains.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                Resource categories
              </h2>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {resourceGroups.map((group) => {
                  const Icon = group.icon;
                  return (
                    <section
                      key={group.title}
                      className="border border-cyan-200/12 bg-[#071f23] p-5"
                    >
                      <Icon className="mb-5 size-6 text-[#78ead7]" />
                      <h3 className="text-xl font-semibold text-[#effffb]">
                        {group.title}
                      </h3>
                      <p className="mt-3 leading-7 text-[#abc8c3]">
                        {group.body}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {group.examples.map((example) => (
                          <span
                            key={example}
                            className="border border-cyan-200/15 bg-cyan-300/5 px-2 py-1 text-xs text-[#bff5ea]"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                Priority resource table
              </h2>
              <div className="mt-5 overflow-hidden border border-cyan-200/12">
                <table className="w-full border-collapse bg-[#071f23] text-left text-sm">
                  <thead className="bg-[#0b2d33] text-[#dff8f0]">
                    <tr>
                      <th className="p-4 font-semibold">Resource</th>
                      <th className="p-4 font-semibold">Why players need it</th>
                      <th className="p-4 font-semibold">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priorityResources.map(([resource, use, priority]) => (
                      <tr
                        key={resource}
                        className="border-t border-cyan-200/10"
                      >
                        <td className="p-4 align-top font-medium text-[#78ead7]">
                          {resource}
                        </td>
                        <td className="p-4 leading-6 text-[#abc8c3]">{use}</td>
                        <td className="p-4 align-top text-[#d1e8e2]">
                          {priority}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="border border-cyan-200/12 bg-[#082226] p-6">
              <div className="flex items-center gap-3">
                <AlertCircleIcon className="size-6 text-[#f08b4f]" />
                <h2 className="text-3xl font-semibold text-[#effffb]">
                  Current bottlenecks to watch
                </h2>
              </div>
              <p className="mt-4 leading-8 text-[#abc8c3]">
                Early Access players are already reporting specific resource
                pressure points. Silver has been notable enough that reporting
                around the first patch mentions better callouts for it. PC Gamer
                has also covered Atacamite and Troilite as important materials
                for Mangalloy Ingots and later progression. Treat these as
                high-priority guide pages, but verify details after patches.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                How to farm without wasting a dive
              </h2>
              <div className="mt-5 grid gap-4">
                {[
                  [
                    'Pick one resource goal',
                    'Do not combine every possible target into one trip. Focused routes are easier to repeat and easier to improve.',
                  ],
                  [
                    'Start from a landmark',
                    'A resource route should begin somewhere easy to describe, especially if you play co-op.',
                  ],
                  [
                    'Return before panic',
                    'A half-full inventory that reaches safety is better than a full inventory lost to oxygen, creatures, or confusion.',
                  ],
                  [
                    'Write route notes',
                    'Useful guide pages come from repeatable observations: what you needed, where you turned, and what danger appeared.',
                  ],
                ].map(([title, body]) => (
                  <section
                    key={title}
                    className="border border-cyan-200/12 bg-[#071f23] p-5"
                  >
                    <div className="flex items-center gap-2 text-[#78ead7]">
                      <RouteIcon className="size-4" />
                      <h3 className="font-semibold">{title}</h3>
                    </div>
                    <p className="mt-3 leading-7 text-[#abc8c3]">{body}</p>
                  </section>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                Individual resource pages to build next
              </h2>
              <div className="mt-5 grid gap-4">
                {pagePlan.map((item) => (
                  <section
                    key={item.title}
                    className="border border-cyan-200/12 bg-[#071f23] p-5"
                  >
                    <div className="flex items-center gap-2">
                      <CircleDotIcon className="size-4 text-[#f08b4f]" />
                      {item.href ? (
                        <LocaleLink
                          className="font-semibold text-[#effffb] hover:text-[#78ead7]"
                          href={item.href}
                        >
                          {item.title}
                        </LocaleLink>
                      ) : (
                        <h3 className="font-semibold text-[#effffb]">
                          {item.title}
                        </h3>
                      )}
                    </div>
                    <p className="mt-3 leading-7 text-[#abc8c3]">{item.body}</p>
                  </section>
                ))}
              </div>
            </section>
          </article>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <h2 className="text-lg font-semibold text-[#effffb]">
                Read next
              </h2>
              <div className="mt-4 grid gap-3 text-sm">
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2Silver}
                >
                  Silver Location
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2Troilite}
                >
                  Troilite Location
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2Atacamite}
                >
                  Atacamite Location
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2MetalFarm}
                >
                  Metal Farm Guide
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2Beginner}
                >
                  Beginner Guide
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2Crafting}
                >
                  Crafting Recipes
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2Map}
                >
                  Map and Biomes
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2Updates}
                >
                  Roadmap and Updates
                </LocaleLink>
              </div>
            </section>

            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <h2 className="text-lg font-semibold text-[#effffb]">
                Source note
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                Resource bottleneck examples were checked on May 23, 2026
                against current reporting from PC Gamer and GamesRadar. Exact
                location pages should still be verified in the current build
                before publishing.
              </p>
              <div className="mt-4 grid gap-2 text-sm">
                <a
                  className="text-[#78ead7] hover:underline"
                  href="https://www.pcgamer.com/games/survival-crafting/subnautica-2-atacamite-location/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Atacamite guide
                </a>
                <a
                  className="text-[#78ead7] hover:underline"
                  href="https://www.pcgamer.com/games/survival-crafting/subnautica-2-troilite-location/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Troilite guide
                </a>
                <a
                  className="text-[#78ead7] hover:underline"
                  href="https://www.gamesradar.com/games/survival/subnautica-2-adding-better-callouts-for-silver-in-first-patch-as-players-struggle-to-find-any/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Silver patch reporting
                </a>
              </div>
            </section>
          </aside>
        </div>
      </Container>
    </main>
  );
}
