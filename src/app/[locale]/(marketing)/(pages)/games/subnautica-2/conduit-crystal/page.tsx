import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { GemIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type ConduitCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-25';
const UPDATED_AT = '2026-05-29';

const sharedSources = [
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-conduit-crystal-location/',
    label: 'PC Gamer Conduit Crystal guide',
  },
  {
    href: 'https://www.gamesradar.com/games/survival/subnautica-2-conduit-crystals/',
    label: 'GamesRadar Conduit Crystal guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-feedback-resonator-scan-locations/',
    label: 'PC Gamer Feedback Resonator recipe note',
  },
];

const conduitCopy: Record<string, ConduitCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Conduit Crystal Guide - Location, Depth, and Sonic Resonator Mining',
      description:
        'A practical Subnautica 2 Conduit Crystal guide covering Alien Ruins routes, Tadpole Depth Module prep, Sonic Resonator mining, and upgrade uses.',
    },
    eyebrow: 'Subnautica 2 upgrade material',
    title: 'Subnautica 2 Conduit Crystal Guide',
    description:
      'Conduit Crystal is one of those materials that feels invisible until a tool upgrade asks for it. The trick is not spotting the crystal once. It is reaching the Alien Ruins route with the right vehicle depth, mining tool, and exit plan.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Look for Conduit Crystal around the Alien Ruins and Alien Power Plant region, especially ledges and cliffs below the safer early-game depth range. Bring the Tadpole Depth Module and Sonic Resonator. Feedback Resonator currently asks for 2x Conduit Crystal, so mine a small upgrade stock and leave before the route turns into a rescue story.',
    fieldNotesTitle: 'Field notes for Conduit Crystal',
    fieldNotes: [
      {
        title: 'This is not an early crystal run',
        body: 'Conduit Crystal lives in the kind of route where depth, cliffs, and return lines matter. If your Tadpole setup is shaky, prepare that first.',
      },
      {
        title: 'Mine for the next module',
        body: 'Feedback Resonator and other upgrades can ask for crystals, but that does not mean you need a full locker. Take the target count and a small spare.',
      },
      {
        title: 'Leave while the route is clean',
        body: 'The best rare-material run ends before the oxygen and repair margins feel dramatic. Mark the node and come back later instead of forcing a perfect haul.',
      },
    ],
    routeChecklistTitle: 'Before mining Conduit Crystal',
    routeChecklist: [
      'Bring Tadpole Depth Module, Sonic Resonator, and a clear exit marker.',
      'Count crystals for Feedback Resonator before entering deep ledges.',
      'Avoid turning the first run into bulk storage.',
      'Beacon the route if the node sits near Alien Power Plant terrain.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Conduit Crystal route plan',
    routeSteps: [
      {
        title: 'Do not go before the Tadpole is ready',
        body: 'GamesRadar and PC Gamer both frame this as a depth-gated route. If your Tadpole cannot handle the deeper water, you are making the swim harder than it needs to be.',
      },
      {
        title: 'Use Alien Ruins as your anchor',
        body: 'Current reports place Conduit Crystals around the Alien Ruins, Alien Power Plant, Angel Comb area, and nearby ledges. Pick one landmark, then search up and down the cliff faces instead of sweeping the whole sea floor blindly.',
      },
      {
        title: 'Mine with Sonic Resonator',
        body: 'PC Gamer notes that the nodes are harvested by blasting them with the Sonic Resonator. If you reached the crystals but cannot break them, the route is not the problem. Your tool chain is.',
      },
      {
        title: 'Grab enough, not everything',
        body: 'Current reporting ties Conduit Crystal to tool upgrades such as Bioscanner and Feedback Resonator. Set aside 2x for Feedback Resonator, then add a small buffer for Bioscanner work. This is not a material you need to hoard on the first trip.',
      },
      {
        title: 'Pair the trip with nearby rare materials',
        body: 'GamesRadar points out that Celestine, Atacamite, and Troilite sit in the same late-route neighborhood. Do not turn the dive into a shopping spree, but note what you pass for the next run.',
      },
    ],
    tableTitle: 'Route checklist',
    tableHeaders: ['Bring', 'Why'],
    tableRows: [
      [
        'Tadpole Depth Module',
        'The crystals sit beyond comfortable early-depth travel, and hull damage ruins calm searching.',
      ],
      [
        'Sonic Resonator',
        'You need it to mine the crystal nodes after finding them.',
      ],
      [
        'Beacon or route marker',
        'Alien structures are memorable until you turn around twice in dark water.',
      ],
      [
        'Oxygen backup',
        'Some crystals sit below or around ledges where you may leave the Tadpole briefly.',
      ],
      [
        'Empty inventory slots',
        'You came for upgrade material, not a backpack full of random scraps.',
      ],
    ],
    visualTitle: 'Crystal run card',
    visualItems: [
      {
        label: 'Gate',
        value: 'Depth',
        note: 'Take the Tadpole deeper only after the module is installed.',
      },
      {
        label: 'Tool',
        value: 'Sonic',
        note: 'Find the node, then break it with the Sonic Resonator.',
      },
      {
        label: 'Use',
        value: '2x+',
        note: 'Reserve two crystals for Feedback Resonator, then keep a small Bioscanner buffer.',
      },
    ],
    cautionTitle: 'The crystal is not worth losing the route',
    cautionBody:
      'If the water gets busy, leave the crystal and keep the vehicle. Conduit Crystal respawns in your plan faster than a wrecked route does. Mark the spot, come back with better oxygen, and make the second trip boring.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Where do you find Conduit Crystal in Subnautica 2?',
        body: 'Look around the Alien Ruins and Alien Power Plant region, especially lower ledges, cliff faces, and the route toward the green pools.',
      },
      {
        title: 'What tool mines Conduit Crystal?',
        body: 'Use the Sonic Resonator. If the node will not break, check that you are using the right tool before changing routes.',
      },
      {
        title: 'Do you need the Tadpole Depth Module?',
        body: 'Yes for a sane route. Current guides place the crystals in water deep enough that the depth module should be part of the plan.',
      },
      {
        title: 'What is Conduit Crystal used for?',
        body: 'Current reporting links it to upgrades such as Bioscanner and Feedback Resonator. PC Gamer lists 2x Conduit Crystal in the Feedback Resonator recipe.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2ImprovedFins, label: 'Improved Fins Guide' },
      {
        href: Routes.Subnautica2SonicResonator,
        label: 'Sonic Resonator Guide',
      },
      {
        href: Routes.Subnautica2FeedbackResonator,
        label: 'Feedback Resonator Guide',
      },
      {
        href: Routes.Subnautica2AdvancedBattery,
        label: 'Advanced Battery Guide',
      },
      {
        href: Routes.Subnautica2EntangledPowerCell,
        label: 'Entangled Power Cell Guide',
      },
      {
        href: Routes.Subnautica2KarakorumPowerPlant,
        label: 'Karakorum Power Plant Route',
      },
      { href: Routes.Subnautica2Strontium, label: 'Strontium Guide' },
      { href: Routes.Subnautica2Celestine, label: 'Celestine Guide' },
      {
        href: Routes.Subnautica2CreatureEnamel,
        label: 'Creature Enamel Guide',
      },
      {
        href: Routes.Subnautica2BioscannerBiomods,
        label: 'Bioscanner and Biomods',
      },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm Guide' },
      { href: Routes.Subnautica2Biomes, label: 'Biomes Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 27, 2026 against current PC Gamer and GamesRadar reporting, including the Feedback Resonator recipe note. Subnautica 2 is in Early Access, so route depth, resource placement, and upgrade recipes should be rechecked after patches.',
    cardKicker: 'Crystal route card',
    cardBody:
      'Alien Ruins route, Tadpole depth prep, Sonic Resonator mining, nearby rare materials, and upgrade use planning.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Resource guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Conduit Crystal 指南 - 位置、深度和 Sonic Resonator 挖矿',
      description:
        'Subnautica 2 中文 Conduit Crystal 指南：Alien Ruins 路线、Tadpole Depth Module 准备、Sonic Resonator 采集方法，以及 Bioscanner/Feedback Resonator 升级用途。',
    },
    eyebrow: 'Subnautica 2 升级材料',
    title: 'Subnautica 2 Conduit Crystal 指南',
    description:
      'Conduit Crystal 经常是那种“配方突然问你要，你才发现没见过”的材料。难点不只是找到它，而是带着合适的深度模块、挖矿工具和回程路线到达 Alien Ruins 一带。',
    quickLabel: '快速结论',
    quickAnswer:
      '去 Alien Ruins 和 Alien Power Plant 附近找 Conduit Crystal，重点看深水区域的 ledges、cliffs 和 Angel Comb 附近路线。出发前带 Tadpole Depth Module 和 Sonic Resonator。拿够 Bioscanner、Feedback Resonator 这类升级链会用到的数量就回家，不要把一趟采集变成救援任务。',
    fieldNotesTitle: 'Conduit Crystal 路线笔记',
    fieldNotes: [
      {
        title: '这不是前期水晶路线',
        body: 'Conduit Crystal 出现在深度、岩壁和回程都很重要的路线里。如果 Tadpole 配置还不稳，先把载具准备好。',
      },
      {
        title: '按下一个模块采',
        body: 'Feedback Resonator 等升级会需要 crystal，但这不代表要塞满一箱。按目标数量拿，再多带一点备用就够。',
      },
      {
        title: '路线干净时就离开',
        body: '稀有材料路线最好的结尾，是氧气和维修余量还没变得刺激。标好矿点，下次再来，不要硬追完美满载。',
      },
    ],
    routeChecklistTitle: '采 Conduit Crystal 前',
    routeChecklist: [
      '带 Tadpole Depth Module、Sonic Resonator 和清楚出口标记。',
      '进深水 ledges 前先数 Feedback Resonator 需要几块。',
      '第一趟不要强行变成批量囤货。',
      '如果矿点靠近 Alien Power Plant 地形，放 Beacon 记录路线。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Conduit Crystal 路线规划',
    routeSteps: [
      {
        title: 'Tadpole 没准备好就别去',
        body: 'GamesRadar 和 PC Gamer 都把这条路线写成深度门槛内容。如果 Tadpole 还不能稳定下潜，这趟会比它本来该有的难很多。',
      },
      {
        title: '用 Alien Ruins 当锚点',
        body: '当前资料把 Conduit Crystal 放在 Alien Ruins、Alien Power Plant、Angel Comb 和周围 ledges 一带。选一个地标，然后沿着岩壁上下找，别在海底平面上盲扫。',
      },
      {
        title: '用 Sonic Resonator 采集',
        body: 'PC Gamer 提到节点需要用 Sonic Resonator 打开。如果你已经看到晶体但敲不下来，通常不是路线错了，而是工具链还没补齐。',
      },
      {
        title: '够用就走',
        body: '当前报道把 Conduit Crystal 主要和 Bioscanner、Feedback Resonator 这类工具升级联系起来。留一点库存有用，但第一趟不需要硬清全图。',
      },
      {
        title: '顺手记下附近稀有材料',
        body: 'GamesRadar 提到 Celestine、Atacamite 和 Troilite 也在这片后期路线附近。别一趟全捡，但可以记下位置，下一趟少绕路。',
      },
    ],
    tableTitle: '出发前检查',
    tableHeaders: ['带什么', '为什么'],
    tableRows: [
      [
        'Tadpole Depth Module',
        '晶体区域超过前期舒适深度，载具掉耐久会让搜索变得很乱。',
      ],
      ['Sonic Resonator', '找到节点以后，需要它来采集。'],
      ['Beacon 或路线标记', '外星结构看起来很显眼，但转两圈以后还是容易迷。'],
      ['氧气备用方案', '有些晶体在 ledges 周围，可能要短时间离开 Tadpole。'],
      ['背包空位', '这趟目标是升级材料，不是把背包塞满杂物。'],
    ],
    visualTitle: '晶体路线卡',
    visualItems: [
      {
        label: '门槛',
        value: '深度',
        note: 'Tadpole 装好深度模块后再下去。',
      },
      {
        label: '工具',
        value: 'Sonic',
        note: '找到晶体节点后，用 Sonic Resonator 打开。',
      },
      {
        label: '用途',
        value: '升级',
        note: '优先留给 Bioscanner 和 Feedback Resonator。',
      },
    ],
    cautionTitle: '不要为了一个晶体丢掉整条路线',
    cautionBody:
      '如果附近敌对生物太多，先走。Conduit Crystal 可以下次再拿，载具和路线节奏丢了更麻烦。标记位置，补好氧气和修理，再回来让第二趟变无聊。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Conduit Crystal 在哪里找？',
        body: '主要看 Alien Ruins 和 Alien Power Plant 一带，尤其是深处 ledges、岩壁、Angel Comb 和通往绿色池子的路线附近。',
      },
      {
        title: 'Conduit Crystal 用什么工具采？',
        body: '用 Sonic Resonator。如果节点打不开，先确认工具是不是带对了。',
      },
      {
        title: '需要 Tadpole Depth Module 吗？',
        body: '建议必须带。当前攻略都把它放在深水路线里，没有深度模块会非常不稳。',
      },
      {
        title: 'Conduit Crystal 有什么用？',
        body: '当前资料把它和 Bioscanner、Feedback Resonator 等工具升级联系起来，它属于工具升级链，不是前期建家材料。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2ImprovedFins, label: 'Improved Fins Guide' },
      { href: Routes.Subnautica2SonicResonator, label: 'Sonic Resonator 指南' },
      {
        href: Routes.Subnautica2FeedbackResonator,
        label: 'Feedback Resonator 指南',
      },
      {
        href: Routes.Subnautica2AdvancedBattery,
        label: 'Advanced Battery Guide',
      },
      {
        href: Routes.Subnautica2EntangledPowerCell,
        label: 'Entangled Power Cell 指南',
      },
      {
        href: Routes.Subnautica2KarakorumPowerPlant,
        label: 'Karakorum Power Plant 路线',
      },
      { href: Routes.Subnautica2Strontium, label: 'Strontium 指南' },
      { href: Routes.Subnautica2Celestine, label: 'Celestine 指南' },
      {
        href: Routes.Subnautica2BioscannerBiomods,
        label: 'Bioscanner 和 Biomods',
      },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm 指南' },
      { href: Routes.Subnautica2Biomes, label: '生物群系指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 27 日核对 PC Gamer 和 GamesRadar 的当前报道。Subnautica 2 仍在抢先体验，路线深度、资源点和配方后续可能随补丁调整。',
    cardKicker: '晶体路线卡',
    cardBody:
      '整理 Alien Ruins 路线、Tadpole 深度准备、Sonic Resonator 采集、附近稀有材料和升级用途。',
    cardTypeLabel: '类型',
    cardTypeValue: '资源指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
  ja: {
    metadata: {
      title:
        'Subnautica 2 Conduit Crystal Guide - location, depth, and Sonic Resonator',
      description:
        'Subnautica 2 Conduit Crystal guide for Alien Ruins routes, Tadpole Depth Module prep, Sonic Resonator mining, and upgrade uses.',
    },
    eyebrow: 'Subnautica 2 upgrade material',
    title: 'Subnautica 2 Conduit Crystal Guide',
    description:
      'Conduit Crystal sits in the tool upgrade chain. The hard part is reaching the Alien Ruins area with enough depth, the Sonic Resonator, and a clean exit.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Search around Alien Ruins, Alien Power Plant, ledges, and lower cliffs. Bring Tadpole Depth Module and Sonic Resonator, mine a small stock, then return before the route gets messy.',
    contentsLabel: 'Contents',
    routeTitle: 'Conduit Crystal route plan',
    routeSteps: [
      {
        title: 'Wait for Tadpole depth',
        body: 'Current guides place this material beyond comfortable early travel. Take the depth module seriously.',
      },
      {
        title: 'Use Alien Ruins landmarks',
        body: 'Search ledges and cliff faces around Alien Ruins, Alien Power Plant, and Angel Comb routes.',
      },
      {
        title: 'Mine with Sonic Resonator',
        body: 'The node needs Sonic Resonator. If it will not break, fix the tool chain first.',
      },
      {
        title: 'Take enough for upgrades',
        body: 'Conduit Crystal currently feeds tool upgrades such as Bioscanner and Feedback Resonator.',
      },
      {
        title: 'Note nearby rare materials',
        body: 'Celestine, Atacamite, and Troilite may be close enough to mark for a later run.',
      },
    ],
    tableTitle: 'Route checklist',
    tableHeaders: ['Bring', 'Why'],
    tableRows: [
      ['Tadpole Depth Module', 'The route is depth gated.'],
      ['Sonic Resonator', 'Needed to mine the node.'],
      ['Beacon', 'Ledges are easy to lose after one turn.'],
      ['Oxygen backup', 'Some crystals require leaving the Tadpole briefly.'],
      ['Inventory space', 'Do not waste the route on random clutter.'],
    ],
    visualTitle: 'Crystal run card',
    visualItems: [
      { label: 'Gate', value: 'Depth', note: 'Install the module first.' },
      {
        label: 'Tool',
        value: 'Sonic',
        note: 'Break nodes with the resonator.',
      },
      {
        label: 'Use',
        value: 'Upgrades',
        note: 'Save crystals for tool upgrades.',
      },
    ],
    cautionTitle: 'Leave before the route turns ugly',
    cautionBody:
      'Mark the crystal and come back if the area gets crowded. A boring second trip is better than losing the Tadpole.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Where is Conduit Crystal?',
        body: 'Around Alien Ruins, Alien Power Plant, ledges, cliffs, and the route toward green pools.',
      },
      {
        title: 'What tool mines it?',
        body: 'Use the Sonic Resonator.',
      },
      {
        title: 'Do I need Tadpole Depth Module?',
        body: 'Yes, if you want the route to be practical.',
      },
      {
        title: 'What is it used for?',
        body: 'Current reporting ties it to Bioscanner and Feedback Resonator upgrades.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2ImprovedFins, label: 'Improved Fins Guide' },
      {
        href: Routes.Subnautica2SonicResonator,
        label: 'Sonic Resonator Guide',
      },
      {
        href: Routes.Subnautica2FeedbackResonator,
        label: 'Feedback Resonator Guide',
      },
      {
        href: Routes.Subnautica2AdvancedBattery,
        label: 'Advanced Battery Guide',
      },
      {
        href: Routes.Subnautica2EntangledPowerCell,
        label: 'Entangled Power Cell Guide',
      },
      { href: Routes.Subnautica2Strontium, label: 'Strontium Guide' },
      { href: Routes.Subnautica2Celestine, label: 'Celestine Guide' },
      {
        href: Routes.Subnautica2BioscannerBiomods,
        label: 'Bioscanner and Biomods',
      },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm Guide' },
      { href: Routes.Subnautica2Biomes, label: 'Biomes Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 27, 2026 against current PC Gamer and GamesRadar reporting. Early Access details may change.',
    cardKicker: 'Crystal route card',
    cardBody:
      'Alien Ruins route, Tadpole depth, Sonic Resonator mining, and upgrade use planning.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Resource guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
};

conduitCopy.zh = {
  ...conduitCopy.en,
  metadata: {
    title: 'Subnautica 2 Conduit Crystal 指南 - 位置、深度和升级用途',
    description:
      'Subnautica 2 中文 Conduit Crystal 指南：Alien Ruins 路线、Tadpole Depth Module、Sonic Resonator 采集，以及 Feedback Resonator 所需数量。',
  },
  eyebrow: 'Subnautica 2 升级材料',
  title: 'Subnautica 2 Conduit Crystal 指南',
  description:
    'Conduit Crystal 常常不是找不到，而是你太早去了。把 Tadpole 深度、Sonic Resonator 和回程路线准备好，再去 Alien Ruins 一带会稳很多。',
  quickLabel: '快速结论',
  quickAnswer:
    '去 Alien Ruins 和 Alien Power Plant 附近找 Conduit Crystal，重点看深水 ledges、cliffs 和 Angel Comb 附近路线。出发前带 Tadpole Depth Module 和 Sonic Resonator。Feedback Resonator 目前需要 2 个 Conduit Crystal，所以先留出一小组升级库存，再回家。',
  contentsLabel: '目录',
  routeTitle: 'Conduit Crystal 路线规划',
  routeSteps: [
    {
      title: 'Tadpole 没准备好就别去',
      body: 'GamesRadar 和 PC Gamer 都把这条路线写成深度门槛内容。Tadpole 还不能稳定下潜时，搜晶体会变得很乱。',
    },
    {
      title: '用 Alien Ruins 当锚点',
      body: '当前资料把 Conduit Crystal 放在 Alien Ruins、Alien Power Plant、Angel Comb 和周围 ledges 一带。选一个地标，沿岩壁上下找，比在海底平面盲扫更省时间。',
    },
    {
      title: '用 Sonic Resonator 采集',
      body: 'PC Gamer 提到节点需要用 Sonic Resonator 打开。看到晶体却敲不下来时，先检查工具，不要急着换路线。',
    },
    {
      title: '给 Feedback Resonator 留两个',
      body: 'PC Gamer 当前列出的 Feedback Resonator 配方里需要 2 个 Conduit Crystal。第一趟先满足工具升级链，再考虑多囤。',
    },
    {
      title: '顺手记下附近稀有材料',
      body: 'GamesRadar 提到 Celestine、Atacamite 和 Troilite 也在这片后期路线附近。不要一趟全捡，但可以记位置，下一趟少绕路。',
    },
  ],
  tableTitle: '出发前检查',
  tableHeaders: ['带什么', '为什么'],
  tableRows: [
    ['Tadpole Depth Module', '晶体区域超过前期舒适深度。'],
    ['Sonic Resonator', '找到节点后需要它来采集。'],
    ['Beacon 或路线标记', '外星结构显眼，但转两圈后仍然容易迷路。'],
    ['氧气备用方案', '有些晶体在 ledges 周围，可能要短时间离开 Tadpole。'],
    ['背包空位', '这趟目标是升级材料，不是把背包塞满杂物。'],
  ],
  visualTitle: '晶体路线卡',
  visualItems: [
    {
      label: '门槛',
      value: '深度',
      note: 'Tadpole 装好深度模块后再下去。',
    },
    {
      label: '工具',
      value: 'Sonic',
      note: '找到晶体节点后，用 Sonic Resonator 打开。',
    },
    {
      label: '用途',
      value: '2x+',
      note: '优先给 Feedback Resonator 留两个。',
    },
  ],
  cautionTitle: '不要为了一个晶体丢掉整条路线',
  cautionBody:
    '如果附近敌对生物太多，先走。Conduit Crystal 可以下次再拿，载具和路线节奏丢了更麻烦。标记位置，补好氧气和修理，再回来让第二趟变无聊。',
  faqTitle: '常见问题',
  faqs: [
    {
      title: 'Subnautica 2 Conduit Crystal 在哪里找？',
      body: '主要看 Alien Ruins 和 Alien Power Plant 一带，尤其是深处 ledges、岩壁、Angel Comb 和通往绿色池子的路线附近。',
    },
    {
      title: 'Conduit Crystal 用什么工具采？',
      body: '用 Sonic Resonator。如果节点打不开，先确认工具是不是带对了。',
    },
    {
      title: '需要 Tadpole Depth Module 吗？',
      body: '建议必须带。当前攻略都把它放在深水路线里，没有深度模块会非常不稳。',
    },
    {
      title: 'Feedback Resonator 要几个 Conduit Crystal？',
      body: 'PC Gamer 当前列出的 Feedback Resonator 配方里需要 2 个 Conduit Crystal。',
    },
  ],
  readNextTitle: '继续看',
  related: [
    { href: Routes.Subnautica2ImprovedFins, label: 'Improved Fins Guide' },
    { href: Routes.Subnautica2SonicResonator, label: 'Sonic Resonator 指南' },
    {
      href: Routes.Subnautica2FeedbackResonator,
      label: 'Feedback Resonator 指南',
    },
    {
      href: Routes.Subnautica2AdvancedBattery,
      label: 'Advanced Battery Guide',
    },
    {
      href: Routes.Subnautica2EntangledPowerCell,
      label: 'Entangled Power Cell 指南',
    },
    {
      href: Routes.Subnautica2KarakorumPowerPlant,
      label: 'Karakorum Power Plant 路线',
    },
    { href: Routes.Subnautica2Strontium, label: 'Strontium 指南' },
    { href: Routes.Subnautica2Celestine, label: 'Celestine 指南' },
    {
      href: Routes.Subnautica2BioscannerBiomods,
      label: 'Bioscanner 和 Biomods',
    },
    { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm 指南' },
    { href: Routes.Subnautica2Biomes, label: '生物群系指南' },
  ],
  sourcesTitle: '来源说明',
  sourceBody:
    '2026 年 5 月 27 日核对 PC Gamer 和 GamesRadar 当前资料，并补充 Feedback Resonator 配方信息。Subnautica 2 仍在抢先体验，路线深度、资源点和配方后续可能随补丁调整。',
  cardKicker: '晶体路线卡',
  cardBody:
    '整理 Alien Ruins 路线、Tadpole 深度准备、Sonic Resonator 采集、Feedback Resonator 预留数量、附近稀有材料和升级用途。',
  cardTypeLabel: '类型',
  cardTypeValue: '资源指南',
  cardVerifiedLabel: '核对时间',
  cardStatusLabel: '状态',
  cardStatusValue: '抢先体验',
};

conduitCopy.ja = {
  ...conduitCopy.en,
  metadata: {
    title:
      'Subnautica 2 Conduit Crystal ガイド - 場所、深度、Feedback Resonator準備',
    description:
      'Subnautica 2のConduit Crystalガイド。Alien Ruinsルート、Tadpole Depth Module、Sonic Resonator採掘、Feedback Resonator用の2個確保を整理します。',
  },
  title: 'Subnautica 2 Conduit Crystal ガイド',
  description:
    'Conduit Crystalは、早すぎるタイミングで探すと面倒な素材です。Tadpoleの深度、Sonic Resonator、帰り道を整えてからAlien Ruins周辺へ向かいます。',
  quickLabel: '要点',
  quickAnswer:
    'Alien Ruins、Alien Power Plant、Angel Comb周辺の深いledgeや崖を探します。Tadpole Depth ModuleとSonic Resonatorを持参してください。Feedback Resonatorには現在2個のConduit Crystalが必要です。',
  routeTitle: 'Conduit Crystal ルート',
  routeSteps: [
    {
      title: 'Tadpoleの深度を先に整える',
      body: 'この素材は深度で苦しくなりやすいルートです。Depth Moduleなしで行くと、探索より帰還が問題になります。',
    },
    {
      title: 'Alien Ruinsを目印にする',
      body: 'Alien Ruins、Alien Power Plant、Angel Comb周辺のledgeや崖を上下に探します。',
    },
    {
      title: 'Sonic Resonatorで採掘する',
      body: 'ノードを見つけても壊せない場合は、ルートではなくツールを確認します。',
    },
    {
      title: '2個をFeedback Resonator用に残す',
      body: '現在のPC Gamerのレシピ情報では、Feedback ResonatorにConduit Crystalが2個必要です。',
    },
  ],
  visualItems: [
    { label: 'Depth', value: 'Module', note: 'Tadpoleの深度を確保します。' },
    { label: 'Tool', value: 'Sonic', note: 'Sonic Resonatorで採掘します。' },
    {
      label: 'Reserve',
      value: '2x',
      note: 'Feedback Resonator用に2個残します。',
    },
  ],
  faqs: [
    {
      title: 'Conduit Crystalはどこ？',
      body: 'Alien Ruins、Alien Power Plant、Angel Comb周辺の深いledgeや崖で探します。',
    },
    {
      title: 'どのツールで採掘する？',
      body: 'Sonic Resonatorを使います。',
    },
    {
      title: 'Feedback Resonatorには何個必要？',
      body: '現在のPC Gamer情報では2個必要です。',
    },
  ],
  related: [
    { href: Routes.Subnautica2SonicResonator, label: 'Sonic Resonator Guide' },
    {
      href: Routes.Subnautica2FeedbackResonator,
      label: 'Feedback Resonator Guide',
    },
    {
      href: Routes.Subnautica2KarakorumPowerPlant,
      label: 'Karakorum Power Plant Route',
    },
    { href: Routes.Subnautica2Strontium, label: 'Strontium Guide' },
    { href: Routes.Subnautica2Celestine, label: 'Celestine Guide' },
    {
      href: Routes.Subnautica2BioscannerBiomods,
      label: 'Bioscanner and Biomods',
    },
  ],
  sourceBody:
    '2026年5月27日にPC GamerとGamesRadarの情報を確認しました。Early Access中は位置やレシピが変わる可能性があります。',
};

const fallbackLocaleAliases = {
  de: {
    title: 'Subnautica 2 Conduit Crystal Guide',
    description:
      'Guide for Conduit Crystal locations, Alien Ruins routes, Sonic Resonator mining, and upgrade uses.',
  },
  fr: {
    title: 'Subnautica 2 Conduit Crystal Guide',
    description:
      'Guide Conduit Crystal pour les routes Alien Ruins, le Sonic Resonator, la profondeur et les upgrades.',
  },
  'pt-BR': {
    title: 'Subnautica 2 Conduit Crystal Guide',
    description:
      'Guia do Conduit Crystal com rotas de Alien Ruins, Sonic Resonator, profundidade e upgrades.',
  },
  'es-419': {
    title: 'Subnautica 2 Conduit Crystal Guide',
    description:
      'Guia de Conduit Crystal: Alien Ruins, Sonic Resonator, profundidad y mejoras.',
  },
  ko: {
    title: 'Subnautica 2 Conduit Crystal Guide',
    description:
      'Conduit Crystal locations, Alien Ruins route, Sonic Resonator mining, and upgrade uses.',
  },
  ru: {
    title: 'Subnautica 2 Conduit Crystal Guide',
    description:
      'Guide for Conduit Crystal locations, Alien Ruins routes, Sonic Resonator mining, and upgrades.',
  },
} satisfies Record<string, { title: string; description: string }>;

function getCopy(locale: Locale): ConduitCopy {
  if (conduitCopy[locale]) {
    return conduitCopy[locale];
  }

  const fallback =
    fallbackLocaleAliases[locale as keyof typeof fallbackLocaleAliases] ??
    fallbackLocaleAliases.de;

  return {
    ...conduitCopy.en,
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
    pathname: Routes.Subnautica2ConduitCrystal,
  });
}

export default async function ConduitCrystalPage({
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
      icon={GemIcon}
      locale={locale}
      pathname={Routes.Subnautica2ConduitCrystal}
      sources={sharedSources}
    />
  );
}
