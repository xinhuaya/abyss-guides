import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { MapPinnedIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type BaseLocationsCopy = ResourceGuideCopy & {
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
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-best-base-locations/',
    label: 'PC Gamer best base locations',
  },
  {
    href: 'https://bossdown.com/guides/subnautica-2-best-base-locations/',
    label: 'BossDown base location guide',
  },
];

const baseLocationsCopy: Record<string, BaseLocationsCopy> = {
  en: {
    metadata: {
      title: 'Best Base Locations in Subnautica 2 - Early and Mid Route Spots',
      description:
        'A spoiler-light guide to the best Subnautica 2 base locations, including starter bases, Old Habitat staging, Cicada Wreck routes, co-op hubs, and deep-route caveats.',
    },
    eyebrow: 'Subnautica 2 base locations',
    title: 'Best Base Locations in Subnautica 2',
    description:
      'The best base location is not always the prettiest view. It is the place that saves time every time you leave, return, craft, store, and head out again.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Start with a practical base near the Lifepod and early resource loop. Add a second staging base only when a route proves worth repeating, such as Old Habitat objectives, Cicada Wreck trips, or later rare-material routes. Do not build deep before oxygen, power, storage, and vehicle access are ready.',
    contentsLabel: 'Contents',
    routeTitle: 'Best base location types',
    routeSteps: [
      {
        title: 'Starter base: Lifepod resource loop',
        body: 'This is the safest first choice. It supports Copper, Silver, Scanner progress, basic food and water, and short returns while you learn the map.',
      },
      {
        title: 'Route base: Old Habitat staging',
        body: 'Build a small outpost only after that route matters for objectives or repeat materials. It should be a staging point, not a second main base yet.',
      },
      {
        title: 'Wreck base: Cicada Wreck checks',
        body: 'A compact base near a wreck route can help with scans and longer trips, but test visibility and oxygen pressure before committing materials.',
      },
      {
        title: 'Deep base: rare-material routes',
        body: 'Late bases should support Atacamite, Troilite, Metal Farm setup, or vehicle staging. Wait until power and return routes are boring.',
      },
    ],
    visualTitle: 'Base location board',
    visualItems: [
      {
        label: 'Safe',
        value: 'Starter loop',
        note: 'Near Lifepod, early resources, and easy returns.',
      },
      {
        label: 'Useful',
        value: 'Route outpost',
        note: 'Small support base for repeated objectives.',
      },
      {
        label: 'Late',
        value: 'Deep staging',
        note: 'Only after O2, power, storage, and vehicles are ready.',
      },
    ],
    tableTitle: 'Base location scorecard',
    tableHeaders: ['Location test', 'What to check'],
    tableRows: [
      [
        'Return route',
        'Can you find it from more than one direction without panic?',
      ],
      [
        'Resource loop',
        'Does it shorten Copper, Silver, food, water, scans, or rare-material trips?',
      ],
      [
        'Power plan',
        'Can you keep the base useful without fighting the environment every visit?',
      ],
      [
        'Storage value',
        'Will this base reduce inventory friction, or just split your materials?',
      ],
      [
        'Co-op clarity',
        'Can teammates understand the location from a short route name?',
      ],
    ],
    cautionTitle: 'Do not marry the first beautiful view',
    cautionBody:
      'Subnautica 2 is very good at making you want to build where the view looks dramatic. Test the boring stuff first: oxygen, return route, storage need, power, nearby resources, and whether you can explain the place to someone else.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Where is the best first base location in Subnautica 2?',
        body: 'Near the Lifepod and starter resource loop. It is safer, easier to find, and close to the materials that matter during the first sessions.',
      },
      {
        title: 'Should I build near Old Habitat early?',
        body: 'Only after the route becomes useful. A small staging base can help, but building a full second base too early spreads your materials thin.',
      },
      {
        title: 'What makes a base location bad?',
        body: 'Bad locations are hard to find, far from repeated resources, awkward to power, dangerous on routine returns, or impossible to explain in co-op.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2BaseBuilding, label: 'Base Building Guide' },
      { href: Routes.Subnautica2Biomes, label: 'Biomes Guide' },
      { href: Routes.Subnautica2Map, label: 'Map and Biomes' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Coop, label: 'Co-op Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 23, 2026 against Steam plus current PC Gamer and BossDown base-location coverage. Treat exact distances and route details as patch-sensitive during Early Access.',
    cardKicker: 'Base location card',
    cardBody:
      'Route-first base placement for starter storage, Old Habitat staging, wreck checks, co-op hubs, and late rare-material routes.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Location guide',
    cardVerifiedLabel: 'Verified',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 最佳基地位置 - 前期、中期和深层路线选址',
      description:
        'Subnautica 2 中文最佳基地位置指南，整理 Lifepod 前期基地、Old Habitat 中转、Cicada Wreck 路线、联机中心和深层路线注意点。',
    },
    eyebrow: 'Subnautica 2 基地位置',
    title: 'Subnautica 2 最佳基地位置',
    description:
      '最佳基地位置不一定是风景最好的地方，而是你每次出门、回家、制作、储物、再出发时都能省时间的地方。',
    quickLabel: '快速答案',
    quickAnswer:
      '第一座基地优先建在 Lifepod 和前期资源循环附近。只有当某条路线值得反复跑时，再加第二个中转点，比如 Old Habitat 目标、Cicada Wreck 路线或后期稀有材料路线。氧气、供电、储物和载具没稳定前，不要太早往深处建大基地。',
    contentsLabel: '目录',
    routeTitle: '适合建基地的位置类型',
    routeSteps: [
      {
        title: '前期基地：Lifepod 资源循环',
        body: '这是最稳的第一选择。它服务 Copper、Silver、Scanner 进度、基础食物和水，也方便你熟悉地图时快速回家。',
      },
      {
        title: '路线基地：Old Habitat 中转',
        body: '只有当这条路线开始服务任务或重复材料时，再建一个小前哨。它更像中转站，不要太早当第二主基地。',
      },
      {
        title: '残骸基地：Cicada Wreck 检查路线',
        body: '靠近残骸路线的小基地可以帮助扫描和长距离往返，但建之前先测试能见度和氧气压力。',
      },
      {
        title: '深层基地：稀有材料路线',
        body: '后期基地应该服务 Atacamite、Troilite、Metal Farm 或载具中转。等供电和回程路线都很稳后再建。',
      },
    ],
    visualTitle: '基地位置板',
    visualItems: [
      {
        label: '安全',
        value: '前期循环',
        note: '靠近 Lifepod、前期资源和安全回程。',
      },
      {
        label: '实用',
        value: '路线前哨',
        note: '给重复任务和目标做小型支援。',
      },
      {
        label: '后期',
        value: '深层中转',
        note: '等 O2、供电、储物和载具准备好。',
      },
    ],
    tableTitle: '基地位置评分表',
    tableHeaders: ['选址测试', '要检查什么'],
    tableRows: [
      ['回程路线', '能不能从不止一个方向找回来，而且不慌？'],
      ['资源循环', '是否缩短 Copper、Silver、食物、水、扫描或稀有材料路线？'],
      ['供电方案', '每次回来都能稳定供电，而不是和环境较劲吗？'],
      ['储物价值', '它是在减少背包压力，还是把材料分散得更乱？'],
      ['联机清晰度', '队友能不能通过一个短路线名理解位置？'],
    ],
    cautionTitle: '别和第一处漂亮风景绑定',
    cautionBody:
      'Subnautica 2 很容易让人因为风景想原地建家。先测试无聊但重要的东西：氧气、回程、储物、供电、附近资源，以及能不能向别人说清楚位置。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 第一座基地建哪里最好？',
        body: 'Lifepod 和前期资源循环附近最稳。安全、好找，并且靠近前几局真正重要的材料。',
      },
      {
        title: '前期要不要在 Old Habitat 附近建基地？',
        body: '等这条路线真的有用再建。小型中转站可以，但太早建完整第二基地会分散材料。',
      },
      {
        title: '什么位置不适合建基地？',
        body: '不好找、远离重复资源、供电麻烦、日常往返危险、联机时说不清楚的位置都不适合。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2BaseBuilding, label: '基地建造指南' },
      { href: Routes.Subnautica2Map, label: '地图与生态区' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Coop, label: '联机指南' },
      { href: Routes.Subnautica2AirTank, label: '气瓶和氧气' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 23 日核对 Steam，以及当前 PC Gamer 和 BossDown 基地位置内容。抢先体验期间，具体距离和路线细节都应视为会随补丁变化。',
    cardKicker: '基地位置卡',
    cardBody:
      '按路线规划前期储物、Old Habitat 中转、残骸检查、联机中心和后期稀有材料基地。',
    cardTypeLabel: '类型',
    cardTypeValue: '位置指南',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
  ru: {
    metadata: {
      title: 'Лучшие места для базы в Subnautica 2 - ранние и средние маршруты',
      description:
        'Русский гид по лучшим местам для базы Subnautica 2: Lifepod, Old Habitat, Cicada Wreck, co-op hub и глубокие маршруты.',
    },
    eyebrow: 'Места для базы Subnautica 2',
    title: 'Лучшие места для базы в Subnautica 2',
    description:
      'Лучшее место для базы не всегда самое красивое. Это место, которое экономит время каждый раз, когда вы уходите и возвращаетесь.',
    quickLabel: 'Короткий ответ',
    quickAnswer:
      'Начните с практичной базы рядом с Lifepod и ранним ресурсным кругом. Второй outpost делайте только для повторяемого маршрута: Old Habitat, Cicada Wreck или поздние редкие материалы.',
    contentsLabel: 'Содержание',
    routeTitle: 'Типы мест для базы',
    routeSteps: [
      {
        title: 'Стартовая база: Lifepod loop',
        body: 'Самый безопасный первый выбор: Copper, Silver, Scanner, еда, вода и быстрый возврат.',
      },
      {
        title: 'Маршрутная база: Old Habitat',
        body: 'Небольшой outpost полезен, когда эта дорога становится повторяемой целью.',
      },
      {
        title: 'Wreck база: Cicada Wreck',
        body: 'Помогает со сканами и длинными вылазками, но сначала проверьте видимость и O2.',
      },
      {
        title: 'Глубокая база: редкие материалы',
        body: 'Для Atacamite, Troilite, Metal Farm и транспорта. Ждите стабильной энергии и возврата.',
      },
    ],
    visualTitle: 'Доска мест базы',
    visualItems: [
      {
        label: 'Safe',
        value: 'Starter loop',
        note: 'Lifepod, ранние ресурсы, быстрый возврат.',
      },
      {
        label: 'Useful',
        value: 'Route outpost',
        note: 'Маленькая поддержка повторяемых целей.',
      },
      {
        label: 'Late',
        value: 'Deep staging',
        note: 'После O2, энергии, хранения и транспорта.',
      },
    ],
    tableTitle: 'Проверка места базы',
    tableHeaders: ['Тест', 'Что проверить'],
    tableRows: [
      ['Возврат', 'Можно ли найти базу с разных направлений без паники?'],
      [
        'Ресурсы',
        'Сокращает ли она Copper, Silver, еду, воду, сканы или редкие маршруты?',
      ],
      ['Энергия', 'Будет ли база полезной без постоянной борьбы с условиями?'],
      ['Хранение', 'Уменьшает ли она хаос инвентаря или дробит материалы?'],
      ['Co-op', 'Поймут ли teammates место по короткому имени маршрута?'],
    ],
    cautionTitle: 'Не влюбляйтесь в первый красивый вид',
    cautionBody:
      'Сначала проверьте скучное: кислород, путь назад, хранение, энергию, ресурсы рядом и можно ли объяснить место другому игроку.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Где строить первую базу?',
        body: 'Рядом с Lifepod и ранним ресурсным loop. Это безопасно, понятно и полезно в первых сессиях.',
      },
      {
        title: 'Стоит ли рано строить у Old Habitat?',
        body: 'Только когда маршрут действительно нужен. Маленький outpost лучше полной второй базы.',
      },
      {
        title: 'Что делает место плохим?',
        body: 'Сложный поиск, мало повторяемых ресурсов, проблемы с энергией, опасный возврат или плохое объяснение в co-op.',
      },
    ],
    readNextTitle: 'Дальше',
    related: [
      { href: Routes.Subnautica2BaseBuilding, label: 'База и строительство' },
      { href: Routes.Subnautica2Map, label: 'Карта и биомы' },
      { href: Routes.Subnautica2Resources, label: 'Ресурсы' },
      { href: Routes.Subnautica2Coop, label: 'Co-op' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank и O2' },
    ],
    sourcesTitle: 'Источники',
    sourceBody:
      'Проверено 23 мая 2026 по Steam, PC Gamer и BossDown. Точные дистанции и детали маршрутов могут меняться в Early Access.',
    cardKicker: 'Base location card',
    cardBody:
      'Места для starter storage, Old Habitat, wreck routes, co-op hubs и поздних редких материалов.',
    cardTypeLabel: 'Тип',
    cardTypeValue: 'Гид по местам',
    cardVerifiedLabel: 'Проверено',
    cardStatusLabel: 'Статус',
    cardStatusValue: 'Early Access',
  },
  de: {
    metadata: {
      title: 'Beste Basisstandorte in Subnautica 2 - frühe und mittlere Routen',
      description:
        'Deutscher Guide zu den besten Basisstandorten in Subnautica 2: Lifepod, Old Habitat, Cicada Wreck, Co-op Hub und tiefe Routen.',
    },
    eyebrow: 'Subnautica 2 Basisstandorte',
    title: 'Beste Basisstandorte in Subnautica 2',
    description:
      'Der beste Standort ist nicht immer die schönste Aussicht. Er spart Zeit bei jedem Start, jeder Rückkehr und jedem Crafting-Loop.',
    quickLabel: 'Kurzantwort',
    quickAnswer:
      'Starte mit einer praktischen Basis nahe Lifepod und frühem Ressourcen-Loop. Ein zweiter Außenposten lohnt sich erst für wiederholte Routen wie Old Habitat, Cicada Wreck oder späte rare Materialien.',
    contentsLabel: 'Inhalt',
    routeTitle: 'Standorttypen',
    routeSteps: [
      {
        title: 'Starterbasis: Lifepod Loop',
        body: 'Sicherster Start: Copper, Silver, Scanner, Nahrung, Wasser und kurze Rückwege.',
      },
      {
        title: 'Routenbasis: Old Habitat',
        body: 'Kleiner Außenposten, sobald die Route für Ziele oder Material wichtig wird.',
      },
      {
        title: 'Wrackbasis: Cicada Wreck',
        body: 'Hilft bei Scans und längeren Trips. Vorher Sicht und O2 testen.',
      },
      {
        title: 'Tiefe Basis: rare Routen',
        body: 'Für Atacamite, Troilite, Metal Farm und Fahrzeuge. Erst mit stabiler Energie und Rückweg.',
      },
    ],
    visualTitle: 'Standort-Board',
    visualItems: [
      {
        label: 'Sicher',
        value: 'Starter loop',
        note: 'Lifepod, frühe Ressourcen, leichte Rückkehr.',
      },
      {
        label: 'Nützlich',
        value: 'Route outpost',
        note: 'Kleine Unterstützung für wiederholte Ziele.',
      },
      {
        label: 'Spät',
        value: 'Deep staging',
        note: 'Nach O2, Strom, Lager und Fahrzeugen.',
      },
    ],
    tableTitle: 'Standort-Check',
    tableHeaders: ['Test', 'Was prüfen'],
    tableRows: [
      ['Rückweg', 'Findest du die Basis aus mehreren Richtungen ohne Panik?'],
      [
        'Ressourcen',
        'Verkürzt sie Copper, Silver, Nahrung, Wasser, Scans oder rare Trips?',
      ],
      ['Strom', 'Bleibt die Basis nutzbar, ohne jedes Mal zu kämpfen?'],
      ['Lager', 'Reduziert sie Inventarstress oder verteilt sie Materialien?'],
      [
        'Co-op',
        'Versteht das Team den Standort über einen kurzen Routennamen?',
      ],
    ],
    cautionTitle: 'Nicht die erste schöne Aussicht heiraten',
    cautionBody:
      'Prüfe zuerst O2, Rückweg, Lagerbedarf, Strom, Ressourcen und ob du den Ort anderen erklären kannst.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Wo ist die beste erste Basis?',
        body: 'Nahe Lifepod und frühem Ressourcen-Loop. Sicher, gut auffindbar und in den ersten Sessions nützlich.',
      },
      {
        title: 'Früh bei Old Habitat bauen?',
        body: 'Nur wenn die Route wiederholt wichtig wird. Ein kleiner Außenposten reicht zuerst.',
      },
      {
        title: 'Was ist ein schlechter Standort?',
        body: 'Schwer zu finden, wenig wiederholte Ressourcen, Stromprobleme, gefährliche Rückwege oder schlechte Co-op-Erklärung.',
      },
    ],
    readNextTitle: 'Weiterlesen',
    related: [
      { href: Routes.Subnautica2BaseBuilding, label: 'Basisbau' },
      { href: Routes.Subnautica2Map, label: 'Karte und Biome' },
      { href: Routes.Subnautica2Resources, label: 'Ressourcen' },
      { href: Routes.Subnautica2Coop, label: 'Co-op Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank und O2' },
    ],
    sourcesTitle: 'Quellen',
    sourceBody:
      'Geprüft am 23. Mai 2026 mit Steam, PC Gamer und BossDown. Distanzen und Routendetails bleiben in Early Access patch-sensitiv.',
    cardKicker: 'Base location card',
    cardBody:
      'Standorte für Starterlager, Old Habitat, Wrackrouten, Co-op Hubs und späte rare Materialien.',
    cardTypeLabel: 'Typ',
    cardTypeValue: 'Standort-Guide',
    cardVerifiedLabel: 'Geprüft',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  fr: {
    metadata: {
      title:
        'Meilleurs emplacements de base Subnautica 2 - routes début et milieu',
      description:
        'Guide français des meilleurs emplacements de base Subnautica 2: Lifepod, Old Habitat, Cicada Wreck, hub co-op et routes profondes.',
    },
    eyebrow: 'Emplacements de base Subnautica 2',
    title: 'Meilleurs emplacements de base dans Subnautica 2',
    description:
      'Le meilleur emplacement n’est pas toujours la plus belle vue. C’est celui qui fait gagner du temps à chaque départ et retour.',
    quickLabel: 'Réponse courte',
    quickAnswer:
      'Commence avec une base pratique près du Lifepod et du loop de ressources. Ajoute un avant-poste seulement pour une route répétée: Old Habitat, Cicada Wreck ou matériaux rares plus tard.',
    contentsLabel: 'Sommaire',
    routeTitle: 'Types d’emplacements',
    routeSteps: [
      {
        title: 'Base starter: loop Lifepod',
        body: 'Choix le plus sûr: Copper, Silver, Scanner, nourriture, eau et retours courts.',
      },
      {
        title: 'Base route: Old Habitat',
        body: 'Petit avant-poste quand cette route devient un objectif répété.',
      },
      {
        title: 'Base wreck: Cicada Wreck',
        body: 'Utile pour scans et longues sorties. Tester visibilité et O2 avant.',
      },
      {
        title: 'Base profonde: routes rares',
        body: 'Pour Atacamite, Troilite, Metal Farm et staging véhicule, après énergie et retour fiables.',
      },
    ],
    visualTitle: 'Tableau emplacements',
    visualItems: [
      {
        label: 'Sûr',
        value: 'Starter loop',
        note: 'Lifepod, ressources de départ, retour simple.',
      },
      {
        label: 'Utile',
        value: 'Route outpost',
        note: 'Petit support pour objectifs répétés.',
      },
      {
        label: 'Tardif',
        value: 'Deep staging',
        note: 'Après O2, énergie, stockage et véhicules.',
      },
    ],
    tableTitle: 'Score d’emplacement',
    tableHeaders: ['Test', 'À vérifier'],
    tableRows: [
      ['Retour', 'Peux-tu retrouver la base depuis plusieurs directions?'],
      [
        'Ressources',
        'Raccourcit-elle Copper, Silver, nourriture, eau, scans ou routes rares?',
      ],
      ['Énergie', 'La base reste-t-elle utile sans lutte permanente?'],
      [
        'Stockage',
        'Réduit-elle le stress inventaire ou disperse-t-elle les matériaux?',
      ],
      ['Co-op', 'L’équipe comprend-elle l’endroit avec un nom court?'],
    ],
    cautionTitle: 'Ne t’attache pas à la première belle vue',
    cautionBody:
      'Teste d’abord O2, retour, stockage, énergie, ressources proches et facilité à expliquer l’endroit.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Où faire la première base?',
        body: 'Près du Lifepod et du loop de départ. C’est sûr, facile à retrouver et utile tôt.',
      },
      {
        title: 'Construire tôt près de Old Habitat?',
        body: 'Seulement si la route sert vraiment. Un petit avant-poste suffit au début.',
      },
      {
        title: 'Qu’est-ce qu’un mauvais spot?',
        body: 'Difficile à retrouver, loin des ressources répétées, dur à alimenter, dangereux ou impossible à expliquer en co-op.',
      },
    ],
    readNextTitle: 'Lire ensuite',
    related: [
      { href: Routes.Subnautica2BaseBuilding, label: 'Base building' },
      { href: Routes.Subnautica2Map, label: 'Carte et biomes' },
      { href: Routes.Subnautica2Resources, label: 'Ressources' },
      { href: Routes.Subnautica2Coop, label: 'Guide co-op' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank et O2' },
    ],
    sourcesTitle: 'Sources',
    sourceBody:
      'Vérifié le 23 mai 2026 avec Steam, PC Gamer et BossDown. Distances et routes restent sensibles aux patchs en Early Access.',
    cardKicker: 'Base location card',
    cardBody:
      'Emplacements pour stockage starter, Old Habitat, wreck routes, hubs co-op et matériaux rares tardifs.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Guide emplacements',
    cardVerifiedLabel: 'Vérifié',
    cardStatusLabel: 'Statut',
    cardStatusValue: 'Early Access',
  },
  'pt-BR': {
    metadata: {
      title:
        'Melhores locais de base em Subnautica 2 - rotas iniciais e médias',
      description:
        'Guia brasileiro dos melhores locais de base em Subnautica 2: Lifepod, Old Habitat, Cicada Wreck, hub co-op e rotas profundas.',
    },
    eyebrow: 'Locais de base Subnautica 2',
    title: 'Melhores locais de base em Subnautica 2',
    description:
      'O melhor local nem sempre é a vista mais bonita. É onde cada saída, volta, craft e armazenamento ficam mais rápidos.',
    quickLabel: 'Resposta rápida',
    quickAnswer:
      'Comece com uma base prática perto do Lifepod e do loop inicial. Adicione um posto só quando uma rota valer repetição: Old Habitat, Cicada Wreck ou materiais raros depois.',
    contentsLabel: 'Conteúdo',
    routeTitle: 'Tipos de local de base',
    routeSteps: [
      {
        title: 'Base inicial: loop Lifepod',
        body: 'Escolha mais segura: Copper, Silver, Scanner, comida, água e retorno curto.',
      },
      {
        title: 'Base de rota: Old Habitat',
        body: 'Posto pequeno quando essa rota vira objetivo repetido.',
      },
      {
        title: 'Base de wreck: Cicada Wreck',
        body: 'Ajuda em scans e viagens longas, mas teste visibilidade e O2 antes.',
      },
      {
        title: 'Base profunda: rotas raras',
        body: 'Para Atacamite, Troilite, Metal Farm e veículos, depois de energia e retorno estáveis.',
      },
    ],
    visualTitle: 'Quadro de locais',
    visualItems: [
      {
        label: 'Seguro',
        value: 'Starter loop',
        note: 'Lifepod, recursos iniciais e retorno fácil.',
      },
      {
        label: 'Útil',
        value: 'Route outpost',
        note: 'Suporte pequeno para objetivos repetidos.',
      },
      {
        label: 'Depois',
        value: 'Deep staging',
        note: 'Após O2, energia, armazenamento e veículos.',
      },
    ],
    tableTitle: 'Checklist de local',
    tableHeaders: ['Teste', 'O que checar'],
    tableRows: [
      ['Retorno', 'Dá para achar de mais de uma direção sem pânico?'],
      [
        'Recursos',
        'Encurta Copper, Silver, comida, água, scans ou rotas raras?',
      ],
      ['Energia', 'A base fica útil sem brigar com o ambiente?'],
      ['Armazenamento', 'Reduz atrito ou espalha materiais?'],
      ['Co-op', 'O time entende o lugar por um nome curto?'],
    ],
    cautionTitle: 'Não case com a primeira vista bonita',
    cautionBody:
      'Teste primeiro O2, retorno, armazenamento, energia, recursos próximos e se você consegue explicar o local.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Onde fazer a primeira base?',
        body: 'Perto do Lifepod e do loop inicial. É seguro, fácil de achar e útil nas primeiras sessões.',
      },
      {
        title: 'Vale construir cedo perto do Old Habitat?',
        body: 'Só quando a rota for útil. Um posto pequeno é melhor que uma segunda base completa cedo demais.',
      },
      {
        title: 'O que torna um local ruim?',
        body: 'Difícil de achar, longe de recursos repetidos, ruim de energizar, perigoso ou confuso em co-op.',
      },
    ],
    readNextTitle: 'Leia a seguir',
    related: [
      { href: Routes.Subnautica2BaseBuilding, label: 'Base building' },
      { href: Routes.Subnautica2Map, label: 'Mapa e biomas' },
      { href: Routes.Subnautica2Resources, label: 'Recursos' },
      { href: Routes.Subnautica2Coop, label: 'Guia co-op' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank e O2' },
    ],
    sourcesTitle: 'Fontes',
    sourceBody:
      'Verificado em 23 de maio de 2026 com Steam, PC Gamer e BossDown. Distâncias e rotas podem mudar no Early Access.',
    cardKicker: 'Base location card',
    cardBody:
      'Locais para armazenamento inicial, Old Habitat, wreck routes, hubs co-op e rotas raras.',
    cardTypeLabel: 'Tipo',
    cardTypeValue: 'Guia de locais',
    cardVerifiedLabel: 'Verificado',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  'es-419': {
    metadata: {
      title:
        'Mejores lugares de base en Subnautica 2 - rutas iniciales y medias',
      description:
        'Guía en español latino de mejores lugares de base en Subnautica 2: Lifepod, Old Habitat, Cicada Wreck, hub co-op y rutas profundas.',
    },
    eyebrow: 'Lugares de base Subnautica 2',
    title: 'Mejores lugares de base en Subnautica 2',
    description:
      'El mejor lugar no siempre es la mejor vista. Es el punto que ahorra tiempo cada vez que sales, vuelves, crafteas y guardas.',
    quickLabel: 'Respuesta rápida',
    quickAnswer:
      'Empieza con una base práctica cerca del Lifepod y el loop inicial. Agrega un puesto solo cuando una ruta se repita: Old Habitat, Cicada Wreck o materiales raros más tarde.',
    contentsLabel: 'Contenido',
    routeTitle: 'Tipos de lugar de base',
    routeSteps: [
      {
        title: 'Base inicial: loop Lifepod',
        body: 'Opción más segura: Copper, Silver, Scanner, comida, agua y regreso corto.',
      },
      {
        title: 'Base de ruta: Old Habitat',
        body: 'Puesto pequeño cuando esa ruta se vuelve objetivo repetido.',
      },
      {
        title: 'Base de wreck: Cicada Wreck',
        body: 'Ayuda con scans y viajes largos, pero prueba visibilidad y O2 antes.',
      },
      {
        title: 'Base profunda: rutas raras',
        body: 'Para Atacamite, Troilite, Metal Farm y vehículos, después de energía y regreso estables.',
      },
    ],
    visualTitle: 'Tablero de lugares',
    visualItems: [
      {
        label: 'Seguro',
        value: 'Starter loop',
        note: 'Lifepod, recursos iniciales y regreso fácil.',
      },
      {
        label: 'Útil',
        value: 'Route outpost',
        note: 'Apoyo pequeño para objetivos repetidos.',
      },
      {
        label: 'Después',
        value: 'Deep staging',
        note: 'Tras O2, energía, almacenamiento y vehículos.',
      },
    ],
    tableTitle: 'Checklist de lugar',
    tableHeaders: ['Prueba', 'Qué revisar'],
    tableRows: [
      ['Regreso', '¿Puedes encontrarlo desde más de una dirección sin pánico?'],
      [
        'Recursos',
        '¿Acorta Copper, Silver, comida, agua, scans o rutas raras?',
      ],
      ['Energía', '¿La base sigue útil sin pelear con el entorno?'],
      ['Almacenamiento', '¿Reduce fricción o reparte materiales de más?'],
      ['Co-op', '¿El equipo entiende el lugar por un nombre corto?'],
    ],
    cautionTitle: 'No te cases con la primera vista bonita',
    cautionBody:
      'Prueba primero O2, regreso, almacenamiento, energía, recursos cercanos y si puedes explicar el lugar.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '¿Dónde hacer la primera base?',
        body: 'Cerca del Lifepod y el loop inicial. Es seguro, fácil de encontrar y útil al comienzo.',
      },
      {
        title: '¿Construir temprano cerca de Old Habitat?',
        body: 'Solo cuando la ruta sea útil. Un puesto pequeño gana a una segunda base completa demasiado pronto.',
      },
      {
        title: '¿Qué hace malo un lugar?',
        body: 'Difícil de encontrar, lejos de recursos repetidos, mala energía, regreso peligroso o confuso en co-op.',
      },
    ],
    readNextTitle: 'Leer después',
    related: [
      { href: Routes.Subnautica2BaseBuilding, label: 'Base building' },
      { href: Routes.Subnautica2Map, label: 'Mapa y biomas' },
      { href: Routes.Subnautica2Resources, label: 'Recursos' },
      { href: Routes.Subnautica2Coop, label: 'Guía co-op' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank y O2' },
    ],
    sourcesTitle: 'Fuentes',
    sourceBody:
      'Verificado el 23 de mayo de 2026 con Steam, PC Gamer y BossDown. Distancias y rutas pueden cambiar en Early Access.',
    cardKicker: 'Base location card',
    cardBody:
      'Lugares para almacenamiento inicial, Old Habitat, wreck routes, hubs co-op y rutas raras.',
    cardTypeLabel: 'Tipo',
    cardTypeValue: 'Guía de lugares',
    cardVerifiedLabel: 'Verificado',
    cardStatusLabel: 'Estado',
    cardStatusValue: 'Early Access',
  },
  ko: {
    metadata: {
      title: 'Subnautica 2 최고의 기지 위치 - 초반과 중반 루트',
      description:
        'Subnautica 2 한국어 최고의 기지 위치 가이드. Lifepod, Old Habitat, Cicada Wreck, 협동 허브, 깊은 루트를 정리합니다.',
    },
    eyebrow: 'Subnautica 2 기지 위치',
    title: 'Subnautica 2 최고의 기지 위치',
    description:
      '최고의 위치는 가장 예쁜 전망이 아닐 수 있습니다. 나가고, 돌아오고, 제작하고, 보관할 때마다 시간을 아끼는 곳입니다.',
    quickLabel: '빠른 답',
    quickAnswer:
      '첫 기지는 Lifepod와 초반 자원 루프 근처가 좋습니다. Old Habitat, Cicada Wreck, 후반 희귀 재료 루트처럼 반복 가치가 생길 때만 작은 전초 기지를 추가하세요.',
    contentsLabel: '목차',
    routeTitle: '기지 위치 유형',
    routeSteps: [
      {
        title: '초반 기지: Lifepod 루프',
        body: '가장 안전한 첫 선택입니다. Copper, Silver, Scanner, 음식, 물, 빠른 귀환을 지원합니다.',
      },
      {
        title: '루트 기지: Old Habitat',
        body: '그 루트가 반복 목표가 된 뒤 작은 전초 기지로 쓰세요.',
      },
      {
        title: '잔해 기지: Cicada Wreck',
        body: '스캔과 긴 이동에 도움 되지만 시야와 O2를 먼저 테스트하세요.',
      },
      {
        title: '깊은 기지: 희귀 재료',
        body: 'Atacamite, Troilite, Metal Farm, 차량 루트용입니다. 전력과 귀환이 안정된 뒤에 하세요.',
      },
    ],
    visualTitle: '기지 위치 보드',
    visualItems: [
      {
        label: '안전',
        value: 'Starter loop',
        note: 'Lifepod, 초반 자원, 쉬운 귀환.',
      },
      {
        label: '실용',
        value: 'Route outpost',
        note: '반복 목표를 위한 작은 지원.',
      },
      {
        label: '후반',
        value: 'Deep staging',
        note: 'O2, 전력, 보관, 차량 이후.',
      },
    ],
    tableTitle: '위치 체크표',
    tableHeaders: ['테스트', '확인할 것'],
    tableRows: [
      ['귀환', '여러 방향에서 당황하지 않고 찾을 수 있나요?'],
      ['자원', 'Copper, Silver, 음식, 물, 스캔, 희귀 루트를 줄이나요?'],
      ['전력', '환경과 싸우지 않고 기지를 유지할 수 있나요?'],
      ['보관', '인벤토리 부담을 줄이나요, 아니면 재료를 더 흩뜨리나요?'],
      ['협동', '짧은 루트 이름으로 팀이 이해할 수 있나요?'],
    ],
    cautionTitle: '첫 예쁜 풍경에 묶이지 않기',
    cautionBody:
      '먼저 O2, 귀환, 보관, 전력, 주변 자원, 그리고 다른 사람에게 설명할 수 있는지 확인하세요.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '첫 기지는 어디가 좋나요?',
        body: 'Lifepod와 초반 루프 근처입니다. 안전하고 찾기 쉽고 초반에 유용합니다.',
      },
      {
        title: 'Old Habitat 근처에 빨리 지어도 되나요?',
        body: '그 루트가 실제로 반복될 때만 하세요. 처음에는 작은 전초 기지가 좋습니다.',
      },
      {
        title: '나쁜 위치는 무엇인가요?',
        body: '찾기 어렵고, 반복 자원에서 멀고, 전력이 불편하고, 귀환이 위험하거나 협동 설명이 어려운 곳입니다.',
      },
    ],
    readNextTitle: '다음 글',
    related: [
      { href: Routes.Subnautica2BaseBuilding, label: '기지 건설' },
      { href: Routes.Subnautica2Map, label: '지도와 바이옴' },
      { href: Routes.Subnautica2Resources, label: '자원 가이드' },
      { href: Routes.Subnautica2Coop, label: '협동 가이드' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank와 O2' },
    ],
    sourcesTitle: '출처 메모',
    sourceBody:
      '2026년 5월 23일 Steam, PC Gamer, BossDown 자료를 확인했습니다. 거리와 루트 세부 사항은 Early Access 중 바뀔 수 있습니다.',
    cardKicker: 'Base location card',
    cardBody:
      '초반 보관, Old Habitat, wreck routes, 협동 허브, 후반 희귀 재료용 위치입니다.',
    cardTypeLabel: '유형',
    cardTypeValue: '위치 가이드',
    cardVerifiedLabel: '확인',
    cardStatusLabel: '상태',
    cardStatusValue: 'Early Access',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 おすすめ基地場所 - 序盤と中盤ルート',
      description:
        'Subnautica 2 日本語おすすめ基地場所ガイド。Lifepod、Old Habitat、Cicada Wreck、協力ハブ、深いルートを整理します。',
    },
    eyebrow: 'Subnautica 2 基地場所',
    title: 'Subnautica 2 おすすめ基地場所',
    description:
      '最高の場所は一番きれいな景色とは限りません。出発、帰還、制作、保管のたびに時間を節約できる場所です。',
    quickLabel: '要点',
    quickAnswer:
      '最初は Lifepod と序盤資源ループの近くに実用基地を作ります。Old Habitat、Cicada Wreck、後半レア素材ルートのように反復価値が出たら小さな前哨基地を追加します。',
    contentsLabel: '目次',
    routeTitle: '基地場所タイプ',
    routeSteps: [
      {
        title: '序盤基地: Lifepod ループ',
        body: '最も安全な最初の選択です。Copper、Silver、Scanner、食料、水、短い帰還を支えます。',
      },
      {
        title: 'ルート基地: Old Habitat',
        body: 'そのルートが繰り返す目的になってから、小さな前哨基地として使います。',
      },
      {
        title: '残骸基地: Cicada Wreck',
        body: 'スキャンや長い移動に役立ちますが、視界と O2 を先に確認します。',
      },
      {
        title: '深層基地: レア素材',
        body: 'Atacamite、Troilite、Metal Farm、乗り物用です。電力と帰還が安定してから。',
      },
    ],
    visualTitle: '基地場所ボード',
    visualItems: [
      {
        label: '安全',
        value: 'Starter loop',
        note: 'Lifepod、序盤資源、簡単な帰還。',
      },
      { label: '実用', value: 'Route outpost', note: '反復目的の小さな支援。' },
      {
        label: '後半',
        value: 'Deep staging',
        note: 'O2、電力、保管、乗り物の後。',
      },
    ],
    tableTitle: '場所チェック表',
    tableHeaders: ['テスト', '確認すること'],
    tableRows: [
      ['帰還', '複数方向から慌てず見つけられますか？'],
      [
        '資源',
        'Copper、Silver、食料、水、スキャン、レアルートを短くしますか？',
      ],
      ['電力', '毎回環境と戦わず基地を使えますか？'],
      ['保管', '持ち物の負担を減らしますか、それとも素材を分散しますか？'],
      ['協力', '短いルート名でチームに伝わりますか？'],
    ],
    cautionTitle: '最初の美しい景色に決めすぎない',
    cautionBody:
      'まず O2、帰還、保管、電力、近くの資源、他人に説明できるかを確認します。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '最初の基地はどこがいい？',
        body: 'Lifepod と序盤ループの近くです。安全で見つけやすく、序盤に役立ちます。',
      },
      {
        title: 'Old Habitat 近くに早く建てる？',
        body: 'そのルートが本当に必要になってからです。最初は小さな前哨基地で十分です。',
      },
      {
        title: '悪い場所とは？',
        body: '見つけにくい、反復資源から遠い、電力が面倒、帰還が危険、協力で説明しにくい場所です。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2BaseBuilding, label: '基地建築' },
      { href: Routes.Subnautica2Map, label: 'マップとバイオーム' },
      { href: Routes.Subnautica2Resources, label: '資源ガイド' },
      { href: Routes.Subnautica2Coop, label: '協力ガイド' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank と O2' },
    ],
    sourcesTitle: '出典メモ',
    sourceBody:
      '2026年5月23日に Steam、PC Gamer、BossDown を確認しました。距離やルート詳細は Early Access 中に変わる可能性があります。',
    cardKicker: 'Base location card',
    cardBody:
      '序盤保管、Old Habitat、wreck routes、協力ハブ、後半レア素材用の基地場所です。',
    cardTypeLabel: '種類',
    cardTypeValue: '場所ガイド',
    cardVerifiedLabel: '確認',
    cardStatusLabel: '状態',
    cardStatusValue: 'Early Access',
  },
};

function getCopy(locale: Locale): BaseLocationsCopy {
  return baseLocationsCopy[locale] ?? baseLocationsCopy.en;
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
    pathname: Routes.Subnautica2BestBaseLocations,
  });
}

export default async function BestBaseLocationsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <LocalizedResourceGuidePage
      copy={copy}
      icon={MapPinnedIcon}
      locale={locale}
      pathname={Routes.Subnautica2BestBaseLocations}
      sources={sharedSources}
    />
  );
}
