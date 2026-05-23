import { LinkedGuidePage } from '@/components/abyss/linked-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { BoxesIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'How to Make Titanium Ingots in Subnautica 2 - Processor Guide',
    description:
      'Make Titanium Ingots in Subnautica 2 with Processor notes, Titanium farming priorities, Mangalloy links, and crafting-chain warnings.',
    locale,
    pathname: Routes.Subnautica2TitaniumIngot,
  });
}

export default function TitaniumIngotGuidePage() {
  return (
    <LinkedGuidePage
      caution={{
        title: 'Keep raw Titanium for base pieces',
        body: 'Processed ingots are useful, but raw Titanium still feeds building, storage, and utility recipes. Process only what the next recipe actually needs.',
      }}
      description="Titanium Ingots are where basic construction material becomes a crafting-chain input. They matter early for planning and later for advanced materials like Mangalloy."
      eyebrow="Processor material chain"
      icon={BoxesIcon}
      quickAnswer="Make Titanium Ingots by processing Titanium once the Processor is available. PC Gamer ties Titanium Ingots into later crafting chains, including Mangalloy Ingot production, so stockpile raw Titanium before converting it."
      related={[
        { href: Routes.Subnautica2Mangalloy, label: 'Mangalloy Ingot Guide' },
        { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
        { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
      ]}
      sections={[
        {
          title: 'Gather basic Titanium first',
          body: 'Titanium is the foundation material for early building and repeat crafting. Before processing, make sure your base, storage, and tool needs are not starved.',
        },
        {
          title: 'Use the Processor for ingots',
          body: 'Once the Processor is part of your setup, treat Titanium Ingots as a planned conversion rather than a reflex craft.',
        },
        {
          title: 'Reserve ingots for advanced chains',
          body: 'PC Gamer reports Titanium Ingots as part of Mangalloy Ingot crafting, which makes them part of rare-material planning later on.',
        },
        {
          title: 'Separate raw and processed storage',
          body: 'Use one locker for raw Titanium and another for ingots. That makes crafting-chain math much easier once recipes start nesting.',
        },
      ]}
      sources={[
        {
          href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-titanium-ingots/',
          label: 'PC Gamer Titanium Ingot guide',
        },
        {
          href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-metal-farm-scan-locations/',
          label: 'PC Gamer Metal Farm guide',
        },
      ]}
      table={{
        headers: ['Crafting role', 'Planning note'],
        rows: [
          [
            'Processed material',
            'Used when recipes need compressed Titanium rather than loose pieces.',
          ],
          [
            'Mangalloy input',
            'Reported as one part of the Mangalloy Ingot chain.',
          ],
          ['Base pacing', 'Do not process so much that base expansion stalls.'],
          [
            'Calculator data',
            'Track raw input, output amount, station, and patch date.',
          ],
        ],
        title: 'Titanium Ingot planning table',
      }}
      title="How to Make Titanium Ingots in Subnautica 2"
    />
  );
}
