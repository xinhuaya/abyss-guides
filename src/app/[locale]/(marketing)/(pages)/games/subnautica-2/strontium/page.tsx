import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { AtomIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type StrontiumCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-25';
const UPDATED_AT = '2026-05-25';

const sharedSources = [
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-celestine-location/',
    label: 'PC Gamer Celestine guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-feedback-resonator-scan-locations/',
    label: 'PC Gamer Feedback Resonator guide',
  },
  {
    href: 'https://allthings.how/how-to-make-strontium-in-subnautica-2/',
    label: 'All Things How Strontium guide',
  },
];

const strontiumCopy: Record<string, StrontiumCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Strontium Guide - Celestine Route, Processor Recipe, and Upgrade Uses',
      description:
        'A practical Subnautica 2 Strontium guide covering Celestine farming, Sonic Resonator mining, Processor conversion, Tadpole depth prep, and Feedback Resonator use.',
    },
    eyebrow: 'Subnautica 2 refined material',
    title: 'Subnautica 2 Strontium Guide',
    description:
      'Strontium is not something you usually find sitting in a starter cave. It is the processed version of a deeper material route: find Celestine near the Alien Ruins, mine it with the Sonic Resonator, then refine it back at base.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Make Strontium by processing Celestine. Current reporting gives the working recipe as 2 Celestine into 1 Strontium in the Processor. The hard part is the Celestine run: bring the Tadpole, Sonic Resonator, oxygen margin, and a clear way back from the Alien Ruins depth route.',
    contentsLabel: 'Contents',
    routeTitle: 'Strontium route plan',
    routeSteps: [
      {
        title: 'Treat Celestine as the real bottleneck',
        body: 'PC Gamer places Celestine around the Alien Ruins biome at lower depths. If you do not have a calm way to reach that area, the Strontium recipe will sit useless in your head.',
      },
      {
        title: 'Bring the Sonic Resonator',
        body: 'Large Celestine nodes need the Sonic Resonator. Do not swim all the way to the route with only hand tools and optimism. That is how a good route becomes a long sigh.',
      },
      {
        title: 'Use the Processor back at base',
        body: 'All Things How reports the recipe as 2 Celestine into 1 Strontium, processed at the base Processor. If the machine does not start, check power, input count, and whether you are using the Processor instead of another station.',
      },
      {
        title: 'Save it for actual upgrades',
        body: 'PC Gamer lists Strontium as part of the Feedback Resonator upgrade path. It also shows up in later defensive and vehicle module planning, so do not burn the first batch on experiments.',
      },
      {
        title: 'Mark the return route',
        body: 'Once you have one clean Celestine line, Strontium stops feeling rare. Drop a beacon or keep a landmark note so the second trip is a routine mining run.',
      },
    ],
    tableTitle: 'Strontium checklist',
    tableHeaders: ['Need', 'Why it matters'],
    tableRows: [
      [
        'Celestine',
        'The raw input for Strontium. Current guides point to the Alien Ruins depth route.',
      ],
      [
        'Sonic Resonator',
        'Required for the larger Celestine nodes that make the trip worth doing.',
      ],
      ['Processor', 'The base station that converts Celestine into Strontium.'],
      [
        'Tadpole depth planning',
        'Celestine sits around the depth where hull limits and oxygen habits start to matter.',
      ],
      [
        'Upgrade priority',
        'Feedback Resonator and later modules can ask for Strontium, so spend it deliberately.',
      ],
    ],
    visualTitle: 'Refining card',
    visualItems: [
      {
        label: 'Mine',
        value: 'Celestine',
        note: 'Run the Alien Ruins route with Sonic Resonator ready.',
      },
      {
        label: 'Process',
        value: '2 to 1',
        note: 'Use the Processor, not the Fabricator or random stations.',
      },
      {
        label: 'Spend',
        value: 'Upgrades',
        note: 'Keep the first batch for Feedback Resonator and module work.',
      },
    ],
    cautionTitle: 'Do not confuse the ore with the refined material',
    cautionBody:
      'If a recipe asks for Strontium, raw Celestine is not enough. Mine the ore, go home, process it, then return to the Modification Station. It is a small extra step, but it is the step that causes most wasted trips.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you make Strontium in Subnautica 2?',
        body: 'Current reporting says to put 2 Celestine into a Processor to get 1 Strontium.',
      },
      {
        title: 'Where do you get Celestine for Strontium?',
        body: 'Look around the Alien Ruins biome at lower depths. PC Gamer reports a strong route southeast of the Alien Ruins research base, near deeper rocks and Needler patrols.',
      },
      {
        title: 'Do you need Sonic Resonator?',
        body: 'Yes for the larger Celestine nodes. Bring it before committing to the route.',
      },
      {
        title: 'What is Strontium used for?',
        body: 'It is used in advanced upgrade planning. PC Gamer lists it in the Feedback Resonator craft, and current guides also tie it to later defensive or vehicle module work.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Celestine, label: 'Celestine Guide' },
      {
        href: Routes.Subnautica2CreatureEnamel,
        label: 'Creature Enamel Guide',
      },
      {
        href: Routes.Subnautica2SonicResonator,
        label: 'Sonic Resonator Guide',
      },
      {
        href: Routes.Subnautica2FeedbackResonator,
        label: 'Feedback Resonator Guide',
      },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal Guide',
      },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Vehicle Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 25, 2026 against current PC Gamer and All Things How reporting. Subnautica 2 is in Early Access, so Celestine routes, Processor timing, and upgrade recipes should be rechecked after patches.',
    cardKicker: 'Refined material card',
    cardBody:
      'Celestine route, Sonic Resonator mining, Processor conversion, Tadpole depth prep, and upgrade spending.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Material guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Strontium 指南 - Celestine 路线、Processor 配方和升级用途',
      description:
        'Subnautica 2 中文 Strontium 指南：Celestine 在哪里刷、Sonic Resonator 怎么采、Processor 怎么加工，以及 Feedback Resonator 等升级用途。',
    },
    eyebrow: 'Subnautica 2 精炼材料',
    title: 'Subnautica 2 Strontium 指南',
    description:
      'Strontium 不是开局洞穴里随手捡的材料。它其实是 Celestine 的加工产物：先去 Alien Ruins 附近深水路线采 Celestine，再带回基地用 Processor 精炼。',
    quickLabel: '快速结论',
    quickAnswer:
      'Strontium 通过加工 Celestine 获得。当前资料给出的配方是：在 Processor 里放入 2 个 Celestine，产出 1 个 Strontium。真正麻烦的是 Celestine 路线，出发前准备 Tadpole、Sonic Resonator、氧气余量和清楚的回程路线。',
    contentsLabel: '目录',
    routeTitle: 'Strontium 路线规划',
    routeSteps: [
      {
        title: '把 Celestine 当成真正卡点',
        body: 'PC Gamer 把 Celestine 放在 Alien Ruins 生物群系附近的较深区域。如果你还不能稳定到那里，知道 Strontium 配方也没什么用。',
      },
      {
        title: '带上 Sonic Resonator',
        body: '大的 Celestine 节点需要 Sonic Resonator。不要只带手持工具就跑深水，这种失误很容易把一趟路线变成叹气时间。',
      },
      {
        title: '回基地用 Processor 加工',
        body: 'All Things How 报道的配方是 2 个 Celestine 加工成 1 个 Strontium，地点是基地里的 Processor。如果机器不动，先查电力、数量，以及是不是用错工作站。',
      },
      {
        title: '先留给真正的升级',
        body: 'PC Gamer 在 Feedback Resonator 配方里列出了 Strontium。它也会进入后续防御和载具模块规划，第一批别拿去乱试。',
      },
      {
        title: '记下回头路线',
        body: '只要你跑通一条 Celestine 线，Strontium 就从硬卡点变成可重复生产。放 Beacon 或记地标，第二趟会轻松很多。',
      },
    ],
    tableTitle: 'Strontium 检查表',
    tableHeaders: ['需要什么', '为什么重要'],
    tableRows: [
      [
        'Celestine',
        'Strontium 的原料。当前攻略都把它指向 Alien Ruins 深水路线。',
      ],
      ['Sonic Resonator', '大节点需要它来打碎，不然找到矿也采不下来。'],
      ['Processor', '把 Celestine 转成 Strontium 的基地设备。'],
      [
        'Tadpole 深度规划',
        'Celestine 区域接近载具深度和氧气规划开始吃紧的位置。',
      ],
      [
        '升级优先级',
        'Feedback Resonator 和后续模块会用到 Strontium，别随便消耗第一批。',
      ],
    ],
    visualTitle: '精炼流程卡',
    visualItems: [
      {
        label: '采集',
        value: 'Celestine',
        note: '跑 Alien Ruins 路线时带好 Sonic Resonator。',
      },
      {
        label: '加工',
        value: '2 换 1',
        note: '用 Processor，不是 Fabricator 或别的工作站。',
      },
      {
        label: '使用',
        value: '升级',
        note: '第一批优先留给 Feedback Resonator 和模块。',
      },
    ],
    cautionTitle: '别把原矿和精炼材料搞混',
    cautionBody:
      '如果配方要 Strontium，背包里只有 Celestine 不够。先采矿，回基地加工，再去 Modification Station。步骤不复杂，但少做这一步最容易白跑一趟。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Strontium 怎么做？',
        body: '当前资料显示，在 Processor 里放入 2 个 Celestine，可以得到 1 个 Strontium。',
      },
      {
        title: 'Celestine 在哪里找？',
        body: '去 Alien Ruins 生物群系附近的较深区域。PC Gamer 提到 Alien Ruins research base 东南方向、较深岩石和 Needler 巡逻附近有一条不错的路线。',
      },
      {
        title: '需要 Sonic Resonator 吗？',
        body: '需要。大的 Celestine 节点要用 Sonic Resonator 打开，出发前先确认工具带好了。',
      },
      {
        title: 'Strontium 有什么用？',
        body: '它属于高级升级材料。PC Gamer 在 Feedback Resonator 配方里列出 Strontium，当前攻略也把它和后续防御、载具模块联系起来。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2Celestine, label: 'Celestine 指南' },
      { href: Routes.Subnautica2SonicResonator, label: 'Sonic Resonator 指南' },
      {
        href: Routes.Subnautica2FeedbackResonator,
        label: 'Feedback Resonator 指南',
      },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal 指南',
      },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 载具指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 25 日核对 PC Gamer 和 All Things How 的当前报道。Subnautica 2 仍在抢先体验，Celestine 路线、Processor 时间和升级配方后续可能会调整。',
    cardKicker: '精炼材料卡',
    cardBody:
      '整理 Celestine 路线、Sonic Resonator 采矿、Processor 精炼、Tadpole 深度准备和升级消耗。',
    cardTypeLabel: '类型',
    cardTypeValue: '材料指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
  ja: {
    metadata: {
      title:
        'Subnautica 2 Strontium Guide - Celestine route, Processor recipe, and upgrades',
      description:
        'Subnautica 2 Strontium guide for Celestine mining, Sonic Resonator prep, Processor conversion, and Feedback Resonator use.',
    },
    eyebrow: 'Subnautica 2 refined material',
    title: 'Subnautica 2 Strontium Guide',
    description:
      'Strontium comes from processing Celestine. Reach the Alien Ruins route, mine Celestine with Sonic Resonator, then refine it at base.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Process Celestine into Strontium at the Processor. Current guides report 2 Celestine into 1 Strontium. Bring Tadpole, Sonic Resonator, and enough oxygen for the Celestine route.',
    contentsLabel: 'Contents',
    routeTitle: 'Strontium route plan',
    routeSteps: [
      {
        title: 'Solve Celestine first',
        body: 'Celestine is the real route check. Current reporting places it around the Alien Ruins biome at lower depths.',
      },
      {
        title: 'Bring Sonic Resonator',
        body: 'Large Celestine nodes need the Sonic Resonator. Do not arrive with only hand tools.',
      },
      {
        title: 'Use the Processor',
        body: 'Process Celestine at base. If it fails, check power, station, and input count.',
      },
      {
        title: 'Save it for upgrades',
        body: 'Strontium appears in Feedback Resonator and later module planning.',
      },
      {
        title: 'Mark the route',
        body: 'A repeatable Celestine route makes Strontium feel much less rare.',
      },
    ],
    tableTitle: 'Strontium checklist',
    tableHeaders: ['Need', 'Why it matters'],
    tableRows: [
      ['Celestine', 'Raw material for Strontium.'],
      ['Sonic Resonator', 'Breaks large Celestine nodes.'],
      ['Processor', 'Converts Celestine into Strontium.'],
      ['Tadpole depth planning', 'The route sits around deeper water.'],
      ['Upgrade priority', 'Spend the first batch carefully.'],
    ],
    visualTitle: 'Refining card',
    visualItems: [
      { label: 'Mine', value: 'Celestine', note: 'Run the Alien Ruins route.' },
      { label: 'Process', value: '2 to 1', note: 'Use the Processor at base.' },
      {
        label: 'Spend',
        value: 'Upgrades',
        note: 'Save it for tool and module work.',
      },
    ],
    cautionTitle: 'Raw ore is not Strontium',
    cautionBody:
      'If a recipe asks for Strontium, process Celestine first. That small step is easy to forget after a long dive.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you make Strontium?',
        body: 'Current guides report 2 Celestine into 1 Strontium at the Processor.',
      },
      {
        title: 'Where is Celestine?',
        body: 'Around the Alien Ruins biome at lower depths.',
      },
      {
        title: 'Do I need Sonic Resonator?',
        body: 'Yes for large Celestine nodes.',
      },
      {
        title: 'What uses Strontium?',
        body: 'Feedback Resonator and later advanced module planning currently use it.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Celestine, label: 'Celestine Guide' },
      {
        href: Routes.Subnautica2SonicResonator,
        label: 'Sonic Resonator Guide',
      },
      {
        href: Routes.Subnautica2FeedbackResonator,
        label: 'Feedback Resonator Guide',
      },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal Guide',
      },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 25, 2026 against current PC Gamer and All Things How reporting. Early Access details may change.',
    cardKicker: 'Refined material card',
    cardBody:
      'Celestine mining, Sonic Resonator prep, Processor conversion, and upgrade spending.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Material guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
};

const fallbackLocaleAliases = {
  de: {
    title: 'Subnautica 2 Strontium Guide',
    description:
      'Guide for Strontium crafting, Celestine routes, Sonic Resonator mining, Processor use, and upgrades.',
  },
  fr: {
    title: 'Subnautica 2 Strontium Guide',
    description:
      'Guide Strontium pour Celestine, Sonic Resonator, Processor et upgrades.',
  },
  'pt-BR': {
    title: 'Subnautica 2 Strontium Guide',
    description:
      'Guia de Strontium com Celestine, Sonic Resonator, Processor e upgrades.',
  },
  'es-419': {
    title: 'Subnautica 2 Strontium Guide',
    description:
      'Guia de Strontium: Celestine, Sonic Resonator, Processor y mejoras.',
  },
  ko: {
    title: 'Subnautica 2 Strontium Guide',
    description:
      'Strontium crafting, Celestine route, Sonic Resonator mining, Processor use, and upgrades.',
  },
  ru: {
    title: 'Subnautica 2 Strontium Guide',
    description:
      'Guide for Strontium crafting, Celestine route, Sonic Resonator mining, Processor, and upgrades.',
  },
} satisfies Record<string, { title: string; description: string }>;

function getCopy(locale: Locale): StrontiumCopy {
  if (strontiumCopy[locale]) {
    return strontiumCopy[locale];
  }

  const fallback =
    fallbackLocaleAliases[locale as keyof typeof fallbackLocaleAliases] ??
    fallbackLocaleAliases.de;

  return {
    ...strontiumCopy.en,
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
    pathname: Routes.Subnautica2Strontium,
  });
}

export default async function StrontiumPage({
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
      icon={AtomIcon}
      locale={locale}
      pathname={Routes.Subnautica2Strontium}
      sources={sharedSources}
    />
  );
}
