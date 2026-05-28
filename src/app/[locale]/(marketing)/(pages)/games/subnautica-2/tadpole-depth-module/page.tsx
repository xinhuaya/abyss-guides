import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { GaugeIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type TadpoleDepthModuleCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-25';
const UPDATED_AT = '2026-05-27';

const sharedSources = [
  {
    href: 'https://www.gamespot.com/articles/subnautica-2-tadpole-upgrades-modules-guide/1100-6539941/',
    label: 'GameSpot Tadpole upgrades guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-feedback-resonator-scan-locations/',
    label: 'PC Gamer Feedback Resonator guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-celestine-location/',
    label: 'PC Gamer Celestine guide',
  },
  {
    href: 'https://www.gamesradar.com/games/survival/subnautica-2-enameled-glass/',
    label: 'GamesRadar Enameled Glass guide',
  },
];

const tadpoleDepthModuleCopy: Record<string, TadpoleDepthModuleCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Tadpole Depth Module Guide - Mk.1 Location, Recipe, and Deep Route Prep',
      description:
        'A practical Subnautica 2 Tadpole Depth Module guide covering the Mk.1 scan route, Alien Ruins Needler risk, Celestine, Enameled Glass, System Chip, and deeper route planning.',
    },
    eyebrow: 'Subnautica 2 vehicle upgrade',
    title: 'Subnautica 2 Tadpole Depth Module Guide',
    description:
      'The Tadpole Depth Module is the point where the vehicle stops being a comfort blanket and starts being a real route tool. The scan is risky, the recipe pulls from several earlier material chains, and the reward is simple: deeper water without treating every meter like a dare.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Scan the Tadpole Depth Module Mk.1 fragments around the deeper Alien Ruins route, with current reporting pointing toward a cave below a Needler nest southeast of the Alien Ruins Research Base. Prepare the Modification Station, Celestine, Enameled Glass, and a System Chip before expecting the upgrade to happen quickly. After installing it, use the extra depth for Feedback Resonator, rare resource, and deeper base-route planning.',
    contentsLabel: 'Contents',
    routeTitle: 'Depth Module route plan',
    routeSteps: [
      {
        title: 'Build the support chain first',
        body: 'Before chasing the module, make sure the Tadpole exists, the Modification Station is handled, and you have a clean way to repair and power the vehicle. Bring the oxygen plan too; the scan route is not the place to discover that your return habits are sloppy.',
      },
      {
        title: 'Treat Alien Ruins as the scan zone',
        body: 'GameSpot points the Mk.1 scan route toward a deeper Alien Ruins area, including a Needler nest route southeast of the Alien Ruins Research Base. Use landmarks and a beacon note instead of drifting through open water.',
      },
      {
        title: 'Do the scan like a hit-and-run',
        body: 'Park the Tadpole facing out, scan the module fragments, and leave. Needlers make slow inventory checks expensive, and this is not the trip for side mining unless the route already feels boring.',
      },
      {
        title: 'Solve the recipe chain at base',
        body: 'Current reporting lists Celestine, Enameled Glass, and a System Chip in the Mk.1 craft chain. That means the upgrade quietly depends on earlier Celestine, Creature Enamel, and electronics prep.',
      },
      {
        title: 'Use the new depth deliberately',
        body: 'Once installed, point the Tadpole toward a named objective: Feedback Resonator scans, deeper mineral loops, or a safer base route. Do not celebrate the new limit by wandering until the power cell feels nervous.',
      },
    ],
    tableTitle: 'Mk.1 prep checklist',
    tableHeaders: ['Check', 'Why it matters'],
    tableRows: [
      [
        'Tadpole health and power',
        'The scan route is hostile enough without starting on a weak battery or damaged hull.',
      ],
      [
        'Modification Station',
        'The module is an upgrade craft, not just a loose pickup.',
      ],
      [
        'Celestine stock',
        'The recipe chain points back to Alien Ruins mineral routes.',
      ],
      [
        'Enameled Glass',
        'This pulls in the Creature Enamel and Needler Mango chain.',
      ],
      [
        'System Chip',
        'Handle electronics before you come home with fragments and no way to finish the craft.',
      ],
    ],
    visualTitle: 'Upgrade chain',
    visualItems: [
      {
        label: 'Scan',
        value: 'Alien Ruins',
        note: 'Needler nest route, beaconed and treated as hostile.',
      },
      {
        label: 'Craft',
        value: 'Mk.1',
        note: 'Celestine, Enameled Glass, System Chip, station prep.',
      },
      {
        label: 'Use',
        value: 'Deep routes',
        note: 'Feedback Resonator, rare minerals, and safer base loops.',
      },
    ],
    cautionTitle: 'Depth is permission to plan, not permission to wander',
    cautionBody:
      'The first dive after installing the module should have one target. More depth makes bad route habits less obvious for a while, then punishes them when power, oxygen, or repairs run thin.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Where do you find the Tadpole Depth Module in Subnautica 2?',
        body: 'Current reporting points to the deeper Alien Ruins route, including a cave below a Needler nest southeast of the Alien Ruins Research Base. Bring the Tadpole and mark the approach.',
      },
      {
        title: 'What do you need to craft the Tadpole Depth Module Mk.1?',
        body: 'Current guides list Celestine, Enameled Glass, and a System Chip as part of the Mk.1 craft chain, with the Modification Station needed for the upgrade work.',
      },
      {
        title: 'Why should I get the Depth Module before Feedback Resonator?',
        body: 'Feedback Resonator and similar routes sit in deeper, riskier water. The Depth Module gives the Tadpole enough margin to make those routes feel planned instead of improvised.',
      },
      {
        title: 'Should I rush the Depth Module right after building Tadpole?',
        body: 'No. Build repair, power, Celestine, Enameled Glass, and electronics prep first. Rushing the scan route without support wastes the time the module is supposed to save.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2ImprovedFins, label: 'Improved Fins Guide' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Vehicle Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
      { href: Routes.Subnautica2OxygenDepth, label: 'Oxygen and Depth Guide' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
      {
        href: Routes.Subnautica2EnameledGlass,
        label: 'Enameled Glass Guide',
      },
      {
        href: Routes.Subnautica2CreatureEnamel,
        label: 'Creature Enamel Guide',
      },
      { href: Routes.Subnautica2Celestine, label: 'Celestine Guide' },
      { href: Routes.Subnautica2SystemChip, label: 'System Chip Guide' },
      {
        href: Routes.Subnautica2FeedbackResonator,
        label: 'Feedback Resonator Guide',
      },
      { href: Routes.Subnautica2Biomes, label: 'Biomes Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 27, 2026 against current GameSpot Tadpole upgrade reporting, PC Gamer Feedback Resonator and Celestine reporting, and GamesRadar Enameled Glass reporting. Early Access module recipes, depth limits, and scan placement may change after patches.',
    cardKicker: 'Depth upgrade card',
    cardBody:
      'Mk.1 scan route, Alien Ruins Needler risk, Celestine, Enameled Glass, System Chip, and deeper route planning.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Vehicle upgrade',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Tadpole Depth Module 指南 - Mk.1 位置、配方和深水路线准备',
      description:
        'Subnautica 2 中文 Tadpole Depth Module 指南：Mk.1 扫描路线、Alien Ruins 和 Needler 风险、Celestine、Enameled Glass、System Chip 与深水路线规划。',
    },
    eyebrow: 'Subnautica 2 载具升级',
    title: 'Subnautica 2 Tadpole Depth Module 指南',
    description:
      'Tadpole Depth Module 是 Tadpole 从“安全感载具”变成真正路线工具的节点。扫描路线有风险，配方会拉到好几条前置材料链，但收益很直接：你终于能把更深的水域当成计划，而不是赌命。',
    quickLabel: '快速结论',
    quickAnswer:
      '当前资料把 Tadpole Depth Module Mk.1 指向更深的 Alien Ruins 路线，尤其是 Alien Ruins Research Base 东南方向、Needler nest 下方洞穴一带。出发前准备好 Modification Station、Celestine、Enameled Glass 和 System Chip。装上后，再去跑 Feedback Resonator、稀有资源和更深的建家路线会稳很多。',
    contentsLabel: '目录',
    routeTitle: 'Depth Module 路线规划',
    routeSteps: [
      {
        title: '先把支撑链做好',
        body: '别刚造出 Tadpole 就急着冲深水。先确认载具、Modification Station、维修、供电和返程路线都能撑住。深度升级不是用来掩盖糟糕准备的。',
      },
      {
        title: '把 Alien Ruins 当扫描区',
        body: 'GameSpot 把 Mk.1 扫描路线指向较深的 Alien Ruins 区域，提到 Alien Ruins Research Base 东南方向、Needler nest 附近的路线。用地标和 beacon 记录入口，不要在开阔水域乱漂。',
      },
      {
        title: '扫描按快进快出处理',
        body: 'Tadpole 车头朝出口停好，扫描碎片，完成就走。Needler 会惩罚慢慢整理背包的人，这一趟不是顺路挖矿旅行。',
      },
      {
        title: '回基地解决配方链',
        body: '当前资料把 Celestine、Enameled Glass、System Chip 放进 Mk.1 制作链。也就是说，这个升级会吃到前面的 Celestine、Creature Enamel 和电子元件准备。',
      },
      {
        title: '新深度要对应具体目标',
        body: '装好之后，第一趟深水最好只定一个目标：Feedback Resonator 扫描、稀有矿物路线，或者更安全的建家路线。别因为能下更深就一直往下逛。',
      },
    ],
    tableTitle: 'Mk.1 出发前检查',
    tableHeaders: ['检查项', '为什么重要'],
    tableRows: [
      ['Tadpole 耐久和电量', '路线本身已经够危险，不要用半残载具开局。'],
      ['Modification Station', '这是升级制作，不是捡到就自动装上的道具。'],
      ['Celestine 库存', '配方链会拉回 Alien Ruins 的矿物路线。'],
      [
        'Enameled Glass',
        '它会进一步拉到 Creature Enamel 和 Needler Mango 链。',
      ],
      ['System Chip', '别碎片扫回来了，却卡在电子元件上。'],
    ],
    visualTitle: '升级链',
    visualItems: [
      {
        label: '扫描',
        value: 'Alien Ruins',
        note: 'Needler nest 路线，按危险水域处理。',
      },
      {
        label: '制作',
        value: 'Mk.1',
        note: 'Celestine、Enameled Glass、System Chip 和工作站准备。',
      },
      {
        label: '用途',
        value: '深水路线',
        note: 'Feedback Resonator、稀有矿物和更稳的基地路线。',
      },
    ],
    cautionTitle: '深度是用来规划的，不是用来乱逛的',
    cautionBody:
      '装好模块后的第一趟深水，最好只有一个目标。更深的上限会暂时掩盖坏习惯，等电量、维修或返程余量不够时才一次性还账。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Tadpole Depth Module 在哪里？',
        body: '当前资料指向较深的 Alien Ruins 路线，尤其是 Alien Ruins Research Base 东南方向、Needler nest 下方洞穴附近。建议带 Tadpole 并标记入口。',
      },
      {
        title: 'Tadpole Depth Module Mk.1 需要什么材料？',
        body: '当前攻略把 Celestine、Enameled Glass、System Chip 放进 Mk.1 制作链，并需要 Modification Station 来处理升级。',
      },
      {
        title: '为什么 Feedback Resonator 前要先做 Depth Module？',
        body: 'Feedback Resonator 这类路线更深、更危险。Depth Module 能让 Tadpole 有足够深度余量，路线会更像计划，而不是临场硬冲。',
      },
      {
        title: '造出 Tadpole 后要立刻冲 Depth Module 吗？',
        body: '不建议。先把维修、供电、Celestine、Enameled Glass 和电子元件准备好，再去扫描会稳得多。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2ImprovedFins, label: 'Improved Fins Guide' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 载具指南' },
      {
        href: Routes.Subnautica2EnameledGlass,
        label: 'Enameled Glass 指南',
      },
      {
        href: Routes.Subnautica2CreatureEnamel,
        label: 'Creature Enamel 指南',
      },
      { href: Routes.Subnautica2Celestine, label: 'Celestine 指南' },
      { href: Routes.Subnautica2SystemChip, label: 'System Chip 指南' },
      {
        href: Routes.Subnautica2FeedbackResonator,
        label: 'Feedback Resonator 指南',
      },
      { href: Routes.Subnautica2Biomes, label: '生物群系指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 25 日根据 GameSpot 的 Tadpole 升级资料、PC Gamer 的 Feedback Resonator 和 Celestine 资料，以及 GamesRadar 的 Enameled Glass 资料整理。抢先体验阶段模块配方、深度上限和扫描位置都可能随补丁变化。',
    cardKicker: '深度升级卡',
    cardBody:
      'Mk.1 扫描路线、Alien Ruins Needler 风险、Celestine、Enameled Glass、System Chip 和深水路线规划。',
    cardTypeLabel: '类型',
    cardTypeValue: '载具升级',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
  ja: {
    metadata: {
      title:
        'Subnautica 2 Tadpole Depth Module ガイド - Mk.1 の場所、素材、深海ルート準備',
      description:
        'Subnautica 2 の Tadpole Depth Module ガイド。Mk.1 スキャン場所、Alien Ruins、Needler、Celestine、Enameled Glass、System Chip、深海ルート準備を整理します。',
    },
    eyebrow: 'Subnautica 2 車両アップグレード',
    title: 'Subnautica 2 Tadpole Depth Module ガイド',
    description:
      'Tadpole Depth Module は、Tadpole をただの安心材料から本当のルート道具に変えるアップグレードです。スキャンは危険で、素材チェーンも長めですが、深い水域を計画として扱えるようになります。',
    quickLabel: '要点',
    quickAnswer:
      '現在の情報では、Tadpole Depth Module Mk.1 は深めの Alien Ruins ルート、Alien Ruins Research Base 南東の Needler nest 下の洞窟付近が手がかりです。Modification Station、Celestine、Enameled Glass、System Chip を準備してから向かいます。装備後は Feedback Resonator や深い資源ルートが安定します。',
    contentsLabel: '目次',
    routeTitle: 'Depth Module ルート計画',
    routeSteps: [
      {
        title: '先に支援チェーンを整える',
        body: 'Tadpole、Modification Station、修理、電力、帰り道を先に確認します。深度アップグレードは、準備不足を帳消しにしてくれる道具ではありません。',
      },
      {
        title: 'Alien Ruins をスキャン区域にする',
        body: 'GameSpot は Mk.1 のスキャン先として、Alien Ruins Research Base 南東の Needler nest 付近を挙げています。地形とビーコンで入口を記録しましょう。',
      },
      {
        title: 'スキャンは短く済ませる',
        body: 'Tadpole を出口向きに停め、フラグメントをスキャンし、離脱します。Needler の近くでインベントリ整理や採掘を始めないほうが安全です。',
      },
      {
        title: '基地で素材チェーンを片付ける',
        body: '現在の情報では、Mk.1 には Celestine、Enameled Glass、System Chip が関わります。つまり、Celestine、Creature Enamel、電子部品の準備が前提になります。',
      },
      {
        title: '新しい深度を目的に結びつける',
        body: '装備後の最初の深海ルートは、Feedback Resonator、希少鉱物、基地ルートなど一つの目標に絞ります。深く行けるからといって、ただ下へ進まないこと。',
      },
    ],
    tableTitle: 'Mk.1 準備チェック',
    tableHeaders: ['確認', '理由'],
    tableRows: [
      [
        'Tadpole の耐久と電力',
        '危険ルートなので、傷んだ車両や少ない電力で始めないためです。',
      ],
      ['Modification Station', 'モジュールはアップグレード制作が必要です。'],
      ['Celestine', '素材チェーンは Alien Ruins の鉱物ルートに戻ります。'],
      [
        'Enameled Glass',
        'Creature Enamel と Needler Mango のチェーンが必要になります。',
      ],
      ['System Chip', 'スキャン後に電子部品で止まらないようにします。'],
    ],
    visualTitle: 'アップグレードチェーン',
    visualItems: [
      {
        label: 'スキャン',
        value: 'Alien Ruins',
        note: 'Needler nest ルートを危険区域として扱います。',
      },
      {
        label: '制作',
        value: 'Mk.1',
        note: 'Celestine、Enameled Glass、System Chip、作業台準備。',
      },
      {
        label: '用途',
        value: 'Deep routes',
        note: 'Feedback Resonator、希少鉱物、基地ルート。',
      },
    ],
    cautionTitle: '深度は計画のために使う',
    cautionBody:
      'モジュール装備後の最初の潜水は、目標を一つに絞るのが安全です。深く潜れるようになると雑なルートでも進めてしまいますが、電力や修理が切れると一気に苦しくなります。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Tadpole Depth Module はどこで見つかる？',
        body: '現在の情報では、深めの Alien Ruins ルート、Alien Ruins Research Base 南東の Needler nest 下の洞窟付近が手がかりです。',
      },
      {
        title: 'Mk.1 の素材は？',
        body: '現在のガイドでは、Celestine、Enameled Glass、System Chip が制作チェーンに含まれ、Modification Station が必要です。',
      },
      {
        title: 'Feedback Resonator 前に必要？',
        body: '強く推奨です。より深いルートで Tadpole の余裕が増え、移動が計画しやすくなります。',
      },
      {
        title: 'Tadpole 入手後すぐ急ぐべき？',
        body: '急がなくて大丈夫です。修理、電力、Celestine、Enameled Glass、電子部品を整えてから向かいましょう。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2ImprovedFins, label: 'Improved Fins Guide' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole ガイド' },
      {
        href: Routes.Subnautica2EnameledGlass,
        label: 'Enameled Glass ガイド',
      },
      {
        href: Routes.Subnautica2CreatureEnamel,
        label: 'Creature Enamel ガイド',
      },
      { href: Routes.Subnautica2Celestine, label: 'Celestine ガイド' },
      { href: Routes.Subnautica2SystemChip, label: 'System Chip ガイド' },
      {
        href: Routes.Subnautica2FeedbackResonator,
        label: 'Feedback Resonator ガイド',
      },
      { href: Routes.Subnautica2Biomes, label: 'Biomes ガイド' },
    ],
    sourcesTitle: 'ソースメモ',
    sourceBody:
      '2026年5月27日に GameSpot の Tadpole アップグレード情報、PC Gamer の Feedback Resonator / Celestine 情報、GamesRadar の Enameled Glass 情報を確認しました。Early Access 中は素材、深度、スキャン位置が変わる可能性があります。',
    cardKicker: '深度アップグレードカード',
    cardBody:
      'Mk.1 スキャンルート、Alien Ruins の Needler リスク、Celestine、Enameled Glass、System Chip、深海ルート計画。',
    cardTypeLabel: '種類',
    cardTypeValue: '車両アップグレード',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: '状態',
    cardStatusValue: 'Early Access',
  },
};

tadpoleDepthModuleCopy.zh = {
  ...tadpoleDepthModuleCopy.zh,
  routeSteps: [
    {
      title: '先把支撑链做好',
      body: '别刚造出 Tadpole 就急着冲深水。先确认 Modification Station、维修、供电、氧气和返程路线都能撑住。深度升级不是用来掩盖糟糕准备的。',
    },
    {
      title: '把 Alien Ruins 当扫描区',
      body: '当前资料把 Mk.1 扫描路线指向更深的 Alien Ruins 区域，尤其是 Alien Ruins Research Base 东南方向、Needler nest 下方洞穴一带。用地标和 Beacon 记录入口。',
    },
    {
      title: '扫描按快进快出处理',
      body: 'Tadpole 车头朝出口停好，扫描碎片，完成就走。Needler 会惩罚慢慢整理背包的人。',
    },
    {
      title: '回基地解决配方链',
      body: '当前资料把 Celestine、Enameled Glass、System Chip 放进 Mk.1 制作链。也就是说，这个升级会吃到前面的矿物、Creature Enamel 和电子元件准备。',
    },
  ],
  related: [
    { href: Routes.Subnautica2AirTank, label: '气瓶和氧气' },
    { href: Routes.Subnautica2OxygenDepth, label: '氧气和下潜深度' },
    { href: Routes.Subnautica2Scanner, label: 'Scanner 指南' },
    { href: Routes.Subnautica2Tadpole, label: 'Tadpole 载具指南' },
    { href: Routes.Subnautica2EnameledGlass, label: 'Enameled Glass 指南' },
    { href: Routes.Subnautica2Celestine, label: 'Celestine 指南' },
    {
      href: Routes.Subnautica2FeedbackResonator,
      label: 'Feedback Resonator 指南',
    },
  ],
  sourceBody:
    '2026 年 5 月 27 日根据 GameSpot 的 Tadpole 升级资料、PC Gamer 的 Feedback Resonator 和 Celestine 资料，以及 GamesRadar 的 Enameled Glass 资料整理。抢先体验阶段模块配方、深度上限和扫描位置都可能随补丁变化。',
};

tadpoleDepthModuleCopy.ja = {
  ...tadpoleDepthModuleCopy.ja,
  routeSteps: [
    {
      title: 'Build the support chain first',
      body: 'Before chasing the module, make sure Tadpole, Modification Station, repair, power, oxygen, and the return route are ready.',
    },
    {
      title: 'Treat Alien Ruins as the scan zone',
      body: 'Current reporting points the Mk.1 scan route toward deeper Alien Ruins, including the Needler nest route southeast of the Alien Ruins Research Base.',
    },
    {
      title: 'Scan and leave',
      body: 'Park facing out, scan the fragments, and leave. Needlers punish slow inventory checks.',
    },
    {
      title: 'Solve the recipe chain at base',
      body: 'Celestine, Enameled Glass, and System Chip pull this upgrade back into earlier mineral, enamel, and electronics routes.',
    },
  ],
  related: [
    { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
    { href: Routes.Subnautica2OxygenDepth, label: 'Oxygen and Depth Guide' },
    { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
    { href: Routes.Subnautica2Tadpole, label: 'Tadpole Vehicle Guide' },
    { href: Routes.Subnautica2EnameledGlass, label: 'Enameled Glass Guide' },
    { href: Routes.Subnautica2Celestine, label: 'Celestine Guide' },
    {
      href: Routes.Subnautica2FeedbackResonator,
      label: 'Feedback Resonator Guide',
    },
  ],
  sourceBody:
    'Checked May 27, 2026 against current GameSpot Tadpole upgrade reporting, PC Gamer Feedback Resonator and Celestine reporting, and GamesRadar Enameled Glass reporting.',
};

const fallbackLocaleAliases = {
  de: {
    title: 'Subnautica 2 Tadpole Depth Module Guide',
    description:
      'Guide for Tadpole Depth Module Mk.1, Alien Ruins scan route, Celestine, Enameled Glass, and deep route planning.',
  },
  fr: {
    title: 'Subnautica 2 Tadpole Depth Module Guide',
    description:
      'Guide Tadpole Depth Module Mk.1: route Alien Ruins, Celestine, Enameled Glass et progression profonde.',
  },
  'pt-BR': {
    title: 'Subnautica 2 Tadpole Depth Module Guide',
    description:
      'Guia do Tadpole Depth Module Mk.1 com Alien Ruins, Celestine, Enameled Glass e rotas profundas.',
  },
  'es-419': {
    title: 'Subnautica 2 Tadpole Depth Module Guide',
    description:
      'Guia del Tadpole Depth Module Mk.1: Alien Ruins, Celestine, Enameled Glass y rutas profundas.',
  },
  ko: {
    title: 'Subnautica 2 Tadpole Depth Module Guide',
    description:
      'Tadpole Depth Module Mk.1 scan route, Alien Ruins, Celestine, Enameled Glass, and deep route planning.',
  },
  ru: {
    title: 'Subnautica 2 Tadpole Depth Module Guide',
    description:
      'Guide for Tadpole Depth Module Mk.1, Alien Ruins scan route, Celestine, Enameled Glass, and deep route planning.',
  },
} satisfies Record<string, { title: string; description: string }>;

function getCopy(locale: Locale): TadpoleDepthModuleCopy {
  if (tadpoleDepthModuleCopy[locale]) {
    return tadpoleDepthModuleCopy[locale];
  }

  const fallback =
    fallbackLocaleAliases[locale as keyof typeof fallbackLocaleAliases] ??
    fallbackLocaleAliases.de;

  return {
    ...tadpoleDepthModuleCopy.en,
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
    pathname: Routes.Subnautica2TadpoleDepthModule,
  });
}

export default async function TadpoleDepthModulePage({
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
      icon={GaugeIcon}
      locale={locale}
      pathname={Routes.Subnautica2TadpoleDepthModule}
      sources={sharedSources}
    />
  );
}
