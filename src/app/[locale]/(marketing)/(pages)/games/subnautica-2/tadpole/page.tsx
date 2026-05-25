import { LinkedGuidePage } from '@/components/abyss/linked-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { ShipWheelIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Subnautica 2 Tadpole Guide - Fragments, Build Prep, and Upgrades',
    description:
      'Unlock the Tadpole vehicle in Subnautica 2 with fragment scanning, Vehicle Fabricator prep, Power Cell planning, repair safety, and upgrade priorities.',
    locale,
    pathname: Routes.Subnautica2Tadpole,
  });
}

export default function TadpoleGuidePage() {
  return (
    <LinkedGuidePage
      caution={{
        title: 'Build support before range',
        body: 'A vehicle lets you reach danger faster. Bring repair options, power planning, and a clear return route before treating the Tadpole as permission to dive everywhere.',
      }}
      description="The Tadpole is the first real vehicle milestone for many Subnautica 2 players. It extends range, protects oxygen, and opens the path toward deeper resource loops."
      eyebrow="Vehicle milestone"
      icon={ShipWheelIcon}
      pathname={Routes.Subnautica2Tadpole}
      quickAnswer="Unlock the Tadpole by scanning Tadpole fragments, then craft it through the vehicle-building chain. GameSpot reports that the blueprint requires at least three Tadpole Fragment scans, while PC Gamer emphasizes Power Cell prep and vehicle support."
      related={[
        { href: Routes.Subnautica2EchoLocation, label: 'Echo Location Guide' },
        {
          href: Routes.Subnautica2ModificationStation,
          label: 'Modification Station Guide',
        },
        { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
        { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
        {
          href: Routes.Subnautica2TadpoleDepthModule,
          label: 'Tadpole Depth Module Guide',
        },
        { href: Routes.Subnautica2SystemChip, label: 'System Chip Guide' },
        {
          href: Routes.Subnautica2EnameledGlass,
          label: 'Enameled Glass Guide',
        },
        { href: Routes.Subnautica2Map, label: 'Map and Biomes' },
        {
          href: Routes.Subnautica2FeedbackResonator,
          label: 'Feedback Resonator Guide',
        },
      ]}
      sections={[
        {
          title: 'Scan Tadpole fragments',
          body: 'GameSpot reports that scanning at least three Tadpole Fragments unlocks the blueprint. Treat each fragment trip as a scan-first mission rather than a full loot run.',
        },
        {
          title: 'Prepare the vehicle chain',
          body: 'Current guides point players toward base and vehicle-fabrication prep before the first Tadpole. Keep crafting materials organized so the final build does not stall.',
        },
        {
          title: 'Craft power before the hull',
          body: 'PC Gamer links Tadpole progress to Power Cell production, including Strong Acid. Solve the battery and power chain before expecting the vehicle to carry exploration.',
        },
        {
          title: 'Bring repair safety',
          body: 'A Tadpole is most valuable when it survives repeated routes. Carry repair planning and avoid using it as a disposable scout in predator-heavy water.',
        },
      ]}
      sources={[
        {
          href: 'https://www.gamespot.com/articles/subnautica-2-tadpole-upgrades-modules-guide/1100-6539941/',
          label: 'GameSpot Tadpole guide',
        },
        {
          href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-tadpole-scan-locations/',
          label: 'PC Gamer Tadpole guide',
        },
        {
          href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-strong-acid-necrolei-cyst-location/',
          label: 'PC Gamer Strong Acid guide',
        },
      ]}
      table={{
        headers: ['Milestone', 'Why it matters'],
        rows: [
          ['Fragment scans', 'Unlocks the Tadpole blueprint.'],
          [
            'Vehicle build chain',
            'Requires a base and fabrication setup before the vehicle exists.',
          ],
          ['Power Cell prep', 'Vehicle progress depends on the power chain.'],
          [
            'Repair planning',
            'Keeps long-range routes from becoming one-way trips.',
          ],
          [
            'Upgrade planning',
            'Depth and utility upgrades determine when deeper routes become practical.',
          ],
        ],
        title: 'Tadpole progression checklist',
      }}
      faqs={[
        {
          question: 'How do you unlock the Tadpole in Subnautica 2?',
          answer:
            'Scan Tadpole fragments until the blueprint unlocks, then build it through the vehicle crafting chain.',
        },
        {
          question: 'What should you prepare before using the Tadpole?',
          answer:
            'Prepare power, repair safety, and a clear return route before using the Tadpole for deeper exploration.',
        },
      ]}
      title="Subnautica 2 Tadpole Guide"
    />
  );
}
