import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { WrenchIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type ModificationStationCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-25';
const UPDATED_AT = '2026-05-27';

const sharedSources = [
  {
    href: 'https://subnautica2.gg/blueprints/modification-station/',
    label: 'Subnautica2.gg Modification Station blueprint',
  },
  {
    href: 'https://wand.com/wikis/subnautica-2/blueprints/modification-station',
    label: 'Wand Modification Station blueprint',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-tadpole-scan-locations/',
    label: 'PC Gamer Tadpole and Modification Station route',
  },
  {
    href: 'https://www.keengamer.com/articles/guides/how-to-get-the-modification-station-in-subnautica-2/',
    label: 'KeenGamer Modification Station guide',
  },
  {
    href: 'https://games.gg/subnautica-2/guides/subnautica-2-how-to-unlock-modification-station/',
    label: 'GAMES.GG Modification Station guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-feedback-resonator-scan-locations/',
    label: 'PC Gamer Feedback Resonator guide',
  },
];

const modificationStationCopy: Record<string, ModificationStationCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Modification Station Guide - Unlock, Recipe, and Upgrade Use',
      description:
        'A practical Subnautica 2 Modification Station guide covering scan and Data Box unlocks, Titanium, Celestine, Copper, Alien Ruins route notes, and Tadpole upgrade crafting.',
    },
    eyebrow: 'Subnautica 2 upgrade station',
    title: 'Subnautica 2 Modification Station Guide',
    description:
      'Modification Station is the point where a Tadpole stops being just transport and starts becoming a platform. Build it once the Alien Ruins route is stable, then use it for the upgrades that actually open new water.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current blueprint data lists Modification Station as a Builder Tool interior facility made with Titanium x2, Celestine x2, and Copper x2. You can unlock it by scanning the station or finding the right Data Box / Recipe Data Card, depending on the route and save state. PC Gamer places a reliable station in the Alien Ruins Research Base after the Tadpole Pens section.',
    contentsLabel: 'Contents',
    routeTitle: 'Modification Station unlock plan',
    routeSteps: [
      {
        title: 'Reach the Alien Ruins route safely',
        body: 'PC Gamer describes finding a Modification Station in the Research Base after crossing toward Alien Ruins. Bring the Tadpole, repair safety, and enough depth margin before treating this as a quick errand.',
      },
      {
        title: 'Scan first, Data Box second',
        body: 'Blueprint databases list scan and Data Box unlock paths, while current player guides point to the Research Base station as the cleanest route. If one route does not trigger in your save, check the other before blaming the recipe.',
      },
      {
        title: 'Prepare Celestine before the craft',
        body: 'The recipe uses Celestine x2, which is the part that ties this station to deeper routes. Do not assume common base storage will already have it.',
      },
      {
        title: 'Keep Copper raw until the station is visible',
        body: 'Copper x2 is easy, but it competes with Copper Wire, batteries, and module prep. Leave a little raw Copper unspent until the Modification Station is unlocked.',
      },
      {
        title: 'Build it beside module storage',
        body: 'Echo Location, Tadpole Depth Module, Feedback Resonator, Bioscanner, and other upgrades all point back here. Keep Atacamite, Quartz, Celestine, chips, and acids nearby.',
      },
      {
        title: 'Treat missing upgrades as separate locks',
        body: 'Feedback Resonator, Depth Module, Echo Location, and Bioscanner work can each need their own scan, fragment, or Recipe Data Card. The station is the bench, not the whole unlock tree.',
      },
    ],
    tableTitle: 'Modification Station checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      [
        'Unlock paths',
        'Scan Modification Station or check Data Box / Recipe Data Card routes in current guide data.',
      ],
      ['Build station', 'Builder Tool / Habitat Builder interior facility.'],
      ['Titanium x2', 'Common, but also used by base pieces.'],
      ['Celestine x2', 'The deeper-route material to plan around.'],
      ['Copper x2', 'Keep raw Copper, not only wire and batteries.'],
      [
        'Module recipes',
        'Scan or collect each upgrade separately if it does not show in the station menu.',
      ],
    ],
    visualTitle: 'Upgrade bench loop',
    visualItems: [
      {
        label: 'Unlock',
        value: 'Scan / Data Box',
        note: 'Check both paths if the recipe is missing.',
      },
      {
        label: 'Build',
        value: 'Station',
        note: 'Titanium, Celestine, Copper.',
      },
      {
        label: 'Upgrade',
        value: 'Modules',
        note: 'Echo Location, depth, resonator, Bioscanner.',
      },
      {
        label: 'Trouble',
        value: 'Locks',
        note: 'A missing module usually means its own unlock is not done yet.',
      },
    ],
    cautionTitle: 'Do not confuse the station unlock with module unlocks',
    cautionBody:
      'Building the Modification Station does not magically reveal every upgrade. Many modules still need their own scan, data card, or story progress before the recipe appears.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you unlock Modification Station in Subnautica 2?',
        body: 'Current Subnautica2.gg data says to scan a Modification Station or open a Data Box. PC Gamer points to the Alien Ruins Research Base route.',
      },
      {
        title: 'What is the Modification Station recipe?',
        body: 'Current blueprint data lists Titanium x2, Celestine x2, and Copper x2.',
      },
      {
        title: 'What is Modification Station used for?',
        body: 'It crafts upgrades and modules, including Tadpole-related modules such as Echo Location and depth upgrades once those recipes are unlocked.',
      },
      {
        title: 'Why is the recipe missing after I build the station?',
        body: 'The station and each module can have separate unlock requirements. Keep scanning fragments, checking Data Boxes, and progressing objectives.',
      },
      {
        title: 'Does Feedback Resonator need the Modification Station?',
        body: 'Yes. PC Gamer lists Feedback Resonator as a Sonic Resonator upgrade crafted at the Modification Station after you scan the required fragments.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2EngineEfficiency,
        label: 'Engine Efficiency Guide',
      },
      { href: Routes.Subnautica2EchoLocation, label: 'Echo Location Guide' },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        label: 'Tadpole Depth Module',
      },
      {
        href: Routes.Subnautica2FeedbackResonator,
        label: 'Feedback Resonator Guide',
      },
      {
        href: Routes.Subnautica2BioscannerBiomods,
        label: 'Bioscanner and Biomods',
      },
      { href: Routes.Subnautica2Celestine, label: 'Celestine Guide' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Vehicle Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 27, 2026 against Subnautica2.gg, Wand, PC Gamer, KeenGamer, and GAMES.GG. Subnautica 2 is in Early Access, so location counts, Data Box behavior, and module menus should be rechecked after patches.',
    cardKicker: 'Upgrade station card',
    cardBody:
      'Scan/Data Box unlock, Alien Ruins route, Titanium, Celestine, Copper, and module-crafting use.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Station guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Modification Station 指南 - 解锁、配方和升级用途',
      description:
        'Subnautica 2 中文 Modification Station 指南：整理扫描/Data Box 解锁、Titanium、Celestine、Copper、Alien Ruins 路线和 Tadpole 升级制作。',
    },
    eyebrow: 'Subnautica 2 升级工作站',
    title: 'Subnautica 2 Modification Station 指南',
    description:
      'Modification Station 做出来后，Tadpole 就不只是交通工具了。等 Alien Ruins 路线稳定，再用它做真正能打开新路线的升级。',
    quickLabel: '快速结论',
    quickAnswer:
      'Subnautica2.gg 当前把 Modification Station 写成 locked 的 Builder Tool 室内设施，材料是 Titanium x2、Celestine x2、Copper x2。同页还写了两条解锁方式：扫描 Modification Station 或打开 Data Box。PC Gamer 把可用路线放在 Tadpole Pens 后前往 Alien Ruins Research Base 的流程里。',
    contentsLabel: '目录',
    routeTitle: 'Modification Station 解锁规划',
    routeSteps: [
      {
        title: '先保证 Alien Ruins 路线安全',
        body: 'PC Gamer 提到 Alien Ruins Research Base 里能找到 Modification Station。出发前带 Tadpole、修理方案和足够深度余量，不要把它当成普通短途。',
      },
      {
        title: '先扫描，再查 Data Box',
        body: 'Subnautica2.gg 写了两个解锁方式：扫描工作站，或打开 Data Box。如果一个方式没触发，先查另一个，不要马上去刷完整配方。',
      },
      {
        title: '提前准备 Celestine',
        body: '配方要 Celestine x2，这才是它真正的卡点。普通基地箱子里通常不会顺手有这类深水材料。',
      },
      {
        title: 'Copper 先留原矿',
        body: 'Copper x2 本身不难，但会被 Copper Wire、电池和模块准备分走。解锁前留一点原始 Copper 更稳。',
      },
      {
        title: '放在模块材料箱旁边',
        body: 'Echo Location、Tadpole Depth Module、Feedback Resonator、Bioscanner 等都会回到这里。Atacamite、Quartz、Celestine、芯片和酸类材料放近一点。',
      },
    ],
    tableTitle: 'Modification Station 检查表',
    tableHeaders: ['需求', '确认什么'],
    tableRows: [
      ['解锁方式', '当前 Subnautica2.gg 写的是扫描工作站或打开 Data Box。'],
      ['建造方式', 'Builder Tool / Habitat Builder 室内设施。'],
      ['Titanium x2', '常见，但基地部件也会用。'],
      ['Celestine x2', '需要按深水路线提前规划。'],
      ['Copper x2', '保留原矿，不要全变成线或电池。'],
    ],
    visualTitle: '升级工作台链路',
    visualItems: [
      {
        label: '解锁',
        value: 'Scan / Data Box',
        note: '配方缺失时两条路都查。',
      },
      {
        label: '建造',
        value: 'Station',
        note: 'Titanium、Celestine、Copper。',
      },
      {
        label: '升级',
        value: 'Modules',
        note: 'Echo Location、深度、Resonator、Bioscanner。',
      },
    ],
    cautionTitle: '不要把工作站解锁和模块解锁混在一起',
    cautionBody:
      '建好 Modification Station 不等于所有升级都会出现。很多模块还需要单独扫描、Data Card 或剧情推进。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Modification Station 怎么解锁？',
        body: '当前 Subnautica2.gg 写的是扫描 Modification Station 或打开 Data Box。PC Gamer 给的路线线索是 Alien Ruins Research Base。',
      },
      {
        title: 'Modification Station 配方是什么？',
        body: '当前蓝图资料写的是 Titanium x2、Celestine x2、Copper x2。',
      },
      {
        title: 'Modification Station 有什么用？',
        body: '它用来制作升级和模块，比如 Echo Location、Tadpole 深度模块等，但前提是对应模块也已经解锁。',
      },
      {
        title: '为什么建好后看不到某个升级？',
        body: '工作站和模块本身可能有独立解锁要求。继续扫描碎片、查 Data Box，并推进目标。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      {
        href: Routes.Subnautica2EngineEfficiency,
        label: 'Engine Efficiency 指南',
      },
      { href: Routes.Subnautica2EchoLocation, label: 'Echo Location 指南' },
      { href: Routes.Subnautica2TadpoleDepthModule, label: 'Tadpole 深度模块' },
      {
        href: Routes.Subnautica2FeedbackResonator,
        label: 'Feedback Resonator 指南',
      },
      {
        href: Routes.Subnautica2BioscannerBiomods,
        label: 'Bioscanner 和 Biomods',
      },
      { href: Routes.Subnautica2Celestine, label: 'Celestine 指南' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 载具指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 27 日核对 Subnautica2.gg、Wand、PC Gamer 和 KeenGamer。Subnautica 2 仍在抢先体验，地点数量、Data Box 行为和模块菜单后续可能调整。',
    cardKicker: '升级工作站卡',
    cardBody:
      '扫描/Data Box 解锁、Alien Ruins 路线、Titanium、Celestine、Copper 和模块制作用途。',
    cardTypeLabel: '类型',
    cardTypeValue: '设备指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: 'Early Access',
  },
};

modificationStationCopy.zh = {
  metadata: {
    title: 'Subnautica 2 Modification Station 指南 - 解锁、配方和升级用途',
    description:
      'Subnautica 2 中文 Modification Station 指南：扫描、Data Box / Recipe Data Card、Titanium、Celestine、Copper、Alien Ruins 路线和 Feedback Resonator 前置。',
  },
  eyebrow: 'Subnautica 2 升级工作站',
  title: 'Subnautica 2 Modification Station 指南',
  description:
    'Modification Station 做出来以后，Tadpole 才真正开始像一台可升级载具。别急着裸冲，先把 Alien Ruins 路线、Celestine 和回程安全准备好。',
  quickLabel: '快速结论',
  quickAnswer:
    '当前蓝图资料把 Modification Station 写成 Builder Tool 室内设施，材料是 Titanium x2、Celestine x2、Copper x2。解锁方式可能是扫描工作站，也可能是 Data Box / Recipe Data Card，取决于你走的路线和存档状态。PC Gamer 给出的稳定路线是在 Tadpole Pens 后前往 Alien Ruins Research Base。',
  contentsLabel: '目录',
  routeTitle: 'Modification Station 解锁规划',
  routeSteps: [
    {
      title: '先让 Alien Ruins 路线变安全',
      body: 'PC Gamer 提到 Alien Ruins Research Base 里能找到 Modification Station。出发前带 Tadpole、修理方案和足够的深度余量，不要把它当成普通短途。',
    },
    {
      title: '扫描和 Data Box 都要查',
      body: '蓝图资料列出扫描和 Data Box 解锁路径，玩家攻略则更常指向 Research Base 里的工作站。如果一个方式没触发，先查另一个，不要急着怀疑配方坏了。',
    },
    {
      title: '提前准备 Celestine',
      body: '配方需要 Celestine x2，这才是它真正的卡点。普通基地箱子里通常不会顺手有这类深水材料。',
    },
    {
      title: 'Copper 先留原矿',
      body: 'Copper x2 本身不难，但会被 Copper Wire、电池和模块准备分走。解锁前留一点原始 Copper 更稳。',
    },
    {
      title: '把它放在模块材料旁边',
      body: 'Echo Location、Tadpole Depth Module、Feedback Resonator、Bioscanner 等都会回到这里。Atacamite、Quartz、Celestine、芯片和酸类材料放近一点。',
    },
    {
      title: '缺升级时先查独立解锁',
      body: '建好工作站不代表所有升级都会出现。Feedback Resonator、Depth Module、Echo Location 和 Bioscanner 往往还有自己的扫描、碎片或 Recipe Data Card。',
    },
  ],
  tableTitle: 'Modification Station 检查表',
  tableHeaders: ['需求', '确认什么'],
  tableRows: [
    ['解锁方式', '扫描工作站，或检查 Data Box / Recipe Data Card 路线。'],
    ['建造方式', 'Builder Tool / Habitat Builder 室内设施。'],
    ['Titanium x2', '常见，但基地部件也会用。'],
    ['Celestine x2', '需要按深水路线提前规划。'],
    ['Copper x2', '保留原矿，不要全变成线或电池。'],
    ['模块配方', '工作站里没有显示时，继续查对应升级自己的解锁。'],
  ],
  visualTitle: '升级工作台链路',
  visualItems: [
    {
      label: '解锁',
      value: 'Scan / Box',
      note: '配方缺失时两条路都查。',
    },
    {
      label: '建造',
      value: 'Station',
      note: 'Titanium、Celestine、Copper。',
    },
    {
      label: '升级',
      value: 'Modules',
      note: 'Echo Location、深度、Resonator、Bioscanner。',
    },
    {
      label: '排错',
      value: 'Locks',
      note: '模块缺失通常是独立解锁没完成。',
    },
  ],
  cautionTitle: '别把工作站解锁和模块解锁混在一起',
  cautionBody:
    '建好 Modification Station 不等于所有升级都会出现。很多模块还需要单独扫描、Data Card 或剧情推进。这个点很容易让人误以为页面或游戏出 bug。',
  faqTitle: '常见问题',
  faqs: [
    {
      title: 'Subnautica 2 Modification Station 怎么解锁？',
      body: '当前资料指向扫描 Modification Station，或通过 Data Box / Recipe Data Card 解锁。PC Gamer 给出的路线线索是 Alien Ruins Research Base。',
    },
    {
      title: 'Modification Station 配方是什么？',
      body: '当前蓝图资料写的是 Titanium x2、Celestine x2、Copper x2。',
    },
    {
      title: 'Modification Station 有什么用？',
      body: '它用来制作升级和模块，比如 Echo Location、Tadpole 深度模块、Feedback Resonator 和 Bioscanner 相关升级，但对应模块本身也要先解锁。',
    },
    {
      title: '为什么建好后看不到某个升级？',
      body: '工作站和模块本身可能有独立解锁要求。继续扫描碎片、查 Data Box / Recipe Data Card，并推进目标。',
    },
    {
      title: 'Feedback Resonator 需要 Modification Station 吗？',
      body: '需要。PC Gamer 把 Feedback Resonator 写成 Sonic Resonator 的 Modification Station 升级，并且还需要先扫描对应碎片。',
    },
  ],
  readNextTitle: '继续阅读',
  related: [
    {
      href: Routes.Subnautica2EngineEfficiency,
      label: 'Engine Efficiency 指南',
    },
    { href: Routes.Subnautica2EchoLocation, label: 'Echo Location 指南' },
    { href: Routes.Subnautica2TadpoleDepthModule, label: 'Tadpole 深度模块' },
    {
      href: Routes.Subnautica2FeedbackResonator,
      label: 'Feedback Resonator 指南',
    },
    {
      href: Routes.Subnautica2BioscannerBiomods,
      label: 'Bioscanner 和 Biomods',
    },
    { href: Routes.Subnautica2Celestine, label: 'Celestine 指南' },
    { href: Routes.Subnautica2Tadpole, label: 'Tadpole 载具指南' },
    { href: Routes.Subnautica2Crafting, label: '制作指南' },
  ],
  sourcesTitle: '来源说明',
  sourceBody:
    '2026 年 5 月 27 日核对 Subnautica2.gg、Wand、PC Gamer、KeenGamer 和 GAMES.GG。Subnautica 2 仍在抢先体验，地点数量、Data Box 行为和模块菜单后续可能调整。',
  cardKicker: '升级工作站卡',
  cardBody:
    '扫描 / Data Box 解锁、Alien Ruins 路线、Titanium、Celestine、Copper、模块独立解锁和 Feedback Resonator 前置。',
  cardTypeLabel: '类型',
  cardTypeValue: '设备指南',
  cardVerifiedLabel: '核对时间',
  cardStatusLabel: '状态',
  cardStatusValue: '抢先体验',
};

modificationStationCopy.ja = {
  ...modificationStationCopy.en,
  metadata: {
    title:
      'Subnautica 2 Modification Station ガイド - 解放、レシピ、アップグレード',
    description:
      'Subnautica 2のModification Stationガイド。スキャン、Data Box、Celestine、Copper、Alien Ruinsルート、Feedback Resonator前提を整理します。',
  },
  title: 'Subnautica 2 Modification Station ガイド',
  description:
    'Modification Stationを作ると、Tadpoleのアップグレード計画が一気に進みます。Alien Ruinsルートを安全にしてから向かいましょう。',
  quickLabel: '要点',
  quickAnswer:
    '現在のブループリント情報では、Modification StationはTitanium x2、Celestine x2、Copper x2で作る室内施設です。解放はスキャン、Data Box、Recipe Data Cardのいずれかが関係する場合があります。PC GamerはAlien Ruins Research Baseのルートを示しています。',
  routeTitle: 'Modification Station 解放ルート',
  routeSteps: [
    {
      title: 'Alien Ruinsへ安全に行けるようにする',
      body: 'Tadpole、修理、深度の余裕を用意してからResearch Baseへ向かいます。',
    },
    {
      title: 'スキャンとData Boxを両方確認する',
      body: '片方で出ない場合は、もう片方の解放ルートを確認します。',
    },
    {
      title: 'Celestineを先に準備する',
      body: 'レシピの中ではCelestine x2が一番計画しづらい素材です。',
    },
    {
      title: 'モジュールは別ロックと考える',
      body: 'Stationを作っても、Feedback ResonatorやDepth Moduleなどは個別の解放が必要な場合があります。',
    },
  ],
  tableRows: [
    ['Unlock', 'Scan、Data Box、Recipe Data Cardを確認します。'],
    ['Titanium x2', '基地素材と競合します。'],
    ['Celestine x2', '深いルートで準備します。'],
    ['Copper x2', 'WireやBatteryに使い切らないよう残します。'],
    ['Module locks', '表示されないアップグレードは個別解放を疑います。'],
  ],
  visualItems: [
    { label: 'Unlock', value: 'Scan', note: 'Data Boxも確認します。' },
    { label: 'Build', value: 'Station', note: 'Titanium、Celestine、Copper。' },
    {
      label: 'Upgrade',
      value: 'Modules',
      note: 'Depth、Echo、Resonatorなど。',
    },
  ],
  faqs: [
    {
      title: 'Modification Stationはどう解放する？',
      body: '現在の情報では、スキャン、Data Box、Recipe Data Cardのルートを確認します。',
    },
    {
      title: 'レシピは？',
      body: 'Titanium x2、Celestine x2、Copper x2です。',
    },
    {
      title: 'Feedback Resonatorに必要？',
      body: 'はい。PC GamerはFeedback ResonatorをModification Stationで作るSonic Resonatorアップグレードとして扱っています。',
    },
  ],
  sourceBody:
    '2026年5月27日にSubnautica2.gg、Wand、PC Gamer、KeenGamer、GAMES.GGを確認しました。Early Access中は場所やメニューが変わる可能性があります。',
};

const fallbackCopy = modificationStationCopy.en;

for (const locale of ['de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  modificationStationCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Modification Station Guide',
      description:
        'Guide for Modification Station unlock, recipe, Alien Ruins route, Celestine, Copper, and upgrade crafting.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = modificationStationCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2ModificationStation,
  });
}

export default async function ModificationStationGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = modificationStationCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={WrenchIcon}
      locale={locale}
      pathname={Routes.Subnautica2ModificationStation}
      sources={sharedSources}
    />
  );
}
