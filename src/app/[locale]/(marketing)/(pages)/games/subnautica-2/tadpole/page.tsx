import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { ShipWheelIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type TadpoleCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-23';
const UPDATED_AT = '2026-05-28';

const sharedSources = [
  {
    href: 'https://www.gamespot.com/articles/subnautica-2-tadpole-upgrades-modules-guide/1100-6539941/',
    label: 'GameSpot Tadpole and upgrades guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-tadpole-scan-locations/',
    label: 'PC Gamer Tadpole scan guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-strong-acid-necrolei-cyst-location/',
    label: 'PC Gamer Strong Acid guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-repair-tool-fragment-locations/',
    label: 'PC Gamer Repair Tool guide',
  },
];

const tadpoleCopy: Record<string, TadpoleCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Tadpole Guide - Fragments, Build Prep, Power, and Upgrades',
      description:
        'Unlock the Tadpole vehicle in Subnautica 2 with fragment scanning, Vehicle Fabricator prep, Power Cell planning, repair safety, and upgrade priorities.',
    },
    eyebrow: 'Subnautica 2 vehicle milestone',
    title: 'Subnautica 2 Tadpole Guide',
    description:
      'The Tadpole is the first moment Subnautica 2 starts to feel wider. It gives you range, oxygen safety, and a way to make deeper resource loops feel planned, but it also turns weak power and repair habits into real problems.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Unlock the Tadpole by scanning Tadpole fragments, then build it through the vehicle crafting chain. GameSpot reports that the blueprint requires at least three Tadpole Fragment scans, while PC Gamer emphasizes Power Cell prep, Strong Acid, spare power, and Repair Tool safety before longer trips.',
    fieldNotesTitle: 'Field notes before the first Tadpole trip',
    fieldNotes: [
      {
        title: 'The vehicle is not a license to get lost',
        body: 'The first Tadpole makes the map feel smaller, which is exactly when players start overreaching. Run one known route first before using it for a deep scouting trip.',
      },
      {
        title: 'Power Cell planning comes before range',
        body: 'A vehicle with weak power planning turns into a stranded landmark. Sort the Basic Battery, Strong Acid, and Salt chain before treating the Tadpole as your new home.',
      },
      {
        title: 'Park it where the return is obvious',
        body: 'A bad parking spot wastes the time the vehicle was supposed to save. Use a Beacon, a clean Moonpool route, or a clear terrain cue before leaving it behind.',
      },
    ],
    routeChecklistTitle: 'Tadpole check',
    routeChecklist: [
      'Fragment scans are complete before material hauling.',
      'Vehicle Fabricator and Moonpool support are ready.',
      'Power Cell and repair planning are not afterthoughts.',
      'First trip follows a known route, not a blind deep push.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Tadpole unlock and first-route plan',
    routeSteps: [
      {
        title: 'Scan Tadpole fragments first',
        body: 'GameSpot reports that at least three Tadpole Fragment scans unlock the blueprint. Treat each fragment trip as a scan-first route instead of filling your inventory and forgetting the reason you came.',
      },
      {
        title: 'Prepare the vehicle build chain',
        body: 'Do not start the final build with materials scattered across five lockers. Stage the Vehicle Fabricator route, Moonpool support, and the main vehicle materials before the last haul.',
      },
      {
        title: 'Craft power before the hull',
        body: 'PC Gamer links Tadpole progress to Power Cell production, and Power Cell pushes you back into Basic Battery, Strong Acid, and Salt. Solve that chain before expecting the vehicle to carry exploration.',
      },
      {
        title: 'Bring repair safety',
        body: 'A Tadpole is most valuable when it survives repeated routes. Unlock or stage the Repair Tool plan before using the vehicle as a long-range scout in rough water.',
      },
      {
        title: 'Make the first drive boring',
        body: 'The first trip should teach you handling, parking, power drain, and return timing. Save the brave deep route for the second or third run, once the vehicle feels predictable.',
      },
    ],
    tableTitle: 'Tadpole progression checklist',
    tableHeaders: ['Milestone', 'Why it matters'],
    tableRows: [
      ['Fragment scans', 'Unlocks the Tadpole blueprint.'],
      [
        'Vehicle build chain',
        'Requires base and fabrication support before the vehicle exists.',
      ],
      ['Power Cell prep', 'Vehicle progress depends on the power chain.'],
      [
        'Repair planning',
        'Keeps long-range routes from becoming one-way trips.',
      ],
      [
        'Upgrade planning',
        'Depth and utility modules decide when deeper routes become practical.',
      ],
    ],
    visualTitle: 'Vehicle route card',
    visualItems: [
      {
        label: 'Scan',
        value: '3+',
        note: 'Fragments first, loot second.',
      },
      {
        label: 'Power',
        value: 'Cell',
        note: 'Strong Acid and spare batteries are the real gate.',
      },
      {
        label: 'Drive',
        value: 'Safe',
        note: 'Repair, parking, and return route before range.',
      },
    ],
    cautionTitle: 'Build support before range',
    cautionBody:
      'A vehicle lets you reach danger faster. Bring repair options, power planning, and a clear return route before treating the Tadpole as permission to dive everywhere.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you unlock the Tadpole in Subnautica 2?',
        body: 'Scan Tadpole fragments until the blueprint unlocks, then build it through the vehicle crafting chain. GameSpot currently reports at least three Tadpole Fragment scans for the unlock.',
      },
      {
        title: 'What should you prepare before using the Tadpole?',
        body: 'Prepare Power Cell materials, repair safety, and a clear return route before using the Tadpole for deeper exploration. PC Gamer specifically calls out spare power and Repair Tool planning as useful support.',
      },
      {
        title: 'Why does Power Cell matter for Tadpole?',
        body: 'Current Tadpole route reporting connects the vehicle craft to Power Cell. That means Basic Battery, Strong Acid, and Salt planning can block the vehicle even after fragments are done.',
      },
      {
        title: 'Should I rush deep routes after building Tadpole?',
        body: 'No. Run a known route first, learn the parking and power rhythm, then push deeper once the vehicle has support from Repair Tool, Moonpool, and upgrades.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell Guide' },
      { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid Guide' },
      { href: Routes.Subnautica2RepairTool, label: 'Repair Tool Guide' },
      {
        href: Routes.Subnautica2VehicleFabricator,
        label: 'Vehicle Fabricator Guide',
      },
      { href: Routes.Subnautica2Moonpool, label: 'Moonpool Guide' },
      {
        href: Routes.Subnautica2InsufficientSpaceToDock,
        label: 'Insufficient Space to Dock Fix',
      },
      { href: Routes.Subnautica2TadpoleDock, label: 'Tadpole Dock Guide' },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        label: 'Tadpole Depth Module Guide',
      },
      {
        href: Routes.Subnautica2EngineEfficiency,
        label: 'Engine Efficiency Guide',
      },
      { href: Routes.Subnautica2EchoLocation, label: 'Echo Location Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
      { href: Routes.Subnautica2OxygenDepth, label: 'Oxygen and Depth Guide' },
      { href: Routes.Subnautica2Map, label: 'Map and Biomes' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 28, 2026 against GameSpot Tadpole upgrade reporting, PC Gamer Tadpole scan coverage, PC Gamer Strong Acid route notes, and PC Gamer Repair Tool coverage. Subnautica 2 is in Early Access, so scan counts, recipe chains, and upgrade routes should be rechecked after patches.',
    cardKicker: 'Vehicle milestone card',
    cardBody:
      'Fragment scans, Vehicle Fabricator prep, Power Cell chain, Repair Tool safety, Moonpool support, and first-trip route planning.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Vehicle guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Tadpole 指南 - 碎片扫描、建造准备、电力和升级',
      description:
        'Subnautica 2 中文 Tadpole 指南：整理碎片扫描、Vehicle Fabricator 准备、Power Cell 规划、Repair Tool 安全和升级优先级。',
    },
    eyebrow: 'Subnautica 2 载具节点',
    title: 'Subnautica 2 Tadpole 载具指南',
    description:
      'Tadpole 是 Subnautica 2 前期第一个真正改变路线节奏的载具。它会给你更远的活动范围和氧气安全感，但也会把电力、修理和回程路线这些坏习惯放大。',
    quickLabel: '快速结论',
    quickAnswer:
      '想解锁 Tadpole，需要扫描 Tadpole fragments，然后沿载具制作链建造。GameSpot 当前报道写到蓝图至少需要扫描 3 个 Tadpole Fragment；PC Gamer 则强调长途出发前要准备 Power Cell、Strong Acid、备用电力和 Repair Tool。',
    fieldNotesTitle: '第一次开 Tadpole 前的笔记',
    fieldNotes: [
      {
        title: '载具不是迷路许可证',
        body: '第一台 Tadpole 会让地图看起来小很多，也最容易让人游过头。先跑一条熟路，再拿它去做深水侦察。',
      },
      {
        title: '先处理 Power Cell，再谈续航',
        body: '电力规划差的载具，只是停在远处的地标。先把 Basic Battery、Strong Acid 和 Salt 链条理顺，再把 Tadpole 当成主要交通工具。',
      },
      {
        title: '停车点要一眼能回去',
        body: '停错地方会把载具省下来的时间全浪费掉。离开 Tadpole 前，用 Beacon、Moonpool 路线或明显地形记住回程。',
      },
    ],
    routeChecklistTitle: 'Tadpole 出发前检查',
    routeChecklist: [
      '碎片扫描完成后，再开始集中搬材料。',
      'Vehicle Fabricator 和 Moonpool 支撑路线已经准备好。',
      'Power Cell 和 Repair Tool 不是临时想起来的。',
      '第一次试驾走熟路，不要直接盲冲深水。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Tadpole 解锁与第一趟路线',
    routeSteps: [
      {
        title: '先扫描 Tadpole fragments',
        body: 'GameSpot 当前写到至少扫描 3 个 Tadpole Fragment 才能解锁蓝图。每次找碎片都先当扫描任务处理，不要装满背包后忘了自己来干嘛。',
      },
      {
        title: '提前整理载具制作链',
        body: '最后建造前，别让材料散在五个箱子里。Vehicle Fabricator、Moonpool 支撑和主要载具材料最好先放到同一条路线里。',
      },
      {
        title: '先做电力，再做外壳',
        body: 'PC Gamer 把 Tadpole 推进和 Power Cell 生产联系在一起，而 Power Cell 又会倒回 Basic Battery、Strong Acid 和 Salt。先解决这条链，载具才不会卡在最后一步。',
      },
      {
        title: '带上修理安全感',
        body: 'Tadpole 最值钱的地方不是第一次开出去，而是能反复安全跑路线。拿它去危险水域前，先把 Repair Tool 规划好。',
      },
      {
        title: '第一次试驾越无聊越好',
        body: '第一趟主要是熟悉操控、停车、电量消耗和回程时间。真正的深水路线留到第二三趟，等载具节奏稳定后再做。',
      },
    ],
    tableTitle: 'Tadpole 推进检查表',
    tableHeaders: ['节点', '为什么重要'],
    tableRows: [
      ['碎片扫描', '用于解锁 Tadpole 蓝图。'],
      ['载具制作链', '建造前需要基地和制作设备支撑。'],
      ['Power Cell 准备', '载具推进会卡在电力材料链上。'],
      ['修理规划', '避免远程路线变成单程旅行。'],
      ['升级规划', '深度和功能模块决定何时适合跑更深路线。'],
    ],
    visualTitle: '载具路线卡',
    visualItems: [
      {
        label: '扫描',
        value: '3+',
        note: '先碎片，后搜刮。',
      },
      {
        label: '电力',
        value: 'Cell',
        note: 'Strong Acid 和备用电池是真正门槛。',
      },
      {
        label: '驾驶',
        value: 'Safe',
        note: '修理、停车和回程比距离更重要。',
      },
    ],
    cautionTitle: '先做支撑，再谈远航',
    cautionBody:
      '载具会让你更快抵达危险区域。把修理、电力和回程路线准备好，再把 Tadpole 当成深水通行证。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Tadpole 怎么解锁？',
        body: '扫描 Tadpole fragments，直到蓝图解锁，然后沿载具制作链建造。GameSpot 当前报道写到至少需要 3 个 Tadpole Fragment 扫描。',
      },
      {
        title: '使用 Tadpole 前要准备什么？',
        body: '先准备 Power Cell 材料、修理安全和明确回程路线。PC Gamer 也提醒玩家准备备用电力和 Repair Tool 会更稳。',
      },
      {
        title: '为什么 Tadpole 会卡 Power Cell？',
        body: '当前 Tadpole 路线资料把载具制作和 Power Cell 连接在一起，所以 Basic Battery、Strong Acid 和 Salt 都可能在碎片完成后继续卡住你。',
      },
      {
        title: '刚造出 Tadpole 要不要立刻冲深水？',
        body: '不建议。先跑熟路，熟悉停车、电力和回程节奏，再配合 Repair Tool、Moonpool 和升级模块推进更深路线。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell 指南' },
      { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid 指南' },
      { href: Routes.Subnautica2RepairTool, label: 'Repair Tool 指南' },
      {
        href: Routes.Subnautica2VehicleFabricator,
        label: 'Vehicle Fabricator 指南',
      },
      { href: Routes.Subnautica2Moonpool, label: 'Moonpool 指南' },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        label: 'Tadpole Depth Module 指南',
      },
      { href: Routes.Subnautica2AirTank, label: '气瓶和氧气' },
      { href: Routes.Subnautica2OxygenDepth, label: '氧气与深度指南' },
      { href: Routes.Subnautica2Map, label: '地图和生物群系' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 28 日核对 GameSpot 的 Tadpole 升级资料、PC Gamer 的 Tadpole 扫描路线、Strong Acid 路线和 Repair Tool 资料。Subnautica 2 仍在抢先体验，扫描数量、材料链和升级路线都可能随补丁调整。',
    cardKicker: '载具节点卡',
    cardBody:
      '碎片扫描、Vehicle Fabricator 准备、Power Cell 链、Repair Tool 安全、Moonpool 支撑和第一次试驾路线。',
    cardTypeLabel: '类型',
    cardTypeValue: '载具指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

tadpoleCopy.ja = {
  metadata: {
    title: 'Subnautica 2 Tadpole ガイド - 断片、Power Cell、修理、初回ルート',
    description:
      'Subnautica 2のTadpoleガイド。断片スキャン、Vehicle Fabricator、Power Cell、Repair Tool、Moonpool、初回運転ルートを整理します。',
  },
  eyebrow: 'Subnautica 2 乗り物マイルストーン',
  title: 'Subnautica 2 Tadpole ガイド',
  description:
    'Tadpoleを作ると、Subnautica 2の移動範囲が一気に広がります。ただし、電力、修理、帰り道の準備が甘いと、その広さがそのまま迷子や立ち往生につながります。',
  quickLabel: '要点',
  quickAnswer:
    'Tadpoleは断片をスキャンしてブループリントを解除し、乗り物クラフトチェーンで作ります。GameSpotは少なくとも3個のTadpole Fragmentスキャンが必要と報じています。PC Gamerの現行ガイドでは、長距離に出る前のPower Cell、Strong Acid、予備電力、Repair Tool準備が重要です。',
  fieldNotesTitle: '初回Tadpole前のメモ',
  fieldNotes: [
    {
      title: '乗り物は迷子の許可証ではない',
      body: '最初のTadpoleは地図を小さく感じさせます。だからこそ、いきなり深い偵察に使うより、まず知っているルートを一往復して挙動を覚えた方が安全です。',
    },
    {
      title: '航続距離より先にPower Cell',
      body: '電力計画が弱い乗り物は、遠くに置き去りにした目印になります。Basic Battery、Strong Acid、Saltの流れを先に片付けましょう。',
    },
    {
      title: '戻りやすい場所に停める',
      body: '悪い駐車場所は、乗り物で節約した時間をすぐ消します。Beacon、Moonpoolへの線、または分かりやすい地形を使って帰り道を残します。',
    },
  ],
  routeChecklistTitle: 'Tadpoleチェック',
  routeChecklist: [
    '断片スキャンを終えてから素材運びに入る。',
    'Vehicle FabricatorとMoonpool周りの導線を用意した。',
    'Power CellとRepair Toolを後回しにしていない。',
    '初回運転は知らない深場ではなく、分かっているルートで試す。',
  ],
  contentsLabel: '目次',
  routeTitle: 'Tadpole解除と初回ルート',
  routeSteps: [
    {
      title: 'まずTadpole Fragmentをスキャンする',
      body: 'GameSpotは、ブループリント解除に少なくとも3個のTadpole Fragmentスキャンが必要と報じています。各断片探しは、荷物集めではなくスキャン優先の泳ぎとして扱いましょう。',
    },
    {
      title: '乗り物クラフトチェーンをまとめる',
      body: '最後の建造時に素材が5つのロッカーへ散っていると面倒です。Vehicle Fabricator、Moonpool支援、主な乗り物素材を同じ流れに置いておきます。',
    },
    {
      title: '船体より先に電力を作る',
      body: 'PC GamerはTadpole進行をPower Cell作成と結びつけています。Power CellはBasic Battery、Strong Acid、Saltへ戻るので、この鎖を先に解くと最後で詰まりません。',
    },
    {
      title: '修理の安全策を持つ',
      body: 'Tadpoleの価値は、一回だけ遠くへ行くことではなく、同じルートを安全に繰り返せることです。荒れた水域へ出す前にRepair Toolの準備を進めます。',
    },
    {
      title: '初回運転は退屈なくらいでいい',
      body: '最初の一走は、操作、駐車、電力消費、帰りの時間を覚えるためのものです。深いルートは、乗り物の癖が分かってからで十分です。',
    },
  ],
  tableTitle: 'Tadpole進行チェックリスト',
  tableHeaders: ['節目', 'なぜ大事か'],
  tableRows: [
    ['断片スキャン', 'Tadpoleのブループリントを解除します。'],
    ['乗り物クラフトチェーン', '建造前に基地と制作設備の支援が必要です。'],
    ['Power Cell準備', '乗り物進行は電力素材で止まりやすいです。'],
    ['修理計画', '長距離ルートを片道旅行にしないための保険です。'],
    [
      'アップグレード計画',
      '深度と便利モジュールが、より深いルートへ行く時期を決めます。',
    ],
  ],
  visualTitle: '乗り物ルートカード',
  visualItems: [
    {
      label: 'Scan',
      value: '3+',
      note: 'まず断片、素材集めはその後。',
    },
    {
      label: 'Power',
      value: 'Cell',
      note: 'Strong Acidと予備電力が本当の門番です。',
    },
    {
      label: 'Drive',
      value: 'Safe',
      note: '距離より修理、駐車、帰り道を優先します。',
    },
  ],
  cautionTitle: '遠出の前に支援を作る',
  cautionBody:
    '乗り物は危険地帯へ速く行ける道具でもあります。Tadpoleを深場への通行証として扱う前に、修理、電力、帰り道を用意してください。',
  faqTitle: 'FAQ',
  faqs: [
    {
      title: 'Subnautica 2でTadpoleはどう解除する？',
      body: 'Tadpole Fragmentをスキャンしてブループリントを解除し、乗り物クラフトチェーンで建造します。GameSpotは少なくとも3個のFragmentスキャンが必要と報じています。',
    },
    {
      title: 'Tadpoleに乗る前に何を準備する？',
      body: 'Power Cell素材、Repair Tool、分かりやすい帰り道を用意します。PC Gamerも予備電力と修理準備を長距離ルートの支えとして扱っています。',
    },
    {
      title: 'なぜPower Cellで詰まりやすい？',
      body: '現在のTadpoleルート情報では、車両クラフトがPower Cellにつながります。つまり断片を終えても、Basic Battery、Strong Acid、Saltで止まることがあります。',
    },
    {
      title: '作ったらすぐ深場へ行っていい？',
      body: 'おすすめしません。まず知っているルートで駐車、電力、戻り方を覚え、Repair Tool、Moonpool、アップグレードの支援を足してから深く進みましょう。',
    },
  ],
  readNextTitle: '次に読む',
  related: [
    { href: Routes.Subnautica2PowerCell, label: 'Power Cell ガイド' },
    { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid ガイド' },
    { href: Routes.Subnautica2RepairTool, label: 'Repair Tool ガイド' },
    {
      href: Routes.Subnautica2VehicleFabricator,
      label: 'Vehicle Fabricator ガイド',
    },
    { href: Routes.Subnautica2Moonpool, label: 'Moonpool ガイド' },
    { href: Routes.Subnautica2TadpoleDock, label: 'Tadpole Dock ガイド' },
    {
      href: Routes.Subnautica2TadpoleDepthModule,
      label: 'Tadpole Depth Module ガイド',
    },
    {
      href: Routes.Subnautica2EngineEfficiency,
      label: 'Engine Efficiency ガイド',
    },
    { href: Routes.Subnautica2EchoLocation, label: 'Echo Location ガイド' },
    { href: Routes.Subnautica2AirTank, label: 'Air TankとO2' },
    { href: Routes.Subnautica2OxygenDepth, label: '酸素と深度ガイド' },
    { href: Routes.Subnautica2Map, label: 'マップとバイオーム' },
    { href: Routes.Subnautica2Crafting, label: 'クラフトガイド' },
  ],
  sourcesTitle: 'ソースメモ',
  sourceBody:
    '2026年5月28日にGameSpotのTadpoleアップグレード記事、PC GamerのTadpoleスキャン、Strong Acid、Repair Tool記事を確認しました。Subnautica 2はEarly Access中なので、スキャン数、素材チェーン、アップグレードルートはパッチ後に再確認してください。',
  cardKicker: '乗り物マイルストーンカード',
  cardBody:
    '断片スキャン、Vehicle Fabricator、Power Cell、Repair Tool、Moonpool支援、初回ルート計画。',
  cardTypeLabel: '種類',
  cardTypeValue: '乗り物ガイド',
  cardVerifiedLabel: '確認日',
  cardStatusLabel: '状態',
  cardStatusValue: 'Early Access',
};

const fallbackLocaleAliases = {
  de: {
    title: 'Subnautica 2 Tadpole Guide',
    description:
      'Guide for Tadpole fragments, vehicle crafting, Power Cell prep, repair safety, and upgrades.',
  },
  fr: {
    title: 'Subnautica 2 Tadpole Guide',
    description:
      'Guide Tadpole: fragments, craft du vehicule, Power Cell, reparation et modules.',
  },
  'pt-BR': {
    title: 'Subnautica 2 Tadpole Guide',
    description:
      'Guia do Tadpole com fragmentos, Power Cell, reparo, Moonpool e upgrades.',
  },
  'es-419': {
    title: 'Subnautica 2 Tadpole Guide',
    description:
      'Guia del Tadpole: fragmentos, Power Cell, reparacion, Moonpool y mejoras.',
  },
  ko: {
    title: 'Subnautica 2 Tadpole Guide',
    description:
      'Tadpole fragments, vehicle crafting, Power Cell prep, repair safety, and upgrades.',
  },
  ru: {
    title: 'Subnautica 2 Tadpole Guide',
    description:
      'Guide for Tadpole fragments, vehicle crafting, Power Cell prep, repair safety, and upgrades.',
  },
} satisfies Record<string, { title: string; description: string }>;

function getCopy(locale: Locale): TadpoleCopy {
  if (tadpoleCopy[locale]) {
    return tadpoleCopy[locale];
  }

  const fallback =
    fallbackLocaleAliases[locale as keyof typeof fallbackLocaleAliases] ??
    fallbackLocaleAliases.de;

  return {
    ...tadpoleCopy.en,
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
    pathname: Routes.Subnautica2Tadpole,
  });
}

export default async function TadpoleGuidePage({
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
      icon={ShipWheelIcon}
      locale={locale}
      pathname={Routes.Subnautica2Tadpole}
      sources={sharedSources}
    />
  );
}
