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
const UPDATED_AT = '2026-05-29';

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
    fieldNotesTitle: 'Field notes for the deep scan run',
    fieldNotes: [
      {
        title: 'This route punishes casual prep',
        body: 'The distance, depth, and return path matter more than the fragment count. If Tadpole depth, repairs, or healing are not ready, the two scans can become a messy rescue trip.',
      },
      {
        title: 'Stage the recipe before scanning',
        body: 'Enameled Glass, Conduit Crystal, and Strontium are all expensive enough to deserve a checklist. Gather them before the scan run if you want the upgrade built the same session.',
      },
      {
        title: 'Build it for Axum Vision, not just collection',
        body: 'Feedback Resonator is most useful when it immediately feeds the later Angel Comb route. Treat it as a key for ranged Bloom Canker clearing.',
      },
    ],
    routeChecklistTitle: 'Before scanning Feedback Resonator',
    routeChecklist: [
      'Bring Tadpole Depth Module, Repair Tool, healing, and spare power.',
      'Mark the exit from the glowing green route before chasing fragments.',
      'Stage Enameled Glass x2, Conduit Crystal x2, and Strontium x2.',
      'Plan the next stop as Axum Vision or Bloom Canker clearing.',
    ],
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
    fieldNotesTitle: '深水扫描路线笔记',
    fieldNotes: [
      {
        title: '这条路线不适合随便准备',
        body: '距离、深度和回程比碎片数量更重要。如果 Tadpole 深度、维修或回血没准备好，两次扫描也可能变成救命路线。',
      },
      {
        title: '扫描前先准备配方',
        body: 'Enameled Glass、Conduit Crystal 和 Strontium 都不便宜。想同一晚做出升级，就先把这些材料单独列好。',
      },
      {
        title: '它是 Axum Vision 的钥匙',
        body: 'Feedback Resonator 最有价值的用法，是立刻接到后续 Angel Comb 路线，用来远距离清 Bloom Cankers。',
      },
    ],
    routeChecklistTitle: '扫描 Feedback Resonator 前',
    routeChecklist: [
      '带 Tadpole Depth Module、Repair Tool、回血物品和备用电力。',
      '追碎片前先标出绿色深池路线的出口。',
      '提前准备 Enameled Glass x2、Conduit Crystal x2、Strontium x2。',
      '下一步按 Axum Vision 或 Bloom Canker 清理来规划。',
    ],
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
        'Subnautica 2 Feedback Resonator ガイド - 断片、素材、Axum Vision用途',
      description:
        'Subnautica 2のFeedback Resonatorガイド。Sonic Resonator前提、断片2個、Enameled Glass、Conduit Crystal、Strontium、Modification Station、Bloom Canker対策を整理します。',
    },
    eyebrow: 'Subnautica 2 ツールアップグレード',
    title: 'Subnautica 2 Feedback Resonator ガイド',
    description:
      'Feedback ResonatorはSonic Resonatorを遠距離で使えるようにするアップグレードです。派手な採掘道具というより、Bloom Cankerへ近づきすぎずに処理するための安全装備として考えると分かりやすいです。',
    quickLabel: '要点',
    quickAnswer:
      'まずSonic Resonatorを作り、その後Alien Ruins Research Base北東の緑色プール / Metal Farms方面でFeedback Resonator断片を2個スキャンします。PC GamerはこのルートをResearch Baseから方位75、約870m、深度約450m付近として扱っています。作成はModification Stationで、Sonic Resonator x1、Enameled Glass x2、Conduit Crystal x2、Strontium x2を用意します。Axum VisionルートのBloom Canker処理に使うのが主な目的です。',
    fieldNotesTitle: '深部スキャン前のメモ',
    fieldNotes: [
      {
        title: '断片2個より帰り道が怖い',
        body: '必要スキャン数は多くありません。難しいのは距離、深度、緑色プール周辺の見通し、帰り道です。Tadpoleの深度、Repair Tool、回復、目印を先に整えます。',
      },
      {
        title: '素材を先にそろえると一気に進む',
        body: 'Enameled Glass、Conduit Crystal、Strontiumはどれも少し重い素材です。断片だけ先に取っても作成で止まりやすいので、基地を出る前に素材リストを見ておきます。',
      },
      {
        title: '目的はAxum Visionにつなげること',
        body: 'Feedback Resonatorを作って終わりではありません。次にBloom Cankerを遠距離で処理し、Angel CombからAxum Visionへ進む流れを作ります。',
      },
    ],
    routeChecklistTitle: 'Feedback Resonatorへ行く前に',
    routeChecklist: [
      'Sonic Resonatorを作成済み。',
      'Tadpole Depth Module、Repair Tool、回復、予備電力を用意した。',
      'Enameled Glass x2、Conduit Crystal x2、Strontium x2の準備状況を確認した。',
      '断片を取った後の次ルートをAxum Vision / Bloom Canker処理に決めている。',
    ],
    contentsLabel: '目次',
    routeTitle: 'Feedback Resonatorルート計画',
    routeSteps: [
      {
        title: 'Sonic Resonatorを先に作る',
        body: 'Feedback ResonatorはSonic Resonatorの改造です。ベースツールがないならこのルートは早すぎます。鉱脈、Bloom Biofilm、Conduit Crystalの準備でSonic Resonatorを使ってから向かいます。',
      },
      {
        title: '深度450m級の仕事として見る',
        body: 'PC Gamerは断片ルートをAlien Ruins Research Base北東、緑色プールとMetal Farms方面、深度約450mとして説明しています。Tadpoleの深度警告がまだ怖い段階なら待ちましょう。',
      },
      {
        title: '断片を2個スキャンして引き上げる',
        body: 'Subnautica 2 Guideもブループリントに2スキャンを挙げています。wreck、mine、Karakorum Metal Farms方面で見つけたら、場所を覚えつつ長居しないのが安全です。',
      },
      {
        title: 'Modification Stationで作成する',
        body: '現行データではSonic Resonator x1、Enameled Glass x2、Conduit Crystal x2、Strontium x2が必要です。Modification Station自体がない場合は、Alien Ruins Research Base内の設計図も確認します。',
      },
      {
        title: 'Bloom Cankerを距離で処理する',
        body: 'Subnautica 2 GuideはFeedback Resonatorを、遠距離のblast projectileを撃てる改造として説明しています。近づくと閉じるBloom Canker相手に、無理な接近をしないための道具です。',
      },
      {
        title: 'Axum Visionへつなげる',
        body: 'Axum Visionでは三つのBloom Nodesと中央のAngel Comb周辺を処理します。Feedback Resonatorを作ったら、次は適当な採掘ではなくAngel Combルートへ向かうのが自然です。',
      },
    ],
    tableTitle: '基地を出る前のチェック',
    tableHeaders: ['確認するもの', '理由'],
    tableRows: [
      [
        'Sonic Resonator',
        'ベースツールとして必要です。鉱石、Bloom Biofilm、Conduit Crystalの準備にも使います。',
      ],
      [
        'Tadpole Depth Module',
        '断片ルートは深度がきついので、普通のTadpole運用では余裕が足りません。',
      ],
      [
        'Repair Toolと回復',
        '緑色プール / Metal Farms方面は、帰り道が雑になると一気に危なくなります。',
      ],
      [
        'Modification Station',
        'Feedback Resonatorはここで作成します。未解放なら先に設計図を回収します。',
      ],
      [
        'Enameled Glass x2',
        '現行レシピに含まれます。基地で不足に気づくと二度手間です。',
      ],
      [
        'Conduit Crystal x2',
        'Alien Ruins周辺の深部素材。事前に別ルートで確保しておくと楽です。',
      ],
      [
        'Strontium x2',
        'Celestineから加工する素材です。Feedback Resonator前に数を確認します。',
      ],
      [
        '帰り道の目印',
        '断片を見つけた後にさらに奥へ進むと、得たものより失うものが増えます。',
      ],
    ],
    visualTitle: 'アップグレードカード',
    visualItems: [
      {
        label: '前提',
        value: 'Sonic',
        note: 'Sonic Resonatorを作ってから断片へ向かう。',
      },
      {
        label: '断片',
        value: '2 scans',
        note: '緑色プール / Metal Farms方面で2個スキャン。',
      },
      {
        label: '用途',
        value: 'Range',
        note: 'Bloom Cankerを距離を取って処理する。',
      },
    ],
    cautionTitle: '一つのルートに五つの用事を詰め込まない',
    cautionBody:
      '断片スキャン、Conduit Crystal、Metal Farms偵察、Celestine、Angel Comb準備。全部同じ方面に見えても、初回で全部やると帰り道が崩れます。出発前に主目的を一つ決めて、生きて帰る方を優先します。',
    faqTitle: 'よくある質問',
    faqs: [
      {
        title: 'Feedback Resonatorはどう解放する？',
        body: 'Feedback Resonator断片を2個スキャンし、Modification Stationでツール改造として作成します。',
      },
      {
        title: 'Sonic Resonatorは必要？',
        body: '必要です。Feedback ResonatorはSonic Resonatorを改造するアップグレードです。',
      },
      {
        title: '断片ルートはどこ？',
        body: 'PC GamerはAlien Ruins Research Base北東、緑色プール / Metal Farms方面、方位75、約870m、深度約450m付近を挙げています。',
      },
      {
        title: '何に使う？',
        body: 'Sonic Resonatorに遠距離projectileを追加し、Bloom Cankerのような近づきたくない対象を安全な距離から処理します。',
      },
      {
        title: 'なぜAxum Visionに必要？',
        body: '後半のAngel CombルートではBloom Nodes周辺のBloom Cankerを処理します。距離を取れるFeedback Resonatorがあると、この作業がかなり安定します。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2BloomBiofilm, label: 'Bloom Biofilm ガイド' },
      {
        href: Routes.Subnautica2SonicResonator,
        label: 'Sonic Resonator ガイド',
      },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal ガイド',
      },
      { href: Routes.Subnautica2EnameledGlass, label: 'Enameled Glass ガイド' },
      { href: Routes.Subnautica2Strontium, label: 'Strontium ガイド' },
      { href: Routes.Subnautica2Celestine, label: 'Celestine ガイド' },
      { href: Routes.Subnautica2AxumVision, label: 'Axum Vision ガイド' },
      { href: Routes.Subnautica2AngelComb, label: 'Angel Comb ガイド' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole ガイド' },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        label: 'Tadpole Depth Module ガイド',
      },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm ガイド' },
      {
        href: Routes.Subnautica2BioscannerBiomods,
        label: 'Bioscanner / Biomods ガイド',
      },
      { href: Routes.Subnautica2OxygenDepth, label: '酸素と深度ガイド' },
      { href: Routes.Subnautica2Resources, label: '資源ガイド' },
    ],
    sourcesTitle: 'ソースメモ',
    sourceBody:
      '2026年5月29日にPC GamerのFeedback Resonator / Sonic Resonator / Conduit Crystal記事、Subnautica 2 GuideのFeedback Resonator / Axum Vision wiki、PC GamerのAngel Comb / Axum Vision記事を確認しました。Early Access中なので、断片位置、素材数、projectile挙動、Bloom Canker要件は今後変わる可能性があります。',
    cardKicker: 'ツール改造カード',
    cardBody:
      'Sonic Resonator前提、断片2個、Enameled Glass x2、Conduit Crystal x2、Strontium x2、Modification Station、Bloom CankerとAxum Vision用途。',
    cardTypeLabel: '種類',
    cardTypeValue: 'ツール改造',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: '状態',
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
