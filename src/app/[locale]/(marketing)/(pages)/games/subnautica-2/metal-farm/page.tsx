import Container from '@/components/layout/container';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { getBaseUrl, getUrlWithLocale } from '@/lib/urls';
import { Routes } from '@/routes';
import {
  AlertTriangleIcon,
  BatteryChargingIcon,
  FactoryIcon,
  RadarIcon,
  ScanLineIcon,
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
    title: 'Subnautica 2 Metal Farm Guide - Scan Location, Build Cost, and Use',
    description:
      'Unlock and use Metal Farms in Subnautica 2 with scan location notes, build cost, power planning, Troilite duplication, and safety warnings.',
    locale,
    pathname: Routes.Subnautica2MetalFarm,
  });
}

const unlockSteps = [
  {
    title: 'Reach the Alien Ruins route',
    body: 'Current reporting places Metal Farm scans in the deep green-pool area northeast of the Alien Ruins Research Base. Bring the Tadpole Depth Module.',
  },
  {
    title: 'Scan multiple Metal Farms',
    body: 'PC Gamer reports that three scans unlock the blueprint. Stay low, move deliberately, and prioritize leaving alive over finishing the scan route in one attempt.',
  },
  {
    title: 'Grab required materials while there',
    body: 'The same route can provide Troilite and Axum Bacterial Culture, both reported as relevant to Metal Farm construction.',
  },
  {
    title: 'Build near existing power',
    body: 'Metal Farms appear to need serious power support, so place the first one near linked power infrastructure instead of far from your base network.',
  },
  {
    title: 'Pick the first metal before you build',
    body: 'Troilite is usually the best first candidate because it competes with Mangalloy and Entangled Power Cell planning. Do not arrive at the machine with no input ready.',
  },
];

const buildRows = [
  [
    'Mangalloy Ingot',
    'Reported as a required build material. It connects Troilite, Atacamite, and Titanium Ingot planning.',
  ],
  [
    'Axum Bacterial Culture',
    'Reported as a required build material gathered from the same late-route region.',
  ],
  [
    'Power support',
    'Exact consumption may be unclear, so overbuild power before relying on the farm.',
  ],
  [
    'Sonic Resonator',
    'Needed to break the produced ore node after the timer completes.',
  ],
];

const workflow = [
  'Open the Metal Farm storage.',
  'Insert the metal you want duplicated, with Troilite as the highest-value early candidate.',
  'Wait for the production timer.',
  'Break the produced node with the Sonic Resonator.',
  'Repeat once power and storage are stable.',
];

const faqs = [
  {
    title: 'How do you unlock Metal Farm in Subnautica 2?',
    body: 'Current PC Gamer reporting places Metal Farm scans in the deep green-pool area northeast of the Alien Ruins Research Base and says three scans unlock the blueprint.',
  },
  {
    title: 'What does Metal Farm cost to build?',
    body: 'Current reporting ties the build chain to Mangalloy Ingot and Axum Bacterial Culture. Because Early Access recipes can change, confirm the build menu before spending rare materials.',
  },
  {
    title: 'What should you duplicate first with Metal Farm?',
    body: 'Troilite is the strongest first candidate because it is rare and competes with Mangalloy and Entangled Power Cell crafting.',
  },
  {
    title: 'Do Metal Farms need power?',
    body: 'Yes. Build the first farm near stable power support so the production loop does not starve the rest of your base.',
  },
];

export default async function MetalFarmGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const baseUrl = getBaseUrl().replace(/\/$/, '');
  const pageUrl = getUrlWithLocale(Routes.Subnautica2MetalFarm, locale).replace(
    /\/$/,
    ''
  );
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Subnautica 2 Metal Farm Guide',
      description:
        'Metal Farm scan, build, power, and production notes for Troilite, Mangalloy Ingot, Axum Bacterial Culture, and Sonic Resonator.',
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
          className="absolute inset-0 bg-[radial-gradient(circle_at_76%_20%,rgba(64,224,208,.18),transparent_34%),radial-gradient(circle_at_20%_80%,rgba(240,139,79,.13),transparent_30%),linear-gradient(180deg,rgba(3,19,20,.16),rgba(1,9,12,.96))]"
        />
        <Container className="relative px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
              <FactoryIcon className="size-4" />
              Rare-metal production system
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-[#e8fff9] md:text-6xl">
              Subnautica 2 Metal Farm Guide
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#a9c9c3]">
              Metal Farms are the kind of system that can turn rare materials
              from a bottleneck into a repeatable production loop, but only if
              you unlock and power them safely.
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
                Scan Metal Farms in the deep green-pool area northeast of the
                Alien Ruins Research Base, then build one with a Mangalloy Ingot
                and Axum Bacterial Culture. Once powered, insert a metal such as
                Troilite and break the produced node after the timer completes.
                Save the first successful loop for materials that block multiple
                recipes, not common ore.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                How to unlock the Metal Farm
              </h2>
              <div className="mt-5 grid gap-4">
                {unlockSteps.map((step) => (
                  <section
                    key={step.title}
                    className="border border-cyan-200/12 bg-[#071f23] p-5"
                  >
                    <div className="flex items-center gap-2 text-[#78ead7]">
                      <ScanLineIcon className="size-4" />
                      <h3 className="font-semibold">{step.title}</h3>
                    </div>
                    <p className="mt-3 leading-7 text-[#abc8c3]">{step.body}</p>
                  </section>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                Build requirements and support
              </h2>
              <div className="mt-5 overflow-hidden border border-cyan-200/12">
                <table className="w-full border-collapse bg-[#071f23] text-left text-sm">
                  <thead className="bg-[#0b2d33] text-[#dff8f0]">
                    <tr>
                      <th className="p-4 font-semibold">Requirement</th>
                      <th className="p-4 font-semibold">Planning note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {buildRows.map(([item, note]) => (
                      <tr key={item} className="border-t border-cyan-200/10">
                        <td className="p-4 align-top font-medium text-[#78ead7]">
                          {item}
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
                Production workflow
              </h2>
              <ol className="mt-5 grid gap-3">
                {workflow.map((step, index) => (
                  <li
                    key={step}
                    className="flex gap-3 border border-cyan-200/12 bg-[#071f23] p-4 text-sm leading-6 text-[#d1e8e2]"
                  >
                    <span className="flex size-6 shrink-0 items-center justify-center border border-cyan-200/20 text-[#78ead7]">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="border border-cyan-200/12 bg-[#082226] p-6">
              <div className="flex items-center gap-3">
                <AlertTriangleIcon className="size-6 text-[#f08b4f]" />
                <h2 className="text-3xl font-semibold text-[#effffb]">
                  Safety warning
                </h2>
              </div>
              <p className="mt-4 leading-8 text-[#abc8c3]">
                The reported scan route is deep and dangerous, with predators
                and a major threat nearby. Bring repairs, healing, and enough
                oxygen margin to abandon the scan if the route goes bad.
              </p>
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
                Build chain
              </h2>
              <div className="mt-4 grid gap-3 text-sm">
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2ConduitCrystal}
                >
                  Conduit Crystal Guide
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2SonicResonator}
                >
                  Sonic Resonator Guide
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2FeedbackResonator}
                >
                  Feedback Resonator Guide
                </LocaleLink>
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
                Checked May 28, 2026 against current PC Gamer Metal Farm
                reporting, Troilite route notes, and Entangled Power Cell
                material data. Recheck blueprint and ingredient requirements
                after patches.
              </p>
              <a
                className="mt-4 inline-flex text-sm text-[#78ead7] hover:underline"
                href="https://www.pcgamer.com/games/survival-crafting/subnautica-2-metal-farm-scan-locations/"
                rel="noreferrer"
                target="_blank"
              >
                PC Gamer Metal Farm guide
              </a>
            </section>

            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <BatteryChargingIcon className="mb-4 size-6 text-[#f08b4f]" />
              <h2 className="text-lg font-semibold text-[#effffb]">
                Base planning
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                Build the first farm near power. A rare-material machine that
                starves your base is not a production plan.
              </p>
            </section>

            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <RadarIcon className="mb-4 size-6 text-[#f08b4f]" />
              <h2 className="text-lg font-semibold text-[#effffb]">
                Best first metal
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                Troilite is the strongest first candidate because it is rare,
                progression-relevant, and used in Mangalloy crafting.
              </p>
            </section>
          </aside>
        </div>
      </Container>
    </main>
  );
}
