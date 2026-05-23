import { LinkedGuidePage } from '@/components/abyss/linked-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { MapPinnedIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Best Base Locations in Subnautica 2 - Early and Mid Route Spots',
    description:
      'Choose the best Subnautica 2 base locations with early starter-zone placement, route staging, power planning, and deep-route caveats.',
    locale,
    pathname: Routes.Subnautica2BestBaseLocations,
  });
}

export default function BestBaseLocationsPage() {
  return (
    <LinkedGuidePage
      caution={{
        title: 'Do not overcommit to the first pretty view',
        body: 'A base location is good when it saves time repeatedly. Test the route for oxygen, visibility, resources, power, and vehicle access before building too much.',
      }}
      description="The best base location is not just the safest spot or the nicest view. It is the place that supports the routes you repeat most often."
      eyebrow="Route-first base placement"
      faqs={[
        {
          question: 'What makes a good early base location in Subnautica 2?',
          answer:
            'A good early base is safe, visible, near starter resources, and close enough to repeated routes that it saves time every dive.',
        },
        {
          question: 'Should you build far from the starter area early?',
          answer:
            'Not at first. Build a practical starter base, then add route bases once vehicles and power make distance easier.',
        },
      ]}
      icon={MapPinnedIcon}
      pathname={Routes.Subnautica2BestBaseLocations}
      quickAnswer="Start with a base near the starter-zone resource loop, then add secondary route bases near the Old Habitat, Alien Ruins, or deeper resource chains once you have the Tadpole and enough power support."
      related={[
        { href: Routes.Subnautica2BaseBuilding, label: 'Base Building Guide' },
        { href: Routes.Subnautica2Map, label: 'Map and Biomes' },
        { href: Routes.Subnautica2Tadpole, label: 'Tadpole Vehicle' },
      ]}
      sections={[
        {
          title: 'Early base: starter loop',
          body: 'PC Gamer warns that the early access map has limits west of the starter area, so your first useful base should support the routes that actually exist now: starter resources, early caves, and first scan objectives.',
        },
        {
          title: 'Mid base: Old Habitat route',
          body: 'Once Strong Acid, Processor scanning, and black-box objectives matter, a staging point near the Old Habitat route can reduce long return trips.',
        },
        {
          title: 'Deep route: Alien Ruins staging',
          body: 'Later, Atacamite, Troilite, Metal Farms, and alien systems make the Alien Ruins region a natural staging candidate, but only after vehicle and power support are stable.',
        },
        {
          title: 'Co-op base rule',
          body: 'In co-op, choose locations that are easy to describe by landmark and compass direction. A perfect hidden base is bad if teammates cannot find it.',
        },
      ]}
      sources={[
        {
          href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-best-base-locations/',
          label: 'PC Gamer best base locations',
        },
        {
          href: 'https://bossdown.com/guides/subnautica-2-best-base-locations/',
          label: 'BossDown base location guide',
        },
      ]}
      table={{
        headers: ['Location type', 'Best use'],
        rows: [
          [
            'Starter-zone base',
            'Early resources, storage, basic crafting, and safe returns.',
          ],
          [
            'Old Habitat staging',
            'Processor, Strong Acid, and black-box route support.',
          ],
          [
            'Alien Ruins staging',
            'Atacamite, Troilite, Metal Farms, and deeper progression.',
          ],
          [
            'Co-op hub',
            'Shared storage, route callouts, and role-based expeditions.',
          ],
        ],
        title: 'Base location roles',
      }}
      title="Best Base Locations in Subnautica 2"
    />
  );
}
