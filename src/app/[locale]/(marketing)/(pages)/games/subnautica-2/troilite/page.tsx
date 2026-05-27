import Container from '@/components/layout/container';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import {
  AlertTriangleIcon,
  CompassIcon,
  FactoryIcon,
  GaugeIcon,
  ShieldAlertIcon,
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
    title: 'Where to Find Troilite in Subnautica 2 - Rare Material Guide',
    description:
      'Find Troilite in Subnautica 2 with late-game route notes, Mangalloy use cases, Metal Farm warnings, and Hotfix 2 caveats.',
    locale,
    pathname: Routes.Subnautica2Troilite,
  });
}

const routeSteps = [
  {
    title: 'Do not treat Troilite like a casual early resource',
    body: 'Current reporting places Troilite in a dangerous late-route area near the Alien Ruins Research Base, so prepare the Tadpole, oxygen, healing, and repair supplies first.',
  },
  {
    title: 'Use the Alien Ruins Research Base as the anchor',
    body: 'PC Gamer reports the route as northeast of the Alien Ruins Research Base, toward a deep green-pool area associated with Metal Farms.',
  },
  {
    title: 'Watch your depth and return plan',
    body: 'Reported route depth reaches roughly the limit of an upgraded Tadpole, so this should be planned like an expedition rather than a quick material run.',
  },
  {
    title: 'Scan and mark what you can',
    body: 'If you reach the Metal Farm area, prioritize scanning valuable structures and noting the route. The best guide value comes from repeatability.',
  },
];

const dangerRows = [
  [
    'Depth pressure',
    'The reported route goes very deep and may require upgraded vehicle planning.',
  ],
  [
    'Predators',
    'PC Gamer notes predators and a leviathan threat around the route, so repair and healing supplies matter.',
  ],
  [
    'Resource scarcity',
    'Launch-week reports describe Troilite as rare enough that careless crafting can hurt progression.',
  ],
  [
    'Patch drift',
    'Unknown Worlds added more Troilite resource areas in Hotfix 2, so older scarcity notes may need rechecking.',
  ],
];

const rules = [
  'Keep at least one Troilite available for Metal Farm use before converting everything into Mangalloy Ingots.',
  'Do not publish exact coordinates unless checked in the current build.',
  'Pair this route with the Crafting guide so players understand why Troilite matters.',
  'Recheck this page after every resource-flow patch or major Early Access update.',
];

export default function TroiliteGuidePage() {
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
          className="absolute inset-0 bg-[radial-gradient(circle_at_76%_20%,rgba(64,224,208,.18),transparent_34%),radial-gradient(circle_at_18%_78%,rgba(240,139,79,.13),transparent_30%),linear-gradient(180deg,rgba(3,19,20,.16),rgba(1,9,12,.96))]"
        />
        <Container className="relative px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
              <ShieldAlertIcon className="size-4" />
              Rare material route
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-[#e8fff9] md:text-6xl">
              Where to Find Troilite in Subnautica 2
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#a9c9c3]">
              Troilite is a late-route material tied to Mangalloy and Metal Farm
              planning. This page keeps the advice conservative because Early
              Access resource balance is already changing.
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
                Current Troilite reporting points players toward the deep
                late-game region northeast of the Alien Ruins Research Base, in
                a green-pool area connected to Metal Farms. Save at least one
                Troilite for Metal Farm duplication before converting your stock
                into Mangalloy Ingots.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                Troilite route notes
              </h2>
              <div className="mt-5 grid gap-4">
                {routeSteps.map((step) => (
                  <section
                    key={step.title}
                    className="border border-cyan-200/12 bg-[#071f23] p-5"
                  >
                    <div className="flex items-center gap-2 text-[#78ead7]">
                      <CompassIcon className="size-4" />
                      <h3 className="font-semibold">{step.title}</h3>
                    </div>
                    <p className="mt-3 leading-7 text-[#abc8c3]">{step.body}</p>
                  </section>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                Why Troilite is risky to waste
              </h2>
              <div className="mt-5 overflow-hidden border border-cyan-200/12">
                <table className="w-full border-collapse bg-[#071f23] text-left text-sm">
                  <thead className="bg-[#0b2d33] text-[#dff8f0]">
                    <tr>
                      <th className="p-4 font-semibold">Risk</th>
                      <th className="p-4 font-semibold">Planning note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dangerRows.map(([risk, note]) => (
                      <tr key={risk} className="border-t border-cyan-200/10">
                        <td className="p-4 align-top font-medium text-[#78ead7]">
                          {risk}
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
                <FactoryIcon className="size-6 text-[#f08b4f]" />
                <h2 className="text-3xl font-semibold text-[#effffb]">
                  Metal Farm rule
                </h2>
              </div>
              <p className="mt-4 leading-8 text-[#abc8c3]">
                The safest current advice is simple: keep one Troilite before
                crafting aggressively. PC Gamer reports that Metal Farms can
                duplicate a metal only after you insert one of that metal first,
                which makes one saved Troilite more valuable than one rushed
                Mangalloy craft.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                Publishing rules for this page
              </h2>
              <ul className="mt-5 grid gap-3">
                {rules.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-[#f08b4f] bg-[#071f23] px-4 py-3 text-sm leading-6 text-[#d1e8e2]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="border border-cyan-200/12 bg-[#071f23] p-6">
              <div className="flex items-center gap-3">
                <AlertTriangleIcon className="size-6 text-[#f08b4f]" />
                <h2 className="text-3xl font-semibold text-[#effffb]">
                  Hotfix 2 changed the resource picture
                </h2>
              </div>
              <p className="mt-4 leading-8 text-[#abc8c3]">
                Unknown Worlds added more Troilite resource areas in the
                late-game region in Hotfix 2. That is good for players, but it
                also means old launch-week scarcity wording should be treated as
                patch-sensitive rather than permanent.
              </p>
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
                  href={Routes.Subnautica2MineralizedClinker}
                >
                  Mineralized Clinker Guide
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2TroiliteAfterHotfix2}
                >
                  Troilite After Hotfix 2
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2EntangledPowerCell}
                >
                  Entangled Power Cell Guide
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2TroiliteSoftlock}
                >
                  Troilite Softlock Fix
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2Crafting}
                >
                  Crafting Guide
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2Resources}
                >
                  Resources Guide
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2Silver}
                >
                  Silver Location
                </LocaleLink>
              </div>
            </section>

            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <h2 className="text-lg font-semibold text-[#effffb]">
                Source note
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                Checked May 24, 2026 against Unknown Worlds Hotfix 2 and current
                Troilite route reporting. Recheck after every major Early Access
                patch.
              </p>
              <div className="mt-4 grid gap-2 text-sm">
                <a
                  className="text-[#78ead7] hover:underline"
                  href="https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-2"
                  rel="noreferrer"
                  target="_blank"
                >
                  Unknown Worlds Hotfix 2
                </a>
                <a
                  className="text-[#78ead7] hover:underline"
                  href="https://www.pcgamer.com/games/survival-crafting/subnautica-2-troilite-location/"
                  rel="noreferrer"
                  target="_blank"
                >
                  PC Gamer Troilite route
                </a>
              </div>
            </section>

            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <GaugeIcon className="mb-4 size-6 text-[#f08b4f]" />
              <h2 className="text-lg font-semibold text-[#effffb]">
                Route mindset
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                Troilite is a planning problem first and a harvesting problem
                second. The best route is the one you can survive, repeat, and
                explain to a co-op teammate.
              </p>
            </section>
          </aside>
        </div>
      </Container>
    </main>
  );
}
