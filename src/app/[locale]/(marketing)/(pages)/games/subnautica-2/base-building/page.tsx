import { LinkedGuidePage } from '@/components/abyss/linked-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { HammerIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Subnautica 2 Base Building Guide - First Base and Expansion',
    description:
      'Build your first Subnautica 2 base with starter priorities, power, storage, route placement, co-op habits, and expansion rules.',
    locale,
    pathname: Routes.Subnautica2BaseBuilding,
  });
}

export default function BaseBuildingGuidePage() {
  return (
    <LinkedGuidePage
      caution={{
        title: 'A pretty base is not always a useful base',
        body: 'Your first base should reduce route friction: oxygen, storage, crafting, power, and a clear path home. Make it beautiful after it works.',
      }}
      description="Subnautica 2 changes the feel of base building with more flexible construction, but the first base still needs to solve the same survival problem: repeatable routes."
      eyebrow="First base planning"
      faqs={[
        {
          question: 'Where should you build your first Subnautica 2 base?',
          answer:
            'Build near the starter route, useful resources, safe visibility, and enough open space for power and storage expansion.',
        },
        {
          question: 'What should a first base include?',
          answer:
            'Prioritize storage, crafting access, power, route landmarks, and room to expand before decorative building.',
        },
      ]}
      icon={HammerIcon}
      pathname={Routes.Subnautica2BaseBuilding}
      quickAnswer="For your first base, choose a safe, easy-to-find location near early resources and route landmarks. Build storage and power first, then expand toward vehicle support and deeper-route staging."
      related={[
        {
          href: Routes.Subnautica2BestBaseLocations,
          label: 'Best Base Locations',
        },
        { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
        { href: Routes.Subnautica2Coop, label: 'Co-op Guide' },
      ]}
      sections={[
        {
          title: 'Build close to useful routes',
          body: 'A first base should shorten the loops you repeat: Copper, Silver, early food and water, crafting stations, and scan routes.',
        },
        {
          title: 'Power comes before expansion',
          body: 'Do not add rooms, production, and storage faster than your power plan can support them. A dark base is a storage box with ambition.',
        },
        {
          title: 'Use storage labels early',
          body: 'Separate raw materials, processed materials, rare metals, organics, and vehicle parts. This saves real time once crafting chains stack.',
        },
        {
          title: 'Plan for co-op traffic',
          body: 'If you play with others, keep common storage and crafting central. Shared bases fail when every player hides rare parts in personal corners.',
        },
      ]}
      sources={[
        {
          href: 'https://www.pcgamesn.com/subnautica-2/base-building',
          label: 'PCGamesN base building guide',
        },
        {
          href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-developer-video-reveals-a-brand-new-base-building-system-with-some-pretty-fabulous-windows/',
          label: 'PC Gamer base building dev video coverage',
        },
      ]}
      table={{
        headers: ['Base priority', 'Why it matters'],
        rows: [
          ['Storage', 'Reduces inventory friction after every resource loop.'],
          ['Power', 'Keeps crafting, production, and later systems reliable.'],
          [
            'Crafting access',
            'Turns gathered materials into route progress quickly.',
          ],
          [
            'Landmark visibility',
            'Makes return routes safer and co-op callouts easier.',
          ],
          [
            'Expansion room',
            'Prevents rebuilding once vehicles and production arrive.',
          ],
        ],
        title: 'First base priority table',
      }}
      title="Subnautica 2 Base Building Guide"
    />
  );
}
