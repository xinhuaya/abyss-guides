import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { MapPinIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type BeaconCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-28';

const sharedSources = [
  {
    href: 'https://subnautica2.gg/blueprints/beacon',
    label: 'Subnautica2.gg Beacon blueprint',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/10-things-i-wish-i-knew-before-i-started-subnautica-2/',
    label: 'PC Gamer Subnautica 2 tips and beacons',
  },
  {
    href: 'https://www.wand.digital/2025/11/subnautica-2-beacon-guide-unlocking.html',
    label: 'Wand Digital Beacon unlock guide',
  },
  {
    href: 'https://bossdown.com/guides/subnautica-2/subnautica-2-navigation-guide-how-to-find-locations-quests-and-materials/',
    label: 'BossDown Subnautica 2 navigation guide',
  },
];

const beaconCopy: Record<string, BeaconCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Beacon Guide - Recipe, Unlock, and Navigation Uses',
      description:
        'A practical Subnautica 2 Beacon guide covering the Copper and Titanium recipe, scan unlock, Habitat Builder placement, mapless navigation, and marker naming.',
    },
    eyebrow: 'Subnautica 2 navigation tool',
    title: 'Subnautica 2 Beacon Guide',
    description:
      'Beacon looks boring until you lose a good cave, wreck, or resource patch. Then it becomes one of the best cheap tools in the game.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current Subnautica2.gg blueprint data lists Beacon as crafted with Copper x1 and Titanium x1. PC Gamer recommends placing beacons because Subnautica 2 does not hand you a simple map for every useful spot, and Wand Digital currently describes the unlock as two scans. Use beacons to mark bases, deep entrances, rare material routes, safe return points, and any place you plan to revisit with Habitat Builder or Scanner Station support.',
    contentsLabel: 'Contents',
    routeTitle: 'Beacon craft and placement plan',
    routeSteps: [
      {
        title: 'Scan the fragments first',
        body: 'Wand Digital currently describes Beacon as needing two scans. If the recipe is missing, stop hoarding Copper and go finish the scan route.',
      },
      {
        title: 'Keep the recipe cheap on purpose',
        body: 'Subnautica2.gg lists Copper x1 and Titanium x1. That is cheap enough to carry spares, but not so cheap that you should spend your last Copper before making batteries or wire.',
      },
      {
        title: 'Mark exits, not just discoveries',
        body: 'A beacon on the cool thing is helpful. A beacon on the way back out is often better, especially around caves, Lily Pads, and deeper routes.',
      },
      {
        title: 'Drop one before base work gets expensive',
        body: 'If you are about to place a starter base, Scanner Station, or repeated resource route, mark the approach first. A cheap beacon can save more time than the room you are trying to build.',
      },
      {
        title: 'Name it while the route is fresh',
        body: 'Rename the marker immediately: "Silver shelf", "deep cave exit", or "safe O2 return" beats three mystery dots later.',
      },
      {
        title: 'Turn old markers off',
        body: 'PC Gamer notes that signals can be managed, and clutter is real. Hide old errands once they stop helping so the next emergency marker is visible.',
      },
    ],
    tableTitle: 'Beacon checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      ['Unlock', 'Wand Digital currently describes a two-scan unlock.'],
      ['Copper x1', 'Subnautica2.gg lists it in the recipe.'],
      ['Titanium x1', 'Cheap, but still reserve one before base spam.'],
      [
        'Placement',
        'Use at exits, bases, rare resources, and route junctions.',
      ],
      [
        'Base routes',
        'Mark starter bases, Scanner Station locations, and repeated resource loops.',
      ],
      ['Naming', 'Rename immediately so signals stay useful later.'],
    ],
    visualTitle: 'Navigation loop',
    visualItems: [
      {
        label: 'Scan',
        value: '2 fragments',
        note: 'Finish unlock before saving materials for it.',
      },
      {
        label: 'Craft',
        value: 'Beacon',
        note: 'Copper and Titanium in current blueprint data.',
      },
      {
        label: 'Mark',
        value: 'Routes',
        note: 'Use for exits, bases, and rare material spots.',
      },
    ],
    cautionTitle: 'A bad beacon name is almost as bad as no beacon',
    cautionBody:
      'If every marker is called Beacon, future you still has to guess. Name the route by the job it solves, not the emotion you felt when you dropped it.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you craft a Beacon in Subnautica 2?',
        body: 'Current Subnautica2.gg data lists Copper x1 and Titanium x1.',
      },
      {
        title: 'How do you unlock the Beacon?',
        body: 'Wand Digital currently describes the unlock as two scans. If you do not see the recipe, keep scanning Beacon fragments.',
      },
      {
        title: 'Where should you place beacons?',
        body: 'Mark bases, cave exits, rare resource routes, deep entrances, and oxygen-safe return points. Exits are often more useful than the interesting object itself.',
      },
      {
        title: 'Can you hide old beacon signals?',
        body: 'Yes, current player tips describe managing signals. Turn off old markers so the important ones stay readable.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Map, label: 'Map and Biomes' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
      {
        href: Routes.Subnautica2HabitatBuilder,
        label: 'Habitat Builder Guide',
      },
      {
        href: Routes.Subnautica2ScannerStation,
        label: 'Scanner Station Guide',
      },
      { href: Routes.Subnautica2BaseBuilding, label: 'Base Building Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2 Guide' },
      { href: Routes.Subnautica2Copper, label: 'Copper Location' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2OxygenDepth, label: 'Oxygen and Depth Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 28, 2026 against Subnautica2.gg, PC Gamer, Wand Digital, and BossDown. Early Access scan counts and recipe tables can change, so check your PDA if the Fabricator differs.',
    cardKicker: 'Navigation card',
    cardBody:
      'Scan unlock, Copper and Titanium recipe, marker naming, route exits, and signal clutter control.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Navigation guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Beacon 指南 - 配方、解锁和导航用途',
      description:
        'Subnautica 2 中文 Beacon 指南：整理 Copper、Titanium 配方、扫描解锁、Habitat Builder 摆放、无地图导航和标记命名。',
    },
    eyebrow: 'Subnautica 2 导航工具',
    title: 'Subnautica 2 Beacon 指南',
    description:
      'Beacon 看起来不起眼，直到你丢了一个好洞口、残骸或资源点。那一刻它就变成最划算的小工具之一。',
    quickLabel: '快速结论',
    quickAnswer:
      'Subnautica2.gg 当前蓝图数据把 Beacon 配方写成 Copper x1 和 Titanium x1。PC Gamer 建议多放 beacon，因为 Subnautica 2 不会为每个有用地点都给你清楚地图；Wand Digital 当前把解锁写成需要 2 次扫描。Beacon 适合标记基地、深水入口、稀有材料路线和安全返航点。',
    contentsLabel: '目录',
    routeTitle: 'Beacon 制作和摆放规划',
    routeSteps: [
      {
        title: '先扫完碎片',
        body: 'Wand Digital 当前写的是需要 2 次扫描。如果菜单里没有配方，先别囤 Copper，去把扫描路线补完。',
      },
      {
        title: '便宜也要有优先级',
        body: 'Subnautica2.gg 写的配方是 Copper x1、Titanium x1。它便宜到可以带备用，但别把最后一块 Copper 用掉，导致电池或线材卡住。',
      },
      {
        title: '标出口，不只标发现点',
        body: '把 beacon 放在酷东西旁边当然有用，但放在返航出口经常更有用，尤其是洞穴、Lily Pads 和深水路线。',
      },
      {
        title: '趁路线新鲜时命名',
        body: '马上改名。Silver shelf、deep cave exit、safe O2 return 这种名字，比之后看到三个 mystery marker 强太多。',
      },
      {
        title: '旧标记记得关闭',
        body: 'PC Gamer 提到信号可以管理。标记太多会乱，旧任务完成后关掉，关键标记才看得清。',
      },
    ],
    tableTitle: 'Beacon 检查表',
    tableHeaders: ['需求', '确认什么'],
    tableRows: [
      ['解锁', 'Wand Digital 当前写成 2 次扫描。'],
      ['Copper x1', 'Subnautica2.gg 当前列在配方里。'],
      ['Titanium x1', '很便宜，但建基地前也要先留一块。'],
      ['摆放', '用在出口、基地、稀有资源和路线岔口。'],
      ['命名', '放下后立刻改名，后面才不会乱。'],
    ],
    visualTitle: '导航链路',
    visualItems: [
      {
        label: '扫描',
        value: '2 碎片',
        note: '先解锁，再为它留材料。',
      },
      {
        label: '制作',
        value: 'Beacon',
        note: '当前蓝图数据是 Copper 和 Titanium。',
      },
      {
        label: '标记',
        value: '路线',
        note: '出口、基地和稀有材料点最值得标。',
      },
    ],
    cautionTitle: '乱命名几乎等于没放 Beacon',
    cautionBody:
      '如果所有标记都叫 Beacon，之后你还是要猜。按它解决的问题命名，不要按当时的心情命名。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Beacon 怎么做？',
        body: 'Subnautica2.gg 当前数据写的是 Copper x1 和 Titanium x1。',
      },
      {
        title: 'Beacon 怎么解锁？',
        body: 'Wand Digital 当前把解锁写成 2 次扫描。如果看不到配方，继续找 Beacon 碎片扫描。',
      },
      {
        title: 'Beacon 应该放在哪里？',
        body: '放在基地、洞穴出口、稀有资源路线、深水入口和安全返航点。很多时候出口比目标本身更值得标。',
      },
      {
        title: '旧 Beacon 信号能隐藏吗？',
        body: '可以，当前玩家提示提到可以管理信号。旧标记完成任务后关掉，重要标记才清楚。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Map, label: '地图与生态区' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner 指南' },
      { href: Routes.Subnautica2HabitatBuilder, label: 'Habitat Builder 指南' },
      { href: Routes.Subnautica2ScannerStation, label: 'Scanner Station 指南' },
      { href: Routes.Subnautica2BaseBuilding, label: '基地建造指南' },
      { href: Routes.Subnautica2AirTank, label: '气瓶和氧气指南' },
      { href: Routes.Subnautica2Copper, label: 'Copper 位置' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2OxygenDepth, label: '氧气与深度指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 28 日核对 Subnautica2.gg、PC Gamer、Wand Digital 和 BossDown。抢先体验阶段扫描次数和配方表可能调整，如果 Fabricator 不同，以你的 PDA 为准。',
    cardKicker: '导航工具卡',
    cardBody:
      '扫描解锁、Copper 与 Titanium 配方、标记命名、路线出口和信号清理。',
    cardTypeLabel: '类型',
    cardTypeValue: '导航指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: 'Early Access',
  },
};

const fallbackCopy = beaconCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  beaconCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Beacon Guide',
      description:
        'Guide for Beacon recipe, scan unlock, Copper, Titanium, navigation markers, and safe route planning.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = beaconCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2Beacon,
  });
}

export default async function BeaconGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = beaconCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={MapPinIcon}
      locale={locale}
      pathname={Routes.Subnautica2Beacon}
      sources={sharedSources}
    />
  );
}
