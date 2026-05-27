import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { WavesIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type SonicCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-24';
const UPDATED_AT = '2026-05-27';

const sharedSources = [
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-mining-unknown-tool-sonic-resonator/',
    label: 'PC Gamer Sonic Resonator guide',
  },
  {
    href: 'https://www.gamesradar.com/games/survival/subnautica-2-sonic-resonator/',
    label: 'GamesRadar Sonic Resonator guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-feedback-resonator-scan-locations/',
    label: 'PC Gamer Feedback Resonator guide',
  },
  {
    href: 'https://games.gg/news/subnautica-2-sonic-resonator/',
    label: 'GAMES.GG Sonic Resonator explainer',
  },
  {
    href: 'https://games.gg/subnautica-2/guides/subnautica-2-how-to-get-the-feedback-resonator/',
    label: 'GAMES.GG Feedback Resonator guide',
  },
];

const sonicCopy: Record<string, SonicCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Sonic Resonator Guide - Mining Tool, Fragments, and Upgrade Prep',
      description:
        'A practical Subnautica 2 Sonic Resonator guide covering what the tool does, when to scan fragments, how to plan the mining route, and why it matters before Feedback Resonator.',
    },
    eyebrow: 'Subnautica 2 mining tool',
    title: 'Subnautica 2 Sonic Resonator Guide',
    description:
      'The Sonic Resonator is the point where mining stops being only a hand-tool habit. It opens large ore nodes, clears route blockers, and becomes the base tool for the Feedback Resonator upgrade later.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Scan two Sonic Resonator fragments once your Scanner, oxygen rhythm, and return route are steady. Treat it as a mining and Bloom Biofilm clearing tool, not as a full answer to every infected growth. If a route says Armored Canker, mature Angel Comb, or long-range clearing, that is usually the later Feedback Resonator upgrade.',
    contentsLabel: 'Contents',
    routeTitle: 'Sonic Resonator route plan',
    routeSteps: [
      {
        title: 'Bring the normal Scanner',
        body: 'This tool starts with fragment scanning. If your Scanner battery, oxygen, or return route is unreliable, the first job is still basic field discipline.',
      },
      {
        title: 'Follow the mineral route, not the panic route',
        body: 'Current PC Gamer and GamesRadar guides frame the Sonic Resonator as the answer to large ore and unknown mining prompts. Plan the trip around scanning, then test the tool close to home before pushing deeper.',
      },
      {
        title: 'Use it on large ore and blockers',
        body: 'After crafting, the practical use is simple: aim at the large node, Bloom Biofilm, or blocking growth, fire, and collect what the normal hand tools could not reach. Do not waste a long dive proving it works on every object in the area.',
      },
      {
        title: 'Connect it to the upgrade chain',
        body: 'The Sonic Resonator is also the base tool for Feedback Resonator. PC Gamer and GAMES.GG both treat Feedback Resonator as the ranged upgrade you need once normal Sonic hits its limit around armored Bloom routes.',
      },
      {
        title: 'Do not confuse Biofilm with Cankers',
        body: 'Normal Sonic Resonator can help with early Bloom Biofilm routes. Armored Bloom Cankers and long-range clearing are the point where players usually need the Feedback Resonator instead.',
      },
    ],
    tableTitle: 'What to prepare before scanning',
    tableHeaders: ['Prep', 'Reason'],
    tableRows: [
      [
        'Scanner and battery margin',
        'Fragment routes fail fast when the tool dies halfway through a scan loop.',
      ],
      [
        'Oxygen buffer',
        'Large nodes often sit where you want to stare at the wall too long.',
      ],
      [
        'Inventory space',
        'The point of the tool is mining; coming home full of random clutter wastes the trip.',
      ],
      [
        'Beacon or clear landmark',
        'Mark the scan route if it also leads toward later resources.',
      ],
      [
        'Feedback Resonator plan',
        'Once this tool exists, the later ranged upgrade becomes the natural answer for Armored Cankers and deeper Bloom routes.',
      ],
    ],
    visualTitle: 'Tool use card',
    visualItems: [
      {
        label: 'Before',
        value: 'Scan route',
        note: 'Find fragments only after your oxygen loop feels calm.',
      },
      {
        label: 'First use',
        value: 'Large ore',
        note: 'Test it on mining prompts before deep-route experiments.',
      },
      {
        label: 'Later',
        value: 'Upgrade base',
        note: 'Keep it ready for the Feedback Resonator chain.',
      },
      {
        label: 'Limit',
        value: 'Armored',
        note: 'Armored Bloom routes usually mean Feedback Resonator, not plain Sonic.',
      },
    ],
    cautionTitle: 'Do not make this tool your excuse to overextend',
    cautionBody:
      'The Sonic Resonator makes new materials reachable, which is exactly why it can pull you into bad routes. Mine what you came for, check oxygen, then leave before curiosity turns the return swim into the hard part.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'What does the Sonic Resonator do in Subnautica 2?',
        body: 'It is the tool used for large ore nodes and certain route blockers that normal early tools cannot handle.',
      },
      {
        title: 'Should I rush the Sonic Resonator early?',
        body: 'No. Get the Scanner habits, oxygen upgrades, and a reliable return route first. The tool is valuable when you can safely repeat mining runs.',
      },
      {
        title: 'Is Sonic Resonator needed for Feedback Resonator?',
        body: 'Yes. Feedback Resonator is an upgrade path built from the Sonic Resonator, so this tool is part of the later Alien Ruins chain.',
      },
      {
        title: 'Why is Sonic Resonator not clearing an Angel Comb route?',
        body: 'You may be dealing with an Armored Bloom Canker or later infection blocker. Current Feedback Resonator guides describe the upgraded tool as the ranged answer for those routes.',
      },
      {
        title: 'What should I do after crafting it?',
        body: 'Test it on nearby large ore, update your resource route, then connect the tool to Conduit Crystal, Metal Farm, and Feedback Resonator planning.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2HeatTolerance, label: 'Heat Tolerance Guide' },
      { href: Routes.Subnautica2AngelComb, label: 'Angel Comb Guide' },
      { href: Routes.Subnautica2BloomBiofilm, label: 'Bloom Biofilm Guide' },
      { href: Routes.Subnautica2Celestine, label: 'Celestine Guide' },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal Guide',
      },
      { href: Routes.Subnautica2Strontium, label: 'Strontium Guide' },
      {
        href: Routes.Subnautica2FeedbackResonator,
        label: 'Feedback Resonator Guide',
      },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Lead, label: 'Lead Location Guide' },
      { href: Routes.Subnautica2Sulfur, label: 'Sulfur Location Guide' },
      { href: Routes.Subnautica2Quartz, label: 'Quartz Location Guide' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
      { href: Routes.Subnautica2OxygenDepth, label: 'Oxygen and Depth' },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 27, 2026 against current PC Gamer, GamesRadar, and GAMES.GG reporting. Subnautica 2 is in Early Access, so fragment routes, tool behavior, and upgrade materials should be rechecked after patches.',
    cardKicker: 'Mining tool card',
    cardBody:
      'Fragment scanning, large ore use, route-blocker clearing, inventory prep, and Feedback Resonator upgrade planning.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Tool guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Sonic Resonator 指南 - 挖矿工具、碎片扫描和升级前置',
      description:
        'Subnautica 2 中文 Sonic Resonator 指南：这个工具有什么用，什么时候去扫碎片，怎么规划挖矿路线，以及为什么它是 Feedback Resonator 的前置。',
    },
    eyebrow: 'Subnautica 2 挖矿工具',
    title: 'Subnautica 2 Sonic Resonator 指南',
    description:
      'Sonic Resonator 是你从“手搓小矿”进入大矿节点和路线清障的节点。它不是拿到就乱冲深水的许可证，而是后面 Feedback Resonator 升级链的基础工具。',
    quickLabel: '快速结论',
    quickAnswer:
      '等 Scanner、氧气节奏和回程路线都比较稳以后，再去扫 Sonic Resonator 碎片。先把它当成挖大矿和清路障的工具，不要当武器。做出来以后，先在近一点的大矿节点测试，再把它接到 Feedback Resonator、Conduit Crystal 和 Metal Farm 这条后续路线里。',
    contentsLabel: '目录',
    routeTitle: 'Sonic Resonator 路线规划',
    routeSteps: [
      {
        title: '先带好普通 Scanner',
        body: '这个工具从碎片扫描开始。如果 Scanner 电量、氧气余量和回程地标都不稳，先处理这些基础问题。',
      },
      {
        title: '按挖矿路线走，不要慌着乱游',
        body: 'PC Gamer 和 GamesRadar 当前都把 Sonic Resonator 放在大矿节点和未知挖矿提示的语境里。先围绕扫描规划路线，做出来以后再从近处开始测试。',
      },
      {
        title: '用它处理大矿和路障',
        body: '制作完成后，用法很直接：对准大矿节点或挡路生长物，发射，然后收集普通工具够不到的东西。别在一次长潜里到处试每个物体。',
      },
      {
        title: '把它接到升级链里',
        body: 'Sonic Resonator 也是 Feedback Resonator 的前置工具。如果接下来要跑 Alien Ruins、Metal Farms 或 Conduit Crystal 路线，记得把它放在顺手的位置。',
      },
    ],
    tableTitle: '扫描前准备',
    tableHeaders: ['准备项', '原因'],
    tableRows: [
      ['Scanner 和电量余量', '扫碎片时工具没电，会让整趟路线很难受。'],
      ['氧气缓冲', '大矿节点附近最容易让人盯着墙看太久。'],
      ['背包空间', '这趟的目标是挖矿，背包塞满杂物就亏了。'],
      ['Beacon 或清楚地标', '如果这条路线以后还要回头跑，最好留下记号。'],
      [
        'Feedback Resonator 计划',
        '拿到 Sonic 以后，远程升级链就可以顺着往后做。',
      ],
    ],
    visualTitle: '工具使用卡',
    visualItems: [
      {
        label: '出发前',
        value: '扫描路线',
        note: '氧气循环稳定后，再去找碎片更舒服。',
      },
      {
        label: '第一次用',
        value: '大矿节点',
        note: '先在明确的挖矿提示上测试，不要直接深潜乱试。',
      },
      {
        label: '后续',
        value: '升级前置',
        note: '保留给 Feedback Resonator 这条路线。',
      },
    ],
    cautionTitle: '别因为有了新工具就过度深入',
    cautionBody:
      'Sonic Resonator 会让新材料变得可采，也正因为这样，它很容易把你拉进不该久留的路线。挖到目标、看一眼氧气，然后回家。好奇心可以留到下一趟。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Sonic Resonator 有什么用？',
        body: '它主要用来处理大矿节点，以及部分普通早期工具没法处理的路线阻挡物。',
      },
      {
        title: 'Sonic Resonator 要不要很早就冲？',
        body: '不建议。先把 Scanner、氧气升级和稳定回程路线做好，能安全反复挖矿以后再拿它更划算。',
      },
      {
        title: 'Feedback Resonator 需要 Sonic Resonator 吗？',
        body: '需要。Feedback Resonator 是从 Sonic Resonator 升级来的，所以 Sonic 是后续 Alien Ruins 工具链的一部分。',
      },
      {
        title: '做出 Sonic Resonator 后先干什么？',
        body: '先找附近的大矿节点测试，再更新你的资源路线，把它接到 Conduit Crystal、Metal Farm 和 Feedback Resonator 的计划里。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2HeatTolerance, label: 'Heat Tolerance Guide' },
      { href: Routes.Subnautica2AngelComb, label: 'Angel Comb Guide' },
      { href: Routes.Subnautica2BloomBiofilm, label: 'Bloom Biofilm Guide' },
      { href: Routes.Subnautica2Celestine, label: 'Celestine 指南' },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal 指南',
      },
      { href: Routes.Subnautica2Strontium, label: 'Strontium 指南' },
      {
        href: Routes.Subnautica2FeedbackResonator,
        label: 'Feedback Resonator 指南',
      },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Sulfur, label: 'Sulfur Location Guide' },
      { href: Routes.Subnautica2Quartz, label: 'Quartz Location Guide' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner 指南' },
      { href: Routes.Subnautica2OxygenDepth, label: '氧气和下潜深度' },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm 指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 24 日核对 PC Gamer 和 GamesRadar 的当前报道。Subnautica 2 仍在抢先体验，碎片路线、工具效果和后续材料可能会随补丁调整。',
    cardKicker: '挖矿工具卡',
    cardBody:
      '整理碎片扫描、大矿节点、路线清障、背包准备和 Feedback Resonator 升级前置。',
    cardTypeLabel: '类型',
    cardTypeValue: '工具指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
  ja: {
    metadata: {
      title:
        'Subnautica 2 Sonic Resonator Guide - mining tool, fragments, and upgrades',
      description:
        'Subnautica 2 Sonic Resonator guide for fragment scans, large ore use, route blockers, and Feedback Resonator prep.',
    },
    eyebrow: 'Subnautica 2 mining tool',
    title: 'Subnautica 2 Sonic Resonator Guide',
    description:
      'Sonic Resonator opens large ore and route blockers, then becomes the base tool for Feedback Resonator later.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Scan Sonic Resonator fragments after your Scanner, oxygen, and return route are stable. Use it first for large ore and blockers, then keep it ready for Feedback Resonator progression.',
    contentsLabel: 'Contents',
    routeTitle: 'Sonic Resonator route plan',
    routeSteps: [
      {
        title: 'Bring Scanner basics',
        body: 'Fragment scanning still depends on battery, oxygen, landmarks, and calm route habits.',
      },
      {
        title: 'Plan a mining route',
        body: 'Current guides connect Sonic Resonator to large ore and unknown mining prompts, so treat the trip as a tool route.',
      },
      {
        title: 'Test it close to home',
        body: 'Use it on obvious large ore before making a deep route depend on it.',
      },
      {
        title: 'Save it for upgrades',
        body: 'Feedback Resonator later builds from Sonic Resonator, so keep the tool in your main kit.',
      },
    ],
    tableTitle: 'Pre-scan checks',
    tableHeaders: ['Prep', 'Reason'],
    tableRows: [
      ['Scanner battery', 'Fragments are the unlock path.'],
      ['Oxygen buffer', 'Mining routes invite slow movement.'],
      ['Inventory space', 'You are here to bring materials home.'],
      ['Landmark', 'Mark a route you may repeat later.'],
      ['Upgrade plan', 'Feedback Resonator comes after this tool.'],
    ],
    visualTitle: 'Tool card',
    visualItems: [
      { label: 'Before', value: 'Scan route', note: 'Do fragments calmly.' },
      {
        label: 'Use',
        value: 'Large ore',
        note: 'Test obvious mining nodes first.',
      },
      {
        label: 'Later',
        value: 'Upgrade base',
        note: 'Keep it for Feedback Resonator.',
      },
    ],
    cautionTitle: 'Do not overextend for one tool',
    cautionBody:
      'New mining access can pull you into bad routes. Mine the target, check oxygen, and return before the route becomes messy.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'What does Sonic Resonator do?',
        body: 'It handles large ore nodes and some blockers that early tools cannot manage.',
      },
      {
        title: 'Should I rush it?',
        body: 'No. It is better after basic Scanner and oxygen planning are stable.',
      },
      {
        title: 'Is it needed for Feedback Resonator?',
        body: 'Yes. Feedback Resonator upgrades from Sonic Resonator.',
      },
      {
        title: 'What comes next?',
        body: 'Connect it to resource routes, Conduit Crystal, Metal Farm, and Feedback Resonator.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2HeatTolerance, label: 'Heat Tolerance Guide' },
      { href: Routes.Subnautica2AngelComb, label: 'Angel Comb Guide' },
      { href: Routes.Subnautica2BloomBiofilm, label: 'Bloom Biofilm Guide' },
      { href: Routes.Subnautica2Celestine, label: 'Celestine Guide' },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal Guide',
      },
      { href: Routes.Subnautica2Strontium, label: 'Strontium Guide' },
      {
        href: Routes.Subnautica2FeedbackResonator,
        label: 'Feedback Resonator Guide',
      },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Lead, label: 'Lead Location Guide' },
      { href: Routes.Subnautica2Sulfur, label: 'Sulfur Location Guide' },
      { href: Routes.Subnautica2Quartz, label: 'Quartz Location Guide' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
      { href: Routes.Subnautica2OxygenDepth, label: 'Oxygen and Depth' },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 24, 2026 against current PC Gamer and GamesRadar reporting. Early Access details may change.',
    cardKicker: 'Mining tool card',
    cardBody:
      'Fragment scans, large ore use, blockers, and Feedback Resonator prep.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Tool guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
};

sonicCopy.zh = {
  ...sonicCopy.en,
  metadata: {
    title:
      'Subnautica 2 Sonic Resonator 指南 - 挖矿、Bloom Biofilm 和 Feedback 前置',
    description:
      'Subnautica 2 中文 Sonic Resonator 指南：碎片扫描、挖大矿、清 Bloom Biofilm、什么时候升级 Feedback Resonator，以及为什么普通 Sonic 清不了装甲感染点。',
  },
  eyebrow: 'Subnautica 2 挖矿工具',
  title: 'Subnautica 2 Sonic Resonator 指南',
  description:
    'Sonic Resonator 是你从小工具挖矿进入大矿节点和路线清障的节点。它很好用，但不是万能钥匙；遇到装甲感染点时，通常要准备后续的 Feedback Resonator。',
  quickLabel: '快速结论',
  quickAnswer:
    'Scanner、氧气节奏和回程路线都稳定后，再去扫 2 个 Sonic Resonator 碎片。先把它当成挖大矿和清 Bloom Biofilm 的工具，不要当武器。路线写到 Armored Canker、成熟 Angel Comb 或远程清理时，通常就该升级 Feedback Resonator 了。',
  contentsLabel: '目录',
  routeTitle: 'Sonic Resonator 路线规划',
  routeSteps: [
    {
      title: '先带好普通 Scanner',
      body: '这个工具从碎片扫描开始。如果 Scanner 电量、氧气余量和回程地标都不稳，先处理这些基础问题。',
    },
    {
      title: '按挖矿路线走，不要慌着乱游',
      body: 'PC Gamer 和 GamesRadar 都把 Sonic Resonator 放在大矿节点和未知挖矿提示的语境里。先围绕扫描规划路线，做出来以后再从近处开始测试。',
    },
    {
      title: '用它处理大矿和 Bloom Biofilm',
      body: '制作完成后，对准大矿节点、Bloom Biofilm 或挡路生长物发射，再收集普通工具够不到的东西。不要在一次长潜里到处试每个物体。',
    },
    {
      title: '把它接到升级链里',
      body: 'Sonic Resonator 也是 Feedback Resonator 的前置工具。PC Gamer 和 GAMES.GG 都把 Feedback Resonator 写成普通 Sonic 到达上限后的远程升级。',
    },
    {
      title: '别把 Biofilm 和 Canker 混在一起',
      body: '普通 Sonic 可以处理早期 Bloom Biofilm。Armored Bloom Cankers 或需要远程清理的感染路线，通常要换成 Feedback Resonator。',
    },
  ],
  tableTitle: '扫描前准备',
  tableHeaders: ['准备项', '原因'],
  tableRows: [
    ['Scanner 和电量余量', '扫碎片时工具没电，会让整趟路线很难受。'],
    ['氧气缓冲', '大矿节点附近最容易让人盯着墙看太久。'],
    ['背包空间', '这趟目标是挖矿，背包塞满杂物就亏了。'],
    ['Beacon 或清楚地标', '如果这条路线以后还要回头跑，最好留下记号。'],
    [
      'Feedback Resonator 计划',
      '普通 Sonic 到达上限后，远程升级链就可以顺着往后做。',
    ],
  ],
  visualTitle: '工具使用卡',
  visualItems: [
    {
      label: '出发前',
      value: '扫描路线',
      note: '氧气循环稳定后，再去找碎片更舒服。',
    },
    {
      label: '第一次用',
      value: '大矿节点',
      note: '先在明确的挖矿提示上测试。',
    },
    {
      label: '后续',
      value: 'Feedback',
      note: '装甲感染路线通常需要升级。',
    },
  ],
  cautionTitle: '别因为有了新工具就过度深入',
  cautionBody:
    'Sonic Resonator 会让新材料变得可采，也正因为这样，它很容易把你拉进不该久留的路线。挖到目标、看一眼氧气，然后回家。好奇心可以留到下一趟。',
  faqTitle: '常见问题',
  faqs: [
    {
      title: 'Subnautica 2 Sonic Resonator 有什么用？',
      body: '它主要用来处理大矿节点、Bloom Biofilm，以及部分普通早期工具没法处理的路线阻挡物。',
    },
    {
      title: 'Sonic Resonator 要不要很早就冲？',
      body: '不建议。先把 Scanner、氧气升级和稳定回程路线做好，能安全反复挖矿以后再拿它更划算。',
    },
    {
      title: 'Feedback Resonator 需要 Sonic Resonator 吗？',
      body: '需要。Feedback Resonator 是从 Sonic Resonator 升级来的，所以 Sonic 是后续 Alien Ruins 工具链的一部分。',
    },
    {
      title: '为什么 Sonic Resonator 清不了 Angel Comb 路线？',
      body: '你可能遇到的是 Armored Bloom Canker 或后期感染阻挡。当前 Feedback Resonator 攻略把升级工具写成这类路线的远程答案。',
    },
  ],
  readNextTitle: '继续看',
  related: [
    { href: Routes.Subnautica2HeatTolerance, label: 'Heat Tolerance Guide' },
    { href: Routes.Subnautica2AngelComb, label: 'Angel Comb Guide' },
    { href: Routes.Subnautica2BloomBiofilm, label: 'Bloom Biofilm Guide' },
    { href: Routes.Subnautica2Celestine, label: 'Celestine 指南' },
    {
      href: Routes.Subnautica2ConduitCrystal,
      label: 'Conduit Crystal 指南',
    },
    { href: Routes.Subnautica2Strontium, label: 'Strontium 指南' },
    {
      href: Routes.Subnautica2FeedbackResonator,
      label: 'Feedback Resonator 指南',
    },
    {
      href: Routes.Subnautica2ModificationStation,
      label: 'Modification Station 指南',
    },
    { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm 指南' },
  ],
  sourcesTitle: '来源说明',
  sourceBody:
    '2026 年 5 月 27 日核对 PC Gamer、GamesRadar 和 GAMES.GG 的当前资料。Subnautica 2 仍在抢先体验，碎片路线、工具行为和升级材料后续可能调整。',
  cardKicker: '挖矿工具卡',
  cardBody:
    '整理碎片扫描、大矿节点、Bloom Biofilm 清理、装甲感染点限制、背包准备和 Feedback Resonator 前置。',
  cardTypeLabel: '类型',
  cardTypeValue: '工具指南',
  cardVerifiedLabel: '核对时间',
  cardStatusLabel: '状态',
  cardStatusValue: '抢先体验',
};

sonicCopy.ja = {
  ...sonicCopy.en,
  metadata: {
    title:
      'Subnautica 2 Sonic Resonator ガイド - 採掘、Bloom Biofilm、Feedback前提',
    description:
      'Subnautica 2のSonic Resonatorガイド。フラグメント、巨大鉱石、Bloom Biofilm、Feedback Resonatorへのアップグレードを整理します。',
  },
  title: 'Subnautica 2 Sonic Resonator ガイド',
  description:
    'Sonic Resonatorは巨大鉱石とBloom Biofilmのための重要ツールです。ただし装甲化した感染ルートでは、後のFeedback Resonatorが必要になることがあります。',
  quickLabel: '要点',
  quickAnswer:
    'Scanner、酸素、帰り道が安定してからSonic Resonatorのフラグメントを2個スキャンします。まずは巨大鉱石とBloom Biofilm用のツールとして使い、Armored Cankerや遠距離処理が必要な場面ではFeedback Resonatorを準備します。',
  routeSteps: [
    {
      title: 'Scannerを先に整える',
      body: 'フラグメントスキャンが入口です。電池と酸素に余裕を持たせます。',
    },
    {
      title: '巨大鉱石で試す',
      body: 'まず近場の大きな鉱石ノードで使い、深いルートへ持ち込む前に感覚をつかみます。',
    },
    {
      title: 'Bloom Biofilmに使う',
      body: '早いBloomルートの清理に役立ちますが、装甲化したCankerにはFeedback Resonatorが必要になることがあります。',
    },
    {
      title: 'Feedback Resonatorへつなげる',
      body: 'Feedback ResonatorはSonic Resonatorから進むアップグレードです。',
    },
  ],
  faqs: [
    {
      title: 'Sonic Resonatorは何に使う？',
      body: '巨大鉱石、Bloom Biofilm、一部のルートブロッカーに使います。',
    },
    {
      title: 'Feedback Resonatorに必要？',
      body: 'はい。Feedback ResonatorはSonic Resonatorから進むアップグレードです。',
    },
    {
      title: 'Angel Combで効かないのはなぜ？',
      body: 'Armored Bloom Cankerなど、Feedback Resonatorが必要な対象かもしれません。',
    },
  ],
  sourceBody:
    '2026年5月27日にPC Gamer、GamesRadar、GAMES.GGを確認しました。Early Access中はツール挙動やルートが変わる可能性があります。',
};

const fallbackLocaleAliases = {
  de: {
    title: 'Subnautica 2 Sonic Resonator Guide',
    description:
      'Guide for Sonic Resonator fragments, large ore mining, route blockers, and Feedback Resonator prep.',
  },
  fr: {
    title: 'Subnautica 2 Sonic Resonator Guide',
    description:
      'Guide Sonic Resonator pour fragments, gros minerais, blocages de route et preparation Feedback Resonator.',
  },
  'pt-BR': {
    title: 'Subnautica 2 Sonic Resonator Guide',
    description:
      'Guia do Sonic Resonator para fragmentos, grandes minerios, bloqueios de rota e Feedback Resonator.',
  },
  'es-419': {
    title: 'Subnautica 2 Sonic Resonator Guide',
    description:
      'Guia del Sonic Resonator: fragmentos, minerales grandes, bloqueos de ruta y Feedback Resonator.',
  },
  ko: {
    title: 'Subnautica 2 Sonic Resonator Guide',
    description:
      'Sonic Resonator fragments, large ore mining, route blockers, and Feedback Resonator prep.',
  },
  ru: {
    title: 'Subnautica 2 Sonic Resonator Guide',
    description:
      'Guide for Sonic Resonator fragments, large ore mining, blockers, and Feedback Resonator prep.',
  },
} satisfies Record<string, { title: string; description: string }>;

function getCopy(locale: Locale): SonicCopy {
  if (sonicCopy[locale]) {
    return sonicCopy[locale];
  }

  const fallback =
    fallbackLocaleAliases[locale as keyof typeof fallbackLocaleAliases] ??
    fallbackLocaleAliases.de;

  return {
    ...sonicCopy.en,
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
    pathname: Routes.Subnautica2SonicResonator,
  });
}

export default async function SonicResonatorPage({
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
      icon={WavesIcon}
      locale={locale}
      pathname={Routes.Subnautica2SonicResonator}
      sources={sharedSources}
    />
  );
}
