import Container from '@/components/layout/container';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import {
  AlertTriangleIcon,
  CompassIcon,
  HomeIcon,
  MapIcon,
  RadarIcon,
  RouteIcon,
  WavesIcon,
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
    title: 'Subnautica 2 Map and Biomes Guide - Routes, Resources, and Base Planning',
    description:
      'A Subnautica 2 map and biomes guide for route planning, safe exploration, resource zones, danger areas, base locations, and future interactive map pages.',
    locale,
    pathname: Routes.Subnautica2Map,
  });
}

const routeRules = [
  ['Start from a landmark', 'Use a visible structure, base, cave mouth, or route marker as the start of every repeatable trip.'],
  ['Set one objective', 'A route should answer one question: resource farming, blueprint scanning, biome scouting, or base planning.'],
  ['Turn back early', 'Return while the route still feels controlled. Panic returns are harder to repeat and harder to document.'],
  ['Record the risk', 'A useful map note includes danger, visibility, oxygen pressure, and whether the route works in co-op.'],
];

const biomeTemplate = [
  ['Safety', 'Low, medium, or high danger based on hostile creatures, visibility, and oxygen pressure.'],
  ['Common resources', 'Materials players can reliably gather on repeat trips.'],
  ['Rare resources', 'Materials worth a dedicated route or late-game note.'],
  ['Base potential', 'Whether the biome is safe, spacious, navigable, and near useful routes.'],
  ['Progression value', 'Fragments, blueprints, upgrades, or routes that make the biome worth revisiting.'],
];

const baseSignals = [
  'Close to common resources that you use repeatedly.',
  'Easy to find from more than one direction.',
  'Safe enough for routine returns, not just one lucky trip.',
  'Near a deeper route without sitting directly inside constant danger.',
  'Spacious enough for storage, power, and later expansion.',
  'Simple to describe to co-op teammates.',
];

export default function MapGuidePage() {
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
          className="absolute inset-0 bg-[radial-gradient(circle_at_74%_24%,rgba(64,224,208,.18),transparent_34%),radial-gradient(circle_at_18%_78%,rgba(240,139,79,.11),transparent_30%),linear-gradient(180deg,rgba(3,19,20,.16),rgba(1,9,12,.96))]"
        />
        <Container className="relative px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
              <MapIcon className="size-4" />
              Route-first map guide
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-[#e8fff9] md:text-6xl">
              Subnautica 2 Map and Biomes Guide
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#a9c9c3]">
              The best early map is not a giant image full of spoilers. It is a
              set of repeatable routes: where to start, what to gather, what to
              avoid, and when to return.
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
                Explore Subnautica 2 by loops, not random lines. Pick a
                landmark, choose one objective, travel until the route becomes
                risky, then return and repeat. This turns the map into useful
                knowledge instead of a blur of beautiful water and missed turns.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                How to build a useful route
              </h2>
              <div className="mt-5 grid gap-4">
                {routeRules.map(([title, body]) => (
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
                Biome page template
              </h2>
              <div className="mt-5 overflow-hidden border border-cyan-200/12">
                <table className="w-full border-collapse bg-[#071f23] text-left text-sm">
                  <thead className="bg-[#0b2d33] text-[#dff8f0]">
                    <tr>
                      <th className="p-4 font-semibold">Field</th>
                      <th className="p-4 font-semibold">What to record</th>
                    </tr>
                  </thead>
                  <tbody>
                    {biomeTemplate.map(([field, note]) => (
                      <tr key={field} className="border-t border-cyan-200/10">
                        <td className="p-4 align-top font-medium text-[#78ead7]">
                          {field}
                        </td>
                        <td className="p-4 leading-6 text-[#abc8c3]">{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="grid gap-5 md:grid-cols-2">
              <MapCard
                icon={RadarIcon}
                title="Use danger markers"
                body="Do not just mark resources. Mark where visibility drops, creatures become aggressive, oxygen gets tight, or routes become hard to describe."
              />
              <MapCard
                icon={WavesIcon}
                title="Separate safe and deep routes"
                body="A safe material loop and a deep progression route are different things. Keep them separate in notes and future map layers."
              />
              <MapCard
                icon={HomeIcon}
                title="Base planning is map planning"
                body="Your first base should connect routes: common resources, storage, crafting, and a deeper route you expect to revisit."
              />
              <MapCard
                icon={CompassIcon}
                title="Co-op routes need names"
                body="In multiplayer, route names matter. A memorable route name is faster than trying to describe a reef, slope, cave, or wreck while swimming."
              />
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                Signs of a good base location
              </h2>
              <ul className="mt-5 space-y-3">
                {baseSignals.map((signal) => (
                  <li
                    key={signal}
                    className="flex gap-3 border border-cyan-200/12 bg-[#071f23] p-4 text-sm leading-6 text-[#d1e8e2]"
                  >
                    <HomeIcon className="mt-0.5 size-4 shrink-0 text-[#78ead7]" />
                    <span>{signal}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="border border-cyan-200/12 bg-[#082226] p-6">
              <div className="flex items-center gap-3">
                <AlertTriangleIcon className="size-6 text-[#f08b4f]" />
                <h2 className="text-3xl font-semibold text-[#effffb]">
                  Early Access map warning
                </h2>
              </div>
              <p className="mt-4 leading-8 text-[#abc8c3]">
                Exact routes, biome boundaries, resource clusters, and danger
                notes can change as Early Access updates land. Treat this page
                as the framework for map documentation, then verify detailed
                route pages after each major patch.
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
                  href={Routes.Subnautica2Resources}
                >
                  Resources Guide
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2Crafting}
                >
                  Crafting Recipes
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2Coop}
                >
                  Co-op Guide
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
                Future tool
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                This page should eventually feed an interactive map or base
                location checklist with filters for safety, resources,
                visibility, and route access.
              </p>
            </section>
          </aside>
        </div>
      </Container>
    </main>
  );
}

function MapCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof MapIcon;
  title: string;
  body: string;
}) {
  return (
    <section className="border border-cyan-200/12 bg-[#071f23] p-5">
      <Icon className="mb-5 size-6 text-[#78ead7]" />
      <h2 className="text-xl font-semibold text-[#effffb]">{title}</h2>
      <p className="mt-3 leading-7 text-[#abc8c3]">{body}</p>
    </section>
  );
}
