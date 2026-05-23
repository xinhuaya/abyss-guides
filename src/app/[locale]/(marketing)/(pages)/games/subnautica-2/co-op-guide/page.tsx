import Container from '@/components/layout/container';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import {
  AlertTriangleIcon,
  BoxesIcon,
  CompassIcon,
  Gamepad2Icon,
  HomeIcon,
  RadioIcon,
  UsersIcon,
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
      'Subnautica 2 Co-op Guide - Multiplayer, Crossplay, Roles, and Team Survival',
    description:
      'A Subnautica 2 co-op guide covering online multiplayer, cross-platform play, team roles, shared bases, storage rules, route planning, and common co-op problems.',
    locale,
    pathname: Routes.Subnautica2Coop,
  });
}

const setupChecks = [
  ['Player count', 'Official Xbox listing describes online co-op for 2-4 players. Plan routes and storage around small teams.'],
  ['Platforms', 'Steam lists online co-op and cross-platform multiplayer. Xbox lists online co-op on console with subscription requirements.'],
  ['Voice setup', 'Use Discord, Xbox party, or platform voice until in-game voice behavior is clear for your group.'],
  ['Host rules', 'Agree who hosts the world and how often the group plays together before the base becomes one person’s save problem.'],
];

const roles = [
  ['Scout', 'Scans fragments, checks new routes, marks danger, and reports whether an area is worth revisiting.'],
  ['Gatherer', 'Runs repeatable resource loops and keeps common materials stocked.'],
  ['Builder', 'Handles base layout, storage, power, and expansion so the team has a reliable return point.'],
  ['Crafter', 'Tracks recipes, rare materials, upgrade priorities, and what should not be spent yet.'],
];

const problems = [
  'Players scatter too early and nobody has enough materials to craft the next important item.',
  'Shared storage becomes a pile of mixed resources that nobody can search quickly.',
  'One player spends rare materials before the team agrees on upgrade priorities.',
  'Route directions are vague, so teammates cannot find the same cave, slope, or base entrance.',
  'Cross-platform players assume invite behavior is the same on every storefront or console.',
];

export default function CoopGuidePage() {
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
          className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(64,224,208,.18),transparent_34%),radial-gradient(circle_at_18%_80%,rgba(240,139,79,.10),transparent_30%),linear-gradient(180deg,rgba(3,19,20,.16),rgba(1,9,12,.96))]"
        />
        <Container className="relative px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
              <UsersIcon className="size-4" />
              Online co-op survival guide
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-[#e8fff9] md:text-6xl">
              Subnautica 2 Co-op Guide
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#a9c9c3]">
              Subnautica 2 can be played solo or in online co-op. Co-op makes
              gathering and exploration faster, but only if the team agrees on
              roles, storage, base rules, and route names before everyone swims
              in different directions.
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
                Treat co-op like a small expedition. Choose one shared base
                location, split jobs loosely, organize storage early, and name
                routes by landmarks. The ocean gets easier when everyone knows
                what the team is trying to craft next.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                Before you start a co-op world
              </h2>
              <div className="mt-5 grid gap-4">
                {setupChecks.map(([title, body]) => (
                  <section
                    key={title}
                    className="border border-cyan-200/12 bg-[#071f23] p-5"
                  >
                    <div className="flex items-center gap-2 text-[#78ead7]">
                      <Gamepad2Icon className="size-4" />
                      <h3 className="font-semibold">{title}</h3>
                    </div>
                    <p className="mt-3 leading-7 text-[#abc8c3]">{body}</p>
                  </section>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                Suggested team roles
              </h2>
              <div className="mt-5 overflow-hidden border border-cyan-200/12">
                <table className="w-full border-collapse bg-[#071f23] text-left text-sm">
                  <thead className="bg-[#0b2d33] text-[#dff8f0]">
                    <tr>
                      <th className="p-4 font-semibold">Role</th>
                      <th className="p-4 font-semibold">What they handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {roles.map(([role, job]) => (
                      <tr key={role} className="border-t border-cyan-200/10">
                        <td className="p-4 align-top font-medium text-[#78ead7]">
                          {role}
                        </td>
                        <td className="p-4 leading-6 text-[#abc8c3]">{job}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="grid gap-5 md:grid-cols-2">
              <CoopCard
                icon={HomeIcon}
                title="Pick one shared base"
                body="The first shared base should be easy to find, close to common resources, and useful for routes the whole group repeats."
              />
              <CoopCard
                icon={BoxesIcon}
                title="Set storage rules early"
                body="Use separate storage for common materials, rare materials, crafted components, and personal gear. Messy storage wastes more time with every session."
              />
              <CoopCard
                icon={WrenchIcon}
                title="Agree on upgrades"
                body="Before spending rare resources, decide whether the next upgrade should support scanning, base power, vehicles, or deeper route access."
              />
              <CoopCard
                icon={CompassIcon}
                title="Name your routes"
                body="Short route names help everyone find the same area again. Use landmarks, color, depth, or base direction in the name."
              />
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                Common co-op problems
              </h2>
              <ul className="mt-5 space-y-3">
                {problems.map((problem) => (
                  <li
                    key={problem}
                    className="flex gap-3 border border-cyan-200/12 bg-[#071f23] p-4 text-sm leading-6 text-[#d1e8e2]"
                  >
                    <AlertTriangleIcon className="mt-0.5 size-4 shrink-0 text-[#f08b4f]" />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="border border-cyan-200/12 bg-[#082226] p-6">
              <div className="flex items-center gap-3">
                <RadioIcon className="size-6 text-[#f08b4f]" />
                <h2 className="text-3xl font-semibold text-[#effffb]">
                  Crossplay and invite notes
                </h2>
              </div>
              <p className="mt-4 leading-8 text-[#abc8c3]">
                Steam lists Cross-Platform Multiplayer, and Xbox lists online
                co-op for 2-4 players. Because Early Access multiplayer can
                change quickly, troubleshoot invites by checking platform
                friends, in-game friends, current patch status, and whether the
                same account/storefront features are enabled for every player.
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
                  href={Routes.Subnautica2Beginner}
                >
                  Beginner Guide
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2Resources}
                >
                  Resources Guide
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2Map}
                >
                  Map and Biomes
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2Crafting}
                >
                  Crafting Recipes
                </LocaleLink>
              </div>
            </section>

            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <h2 className="text-lg font-semibold text-[#effffb]">
                Source note
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                Co-op support was checked on May 23, 2026 against the official
                Steam and Xbox listings. Early Access invite behavior and
                cross-platform issues should be reviewed after major patches.
              </p>
              <div className="mt-4 grid gap-2 text-sm">
                <a
                  className="text-[#78ead7] hover:underline"
                  href="https://store.steampowered.com/app/1962700/Subnautica_2/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Steam listing
                </a>
                <a
                  className="text-[#78ead7] hover:underline"
                  href="https://www.xbox.com/en-US/games/store/subnautica-2/9pjpcb188svg"
                  rel="noreferrer"
                  target="_blank"
                >
                  Xbox listing
                </a>
              </div>
            </section>
          </aside>
        </div>
      </Container>
    </main>
  );
}

function CoopCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof UsersIcon;
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
