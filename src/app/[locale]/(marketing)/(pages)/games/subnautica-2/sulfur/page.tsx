import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { GemIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type SulfurCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-26';

const sharedSources = [
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-sulfur-location/',
    label: 'PC Gamer Sulfur location guide',
  },
  {
    href: 'https://subnautica2hub.com/resources/sulfur',
    label: 'Subnautica2Hub Sulfur resource page',
  },
  {
    href: 'https://subnautica2.gg/items/sulfur',
    label: 'Subnautica2.gg Sulfur item page',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-repair-tool-fragment-locations/',
    label: 'PC Gamer Repair Tool fragment guide',
  },
];

const sulfurCopy: Record<string, SulfurCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Sulfur Location Guide - Early Crystal Route and Uses',
      description:
        'A practical Subnautica 2 Sulfur guide covering the early Lifepod route, hand pickups, Sonic Resonator bulk mining, Repair Tool use, Strong Acid, and safe return planning.',
    },
    eyebrow: 'Subnautica 2 resource route',
    title: 'Subnautica 2 Sulfur Location Guide',
    description:
      'Sulfur is easy to miss because it looks like another yellow rock. The first piece matters fast: Repair Tool, wreck access, Rebreather progress, and later Strong Acid all touch this little crystal.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'PC Gamer reports an early sulfur spot about 120 degrees southeast of the Lifepod, roughly 200 meters away and around 25 meters deep, near Coral Crabs and past the Welcome Centre. Small pieces can be grabbed by hand there, while larger deposits need the Sonic Resonator. Subnautica2Hub lists Sulfur in Coral Gardens and Observatory Ruins at 0-450m, and Subnautica2.gg lists it as used in 4 recipes.',
    contentsLabel: 'Contents',
    routeTitle: 'First sulfur route',
    routeSteps: [
      {
        title: 'Leave the Lifepod with a clear errand',
        body: 'Head southeast rather than wandering every yellow glint. PC Gamer points to the open seabed near Coral Crabs, past the Welcome Centre, as a quick early sulfur spot.',
      },
      {
        title: 'Look for yellow crystal, not gold',
        body: 'Sulfur is a yellowish crystal and can be mistaken for gold. Check the rock pillar and nearby sand before you call the route empty.',
      },
      {
        title: 'Grab small pieces by hand',
        body: 'PC Gamer describes a few small pieces you can pick up without special mining. That is enough for the first Repair Tool job if you are not bulk farming yet.',
      },
      {
        title: 'Bring Sonic Resonator for bulk',
        body: 'Large sulfur deposits need the Sonic Resonator in current reporting. Once you have the tool, return for a proper stock run instead of treating every trip as an emergency.',
      },
      {
        title: 'Do not push into hot water too early',
        body: 'The same route sits near volcanic vents. PC Gamer warns against swimming farther northeast before heat protection. Take the sulfur and leave if you came for the Repair Tool.',
      },
    ],
    tableTitle: 'Sulfur checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      [
        'Early route',
        'About 120 degrees southeast of the Lifepod in PC Gamer reporting.',
      ],
      ['Depth', 'PC Gamer describes the early spot around 25m deep.'],
      [
        'Biome data',
        'Subnautica2Hub lists Coral Gardens and Observatory Ruins.',
      ],
      [
        'Pickup type',
        'Small pieces by hand; large deposits need Sonic Resonator.',
      ],
      [
        'Main uses',
        'Repair Tool first, then Strong Acid and later wiring chains.',
      ],
    ],
    visualTitle: 'Sulfur plan',
    visualItems: [
      {
        label: 'First piece',
        value: 'Hand pickup',
        note: 'Enough to start the Repair Tool route.',
      },
      {
        label: 'Bulk stock',
        value: 'Sonic',
        note: 'Large deposits are a later return trip.',
      },
      {
        label: 'Spend on',
        value: 'Repairs',
        note: 'Repair Tool, Strong Acid, advanced chains.',
      },
    ],
    cautionTitle: 'The recipe data is not perfectly settled',
    cautionBody:
      'Subnautica2.gg and Subnautica2Hub currently list one Titanium Ingot for Repair Tool, while PC Gamer reports two. The sulfur count is the part they agree on: keep at least one piece ready and trust your PDA for the final craft.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Where is Sulfur in Subnautica 2?',
        body: 'PC Gamer points to an early sulfur spot about 120 degrees southeast of the Lifepod, past the Welcome Centre, around 25m deep. Subnautica2Hub also lists Coral Gardens and Observatory Ruins as sulfur areas.',
      },
      {
        title: 'Can you pick up Sulfur by hand?',
        body: 'Yes, PC Gamer describes small pieces you can grab by hand. Larger sulfur deposits need the Sonic Resonator.',
      },
      {
        title: 'What is Sulfur used for first?',
        body: 'The first important use is usually Repair Tool. It also feeds Strong Acid and later crafting chains.',
      },
      {
        title: 'Should you farm Sulfur before Sonic Resonator?',
        body: 'Only grab enough for immediate repairs. Bulk sulfur is easier once Sonic Resonator can mine the large deposits.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2HeatTolerance, label: 'Heat Tolerance Guide' },
      { href: Routes.Subnautica2AngelComb, label: 'Angel Comb Guide' },
      { href: Routes.Subnautica2BloomBiofilm, label: 'Bloom Biofilm Guide' },
      { href: Routes.Subnautica2RepairTool, label: 'Repair Tool Guide' },
      {
        href: Routes.Subnautica2SonicResonator,
        label: 'Sonic Resonator Guide',
      },
      { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid Guide' },
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather Guide' },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Map, label: 'Map and Biomes' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 26, 2026 against PC Gamer, Subnautica2Hub, and Subnautica2.gg. Location names, recipe counts, and mining requirements can move during Early Access; verify against the PDA after patches.',
    cardKicker: 'Resource card',
    cardBody:
      'Early Lifepod route, hand pickups, Sonic Resonator bulk mining, Repair Tool material conflict note, Strong Acid use, and heat-route warning.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Resource guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Sulfur 位置指南 - 早期水晶路线和用途',
      description:
        'Subnautica 2 中文 Sulfur 指南：整理 Lifepod 早期路线、手捡小块、Sonic Resonator 批量采集、Repair Tool、Strong Acid 和安全返回规划。',
    },
    eyebrow: 'Subnautica 2 资源路线',
    title: 'Subnautica 2 Sulfur 位置指南',
    description:
      'Sulfur 很容易被当成普通黄色石头错过。第一块很关键：Repair Tool、沉船入口、Rebreather 推进，以及后面的 Strong Acid 都会用到它。',
    quickLabel: '快速结论',
    quickAnswer:
      'PC Gamer 报道的早期 Sulfur 点在 Lifepod 东南约 120 度方向，距离大约 200m，深度约 25m，靠近 Coral Crabs，并且在 Welcome Centre 之后。那里有小块 Sulfur 可以手捡，大块矿点当前需要 Sonic Resonator。Subnautica2Hub 把 Sulfur 区域列为 Coral Gardens 和 Observatory Ruins，深度 0-450m；Subnautica2.gg 当前写它用于 4 个配方。',
    contentsLabel: '目录',
    routeTitle: '第一块 Sulfur 路线',
    routeSteps: [
      {
        title: '从 Lifepod 出发时只做一件事',
        body: '别看到每个黄色反光都绕路。PC Gamer 指向的是 Welcome Centre 之后、靠近 Coral Crabs 的开阔海床。',
      },
      {
        title: '找黄色水晶，不是找 Gold',
        body: 'Sulfur 是偏黄的水晶，很容易和 Gold 混。先检查岩柱和附近沙地，再判断这个点是不是空了。',
      },
      {
        title: '小块可以直接捡',
        body: 'PC Gamer 描述那里有几块小 Sulfur 可以手捡。只做第一把 Repair Tool 的话，通常不需要立刻大规模采矿。',
      },
      {
        title: '批量采集再带 Sonic Resonator',
        body: '当前报道里，大块 Sulfur 矿点需要 Sonic Resonator。等这个工具到手，再回来做真正的库存跑图。',
      },
      {
        title: '别太早往热源方向游',
        body: '这条路线靠近火山热泉区域。PC Gamer 提醒在有耐热保护前不要继续往东北深游。拿到 Sulfur 就回，别把小任务变成事故。',
      },
    ],
    tableTitle: 'Sulfur 检查表',
    tableHeaders: ['需要', '确认什么'],
    tableRows: [
      ['早期路线', 'PC Gamer 报道为 Lifepod 东南约 120 度方向。'],
      ['深度', 'PC Gamer 描述早期点约 25m 深。'],
      ['生态区', 'Subnautica2Hub 列出 Coral Gardens 和 Observatory Ruins。'],
      ['采集方式', '小块手捡；大块矿点需要 Sonic Resonator。'],
      ['主要用途', '先做 Repair Tool，之后接 Strong Acid 和后期电路链。'],
    ],
    visualTitle: 'Sulfur 规划',
    visualItems: [
      {
        label: '第一块',
        value: '手捡',
        note: '先解决 Repair Tool。',
      },
      {
        label: '批量',
        value: 'Sonic',
        note: '大矿点留到 Sonic Resonator 之后。',
      },
      {
        label: '用途',
        value: '维修链',
        note: 'Repair Tool、Strong Acid、后期电路。',
      },
    ],
    cautionTitle: 'Repair Tool 配方资料目前有出入',
    cautionBody:
      'Subnautica2.gg 和 Subnautica2Hub 当前写 Repair Tool 需要 1 个 Titanium Ingot，PC Gamer 写的是 2 个。Sulfur 数量倒是都指向至少 1 个。最终制作时以你游戏里的 PDA 为准。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Sulfur 在哪里？',
        body: 'PC Gamer 指向 Lifepod 东南约 120 度、Welcome Centre 后方、约 25m 深的早期点。Subnautica2Hub 也把 Coral Gardens 和 Observatory Ruins 列为 Sulfur 区域。',
      },
      {
        title: 'Sulfur 可以直接捡吗？',
        body: '可以。PC Gamer 描述那里有小块 Sulfur 可以手捡；大块矿点需要 Sonic Resonator。',
      },
      {
        title: 'Sulfur 最早用来做什么？',
        body: '通常最早是 Repair Tool。后面还会接 Strong Acid 和更靠后的制作链。',
      },
      {
        title: '没有 Sonic Resonator 要不要刷 Sulfur？',
        body: '只拿当前急用的数量就好。批量库存等 Sonic Resonator 可以处理大矿点后再做。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2HeatTolerance, label: 'Heat Tolerance Guide' },
      { href: Routes.Subnautica2AngelComb, label: 'Angel Comb Guide' },
      { href: Routes.Subnautica2BloomBiofilm, label: 'Bloom Biofilm Guide' },
      { href: Routes.Subnautica2RepairTool, label: 'Repair Tool 指南' },
      { href: Routes.Subnautica2SonicResonator, label: 'Sonic Resonator 指南' },
      { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid 指南' },
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather 指南' },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker 指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Map, label: '地图与生态区' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 26 日核对 PC Gamer、Subnautica2Hub 和 Subnautica2.gg。地点名、配方数量和采集要求在抢先体验阶段可能变化，更新后请以 PDA 为准。',
    cardKicker: '资源卡',
    cardBody:
      'Lifepod 早期路线、手捡小块、Sonic Resonator 批量采集、Repair Tool 配方差异、Strong Acid 用途和热源路线提醒。',
    cardTypeLabel: '类型',
    cardTypeValue: '资源指南',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = sulfurCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  sulfurCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Sulfur Location Guide',
      description:
        'Guide for Sulfur location, early Lifepod route, Sonic Resonator mining, Repair Tool use, Strong Acid, and heat-route safety.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = sulfurCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2Sulfur,
  });
}

export default async function SulfurGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = sulfurCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={GemIcon}
      locale={locale}
      pathname={Routes.Subnautica2Sulfur}
      sources={sharedSources}
    />
  );
}
