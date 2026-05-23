import { LinkedGuidePage } from '@/components/abyss/linked-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { ScanLineIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Subnautica 2 Scanner and Bioscanner Guide - Blueprint Priority',
    description:
      'Use the Scanner and Bioscanner in Subnautica 2 to unlock blueprints, Biomods, and upgrade routes with safe scan priorities.',
    locale,
    pathname: Routes.Subnautica2Scanner,
  });
}

export default function ScannerGuidePage() {
  return (
    <LinkedGuidePage
      caution={{
        title: 'Scanning is not optional',
        body: 'In Subnautica 2, exploration without scanning is just sightseeing. Bring the Scanner on every route where fragments, alien structures, or new organisms may appear.',
      }}
      description="The Scanner is one of the highest-value early tools because it turns fragments, structures, and later lifeforms into recipes, upgrades, and Biomods."
      eyebrow="Blueprint and Biomod route"
      faqs={[
        {
          question: 'What should you scan first in Subnautica 2?',
          answer:
            'Prioritize fragments and stations that unlock tools, base systems, vehicle crafting, and route-extending upgrades.',
        },
        {
          question: 'What does the Bioscanner do?',
          answer:
            'Current reporting says the Bioscanner upgrade lets you scan marine life to unlock additional Biomods.',
        },
      ]}
      icon={ScanLineIcon}
      pathname={Routes.Subnautica2Scanner}
      quickAnswer="Craft and carry the Scanner as early as possible, then prioritize fragments, stations, and alien-route objects. Later, get the Bioscanner upgrade so scanning marine life can unlock more Biomods."
      related={[
        { href: Routes.Subnautica2Copper, label: 'Copper Location' },
        { href: Routes.Subnautica2Tadpole, label: 'Tadpole Vehicle' },
        { href: Routes.Subnautica2Beginner, label: 'Beginner Guide' },
      ]}
      sections={[
        {
          title: 'Make the Scanner an early priority',
          body: 'The Scanner turns routes into permanent progress. Copper and early electronics matter because they lead into battery and tool crafting.',
        },
        {
          title: 'Scan fragments before looting everything',
          body: 'When you reach wreckage, stations, or alien-route structures, scan first. Inventory loot can wait; missed fragments slow the whole crafting tree.',
        },
        {
          title: 'Treat Bioscanner as a mid-route upgrade',
          body: 'PC Gamer reports that the Bioscanner is a later Scanner upgrade that lets you scan marine life for additional Biomods.',
        },
        {
          title: 'Build a scan checklist',
          body: 'Track stations, vehicle fragments, upgrade modules, and alien-route items separately so you know which route should come next.',
        },
      ]}
      sources={[
        {
          href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-bioscanner-location/',
          label: 'PC Gamer Bioscanner guide',
        },
        {
          href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-biomods-best/',
          label: 'PC Gamer Biomods guide',
        },
      ]}
      table={{
        headers: ['Scan target', 'Why it matters'],
        rows: [
          ['Tool fragments', 'Unlock survival and route-planning items.'],
          [
            'Vehicle fragments',
            'Move progression from swimming to vehicle routes.',
          ],
          ['Stations', 'Open processing, modification, or production systems.'],
          [
            'Marine life',
            'With Bioscanner, contributes to Biomod progression.',
          ],
        ],
        title: 'Scanner priority table',
      }}
      title="Subnautica 2 Scanner and Bioscanner Guide"
    />
  );
}
