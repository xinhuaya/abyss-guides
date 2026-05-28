import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { WavesIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type MoonpoolCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-28';

const sharedSources = [
  {
    href: 'https://subnautica2.gg/blueprints/moonpool',
    label: 'Subnautica2.gg Moonpool blueprint',
  },
  {
    href: 'https://www.dexerto.com/wikis/subnautica-2/base-pieces/moonpool/',
    label: 'Dexerto Moonpool base piece page',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-tadpole-scan-locations/',
    label: 'PC Gamer Tadpole and Moonpool guide',
  },
  {
    href: 'https://www.shacknews.com/article/149262/how-to-fix-insufficient-space-to-dock-in-subnautica-2?amphtml=1',
    label: 'Shacknews insufficient space to dock fix',
  },
];

const moonpoolCopy: Record<string, MoonpoolCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Moonpool Guide - Unlock, Recipe, Tadpole Dock, and Placement',
      description:
        'A practical Subnautica 2 Moonpool guide covering scan unlocks, Titanium x5, Habitat Builder placement, Tadpole Dock clearance, Vehicle Fabricator setup, and insufficient space fixes.',
    },
    eyebrow: 'Subnautica 2 vehicle bay setup',
    title: 'Subnautica 2 Moonpool Guide',
    description:
      'Moonpool is where a neat base plan can turn into a vehicle headache. The recipe is not the hard part. The hard part is leaving enough water, height, approach room, and a marked return route for Tadpole support pieces to actually work.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current Subnautica2.gg data lists Moonpool as a scan-unlocked build with multiple unlock leads, including scan and Data Box paths. Dexerto lists the current build cost as Titanium x5 with the Habitat Builder. PC Gamer and AllThingsHow both tie Moonpool planning to the Tadpole Dock and Vehicle Fabricator chain, while Shacknews points the common "insufficient space to dock" problem back to clearance and placement. Build it in open water with room below, mark the bay with a Beacon, then add Tadpole Dock and Vehicle Fabricator around the vehicle route.',
    fieldNotesTitle: 'Field notes for Moonpool placement',
    fieldNotes: [
      {
        title: 'Preview clearance from the vehicle angle',
        body: 'The build preview can look fine from the base wall and still feel awful from the Tadpole approach. Swim the entry line before committing.',
      },
      {
        title: 'Rebuild early if it feels cramped',
        body: 'Titanium x5 is cheaper than fighting a bad bay for every vehicle trip. If docking already feels awkward, move the Moonpool before decorating around it.',
      },
      {
        title: 'Name the vehicle base clearly',
        body: 'A Moonpool becomes a route hub. Mark it with a Beacon that says what it serves, such as "Tadpole bay" or "east vehicle base".',
      },
    ],
    routeChecklistTitle: 'Bay check',
    routeChecklist: [
      'Open water below and around the Moonpool.',
      'Approach line is tested from the vehicle side.',
      'Beacon marks the bay before expansion.',
      'Tadpole Dock and Vehicle Fabricator have room nearby.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Moonpool setup route',
    routeSteps: [
      {
        title: 'Unlock before you collect everything',
        body: 'Subnautica2.gg currently lists Moonpool as a blueprint with scan and Data Box-style unlock leads. Do the scan route first, then let the PDA confirm the exact build state before hauling materials.',
      },
      {
        title: 'Keep the recipe simple',
        body: 'Dexerto currently lists Moonpool as a Habitat Builder base piece using Titanium x5. That is cheap enough to rebuild, which matters because placement mistakes are common.',
      },
      {
        title: 'Build it in open water',
        body: 'The Moonpool needs more room than a normal room. Leave space below for docking hardware, space around the sides for approach, and enough depth that the Tadpole does not scrape terrain.',
      },
      {
        title: 'Mark the bay before you decorate',
        body: 'A Beacon near the Moonpool keeps the vehicle base easy to find while you are still hauling Titanium, Glass, and power parts. It is cheaper than hunting your own base in bad light.',
      },
      {
        title: 'Plan Dock and Vehicle Fabricator together',
        body: 'PC Gamer and AllThingsHow both frame the vehicle path around Moonpool, Tadpole Dock, and Vehicle Fabricator. Put the Moonpool where both pieces can serve a clean vehicle approach, not just where a wall slot is empty.',
      },
      {
        title: 'Fix docking errors by moving the bay',
        body: 'If the game complains about insufficient space, stop fighting the preview. Shacknews points the fix toward better clearance, so move or rebuild the Moonpool before the whole vehicle setup becomes annoying.',
      },
    ],
    tableTitle: 'Moonpool checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      [
        'Blueprint unlock',
        'Scan/Data Box leads are listed in current public data.',
      ],
      ['Titanium x5', 'Dexerto currently lists this as the build cost.'],
      [
        'Habitat Builder',
        'Current base-piece page uses Habitat Builder construction.',
      ],
      ['Open water', 'Enough room below and around the bay.'],
      ['Beacon', 'Mark the vehicle bay before the base layout gets busy.'],
      ['Tadpole Dock', 'Place only after the Moonpool has real clearance.'],
      ['Vehicle Fabricator', 'Plan it beside the same approach route.'],
    ],
    visualTitle: 'Bay fit card',
    visualItems: [
      {
        label: 'Below',
        value: 'clear',
        note: 'Docking hardware needs depth.',
      },
      {
        label: 'Recipe',
        value: '5 Ti',
        note: 'Cheap enough to rebuild if placement is bad.',
      },
      {
        label: 'Route',
        value: 'Tadpole',
        note: 'Approach angle matters more than the preview.',
      },
    ],
    cautionTitle: 'A cramped Moonpool makes every vehicle trip worse',
    cautionBody:
      'If you have to twist the Tadpole through rocks or base parts, the Moonpool is in the wrong place. Rebuilding early costs less time than living with a bad bay for the next dozen trips.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you unlock Moonpool in Subnautica 2?',
        body: 'Current Subnautica2.gg data lists Moonpool as a blueprint with scan and Data Box-style unlock leads. Check the PDA after scanning because Early Access unlock paths can move.',
      },
      {
        title: 'What is the Moonpool recipe?',
        body: 'Dexerto currently lists Moonpool as a Habitat Builder base piece using Titanium x5.',
      },
      {
        title: 'Where should I place Moonpool?',
        body: 'Use open water with space below and a clean vehicle approach. Avoid shallow bottoms, tight rock walls, and crowded base layouts.',
      },
      {
        title: 'Why does Moonpool say insufficient space to dock?',
        body: 'The usual cause is clearance. Move the Moonpool farther from terrain or rebuild the vehicle bay in deeper open water before adding Tadpole Dock.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2InsufficientSpaceToDock,
        label: 'Insufficient Space to Dock Fix',
      },
      { href: Routes.Subnautica2BaseBuilding, label: 'Base Building Guide' },
      {
        href: Routes.Subnautica2HabitatBuilder,
        label: 'Habitat Builder Guide',
      },
      { href: Routes.Subnautica2TadpoleDock, label: 'Tadpole Dock Guide' },
      {
        href: Routes.Subnautica2VehicleFabricator,
        label: 'Vehicle Fabricator Guide',
      },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Vehicle Guide' },
      { href: Routes.Subnautica2Beacon, label: 'Beacon Guide' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium Location Guide' },
      { href: Routes.Subnautica2Glass, label: 'Glass Recipe Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 28, 2026 against Subnautica2.gg, Dexerto, PC Gamer, and Shacknews. Subnautica 2 is in Early Access, so unlock paths, build costs, placement behavior, and docking errors can change after patches.',
    cardKicker: 'Vehicle bay card',
    cardBody:
      'Scan/Data Box unlock leads, Titanium x5, Habitat Builder placement, Tadpole Dock clearance, Vehicle Fabricator pairing, and insufficient-space fixes.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Base piece guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Moonpool 指南 - 解锁、配方、Tadpole Dock 和摆放',
      description:
        'Subnautica 2 中文 Moonpool 指南：整理扫描解锁、Titanium x5、Habitat Builder 摆放、Tadpole Dock 空间、Vehicle Fabricator 和 insufficient space 修正。',
    },
    eyebrow: 'Subnautica 2 载具区设置',
    title: 'Subnautica 2 Moonpool 指南',
    description:
      'Moonpool 不是只要材料够就行。真正容易出问题的是位置：下方有没有空间，Tadpole 能不能顺着进出，Dock 和 Vehicle Fabricator 会不会互相挤。',
    quickLabel: '快速结论',
    quickAnswer:
      'Subnautica2.gg 当前把 Moonpool 写成需要解锁的蓝图，并列出扫描和 Data Box 类路线。Dexerto 当前列出的建造材料是 Titanium x5，用 Habitat Builder 建造。PC Gamer 和 AllThingsHow 都把 Moonpool 放进 Tadpole Dock、Vehicle Fabricator 的载具链里；Shacknews 提到常见的 “insufficient space to dock” 问题通常要从空间和摆放位置修。建议在开阔水域先建 Moonpool，再围绕 Tadpole 进出路线摆 Dock 和 Vehicle Fabricator。',
    fieldNotesTitle: 'Moonpool 摆放笔记',
    fieldNotes: [
      {
        title: '从载具进出角度看空间',
        body: '从基地墙面看预览可能很顺眼，但 Tadpole 进出时不一定舒服。确定前先游一遍进出线。',
      },
      {
        title: '觉得挤就早点重建',
        body: 'Titanium x5 比每次载具进出都别扭便宜多了。还没装饰前发现位置不舒服，直接搬。',
      },
      {
        title: '给载具基地起清楚名字',
        body: 'Moonpool 会变成路线中心。Beacon 名字要写它服务什么，比如 “Tadpole bay” 或 “east vehicle base”。',
      },
    ],
    routeChecklistTitle: '载具舱检查',
    routeChecklist: [
      'Moonpool 下方和四周都有开阔水域。',
      '从载具方向测试过进出路线。',
      '扩建前已经用 Beacon 标记载具舱。',
      'Tadpole Dock 和 Vehicle Fabricator 附近有空间。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Moonpool 设置路线',
    routeSteps: [
      {
        title: '先解锁，再搬材料',
        body: 'Subnautica2.gg 当前资料把 Moonpool 写成有扫描和 Data Box 类线索的蓝图。先跑解锁路线，再看 PDA 确认当前版本能不能建。',
      },
      {
        title: '配方本身不复杂',
        body: 'Dexerto 当前把 Moonpool 写成 Habitat Builder 基地部件，材料是 Titanium x5。成本不算夸张，所以摆错了早点重建也不心疼。',
      },
      {
        title: '选开阔水域',
        body: 'Moonpool 比普通房间更吃空间。下方要留给 Dock，侧面要留给 Tadpole 进出，水深也要够，别贴着地形硬塞。',
      },
      {
        title: 'Dock 和 Vehicle Fabricator 一起想',
        body: 'PC Gamer 和 AllThingsHow 都把载具路线写成 Moonpool、Tadpole Dock、Vehicle Fabricator 一起处理。Moonpool 要按载具路线摆，不要只看哪里能接上一面墙。',
      },
      {
        title: '报空间不足就别硬调角度',
        body: '如果游戏提示 insufficient space，通常不是你差一点角度，而是位置本身太挤。Shacknews 的处理思路也是回到 clearance，把载具区移到更开阔的地方。',
      },
    ],
    tableTitle: 'Moonpool 检查表',
    tableHeaders: ['需要什么', '确认什么'],
    tableRows: [
      ['蓝图解锁', '当前公开资料列出扫描 / Data Box 类线索。'],
      ['Titanium x5', 'Dexerto 当前列出的建造材料。'],
      ['Habitat Builder', '当前基地部件页写的是用 Habitat Builder 建造。'],
      ['开阔水域', '基地下方和周围都要有空间。'],
      ['Tadpole Dock', 'Moonpool 空间够了再接 Dock。'],
      ['Vehicle Fabricator', '围绕同一条载具进出路线规划。'],
    ],
    visualTitle: '载具区适配卡',
    visualItems: [
      {
        label: '下方',
        value: '留空',
        note: 'Dock 需要深度和空间。',
      },
      {
        label: '配方',
        value: '5 Ti',
        note: '摆错时早点重建。',
      },
      {
        label: '路线',
        value: 'Tadpole',
        note: '进出角度比预览更重要。',
      },
    ],
    cautionTitle: '太挤的 Moonpool 会让每次载具进出都很烦',
    cautionBody:
      '如果 Tadpole 每次都要蹭着地形或基地部件进出，Moonpool 位置就是错的。早期重建一次，比后面十几趟都别扭要省时间。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Moonpool 怎么解锁？',
        body: 'Subnautica2.gg 当前资料把 Moonpool 写成有扫描和 Data Box 类解锁线索的蓝图。抢先体验阶段路线可能调整，扫描后看 PDA 最稳。',
      },
      {
        title: 'Moonpool 配方是什么？',
        body: 'Dexerto 当前列出 Moonpool 是 Habitat Builder 基地部件，材料是 Titanium x5。',
      },
      {
        title: 'Moonpool 应该放在哪里？',
        body: '放在开阔水域，下方和侧面都要留空间，Tadpole 进出路线要顺。避开浅水、岩壁和拥挤基地。',
      },
      {
        title: '为什么 Moonpool 提示 insufficient space to dock？',
        body: '通常是空间不够。把 Moonpool 移远离地形，或在更深、更开阔的水域重建载具区，再接 Tadpole Dock。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      {
        href: Routes.Subnautica2InsufficientSpaceToDock,
        label: 'Insufficient Space to Dock 修复',
      },
      { href: Routes.Subnautica2BaseBuilding, label: '基地建造指南' },
      { href: Routes.Subnautica2HabitatBuilder, label: 'Habitat Builder 指南' },
      { href: Routes.Subnautica2TadpoleDock, label: 'Tadpole Dock 指南' },
      {
        href: Routes.Subnautica2VehicleFabricator,
        label: 'Vehicle Fabricator 指南',
      },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 载具指南' },
      { href: Routes.Subnautica2Beacon, label: 'Beacon 指南' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium 位置指南' },
      { href: Routes.Subnautica2Glass, label: 'Glass 配方指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 28 日核对 Subnautica2.gg、Dexerto、PC Gamer 和 Shacknews。Subnautica 2 仍处于抢先体验阶段，解锁路线、建造材料、摆放行为和 docking 报错都可能随补丁变化。',
    cardKicker: '载具区卡片',
    cardBody:
      '扫描 / Data Box 解锁线索、Titanium x5、Habitat Builder 摆放、Tadpole Dock 空间、Vehicle Fabricator 搭配和空间不足修正。',
    cardTypeLabel: '类型',
    cardTypeValue: '基地部件指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = moonpoolCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  moonpoolCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Moonpool Guide',
      description:
        'Guide for Moonpool unlocks, Titanium x5, Habitat Builder placement, Tadpole Dock clearance, Vehicle Fabricator setup, and docking-space fixes.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = moonpoolCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2Moonpool,
  });
}

export default async function MoonpoolGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = moonpoolCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={WavesIcon}
      locale={locale}
      pathname={Routes.Subnautica2Moonpool}
      sources={sharedSources}
    />
  );
}
