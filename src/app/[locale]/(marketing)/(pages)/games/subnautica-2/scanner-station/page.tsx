import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { RadarIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type ScannerStationCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-28';

const sharedSources = [
  {
    href: 'https://subnautica2.wiki.gg/wiki/Scanner_Station_(Subnautica_2)',
    label: 'Subnautica 2 Wiki Scanner Station page',
  },
  {
    href: 'https://wiki.serenesforest.net/index.php?title=Subnautica_2_-_Equipment',
    label: 'Serenes Forest Subnautica 2 equipment table',
  },
  {
    href: 'https://www.rockpapershotgun.com/subnautica-2-crafting-recipes',
    label: 'Rock Paper Shotgun crafting recipe list',
  },
  {
    href: 'https://subnautica2hub.com/resources/system-chip',
    label: 'Subnautica2Hub System Chip resource',
  },
];

const scannerStationCopy: Record<string, ScannerStationCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Scanner Station Guide - Recipe, System Chip, and Base Use',
      description:
        'A practical Subnautica 2 Scanner Station guide covering Titanium, Copper Wire, System Chip, base placement, power planning, and resource-search timing.',
    },
    eyebrow: 'Subnautica 2 base utility',
    title: 'Subnautica 2 Scanner Station Guide',
    description:
      'The Scanner Station is for the moment when swimming in circles stops being charming. Build it when a base is stable enough to support search work, not when you are still short on basic power and lockers.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current Subnautica 2 Wiki and equipment-table sources list Scanner Station as a base utility tied to Titanium, Copper Wire, and System Chip style electronics. Build it after the base has power, storage, and a Beacon marker. Because recipe tables can word the chain differently during Early Access, check the in-game build menu before spending Silver-heavy electronics.',
    contentsLabel: 'Contents',
    routeTitle: 'Scanner Station build plan',
    routeSteps: [
      {
        title: 'Choose a base that deserves scanning',
        body: 'A Scanner Station is most useful near repeated resource routes. If the base is only a temporary oxygen stop, save the electronics for mobility or depth first.',
      },
      {
        title: 'Reserve the electronics pile',
        body: 'System Chip pressure usually means Wiring Kit and Silver pressure underneath. Do not craft the chip until Scanner Station is the next real base upgrade.',
      },
      {
        title: 'Keep Copper Wire and Titanium separate',
        body: 'Those two disappear into half the early base plan. Put the station materials in a labeled locker before you start adding rooms and power parts.',
      },
      {
        title: 'Build with power in mind',
        body: 'Search utilities are only helpful when the base can actually run them. Check power margin before treating the station as finished.',
      },
      {
        title: 'Mark the search base',
        body: 'A Scanner Station is part of a route, not a trophy. Put a Beacon on the base or approach line so the next resource run starts cleanly instead of with a search for your search tool.',
      },
      {
        title: 'Use it to shorten repeat loops',
        body: 'The station earns its slot when you are repeatedly hunting the same materials. If you only need one quick pickup, direct route notes may be faster.',
      },
    ],
    tableTitle: 'Scanner Station checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      [
        'Base location',
        'Useful near repeated resource searches, not every outpost.',
      ],
      ['Titanium', 'Do not lose it to extra corridors before building.'],
      ['Copper Wire', 'Set aside Copper x2 worth of wiring.'],
      ['System Chip', 'Check Wiring Kit and Silver before committing.'],
      ['Power', 'Make sure the base can support another utility module.'],
      [
        'Beacon',
        'Mark the station base so repeat runs start from a known point.',
      ],
    ],
    visualTitle: 'Base search loop',
    visualItems: [
      {
        label: 'Place',
        value: 'Base utility',
        note: 'Pick a base with real nearby resources.',
      },
      {
        label: 'Feed',
        value: 'Electronics',
        note: 'System Chip, Copper Wire, and Titanium planning.',
      },
      {
        label: 'Scan',
        value: 'Repeat runs',
        note: 'Best for materials you need again and again.',
      },
    ],
    cautionTitle: 'Do not build it before the base can carry it',
    cautionBody:
      'Scanner Station feels like progress, but a weak base with no power margin and no storage plan just turns it into expensive furniture. Stabilize the base first.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'What does the Scanner Station do in Subnautica 2?',
        body: 'It is a base utility for resource-search work. Build it where repeated scanning can shorten material routes.',
      },
      {
        title: 'What materials should you prepare?',
        body: 'Current public tables point to Titanium, Copper Wire, and System Chip style electronics. Check your in-game build menu because Early Access recipe text can change.',
      },
      {
        title: 'When should you build a Scanner Station?',
        body: 'After the base has power, storage, and a reason to scan nearby resources. Before that, mobility and oxygen upgrades often matter more.',
      },
      {
        title: 'Does it replace route knowledge?',
        body: 'No. It helps with repeat searches, but a known direct route is still faster for one-off materials.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
      {
        href: Routes.Subnautica2HabitatBuilder,
        label: 'Habitat Builder Guide',
      },
      { href: Routes.Subnautica2Beacon, label: 'Beacon Guide' },
      { href: Routes.Subnautica2SystemChip, label: 'System Chip Guide' },
      { href: Routes.Subnautica2WiringKit, label: 'Wiring Kit Guide' },
      { href: Routes.Subnautica2CopperWire, label: 'Copper Wire Guide' },
      {
        href: Routes.Subnautica2BatteryTerminal,
        label: 'Battery Terminal Guide',
      },
      { href: Routes.Subnautica2BaseBuilding, label: 'Base Building Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 28, 2026 against Subnautica 2 Wiki, Serenes Forest, Rock Paper Shotgun, and Subnautica2Hub. Early Access recipe tables may change, so this page keeps the electronics chain explicit and tells players to verify the build menu.',
    cardKicker: 'Base utility card',
    cardBody:
      'Base placement, Titanium, Copper Wire, System Chip, power margin, and repeat resource-search timing.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Base guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Scanner Station 指南 - 配方、System Chip 和基地用途',
      description:
        'Subnautica 2 中文 Scanner Station 指南：整理 Titanium、Copper Wire、System Chip、基地摆放、供电规划和资源搜索时机。',
    },
    eyebrow: 'Subnautica 2 基地工具',
    title: 'Subnautica 2 Scanner Station 指南',
    description:
      'Scanner Station 适合在你已经不想靠乱游找材料时建。它是稳定基地的工具，不是前期缺电、缺箱子时硬塞出来的装饰。',
    quickLabel: '快速结论',
    quickAnswer:
      'Subnautica 2 Wiki 和当前装备表资料把 Scanner Station 写成基地工具，并和 Titanium、Copper Wire、System Chip 这类电子材料链联系在一起。抢先体验阶段配方表写法可能不同，花掉 Silver 相关电子材料前先看游戏内建造菜单。',
    contentsLabel: '目录',
    routeTitle: 'Scanner Station 建造规划',
    routeSteps: [
      {
        title: '先选值得扫描的基地',
        body: 'Scanner Station 最适合放在反复跑资源的基地附近。如果只是临时补氧点，电子材料先留给移动或深度升级更稳。',
      },
      {
        title: '预留电子材料',
        body: 'System Chip 往往意味着 Wiring Kit 和 Silver 压力。确认 Scanner Station 是下一个真正要做的基地升级，再把芯片做掉。',
      },
      {
        title: 'Copper Wire 和 Titanium 单独放',
        body: '这两个材料很容易被房间、走廊和供电件吃掉。先放进带标签的箱子，再继续扩基地。',
      },
      {
        title: '建造前看供电余量',
        body: '搜索工具只有在基地能稳定供电时才有意义。供电紧张时，先补电再说。',
      },
      {
        title: '用它缩短重复路线',
        body: '如果你反复找同一种材料，Scanner Station 才真正值。只拿一次的材料，直接路线笔记通常更快。',
      },
    ],
    tableTitle: 'Scanner Station 检查表',
    tableHeaders: ['需求', '确认什么'],
    tableRows: [
      ['基地位置', '适合反复搜索资源的基地，不是每个哨点都要建。'],
      ['Titanium', '别在建造前被走廊和房间吃掉。'],
      ['Copper Wire', '预留 Copper x2 对应的线材。'],
      ['System Chip', '先检查 Wiring Kit 和 Silver 是否够。'],
      ['供电', '确认基地能多带一个工具模块。'],
    ],
    visualTitle: '基地搜索链',
    visualItems: [
      {
        label: '摆放',
        value: '基地工具',
        note: '选附近真的有资源循环的基地。',
      },
      {
        label: '投入',
        value: '电子材料',
        note: 'System Chip、Copper Wire、Titanium。',
      },
      {
        label: '扫描',
        value: '重复路线',
        note: '适合反复需要的材料。',
      },
    ],
    cautionTitle: '基地扛不住时不要硬建',
    cautionBody:
      'Scanner Station 看起来很有进度感，但缺电、缺收纳的基地只会把它变成昂贵家具。先把基地基本能力补齐。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Scanner Station 有什么用？',
        body: '它是基地里的资源搜索工具。放在反复刷材料的基地附近，能缩短重复路线。',
      },
      {
        title: 'Scanner Station 要准备什么材料？',
        body: '当前公开表格指向 Titanium、Copper Wire、System Chip 这类材料链。抢先体验阶段配方可能变化，最终以游戏内建造菜单为准。',
      },
      {
        title: '什么时候该建 Scanner Station？',
        body: '等基地有供电、收纳，并且附近有值得扫描的资源循环时再建。更早的时候，移动和氧气升级通常更重要。',
      },
      {
        title: 'Scanner Station 能代替路线攻略吗？',
        body: '不能。它适合重复搜索；只拿一次的材料，已知路线通常更快。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Scanner, label: 'Scanner 指南' },
      { href: Routes.Subnautica2HabitatBuilder, label: 'Habitat Builder 指南' },
      { href: Routes.Subnautica2Beacon, label: 'Beacon 指南' },
      { href: Routes.Subnautica2SystemChip, label: 'System Chip 指南' },
      { href: Routes.Subnautica2WiringKit, label: 'Wiring Kit 指南' },
      { href: Routes.Subnautica2CopperWire, label: 'Copper Wire 指南' },
      {
        href: Routes.Subnautica2BatteryTerminal,
        label: 'Battery Terminal Guide',
      },
      { href: Routes.Subnautica2BaseBuilding, label: '基地建造指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 28 日核对 Subnautica 2 Wiki、Serenes Forest、Rock Paper Shotgun 和 Subnautica2Hub。抢先体验阶段配方表可能调整，所以页面保留电子材料链说明，并提醒玩家核对建造菜单。',
    cardKicker: '基地工具卡',
    cardBody:
      '基地摆放、Titanium、Copper Wire、System Chip、供电余量和重复资源搜索时机。',
    cardTypeLabel: '类型',
    cardTypeValue: '基地指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: 'Early Access',
  },
};

const fallbackCopy = scannerStationCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  scannerStationCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Scanner Station Guide',
      description:
        'Guide for Scanner Station recipe planning, System Chip, Copper Wire, Titanium, base power, and resource-search timing.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = scannerStationCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2ScannerStation,
  });
}

export default async function ScannerStationGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = scannerStationCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={RadarIcon}
      locale={locale}
      pathname={Routes.Subnautica2ScannerStation}
      sources={sharedSources}
    />
  );
}
