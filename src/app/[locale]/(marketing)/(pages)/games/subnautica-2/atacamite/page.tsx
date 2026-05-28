import Container from '@/components/layout/container';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { getBaseUrl, getUrlWithLocale } from '@/lib/urls';
import { Routes } from '@/routes';
import {
  AlertTriangleIcon,
  CompassIcon,
  PickaxeIcon,
  RouteIcon,
  WrenchIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const PUBLISHED_AT = '2026-05-23';
const UPDATED_AT = '2026-05-29';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Where to Find Atacamite in Subnautica 2 - Alien Ruins Route',
    description:
      'Find Atacamite in Subnautica 2 with Alien Ruins route notes, Mangalloy Ingot uses, Metal Farm planning, depth requirements, and Early Access caveats.',
    locale,
    pathname: Routes.Subnautica2Atacamite,
  });
}

const routeNotes = [
  {
    title: 'Start from the Alien Ruins Research Base',
    body: 'Current reporting points to Atacamite around the Alien Ruins route. Use the Research Base as the landmark so the dive can be repeated.',
  },
  {
    title: 'Prepare for lower-depth mining',
    body: 'PC Gamer places Atacamite below the comfortable early-game layer, around deeper Alien Ruins areas, so bring the Tadpole Depth Module before treating this as a farming route.',
  },
  {
    title: 'Look for dark green column-like crystals',
    body: 'Atacamite nodes are visually distinct. Once you find a cluster, mine it with the Sonic Resonator and note the route for later Mangalloy crafting.',
  },
  {
    title: 'Do not leave with only one sample',
    body: 'Atacamite feeds Mangalloy Ingots, Metal Farm planning, and later power-plant progression, so gather a buffer when the route is safe.',
  },
  {
    title: 'Pair it with Troilite planning',
    body: 'Mangalloy asks you to think about Atacamite and Troilite together. If you find Atacamite first, mark the route and check whether the Troilite trip is already on your next dive list.',
  },
];

const useRows = [
  [
    'Mangalloy Ingots',
    'Atacamite is one of the rare inputs reported for Mangalloy Ingot crafting.',
  ],
  [
    'Metal Farm chain',
    'A Metal Farm requires a Mangalloy Ingot, so Atacamite indirectly gates rare-metal production.',
  ],
  [
    'Alien Power Plant',
    'PC Gamer reports that later repair work can require multiple Mangalloy Ingots, making Atacamite worth stockpiling.',
  ],
  [
    'Route mapping',
    'Because this sits deeper than early materials, a repeatable route matters more than a one-off find.',
  ],
];

const fieldNotes = [
  {
    title: 'Mark the way home before mining',
    body: 'The Atacamite cluster is not useful if you cannot repeat the dive. Drop a beacon or write the route from the Research Base before filling your inventory.',
  },
  {
    title: 'Bring a real mining loadout',
    body: 'This is not a swim-by pickup. Treat it like a Sonic Resonator trip with depth, power, storage, and return timing solved before you leave base.',
  },
  {
    title: 'Keep Atacamite and Troilite together in storage',
    body: 'Mangalloy planning gets messy when the two rare inputs live in different lockers. Put them in one marked rare-metal box and avoid surprise co-op spending.',
  },
];

const faqs = [
  {
    title: 'Where do you find Atacamite in Subnautica 2?',
    body: 'Current route reporting points toward lower-depth Alien Ruins areas. PC Gamer describes a cluster east-northeast of the Alien Ruins Research Base, near alien dwellings and quartz nodes.',
  },
  {
    title: 'What do you need before farming Atacamite?',
    body: 'Bring the Tadpole Depth Module, Sonic Resonator, oxygen margin, and a way to mark the route. Treat it as a deeper mining trip, not a quick swim.',
  },
  {
    title: 'What is Atacamite used for?',
    body: 'Atacamite is one of the rare inputs reported for Mangalloy Ingot crafting, which then connects to Metal Farms and later alien-system work.',
  },
  {
    title: 'Should you farm extra Atacamite?',
    body: 'Yes, if the route is safe. Mangalloy and Metal Farm planning can use more than a single sample, and returning to the same deep route repeatedly wastes time.',
  },
];

export default async function AtacamiteGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const baseUrl = getBaseUrl().replace(/\/$/, '');
  const pageUrl = getUrlWithLocale(Routes.Subnautica2Atacamite, locale).replace(
    /\/$/,
    ''
  );
  const hubUrl = getUrlWithLocale(Routes.Subnautica2, locale).replace(
    /\/$/,
    ''
  );
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Where to Find Atacamite in Subnautica 2',
      description:
        'Atacamite route notes for Alien Ruins, Mangalloy Ingot, Metal Farm, and deep mining prep.',
      url: pageUrl,
      datePublished: PUBLISHED_AT,
      dateModified: UPDATED_AT,
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
          name: 'Where to Find Atacamite in Subnautica 2',
          item: pageUrl,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
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
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(106,240,224,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(106,240,224,.15) 1px, transparent 1px)',
            backgroundSize: '42px 42px',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(64,224,208,.18),transparent_34%),radial-gradient(circle_at_18%_80%,rgba(240,139,79,.12),transparent_30%),linear-gradient(180deg,rgba(3,19,20,.16),rgba(1,9,12,.96))]"
        />
        <Container className="relative px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
              <PickaxeIcon className="size-4" />
              Alien Ruins material route
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-[#e8fff9] md:text-6xl">
              Where to Find Atacamite in Subnautica 2
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#a9c9c3]">
              Atacamite is a deeper-route resource that matters because it feeds
              Mangalloy Ingots. This guide keeps the route practical and
              patch-aware for Subnautica 2 Early Access.
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
                Look for Atacamite around lower-depth Alien Ruins routes after
                you have the Tadpole Depth Module. PC Gamer reports a strong
                cluster east-northeast of the Alien Ruins Research Base, near
                alien dwellings and quartz nodes. Save it for Mangalloy before
                you treat it like spare mineral stock.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                Route notes
              </h2>
              <div className="mt-5 grid gap-4">
                {routeNotes.map((note) => (
                  <section
                    key={note.title}
                    className="border border-cyan-200/12 bg-[#071f23] p-5"
                  >
                    <div className="flex items-center gap-2 text-[#78ead7]">
                      <CompassIcon className="size-4" />
                      <h3 className="font-semibold">{note.title}</h3>
                    </div>
                    <p className="mt-3 leading-7 text-[#abc8c3]">{note.body}</p>
                  </section>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                Why Atacamite matters
              </h2>
              <div className="mt-5 overflow-hidden border border-cyan-200/12">
                <table className="w-full border-collapse bg-[#071f23] text-left text-sm">
                  <thead className="bg-[#0b2d33] text-[#dff8f0]">
                    <tr>
                      <th className="p-4 font-semibold">Use</th>
                      <th className="p-4 font-semibold">Planning note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {useRows.map(([use, note]) => (
                      <tr key={use} className="border-t border-cyan-200/10">
                        <td className="p-4 align-top font-medium text-[#78ead7]">
                          {use}
                        </td>
                        <td className="p-4 leading-6 text-[#abc8c3]">{note}</td>
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
                  Safe farming rule
                </h2>
              </div>
              <p className="mt-4 leading-8 text-[#abc8c3]">
                Treat Atacamite as a planned mining trip, not a casual pickup.
                If you have already reached the Alien Ruins safely, gather
                enough for several Mangalloy crafts before leaving, then update
                your resource storage so you do not accidentally spend all of
                it.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                Field notes
              </h2>
              <div className="mt-5 grid gap-4">
                {fieldNotes.map((note) => (
                  <section
                    key={note.title}
                    className="border border-cyan-200/12 bg-[#071f23] p-5"
                  >
                    <h3 className="font-semibold text-[#78ead7]">
                      {note.title}
                    </h3>
                    <p className="mt-3 leading-7 text-[#abc8c3]">{note.body}</p>
                  </section>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">FAQ</h2>
              <div className="mt-5 grid gap-4">
                {faqs.map((faq) => (
                  <section
                    key={faq.title}
                    className="border border-cyan-200/12 bg-[#071f23] p-5"
                  >
                    <h3 className="font-semibold text-[#78ead7]">
                      {faq.title}
                    </h3>
                    <p className="mt-3 leading-7 text-[#abc8c3]">{faq.body}</p>
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
                  href={Routes.Subnautica2Mangalloy}
                >
                  Mangalloy Ingot Guide
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2Troilite}
                >
                  Troilite Location
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2ConduitCrystal}
                >
                  Conduit Crystal Guide
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2KarakorumPowerPlant}
                >
                  Karakorum Power Plant Route
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2MetalFarm}
                >
                  Metal Farm Guide
                </LocaleLink>
              </div>
            </section>

            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <h2 className="text-lg font-semibold text-[#effffb]">
                Source note
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                Checked May 28, 2026 against current Atacamite route reporting,
                Mangalloy planning notes, and nearby deep-route material pages.
                Recheck after Subnautica 2 resource patches.
              </p>
              <a
                className="mt-4 inline-flex text-sm text-[#78ead7] hover:underline"
                href="https://www.pcgamer.com/games/survival-crafting/subnautica-2-atacamite-location/"
                rel="noreferrer"
                target="_blank"
              >
                PC Gamer Atacamite guide
              </a>
            </section>

            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <RouteIcon className="mb-4 size-6 text-[#f08b4f]" />
              <h2 className="text-lg font-semibold text-[#effffb]">
                Route mindset
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                Atacamite is worth documenting by landmark, bearing, depth, and
                return path. Those four notes are more useful than a vague
                resource label.
              </p>
            </section>
          </aside>
        </div>
      </Container>
    </main>
  );
}
