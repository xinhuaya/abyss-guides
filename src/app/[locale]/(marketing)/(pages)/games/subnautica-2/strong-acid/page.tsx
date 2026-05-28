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
      'Craft Strong Acid in Subnautica 2 with Necrolei Cyst route notes, Processor unlocks, Fiber Mesh and Rebreather planning, Power Cell use, and Tadpole prep.',
    locale,
    pathname: Routes.Subnautica2StrongAcid,
  });
}

export default function StrongAcidGuidePage() {
  return (
    <LinkedGuidePage
      caution={{
        title: 'Strong Acid is a vehicle-chain material',
        body: 'Do not treat Necrolei Cysts as random plants. Strong Acid feeds Power Cell planning and now sits close to the Fiber Mesh and Rebreather prep route too.',
      }}
      description="Strong Acid is one of the first materials that forces you to connect exploration, processing, oxygen prep, and vehicle planning. It starts with Necrolei Cysts and a Processor, then quickly affects what you can build next."
      eyebrow="Necrolei Cyst crafting route"
      fieldNotes={[
        {
          title: 'Treat cysts as chemistry stock',
          body: 'Necrolei Cysts are easy to mentally file as another plant pickup. Once Strong Acid appears, they belong in the same plan as Power Cells, Processor use, and deep-route prep.',
        },
        {
          title: 'Do not craft acid without a next recipe',
          body: 'Strong Acid is useful, but raw cysts and Processor access are more flexible. Craft it when Power Cell, Tadpole, or a breathing-route item is the visible target.',
        },
        {
          title: 'Return from Old Habitat with a margin',
          body: 'The Old Habitat route already asks for attention and oxygen. If the path is safe, gather a little more than the minimum so one mistake does not force the same swim again.',
        },
      ]}
      fieldNotesTitle="Field notes for Strong Acid runs"
      faqs={[
        {
          question: 'How do you craft Strong Acid in Subnautica 2?',
          answer:
            'Gather Necrolei Cysts, unlock or use the Processor, and craft Strong Acid through the processing chain.',
        },
        {
          question: 'Why do you need Strong Acid?',
          answer:
            'Strong Acid is used for Power Cell crafting, which is part of getting the Tadpole vehicle running. Current route planning also connects it to Fiber Mesh and Rebreather prep through the broader chemistry chain.',
        },
      ]}
      icon={FlaskConicalIcon}
      pathname={Routes.Subnautica2StrongAcid}
      publishedAt="2026-05-23"
      quickAnswer="To get Strong Acid, gather Necrolei Cysts around the Old Habitat route and craft them at the Processor. PC Gamer notes that Strong Acid is key for Power Cells, which are needed for the Tadpole. Keep a small reserve if your next route also includes Fiber Mesh or Rebreather prep."
      related={[
        { href: Routes.Subnautica2NecroleiCyst, label: 'Necrolei Cyst Guide' },
        { href: Routes.Subnautica2Processor, label: 'Processor Guide' },
        { href: Routes.Subnautica2MildAcid, label: 'Mild Acid Guide' },
        { href: Routes.Subnautica2Sulfur, label: 'Sulfur Location Guide' },
        { href: Routes.Subnautica2Gold, label: 'Gold Location Guide' },
        { href: Routes.Subnautica2FiberMesh, label: 'Fiber Mesh Guide' },
        { href: Routes.Subnautica2Rebreather, label: 'Rebreather Guide' },
        { href: Routes.Subnautica2Tadpole, label: 'Tadpole Vehicle' },
        { href: Routes.Subnautica2PowerCell, label: 'Power Cell Guide' },
        {
          href: Routes.Subnautica2EntangledPowerCell,
          label: 'Entangled Power Cell Guide',
        },
        {
          href: Routes.Subnautica2AdvancedBattery,
          label: 'Advanced Battery Guide',
        },
        { href: Routes.Subnautica2TitaniumIngot, label: 'Titanium Ingot' },
        { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
      ]}
      routeChecklist={[
        'Scan or build the Processor before counting Strong Acid as available.',
        'Mark the Necrolei Cyst route near Old Habitat.',
        'Reserve Strong Acid for Power Cell or deep-route gear before comfort crafts.',
        'Keep enough oxygen margin to leave the cyst route cleanly.',
      ]}
      routeChecklistTitle="Before crafting Strong Acid"
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
          title: 'Check the oxygen route before you spend it',
          body: 'Recent Rebreather and Fiber Mesh notes pull this material chain into deep-route planning. If you are about to push below your comfortable oxygen range, keep enough chemistry stock to finish the breathing kit instead of burning everything on vehicle parts.',
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
        {
          href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-rebreather-how-to-get/',
          label: 'PC Gamer Rebreather guide',
        },
      ]}
      table={{
        headers: ['Material or station', 'Role'],
        rows: [
          ['Necrolei Cyst', 'Key gathered ingredient for Strong Acid.'],
          ['Processor', 'Station used to craft Strong Acid.'],
          ['Strong Acid', 'Processing material used in Power Cell crafting.'],
          [
            'Fiber Mesh / Rebreather',
            'Deep-route prep that can compete for the same chemistry plan.',
          ],
          ['Power Cell', 'Vehicle-chain item connected to Tadpole progress.'],
        ],
        title: 'Strong Acid crafting chain',
      }}
      title="How to Get Strong Acid in Subnautica 2"
      updatedAt="2026-05-28"
      checkedAt="May 28, 2026"
    />
  );
}
