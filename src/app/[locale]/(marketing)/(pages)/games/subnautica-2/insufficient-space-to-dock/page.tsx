import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { AlertTriangleIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type DockFixCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-26';

const sharedSources = [
  {
    href: 'https://www.shacknews.com/article/149262/how-to-fix-insufficient-space-to-dock-in-subnautica-2?amphtml=1',
    label: 'Shacknews insufficient space to dock fix',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-tadpole-scan-locations/',
    label: 'PC Gamer Tadpole and Moonpool guide',
  },
  {
    href: 'https://allthings.how/how-to-place-the-tadpole-dock-in-subnautica-2/',
    label: 'AllThingsHow Tadpole Dock placement guide',
  },
];

const dockFixCopy: Record<string, DockFixCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Insufficient Space to Dock Fix - Moonpool and Tadpole Dock',
      description:
        'Fix the Subnautica 2 insufficient space to dock message with Moonpool clearance checks, Tadpole Dock placement, terrain spacing, rebuild rules, and quick tests.',
    },
    eyebrow: 'Subnautica 2 docking fix',
    title: 'Subnautica 2 Insufficient Space to Dock Fix',
    description:
      'The “insufficient space to dock” message usually feels like the game is being picky. Most of the time, it is simpler than that: the Moonpool is too close to terrain, too shallow below, or boxed in by your own base pieces.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'If Subnautica 2 says insufficient space to dock, move the Moonpool or Tadpole Dock to deeper, more open water. Shacknews points the fix toward clearing space around the docking area, while PC Gamer and AllThingsHow both treat the Moonpool, Tadpole Dock, and Vehicle Fabricator as a connected vehicle-bay setup. Do not keep rotating the preview in a cramped spot. Rebuild the bay where the Tadpole has a clean approach and enough room underneath.',
    contentsLabel: 'Contents',
    routeTitle: 'Docking fix route',
    routeSteps: [
      {
        title: 'Stop rotating the same bad spot',
        body: 'If the preview keeps failing, the problem is probably not a tiny angle. The Moonpool or dock needs more actual water around it.',
      },
      {
        title: 'Check below the Moonpool',
        body: 'PC Gamer notes that the vehicle setup needs room below because the dock extends downward. Shallow seafloor under the base is a common cause of docking pain.',
      },
      {
        title: 'Move away from rocks and base clutter',
        body: 'Shacknews focuses on clearing space around the dock. Give the Tadpole room to line up before it reaches the bay instead of forcing a sharp turn at the entrance.',
      },
      {
        title: 'Place Moonpool, then Dock, then Fabricator',
        body: 'AllThingsHow describes the vehicle pieces as a Moonpool-based setup. Build the Moonpool first, confirm the approach, then add Tadpole Dock and Vehicle Fabricator.',
      },
      {
        title: 'Test before storing the materials',
        body: 'Pilot in and out a few times before calling the base finished. If the approach feels awkward now, it will feel worse when you come home low on oxygen or power.',
      },
    ],
    tableTitle: 'Fix checklist',
    tableHeaders: ['Check', 'What to do'],
    tableRows: [
      ['Moonpool depth', 'Move it if terrain is close underneath.'],
      [
        'Side clearance',
        'Leave room around the bay, not just at the wall slot.',
      ],
      [
        'Approach path',
        'Tadpole should enter without scraping or sharp turns.',
      ],
      ['Tadpole Dock', 'Attach after Moonpool placement feels clean.'],
      ['Vehicle Fabricator', 'Keep it near the bay without blocking entry.'],
      ['Rebuild early', 'Cheap fixes beat living with a bad vehicle bay.'],
    ],
    visualTitle: 'Dock error card',
    visualItems: [
      {
        label: 'Cause',
        value: 'space',
        note: 'Usually clearance, not a mystery unlock.',
      },
      {
        label: 'Fix',
        value: 'move bay',
        note: 'Open water solves more than rotation does.',
      },
      {
        label: 'Test',
        value: 'pilot',
        note: 'Drive in and out before trusting it.',
      },
    ],
    cautionTitle: 'Do not decorate around a broken dock',
    cautionBody:
      'Once lockers, power pieces, and extra rooms surround the bay, fixing it gets annoying. If docking feels wrong, move the Moonpool before the base grows around the mistake.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'What causes insufficient space to dock in Subnautica 2?',
        body: 'Usually Moonpool or Tadpole Dock clearance. The bay may be too close to terrain, too shallow underneath, or blocked by nearby base pieces.',
      },
      {
        title: 'Do I need to rebuild the Moonpool?',
        body: 'Often yes. If moving the dock piece does not fix it quickly, rebuild the Moonpool in deeper open water before adding the rest of the vehicle setup.',
      },
      {
        title: 'Should Vehicle Fabricator be placed before Tadpole Dock?',
        body: 'Plan them together, but make the Moonpool and Dock path clean first. Vehicle Fabricator should support the bay, not block the approach.',
      },
      {
        title: 'Can I fix the message by rotating the dock?',
        body: 'Sometimes, but do not waste long on rotation if the area is cramped. More clearance is the reliable fix.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Moonpool, label: 'Moonpool Guide' },
      { href: Routes.Subnautica2TadpoleDock, label: 'Tadpole Dock Guide' },
      {
        href: Routes.Subnautica2VehicleFabricator,
        label: 'Vehicle Fabricator Guide',
      },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Vehicle Guide' },
      { href: Routes.Subnautica2BaseBuilding, label: 'Base Building Guide' },
      {
        href: Routes.Subnautica2HabitatBuilder,
        label: 'Habitat Builder Guide',
      },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 26, 2026 against Shacknews, PC Gamer, and AllThingsHow. Subnautica 2 is in Early Access, so docking checks, placement previews, and Moonpool behavior can change after patches.',
    cardKicker: 'Docking error card',
    cardBody:
      'Moonpool depth, Tadpole Dock clearance, approach path, Vehicle Fabricator spacing, and rebuild timing.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Fix guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Insufficient Space to Dock 修复 - Moonpool 和 Tadpole Dock',
      description:
        'Subnautica 2 中文 insufficient space to dock 修复指南：整理 Moonpool 空间、Tadpole Dock 摆放、地形距离、重建时机和测试方法。',
    },
    eyebrow: 'Subnautica 2 停靠问题修复',
    title: 'Subnautica 2 Insufficient Space to Dock 修复',
    description:
      '“insufficient space to dock” 看起来像是游戏在挑角度，但多数时候就是位置太挤：Moonpool 下方太浅、太贴地形，或者被你自己的基地部件堵住了。',
    quickLabel: '快速结论',
    quickAnswer:
      '如果 Subnautica 2 提示 insufficient space to dock，优先把 Moonpool 或 Tadpole Dock 移到更深、更开阔的水域。Shacknews 的修复思路是清理停靠区域空间；PC Gamer 和 AllThingsHow 都把 Moonpool、Tadpole Dock、Vehicle Fabricator 当成一整套载具区来处理。不要在狭窄位置一直转预览，重建到 Tadpole 能顺畅进出、下方也有空间的位置更快。',
    contentsLabel: '目录',
    routeTitle: 'Docking 修复路线',
    routeSteps: [
      {
        title: '别在同一个坏位置反复转角度',
        body: '如果预览一直失败，通常不是差一点角度，而是 Moonpool 或 Dock 周围真的没有足够水域。',
      },
      {
        title: '先看 Moonpool 下方',
        body: 'PC Gamer 提醒载具设置需要下方空间，因为 Dock 会往下延伸。基地下面太浅，是停靠问题的常见原因。',
      },
      {
        title: '远离岩壁和基地杂物',
        body: 'Shacknews 的修复重点是清出 dock 周围空间。Tadpole 要能提前对准入口，不要到门口才急转弯。',
      },
      {
        title: '按 Moonpool、Dock、Fabricator 顺序摆',
        body: 'AllThingsHow 把载具部件写成 Moonpool 体系。先摆 Moonpool，确认进出路线，再接 Tadpole Dock 和 Vehicle Fabricator。',
      },
      {
        title: '收工前实际开几次',
        body: '别只看预览变绿。Tadpole 做出来后，先开进开出几次；现在觉得别扭，低氧低电回家时会更烦。',
      },
    ],
    tableTitle: '修复检查表',
    tableHeaders: ['检查项', '怎么处理'],
    tableRows: [
      ['Moonpool 下方深度', '地形太近就移动 Moonpool。'],
      ['侧面空间', '不仅墙面要空，周围也要能进出。'],
      ['进出路线', 'Tadpole 不应该蹭地形或急转弯。'],
      ['Tadpole Dock', 'Moonpool 位置顺了再接 Dock。'],
      ['Vehicle Fabricator', '靠近载具区，但别挡入口。'],
      ['早点重建', '越早改，损失越小。'],
    ],
    visualTitle: 'Dock 报错卡',
    visualItems: [
      {
        label: '原因',
        value: '空间',
        note: '多数不是没解锁，而是 clearance 不够。',
      },
      {
        label: '修复',
        value: '移动',
        note: '开阔水域比硬转角度靠谱。',
      },
      {
        label: '测试',
        value: '驾驶',
        note: '实际进出几次再放心。',
      },
    ],
    cautionTitle: '不要围着一个坏 Dock 装修基地',
    cautionBody:
      '一旦箱子、供电和房间都围上去，修载具区就会很麻烦。如果停靠手感不对，趁基地还小，先把 Moonpool 挪走。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 insufficient space to dock 是什么原因？',
        body: '通常是 Moonpool 或 Tadpole Dock 空间不够。可能太贴地形、下方太浅，或者附近基地部件挡住了进出路线。',
      },
      {
        title: '需要重建 Moonpool 吗？',
        body: '很多时候需要。如果单独挪 Dock 很快解决不了，就把 Moonpool 放到更深、更开阔的水域再接载具部件。',
      },
      {
        title: 'Vehicle Fabricator 要不要先放？',
        body: '可以一起规划，但先保证 Moonpool 和 Dock 进出路线顺。Vehicle Fabricator 是辅助载具区，不应该挡路。',
      },
      {
        title: '只靠旋转 Dock 能修好吗？',
        body: '有时可以，但如果位置本身很挤，别浪费太久。更大的空间才是稳定解法。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Moonpool, label: 'Moonpool 指南' },
      { href: Routes.Subnautica2TadpoleDock, label: 'Tadpole Dock 指南' },
      {
        href: Routes.Subnautica2VehicleFabricator,
        label: 'Vehicle Fabricator 指南',
      },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 载具指南' },
      { href: Routes.Subnautica2BaseBuilding, label: '基地建造指南' },
      { href: Routes.Subnautica2HabitatBuilder, label: 'Habitat Builder 指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 26 日核对 Shacknews、PC Gamer 和 AllThingsHow。Subnautica 2 仍处于抢先体验阶段，停靠检查、摆放预览和 Moonpool 行为可能随补丁变化。',
    cardKicker: '停靠报错卡片',
    cardBody:
      'Moonpool 下方深度、Tadpole Dock 空间、进出路线、Vehicle Fabricator 距离和重建时机。',
    cardTypeLabel: '类型',
    cardTypeValue: '修复指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = dockFixCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  dockFixCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Insufficient Space to Dock Fix',
      description:
        'Fix guide for insufficient space to dock, Moonpool clearance, Tadpole Dock placement, Vehicle Fabricator spacing, and docking tests.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = dockFixCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2InsufficientSpaceToDock,
  });
}

export default async function InsufficientSpaceToDockGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = dockFixCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={AlertTriangleIcon}
      locale={locale}
      pathname={Routes.Subnautica2InsufficientSpaceToDock}
      sources={sharedSources}
    />
  );
}
