import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { MapIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type SubnauticaMapCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-06-04';
const UPDATED_AT = '2026-06-04';

const sharedSources = [
  {
    href: 'https://store.steampowered.com/app/264710/Subnautica/',
    label: 'Official Subnautica Steam page',
  },
  {
    href: 'https://subnautica.fandom.com/wiki/Map',
    label: 'Subnautica Wiki map page',
  },
  {
    href: 'https://mapgenie.io/subnautica/maps/world',
    label: 'Map Genie Subnautica interactive map',
  },
];

const mapCopy: Record<string, SubnauticaMapCopy> = {
  en: {
    metadata: {
      title: 'Subnautica Map Guide - Biomes, Islands, Wrecks, and Routes',
      description:
        'A spoiler-light Subnautica map guide for Safe Shallows starts, island routes, wreck planning, biome order, beacon names, and when to use an interactive map.',
    },
    eyebrow: 'Subnautica map guide',
    title: 'Subnautica Map Guide: Biomes, Islands, Wrecks, and Safe Routes',
    description:
      'A good Subnautica map does not have to spoil the whole ocean. Use it to build a handful of routes you can repeat: a safe food loop, an island run, a wreck sweep, and a deeper biome path for upgrades.',
    publishedAt: PUBLISHED_AT,
    updatedAt: UPDATED_AT,
    checkedAt: UPDATED_AT,
    quickLabel: 'Quick answer',
    quickAnswer:
      'Start with landmarks before coordinates. Learn the Safe Shallows, mark the Aurora side you can recognize, make separate Beacon names for the Floating Island and Mountain Island, then use an interactive map only when you are ready to hunt wrecks, fragments, or late-game biomes without guessing for an hour.',
    fieldNotesTitle: 'Map notes that actually help',
    fieldNotes: [
      {
        title: 'Do not turn every icon on at once',
        body: 'Interactive maps get messy fast. Turn on one layer at a time: wrecks, fragments, entrances, or biome labels. If you enable everything, you stop navigating and start staring.',
      },
      {
        title: 'Use names you can say while swimming',
        body: '“North island cave” is better than a clever Beacon name you forget under pressure. Good labels are short, plain, and boring enough to survive a bad oxygen timer.',
      },
      {
        title: 'Spoilers are a setting, not a personality test',
        body: 'Some players want the full map. Some want only a nudge. The clean middle ground is route order: where to go first, what each trip is for, and which pages to open only when you are stuck.',
      },
    ],
    routeChecklistTitle: 'Before opening a full map',
    routeChecklist: [
      'You can return from your starter area without a guide.',
      'You know which side of the Aurora you are using as a landmark.',
      'Your Beacons have short names for islands, base, and wreck routes.',
      'You are opening the map for one job, not to reveal the whole run.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'A clean route order for new players',
    routeSteps: [
      {
        title: 'Map the Safe Shallows first',
        body: 'Your first map is small: Lifepod, kelp edge, food, water, quartz, copper, and the return line. If this loop is messy, a full-world map will not fix it.',
      },
      {
        title: 'Add one island route',
        body: 'Use the Floating Island and Mountain Island as big navigation anchors. Give each a Beacon name, note the approach direction, and avoid treating island trips like casual farming runs.',
      },
      {
        title: 'Separate wreck sweeps from biome scouting',
        body: 'Wreck runs need storage, repair checks, scan priorities, and a clear exit. Biome scouting is different: you are testing visibility, depth, creature pressure, and whether a base nearby would make sense.',
      },
      {
        title: 'Use the interactive map for stuck points',
        body: 'Open a full map when you are hunting a specific fragment, entrance, wreck, or biome. That keeps the page useful without flattening the discovery curve.',
      },
    ],
    tableTitle: 'Subnautica map route planner',
    tableHeaders: ['Route', 'What to mark'],
    tableRows: [
      [
        'Safe Shallows loop',
        'Food, water, copper, quartz, kelp edge, and the clean return line to the Lifepod.',
      ],
      [
        'Floating Island run',
        'Approach direction, cave entrances, edible plant stops, and a Beacon name you will not confuse with the Mountain Island.',
      ],
      [
        'Mountain Island run',
        'Safe approach, island landmark, cave route, and when you should leave instead of overpacking the trip.',
      ],
      [
        'Wreck sweep',
        'Entrance, scan priority, blocked doors, repair checks, spare storage, and the fastest way out.',
      ],
      [
        'Deep biome scout',
        'Depth pressure, creature risk, visibility, base potential, and whether you need better oxygen before returning.',
      ],
    ],
    visualTitle: 'Map layers to use first',
    visualItems: [
      {
        label: 'Early layer',
        value: 'Landmarks',
        note: 'Lifepod, Aurora side, islands, cave mouths, and base markers.',
      },
      {
        label: 'Mid layer',
        value: 'Wrecks',
        note: 'Only turn on wreck and fragment layers when you have a target.',
      },
      {
        label: 'Late layer',
        value: 'Biomes',
        note: 'Use biome labels for planning depth, risk, and base routes.',
      },
    ],
    cautionTitle: 'Full maps can make the game smaller',
    cautionBody:
      'Subnautica is built around recognition: a ridge shape, a cave mouth, a familiar kelp edge, a light in the distance. If the map answers everything too early, you lose some of that. Use it when it helps, close it when the route is already clear.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'What is the best Subnautica map for beginners?',
        body: 'For a first playthrough, the best map is a light route guide plus your own Beacons. Use a full interactive map later for wrecks, fragments, entrances, and late-game biome checks.',
      },
      {
        title: 'Is there an official Subnautica interactive map?',
        body: 'The game has in-world navigation tools, but players usually mean community interactive maps when they search this. Check the source and layer settings before trusting every marker.',
      },
      {
        title: 'Should I use coordinates in Subnautica?',
        body: 'Coordinates are useful for troubleshooting and exact searches, but Beacons and landmarks are better for normal play. They train you to navigate instead of chasing numbers.',
      },
      {
        title: 'Where should I go after Safe Shallows?',
        body: 'Move outward by purpose: food and water stability, kelp edge materials, an island route, wreck scanning, then deeper biomes once your oxygen and tools can handle the return trip.',
      },
      {
        title: 'Is this page for Subnautica 1 or Subnautica 2?',
        body: 'This page is for the original Subnautica. Subnautica 2 has separate map and biome pages because Early Access information can change after patches.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Map, label: 'Subnautica 2 Map Guide' },
      {
        href: Routes.Subnautica2InteractiveMap,
        label: 'Subnautica 2 Interactive Map',
      },
      { href: Routes.Subnautica2Biomes, label: 'Subnautica 2 Biomes' },
      {
        href: Routes.Subnautica2Beginner,
        label: 'Subnautica 2 Beginner Route',
      },
      { href: Routes.Subnautica2Resources, label: 'Subnautica 2 Resources' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 4, 2026 against the official Steam listing and major community map references. Abyss Guides uses original route art here and links out for full interactive map layers instead of copying map screenshots.',
    cardKicker: 'Map route card',
    cardBody:
      'A spoiler-light route guide for the original Subnautica map: islands, wrecks, biomes, Beacons, and when to open a full interactive map.',
    cardTypeLabel: 'Game',
    cardTypeValue: 'Subnautica',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Use case',
    cardStatusValue: 'Map planning',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = mapCopy[locale] ?? mapCopy.en;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.SubnauticaMap,
  });
}

export default async function SubnauticaMapPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = mapCopy[locale] ?? mapCopy.en;

  return (
    <LocalizedResourceGuidePage
      copy={copy}
      icon={MapIcon}
      locale={locale}
      pathname={Routes.SubnauticaMap}
      sources={sharedSources}
    />
  );
}
