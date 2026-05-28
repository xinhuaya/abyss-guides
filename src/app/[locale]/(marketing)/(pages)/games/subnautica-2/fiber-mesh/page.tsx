import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { LeafIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type FiberMeshCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-28';

const sharedSources = [
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-o2-oxygen-air-tank/',
    label: 'PC Gamer O2 and Rebreather guide',
  },
  {
    href: 'https://allthings.how/fiber-mesh-in-subnautica-2-recipe-and-crafting-steps/',
    label: 'All Things How Fiber Mesh recipe',
  },
  {
    href: 'https://mobalytics.gg/blog/subnautica-2/how-to-get-fiber-mesh/',
    label: 'Mobalytics Fiber Mesh guide',
  },
  {
    href: 'https://www.dexerto.com/gaming/how-to-get-fiber-mesh-in-subnautica-2-3240875/',
    label: 'Dexerto Fiber Mesh guide',
  },
  {
    href: 'https://subnautica2hub.com/blueprints/wakemaker',
    label: 'Subnautica2Hub Wakemaker blueprint',
  },
];

const fiberMeshCopy: Record<string, FiberMeshCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Fiber Mesh Guide - Creepvine Recipe, Uses, and Timing',
      description:
        'A practical Subnautica 2 Fiber Mesh guide covering Creepvine Seed Cluster, Creepvine Sample, Fabricator crafting, Wakemaker prep, Rebreather planning, and early storage tips.',
    },
    eyebrow: 'Subnautica 2 plant material',
    title: 'Subnautica 2 Fiber Mesh Guide',
    description:
      'Fiber Mesh looks like a small plant errand until it blocks a tool you actually want. Grab it before you head home from a creepvine run, because returning for one missing mesh feels worse than the recipe deserves.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current All Things How, Mobalytics, and Dexerto guides point players toward Creepvine material for Fiber Mesh, with current recipe wording commonly listing Creepvine Seed Cluster and Creepvine Sample at the Fabricator. PC Gamer also lists Fiber Mesh x2 in the Rebreather recipe and points the chain through Strong Acid, while Subnautica2Hub lists Fiber Mesh as part of the Wakemaker recipe.',
    fieldNotesTitle: 'Field notes for Fiber Mesh prep',
    fieldNotes: [
      {
        title: 'Do not make it a last-minute errand',
        body: 'Fiber Mesh is cheap until it is the only thing between you and the Rebreather. Add it to the creepvine trip instead of treating it like an afterthought.',
      },
      {
        title: 'Check the plant wording in your save',
        body: 'Public guides describe the creepvine inputs a little differently. Let the Fabricator recipe in your save decide whether you need clusters, samples, or both.',
      },
      {
        title: 'Keep plant stock separate from food stock',
        body: 'A tiny creepvine bin makes later tool and oxygen recipes faster. Mixed organic storage is how useful material gets eaten by the wrong plan.',
      },
    ],
    routeChecklistTitle: 'Before leaving the creepvine route',
    routeChecklist: [
      'Open the Fabricator recipe and note the exact plant input.',
      'Bring the cutting tool if samples are required.',
      'Reserve two Fiber Mesh if Rebreather is next.',
      'Keep one spare plant set for Wakemaker or later tool crafts.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Fiber Mesh gathering plan',
    routeSteps: [
      {
        title: 'Bring a cutting tool if your route needs samples',
        body: 'Guides split the wording between Creepvine Seed Cluster and Creepvine Sample, so do not plan the trip around a single pickup type. If your save asks for samples, you want the tool ready before you are already at the vines.',
      },
      {
        title: 'Use the creepvine run for more than one job',
        body: 'Seed clusters and samples often sit near the same early plant route. Check battery, lubricant, and Fiber Mesh plans together instead of making three separate swims.',
      },
      {
        title: 'Craft it at the Fabricator',
        body: 'Treat Fiber Mesh as a processed material, not a raw plant. Once the Fabricator recipe is available, convert the plant inputs before you reorganize storage.',
      },
      {
        title: 'Keep two for Rebreather',
        body: 'PC Gamer lists two Fiber Mesh for Rebreather. If deep routes are next, hold two finished pieces before spending plant materials on comfort crafts.',
      },
      {
        title: 'Reserve one for the Wakemaker',
        body: 'Subnautica2Hub currently lists Fiber Mesh in the Wakemaker recipe. If that movement tool is your next upgrade, keep one mesh out of base clutter.',
      },
      {
        title: 'Keep a small plant bin',
        body: 'Fiber Mesh is cheap, but the second trip is the tax. A little labeled storage for creepvine parts saves time when later oxygen or tool recipes ask for plant material again.',
      },
    ],
    tableTitle: 'Fiber Mesh checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      [
        'Creepvine route',
        'Seed clusters and samples are the plant loop to check.',
      ],
      ['Tool', 'Bring a cutter if your save asks for Creepvine Sample.'],
      ['Station', 'Current guides point to Fabricator crafting.'],
      ['Rebreather', 'PC Gamer lists Fiber Mesh x2 in the craft.'],
      [
        'Strong Acid',
        'Current Rebreather reporting points the mesh chain through it.',
      ],
      ['Wakemaker', 'Subnautica2Hub lists Fiber Mesh in the recipe.'],
      ['Storage', 'Keep one spare mesh or plant set before leaving the biome.'],
    ],
    visualTitle: 'Plant-to-tool chain',
    visualItems: [
      {
        label: 'Gather',
        value: 'Creepvine',
        note: 'Check seed clusters and samples before heading back.',
      },
      {
        label: 'Craft',
        value: 'Fiber Mesh',
        note: 'Use the Fabricator once the recipe is available.',
      },
      {
        label: 'Spend',
        value: 'Wakemaker',
        note: 'Save one if early mobility is next.',
      },
    ],
    cautionTitle: 'Do not trust memory from Subnautica 1 blindly',
    cautionBody:
      'Early Access recipe wording can shift, and guide sites do not all describe the same plant input the same way. Check your Fabricator recipe, then gather the plant parts your save actually asks for.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you make Fiber Mesh in Subnautica 2?',
        body: 'Current guides point to the Fabricator and Creepvine material, commonly naming Creepvine Seed Cluster and Creepvine Sample as the inputs to check.',
      },
      {
        title: 'What is Fiber Mesh used for?',
        body: 'Subnautica2Hub currently lists Fiber Mesh in the Wakemaker recipe, and PC Gamer lists Fiber Mesh x2 for Rebreather. Several guides connect it to early mobility and breathing upgrades.',
      },
      {
        title: 'Where should you look for Fiber Mesh ingredients?',
        body: 'Start with the creepvine route. Bring the right tool if your recipe asks for samples rather than only seed clusters.',
      },
      {
        title: 'Should you make extra Fiber Mesh?',
        body: 'One spare is sensible. A locker full of it is probably overkill unless a patch or new recipe changes the demand.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2BasicFins, label: 'Basic Fins Guide' },
      { href: Routes.Subnautica2ImprovedFins, label: 'Improved Fins Guide' },
      { href: Routes.Subnautica2Rubber, label: 'Rubber Recipe Guide' },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker Guide' },
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather Guide' },
      { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid Guide' },
      { href: Routes.Subnautica2Processor, label: 'Processor Guide' },
      { href: Routes.Subnautica2SystemChip, label: 'System Chip Guide' },
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
      { href: Routes.Subnautica2OxygenDepth, label: 'Oxygen and Depth Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
      { href: Routes.Subnautica2Beginner, label: 'Beginner Route' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 27, 2026 against PC Gamer, All Things How, Mobalytics, Dexerto, and Subnautica2Hub. Early Access recipe text can change, so the page tells players to confirm the exact Fabricator inputs in their save.',
    cardKicker: 'Plant material card',
    cardBody:
      'Creepvine gathering, Fabricator recipe check, Wakemaker use, and storage timing for early plant materials.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Material guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Fiber Mesh 指南 - Creepvine 配方、用途和时机',
      description:
        'Subnautica 2 中文 Fiber Mesh 指南：整理 Creepvine Seed Cluster、Creepvine Sample、Fabricator 制作、Wakemaker 前置、Rebreather 规划和前期收纳。',
    },
    eyebrow: 'Subnautica 2 植物材料',
    title: 'Subnautica 2 Fiber Mesh 指南',
    description:
      'Fiber Mesh 看起来只是顺手采一点植物，直到它卡住你想做的工具。跑 creepvine 路线时顺手备好，比回家后发现少一个 mesh 再折返舒服太多。',
    quickLabel: '快速结论',
    quickAnswer:
      'All Things How、Mobalytics 和 Dexerto 当前都把 Fiber Mesh 指向 Creepvine 材料，常见写法是用 Creepvine Seed Cluster 和 Creepvine Sample 在 Fabricator 制作。Subnautica2Hub 也把 Fiber Mesh 列在 Wakemaker 配方里。',
    contentsLabel: '目录',
    routeTitle: 'Fiber Mesh 收集规划',
    routeSteps: [
      {
        title: '如果需要样本，先带好切割工具',
        body: '不同攻略对 Creepvine Seed Cluster 和 Creepvine Sample 的写法不完全一样，所以别只按一种拾取物规划。你的存档如果要 sample，到了藤蔓旁边才发现没工具会很烦。',
      },
      {
        title: '一趟 creepvine 路线多办几件事',
        body: 'Seed cluster 和 sample 往往都在前期植物路线附近。把电池、润滑剂、Fiber Mesh 的需求一起看，别分三趟游。',
      },
      {
        title: '回 Fabricator 再加工',
        body: '把 Fiber Mesh 当作加工材料，不是原始植物。配方可用后，先在 Fabricator 转成 mesh，再整理箱子。',
      },
      {
        title: '给 Wakemaker 留一份',
        body: 'Subnautica2Hub 当前把 Fiber Mesh 列在 Wakemaker 配方里。如果下一个目标是移动工具，别把唯一一份 mesh 混进基地杂物箱。',
      },
      {
        title: '留一个小植物箱',
        body: 'Fiber Mesh 本身不贵，贵的是第二次折返。给 creepvine 材料单独留点位置，后面氧气或工具配方再要植物材料时会省事。',
      },
    ],
    tableTitle: 'Fiber Mesh 检查表',
    tableHeaders: ['需求', '确认什么'],
    tableRows: [
      ['Creepvine 路线', 'Seed cluster 和 sample 都是要检查的植物链。'],
      ['工具', '如果你的配方需要 Creepvine Sample，先带切割工具。'],
      ['工作站', '当前攻略都指向 Fabricator 制作。'],
      ['Wakemaker', 'Subnautica2Hub 把 Fiber Mesh 列进配方。'],
      ['收纳', '离开生物群系前，留一份 mesh 或一组植物材料。'],
    ],
    visualTitle: '植物到工具链',
    visualItems: [
      {
        label: '收集',
        value: 'Creepvine',
        note: '回家前检查 seed cluster 和 sample。',
      },
      {
        label: '制作',
        value: 'Fiber Mesh',
        note: '配方可用后在 Fabricator 加工。',
      },
      {
        label: '使用',
        value: 'Wakemaker',
        note: '前期移动工具要用就先留一份。',
      },
    ],
    cautionTitle: '不要完全套用一代记忆',
    cautionBody:
      '抢先体验阶段配方文本可能变化，攻略站对植物输入的描述也不完全一致。先看你的 Fabricator 配方，再采它真正要求的材料。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Fiber Mesh 怎么做？',
        body: '当前攻略指向 Fabricator 和 Creepvine 材料，常见写法是检查 Creepvine Seed Cluster 与 Creepvine Sample。',
      },
      {
        title: 'Fiber Mesh 有什么用？',
        body: 'Subnautica2Hub 当前把 Fiber Mesh 列在 Wakemaker 配方里，其他攻略也把它和前期移动、呼吸类装备规划联系在一起。',
      },
      {
        title: 'Fiber Mesh 材料去哪找？',
        body: '先找 creepvine 路线。如果配方要 sample，记得带能采样的工具。不要只拿 seed cluster 就回家。',
      },
      {
        title: '需要多做 Fiber Mesh 吗？',
        body: '留一份备用比较稳。做满一箱通常没必要，除非后续补丁或新配方提高需求。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2BasicFins, label: 'Basic Fins 指南' },
      { href: Routes.Subnautica2Rubber, label: 'Rubber 配方指南' },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker 指南' },
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather 指南' },
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery 指南' },
      { href: Routes.Subnautica2AirTank, label: '气瓶和氧气' },
      { href: Routes.Subnautica2OxygenDepth, label: '氧气与深度指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
      { href: Routes.Subnautica2Beginner, label: '新手路线' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 27 日核对 All Things How、Mobalytics、Dexerto 和 Subnautica2Hub。抢先体验阶段配方文本可能调整，所以页面提醒玩家以自己存档里的 Fabricator 输入为准。',
    cardKicker: '植物材料卡',
    cardBody:
      'Creepvine 收集、Fabricator 配方检查、Wakemaker 用途，以及前期植物材料收纳时机。',
    cardTypeLabel: '类型',
    cardTypeValue: '材料指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: 'Early Access',
  },
};

const fallbackCopy = fiberMeshCopy.en;

fiberMeshCopy.zh = {
  ...fiberMeshCopy.zh,
  fieldNotesTitle: 'Fiber Mesh 准备笔记',
  fieldNotes: [
    {
      title: '不要把它拖到最后一趟',
      body: 'Fiber Mesh 本身不难，难的是 Rebreather 只差它时又要折返。跑 creepvine 路线时顺手处理，比临时补材料舒服很多。',
    },
    {
      title: '以存档里的配方文字为准',
      body: '公开攻略对 creepvine 输入的写法不完全一致。你的 Fabricator 要 seed cluster、sample，还是两者都要，直接按游戏内配方来。',
    },
    {
      title: '植物材料别和食物材料混放',
      body: '给 creepvine 单独留一个小箱子，后面的工具和氧气装备会快很多。混在一起时，材料最容易被别的计划消耗掉。',
    },
  ],
  routeChecklistTitle: '离开 creepvine 路线前',
  routeChecklist: [
    '打开 Fabricator，确认它要哪种植物输入。',
    '如果需要 sample，先带好切割工具。',
    'Rebreather 是下一步时，先留两份 Fiber Mesh。',
    '给 Wakemaker 或后续工具留一组备用植物材料。',
  ],
  quickAnswer:
    'All Things How、Mobalytics 和 Dexerto 当前都把 Fiber Mesh 指向 Creepvine 材料，常见写法是用 Creepvine Seed Cluster 和 Creepvine Sample 在 Fabricator 制作。PC Gamer 还把 Fiber Mesh x2 列进 Rebreather 配方，并把材料链接到 Strong Acid；Subnautica2Hub 则把 Fiber Mesh 列在 Wakemaker 配方里。',
  routeSteps: [
    {
      title: '如果需要样本，先带好切割工具',
      body: '不同攻略对 Creepvine Seed Cluster 和 Creepvine Sample 的写法不完全一样。先看你的 Fabricator 配方，再决定这趟要带什么工具。',
    },
    {
      title: '一趟 creepvine 路线多办几件事',
      body: 'Seed cluster 和 sample 往往在前期植物路线附近。把电池、润滑剂、Fiber Mesh 的需求一起看，别分三趟游。',
    },
    {
      title: '回 Fabricator 再加工',
      body: 'Fiber Mesh 是加工材料，不是原始植物。配方可用后，先转成 mesh，再整理箱子。',
    },
    {
      title: '给 Rebreather 留两份',
      body: 'PC Gamer 当前把 Rebreather 配方写成 Fiber Mesh x2。如果深潜装备是下一步，先别把植物材料全花在别的舒适道具上。',
    },
  ],
  tableRows: [
    ['Creepvine 路线', 'Seed cluster 和 sample 都是要检查的植物链。'],
    ['工具', '如果你的配方需要 Creepvine Sample，先带切割工具。'],
    ['Fabricator', '当前攻略都指向在 Fabricator 加工。'],
    ['Rebreather', 'PC Gamer 当前列出 Fiber Mesh x2。'],
    ['Strong Acid', '当前 Rebreather 报道把 mesh 链接到 Strong Acid。'],
    ['Wakemaker', 'Subnautica2Hub 把 Fiber Mesh 列进配方。'],
  ],
  related: [
    { href: Routes.Subnautica2Rebreather, label: 'Rebreather 指南' },
    { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid 指南' },
    { href: Routes.Subnautica2Processor, label: 'Processor 指南' },
    { href: Routes.Subnautica2SystemChip, label: 'System Chip 指南' },
    { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker 指南' },
    { href: Routes.Subnautica2AirTank, label: '气瓶和氧气' },
    { href: Routes.Subnautica2OxygenDepth, label: '氧气与深度指南' },
  ],
  sourceBody:
    '2026 年 5 月 27 日核对 PC Gamer、All Things How、Mobalytics、Dexerto 和 Subnautica2Hub。抢先体验阶段配方文本可能调整，所以页面提醒玩家以自己存档里的 Fabricator 输入为准。',
};

fiberMeshCopy.ja = {
  metadata: {
    title:
      'Subnautica 2 Fiber Mesh ガイド - Creepvine素材、用途、作るタイミング',
    description:
      'Subnautica 2のFiber Meshガイド。Creepvine素材、Fabricator制作、Rebreather x2準備、Wakemaker用途、序盤装備の素材管理を整理します。',
  },
  eyebrow: 'Subnautica 2 植物素材',
  title: 'Subnautica 2 Fiber Mesh ガイド',
  description:
    'Fiber Meshは小さな植物素材に見えますが、RebreatherやWakemakerの前で急に足りなくなりがちです。creepvineルートへ行く時に一緒に用意しておくと、あとから1個だけ取りに戻る手間を減らせます。',
  quickLabel: '要点',
  quickAnswer:
    'All Things How、Mobalytics、DexertoはいずれもFiber MeshをCreepvine素材のルートに結びつけています。現在の説明では、Creepvine Seed ClusterやCreepvine SampleをFabricatorで加工する流れとして扱われることが多いです。PC GamerはRebreather素材としてFiber Mesh x2を挙げ、Subnautica2HubはWakemakerレシピにもFiber Meshを掲載しています。',
  fieldNotesTitle: 'Fiber Mesh準備メモ',
  fieldNotes: [
    {
      title: '最後の寄り道にしない',
      body: 'Fiber Meshは簡単な素材ですが、Rebreather直前に足りないと面倒です。creepvineへ行く時に一緒に片付けておくと、戻りの往復を減らせます。',
    },
    {
      title: '自分のセーブの植物表記を見る',
      body: '公開ガイドではCreepvine Seed ClusterとCreepvine Sampleの書き方に少し差があります。必要な素材はFabricatorに表示されるレシピを基準にしましょう。',
    },
    {
      title: '植物素材は食料と分ける',
      body: '小さなcreepvine用ロッカーを作ると、後の工具や酸素装備が楽になります。有機素材を混ぜると、必要な素材が別の用途に消えがちです。',
    },
  ],
  routeChecklistTitle: 'creepvineルートを離れる前に',
  routeChecklist: [
    'Fabricatorで必要な植物素材を確認した。',
    'Sampleが必要なら切れる道具を持っている。',
    'Rebreatherが次ならFiber Meshを2つ確保する。',
    'Wakemakerや後の工具用に予備を1セット残す。',
  ],
  contentsLabel: '目次',
  routeTitle: 'Fiber Mesh収集計画',
  routeSteps: [
    {
      title: 'Sampleが必要なら道具を持つ',
      body: 'ガイドによってCreepvine Seed ClusterとCreepvine Sampleの扱いが少し違います。1種類だけ拾えばよい前提にせず、セーブ内のレシピを見てから出発します。',
    },
    {
      title: 'creepvineルートで複数の用事を済ませる',
      body: 'Seed ClusterとSampleは序盤の植物ルートにまとまりやすい素材です。電池、潤滑剤、Fiber Meshの予定を一緒に確認し、別々の往復にしないようにします。',
    },
    {
      title: 'Fabricatorで加工する',
      body: 'Fiber Meshは生の植物ではなく加工素材です。レシピが使えるようになったら、保管を整理する前にFabricatorでmeshへ変換しておきます。',
    },
    {
      title: 'Rebreather用に2つ残す',
      body: 'PC GamerはRebreather素材としてFiber Mesh x2を掲載しています。深いルートが次なら、快適装備に植物素材を使う前に2つ確保しましょう。',
    },
    {
      title: 'Wakemaker用にも1つ見る',
      body: 'Subnautica2HubはWakemakerレシピにFiber Meshを掲載しています。移動装備が次の目標なら、拠点の雑多な箱に埋もれないよう別に置きます。',
    },
    {
      title: '小さな植物箱を作る',
      body: 'Fiber Meshそのものは高価ではありませんが、2回目の往復は時間を食います。creepvine素材を少し残す箱があると、後の酸素装備や工具レシピにすぐ対応できます。',
    },
  ],
  tableTitle: 'Fiber Mesh チェックリスト',
  tableHeaders: ['必要なもの', '確認すること'],
  tableRows: [
    ['Creepvineルート', 'Seed ClusterとSampleを両方確認する植物ルートです。'],
    [
      '道具',
      'セーブ内レシピがCreepvine Sampleを求めるなら切れる道具を持ちます。',
    ],
    ['Fabricator', '現在のガイドはFabricatorでの加工を示しています。'],
    ['Rebreather', 'PC GamerはFiber Mesh x2を素材として掲載しています。'],
    [
      'Wakemaker',
      'Subnautica2HubはWakemakerレシピにもFiber Meshを掲載しています。',
    ],
    ['保管', 'バイオームを離れる前に予備のmeshか植物素材を少し残します。'],
  ],
  visualTitle: '植物から装備への流れ',
  visualItems: [
    {
      label: '集める',
      value: 'Creepvine',
      note: '帰る前にSeed ClusterとSampleを確認。',
    },
    {
      label: '作る',
      value: 'Fiber Mesh',
      note: 'レシピが見えたらFabricatorで加工します。',
    },
    {
      label: '使う',
      value: 'Wakemaker',
      note: '移動装備が次なら1つ残します。',
    },
  ],
  cautionTitle: 'Subnautica 1の記憶だけで動かない',
  cautionBody:
    'Early Accessではレシピ文言が変わる可能性があり、ガイドごとに植物入力の書き方も完全には一致しません。Fabricatorのレシピを見て、自分のセーブが要求する素材を集めましょう。',
  faqTitle: 'FAQ',
  faqs: [
    {
      title: 'Fiber Meshはどう作りますか？',
      body: '現在のガイドはFabricatorとCreepvine素材を示しており、Creepvine Seed ClusterやCreepvine Sampleを確認する流れとして扱われています。',
    },
    {
      title: 'Fiber Meshは何に使いますか？',
      body: 'Subnautica2HubはWakemakerレシピにFiber Meshを掲載し、PC GamerはRebreather素材としてFiber Mesh x2を掲載しています。序盤の移動と呼吸装備に関わる素材です。',
    },
    {
      title: '素材はどこで探しますか？',
      body: 'まずcreepvineルートを見ます。Sampleが必要な場合に備えて、切れる道具を持っていくと戻り直しを避けられます。',
    },
    {
      title: '多めに作るべきですか？',
      body: '予備を1つ持つのは安心です。大量に作る必要は薄いですが、パッチや新レシピで需要が変わる可能性はあります。',
    },
  ],
  readNextTitle: '次に読む',
  related: [
    { href: Routes.Subnautica2BasicFins, label: 'Basic Fins ガイド' },
    { href: Routes.Subnautica2ImprovedFins, label: 'Improved Fins ガイド' },
    { href: Routes.Subnautica2Rubber, label: 'Rubber レシピガイド' },
    { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker ガイド' },
    { href: Routes.Subnautica2Rebreather, label: 'Rebreather ガイド' },
    { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid ガイド' },
    { href: Routes.Subnautica2Processor, label: 'Processor ガイド' },
    { href: Routes.Subnautica2SystemChip, label: 'System Chip ガイド' },
    { href: Routes.Subnautica2AirTank, label: 'Air TankとO2' },
    { href: Routes.Subnautica2OxygenDepth, label: '酸素と深度ガイド' },
    { href: Routes.Subnautica2Crafting, label: 'クラフトガイド' },
  ],
  sourcesTitle: '出典メモ',
  sourceBody:
    '2026年5月27日にPC Gamer、All Things How、Mobalytics、Dexerto、Subnautica2Hubで確認。Early Access中はレシピ文言が変わる可能性があるため、Fabricatorに表示される入力を基準にしてください。',
  cardKicker: '植物素材カード',
  cardBody:
    'Creepvine収集、Fabricatorレシピ確認、RebreatherとWakemakerの用途、序盤植物素材の保管タイミング。',
  cardTypeLabel: '種類',
  cardTypeValue: '素材ガイド',
  cardVerifiedLabel: '確認日',
  cardStatusLabel: '状態',
  cardStatusValue: 'Early Access',
};

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  if (fiberMeshCopy[locale]) {
    continue;
  }

  fiberMeshCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Fiber Mesh Guide',
      description:
        'Guide for Fiber Mesh, Creepvine material, Fabricator crafting, Wakemaker prep, and early equipment planning.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = fiberMeshCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2FiberMesh,
  });
}

export default async function FiberMeshGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = fiberMeshCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={LeafIcon}
      locale={locale}
      pathname={Routes.Subnautica2FiberMesh}
      sources={sharedSources}
    />
  );
}
