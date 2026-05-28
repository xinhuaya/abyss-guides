import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { GaugeIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type EngineEfficiencyCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-25';
const UPDATED_AT = '2026-05-29';

const sharedSources = [
  {
    href: 'https://subnautica2.gg/blueprints/engine-efficiency',
    label: 'Subnautica2.gg Engine Efficiency blueprint',
  },
  {
    href: 'https://subnautica2hub.com/blueprints/engine-efficiency',
    label: 'Subnautica2Hub Engine Efficiency blueprint',
  },
  {
    href: 'https://wikily.gg/subnautica-2/items/engine-efficiency/',
    label: 'Wikily Engine Efficiency module page',
  },
  {
    href: 'https://consolepulse.com/multiplatform/subnautica/guides/modification-station-blueprint-location-subnautica-2',
    label: 'Console Pulse Modification Station and Engine Efficiency route',
  },
];

const engineEfficiencyCopy: Record<string, EngineEfficiencyCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Engine Efficiency Guide - Recipe, Unlock, and Tadpole Power',
      description:
        'A practical Subnautica 2 Engine Efficiency guide covering the Modification Station recipe, Titanium Ingot, Glass, System Chip, scan unlock, Alien Ruins pickup note, and Tadpole power savings.',
    },
    eyebrow: 'Subnautica 2 Tadpole module',
    title: 'Subnautica 2 Engine Efficiency Guide',
    description:
      'Engine Efficiency is the upgrade you feel on every long Tadpole route. It is not flashy; it simply makes power last longer, which means fewer panic turns and fewer wasted Power Cell trips.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current Subnautica2.gg, Subnautica2Hub, and Wikily data list Engine Efficiency as a locked Tadpole module crafted at the Modification Station with Titanium Ingot x1, Glass x2, and System Chip x1. The module reduces Tadpole power use by 20% and stacks up to four times for a listed max of 80%. Console Pulse also reports an Engine Efficiency pickup inside the Alien Ruins route.',
    fieldNotesTitle: 'Field notes for power savings',
    fieldNotes: [
      {
        title: 'One module changes route comfort',
        body: 'The first Engine Efficiency module is often more valuable than chasing a perfect stack. It stretches ordinary Tadpole trips before you are ready for long rare-material loops.',
      },
      {
        title: 'System Chip is the real trade',
        body: 'Titanium Ingot and Glass are visible costs, but System Chip often competes with other upgrades. Craft the module when vehicle uptime is the next bottleneck.',
      },
      {
        title: 'Pickups and crafted copies can coexist',
        body: 'If your route finds an Engine Efficiency pickup, use it. Later crafted copies can still support longer loops once Modification Station recipes are stable.',
      },
    ],
    routeChecklistTitle: 'Before crafting Engine Efficiency',
    routeChecklist: [
      'Confirm Tadpole power use is limiting routes more than depth or oxygen.',
      'Protect System Chip needs for other modules before crafting.',
      'Use Alien Ruins pickup data as a route bonus, not a guaranteed shortcut.',
      'Stack extra modules only after the first one improves daily trips.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Engine Efficiency craft plan',
    routeSteps: [
      {
        title: 'Check whether you already found one',
        body: 'Console Pulse reports a module pickup inside the Alien Ruins. If you picked it up during the Modification Station route, slot it before spending materials on a duplicate.',
      },
      {
        title: 'Unlock the recipe before farming',
        body: 'The blueprint pages list Engine Efficiency as locked or scan-unlocked. Check the Modification Station menu first, then decide whether the next job is scan progress or materials.',
      },
      {
        title: 'Prepare the processed inputs',
        body: 'Titanium Ingot x1 and System Chip x1 both hide earlier material chains. Have Processor access, Silver/Wiring Kit planning, and Quartz storage settled before you call the recipe easy.',
      },
      {
        title: 'Craft it for long routes',
        body: 'The value is range. Use Engine Efficiency when Tadpole trips are limited by power or when you are running repeated Alien Ruins, Atacamite, or deeper material loops.',
      },
      {
        title: 'Stack only if the route deserves it',
        body: 'Current data says the effect stacks up to four times. That is useful, but four module slots is a real cost. Keep at least one slot free if another module solves a bigger problem.',
      },
    ],
    tableTitle: 'Engine Efficiency checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      ['Station', 'Modification Station in current blueprint data.'],
      [
        'Unlock',
        'Locked / scan wording in public data; check your save first.',
      ],
      ['Titanium Ingot x1', 'Processor chain, not raw Titanium.'],
      ['Glass x2', 'Easy to forget if Quartz is stored elsewhere.'],
      ['System Chip x1', 'Wiring Kit plus Quartz chain in current guides.'],
    ],
    visualTitle: 'Power-saving loop',
    visualItems: [
      {
        label: 'Find',
        value: 'Alien Ruins',
        note: 'Check for the pickup before crafting.',
      },
      {
        label: 'Craft',
        value: 'Module',
        note: 'Titanium Ingot, Glass, System Chip.',
      },
      {
        label: 'Run',
        value: 'Long routes',
        note: 'Lower Tadpole power use by 20% per module.',
      },
    ],
    cautionTitle: 'Do not fill every slot just because it stacks',
    cautionBody:
      'Four Engine Efficiency modules may save a lot of power, but four occupied slots can also block depth, scan, or safety upgrades. Match the slot plan to the route, not the tooltip.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you craft Engine Efficiency in Subnautica 2?',
        body: 'Current blueprint data lists Titanium Ingot x1, Glass x2, and System Chip x1 at the Modification Station.',
      },
      {
        title: 'What does Engine Efficiency do?',
        body: 'Current data says it reduces Tadpole power use by 20% and stacks up to four times, for a listed max of 80%.',
      },
      {
        title: 'Can you find Engine Efficiency without crafting it?',
        body: 'Console Pulse reports a pickup inside the Alien Ruins route. Check that before spending rare inputs on a duplicate.',
      },
      {
        title: 'Is Engine Efficiency better than depth upgrades?',
        body: 'Not always. Efficiency extends range, but depth modules open routes. Pick the module that solves the next blocker.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2ModificationStation,
        label: 'Modification Station Guide',
      },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Vehicle Guide' },
      { href: Routes.Subnautica2TitaniumIngot, label: 'Titanium Ingot Guide' },
      { href: Routes.Subnautica2SystemChip, label: 'System Chip Guide' },
      { href: Routes.Subnautica2EchoLocation, label: 'Echo Location Guide' },
      { href: Routes.Subnautica2Atacamite, label: 'Atacamite Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 25, 2026 against Subnautica2.gg, Subnautica2Hub, Wikily, and Console Pulse. Early Access pages agree on the core recipe and 20% stacking text, but route pickup and unlock details should be rechecked after patches.',
    cardKicker: 'Power module card',
    cardBody:
      'Modification Station recipe, Alien Ruins pickup note, Titanium Ingot, Glass, System Chip, and Tadpole power savings.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Module guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Engine Efficiency 指南 - 配方、解锁和 Tadpole 省电',
      description:
        'Subnautica 2 中文 Engine Efficiency 指南：整理 Modification Station 配方、Titanium Ingot、Glass、System Chip、扫描解锁、Alien Ruins 拾取线索和 Tadpole 省电效果。',
    },
    eyebrow: 'Subnautica 2 Tadpole 模块',
    title: 'Subnautica 2 Engine Efficiency 指南',
    description:
      'Engine Efficiency 是长线 Tadpole 路线里最容易感觉到的升级。它不花哨，但能让电量撑更久，少一点临时掉头，少一点 Power Cell 焦虑。',
    quickLabel: '快速结论',
    quickAnswer:
      'Subnautica2.gg、Subnautica2Hub 和 Wikily 当前都把 Engine Efficiency 写成锁定的 Tadpole 模块，在 Modification Station 用 Titanium Ingot x1、Glass x2、System Chip x1 制作。效果是降低 Tadpole 20% 电量消耗，最多叠 4 个，公开资料写的上限是 80%。Console Pulse 还提到 Alien Ruins 路线里有一个可拾取模块。',
    fieldNotesTitle: '载具省电笔记',
    fieldNotes: [
      {
        title: '第一块模块就很有感觉',
        body: '不要一开始就追求完美叠满。第一块 Engine Efficiency 往往已经能让普通 Tadpole 路线舒服很多。',
      },
      {
        title: '真正要权衡的是 System Chip',
        body: 'Titanium Ingot 和 Glass 很直观，System Chip 才常常和其它升级抢材料。只有载具续航真成为下一卡点时再做。',
      },
      {
        title: '拾取和制作可以并行',
        body: '如果 Alien Ruins 路线里捡到模块，先用起来。后续 Modification Station 稳定后，再考虑做更多。',
      },
    ],
    routeChecklistTitle: '制作 Engine Efficiency 前',
    routeChecklist: [
      '先确认现在卡的是 Tadpole 电量，不是深度或氧气。',
      '制作前检查其它模块是否也要 System Chip。',
      'Alien Ruins 拾取信息当路线奖励，不当必定捷径。',
      '第一块改善日常路线后，再考虑继续叠加。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Engine Efficiency 制作规划',
    routeSteps: [
      {
        title: '先确认有没有捡到现成模块',
        body: 'Console Pulse 提到 Alien Ruins 里可以捡到 Engine Efficiency。如果你跑 Modification Station 路线时已经拿过，先装上再考虑是否重复制作。',
      },
      {
        title: '制作前先看配方是否解锁',
        body: '公开蓝图页面把它写成 locked 或 scan unlock。先查 Modification Station 菜单，再决定下一步是推进扫描，还是去备材料。',
      },
      {
        title: '处理好加工材料链',
        body: 'Titanium Ingot 和 System Chip 都不是单一原料。先确认 Processor、Silver/Wiring Kit、Quartz 这些链路没有卡住。',
      },
      {
        title: '为长路线制作它',
        body: '它的价值是续航。Tadpole 电量经常限制你的 Alien Ruins、Atacamite 或深水材料路线时，Engine Efficiency 才最划算。',
      },
      {
        title: '不要无脑塞满四个槽',
        body: '当前资料写它最多叠 4 个，但模块槽本身也很贵。深度、扫描或安全模块更关键时，别把所有槽都给省电。',
      },
    ],
    tableTitle: 'Engine Efficiency 检查表',
    tableHeaders: ['需求', '确认什么'],
    tableRows: [
      ['工作站', '当前蓝图资料写的是 Modification Station。'],
      ['解锁', '公开资料写成 locked / scan，先查你的存档。'],
      ['Titanium Ingot x1', '需要加工链，不是 raw Titanium。'],
      ['Glass x2', 'Quartz 如果分箱收纳，很容易忘。'],
      ['System Chip x1', '当前攻略里接 Wiring Kit 和 Quartz 链。'],
    ],
    visualTitle: '省电模块链路',
    visualItems: [
      { label: '寻找', value: 'Alien Ruins', note: '制作前先确认有没有捡到。' },
      {
        label: '制作',
        value: '模块',
        note: 'Titanium Ingot、Glass、System Chip。',
      },
      {
        label: '续航',
        value: '长路线',
        note: '每个模块降低 20% Tadpole 电耗。',
      },
    ],
    cautionTitle: '能叠加不代表要塞满',
    cautionBody:
      '四个 Engine Efficiency 确实省电，但四个槽也会挤掉深度、扫描或安全模块。按下一条路线选模块，不要按 tooltip 冲动堆满。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Engine Efficiency 怎么做？',
        body: '当前蓝图资料写的是在 Modification Station 用 Titanium Ingot x1、Glass x2、System Chip x1 制作。',
      },
      {
        title: 'Engine Efficiency 有什么用？',
        body: '当前资料写的是降低 Tadpole 20% 电量消耗，最多叠 4 个，公开文本上限是 80%。',
      },
      {
        title: 'Engine Efficiency 能直接捡到吗？',
        body: 'Console Pulse 提到 Alien Ruins 路线里可以捡到一个。重复制作前先检查背包和载具模块。',
      },
      {
        title: '它比深度模块更重要吗？',
        body: '不一定。Engine Efficiency 提高续航，深度模块打开路线。哪个卡住下一步，就先做哪个。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      {
        href: Routes.Subnautica2ModificationStation,
        label: 'Modification Station 指南',
      },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 载具指南' },
      { href: Routes.Subnautica2TitaniumIngot, label: 'Titanium Ingot 指南' },
      { href: Routes.Subnautica2SystemChip, label: 'System Chip 指南' },
      { href: Routes.Subnautica2EchoLocation, label: 'Echo Location 指南' },
      { href: Routes.Subnautica2Atacamite, label: 'Atacamite 指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 25 日核对 Subnautica2.gg、Subnautica2Hub、Wikily 和 Console Pulse。当前抢先体验资料在核心配方和 20% 叠加文本上基本一致，但路线拾取和解锁细节后续可能调整。',
    cardKicker: '省电模块卡',
    cardBody:
      'Modification Station 配方、Alien Ruins 拾取线索、Titanium Ingot、Glass、System Chip 和 Tadpole 省电效果。',
    cardTypeLabel: '类型',
    cardTypeValue: '模块指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: 'Early Access',
  },
};

const fallbackCopy = engineEfficiencyCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  engineEfficiencyCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Engine Efficiency Guide',
      description:
        'Guide for Engine Efficiency recipe, Modification Station, Titanium Ingot, Glass, System Chip, and Tadpole power savings.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = engineEfficiencyCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2EngineEfficiency,
  });
}

export default async function EngineEfficiencyGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = engineEfficiencyCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={GaugeIcon}
      locale={locale}
      pathname={Routes.Subnautica2EngineEfficiency}
      sources={sharedSources}
    />
  );
}
