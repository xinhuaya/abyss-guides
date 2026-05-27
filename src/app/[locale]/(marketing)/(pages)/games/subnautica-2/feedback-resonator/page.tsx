import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { RadioTowerIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type FeedbackCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-24';
const UPDATED_AT = '2026-05-27';

const sharedSources = [
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-feedback-resonator-scan-locations/',
    label: 'PC Gamer Feedback Resonator guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-mining-unknown-tool-sonic-resonator/',
    label: 'PC Gamer Sonic Resonator guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-conduit-crystal-location/',
    label: 'PC Gamer Conduit Crystal guide',
  },
  {
    href: 'https://subnautica2.guide/wikis/feedback-resonator',
    label: 'Subnautica 2 Guide Feedback Resonator wiki',
  },
  {
    href: 'https://subnautica2.guide/wikis/axum-vision',
    label: 'Subnautica 2 Guide Axum Vision wiki',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-angel-comb-heat-tolerance-adaptation/',
    label: 'PC Gamer Angel Comb and Axum Vision guide',
  },
];

const feedbackCopy: Record<string, FeedbackCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Feedback Resonator Guide - Fragments, Recipe, and Axum Vision Use',
      description:
        'A practical Subnautica 2 Feedback Resonator guide covering two fragment scans, Sonic Resonator, 2 Enameled Glass, 2 Conduit Crystal, 2 Strontium, Modification Station crafting, Bloom Cankers, and Axum Vision.',
    },
    eyebrow: 'Subnautica 2 tool upgrade',
    title: 'Subnautica 2 Feedback Resonator Guide',
    description:
      'Feedback Resonator is the upgrade that makes the Sonic Resonator useful at a distance. That sounds small until the Alien Ruins route starts throwing Bloom Cankers at you that close up when you swim too near.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Get the Sonic Resonator first, then scan two Feedback Resonator fragments in the glowing green abyssal pool / Metal Farms route northeast of the Alien Ruins Research Base. PC Gamer places that run roughly 870m at bearing 75 from the Research Base and around 450m deep, so bring the Tadpole Depth Module, Repair Tool, healing, and a real exit plan. Current recipe data lists Sonic Resonator x1, Enameled Glass x2, Conduit Crystal x2, and Strontium x2 at the Modification Station. You need the upgrade for ranged Bloom Canker clearing on the Axum Vision Angel Comb route.',
    contentsLabel: 'Contents',
    routeTitle: 'Feedback Resonator route plan',
    routeSteps: [
      {
        title: 'Start with the Sonic Resonator',
        body: 'Feedback Resonator modifies the Sonic Resonator. If the base tool is not built yet, this route is premature. Use the Sonic Resonator for ore, Bloom Biofilm, and Conduit Crystal prep before you spend time hunting the upgrade.',
      },
      {
        title: 'Treat the scan as a 450m job',
        body: 'PC Gamer puts the two fragment scans in the glowing green pool and Metal Farms area northeast of the Alien Ruins Research Base, around the upper edge of Tadpole Depth Module comfort. If the vehicle depth warning is still part of your life, wait.',
      },
      {
        title: 'Scan two fragments, then leave cleanly',
        body: 'Subnautica 2 Guide also lists two scans for the blueprint, with known fragments around wreck, mine, and Karakorum Metal Farms routes. Mark what you find. This is a bad area to keep wandering after the blueprint unlocks.',
      },
      {
        title: 'Craft it at the Modification Station',
        body: 'Current data agrees on Sonic Resonator x1, Enameled Glass x2, Conduit Crystal x2, and Strontium x2. PC Gamer also notes that the Modification Station blueprint can be found inside the Alien Ruins Research Base if you still need the station.',
      },
      {
        title: 'Use range on Bloom Cankers',
        body: 'Subnautica 2 Guide describes the tool as firing a blast projectile with longer range, and PC Gamer ties that directly to viral flowers that close when you approach. Do not force a close swim. Back up and shoot.',
      },
      {
        title: 'Use it immediately for Axum Vision',
        body: 'Axum Vision depends on clearing Bloom Cankers around three Bloom Nodes and the central Angel Comb. Once the upgrade is built, the next useful route is not random mining. It is the Angel Comb chain that unlocks Karakorum Power Plant consoles.',
      },
    ],
    tableTitle: 'Before you leave base',
    tableHeaders: ['Check', 'Why it matters'],
    tableRows: [
      [
        'Sonic Resonator',
        'Required as the base tool, and still useful for ore, biofilm, and Conduit Crystal harvesting.',
      ],
      [
        'Tadpole Depth Module',
        'The route reaches depths where a basic vehicle plan will feel thin.',
      ],
      [
        'Repair Tool and healing',
        'The green-pool area is hostile enough that one bad bite can turn a scan trip into a salvage trip.',
      ],
      [
        'Two fragment scans',
        'Unlocks the blueprint before the expensive craft matters.',
      ],
      [
        '2 Enameled Glass',
        'Fabricator material using Glass and Creature Enamel.',
      ],
      [
        '2 Conduit Crystal',
        'Found around deeper Alien Ruins / Power Plant routes.',
      ],
      ['2 Strontium', 'Processed material tied to Celestine planning.'],
      [
        'Modification Station',
        'Needed for the Prototype Tool Modification craft.',
      ],
    ],
    visualTitle: 'Route card',
    visualItems: [
      {
        label: 'Tool',
        value: 'Sonic',
        note: 'Base tool first, ranged upgrade second.',
      },
      {
        label: 'Depth',
        value: '450m',
        note: 'Green pool and Metal Farms route needs depth planning.',
      },
      {
        label: 'Use',
        value: 'Axum',
        note: 'Clears Bloom Cankers for the Axum Vision route.',
      },
    ],
    cautionTitle: 'This is a late-route tool, not a flex item',
    cautionBody:
      'The scan route sits near predators, deep structures, Metal Farms, and Conduit Crystal temptation. Pick one main job before leaving base. If the blueprint unlocks, go home and build the upgrade instead of turning the return trip into a sightseeing tour.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you unlock the Feedback Resonator in Subnautica 2?',
        body: 'Scan two Feedback Resonator fragments, then craft the upgrade at a Modification Station. PC Gamer points to the green abyssal pool / Metal Farms route northeast of the Alien Ruins Research Base.',
      },
      {
        title: 'Do I need the Sonic Resonator first?',
        body: 'Yes. The Feedback Resonator is a modification of the Sonic Resonator, and the Sonic tool is also useful for gathering some of the materials around the route.',
      },
      {
        title: 'What is the Feedback Resonator recipe?',
        body: 'Current public data lists Sonic Resonator x1, Enameled Glass x2, Conduit Crystal x2, and Strontium x2 at the Modification Station.',
      },
      {
        title: 'What does the Feedback Resonator do?',
        body: 'It turns the Sonic Resonator into a ranged tool. Subnautica 2 Guide says its projectile can destroy armored Viral Bloom Cankers from a safer distance.',
      },
      {
        title: 'Why do you need it for Axum Vision?',
        body: 'The later Angel Comb route asks you to destroy Bloom Cankers around Bloom Nodes. Those growths punish close approaches, so Feedback Resonator range is the clean answer.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2BloomBiofilm, label: 'Bloom Biofilm Guide' },
      {
        href: Routes.Subnautica2SonicResonator,
        label: 'Sonic Resonator Guide',
      },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal Guide',
      },
      { href: Routes.Subnautica2EnameledGlass, label: 'Enameled Glass Guide' },
      { href: Routes.Subnautica2Strontium, label: 'Strontium Guide' },
      { href: Routes.Subnautica2Celestine, label: 'Celestine Guide' },
      { href: Routes.Subnautica2AxumVision, label: 'Axum Vision Guide' },
      { href: Routes.Subnautica2AngelComb, label: 'Angel Comb Guide' },
      {
        href: Routes.Subnautica2PowerPlantObservatory,
        label: 'Power Plant Observatory Guide',
      },
      {
        href: Routes.Subnautica2ModificationStation,
        label: 'Modification Station Guide',
      },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Vehicle Guide' },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        label: 'Tadpole Depth Module Guide',
      },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm Guide' },
      {
        href: Routes.Subnautica2BioscannerBiomods,
        label: 'Bioscanner and Biomods',
      },
      { href: Routes.Subnautica2OxygenDepth, label: 'Oxygen and Depth' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 27, 2026 against PC Gamer and Subnautica 2 Guide. Subnautica 2 is in Early Access, so fragment positions, recipe counts, projectile behavior, and Bloom Canker requirements should be rechecked after patches.',
    cardKicker: 'Tool upgrade card',
    cardBody:
      'Sonic Resonator base tool, two fragment scans, 2 Enameled Glass, 2 Conduit Crystal, 2 Strontium, Modification Station craft, Bloom Canker clearing, and Axum Vision use.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Tool upgrade',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Feedback Resonator 指南 - 碎片、配方和 Axum Vision 用法',
      description:
        'Subnautica 2 中文 Feedback Resonator 指南：两个碎片扫描、Sonic Resonator、Enameled Glass x2、Conduit Crystal x2、Strontium x2、Modification Station、Bloom Cankers 和 Axum Vision。',
    },
    eyebrow: 'Subnautica 2 工具升级',
    title: 'Subnautica 2 Feedback Resonator 指南',
    description:
      'Feedback Resonator 的价值不是“伤害更高”。它把 Sonic Resonator 变成远程工具。等你开始清 Alien Ruins 里的 Bloom Cankers，就会明白为什么贴脸处理不是好主意。',
    quickLabel: '快速结论',
    quickAnswer:
      '先拿 Sonic Resonator，再去 Alien Ruins Research Base 东北方向的绿色深池 / Metal Farms 路线扫描两个 Feedback Resonator 碎片。PC Gamer 把这趟路线写成从 Research Base 出发约 870m、方位约 75 度、深度约 450m，所以要带 Tadpole Depth Module、Repair Tool、回血物品和明确的撤退线。当前配方是 Modification Station 制作：Sonic Resonator x1、Enameled Glass x2、Conduit Crystal x2、Strontium x2。它后面会用于 Axum Vision 路线，远距离清 Bloom Cankers。',
    contentsLabel: '目录',
    routeTitle: 'Feedback Resonator 路线规划',
    routeSteps: [
      {
        title: '先把 Sonic Resonator 做出来',
        body: 'Feedback Resonator 是 Sonic Resonator 的升级件。基础工具没做出来之前，这条路线还太早。先用 Sonic Resonator 敲矿、清 Bloom Biofilm，并准备 Conduit Crystal 路线。',
      },
      {
        title: '把扫描当成 450m 深潜任务',
        body: 'PC Gamer 把两个碎片放在 Alien Ruins Research Base 东北方向的绿色深池和 Metal Farms 一带，深度接近 Tadpole Depth Module 的上限。如果载具深度还没解决，先别硬跑。',
      },
      {
        title: '扫两个碎片，解锁就回家',
        body: 'Subnautica 2 Guide 也列出需要两个扫描，并把已知碎片放在 wreck、mine 和 Karakorum Metal Farms 路线附近。扫到蓝图就标点撤离，不要在这个区域漫无目的转圈。',
      },
      {
        title: '回基地用 Modification Station 制作',
        body: '当前资料一致指向 Sonic Resonator x1、Enameled Glass x2、Conduit Crystal x2、Strontium x2。PC Gamer 还提到，如果你还没解锁 Modification Station，可以去 Alien Ruins Research Base 找蓝图。',
      },
      {
        title: '用距离打 Bloom Cankers',
        body: 'Subnautica 2 Guide 把它描述成发射更远的 blast projectile；PC Gamer 也把它和靠近就闭合的 viral flowers 联系在一起。不要贴脸硬打，后退再射。',
      },
      {
        title: '下一步直接接 Axum Vision',
        body: 'Axum Vision 需要清理三个 Bloom Nodes 和中心 Angel Comb 的 Bloom Cankers。Feedback Resonator 做好后，最有价值的后续不是乱挖矿，而是推进 Karakorum Power Plant 控制台链路。',
      },
    ],
    tableTitle: '出门前检查',
    tableHeaders: ['检查项', '为什么重要'],
    tableRows: [
      [
        'Sonic Resonator',
        '升级本体，也能用来挖大矿、清障和规划 Conduit Crystal。',
      ],
      ['Tadpole Depth Module', '这条路线深度压力高，普通载具准备会很吃力。'],
      [
        'Repair Tool 和回血',
        '绿色池子附近危险多，扫碎片时可能需要离开 Tadpole。',
      ],
      ['两个碎片扫描', '先解锁蓝图，再考虑昂贵制作。'],
      ['Enameled Glass x2', '由 Glass 和 Creature Enamel 进入这条材料链。'],
      ['Conduit Crystal x2', '深区 Alien Ruins / Power Plant 路线材料。'],
      ['Strontium x2', '和 Celestine 加工规划绑在一起。'],
      ['Modification Station', 'Prototype Tool Modification 需要它。'],
      [
        'Conduit Crystal 路线',
        '跑 Alien Ruins 时顺手规划晶体采集，减少后面重复下潜。',
      ],
    ],
    visualTitle: '路线卡片',
    visualItems: [
      {
        label: '工具',
        value: 'Sonic',
        note: '基础工具在前，远程升级在后。',
      },
      {
        label: '深度',
        value: '450m',
        note: '绿色深池和 Metal Farms 需要深度规划。',
      },
      {
        label: '用途',
        value: 'Axum',
        note: '为 Axum Vision 路线清 Bloom Cankers。',
      },
    ],
    cautionTitle: '这不是炫耀用的道具',
    cautionBody:
      '这条扫描路线旁边有敌对生物、深区建筑、Metal Farms 和 Conduit Crystal，很容易让人分心。一趟只定一个主目标。蓝图一解锁就回去做升级，别把返程变成观光路线。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Feedback Resonator 怎么解锁？',
        body: '扫描两个 Feedback Resonator 碎片，然后在 Modification Station 制作升级。PC Gamer 把路线指向 Alien Ruins Research Base 东北方向的绿色深池 / Metal Farms 区域。',
      },
      {
        title: '必须先有 Sonic Resonator 吗？',
        body: '需要。Feedback Resonator 是 Sonic Resonator 的升级，而且 Sonic 工具本身也会用于挖矿和采集部分路线材料。',
      },
      {
        title: 'Feedback Resonator 配方是什么？',
        body: '当前公开资料列出 Sonic Resonator x1、Enameled Glass x2、Conduit Crystal x2、Strontium x2，在 Modification Station 制作。',
      },
      {
        title: 'Feedback Resonator 有什么用？',
        body: '它让 Sonic Resonator 具备远程发射能力。Subnautica 2 Guide 写到它可以从更安全距离破坏 armored Viral Bloom Cankers。',
      },
      {
        title: '为什么 Axum Vision 需要它？',
        body: '后期 Angel Comb 路线要清三个 Bloom Nodes 周围的 Bloom Cankers，这些生长物不适合贴脸打，所以 Feedback Resonator 的远程能力很关键。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2BloomBiofilm, label: 'Bloom Biofilm Guide' },
      {
        href: Routes.Subnautica2SonicResonator,
        label: 'Sonic Resonator 指南',
      },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal 指南',
      },
      { href: Routes.Subnautica2EnameledGlass, label: 'Enameled Glass 指南' },
      { href: Routes.Subnautica2Strontium, label: 'Strontium 指南' },
      { href: Routes.Subnautica2Celestine, label: 'Celestine 指南' },
      { href: Routes.Subnautica2AxumVision, label: 'Axum Vision 指南' },
      { href: Routes.Subnautica2AngelComb, label: 'Angel Comb 指南' },
      {
        href: Routes.Subnautica2PowerPlantObservatory,
        label: 'Power Plant Observatory 指南',
      },
      {
        href: Routes.Subnautica2ModificationStation,
        label: 'Modification Station 指南',
      },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 载具指南' },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        label: 'Tadpole Depth Module 指南',
      },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm 指南' },
      {
        href: Routes.Subnautica2BioscannerBiomods,
        label: 'Bioscanner 和 Biomods',
      },
      { href: Routes.Subnautica2OxygenDepth, label: '氧气和深度' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 27 日核对 PC Gamer 和 Subnautica 2 Guide。Subnautica 2 仍处于抢先体验阶段，碎片位置、配方数量、projectile 行为和 Bloom Canker 要求都可能随补丁变化。',
    cardKicker: '工具升级卡',
    cardBody:
      '整理 Sonic Resonator 前置、两个碎片扫描、Enameled Glass x2、Conduit Crystal x2、Strontium x2、Modification Station、Bloom Cankers 和 Axum Vision 用法。',
    cardTypeLabel: '类型',
    cardTypeValue: '工具升级',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
  ja: {
    metadata: {
      title:
        'Subnautica 2 Feedback Resonator Guide - scan route, craft, and use',
      description:
        'Subnautica 2 Feedback Resonator guide for Sonic Resonator prep, Alien Ruins and Metal Farms scans, materials, and safe ranged use.',
    },
    eyebrow: 'Subnautica 2 tool upgrade',
    title: 'Subnautica 2 Feedback Resonator Guide',
    description:
      'Feedback Resonator is a ranged upgrade for the Sonic Resonator. It matters once Alien Ruins routes ask you to clear growths without swimming right into them.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Make the Sonic Resonator first, then scan two Feedback Resonator fragments on the green-pool / Metal Farms route northeast of the Alien Ruins Research Base. Craft it at a Modification Station with Sonic Resonator x1, Enameled Glass x2, Conduit Crystal x2, and Strontium x2. The upgrade is the ranged answer for Bloom Cankers on the Axum Vision route.',
    contentsLabel: 'Contents',
    routeTitle: 'Feedback Resonator route plan',
    routeSteps: [
      {
        title: 'Make Sonic Resonator first',
        body: 'The upgrade depends on the base tool. Use Sonic Resonator for large ore, Bloom Biofilm, and material prep before deep routes.',
      },
      {
        title: 'Wait for vehicle depth',
        body: 'This is safer after Tadpole depth planning, repair prep, and Alien Ruins orientation.',
      },
      {
        title: 'Scan two fragments',
        body: 'Current reports point players toward the green pool and Metal Farms side of the Alien Ruins route, around late-depth Tadpole travel.',
      },
      {
        title: 'Craft at Modification Station',
        body: 'Prepare Sonic Resonator x1, Enameled Glass x2, Conduit Crystal x2, and Strontium x2 so the upgrade does not stall in storage.',
      },
      {
        title: 'Use it for Axum Vision',
        body: 'The later Angel Comb asks you to clear Bloom Cankers at range. This is where the upgrade earns its keep.',
      },
      {
        title: 'Use distance',
        body: 'Back away from hostile growths and use the projectile instead of forcing a close swim.',
      },
    ],
    tableTitle: 'Pre-dive checks',
    tableHeaders: ['Check', 'Why it matters'],
    tableRows: [
      [
        'Sonic Resonator',
        'Required as the base tool and still useful for materials.',
      ],
      ['Tadpole Depth Module', 'The route reaches uncomfortable depth.'],
      ['Repairs and healing', 'The scan area can punish sloppy exits.'],
      ['Modification Station', 'Needed to craft the tool modification.'],
      ['2 Enameled Glass', 'Part of the current Modification Station recipe.'],
      ['2 Conduit Crystal', 'Deep-route ingredient near Alien Ruins planning.'],
      ['2 Strontium', 'Processed material tied to Celestine planning.'],
      [
        'Conduit Crystal plan',
        'Worth gathering while you are already near Alien Ruins.',
      ],
    ],
    visualTitle: 'Route card',
    visualItems: [
      {
        label: 'Tool',
        value: 'Sonic first',
        note: 'Upgrade the tool after it earns its place.',
      },
      {
        label: 'Route',
        value: 'Ruins pools',
        note: 'Plan the return before diving deeper.',
      },
      {
        label: 'Use',
        value: 'Ranged clear',
        note: 'Distance is the whole point.',
      },
    ],
    cautionTitle: 'Do not turn one route into five chores',
    cautionBody:
      'Scan fragments, gather Conduit Crystal, or scout Metal Farms. Pick the main job before leaving base, then come home alive.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you unlock Feedback Resonator?',
        body: 'Scan two upgrade fragments and craft the modification at a Modification Station.',
      },
      {
        title: 'Do you need Sonic Resonator?',
        body: 'Yes. Feedback Resonator modifies that tool.',
      },
      {
        title: 'Where is the route?',
        body: 'Current guides point to the Alien Ruins, green pools, and Metal Farms route.',
      },
      {
        title: 'What is it for?',
        body: 'It gives Sonic Resonator a ranged projectile for safer clearing.',
      },
      {
        title: 'Why does Axum Vision need it?',
        body: 'The later Angel Comb route uses Bloom Cankers that are safer to clear from range.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2BloomBiofilm, label: 'Bloom Biofilm Guide' },
      {
        href: Routes.Subnautica2SonicResonator,
        label: 'Sonic Resonator Guide',
      },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal Guide',
      },
      { href: Routes.Subnautica2EnameledGlass, label: 'Enameled Glass Guide' },
      { href: Routes.Subnautica2Strontium, label: 'Strontium Guide' },
      { href: Routes.Subnautica2Celestine, label: 'Celestine Guide' },
      { href: Routes.Subnautica2AxumVision, label: 'Axum Vision Guide' },
      { href: Routes.Subnautica2AngelComb, label: 'Angel Comb Guide' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Guide' },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        label: 'Tadpole Depth Module Guide',
      },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm Guide' },
      {
        href: Routes.Subnautica2BioscannerBiomods,
        label: 'Bioscanner and Biomods',
      },
      { href: Routes.Subnautica2OxygenDepth, label: 'Oxygen and Depth' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 24, 2026 against PC Gamer reporting. Early Access details may change.',
    cardKicker: 'Tool upgrade card',
    cardBody:
      'Sonic Resonator prep, scan route, craft materials, and ranged clearing notes.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Tool upgrade',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
};

const fallbackLocaleAliases = {
  de: {
    title: 'Subnautica 2 Feedback Resonator Guide',
    description:
      'Route-first guide for Feedback Resonator scans, Sonic Resonator prep, materials, and ranged use.',
  },
  fr: {
    title: 'Subnautica 2 Feedback Resonator Guide',
    description:
      'Guide pratique pour les scans Feedback Resonator, le Sonic Resonator, les materiaux et l usage a distance.',
  },
  'pt-BR': {
    title: 'Subnautica 2 Feedback Resonator Guide',
    description:
      'Guia do Feedback Resonator com scans, preparo do Sonic Resonator, materiais e uso a distancia.',
  },
  'es-419': {
    title: 'Subnautica 2 Feedback Resonator Guide',
    description:
      'Guia del Feedback Resonator: scans, Sonic Resonator, materiales y uso a distancia.',
  },
  ko: {
    title: 'Subnautica 2 Feedback Resonator Guide',
    description:
      'Feedback Resonator scans, Sonic Resonator prep, materials, and ranged clearing guide.',
  },
  ru: {
    title: 'Subnautica 2 Feedback Resonator Guide',
    description:
      'Guide for Feedback Resonator scans, Sonic Resonator prep, materials, and safe ranged use.',
  },
} satisfies Record<string, { title: string; description: string }>;

function getCopy(locale: Locale): FeedbackCopy {
  if (feedbackCopy[locale]) {
    return feedbackCopy[locale];
  }

  const fallback =
    fallbackLocaleAliases[locale as keyof typeof fallbackLocaleAliases] ??
    fallbackLocaleAliases.de;

  return {
    ...feedbackCopy.en,
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
    pathname: Routes.Subnautica2FeedbackResonator,
  });
}

export default async function FeedbackResonatorPage({
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
      icon={RadioTowerIcon}
      locale={locale}
      pathname={Routes.Subnautica2FeedbackResonator}
      sources={sharedSources}
    />
  );
}
