import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { CoinsIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type GoldIngotCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-29';

const sharedSources = [
  {
    href: 'https://subnautica2.gg/blueprints/gold-ingot',
    label: 'Subnautica2.gg Gold Ingot blueprint',
  },
  {
    href: 'https://wikily.gg/subnautica-2/items/gold-ingot/',
    label: 'Wikily Gold Ingot item page',
  },
  {
    href: 'https://www.gamesradar.com/games/survival/subnautica-2-ingots/',
    label: 'GamesRadar Subnautica 2 ingots guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-gold-location/',
    label: 'PC Gamer Gold location guide',
  },
];

const goldIngotCopy: Record<string, GoldIngotCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Gold Ingot Guide - Recipe, Processor, and Power Uses',
      description:
        'A practical Subnautica 2 Gold Ingot guide covering Gold x3, Processor crafting, Entangled Power Cell, Fabrication Station, Gold route prep, and when to keep raw Gold.',
    },
    eyebrow: 'Subnautica 2 processed material',
    title: 'Subnautica 2 Gold Ingot Guide',
    description:
      'Gold Ingot is easy to over-trust because the recipe is clean. The mistake is processing every Gold piece before you know whether the next craft wants raw Gold, an ingot, or another electronics part.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current Subnautica2.gg data lists Gold Ingot as a Processor craft that produces Gold Ingot x1 from Gold x3 after obtaining Gold. Wikily also lists Gold Ingot at the Processor with Gold x3, and GamesRadar reports the 3x Gold ingot recipe. Subnautica2.gg currently lists Entangled Power Cell and Fabrication Station as Gold Ingot uses, while PC Gamer notes raw Gold still matters for Advanced Wiring Kit, System Chip progress, and Thermal Plant planning.',
    fieldNotesTitle: 'Field notes for Gold compression',
    fieldNotes: [
      {
        title: 'Gold has a raw-material life first',
        body: 'A Gold Ingot is useful, but raw Gold still feeds electronics and progression. If System Chip or Advanced Wiring Kit is next, do not compress the last clean stack.',
      },
      {
        title: 'Craft ingots for named upgrades',
        body: 'Entangled Power Cell and Fabrication Station are real reasons to make one. A vague “later” pile is how Gold disappears before the electronics bench is ready.',
      },
      {
        title: 'Keep power parts together',
        body: 'Once a Gold Ingot is made, store it with rare power materials instead of loose ore. That keeps the upgrade chain visible when you return from the next route.',
      },
    ],
    routeChecklistTitle: 'Before making Gold Ingot',
    routeChecklist: [
      'Protect raw Gold for System Chip and Advanced Wiring Kit needs.',
      'Make Gold Ingot only for a named power or station recipe.',
      'Keep the finished ingot beside Entangled Power Cell materials.',
      'Do not spend all Gold before checking Thermal Plant planning.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Gold Ingot planning route',
    routeSteps: [
      {
        title: 'Unlock with a real Gold pickup',
        body: 'Subnautica2.gg says Gold Ingot unlocks after you obtain Gold. If the ingot recipe is missing, solve the hot-zone Gold route first.',
      },
      {
        title: 'Do not process your first stack blind',
        body: 'Raw Gold feeds electronics and power planning. Keep a few pieces loose before turning three into one ingot.',
      },
      {
        title: 'Craft at the Processor',
        body: 'Subnautica2.gg, Wikily, and GamesRadar all point to Processor-based ingot crafting. This belongs in the base processing loop, not the basic Fabricator.',
      },
      {
        title: 'Match the ingot to a visible recipe',
        body: 'Current Subnautica2.gg pages list Entangled Power Cell and Fabrication Station as uses. If neither is visible in your PDA yet, the ingot can probably wait.',
      },
      {
        title: 'Plan the Gold route before batching',
        body: 'PC Gamer points Gold farming toward the volcanic vent region east of the Lifepod and frames it as a progressed route. Build one ingot, then decide whether you can repeat the farm safely.',
      },
    ],
    tableTitle: 'Gold Ingot checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      ['Gold x3', 'Current public recipe count for one Gold Ingot.'],
      [
        'Processor',
        'Listed station in Subnautica2.gg, Wikily, and GamesRadar.',
      ],
      [
        'Raw Gold reserve',
        'Advanced Wiring Kit, System Chip, and Thermal Plant still compete.',
      ],
      ['Entangled Power Cell', 'Current Subnautica2.gg listed use.'],
      ['Fabrication Station', 'Current Subnautica2.gg listed use.'],
      ['Patch check', 'Confirm the PDA after Early Access updates.'],
    ],
    visualTitle: 'Gold split card',
    visualItems: [
      {
        label: 'Input',
        value: '3 Gold',
        note: 'One ingot, three raw pieces gone.',
      },
      {
        label: 'Station',
        value: 'Processor',
        note: 'Part of the base processing chain.',
      },
      {
        label: 'Reserve',
        value: 'Raw Gold',
        note: 'Thermal power and electronics still need it.',
      },
    ],
    cautionTitle: 'Gold has two jobs: electronics and processed parts',
    cautionBody:
      'If you make every Gold piece into ingots, Advanced Wiring Kit or Thermal Plant planning can still stall. Process Gold only when the ingot recipe is the next visible craft.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you make Gold Ingot in Subnautica 2?',
        body: 'Current Subnautica2.gg, Wikily, and GamesRadar data point to Gold x3 at the Processor.',
      },
      {
        title: 'How do you unlock Gold Ingot?',
        body: 'Subnautica2.gg says the blueprint unlocks after obtaining Gold. Pick up Gold first, then check the Processor.',
      },
      {
        title: 'What is Gold Ingot used for?',
        body: 'Subnautica2.gg currently lists Entangled Power Cell and Fabrication Station as Gold Ingot uses.',
      },
      {
        title: 'Should I turn all Gold into ingots?',
        body: 'No. PC Gamer notes raw Gold matters for Advanced Wiring Kit, System Chip progress, and Thermal Plant planning, so keep a raw reserve.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Gold, label: 'Gold Location Guide' },
      {
        href: Routes.Subnautica2EntangledPowerCell,
        label: 'Entangled Power Cell Guide',
      },
      { href: Routes.Subnautica2Processor, label: 'Processor Guide' },
      { href: Routes.Subnautica2SystemChip, label: 'System Chip Guide' },
      { href: Routes.Subnautica2HeatTolerance, label: 'Heat Tolerance Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 26, 2026 against Subnautica2.gg, Wikily, GamesRadar, and PC Gamer. Subnautica 2 is in Early Access, so Processor station, Gold route safety, and listed uses can change after patches.',
    cardKicker: 'Material chain card',
    cardBody:
      'Gold x3, Processor conversion, raw Gold reserve, Entangled Power Cell, Fabrication Station, and power-route planning.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Processed material',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Gold Ingot 指南 - 配方、Processor 和供电用途',
      description:
        'Subnautica 2 中文 Gold Ingot 指南：整理 Gold x3、Processor 制作、Entangled Power Cell、Fabrication Station、Gold 路线准备和原始 Gold 留存。',
    },
    eyebrow: 'Subnautica 2 加工材料',
    title: 'Subnautica 2 Gold Ingot 指南',
    description:
      'Gold Ingot 的配方看起来很干净，所以更容易被误用。真正的问题不是会不会做，而是下一张蓝图到底要原始 Gold、ingot，还是另一层电子零件。',
    quickLabel: '快速结论',
    quickAnswer:
      'Subnautica2.gg 当前把 Gold Ingot 写成 Processor 配方：获得 Gold 后解锁，用 Gold x3 产出 Gold Ingot x1。Wikily 也列出 Processor + Gold x3，GamesRadar 的 ingot 总表同样写到 3x Gold。Subnautica2.gg 当前列出的用途是 Entangled Power Cell 和 Fabrication Station；PC Gamer 则提醒原始 Gold 还会进入 Advanced Wiring Kit、System Chip 推进和 Thermal Plant 规划。',
    fieldNotesTitle: 'Gold 压 ingot 笔记',
    fieldNotes: [
      {
        title: 'Gold 先有原材料用途',
        body: 'Gold Ingot 有价值，但原 Gold 仍然会进电子材料和进度链。如果下一步是 System Chip 或 Advanced Wiring Kit，不要把最后一组干净库存压掉。',
      },
      {
        title: '有明确升级再加工',
        body: 'Entangled Power Cell 和 Fabrication Station 是明确理由。只是想着“以后会用”，很容易让 Gold 在电子材料准备好之前就消失。',
      },
      {
        title: '成品放到电力材料旁边',
        body: 'Gold Ingot 做出来后，放在稀有电力材料箱里，不要混进散矿。下一趟回来时，升级链会更清楚。',
      },
    ],
    routeChecklistTitle: '制作 Gold Ingot 前',
    routeChecklist: [
      '先保护 System Chip 和 Advanced Wiring Kit 需要的原 Gold。',
      '只有明确要做电力或工作站配方时，再压 Gold Ingot。',
      '成品 ingot 放在 Entangled Power Cell 材料旁边。',
      '花光 Gold 前检查 Thermal Plant 规划是否也要用。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Gold Ingot 规划路线',
    routeSteps: [
      {
        title: '先真正拿到 Gold',
        body: 'Subnautica2.gg 写到 Gold Ingot 会在获得 Gold 后解锁。如果 Processor 里没有配方，先去解决热区 Gold 路线。',
      },
      {
        title: '别把第一批 Gold 盲目加工',
        body: '原始 Gold 还要给电子件和供电路线用。把 3 个 Gold 合成 1 个 ingot 之前，先留几块原料。',
      },
      {
        title: '在 Processor 制作',
        body: 'Subnautica2.gg、Wikily 和 GamesRadar 当前都指向 Processor。Gold Ingot 属于基地加工链，不是在基础 Fabricator 里做。',
      },
      {
        title: '让 ingot 对应可见配方',
        body: 'Subnautica2.gg 当前列出 Entangled Power Cell 和 Fabrication Station。PDA 里还没看到目标配方时，Gold Ingot 可以先等等。',
      },
      {
        title: '批量前先确认 Gold 路线',
        body: 'PC Gamer 把 Gold 指向 Lifepod 东方火山热泉区域，并强调这是需要进度支撑的路线。先做一块，再判断这条路线能不能稳定重复。',
      },
    ],
    tableTitle: 'Gold Ingot 检查表',
    tableHeaders: ['需要什么', '确认什么'],
    tableRows: [
      ['Gold x3', '当前公开资料里一块 Gold Ingot 的材料数量。'],
      [
        'Processor',
        'Subnautica2.gg、Wikily 和 GamesRadar 当前都列出这个制作站。',
      ],
      [
        '原始 Gold 储备',
        'Advanced Wiring Kit、System Chip 和 Thermal Plant 仍会竞争。',
      ],
      ['Entangled Power Cell', 'Subnautica2.gg 当前列出的用途。'],
      ['Fabrication Station', 'Subnautica2.gg 当前列出的用途。'],
      ['补丁检查', '抢先体验更新后，回到 PDA 重新确认。'],
    ],
    visualTitle: 'Gold 分配卡',
    visualItems: [
      {
        label: '输入',
        value: '3 Gold',
        note: '一块 ingot 会吃掉三块原料。',
      },
      {
        label: '设备',
        value: 'Processor',
        note: '属于基地加工链。',
      },
      {
        label: '保留',
        value: '原始 Gold',
        note: '供电和电子件还会要它。',
      },
    ],
    cautionTitle: 'Gold 同时服务电子件和加工件',
    cautionBody:
      '如果把所有 Gold 都做成 ingot，Advanced Wiring Kit 或 Thermal Plant 仍然可能卡住。只有下一张明确配方需要 Gold Ingot 时再加工。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Gold Ingot 怎么做？',
        body: 'Subnautica2.gg、Wikily 和 GamesRadar 当前都指向 Processor，材料是 Gold x3。',
      },
      {
        title: 'Gold Ingot 怎么解锁？',
        body: 'Subnautica2.gg 写到获得 Gold 后解锁。先拿到 Gold，再回 Processor 检查。',
      },
      {
        title: 'Gold Ingot 有什么用？',
        body: 'Subnautica2.gg 当前列出的用途包括 Entangled Power Cell 和 Fabrication Station。',
      },
      {
        title: '要把所有 Gold 都做成 ingot 吗？',
        body: '不建议。PC Gamer 提到原始 Gold 会影响 Advanced Wiring Kit、System Chip 推进和 Thermal Plant 规划，所以要留原料。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Gold, label: 'Gold 位置指南' },
      {
        href: Routes.Subnautica2EntangledPowerCell,
        label: 'Entangled Power Cell 指南',
      },
      { href: Routes.Subnautica2Processor, label: 'Processor 指南' },
      { href: Routes.Subnautica2SystemChip, label: 'System Chip 指南' },
      { href: Routes.Subnautica2HeatTolerance, label: 'Heat Tolerance 指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 26 日核对 Subnautica2.gg、Wikily、GamesRadar 和 PC Gamer。Subnautica 2 仍处于抢先体验阶段，Processor、Gold 路线安全性和用途列表都可能随补丁调整。',
    cardKicker: '材料链卡片',
    cardBody:
      'Gold x3、Processor 加工、原始 Gold 储备、Entangled Power Cell、Fabrication Station 和供电路线规划。',
    cardTypeLabel: '类型',
    cardTypeValue: '加工材料',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = goldIngotCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  goldIngotCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Gold Ingot Guide',
      description:
        'Guide for Gold Ingot recipe, Gold x3, Processor crafting, Entangled Power Cell, Fabrication Station, and raw Gold reserve planning.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = goldIngotCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2GoldIngot,
  });
}

export default async function GoldIngotGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = goldIngotCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={CoinsIcon}
      locale={locale}
      pathname={Routes.Subnautica2GoldIngot}
      sources={sharedSources}
    />
  );
}
