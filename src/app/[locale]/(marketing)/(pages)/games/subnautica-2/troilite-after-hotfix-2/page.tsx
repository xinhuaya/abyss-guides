import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { PickaxeIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type TroilitePatchCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-24';
const UPDATED_AT = '2026-05-28';

const sharedSources = [
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-2',
    label: 'Unknown Worlds Hotfix 2',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-troilite-location/',
    label: 'PC Gamer Troilite guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-metal-farm-scan-locations/',
    label: 'PC Gamer Metal Farm guide',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap',
    label: 'Unknown Worlds Early Access roadmap',
  },
];

const troilitePatchCopy: Record<string, TroilitePatchCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Troilite After Hotfix 2 - Late-Game Resource Area Update',
      description:
        'Track Subnautica 2 Troilite after Hotfix 2, including the late-game resource area change, Mineralized Clinker notes, Metal Farm planning, and old guide caveats.',
    },
    eyebrow: 'Subnautica 2 Troilite patch note',
    title: 'Subnautica 2 Troilite After Hotfix 2',
    description:
      'Hotfix 2 quietly matters for late-game resource routing. Troilite is still dangerous to reach, but the official patch note says the late-game region now has more Troilite resource areas.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Hotfix 2 adds more Troilite resource areas in the late-game region. Troilite still comes from Mineralized Clinker deposits and still belongs in a prepared late-route run, not a casual early dive.',
    contentsLabel: 'Contents',
    routeTitle: 'How to read the Troilite change',
    routeSteps: [
      {
        title: 'Do not treat it like an early resource',
        body: 'The Silver change helps early players. The Troilite change is different: it belongs to late-game routing, deeper travel, and better tool prep.',
      },
      {
        title: 'Look for Mineralized Clinker',
        body: 'PC Gamer notes that Troilite appears as Mineralized Clinker when examined. If you are searching only for the word Troilite on the seafloor, you may miss the deposit.',
      },
      {
        title: 'Recheck old one-route advice',
        body: 'Before Hotfix 2, many routes pointed players toward one tight dangerous run. More late-game resource areas means old “only here” wording should be softened unless it has been re-tested.',
      },
      {
        title: 'Plan around Metal Farm usage',
        body: 'Troilite connects to rare-metal crafting and Metal Farm planning. Bring the right mining tool, clear inventory space, and avoid spending every raw piece before you know the next recipe chain.',
      },
    ],
    tableTitle: 'Troilite after Hotfix 2',
    tableHeaders: ['Question', 'Patch-aware answer'],
    tableRows: [
      [
        'What changed?',
        'Unknown Worlds says more Troilite resource areas were added in the late-game region.',
      ],
      [
        'What did not change?',
        'Troilite is still a late-route material. The patch note does not turn it into a beginner resource.',
      ],
      [
        'What name should I look for?',
        'In route notes, watch for Mineralized Clinker, which is tied to Troilite collection.',
      ],
      [
        'Should old maps be trusted?',
        'Use old maps for landmarks, but recheck any claim that Troilite exists in only one narrow place.',
      ],
      [
        'Which pages need updates?',
        'Troilite, Mangalloy Ingot, Metal Farm, and late-game crafting pages should all mention Hotfix 2.',
      ],
    ],
    visualTitle: 'Troilite route card',
    visualItems: [
      {
        label: 'Patch',
        value: 'Hotfix 2',
        note: 'More late-game resource areas.',
      },
      {
        label: 'Deposit',
        value: 'Clinker',
        note: 'Search route notes for Mineralized Clinker.',
      },
      {
        label: 'Use',
        value: 'Rare chain',
        note: 'Mangalloy and Metal Farm planning.',
      },
    ],
    cautionTitle: 'Do not oversell the patch',
    cautionBody:
      'More Troilite resource areas does not mean safe, early, or unlimited. It means the late-game route deserves a fresh check before repeating launch-week scarcity advice.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Did Hotfix 2 add more Troilite in Subnautica 2?',
        body: 'Yes. Unknown Worlds says Hotfix 2 added more Troilite resource areas in the late-game region.',
      },
      {
        title: 'Is Troilite still late game?',
        body: 'Yes. The patch note says late-game region, so this should still be treated as a prepared late-route material.',
      },
      {
        title: 'What is Mineralized Clinker?',
        body: 'It is the deposit name players should watch for when following Troilite routes. PC Gamer notes that Troilite appears under that examined name.',
      },
      {
        title: 'Should I update old Troilite notes?',
        body: 'Yes. Any note that says Troilite only exists in one tight route should be rechecked against the Hotfix 2 build.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
      { href: Routes.Subnautica2Troilite, label: 'Troilite Location' },
      {
        href: Routes.Subnautica2TroiliteSoftlock,
        label: 'Troilite Softlock Fix',
      },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm Guide' },
      { href: Routes.Subnautica2Mangalloy, label: 'Mangalloy Ingot' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 28, 2026 against Unknown Worlds Hotfix 2, current Troilite route reporting, Metal Farm reporting, and the official roadmap.',
    cardKicker: 'Troilite patch card',
    cardBody:
      'A late-game patch note for players rechecking Troilite, Mineralized Clinker, Mangalloy, and Metal Farm routes after Hotfix 2.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Patch route',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Hotfix 2',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Hotfix 2 后 Troilite 怎么找 - 后期资源区域变化',
      description:
        '整理 Subnautica 2 Hotfix 2 后 Troilite 变化：官方确认增加后期资源区域、Mineralized Clinker 说明、Metal Farm 规划和旧攻略注意点。',
    },
    eyebrow: 'Subnautica 2 Troilite 补丁说明',
    title: 'Subnautica 2 Hotfix 2 后 Troilite 怎么找',
    description:
      'Hotfix 2 对后期资源路线也有影响。Troilite 仍然不是前期随手捡的材料，但官方确认后期区域增加了更多 Troilite 资源点。',
    quickLabel: '快速结论',
    quickAnswer:
      'Hotfix 2 增加了后期区域的 Troilite 资源点。Troilite 仍然和 Mineralized Clinker 矿点相关，也仍然适合准备好工具、路线和背包空间之后再去跑。',
    contentsLabel: '目录',
    routeTitle: '怎么理解 Troilite 这次变化',
    routeSteps: [
      {
        title: '它不是前期资源',
        body: '银的变化帮助前期玩家，Troilite 的变化不一样。官方写的是后期区域，所以仍然属于深层路线和工具准备之后的材料。',
      },
      {
        title: '留意 Mineralized Clinker',
        body: 'PC Gamer 提到，Troilite 在检查时会显示为 Mineralized Clinker。只盯着海底有没有 Troilite 这个词，很可能会错过矿点。',
      },
      {
        title: '旧的一条路线说法要复查',
        body: 'Hotfix 2 前很多路线都把玩家指向一条危险窄路线。既然后期区域增加了资源点，旧攻略里“只有这里”的说法就不能直接照搬。',
      },
      {
        title: '和 Metal Farm 一起规划',
        body: 'Troilite 会进入稀有金属和 Metal Farm 相关制作链。出发前带对采矿工具，留背包格子，不要还没看清后续配方就把原料全花掉。',
      },
    ],
    tableTitle: 'Hotfix 2 后 Troilite 怎么看',
    tableHeaders: ['问题', '补丁后的答案'],
    tableRows: [
      ['改了什么？', 'Unknown Worlds 确认后期区域增加了更多 Troilite 资源点。'],
      ['没改什么？', 'Troilite 仍然是后期路线材料，不是新手开局资源。'],
      [
        '要找什么名字？',
        '路线里要留意 Mineralized Clinker，它和 Troilite 获取有关。',
      ],
      [
        '旧地图还能用吗？',
        '地标可以参考，但“只有一个很窄位置”的说法需要重测。',
      ],
      [
        '哪些页面要更新？',
        'Troilite、Mangalloy Ingot、Metal Farm 和后期制作页都应该注明 Hotfix 2。',
      ],
    ],
    visualTitle: 'Troilite 路线卡',
    visualItems: [
      { label: '补丁', value: 'Hotfix 2', note: '增加后期资源区域。' },
      {
        label: '矿点',
        value: 'Clinker',
        note: '路线里留意 Mineralized Clinker。',
      },
      {
        label: '用途',
        value: '稀有链',
        note: 'Mangalloy 和 Metal Farm 规划。',
      },
    ],
    cautionTitle: '不要把补丁说过头',
    cautionBody:
      '更多 Troilite 资源区域不等于安全、不等于前期、不等于无限。它的意思是后期路线需要重新核对，不能继续照搬首发周的稀缺描述。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Hotfix 2 增加 Troilite 了吗？',
        body: '是的。Unknown Worlds 说明 Hotfix 2 增加了后期区域的 Troilite 资源点。',
      },
      {
        title: 'Troilite 仍然是后期材料吗？',
        body: '是的。官方写的是 late-game region，所以它仍然应该按准备充分的后期路线来处理。',
      },
      {
        title: 'Mineralized Clinker 是什么？',
        body: '这是找 Troilite 时需要留意的矿点名称。PC Gamer 提到 Troilite 检查时会显示成这个名字。',
      },
      {
        title: '旧 Troilite 攻略要改吗？',
        body: '要。凡是写 Troilite 只有一个很窄路线的内容，都应该按 Hotfix 2 后的版本重新核对。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 更新内容' },
      { href: Routes.Subnautica2Troilite, label: 'Troilite 位置' },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm 指南' },
      { href: Routes.Subnautica2Mangalloy, label: 'Mangalloy Ingot' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 28 日核对 Unknown Worlds Hotfix 2、当前 Troilite 路线报道、Metal Farm 报道和官方路线图。',
    cardKicker: 'Troilite 补丁卡',
    cardBody:
      'Hotfix 2 后专门复查 Troilite、Mineralized Clinker、Mangalloy 和 Metal Farm 路线的补丁说明。',
    cardTypeLabel: '类型',
    cardTypeValue: '补丁路线',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: 'Hotfix 2',
  },
};

const derivedLocales: Record<string, Partial<TroilitePatchCopy>> = {
  ru: {
    metadata: {
      title: 'Subnautica 2 Troilite после Hotfix 2 - новые late-game зоны',
      description:
        'Что изменилось с Troilite после Subnautica 2 Hotfix 2: late-game resource areas, Mineralized Clinker, Metal Farm и старые маршруты.',
    },
    eyebrow: 'Troilite после Hotfix 2',
    title: 'Subnautica 2 Troilite после Hotfix 2',
    description:
      'Hotfix 2 важен для late-game маршрутов. Troilite все еще опасен, но официальная заметка говорит о новых resource areas.',
    quickLabel: 'Коротко',
    quickAnswer:
      'Hotfix 2 добавляет больше Troilite resource areas в late-game region. Это не ранний ресурс, а материал для подготовленного глубокого маршрута.',
    contentsLabel: 'Содержание',
    routeTitle: 'Как читать изменение Troilite',
    routeSteps: [
      {
        title: 'Не ищите его как ранний ресурс',
        body: 'Silver помогает в начале игры, а Troilite живет в другой части прогресса. В официальной заметке сказано late-game region, поэтому маршрут все еще требует глубины, инструмента и запаса кислорода.',
      },
      {
        title: 'Смотрите на Mineralized Clinker',
        body: 'PC Gamer отмечает, что Troilite при осмотре связан с названием Mineralized Clinker. Если искать только слово Troilite, часть подсказок в маршрутах легко пропустить.',
      },
      {
        title: 'Перепроверьте старые узкие маршруты',
        body: 'До Hotfix 2 многие заметки вели к одному опасному проходу. После добавления late-game resource areas формулировки вроде "только здесь" лучше не повторять без проверки.',
      },
      {
        title: 'Планируйте вместе с Metal Farm',
        body: 'Troilite нужен для редкой цепочки крафта. Возьмите добывающий инструмент, оставьте место в инвентаре и не тратьте сырье, пока не посмотрите следующую цепочку рецептов.',
      },
    ],
    tableTitle: 'Troilite после Hotfix 2',
    tableHeaders: ['Вопрос', 'Ответ после патча'],
    tableRows: [
      [
        'Что изменилось?',
        'Unknown Worlds пишет, что в late-game region добавили больше Troilite resource areas.',
      ],
      [
        'Что не изменилось?',
        'Troilite остается поздним материалом. Патч не делает его ресурсом для старта.',
      ],
      [
        'Какое имя искать?',
        'В маршрутах обращайте внимание на Mineralized Clinker, связанный с добычей Troilite.',
      ],
      [
        'Можно ли верить старым картам?',
        'Landmarks полезны, но claims про единственное узкое место нужно проверить заново.',
      ],
      [
        'Какие страницы обновлять?',
        'Troilite, Mangalloy Ingot, Metal Farm и late-game crafting.',
      ],
    ],
    visualTitle: 'Карточка маршрута Troilite',
    visualItems: [
      {
        label: 'Patch',
        value: 'Hotfix 2',
        note: 'Больше late-game resource areas.',
      },
      {
        label: 'Deposit',
        value: 'Clinker',
        note: 'Смотрите Mineralized Clinker в маршрутах.',
      },
      {
        label: 'Use',
        value: 'Rare chain',
        note: 'Mangalloy и Metal Farm planning.',
      },
    ],
    cautionTitle: 'Не преувеличивайте патч',
    cautionBody:
      'Больше Troilite areas не значит safe, early или unlimited. Это повод перепроверить поздний маршрут.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Hotfix 2 добавил больше Troilite?',
        body: 'Да. Unknown Worlds говорит о новых Troilite resource areas в late-game region.',
      },
      {
        title: 'Troilite все еще late game?',
        body: 'Да. В заметке указан late-game region, поэтому материал лучше считать поздним и рискованным.',
      },
      {
        title: 'Что такое Mineralized Clinker?',
        body: 'Это название, которое стоит искать в Troilite маршрутах. PC Gamer связывает его с Troilite при осмотре.',
      },
      {
        title: 'Старые заметки нужно менять?',
        body: 'Да, если они пишут, что Troilite есть только в одном узком месте. Такие claims надо проверить после Hotfix 2.',
      },
    ],
    readNextTitle: 'Дальше',
    related: [
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
      { href: Routes.Subnautica2Troilite, label: 'Troilite Location' },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm Guide' },
      { href: Routes.Subnautica2Mangalloy, label: 'Mangalloy Ingot' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
    ],
    sourcesTitle: 'Источники',
    sourceBody:
      'Проверено 28 мая 2026 по Hotfix 2, PC Gamer Troilite, Metal Farm и roadmap.',
    cardKicker: 'Troilite patch card',
    cardBody:
      'Заметка для повторной проверки Troilite, Mineralized Clinker, Mangalloy и Metal Farm после Hotfix 2.',
    cardTypeLabel: 'Тип',
    cardTypeValue: 'Patch route',
    cardVerifiedLabel: 'Проверено',
    cardStatusLabel: 'Статус',
    cardStatusValue: 'Hotfix 2',
  },
  de: {
    metadata: {
      title: 'Subnautica 2 Troilite nach Hotfix 2 - late-game resource update',
      description:
        'Troilite nach Subnautica 2 Hotfix 2: neue late-game resource areas, Mineralized Clinker, Metal Farm und alte Guide-Caveats.',
    },
    eyebrow: 'Troilite Patch Note',
    title: 'Subnautica 2 Troilite nach Hotfix 2',
    description:
      'Hotfix 2 betrifft late-game routing. Troilite bleibt gefaehrlich, aber die offizielle Note nennt mehr Troilite resource areas.',
    quickLabel: 'Kurzfassung',
    quickAnswer:
      'Hotfix 2 fuegt mehr Troilite resource areas im late-game region hinzu. Es bleibt ein vorbereiteter late-route material.',
    contentsLabel: 'Inhalt',
    routeTitle: 'So liest du die Troilite-Aenderung',
    routeSteps: [
      {
        title: 'Nicht wie einen fruehen Rohstoff behandeln',
        body: 'Silver hilft am Anfang. Troilite gehoert weiter zu tieferen Routen, besserem Tool-Setup und mehr Risiko. Die offizielle Note spricht klar von late-game region.',
      },
      {
        title: 'Auf Mineralized Clinker achten',
        body: 'PC Gamer nennt Mineralized Clinker im Zusammenhang mit Troilite. Wer nur nach dem Wort Troilite sucht, uebersieht schnell den eigentlichen Deposit-Hinweis.',
      },
      {
        title: 'Alte Ein-Routen-Tipps neu pruefen',
        body: 'Vor Hotfix 2 fuehrten viele Notizen zu einer engen gefaehrlichen Route. Mehr late-game resource areas heisst: "nur hier" ist ohne neuen Test zu hart.',
      },
      {
        title: 'Mit Metal Farm planen',
        body: 'Troilite haengt an seltenem Crafting. Nimm das passende Mining-Tool mit, lass Inventar frei und verbrauche Rohmaterial nicht, bevor die naechste Rezeptkette klar ist.',
      },
    ],
    tableTitle: 'Troilite nach Hotfix 2',
    tableHeaders: ['Frage', 'Patch-aware Antwort'],
    tableRows: [
      [
        'Was hat sich geaendert?',
        'Unknown Worlds nennt mehr Troilite resource areas in der late-game region.',
      ],
      [
        'Was bleibt gleich?',
        'Troilite bleibt ein spaetes Material. Es wird kein Beginner-Rohstoff.',
      ],
      [
        'Welchen Namen suchen?',
        'In Routen auf Mineralized Clinker achten, weil es mit Troilite collection verknuepft ist.',
      ],
      [
        'Alte Maps nutzen?',
        'Landmarks ja, aber Claims zu nur einer engen Stelle neu testen.',
      ],
      [
        'Welche Seiten updaten?',
        'Troilite, Mangalloy Ingot, Metal Farm und late-game crafting.',
      ],
    ],
    visualTitle: 'Troilite route card',
    visualItems: [
      {
        label: 'Patch',
        value: 'Hotfix 2',
        note: 'Mehr late-game resource areas.',
      },
      {
        label: 'Deposit',
        value: 'Clinker',
        note: 'Mineralized Clinker in Routen beachten.',
      },
      {
        label: 'Use',
        value: 'Rare chain',
        note: 'Mangalloy und Metal Farm planning.',
      },
    ],
    cautionTitle: 'Den Patch nicht ueberverkaufen',
    cautionBody:
      'Mehr Troilite areas heisst nicht safe, early oder unlimited. Es heisst: late-game route neu pruefen.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Hat Hotfix 2 mehr Troilite hinzugefuegt?',
        body: 'Ja. Unknown Worlds nennt mehr Troilite resource areas in der late-game region.',
      },
      {
        title: 'Bleibt Troilite late game?',
        body: 'Ja. Die Note sagt late-game region, also bleibt es ein vorbereiteter spaeter Run.',
      },
      {
        title: 'Was ist Mineralized Clinker?',
        body: 'Das ist der Name, auf den du in Troilite-Routen achten solltest. PC Gamer verbindet ihn mit Troilite beim Untersuchen.',
      },
      {
        title: 'Sollten alte Troilite-Notizen angepasst werden?',
        body: 'Ja, wenn sie behaupten, Troilite gebe es nur an einer engen Stelle. Nach Hotfix 2 neu pruefen.',
      },
    ],
    readNextTitle: 'Weiterlesen',
    related: [
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
      { href: Routes.Subnautica2Troilite, label: 'Troilite Location' },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm Guide' },
      { href: Routes.Subnautica2Mangalloy, label: 'Mangalloy Ingot' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
    ],
    sourcesTitle: 'Quellen',
    sourceBody:
      'Geprueft am 28. Mai 2026 mit Hotfix 2, PC Gamer Troilite, Metal Farm und Roadmap.',
    cardKicker: 'Troilite patch card',
    cardBody:
      'Patch-Notiz fuer Troilite, Mineralized Clinker, Mangalloy und Metal Farm nach Hotfix 2.',
    cardTypeLabel: 'Typ',
    cardTypeValue: 'Patch route',
    cardVerifiedLabel: 'Geprueft',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Hotfix 2',
  },
  fr: {
    metadata: {
      title: 'Subnautica 2 Troilite apres Hotfix 2 - update late-game',
      description:
        'Troilite apres Subnautica 2 Hotfix 2 : nouvelles zones late-game, Mineralized Clinker, Metal Farm et anciens guides a verifier.',
    },
    eyebrow: 'Note Troilite Hotfix 2',
    title: 'Subnautica 2 Troilite apres Hotfix 2',
    description:
      'Hotfix 2 compte pour les routes late-game. Troilite reste dangereux, mais la note officielle ajoute plus de resource areas.',
    quickLabel: 'Reponse rapide',
    quickAnswer:
      'Hotfix 2 ajoute plus de Troilite resource areas en late-game region. Cela reste un materiau de route preparee.',
    contentsLabel: 'Sommaire',
    routeTitle: 'Comment lire le changement Troilite',
    routeSteps: [
      {
        title: 'Ne le traitez pas comme une ressource de debut',
        body: 'Silver aide les joueurs au debut. Troilite reste lie a une route plus profonde, avec outil, oxygene et marge de retour. La note officielle parle de late-game region.',
      },
      {
        title: 'Surveillez Mineralized Clinker',
        body: 'PC Gamer lie Troilite a Mineralized Clinker quand le depot est examine. Chercher seulement le mot Troilite peut faire rater l indice utile.',
      },
      {
        title: 'Revoyez les anciens conseils trop etroits',
        body: 'Avant Hotfix 2, plusieurs guides envoyaient vers une route dangereuse unique. Avec plus de zones late-game, une phrase du type "seulement ici" doit etre re-testee.',
      },
      {
        title: 'Planifiez avec Metal Farm',
        body: 'Troilite entre dans une chaine de craft rare. Prenez le bon outil, gardez de la place et ne depensez pas tout avant de lire la suite des recettes.',
      },
    ],
    tableTitle: 'Troilite apres Hotfix 2',
    tableHeaders: ['Question', 'Reponse apres patch'],
    tableRows: [
      [
        'Qu est-ce qui change?',
        'Unknown Worlds indique plus de Troilite resource areas en late-game region.',
      ],
      [
        'Qu est-ce qui ne change pas?',
        'Troilite reste un materiau tardif. Le patch ne le transforme pas en ressource de debut.',
      ],
      [
        'Quel nom regarder?',
        'Dans les routes, cherchez Mineralized Clinker, lie a la collecte de Troilite.',
      ],
      [
        'Faire confiance aux vieilles cartes?',
        'Les landmarks aident, mais les claims sur un seul spot etroit doivent etre repris.',
      ],
      [
        'Quelles pages mettre a jour?',
        'Troilite, Mangalloy Ingot, Metal Farm et late-game crafting.',
      ],
    ],
    visualTitle: 'Carte route Troilite',
    visualItems: [
      {
        label: 'Patch',
        value: 'Hotfix 2',
        note: 'Plus de zones late-game.',
      },
      {
        label: 'Depot',
        value: 'Clinker',
        note: 'Cherchez Mineralized Clinker.',
      },
      {
        label: 'Usage',
        value: 'Rare chain',
        note: 'Mangalloy et Metal Farm planning.',
      },
    ],
    cautionTitle: 'Ne pas surestimer le patch',
    cautionBody:
      'Plus de Troilite areas ne veut pas dire safe, early ou unlimited. Il faut re-verifier la route late-game.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Hotfix 2 ajoute plus de Troilite?',
        body: 'Oui. Unknown Worlds indique plus de Troilite resource areas en late-game region.',
      },
      {
        title: 'Troilite reste late game?',
        body: 'Oui. La note dit late-game region, donc il faut le traiter comme une route tardive preparee.',
      },
      {
        title: 'C est quoi Mineralized Clinker?',
        body: 'C est le nom a surveiller dans les routes Troilite. PC Gamer le relie a Troilite lors de l examen.',
      },
      {
        title: 'Faut-il corriger les vieux guides?',
        body: 'Oui si un guide dit que Troilite n existe que sur une seule route etroite. Re-test apres Hotfix 2.',
      },
    ],
    readNextTitle: 'Lire ensuite',
    related: [
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
      { href: Routes.Subnautica2Troilite, label: 'Troilite Location' },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm Guide' },
      { href: Routes.Subnautica2Mangalloy, label: 'Mangalloy Ingot' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
    ],
    sourcesTitle: 'Sources',
    sourceBody:
      'Verifie le 28 mai 2026 avec Hotfix 2, PC Gamer Troilite, Metal Farm et roadmap.',
    cardKicker: 'Troilite patch card',
    cardBody:
      'Note de patch pour Troilite, Mineralized Clinker, Mangalloy et Metal Farm apres Hotfix 2.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Patch route',
    cardVerifiedLabel: 'Verifie',
    cardStatusLabel: 'Statut',
    cardStatusValue: 'Hotfix 2',
  },
  'pt-BR': {
    metadata: {
      title: 'Subnautica 2 Troilite depois do Hotfix 2 - update late-game',
      description:
        'Troilite depois do Subnautica 2 Hotfix 2: novas areas late-game, Mineralized Clinker, Metal Farm e guias antigos para revisar.',
    },
    eyebrow: 'Nota Troilite Hotfix 2',
    title: 'Subnautica 2 Troilite depois do Hotfix 2',
    description:
      'Hotfix 2 importa para rotas late-game. Troilite ainda e perigoso, mas a nota oficial adiciona mais resource areas.',
    quickLabel: 'Resposta rapida',
    quickAnswer:
      'Hotfix 2 adiciona mais Troilite resource areas no late-game region. Ainda e material de rota preparada.',
    contentsLabel: 'Conteudo',
    routeTitle: 'Como ler a mudanca de Troilite',
    routeSteps: [
      {
        title: 'Nao trate como recurso inicial',
        body: 'Silver ajuda o comeco. Troilite fica em outro ritmo: rota mais funda, ferramenta certa, oxigenio e volta planejada. A nota oficial fala em late-game region.',
      },
      {
        title: 'Procure Mineralized Clinker',
        body: 'PC Gamer relaciona Troilite com Mineralized Clinker quando o deposito e examinado. Procurar so a palavra Troilite pode fazer voce passar reto.',
      },
      {
        title: 'Revise guias de uma rota so',
        body: 'Antes do Hotfix 2, muitos guias apontavam para uma rota estreita e perigosa. Com mais late-game resource areas, "so aqui" precisa de novo teste.',
      },
      {
        title: 'Planeje com Metal Farm',
        body: 'Troilite entra em craft raro. Leve a ferramenta de mineracao, deixe espaco no inventario e nao gaste tudo antes de ver a proxima receita.',
      },
    ],
    tableTitle: 'Troilite depois do Hotfix 2',
    tableHeaders: ['Pergunta', 'Resposta depois do patch'],
    tableRows: [
      [
        'O que mudou?',
        'Unknown Worlds diz que adicionou mais Troilite resource areas no late-game region.',
      ],
      [
        'O que nao mudou?',
        'Troilite continua material de rota tardia. Nao virou recurso de inicio.',
      ],
      [
        'Que nome procurar?',
        'Nas rotas, fique atento a Mineralized Clinker, ligado a coleta de Troilite.',
      ],
      [
        'Mapas antigos servem?',
        'Use landmarks, mas teste de novo qualquer frase sobre um unico ponto apertado.',
      ],
      [
        'Quais paginas atualizar?',
        'Troilite, Mangalloy Ingot, Metal Farm e late-game crafting.',
      ],
    ],
    visualTitle: 'Cartao de rota Troilite',
    visualItems: [
      {
        label: 'Patch',
        value: 'Hotfix 2',
        note: 'Mais late-game resource areas.',
      },
      {
        label: 'Deposito',
        value: 'Clinker',
        note: 'Procure Mineralized Clinker.',
      },
      {
        label: 'Uso',
        value: 'Rare chain',
        note: 'Mangalloy e Metal Farm planning.',
      },
    ],
    cautionTitle: 'Nao exagere o patch',
    cautionBody:
      'Mais Troilite areas nao significa safe, early ou unlimited. Significa retestar a rota late-game.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Hotfix 2 adicionou mais Troilite?',
        body: 'Sim. Unknown Worlds diz que adicionou mais Troilite resource areas no late-game region.',
      },
      {
        title: 'Troilite ainda e late game?',
        body: 'Sim. A nota fala em late-game region, entao continue tratando como rota preparada.',
      },
      {
        title: 'O que e Mineralized Clinker?',
        body: 'E o nome do deposito para observar em rotas de Troilite. PC Gamer o associa a Troilite quando examinado.',
      },
      {
        title: 'Guias antigos precisam mudar?',
        body: 'Sim, se dizem que Troilite existe so em uma rota estreita. Depois do Hotfix 2, isso precisa de teste.',
      },
    ],
    readNextTitle: 'Ler depois',
    related: [
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
      { href: Routes.Subnautica2Troilite, label: 'Troilite Location' },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm Guide' },
      { href: Routes.Subnautica2Mangalloy, label: 'Mangalloy Ingot' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
    ],
    sourcesTitle: 'Fontes',
    sourceBody:
      'Checado em 28 de maio de 2026 com Hotfix 2, PC Gamer Troilite, Metal Farm e roadmap.',
    cardKicker: 'Troilite patch card',
    cardBody:
      'Nota de patch para Troilite, Mineralized Clinker, Mangalloy e Metal Farm depois do Hotfix 2.',
    cardTypeLabel: 'Tipo',
    cardTypeValue: 'Patch route',
    cardVerifiedLabel: 'Verificado',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Hotfix 2',
  },
  'es-419': {
    metadata: {
      title: 'Subnautica 2 Troilite despues de Hotfix 2 - update late-game',
      description:
        'Troilite despues de Subnautica 2 Hotfix 2: nuevas areas late-game, Mineralized Clinker, Metal Farm y guias antiguas a revisar.',
    },
    eyebrow: 'Nota Troilite Hotfix 2',
    title: 'Subnautica 2 Troilite despues de Hotfix 2',
    description:
      'Hotfix 2 importa para rutas late-game. Troilite sigue siendo peligroso, pero la nota oficial agrega mas resource areas.',
    quickLabel: 'Respuesta rapida',
    quickAnswer:
      'Hotfix 2 agrega mas Troilite resource areas en late-game region. Sigue siendo material de ruta preparada.',
    contentsLabel: 'Contenido',
    routeTitle: 'Como leer el cambio de Troilite',
    routeSteps: [
      {
        title: 'No lo trates como recurso inicial',
        body: 'Silver ayuda al arranque. Troilite pertenece a otra etapa: ruta profunda, herramienta correcta, oxigeno y salida planeada. La nota oficial dice late-game region.',
      },
      {
        title: 'Busca Mineralized Clinker',
        body: 'PC Gamer relaciona Troilite con Mineralized Clinker al examinar el deposito. Si buscas solo la palabra Troilite, puedes pasar de largo.',
      },
      {
        title: 'Revisa los consejos de una sola ruta',
        body: 'Antes de Hotfix 2, muchos guias mandaban a una ruta estrecha y peligrosa. Con mas late-game resource areas, "solo aqui" necesita prueba nueva.',
      },
      {
        title: 'Planea junto a Metal Farm',
        body: 'Troilite entra en craft raro. Lleva herramienta de mineria, deja espacio y no gastes todo antes de mirar la siguiente cadena de recetas.',
      },
    ],
    tableTitle: 'Troilite despues de Hotfix 2',
    tableHeaders: ['Pregunta', 'Respuesta despues del patch'],
    tableRows: [
      [
        'Que cambio?',
        'Unknown Worlds dice que agrego mas Troilite resource areas en late-game region.',
      ],
      [
        'Que no cambio?',
        'Troilite sigue siendo material tardio. No se vuelve recurso de inicio.',
      ],
      [
        'Que nombre buscar?',
        'En rutas, mira Mineralized Clinker, relacionado con conseguir Troilite.',
      ],
      [
        'Sirven mapas viejos?',
        'Usa landmarks, pero revisa cualquier claim de un unico punto estrecho.',
      ],
      [
        'Que paginas actualizar?',
        'Troilite, Mangalloy Ingot, Metal Farm y late-game crafting.',
      ],
    ],
    visualTitle: 'Tarjeta de ruta Troilite',
    visualItems: [
      {
        label: 'Patch',
        value: 'Hotfix 2',
        note: 'Mas late-game resource areas.',
      },
      {
        label: 'Deposito',
        value: 'Clinker',
        note: 'Busca Mineralized Clinker.',
      },
      {
        label: 'Uso',
        value: 'Rare chain',
        note: 'Mangalloy y Metal Farm planning.',
      },
    ],
    cautionTitle: 'No exageres el patch',
    cautionBody:
      'Mas Troilite areas no significa safe, early o unlimited. Significa volver a probar la ruta late-game.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Hotfix 2 agrego mas Troilite?',
        body: 'Si. Unknown Worlds dice que agrego mas Troilite resource areas en late-game region.',
      },
      {
        title: 'Troilite sigue siendo late game?',
        body: 'Si. La nota dice late-game region, asi que sigue siendo una ruta preparada.',
      },
      {
        title: 'Que es Mineralized Clinker?',
        body: 'Es el nombre a vigilar en rutas de Troilite. PC Gamer lo asocia con Troilite al examinarlo.',
      },
      {
        title: 'Hay que cambiar guias viejas?',
        body: 'Si, si dicen que Troilite existe solo en una ruta estrecha. Despues de Hotfix 2 hay que probarlo.',
      },
    ],
    readNextTitle: 'Leer despues',
    related: [
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
      { href: Routes.Subnautica2Troilite, label: 'Troilite Location' },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm Guide' },
      { href: Routes.Subnautica2Mangalloy, label: 'Mangalloy Ingot' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
    ],
    sourcesTitle: 'Fuentes',
    sourceBody:
      'Revisado el 28 de mayo de 2026 con Hotfix 2, PC Gamer Troilite, Metal Farm y roadmap.',
    cardKicker: 'Troilite patch card',
    cardBody:
      'Nota de patch para Troilite, Mineralized Clinker, Mangalloy y Metal Farm despues de Hotfix 2.',
    cardTypeLabel: 'Tipo',
    cardTypeValue: 'Patch route',
    cardVerifiedLabel: 'Verificado',
    cardStatusLabel: 'Estado',
    cardStatusValue: 'Hotfix 2',
  },
  ko: {
    metadata: {
      title: 'Subnautica 2 Hotfix 2 이후 Troilite - late-game 자원 변경',
      description:
        'Subnautica 2 Hotfix 2 이후 Troilite: late-game resource areas, Mineralized Clinker, Metal Farm, 오래된 가이드 주의점.',
    },
    eyebrow: 'Troilite Hotfix 2 note',
    title: 'Subnautica 2 Hotfix 2 이후 Troilite',
    description:
      'Hotfix 2는 late-game route에 중요합니다. Troilite는 여전히 위험하지만 공식 노트는 resource areas 추가를 말합니다.',
    quickLabel: '빠른 답변',
    quickAnswer:
      'Hotfix 2는 late-game region에 Troilite resource areas를 더 추가합니다. 여전히 준비된 late-route material입니다.',
    contentsLabel: '목차',
    routeTitle: 'Troilite 변경 이해하기',
    routeSteps: [
      {
        title: '초반 자원처럼 보지 않기',
        body: 'Silver 변경은 초반을 돕지만 Troilite는 다릅니다. 공식 노트는 late-game region이라고 적었고, 깊은 루트와 장비 준비가 여전히 필요합니다.',
      },
      {
        title: 'Mineralized Clinker 확인',
        body: 'PC Gamer는 Troilite가 조사될 때 Mineralized Clinker 이름과 연결된다고 설명합니다. Troilite라는 단어만 찾으면 단서를 놓칠 수 있습니다.',
      },
      {
        title: '오래된 한 루트 설명 재확인',
        body: 'Hotfix 2 전에는 좁고 위험한 루트 하나를 가리키는 글이 많았습니다. late-game resource areas가 늘었으니 "여기뿐"이라는 표현은 다시 확인해야 합니다.',
      },
      {
        title: 'Metal Farm과 같이 계획',
        body: 'Troilite는 rare crafting 쪽으로 이어집니다. 채굴 도구, 인벤토리 공간, 다음 제작 체인을 먼저 확인하고 움직이는 편이 좋습니다.',
      },
    ],
    tableTitle: 'Hotfix 2 이후 Troilite',
    tableHeaders: ['질문', '패치 후 답변'],
    tableRows: [
      [
        '무엇이 바뀌었나요?',
        'Unknown Worlds는 late-game region에 Troilite resource areas가 더 추가됐다고 밝혔습니다.',
      ],
      [
        '무엇은 그대로인가요?',
        'Troilite는 여전히 후반 루트 재료입니다. 초반 자원이 된 것은 아닙니다.',
      ],
      [
        '어떤 이름을 보나요?',
        '루트에서는 Troilite 획득과 연결된 Mineralized Clinker를 확인하세요.',
      ],
      [
        '오래된 지도는 쓸 수 있나요?',
        '랜드마크는 쓸 수 있지만 한 곳뿐이라는 설명은 다시 테스트해야 합니다.',
      ],
      [
        '어떤 페이지를 고치나요?',
        'Troilite, Mangalloy Ingot, Metal Farm, late-game crafting 페이지입니다.',
      ],
    ],
    visualTitle: 'Troilite 루트 카드',
    visualItems: [
      {
        label: 'Patch',
        value: 'Hotfix 2',
        note: 'late-game resource areas 추가.',
      },
      {
        label: 'Deposit',
        value: 'Clinker',
        note: 'Mineralized Clinker 확인.',
      },
      {
        label: 'Use',
        value: 'Rare chain',
        note: 'Mangalloy와 Metal Farm 계획.',
      },
    ],
    cautionTitle: '패치를 과장하지 마세요',
    cautionBody:
      'Troilite areas가 늘었다고 safe, early, unlimited가 되는 것은 아닙니다. late-game route를 다시 확인하라는 뜻입니다.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Hotfix 2가 Troilite를 더 추가했나요?',
        body: '네. Unknown Worlds는 late-game region에 Troilite resource areas를 더 추가했다고 밝혔습니다.',
      },
      {
        title: 'Troilite는 여전히 late game인가요?',
        body: '네. 공식 노트가 late-game region이라고 말하므로 준비된 후반 루트로 봐야 합니다.',
      },
      {
        title: 'Mineralized Clinker가 뭔가요?',
        body: 'Troilite 루트에서 확인해야 할 이름입니다. PC Gamer는 조사 시 Troilite와 연결된다고 설명합니다.',
      },
      {
        title: '오래된 Troilite 가이드를 바꿔야 하나요?',
        body: '네. Troilite가 좁은 루트 하나뿐이라고 쓰인 글은 Hotfix 2 이후 다시 확인해야 합니다.',
      },
    ],
    readNextTitle: '다음 읽기',
    related: [
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
      { href: Routes.Subnautica2Troilite, label: 'Troilite Location' },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm Guide' },
      { href: Routes.Subnautica2Mangalloy, label: 'Mangalloy Ingot' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
    ],
    sourcesTitle: '출처',
    sourceBody:
      '2026년 5월 28일 Hotfix 2, PC Gamer Troilite, Metal Farm, roadmap을 확인했습니다.',
    cardKicker: 'Troilite patch card',
    cardBody:
      'Hotfix 2 이후 Troilite, Mineralized Clinker, Mangalloy, Metal Farm을 다시 확인하는 패치 노트.',
    cardTypeLabel: '유형',
    cardTypeValue: 'Patch route',
    cardVerifiedLabel: '확인일',
    cardStatusLabel: '상태',
    cardStatusValue: 'Hotfix 2',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 Hotfix 2 後の Troilite - late-game 資源更新',
      description:
        'Subnautica 2 Hotfix 2 後の Troilite: late-game resource areas、Mineralized Clinker、Metal Farm、古い攻略の注意点。',
    },
    eyebrow: 'Troilite Hotfix 2 note',
    title: 'Subnautica 2 Hotfix 2 後の Troilite',
    description:
      'Hotfix 2 は late-game route に関係します。Troilite はまだ危険ですが、公式ノートは resource areas の追加を示しています。',
    quickLabel: '要点',
    quickAnswer:
      'Hotfix 2 は late-game region に Troilite resource areas を追加します。今でも準備が必要な late-route material です。',
    contentsLabel: '目次',
    routeTitle: 'Troilite 変更の読み方',
    routeSteps: [
      {
        title: '序盤資源として扱わない',
        body: 'Silver の変更は序盤向けですが、Troilite は別です。公式ノートは late-game region と書いているため、深いルート、道具、帰り道の準備が必要です。',
      },
      {
        title: 'Mineralized Clinker を見る',
        body: 'PC Gamer は、Troilite が調査時に Mineralized Clinker と関係すると説明しています。Troilite という単語だけを探すと見落とします。',
      },
      {
        title: '古い一本道ガイドを再確認する',
        body: 'Hotfix 2 前の攻略は、危険で狭い1ルートを示すものが多めでした。late-game resource areas が増えたので、「ここだけ」という書き方は再テストが必要です。',
      },
      {
        title: 'Metal Farm と一緒に考える',
        body: 'Troilite は rare crafting の流れに入ります。採掘ツール、インベントリ、次のレシピを確認してから走る方が安全です。',
      },
    ],
    tableTitle: 'Hotfix 2 後の Troilite',
    tableHeaders: ['質問', 'パッチ後の答え'],
    tableRows: [
      [
        '何が変わった？',
        'Unknown Worlds は late-game region に Troilite resource areas を追加したと説明しています。',
      ],
      [
        '何は変わらない？',
        'Troilite は後半ルート素材のままです。序盤資源にはなっていません。',
      ],
      [
        'どの名前を見る？',
        'ルートでは Troilite 入手に関係する Mineralized Clinker を確認します。',
      ],
      [
        '古い地図は使える？',
        'Landmark は使えますが、一つの狭い場所だけという説明は再テストが必要です。',
      ],
      [
        'どのページを更新する？',
        'Troilite、Mangalloy Ingot、Metal Farm、late-game crafting です。',
      ],
    ],
    visualTitle: 'Troilite route card',
    visualItems: [
      {
        label: 'Patch',
        value: 'Hotfix 2',
        note: 'late-game resource areas 追加。',
      },
      {
        label: 'Deposit',
        value: 'Clinker',
        note: 'Mineralized Clinker を確認。',
      },
      {
        label: 'Use',
        value: 'Rare chain',
        note: 'Mangalloy と Metal Farm planning。',
      },
    ],
    cautionTitle: 'パッチを言いすぎない',
    cautionBody:
      'Troilite areas が増えても safe、early、unlimited にはなりません。late-game route を再確認するという意味です。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Hotfix 2 で Troilite は増えた？',
        body: 'はい。Unknown Worlds は late-game region に Troilite resource areas を追加したと説明しています。',
      },
      {
        title: 'Troilite はまだ late game？',
        body: 'はい。公式ノートが late-game region と書いているので、準備した後半ルートとして扱います。',
      },
      {
        title: 'Mineralized Clinker とは？',
        body: 'Troilite ルートで見る名前です。PC Gamer は調査時の Troilite と関係すると説明しています。',
      },
      {
        title: '古い Troilite 攻略は直すべき？',
        body: 'はい。Troilite が狭い1ルートだけと書く記事は、Hotfix 2 後に再確認が必要です。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
      { href: Routes.Subnautica2Troilite, label: 'Troilite Location' },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm Guide' },
      { href: Routes.Subnautica2Mangalloy, label: 'Mangalloy Ingot' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
    ],
    sourcesTitle: 'ソース',
    sourceBody:
      '2026年5月28日に Hotfix 2、PC Gamer Troilite、Metal Farm、roadmap を確認。',
    cardKicker: 'Troilite patch card',
    cardBody:
      'Hotfix 2 後の Troilite、Mineralized Clinker、Mangalloy、Metal Farm を再確認するパッチノート。',
    cardTypeLabel: '種類',
    cardTypeValue: 'Patch route',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: '状態',
    cardStatusValue: 'Hotfix 2',
  },
};

function applyLocalePatch(copy: TroilitePatchCopy, locale: string) {
  const patch = derivedLocales[locale];

  if (!patch) {
    return copy;
  }

  return {
    ...copy,
    ...patch,
    metadata: {
      ...copy.metadata,
      ...patch.metadata,
    },
  };
}

function getCopy(locale: Locale): TroilitePatchCopy {
  return applyLocalePatch(
    troilitePatchCopy[locale] ?? troilitePatchCopy.en,
    locale
  );
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
    pathname: Routes.Subnautica2TroiliteAfterHotfix2,
  });
}

export default async function TroiliteAfterHotfix2Page({
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
      icon={PickaxeIcon}
      locale={locale}
      pathname={Routes.Subnautica2TroiliteAfterHotfix2}
      sources={sharedSources}
    />
  );
}
