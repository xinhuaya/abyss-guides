import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { MapIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type MapCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-23';
const UPDATED_AT = '2026-05-28';

const sharedSources = [
  {
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/',
    label: 'Official Steam page',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-tips/',
    label: 'PC Gamer beginner tips',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-bioscanner-location-biomods/',
    label: 'PC Gamer Bioscanner guide',
  },
];

const mapCopy: Record<string, MapCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Map and Biomes Guide - Routes and Base Planning',
      description:
        'A spoiler-light Subnautica 2 map and biomes guide for route planning, landmarks, resource loops, danger notes, base planning, and co-op navigation.',
    },
    eyebrow: 'Subnautica 2 route map',
    title: 'Subnautica 2 Map and Biomes Guide',
    description:
      'The best early map is not a huge spoiler image. It is a set of repeatable routes: where you start, what you came for, what can hurt you, and when you turn back.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Explore Subnautica 2 by loops instead of random lines. Pick one landmark, choose one objective, drop a Beacon when the route earns a name, note oxygen pressure and danger, then return before the swim turns messy.',
    fieldNotesTitle: 'Field notes for route mapping',
    fieldNotes: [
      {
        title: 'Name routes after jobs',
        body: 'Copper loop, scan sweep, base scout, Silver cave: those names are boring on purpose. They tell you what to pack and when to turn around.',
      },
      {
        title: 'A bad return is map data',
        body: 'If you came home panicked, write down why. Low visibility, one confusing bend, or a late oxygen turn-back is exactly the kind of note that saves the next dive.',
      },
      {
        title: 'Use Beacons only when a route earns one',
        body: 'Beacon spam turns the ocean into clutter. Drop one when a route has a clear job or a place you genuinely expect to revisit.',
      },
    ],
    routeChecklistTitle: 'Map note check',
    routeChecklist: [
      'Route starts from a landmark you can describe.',
      'The dive has one job, not five half-jobs.',
      'Danger, visibility, and oxygen pressure are recorded.',
      'Beacon names are short enough to read while moving.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to build a useful route',
    routeSteps: [
      {
        title: 'Start from a clear landmark',
        body: 'Use the Lifepod, a base hatch, a cave mouth, or a visible terrain shape. If the start is hard to explain, the route is not ready yet.',
      },
      {
        title: 'Set one job for the dive',
        body: 'Resource farming, blueprint scanning, biome scouting, and base planning are different trips. Mixing them too early makes the notes weak.',
      },
      {
        title: 'Mark pressure points',
        body: 'The useful parts of a map are not only resources. Mark low visibility, oxygen strain, hostile routes, confusing turns, safe return points, and places where a Scanner Station would save guesswork later.',
      },
      {
        title: 'Turn loops into pages',
        body: 'Once a route works twice, connect it to a guide: resources, crafting, Air Tank, Beacon, Scanner Station, or base-location planning.',
      },
    ],
    visualTitle: 'Map note board',
    visualItems: [
      {
        label: 'Anchor',
        value: 'Landmark',
        note: 'Every route needs a start players can find again.',
      },
      {
        label: 'Goal',
        value: 'One job',
        note: 'Farm, scan, scout, or plan a base. Do not blend everything.',
      },
      {
        label: 'Risk',
        value: 'Return cue',
        note: 'O2 pressure and danger notes matter as much as loot.',
      },
    ],
    tableTitle: 'Biome note template',
    tableHeaders: ['Map field', 'What to record'],
    tableRows: [
      [
        'Safety',
        'Creature pressure, visibility, oxygen demand, and whether the return feels reliable.',
      ],
      [
        'Common resources',
        'Materials worth repeating from this area without a long detour.',
      ],
      [
        'Rare resources',
        'Items that need a dedicated run, better oxygen, or patch verification.',
      ],
      [
        'Base potential',
        'Space, power access, storage convenience, Moonpool clearance, and whether teammates can find it.',
      ],
      [
        'Progression value',
        'Fragments, scans, route unlocks, or reasons to revisit after upgrades.',
      ],
    ],
    cautionTitle: 'Do not trust memory after a panic swim',
    cautionBody:
      'A route you barely survived is not a route yet. Write down the turn-back cue, oxygen problem, and landmark you missed. The second clean trip is usually where a real guide starts.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Is there a full Subnautica 2 map yet?',
        body: 'Early Access map details can change, so a route-first guide is safer than pretending every boundary and resource cluster is final.',
      },
      {
        title: 'How should I choose a first base location?',
        body: 'Pick a spot that is easy to find, close to resources you use often, safe enough for routine returns, and near a route you expect to repeat.',
      },
      {
        title: 'What should I mark for co-op?',
        body: 'Use short route names, shared landmarks, storage roles, and danger notes. Co-op navigation breaks down fast when every player uses a different name.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Biomes, label: 'Biomes Guide' },
      { href: Routes.Subnautica2Beacon, label: 'Beacon Guide' },
      { href: Routes.Subnautica2Beginner, label: 'Beginner Route' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
      { href: Routes.Subnautica2ScannerStation, label: 'Scanner Station' },
      { href: Routes.Subnautica2BaseBuilding, label: 'Base Building' },
      {
        href: Routes.Subnautica2BestBaseLocations,
        label: 'Best Base Locations',
      },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 28, 2026 against the Steam Early Access listing and current exploration tips. This page avoids fixed coordinates until routes can be verified after patches.',
    cardKicker: 'Route map card',
    cardBody:
      'Spoiler-light route planning for landmarks, oxygen pressure, biome notes, base spots, and co-op navigation.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Map hub',
    cardVerifiedLabel: 'Verified',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 地图与生态区指南 - 路线、资源和基地规划',
      description:
        'Subnautica 2 中文地图与生态区指南，整理路线规划、地标、资源循环、危险提示、基地选址和联机导航。',
    },
    eyebrow: 'Subnautica 2 路线地图',
    title: 'Subnautica 2 地图与生态区指南',
    description:
      '前期最有用的地图，不是一张塞满剧透的大图，而是一组能重复跑的路线：从哪出发、要拿什么、哪里危险、什么时候该回头。',
    quickLabel: '快速答案',
    quickAnswer:
      '探索 Subnautica 2 时按循环路线走，不要随便拉直线乱游。选一个地标，一个目标，记下氧气压力和危险点，在路线变乱之前回家。好的地图笔记应该帮助你下次复跑，而不是只记得那里“好像挺有意思”。',
    fieldNotesTitle: '路线地图笔记',
    fieldNotes: [
      {
        title: '按任务给路线命名',
        body: '铜循环、碎片扫描、基地侦察、银洞路线，这些名字故意很普通。它们能提醒你带什么、什么时候回头。',
      },
      {
        title: '狼狈回家也是地图信息',
        body: '如果你是慌着游回来的，就把原因写下来。能见度差、某个转弯迷路、氧气回头太晚，这些都能救下一趟。',
      },
      {
        title: 'Beacon 不要乱插',
        body: 'Beacon 太多会把海里变成一堆噪音。只有路线有明确任务，或者某个点你真的会回来，才值得插一个。',
      },
    ],
    routeChecklistTitle: '地图笔记检查',
    routeChecklist: [
      '路线从一个能说清楚的地标开始。',
      '这一趟只做一个目标，不做五个半目标。',
      '危险、能见度和氧气压力都有记录。',
      'Beacon 名字短到游动时也能看懂。',
    ],
    contentsLabel: '目录',
    routeTitle: '怎么做一条有用路线',
    routeSteps: [
      {
        title: '从清楚的地标出发',
        body: 'Lifepod、基地舱门、洞口、明显地形都可以。起点说不清楚，这条路线就还没成熟。',
      },
      {
        title: '一次下水只做一件事',
        body: '采资源、扫蓝图、侦察生态区、选基地，本来就是不同任务。太早混在一起，笔记会很虚。',
      },
      {
        title: '标出压力点',
        body: '地图不只记资源。低能见度、氧气紧张、敌对生物、容易迷路的转弯、安全回头点都要记。',
      },
      {
        title: '把稳定循环变成页面',
        body: '一条路线跑通两次后，再连到资源、制作、气瓶、Scanner 或未来基地位置页面。',
      },
    ],
    visualTitle: '地图笔记板',
    visualItems: [
      {
        label: '锚点',
        value: '地标',
        note: '每条路线都需要一个下次还能找到的起点。',
      },
      {
        label: '目标',
        value: '一件事',
        note: '采集、扫描、侦察、选基地，不要混成一团。',
      },
      {
        label: '风险',
        value: '回头信号',
        note: '氧气压力和危险点，和资源一样重要。',
      },
    ],
    tableTitle: '生态区笔记模板',
    tableHeaders: ['地图字段', '记录什么'],
    tableRows: [
      ['安全性', '敌对生物、能见度、氧气压力，以及回程是否稳定。'],
      ['常见资源', '值得反复来拿、不会绕太远的材料。'],
      ['稀有资源', '需要专门路线、更高氧气余量或补丁后复查的材料。'],
      ['基地潜力', '空间、供电、储物便利度，以及队友能不能找到。'],
      ['推进价值', '碎片、扫描点、路线解锁，或升级后值得回来的理由。'],
    ],
    cautionTitle: '惊险逃生后的记忆不要太信',
    cautionBody:
      '一条差点游不回来的路线，还不算路线。先记下回头信号、氧气问题和错过的地标。第二次能干净跑通，才更接近真正可写的攻略。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: '现在有完整 Subnautica 2 地图吗？',
        body: '抢先体验阶段地图细节可能变化，所以路线型攻略比假装所有边界和资源点都已固定更稳。',
      },
      {
        title: '第一座基地怎么选位置？',
        body: '选容易找到、靠近常用资源、日常往返安全、并且靠近你会反复跑的路线的位置。',
      },
      {
        title: '联机时地图要标什么？',
        body: '短路线名、共享地标、仓库分工和危险提示。每个人叫法不同，联机导航很快就会乱。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Beacon, label: 'Beacon 指南' },
      { href: Routes.Subnautica2Beginner, label: '新手路线' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
      { href: Routes.Subnautica2AirTank, label: '气瓶和氧气' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner 攻略' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 28 日核对 Steam 抢先体验页面和当前探索建议。本页暂不写死坐标，等补丁后路线核对再更新。',
    cardKicker: '路线地图卡',
    cardBody: '围绕地标、氧气压力、生态区笔记、基地点和联机导航来规划路线。',
    cardTypeLabel: '类型',
    cardTypeValue: '地图中心',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
  ru: {
    metadata: {
      title: 'Subnautica 2 карта и биомы - маршруты, ресурсы и базы',
      description:
        'Русский гид по карте и биомам Subnautica 2: маршруты, ориентиры, ресурсы, опасности, базы и кооперативная навигация.',
    },
    eyebrow: 'Маршрутная карта Subnautica 2',
    title: 'Subnautica 2: карта и биомы',
    description:
      'Лучшая ранняя карта не огромная картинка со спойлерами. Это набор маршрутов: старт, цель, опасность и момент возврата.',
    quickLabel: 'Короткий ответ',
    quickAnswer:
      'Исследуйте Subnautica 2 петлями, а не случайными линиями. Один ориентир, одна цель, заметки по кислороду и риску, ранний возврат. Хорошая карта помогает повторить путь.',
    contentsLabel: 'Содержание',
    routeTitle: 'Как сделать полезный маршрут',
    routeSteps: [
      {
        title: 'Старт от ориентира',
        body: 'Lifepod, люк базы, вход в пещеру или заметный рельеф. Если старт трудно объяснить, маршрут сырой.',
      },
      {
        title: 'Одна задача за заплыв',
        body: 'Фарм, сканы, разведка биома и выбор базы лучше записывать отдельно.',
      },
      {
        title: 'Отмечайте точки давления',
        body: 'Нужны не только ресурсы. Пишите про видимость, кислород, врагов, повороты и безопасный возврат.',
      },
      {
        title: 'Петли превращайте в страницы',
        body: 'Если маршрут сработал дважды, связывайте его с ресурсами, крафтом, Air Tank, Scanner или базами.',
      },
    ],
    visualTitle: 'Доска заметок',
    visualItems: [
      {
        label: 'Якорь',
        value: 'Ориентир',
        note: 'Маршруту нужен старт, который можно найти снова.',
      },
      {
        label: 'Цель',
        value: 'Одна задача',
        note: 'Фарм, scan, разведка или база. Не все сразу.',
      },
      {
        label: 'Риск',
        value: 'Возврат',
        note: 'Кислород и опасность важны не меньше лута.',
      },
    ],
    tableTitle: 'Шаблон биома',
    tableHeaders: ['Поле', 'Что записывать'],
    tableRows: [
      ['Безопасность', 'Враги, видимость, кислород и надежность пути назад.'],
      ['Частые ресурсы', 'Материалы, за которыми стоит возвращаться.'],
      [
        'Редкие ресурсы',
        'Материалы для отдельного маршрута или проверки после патча.',
      ],
      ['База', 'Место, энергия, хранение и понятность для teammates.'],
      [
        'Прогресс',
        'Фрагменты, сканы, новые маршруты или причины вернуться позже.',
      ],
    ],
    cautionTitle: 'Не доверяйте памяти после паники',
    cautionBody:
      'Маршрут, который вы едва пережили, еще не маршрут. Запишите момент возврата, проблему с O2 и пропущенный ориентир.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Есть ли полная карта Subnautica 2?',
        body: 'В Early Access детали могут меняться, поэтому безопаснее писать проверяемые маршруты.',
      },
      {
        title: 'Где строить первую базу?',
        body: 'Там, где легко вернуться, рядом частые ресурсы, безопасный подход и повторяемый маршрут.',
      },
      {
        title: 'Что отмечать в co-op?',
        body: 'Короткие имена маршрутов, общие ориентиры, роли хранения и опасности.',
      },
    ],
    readNextTitle: 'Дальше',
    related: [
      { href: Routes.Subnautica2Beginner, label: 'Маршрут новичка' },
      { href: Routes.Subnautica2Resources, label: 'Ресурсы' },
      { href: Routes.Subnautica2Crafting, label: 'Крафт' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank и O2' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner' },
    ],
    sourcesTitle: 'Источники',
    sourceBody:
      'Проверено 28 мая 2026 по Steam Early Access и текущим советам по исследованию. Координаты не фиксируются до проверки после патчей.',
    cardKicker: 'Route map card',
    cardBody:
      'Маршруты, ориентиры, O2, биомы, базы и co-op навигация без тяжелых спойлеров.',
    cardTypeLabel: 'Тип',
    cardTypeValue: 'Карта-хаб',
    cardVerifiedLabel: 'Проверено',
    cardStatusLabel: 'Статус',
    cardStatusValue: 'Early Access',
  },
  de: {
    metadata: {
      title: 'Subnautica 2 Karte und Biome - Routen und Basisplanung',
      description:
        'Deutscher Guide zu Karte und Biomen in Subnautica 2: Routen, Landmarken, Ressourcen, Gefahren, Basen und Co-op Navigation.',
    },
    eyebrow: 'Subnautica 2 Routenkarte',
    title: 'Subnautica 2 Karte und Biome',
    description:
      'Die beste frühe Karte ist kein riesiges Spoilerbild. Sie ist eine Sammlung wiederholbarer Routen: Start, Ziel, Gefahr und Rückkehr.',
    quickLabel: 'Kurzantwort',
    quickAnswer:
      'Erkunde Subnautica 2 in Loops statt in zufälligen Linien. Eine Landmarke, ein Ziel, O2- und Gefahrennotizen, dann früh zurück. Gute Karten helfen beim Wiederholen.',
    contentsLabel: 'Inhalt',
    routeTitle: 'Eine nützliche Route bauen',
    routeSteps: [
      {
        title: 'Mit Landmarke starten',
        body: 'Lifepod, Basisluke, Höhleneingang oder sichtbares Gelände. Ist der Start schwer zu erklären, ist die Route unreif.',
      },
      {
        title: 'Ein Job pro Tauchgang',
        body: 'Farmen, Scannen, Biom erkunden und Basis planen sind unterschiedliche Trips.',
      },
      {
        title: 'Druckpunkte markieren',
        body: 'Nicht nur Ressourcen notieren. Sicht, O2, Gegner, verwirrende Abbiegungen und Rückkehrpunkte zählen.',
      },
      {
        title: 'Loops zu Seiten machen',
        body: 'Wenn eine Route zweimal klappt, verlinke sie mit Ressourcen, Crafting, Air Tank, Scanner oder Basis-Seiten.',
      },
    ],
    visualTitle: 'Kartennotizen',
    visualItems: [
      {
        label: 'Anker',
        value: 'Landmarke',
        note: 'Jede Route braucht einen wiederfindbaren Start.',
      },
      {
        label: 'Ziel',
        value: 'Ein Job',
        note: 'Farm, Scan, Scout oder Basis. Nicht alles zugleich.',
      },
      {
        label: 'Risiko',
        value: 'Rückkehr',
        note: 'O2 und Gefahr sind so wichtig wie Loot.',
      },
    ],
    tableTitle: 'Biom-Notizvorlage',
    tableHeaders: ['Feld', 'Was notieren'],
    tableRows: [
      ['Sicherheit', 'Gegner, Sicht, O2-Druck und zuverlässiger Rückweg.'],
      ['Häufige Ressourcen', 'Materialien, für die sich Wiederholung lohnt.'],
      [
        'Seltene Ressourcen',
        'Materialien für eigene Routen oder Patch-Prüfung.',
      ],
      [
        'Basis-Potential',
        'Platz, Strom, Lager und ob Teammitglieder es finden.',
      ],
      [
        'Fortschritt',
        'Fragmente, Scans, neue Routen oder Gründe zum Wiederkommen.',
      ],
    ],
    cautionTitle: 'Panik-Schwimmen ist keine gute Erinnerung',
    cautionBody:
      'Eine knapp überlebte Route ist noch keine Route. Notiere den Rückkehrpunkt, das O2-Problem und die verpasste Landmarke.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Gibt es schon eine volle Karte?',
        body: 'Early Access kann Details ändern. Wiederholbare Routen sind sicherer als feste Grenzen.',
      },
      {
        title: 'Wo sollte die erste Basis stehen?',
        body: 'Leicht zu finden, nahe an häufigen Ressourcen, sicher genug und an einer Route, die du wiederholst.',
      },
      {
        title: 'Was im Co-op markieren?',
        body: 'Kurze Routennamen, gemeinsame Landmarken, Lagerrollen und Gefahren.',
      },
    ],
    readNextTitle: 'Weiterlesen',
    related: [
      { href: Routes.Subnautica2Beginner, label: 'Anfängerroute' },
      { href: Routes.Subnautica2Resources, label: 'Ressourcen' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank und O2' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
    ],
    sourcesTitle: 'Quellen',
    sourceBody:
      'Geprüft am 28. Mai 2026 mit Steam Early Access und aktuellen Exploration-Tipps. Feste Koordinaten warten auf Patch-Prüfung.',
    cardKicker: 'Route map card',
    cardBody:
      'Routenplanung für Landmarken, O2-Druck, Biomnotizen, Basen und Co-op Navigation.',
    cardTypeLabel: 'Typ',
    cardTypeValue: 'Karten-Hub',
    cardVerifiedLabel: 'Geprüft',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  fr: {
    metadata: {
      title: 'Subnautica 2 carte et biomes - routes et bases',
      description:
        'Guide français carte et biomes Subnautica 2: routes, repères, ressources, dangers, bases et navigation co-op.',
    },
    eyebrow: 'Carte de routes Subnautica 2',
    title: 'Carte et biomes Subnautica 2',
    description:
      'La meilleure carte de départ n’est pas une grosse image pleine de spoilers. C’est une série de routes: départ, objectif, danger, retour.',
    quickLabel: 'Réponse courte',
    quickAnswer:
      'Explore Subnautica 2 en boucles, pas en lignes au hasard. Un repère, un objectif, des notes sur O2 et danger, puis retour avant le chaos.',
    contentsLabel: 'Sommaire',
    routeTitle: 'Construire une route utile',
    routeSteps: [
      {
        title: 'Partir d’un repère clair',
        body: 'Lifepod, sas de base, entrée de grotte ou relief visible. Si le départ est flou, la route n’est pas prête.',
      },
      {
        title: 'Un travail par plongée',
        body: 'Farmer, scanner, explorer un biome ou choisir une base sont des sorties différentes.',
      },
      {
        title: 'Marquer les points de pression',
        body: 'Note visibilité, O2, ennemis, virages confus et retours sûrs, pas seulement les ressources.',
      },
      {
        title: 'Transformer les boucles en pages',
        body: 'Quand une route marche deux fois, relie-la aux ressources, au crafting, Air Tank, Scanner ou bases.',
      },
    ],
    visualTitle: 'Tableau de notes',
    visualItems: [
      {
        label: 'Ancre',
        value: 'Repère',
        note: 'Chaque route a besoin d’un départ retrouvable.',
      },
      {
        label: 'Objectif',
        value: 'Un travail',
        note: 'Farm, scan, scout ou base. Pas tout à la fois.',
      },
      {
        label: 'Risque',
        value: 'Retour',
        note: 'O2 et danger comptent autant que le loot.',
      },
    ],
    tableTitle: 'Modèle de note biome',
    tableHeaders: ['Champ', 'À noter'],
    tableRows: [
      ['Sécurité', 'Créatures, visibilité, pression O2 et retour fiable.'],
      ['Ressources communes', 'Matériaux qui valent une boucle répétée.'],
      [
        'Ressources rares',
        'Matériaux qui demandent une route dédiée ou une vérification patch.',
      ],
      [
        'Potentiel base',
        'Espace, énergie, stockage et facilité à retrouver en équipe.',
      ],
      [
        'Valeur progression',
        'Fragments, scans, nouvelles routes ou raisons de revenir.',
      ],
    ],
    cautionTitle: 'Ne fais pas confiance à une fuite paniquée',
    cautionBody:
      'Une route à peine survivable n’est pas encore une route. Note le moment de retour, le problème O2 et le repère raté.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Existe-t-il une carte complète?',
        body: 'En Early Access, les détails peuvent changer. Les routes vérifiables sont plus sûres.',
      },
      {
        title: 'Où faire la première base?',
        body: 'Un endroit facile à retrouver, proche de ressources fréquentes, assez sûr, et lié à une route répétée.',
      },
      {
        title: 'Que marquer en co-op?',
        body: 'Noms courts de routes, repères partagés, rôles de stockage et dangers.',
      },
    ],
    readNextTitle: 'Lire ensuite',
    related: [
      { href: Routes.Subnautica2Beginner, label: 'Route débutant' },
      { href: Routes.Subnautica2Resources, label: 'Ressources' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank et O2' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
    ],
    sourcesTitle: 'Sources',
    sourceBody:
      'Vérifié le 28 mai 2026 avec Steam Early Access et les conseils d’exploration actuels. Les coordonnées fixes attendent une vérification après patch.',
    cardKicker: 'Route map card',
    cardBody:
      'Routes, repères, O2, biomes, bases et navigation co-op sans gros spoilers.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Hub carte',
    cardVerifiedLabel: 'Vérifié',
    cardStatusLabel: 'Statut',
    cardStatusValue: 'Early Access',
  },
  'pt-BR': {
    metadata: {
      title: 'Subnautica 2 mapa e biomas - rotas e bases',
      description:
        'Guia brasileiro de mapa e biomas em Subnautica 2: rotas, referências, recursos, perigos, bases e navegação co-op.',
    },
    eyebrow: 'Mapa de rotas Subnautica 2',
    title: 'Mapa e biomas de Subnautica 2',
    description:
      'O melhor mapa inicial não é uma imagem cheia de spoilers. É uma lista de rotas repetíveis: início, objetivo, risco e volta.',
    quickLabel: 'Resposta rápida',
    quickAnswer:
      'Explore Subnautica 2 em voltas, não em linhas aleatórias. Uma referência, uma meta, notas de O2 e perigo, e retorno antes de virar bagunça.',
    contentsLabel: 'Conteúdo',
    routeTitle: 'Como criar uma rota útil',
    routeSteps: [
      {
        title: 'Comece por uma referência',
        body: 'Lifepod, hatch da base, boca de caverna ou relevo visível. Se o início é difícil de explicar, a rota ainda não está pronta.',
      },
      {
        title: 'Uma tarefa por mergulho',
        body: 'Farmar, escanear, explorar bioma e planejar base são viagens diferentes.',
      },
      {
        title: 'Marque pontos de pressão',
        body: 'Anote visibilidade, O2, criaturas, curvas confusas e retorno seguro, não só recursos.',
      },
      {
        title: 'Transforme loops em páginas',
        body: 'Quando uma rota funciona duas vezes, conecte com recursos, crafting, Air Tank, Scanner ou bases.',
      },
    ],
    visualTitle: 'Quadro de mapa',
    visualItems: [
      {
        label: 'Âncora',
        value: 'Referência',
        note: 'Toda rota precisa de início fácil de achar.',
      },
      {
        label: 'Meta',
        value: 'Uma tarefa',
        note: 'Farm, scan, scout ou base. Não tudo junto.',
      },
      {
        label: 'Risco',
        value: 'Volta',
        note: 'O2 e perigo importam tanto quanto loot.',
      },
    ],
    tableTitle: 'Modelo de nota de bioma',
    tableHeaders: ['Campo', 'O que anotar'],
    tableRows: [
      [
        'Segurança',
        'Criaturas, visibilidade, pressão de O2 e retorno confiável.',
      ],
      ['Recursos comuns', 'Materiais que valem uma rota repetida.'],
      ['Recursos raros', 'Materiais para rota dedicada ou revisão pós-patch.'],
      [
        'Potencial de base',
        'Espaço, energia, armazenamento e facilidade para o time achar.',
      ],
      [
        'Valor de progresso',
        'Fragmentos, scans, novas rotas ou motivos para voltar.',
      ],
    ],
    cautionTitle: 'Não confie em memória de fuga',
    cautionBody:
      'Uma rota quase perdida ainda não é rota. Anote o ponto de retorno, o problema de O2 e a referência que você errou.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Já existe mapa completo?',
        body: 'No Early Access, detalhes podem mudar. Rotas verificáveis são mais seguras.',
      },
      {
        title: 'Onde fazer a primeira base?',
        body: 'Em lugar fácil de achar, perto de recursos comuns, seguro e ligado a uma rota repetida.',
      },
      {
        title: 'O que marcar em co-op?',
        body: 'Nomes curtos de rota, referências compartilhadas, funções de armazenamento e perigos.',
      },
    ],
    readNextTitle: 'Leia a seguir',
    related: [
      { href: Routes.Subnautica2Beginner, label: 'Rota inicial' },
      { href: Routes.Subnautica2Resources, label: 'Recursos' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank e O2' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
    ],
    sourcesTitle: 'Fontes',
    sourceBody:
      'Verificado em 28 de maio de 2026 com Steam Early Access e dicas atuais de exploração. Coordenadas fixas ficam para revisão pós-patch.',
    cardKicker: 'Route map card',
    cardBody:
      'Rotas, referências, O2, biomas, bases e navegação co-op com poucos spoilers.',
    cardTypeLabel: 'Tipo',
    cardTypeValue: 'Hub de mapa',
    cardVerifiedLabel: 'Verificado',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  'es-419': {
    metadata: {
      title: 'Subnautica 2 mapa y biomas - rutas y bases',
      description:
        'Guía en español latino de mapa y biomas en Subnautica 2: rutas, referencias, recursos, peligros, bases y navegación co-op.',
    },
    eyebrow: 'Mapa de rutas Subnautica 2',
    title: 'Mapa y biomas de Subnautica 2',
    description:
      'El mejor mapa inicial no es una imagen llena de spoilers. Es una lista de rutas repetibles: inicio, objetivo, riesgo y regreso.',
    quickLabel: 'Respuesta rápida',
    quickAnswer:
      'Explora Subnautica 2 en vueltas, no en líneas al azar. Una referencia, una meta, notas de O2 y peligro, y regresar antes del caos.',
    contentsLabel: 'Contenido',
    routeTitle: 'Cómo crear una ruta útil',
    routeSteps: [
      {
        title: 'Empieza desde una referencia',
        body: 'Lifepod, hatch de base, entrada de cueva o relieve visible. Si el inicio cuesta explicar, la ruta no está lista.',
      },
      {
        title: 'Una tarea por salida',
        body: 'Farmear, escanear, explorar bioma y planear base son salidas distintas.',
      },
      {
        title: 'Marca puntos de presión',
        body: 'Anota visibilidad, O2, criaturas, giros confusos y regreso seguro, no solo recursos.',
      },
      {
        title: 'Convierte loops en páginas',
        body: 'Cuando una ruta funciona dos veces, conéctala con recursos, crafting, Air Tank, Scanner o bases.',
      },
    ],
    visualTitle: 'Tablero de mapa',
    visualItems: [
      {
        label: 'Ancla',
        value: 'Referencia',
        note: 'Toda ruta necesita inicio fácil de reencontrar.',
      },
      {
        label: 'Meta',
        value: 'Una tarea',
        note: 'Farm, scan, scout o base. No todo junto.',
      },
      {
        label: 'Riesgo',
        value: 'Regreso',
        note: 'O2 y peligro importan tanto como loot.',
      },
    ],
    tableTitle: 'Plantilla de bioma',
    tableHeaders: ['Campo', 'Qué anotar'],
    tableRows: [
      [
        'Seguridad',
        'Criaturas, visibilidad, presión de O2 y regreso confiable.',
      ],
      ['Recursos comunes', 'Materiales que valen una ruta repetida.'],
      [
        'Recursos raros',
        'Materiales para ruta dedicada o revisión post-parche.',
      ],
      [
        'Potencial de base',
        'Espacio, energía, almacenamiento y facilidad para el equipo.',
      ],
      [
        'Valor de progreso',
        'Fragmentos, scans, nuevas rutas o razones para volver.',
      ],
    ],
    cautionTitle: 'No confíes en memoria de escape',
    cautionBody:
      'Una ruta que casi salió mal todavía no es ruta. Anota el punto de regreso, el problema de O2 y la referencia que perdiste.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '¿Ya hay mapa completo?',
        body: 'En Early Access, los detalles pueden cambiar. Las rutas verificables son más seguras.',
      },
      {
        title: '¿Dónde hacer la primera base?',
        body: 'En un lugar fácil de encontrar, cerca de recursos comunes, seguro y conectado a una ruta repetida.',
      },
      {
        title: '¿Qué marcar en co-op?',
        body: 'Nombres cortos de ruta, referencias compartidas, roles de almacenamiento y peligros.',
      },
    ],
    readNextTitle: 'Leer después',
    related: [
      { href: Routes.Subnautica2Beginner, label: 'Ruta inicial' },
      { href: Routes.Subnautica2Resources, label: 'Recursos' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank y O2' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
    ],
    sourcesTitle: 'Fuentes',
    sourceBody:
      'Verificado el 28 de mayo de 2026 con Steam Early Access y consejos actuales de exploración. Coordenadas fijas quedan para revisión post-parche.',
    cardKicker: 'Route map card',
    cardBody:
      'Rutas, referencias, O2, biomas, bases y navegación co-op con pocos spoilers.',
    cardTypeLabel: 'Tipo',
    cardTypeValue: 'Hub de mapa',
    cardVerifiedLabel: 'Verificado',
    cardStatusLabel: 'Estado',
    cardStatusValue: 'Early Access',
  },
  ko: {
    metadata: {
      title: 'Subnautica 2 지도와 바이옴 - 루트와 기지 계획',
      description:
        'Subnautica 2 한국어 지도와 바이옴 가이드. 루트, 랜드마크, 자원, 위험, 기지 위치, 협동 내비게이션을 정리합니다.',
    },
    eyebrow: 'Subnautica 2 루트 지도',
    title: 'Subnautica 2 지도와 바이옴 가이드',
    description:
      '초반에 좋은 지도는 스포일러가 가득한 큰 이미지가 아닙니다. 다시 달릴 수 있는 루트 모음입니다. 출발점, 목표, 위험, 돌아올 때를 정합니다.',
    quickLabel: '빠른 답',
    quickAnswer:
      'Subnautica 2는 무작정 직선으로 헤엄치기보다 루프로 탐험하세요. 랜드마크 하나, 목표 하나, O2와 위험 메모, 그리고 루트가 복잡해지기 전에 귀환하는 것이 좋습니다.',
    contentsLabel: '목차',
    routeTitle: '쓸모 있는 루트 만들기',
    routeSteps: [
      {
        title: '명확한 랜드마크에서 시작',
        body: 'Lifepod, 기지 해치, 동굴 입구, 눈에 띄는 지형을 쓰세요. 시작점을 설명하기 어렵다면 아직 루트가 아닙니다.',
      },
      {
        title: '한 번에 한 가지 목표',
        body: '자원 파밍, 설계도 스캔, 바이옴 정찰, 기지 계획은 서로 다른 잠수입니다.',
      },
      {
        title: '압박 지점 표시',
        body: '자원만 적지 마세요. 시야, O2, 적대 생물, 헷갈리는 갈림길, 안전 귀환 지점을 남기세요.',
      },
      {
        title: '루프를 페이지로 연결',
        body: '두 번 성공한 루트는 자원, 제작, Air Tank, Scanner, 기지 위치 페이지와 연결하세요.',
      },
    ],
    visualTitle: '지도 메모 보드',
    visualItems: [
      {
        label: '기준',
        value: '랜드마크',
        note: '모든 루트에는 다시 찾을 출발점이 필요합니다.',
      },
      {
        label: '목표',
        value: '한 가지',
        note: '파밍, scan, 정찰, 기지. 섞지 마세요.',
      },
      {
        label: '위험',
        value: '귀환 신호',
        note: 'O2와 위험 메모는 자원만큼 중요합니다.',
      },
    ],
    tableTitle: '바이옴 메모 템플릿',
    tableHeaders: ['항목', '기록할 것'],
    tableRows: [
      ['안전', '적대 생물, 시야, O2 압박, 돌아오는 길의 안정성.'],
      ['일반 자원', '반복해서 가져올 가치가 있는 재료.'],
      ['희귀 자원', '전용 루트나 패치 후 확인이 필요한 재료.'],
      ['기지 가능성', '공간, 전력, 보관, 팀원이 찾기 쉬운지.'],
      ['진행 가치', '파편, 스캔, 새 루트, 업그레이드 후 다시 올 이유.'],
    ],
    cautionTitle: '아슬아슬한 탈출 기억을 믿지 않기',
    cautionBody:
      '간신히 살아 돌아온 길은 아직 루트가 아닙니다. 돌아올 신호, O2 문제, 놓친 랜드마크를 적어 두세요.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '완성된 지도가 있나요?',
        body: 'Early Access에서는 세부 정보가 바뀔 수 있어 검증 가능한 루트 중심이 더 안전합니다.',
      },
      {
        title: '첫 기지는 어디가 좋나요?',
        body: '찾기 쉽고, 자주 쓰는 자원과 가깝고, 반복 귀환이 안전한 곳이 좋습니다.',
      },
      {
        title: '협동에서는 무엇을 표시해야 하나요?',
        body: '짧은 루트 이름, 공통 랜드마크, 보관 역할, 위험 메모가 중요합니다.',
      },
    ],
    readNextTitle: '다음 글',
    related: [
      { href: Routes.Subnautica2Beginner, label: '초보 루트' },
      { href: Routes.Subnautica2Resources, label: '자원 가이드' },
      { href: Routes.Subnautica2Crafting, label: '제작 가이드' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank와 O2' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner 가이드' },
    ],
    sourcesTitle: '출처 메모',
    sourceBody:
      '2026년 5월 28일 Steam Early Access 페이지와 현재 탐험 팁을 확인했습니다. 고정 좌표는 패치 후 검증 전까지 피합니다.',
    cardKicker: 'Route map card',
    cardBody:
      '랜드마크, O2, 바이옴 메모, 기지, 협동 내비게이션을 위한 스포일러 적은 루트 계획입니다.',
    cardTypeLabel: '유형',
    cardTypeValue: '지도 허브',
    cardVerifiedLabel: '확인',
    cardStatusLabel: '상태',
    cardStatusValue: 'Early Access',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 マップとバイオーム - ルートと基地計画',
      description:
        'Subnautica 2 日本語マップとバイオームガイド。ルート、目印、資源、危険、基地候補、協力プレイのナビを整理します。',
    },
    eyebrow: 'Subnautica 2 ルートマップ',
    title: 'Subnautica 2 マップとバイオームガイド',
    description:
      '序盤に役立つマップは、ネタバレだらけの大きな画像ではありません。出発点、目的、危険、戻る合図をまとめたルート集です。',
    quickLabel: '要点',
    quickAnswer:
      'Subnautica 2 はランダムな直線ではなく、ループで探索します。目印一つ、目的一つ、O2 と危険のメモ、そしてルートが崩れる前の帰還が大事です。',
    contentsLabel: '目次',
    routeTitle: '使えるルートの作り方',
    routeSteps: [
      {
        title: '分かりやすい目印から始める',
        body: 'Lifepod、基地ハッチ、洞窟入口、目立つ地形を使います。開始地点を説明できないなら、まだルートではありません。',
      },
      {
        title: '一回の潜水に一つの目的',
        body: '資源集め、設計図スキャン、バイオーム偵察、基地計画は別の潜水です。',
      },
      {
        title: '圧力点を記録する',
        body: '資源だけでなく、視界、O2、敵、迷いやすい曲がり角、安全な帰還点も書きます。',
      },
      {
        title: 'ループをページにつなげる',
        body: '二回成功したルートは、資源、制作、Air Tank、Scanner、基地ページにリンクします。',
      },
    ],
    visualTitle: 'マップメモ板',
    visualItems: [
      {
        label: '基準',
        value: '目印',
        note: 'すべてのルートに再発見できる開始点が必要です。',
      },
      {
        label: '目的',
        value: '一つ',
        note: 'ファーム、scan、偵察、基地。混ぜすぎないこと。',
      },
      {
        label: '危険',
        value: '帰還合図',
        note: 'O2 と危険メモは資源と同じくらい重要です。',
      },
    ],
    tableTitle: 'バイオームメモテンプレート',
    tableHeaders: ['項目', '記録すること'],
    tableRows: [
      ['安全性', '敵対生物、視界、O2 圧、帰り道の安定性。'],
      ['一般資源', '繰り返し集める価値がある素材。'],
      ['レア資源', '専用ルートやパッチ後確認が必要な素材。'],
      ['基地候補', 'スペース、電力、保管、チームが見つけやすいか。'],
      ['進行価値', '破片、スキャン、新ルート、アップグレード後に戻る理由。'],
    ],
    cautionTitle: '焦って逃げた記憶を信じすぎない',
    cautionBody:
      'ぎりぎり生還した道は、まだルートではありません。戻る合図、O2 問題、見落とした目印を書き残します。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '完全なマップはありますか？',
        body: 'Early Access では細部が変わる可能性があるため、検証できるルート中心が安全です。',
      },
      {
        title: '最初の基地はどこがいい？',
        body: '見つけやすく、よく使う資源に近く、帰還が安全で、繰り返すルートに近い場所です。',
      },
      {
        title: '協力プレイでは何をマークする？',
        body: '短いルート名、共通の目印、保管役割、危険メモが役立ちます。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2Beginner, label: '初心者ルート' },
      { href: Routes.Subnautica2Resources, label: '資源ガイド' },
      { href: Routes.Subnautica2Crafting, label: '制作ガイド' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank と O2' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner ガイド' },
    ],
    sourcesTitle: '出典メモ',
    sourceBody:
      '2026年5月28日に Steam Early Access ページと現在の探索ヒントを確認しました。固定座標はパッチ後の確認まで避けます。',
    cardKicker: 'Route map card',
    cardBody:
      '目印、O2、バイオームメモ、基地、協力ナビのためのネタバレ少なめルート計画です。',
    cardTypeLabel: '種類',
    cardTypeValue: 'マップハブ',
    cardVerifiedLabel: '確認',
    cardStatusLabel: '状態',
    cardStatusValue: 'Early Access',
  },
};

function getCopy(locale: Locale): MapCopy {
  return mapCopy[locale] ?? mapCopy.en;
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
    pathname: Routes.Subnautica2Map,
  });
}

export default async function MapGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <LocalizedResourceGuidePage
      copy={{ ...copy, publishedAt: PUBLISHED_AT, updatedAt: UPDATED_AT }}
      icon={MapIcon}
      locale={locale}
      pathname={Routes.Subnautica2Map}
      sources={sharedSources}
    />
  );
}
