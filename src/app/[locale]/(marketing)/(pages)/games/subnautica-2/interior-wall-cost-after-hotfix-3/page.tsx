import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { HammerIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type InteriorWallCopy = ResourceGuideCopy & {
  metadata: { title: string; description: string };
};

const PUBLISHED_AT = '2026-06-02';
const UPDATED_AT = '2026-06-02';

const sharedSources = [
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-3',
    label: 'Unknown Worlds Hotfix 3',
  },
  {
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/',
    label: 'Official Steam page',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap',
    label: 'Unknown Worlds Early Access roadmap',
  },
  {
    href: 'https://www.youtube.com/watch?v=6t2nDHldoSk',
    label: 'Official Subnautica 2 gameplay trailer',
  },
];

const copyByLocale: Record<string, InteriorWallCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Interior Wall Cost After Hotfix 3 - Base Layout Guide',
      description:
        'How Subnautica 2 Hotfix 3 changes Interior Wall planning, including the 1/4 cost reduction, storage dividers, co-op zones, rebuild timing, and material budgets.',
    },
    eyebrow: 'Subnautica 2 base building',
    title: 'Interior Wall Cost After Hotfix 3',
    description:
      'Interior Walls are no longer a silly luxury item. Hotfix 3 cut the cost hard enough that they belong in practical base planning, especially for storage and co-op bases.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Hotfix 3 reduces Interior Wall costs to one quarter of the previous price. That does not mean every room needs dividers, but it does change the math for storage lanes, crafting corners, co-op personal zones, and base readability. If a launch-week guide says Interior Walls are too expensive for early bases, recheck it against Hotfix 3.',
    fieldNotesTitle: 'What changed for builders',
    fieldNotes: [
      {
        title: 'The cost drop is the whole point',
        body: 'Unknown Worlds says Interior Wall costs were reduced to 1/4 of the previous price. That is big enough to change early base habits, not just decoration advice.',
      },
      {
        title: 'Walls now save time, not just space',
        body: 'A divider can turn a messy room into a readable storage lane. That matters when you return from a long dive with a half-full inventory and low patience.',
      },
      {
        title: 'Co-op bases benefit first',
        body: 'In multiplayer, cheap Interior Walls make it easier to split shared storage, personal gear, crafting, and route-prep areas without building a giant base too early.',
      },
    ],
    routeChecklistTitle: 'Interior Wall checklist',
    routeChecklist: [
      'Use walls to separate storage lanes, not to decorate every empty square.',
      'Mark one corner for crafting inputs and one for vehicle or route gear.',
      'In co-op, give personal lockers their own small zone.',
      'Do not rebuild the whole base just because the wall cost changed.',
      'Retest any base guide recorded before Hotfix 3 on June 1, 2026.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to use cheaper Interior Walls',
    routeSteps: [
      {
        title: 'Fix the storage room first',
        body: 'If your lockers are already a mess, use one or two Interior Walls to create lanes: raw ore, crafted parts, organics, and route gear. That gives the cost change a real job.',
      },
      {
        title: 'Make one crafting corner readable',
        body: 'Put Fabricator, Processor, and common material lockers in one area. A small divider helps the corner feel intentional without needing a bigger room.',
      },
      {
        title: 'Protect traffic near the hatch',
        body: 'Do not place walls where players enter, exit, or turn toward oxygen. Cheap does not mean harmless; bad placement still makes the base annoying.',
      },
      {
        title: 'Add co-op zones only where they reduce arguments',
        body: 'A small personal locker corner can stop the classic co-op problem: someone used the last part and nobody knows who. Build enough order, not a hotel.',
      },
      {
        title: 'Keep expansion space open',
        body: 'The cost drop makes walls tempting, but leave one side of the base flexible for Moonpool, Tadpole Dock, power, or future Early Access changes.',
      },
    ],
    tableTitle: 'Interior Wall use table',
    tableHeaders: ['Use case', 'Worth it after Hotfix 3?'],
    tableRows: [
      [
        'Storage divider',
        'Yes. This is the best early use because it makes repeat trips faster to unload.',
      ],
      [
        'Crafting corner',
        'Yes, if it keeps Fabricator and material lockers close together.',
      ],
      [
        'Co-op personal zone',
        'Usually. Cheap walls can reduce shared-storage confusion.',
      ],
      [
        'Pure decoration in first base',
        'Wait. A working base still matters more than a pretty one.',
      ],
      [
        'Full rebuild',
        'Only if the old layout wastes time. A lower wall cost alone is not enough reason.',
      ],
    ],
    visualTitle: 'Base layout card',
    visualItems: [
      {
        label: 'Patch',
        value: 'Hotfix 3',
        note: 'Interior Wall cost reduced to 1/4.',
      },
      {
        label: 'Best use',
        value: 'Storage',
        note: 'Turn messy lockers into lanes.',
      },
      {
        label: 'Avoid',
        value: 'Clutter',
        note: 'Do not block hatch or oxygen traffic.',
      },
    ],
    cautionTitle: 'Cheap walls can still make a bad base',
    cautionBody:
      'The lower cost is good news, but a base full of unnecessary dividers can still feel worse than an open room. Use walls where they make decisions faster: where to drop ore, where to craft, where teammates put personal gear, and where the next route starts.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'What changed with Interior Walls in Hotfix 3?',
        body: 'Unknown Worlds says Hotfix 3 reduced Interior Wall costs to one quarter of the previous price.',
      },
      {
        title: 'Should I rebuild my base after Hotfix 3?',
        body: 'Only if the layout was already wasting time. The cost change makes small storage and crafting fixes easier; it does not force a full rebuild.',
      },
      {
        title: 'Are Interior Walls good for co-op?',
        body: 'Yes, when they divide shared storage, personal gear, and crafting inputs clearly. Do not overdo it in the first base.',
      },
      {
        title: 'Do old base building guides still work?',
        body: 'Mostly, but any advice saying Interior Walls are too expensive should be rechecked if it was made before Hotfix 3 on June 1, 2026.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2BaseBuilding, label: 'Base Building Guide' },
      {
        href: Routes.Subnautica2BestBaseLocations,
        label: 'Best Base Locations',
      },
      {
        href: Routes.Subnautica2HabitatBuilder,
        label: 'Habitat Builder Guide',
      },
      { href: Routes.Subnautica2Coop, label: 'Co-op Guide' },
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 Changes' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium Guide' },
      { href: Routes.Subnautica2Glass, label: 'Glass Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 2, 2026 against Unknown Worlds Hotfix 3, Steam, the Early Access roadmap, and the official gameplay trailer. This page turns the official cost change into practical base-layout guidance; it does not claim every recipe or room cost is final during Early Access.',
    cardKicker: 'Base layout card',
    cardBody:
      'A Hotfix 3 base-building page for Interior Wall cost changes, storage dividers, crafting corners, co-op zones, rebuild timing, and material budgets.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Base planning',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Patch',
    cardStatusValue: 'Hotfix 3',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Hotfix 3 后 Interior Wall 成本怎么规划',
      description:
        'Subnautica 2 Hotfix 3 后 Interior Wall 成本规划：降到原来的 1/4、储物隔断、联机分区、基地重建时机和材料预算。',
    },
    eyebrow: 'Subnautica 2 基地建造',
    title: 'Hotfix 3 后 Interior Wall 成本怎么规划',
    description:
      'Interior Wall 现在不再只是好看的装饰。Hotfix 3 把它的成本砍到足够低，早期基地也可以认真考虑用它整理储物和联机分区。',
    quickLabel: '快速结论',
    quickAnswer:
      'Hotfix 3 将 Interior Wall 成本降低到原来的 1/4。这不代表每个房间都要隔满墙，但它确实改变了储物区、制作角落、联机个人区域和基地可读性的材料预算。首发周攻略如果说 Interior Wall 太贵，不适合早期基地，就要按 Hotfix 3 重新判断。',
    fieldNotesTitle: '基地玩家该注意什么',
    fieldNotes: [
      {
        title: '成本下降是重点',
        body: 'Unknown Worlds 明确写到 Interior Wall 成本降到之前的 1/4。这不是小装饰改动，而是会影响早期基地习惯的改动。',
      },
      {
        title: '隔墙能省时间',
        body: '一个简单隔断可以把混乱房间变成清楚的储物线。长潜回来、背包半满、耐心很低的时候，这种清楚很值钱。',
      },
      {
        title: '联机基地最先受益',
        body: '多人游戏里，便宜的 Interior Wall 可以把公共储物、个人装备、制作区和出发准备区分开，不用太早建一座巨大的基地。',
      },
    ],
    routeChecklistTitle: 'Interior Wall 检查清单',
    routeChecklist: [
      '用墙分储物线，不要把每个空位都当装饰墙。',
      '一个角落放制作输入材料，一个角落放载具或路线装备。',
      '联机时给个人储物箱一个小区域。',
      '不要因为成本变低就重建整座基地。',
      '2026 年 6 月 1 日前录制的基地攻略，要按 Hotfix 3 重新看。',
    ],
    contentsLabel: '目录',
    routeTitle: '便宜后的 Interior Wall 怎么用',
    routeSteps: [
      {
        title: '先修储物房',
        body: '如果你的储物箱已经乱了，先用一两面 Interior Wall 做出分线：原矿、加工件、有机材料、路线装备。这样成本改动才真的有用。',
      },
      {
        title: '让制作角落更清楚',
        body: '把 Fabricator、Processor 和常用材料箱放在一个区域。小隔断能让它像一个真正的工作角，而不是需要更大房间。',
      },
      {
        title: '别挡舱门动线',
        body: '不要把墙放在进出、转身或找氧气的路线上。便宜不等于随便摆，糟糕位置还是会让基地很烦。',
      },
      {
        title: '联机分区只做到够用',
        body: '一个个人储物角能减少“谁用了最后一个材料”的争吵。但没必要把早期基地做成宿舍楼。',
      },
      {
        title: '给扩建留一侧',
        body: '成本下降会让人很想多摆墙，但最好给 Moonpool、Tadpole Dock、供电或后续抢先体验改动留出空间。',
      },
    ],
    tableTitle: 'Interior Wall 用途表',
    tableHeaders: ['用途', 'Hotfix 3 后值不值'],
    tableRows: [
      ['储物隔断', '值得。这是早期最实用的用途，能让反复跑图后的卸货更快。'],
      ['制作角落', '值得，前提是 Fabricator 和材料箱真的靠得更清楚。'],
      ['联机个人区域', '通常值得。便宜隔墙能减少公共储物混乱。'],
      ['第一座基地纯装饰', '先等等。能工作的基地比好看的基地更重要。'],
      ['整座基地重建', '只有旧布局真的浪费时间才值得。单纯成本降低不够。'],
    ],
    visualTitle: '基地布局卡',
    visualItems: [
      {
        label: '补丁',
        value: 'Hotfix 3',
        note: 'Interior Wall 成本降到 1/4。',
      },
      {
        label: '最好用途',
        value: '储物',
        note: '把混乱箱子整理成路线。',
      },
      {
        label: '避免',
        value: '堵路',
        note: '别挡舱门和氧气动线。',
      },
    ],
    cautionTitle: '便宜的墙也能造出难用的基地',
    cautionBody:
      '成本下降是好事，但一座塞满没必要隔断的基地仍然会更难用。把墙用在能让决定更快的地方：矿放哪、在哪制作、队友个人装备放哪、下一条路线从哪里出发。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Hotfix 3 对 Interior Wall 改了什么？',
        body: 'Unknown Worlds 说明 Hotfix 3 将 Interior Wall 成本降低到之前的 1/4。',
      },
      {
        title: 'Hotfix 3 后要重建基地吗？',
        body: '只有旧布局已经浪费时间才需要。成本变化更适合做小型储物和制作区修正，不是强迫你拆家。',
      },
      {
        title: 'Interior Wall 适合联机吗？',
        body: '适合，尤其是用来分公共储物、个人装备和制作材料。但第一座基地不要过度分隔。',
      },
      {
        title: '旧基地建造攻略还能看吗？',
        body: '大多还能参考，但凡是说 Interior Wall 太贵的建议，如果来自 2026 年 6 月 1 日之前，就要重新核对。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2BaseBuilding, label: '基地建造指南' },
      { href: Routes.Subnautica2BestBaseLocations, label: '最佳基地位置' },
      { href: Routes.Subnautica2HabitatBuilder, label: 'Habitat Builder 指南' },
      { href: Routes.Subnautica2Coop, label: '联机指南' },
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 更新内容' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium 指南' },
      { href: Routes.Subnautica2Glass, label: 'Glass 指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 2 日核对 Unknown Worlds Hotfix 3、Steam、抢先体验路线图和官方实机预告。本页把官方成本改动整理成基地布局建议，不声称抢先体验期间所有配方和房间成本都已经最终确定。',
    cardKicker: '基地布局卡',
    cardBody:
      '围绕 Hotfix 3 后 Interior Wall 成本变化、储物隔断、制作角落、联机分区、重建时机和材料预算写的基地页。',
    cardTypeLabel: '类型',
    cardTypeValue: '基地规划',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '补丁',
    cardStatusValue: 'Hotfix 3',
  },
};

function getCopy(locale: Locale): InteriorWallCopy {
  return copyByLocale[locale] ?? copyByLocale.en;
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
    pathname: Routes.Subnautica2InteriorWallCostAfterHotfix3,
  });
}

export default async function InteriorWallCostAfterHotfix3Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <LocalizedResourceGuidePage
      copy={{ ...copy, publishedAt: PUBLISHED_AT, updatedAt: UPDATED_AT }}
      icon={HammerIcon}
      locale={locale}
      pathname={Routes.Subnautica2InteriorWallCostAfterHotfix3}
      sources={sharedSources}
    />
  );
}
