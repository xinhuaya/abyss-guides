import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { CableIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type AdvancedWiringKitCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-27';
const UPDATED_AT = '2026-05-27';

const sharedSources = [
  {
    href: 'https://subnautica2.gg/blueprints/advanced-wiring-kit',
    label: 'Subnautica2.gg Advanced Wiring Kit blueprint',
  },
  {
    href: 'https://subnautica2.gg/items/advanced-wiring-kit',
    label: 'Subnautica2.gg Advanced Wiring Kit item page',
  },
  {
    href: 'https://wikily.gg/subnautica-2/items/advanced-wiring-kit/',
    label: 'Wikily Advanced Wiring Kit item page',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-gold-location/',
    label: 'PC Gamer Gold location guide',
  },
];

const advancedWiringKitCopy: Record<string, AdvancedWiringKitCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Advanced Wiring Kit Guide - Recipe, Gold, Sulfur, and Uses',
      description:
        'A practical Subnautica 2 Advanced Wiring Kit guide covering Wiring Kit x1, Gold x1, Sulfur x1, Fabrication Station/Fabricator data, unlock paths, Dedicated Core, Heat Resistance Chip, and Scout Ray Chassis.',
    },
    eyebrow: 'Subnautica 2 electronics chain',
    title: 'Subnautica 2 Advanced Wiring Kit Guide',
    description:
      'Advanced Wiring Kit is where the small electronics box stops being cute. One craft pulls Wiring Kit, Gold, and Sulfur at the same time, so it can empty three different plans if you make it too early.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current Subnautica2.gg data lists Advanced Wiring Kit as a locked electronics craft at the Fabrication Station using Wiring Kit x1, Gold x1, and Sulfur x1, with unlock paths from obtaining Wiring Kit or Gold. Wikily lists the same three ingredients and labels the station as Fabricator. Current public uses include Dedicated Core, Heat Resistance Chip, and Scout Ray Chassis, while PC Gamer confirms Gold is part of Advanced Wiring Kit and System Chip progress.',
    contentsLabel: 'Contents',
    routeTitle: 'Advanced Wiring Kit planning route',
    routeSteps: [
      {
        title: 'Unlock through Gold or Wiring Kit',
        body: 'Subnautica2.gg lists multiple unlock paths: obtain Wiring Kit or obtain Gold. If the craft is missing, check those two items before hunting for a separate scan.',
      },
      {
        title: 'Build the normal Wiring Kit first',
        body: 'Advanced Wiring Kit starts with Wiring Kit, so the real chain backs up into Silver and Copper Wire. If Silver is already tight, pause here.',
      },
      {
        title: 'Bring Gold from a safe hot-zone route',
        body: 'PC Gamer points Gold toward the volcanic vent region east of the Lifepod and frames it as a progressed route. Do not spend the first Gold piece blindly if Thermal Plant or System Chip is also waiting.',
      },
      {
        title: 'Keep one Sulfur ready',
        body: 'Subnautica2.gg and Wikily both include Sulfur x1. That means this craft can compete with Repair Tool or Strong Acid plans, depending on what your save is pushing next.',
      },
      {
        title: 'Check station wording in your PDA',
        body: 'Subnautica2.gg says Fabrication Station, while Wikily says Fabricator. The material list agrees; the safest call is to check the PDA after updates.',
      },
      {
        title: 'Craft only for a visible use',
        body: 'Dedicated Core, Heat Resistance Chip, and Scout Ray Chassis are the public uses to watch. If none is next, the loose ingredients are more flexible.',
      },
    ],
    tableTitle: 'Advanced Wiring Kit checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      ['Wiring Kit x1', 'Backs into Silver and Copper Wire.'],
      ['Gold x1', 'Also competes with System Chip and Thermal Plant planning.'],
      ['Sulfur x1', 'Can compete with Repair Tool and Strong Acid routes.'],
      [
        'Station',
        'Subnautica2.gg says Fabrication Station; Wikily says Fabricator.',
      ],
      [
        'Unlock',
        'Current Subnautica2.gg paths: obtain Wiring Kit or obtain Gold.',
      ],
      ['Uses', 'Dedicated Core, Heat Resistance Chip, and Scout Ray Chassis.'],
    ],
    visualTitle: 'Electronics chain card',
    visualItems: [
      {
        label: 'Base part',
        value: 'Wiring Kit',
        note: 'Silver and Copper Wire are still hiding underneath.',
      },
      {
        label: 'Route part',
        value: 'Gold',
        note: 'Hot-zone material with other power demands.',
      },
      {
        label: 'Risk part',
        value: 'Sulfur',
        note: 'Check Repair Tool and Strong Acid before spending it.',
      },
    ],
    cautionTitle: 'This is not a harmless upgrade craft',
    cautionBody:
      'Advanced Wiring Kit looks like one tidy component, but it eats three separate routes. Make it when the next recipe is visible, not when the locker simply has enough parts.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you make Advanced Wiring Kit in Subnautica 2?',
        body: 'Current Subnautica2.gg and Wikily data agree on Wiring Kit x1, Gold x1, and Sulfur x1. They differ slightly on station wording: Fabrication Station versus Fabricator.',
      },
      {
        title: 'How do you unlock Advanced Wiring Kit?',
        body: 'Subnautica2.gg currently lists two unlock paths: obtain Wiring Kit or obtain Gold.',
      },
      {
        title: 'What is Advanced Wiring Kit used for?',
        body: 'Current public pages list Dedicated Core, Heat Resistance Chip, and Scout Ray Chassis as uses.',
      },
      {
        title: 'Should I craft it early?',
        body: 'Usually no. Keep Wiring Kit, Gold, and Sulfur loose until a visible recipe asks for Advanced Wiring Kit.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2WiringKit, label: 'Wiring Kit Guide' },
      { href: Routes.Subnautica2Gold, label: 'Gold Location Guide' },
      { href: Routes.Subnautica2Sulfur, label: 'Sulfur Location Guide' },
      { href: Routes.Subnautica2SystemChip, label: 'System Chip Guide' },
      { href: Routes.Subnautica2GoldIngot, label: 'Gold Ingot Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 27, 2026 against Subnautica2.gg, Wikily, and PC Gamer. Subnautica 2 is in Early Access, so station names, unlock paths, and listed uses can change after patches.',
    cardKicker: 'Electronics card',
    cardBody:
      'Wiring Kit x1, Gold x1, Sulfur x1, unlock paths, station wording, Dedicated Core, Heat Resistance Chip, and Scout Ray Chassis.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Electronics material',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Advanced Wiring Kit 指南 - 配方、Gold、Sulfur 和用途',
      description:
        'Subnautica 2 中文 Advanced Wiring Kit 指南：整理 Wiring Kit x1、Gold x1、Sulfur x1、Fabrication Station/Fabricator 数据、解锁方式、Dedicated Core、Heat Resistance Chip 和 Scout Ray Chassis。',
    },
    eyebrow: 'Subnautica 2 电子材料链',
    title: 'Subnautica 2 Advanced Wiring Kit 指南',
    description:
      'Advanced Wiring Kit 是电子材料开始变贵的节点。它一次吃 Wiring Kit、Gold 和 Sulfur，做早了会同时掏空三条路线。',
    quickLabel: '快速结论',
    quickAnswer:
      'Subnautica2.gg 当前把 Advanced Wiring Kit 写成锁定电子配方，在 Fabrication Station 用 Wiring Kit x1、Gold x1、Sulfur x1 制作，并列出两条解锁方式：获得 Wiring Kit 或获得 Gold。Wikily 也列出同样三种材料，但制作站写作 Fabricator。当前公开用途包括 Dedicated Core、Heat Resistance Chip 和 Scout Ray Chassis；PC Gamer 也确认 Gold 会进入 Advanced Wiring Kit 和 System Chip 推进。',
    contentsLabel: '目录',
    routeTitle: 'Advanced Wiring Kit 规划路线',
    routeSteps: [
      {
        title: '通过 Gold 或 Wiring Kit 解锁',
        body: 'Subnautica2.gg 当前列出两个解锁路径：获得 Wiring Kit 或获得 Gold。如果配方没出现，先检查这两个材料，而不是直接找另一个扫描点。',
      },
      {
        title: '先做普通 Wiring Kit',
        body: 'Advanced Wiring Kit 的第一层就是 Wiring Kit，所以会倒回 Silver 和 Copper Wire。Silver 已经紧张时，先别急着合成。',
      },
      {
        title: 'Gold 要从稳定热区路线带回来',
        body: 'PC Gamer 把 Gold 指向 Lifepod 东方火山热泉区域，并把它描述成需要一定进度的路线。如果 Thermal Plant 或 System Chip 也在等，第一块 Gold 别随手花掉。',
      },
      {
        title: '留一块 Sulfur',
        body: 'Subnautica2.gg 和 Wikily 都写到 Sulfur x1。这意味着它会和 Repair Tool 或 Strong Acid 路线竞争，取决于你当前存档在推什么。',
      },
      {
        title: '制作站以 PDA 为准',
        body: 'Subnautica2.gg 写 Fabrication Station，Wikily 写 Fabricator。材料清单一致；抢先体验更新后，最终看游戏内 PDA 最稳。',
      },
      {
        title: '只为明确用途制作',
        body: '当前公开用途主要看 Dedicated Core、Heat Resistance Chip 和 Scout Ray Chassis。下一个配方还没出现时，原料分开存更灵活。',
      },
    ],
    tableTitle: 'Advanced Wiring Kit 检查表',
    tableHeaders: ['需要什么', '确认什么'],
    tableRows: [
      ['Wiring Kit x1', '会倒回 Silver 和 Copper Wire。'],
      ['Gold x1', '还会和 System Chip、Thermal Plant 规划竞争。'],
      ['Sulfur x1', '可能和 Repair Tool、Strong Acid 路线竞争。'],
      [
        '制作站',
        'Subnautica2.gg 写 Fabrication Station；Wikily 写 Fabricator。',
      ],
      ['解锁', 'Subnautica2.gg 当前路径：获得 Wiring Kit 或获得 Gold。'],
      ['用途', 'Dedicated Core、Heat Resistance Chip 和 Scout Ray Chassis。'],
    ],
    visualTitle: '电子链卡片',
    visualItems: [
      {
        label: '底层件',
        value: 'Wiring Kit',
        note: '下面还藏着 Silver 和 Copper Wire。',
      },
      {
        label: '路线件',
        value: 'Gold',
        note: '热区材料，同时也被供电路线抢。',
      },
      {
        label: '风险件',
        value: 'Sulfur',
        note: '花之前检查 Repair Tool 和 Strong Acid。',
      },
    ],
    cautionTitle: '它不是随手做的小升级',
    cautionBody:
      'Advanced Wiring Kit 看起来只是一个成品零件，但它会吃掉三条路线。最好等下一张配方明确要求它，再把材料合在一起。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Advanced Wiring Kit 怎么做？',
        body: 'Subnautica2.gg 和 Wikily 当前材料一致：Wiring Kit x1、Gold x1、Sulfur x1。制作站写法略有差异：Fabrication Station 和 Fabricator。',
      },
      {
        title: 'Advanced Wiring Kit 怎么解锁？',
        body: 'Subnautica2.gg 当前列出两条解锁方式：获得 Wiring Kit 或获得 Gold。',
      },
      {
        title: 'Advanced Wiring Kit 有什么用？',
        body: '当前公开资料列出 Dedicated Core、Heat Resistance Chip 和 Scout Ray Chassis。',
      },
      {
        title: '前期要不要先做一个备用？',
        body: '通常不用。等明确配方要求 Advanced Wiring Kit 时再做，Wiring Kit、Gold 和 Sulfur 分开存更灵活。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2WiringKit, label: 'Wiring Kit 指南' },
      { href: Routes.Subnautica2Gold, label: 'Gold 位置指南' },
      { href: Routes.Subnautica2Sulfur, label: 'Sulfur 位置指南' },
      { href: Routes.Subnautica2SystemChip, label: 'System Chip 指南' },
      { href: Routes.Subnautica2GoldIngot, label: 'Gold Ingot 指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 27 日核对 Subnautica2.gg、Wikily 和 PC Gamer。Subnautica 2 仍处于抢先体验阶段，制作站名称、解锁方式和用途列表都可能随补丁调整。',
    cardKicker: '电子材料卡',
    cardBody:
      'Wiring Kit x1、Gold x1、Sulfur x1、解锁方式、制作站写法、Dedicated Core、Heat Resistance Chip 和 Scout Ray Chassis。',
    cardTypeLabel: '类型',
    cardTypeValue: '电子材料',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = advancedWiringKitCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  advancedWiringKitCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Advanced Wiring Kit Guide',
      description:
        'Guide for Advanced Wiring Kit recipe, Wiring Kit x1, Gold x1, Sulfur x1, unlock paths, and current uses.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = advancedWiringKitCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2AdvancedWiringKit,
  });
}

export default async function AdvancedWiringKitGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = advancedWiringKitCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={CableIcon}
      locale={locale}
      pathname={Routes.Subnautica2AdvancedWiringKit}
      sources={sharedSources}
    />
  );
}
