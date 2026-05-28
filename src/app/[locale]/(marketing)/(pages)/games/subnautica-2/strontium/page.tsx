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
const UPDATED_AT = '2026-05-29';

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
  {
    href: 'https://allthings.how/subnautica-2-upgrading-the-sonic-resonator-to-the-feedback-resonator/',
    label: 'All Things How Feedback Resonator recipe guide',
  },
  {
    href: 'https://subnautica2.gg/blueprints/strontium',
    label: 'Subnautica2.gg Strontium blueprint',
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
      'Make Strontium by processing Celestine. Current reporting gives the working recipe as 2 Celestine into 1 Strontium in the Processor. Feedback Resonator currently needs 2x Strontium, so plan on at least 4 Celestine for that upgrade before you count spare stock.',
    fieldNotesTitle: 'Field notes for Strontium planning',
    fieldNotes: [
      {
        title: 'This is a conversion bottleneck',
        body: 'Strontium is not the route; Celestine is. The Processor step only matters because it locks two raw pieces into one planned upgrade material.',
      },
      {
        title: 'Do the math before processing',
        body: 'Two Strontium means four Celestine. If you also want spare Celestine for later recipes, leave it raw until the next target is visible.',
      },
      {
        title: 'Keep it with resonator parts',
        body: 'Strontium is easy to misplace because it looks like a finished resource. Store it beside Feedback Resonator or module materials, not general minerals.',
      },
    ],
    routeChecklistTitle: 'Before making Strontium',
    routeChecklist: [
      'Confirm Processor access and Celestine count.',
      'Convert only the pieces needed for the next upgrade.',
      'Reserve two Strontium if Feedback Resonator is the target.',
      'Keep spare Celestine raw until another recipe demands conversion.',
    ],
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
        body: 'PC Gamer lists Strontium as part of the Feedback Resonator upgrade path, and All Things How says to process enough for at least two units. Treat 2x Strontium as reserved until that craft is done.',
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
        'Feedback Resonator currently needs 2x Strontium, which means at least 4x Celestine before extra stock.',
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
        value: '2x',
        note: 'Keep the first two Strontium for Feedback Resonator.',
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
        body: 'It is used in advanced upgrade planning. Current Feedback Resonator guides list 2x Strontium in that craft, alongside Enameled Glass and Conduit Crystal.',
      },
      {
        title: 'How much Celestine should I bring back for Feedback Resonator?',
        body: 'At minimum, bring 4x Celestine if you only need the 2x Strontium for Feedback Resonator. Bring extra if you still need Celestine for Modification Station or Tadpole upgrades.',
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
      'Checked May 27, 2026 against current PC Gamer, All Things How, and Subnautica2.gg reporting. Subnautica 2 is in Early Access, so Celestine routes, Processor timing, and upgrade recipes should be rechecked after patches.',
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
    fieldNotesTitle: 'Strontium 规划笔记',
    fieldNotes: [
      {
        title: '这是转换卡点',
        body: 'Strontium 本身不是路线，Celestine 才是路线。Processor 这一步重要，是因为它会把两个原料锁成一个目标升级材料。',
      },
      {
        title: '加工前先算清楚',
        body: '两个 Strontium 就是四个 Celestine。如果你还想给后续配方留原 Celestine，先别全部加工。',
      },
      {
        title: '和 resonator 材料放一起',
        body: 'Strontium 很容易因为是成品资源而放错箱。把它放在 Feedback Resonator 或模块材料旁边，不要丢进普通矿物箱。',
      },
    ],
    routeChecklistTitle: '制作 Strontium 前',
    routeChecklist: [
      '确认 Processor 可用，并数清 Celestine 数量。',
      '只加工下一个升级需要的数量。',
      '如果目标是 Feedback Resonator，先预留 2 个 Strontium。',
      '其它 Celestine 保持原料状态，等配方明确后再转。',
    ],
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
      '2026 年 5 月 27 日核对 PC Gamer 和 All Things How 的当前报道。Subnautica 2 仍在抢先体验，Celestine 路线、Processor 时间和升级配方后续可能会调整。',
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
      'Checked May 27, 2026 against current PC Gamer and All Things How reporting. Early Access details may change.',
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

strontiumCopy.zh = {
  ...strontiumCopy.en,
  metadata: {
    title:
      'Subnautica 2 Strontium 指南 - Celestine 路线、Processor 配方和升级用途',
    description:
      'Subnautica 2 中文 Strontium 指南：Celestine 在哪里刷、Sonic Resonator 怎么采、Processor 怎么加工，以及 Feedback Resonator 需要多少。',
  },
  eyebrow: 'Subnautica 2 精炼材料',
  title: 'Subnautica 2 Strontium 指南',
  description:
    'Strontium 不是开局洞穴里随手捡的材料。它是 Celestine 的加工产物：先去 Alien Ruins 附近深水路线采 Celestine，再带回基地用 Processor 精炼。',
  quickLabel: '快速结论',
  quickAnswer:
    'Strontium 通过加工 Celestine 获得。当前资料给出的配方是：在 Processor 里放入 2 个 Celestine，产出 1 个 Strontium。Feedback Resonator 目前需要 2 个 Strontium，也就是至少 4 个 Celestine，别把第一批随手花掉。',
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
      title: '先给 Feedback Resonator 留两个',
      body: 'PC Gamer 和 All Things How 的 Feedback Resonator 配方都把 Strontium 放进升级链。先预留 2 个 Strontium，再考虑后续防御或载具模块。',
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
      'Strontium 的原料。Feedback Resonator 至少要 4 个 Celestine 才够加工出 2 个 Strontium。',
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
      label: '预留',
      value: '2x',
      note: '第一批优先留给 Feedback Resonator。',
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
      title: 'Feedback Resonator 要几个 Strontium？',
      body: '当前 Feedback Resonator 配方写的是 2 个 Strontium，也就是至少 4 个 Celestine 的加工量。',
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
    {
      href: Routes.Subnautica2ModificationStation,
      label: 'Modification Station 指南',
    },
    { href: Routes.Subnautica2Tadpole, label: 'Tadpole 载具指南' },
    { href: Routes.Subnautica2Resources, label: '资源指南' },
  ],
  sourcesTitle: '来源说明',
  sourceBody:
    '2026 年 5 月 27 日核对 PC Gamer、All Things How 和 Subnautica2.gg 的当前资料。Subnautica 2 仍在抢先体验，Celestine 路线、Processor 行为和升级配方后续可能会调整。',
  cardKicker: '精炼材料卡',
  cardBody:
    '整理 Celestine 路线、Sonic Resonator 采矿、Processor 精炼、Feedback Resonator 预留数量、Tadpole 深度准备和升级消耗。',
  cardTypeLabel: '类型',
  cardTypeValue: '材料指南',
  cardVerifiedLabel: '核对时间',
  cardStatusLabel: '状态',
  cardStatusValue: '抢先体验',
};

strontiumCopy.ja = {
  metadata: {
    title:
      'Subnautica 2 Strontium ガイド - Celestine、Processor、Feedback Resonator',
    description:
      'Subnautica 2のStrontiumガイド。Celestine採掘、Sonic Resonator、Processor変換、2:1レシピ、Feedback Resonator用の必要数を整理します。',
  },
  eyebrow: 'Subnautica 2 加工素材',
  title: 'Subnautica 2 Strontium ガイド',
  description:
    'Strontiumはその辺で拾う素材ではなく、CelestineをProcessorで加工して作る素材です。つまり本当の難所は加工ボタンではなく、Alien Ruins周辺でCelestineを安全に集めて帰ることです。',
  quickLabel: '要点',
  quickAnswer:
    '現在の情報では、ProcessorでCelestine 2個をStrontium 1個に変換します。Feedback ResonatorにはStrontiumが2個必要なので、最低でもCelestineを4個分集めます。予備素材まで考えるなら、Celestineを全部すぐ加工せず、必要な分だけStrontiumに変える方が安全です。',
  fieldNotesTitle: 'Strontium計画のメモ',
  fieldNotes: [
    {
      title: 'ボトルネックはStrontiumではなくCelestine',
      body: 'StrontiumはProcessorで作るだけです。時間がかかるのは、Alien Ruins周辺へ行き、Sonic ResonatorでCelestineを採り、Tadpoleで無事に帰る部分です。',
    },
    {
      title: '加工前に数を計算する',
      body: 'Strontium 2個はCelestine 4個です。Feedback Resonatorだけが目的なら4個で足りますが、後のレシピ用にCelestineを生で残す選択もあります。',
    },
    {
      title: '保管場所を分ける',
      body: 'Strontiumは完成素材なので、普通の鉱物箱に入れると忘れやすいです。Feedback Resonatorやツール改造素材の箱にまとめると迷いません。',
    },
  ],
  routeChecklistTitle: 'Strontiumを作る前に',
  routeChecklist: [
    'Processorを使える状態にした。',
    'Celestineの所持数を確認した。',
    'Feedback Resonator用ならStrontium 2個、つまりCelestine 4個を確保した。',
    '余ったCelestineをすぐ全部加工しない。次のレシピが見えてから決める。',
  ],
  contentsLabel: '目次',
  routeTitle: 'Strontiumルート計画',
  routeSteps: [
    {
      title: 'Celestineを本当のボトルネックとして見る',
      body: 'PC GamerはCelestineをAlien Ruins周辺の深いルートに置いています。そこへ落ち着いて行けないなら、Strontiumレシピより先にTadpole深度、帰り道、Repair Toolを整えます。',
    },
    {
      title: 'Sonic Resonatorを持つ',
      body: '大きなCelestineノードにはSonic Resonatorが必要です。せっかく深部まで行って採れないと時間が重いので、出発前にインベントリで確認します。',
    },
    {
      title: 'Processorで加工する',
      body: 'All Things HowはCelestine 2個からStrontium 1個をProcessorで作る流れとして整理しています。動かない時は、Processorを使っているか、電力があるか、投入数が足りているかを確認します。',
    },
    {
      title: 'Feedback Resonator用に2個残す',
      body: 'PC GamerのFeedback Resonator素材リストではStrontiumが2個必要です。作成が終わるまで、最初の2個は他の用途に回さない方が安全です。',
    },
    {
      title: 'Celestineルートを再訪できる形にする',
      body: '一度きれいな採掘ルートを作ると、Strontiumは急に楽になります。Beaconや目印を残して、二回目を作業に変えます。',
    },
  ],
  tableTitle: 'Strontiumチェックリスト',
  tableHeaders: ['必要なもの', '理由'],
  tableRows: [
    [
      'Celestine',
      'Strontiumの原料です。Feedback Resonator用なら最低4個必要です。',
    ],
    [
      'Sonic Resonator',
      '大きなCelestineノードを採るために必要です。持ち忘れ注意。',
    ],
    ['Processor', '基地でCelestineをStrontiumに変換するステーションです。'],
    [
      'Tadpole深度計画',
      'Celestineルートは深度と帰り道が問題になりやすいです。',
    ],
    [
      '予約枠',
      '最初のStrontium 2個はFeedback Resonator用として分けて保管します。',
    ],
  ],
  visualTitle: '加工カード',
  visualItems: [
    {
      label: '採る',
      value: 'Celestine',
      note: 'Alien Ruins周辺でCelestineを集める。',
    },
    {
      label: '加工',
      value: '2 -> 1',
      note: 'ProcessorでCelestine 2個をStrontium 1個へ。',
    },
    {
      label: '予約',
      value: '2x',
      note: 'Feedback Resonator用にStrontium 2個を残す。',
    },
  ],
  cautionTitle: 'Celestineを全部Strontiumにしない',
  cautionBody:
    '加工素材は便利ですが、Early Accessではレシピが変わることもあります。今すぐ使う分だけStrontiumにして、余ったCelestineは生のまま残しておく方があとで融通が利きます。',
  faqTitle: 'FAQ',
  faqs: [
    {
      title: 'Strontiumはどう作る？',
      body: '現在の情報では、Celestine 2個をProcessorに入れるとStrontium 1個になります。',
    },
    {
      title: 'Feedback Resonatorには何個必要？',
      body: '現在のレシピではStrontiumが2個必要です。つまりCelestine 4個ぶんを確保します。',
    },
    {
      title: 'Sonic Resonatorは必要？',
      body: '大きなCelestineノードを採るなら必要です。Strontium作成そのものにはProcessorを使いますが、原料集めでSonic Resonatorが効きます。',
    },
    {
      title: 'Celestineは全部加工していい？',
      body: '急ぎのアップグレード分だけ加工するのがおすすめです。余りはCelestineのまま置くと、後のレシピ変更や別素材要求に対応しやすいです。',
    },
  ],
  readNextTitle: '次に読む',
  related: [
    { href: Routes.Subnautica2Celestine, label: 'Celestine ガイド' },
    { href: Routes.Subnautica2SonicResonator, label: 'Sonic Resonator ガイド' },
    {
      href: Routes.Subnautica2FeedbackResonator,
      label: 'Feedback Resonator ガイド',
    },
    { href: Routes.Subnautica2ConduitCrystal, label: 'Conduit Crystal ガイド' },
    { href: Routes.Subnautica2Processor, label: 'Processor ガイド' },
    { href: Routes.Subnautica2Biomes, label: 'バイオームガイド' },
    { href: Routes.Subnautica2Resources, label: '資源ガイド' },
    { href: Routes.Subnautica2Tadpole, label: 'Tadpole ガイド' },
  ],
  sourcesTitle: 'ソースメモ',
  sourceBody:
    '2026年5月29日にPC Gamer、All Things How、Subnautica2.ggのCelestine / Strontium / Feedback Resonator情報を確認しました。Subnautica 2はEarly Access中なので、加工レシピ、必要数、Celestineルートは今後のパッチで変わる可能性があります。',
  cardKicker: '加工素材カード',
  cardBody:
    'Celestine採掘、Sonic Resonator、Processor 2:1変換、Feedback Resonator用のStrontium 2個予約。',
  cardTypeLabel: '種類',
  cardTypeValue: '加工素材',
  cardVerifiedLabel: '確認日',
  cardStatusLabel: '状態',
  cardStatusValue: 'Early Access',
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
