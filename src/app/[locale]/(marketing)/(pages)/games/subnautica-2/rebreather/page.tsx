import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { WindIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type RebreatherCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-26';

const sharedSources = [
  {
    href: 'https://www.gamespot.com/gallery/subnautica-2-early-access-guide/2900-6555/',
    label: 'GameSpot Subnautica 2 Early Access guide',
  },
  {
    href: 'https://subnautica2.wiki.gg/wiki/Rebreather_(Subnautica_2)',
    label: 'Subnautica 2 Wiki Rebreather page',
  },
  {
    href: 'https://mobalytics.gg/blog/subnautica-2/how-to-get-fiber-mesh/',
    label: 'Mobalytics Fiber Mesh and Rebreather notes',
  },
  {
    href: 'https://wiki.serenesforest.net/index.php?title=Subnautica_2_-_Equipment',
    label: 'Serenes Forest Subnautica 2 equipment table',
  },
];

const rebreatherCopy: Record<string, RebreatherCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Rebreather Guide - Recipe, Unlock, and Deep-Dive Timing',
      description:
        'A practical Subnautica 2 Rebreather guide covering Blueprint Analyzer unlock, System Chip, Fiber Mesh, Wiring Kit, deeper oxygen routes, and when to craft it.',
    },
    eyebrow: 'Subnautica 2 breathing gear',
    title: 'Subnautica 2 Rebreather Guide',
    description:
      'The Rebreather is the upgrade you craft when depth starts wasting oxygen faster than your route plan can keep up. It is not a magic air tank, but it makes deeper errands feel much less punishing.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current GameSpot reporting points to the Rebreather as an early Blueprint Analyzer unlock. The Subnautica 2 Wiki lists the recipe as System Chip x1 and Fiber Mesh x1, while other guide tables describe the same chain through Wiring Kit and Fiber Mesh. Treat the exact menu text as patch-sensitive and confirm it in your save before farming.',
    contentsLabel: 'Contents',
    routeTitle: 'Rebreather craft plan',
    routeSteps: [
      {
        title: 'Unlock it before chasing materials',
        body: 'GameSpot calls the Rebreather one of the early unlocks from the Blueprint Analyzer. If it is not visible, keep feeding the analyzer and do not waste the trip on parts yet.',
      },
      {
        title: 'Trace the electronics chain',
        body: 'System Chip pulls you back through Wiring Kit, and Wiring Kit usually means Silver pressure. If Silver is scarce, make sure the Rebreather is the next actual blocker before spending it.',
      },
      {
        title: 'Bring Fiber Mesh into the same run',
        body: 'Mobalytics and current recipe notes connect Fiber Mesh to the Rebreather chain. Fold it into a Wakemaker or creepvine route so you are not making a plant-only return trip.',
      },
      {
        title: 'Craft it for depth, not short swims',
        body: 'The Rebreather matters when the route is deep enough that oxygen drain becomes the problem. If you are still doing shallow scans near home, a bigger tank or cleaner route may matter more.',
      },
      {
        title: 'Pair it with turn-back rules',
        body: 'Better breathing gear does not remove navigation mistakes. Mark the way out, keep a reserve, and return before the dive feels clever.',
      },
    ],
    tableTitle: 'Rebreather checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      ['Unlock', 'GameSpot reports Blueprint Analyzer access.'],
      ['System Chip x1', 'Subnautica 2 Wiki currently lists it in the recipe.'],
      ['Fiber Mesh x1', 'Plant material chain tied to Rebreather prep.'],
      ['Wiring Kit', 'Appears through System Chip or guide-table wording.'],
      ['Use case', 'Best when depth is draining oxygen too fast.'],
    ],
    visualTitle: 'Deep-dive chain',
    visualItems: [
      {
        label: 'Unlock',
        value: 'Analyzer',
        note: 'Check the Blueprint Analyzer before farming.',
      },
      {
        label: 'Craft',
        value: 'Gear',
        note: 'System Chip and Fiber Mesh are the key checks.',
      },
      {
        label: 'Dive',
        value: 'Deeper routes',
        note: 'Use it where oxygen drain starts to hurt.',
      },
    ],
    cautionTitle: 'Do not let the recipe wording surprise you',
    cautionBody:
      'Some current pages describe the Rebreather by final components, while others describe the raw chain underneath. Open your Fabricator or equipment menu and follow the recipe your save shows.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you unlock the Rebreather in Subnautica 2?',
        body: 'GameSpot reports it as an early Blueprint Analyzer unlock. If it is not available, keep progressing the analyzer first.',
      },
      {
        title: 'What is the Rebreather recipe?',
        body: 'The Subnautica 2 Wiki currently lists System Chip x1 and Fiber Mesh x1. Some guide tables describe the chain through Wiring Kit and Fiber Mesh, so check your in-game menu.',
      },
      {
        title: 'When should you craft the Rebreather?',
        body: 'Craft it when deeper routes are eating oxygen too fast. For shallow loops, Air Tank upgrades and cleaner pathing may solve more.',
      },
      {
        title: 'Does the Rebreather replace oxygen upgrades?',
        body: 'No. It helps with depth penalties, but you still want good tank planning, safe exits, and a turn-back habit.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2OxygenDepth, label: 'Oxygen and Depth Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
      { href: Routes.Subnautica2SystemChip, label: 'System Chip Guide' },
      { href: Routes.Subnautica2WiringKit, label: 'Wiring Kit Guide' },
      { href: Routes.Subnautica2FiberMesh, label: 'Fiber Mesh Guide' },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 26, 2026 against GameSpot, Subnautica 2 Wiki, Mobalytics, and Serenes Forest. Early Access recipe text and unlock wording can change, so this page treats the exact menu wording as something to verify in-game.',
    cardKicker: 'Breathing gear card',
    cardBody:
      'Blueprint Analyzer unlock, System Chip, Fiber Mesh, Wiring Kit chain, and deep-route oxygen timing.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Equipment guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Rebreather 指南 - 配方、解锁和深潜时机',
      description:
        'Subnautica 2 中文 Rebreather 指南：整理 Blueprint Analyzer 解锁、System Chip、Fiber Mesh、Wiring Kit、深水氧气路线和制作时机。',
    },
    eyebrow: 'Subnautica 2 呼吸装备',
    title: 'Subnautica 2 Rebreather 指南',
    description:
      'Rebreather 适合在深度开始明显吃氧气时制作。它不是额外气瓶，但能让深一点的往返路线少很多压力。',
    quickLabel: '快速结论',
    quickAnswer:
      'GameSpot 当前把 Rebreather 写成前期 Blueprint Analyzer 解锁。Subnautica 2 Wiki 当前配方是 System Chip x1 和 Fiber Mesh x1，其他资料表会从 Wiring Kit 和 Fiber Mesh 这条材料链描述。抢先体验阶段文本可能变，正式刷材料前先看你存档里的菜单。',
    contentsLabel: '目录',
    routeTitle: 'Rebreather 制作规划',
    routeSteps: [
      {
        title: '先解锁，再刷材料',
        body: 'GameSpot 把 Rebreather 归到前期 Blueprint Analyzer 解锁里。如果菜单里还看不到，先推进 analyzer，不要急着为它刷一堆材料。',
      },
      {
        title: '倒查电子材料链',
        body: 'System Chip 会把你带回 Wiring Kit，而 Wiring Kit 通常会卡 Silver。Silver 紧张时，先确认 Rebreather 真的是下一步瓶颈。',
      },
      {
        title: '把 Fiber Mesh 合并进同一趟路线',
        body: 'Mobalytics 和当前配方资料都把 Fiber Mesh 接到 Rebreather 链上。最好和 Wakemaker 或 creepvine 路线一起做，别单独为了植物材料折返。',
      },
      {
        title: '为深度制作，不为短途制作',
        body: 'Rebreather 的价值在深水路线。还在家门口浅水区扫图时，气瓶升级或更干净的路线可能更重要。',
      },
      {
        title: '继续保留返航规则',
        body: '呼吸装备更好，不代表可以乱钻。记路、留氧气余量、感觉路线开始贪时就该回头。',
      },
    ],
    tableTitle: 'Rebreather 检查表',
    tableHeaders: ['需求', '确认什么'],
    tableRows: [
      ['解锁', 'GameSpot 报道为 Blueprint Analyzer 解锁。'],
      ['System Chip x1', 'Subnautica 2 Wiki 当前列在配方里。'],
      ['Fiber Mesh x1', '与 Rebreather 前置材料链相关。'],
      ['Wiring Kit', '可能通过 System Chip 或资料表写法出现。'],
      ['用途', '最适合氧气被深度惩罚明显拖慢的路线。'],
    ],
    visualTitle: '深潜装备链',
    visualItems: [
      {
        label: '解锁',
        value: 'Analyzer',
        note: '刷材料前先看 Blueprint Analyzer。',
      },
      {
        label: '制作',
        value: '装备',
        note: '重点检查 System Chip 和 Fiber Mesh。',
      },
      {
        label: '下潜',
        value: '深水路线',
        note: '用在氧气消耗开始明显变痛的地方。',
      },
    ],
    cautionTitle: '别被不同资料的配方写法绕晕',
    cautionBody:
      '有些页面写最终组件，有些页面写底层材料链。以你游戏菜单里的配方为准，再决定要刷 Silver、Wiring Kit 还是 Fiber Mesh。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Rebreather 怎么解锁？',
        body: 'GameSpot 报道它属于前期 Blueprint Analyzer 解锁。如果还没有，先继续推进 analyzer。',
      },
      {
        title: 'Rebreather 配方是什么？',
        body: 'Subnautica 2 Wiki 当前列的是 System Chip x1 和 Fiber Mesh x1。部分资料表会从 Wiring Kit 与 Fiber Mesh 材料链写起，所以要看你的游戏菜单。',
      },
      {
        title: '什么时候该做 Rebreather？',
        body: '当深一点的路线开始让氧气消耗变得很紧时就该做。浅水循环里，气瓶和路线规划可能更优先。',
      },
      {
        title: 'Rebreather 能替代氧气升级吗？',
        body: '不能。它缓解深度惩罚，但你仍然需要气瓶规划、撤离路线和及时回头的习惯。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2OxygenDepth, label: '氧气与深度指南' },
      { href: Routes.Subnautica2AirTank, label: '气瓶和氧气' },
      { href: Routes.Subnautica2SystemChip, label: 'System Chip 指南' },
      { href: Routes.Subnautica2WiringKit, label: 'Wiring Kit 指南' },
      { href: Routes.Subnautica2FiberMesh, label: 'Fiber Mesh 指南' },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker 指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 26 日核对 GameSpot、Subnautica 2 Wiki、Mobalytics 和 Serenes Forest。抢先体验阶段配方和解锁文字可能调整，所以页面提醒玩家以游戏内菜单为准。',
    cardKicker: '呼吸装备卡',
    cardBody:
      'Blueprint Analyzer 解锁、System Chip、Fiber Mesh、Wiring Kit 材料链和深水氧气路线时机。',
    cardTypeLabel: '类型',
    cardTypeValue: '装备指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: 'Early Access',
  },
};

const fallbackCopy = rebreatherCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  rebreatherCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Rebreather Guide',
      description:
        'Guide for Rebreather unlock, System Chip, Fiber Mesh, Wiring Kit, oxygen depth planning, and deep-route timing.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = rebreatherCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2Rebreather,
  });
}

export default async function RebreatherGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = rebreatherCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={WindIcon}
      locale={locale}
      pathname={Routes.Subnautica2Rebreather}
      sources={sharedSources}
    />
  );
}
