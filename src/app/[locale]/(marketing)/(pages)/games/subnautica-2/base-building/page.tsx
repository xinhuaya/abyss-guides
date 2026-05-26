import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { HammerIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type BaseCopy = ResourceGuideCopy & {
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
    href: 'https://www.pcgamesn.com/subnautica-2/base-building',
    label: 'PCGamesN base building guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-developer-video-reveals-a-brand-new-base-building-system-with-some-pretty-fabulous-windows/',
    label: 'PC Gamer base building coverage',
  },
];

const baseCopy: Record<string, BaseCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Base Building Guide - First Base and Expansion',
      description:
        'A spoiler-light Subnautica 2 base building guide for first base location, Habitat Builder, power, storage, route placement, co-op bases, and expansion planning.',
    },
    eyebrow: 'Subnautica 2 first base',
    title: 'Subnautica 2 Base Building Guide',
    description:
      'A good first base is not the prettiest thing you can build. It is the place that makes the next three dives shorter, calmer, and less annoying.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Build your first Subnautica 2 base near routes you repeat: Copper, Silver, Scanner fragments, oxygen safety, food, and return landmarks. Get the Habitat Builder path moving, place a simple room and hatch, power it, then add storage before you chase a beautiful layout.',
    contentsLabel: 'Contents',
    routeTitle: 'First base order',
    routeSteps: [
      {
        title: 'Choose a useful route hub',
        body: 'Pick a spot you can find from more than one direction. Early beauty matters less than a reliable path home and nearby materials you actually use.',
      },
      {
        title: 'Unlock building before overplanning',
        body: 'Base building depends on the Habitat Builder path and scans. If the blueprint side is behind, spend the next dive scanning instead of hoarding random parts.',
      },
      {
        title: 'Power and hatch before decoration',
        body: 'A simple powered room with a hatch beats a huge dark shell. Build the working version first, then make it pretty after the loop pays off.',
      },
      {
        title: 'Label storage early',
        body: 'Separate common resources, rare materials, processed parts, organics, and personal gear. This matters even more in co-op.',
      },
    ],
    visualTitle: 'First base build board',
    visualItems: [
      {
        label: 'Place',
        value: 'Route hub',
        note: 'Close to repeated resources, not just a nice view.',
      },
      {
        label: 'Start',
        value: 'Room + power',
        note: 'Hatch, power, storage, then expansion.',
      },
      {
        label: 'Grow',
        value: 'Staging base',
        note: 'Support deeper routes, vehicles, and co-op traffic.',
      },
    ],
    tableTitle: 'First base priority table',
    tableHeaders: ['Base priority', 'Why it matters'],
    tableRows: [
      [
        'Location',
        'A base should shorten routes you repeat, not force a scenic commute.',
      ],
      [
        'Power',
        'Crafting, storage use, and later systems feel better when power is solved first.',
      ],
      [
        'Storage',
        'Good lockers save more time than a bigger room with messy piles.',
      ],
      [
        'Crafting access',
        'Materials become progress faster when fabrication is close to the route.',
      ],
      [
        'Expansion room',
        'Leave space for vehicle support, production, and co-op traffic.',
      ],
    ],
    cautionTitle: 'Do not build a museum first',
    cautionBody:
      'Subnautica 2 gives you room to make a gorgeous base, and you should. Just not before it works. If the base does not help you breathe, store, craft, power, and return safely, it is decoration pretending to be progress.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Where should I build my first Subnautica 2 base?',
        body: 'Build near repeatable early routes, safe visibility, common resources, and landmarks you can describe to yourself or teammates.',
      },
      {
        title: 'What should the first base include?',
        body: 'Start with a basic room, hatch, power, storage, and crafting access. Add expansion only after the base is helping your routes.',
      },
      {
        title: 'Is base building different in Subnautica 2?',
        body: 'Yes. Current coverage points to a more flexible building system, but the survival logic is the same: location, power, storage, and routes first.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2HabitatBuilder,
        label: 'Habitat Builder Guide',
      },
      { href: Routes.Subnautica2Map, label: 'Map and Biomes' },
      {
        href: Routes.Subnautica2ScannerStation,
        label: 'Scanner Station Guide',
      },
      { href: Routes.Subnautica2Beacon, label: 'Beacon Guide' },
      { href: Routes.Subnautica2RepairTool, label: 'Repair Tool Guide' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium Location Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2CopperWire, label: 'Copper Wire Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
      { href: Routes.Subnautica2Coop, label: 'Co-op Guide' },
      { href: Routes.Subnautica2Beginner, label: 'Beginner Route' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 23, 2026 against Steam, PCGamesN base building notes, and PC Gamer coverage of the newer base building system. Recipes, scans, and build costs can change during Early Access.',
    cardKicker: 'Base planning card',
    cardBody:
      'First-base order for route placement, Habitat Builder progress, power, storage, crafting, and co-op expansion.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Base guide',
    cardVerifiedLabel: 'Verified',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 基地建造指南 - 第一座基地、供电和扩建',
      description:
        'Subnautica 2 中文基地建造指南，整理第一座基地位置、Habitat Builder、供电、储物、路线选址、联机基地和扩建规划。',
    },
    eyebrow: 'Subnautica 2 第一座基地',
    title: 'Subnautica 2 基地建造指南',
    description:
      '第一座好基地不一定是最漂亮的。它应该让接下来的三次下水更短、更稳、更少来回折腾。',
    quickLabel: '快速答案',
    quickAnswer:
      '第一座 Subnautica 2 基地应建在你会反复跑的路线旁边：Copper、Silver、Scanner 碎片、氧气安全、食物和回程地标。先推进 Habitat Builder，做一个简单房间和舱门，解决供电，再加储物，最后再追求漂亮布局。',
    contentsLabel: '目录',
    routeTitle: '第一座基地建造顺序',
    routeSteps: [
      {
        title: '先选路线中心',
        body: '位置要能从不止一个方向找回来。前期漂亮风景不如稳定回家路线和附近常用材料重要。',
      },
      {
        title: '先解锁建造，再过度规划',
        body: '基地建造依赖 Habitat Builder 和扫描进度。如果蓝图没跟上，下一趟应该去扫描，而不是继续囤一堆暂时用不上的材料。',
      },
      {
        title: '供电和舱门先于装饰',
        body: '一个有电、有舱门的小房间，比一大坨黑漆漆的空壳有用。先做能工作的版本，再慢慢变漂亮。',
      },
      {
        title: '尽早给仓库分类',
        body: '常用资源、稀有材料、加工零件、有机物、个人装备分开。联机时这件事尤其重要。',
      },
    ],
    visualTitle: '第一座基地建造板',
    visualItems: [
      {
        label: '位置',
        value: '路线中心',
        note: '靠近反复使用的资源，而不是只看风景。',
      },
      {
        label: '开局',
        value: '房间 + 供电',
        note: '舱门、供电、储物，然后再扩建。',
      },
      {
        label: '扩展',
        value: '中转基地',
        note: '服务深层路线、载具和联机往返。',
      },
    ],
    tableTitle: '第一座基地优先级表',
    tableHeaders: ['基地优先级', '为什么重要'],
    tableRows: [
      ['位置', '基地应该缩短重复路线，而不是逼你每天风景通勤。'],
      ['供电', '制作、储物和后续系统都需要先稳定供电。'],
      ['储物', '整理好的柜子比更大的乱房间省时间。'],
      ['制作入口', '制作点靠近路线，材料才能更快变成进度。'],
      ['扩建空间', '给载具、生产系统和联机往返留空间。'],
    ],
    cautionTitle: '别把第一座基地建成博物馆',
    cautionBody:
      'Subnautica 2 的基地可以很好看，也应该好看。但如果它还不能帮你呼吸、储物、制作、供电和安全回家，那它只是伪装成进度的装饰。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 第一座基地建在哪里？',
        body: '建在可重复的前期路线、安全能见度、常用资源，以及你能向自己或队友说清楚的地标附近。',
      },
      {
        title: '第一座基地需要什么？',
        body: '先做基础房间、舱门、供电、储物和制作入口。等它真的减少路线压力后再扩建。',
      },
      {
        title: 'Subnautica 2 基地建造有变化吗？',
        body: '有。当前报道显示建造系统更灵活，但生存逻辑没变：位置、供电、储物和路线优先。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Map, label: '地图与生态区' },
      { href: Routes.Subnautica2ScannerStation, label: 'Scanner Station 指南' },
      {
        href: Routes.Subnautica2BatteryTerminal,
        label: 'Battery Terminal Guide',
      },
      { href: Routes.Subnautica2Beacon, label: 'Beacon 指南' },
      { href: Routes.Subnautica2RepairTool, label: 'Repair Tool 指南' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium 位置指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
      { href: Routes.Subnautica2Coop, label: '联机指南' },
      { href: Routes.Subnautica2Beginner, label: '新手路线' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 23 日核对 Steam、PCGamesN 基地建造说明和 PC Gamer 关于新基地系统的报道。配方、扫描和建造成本可能随抢先体验补丁变化。',
    cardKicker: '基地规划卡',
    cardBody: '整理路线选址、Habitat Builder、供电、储物、制作和联机扩建顺序。',
    cardTypeLabel: '类型',
    cardTypeValue: '基地指南',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
  ru: {
    metadata: {
      title: 'Subnautica 2 база - первая база, энергия и расширение',
      description:
        'Русский гид по базе Subnautica 2: первая база, Habitat Builder, энергия, хранение, маршруты, co-op база и расширение.',
    },
    eyebrow: 'Первая база Subnautica 2',
    title: 'Subnautica 2: база и строительство',
    description:
      'Хорошая первая база не обязана быть красивой. Она должна сделать следующие погружения короче, спокойнее и понятнее.',
    quickLabel: 'Короткий ответ',
    quickAnswer:
      'Стройте первую базу рядом с повторяемыми маршрутами: Copper, Silver, Scanner, O2, еда и ориентиры домой. Продвиньте Habitat Builder, поставьте простую комнату и hatch, дайте питание, затем хранение.',
    contentsLabel: 'Содержание',
    routeTitle: 'Порядок первой базы',
    routeSteps: [
      {
        title: 'Выбрать узел маршрутов',
        body: 'Место должно находиться с разных направлений. Красивый вид позже, надежный путь домой сейчас.',
      },
      {
        title: 'Сначала открыть строительство',
        body: 'Если Habitat Builder или сканы отстают, следующий заплыв лучше потратить на blueprint progress.',
      },
      {
        title: 'Питание и hatch до декора',
        body: 'Маленькая рабочая база лучше большой темной оболочки. Сначала функция, потом красота.',
      },
      {
        title: 'Подписать хранение рано',
        body: 'Разделите common, rare, processed, organics и personal gear. В co-op это спасает сессии.',
      },
    ],
    visualTitle: 'Доска первой базы',
    visualItems: [
      {
        label: 'Место',
        value: 'Route hub',
        note: 'Близко к повторяемым ресурсам.',
      },
      {
        label: 'Старт',
        value: 'Room + power',
        note: 'Hatch, питание, хранение, потом расширение.',
      },
      {
        label: 'Рост',
        value: 'Staging base',
        note: 'Глубокие маршруты, транспорт и co-op трафик.',
      },
    ],
    tableTitle: 'Приоритет первой базы',
    tableHeaders: ['Приоритет', 'Зачем нужен'],
    tableRows: [
      ['Место', 'База должна сокращать повторяемые маршруты.'],
      [
        'Питание',
        'Крафт и будущие системы лучше работают после решения энергии.',
      ],
      [
        'Хранение',
        'Подписанные шкафы экономят больше времени, чем лишняя комната.',
      ],
      ['Крафт рядом', 'Материалы быстрее становятся прогрессом.'],
      [
        'Место под рост',
        'Оставьте место для транспорта, производства и команды.',
      ],
    ],
    cautionTitle: 'Не стройте музей первым',
    cautionBody:
      'Красивая база прекрасна, но сначала она должна помогать дышать, хранить, крафтить, питать системы и возвращаться домой.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Где строить первую базу?',
        body: 'Возле повторяемых ранних маршрутов, видимых ориентиров, безопасной зоны и частых ресурсов.',
      },
      {
        title: 'Что нужно в первой базе?',
        body: 'Комната, hatch, питание, хранение и доступ к крафту. Расширяйте после пользы для маршрутов.',
      },
      {
        title: 'Строительство изменилось?',
        body: 'Да, система выглядит гибче, но логика выживания прежняя: место, питание, хранение и маршруты.',
      },
    ],
    readNextTitle: 'Дальше',
    related: [
      { href: Routes.Subnautica2Map, label: 'Карта и биомы' },
      { href: Routes.Subnautica2Resources, label: 'Ресурсы' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium Location Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Крафт' },
      { href: Routes.Subnautica2Coop, label: 'Co-op' },
      { href: Routes.Subnautica2Beginner, label: 'Маршрут новичка' },
    ],
    sourcesTitle: 'Источники',
    sourceBody:
      'Проверено 23 мая 2026 по Steam, PCGamesN и PC Gamer. Стоимость, сканы и рецепты могут меняться в Early Access.',
    cardKicker: 'Base planning card',
    cardBody:
      'Порядок первой базы: маршрут, Habitat Builder, питание, хранение, крафт и co-op.',
    cardTypeLabel: 'Тип',
    cardTypeValue: 'Гид по базе',
    cardVerifiedLabel: 'Проверено',
    cardStatusLabel: 'Статус',
    cardStatusValue: 'Early Access',
  },
  de: {
    metadata: {
      title: 'Subnautica 2 Basisbau - erste Basis, Strom und Ausbau',
      description:
        'Deutscher Subnautica 2 Basisbau-Guide für erste Basis, Habitat Builder, Strom, Lager, Routenplatzierung, Co-op und Ausbau.',
    },
    eyebrow: 'Subnautica 2 erste Basis',
    title: 'Subnautica 2 Basisbau-Guide',
    description:
      'Eine gute erste Basis muss nicht die schönste sein. Sie soll die nächsten Tauchgänge kürzer, ruhiger und weniger nervig machen.',
    quickLabel: 'Kurzantwort',
    quickAnswer:
      'Baue die erste Basis nahe an Routen, die du wiederholst: Copper, Silver, Scanner, O2, Nahrung und Rückweg-Landmarken. Habitat Builder freischalten, einfacher Raum mit hatch, Strom, Lager, dann Ausbau.',
    contentsLabel: 'Inhalt',
    routeTitle: 'Reihenfolge der ersten Basis',
    routeSteps: [
      {
        title: 'Nützlichen Routen-Hub wählen',
        body: 'Der Ort sollte aus mehreren Richtungen auffindbar sein. Aussicht ist später, Rückweg jetzt.',
      },
      {
        title: 'Bauen erst freischalten',
        body: 'Wenn Habitat Builder oder Scans fehlen, ist der nächste Trip ein Scan-Trip.',
      },
      {
        title: 'Strom und hatch vor Deko',
        body: 'Ein kleiner funktionierender Raum schlägt eine große dunkle Hülle.',
      },
      {
        title: 'Lager früh beschriften',
        body: 'Common, rare, processed, organics und personal gear getrennt halten.',
      },
    ],
    visualTitle: 'Erste-Basis-Board',
    visualItems: [
      {
        label: 'Ort',
        value: 'Route hub',
        note: 'Nah an wiederholten Ressourcen.',
      },
      {
        label: 'Start',
        value: 'Room + power',
        note: 'Hatch, Strom, Lager, dann Ausbau.',
      },
      {
        label: 'Wachstum',
        value: 'Staging base',
        note: 'Tiefe Routen, Fahrzeuge und Co-op.',
      },
    ],
    tableTitle: 'Prioritäten der ersten Basis',
    tableHeaders: ['Priorität', 'Warum wichtig'],
    tableRows: [
      ['Standort', 'Die Basis soll Routen verkürzen.'],
      ['Strom', 'Crafting und spätere Systeme brauchen stabile Energie.'],
      ['Lager', 'Gute Locker sparen mehr Zeit als ein größerer Raum.'],
      ['Crafting-Zugang', 'Materialien werden schneller zu Fortschritt.'],
      ['Ausbaufläche', 'Platz für Fahrzeuge, Produktion und Teamverkehr.'],
    ],
    cautionTitle: 'Nicht zuerst ein Museum bauen',
    cautionBody:
      'Eine schöne Basis ist großartig. Aber zuerst muss sie Atmen, Lagern, Craften, Strom und Heimweg verbessern.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Wo erste Basis bauen?',
        body: 'Nahe an frühen Routen, klaren Landmarken, sicherer Sicht und häufigen Ressourcen.',
      },
      {
        title: 'Was braucht die erste Basis?',
        body: 'Raum, hatch, Strom, Lager und Crafting-Zugang. Ausbau erst nach Nutzen.',
      },
      {
        title: 'Ist Basisbau anders?',
        body: 'Ja, flexibler. Die Überlebenslogik bleibt: Standort, Strom, Lager und Routen zuerst.',
      },
    ],
    readNextTitle: 'Weiterlesen',
    related: [
      { href: Routes.Subnautica2Map, label: 'Karte und Biome' },
      { href: Routes.Subnautica2Resources, label: 'Ressourcen' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium Location Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting' },
      { href: Routes.Subnautica2Coop, label: 'Co-op Guide' },
      { href: Routes.Subnautica2Beginner, label: 'Anfängerroute' },
    ],
    sourcesTitle: 'Quellen',
    sourceBody:
      'Geprüft am 23. Mai 2026 mit Steam, PCGamesN und PC Gamer. Kosten, Scans und Rezepte können sich in Early Access ändern.',
    cardKicker: 'Base planning card',
    cardBody:
      'Erste Basis mit Route, Habitat Builder, Strom, Lager, Crafting und Co-op Ausbau.',
    cardTypeLabel: 'Typ',
    cardTypeValue: 'Basis-Guide',
    cardVerifiedLabel: 'Geprüft',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  fr: {
    metadata: {
      title: 'Subnautica 2 base building - première base, énergie et extension',
      description:
        'Guide français de base building Subnautica 2: première base, Habitat Builder, énergie, stockage, routes, co-op et extension.',
    },
    eyebrow: 'Première base Subnautica 2',
    title: 'Guide base building Subnautica 2',
    description:
      'Une bonne première base n’est pas forcément la plus belle. Elle doit rendre les prochaines plongées plus courtes, calmes et utiles.',
    quickLabel: 'Réponse courte',
    quickAnswer:
      'Construis la première base près des routes répétées: Copper, Silver, Scanner, O2, nourriture et repères de retour. Habitat Builder, petite pièce, hatch, énergie, stockage, puis extension.',
    contentsLabel: 'Sommaire',
    routeTitle: 'Ordre de première base',
    routeSteps: [
      {
        title: 'Choisir un hub de routes',
        body: 'L’endroit doit se retrouver depuis plusieurs directions. Le beau panorama vient après le retour fiable.',
      },
      {
        title: 'Débloquer avant de planifier',
        body: 'Si Habitat Builder ou les scans manquent, la prochaine sortie doit scanner.',
      },
      {
        title: 'Énergie et hatch avant déco',
        body: 'Une petite pièce alimentée vaut mieux qu’une grande coque sombre.',
      },
      {
        title: 'Nommer les coffres tôt',
        body: 'Sépare common, rare, processed, organics et équipement perso.',
      },
    ],
    visualTitle: 'Tableau première base',
    visualItems: [
      {
        label: 'Lieu',
        value: 'Route hub',
        note: 'Près des ressources répétées.',
      },
      {
        label: 'Départ',
        value: 'Room + power',
        note: 'Hatch, énergie, stockage, puis extension.',
      },
      {
        label: 'Suite',
        value: 'Staging base',
        note: 'Routes profondes, véhicules et co-op.',
      },
    ],
    tableTitle: 'Priorité première base',
    tableHeaders: ['Priorité', 'Pourquoi'],
    tableRows: [
      ['Emplacement', 'La base doit raccourcir les routes répétées.'],
      ['Énergie', 'Crafting et futurs systèmes ont besoin de puissance.'],
      [
        'Stockage',
        'Des coffres clairs font gagner plus de temps qu’une grande salle.',
      ],
      ['Accès crafting', 'Les matériaux deviennent plus vite du progrès.'],
      ['Place pour extension', 'Véhicules, production et circulation co-op.'],
    ],
    cautionTitle: 'Ne construis pas un musée en premier',
    cautionBody:
      'Une belle base est agréable. Mais d’abord elle doit aider à respirer, stocker, crafter, alimenter et rentrer vivant.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Où construire la première base?',
        body: 'Près des routes de départ, de repères clairs, de ressources fréquentes et d’une zone assez sûre.',
      },
      {
        title: 'Que mettre dans la première base?',
        body: 'Pièce, hatch, énergie, stockage et accès crafting. L’extension vient après l’utilité.',
      },
      {
        title: 'Le building change?',
        body: 'Oui, il semble plus flexible. Mais la logique survie reste: lieu, énergie, stockage, routes.',
      },
    ],
    readNextTitle: 'Lire ensuite',
    related: [
      { href: Routes.Subnautica2Map, label: 'Carte et biomes' },
      { href: Routes.Subnautica2Resources, label: 'Ressources' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium Location Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting' },
      { href: Routes.Subnautica2Coop, label: 'Guide co-op' },
      { href: Routes.Subnautica2Beginner, label: 'Route débutant' },
    ],
    sourcesTitle: 'Sources',
    sourceBody:
      'Vérifié le 23 mai 2026 avec Steam, PCGamesN et PC Gamer. Coûts, scans et recettes peuvent changer en Early Access.',
    cardKicker: 'Base planning card',
    cardBody:
      'Première base: route, Habitat Builder, énergie, stockage, crafting et extension co-op.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Guide base',
    cardVerifiedLabel: 'Vérifié',
    cardStatusLabel: 'Statut',
    cardStatusValue: 'Early Access',
  },
  'pt-BR': {
    metadata: {
      title: 'Subnautica 2 base building - primeira base, energia e expansão',
      description:
        'Guia brasileiro de base building em Subnautica 2: primeira base, Habitat Builder, energia, armazenamento, rotas, co-op e expansão.',
    },
    eyebrow: 'Primeira base Subnautica 2',
    title: 'Guia de base building de Subnautica 2',
    description:
      'Uma boa primeira base não precisa ser a mais bonita. Ela precisa deixar os próximos mergulhos mais curtos, calmos e úteis.',
    quickLabel: 'Resposta rápida',
    quickAnswer:
      'Construa a primeira base perto de rotas repetidas: Copper, Silver, Scanner, O2, comida e referências de retorno. Avance Habitat Builder, faça sala simples com hatch, energia, armazenamento e só depois expansão.',
    contentsLabel: 'Conteúdo',
    routeTitle: 'Ordem da primeira base',
    routeSteps: [
      {
        title: 'Escolha um hub de rotas',
        body: 'O ponto precisa ser fácil de achar de mais de uma direção. Vista bonita vem depois de retorno confiável.',
      },
      {
        title: 'Desbloqueie construção primeiro',
        body: 'Se Habitat Builder ou scans estão atrasados, a próxima saída é de scan.',
      },
      {
        title: 'Energia e hatch antes de decoração',
        body: 'Uma sala pequena ligada vale mais que uma estrutura grande e escura.',
      },
      {
        title: 'Separe armazenamento cedo',
        body: 'Comuns, raros, processados, orgânicos e gear pessoal em lugares diferentes.',
      },
    ],
    visualTitle: 'Quadro da primeira base',
    visualItems: [
      {
        label: 'Lugar',
        value: 'Route hub',
        note: 'Perto de recursos repetidos.',
      },
      {
        label: 'Início',
        value: 'Room + power',
        note: 'Hatch, energia, armazenamento, depois expansão.',
      },
      {
        label: 'Crescer',
        value: 'Staging base',
        note: 'Rotas profundas, veículos e co-op.',
      },
    ],
    tableTitle: 'Prioridade da primeira base',
    tableHeaders: ['Prioridade', 'Por que importa'],
    tableRows: [
      ['Local', 'A base deve encurtar rotas repetidas.'],
      ['Energia', 'Crafting e sistemas futuros precisam de energia estável.'],
      [
        'Armazenamento',
        'Baús claros economizam mais tempo que uma sala maior.',
      ],
      ['Crafting perto', 'Materiais viram progresso mais rápido.'],
      ['Espaço de expansão', 'Veículos, produção e tráfego co-op.'],
    ],
    cautionTitle: 'Não faça um museu primeiro',
    cautionBody:
      'Uma base bonita é ótima, mas primeiro ela precisa ajudar com O2, armazenamento, crafting, energia e retorno seguro.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Onde fazer a primeira base?',
        body: 'Perto de rotas iniciais, referências claras, recursos comuns e uma área segura o bastante.',
      },
      {
        title: 'O que colocar na primeira base?',
        body: 'Sala, hatch, energia, armazenamento e crafting. Expanda depois que ela ajudar suas rotas.',
      },
      {
        title: 'Base building mudou?',
        body: 'Sim, parece mais flexível. A lógica segue: local, energia, armazenamento e rotas primeiro.',
      },
    ],
    readNextTitle: 'Leia a seguir',
    related: [
      { href: Routes.Subnautica2Map, label: 'Mapa e biomas' },
      { href: Routes.Subnautica2Resources, label: 'Recursos' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium Location Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting' },
      { href: Routes.Subnautica2Coop, label: 'Guia co-op' },
      { href: Routes.Subnautica2Beginner, label: 'Rota inicial' },
    ],
    sourcesTitle: 'Fontes',
    sourceBody:
      'Verificado em 23 de maio de 2026 com Steam, PCGamesN e PC Gamer. Custos, scans e receitas podem mudar no Early Access.',
    cardKicker: 'Base planning card',
    cardBody:
      'Primeira base: rota, Habitat Builder, energia, armazenamento, crafting e expansão co-op.',
    cardTypeLabel: 'Tipo',
    cardTypeValue: 'Guia de base',
    cardVerifiedLabel: 'Verificado',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  'es-419': {
    metadata: {
      title: 'Subnautica 2 base building - primera base, energía y expansión',
      description:
        'Guía en español latino de base building en Subnautica 2: primera base, Habitat Builder, energía, almacenamiento, rutas, co-op y expansión.',
    },
    eyebrow: 'Primera base Subnautica 2',
    title: 'Guía de base building de Subnautica 2',
    description:
      'Una buena primera base no necesita ser la más bonita. Debe hacer los próximos buceos más cortos, tranquilos y útiles.',
    quickLabel: 'Respuesta rápida',
    quickAnswer:
      'Construye la primera base cerca de rutas repetidas: Copper, Silver, Scanner, O2, comida y referencias de regreso. Avanza Habitat Builder, haz sala simple con hatch, energía, almacenamiento y luego expansión.',
    contentsLabel: 'Contenido',
    routeTitle: 'Orden de primera base',
    routeSteps: [
      {
        title: 'Elige un hub de rutas',
        body: 'El punto debe encontrarse desde más de una dirección. La vista bonita viene después del regreso confiable.',
      },
      {
        title: 'Desbloquea construcción primero',
        body: 'Si faltan Habitat Builder o scans, la próxima salida debe ser de scan.',
      },
      {
        title: 'Energía y hatch antes de decoración',
        body: 'Una sala pequeña con energía vale más que una estructura grande y oscura.',
      },
      {
        title: 'Separa almacenamiento temprano',
        body: 'Comunes, raros, procesados, orgánicos y gear personal en lugares distintos.',
      },
    ],
    visualTitle: 'Tablero de primera base',
    visualItems: [
      {
        label: 'Lugar',
        value: 'Route hub',
        note: 'Cerca de recursos repetidos.',
      },
      {
        label: 'Inicio',
        value: 'Room + power',
        note: 'Hatch, energía, almacenamiento, luego expansión.',
      },
      {
        label: 'Crecer',
        value: 'Staging base',
        note: 'Rutas profundas, vehículos y co-op.',
      },
    ],
    tableTitle: 'Prioridad de primera base',
    tableHeaders: ['Prioridad', 'Por qué importa'],
    tableRows: [
      ['Ubicación', 'La base debe acortar rutas repetidas.'],
      ['Energía', 'Crafting y sistemas futuros necesitan energía estable.'],
      [
        'Almacenamiento',
        'Cofres claros ahorran más tiempo que una sala grande.',
      ],
      ['Crafting cerca', 'Los materiales se vuelven progreso más rápido.'],
      ['Espacio para crecer', 'Vehículos, producción y tráfico co-op.'],
    ],
    cautionTitle: 'No construyas un museo primero',
    cautionBody:
      'Una base bonita está genial, pero primero debe ayudar con O2, almacenamiento, crafting, energía y regreso seguro.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '¿Dónde hacer la primera base?',
        body: 'Cerca de rutas iniciales, referencias claras, recursos comunes y un área bastante segura.',
      },
      {
        title: '¿Qué poner en la primera base?',
        body: 'Sala, hatch, energía, almacenamiento y crafting. Expande cuando ya ayude tus rutas.',
      },
      {
        title: '¿Cambió el base building?',
        body: 'Sí, parece más flexible. La lógica sigue: lugar, energía, almacenamiento y rutas primero.',
      },
    ],
    readNextTitle: 'Leer después',
    related: [
      { href: Routes.Subnautica2Map, label: 'Mapa y biomas' },
      { href: Routes.Subnautica2Resources, label: 'Recursos' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium Location Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting' },
      { href: Routes.Subnautica2Coop, label: 'Guía co-op' },
      { href: Routes.Subnautica2Beginner, label: 'Ruta inicial' },
    ],
    sourcesTitle: 'Fuentes',
    sourceBody:
      'Verificado el 23 de mayo de 2026 con Steam, PCGamesN y PC Gamer. Costos, scans y recetas pueden cambiar en Early Access.',
    cardKicker: 'Base planning card',
    cardBody:
      'Primera base: ruta, Habitat Builder, energía, almacenamiento, crafting y expansión co-op.',
    cardTypeLabel: 'Tipo',
    cardTypeValue: 'Guía de base',
    cardVerifiedLabel: 'Verificado',
    cardStatusLabel: 'Estado',
    cardStatusValue: 'Early Access',
  },
  ko: {
    metadata: {
      title: 'Subnautica 2 기지 건설 가이드 - 첫 기지와 확장',
      description:
        'Subnautica 2 한국어 기지 건설 가이드. 첫 기지 위치, Habitat Builder, 전력, 보관, 루트 배치, 협동 기지와 확장을 정리합니다.',
    },
    eyebrow: 'Subnautica 2 첫 기지',
    title: 'Subnautica 2 기지 건설 가이드',
    description:
      '좋은 첫 기지는 가장 예쁜 건물이 아닙니다. 다음 잠수를 더 짧고 차분하고 덜 귀찮게 만드는 장소입니다.',
    quickLabel: '빠른 답',
    quickAnswer:
      '첫 기지는 반복 루트 근처에 지으세요. Copper, Silver, Scanner, O2, 음식, 귀환 랜드마크가 중요합니다. Habitat Builder를 진행하고, 간단한 방과 hatch, 전력, 보관을 먼저 만든 뒤 확장하세요.',
    contentsLabel: '목차',
    routeTitle: '첫 기지 순서',
    routeSteps: [
      {
        title: '루트 중심지 고르기',
        body: '여러 방향에서 다시 찾을 수 있어야 합니다. 멋진 경치보다 안정적인 귀환이 먼저입니다.',
      },
      {
        title: '건설 해금 먼저',
        body: 'Habitat Builder나 스캔이 부족하면 다음 잠수는 스캔 루트가 좋습니다.',
      },
      {
        title: '장식보다 전력과 hatch',
        body: '작고 전원이 들어오는 방이 큰 어두운 껍데기보다 낫습니다.',
      },
      {
        title: '보관 분류 일찍 하기',
        body: '일반, 희귀, 가공, 유기물, 개인 장비를 나누세요. 협동에서 특히 중요합니다.',
      },
    ],
    visualTitle: '첫 기지 보드',
    visualItems: [
      { label: '장소', value: 'Route hub', note: '반복 자원 가까이.' },
      {
        label: '시작',
        value: 'Room + power',
        note: 'Hatch, 전력, 보관, 그다음 확장.',
      },
      {
        label: '확장',
        value: 'Staging base',
        note: '깊은 루트, 탈것, 협동 이동.',
      },
    ],
    tableTitle: '첫 기지 우선순위',
    tableHeaders: ['우선순위', '중요한 이유'],
    tableRows: [
      ['위치', '기지는 반복 루트를 줄여야 합니다.'],
      ['전력', '제작과 이후 시스템에는 안정적인 전력이 필요합니다.'],
      ['보관', '정리된 보관함은 큰 방보다 시간을 더 아낍니다.'],
      ['제작 접근', '재료가 빠르게 진행으로 바뀝니다.'],
      ['확장 공간', '탈것, 생산, 협동 이동을 위한 공간입니다.'],
    ],
    cautionTitle: '처음부터 박물관을 만들지 않기',
    cautionBody:
      '예쁜 기지는 좋습니다. 하지만 먼저 O2, 보관, 제작, 전력, 안전한 귀환을 도와야 합니다.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '첫 기지는 어디에 지어야 하나요?',
        body: '초반 반복 루트, 명확한 랜드마크, 자주 쓰는 자원, 안전한 시야 근처가 좋습니다.',
      },
      {
        title: '첫 기지에 필요한 것은?',
        body: '방, hatch, 전력, 보관, 제작 접근입니다. 도움이 된 뒤 확장하세요.',
      },
      {
        title: '기지 건설이 달라졌나요?',
        body: '더 유연해 보입니다. 그래도 생존 논리는 위치, 전력, 보관, 루트가 먼저입니다.',
      },
    ],
    readNextTitle: '다음 글',
    related: [
      { href: Routes.Subnautica2Map, label: '지도와 바이옴' },
      { href: Routes.Subnautica2Resources, label: '자원 가이드' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium Location Guide' },
      { href: Routes.Subnautica2Crafting, label: '제작 가이드' },
      { href: Routes.Subnautica2Coop, label: '협동 가이드' },
      { href: Routes.Subnautica2Beginner, label: '초보 루트' },
    ],
    sourcesTitle: '출처 메모',
    sourceBody:
      '2026년 5월 23일 Steam, PCGamesN, PC Gamer 자료를 확인했습니다. 비용, 스캔, 레시피는 Early Access 중 바뀔 수 있습니다.',
    cardKicker: 'Base planning card',
    cardBody:
      '첫 기지: 루트, Habitat Builder, 전력, 보관, 제작, 협동 확장 순서.',
    cardTypeLabel: '유형',
    cardTypeValue: '기지 가이드',
    cardVerifiedLabel: '확인',
    cardStatusLabel: '상태',
    cardStatusValue: 'Early Access',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 基地建築ガイド - 最初の基地と拡張',
      description:
        'Subnautica 2 日本語基地建築ガイド。最初の基地、Habitat Builder、電力、保管、ルート配置、協力基地、拡張を整理します。',
    },
    eyebrow: 'Subnautica 2 最初の基地',
    title: 'Subnautica 2 基地建築ガイド',
    description:
      '良い最初の基地は一番きれいな建物ではありません。次の潜水を短く、落ち着いて、楽にする場所です。',
    quickLabel: '要点',
    quickAnswer:
      '最初の基地は反復ルートの近くに建てます。Copper、Silver、Scanner、O2、食料、帰還目印が大事です。Habitat Builder を進め、シンプルな部屋と hatch、電力、保管を先に作り、その後に拡張します。',
    contentsLabel: '目次',
    routeTitle: '最初の基地の順番',
    routeSteps: [
      {
        title: 'ルート中心を選ぶ',
        body: '複数方向から見つけ直せる場所が良いです。景色より、まず帰還の安定です。',
      },
      {
        title: '建築を先に解放する',
        body: 'Habitat Builder やスキャンが足りないなら、次の潜水はスキャン優先です。',
      },
      {
        title: '装飾より電力と hatch',
        body: '電力のある小部屋は、大きな暗い殻より役に立ちます。',
      },
      {
        title: '保管を早めに分ける',
        body: '一般、レア、加工、有機物、個人装備を分けます。協力プレイでは特に大事です。',
      },
    ],
    visualTitle: '最初の基地ボード',
    visualItems: [
      { label: '場所', value: 'Route hub', note: '反復資源の近く。' },
      {
        label: '開始',
        value: 'Room + power',
        note: 'Hatch、電力、保管、その後拡張。',
      },
      {
        label: '成長',
        value: 'Staging base',
        note: '深いルート、乗り物、協力移動。',
      },
    ],
    tableTitle: '最初の基地優先度',
    tableHeaders: ['優先度', '重要な理由'],
    tableRows: [
      ['場所', '基地は反復ルートを短くするべきです。'],
      ['電力', '制作と後のシステムには安定した電力が必要です。'],
      ['保管', '整理されたロッカーは大部屋より時間を節約します。'],
      ['制作アクセス', '素材が進行に変わるのが早くなります。'],
      ['拡張スペース', '乗り物、生産、協力プレイの移動用です。'],
    ],
    cautionTitle: '最初から博物館を作らない',
    cautionBody:
      'きれいな基地は素晴らしいです。ただし先に O2、保管、制作、電力、安全な帰還を助ける必要があります。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '最初の基地はどこに建てる？',
        body: '序盤ルート、分かりやすい目印、よく使う資源、安全な視界の近くです。',
      },
      {
        title: '最初の基地に必要なものは？',
        body: '部屋、hatch、電力、保管、制作アクセスです。役立ってから拡張します。',
      },
      {
        title: '基地建築は変わりましたか？',
        body: 'より柔軟に見えます。ただし生存の基本は場所、電力、保管、ルートです。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2Map, label: 'マップとバイオーム' },
      { href: Routes.Subnautica2Resources, label: '資源ガイド' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium Location Guide' },
      { href: Routes.Subnautica2Crafting, label: '制作ガイド' },
      { href: Routes.Subnautica2Coop, label: '協力ガイド' },
      { href: Routes.Subnautica2Beginner, label: '初心者ルート' },
    ],
    sourcesTitle: '出典メモ',
    sourceBody:
      '2026年5月23日に Steam、PCGamesN、PC Gamer を確認しました。コスト、スキャン、レシピは Early Access 中に変わる可能性があります。',
    cardKicker: 'Base planning card',
    cardBody:
      '最初の基地: ルート、Habitat Builder、電力、保管、制作、協力拡張の順番です。',
    cardTypeLabel: '種類',
    cardTypeValue: '基地ガイド',
    cardVerifiedLabel: '確認',
    cardStatusLabel: '状態',
    cardStatusValue: 'Early Access',
  },
};

function getCopy(locale: Locale): BaseCopy {
  return baseCopy[locale] ?? baseCopy.en;
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
    pathname: Routes.Subnautica2BaseBuilding,
  });
}

export default async function BaseBuildingGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <LocalizedResourceGuidePage
      copy={copy}
      icon={HammerIcon}
      locale={locale}
      pathname={Routes.Subnautica2BaseBuilding}
      sources={sharedSources}
    />
  );
}
