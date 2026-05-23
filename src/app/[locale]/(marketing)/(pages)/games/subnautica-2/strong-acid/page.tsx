import { LinkedGuidePage } from '@/components/abyss/linked-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { FlaskConicalIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'How to Get Strong Acid in Subnautica 2 - Necrolei Cyst Route',
    description:
      'Craft Strong Acid in Subnautica 2 with Necrolei Cyst route notes, Processor unlocks, Power Cell planning, and Tadpole prep.',
    locale,
    pathname: Routes.Subnautica2StrongAcid,
  });
}

export default function StrongAcidGuidePage() {
  return (
    <LinkedGuidePage
      caution={{
        title: 'Strong Acid is a vehicle-chain material',
        body: 'Do not treat Necrolei Cysts as random plants. Strong Acid feeds Power Cell crafting, which means it can directly block Tadpole progress.',
      }}
      description="Strong Acid is one of the first materials that forces you to connect exploration, processing, and vehicle planning. It starts with Necrolei Cysts and a Processor."
      eyebrow="Necrolei Cyst crafting route"
      faqs={[
        {
          question: 'How do you craft Strong Acid in Subnautica 2?',
          answer:
            'Gather Necrolei Cysts, unlock or use the Processor, and craft Strong Acid through the processing chain.',
        },
        {
          question: 'Why do you need Strong Acid?',
          answer:
            'Strong Acid is used for Power Cell crafting, which is part of getting the Tadpole vehicle running.',
        },
      ]}
      icon={FlaskConicalIcon}
      pathname={Routes.Subnautica2StrongAcid}
      quickAnswer="To get Strong Acid, gather Necrolei Cysts around the Old Habitat route and craft them at the Processor. PC Gamer notes that Strong Acid is key for Power Cells, which are needed for the Tadpole."
      related={[
        { href: Routes.Subnautica2Tadpole, label: 'Tadpole Vehicle' },
        { href: Routes.Subnautica2TitaniumIngot, label: 'Titanium Ingot' },
        { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
      ]}
      sections={[
        {
          title: 'Unlock the Processor route',
          body: 'PC Gamer reports that the Processor can be scanned at the Old Habitat north of the Life Pod as part of the black-box objective route.',
        },
        {
          title: 'Gather Necrolei Cysts nearby',
          body: 'The same Old Habitat region is reported as a practical place to gather Necrolei Cysts, which are the key Strong Acid ingredient.',
        },
        {
          title: 'Craft with a Power Cell goal',
          body: 'Strong Acid matters because it feeds Power Cell crafting. If your next milestone is Tadpole, do not spend the chain carelessly.',
        },
        {
          title: 'Return with a buffer',
          body: 'If the route is safe, gather more than the minimum. Vehicle chains often need extra attempts, repairs, or backup power planning.',
        },
      ]}
      sources={[
        {
          href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-strong-acid-necrolei-cyst-location/',
          label: 'PC Gamer Strong Acid guide',
        },
        {
          href: 'https://www.gamesradar.com/games/survival/subnautica-2-necrolei-cysts/',
          label: 'GamesRadar Necrolei Cyst guide',
        },
      ]}
      table={{
        headers: ['Material or station', 'Role'],
        rows: [
          ['Necrolei Cyst', 'Key gathered ingredient for Strong Acid.'],
          ['Processor', 'Station used to craft Strong Acid.'],
          ['Strong Acid', 'Processing material used in Power Cell crafting.'],
          ['Power Cell', 'Vehicle-chain item connected to Tadpole progress.'],
        ],
        title: 'Strong Acid crafting chain',
      }}
      title="How to Get Strong Acid in Subnautica 2"
    />
  );
}
