import Container from '@/components/layout/container';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import {
  BugIcon,
  CalendarDaysIcon,
  ClipboardListIcon,
  MessagesSquareIcon,
  RadioIcon,
  RefreshCcwIcon,
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
    title: 'Subnautica 2 Roadmap and Updates - Early Access Patch Tracker',
    description:
      'Track the Subnautica 2 Early Access roadmap, hotfixes, co-op updates, quality-of-life improvements, future biomes, creatures, tools, vehicles, and story content.',
    locale,
    pathname: Routes.Subnautica2Updates,
  });
}

const roadmapItems = [
  {
    title: 'Hotfixes and tuning',
    icon: BugIcon,
    body: 'Unknown Worlds says bug fixes, balance tuning, optimizations, and related updates will continue throughout Early Access.',
  },
  {
    title: 'First improvement update',
    icon: WrenchIcon,
    body: 'The first update is framed around quality-of-life fixes and smaller adjustments that improve the opening Early Access experience.',
  },
  {
    title: 'Co-op-focused update',
    icon: MessagesSquareIcon,
    body: 'The second update is described as co-op focused, with requested multiplayer improvements and additions planned.',
  },
  {
    title: 'Larger expansions',
    icon: CalendarDaysIcon,
    body: 'Future larger drops are expected to expand the world with more biomes, creatures, resources, tools, vehicles, and the next chapter of the story.',
  },
];

const updateWorkflow = [
  ['Roadmap summary', 'Update this page first with the date, patch type, and player-facing impact.'],
  ['Affected guides', 'Refresh pages touched by the patch: resources, crafting, map, co-op, settings, or beginner route.'],
  ['Patch-sensitive notes', 'Mark exact recipe counts, locations, and platform behavior as verified only for the current build.'],
  ['Internal links', 'Link each update to the guide pages that changed so returning players can find what matters.'],
];

const trackerRows = [
  ['May 14, 2026', 'Early Access launch', 'Subnautica 2 becomes available in Early Access.'],
  ['May 15, 2026', 'Early Access roadmap', 'Unknown Worlds outlines regular updates, hotfixes, improvement updates, and larger expansions.'],
  ['May 19, 2026', 'Hotfix 1', 'First hotfix released to address reported issues.'],
  ['May 22, 2026', 'Hotfix 2', 'Second Early Access hotfix released.'],
];

export default function RoadmapGuidePage() {
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
          className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(64,224,208,.18),transparent_34%),radial-gradient(circle_at_18%_82%,rgba(240,139,79,.10),transparent_30%),linear-gradient(180deg,rgba(3,19,20,.16),rgba(1,9,12,.96))]"
        />
        <Container className="relative px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
              <RadioIcon className="size-4" />
              Early Access update tracker
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-[#e8fff9] md:text-6xl">
              Subnautica 2 Roadmap and Updates
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#a9c9c3]">
              Subnautica 2 is being built through Early Access, so guide pages
              need to follow updates closely. This tracker explains what types
              of changes are planned and which Abyss Guides pages should be
              refreshed after each patch.
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
                Unknown Worlds says Subnautica 2 updates will vary: hotfixes,
                focused improvements, and larger expansions. Expect bug fixes,
                balance tuning, optimization work, quality-of-life updates,
                co-op improvements, and future expansions with more world,
                biomes, creatures, resources, tools, vehicles, and story.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                Roadmap categories
              </h2>
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {roadmapItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <section
                      key={item.title}
                      className="border border-cyan-200/12 bg-[#071f23] p-5"
                    >
                      <Icon className="mb-5 size-6 text-[#78ead7]" />
                      <h3 className="text-xl font-semibold text-[#effffb]">
                        {item.title}
                      </h3>
                      <p className="mt-3 leading-7 text-[#abc8c3]">
                        {item.body}
                      </p>
                    </section>
                  );
                })}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                Early update tracker
              </h2>
              <div className="mt-5 overflow-hidden border border-cyan-200/12">
                <table className="w-full border-collapse bg-[#071f23] text-left text-sm">
                  <thead className="bg-[#0b2d33] text-[#dff8f0]">
                    <tr>
                      <th className="p-4 font-semibold">Date</th>
                      <th className="p-4 font-semibold">Update</th>
                      <th className="p-4 font-semibold">Player impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trackerRows.map(([date, update, impact]) => (
                      <tr key={date} className="border-t border-cyan-200/10">
                        <td className="p-4 align-top font-medium text-[#78ead7]">
                          {date}
                        </td>
                        <td className="p-4 align-top text-[#d1e8e2]">
                          {update}
                        </td>
                        <td className="p-4 leading-6 text-[#abc8c3]">
                          {impact}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                How Abyss Guides should update after patches
              </h2>
              <div className="mt-5 grid gap-4">
                {updateWorkflow.map(([title, body]) => (
                  <section
                    key={title}
                    className="border border-cyan-200/12 bg-[#071f23] p-5"
                  >
                    <div className="flex items-center gap-2 text-[#78ead7]">
                      <RefreshCcwIcon className="size-4" />
                      <h3 className="font-semibold">{title}</h3>
                    </div>
                    <p className="mt-3 leading-7 text-[#abc8c3]">{body}</p>
                  </section>
                ))}
              </div>
            </section>

            <section className="border border-cyan-200/12 bg-[#082226] p-6">
              <div className="flex items-center gap-3">
                <ClipboardListIcon className="size-6 text-[#f08b4f]" />
                <h2 className="text-3xl font-semibold text-[#effffb]">
                  Roadmap is subject to change
                </h2>
              </div>
              <p className="mt-4 leading-8 text-[#abc8c3]">
                Unknown Worlds explicitly says the roadmap may change or be
                adjusted, and that community input is important during Early
                Access. Any guide page that mentions future features should
                avoid promising exact dates unless an official source gives one.
              </p>
            </section>
          </article>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <h2 className="text-lg font-semibold text-[#effffb]">
                Update these pages first
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
                  href={Routes.Subnautica2Coop}
                >
                  Co-op Guide
                </LocaleLink>
                <LocaleLink
                  className="text-[#78ead7] hover:underline"
                  href={Routes.Subnautica2Map}
                >
                  Map and Biomes
                </LocaleLink>
              </div>
            </section>

            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <h2 className="text-lg font-semibold text-[#effffb]">
                Source note
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                Roadmap details were checked on May 23, 2026 against the
                Unknown Worlds Early Access Roadmap and official news posts.
              </p>
              <div className="mt-4 grid gap-2 text-sm">
                <a
                  className="text-[#78ead7] hover:underline"
                  href="https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap"
                  rel="noreferrer"
                  target="_blank"
                >
                  Official roadmap
                </a>
                <a
                  className="text-[#78ead7] hover:underline"
                  href="https://unknownworlds.com/en/news/subnautica-2-early-access-hotfix-2"
                  rel="noreferrer"
                  target="_blank"
                >
                  Hotfix 2
                </a>
                <a
                  className="text-[#78ead7] hover:underline"
                  href="https://unknownworlds.com/en/news/subnautica-2-early-access-hotfix-1"
                  rel="noreferrer"
                  target="_blank"
                >
                  Hotfix 1
                </a>
              </div>
            </section>
          </aside>
        </div>
      </Container>
    </main>
  );
}
