import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { CpuIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type GermaniumIngotCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-29';

const sharedSources = [
  {
    href: 'https://subnautica2.gg/items/germanium-ingot',
    label: 'Subnautica2.gg Germanium Ingot item page',
  },
  {
    href: 'https://wikily.gg/subnautica-2/items/germanium-ingot/',
    label: 'Wikily Germanium Ingot item page',
  },
  {
    href: 'https://www.gamesradar.com/games/survival/subnautica-2-ingots/',
    label: 'GamesRadar Subnautica 2 ingots guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-lead-location/',
    label: 'PC Gamer Lead location guide',
  },
];

const germaniumIngotCopy: Record<string, GermaniumIngotCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Germanium Ingot Guide - Lead, Silver, Processor, and Uses',
      description:
        'A practical Subnautica 2 Germanium Ingot guide covering Lead x2, Silver x2, Processor crafting, which input to spend, and current base/power uses.',
    },
    eyebrow: 'Subnautica 2 processed material',
    title: 'Subnautica 2 Germanium Ingot Guide',
    description:
      'Germanium Ingot is unusual because the public pages list two ways in: Lead or Silver. That makes it less about finding the recipe and more about choosing which scarce material you can afford to lose.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current Wikily data lists two Processor recipes for Germanium Ingot: Lead x2 or Silver x2. GamesRadar also reports Germanium Ingot as 2x Silver or 2x Lead, and Subnautica2.gg lists Germanium Ingot as crafted from Lead or Silver at the Processor. Current listed uses include Axum Trashcan, Duplex Solar Panel, Heat Resistance Chip, and Power Storage, while PC Gamer notes Lead can be saved for Germanium Ingot production.',
    fieldNotesTitle: 'Field notes for Germanium choices',
    fieldNotes: [
      {
        title: 'Use the metal you can replace',
        body: 'Germanium Ingot is flexible because Lead or Silver can work. Pick the input that is easiest for your current route, not the one sitting next to a more urgent recipe.',
      },
      {
        title: 'Silver is often more painful to lose',
        body: 'If Wiring Kit, Advanced Battery, or electronics are active, spend Lead first. Silver shortages ripple through more early tools.',
      },
      {
        title: 'Power builds need a small reserve',
        body: 'Duplex Solar Panel, Heat Resistance Chip, and Power Storage can all pull this chain later. Keep one planned ingot stack instead of rediscovering the recipe when you are already at the station.',
      },
    ],
    routeChecklistTitle: 'Before crafting Germanium Ingot',
    routeChecklist: [
      'Choose Lead or Silver based on which route you can refill fastest.',
      'Protect Silver if electronics or Advanced Battery work is next.',
      'Craft through Processor only when the target power recipe is known.',
      'Store finished ingots with solar, heat, or storage upgrade parts.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Germanium Ingot planning route',
    routeSteps: [
      {
        title: 'Decide whether Lead or Silver is cheaper today',
        body: 'Silver is usually under more pressure from electronics, while Lead may be less urgent once Sonic Resonator is handled. Check your next two blueprints before choosing the input.',
      },
      {
        title: 'Use the Processor',
        body: 'Subnautica2.gg, Wikily, and GamesRadar all point toward Processor-based ingot crafting. If Processor is not built yet, solve that station before stockpiling inputs.',
      },
      {
        title: 'Keep Silver loose unless the ingot is urgent',
        body: 'Wiring Kit, System Chip, oxygen, and several electronics chains can ask for Silver. Burning Silver into Germanium too early can make a simple chip feel impossible.',
      },
      {
        title: 'Use Lead when the ravine route is stable',
        body: 'PC Gamer points players to a Lead route with loose pieces and breakable blocks. Once that route is repeatable, Lead becomes the cleaner Germanium input for many saves.',
      },
      {
        title: 'Craft for a visible base or power part',
        body: 'Current public item pages tie Germanium Ingot to base and power-adjacent pieces like Duplex Solar Panel and Power Storage. If the use is not visible, keep raw materials flexible.',
      },
    ],
    tableTitle: 'Germanium Ingot checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      ['Lead x2', 'One current Processor recipe path.'],
      ['Silver x2', 'Alternate current Processor recipe path.'],
      ['Processor', 'Listed crafting station across current public pages.'],
      ['Silver reserve', 'Protect Wiring Kit and System Chip progress.'],
      ['Lead route', 'Use Lead when the ravine route is repeatable.'],
      ['Patch check', 'Confirm the PDA after Early Access updates.'],
    ],
    visualTitle: 'Input choice card',
    visualItems: [
      {
        label: 'Option A',
        value: '2 Lead',
        note: 'Usually better after the Lead route is solved.',
      },
      {
        label: 'Option B',
        value: '2 Silver',
        note: 'Convenient, but electronics may regret it.',
      },
      {
        label: 'Station',
        value: 'Processor',
        note: 'Do the conversion only for a known part.',
      },
    ],
    cautionTitle: 'The cheaper recipe depends on your locker, not the wiki',
    cautionBody:
      'Two Silver is not the same as two Lead when your Wiring Kit chain is empty. Germanium is a good place to pause, look at the next craft, and spend the material that is least painful.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you make Germanium Ingot in Subnautica 2?',
        body: 'Current Wikily and GamesRadar data list two recipes at the Processor: Lead x2 or Silver x2. Subnautica2.gg also lists Germanium Ingot as crafted from Lead or Silver at the Processor.',
      },
      {
        title: 'Should I use Lead or Silver for Germanium Ingot?',
        body: 'Use Lead if your Lead route is stable. Keep Silver for Wiring Kit, System Chip, and electronics unless the ingot is urgent.',
      },
      {
        title: 'What is Germanium Ingot used for?',
        body: 'Current public pages list base and power-adjacent uses such as Axum Trashcan, Duplex Solar Panel, Heat Resistance Chip, and Power Storage.',
      },
      {
        title: 'Can the recipe change?',
        body: 'Yes. Subnautica 2 is in Early Access, so recipe paths and listed uses should be checked against the PDA after updates.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Lead, label: 'Lead Location Guide' },
      { href: Routes.Subnautica2Silver, label: 'Silver Location Guide' },
      { href: Routes.Subnautica2Processor, label: 'Processor Guide' },
      { href: Routes.Subnautica2WiringKit, label: 'Wiring Kit Guide' },
      { href: Routes.Subnautica2SystemChip, label: 'System Chip Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 26, 2026 against Subnautica2.gg, Wikily, GamesRadar, and PC Gamer. Subnautica 2 is in Early Access, so Lead/Silver recipes and listed uses can change after patches.',
    cardKicker: 'Material choice card',
    cardBody:
      'Lead x2 or Silver x2, Processor crafting, Silver reserve rules, Lead route timing, and base-power uses.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Processed material',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Germanium Ingot 指南 - Lead、Silver、Processor 和用途',
      description:
        'Subnautica 2 中文 Germanium Ingot 指南：整理 Lead x2、Silver x2、Processor 制作、该花哪种原料，以及当前基地/供电用途。',
    },
    eyebrow: 'Subnautica 2 加工材料',
    title: 'Subnautica 2 Germanium Ingot 指南',
    description:
      'Germanium Ingot 特别的地方在于公开资料列出两条路线：Lead 或 Silver。真正要判断的不是会不会做，而是哪种稀缺材料现在更舍得花。',
    quickLabel: '快速结论',
    quickAnswer:
      'Wikily 当前列出两个 Processor 配方：Lead x2 或 Silver x2。GamesRadar 也写到 Germanium Ingot 是 2x Silver 或 2x Lead；Subnautica2.gg 则把它列为由 Lead 或 Silver 在 Processor 制作。当前用途包括 Axum Trashcan、Duplex Solar Panel、Heat Resistance Chip 和 Power Storage；PC Gamer 也提到 Lead 可以留给 Germanium Ingot 生产。',
    fieldNotesTitle: 'Germanium Ingot 选择笔记',
    fieldNotes: [
      {
        title: '用更容易补的那种金属',
        body: 'Germanium Ingot 灵活，是因为 Lead 或 Silver 都能做。不要只看箱子里哪个多，而要看当前哪条路线更容易补。',
      },
      {
        title: 'Silver 往往更疼',
        body: '如果 Wiring Kit、Advanced Battery 或电子材料正在推进，优先花 Lead。Silver 一缺，会牵连更多早期工具。',
      },
      {
        title: '电力建设要留小库存',
        body: 'Duplex Solar Panel、Heat Resistance Chip 和 Power Storage 后面都会拉到这条链。提前留一小组，比站在工作台前重新查配方舒服。',
      },
    ],
    routeChecklistTitle: '制作 Germanium Ingot 前',
    routeChecklist: [
      '根据哪条路线更容易补货，选择 Lead 或 Silver。',
      '如果下一步是电子材料或 Advanced Battery，先保护 Silver。',
      '只有目标电力配方明确时，再通过 Processor 加工。',
      '成品 ingot 放在太阳能、耐热或储能升级材料旁边。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Germanium Ingot 规划路线',
    routeSteps: [
      {
        title: '先判断 Lead 和 Silver 哪个更便宜',
        body: 'Silver 往往被电子件抢得更凶，Lead 在 Sonic Resonator 之后压力可能小一点。先看接下来两张蓝图，再决定用哪边。',
      },
      {
        title: '使用 Processor',
        body: 'Subnautica2.gg、Wikily 和 GamesRadar 当前都指向 Processor。还没建 Processor 的话，先处理这个基地工具。',
      },
      {
        title: '不急时保留 Silver',
        body: 'Wiring Kit、System Chip、氧气和很多电子链都会吃 Silver。太早把 Silver 转成 Germanium，可能会把简单芯片卡住。',
      },
      {
        title: 'Lead 路线稳定后优先用 Lead',
        body: 'PC Gamer 指向的 Lead 路线有可拾取小块和可敲碎矿块。等这条路线能重复跑时，Lead 通常是更舒服的 Germanium 输入。',
      },
      {
        title: '只为可见基地/供电件加工',
        body: '当前公开资料把 Germanium Ingot 接到 Duplex Solar Panel、Power Storage 这类基地和供电部件。目标还没出现时，原料形态更灵活。',
      },
    ],
    tableTitle: 'Germanium Ingot 检查表',
    tableHeaders: ['需要什么', '确认什么'],
    tableRows: [
      ['Lead x2', '当前其中一条 Processor 配方路线。'],
      ['Silver x2', '当前另一条 Processor 配方路线。'],
      ['Processor', '公开资料一致列出的制作站。'],
      ['Silver 储备', '保护 Wiring Kit 和 System Chip 进度。'],
      ['Lead 路线', '峡谷路线能稳定重复后再优先使用 Lead。'],
      ['补丁检查', '抢先体验更新后，以 PDA 重新确认。'],
    ],
    visualTitle: '输入选择卡',
    visualItems: [
      {
        label: '方案 A',
        value: '2 Lead',
        note: 'Lead 路线稳定后通常更舒服。',
      },
      {
        label: '方案 B',
        value: '2 Silver',
        note: '方便，但电子链可能会后悔。',
      },
      {
        label: '设备',
        value: 'Processor',
        note: '只为明确部件做转换。',
      },
    ],
    cautionTitle: '哪个配方便宜，要看你的箱子',
    cautionBody:
      '当 Wiring Kit 链还空着时，2 个 Silver 和 2 个 Lead 完全不是一回事。Germanium 这种材料最好先停一下，看下一张蓝图，再花最不心疼的原料。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Germanium Ingot 怎么做？',
        body: 'Wikily 和 GamesRadar 当前列出 Processor 中两条路线：Lead x2 或 Silver x2。Subnautica2.gg 也把它列为由 Lead 或 Silver 在 Processor 制作。',
      },
      {
        title: 'Germanium Ingot 应该用 Lead 还是 Silver？',
        body: 'Lead 路线稳定后优先用 Lead。Silver 建议留给 Wiring Kit、System Chip 和电子件，除非 ingot 已经很急。',
      },
      {
        title: 'Germanium Ingot 有什么用？',
        body: '当前公开资料列出 Axum Trashcan、Duplex Solar Panel、Heat Resistance Chip 和 Power Storage 等基地/供电相关用途。',
      },
      {
        title: '配方会变吗？',
        body: '会有可能。Subnautica 2 仍处于抢先体验阶段，更新后请用 PDA 重新确认配方路线和用途。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Lead, label: 'Lead 位置指南' },
      { href: Routes.Subnautica2Silver, label: 'Silver 位置指南' },
      { href: Routes.Subnautica2Processor, label: 'Processor 指南' },
      { href: Routes.Subnautica2WiringKit, label: 'Wiring Kit 指南' },
      { href: Routes.Subnautica2SystemChip, label: 'System Chip 指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 26 日核对 Subnautica2.gg、Wikily、GamesRadar 和 PC Gamer。Subnautica 2 仍处于抢先体验阶段，Lead/Silver 配方和用途列表都可能随补丁调整。',
    cardKicker: '材料选择卡',
    cardBody:
      'Lead x2 或 Silver x2、Processor 加工、Silver 储备规则、Lead 路线时机和基地供电用途。',
    cardTypeLabel: '类型',
    cardTypeValue: '加工材料',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = germaniumIngotCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  germaniumIngotCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Germanium Ingot Guide',
      description:
        'Guide for Germanium Ingot recipe, Lead x2, Silver x2, Processor crafting, and base-power uses.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = germaniumIngotCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2GermaniumIngot,
  });
}

export default async function GermaniumIngotGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = germaniumIngotCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={CpuIcon}
      locale={locale}
      pathname={Routes.Subnautica2GermaniumIngot}
      sources={sharedSources}
    />
  );
}
