import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { UsersIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type CoopCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-23';
const UPDATED_AT = '2026-06-04';

const sharedSources = [
  {
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/',
    label: 'Official Steam page',
  },
  {
    href: 'https://www.xbox.com/en-US/games/store/subnautica-2/9pjpcb188svg',
    label: 'Official Xbox listing',
  },
];

const coopCopy: Record<string, CoopCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Multiplayer Co-op Guide, Player Count, and Crossplay',
      description:
        'A source-backed Subnautica 2 multiplayer guide for 2-4 player online co-op, crossplay, split-screen searches, team roles, shared bases, storage rules, and invite checks.',
    },
    eyebrow: 'Subnautica 2 multiplayer guide',
    title: 'Subnautica 2 Co-op Guide',
    description:
      'Co-op makes the ocean less lonely, but it also makes the base messy fast. The trick is simple: one shared plan before four players swim in four directions.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Subnautica 2 supports online multiplayer co-op for small teams. Official listings point to 2-4 player online co-op, Steam lists cross-platform multiplayer, and the checked store pages do not confirm split-screen or couch co-op. Before starting, agree on the host, voice chat, storage rules, route names, and what the team is crafting next.',
    fieldNotesTitle: 'Field notes for calmer co-op',
    fieldNotes: [
      {
        title: 'The host is a production decision',
        body: 'Pick the player with the most stable connection and the most consistent schedule. A co-op save is only fun if people can actually get back into it.',
      },
      {
        title: 'Name routes out loud',
        body: 'Northwest Silver, first Angel Comb, and Tadpole route are better names than “over there.” Shared labels prevent half the team from swimming to the wrong landmark.',
      },
      {
        title: 'Storage rules save friendships',
        body: 'Use separate boxes for raw ore, processed parts, power, and route gear. The first argument in survival co-op is usually “who used the last one?”',
      },
    ],
    routeChecklistTitle: 'Before starting co-op',
    routeChecklist: [
      'Choose the host and voice chat before creating the save.',
      'Agree on locker labels and what materials are protected.',
      'Name routes and Beacon colors before splitting up.',
      'Set one shared crafting target before everyone starts their own errand.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Co-op setup checklist',
    routeSteps: [
      {
        title: 'Pick the host and session rhythm',
        body: 'Decide who hosts the world and how often the group plays. A shared base gets awkward when the save lives with the person who is offline.',
      },
      {
        title: 'Use voice or short route calls',
        body: 'Until your group is used to the map, use Discord, party chat, or very short route names. “Silver cave behind base” beats a long speech underwater.',
      },
      {
        title: 'Name shared Beacons and lockers',
        body: 'Use plain labels like Base East, Silver Run, Wreck Drop, and Moonpool Parts. Nobody wants to decode private jokes while drowning.',
      },
      {
        title: 'Split jobs loosely',
        body: 'You do not need strict roles, but it helps if one player scans, one gathers, one builds, and one tracks recipes or upgrades.',
      },
      {
        title: 'Protect shared rare materials',
        body: 'Do not spend rare inputs on personal upgrades without a quick check. Co-op frustration usually starts with one missing material.',
      },
    ],
    visualTitle: 'Team role board',
    visualItems: [
      {
        label: 'Scout',
        value: 'Scan routes',
        note: 'Find fragments, danger, and return landmarks.',
      },
      {
        label: 'Builder',
        value: 'Base order',
        note: 'Keep power, storage, and expansion readable.',
      },
      {
        label: 'Runner',
        value: 'Resource loops',
        note: 'Repeat Copper, Silver, O2, and food routes.',
      },
    ],
    tableTitle: 'Co-op rules that save time',
    tableHeaders: ['Rule', 'Why it matters'],
    tableRows: [
      [
        'Name every route',
        'Landmark names are faster than trying to describe a reef while swimming.',
      ],
      [
        'Separate storage',
        'Common resources, rare materials, crafted parts, and personal gear should not share one box.',
      ],
      [
        'Label Beacons and lockers',
        'Short shared names make maps, base storage, and vehicle staging easier to understand after a break.',
      ],
      [
        'Agree on upgrades',
        'Shared materials should go toward the next team goal, not whoever opens the fabricator first.',
      ],
      [
        'Return before splitting too far',
        'Scattered players are fun until nobody has enough parts to finish the next recipe.',
      ],
      [
        'Check platform invites',
        'Cross-platform play is listed officially, but invite behavior can still vary by store, account, and patch.',
      ],
      [
        'Do not assume split screen',
        'Online co-op, crossplay, local co-op, and couch co-op are separate feature questions. Check exact store wording.',
      ],
    ],
    cautionTitle: 'The base can become the real enemy',
    cautionBody:
      'Most co-op problems are not about monsters. They are about missing Copper, unlabeled lockers, unclear routes, and one player spending the only rare item. Fix the boring rules early and the ocean gets a lot friendlier.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How many players can play Subnautica 2 co-op?',
        body: 'Official listings describe online co-op for small teams, with Xbox listing 2-4 players and Steam promoting four-player co-op.',
      },
      {
        title: 'Is Subnautica 2 multiplayer?',
        body: 'Yes. The official store wording points to online multiplayer co-op. This guide treats multiplayer as online co-op unless an official platform page clearly says otherwise.',
      },
      {
        title: 'Does Subnautica 2 support cross-platform multiplayer?',
        body: 'Steam lists cross-platform multiplayer, and the Xbox listing references cross-platform co-op and multiplayer. Because the game is in Early Access, check invite behavior after patches.',
      },
      {
        title: 'Does Subnautica 2 have split-screen co-op?',
        body: 'No checked official source confirms split-screen or couch co-op. Plan around separate devices and online co-op unless your platform store page later adds clear local co-op wording.',
      },
      {
        title: 'What roles should a co-op team use?',
        body: 'Keep it light: scout, gatherer, builder, and crafter. The goal is not strict jobs. The goal is avoiding four half-finished trips.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2CoopPlayerCount, label: 'Co-op Player Count' },
      { href: Routes.Subnautica2Crossplay, label: 'Crossplay Guide' },
      {
        href: Routes.Subnautica2DedicatedServer,
        label: 'Dedicated Server Status',
      },
      {
        href: Routes.Subnautica2CoopRejoinAfterHotfix3,
        label: 'Co-op Rejoin After Hotfix 3',
      },
      {
        href: Routes.Subnautica2MultiplayerNotWorking,
        label: 'Multiplayer Not Working',
      },
      {
        href: Routes.Subnautica2SplitScreenCoop,
        label: 'Split Screen and Couch Co-op',
      },
      { href: Routes.Subnautica2Beginner, label: 'Beginner Route' },
      { href: Routes.Subnautica2Map, label: 'Map and Biomes' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
      { href: Routes.Subnautica2Beacon, label: 'Beacon Guide' },
      { href: Routes.Subnautica2BaseBuilding, label: 'Base Building' },
      { href: Routes.Subnautica2ScannerStation, label: 'Scanner Station' },
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 4, 2026 against official Steam and Xbox listings. Steam lists online co-op and cross-platform multiplayer; Xbox lists 2-4 online co-op. Multiplayer details, invite behavior, and platform requirements can change during Early Access.',
    cardKicker: 'Co-op field card',
    cardBody:
      'Team setup notes for hosting, invites, route names, shared storage, roles, and rare-material spending.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Co-op guide',
    cardVerifiedLabel: 'Verified',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 联机指南 - 多人分工、共享基地和路线规则',
      description:
        'Subnautica 2 中文联机指南，整理 2-4 人多人模式、跨平台、队伍分工、共享基地、储物规则、路线命名和邀请排查。',
    },
    eyebrow: 'Subnautica 2 多人联机指南',
    title: 'Subnautica 2 联机指南',
    description:
      '联机会让海底没那么孤单，但也会让基地很快变乱。核心很简单：四个人往四个方向游之前，先有一套共享规则。',
    quickLabel: '快速答案',
    quickAnswer:
      'Subnautica 2 官方页面显示支持小队在线合作，Xbox 标注 2-4 人在线合作，Steam 也写了 4 人合作和跨平台多人。开局前先约好谁开房、怎么语音、仓库怎么分、路线怎么命名、下一件队伍目标做什么。',
    fieldNotesTitle: '更舒服的联机笔记',
    fieldNotes: [
      {
        title: '房主是很实际的决定',
        body: '选网络稳定、作息也稳定的人开档。联机存档好不好玩，很大程度取决于大家能不能顺利回到同一个进度。',
      },
      {
        title: '路线名字要说出口',
        body: '“西北 Silver”“第一处 Angel Comb”“Tadpole 路线”比“那边”好太多。大家用同一套名字，才不会一半队友游错方向。',
      },
      {
        title: '仓库规则能少吵架',
        body: '原矿、加工件、电力材料和路线装备分箱。生存联机最常见的争执，往往就是“最后一个是谁用掉的”。',
      },
    ],
    routeChecklistTitle: '联机开局前',
    routeChecklist: [
      '建档前先确定房主和语音方式。',
      '约好箱子标签，以及哪些材料不能随便花。',
      '分头行动前统一路线名和 Beacon 颜色。',
      '每次出门前定一个共同制作目标。',
    ],
    contentsLabel: '目录',
    routeTitle: '联机开局检查表',
    routeSteps: [
      {
        title: '先定房主和游玩节奏',
        body: '谁开世界、多久一起玩一次，要先说清楚。共享基地如果绑在一个经常不在线的人身上，很快就会麻烦。',
      },
      {
        title: '用语音或短路线名',
        body: '地图还不熟时，用 Discord、平台语音，或者很短的路线名。“基地后面银洞”比水下临时解释半分钟有用。',
      },
      {
        title: '松散分工就够',
        body: '不用搞得像上班，但有人扫蓝图、有人跑资源、有人建基地、有人盯配方，会轻松很多。',
      },
      {
        title: '保护共享稀有材料',
        body: '稀有材料不要不打招呼就做个人升级。联机最容易吵起来的点，通常就是少了那一个材料。',
      },
    ],
    visualTitle: '队伍分工板',
    visualItems: [
      {
        label: '侦察',
        value: '扫路线',
        note: '找碎片、危险点和回程地标。',
      },
      {
        label: '建造',
        value: '整理基地',
        note: '让供电、仓库和扩建都清楚。',
      },
      {
        label: '跑图',
        value: '资源循环',
        note: '重复跑 Copper、Silver、氧气和食物路线。',
      },
    ],
    tableTitle: '省时间的联机规则',
    tableHeaders: ['规则', '为什么重要'],
    tableRows: [
      ['每条路线起名字', '用地标命名，比边游边描述某个礁石快得多。'],
      [
        '仓库分开',
        '常用资源、稀有材料、成品零件、个人装备不要混在一个箱子里。',
      ],
      [
        '升级先确认',
        '共享材料应该服务下一件队伍目标，而不是谁先点到制作台就归谁。',
      ],
      ['别太早分散', '大家分头游很爽，但没人凑得齐下一件配方材料时就不爽了。'],
      [
        '检查平台邀请',
        '跨平台多人有官方标注，但邀请方式可能受商店、账号和补丁影响。',
      ],
    ],
    cautionTitle: '真正麻烦的常常是基地',
    cautionBody:
      '多数联机问题不是怪物造成的，而是 Copper 找不到、箱子没标签、路线说不清、唯一稀有材料被花掉。早点把这些无聊规则定好，海底会友好很多。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 联机最多几个人？',
        body: '官方商店页显示是小队在线合作，Xbox 标注 2-4 人在线合作，Steam 宣传 4 人合作。',
      },
      {
        title: 'Subnautica 2 支持跨平台吗？',
        body: 'Steam 写有跨平台多人，Xbox 页面也提到跨平台合作和多人。因为仍是抢先体验，补丁后最好重新确认邀请流程。',
      },
      {
        title: '联机队伍怎么分工？',
        body: '简单分成侦察、采集、建造、制作就够了。目的不是强制职业，而是避免四个人都做半截事。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      {
        href: Routes.Subnautica2DedicatedServer,
        label: '专用服务器状态',
      },
      {
        href: Routes.Subnautica2CoopRejoinAfterHotfix3,
        label: 'Hotfix 3 后联机重连',
      },
      {
        href: Routes.Subnautica2MultiplayerNotWorking,
        label: '联机失败排查',
      },
      { href: Routes.Subnautica2SplitScreenCoop, label: '分屏和本地双人' },
      { href: Routes.Subnautica2Beginner, label: '新手路线' },
      { href: Routes.Subnautica2Map, label: '地图与生态区' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
      { href: Routes.Subnautica2AirTank, label: '气瓶和氧气' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 28 日核对 Steam 与 Xbox 官方商店页。多人细节、邀请行为和平台要求可能随抢先体验补丁变化。',
    cardKicker: '联机野外卡',
    cardBody: '整理房主、邀请、路线名、共享仓库、队伍分工和稀有材料花费规则。',
    cardTypeLabel: '类型',
    cardTypeValue: '联机指南',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
  ru: {
    metadata: {
      title: 'Subnautica 2 co-op - роли, база и командное выживание',
      description:
        'Русский co-op гид Subnautica 2: 2-4 игрока, cross-platform, роли, общая база, хранение, названия маршрутов и инвайты.',
    },
    eyebrow: 'Мультиплеер Subnautica 2',
    title: 'Subnautica 2: co-op гид',
    description:
      'В co-op океан не такой одинокий, но база быстро превращается в беспорядок. Сначала правила, потом четыре разных направления.',
    quickLabel: 'Короткий ответ',
    quickAnswer:
      'Официальные страницы указывают онлайн co-op для малых команд: Xbox пишет 2-4 игрока, Steam продвигает co-op на четырех и cross-platform multiplayer. До старта решите host, voice chat, хранение, названия маршрутов и следующий крафт.',
    contentsLabel: 'Содержание',
    routeTitle: 'Чеклист co-op старта',
    routeSteps: [
      {
        title: 'Выберите host и ритм',
        body: 'Решите, кто держит мир и как часто группа играет. Общая база на сейве редкого игрока быстро мешает.',
      },
      {
        title: 'Голос или короткие маршруты',
        body: 'Discord, party chat или короткие имена маршрутов помогают лучше длинных объяснений под водой.',
      },
      {
        title: 'Легкие роли',
        body: 'Один сканирует, один собирает, один строит, один следит за рецептами. Не строго, зато понятно.',
      },
      {
        title: 'Берегите редкие материалы',
        body: 'Не тратьте редкие входы на личный апгрейд без быстрого согласия команды.',
      },
    ],
    visualTitle: 'Доска ролей',
    visualItems: [
      {
        label: 'Scout',
        value: 'Scan routes',
        note: 'Фрагменты, опасности и ориентиры назад.',
      },
      {
        label: 'Builder',
        value: 'Base order',
        note: 'Питание, хранение и расширение базы.',
      },
      {
        label: 'Runner',
        value: 'Resource loops',
        note: 'Copper, Silver, O2 и еда по кругу.',
      },
    ],
    tableTitle: 'Правила, которые экономят время',
    tableHeaders: ['Правило', 'Зачем нужно'],
    tableRows: [
      [
        'Имена маршрутов',
        'Ориентир быстрее длинного описания рифа во время плавания.',
      ],
      [
        'Раздельное хранение',
        'Обычные ресурсы, редкие материалы, детали и личные вещи не должны лежать вместе.',
      ],
      [
        'Апгрейды по согласию',
        'Общие материалы идут на цель команды, не на первого у fabricator.',
      ],
      [
        'Не разбегаться слишком рано',
        'Иначе у всех половина нужных частей и ни одного готового рецепта.',
      ],
      [
        'Проверять инвайты',
        'Cross-platform указан официально, но поведение приглашений зависит от платформы, аккаунта и патча.',
      ],
    ],
    cautionTitle: 'База часто опаснее океана',
    cautionBody:
      'Главные co-op проблемы обычно скучные: нет Copper, шкафы без ярлыков, маршрут непонятен, редкий материал уже потрачен. Исправьте это рано.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Сколько игроков в co-op?',
        body: 'Официальные страницы описывают малые команды: Xbox 2-4 игрока, Steam продвигает co-op на четырех.',
      },
      {
        title: 'Есть cross-platform?',
        body: 'Steam указывает cross-platform multiplayer, Xbox говорит о cross-platform co-op и multiplayer. После патчей проверьте инвайты.',
      },
      {
        title: 'Какие роли нужны?',
        body: 'Scout, gatherer, builder и crafter. Это не строгие классы, а защита от хаоса.',
      },
    ],
    readNextTitle: 'Дальше',
    related: [
      { href: Routes.Subnautica2Beginner, label: 'Маршрут новичка' },
      { href: Routes.Subnautica2Map, label: 'Карта и биомы' },
      { href: Routes.Subnautica2Resources, label: 'Ресурсы' },
      { href: Routes.Subnautica2Crafting, label: 'Крафт' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank и O2' },
    ],
    sourcesTitle: 'Источники',
    sourceBody:
      'Проверено 28 мая 2026 по официальным страницам Steam и Xbox. Инвайты и требования платформ могут меняться в Early Access.',
    cardKicker: 'Co-op field card',
    cardBody:
      'Host, invites, route names, shared storage, roles and rare-material spending rules.',
    cardTypeLabel: 'Тип',
    cardTypeValue: 'Co-op гид',
    cardVerifiedLabel: 'Проверено',
    cardStatusLabel: 'Статус',
    cardStatusValue: 'Early Access',
  },
  de: {
    metadata: {
      title: 'Subnautica 2 Co-op - Rollen, Basis und Team-Survival',
      description:
        'Deutscher Subnautica 2 Co-op Guide: 2-4 Spieler, Crossplay, Rollen, gemeinsame Basis, Lagerregeln, Routen und Einladungen.',
    },
    eyebrow: 'Subnautica 2 Multiplayer Guide',
    title: 'Subnautica 2 Co-op Guide',
    description:
      'Co-op macht den Ozean weniger einsam, aber die Basis wird schnell chaotisch. Erst ein gemeinsamer Plan, dann vier Richtungen.',
    quickLabel: 'Kurzantwort',
    quickAnswer:
      'Offizielle Listings zeigen Online-Co-op für kleine Teams: Xbox nennt 2-4 Spieler, Steam bewirbt Vier-Spieler-Co-op und Cross-Platform Multiplayer. Vorher Host, Voice, Lagerregeln, Routennamen und nächstes Craftingziel klären.',
    contentsLabel: 'Inhalt',
    routeTitle: 'Co-op Startcheck',
    routeSteps: [
      {
        title: 'Host und Rhythmus klären',
        body: 'Entscheidet, wer hostet und wie oft die Gruppe spielt. Eine Basis auf dem falschen Save wird schnell mühsam.',
      },
      {
        title: 'Voice oder kurze Routennamen',
        body: 'Discord, Party-Chat oder kurze Namen helfen mehr als lange Erklärungen unter Wasser.',
      },
      {
        title: 'Lockere Rollen',
        body: 'Eine Person scannt, eine sammelt, eine baut, eine verfolgt Rezepte. Nicht streng, nur nützlich.',
      },
      {
        title: 'Seltene Materialien schützen',
        body: 'Rare Inputs nicht ohne Absprache für persönliche Upgrades ausgeben.',
      },
    ],
    visualTitle: 'Teamrollen',
    visualItems: [
      {
        label: 'Scout',
        value: 'Scan routes',
        note: 'Fragmente, Gefahr und Rückweg-Landmarken.',
      },
      {
        label: 'Builder',
        value: 'Base order',
        note: 'Strom, Lager und klare Erweiterung.',
      },
      {
        label: 'Runner',
        value: 'Resource loops',
        note: 'Copper, Silver, O2 und Essen wiederholen.',
      },
    ],
    tableTitle: 'Co-op Regeln',
    tableHeaders: ['Regel', 'Warum wichtig'],
    tableRows: [
      [
        'Routen benennen',
        'Landmarken sind schneller als lange Reef-Beschreibungen beim Schwimmen.',
      ],
      [
        'Lager trennen',
        'Common, rare, crafted parts und private Ausrüstung getrennt halten.',
      ],
      ['Upgrades absprechen', 'Team-Material gehört zum nächsten Teamziel.'],
      [
        'Nicht zu früh splitten',
        'Sonst haben alle halbe Materialien und niemand das Rezept fertig.',
      ],
      [
        'Einladungen prüfen',
        'Cross-platform ist gelistet, Invite-Verhalten kann aber je nach Store, Account und Patch variieren.',
      ],
    ],
    cautionTitle: 'Die Basis ist oft das Problem',
    cautionBody:
      'Co-op scheitert selten am Monster. Meist fehlen Copper, Labels, klare Routen oder das einzige rare Item. Regelt das früh.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Wie viele Spieler im Co-op?',
        body: 'Offizielle Listings sprechen von kleinen Teams: Xbox 2-4 Spieler, Steam bewirbt Vier-Spieler-Co-op.',
      },
      {
        title: 'Gibt es Crossplay?',
        body: 'Steam listet Cross-Platform Multiplayer, Xbox nennt cross-platform co-op und multiplayer. Nach Patches Einladungen prüfen.',
      },
      {
        title: 'Welche Rollen?',
        body: 'Scout, gatherer, builder und crafter. Es geht um Ordnung, nicht feste Klassen.',
      },
    ],
    readNextTitle: 'Weiterlesen',
    related: [
      { href: Routes.Subnautica2Beginner, label: 'Anfängerroute' },
      { href: Routes.Subnautica2Map, label: 'Karte und Biome' },
      { href: Routes.Subnautica2Resources, label: 'Ressourcen' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank und O2' },
    ],
    sourcesTitle: 'Quellen',
    sourceBody:
      'Geprüft am 28. Mai 2026 mit offiziellen Steam- und Xbox-Listings. Invite-Verhalten und Plattformregeln können sich in Early Access ändern.',
    cardKicker: 'Co-op field card',
    cardBody:
      'Host, Einladungen, Routennamen, Lagerregeln, Rollen und rare Materialien.',
    cardTypeLabel: 'Typ',
    cardTypeValue: 'Co-op Guide',
    cardVerifiedLabel: 'Geprüft',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  fr: {
    metadata: {
      title: 'Subnautica 2 co-op - rôles, base commune et survie en équipe',
      description:
        'Guide co-op français Subnautica 2: 2-4 joueurs, cross-platform, rôles, base partagée, stockage, routes et invitations.',
    },
    eyebrow: 'Guide multijoueur Subnautica 2',
    title: 'Guide co-op Subnautica 2',
    description:
      'Le co-op rend l’océan moins seul, mais la base devient vite un bazar. Un plan commun avant que tout le monde parte dans son coin.',
    quickLabel: 'Réponse courte',
    quickAnswer:
      'Les listings officiels indiquent du co-op en ligne pour petites équipes: Xbox mentionne 2-4 joueurs, Steam met en avant le co-op à quatre et le cross-platform multiplayer. Avant de jouer, fixez host, voix, stockage, noms de routes et prochain craft.',
    contentsLabel: 'Sommaire',
    routeTitle: 'Checklist co-op',
    routeSteps: [
      {
        title: 'Choisir host et rythme',
        body: 'Décidez qui héberge et quand le groupe joue. Une base partagée sur le mauvais save devient vite pénible.',
      },
      {
        title: 'Voix ou noms courts',
        body: 'Discord, party chat ou noms courts de routes évitent les longues explications sous l’eau.',
      },
      {
        title: 'Rôles souples',
        body: 'Un scan, un farm, un build, un suit les recettes. Pas strict, juste pratique.',
      },
      {
        title: 'Protéger les matériaux rares',
        body: 'Ne dépensez pas les entrées rares pour un upgrade perso sans accord rapide.',
      },
    ],
    visualTitle: 'Tableau des rôles',
    visualItems: [
      {
        label: 'Scout',
        value: 'Scan routes',
        note: 'Fragments, danger et repères de retour.',
      },
      {
        label: 'Builder',
        value: 'Base order',
        note: 'Énergie, stockage et base lisible.',
      },
      {
        label: 'Runner',
        value: 'Resource loops',
        note: 'Copper, Silver, O2 et nourriture en boucle.',
      },
    ],
    tableTitle: 'Règles co-op utiles',
    tableHeaders: ['Règle', 'Pourquoi'],
    tableRows: [
      [
        'Nommer les routes',
        'Un repère va plus vite qu’une longue description en nageant.',
      ],
      [
        'Séparer le stockage',
        'Common, rare, pièces craftées et équipement perso séparés.',
      ],
      [
        'Valider les upgrades',
        'Les matériaux partagés servent le prochain objectif d’équipe.',
      ],
      [
        'Ne pas se disperser trop tôt',
        'Sinon chacun a la moitié d’une recette et personne ne termine.',
      ],
      [
        'Vérifier les invitations',
        'Le cross-platform est listé, mais les invites peuvent varier par store, compte et patch.',
      ],
    ],
    cautionTitle: 'La base pose souvent le vrai problème',
    cautionBody:
      'Les soucis co-op viennent souvent du Copper manquant, des coffres sans nom, des routes floues ou d’un rare item déjà dépensé. Règle ça tôt.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Combien de joueurs en co-op?',
        body: 'Les listings officiels parlent de petites équipes: Xbox 2-4 joueurs, Steam met en avant le co-op à quatre.',
      },
      {
        title: 'Y a-t-il du crossplay?',
        body: 'Steam liste cross-platform multiplayer, Xbox mentionne cross-platform co-op et multiplayer. Vérifie les invitations après patch.',
      },
      {
        title: 'Quels rôles utiliser?',
        body: 'Scout, gatherer, builder et crafter. Le but est d’éviter quatre sorties à moitié finies.',
      },
    ],
    readNextTitle: 'Lire ensuite',
    related: [
      { href: Routes.Subnautica2Beginner, label: 'Route débutant' },
      { href: Routes.Subnautica2Map, label: 'Carte et biomes' },
      { href: Routes.Subnautica2Resources, label: 'Ressources' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank et O2' },
    ],
    sourcesTitle: 'Sources',
    sourceBody:
      'Vérifié le 28 mai 2026 avec les listings officiels Steam et Xbox. Invitations et règles plateforme peuvent changer en Early Access.',
    cardKicker: 'Co-op field card',
    cardBody:
      'Host, invitations, noms de routes, stockage, rôles et dépenses rares.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Guide co-op',
    cardVerifiedLabel: 'Vérifié',
    cardStatusLabel: 'Statut',
    cardStatusValue: 'Early Access',
  },
  'pt-BR': {
    metadata: {
      title: 'Subnautica 2 co-op - funções, base compartilhada e sobrevivência',
      description:
        'Guia brasileiro de co-op em Subnautica 2: 2-4 jogadores, cross-platform, funções, base compartilhada, armazenamento, rotas e convites.',
    },
    eyebrow: 'Guia multiplayer Subnautica 2',
    title: 'Guia co-op de Subnautica 2',
    description:
      'Co-op deixa o oceano menos solitário, mas a base vira bagunça rápido. Um plano comum antes de cada um nadar para um lado.',
    quickLabel: 'Resposta rápida',
    quickAnswer:
      'Listagens oficiais indicam co-op online para equipes pequenas: Xbox cita 2-4 jogadores, Steam destaca co-op para quatro e cross-platform multiplayer. Antes de começar, combinem host, voz, armazenamento, nomes de rotas e próximo craft.',
    contentsLabel: 'Conteúdo',
    routeTitle: 'Checklist co-op',
    routeSteps: [
      {
        title: 'Escolher host e ritmo',
        body: 'Decidam quem hospeda e quando o grupo joga. Base compartilhada no save de alguém ausente complica tudo.',
      },
      {
        title: 'Voz ou nomes curtos',
        body: 'Discord, party chat ou nomes curtos de rota evitam explicações longas debaixo d’água.',
      },
      {
        title: 'Funções leves',
        body: 'Um escaneia, um farma, um constrói, um cuida de receitas. Não é rígido, só organiza.',
      },
      {
        title: 'Proteger materiais raros',
        body: 'Não gaste entradas raras em upgrade pessoal sem combinar rápido.',
      },
    ],
    visualTitle: 'Quadro de funções',
    visualItems: [
      {
        label: 'Scout',
        value: 'Scan routes',
        note: 'Fragmentos, perigo e referência de volta.',
      },
      {
        label: 'Builder',
        value: 'Base order',
        note: 'Energia, armazenamento e base legível.',
      },
      {
        label: 'Runner',
        value: 'Resource loops',
        note: 'Copper, Silver, O2 e comida em loop.',
      },
    ],
    tableTitle: 'Regras co-op',
    tableHeaders: ['Regra', 'Por que importa'],
    tableRows: [
      [
        'Nomear rotas',
        'Referência é mais rápida que descrever recife enquanto nada.',
      ],
      [
        'Separar armazenamento',
        'Comuns, raros, peças craftadas e gear pessoal em lugares diferentes.',
      ],
      [
        'Combinar upgrades',
        'Material compartilhado deve servir o próximo objetivo do time.',
      ],
      [
        'Não espalhar cedo demais',
        'Senão todos têm meia receita e ninguém termina nada.',
      ],
      [
        'Checar convites',
        'Cross-platform está listado, mas convites variam por loja, conta e patch.',
      ],
    ],
    cautionTitle: 'A base costuma ser o problema real',
    cautionBody:
      'Problema de co-op geralmente é Copper sumido, baú sem nome, rota confusa ou item raro já gasto. Resolva o básico cedo.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Quantos jogadores no co-op?',
        body: 'Listagens oficiais apontam equipes pequenas: Xbox 2-4 jogadores, Steam destaca co-op para quatro.',
      },
      {
        title: 'Tem crossplay?',
        body: 'Steam lista cross-platform multiplayer e Xbox menciona cross-platform co-op e multiplayer. Confira convites após patches.',
      },
      {
        title: 'Quais funções usar?',
        body: 'Scout, gatherer, builder e crafter. A ideia é evitar quatro viagens pela metade.',
      },
    ],
    readNextTitle: 'Leia a seguir',
    related: [
      { href: Routes.Subnautica2Beginner, label: 'Rota inicial' },
      { href: Routes.Subnautica2Map, label: 'Mapa e biomas' },
      { href: Routes.Subnautica2Resources, label: 'Recursos' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank e O2' },
    ],
    sourcesTitle: 'Fontes',
    sourceBody:
      'Verificado em 28 de maio de 2026 com listagens oficiais Steam e Xbox. Convites e requisitos de plataforma podem mudar no Early Access.',
    cardKicker: 'Co-op field card',
    cardBody:
      'Host, convites, nomes de rota, armazenamento, funções e gastos de material raro.',
    cardTypeLabel: 'Tipo',
    cardTypeValue: 'Guia co-op',
    cardVerifiedLabel: 'Verificado',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  'es-419': {
    metadata: {
      title: 'Subnautica 2 co-op - roles, base compartida y supervivencia',
      description:
        'Guía en español latino de co-op en Subnautica 2: 2-4 jugadores, cross-platform, roles, base compartida, almacenamiento, rutas e invitaciones.',
    },
    eyebrow: 'Guía multiplayer Subnautica 2',
    title: 'Guía co-op de Subnautica 2',
    description:
      'El co-op hace el océano menos solitario, pero la base se desordena rápido. Un plan común antes de que todos naden hacia lados distintos.',
    quickLabel: 'Respuesta rápida',
    quickAnswer:
      'Las páginas oficiales indican co-op online para equipos pequeños: Xbox menciona 2-4 jugadores, Steam destaca co-op para cuatro y cross-platform multiplayer. Antes de empezar, acuerden host, voz, almacenamiento, nombres de rutas y próximo craft.',
    contentsLabel: 'Contenido',
    routeTitle: 'Checklist co-op',
    routeSteps: [
      {
        title: 'Elegir host y ritmo',
        body: 'Decidan quién hospeda y cuándo juega el grupo. Una base compartida en el save de alguien ausente se vuelve problema.',
      },
      {
        title: 'Voz o nombres cortos',
        body: 'Discord, party chat o nombres cortos de ruta evitan explicaciones largas bajo el agua.',
      },
      {
        title: 'Roles flexibles',
        body: 'Uno escanea, uno farmea, uno construye, uno mira recetas. No es rígido, solo ordena.',
      },
      {
        title: 'Proteger materiales raros',
        body: 'No gasten entradas raras en upgrades personales sin acordarlo rápido.',
      },
    ],
    visualTitle: 'Tablero de roles',
    visualItems: [
      {
        label: 'Scout',
        value: 'Scan routes',
        note: 'Fragmentos, peligro y referencias de regreso.',
      },
      {
        label: 'Builder',
        value: 'Base order',
        note: 'Energía, almacenamiento y base clara.',
      },
      {
        label: 'Runner',
        value: 'Resource loops',
        note: 'Copper, Silver, O2 y comida en loop.',
      },
    ],
    tableTitle: 'Reglas co-op',
    tableHeaders: ['Regla', 'Por qué importa'],
    tableRows: [
      [
        'Nombrar rutas',
        'Una referencia es más rápida que describir un arrecife nadando.',
      ],
      [
        'Separar almacenamiento',
        'Comunes, raros, piezas craftadas y gear personal separados.',
      ],
      [
        'Acordar upgrades',
        'El material compartido debe servir el próximo objetivo del equipo.',
      ],
      [
        'No dispersarse muy pronto',
        'Si no, todos tienen media receta y nadie termina nada.',
      ],
      [
        'Revisar invitaciones',
        'Cross-platform está listado, pero invitaciones varían por tienda, cuenta y parche.',
      ],
    ],
    cautionTitle: 'La base suele ser el problema real',
    cautionBody:
      'Los problemas co-op suelen ser Copper perdido, cofres sin nombre, rutas confusas o el único raro ya gastado. Arregla lo básico temprano.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '¿Cuántos jugadores en co-op?',
        body: 'Las páginas oficiales apuntan a equipos pequeños: Xbox 2-4 jugadores, Steam destaca co-op para cuatro.',
      },
      {
        title: '¿Hay crossplay?',
        body: 'Steam lista cross-platform multiplayer y Xbox menciona cross-platform co-op y multiplayer. Revisa invitaciones tras parches.',
      },
      {
        title: '¿Qué roles usar?',
        body: 'Scout, gatherer, builder y crafter. La idea es evitar cuatro viajes a medias.',
      },
    ],
    readNextTitle: 'Leer después',
    related: [
      { href: Routes.Subnautica2Beginner, label: 'Ruta inicial' },
      { href: Routes.Subnautica2Map, label: 'Mapa y biomas' },
      { href: Routes.Subnautica2Resources, label: 'Recursos' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank y O2' },
    ],
    sourcesTitle: 'Fuentes',
    sourceBody:
      'Verificado el 28 de mayo de 2026 con páginas oficiales de Steam y Xbox. Invitaciones y requisitos de plataforma pueden cambiar en Early Access.',
    cardKicker: 'Co-op field card',
    cardBody:
      'Host, invitaciones, nombres de ruta, almacenamiento, roles y gasto de material raro.',
    cardTypeLabel: 'Tipo',
    cardTypeValue: 'Guía co-op',
    cardVerifiedLabel: 'Verificado',
    cardStatusLabel: 'Estado',
    cardStatusValue: 'Early Access',
  },
  ko: {
    metadata: {
      title: 'Subnautica 2 협동 가이드 - 멀티플레이 역할과 팀 생존',
      description:
        'Subnautica 2 한국어 협동 가이드. 2-4인 온라인 협동, 크로스플랫폼, 팀 역할, 공유 기지, 보관 규칙, 루트 이름, 초대 확인을 정리합니다.',
    },
    eyebrow: 'Subnautica 2 멀티플레이 가이드',
    title: 'Subnautica 2 협동 가이드',
    description:
      '협동은 바다를 덜 외롭게 만들지만 기지를 빨리 어지럽힙니다. 네 명이 네 방향으로 헤엄치기 전에 공통 규칙이 필요합니다.',
    quickLabel: '빠른 답',
    quickAnswer:
      '공식 페이지는 소규모 온라인 협동을 안내합니다. Xbox는 2-4인 온라인 협동을 표기하고, Steam은 4인 협동과 크로스플랫폼 멀티플레이를 강조합니다. 시작 전 host, 음성, 보관, 루트 이름, 다음 제작 목표를 정하세요.',
    contentsLabel: '목차',
    routeTitle: '협동 시작 체크리스트',
    routeSteps: [
      {
        title: 'Host와 플레이 리듬 정하기',
        body: '누가 세계를 열고 얼마나 자주 함께 플레이할지 정하세요. 공유 기지가 접속이 드문 사람의 저장에 묶이면 불편합니다.',
      },
      {
        title: '음성 또는 짧은 루트 이름',
        body: 'Discord, 파티 채팅, 짧은 루트 이름이 물속 긴 설명보다 낫습니다.',
      },
      {
        title: '느슨한 역할 나누기',
        body: '한 명은 스캔, 한 명은 파밍, 한 명은 건설, 한 명은 레시피를 보면 충분합니다.',
      },
      {
        title: '희귀 재료 보호',
        body: '팀 확인 없이 희귀 재료를 개인 업그레이드에 쓰지 마세요.',
      },
    ],
    visualTitle: '팀 역할 보드',
    visualItems: [
      {
        label: 'Scout',
        value: 'Scan routes',
        note: '파편, 위험, 귀환 랜드마크를 찾습니다.',
      },
      {
        label: 'Builder',
        value: 'Base order',
        note: '전력, 보관, 확장을 정리합니다.',
      },
      {
        label: 'Runner',
        value: 'Resource loops',
        note: 'Copper, Silver, O2, 음식 루프를 반복합니다.',
      },
    ],
    tableTitle: '시간을 아끼는 협동 규칙',
    tableHeaders: ['규칙', '중요한 이유'],
    tableRows: [
      [
        '루트 이름 붙이기',
        '헤엄치며 설명하는 것보다 랜드마크 이름이 빠릅니다.',
      ],
      ['보관 분리', '일반 자원, 희귀 재료, 제작 부품, 개인 장비를 나누세요.'],
      ['업그레이드 합의', '공유 재료는 다음 팀 목표에 먼저 써야 합니다.'],
      [
        '너무 빨리 흩어지지 않기',
        '각자 반쪽 재료만 들고 오면 아무 레시피도 끝나지 않습니다.',
      ],
      [
        '초대 확인',
        '크로스플랫폼은 공식 표기되어 있지만 초대 동작은 상점, 계정, 패치에 따라 다를 수 있습니다.',
      ],
    ],
    cautionTitle: '진짜 문제는 기지일 때가 많습니다',
    cautionBody:
      '협동 문제는 괴물보다 Copper 실종, 이름 없는 보관함, 애매한 루트, 이미 써 버린 희귀 재료에서 자주 시작합니다.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '협동은 몇 명까지 되나요?',
        body: '공식 페이지는 소규모 팀을 안내합니다. Xbox는 2-4인, Steam은 4인 협동을 강조합니다.',
      },
      {
        title: '크로스플레이가 있나요?',
        body: 'Steam은 cross-platform multiplayer를, Xbox는 cross-platform co-op과 multiplayer를 언급합니다. 패치 후 초대를 확인하세요.',
      },
      {
        title: '어떤 역할이 좋나요?',
        body: 'Scout, gatherer, builder, crafter 정도면 충분합니다. 목적은 엄격한 직업이 아니라 혼란 방지입니다.',
      },
    ],
    readNextTitle: '다음 글',
    related: [
      { href: Routes.Subnautica2Beginner, label: '초보 루트' },
      { href: Routes.Subnautica2Map, label: '지도와 바이옴' },
      { href: Routes.Subnautica2Resources, label: '자원 가이드' },
      { href: Routes.Subnautica2Crafting, label: '제작 가이드' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank와 O2' },
    ],
    sourcesTitle: '출처 메모',
    sourceBody:
      '2026년 5월 28일 Steam과 Xbox 공식 페이지를 확인했습니다. 멀티플레이 초대와 플랫폼 요구 사항은 Early Access 중 바뀔 수 있습니다.',
    cardKicker: 'Co-op field card',
    cardBody:
      'Host, 초대, 루트 이름, 공유 보관, 역할, 희귀 재료 사용 규칙입니다.',
    cardTypeLabel: '유형',
    cardTypeValue: '협동 가이드',
    cardVerifiedLabel: '확인',
    cardStatusLabel: '상태',
    cardStatusValue: 'Early Access',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 協力プレイガイド - 役割、共有基地、チーム生存',
      description:
        'Subnautica 2 日本語協力プレイガイド。2-4人オンライン協力、クロスプラットフォーム、役割、共有基地、保管ルール、ルート名、招待確認を整理します。',
    },
    eyebrow: 'Subnautica 2 マルチプレイガイド',
    title: 'Subnautica 2 協力プレイガイド',
    description:
      '協力プレイは海を少し寂しくなくしますが、基地はすぐ散らかります。四人が別々に泳ぐ前に、共通ルールを決めます。',
    quickLabel: '要点',
    quickAnswer:
      '公式ページでは少人数のオンライン協力が案内されています。Xbox は 2-4 人オンライン協力、Steam は 4 人協力とクロスプラットフォームマルチプレイを示しています。開始前に host、音声、保管、ルート名、次の制作目標を決めます。',
    contentsLabel: '目次',
    routeTitle: '協力プレイ開始チェック',
    routeSteps: [
      {
        title: 'Host と遊ぶ頻度を決める',
        body: '誰が世界を持つか、どのくらい一緒に遊ぶかを決めます。共有基地が不在がちな人のセーブにあると困ります。',
      },
      {
        title: '音声か短いルート名',
        body: 'Discord、パーティーチャット、短いルート名は、水中の長い説明より役立ちます。',
      },
      {
        title: 'ゆるく役割分担',
        body: 'スキャン、採集、建築、レシピ管理に分かれるだけで十分です。',
      },
      {
        title: 'レア素材を守る',
        body: 'チーム確認なしでレア素材を個人アップグレードに使わないようにします。',
      },
    ],
    visualTitle: 'チーム役割ボード',
    visualItems: [
      {
        label: 'Scout',
        value: 'Scan routes',
        note: '破片、危険、帰還目印を探します。',
      },
      {
        label: 'Builder',
        value: 'Base order',
        note: '電力、保管、拡張を整理します。',
      },
      {
        label: 'Runner',
        value: 'Resource loops',
        note: 'Copper、Silver、O2、食料ルートを回します。',
      },
    ],
    tableTitle: '時間を節約する協力ルール',
    tableHeaders: ['ルール', '重要な理由'],
    tableRows: [
      ['ルート名を付ける', '泳ぎながら説明するより、目印名の方が早いです。'],
      ['保管を分ける', '一般資源、レア素材、制作部品、個人装備を分けます。'],
      ['アップグレードを相談', '共有素材は次のチーム目標に使います。'],
      [
        '早く散らばりすぎない',
        '全員が半端な材料だけ持つと、何も完成しません。',
      ],
      [
        '招待を確認',
        'クロスプラットフォームは公式表記されていますが、招待はストア、アカウント、パッチで変わる可能性があります。',
      ],
    ],
    cautionTitle: '本当の敵は基地かもしれません',
    cautionBody:
      '協力プレイの問題は、怪物より Copper 不足、名前のない箱、曖昧なルート、使われたレア素材から始まりがちです。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '協力プレイは何人まで？',
        body: '公式ページでは少人数チームが示され、Xbox は 2-4 人、Steam は 4 人協力を打ち出しています。',
      },
      {
        title: 'クロスプレイはありますか？',
        body: 'Steam は cross-platform multiplayer、Xbox は cross-platform co-op と multiplayer を記載しています。パッチ後は招待を確認します。',
      },
      {
        title: 'どんな役割がいい？',
        body: 'Scout、gatherer、builder、crafter で十分です。厳密な職業ではなく混乱を減らすためです。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2Beginner, label: '初心者ルート' },
      { href: Routes.Subnautica2Map, label: 'マップとバイオーム' },
      { href: Routes.Subnautica2Resources, label: '資源ガイド' },
      { href: Routes.Subnautica2Crafting, label: '制作ガイド' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank と O2' },
    ],
    sourcesTitle: '出典メモ',
    sourceBody:
      '2026年5月28日に Steam と Xbox の公式ページを確認しました。招待動作やプラットフォーム要件は Early Access 中に変わる可能性があります。',
    cardKicker: 'Co-op field card',
    cardBody: 'Host、招待、ルート名、共有保管、役割、レア素材消費ルールです。',
    cardTypeLabel: '種類',
    cardTypeValue: '協力ガイド',
    cardVerifiedLabel: '確認',
    cardStatusLabel: '状態',
    cardStatusValue: 'Early Access',
  },
};

function getCopy(locale: Locale): CoopCopy {
  return coopCopy[locale] ?? coopCopy.en;
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
    pathname: Routes.Subnautica2Coop,
  });
}

export default async function CoopGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <LocalizedResourceGuidePage
      copy={{ ...copy, publishedAt: PUBLISHED_AT, updatedAt: UPDATED_AT }}
      icon={UsersIcon}
      locale={locale}
      pathname={Routes.Subnautica2Coop}
      sources={sharedSources}
    />
  );
}
