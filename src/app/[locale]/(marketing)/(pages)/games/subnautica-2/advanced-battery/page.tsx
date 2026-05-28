import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { BatteryChargingIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type AdvancedBatteryCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-28';

const sharedSources = [
  {
    href: 'https://allthings.how/advanced-battery-blueprint-location-in-subnautica-2/',
    label: 'All Things How Advanced Battery blueprint guide',
  },
  {
    href: 'https://subnautica2.gg/blueprints/advanced-battery',
    label: 'Subnautica2.gg Advanced Battery blueprint',
  },
  {
    href: 'https://subnautica2hub.com/blueprints/advanced-battery',
    label: 'Subnautica2Hub Advanced Battery blueprint',
  },
];

const advancedBatteryCopy: Record<string, AdvancedBatteryCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Advanced Battery Guide - Blueprint, Recipe, and 200 Energy',
      description:
        'A practical Subnautica 2 Advanced Battery guide covering Karakorum Power Plant fragments, Data Box unlocks, Conduit Crystal, Strong Acid, Silver Ingot, 200 energy, and battery rotation.',
    },
    eyebrow: 'Subnautica 2 power upgrade',
    title: 'Subnautica 2 Advanced Battery Guide',
    description:
      'Advanced Battery is the point where handheld tools stop feeling hungry every few minutes. The catch is that the recipe pulls from deeper routes, so it is worth planning as a small expedition instead of a casual Fabricator craft.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'All Things How says Advanced Battery stores 200 energy and points the blueprint route to the Karakorum Power Plant area, where you scan two fragments. Subnautica2.gg lists two unlock paths: scan 2 Advanced Battery fragments or open a Data Box. Current blueprint pages list the Fabricator recipe as Conduit Crystal x1, Strong Acid x1, and Silver Ingot x1. Build Battery Terminal first if you already have a base, then rotate Advanced Batteries through it instead of crafting replacements. Keep Entangled Power Cell materials separate, because that route adds Gold Ingot and Troilite pressure.',
    fieldNotesTitle: 'Field notes for advanced power',
    fieldNotes: [
      {
        title: 'Do the unlock trip like a dive plan',
        body: 'Advanced Battery is not a casual Copper craft. If Karakorum Power Plant is next, bring air, scanner power, and a route home before chasing fragments.',
      },
      {
        title: 'Keep the three rare inputs together',
        body: 'Conduit Crystal, Strong Acid, and Silver Ingot come from different rhythms. Put them in one small locker so the final craft does not become a guessing game.',
      },
      {
        title: 'Recharge before replacing',
        body: 'The point of a 200-energy battery is rotation. Once Battery Terminal exists, drained Advanced Batteries should cycle through it instead of becoming clutter.',
      },
    ],
    routeChecklistTitle: 'Before crafting Advanced Battery',
    routeChecklist: [
      'Fragment or Data Box unlock is confirmed.',
      'Conduit Crystal, Strong Acid, and Silver Ingot are staged together.',
      'Battery Terminal route is planned for recharge cycles.',
      'Entangled Power Cell materials stay in a separate pile.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Advanced Battery route',
    routeSteps: [
      {
        title: 'Do not treat it like a first-hour battery',
        body: 'Basic Battery is a Copper problem. Advanced Battery is a route problem. You need deeper materials, a safer oxygen setup, and a scanner trip before the recipe is even useful.',
      },
      {
        title: 'Scout Karakorum Power Plant with real dive prep',
        body: 'All Things How places the fragment route around Karakorum Power Plant and recommends a charged Scanner, Rebreather, and at least a Standard Air Tank. If that list sounds heavy, that is the page telling you not to rush it.',
      },
      {
        title: 'Scan fragments, but watch for a Data Box',
        body: 'Subnautica2.gg lists multiple unlock paths: two scanned Advanced Battery fragments or a Data Box. Scan the obvious wall-mounted gear, but do not ignore containers if the area gives you one.',
      },
      {
        title: 'Gather the recipe as a three-part checklist',
        body: 'The current recipe is Conduit Crystal x1, Strong Acid x1, and Silver Ingot x1. Put those in a small locker before crafting so the trip does not turn into five half-runs.',
      },
      {
        title: 'Use Battery Terminal to make it pay off',
        body: 'A 200-energy battery is much better when you can recharge it. Keep Advanced Batteries in the tools you use on long routes, then cycle drained ones through the Battery Terminal back at base.',
      },
      {
        title: 'Do not confuse it with Entangled Power Cell',
        body: 'Advanced Battery is the tool-upgrade battery. Entangled Power Cell is a later power craft with Gold Ingot and Troilite in the mix. Keep the two routes beside each other, not on top of each other.',
      },
    ],
    tableTitle: 'Advanced Battery checklist',
    tableHeaders: ['Need', 'Why it matters'],
    tableRows: [
      ['Scanner', 'Needed for the fragment unlock route.'],
      [
        'Karakorum Power Plant prep',
        'All Things How points the fragments to this deeper area.',
      ],
      ['Conduit Crystal x1', 'Depth-gated resource used in the recipe.'],
      ['Strong Acid x1', 'Processor-chain material; do not spend it blindly.'],
      [
        'Silver Ingot x1',
        'Processed Silver cost that makes early stock planning matter.',
      ],
      [
        'Battery Terminal',
        'Makes the 200-energy battery reusable instead of disposable.',
      ],
      [
        'Entangled split',
        'Do not spend Gold Ingot or Troilite here; those belong to the Entangled Power Cell route.',
      ],
    ],
    visualTitle: 'Power upgrade card',
    visualItems: [
      {
        label: 'Unlock',
        value: '2 scans',
        note: 'Or Data Box, according to current blueprint data.',
      },
      {
        label: 'Craft',
        value: '3 parts',
        note: 'Conduit Crystal, Strong Acid, Silver Ingot.',
      },
      {
        label: 'Output',
        value: '200',
        note: 'Subnautica2Hub lists 200 energy.',
      },
    ],
    cautionTitle:
      'Do not spend rare materials on a battery you cannot recharge',
    cautionBody:
      'Advanced Battery is excellent, but the first one costs materials that also sit near upgrade and vehicle planning. If your base has no Battery Terminal yet, build the charger before turning rare parts into a pile of dead batteries.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you unlock Advanced Battery in Subnautica 2?',
        body: 'Current blueprint data lists two paths: scan two Advanced Battery fragments or open a Data Box. All Things How points the fragment route toward Karakorum Power Plant.',
      },
      {
        title: 'What is the Advanced Battery recipe?',
        body: 'Current blueprint pages list Conduit Crystal x1, Strong Acid x1, and Silver Ingot x1 at the Fabricator.',
      },
      {
        title: 'How much energy does Advanced Battery have?',
        body: 'Subnautica2Hub currently lists Advanced Battery at 200 energy, double the Basic Battery value shown on the Basic Battery page.',
      },
      {
        title: 'Should you craft Advanced Battery before Battery Terminal?',
        body: 'Usually no. A Battery Terminal makes the upgrade much more useful because you can recharge expensive batteries instead of replacing them.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2BatteryTerminal,
        label: 'Battery Terminal Guide',
      },
      {
        href: Routes.Subnautica2KarakorumPowerPlant,
        label: 'Karakorum Power Plant Route',
      },
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery Guide' },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal Guide',
      },
      { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid Guide' },
      { href: Routes.Subnautica2NecroleiCyst, label: 'Necrolei Cyst Guide' },
      { href: Routes.Subnautica2Silver, label: 'Silver Location Guide' },
      { href: Routes.Subnautica2SilverIngot, label: 'Silver Ingot Guide' },
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2 Guide' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Vehicle Guide' },
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell Guide' },
      {
        href: Routes.Subnautica2EntangledPowerCell,
        label: 'Entangled Power Cell Guide',
      },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 27, 2026 against All Things How, Subnautica2.gg, and Subnautica2Hub. Subnautica 2 is still in Early Access, so fragment routes, Data Box placement, recipes, and energy values should be rechecked after patches.',
    cardKicker: 'Battery upgrade card',
    cardBody:
      'Karakorum fragment route, Data Box unlock, Conduit Crystal, Strong Acid, Silver Ingot, 200 energy, and Battery Terminal rotation.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Power guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Advanced Battery 指南 - 蓝图、配方和 200 能量',
      description:
        'Subnautica 2 中文 Advanced Battery 指南：整理 Karakorum Power Plant 碎片、Data Box 解锁、Conduit Crystal、Strong Acid、Silver Ingot、200 能量和电池轮换。',
    },
    eyebrow: 'Subnautica 2 供电升级',
    title: 'Subnautica 2 Advanced Battery 指南',
    description:
      'Advanced Battery 做出来以后，Scanner、Repair Tool 这类手持工具会耐用很多。但它不是开局随手做的小电池，材料和蓝图都要你往更深的路线走一趟。',
    quickLabel: '快速结论',
    quickAnswer:
      'All Things How 写到 Advanced Battery 有 200 energy，并把碎片路线指向 Karakorum Power Plant 区域，需要扫描两个碎片。Subnautica2.gg 当前列出两种解锁方式：扫描 2 个 Advanced Battery 碎片，或打开 Data Box。当前蓝图页面写的 Fabricator 配方是 Conduit Crystal x1、Strong Acid x1、Silver Ingot x1。如果你已经有基地，先做 Battery Terminal，再把 Advanced Battery 拿来轮换充电，价值会高很多。',
    fieldNotesTitle: 'Advanced Battery 电力笔记',
    fieldNotes: [
      {
        title: '把解锁当成一次正式潜水',
        body: 'Advanced Battery 不是随手做的 Copper 配方。去 Karakorum Power Plant 前，先准备氧气、Scanner 电量和回程路线。',
      },
      {
        title: '三种稀有输入放一起',
        body: 'Conduit Crystal、Strong Acid、Silver Ingot 的节奏完全不同。放进同一个小箱子，最后制作时就不会到处翻。',
      },
      {
        title: '先充电，再替换',
        body: '200 energy 的价值在于循环使用。有 Battery Terminal 后，没电的 Advanced Battery 应该拿去充，而不是继续做新的。',
      },
    ],
    routeChecklistTitle: '制作 Advanced Battery 前',
    routeChecklist: [
      '碎片或 Data Box 解锁已经确认。',
      'Conduit Crystal、Strong Acid、Silver Ingot 已放在一起。',
      'Battery Terminal 的充电循环已经规划好。',
      'Entangled Power Cell 材料单独放，不和这里混。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Advanced Battery 路线',
    routeSteps: [
      {
        title: '别把它当成开局电池',
        body: 'Basic Battery 主要卡 Copper；Advanced Battery 卡的是路线。你需要更深的材料、更稳的氧气准备，以及一次蓝图扫描路线。',
      },
      {
        title: '去 Karakorum Power Plant 前先备好潜水装备',
        body: 'All Things How 把碎片路线指向 Karakorum Power Plant，并建议带满电 Scanner、Rebreather，以及至少 Standard Air Tank。如果这些还没准备好，就先别硬冲。',
      },
      {
        title: '扫碎片，也别漏 Data Box',
        body: 'Subnautica2.gg 当前列出两条解锁路径：扫描两个 Advanced Battery 碎片，或者打开 Data Box。墙面设备要扫，路上箱子也别完全忽略。',
      },
      {
        title: '按三件材料做清单',
        body: '当前配方是 Conduit Crystal x1、Strong Acid x1、Silver Ingot x1。先把三件材料放进同一个箱子，再去 Fabricator，少很多来回找材料的时间。',
      },
      {
        title: '配合 Battery Terminal 才真正划算',
        body: '200 能量的电池能撑更久，但能反复充电才舒服。长路线工具用 Advanced Battery，没电后回基地放进 Battery Terminal 轮换。',
      },
    ],
    tableTitle: 'Advanced Battery 检查表',
    tableHeaders: ['需要什么', '为什么重要'],
    tableRows: [
      ['Scanner', '碎片路线需要扫描解锁。'],
      [
        'Karakorum Power Plant 准备',
        'All Things How 把碎片路线指向这个更深区域。',
      ],
      ['Conduit Crystal x1', '配方里的深水/升级材料。'],
      ['Strong Acid x1', 'Processor 链材料，不要随手浪费。'],
      ['Silver Ingot x1', '加工后的 Silver 成本，前期库存要提前规划。'],
      ['Battery Terminal', '让 200 能量电池可以反复使用，而不是一次性消耗品。'],
    ],
    visualTitle: '供电升级卡',
    visualItems: [
      {
        label: '解锁',
        value: '2 扫描',
        note: '当前资料还列出 Data Box 路线。',
      },
      {
        label: '制作',
        value: '3 件',
        note: 'Conduit Crystal、Strong Acid、Silver Ingot。',
      },
      {
        label: '输出',
        value: '200',
        note: 'Subnautica2Hub 当前写的是 200 energy。',
      },
    ],
    cautionTitle: '别把稀有材料做成没法充的死电池',
    cautionBody:
      'Advanced Battery 很好用，但第一块会吃到升级和载具链附近的材料。如果基地还没有 Battery Terminal，先把充电器做出来，再把稀有材料投入高级电池。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Advanced Battery 怎么解锁？',
        body: '当前蓝图资料列出两条路线：扫描两个 Advanced Battery 碎片，或打开 Data Box。All Things How 把碎片路线指向 Karakorum Power Plant。',
      },
      {
        title: 'Advanced Battery 配方是什么？',
        body: '当前蓝图页面写的是在 Fabricator 使用 Conduit Crystal x1、Strong Acid x1、Silver Ingot x1。',
      },
      {
        title: 'Advanced Battery 有多少能量？',
        body: 'Subnautica2Hub 当前写的是 200 energy，是 Basic Battery 当前 100 energy 的两倍。',
      },
      {
        title: '要不要先做 Advanced Battery 再做 Battery Terminal？',
        body: '通常不建议。Battery Terminal 能让高级电池反复充电，这样 Advanced Battery 的稀有材料成本才更值得。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      {
        href: Routes.Subnautica2BatteryTerminal,
        label: 'Battery Terminal 指南',
      },
      {
        href: Routes.Subnautica2KarakorumPowerPlant,
        label: 'Karakorum Power Plant 路线',
      },
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery 指南' },
      { href: Routes.Subnautica2ConduitCrystal, label: 'Conduit Crystal 指南' },
      { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid 指南' },
      { href: Routes.Subnautica2NecroleiCyst, label: 'Necrolei Cyst 指南' },
      { href: Routes.Subnautica2Silver, label: 'Silver 位置指南' },
      { href: Routes.Subnautica2SilverIngot, label: 'Silver Ingot 指南' },
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather 指南' },
      { href: Routes.Subnautica2AirTank, label: '气瓶和氧气指南' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 载具指南' },
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell Guide' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 27 日核对 All Things How、Subnautica2.gg 和 Subnautica2Hub。Subnautica 2 仍处于抢先体验阶段，碎片路线、Data Box 位置、配方和能量数值都可能随补丁调整。',
    cardKicker: '电池升级卡',
    cardBody:
      'Karakorum 碎片路线、Data Box 解锁、Conduit Crystal、Strong Acid、Silver Ingot、200 能量和 Battery Terminal 轮换。',
    cardTypeLabel: '类型',
    cardTypeValue: '供电指南',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = advancedBatteryCopy.en;

advancedBatteryCopy.zh = {
  ...advancedBatteryCopy.zh,
  quickAnswer:
    'All Things How 写到 Advanced Battery 有 200 energy，并把碎片路线指向 Karakorum Power Plant 区域，需要扫描两个碎片。Subnautica2.gg 当前列出两种解锁方式：扫描 2 个 Advanced Battery 碎片，或打开 Data Box。当前蓝图页面写的 Fabricator 配方是 Conduit Crystal x1、Strong Acid x1、Silver Ingot x1。如果你已经有基地，先做 Battery Terminal，再把 Advanced Battery 拿来轮换充电，价值会高很多。Entangled Power Cell 的材料要分开存，因为那条路线还会吃 Gold Ingot 和 Troilite。',
  routeSteps: [
    ...advancedBatteryCopy.zh.routeSteps,
    {
      title: '别和 Entangled Power Cell 混在一起',
      body: 'Advanced Battery 是手持工具的高级电池。Entangled Power Cell 是更后面的供电材料，会吃 Gold Ingot 和 Troilite。两条路线可以相邻收纳，但不要混成一箱。',
    },
  ],
  tableRows: [
    ...advancedBatteryCopy.zh.tableRows,
    [
      'Entangled 分流',
      'Gold Ingot 和 Troilite 不属于 Advanced Battery，留给 Entangled Power Cell。',
    ],
  ],
  related: [
    { href: Routes.Subnautica2BatteryTerminal, label: 'Battery Terminal 指南' },
    {
      href: Routes.Subnautica2KarakorumPowerPlant,
      label: 'Karakorum Power Plant 路线',
    },
    { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery 指南' },
    { href: Routes.Subnautica2PowerCell, label: 'Power Cell 指南' },
    {
      href: Routes.Subnautica2EntangledPowerCell,
      label: 'Entangled Power Cell 指南',
    },
    { href: Routes.Subnautica2ConduitCrystal, label: 'Conduit Crystal 指南' },
    { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid 指南' },
    { href: Routes.Subnautica2SilverIngot, label: 'Silver Ingot 指南' },
    { href: Routes.Subnautica2Rebreather, label: 'Rebreather 指南' },
    { href: Routes.Subnautica2Crafting, label: '制作指南' },
  ],
  sourceBody:
    '2026 年 5 月 27 日核对 All Things How、Subnautica2.gg 和 Subnautica2Hub。Subnautica 2 仍处于抢先体验阶段，碎片路线、Data Box 位置、配方和能量数值都可能随补丁调整。',
};

advancedBatteryCopy.ja = {
  metadata: {
    title: 'Subnautica 2 Advanced Battery ガイド - 設計図、素材、200エネルギー',
    description:
      'Subnautica 2のAdvanced Batteryガイド。Karakorum Power Plantの断片、Data Box、Conduit Crystal、Strong Acid、Silver Ingot、200エネルギー、充電運用を整理します。',
  },
  eyebrow: 'Subnautica 2 電力アップグレード',
  title: 'Subnautica 2 Advanced Battery ガイド',
  description:
    'Advanced Batteryを作ると、ScannerやRepair Toolの電池切れがかなり楽になります。ただし素材も設計図も少し深いルートに寄るので、ついでのクラフトではなく小さな遠征として準備したほうが安全です。',
  quickLabel: '要点',
  quickAnswer:
    'All Things HowはAdvanced Batteryを200 energyとし、断片ルートをKarakorum Power Plant周辺に置いています。Subnautica2.ggでは、Advanced Battery断片を2つスキャンする方法とData Boxによる解除が掲載されています。現在の公開データでは、Fabricatorの素材はConduit Crystal x1、Strong Acid x1、Silver Ingot x1です。拠点があるなら先にBattery Terminalを作り、使い切ったAdvanced Batteryを充電で回すと素材の無駄が減ります。',
  fieldNotesTitle: 'Advanced Battery メモ',
  fieldNotes: [
    {
      title: '解除ルートはきちんと潜る',
      body: 'Advanced Batteryは序盤のCopperだけで済む電池ではありません。Karakorum Power Plantへ向かうなら、酸素、Scannerの残量、帰り道を先に決めてから断片を探しましょう。',
    },
    {
      title: '3つの素材を同じ箱にまとめる',
      body: 'Conduit Crystal、Strong Acid、Silver Ingotは集める流れが別です。小さなロッカーを1つ用意して、最後に素材探しで往復しないようにします。',
    },
    {
      title: '作り替えるより充電する',
      body: '200エネルギーの強みは使い回せることです。Battery Terminalがあるなら、空になったAdvanced Batteryは新しく作るより充電に回しましょう。',
    },
  ],
  routeChecklistTitle: '作る前の確認',
  routeChecklist: [
    '断片スキャンかData Boxで設計図を解除している。',
    'Conduit Crystal、Strong Acid、Silver Ingotを同じ場所に置いた。',
    'Battery Terminalで充電する運用を決めている。',
    'Entangled Power Cell用のGold IngotやTroiliteは別に保管する。',
  ],
  contentsLabel: '目次',
  routeTitle: 'Advanced Battery ルート',
  routeSteps: [
    {
      title: '序盤電池と同じ感覚で扱わない',
      body: 'Basic BatteryはCopperの問題ですが、Advanced Batteryはルートの問題です。深めの素材、安定した酸素、設計図を取るスキャン行程がそろってから価値が出ます。',
    },
    {
      title: 'Karakorum Power Plantへ行く前に装備を整える',
      body: 'All Things Howは断片の行き先をKarakorum Power Plant周辺とし、充電済みScanner、Rebreather、少なくともStandard Air Tankを勧めています。この準備が重く感じるなら、急がないほうがいい段階です。',
    },
    {
      title: '断片を探しつつData Boxも見る',
      body: 'Subnautica2.ggは解除方法として2つのAdvanced Battery断片、またはData Boxを挙げています。壁や設備だけでなく、エリア内の箱も見落とさないようにします。',
    },
    {
      title: '素材は3点チェックにする',
      body: '現在の素材はConduit Crystal x1、Strong Acid x1、Silver Ingot x1です。Fabricatorへ向かう前に3つを並べて確認すると、半端な往復が減ります。',
    },
    {
      title: 'Battery Terminalと一緒に使う',
      body: 'Advanced Batteryは長い探索用の工具に入れると便利です。使い切ったら拠点のBattery Terminalに戻し、次の潜航までに充電しておきます。',
    },
    {
      title: 'Entangled Power Cellとは分ける',
      body: 'Advanced Batteryは工具用の電力強化です。Entangled Power Cellはさらに後の電力素材で、Gold IngotやTroiliteも絡みます。近い箱に置いても、混ぜないほうが管理しやすいです。',
    },
  ],
  tableTitle: 'Advanced Battery チェックリスト',
  tableHeaders: ['必要なもの', '確認すること'],
  tableRows: [
    ['Scanner', '断片ルートの解除に必要です。'],
    [
      'Karakorum Power Plantの準備',
      'All Things Howは断片ルートをこの深めのエリアに置いています。',
    ],
    ['Conduit Crystal x1', 'レシピに入る深めの素材です。'],
    ['Strong Acid x1', 'Processor系の素材なので、無駄遣いしないようにします。'],
    ['Silver Ingot x1', '加工済みSilverの在庫計画が必要です。'],
    ['Battery Terminal', '200エネルギー電池を使い捨てにしないための要です。'],
    [
      'Entangled素材の分離',
      'Gold IngotやTroiliteはAdvanced Batteryではなく、Entangled Power Cell側に残します。',
    ],
  ],
  visualTitle: '電力アップグレードカード',
  visualItems: [
    {
      label: '解除',
      value: '2スキャン',
      note: '現在の公開データではData Boxルートもあります。',
    },
    {
      label: '制作',
      value: '3素材',
      note: 'Conduit Crystal、Strong Acid、Silver Ingot。',
    },
    {
      label: '容量',
      value: '200',
      note: 'Subnautica2Hubは200 energyと掲載しています。',
    },
  ],
  cautionTitle: '充電できない状態で希少素材を電池にしない',
  cautionBody:
    'Advanced Batteryは便利ですが、最初の1つにはアップグレードや車両計画にも近い素材を使います。Battery Terminalがまだないなら、先に充電環境を作ってから高級電池に進むほうが損をしません。',
  faqTitle: 'FAQ',
  faqs: [
    {
      title: 'Advanced Batteryはどう解除しますか？',
      body: '現在の公開データでは、Advanced Battery断片を2つスキャンする方法とData Boxによる解除が掲載されています。All Things Howは断片ルートをKarakorum Power Plant周辺に置いています。',
    },
    {
      title: 'Advanced Batteryの素材は何ですか？',
      body: '現在の設計図ページでは、FabricatorでConduit Crystal x1、Strong Acid x1、Silver Ingot x1を使うとされています。',
    },
    {
      title: 'Advanced Batteryの容量は？',
      body: 'Subnautica2HubはAdvanced Batteryを200 energyと掲載しています。',
    },
    {
      title: 'Battery Terminalより先に作るべきですか？',
      body: '基本的にはおすすめしません。Battery Terminalがあると高価な電池を充電して使い回せるので、素材の価値が大きく上がります。',
    },
  ],
  readNextTitle: '次に読む',
  related: [
    {
      href: Routes.Subnautica2BatteryTerminal,
      label: 'Battery Terminal ガイド',
    },
    {
      href: Routes.Subnautica2KarakorumPowerPlant,
      label: 'Karakorum Power Plant ルート',
    },
    { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery ガイド' },
    { href: Routes.Subnautica2PowerCell, label: 'Power Cell ガイド' },
    {
      href: Routes.Subnautica2EntangledPowerCell,
      label: 'Entangled Power Cell ガイド',
    },
    { href: Routes.Subnautica2ConduitCrystal, label: 'Conduit Crystal ガイド' },
    { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid ガイド' },
    { href: Routes.Subnautica2SilverIngot, label: 'Silver Ingot ガイド' },
    { href: Routes.Subnautica2Crafting, label: 'クラフトガイド' },
  ],
  sourcesTitle: '出典メモ',
  sourceBody:
    '2026年5月27日にAll Things How、Subnautica2.gg、Subnautica2Hubで確認。Subnautica 2はEarly Access中のため、断片ルート、Data Box位置、素材、エネルギー値はパッチで変わる可能性があります。',
  cardKicker: '電池アップグレード',
  cardBody:
    'Karakorum断片ルート、Data Box解除、Conduit Crystal、Strong Acid、Silver Ingot、200エネルギー、Battery Terminalでの充電運用。',
  cardTypeLabel: '種類',
  cardTypeValue: '電力ガイド',
  cardVerifiedLabel: '確認日',
  cardStatusLabel: '状態',
  cardStatusValue: 'Early Access',
};

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  if (advancedBatteryCopy[locale]) {
    continue;
  }

  advancedBatteryCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Advanced Battery Guide',
      description:
        'Guide for Advanced Battery fragments, Karakorum Power Plant, Data Box unlocks, Conduit Crystal, Strong Acid, Silver Ingot, 200 energy, and battery charging.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = advancedBatteryCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2AdvancedBattery,
  });
}

export default async function AdvancedBatteryGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = advancedBatteryCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={BatteryChargingIcon}
      locale={locale}
      pathname={Routes.Subnautica2AdvancedBattery}
      sources={sharedSources}
    />
  );
}
