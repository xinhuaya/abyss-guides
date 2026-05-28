import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { GemIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type TitaniumCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-29';

const sharedSources = [
  {
    href: 'https://subnautica2hub.com/resources/titanium',
    label: 'Subnautica2Hub Titanium resource page',
  },
  {
    href: 'https://subnautica2.gg/items/titanium',
    label: 'Subnautica2.gg Titanium item page',
  },
  {
    href: 'https://www.dexerto.com/wikis/subnautica-2/resources/titanium/',
    label: 'Dexerto Titanium resource guide',
  },
];

const titaniumCopy: Record<string, TitaniumCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Titanium Location Guide - Early Nodes, Salvage, and Base Storage',
      description:
        'A practical Subnautica 2 Titanium guide covering Coral Gardens, Observatory Ruins, Sparse Plains, hand-broken nodes, Sonic Resonator deposits, Metal Salvage, Titanium Ingot, and base-building storage.',
    },
    eyebrow: 'Subnautica 2 resource route',
    title: 'Subnautica 2 Titanium Location Guide',
    description:
      'Titanium is the material you stop respecting right before the base menu empties your locker. Pick it up early, split raw stock from ingot stock, and stop pretending one stack is enough.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Subnautica2Hub lists Titanium in Coral Gardens, Observatory Ruins, and Sparse Plains at 0-350m, with hand-broken Titanium Nodes and higher-yield Titanium Deposits for Sonic Resonator. Dexerto says small Titanium nodes appear across the seabed from the start, Metal Salvage near wrecks can be processed into Salvaged Titanium for four Titanium per piece, and Scanner Station can track deposits around your base. Subnautica2.gg lists Titanium as crafted from Salvaged Titanium or through Processor / Fabrication Station data and used across a very large crafting list, including Titanium Ingot and habitat pieces.',
    fieldNotesTitle: 'Field notes for Titanium stock',
    fieldNotes: [
      {
        title: 'The shortage comes from confidence',
        body: 'Titanium feels endless until you build lockers, hatches, stations, and a few ingots in the same evening. If the base plan is growing, assume your current stack is smaller than it looks.',
      },
      {
        title: 'Salvage is the cleaner early refill',
        body: 'When a wreck route offers Metal Salvage, take it home instead of passing it for another loose node. One processed piece can do more for the base than several scattered pickups.',
      },
      {
        title: 'Raw Titanium deserves its own box',
        body: 'Ingot chains are useful, but raw Titanium is what stops small base jobs from stalling. A labeled loose-stock box prevents accidental over-compression.',
      },
    ],
    routeChecklistTitle: 'Before using Titanium',
    routeChecklist: [
      'Keep one raw Titanium box separate from Titanium Ingot stock.',
      'Leave backpack slots open for Metal Salvage on wreck routes.',
      'Use Sonic Resonator deposits once pebble picking starts feeling slow.',
      'Check base parts before converting a large stack into ingots.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Titanium route plan',
    routeSteps: [
      {
        title: 'Pick up hand nodes while doing other errands',
        body: 'Dexerto describes small Titanium nodes scattered across the open seabed from the start. Do not make a special trip for the first few pieces; fold them into Copper, Silver, and Scanner errands.',
      },
      {
        title: 'Use Coral Gardens as the early default',
        body: 'Subnautica2Hub lists Coral Gardens as one of the Titanium biomes from 0-350m. It is close enough for early tool, locker, and Habitat Builder work.',
      },
      {
        title: 'Process Metal Salvage when you find wreck debris',
        body: 'Dexerto reports that Metal Salvage near wrecks can be processed into Salvaged Titanium, yielding four Titanium per piece. Wreck routes are worth an empty backpack slot.',
      },
      {
        title: 'Bring Sonic Resonator for deposits',
        body: 'Subnautica2Hub shows Titanium Deposits yielding more when processed with Sonic Resonator than hand-broken nodes. Once the tool is built, deposits beat slow pebble picking.',
      },
      {
        title: 'Keep raw Titanium separate from ingot stock',
        body: 'Titanium Ingot is useful, but a base expansion can suddenly need raw Titanium for lockers, hatches, lighting, and stations. Label the boxes before you compress everything.',
      },
    ],
    tableTitle: 'Titanium checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      ['Early biome', 'Coral Gardens nodes are reachable from the start.'],
      [
        'Other biomes',
        'Subnautica2Hub also lists Observatory Ruins and Sparse Plains.',
      ],
      ['Depth', 'Current public data lists Titanium from 0-350m.'],
      ['Bulk tool', 'Sonic Resonator improves deposit farming.'],
      [
        'Salvage',
        'Dexerto reports four Titanium from each processed Metal Salvage.',
      ],
    ],
    visualTitle: 'Titanium storage',
    visualItems: [
      {
        label: 'Raw',
        value: 'Base',
        note: 'Lockers, hatches, stations, tools.',
      },
      {
        label: 'Ingot',
        value: 'Chain',
        note: 'Compress only after raw needs are covered.',
      },
      {
        label: 'Bulk',
        value: 'Sonic',
        note: 'Deposits make the real stockpile.',
      },
    ],
    cautionTitle: 'Do not turn every piece into ingots',
    cautionBody:
      'The ingot button feels tidy, but raw Titanium is what keeps base building moving. Keep one locker for loose pieces and one for ingot chains so the next module does not stall on a silly shortage.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Where do you find Titanium early in Subnautica 2?',
        body: 'Dexerto says small Titanium nodes are scattered across the open seabed from the start, while Subnautica2Hub lists Coral Gardens as an early Titanium biome.',
      },
      {
        title: 'Do you need Sonic Resonator for Titanium?',
        body: 'Not for early hand nodes. Larger Titanium Deposits are better with Sonic Resonator, according to Subnautica2Hub yield data.',
      },
      {
        title: 'Is Metal Salvage worth collecting?',
        body: 'Yes. Dexerto reports that Metal Salvage from wreck debris can be processed into Salvaged Titanium for four Titanium per piece.',
      },
      {
        title: 'What is Titanium used for most?',
        body: 'Base building, early tools, storage, stations, and Titanium Ingot chains. Subnautica2Hub and Subnautica2.gg both show Titanium touching a very large recipe set.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2MetalSalvage, label: 'Metal Salvage Guide' },
      { href: Routes.Subnautica2TitaniumIngot, label: 'Titanium Ingot Guide' },
      { href: Routes.Subnautica2BaseBuilding, label: 'Base Building Guide' },
      {
        href: Routes.Subnautica2HabitatBuilder,
        label: 'Habitat Builder Guide',
      },
      { href: Routes.Subnautica2Beacon, label: 'Beacon Guide' },
      {
        href: Routes.Subnautica2SonicResonator,
        label: 'Sonic Resonator Guide',
      },
      {
        href: Routes.Subnautica2ScannerStation,
        label: 'Scanner Station Guide',
      },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 26, 2026 against Subnautica2Hub, Subnautica2.gg, and Dexerto. Early Access recipe counts, spawn density, and salvage processing can change; recheck the PDA and current map after patches.',
    cardKicker: 'Resource card',
    cardBody:
      'Coral Gardens nodes, Sparse Plains and Observatory Ruins data, Metal Salvage processing, Sonic Resonator deposits, raw Titanium storage, and ingot planning.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Resource guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Titanium 位置指南 - 前期节点、残骸和基地储备',
      description:
        'Subnautica 2 中文 Titanium 指南：整理 Coral Gardens、Observatory Ruins、Sparse Plains、手敲节点、Sonic Resonator 大矿、Metal Salvage、Titanium Ingot 和基地建造储备。',
    },
    eyebrow: 'Subnautica 2 资源路线',
    title: 'Subnautica 2 Titanium 位置指南',
    description:
      'Titanium 很容易被低估，直到你打开基地建造菜单，发现箱子突然空了。前期顺手捡，原矿和 ingot 分开收，别假装一组就够。',
    quickLabel: '快速结论',
    quickAnswer:
      'Subnautica2Hub 把 Titanium 列在 Coral Gardens、Observatory Ruins 和 Sparse Plains，深度为 0-350m；采集方式包括手敲 Titanium Node，以及用 Sonic Resonator 处理收获更高的 Titanium Deposit。Dexerto 说小型 Titanium 节点开局就散在海床上，沉船附近的 Metal Salvage 也能加工成 Salvaged Titanium，每块给 4 个 Titanium；Scanner Station 还能追踪基地周围的矿点。Subnautica2.gg 列出 Titanium 可由 Salvaged Titanium 或 Processor / Fabrication Station 相关数据获得，并用于 Titanium Ingot 和大量基地部件。',
    fieldNotesTitle: 'Titanium 库存笔记',
    fieldNotes: [
      {
        title: '缺货通常来自太自信',
        body: 'Titanium 看起来永远够用，直到你同一晚做储物箱、舱门、工作站和几个 ingot。只要基地计划在变大，就默认当前库存没有看起来那么多。',
      },
      {
        title: 'Metal Salvage 是更干净的早期补货',
        body: '残骸路线看到 Metal Salvage 时，别只顾着捡散节点。带回家加工，一块残骸通常比几次零散拾取更能救基地材料。',
      },
      {
        title: '原 Titanium 应该单独放',
        body: 'Ingot 链很有用，但真正让小型基地工程不卡住的是原 Titanium。单独放一个 loose stock 箱，可以避免一不小心全压成 ingot。',
      },
    ],
    routeChecklistTitle: '花 Titanium 前',
    routeChecklist: [
      '原 Titanium 和 Titanium Ingot 库存分开放。',
      '跑残骸路线时给 Metal Salvage 留背包格。',
      '手捡开始变慢后，改用 Sonic Resonator 处理大矿点。',
      '大批量压 ingot 前，先看基地部件还需要多少原 Titanium。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Titanium 路线规划',
    routeSteps: [
      {
        title: '前期顺手捡，不要专门乱跑',
        body: 'Dexerto 描述小型 Titanium 节点从开局就在开放海床上出现。最开始几块不用单独跑图，把它们并进 Copper、Silver 和 Scanner 路线就好。',
      },
      {
        title: 'Coral Gardens 是早期默认点',
        body: 'Subnautica2Hub 把 Coral Gardens 列为 Titanium 生态区之一，范围 0-350m。前期工具、储物箱和 Habitat Builder 准备都能靠它补货。',
      },
      {
        title: '看到 Metal Salvage 就留背包位',
        body: 'Dexerto 报道沉船附近的 Metal Salvage 可以加工成 Salvaged Titanium，每块给 4 个 Titanium。跑残骸路线时，空一个背包格很值得。',
      },
      {
        title: '大矿点交给 Sonic Resonator',
        body: 'Subnautica2Hub 数据里，Titanium Deposit 用 Sonic Resonator 处理的收益比手敲节点更好。工具到手后，大矿点比慢慢捡石子舒服多了。',
      },
      {
        title: '原 Titanium 和 ingot 分箱',
        body: 'Titanium Ingot 很有用，但基地扩建常常突然要原 Titanium 做 locker、hatch、灯和工作站。别把所有材料都压成 ingot。',
      },
    ],
    tableTitle: 'Titanium 检查表',
    tableHeaders: ['需要', '确认什么'],
    tableRows: [
      ['早期生态区', 'Coral Gardens 节点开局就能接触。'],
      [
        '其他生态区',
        'Subnautica2Hub 还列出 Observatory Ruins 和 Sparse Plains。',
      ],
      ['深度', '当前公开资料列出 0-350m。'],
      ['批量工具', 'Sonic Resonator 更适合处理大矿点。'],
      ['残骸', 'Dexerto 报道每块 Metal Salvage 可加工出 4 个 Titanium。'],
    ],
    visualTitle: 'Titanium 收纳',
    visualItems: [
      {
        label: '原矿',
        value: '基地',
        note: '箱子、舱门、工作站、工具。',
      },
      {
        label: 'Ingot',
        value: '材料链',
        note: '先满足原矿需求，再压缩。',
      },
      {
        label: '批量',
        value: 'Sonic',
        note: '大矿点才是真库存。',
      },
    ],
    cautionTitle: '不要把所有 Titanium 都压成 ingot',
    cautionBody:
      '压成 ingot 看起来很整齐，但基地建造真正卡人的常常是原 Titanium。建议一个箱子放散件，一个箱子放 ingot 链，下一次扩建前不容易被小材料卡住。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 前期 Titanium 在哪里？',
        body: 'Dexerto 说小型 Titanium 节点开局就散布在开放海床上；Subnautica2Hub 也把 Coral Gardens 列为早期 Titanium 生态区。',
      },
      {
        title: 'Titanium 需要 Sonic Resonator 吗？',
        body: '前期手敲节点不需要。较大的 Titanium Deposit 用 Sonic Resonator 收益更好，这是 Subnautica2Hub 当前数据里的结论。',
      },
      {
        title: 'Metal Salvage 值得捡吗？',
        body: '值得。Dexerto 报道沉船残骸里的 Metal Salvage 可以加工成 Salvaged Titanium，每块给 4 个 Titanium。',
      },
      {
        title: 'Titanium 主要用来做什么？',
        body: '基地建造、早期工具、储物、工作站和 Titanium Ingot 链。Subnautica2Hub 和 Subnautica2.gg 都显示 Titanium 涉及大量配方。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2MetalSalvage, label: 'Metal Salvage 指南' },
      { href: Routes.Subnautica2TitaniumIngot, label: 'Titanium Ingot 指南' },
      { href: Routes.Subnautica2BaseBuilding, label: '基地建造指南' },
      { href: Routes.Subnautica2HabitatBuilder, label: 'Habitat Builder 指南' },
      { href: Routes.Subnautica2Beacon, label: 'Beacon 指南' },
      { href: Routes.Subnautica2SonicResonator, label: 'Sonic Resonator 指南' },
      { href: Routes.Subnautica2ScannerStation, label: 'Scanner Station 指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 26 日核对 Subnautica2Hub、Subnautica2.gg 和 Dexerto。抢先体验阶段配方数量、生成密度和残骸加工规则都可能变化；更新后请以 PDA 和当前地图为准。',
    cardKicker: '资源卡',
    cardBody:
      'Coral Gardens 节点、Sparse Plains 和 Observatory Ruins 数据、Metal Salvage 加工、Sonic Resonator 大矿、原 Titanium 收纳和 ingot 规划。',
    cardTypeLabel: '类型',
    cardTypeValue: '资源指南',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = titaniumCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  titaniumCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Titanium Location Guide',
      description:
        'Guide for Titanium locations, Coral Gardens, Observatory Ruins, Sparse Plains, Metal Salvage, Sonic Resonator deposits, Titanium Ingot, and base-building storage.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = titaniumCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2Titanium,
  });
}

export default async function TitaniumGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = titaniumCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={GemIcon}
      locale={locale}
      pathname={Routes.Subnautica2Titanium}
      sources={sharedSources}
    />
  );
}
