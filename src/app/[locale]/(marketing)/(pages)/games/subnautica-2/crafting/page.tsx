import Container from '@/components/layout/container';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import {
  AlertTriangleIcon,
  BoxesIcon,
  CalculatorIcon,
  FactoryIcon,
  LinkIcon,
  ScanLineIcon,
  WrenchIcon,
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
      'Subnautica 2 Crafting Guide - Recipes, Blueprints, and Material Chains',
    description:
      'A Subnautica 2 crafting guide for Early Access recipes, blueprint unlocks, material chains, Mangalloy Ingots, Metal Farms, and future calculator data.',
    locale,
    pathname: Routes.Subnautica2Crafting,
  });
}

const craftingSystems = [
  {
    title: 'Scan to unlock',
    icon: ScanLineIcon,
    body: 'Many useful items should be treated as blueprint targets first and recipes second. If you do not have the blueprint, the recipe does not matter yet.',
  },
  {
    title: 'Crafting chains',
    icon: LinkIcon,
    body: 'Processed materials can depend on several raw resources. Track the full chain before spending rare inputs.',
  },
  {
    title: 'Base production',
    icon: FactoryIcon,
    body: 'Production structures such as Metal Farms can change resource planning, but they may require a sample or rare material first.',
  },
  {
    title: 'Calculator-ready data',
    icon: CalculatorIcon,
    body: 'Every recipe should eventually become structured data: output item, station, ingredients, unlock method, and patch verification date.',
  },
];

const recipePriorities = [
  [
    'Scanner and scan tools',
    'Unlock blueprints and turn exploration into progress.',
    'Very high',
  ],
  [
    'Repair and safety tools',
    'Keep equipment and vehicles usable after risky trips.',
    'High',
  ],
  [
    'Storage and base pieces',
    'Reduce inventory friction and make routes repeatable.',
    'High',
  ],
  [
    'Power systems',
    'Support a practical base before expanding too far.',
    'High',
  ],
  [
    'Vehicle and depth upgrades',
    'Open deeper routes and longer dives.',
    'Progression',
  ],
  [
    'Processed ingots',
    'Compress raw materials into advanced crafting chains.',
    'Mid to late',
  ],
  [
    'Metal Farm',
    'Reported as important for duplicating rare metals, but requires careful setup.',
    'Late-route',
  ],
];

const cautionRules = [
  'Do not process every rare material immediately. Keep at least one sample when the game uses samples to seed production systems.',
  'Before crafting advanced ingots, check whether the ingredient is finite, rare, or needed for a Metal Farm-style setup.',
  'After every major patch, recheck recipe counts and station requirements before treating guide data as final.',
  'When playing co-op, agree before spending shared rare materials on personal upgrades.',
];

export default function CraftingGuidePage() {
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
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_22%,rgba(64,224,208,.18),transparent_34%),radial-gradient(circle_at_20%_78%,rgba(240,139,79,.11),transparent_30%),linear-gradient(180deg,rgba(3,19,20,.16),rgba(1,9,12,.96))]"
        />
        <Container className="relative px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
              <WrenchIcon className="size-4" />
              Recipe and blueprint tracker
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-[#e8fff9] md:text-6xl">
              Subnautica 2 Crafting Guide
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#a9c9c3]">
              Crafting in Subnautica 2 is not just a list of recipes. It is a
              progression map: scan blueprints, gather raw materials, protect
              rare inputs, build production systems, and only then commit to
              expensive upgrades.
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
                Prioritize recipes that increase survival time, scanning
                progress, storage, power, and route access. Treat rare materials
                as strategic inputs, not spare parts, especially when crafting
                advanced ingots or production systems.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                Crafting systems to track
              </h2>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {craftingSystems.map((system) => {
                  const Icon = system.icon;
                  return (
                    <section
                      key={system.title}
                      className="border border-cyan-200/12 bg-[#071f23] p-5"
                    >
                      <Icon className="mb-5 size-6 text-[#78ead7]" />
                      <h3 className="text-xl font-semibold text-[#effffb]">
                        {system.title}
                      </h3>
                      <p className="mt-3 leading-7 text-[#abc8c3]">
                        {system.body}
                      </p>
                    </section>
                  );
                })}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                Recipe priority table
              </h2>
              <div className="mt-5 overflow-hidden border border-cyan-200/12">
                <table className="w-full border-collapse bg-[#071f23] text-left text-sm">
                  <thead className="bg-[#0b2d33] text-[#dff8f0]">
                    <tr>
                      <th className="p-4 font-semibold">Recipe group</th>
                      <th className="p-4 font-semibold">Why it matters</th>
                      <th className="p-4 font-semibold">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recipePriorities.map(([group, why, priority]) => (
                      <tr key={group} className="border-t border-cyan-200/10">
                        <td className="p-4 align-top font-medium text-[#78ead7]">
                          {group}
                        </td>
                        <td className="p-4 leading-6 text-[#abc8c3]">{why}</td>
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
                <AlertTriangleIcon className="size-6 text-[#f08b4f]" />
                <h2 className="text-3xl font-semibold text-[#effffb]">
                  Mangalloy, Troilite, and Metal Farm warning
                </h2>
              </div>
              <p className="mt-4 leading-8 text-[#abc8c3]">
                Current reporting points to Mangalloy Ingots as an important
                advanced crafting chain involving rare materials such as
                Atacamite and Troilite. PC Gamer also warns that Troilite can be
                easy to mishandle if players process all of it before using it
                for production systems like Metal Farms. Until patches clarify
                availability, the safe rule is simple: do not spend every rare
                sample.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                Safe crafting rules
              </h2>
              <ul className="mt-5 space-y-3">
                {cautionRules.map((rule) => (
                  <li
                    key={rule}
                    className="flex gap-3 border border-cyan-200/12 bg-[#071f23] p-4 text-sm leading-6 text-[#d1e8e2]"
                  >
                    <AlertTriangleIcon className="mt-0.5 size-4 shrink-0 text-[#f08b4f]" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="border border-cyan-200/12 bg-[#071f23] p-6">
              <h2 className="text-3xl font-semibold text-[#effffb]">
                Crafting calculator plan
              </h2>
              <p className="mt-4 leading-8 text-[#abc8c3]">
                The first Abyss Guides tool should be a Subnautica 2 crafting
                calculator. It should let players choose a target item and see
                raw materials, processed materials, station requirements, and
                links to resource pages.
              </p>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {[
                  'Target item',
                  'Crafting station',
                  'Raw ingredients',
                  'Processed ingredients',
                  'Blueprint unlock method',
                  'Last verified patch',
                ].map((field) => (
                  <div
                    key={field}
                    className="border border-cyan-200/12 bg-cyan-300/5 p-3 text-sm text-[#d1e8e2]"
                  >
                    {field}
                  </div>
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
                  href={Routes.Subnautica2MetalFarm}
                >
                  Metal Farm Guide
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2Atacamite}
                >
                  Atacamite Location
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2Resources}
                >
                  Resources Guide
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2Beginner}
                >
                  Beginner Guide
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
                Advanced crafting examples were checked on May 23, 2026 against
                current PC Gamer reporting. Treat recipe counts as patch
                sensitive until verified directly in the current build.
              </p>
              <div className="mt-4 grid gap-2 text-sm">
                <a
                  className="text-[#78ead7] hover:underline"
                  href="https://www.pcgamer.com/games/survival-crafting/subnautica-2-metal-farm-scan-locations/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Metal Farm guide
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
                  href="https://www.pcgamer.com/games/survival-crafting/subnautica-2-atacamite-location/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Atacamite guide
                </a>
              </div>
            </section>
          </aside>
        </div>
      </Container>
    </main>
  );
}
