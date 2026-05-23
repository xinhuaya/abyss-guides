import Container from '@/components/layout/container';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import {
  AlertTriangleIcon,
  CompassIcon,
  DropletsIcon,
  PickaxeIcon,
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
    title: 'Where to Find Silver in Subnautica 2 - Early Route and Uses',
    description:
      'Find Silver in Subnautica 2 with early route notes, crafting uses, farming advice, and Hotfix 2 patch caveats for Early Access.',
    locale,
    pathname: Routes.Subnautica2Silver,
  });
}

const routeSteps = [
  {
    title: 'Use the Lifepod as your route anchor',
    body: 'Silver routes are easiest to repeat when you start from the Lifepod and move north toward early colony ruins instead of roaming randomly.',
  },
  {
    title: 'Search cave walls and small nodes',
    body: 'Look for cave spaces around the early Old Habitat and black-box route. Small Silver pieces can be collected by hand, while larger mineral blocks need the Sonic Resonator.',
  },
  {
    title: 'Bring extra oxygen capacity first',
    body: 'Silver helps improve your oxygen setup, but the first trip is still easier if you travel light, mark the cave mentally, and leave before the return route gets messy.',
  },
  {
    title: 'Return after Hotfix 2 if an old route felt dry',
    body: 'Unknown Worlds added more Silver resource areas in the early-game region in Hotfix 2, so early routes may feel less punishing than launch-week reports suggested.',
  },
];

const useRows = [
  [
    'Air tank progression',
    'Silver is a key early bottleneck because better oxygen capacity changes how long each dive can safely last.',
  ],
  [
    'Wiring kits',
    'Silver feeds electronics chains, including wiring kit-style recipes and later advanced components.',
  ],
  [
    'Base and vehicle systems',
    'Guides reporting on the launch build tie Silver into important base facilities and Tadpole-related crafting chains.',
  ],
  [
    'Scanner routing',
    'Once you have stronger base tools, Silver becomes easier to track deliberately instead of by memory.',
  ],
];

const checklist = [
  'Empty enough inventory slots before the run.',
  'Bring food and water if you are combining Silver with story objectives.',
  'Use the Lifepod, Coral Dome, ruins, and cave entrance as landmark language for co-op calls.',
  'Do not spend every Silver piece at once if you have not checked your next recipe chain.',
];

export default function SilverGuidePage() {
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
          className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(64,224,208,.20),transparent_34%),radial-gradient(circle_at_20%_80%,rgba(240,139,79,.10),transparent_30%),linear-gradient(180deg,rgba(3,19,20,.16),rgba(1,9,12,.96))]"
        />
        <Container className="relative px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
              <PickaxeIcon className="size-4" />
              Subnautica 2 resource route
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-[#e8fff9] md:text-6xl">
              Where to Find Silver in Subnautica 2
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#a9c9c3]">
              Silver is one of the first resources that turns a simple dive into
              real progression. This guide keeps the route practical,
              patch-aware, and spoiler-light for Early Access players.
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
                For early Silver, follow the northward early-story route from
                the Lifepod toward the Old Habitat colony ruins and check cave
                spaces near the black-box objective path. PC Gamer reports a
                useful cave near that route, and Unknown Worlds added more early
                Silver areas in Hotfix 2.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                Early Silver route
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
                What Silver is used for
              </h2>
              <div className="mt-5 overflow-hidden border border-cyan-200/12">
                <table className="w-full border-collapse bg-[#071f23] text-left text-sm">
                  <thead className="bg-[#0b2d33] text-[#dff8f0]">
                    <tr>
                      <th className="p-4 font-semibold">Use</th>
                      <th className="p-4 font-semibold">Why it matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {useRows.map(([use, why]) => (
                      <tr key={use} className="border-t border-cyan-200/10">
                        <td className="p-4 align-top font-medium text-[#78ead7]">
                          {use}
                        </td>
                        <td className="p-4 leading-6 text-[#abc8c3]">{why}</td>
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
                  Patch note for Early Access
                </h2>
              </div>
              <p className="mt-4 leading-8 text-[#abc8c3]">
                Silver was clearly a launch-week pain point. GamesRadar reported
                that players were struggling to find it, and Unknown Worlds
                Hotfix 2 later added more Silver resource areas in the
                early-game region. If another patch changes resource flow, this
                page should be checked before exact route text is reused.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                Before you leave base
              </h2>
              <ul className="mt-5 grid gap-3">
                {checklist.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-[#f08b4f] bg-[#071f23] px-4 py-3 text-sm leading-6 text-[#d1e8e2]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
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
                  href={Routes.Subnautica2Resources}
                >
                  Resources Guide
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2Crafting}
                >
                  Crafting Guide
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2Beginner}
                >
                  Beginner Guide
                </LocaleLink>
              </div>
            </section>

            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <h2 className="text-lg font-semibold text-[#effffb]">
                Source note
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                Checked May 23, 2026 against Unknown Worlds Hotfix 2 and current
                Silver route reporting. Early Access locations can change.
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
                  href="https://www.pcgamer.com/games/survival-crafting/subnautica-2-silver-location/"
                  rel="noreferrer"
                  target="_blank"
                >
                  PC Gamer Silver route
                </a>
                <a
                  className="text-[#78ead7] hover:underline"
                  href="https://www.gamesradar.com/games/survival/subnautica-2-adding-better-callouts-for-silver-in-first-patch-as-players-struggle-to-find-any/"
                  rel="noreferrer"
                  target="_blank"
                >
                  GamesRadar Silver reporting
                </a>
              </div>
            </section>

            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <DropletsIcon className="mb-4 size-6 text-[#f08b4f]" />
              <h2 className="text-lg font-semibold text-[#effffb]">
                Route mindset
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                Treat Silver like a repeatable errand, not a lucky discovery.
                Once you can describe the cave entrance clearly, the material
                stops blocking every recipe chain.
              </p>
            </section>
          </aside>
        </div>
      </Container>
    </main>
  );
}
