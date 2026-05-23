import { LinkedGuidePage } from '@/components/abyss/linked-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { GaugeIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Subnautica 2 Air Tank and O2 Guide - Increase Oxygen Early',
    description:
      'Increase oxygen in Subnautica 2 with Standard Air Tank priorities, Air Bladders, Oxygen Tunics, Biomods, Silver, and safe early dive planning.',
    locale,
    pathname: Routes.Subnautica2AirTank,
  });
}

export default function AirTankGuidePage() {
  return (
    <LinkedGuidePage
      caution={{
        title: 'Oxygen is progression',
        body: 'If a route feels impossible, the answer is often not bravery. It is more oxygen, better landmarks, Air Bladders, or a shorter loop.',
      }}
      description="More oxygen changes everything in Subnautica 2: how deep you can search, how long you can scan, and how calmly you can return from caves."
      eyebrow="O2 and survival upgrade"
      icon={GaugeIcon}
      quickAnswer="Increase O2 early by using environmental oxygen sources, carrying Air Bladders, unlocking Oxygen Control, and crafting the Standard Air Tank as soon as you can spare Silver, Titanium, and Rubber."
      related={[
        { href: Routes.Subnautica2Silver, label: 'Silver Location' },
        { href: Routes.Subnautica2Copper, label: 'Copper Location' },
        { href: Routes.Subnautica2Beginner, label: 'Beginner Guide' },
      ]}
      sections={[
        {
          title: 'Use oxygen sources before upgrades',
          body: 'PC Gamer highlights Oxygen Tunics, Bloom Sap funnels, and cave air pockets as early oxygen helpers. Use them to stretch short dives before your gear catches up.',
        },
        {
          title: 'Carry Air Bladders',
          body: 'Air Bladders are useful even after tank upgrades because they can refill oxygen or get you back toward the surface quickly.',
        },
        {
          title: 'Craft the Standard Air Tank early',
          body: 'Silver is the bottleneck, but the Standard Air Tank is one of the first upgrades that turns exploration from frantic to manageable.',
        },
        {
          title: 'Unlock Oxygen Control',
          body: 'Current PC Gamer tips recommend the Oxygen Control Biomod because lower O2 consumption helps while scanning and inspecting underwater points of interest.',
        },
      ]}
      sources={[
        {
          href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-o2-oxygen-air-tank/',
          label: 'PC Gamer O2 guide',
        },
        {
          href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-tips/',
          label: 'PC Gamer beginner tips',
        },
      ]}
      table={{
        headers: ['O2 method', 'Best use'],
        rows: [
          ['Oxygen Tunics', 'Emergency oxygen while exploring early areas.'],
          ['Bloom Sap funnels', 'Route extender when you clear the blockage.'],
          ['Air Bladders', 'Portable oxygen and fast surfacing safety.'],
          ['Standard Air Tank', 'First major permanent O2 upgrade.'],
          [
            'Oxygen Control',
            'Useful while scanning or staying still underwater.',
          ],
        ],
        title: 'Oxygen options',
      }}
      title="Subnautica 2 Air Tank and O2 Guide"
    />
  );
}
