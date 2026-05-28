import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { BoxesIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type TitaniumIngotCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-23';
const UPDATED_AT = '2026-05-28';

const sharedSources = [
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-titanium-ingots/',
    label: 'PC Gamer Titanium Ingot guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-metal-farm-scan-locations/',
    label: 'PC Gamer Metal Farm guide',
  },
  {
    href: 'https://subnautica2.gg/blueprints/titanium-ingot',
    label: 'Subnautica2.gg Titanium Ingot blueprint',
  },
];

const titaniumIngotCopy: Record<string, TitaniumIngotCopy> = {
  en: {
    metadata: {
      title:
        'How to Make Titanium Ingots in Subnautica 2 - Processor and Mangalloy Prep',
      description:
        'Make Titanium Ingots in Subnautica 2 with Processor notes, Titanium farming priorities, Mangalloy links, raw Titanium storage, and crafting-chain warnings.',
    },
    eyebrow: 'Subnautica 2 processor material',
    title: 'How to Make Titanium Ingots in Subnautica 2',
    description:
      'Titanium Ingots are where basic construction material stops being background noise and becomes a real crafting-chain input. The trick is not making them. The trick is not processing the Titanium you still need for base pieces.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Make Titanium Ingots by processing Titanium once the Processor is available. PC Gamer ties Titanium Ingots into later crafting chains, including Mangalloy Ingot production, so stockpile raw Titanium before converting it. Use Metal Farm and ordinary Titanium routes to build a buffer, then process only what the next recipe needs.',
    fieldNotesTitle: 'Field notes for ingot timing',
    fieldNotes: [
      {
        title: 'Raw Titanium still pays the bills',
        body: 'Base pieces, storage, and utility crafts keep asking for loose Titanium. If your base is still expanding, do not turn the whole locker into ingots just because the Processor can.',
      },
      {
        title: 'Process against a named recipe',
        body: 'An ingot is less flexible than raw metal. Make it when Mangalloy or another visible chain asks for it, not when you are simply tidying a locker.',
      },
      {
        title: 'Metal Farm changes the math',
        body: 'Once Metal Farm scanning is handled, raw Titanium becomes easier to replace. Before that, every ingot should feel like a small decision.',
      },
    ],
    routeChecklistTitle: 'Before processing Titanium',
    routeChecklist: [
      'Base expansion and storage pieces already have enough raw Titanium.',
      'Processor is unlocked and placed near material storage.',
      'The next recipe actually needs Titanium Ingot.',
      'Raw Titanium and ingots are stored in separate lockers.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Titanium Ingot processing route',
    routeSteps: [
      {
        title: 'Build a raw Titanium buffer',
        body: 'Titanium is still the foundation material for early building and repeat crafting. Before processing, make sure base modules, lockers, and tool routes are not about to stall.',
      },
      {
        title: 'Unlock and place the Processor',
        body: 'Titanium Ingots are a processed material. Put the Processor near storage so you can count raw input, finished ingots, and later alloy chains without walking across the base every time.',
      },
      {
        title: 'Use Metal Farm to steady supply',
        body: 'PC Gamer points Metal Farm scans toward a cleaner Titanium loop. Once that route is known, converting part of the stock into ingots feels much safer.',
      },
      {
        title: 'Reserve ingots for advanced chains',
        body: 'PC Gamer reports Titanium Ingots as part of Mangalloy Ingot crafting, which makes them part of rare-material planning later on. Do not spend them as soon as they exist.',
      },
      {
        title: 'Separate raw and processed storage',
        body: 'Use one locker for loose Titanium and another for ingots. Recipe math gets messy fast once processed materials start nesting.',
      },
    ],
    tableTitle: 'Titanium Ingot planning table',
    tableHeaders: ['Crafting role', 'Planning note'],
    tableRows: [
      [
        'Processed material',
        'Used when recipes need compressed Titanium rather than loose pieces.',
      ],
      ['Mangalloy input', 'Reported as one part of the Mangalloy Ingot chain.'],
      ['Base pacing', 'Do not process so much that base expansion stalls.'],
      [
        'Metal Farm route',
        'Makes raw Titanium easier to replace once scanned and understood.',
      ],
      [
        'Locker split',
        'Separate loose Titanium, ingots, and later alloys before counts blur.',
      ],
    ],
    visualTitle: 'Metal processing chain',
    visualItems: [
      {
        label: 'Gather',
        value: 'Titanium',
        note: 'Keep loose stock for base parts.',
      },
      {
        label: 'Process',
        value: 'Ingot',
        note: 'Use the Processor only when the next recipe needs it.',
      },
      {
        label: 'Reserve',
        value: 'Alloy',
        note: 'Mangalloy and later chains can pull from ingot stock.',
      },
    ],
    cautionTitle: 'Keep raw Titanium for base pieces',
    cautionBody:
      'Processed ingots are useful, but raw Titanium still feeds building, storage, and utility recipes. Process only what the next recipe actually needs.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you make Titanium Ingots in Subnautica 2?',
        body: 'Use the Processor to convert raw Titanium into Titanium Ingots once the station is available. Keep enough loose Titanium for base and tool needs before processing.',
      },
      {
        title: 'Should you process all Titanium into ingots?',
        body: 'No. Keep raw Titanium for base pieces and only process what your next recipe needs. Ingots are useful, but they are less flexible than loose Titanium.',
      },
      {
        title: 'What are Titanium Ingots used for?',
        body: 'Current PC Gamer coverage connects Titanium Ingots to later crafting chains, including Mangalloy Ingot production.',
      },
      {
        title: 'When should you start making ingots?',
        body: 'Start once the Processor is ready and your raw Titanium supply is stable. Metal Farm scanning makes the conversion less risky.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Titanium, label: 'Titanium Location Guide' },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm Guide' },
      { href: Routes.Subnautica2Processor, label: 'Processor Guide' },
      { href: Routes.Subnautica2Mangalloy, label: 'Mangalloy Ingot Guide' },
      { href: Routes.Subnautica2PlasteelIngot, label: 'Plasteel Ingot Guide' },
      { href: Routes.Subnautica2CopperIngot, label: 'Copper Ingot Guide' },
      { href: Routes.Subnautica2GoldIngot, label: 'Gold Ingot Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
      {
        href: Routes.Subnautica2EngineEfficiency,
        label: 'Engine Efficiency Guide',
      },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 28, 2026 against PC Gamer Titanium Ingot and Metal Farm coverage plus Subnautica2.gg blueprint data. Subnautica 2 is in Early Access, so processing stations, input counts, and alloy uses should be rechecked after patches.',
    cardKicker: 'Processor material card',
    cardBody:
      'Raw Titanium buffer, Processor timing, Metal Farm supply, Mangalloy links, and storage separation.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Processed material',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Titanium Ingot 指南 - Processor 与 Mangalloy 准备',
      description:
        'Subnautica 2 中文 Titanium Ingot 指南：整理 Processor 加工、Titanium 收集优先级、Mangalloy 链接、原始 Titanium 收纳和制作链提醒。',
    },
    eyebrow: 'Subnautica 2 加工材料',
    title: 'Subnautica 2 Titanium Ingot 制作指南',
    description:
      'Titanium Ingot 是基础建材开始进入高级材料链的节点。难点不是做出 ingot，而是别把还要拿来扩基地、做箱子和工具的 raw Titanium 全部加工掉。',
    quickLabel: '快速结论',
    quickAnswer:
      'Titanium Ingot 需要在 Processor 可用后，用 Titanium 加工制作。PC Gamer 把 Titanium Ingot 和后续 Mangalloy Ingot 制作链联系在一起，所以加工前先囤一部分 raw Titanium。Metal Farm 和普通 Titanium 路线稳定后，再按下一个配方需求加工。',
    fieldNotesTitle: 'Titanium Ingot 加工笔记',
    fieldNotes: [
      {
        title: 'Raw Titanium 还是最常用',
        body: '基地模块、箱子和实用工具仍然会反复要散装 Titanium。如果基地还在扩建，不要因为 Processor 能加工，就把整箱材料都变成 ingot。',
      },
      {
        title: '按明确配方加工',
        body: 'Ingot 没有 raw metal 灵活。等 Mangalloy 或其他明确配方真的需要，再加工，不要只是为了让箱子看起来整齐。',
      },
      {
        title: 'Metal Farm 会改变节奏',
        body: 'Metal Farm 扫描完成后，raw Titanium 更容易补回来。在那之前，每做一个 ingot 都最好有理由。',
      },
    ],
    routeChecklistTitle: '加工 Titanium 前',
    routeChecklist: [
      '基地扩建和箱子已经留够 raw Titanium。',
      'Processor 已经解锁，并靠近材料收纳区。',
      '下一个配方确实需要 Titanium Ingot。',
      'Raw Titanium 和 ingot 分开放箱子。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Titanium Ingot 加工路线',
    routeSteps: [
      {
        title: '先建立 raw Titanium 缓冲',
        body: 'Titanium 仍然是前期建造和重复制作的基础材料。加工前先确认基地模块、储物箱和工具路线不会因为缺散装 Titanium 停住。',
      },
      {
        title: '解锁并放置 Processor',
        body: 'Titanium Ingot 属于加工材料。Processor 最好放在材料箱附近，这样 raw input、成品 ingot 和后续 alloy 链都更好算。',
      },
      {
        title: '用 Metal Farm 稳定供应',
        body: 'PC Gamer 把 Metal Farm 扫描指向更稳定的 Titanium 循环。知道这条路线后，再把部分库存转成 ingot 会安全很多。',
      },
      {
        title: '把 ingot 留给高级链',
        body: 'PC Gamer 把 Titanium Ingot 写进 Mangalloy Ingot 制作链，所以它后面会进入稀有材料规划。不要刚做出来就随手花掉。',
      },
      {
        title: 'Raw 和 processed 分开收纳',
        body: '一个箱子放散装 Titanium，一个箱子放 ingot。等加工材料开始互相嵌套时，这个习惯会省很多计算时间。',
      },
    ],
    tableTitle: 'Titanium Ingot 规划表',
    tableHeaders: ['制作角色', '规划提醒'],
    tableRows: [
      ['加工材料', '配方需要压缩 Titanium 时使用，而不是普通散装材料。'],
      ['Mangalloy 输入', '当前资料把它列为 Mangalloy Ingot 链的一部分。'],
      ['基地节奏', '不要加工太多，导致基地扩建卡住。'],
      ['Metal Farm 路线', '扫描并熟悉后，raw Titanium 更容易补回来。'],
      ['箱子分区', '散装 Titanium、ingot 和后续合金最好提前分开。'],
    ],
    visualTitle: '金属加工链',
    visualItems: [
      {
        label: '收集',
        value: 'Titanium',
        note: '散装材料要留给基地和工具。',
      },
      {
        label: '加工',
        value: 'Ingot',
        note: '只有下个配方需要时再用 Processor。',
      },
      {
        label: '预留',
        value: 'Alloy',
        note: 'Mangalloy 等后续链会吃 ingot 库存。',
      },
    ],
    cautionTitle: '给基地保留 raw Titanium',
    cautionBody:
      '加工后的 ingot 很有用，但 raw Titanium 仍然会进入建造、收纳和实用工具配方。只加工下一个配方真正需要的数量。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Titanium Ingot 怎么做？',
        body: 'Processor 可用后，用 raw Titanium 加工成 Titanium Ingot。加工前先给基地和工具留够散装 Titanium。',
      },
      {
        title: '要不要把所有 Titanium 都加工成 ingot？',
        body: '不要。Raw Titanium 对基地和工具更灵活，只加工下一个配方真正需要的数量。',
      },
      {
        title: 'Titanium Ingot 有什么用？',
        body: '当前 PC Gamer 资料把 Titanium Ingot 和后续制作链联系起来，包括 Mangalloy Ingot 生产。',
      },
      {
        title: '什么时候开始做 ingot 比较合适？',
        body: 'Processor 准备好、raw Titanium 供应稳定后再开始。Metal Farm 扫描完成后，加工风险会低很多。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Titanium, label: 'Titanium 位置指南' },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm 指南' },
      { href: Routes.Subnautica2Processor, label: 'Processor 指南' },
      { href: Routes.Subnautica2Mangalloy, label: 'Mangalloy Ingot 指南' },
      { href: Routes.Subnautica2PlasteelIngot, label: 'Plasteel Ingot 指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 28 日核对 PC Gamer 的 Titanium Ingot 与 Metal Farm 资料，以及 Subnautica2.gg 的蓝图数据。Subnautica 2 仍在抢先体验，加工站、输入数量和合金用途都可能随补丁调整。',
    cardKicker: '加工材料卡',
    cardBody:
      'Raw Titanium 缓冲、Processor 时机、Metal Farm 供应、Mangalloy 链接和收纳分区。',
    cardTypeLabel: '类型',
    cardTypeValue: '加工材料',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

titaniumIngotCopy.ja = {
  ...titaniumIngotCopy.en,
  metadata: {
    title: 'How to Make Titanium Ingots in Subnautica 2',
    description:
      'Guide for Titanium Ingots, Processor timing, raw Titanium storage, Metal Farm supply, and Mangalloy prep.',
  },
  sourceBody:
    'Checked May 28, 2026 against PC Gamer Titanium Ingot and Metal Farm coverage plus Subnautica2.gg blueprint data.',
};

const fallbackLocaleAliases = {
  de: {
    title: 'How to Make Titanium Ingots in Subnautica 2',
    description:
      'Guide for Titanium Ingots, Processor timing, raw Titanium storage, Metal Farm supply, and Mangalloy prep.',
  },
  fr: {
    title: 'How to Make Titanium Ingots in Subnautica 2',
    description:
      'Guide Titanium Ingot: Processor, Titanium brut, Metal Farm et Mangalloy.',
  },
  'pt-BR': {
    title: 'How to Make Titanium Ingots in Subnautica 2',
    description:
      'Guia de Titanium Ingot com Processor, Titanium bruto, Metal Farm e Mangalloy.',
  },
  'es-419': {
    title: 'How to Make Titanium Ingots in Subnautica 2',
    description:
      'Guia de Titanium Ingot: Processor, Titanium bruto, Metal Farm y Mangalloy.',
  },
  ko: {
    title: 'How to Make Titanium Ingots in Subnautica 2',
    description:
      'Titanium Ingots, Processor timing, raw Titanium storage, Metal Farm supply, and Mangalloy prep.',
  },
  ru: {
    title: 'How to Make Titanium Ingots in Subnautica 2',
    description:
      'Guide for Titanium Ingots, Processor timing, raw Titanium storage, Metal Farm supply, and Mangalloy prep.',
  },
} satisfies Record<string, { title: string; description: string }>;

function getCopy(locale: Locale): TitaniumIngotCopy {
  if (titaniumIngotCopy[locale]) {
    return titaniumIngotCopy[locale];
  }

  const fallback =
    fallbackLocaleAliases[locale as keyof typeof fallbackLocaleAliases] ??
    fallbackLocaleAliases.de;

  return {
    ...titaniumIngotCopy.en,
    metadata: {
      title: fallback.title,
      description: fallback.description,
    },
    title: fallback.title,
    description: fallback.description,
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = getCopy(locale);

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2TitaniumIngot,
  });
}

export default async function TitaniumIngotGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={BoxesIcon}
      locale={locale}
      pathname={Routes.Subnautica2TitaniumIngot}
      sources={sharedSources}
    />
  );
}
