import Container from '@/components/layout/container';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import {
  AlertTriangleIcon,
  BoxesIcon,
  CompassIcon,
  HomeIcon,
  ScanLineIcon,
  TimerIcon,
  UsersIcon,
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
      'Subnautica 2 Beginner Guide - What to Do First in Early Access',
    description:
      'A spoiler-light Subnautica 2 beginner guide covering first steps, early priorities, scanning, resources, base planning, co-op, and common mistakes.',
    locale,
    pathname: Routes.Subnautica2Beginner,
  });
}

const firstSessionSteps = [
  {
    time: '0-10 minutes',
    title: 'Stabilize before exploring',
    body: 'Learn the nearby safe area, collect common materials, scan obvious fragments or structures, and return before oxygen becomes a panic timer.',
  },
  {
    time: '10-30 minutes',
    title: 'Build a repeatable resource loop',
    body: 'Pick one short route from a recognizable landmark, gather what you need, return safely, craft, and repeat. A boring loop that works is better than one risky trip.',
  },
  {
    time: '30-60 minutes',
    title: 'Scout a practical base spot',
    body: 'Look for a location that is easy to find, close to common resources, and safe enough for repeated returns. Do not overbuild before the area proves useful.',
  },
  {
    time: 'After the first hour',
    title: 'Push outward with a goal',
    body: 'Explore deeper only when you know why you are going there: a scan target, a resource route, a biome check, or a base expansion plan.',
  },
];

const priorityRows = [
  ['Oxygen and safety', 'Anything that lets you stay out longer or return safer should come before distant exploration.'],
  ['Scanning', 'Scan tools, fragments, base parts, and unfamiliar structures. Scanning turns curiosity into progression.'],
  ['Common resources', 'Common materials usually block more early recipes than rare finds do. Keep a small stockpile.'],
  ['Storage', 'Inventory friction slows every route. Add organized storage as soon as it becomes practical.'],
  ['Base position', 'Your first base should support your route, not force you into a bad commute.'],
];

const mistakes = [
  'Going deep because the view is interesting, not because you have oxygen, tools, and a return plan.',
  'Building a large first base in a spot you have only visited once.',
  'Ignoring common materials while chasing rare resources.',
  'Not scanning because an object does not look important at first glance.',
  'Playing co-op without storage rules, route names, or upgrade priorities.',
];

export default function BeginnerGuidePage() {
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
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(64,224,208,.18),transparent_34%),linear-gradient(180deg,rgba(3,19,20,.18),rgba(1,9,12,.96))]"
        />
        <Container className="relative px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
              <CompassIcon className="size-4" />
              Spoiler-light Early Access route
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-[#e8fff9] md:text-6xl">
              Subnautica 2 Beginner Guide: What to Do First
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#a9c9c3]">
              This guide is built for your first Subnautica 2 session: how to
              stay alive, what to prioritize, when to build, and how to explore
              without turning the opening hours into a messy inventory spiral.
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
                In your first Subnautica 2 session, do not rush the deepest
                route you can find. First, learn your safe area, scan anything
                useful, collect common materials, create a repeatable resource
                loop, and build only after a location proves it helps you return
                safely and craft faster.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                First-session route
              </h2>
              <div className="mt-5 grid gap-4">
                {firstSessionSteps.map((step) => (
                  <div
                    key={step.time}
                    className="border border-cyan-200/12 bg-[#071f23] p-5"
                  >
                    <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#78ead7]">
                      <TimerIcon className="size-4" />
                      {step.time}
                    </div>
                    <h3 className="mt-3 text-xl font-semibold text-[#effffb]">
                      {step.title}
                    </h3>
                    <p className="mt-3 leading-7 text-[#abc8c3]">
                      {step.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                Early priorities table
              </h2>
              <div className="mt-5 overflow-hidden border border-cyan-200/12">
                <table className="w-full border-collapse bg-[#071f23] text-left text-sm">
                  <thead className="bg-[#0b2d33] text-[#dff8f0]">
                    <tr>
                      <th className="p-4 font-semibold">Priority</th>
                      <th className="p-4 font-semibold">Why it matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priorityRows.map(([priority, reason]) => (
                      <tr
                        key={priority}
                        className="border-t border-cyan-200/10"
                      >
                        <td className="p-4 align-top font-medium text-[#78ead7]">
                          {priority}
                        </td>
                        <td className="p-4 leading-6 text-[#abc8c3]">
                          {reason}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="grid gap-5 md:grid-cols-2">
              <GuideCard
                icon={ScanLineIcon}
                title="Scan before you assume"
                body="If an object looks like a fragment, structure, tool, or station, scan it. Early progression is often gated by knowledge rather than distance."
              />
              <GuideCard
                icon={BoxesIcon}
                title="Stockpile basics"
                body="A small stockpile of common materials prevents constant backtracking. Keep early storage organized by material type."
              />
              <GuideCard
                icon={HomeIcon}
                title="Build small first"
                body="Your first base should be a useful outpost, not a final palace. Expand after the route keeps paying off."
              />
              <GuideCard
                icon={UsersIcon}
                title="Co-op needs rules"
                body="In multiplayer, agree on storage, upgrades, route names, and who is gathering what before everyone scatters."
              />
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                Common beginner mistakes
              </h2>
              <ul className="mt-5 space-y-3">
                {mistakes.map((mistake) => (
                  <li
                    key={mistake}
                    className="flex gap-3 border border-cyan-200/12 bg-[#071f23] p-4 text-sm leading-6 text-[#d1e8e2]"
                  >
                    <AlertTriangleIcon className="mt-0.5 size-4 shrink-0 text-[#f08b4f]" />
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="border border-cyan-200/12 bg-[#082226] p-6">
              <h2 className="text-3xl font-semibold text-[#effffb]">
                Early Access note
              </h2>
              <p className="mt-4 leading-8 text-[#abc8c3]">
                Subnautica 2 is an Early Access game, so exact recipes,
                locations, balance, bugs, performance, and progression details
                may change. This page focuses on stable survival principles and
                should be refreshed after major updates.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">FAQ</h2>
              <div className="mt-5 space-y-4">
                <Faq
                  question="Should I play solo or co-op first?"
                  answer="Solo is better if you want atmosphere and discovery. Co-op is better if you want faster gathering, shared scouting, and a less lonely first dive."
                />
                <Faq
                  question="When should I build my first base?"
                  answer="Build after you have found a route you expect to repeat. If a location is safe, easy to find, and near common resources, it is a strong early candidate."
                />
                <Faq
                  question="Should I use a map immediately?"
                  answer="Use map help when you are stuck, but avoid overusing it if discovery is the part of Subnautica you enjoy most. Route notes are often enough early on."
                />
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
                  href={Routes.Subnautica2Map}
                >
                  Map and Biomes
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2Coop}
                >
                  Co-op Guide
                </LocaleLink>
              </div>
            </section>

            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <h2 className="text-lg font-semibold text-[#effffb]">
                Source note
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                Release status, Early Access framing, single-player/co-op
                support, and update expectations were checked against the
                official Steam listing on May 23, 2026.
              </p>
              <a
                className="mt-4 inline-flex text-sm text-[#78ead7] hover:underline"
                href="https://store.steampowered.com/app/1962700/Subnautica_2/"
                rel="noreferrer"
                target="_blank"
              >
                Official Steam page
              </a>
            </section>
          </aside>
        </div>
      </Container>
    </main>
  );
}

function GuideCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof CompassIcon;
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

function Faq({ question, answer }: { question: string; answer: string }) {
  return (
    <section className="border border-cyan-200/12 bg-[#071f23] p-5">
      <h3 className="text-lg font-semibold text-[#effffb]">{question}</h3>
      <p className="mt-3 leading-7 text-[#abc8c3]">{answer}</p>
    </section>
  );
}
