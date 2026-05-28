import Container from '@/components/layout/container';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { getBaseUrl, getUrlWithLocale } from '@/lib/urls';
import { Routes } from '@/routes';
import {
  AlertTriangleIcon,
  BoxesIcon,
  FactoryIcon,
  LinkIcon,
  WrenchIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const PUBLISHED_AT = '2026-05-24';
const UPDATED_AT = '2026-05-28';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'How to Make Mangalloy Ingots in Subnautica 2 - Recipe Chain',
    description:
      'A Subnautica 2 Mangalloy Ingot guide covering Troilite, Atacamite, Titanium Ingots, Metal Farms, and rare-material planning.',
    locale,
    pathname: Routes.Subnautica2Mangalloy,
  });
}

const recipeRows = [
  [
    'Troilite',
    'Rare late-route metal. Save at least one sample for Metal Farm duplication planning.',
  ],
  [
    'Atacamite',
    'Alien Ruins material used in the Mangalloy chain and later progression planning.',
  ],
  [
    'Titanium Ingot',
    'Processed basic metal input. Keep enough Titanium stock before starting advanced crafting.',
  ],
];

const uses = [
  {
    title: 'Build Metal Farms',
    body: 'PC Gamer reports that a Metal Farm costs one Mangalloy Ingot plus Axum Bacterial Culture, making this ingot a gate for rare-metal production.',
  },
  {
    title: 'Repair later alien systems',
    body: 'Current reporting ties multiple Mangalloy Ingots to Alien Power Plant repair, so it is risky to treat the material as optional.',
  },
  {
    title: 'Protect Entangled Power Cell materials',
    body: 'Troilite also appears in the Entangled Power Cell recipe, so Mangalloy should not eat your whole Troilite stock unless the next power craft is already covered.',
  },
  {
    title: 'Connect resource pages',
    body: 'Mangalloy is a useful hub page because it links players from Troilite and Atacamite into crafting and production-system guides.',
  },
];

const rules = [
  'Do not craft Mangalloy until you know whether you need the raw Troilite for a Metal Farm.',
  'Hold one extra Troilite if Entangled Power Cell is already unlocked or close.',
  'Keep a separate storage label for rare metals so co-op teammates do not spend progression materials by accident.',
  'Verify recipe counts again after every Early Access crafting patch.',
  'Treat Mangalloy as a chain, not a single item: gather raw inputs, process basic ingots, then craft.',
];

const fieldNotes = [
  {
    title: 'Make the decision before opening the Fabricator',
    body: 'Mangalloy feels like an obvious upgrade craft, but the real choice is whether raw Troilite should seed a Metal Farm first. Decide that before the recipe screen tempts you.',
  },
  {
    title: 'One ingot is a route receipt',
    body: 'When you finish the first Mangalloy, write down where its rare inputs came from. The next repair or build step will be easier if the route is already repeatable.',
  },
  {
    title: 'Keep co-op storage boring',
    body: 'Rare-metal lockers should be plainly named. A beautiful base does not help if a teammate turns the only Troilite into the wrong craft.',
  },
];

const faqs = [
  {
    title: 'How do you make Mangalloy Ingot in Subnautica 2?',
    body: 'Current reporting describes Mangalloy Ingot as a processed material made from Troilite, Atacamite, and Titanium Ingot. Check your in-game recipe before spending rare materials.',
  },
  {
    title: 'What is Mangalloy Ingot used for?',
    body: 'Mangalloy gates Metal Farm construction and later alien-system repair planning in current public guides.',
  },
  {
    title: 'Should you spend your first Troilite on Mangalloy?',
    body: 'Usually not immediately. Save one Troilite for Metal Farm duplication planning, and save another if Entangled Power Cell is part of your next power route.',
  },
  {
    title: 'Why does Mangalloy need a separate storage box?',
    body: 'Its inputs overlap with rare-metal production and power crafting. Keeping them labeled prevents accidental co-op spending and wasted deep-route dives.',
  },
];

export default async function MangalloyGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const baseUrl = getBaseUrl().replace(/\/$/, '');
  const pageUrl = getUrlWithLocale(Routes.Subnautica2Mangalloy, locale).replace(
    /\/$/,
    ''
  );
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'How to Make Mangalloy Ingots in Subnautica 2',
      description:
        'Mangalloy Ingot recipe chain notes for Troilite, Atacamite, Titanium Ingot, Metal Farm, and Entangled Power Cell planning.',
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
          className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(64,224,208,.18),transparent_34%),radial-gradient(circle_at_18%_78%,rgba(240,139,79,.12),transparent_30%),linear-gradient(180deg,rgba(3,19,20,.16),rgba(1,9,12,.96))]"
        />
        <Container className="relative px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
              <WrenchIcon className="size-4" />
              Advanced crafting chain
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-[#e8fff9] md:text-6xl">
              How to Make Mangalloy Ingots in Subnautica 2
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#a9c9c3]">
              Mangalloy Ingots sit at the center of a rare-material chain:
              Troilite, Atacamite, Titanium processing, Metal Farms, and later
              alien-system repairs.
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
                Current reporting lists Mangalloy Ingot as a processed material
                made from Troilite, Atacamite, and a Titanium Ingot. Its biggest
                early value is that it gates Metal Farm construction and later
                power-plant progression. Do not spend the Troilite side of the
                recipe until Metal Farm and Entangled Power Cell needs are
                clear.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                Mangalloy recipe chain
              </h2>
              <div className="mt-5 overflow-hidden border border-cyan-200/12">
                <table className="w-full border-collapse bg-[#071f23] text-left text-sm">
                  <thead className="bg-[#0b2d33] text-[#dff8f0]">
                    <tr>
                      <th className="p-4 font-semibold">Input</th>
                      <th className="p-4 font-semibold">Why it matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recipeRows.map(([input, note]) => (
                      <tr key={input} className="border-t border-cyan-200/10">
                        <td className="p-4 align-top font-medium text-[#78ead7]">
                          {input}
                        </td>
                        <td className="p-4 leading-6 text-[#abc8c3]">{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                What Mangalloy unlocks
              </h2>
              <div className="mt-5 grid gap-4">
                {uses.map((item) => (
                  <section
                    key={item.title}
                    className="border border-cyan-200/12 bg-[#071f23] p-5"
                  >
                    <div className="flex items-center gap-2 text-[#78ead7]">
                      <LinkIcon className="size-4" />
                      <h3 className="font-semibold">{item.title}</h3>
                    </div>
                    <p className="mt-3 leading-7 text-[#abc8c3]">{item.body}</p>
                  </section>
                ))}
              </div>
            </section>

            <section className="border border-cyan-200/12 bg-[#082226] p-6">
              <div className="flex items-center gap-3">
                <AlertTriangleIcon className="size-6 text-[#f08b4f]" />
                <h2 className="text-3xl font-semibold text-[#effffb]">
                  Do not burn your first Troilite
                </h2>
              </div>
              <p className="mt-4 leading-8 text-[#abc8c3]">
                The main mistake is crafting too aggressively before you can
                duplicate rare metals. If you have only one Troilite, decide
                whether it should seed a Metal Farm before turning it into
                Mangalloy.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                Safe crafting checklist
              </h2>
              <ul className="mt-5 grid gap-3">
                {rules.map((rule) => (
                  <li
                    key={rule}
                    className="border-l-2 border-[#f08b4f] bg-[#071f23] px-4 py-3 text-sm leading-6 text-[#d1e8e2]"
                  >
                    {rule}
                  </li>
                ))}
              </ul>
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
                Required inputs
              </h2>
              <div className="mt-4 grid gap-3 text-sm">
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2Troilite}
                >
                  Troilite Location
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2MineralizedClinker}
                >
                  Mineralized Clinker Guide
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2TroiliteSoftlock}
                >
                  Troilite Softlock Fix
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
                  href={Routes.Subnautica2EntangledPowerCell}
                >
                  Entangled Power Cell Guide
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2KarakorumPowerPlant}
                >
                  Karakorum Power Plant Route
                </LocaleLink>
              </div>
            </section>

            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <h2 className="text-lg font-semibold text-[#effffb]">
                Source note
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                Checked May 28, 2026 against current PC Gamer reporting on Metal
                Farms and Atacamite, plus Entangled Power Cell recipe data.
                Recipe data is patch-sensitive.
              </p>
              <div className="mt-4 grid gap-2 text-sm">
                <a
                  className="text-[#78ead7] hover:underline"
                  href="https://www.pcgamer.com/games/survival-crafting/subnautica-2-metal-farm-scan-locations/"
                  rel="noreferrer"
                  target="_blank"
                >
                  PC Gamer Metal Farm guide
                </a>
                <a
                  className="text-[#78ead7] hover:underline"
                  href="https://www.pcgamer.com/games/survival-crafting/subnautica-2-atacamite-location/"
                  rel="noreferrer"
                  target="_blank"
                >
                  PC Gamer Atacamite guide
                </a>
                <a
                  className="text-[#78ead7] hover:underline"
                  href="https://subnautica2.gg/blueprints/entangled-power-cell"
                  rel="noreferrer"
                  target="_blank"
                >
                  Subnautica2.gg Entangled Power Cell
                </a>
              </div>
            </section>

            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <BoxesIcon className="mb-4 size-6 text-[#f08b4f]" />
              <h2 className="text-lg font-semibold text-[#effffb]">
                Storage mindset
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                Put Mangalloy inputs in a dedicated rare-material locker. This
                one habit prevents most co-op crafting mistakes.
              </p>
            </section>
          </aside>
        </div>
      </Container>
    </main>
  );
}
