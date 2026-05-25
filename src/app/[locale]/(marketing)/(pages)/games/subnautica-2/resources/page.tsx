import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { BoxesIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type ResourcesCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const sharedSources = [
  {
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/',
    label: 'Official Steam page',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-atacamite-location/',
    label: 'PC Gamer Atacamite guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-troilite-location/',
    label: 'PC Gamer Troilite guide',
  },
  {
    href: 'https://www.gamesradar.com/games/survival/subnautica-2-adding-better-callouts-for-silver-in-first-patch-as-players-struggle-to-find-any/',
    label: 'GamesRadar Silver patch reporting',
  },
];

const resourcesCopy: Record<string, ResourcesCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Resources Guide - Materials and Farming Routes',
      description:
        'A spoiler-light Subnautica 2 resources guide covering early materials, Copper, Silver, oxygen bottlenecks, rare materials, and safe farming routes.',
    },
    eyebrow: 'Subnautica 2 material index',
    title: 'Subnautica 2 Resources Guide',
    description:
      'Use this as the route board before a farming run. Start with the materials that unlock tools and oxygen, then worry about the rare stuff once your path home is boring.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'For the first few sessions, treat Copper, Silver, Scanner progress, oxygen upgrades, and basic storage as the spine of your resource plan. Do not chase every material in one dive. Pick one goal, start from a landmark, return early, and repeat the route until it feels routine.',
    contentsLabel: 'Contents',
    routeTitle: 'How to plan a resource run',
    routeSteps: [
      {
        title: 'Choose one material goal',
        body: 'A Copper run, a Silver check, and a scan sweep are different trips. Mixing them too early usually means a messy inventory and no clear route to repeat.',
      },
      {
        title: 'Start from a landmark',
        body: 'Use the Lifepod, a base hatch, a cave mouth, or a visible terrain shape. If you cannot describe the starting point, the route is not ready for co-op or a written guide.',
      },
      {
        title: 'Bank progress before greed',
        body: 'Return with partial stacks, new scans, or one useful recipe solved. A safe half-run is still progress. A lost full inventory is just a lesson you paid for.',
      },
      {
        title: 'Turn good loops into pages',
        body: 'Once a route works twice, link it to the specific guide: Copper, Silver, Air Tank, Scanner, or a later rare-material page. That is how this hub stays useful after patches.',
      },
    ],
    visualTitle: 'Resource route board',
    visualItems: [
      {
        label: 'Early',
        value: 'Copper + O2',
        note: 'Batteries, Scanner setup, and safer dives come first.',
      },
      {
        label: 'Middle',
        value: 'Silver + scans',
        note: 'Silver and blueprints stop many first-session routes.',
      },
      {
        label: 'Later',
        value: 'Rare chain',
        note: 'Atacamite, Troilite, and processed materials need verified routes.',
      },
    ],
    tableTitle: 'Resource priority table',
    tableHeaders: ['Resource group', 'Why it matters'],
    tableRows: [
      [
        'Copper',
        'Early electronics, batteries, and the tool chain that lets you stop guessing.',
      ],
      [
        'Silver',
        'A common early bottleneck for oxygen and electronics, especially before routes are familiar.',
      ],
      [
        'Titanium and salvage',
        'Storage, base parts, and general building. Useful, but easy to overfill on.',
      ],
      [
        'Oxygen materials',
        'Anything that helps Air Tanks or survival margin is worth solving before deep routes.',
      ],
      [
        'Rare materials',
        'Atacamite, Troilite, and similar late-route items should wait until the route is checked in the current build.',
      ],
    ],
    cautionTitle: 'Do not farm like a shopping list',
    cautionBody:
      'The bad version of a resource run is “grab everything and hope it helps.” The better version is boring: one target, one loop, one backup oxygen plan, one reason to come back.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'What resources should I collect first in Subnautica 2?',
        body: 'Prioritize Copper, Scanner progress, oxygen-related materials, and enough basic construction material for storage. Those make later resource trips safer.',
      },
      {
        title: 'Should I stockpile every material?',
        body: 'No. Keep useful basics, but do not fill storage with material you cannot yet spend. Early storage space is part of the route plan.',
      },
      {
        title: 'Are rare material locations stable?',
        body: 'Not completely. Subnautica 2 is in Early Access, so rare-material routes should be checked after patches before being treated as fixed.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Beginner, label: 'Beginner Route' },
      { href: Routes.Subnautica2Copper, label: 'Copper Location' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium Location Guide' },
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery Guide' },
      {
        href: Routes.Subnautica2AcidicRaionPouch,
        label: 'Acidic Raion Pouch Guide',
      },
      { href: Routes.Subnautica2MildAcid, label: 'Mild Acid Guide' },
      { href: Routes.Subnautica2Processor, label: 'Processor Guide' },
      { href: Routes.Subnautica2Biolab, label: 'Biolab Guide' },
      { href: Routes.Subnautica2EchoLocation, label: 'Echo Location Guide' },
      {
        href: Routes.Subnautica2ModificationStation,
        label: 'Modification Station Guide',
      },
      {
        href: Routes.Subnautica2EngineEfficiency,
        label: 'Engine Efficiency Guide',
      },
      { href: Routes.Subnautica2CopperWire, label: 'Copper Wire Guide' },
      {
        href: Routes.Subnautica2HabitatBuilder,
        label: 'Habitat Builder Guide',
      },
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker Guide' },
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather Guide' },
      {
        href: Routes.Subnautica2ScannerStation,
        label: 'Scanner Station Guide',
      },
      { href: Routes.Subnautica2Beacon, label: 'Beacon Guide' },
      { href: Routes.Subnautica2RepairTool, label: 'Repair Tool Guide' },
      { href: Routes.Subnautica2Sulfur, label: 'Sulfur Location Guide' },
      { href: Routes.Subnautica2Quartz, label: 'Quartz Location Guide' },
      { href: Routes.Subnautica2Glass, label: 'Glass Recipe Guide' },
      { href: Routes.Subnautica2Lithium, label: 'Lithium Location Guide' },
      { href: Routes.Subnautica2Lead, label: 'Lead Location Guide' },
      { href: Routes.Subnautica2Gold, label: 'Gold Location Guide' },
      { href: Routes.Subnautica2Salt, label: 'Salt Location Guide' },
      { href: Routes.Subnautica2MetalSalvage, label: 'Metal Salvage Guide' },
      { href: Routes.Subnautica2FiberMesh, label: 'Fiber Mesh Guide' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
      { href: Routes.Subnautica2WiringKit, label: 'Wiring Kit Guide' },
      { href: Routes.Subnautica2SystemChip, label: 'System Chip Guide' },
      {
        href: Routes.Subnautica2BioscannerBiomods,
        label: 'Bioscanner and Biomods',
      },
      {
        href: Routes.Subnautica2SonicResonator,
        label: 'Sonic Resonator Guide',
      },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal Guide',
      },
      {
        href: Routes.Subnautica2Strontium,
        label: 'Strontium Guide',
      },
      {
        href: Routes.Subnautica2Celestine,
        label: 'Celestine Guide',
      },
      {
        href: Routes.Subnautica2CreatureEnamel,
        label: 'Creature Enamel Guide',
      },
      {
        href: Routes.Subnautica2EnameledGlass,
        label: 'Enameled Glass Guide',
      },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        label: 'Tadpole Depth Module Guide',
      },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 23, 2026 against the Steam Early Access listing plus current reporting on Silver, Atacamite, and Troilite. Exact routes can shift after patches.',
    cardKicker: 'Material hub card',
    cardBody:
      'A route-first resource hub for Copper, Silver, oxygen, Scanner progress, storage, and later rare materials.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Resource hub',
    cardVerifiedLabel: 'Verified',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 资源指南 - 材料优先级与采集路线',
      description:
        'Subnautica 2 中文资源指南，整理前期材料、Copper、Silver、氧气卡点、稀有材料和安全采集路线。',
    },
    eyebrow: 'Subnautica 2 材料索引',
    title: 'Subnautica 2 资源指南',
    description:
      '这页更像下水前的路线板。先解决工具、氧气和储物需要的材料，等回程路线已经很熟了，再去碰稀有材料。',
    quickLabel: '快速答案',
    quickAnswer:
      '前几局先把 Copper、Silver、Scanner 进度、氧气升级和基础储物当成资源规划的主线。不要一趟潜水什么都想拿。每次只定一个目标，从清楚的地标出发，早点回家，能稳定重复以后再扩大路线。',
    contentsLabel: '目录',
    routeTitle: '怎么规划一次采集',
    routeSteps: [
      {
        title: '只选一个材料目标',
        body: 'Copper 路线、Silver 检查点、碎片扫描，本来就是三种不同的下水任务。太早混在一起，背包会乱，路线也很难复盘。',
      },
      {
        title: '从地标开始',
        body: 'Lifepod、基地舱门、洞口、明显地形都可以。一个起点说不清楚，这条路线就还不适合写成攻略，也不适合联机分工。',
      },
      {
        title: '先存进度，再贪材料',
        body: '半包材料、新扫到的蓝图、解决一个配方，都算进度。满包迷路丢掉，只能算交学费。',
      },
      {
        title: '把稳定路线变成单页攻略',
        body: '一条路线跑通两次以后，再把它链接到 Copper、Silver、气瓶、Scanner 或后期稀有材料页面。这样补丁以后也好回头更新。',
      },
    ],
    visualTitle: '资源路线板',
    visualItems: [
      {
        label: '前期',
        value: 'Copper + 氧气',
        note: '电池、Scanner 和更安全的潜水优先。',
      },
      {
        label: '中段',
        value: 'Silver + 扫描',
        note: '银和蓝图会卡住很多第一局路线。',
      },
      {
        label: '后期',
        value: '稀有链条',
        note: 'Atacamite、Troilite 和加工材料要等路线核对后再写死。',
      },
    ],
    tableTitle: '资源优先级表',
    tableHeaders: ['资源组', '为什么重要'],
    tableRows: [
      ['Copper', '电池、早期电子件和工具链都绕不开它。'],
      ['Silver', '氧气和电子制作常见卡点，没熟悉路线前尤其容易缺。'],
      [
        'Titanium 与 salvage',
        '储物、基地组件和常规建造需要，但也很容易捡过量。',
      ],
      ['氧气相关材料', '能帮助气瓶或提高安全余量的材料，应该早于深处路线。'],
      [
        '稀有材料',
        'Atacamite、Troilite 这类后期材料，要按当前版本重新核对路线。',
      ],
    ],
    cautionTitle: '不要像逛超市一样采集',
    cautionBody:
      '最差的采集方式是“看到什么拿什么”。更稳的是一个目标、一条路线、一个备用氧气方案、一个回家的理由。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 前期先收集什么资源？',
        body: '先看 Copper、Scanner 进度、氧气相关材料，以及够用的基础建造材料。它们会让后面的采集更安全。',
      },
      {
        title: '需要囤所有材料吗？',
        body: '不需要。基础材料可以留一点，但不要把仓库塞满暂时用不上的东西。前期储物空间本身也是规划的一部分。',
      },
      {
        title: '稀有材料位置稳定吗？',
        body: '不完全稳定。Subnautica 2 还是抢先体验，稀有材料路线应该在补丁后重新核对。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Beginner, label: '新手路线' },
      { href: Routes.Subnautica2Copper, label: 'Copper 位置' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium 位置指南' },
      {
        href: Routes.Subnautica2AcidicRaionPouch,
        label: 'Acidic Raion Pouch Guide',
      },
      { href: Routes.Subnautica2MildAcid, label: 'Mild Acid Guide' },
      { href: Routes.Subnautica2Processor, label: 'Processor Guide' },
      { href: Routes.Subnautica2Biolab, label: 'Biolab Guide' },
      { href: Routes.Subnautica2EchoLocation, label: 'Echo Location Guide' },
      {
        href: Routes.Subnautica2ModificationStation,
        label: 'Modification Station Guide',
      },
      {
        href: Routes.Subnautica2EngineEfficiency,
        label: 'Engine Efficiency Guide',
      },
      { href: Routes.Subnautica2Silver, label: 'Silver 位置' },
      { href: Routes.Subnautica2AirTank, label: '气瓶和氧气' },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker 指南' },
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather 指南' },
      { href: Routes.Subnautica2ScannerStation, label: 'Scanner Station 指南' },
      { href: Routes.Subnautica2Beacon, label: 'Beacon 指南' },
      { href: Routes.Subnautica2RepairTool, label: 'Repair Tool 指南' },
      { href: Routes.Subnautica2Sulfur, label: 'Sulfur Location Guide' },
      { href: Routes.Subnautica2Quartz, label: 'Quartz Location Guide' },
      { href: Routes.Subnautica2Glass, label: 'Glass 配方指南' },
      { href: Routes.Subnautica2Lithium, label: 'Lithium Location Guide' },
      { href: Routes.Subnautica2Lead, label: 'Lead Location Guide' },
      { href: Routes.Subnautica2Gold, label: 'Gold Location Guide' },
      { href: Routes.Subnautica2Salt, label: 'Salt Location Guide' },
      { href: Routes.Subnautica2MetalSalvage, label: 'Metal Salvage 指南' },
      { href: Routes.Subnautica2FiberMesh, label: 'Fiber Mesh 指南' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner 攻略' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 23 日核对 Steam 抢先体验页面，以及当前关于 Silver、Atacamite、Troilite 的报道。具体路线可能随补丁变化。',
    cardKicker: '材料中心卡',
    cardBody:
      '围绕路线整理 Copper、Silver、氧气、Scanner、储物和后期稀有材料。',
    cardTypeLabel: '类型',
    cardTypeValue: '资源中心',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
  ru: {
    metadata: {
      title: 'Subnautica 2 ресурсы - материалы и маршруты фарма',
      description:
        'Русский гид по ресурсам Subnautica 2: ранние материалы, Copper, Silver, кислород, редкие материалы и безопасные маршруты.',
    },
    eyebrow: 'Индекс материалов Subnautica 2',
    title: 'Subnautica 2: ресурсы',
    description:
      'Открывайте эту страницу перед фармом. Сначала инструменты, кислород и хранение, а редкие материалы лучше трогать после понятной дороги домой.',
    quickLabel: 'Короткий ответ',
    quickAnswer:
      'В первые сессии держите фокус на Copper, Silver, прогрессе Scanner, улучшениях кислорода и базовом хранении. Не пытайтесь собрать все за один заплыв. Одна цель, заметный ориентир, ранний возврат и повторяемый маршрут.',
    contentsLabel: 'Содержание',
    routeTitle: 'Как планировать фарм',
    routeSteps: [
      {
        title: 'Выберите один материал',
        body: 'Маршрут за Copper, проверка Silver и сканирование фрагментов обычно требуют разных заплывов. Если смешать все сразу, маршрут трудно повторить.',
      },
      {
        title: 'Стартуйте от ориентира',
        body: 'Lifepod, люк базы, вход в пещеру или заметный рельеф. Если начало нельзя описать, маршрут еще сырой.',
      },
      {
        title: 'Сохраняйте прогресс раньше жадности',
        body: 'Неполный инвентарь, новый скан или закрытый рецепт уже полезны. Полный рюкзак, потерянный из-за кислорода, пользы не дает.',
      },
      {
        title: 'Хорошие круги превращайте в страницы',
        body: 'Если маршрут сработал дважды, связывайте его с гайдом по Copper, Silver, Air Tank, Scanner или редким материалам.',
      },
    ],
    visualTitle: 'Доска маршрутов',
    visualItems: [
      {
        label: 'Рано',
        value: 'Copper + O2',
        note: 'Батареи, Scanner и запас кислорода идут первыми.',
      },
      {
        label: 'Дальше',
        value: 'Silver + scans',
        note: 'Silver и чертежи часто тормозят ранний прогресс.',
      },
      {
        label: 'Позже',
        value: 'Rare chain',
        note: 'Atacamite, Troilite и обработанные материалы требуют проверки.',
      },
    ],
    tableTitle: 'Приоритет ресурсов',
    tableHeaders: ['Группа', 'Зачем нужна'],
    tableRows: [
      ['Copper', 'Батареи, ранняя электроника и инструменты.'],
      ['Silver', 'Частый ранний блокер для кислорода и электроники.'],
      [
        'Titanium и salvage',
        'Хранение, база и строительство, но легко набрать лишнего.',
      ],
      [
        'Материалы для O2',
        'Все, что дает запас кислорода, важнее дальних маршрутов.',
      ],
      [
        'Редкие материалы',
        'Atacamite и Troilite лучше проверять после патчей.',
      ],
    ],
    cautionTitle: 'Не фармите как список покупок',
    cautionBody:
      'Плохой фарм звучит так: “беру все, вдруг пригодится”. Хороший фарм скучнее: одна цель, один круг, запас кислорода и понятный возврат.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Какие ресурсы собирать первыми?',
        body: 'Copper, прогресс Scanner, материалы для кислорода и немного базовых строительных материалов для хранения.',
      },
      {
        title: 'Нужно ли копить все материалы?',
        body: 'Нет. Держите полезные основы, но не забивайте хранилище тем, что пока не можете потратить.',
      },
      {
        title: 'Редкие материалы уже стабильны?',
        body: 'Не полностью. Это Early Access, поэтому маршруты для редких материалов стоит проверять после патчей.',
      },
    ],
    readNextTitle: 'Дальше',
    related: [
      { href: Routes.Subnautica2Beginner, label: 'Маршрут новичка' },
      { href: Routes.Subnautica2Copper, label: 'Где найти Copper' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium Location Guide' },
      { href: Routes.Subnautica2Glass, label: 'Glass Recipe Guide' },
      { href: Routes.Subnautica2Silver, label: 'Где найти Silver' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank и O2' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner' },
    ],
    sourcesTitle: 'Источники',
    sourceBody:
      'Проверено 23 мая 2026 по Steam Early Access и текущим материалам про Silver, Atacamite и Troilite. Маршруты могут меняться.',
    cardKicker: 'Material hub card',
    cardBody:
      'Маршрутный центр для Copper, Silver, O2, Scanner, хранения и редких материалов.',
    cardTypeLabel: 'Тип',
    cardTypeValue: 'Хаб ресурсов',
    cardVerifiedLabel: 'Проверено',
    cardStatusLabel: 'Статус',
    cardStatusValue: 'Early Access',
  },
  de: {
    metadata: {
      title: 'Subnautica 2 Ressourcen - Materialien und Farming-Routen',
      description:
        'Deutscher Ressourcen-Guide für Subnautica 2 mit Copper, Silver, O2, Scanner, frühen Materialien und seltenen Routen.',
    },
    eyebrow: 'Subnautica 2 Materialindex',
    title: 'Subnautica 2 Ressourcen-Guide',
    description:
      'Nutze diese Seite vor einem Farm-Lauf. Erst Tools, Sauerstoff und Lager lösen. Seltene Materialien kommen später, wenn der Rückweg sitzt.',
    quickLabel: 'Kurzantwort',
    quickAnswer:
      'In den ersten Sessions zählen Copper, Silver, Scanner-Fortschritt, O2-Upgrades und einfache Lagerung. Sammle nicht alles in einem Tauchgang. Ein Ziel, ein klarer Startpunkt, frühe Rückkehr, dann die Route wiederholen.',
    contentsLabel: 'Inhalt',
    routeTitle: 'Eine Ressourcenroute planen',
    routeSteps: [
      {
        title: 'Ein Materialziel wählen',
        body: 'Copper, Silver und Fragment-Scans sind eigene Läufe. Zu früh gemischt wird daraus nur ein chaotisches Inventar.',
      },
      {
        title: 'Mit Landmarke starten',
        body: 'Lifepod, Basisluke, Höhleneingang oder auffälliges Gelände. Kannst du den Start nicht beschreiben, ist die Route noch nicht reif.',
      },
      {
        title: 'Fortschritt vor Gier sichern',
        body: 'Halbe Stapel, neue Scans oder ein gelöstes Rezept reichen. Ein volles Inventar bringt nichts, wenn es unten bleibt.',
      },
      {
        title: 'Gute Loops verlinken',
        body: 'Wenn eine Route zweimal funktioniert, gehört sie auf die passende Seite: Copper, Silver, Air Tank, Scanner oder seltene Materialien.',
      },
    ],
    visualTitle: 'Routenbrett',
    visualItems: [
      {
        label: 'Früh',
        value: 'Copper + O2',
        note: 'Batterien, Scanner und sichere Tauchgänge zuerst.',
      },
      {
        label: 'Mitte',
        value: 'Silver + Scans',
        note: 'Silver und Blaupausen stoppen viele frühe Routen.',
      },
      {
        label: 'Später',
        value: 'Rare chain',
        note: 'Atacamite, Troilite und verarbeitete Stoffe brauchen Prüfung.',
      },
    ],
    tableTitle: 'Ressourcenpriorität',
    tableHeaders: ['Gruppe', 'Warum wichtig'],
    tableRows: [
      ['Copper', 'Batterien, frühe Elektronik und die erste Tool-Kette.'],
      ['Silver', 'Häufiger Engpass für O2 und Elektronik.'],
      [
        'Titanium und salvage',
        'Lager, Basisbau und Bauteile, aber schnell zu viel davon.',
      ],
      [
        'O2-Materialien',
        'Alles für Air Tanks oder Sicherheitsreserve schlägt tiefe Routen.',
      ],
      [
        'Seltene Materialien',
        'Atacamite und Troilite nach Patches neu prüfen.',
      ],
    ],
    cautionTitle: 'Farm nicht nach Einkaufszettel',
    cautionBody:
      'Die schlechte Route nimmt alles mit. Die gute Route ist langweiliger: ein Ziel, ein Loop, ein O2-Plan und ein klarer Grund zurückzukehren.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Welche Ressourcen zuerst sammeln?',
        body: 'Copper, Scanner-Fortschritt, O2-Materialien und genug Basismaterial für Lagerung.',
      },
      {
        title: 'Soll ich alles horten?',
        body: 'Nein. Behalte nützliche Basics, aber fülle Lager nicht mit Dingen, die du noch nicht verbauen kannst.',
      },
      {
        title: 'Sind seltene Routen stabil?',
        body: 'Nicht ganz. Subnautica 2 ist Early Access, also nach Patches noch einmal prüfen.',
      },
    ],
    readNextTitle: 'Weiterlesen',
    related: [
      { href: Routes.Subnautica2Beginner, label: 'Anfängerroute' },
      { href: Routes.Subnautica2Copper, label: 'Copper finden' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium Location Guide' },
      { href: Routes.Subnautica2Glass, label: 'Glass Recipe Guide' },
      { href: Routes.Subnautica2Silver, label: 'Silver finden' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank und O2' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
    ],
    sourcesTitle: 'Quellen',
    sourceBody:
      'Geprüft am 23. Mai 2026 mit Steam Early Access und aktuellen Berichten zu Silver, Atacamite und Troilite. Routen können sich ändern.',
    cardKicker: 'Material hub card',
    cardBody:
      'Routen-Hub für Copper, Silver, O2, Scanner, Lagerung und seltene Materialien.',
    cardTypeLabel: 'Typ',
    cardTypeValue: 'Ressourcen-Hub',
    cardVerifiedLabel: 'Geprüft',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  fr: {
    metadata: {
      title: 'Subnautica 2 ressources - matériaux et routes de farm',
      description:
        'Guide français des ressources Subnautica 2: Copper, Silver, O2, Scanner, matériaux de départ et routes rares.',
    },
    eyebrow: 'Index matériaux Subnautica 2',
    title: 'Guide des ressources Subnautica 2',
    description:
      'Ouvre cette page avant de partir farmer. D’abord les outils, l’oxygène et le stockage. Les matériaux rares attendront que le retour soit évident.',
    quickLabel: 'Réponse courte',
    quickAnswer:
      'Au début, garde le cap sur Copper, Silver, le Scanner, les améliorations d’O2 et le stockage. Ne vise pas tout dans la même plongée. Un objectif, un repère, un retour tôt, puis une route que tu peux répéter.',
    contentsLabel: 'Sommaire',
    routeTitle: 'Planifier une route de ressources',
    routeSteps: [
      {
        title: 'Choisir un seul objectif',
        body: 'Copper, Silver et scan de fragments ne demandent pas toujours la même route. Tout mélanger trop tôt rend la sortie confuse.',
      },
      {
        title: 'Partir d’un repère',
        body: 'Lifepod, sas de base, entrée de grotte, forme de terrain. Si le départ est dur à expliquer, la route n’est pas prête.',
      },
      {
        title: 'Sauver le progrès avant la gourmandise',
        body: 'Un demi-inventaire, un scan utile ou une recette débloquée suffisent. Un inventaire plein perdu au fond ne sert à rien.',
      },
      {
        title: 'Transformer les bons loops en pages',
        body: 'Quand une route marche deux fois, relie-la au guide Copper, Silver, Air Tank, Scanner ou aux matériaux rares.',
      },
    ],
    visualTitle: 'Tableau de route',
    visualItems: [
      {
        label: 'Début',
        value: 'Copper + O2',
        note: 'Batteries, Scanner et plongées plus sûres passent avant.',
      },
      {
        label: 'Milieu',
        value: 'Silver + scans',
        note: 'Silver et les plans bloquent souvent les premières routes.',
      },
      {
        label: 'Plus tard',
        value: 'Chaîne rare',
        note: 'Atacamite, Troilite et matériaux traités demandent vérification.',
      },
    ],
    tableTitle: 'Priorité des ressources',
    tableHeaders: ['Groupe', 'Pourquoi ça compte'],
    tableRows: [
      [
        'Copper',
        'Batteries, électronique de départ et première chaîne d’outils.',
      ],
      ['Silver', 'Blocage fréquent pour O2 et électronique.'],
      [
        'Titanium et salvage',
        'Stockage, base et construction, mais on en ramasse vite trop.',
      ],
      [
        'Matériaux O2',
        'Tout ce qui donne une marge d’air passe avant les routes profondes.',
      ],
      [
        'Matériaux rares',
        'Atacamite et Troilite doivent être revérifiés après patch.',
      ],
    ],
    cautionTitle: 'Ne farm pas comme une liste de courses',
    cautionBody:
      'La mauvaise route ramasse tout. La bonne est plus simple: une cible, une boucle, un plan O2 et une vraie raison de rentrer.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Quelles ressources prendre en premier?',
        body: 'Copper, progression du Scanner, matériaux liés à l’O2 et assez de matériaux de base pour stocker proprement.',
      },
      {
        title: 'Faut-il tout stocker?',
        body: 'Non. Garde les bases utiles, mais ne remplis pas les coffres avec des matériaux que tu ne peux pas encore dépenser.',
      },
      {
        title: 'Les routes rares sont stables?',
        body: 'Pas complètement. Subnautica 2 est en Early Access, donc vérifie après les patchs.',
      },
    ],
    readNextTitle: 'Lire ensuite',
    related: [
      { href: Routes.Subnautica2Beginner, label: 'Route débutant' },
      { href: Routes.Subnautica2Copper, label: 'Où trouver Copper' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium Location Guide' },
      { href: Routes.Subnautica2Glass, label: 'Glass Recipe Guide' },
      { href: Routes.Subnautica2Silver, label: 'Où trouver Silver' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank et O2' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
    ],
    sourcesTitle: 'Sources',
    sourceBody:
      'Vérifié le 23 mai 2026 avec Steam Early Access et les articles récents sur Silver, Atacamite et Troilite. Les routes peuvent changer.',
    cardKicker: 'Material hub card',
    cardBody:
      'Hub de routes pour Copper, Silver, O2, Scanner, stockage et matériaux rares.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Hub ressources',
    cardVerifiedLabel: 'Vérifié',
    cardStatusLabel: 'Statut',
    cardStatusValue: 'Early Access',
  },
  'pt-BR': {
    metadata: {
      title: 'Subnautica 2 recursos - materiais e rotas de farm',
      description:
        'Guia brasileiro de recursos em Subnautica 2: Copper, Silver, oxigênio, Scanner, materiais iniciais e rotas raras.',
    },
    eyebrow: 'Índice de materiais Subnautica 2',
    title: 'Guia de recursos de Subnautica 2',
    description:
      'Use esta página antes de sair para farmar. Resolva ferramentas, oxigênio e armazenamento primeiro. Material raro fica para quando a volta já for tranquila.',
    quickLabel: 'Resposta rápida',
    quickAnswer:
      'Nas primeiras sessões, foque em Copper, Silver, progresso do Scanner, upgrades de O2 e armazenamento básico. Não tente pegar tudo em um mergulho. Uma meta, uma referência, volta cedo e uma rota que dê para repetir.',
    contentsLabel: 'Conteúdo',
    routeTitle: 'Como planejar uma rota',
    routeSteps: [
      {
        title: 'Escolha um material',
        body: 'Copper, Silver e varrer fragmentos são viagens diferentes. Misturar tudo cedo deixa inventário confuso e rota ruim de repetir.',
      },
      {
        title: 'Comece por uma referência',
        body: 'Lifepod, hatch da base, boca de caverna ou relevo visível. Se você não consegue explicar o começo, a rota ainda não está pronta.',
      },
      {
        title: 'Guarde progresso antes da ganância',
        body: 'Meio inventário, um scan novo ou uma receita resolvida já valem. Inventário cheio perdido por falta de O2 não ajuda.',
      },
      {
        title: 'Transforme loops bons em páginas',
        body: 'Quando uma rota funciona duas vezes, ligue ao guia certo: Copper, Silver, Air Tank, Scanner ou materiais raros.',
      },
    ],
    visualTitle: 'Quadro de rotas',
    visualItems: [
      {
        label: 'Início',
        value: 'Copper + O2',
        note: 'Baterias, Scanner e mergulhos seguros vêm primeiro.',
      },
      {
        label: 'Meio',
        value: 'Silver + scans',
        note: 'Silver e projetos travam muitas rotas iniciais.',
      },
      {
        label: 'Depois',
        value: 'Cadeia rara',
        note: 'Atacamite, Troilite e processados precisam de rota verificada.',
      },
    ],
    tableTitle: 'Prioridade de recursos',
    tableHeaders: ['Grupo', 'Por que importa'],
    tableRows: [
      [
        'Copper',
        'Baterias, eletrônica inicial e primeira cadeia de ferramentas.',
      ],
      ['Silver', 'Gargalo comum para O2 e eletrônica.'],
      [
        'Titanium e salvage',
        'Armazenamento, base e construção, mas é fácil exagerar.',
      ],
      [
        'Materiais de O2',
        'Tudo que aumenta margem de ar vem antes de rotas profundas.',
      ],
      [
        'Materiais raros',
        'Atacamite e Troilite devem ser conferidos depois de patches.',
      ],
    ],
    cautionTitle: 'Não farme como lista de compras',
    cautionBody:
      'A rota ruim pega tudo. A boa é mais simples: um alvo, uma volta, plano de O2 e um motivo claro para voltar.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Quais recursos pegar primeiro?',
        body: 'Copper, progresso do Scanner, materiais ligados a O2 e materiais básicos suficientes para armazenamento.',
      },
      {
        title: 'Devo estocar tudo?',
        body: 'Não. Guarde o básico útil, mas não lota baús com material que você ainda não consegue gastar.',
      },
      {
        title: 'Rotas raras são estáveis?',
        body: 'Ainda não totalmente. Subnautica 2 está em Early Access, então confira depois de patches.',
      },
    ],
    readNextTitle: 'Leia a seguir',
    related: [
      { href: Routes.Subnautica2Beginner, label: 'Rota inicial' },
      { href: Routes.Subnautica2Copper, label: 'Onde encontrar Copper' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium Location Guide' },
      { href: Routes.Subnautica2Glass, label: 'Glass Recipe Guide' },
      { href: Routes.Subnautica2Silver, label: 'Onde encontrar Silver' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank e O2' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
    ],
    sourcesTitle: 'Fontes',
    sourceBody:
      'Verificado em 23 de maio de 2026 com Steam Early Access e reportagens sobre Silver, Atacamite e Troilite. Rotas podem mudar.',
    cardKicker: 'Material hub card',
    cardBody:
      'Hub de rotas para Copper, Silver, O2, Scanner, armazenamento e materiais raros.',
    cardTypeLabel: 'Tipo',
    cardTypeValue: 'Hub de recursos',
    cardVerifiedLabel: 'Verificado',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  'es-419': {
    metadata: {
      title: 'Subnautica 2 recursos - materiales y rutas de farmeo',
      description:
        'Guía en español latino de recursos en Subnautica 2: Copper, Silver, oxígeno, Scanner, materiales iniciales y rutas raras.',
    },
    eyebrow: 'Índice de materiales Subnautica 2',
    title: 'Guía de recursos de Subnautica 2',
    description:
      'Usa esta página antes de salir a farmear. Primero herramientas, oxígeno y almacenamiento. Lo raro viene después, cuando el regreso ya no da miedo.',
    quickLabel: 'Respuesta rápida',
    quickAnswer:
      'En las primeras sesiones, enfócate en Copper, Silver, progreso del Scanner, mejoras de O2 y almacenamiento básico. No intentes traer todo en una salida. Una meta, un punto claro, volver temprano y repetir la ruta.',
    contentsLabel: 'Contenido',
    routeTitle: 'Cómo planear una ruta',
    routeSteps: [
      {
        title: 'Elige un material',
        body: 'Copper, Silver y barrer fragmentos son salidas distintas. Mezclarlas pronto deja inventario caótico y una ruta difícil de repetir.',
      },
      {
        title: 'Empieza desde una referencia',
        body: 'Lifepod, hatch de base, entrada de cueva o una forma del terreno. Si no puedes explicar el inicio, la ruta aún no está lista.',
      },
      {
        title: 'Guarda progreso antes de codicia',
        body: 'Medio inventario, un scan nuevo o una receta resuelta ya valen. Un inventario lleno perdido por O2 no sirve.',
      },
      {
        title: 'Convierte buenos loops en páginas',
        body: 'Cuando una ruta funciona dos veces, enlázala al guía correcto: Copper, Silver, Air Tank, Scanner o materiales raros.',
      },
    ],
    visualTitle: 'Tablero de rutas',
    visualItems: [
      {
        label: 'Inicio',
        value: 'Copper + O2',
        note: 'Baterías, Scanner y buceos seguros primero.',
      },
      {
        label: 'Medio',
        value: 'Silver + scans',
        note: 'Silver y planos frenan muchas rutas iniciales.',
      },
      {
        label: 'Después',
        value: 'Cadena rara',
        note: 'Atacamite, Troilite y procesados necesitan ruta verificada.',
      },
    ],
    tableTitle: 'Prioridad de recursos',
    tableHeaders: ['Grupo', 'Por qué importa'],
    tableRows: [
      [
        'Copper',
        'Baterías, electrónica inicial y la primera cadena de herramientas.',
      ],
      ['Silver', 'Bloqueo común para O2 y electrónica.'],
      [
        'Titanium y salvage',
        'Almacenamiento, base y construcción, pero se junta de más.',
      ],
      [
        'Materiales de O2',
        'Todo lo que aumenta aire va antes de rutas profundas.',
      ],
      [
        'Materiales raros',
        'Atacamite y Troilite deben revisarse después de parches.',
      ],
    ],
    cautionTitle: 'No farmees como lista de mercado',
    cautionBody:
      'La mala ruta toma todo. La buena es simple: un objetivo, una vuelta, plan de O2 y una razón clara para volver.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '¿Qué recursos conseguir primero?',
        body: 'Copper, progreso del Scanner, materiales ligados al O2 y básicos suficientes para almacenamiento.',
      },
      {
        title: '¿Debo guardar todo?',
        body: 'No. Guarda básicos útiles, pero no llenes cofres con material que todavía no puedes usar.',
      },
      {
        title: '¿Las rutas raras son estables?',
        body: 'No del todo. Subnautica 2 está en Early Access, así que conviene revisar después de parches.',
      },
    ],
    readNextTitle: 'Leer después',
    related: [
      { href: Routes.Subnautica2Beginner, label: 'Ruta inicial' },
      { href: Routes.Subnautica2Copper, label: 'Dónde encontrar Copper' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium Location Guide' },
      { href: Routes.Subnautica2Glass, label: 'Glass Recipe Guide' },
      { href: Routes.Subnautica2Silver, label: 'Dónde encontrar Silver' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank y O2' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
    ],
    sourcesTitle: 'Fuentes',
    sourceBody:
      'Verificado el 23 de mayo de 2026 con Steam Early Access y reportes sobre Silver, Atacamite y Troilite. Las rutas pueden cambiar.',
    cardKicker: 'Material hub card',
    cardBody:
      'Hub de rutas para Copper, Silver, O2, Scanner, almacenamiento y materiales raros.',
    cardTypeLabel: 'Tipo',
    cardTypeValue: 'Hub de recursos',
    cardVerifiedLabel: 'Verificado',
    cardStatusLabel: 'Estado',
    cardStatusValue: 'Early Access',
  },
  ko: {
    metadata: {
      title: 'Subnautica 2 자원 가이드 - 재료 우선순위와 파밍 루트',
      description:
        'Subnautica 2 한국어 자원 가이드. Copper, Silver, 산소, Scanner, 초반 재료와 희귀 재료 루트를 정리합니다.',
    },
    eyebrow: 'Subnautica 2 재료 색인',
    title: 'Subnautica 2 자원 가이드',
    description:
      '파밍을 나가기 전에 보는 루트 보드입니다. 도구, 산소, 보관부터 해결하고, 희귀 재료는 돌아오는 길이 익숙해진 뒤에 찾는 편이 좋습니다.',
    quickLabel: '빠른 답',
    quickAnswer:
      '초반 몇 번의 플레이에서는 Copper, Silver, Scanner 진행도, O2 업그레이드, 기본 보관을 우선하세요. 한 번에 모든 재료를 노리지 마세요. 목표 하나, 출발 지점 하나, 빠른 귀환, 반복 가능한 루트가 더 좋습니다.',
    contentsLabel: '목차',
    routeTitle: '자원 루트 짜는 법',
    routeSteps: [
      {
        title: '재료 목표를 하나만 고르기',
        body: 'Copper 파밍, Silver 확인, 파편 스캔은 다른 잠수입니다. 초반에 섞으면 인벤토리도 루트도 흐려집니다.',
      },
      {
        title: '눈에 띄는 지점에서 출발',
        body: 'Lifepod, 기지 해치, 동굴 입구, 큰 지형을 기준으로 삼으세요. 시작점을 설명하기 어렵다면 아직 좋은 루트가 아닙니다.',
      },
      {
        title: '욕심보다 진행도 저장',
        body: '반쯤 찬 인벤토리, 새 스캔, 해결한 제작식 하나도 충분한 성과입니다. 산소 때문에 잃은 가득 찬 가방은 도움이 안 됩니다.',
      },
      {
        title: '좋은 루트는 페이지로 연결',
        body: '두 번 이상 안정적으로 성공한 루트는 Copper, Silver, Air Tank, Scanner, 희귀 재료 페이지와 연결하세요.',
      },
    ],
    visualTitle: '자원 루트 보드',
    visualItems: [
      {
        label: '초반',
        value: 'Copper + O2',
        note: '배터리, Scanner, 안전한 잠수가 먼저입니다.',
      },
      {
        label: '중반',
        value: 'Silver + scans',
        note: 'Silver와 설계도는 초반 진행을 자주 막습니다.',
      },
      {
        label: '후반',
        value: '희귀 체인',
        note: 'Atacamite, Troilite, 가공 재료는 루트 확인이 필요합니다.',
      },
    ],
    tableTitle: '자원 우선순위',
    tableHeaders: ['자원 그룹', '중요한 이유'],
    tableRows: [
      ['Copper', '배터리, 초반 전자 부품, 첫 도구 체인의 출발점입니다.'],
      ['Silver', 'O2와 전자 제작에서 자주 막히는 재료입니다.'],
      [
        'Titanium과 salvage',
        '보관함, 기지, 건설에 쓰이지만 너무 많이 주우기 쉽습니다.',
      ],
      ['O2 재료', '산소 여유를 늘리는 재료는 깊은 루트보다 먼저입니다.'],
      [
        '희귀 재료',
        'Atacamite와 Troilite는 패치 후 다시 확인하는 편이 안전합니다.',
      ],
    ],
    cautionTitle: '장보기처럼 파밍하지 않기',
    cautionBody:
      '나쁜 루트는 보이는 대로 줍습니다. 좋은 루트는 단순합니다. 목표 하나, 반복 루프 하나, O2 계획 하나, 돌아올 이유 하나.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '초반에 어떤 자원을 먼저 모아야 하나요?',
        body: 'Copper, Scanner 진행도, O2 관련 재료, 기본 보관함을 만들 정도의 건설 재료를 먼저 챙기세요.',
      },
      {
        title: '모든 재료를 쌓아 둬야 하나요?',
        body: '아니요. 자주 쓰는 기본 재료는 좋지만, 아직 못 쓰는 재료로 보관함을 채우면 초반 루트가 더 불편해집니다.',
      },
      {
        title: '희귀 재료 위치는 고정인가요?',
        body: '완전히 고정이라고 보기 어렵습니다. Subnautica 2는 Early Access라서 패치 후 루트 확인이 필요합니다.',
      },
    ],
    readNextTitle: '다음 글',
    related: [
      { href: Routes.Subnautica2Beginner, label: '초보 루트' },
      { href: Routes.Subnautica2Copper, label: 'Copper 위치' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium Location Guide' },
      { href: Routes.Subnautica2Glass, label: 'Glass Recipe Guide' },
      { href: Routes.Subnautica2Silver, label: 'Silver 위치' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank와 O2' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner 가이드' },
    ],
    sourcesTitle: '출처 메모',
    sourceBody:
      '2026년 5월 23일 Steam Early Access 페이지와 Silver, Atacamite, Troilite 관련 최신 보도를 확인했습니다. 루트는 패치 후 달라질 수 있습니다.',
    cardKicker: 'Material hub card',
    cardBody:
      'Copper, Silver, O2, Scanner, 보관, 희귀 재료를 루트 중심으로 정리한 자원 허브입니다.',
    cardTypeLabel: '유형',
    cardTypeValue: '자원 허브',
    cardVerifiedLabel: '확인',
    cardStatusLabel: '상태',
    cardStatusValue: 'Early Access',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 資源ガイド - 素材優先度とファームルート',
      description:
        'Subnautica 2 日本語資源ガイド。Copper、Silver、酸素、Scanner、序盤素材、レア素材ルートを整理します。',
    },
    eyebrow: 'Subnautica 2 素材インデックス',
    title: 'Subnautica 2 資源ガイド',
    description:
      'ファームに出る前のルート板です。まず道具、酸素、保管を安定させて、レア素材は帰り道が怖くなくなってからで十分です。',
    quickLabel: '要点',
    quickAnswer:
      '序盤は Copper、Silver、Scanner の進行、O2 強化、基本の保管を優先します。一度の潜水で全部を狙わないこと。目標を一つ、出発点を一つ、早めに帰ること、そして繰り返せるルートを作ることが大事です。',
    contentsLabel: '目次',
    routeTitle: '資源ルートの作り方',
    routeSteps: [
      {
        title: '素材目標を一つに絞る',
        body: 'Copper 集め、Silver 確認、破片スキャンは別の潜水です。序盤から混ぜすぎると、持ち物もルートも分かりにくくなります。',
      },
      {
        title: '目印から出発する',
        body: 'Lifepod、基地のハッチ、洞窟の入口、分かりやすい地形を使います。開始地点を説明できないルートはまだ早いです。',
      },
      {
        title: '欲張る前に進行を持ち帰る',
        body: '半分のインベントリ、新しいスキャン、一つのレシピ解決でも十分です。O2 切れで失った満杯の荷物は進行になりません。',
      },
      {
        title: '良いループをページにつなげる',
        body: '二回安定して回れたルートは、Copper、Silver、Air Tank、Scanner、レア素材ページにリンクします。',
      },
    ],
    visualTitle: '資源ルート板',
    visualItems: [
      {
        label: '序盤',
        value: 'Copper + O2',
        note: 'Battery、Scanner、安全な潜水が先です。',
      },
      {
        label: '中盤',
        value: 'Silver + scans',
        note: 'Silver と設計図が序盤の足止めになりやすいです。',
      },
      {
        label: '後半',
        value: 'Rare chain',
        note: 'Atacamite、Troilite、加工素材はルート確認が必要です。',
      },
    ],
    tableTitle: '資源優先度',
    tableHeaders: ['資源グループ', '重要な理由'],
    tableRows: [
      ['Copper', 'Battery、序盤電子部品、最初の道具チェーンに必要です。'],
      ['Silver', 'O2 と電子制作でよく詰まる素材です。'],
      [
        'Titanium と salvage',
        '保管、基地、建築に使いますが、拾いすぎやすいです。',
      ],
      ['O2 素材', '酸素の余裕を増やす素材は深いルートより先です。'],
      [
        'レア素材',
        'Atacamite と Troilite はパッチ後に再確認した方が安全です。',
      ],
    ],
    cautionTitle: '買い物リストみたいに集めない',
    cautionBody:
      '悪いルートは見えたものを全部拾います。良いルートは単純です。目標一つ、ループ一つ、O2 計画一つ、帰る理由一つ。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '最初に集める資源は？',
        body: 'Copper、Scanner 進行、O2 関連素材、保管を作れる程度の基本建材を優先します。',
      },
      {
        title: '全部ストックするべき？',
        body: 'いいえ。よく使う基本素材は残してよいですが、まだ使えない素材で保管箱を埋めない方が動きやすいです。',
      },
      {
        title: 'レア素材の場所は安定していますか？',
        body: '完全ではありません。Subnautica 2 は Early Access なので、パッチ後はルート確認が必要です。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2Beginner, label: '初心者ルート' },
      { href: Routes.Subnautica2Copper, label: 'Copper の場所' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium Location Guide' },
      { href: Routes.Subnautica2Glass, label: 'Glass Recipe Guide' },
      { href: Routes.Subnautica2Silver, label: 'Silver の場所' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank と O2' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner ガイド' },
    ],
    sourcesTitle: '出典メモ',
    sourceBody:
      '2026年5月23日に Steam Early Access ページと Silver、Atacamite、Troilite に関する現在の記事を確認しました。ルートはパッチで変わる可能性があります。',
    cardKicker: 'Material hub card',
    cardBody:
      'Copper、Silver、O2、Scanner、保管、レア素材をルート中心で整理する資源ハブです。',
    cardTypeLabel: '種類',
    cardTypeValue: '資源ハブ',
    cardVerifiedLabel: '確認',
    cardStatusLabel: '状態',
    cardStatusValue: 'Early Access',
  },
};

function getCopy(locale: Locale): ResourcesCopy {
  return resourcesCopy[locale] ?? resourcesCopy.en;
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
    pathname: Routes.Subnautica2Resources,
  });
}

export default async function ResourcesGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <LocalizedResourceGuidePage
      copy={copy}
      icon={BoxesIcon}
      locale={locale}
      pathname={Routes.Subnautica2Resources}
      sources={sharedSources}
    />
  );
}
