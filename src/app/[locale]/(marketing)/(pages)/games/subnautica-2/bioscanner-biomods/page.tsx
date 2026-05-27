import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { DnaIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type BioscannerCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-24';
const UPDATED_AT = '2026-05-27';

const sharedSources = [
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-bioscanner-location/',
    label: 'PC Gamer Bioscanner guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-biomods-best/',
    label: 'PC Gamer Biomods guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-tips/',
    label: 'PC Gamer beginner tips',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap',
    label: 'Unknown Worlds Early Access roadmap',
  },
  {
    href: 'https://www.gamespot.com/articles/subnautica-2-scanner-upgrade-bioscanner-guide/1100-6539971/',
    label: 'GameSpot Bioscanner guide',
  },
  {
    href: 'https://games.gg/subnautica-2/guides/subnautica-2-all-biomods-and-how-to-unlock-them/',
    label: 'GAMES.GG Biomods guide',
  },
];

const bioscannerCopy: Record<string, BioscannerCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Bioscanner and Biomods Guide - Location, Unlocks, and First Picks',
      description:
        'A practical Subnautica 2 Bioscanner and Biomods guide covering when to get the Bioscanner, what to prepare, how Biomod scans work, and which upgrades to prioritize first.',
    },
    eyebrow: 'Subnautica 2 biomod route',
    title: 'Subnautica 2 Bioscanner and Biomods Guide',
    description:
      'Bioscanner progression is easy to chase too early. The better play is to arrive with oxygen, a clean route, empty inventory space, and a reason to scan more than one creature.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Treat the Bioscanner as a late Alien Ruins route upgrade, not a beach-start errand. PC Gamer places it in the Cicada wreckage about 500m southeast of the Alien Ruins Research Outpost, around bearing 130, after the Tadpole Pens / blackbox chain. Scans are not retroactive, so once you craft the upgrade, revisit useful lifeforms for Biomod progress.',
    contentsLabel: 'Contents',
    routeTitle: 'Bioscanner route plan',
    routeSteps: [
      {
        title: 'Do normal Scanner work first',
        body: 'If you are still missing tool, station, or vehicle fragments, fix those first. Bioscanner helps later progression, but it does not replace normal Scanner blueprint work.',
      },
      {
        title: 'Use the Cicada wreck as the target',
        body: 'PC Gamer points to the Cicada wreckage southeast of the Alien Ruins Research Outpost. If you have not reached Ruby and Iso blackbox objectives yet, the route may feel like empty abyss before the wreck appears.',
      },
      {
        title: 'Prepare the route like a scan dive',
        body: 'A Bioscanner trip asks you to stop, navigate a wreck, and later look at lifeforms. Bring Tadpole depth planning, oxygen margin, Repair Tool, Air Bladder backup, and clear landmarks.',
      },
      {
        title: 'Scan lifeforms deliberately',
        body: 'PC Gamer reports that Bioscanner scans are not retroactive. Creatures scanned with the normal Scanner may need another pass with Bioscanner before they count for Biomod progress.',
      },
      {
        title: 'Pick Biomods for repeat value',
        body: 'The first useful Biomod is the one that improves your next several routes. If an upgrade helps oxygen pressure, travel reliability, or repeated scouting, it is usually better than a niche pick.',
      },
    ],
    tableTitle: 'Biomod priority checks',
    tableHeaders: ['Choice', 'How to judge it'],
    tableRows: [
      [
        'Oxygen support',
        'Good first choice if it makes scans, caves, wreck routes, and blackbox follow-ups less brittle.',
      ],
      [
        'Movement or route safety',
        'Strong if it helps you repeat routes with fewer panic turns.',
      ],
      [
        'Creature or environment utility',
        'Pick when the next route clearly asks for it, not just because it sounds rare.',
      ],
      [
        'Resource-focused picks',
        'Useful after you know which material loop you are improving, such as Celestine, Conduit Crystal, or Bloom routes.',
      ],
      [
        'Experimental choices',
        'Save these for after your core survival and route tools feel comfortable.',
      ],
    ],
    visualTitle: 'Bioscanner prep card',
    visualItems: [
      {
        label: 'Before',
        value: 'Cicada',
        note: 'Reach the Alien Ruins blackbox route before chasing Biomods.',
      },
      {
        label: 'During',
        value: 'Life scans',
        note: 'Scan safe targets while oxygen and landmarks are under control.',
      },
      {
        label: 'After',
        value: 'Route value',
        note: 'Pick Biomods that improve the next repeated route.',
      },
    ],
    cautionTitle: 'Do not turn Biomods into a shopping list',
    cautionBody:
      'Early Access upgrade balance can move. A useful Biomod guide should explain why an upgrade helps a route, not pretend every player needs the same final build.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'When should I get the Bioscanner in Subnautica 2?',
        body: 'After reaching Alien Ruins and the Cicada wreckage route. PC Gamer places it about 500m southeast of the Alien Ruins Research Outpost, after the Tadpole Pens / blackbox chain.',
      },
      {
        title: 'How do Biomods unlock?',
        body: 'Current reporting ties Bioscanner lifeform scans to additional Biomod progress. PC Gamer notes that earlier normal Scanner scans are not retroactive.',
      },
      {
        title: 'What Biomod should I pick first?',
        body: 'Pick the one that improves repeated routes: oxygen pressure, travel safety, scan reliability, or the material loop you are actually running.',
      },
      {
        title: 'Do I still need the regular Scanner?',
        body: 'Yes. The regular Scanner remains your blueprint tool for fragments, stations, and route unlocks. Bioscanner adds a different progression layer.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2AngelComb, label: 'Angel Comb Guide' },
      { href: Routes.Subnautica2BloomBiofilm, label: 'Bloom Biofilm Guide' },
      { href: Routes.Subnautica2Biolab, label: 'Biolab Guide' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
      {
        href: Routes.Subnautica2FeedbackResonator,
        label: 'Feedback Resonator Guide',
      },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal Guide',
      },
      { href: Routes.Subnautica2Celestine, label: 'Celestine Guide' },
      { href: Routes.Subnautica2OxygenDepth, label: 'Oxygen and Depth' },
      { href: Routes.Subnautica2Biomes, label: 'Biomes Guide' },
      {
        href: Routes.Subnautica2CreatureEnamel,
        label: 'Creature Enamel Guide',
      },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Beginner, label: 'Beginner Route' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 27, 2026 against current PC Gamer, GameSpot, GAMES.GG, and official Early Access roadmap notes. Upgrade details, creature requirements, and wreck-route objectives can change as Subnautica 2 patches land.',
    cardKicker: 'Biomod scan card',
    cardBody:
      'Bioscanner timing, lifeform scan habits, Biomod priority checks, and route-first upgrade planning.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Upgrade guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Bioscanner 和 Biomods 指南 - 位置、解锁和优先选择',
      description:
        'Subnautica 2 中文 Bioscanner 和 Biomods 指南，整理什么时候去拿、出发前准备、如何通过扫描解锁 Biomod，以及前期优先选什么。',
    },
    eyebrow: 'Subnautica 2 生物模组路线',
    title: 'Subnautica 2 Bioscanner 和 Biomods 指南',
    description:
      'Bioscanner 很容易让人太早去追。更稳的做法是先有氧气余量、清楚路线、空背包格，并且知道这一趟为什么要扫不止一个生物。',
    quickLabel: '快速结论',
    quickAnswer:
      '把 Bioscanner 当成中期路线升级，不要当成开局五分钟目标。先养成普通 Scanner 习惯，再用 Bioscanner 扫描生物推进 Biomod。前期 Biomod 优先选能让反复跑图更安全的，不要只看名字炫不炫。',
    contentsLabel: '目录',
    routeTitle: 'Bioscanner 路线规划',
    routeSteps: [
      {
        title: '先把普通 Scanner 做好',
        body: '如果工具、工作站或载具碎片还缺很多，先处理这些。Bioscanner 能推进后续成长，但不能代替基础蓝图扫描。',
      },
      {
        title: '按扫描潜水来准备',
        body: 'Bioscanner 路线会让你停下来观察生物，所以要有氧气余量、Air Bladder 备用、清楚地标，以及足够背包空间。',
      },
      {
        title: '有意识地扫描生物',
        body: '当前报道把 Bioscanner 生物扫描和 Biomod 解锁联系在一起。安全目标不要游过去就算了，它们可能就是成长路线的一部分。',
      },
      {
        title: 'Biomod 看重复路线价值',
        body: '第一个有用 Biomod，应该能改善接下来多条路线。如果它能缓解氧气压力、提高返程稳定性或帮助反复侦察，通常比小众选择更稳。',
      },
    ],
    tableTitle: 'Biomod 优先级检查',
    tableHeaders: ['选择方向', '怎么判断'],
    tableRows: [
      ['氧气支持', '如果能让扫描、洞穴和残骸路线更稳，前期价值很高。'],
      ['移动或路线安全', '能减少迷路和慌张返程，就是强选择。'],
      ['生物或环境用途', '等下一条路线明确需要时再选，不要只因为听起来稀有。'],
      ['资源相关选择', '先确认你要改善哪条材料循环，再决定。'],
      ['实验型选择', '等基础生存和跑图工具舒服以后再试。'],
    ],
    visualTitle: 'Bioscanner 准备卡',
    visualItems: [
      {
        label: '出发前',
        value: '蓝图',
        note: '先补普通 Scanner 的基础工作。',
      },
      {
        label: '路线上',
        value: '生物扫描',
        note: '在氧气和地标可控时扫描安全目标。',
      },
      {
        label: '回来后',
        value: '路线价值',
        note: '优先选能改善下一条重复路线的 Biomod。',
      },
    ],
    cautionTitle: '不要把 Biomod 写成固定购物清单',
    cautionBody:
      '抢先体验阶段升级平衡可能会改。好的 Biomod 攻略应该说明它为什么能改善路线，而不是假装所有玩家都该用同一套最终 build。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 什么时候去拿 Bioscanner？',
        body: '等普通扫描、氧气规划和可重复路线习惯都稳定后再去更好。它更像中期升级，不是开局第一个目标。',
      },
      {
        title: 'Biomods 怎么解锁？',
        body: '当前报道把 Bioscanner 扫描生物和更多 Biomod 进度联系起来。看到安全生物目标时，别只把它当背景。',
      },
      {
        title: '第一个 Biomod 选什么？',
        body: '选能改善重复路线的：氧气压力、移动安全、扫描稳定性，或者你正在跑的材料循环。',
      },
      {
        title: '有 Bioscanner 还需要普通 Scanner 吗？',
        body: '需要。普通 Scanner 仍然负责碎片、工作站和路线解锁；Bioscanner 是另一层成长系统。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2AngelComb, label: 'Angel Comb Guide' },
      { href: Routes.Subnautica2BloomBiofilm, label: 'Bloom Biofilm Guide' },
      { href: Routes.Subnautica2Biolab, label: 'Biolab 指南' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner 指南' },
      {
        href: Routes.Subnautica2FeedbackResonator,
        label: 'Feedback Resonator 指南',
      },
      { href: Routes.Subnautica2OxygenDepth, label: '氧气和下潜深度' },
      { href: Routes.Subnautica2Biomes, label: '生物群系指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Beginner, label: '新手路线' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 24 日核对当前 Bioscanner、Biomod、入门路线报道和官方抢先体验路线图。Subnautica 2 后续补丁可能改变升级细节。',
    cardKicker: '生物模组扫描卡',
    cardBody:
      '整理 Bioscanner 时机、生物扫描习惯、Biomod 优先级和按路线选升级的思路。',
    cardTypeLabel: '类型',
    cardTypeValue: '升级指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 Bioscanner and Biomods Guide - 入手時期と最初の選択',
      description:
        'Subnautica 2 の Bioscanner と Biomods ガイド。準備、lifeform scans、Biomod unlocks、最初に選ぶ upgrade を整理します。',
    },
    eyebrow: 'Subnautica 2 biomod route',
    title: 'Subnautica 2 Bioscanner and Biomods Guide',
    description:
      'Bioscanner は早く追いすぎると危険です。酸素、帰還ルート、空き inventory、スキャン目的を用意してから向かいます。',
    quickLabel: '短い答え',
    quickAnswer:
      'Bioscanner は mid-game route upgrade として扱います。まず通常 Scanner の習慣を作り、落ち着いて移動できるようになってから lifeform scans で Biomod progress を進めます。',
    contentsLabel: '目次',
    routeTitle: 'Bioscanner route plan',
    routeSteps: [
      {
        title: '通常 Scanner を先に使う',
        body: 'tool、station、vehicle fragments が足りないなら先にそちらを進めます。',
      },
      {
        title: 'scan dive として準備する',
        body: 'Bioscanner trip は立ち止まる時間が増えます。oxygen、Air Bladder、landmarks、inventory が必要です。',
      },
      {
        title: 'lifeforms を意識して scan する',
        body: '現在の報道では Bioscanner scans が Biomod unlocks に関係します。',
      },
      {
        title: 'Biomods は route value で選ぶ',
        body: 'oxygen、travel safety、repeat scouting に効くものを先に選ぶと安定します。',
      },
    ],
    tableTitle: 'Biomod priority checks',
    tableHeaders: ['Choice', 'How to judge it'],
    tableRows: [
      ['Oxygen support', 'scan routes と caves が安定するなら強い。'],
      ['Movement or safety', '迷いにくくなるなら価値が高い。'],
      ['Creature utility', '次の route が要求する時に選ぶ。'],
      ['Resource picks', '改善したい material loop がある時に選ぶ。'],
      ['Experimental picks', '基本 survival が楽になってから試す。'],
    ],
    visualTitle: 'Bioscanner prep card',
    visualItems: [
      {
        label: 'Before',
        value: 'Blueprints',
        note: '通常 Scanner を先に済ませる。',
      },
      {
        label: 'During',
        value: 'Life scans',
        note: '安全な対象を落ち着いて scan。',
      },
      {
        label: 'After',
        value: 'Route value',
        note: '次の repeat route に効く Biomod を選ぶ。',
      },
    ],
    cautionTitle: '固定 build として考えない',
    cautionBody:
      'Early Access では balance が動きます。Biomod は最終リストではなく、route をどう楽にするかで判断します。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Bioscanner はいつ取る？',
        body: '通常 Scanner、oxygen planning、repeatable route が安定してからがおすすめです。',
      },
      {
        title: 'Biomods はどう unlock する？',
        body: '現在の報道では Bioscanner の lifeform scans が関係します。',
      },
      {
        title: '最初の Biomod は？',
        body: 'oxygen、route safety、scan reliability に効くものを優先します。',
      },
      {
        title: '通常 Scanner はまだ必要？',
        body: '必要です。fragments や stations には通常 Scanner が大事です。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2AngelComb, label: 'Angel Comb Guide' },
      { href: Routes.Subnautica2BloomBiofilm, label: 'Bloom Biofilm Guide' },
      { href: Routes.Subnautica2Biolab, label: 'Biolab Guide' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
      {
        href: Routes.Subnautica2FeedbackResonator,
        label: 'Feedback Resonator Guide',
      },
      { href: Routes.Subnautica2OxygenDepth, label: 'Oxygen and Depth' },
      { href: Routes.Subnautica2Biomes, label: 'Biomes Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Beginner, label: 'Beginner Route' },
    ],
    sourcesTitle: '出典メモ',
    sourceBody:
      '2026年5月24日に Bioscanner、Biomod、beginner route reporting と Early Access roadmap を確認。',
    cardKicker: 'Biomod scan card',
    cardBody:
      'Bioscanner timing、lifeform scans、Biomod priority の route-first メモ。',
    cardTypeLabel: '種類',
    cardTypeValue: 'Upgrade guide',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: '状態',
    cardStatusValue: 'Early Access',
  },
};

bioscannerCopy.zh = {
  ...bioscannerCopy.en,
  metadata: {
    title: 'Subnautica 2 Bioscanner 和 Biomods 指南 - 位置、解锁和优先选择',
    description:
      'Subnautica 2 中文 Bioscanner 和 Biomods 指南：Cicada wreckage 位置、Alien Ruins 路线、扫描不追溯、Biomod 解锁和前期优先选择。',
  },
  eyebrow: 'Subnautica 2 生物模块路线',
  title: 'Subnautica 2 Bioscanner 和 Biomods 指南',
  description:
    'Bioscanner 很容易让人太早去追。更稳的做法是先有氧气余量、清楚路线、Tadpole 深度、空背包格，并且知道这一趟为什么要扫不止一个生物。',
  quickLabel: '快速结论',
  quickAnswer:
    '把 Bioscanner 当成 Alien Ruins 后段路线升级，不要当成开局目标。PC Gamer 把它放在 Alien Ruins Research Outpost 东南约 500m、方位约 130 的 Cicada wreckage，通常要跟 Tadpole Pens / blackbox 目标链一起推进。扫描不追溯，做出 Bioscanner 后，之前用普通 Scanner 扫过的生物可能还要重新扫一次。',
  contentsLabel: '目录',
  routeTitle: 'Bioscanner 路线规划',
  routeSteps: [
    {
      title: '先把普通 Scanner 做好',
      body: '如果工具、工作站或载具碎片还缺很多，先处理这些。Bioscanner 能推进后续成长，但不能代替基础蓝图扫描。',
    },
    {
      title: '把 Cicada wreck 当成目标点',
      body: 'PC Gamer 指向 Alien Ruins Research Outpost 东南方向的 Cicada wreckage。如果 Ruby 和 Iso 的 blackbox 目标还没推进，这条路线可能看起来像一片空深水。',
    },
    {
      title: '按 wreck 扫描路线准备',
      body: 'Bioscanner 路线会让你停下来导航、进 wreck、观察生物。准备 Tadpole 深度、Repair Tool、氧气余量、Air Bladder 备用和清楚地标。',
    },
    {
      title: '重新扫描关键生物',
      body: 'PC Gamer 提到 Bioscanner 扫描不追溯。以前普通 Scanner 扫过的生物，拿到 Bioscanner 后可能还要再扫一遍，才会算进 Biomod 进度。',
    },
    {
      title: 'Biomod 看重复路线价值',
      body: '第一个有用 Biomod，应该能改善接下来多条路线。如果它能缓解氧气压力、提高返程稳定性或帮助反复侦察，通常比小众选择更稳。',
    },
  ],
  tableTitle: 'Biomod 优先级检查',
  tableHeaders: ['选择方向', '怎么判断'],
  tableRows: [
    [
      '氧气支持',
      '如果能让扫描、洞穴、wreck 和 blackbox 路线更稳，前期价值很高。',
    ],
    ['移动或路线安全', '能减少迷路和慌张返程，就是强选择。'],
    ['生物或环境用途', '等下一条路线明确需要时再选，不要只因为听起来稀有。'],
    [
      '资源相关选择',
      '先确认你要改善哪条材料循环，比如 Celestine、Conduit Crystal 或 Bloom 路线。',
    ],
    ['实验型选择', '等基础生存和跑图工具舒服以后再试。'],
  ],
  visualTitle: 'Bioscanner 准备卡',
  visualItems: [
    {
      label: '前置',
      value: 'Cicada',
      note: '先推进 Alien Ruins blackbox 路线。',
    },
    {
      label: '途中',
      value: '生物扫描',
      note: '氧气和地标可控时重新扫关键目标。',
    },
    {
      label: '回家',
      value: '路线价值',
      note: '优先选能改善下一条重复路线的 Biomod。',
    },
  ],
  cautionTitle: '不要把 Biomod 写成固定购物清单',
  cautionBody:
    '抢先体验阶段升级平衡可能会改。好的 Biomod 攻略应该说明它为什么能改善路线，而不是假装所有玩家都该用同一套最终 build。',
  faqTitle: '常见问题',
  faqs: [
    {
      title: 'Subnautica 2 Bioscanner 在哪里？',
      body: 'PC Gamer 当前把它放在 Alien Ruins Research Outpost 东南约 500m、方位约 130 的 Cicada wreckage，通常跟 Tadpole Pens / blackbox 目标链一起推进。',
    },
    {
      title: 'Biomods 怎么解锁？',
      body: '当前报道把 Bioscanner 扫描生物和 Biomod 进度联系起来。注意普通 Scanner 以前扫过的不一定追溯，需要拿到 Bioscanner 后重新扫。',
    },
    {
      title: '第一个 Biomod 选什么？',
      body: '选能改善重复路线的：氧气压力、移动安全、扫描稳定性，或者你正在跑的材料循环。',
    },
    {
      title: '有 Bioscanner 还需要普通 Scanner 吗？',
      body: '需要。普通 Scanner 仍然负责碎片、工作站和路线解锁；Bioscanner 是另一层成长系统。',
    },
  ],
  readNextTitle: '继续看',
  related: [
    { href: Routes.Subnautica2AngelComb, label: 'Angel Comb Guide' },
    { href: Routes.Subnautica2BloomBiofilm, label: 'Bloom Biofilm Guide' },
    { href: Routes.Subnautica2Biolab, label: 'Biolab 指南' },
    { href: Routes.Subnautica2Scanner, label: 'Scanner 指南' },
    {
      href: Routes.Subnautica2FeedbackResonator,
      label: 'Feedback Resonator 指南',
    },
    {
      href: Routes.Subnautica2ConduitCrystal,
      label: 'Conduit Crystal 指南',
    },
    { href: Routes.Subnautica2Celestine, label: 'Celestine 指南' },
    { href: Routes.Subnautica2OxygenDepth, label: '氧气和下潜深度' },
    { href: Routes.Subnautica2Biomes, label: '生物群系指南' },
    { href: Routes.Subnautica2Resources, label: '资源指南' },
  ],
  sourcesTitle: '来源说明',
  sourceBody:
    '2026 年 5 月 27 日核对 PC Gamer、GameSpot、GAMES.GG 和官方抢先体验路线图。Subnautica 2 后续补丁可能改变 Bioscanner 位置、Biomod 条件和路线目标。',
  cardKicker: '生物模块扫描卡',
  cardBody:
    '整理 Cicada wreckage 位置、Bioscanner 时机、生物扫描不追溯、Biomod 优先级和按路线选升级的思路。',
  cardTypeLabel: '类型',
  cardTypeValue: '升级指南',
  cardVerifiedLabel: '核对时间',
  cardStatusLabel: '状态',
  cardStatusValue: '抢先体验',
};

bioscannerCopy.ja = {
  ...bioscannerCopy.en,
  metadata: {
    title:
      'Subnautica 2 Bioscanner and Biomods ガイド - 場所、解放、最初の選択',
    description:
      'Subnautica 2のBioscannerとBiomodsガイド。Cicada wreckage、Alien Ruins、非遡及スキャン、Biomod unlocks、最初の選択を整理します。',
  },
  title: 'Subnautica 2 Bioscanner and Biomods ガイド',
  description:
    'Bioscannerは早く追いすぎると危険です。Alien Ruinsの後半ルート、Tadpole深度、酸素、帰り道を整えてから向かいます。',
  quickLabel: '要点',
  quickAnswer:
    'PC GamerはBioscannerをAlien Ruins Research Outpostから南東約500m、方位130あたりのCicada wreckageに置いています。通常Scannerの過去スキャンは遡及しないため、Bioscanner作成後に重要な生物を再スキャンします。',
  routeSteps: [
    {
      title: '通常Scannerを先に終える',
      body: 'ツール、Station、Vehicle fragmentsが不足しているなら先にそちらを進めます。',
    },
    {
      title: 'Cicada wreckを目標にする',
      body: 'Alien Ruins Research Outpost南東のwreckを目印にします。blackbox目標が進んでいないと見つけにくいルートです。',
    },
    {
      title: 'スキャンはやり直す',
      body: 'Bioscanner前の通常Scannerスキャンは遡及しないため、必要なlifeformはもう一度スキャンします。',
    },
    {
      title: 'Biomodはルート価値で選ぶ',
      body: '酸素、移動安全、再探索に効くものを最初に選ぶと安定します。',
    },
  ],
  tableRows: [
    ['Oxygen support', 'wreckやscan routeを安定させます。'],
    ['Movement safety', '帰り道の事故を減らします。'],
    [
      'Resource loop',
      'CelestineやConduit Crystalなど、改善したい素材ルートがある時に選びます。',
    ],
    ['Experimental picks', '基本ルートが安定してから試します。'],
  ],
  visualItems: [
    {
      label: 'Before',
      value: 'Cicada',
      note: 'Alien Ruins blackbox routeを進めます。',
    },
    {
      label: 'During',
      value: 'Scans',
      note: '重要なlifeformを再スキャンします。',
    },
    {
      label: 'After',
      value: 'Biomod',
      note: '次のルートが楽になるものを選びます。',
    },
  ],
  faqs: [
    {
      title: 'Bioscannerはどこ？',
      body: 'Alien Ruins Research Outpost南東約500m、方位130あたりのCicada wreckageです。',
    },
    {
      title: 'Biomodsはどう解放する？',
      body: 'Bioscannerでlifeformをスキャンして進めます。過去の通常Scannerスキャンは遡及しません。',
    },
    {
      title: '最初のBiomodは？',
      body: '酸素、移動安全、探索の安定に効くものを優先します。',
    },
  ],
  sourceBody:
    '2026年5月27日にPC Gamer、GameSpot、GAMES.GG、公式Early Accessロードマップを確認しました。Early Access中は場所や条件が変わる可能性があります。',
};

const fallbackLocaleAliases = {
  de: {
    title: 'Subnautica 2 Bioscanner and Biomods Guide',
    description:
      'Route-first Guide fuer Bioscanner, Biomod unlocks, lifeform scans, Vorbereitung und erste Upgrade-Wahl.',
  },
  fr: {
    title: 'Subnautica 2 Bioscanner and Biomods Guide',
    description:
      'Guide pratique pour Bioscanner, Biomods, scans de creatures, preparation de route et premiers choix.',
  },
  'pt-BR': {
    title: 'Subnautica 2 Bioscanner and Biomods Guide',
    description:
      'Guia do Bioscanner e Biomods: quando buscar, como preparar a rota, lifeform scans e primeiros upgrades.',
  },
  'es-419': {
    title: 'Subnautica 2 Bioscanner and Biomods Guide',
    description:
      'Guia de Bioscanner y Biomods: cuando buscarlo, como preparar la ruta, scans de criaturas y primeras mejoras.',
  },
  ko: {
    title: 'Subnautica 2 Bioscanner and Biomods Guide',
    description:
      'Bioscanner와 Biomods 가이드: lifeform scans, unlocks, route prep, first upgrade picks.',
  },
  ru: {
    title: 'Subnautica 2 Bioscanner and Biomods Guide',
    description:
      'Гайд по Bioscanner и Biomods: сканы существ, подготовка маршрута, unlocks и первые улучшения.',
  },
} satisfies Record<
  string,
  {
    title: string;
    description: string;
  }
>;

function getCopy(locale: Locale): BioscannerCopy {
  if (bioscannerCopy[locale]) {
    return bioscannerCopy[locale];
  }

  const fallback =
    fallbackLocaleAliases[locale as keyof typeof fallbackLocaleAliases] ??
    fallbackLocaleAliases.de;

  return {
    ...bioscannerCopy.en,
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
    pathname: Routes.Subnautica2BioscannerBiomods,
  });
}

export default async function BioscannerBiomodsPage({
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
      icon={DnaIcon}
      locale={locale}
      pathname={Routes.Subnautica2BioscannerBiomods}
      sources={sharedSources}
    />
  );
}
