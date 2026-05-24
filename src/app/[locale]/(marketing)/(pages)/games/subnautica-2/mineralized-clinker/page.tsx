import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { PickaxeIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type ClinkerCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-24';
const UPDATED_AT = '2026-05-24';

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

const clinkerCopy: Record<string, ClinkerCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Mineralized Clinker Guide - Troilite Deposit Name and Route Notes',
      description:
        'A practical guide to Mineralized Clinker in Subnautica 2, explaining how it relates to Troilite, Hotfix 2 late-game resource areas, Metal Farm planning, and old route caveats.',
    },
    eyebrow: 'Subnautica 2 deposit note',
    title: 'Subnautica 2 Mineralized Clinker Guide',
    description:
      'Mineralized Clinker is the name players should watch for when following Troilite routes. If you only scan the screen for the word Troilite, you can miss the thing the guide is actually talking about.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Mineralized Clinker is tied to Troilite collection in current route reporting. Treat it as a late-game route clue, not a new beginner resource. Hotfix 2 added more Troilite resource areas in the late-game region, but it did not publish a coordinate list.',
    contentsLabel: 'Contents',
    routeTitle: 'How to use Mineralized Clinker in a route',
    routeSteps: [
      {
        title: 'Read it as a deposit clue',
        body: 'PC Gamer reports Troilite through the Mineralized Clinker name. That matters because a player may be in the right area and still miss the material if the guide wording is too narrow.',
      },
      {
        title: 'Keep the route late-game',
        body: 'The official Hotfix 2 note says more Troilite resource areas were added in the late-game region. That is not an invitation to send new players into a deep run too early.',
      },
      {
        title: 'Pair it with Troilite and Metal Farm pages',
        body: 'Mineralized Clinker is not an isolated keyword. It belongs beside Troilite, Mangalloy, and Metal Farm planning because one saved sample can change your rare-metal loop.',
      },
      {
        title: 'Be careful with exact-location claims',
        body: 'Use landmarks from current reporting, but avoid fake precision. The official note confirms more areas, not a public coordinate sheet.',
      },
    ],
    tableTitle: 'Mineralized Clinker route notes',
    tableHeaders: ['Question', 'Practical answer'],
    tableRows: [
      [
        'What is Mineralized Clinker?',
        'A deposit name to watch for when following Troilite routes in current reporting.',
      ],
      [
        'Is it the same search intent as Troilite?',
        'Mostly yes. Players looking for Mineralized Clinker are usually trying to solve the Troilite route.',
      ],
      [
        'Did Hotfix 2 change it?',
        'Hotfix 2 confirmed more Troilite resource areas in the late-game region. It did not list exact Mineralized Clinker coordinates.',
      ],
      [
        'What should I do with the first one?',
        'Treat the first Troilite sample carefully. Check Metal Farm and Mangalloy needs before spending it.',
      ],
      [
        'Should old guides be trusted?',
        'Use old guides for direction, but recheck any wording that says there is only one place to find it.',
      ],
    ],
    visualTitle: 'Deposit check card',
    visualItems: [
      {
        label: 'Name',
        value: 'Clinker',
        note: 'The deposit wording players may see in route notes.',
      },
      {
        label: 'Material',
        value: 'Troilite',
        note: 'The resource goal behind the search.',
      },
      {
        label: 'Patch',
        value: 'Hotfix 2',
        note: 'More late-game Troilite areas were added.',
      },
    ],
    cautionTitle: 'Do not turn a clue into a fake map',
    cautionBody:
      'Mineralized Clinker is useful because it makes the Troilite route easier to read. It does not give us permission to invent coordinates, drop rates, or safe early-game routes.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Is Mineralized Clinker Troilite in Subnautica 2?',
        body: 'Current route reporting ties Mineralized Clinker to Troilite collection. For guide use, treat it as the deposit clue players should watch for on a Troilite run.',
      },
      {
        title: 'Did Hotfix 2 add more Mineralized Clinker?',
        body: 'The official note says more Troilite resource areas were added in the late-game region. It does not name a separate Mineralized Clinker coordinate list.',
      },
      {
        title: 'Should beginners look for Mineralized Clinker?',
        body: 'No. This is a late-game route clue. Beginners should handle oxygen, tools, base setup, and safer materials first.',
      },
      {
        title: 'Why link this page to Metal Farm?',
        body: 'Metal Farm planning changes how you spend your first rare metals. A saved Troilite sample can matter more than a rushed craft.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Troilite, label: 'Troilite Location' },
      {
        href: Routes.Subnautica2TroiliteAfterHotfix2,
        label: 'Troilite After Hotfix 2',
      },
      {
        href: Routes.Subnautica2TroiliteSoftlock,
        label: 'Troilite Softlock Fix',
      },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm Guide' },
      { href: Routes.Subnautica2Mangalloy, label: 'Mangalloy Ingot' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 24, 2026 against Unknown Worlds Hotfix 2, PC Gamer Troilite and Metal Farm route reporting, and the official Early Access roadmap.',
    cardKicker: 'Mineral scan card',
    cardBody:
      'A route note for players who see Mineralized Clinker while trying to solve Troilite, Mangalloy, and Metal Farm progression.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Deposit guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Hotfix 2',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Mineralized Clinker 指南 - Troilite 矿点名称和路线说明',
      description:
        '整理 Subnautica 2 Mineralized Clinker 和 Troilite 的关系，说明 Hotfix 2 后期资源区域变化、Metal Farm 规划和旧攻略注意点。',
    },
    eyebrow: 'Subnautica 2 矿点说明',
    title: 'Subnautica 2 Mineralized Clinker 指南',
    description:
      'Mineralized Clinker 是找 Troilite 时要留意的矿点名称。只盯着屏幕上有没有 Troilite 这个词，可能会错过真正该看的东西。',
    quickLabel: '快速结论',
    quickAnswer:
      '当前路线报道把 Mineralized Clinker 和 Troilite 获取联系在一起。它应该按后期路线线索来理解，不是新手开局资源。Hotfix 2 增加了后期区域的 Troilite 资源点，但官方没有公开坐标清单。',
    contentsLabel: '目录',
    routeTitle: '路线里怎么理解 Mineralized Clinker',
    routeSteps: [
      {
        title: '把它当作矿点线索',
        body: 'PC Gamer 的 Troilite 路线报道提到了 Mineralized Clinker。这个名称很关键，因为玩家可能已经到了正确区域，却因为只找 Troilite 字样而错过矿点。',
      },
      {
        title: '仍然按后期路线处理',
        body: 'Unknown Worlds 在 Hotfix 2 里写的是后期区域增加更多 Troilite 资源点。这不代表新手可以很早就安全去跑。',
      },
      {
        title: '和 Troilite、Metal Farm 一起看',
        body: 'Mineralized Clinker 不是孤立关键词。它应该和 Troilite、Mangalloy、Metal Farm 放在同一条稀有金属路线里理解。',
      },
      {
        title: '不要乱写精确坐标',
        body: '当前报道可以提供地标方向，但官方只确认资源区域增加，没有给公开坐标表。攻略不能为了好看编精确点位。',
      },
    ],
    tableTitle: 'Mineralized Clinker 路线笔记',
    tableHeaders: ['问题', '实用答案'],
    tableRows: [
      [
        'Mineralized Clinker 是什么？',
        '找 Troilite 路线时需要留意的矿点名称。',
      ],
      [
        '它和 Troilite 是同一个搜索意图吗？',
        '基本是。搜 Mineralized Clinker 的玩家通常是在解决 Troilite 路线问题。',
      ],
      [
        'Hotfix 2 改了它吗？',
        '官方确认后期区域增加了更多 Troilite 资源点，但没有列出 Mineralized Clinker 坐标。',
      ],
      [
        '第一个样本应该怎么用？',
        '先看 Metal Farm 和 Mangalloy 需求，不要急着把第一份 Troilite 花掉。',
      ],
      [
        '旧攻略还能信吗？',
        '地标可以参考，但“只有一个位置”的说法要按 Hotfix 2 后重新核对。',
      ],
    ],
    visualTitle: '矿点核对卡',
    visualItems: [
      {
        label: '名称',
        value: 'Clinker',
        note: '路线里可能出现的矿点叫法。',
      },
      {
        label: '材料',
        value: 'Troilite',
        note: '玩家真正想解决的资源。',
      },
      {
        label: '补丁',
        value: 'Hotfix 2',
        note: '后期 Troilite 资源区域增加。',
      },
    ],
    cautionTitle: '不要把线索写成假地图',
    cautionBody:
      'Mineralized Clinker 的价值在于帮玩家读懂 Troilite 路线，不是让攻略去编坐标、掉率或安全的新手路线。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Mineralized Clinker 就是 Troilite 吗？',
        body: '当前路线报道把 Mineralized Clinker 和 Troilite 获取联系在一起。写攻略时，可以把它当作 Troilite 路线里要留意的矿点线索。',
      },
      {
        title: 'Hotfix 2 增加了 Mineralized Clinker 吗？',
        body: '官方说法是后期区域增加了更多 Troilite 资源点，并没有单独公布 Mineralized Clinker 坐标清单。',
      },
      {
        title: '新手要去找 Mineralized Clinker 吗？',
        body: '不建议。它属于后期路线线索，新手先处理氧气、工具、基地和更安全的基础材料。',
      },
      {
        title: '为什么要链接 Metal Farm？',
        body: 'Metal Farm 会影响第一批稀有金属怎么用。留一份 Troilite 样本，可能比急着做一个成品更有价值。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Troilite, label: 'Troilite 位置' },
      {
        href: Routes.Subnautica2TroiliteAfterHotfix2,
        label: 'Hotfix 2 后 Troilite',
      },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm 指南' },
      { href: Routes.Subnautica2Mangalloy, label: 'Mangalloy Ingot' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 更新内容' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 24 日核对 Unknown Worlds Hotfix 2、PC Gamer Troilite 和 Metal Farm 路线报道，以及官方抢先体验路线图。',
    cardKicker: '矿点扫描卡',
    cardBody:
      '给正在找 Troilite、Mangalloy 和 Metal Farm 路线的玩家准备的 Mineralized Clinker 路线说明。',
    cardTypeLabel: '类型',
    cardTypeValue: '矿点指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: 'Hotfix 2',
  },
  ru: {
    metadata: {
      title: 'Subnautica 2 Mineralized Clinker - связь с Troilite',
      description:
        'Короткий гайд по Mineralized Clinker в Subnautica 2: Troilite route, Hotfix 2, Metal Farm и старые карты.',
    },
    eyebrow: 'Subnautica 2 deposit note',
    title: 'Subnautica 2 Mineralized Clinker',
    description:
      'Mineralized Clinker стоит читать как подсказку к Troilite. Если искать только слово Troilite, можно пройти мимо нужного депозита.',
    quickLabel: 'Коротко',
    quickAnswer:
      'Mineralized Clinker связан с Troilite в текущих route reports. Это late-game clue, не ранний ресурс. Hotfix 2 добавил больше Troilite areas в late-game region, но не дал координаты.',
    contentsLabel: 'Содержание',
    routeTitle: 'Как использовать Mineralized Clinker',
    routeSteps: [
      {
        title: 'Читайте как подсказку депозита',
        body: 'PC Gamer связывает Troilite с названием Mineralized Clinker. Это помогает не пропустить материал из-за узкой формулировки.',
      },
      {
        title: 'Оставьте маршрут late-game',
        body: 'Официальная заметка Hotfix 2 говорит о late-game region. Не отправляйте новичков туда слишком рано.',
      },
      {
        title: 'Свяжите с Troilite и Metal Farm',
        body: 'Clinker относится к той же цепочке, что Troilite, Mangalloy и Metal Farm.',
      },
      {
        title: 'Не выдумывайте координаты',
        body: 'Используйте landmarks, но не пишите точные координаты без проверки в текущем билде.',
      },
    ],
    tableTitle: 'Mineralized Clinker notes',
    tableHeaders: ['Вопрос', 'Ответ'],
    tableRows: [
      ['Что это?', 'Название депозита, связанное с Troilite route.'],
      [
        'Это тот же intent, что Troilite?',
        'Да, обычно игрок решает проблему Troilite.',
      ],
      [
        'Что изменил Hotfix 2?',
        'Больше Troilite resource areas в late-game region.',
      ],
      [
        'Что делать с первым образцом?',
        'Сначала проверьте Metal Farm и Mangalloy needs.',
      ],
      [
        'Верить старым гайдам?',
        'Landmarks полезны, но "только одно место" надо проверить.',
      ],
    ],
    visualTitle: 'Deposit card',
    visualItems: [
      { label: 'Name', value: 'Clinker', note: 'Название депозита.' },
      { label: 'Material', value: 'Troilite', note: 'Цель маршрута.' },
      { label: 'Patch', value: 'Hotfix 2', note: 'Больше late-game areas.' },
    ],
    cautionTitle: 'Не превращайте подсказку в фальшивую карту',
    cautionBody:
      'Mineralized Clinker помогает прочитать Troilite route. Он не дает координаты, drop rates или safe early route.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Mineralized Clinker это Troilite?',
        body: 'В route reporting он связан с Troilite collection и полезен как подсказка депозита.',
      },
      {
        title: 'Hotfix 2 добавил Clinker?',
        body: 'Официально добавлены Troilite resource areas в late-game region. Координаты Clinker не опубликованы.',
      },
      {
        title: 'Новичкам стоит искать его?',
        body: 'Нет. Это late-game clue. Сначала кислород, инструменты и база.',
      },
      {
        title: 'Зачем ссылка на Metal Farm?',
        body: 'Metal Farm меняет ценность первого Troilite sample.',
      },
    ],
    readNextTitle: 'Дальше',
    related: [
      { href: Routes.Subnautica2Troilite, label: 'Troilite Location' },
      {
        href: Routes.Subnautica2TroiliteAfterHotfix2,
        label: 'Troilite After Hotfix 2',
      },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm Guide' },
      { href: Routes.Subnautica2Mangalloy, label: 'Mangalloy Ingot' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
    ],
    sourcesTitle: 'Источники',
    sourceBody:
      'Проверено 24 мая 2026 по Hotfix 2, PC Gamer Troilite, Metal Farm и roadmap.',
    cardKicker: 'Mineral scan card',
    cardBody: 'Route note for Mineralized Clinker, Troilite and Metal Farm.',
    cardTypeLabel: 'Тип',
    cardTypeValue: 'Deposit guide',
    cardVerifiedLabel: 'Проверено',
    cardStatusLabel: 'Статус',
    cardStatusValue: 'Hotfix 2',
  },
  de: {
    metadata: {
      title: 'Subnautica 2 Mineralized Clinker - Troilite Deposit Guide',
      description:
        'Mineralized Clinker in Subnautica 2: Troilite-Zusammenhang, Hotfix 2, Metal Farm und alte Route-Claims.',
    },
    eyebrow: 'Subnautica 2 deposit note',
    title: 'Subnautica 2 Mineralized Clinker Guide',
    description:
      'Mineralized Clinker ist der Name, auf den du in Troilite-Routen achten solltest. Suche nicht nur nach dem Wort Troilite.',
    quickLabel: 'Kurzfassung',
    quickAnswer:
      'Mineralized Clinker ist in aktuellen Routen mit Troilite collection verbunden. Es bleibt ein late-game clue. Hotfix 2 brachte mehr Troilite areas, aber keine Koordinatenliste.',
    contentsLabel: 'Inhalt',
    routeTitle: 'So nutzt du Mineralized Clinker',
    routeSteps: [
      {
        title: 'Als Deposit-Hinweis lesen',
        body: 'PC Gamer verbindet Troilite mit dem Namen Mineralized Clinker. Das verhindert, dass eine Route am falschen Wort scheitert.',
      },
      {
        title: 'Late-game bleibt late-game',
        body: 'Unknown Worlds nennt late-game region. Diese Route ist nichts fuer einen unvorbereiteten Start.',
      },
      {
        title: 'Mit Troilite und Metal Farm verlinken',
        body: 'Clinker gehoert zur seltenen Kette aus Troilite, Mangalloy und Metal Farm.',
      },
      {
        title: 'Keine Fake-Koordinaten',
        body: 'Landmarks sind okay. Exakte Punkte ohne aktuellen Test sind es nicht.',
      },
    ],
    tableTitle: 'Mineralized Clinker notes',
    tableHeaders: ['Frage', 'Antwort'],
    tableRows: [
      ['Was ist es?', 'Ein Deposit-Name in Troilite route reporting.'],
      [
        'Gleicher intent wie Troilite?',
        'Meist ja. Spieler wollen Troilite finden.',
      ],
      [
        'Was tat Hotfix 2?',
        'Mehr Troilite resource areas in late-game region.',
      ],
      ['Erstes Sample?', 'Vor dem Ausgeben Metal Farm und Mangalloy pruefen.'],
      ['Alte Guides?', 'Landmarks ja, "nur hier" neu testen.'],
    ],
    visualTitle: 'Deposit card',
    visualItems: [
      { label: 'Name', value: 'Clinker', note: 'Deposit wording.' },
      { label: 'Material', value: 'Troilite', note: 'Resource goal.' },
      { label: 'Patch', value: 'Hotfix 2', note: 'Mehr late-game areas.' },
    ],
    cautionTitle: 'Aus einem Hinweis keine Fake-Map machen',
    cautionBody:
      'Mineralized Clinker hilft beim Lesen der Troilite route. Es liefert keine Koordinaten, drop rates oder safe early route.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Ist Mineralized Clinker Troilite?',
        body: 'Route reporting verbindet Mineralized Clinker mit Troilite collection. Behandle es als Deposit-Hinweis.',
      },
      {
        title: 'Hat Hotfix 2 Clinker hinzugefuegt?',
        body: 'Offiziell wurden Troilite resource areas in late-game region erhoeht. Clinker-Koordinaten wurden nicht genannt.',
      },
      {
        title: 'Sollten Beginner danach suchen?',
        body: 'Nein. Erst Sauerstoff, Tools und Basis sichern.',
      },
      {
        title: 'Warum Metal Farm?',
        body: 'Metal Farm beeinflusst, ob du das erste Troilite sample ausgibst oder aufhebst.',
      },
    ],
    readNextTitle: 'Weiterlesen',
    related: [
      { href: Routes.Subnautica2Troilite, label: 'Troilite Location' },
      {
        href: Routes.Subnautica2TroiliteAfterHotfix2,
        label: 'Troilite After Hotfix 2',
      },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm Guide' },
      { href: Routes.Subnautica2Mangalloy, label: 'Mangalloy Ingot' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
    ],
    sourcesTitle: 'Quellen',
    sourceBody:
      'Geprueft am 24. Mai 2026 mit Hotfix 2, PC Gamer Troilite, Metal Farm und Roadmap.',
    cardKicker: 'Mineral scan card',
    cardBody: 'Route note for Mineralized Clinker, Troilite and Metal Farm.',
    cardTypeLabel: 'Typ',
    cardTypeValue: 'Deposit guide',
    cardVerifiedLabel: 'Geprueft',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Hotfix 2',
  },
  fr: {
    metadata: {
      title: 'Subnautica 2 Mineralized Clinker - guide Troilite',
      description:
        'Mineralized Clinker dans Subnautica 2 : lien avec Troilite, Hotfix 2, Metal Farm et anciens guides.',
    },
    eyebrow: 'Subnautica 2 deposit note',
    title: 'Subnautica 2 Mineralized Clinker',
    description:
      'Mineralized Clinker est le nom a surveiller dans les routes Troilite. Ne cherchez pas seulement le mot Troilite.',
    quickLabel: 'Reponse rapide',
    quickAnswer:
      'Mineralized Clinker est lie a Troilite dans les routes actuelles. C est un indice late-game. Hotfix 2 ajoute plus de zones Troilite, mais pas de liste de coordonnees.',
    contentsLabel: 'Sommaire',
    routeTitle: 'Comment utiliser Mineralized Clinker',
    routeSteps: [
      {
        title: 'Lire comme indice de depot',
        body: 'PC Gamer relie Troilite au nom Mineralized Clinker. Cela evite de rater le depot a cause du mauvais mot.',
      },
      {
        title: 'Garder la route late-game',
        body: 'Unknown Worlds parle de late-game region. Ce n est pas une route de debut.',
      },
      {
        title: 'Relier a Troilite et Metal Farm',
        body: 'Clinker appartient a la chaine Troilite, Mangalloy et Metal Farm.',
      },
      {
        title: 'Pas de fausses coordonnees',
        body: 'Les landmarks aident. Les points exacts sans test actuel non.',
      },
    ],
    tableTitle: 'Mineralized Clinker notes',
    tableHeaders: ['Question', 'Reponse'],
    tableRows: [
      ['C est quoi?', 'Un nom de depot dans les routes Troilite.'],
      [
        'Meme intent que Troilite?',
        'Souvent oui. Le joueur veut trouver Troilite.',
      ],
      ['Hotfix 2?', 'Plus de Troilite resource areas en late-game region.'],
      [
        'Premier sample?',
        'Verifier Metal Farm et Mangalloy avant de depenser.',
      ],
      ['Vieux guides?', 'Landmarks oui, "seulement ici" a re-tester.'],
    ],
    visualTitle: 'Deposit card',
    visualItems: [
      { label: 'Name', value: 'Clinker', note: 'Nom du depot.' },
      { label: 'Material', value: 'Troilite', note: 'Ressource cherchee.' },
      { label: 'Patch', value: 'Hotfix 2', note: 'Plus de zones late-game.' },
    ],
    cautionTitle: 'Ne transformez pas un indice en fausse carte',
    cautionBody:
      'Mineralized Clinker aide a lire une route Troilite. Il ne donne ni coordonnees, ni drop rates, ni route early safe.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Mineralized Clinker est Troilite?',
        body: 'Les routes actuelles le relient a la collecte de Troilite. Traitez-le comme indice de depot.',
      },
      {
        title: 'Hotfix 2 ajoute Clinker?',
        body: 'La note officielle parle de zones Troilite en plus. Pas de coordonnees Clinker separees.',
      },
      {
        title: 'Les debutants doivent chercher ca?',
        body: 'Non. C est late-game. Priorite a l oxygene, aux outils et a la base.',
      },
      {
        title: 'Pourquoi Metal Farm?',
        body: 'Metal Farm change la valeur du premier sample de Troilite.',
      },
    ],
    readNextTitle: 'Lire ensuite',
    related: [
      { href: Routes.Subnautica2Troilite, label: 'Troilite Location' },
      {
        href: Routes.Subnautica2TroiliteAfterHotfix2,
        label: 'Troilite After Hotfix 2',
      },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm Guide' },
      { href: Routes.Subnautica2Mangalloy, label: 'Mangalloy Ingot' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
    ],
    sourcesTitle: 'Sources',
    sourceBody:
      'Verifie le 24 mai 2026 avec Hotfix 2, PC Gamer Troilite, Metal Farm et roadmap.',
    cardKicker: 'Mineral scan card',
    cardBody: 'Route note for Mineralized Clinker, Troilite and Metal Farm.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Deposit guide',
    cardVerifiedLabel: 'Verifie',
    cardStatusLabel: 'Statut',
    cardStatusValue: 'Hotfix 2',
  },
  'pt-BR': {
    metadata: {
      title: 'Subnautica 2 Mineralized Clinker - guia de Troilite',
      description:
        'Mineralized Clinker em Subnautica 2: relacao com Troilite, Hotfix 2, Metal Farm e rotas antigas.',
    },
    eyebrow: 'Subnautica 2 deposit note',
    title: 'Subnautica 2 Mineralized Clinker',
    description:
      'Mineralized Clinker e o nome para observar nas rotas de Troilite. Nao procure so pela palavra Troilite.',
    quickLabel: 'Resposta rapida',
    quickAnswer:
      'Mineralized Clinker aparece ligado a Troilite nos relatos atuais. E uma pista late-game. Hotfix 2 adicionou mais areas de Troilite, mas sem coordenadas publicas.',
    contentsLabel: 'Conteudo',
    routeTitle: 'Como usar Mineralized Clinker',
    routeSteps: [
      {
        title: 'Leia como pista de deposito',
        body: 'PC Gamer liga Troilite ao nome Mineralized Clinker. Isso evita perder o deposito por causa da palavra errada.',
      },
      {
        title: 'Mantenha como late-game',
        body: 'Unknown Worlds fala em late-game region. Nao e rota inicial.',
      },
      {
        title: 'Conecte com Troilite e Metal Farm',
        body: 'Clinker fica na mesma cadeia de Troilite, Mangalloy e Metal Farm.',
      },
      {
        title: 'Nada de coordenada falsa',
        body: 'Landmarks ajudam. Pontos exatos sem teste atual nao ajudam.',
      },
    ],
    tableTitle: 'Mineralized Clinker notes',
    tableHeaders: ['Pergunta', 'Resposta'],
    tableRows: [
      ['O que e?', 'Nome de deposito nas rotas de Troilite.'],
      [
        'Mesmo intent de Troilite?',
        'Quase sempre. O jogador quer achar Troilite.',
      ],
      ['Hotfix 2?', 'Mais Troilite resource areas no late-game region.'],
      ['Primeiro sample?', 'Cheque Metal Farm e Mangalloy antes de gastar.'],
      ['Guias antigos?', 'Landmarks sim, "so aqui" precisa de teste novo.'],
    ],
    visualTitle: 'Deposit card',
    visualItems: [
      { label: 'Name', value: 'Clinker', note: 'Nome do deposito.' },
      { label: 'Material', value: 'Troilite', note: 'Recurso buscado.' },
      { label: 'Patch', value: 'Hotfix 2', note: 'Mais areas late-game.' },
    ],
    cautionTitle: 'Nao transforme uma pista em mapa falso',
    cautionBody:
      'Mineralized Clinker ajuda a ler uma rota Troilite. Nao fornece coordenadas, drop rates ou rota early safe.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Mineralized Clinker e Troilite?',
        body: 'Relatos atuais ligam o nome a coleta de Troilite. Use como pista de deposito.',
      },
      {
        title: 'Hotfix 2 adicionou Clinker?',
        body: 'A nota oficial fala em mais areas de Troilite. Nao ha coordenadas separadas de Clinker.',
      },
      {
        title: 'Iniciantes devem buscar?',
        body: 'Nao. E late-game. Priorize oxigenio, ferramentas e base.',
      },
      {
        title: 'Por que Metal Farm?',
        body: 'Metal Farm muda o valor do primeiro sample de Troilite.',
      },
    ],
    readNextTitle: 'Ler depois',
    related: [
      { href: Routes.Subnautica2Troilite, label: 'Troilite Location' },
      {
        href: Routes.Subnautica2TroiliteAfterHotfix2,
        label: 'Troilite After Hotfix 2',
      },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm Guide' },
      { href: Routes.Subnautica2Mangalloy, label: 'Mangalloy Ingot' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
    ],
    sourcesTitle: 'Fontes',
    sourceBody:
      'Checado em 24 de maio de 2026 com Hotfix 2, PC Gamer Troilite, Metal Farm e roadmap.',
    cardKicker: 'Mineral scan card',
    cardBody: 'Route note for Mineralized Clinker, Troilite and Metal Farm.',
    cardTypeLabel: 'Tipo',
    cardTypeValue: 'Deposit guide',
    cardVerifiedLabel: 'Verificado',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Hotfix 2',
  },
  'es-419': {
    metadata: {
      title: 'Subnautica 2 Mineralized Clinker - guia de Troilite',
      description:
        'Mineralized Clinker en Subnautica 2: relacion con Troilite, Hotfix 2, Metal Farm y rutas viejas.',
    },
    eyebrow: 'Subnautica 2 deposit note',
    title: 'Subnautica 2 Mineralized Clinker',
    description:
      'Mineralized Clinker es el nombre a vigilar en rutas de Troilite. No busques solo la palabra Troilite.',
    quickLabel: 'Respuesta rapida',
    quickAnswer:
      'Mineralized Clinker aparece ligado a Troilite en reportes actuales. Es una pista late-game. Hotfix 2 agrego mas areas de Troilite, pero no coordenadas publicas.',
    contentsLabel: 'Contenido',
    routeTitle: 'Como usar Mineralized Clinker',
    routeSteps: [
      {
        title: 'Leelo como pista de deposito',
        body: 'PC Gamer relaciona Troilite con Mineralized Clinker. Ayuda a no perder el deposito por una palabra distinta.',
      },
      {
        title: 'Mantenerlo como late-game',
        body: 'Unknown Worlds habla de late-game region. No es ruta inicial.',
      },
      {
        title: 'Conectarlo con Troilite y Metal Farm',
        body: 'Clinker pertenece a la cadena Troilite, Mangalloy y Metal Farm.',
      },
      {
        title: 'Nada de coordenadas falsas',
        body: 'Landmarks sirven. Puntos exactos sin prueba actual no.',
      },
    ],
    tableTitle: 'Mineralized Clinker notes',
    tableHeaders: ['Pregunta', 'Respuesta'],
    tableRows: [
      ['Que es?', 'Nombre de deposito en rutas de Troilite.'],
      [
        'Mismo intent que Troilite?',
        'Casi siempre. El jugador quiere Troilite.',
      ],
      ['Hotfix 2?', 'Mas Troilite resource areas en late-game region.'],
      ['Primer sample?', 'Revisa Metal Farm y Mangalloy antes de gastarlo.'],
      ['Guias viejas?', 'Landmarks si, "solo aqui" necesita prueba nueva.'],
    ],
    visualTitle: 'Deposit card',
    visualItems: [
      { label: 'Name', value: 'Clinker', note: 'Nombre del deposito.' },
      { label: 'Material', value: 'Troilite', note: 'Recurso buscado.' },
      { label: 'Patch', value: 'Hotfix 2', note: 'Mas areas late-game.' },
    ],
    cautionTitle: 'No conviertas una pista en mapa falso',
    cautionBody:
      'Mineralized Clinker ayuda a leer una ruta Troilite. No da coordenadas, drop rates ni ruta early safe.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Mineralized Clinker es Troilite?',
        body: 'Reportes actuales lo relacionan con conseguir Troilite. Usalo como pista de deposito.',
      },
      {
        title: 'Hotfix 2 agrego Clinker?',
        body: 'La nota oficial habla de mas areas de Troilite. No hay coordenadas separadas de Clinker.',
      },
      {
        title: 'Principiantes deberian buscarlo?',
        body: 'No. Es late-game. Prioriza oxigeno, herramientas y base.',
      },
      {
        title: 'Por que Metal Farm?',
        body: 'Metal Farm cambia el valor del primer sample de Troilite.',
      },
    ],
    readNextTitle: 'Leer despues',
    related: [
      { href: Routes.Subnautica2Troilite, label: 'Troilite Location' },
      {
        href: Routes.Subnautica2TroiliteAfterHotfix2,
        label: 'Troilite After Hotfix 2',
      },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm Guide' },
      { href: Routes.Subnautica2Mangalloy, label: 'Mangalloy Ingot' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
    ],
    sourcesTitle: 'Fuentes',
    sourceBody:
      'Revisado el 24 de mayo de 2026 con Hotfix 2, PC Gamer Troilite, Metal Farm y roadmap.',
    cardKicker: 'Mineral scan card',
    cardBody: 'Route note for Mineralized Clinker, Troilite and Metal Farm.',
    cardTypeLabel: 'Tipo',
    cardTypeValue: 'Deposit guide',
    cardVerifiedLabel: 'Verificado',
    cardStatusLabel: 'Estado',
    cardStatusValue: 'Hotfix 2',
  },
  ko: {
    metadata: {
      title: 'Subnautica 2 Mineralized Clinker - Troilite 루트',
      description:
        'Subnautica 2 Mineralized Clinker: Troilite 관계, Hotfix 2, Metal Farm, 오래된 루트 주의점.',
    },
    eyebrow: 'Subnautica 2 deposit note',
    title: 'Subnautica 2 Mineralized Clinker',
    description:
      'Mineralized Clinker는 Troilite 루트에서 확인해야 할 이름입니다. Troilite라는 단어만 찾으면 놓칠 수 있습니다.',
    quickLabel: '빠른 답변',
    quickAnswer:
      'Mineralized Clinker는 현재 루트 보도에서 Troilite 획득과 연결됩니다. 초반 자원이 아니라 late-game clue입니다. Hotfix 2는 late-game region의 Troilite areas를 늘렸지만 좌표는 공개하지 않았습니다.',
    contentsLabel: '목차',
    routeTitle: 'Mineralized Clinker 사용법',
    routeSteps: [
      {
        title: 'deposit 단서로 읽기',
        body: 'PC Gamer는 Troilite를 Mineralized Clinker 이름과 연결합니다. 이름 차이 때문에 재료를 놓치지 않게 해줍니다.',
      },
      {
        title: 'late-game으로 유지',
        body: 'Unknown Worlds는 late-game region이라고 적었습니다. 초반 루트가 아닙니다.',
      },
      {
        title: 'Troilite와 Metal Farm 연결',
        body: 'Clinker는 Troilite, Mangalloy, Metal Farm 체인에 들어갑니다.',
      },
      {
        title: '가짜 좌표 쓰지 않기',
        body: '랜드마크는 괜찮지만 현재 빌드 테스트 없는 정확한 좌표는 피합니다.',
      },
    ],
    tableTitle: 'Mineralized Clinker notes',
    tableHeaders: ['질문', '답변'],
    tableRows: [
      ['무엇인가요?', 'Troilite 루트에서 볼 수 있는 deposit 이름입니다.'],
      [
        'Troilite 검색 의도와 같나요?',
        '대부분 그렇습니다. 목표는 Troilite입니다.',
      ],
      [
        'Hotfix 2 변화?',
        'late-game region에 Troilite resource areas가 늘었습니다.',
      ],
      ['첫 sample은?', 'Metal Farm과 Mangalloy 필요를 먼저 확인하세요.'],
      ['오래된 가이드?', '랜드마크는 참고, "여기뿐"은 다시 테스트합니다.'],
    ],
    visualTitle: 'Deposit card',
    visualItems: [
      { label: 'Name', value: 'Clinker', note: 'deposit 이름.' },
      { label: 'Material', value: 'Troilite', note: '찾는 자원.' },
      { label: 'Patch', value: 'Hotfix 2', note: 'late-game areas 증가.' },
    ],
    cautionTitle: '단서를 가짜 지도로 만들지 않기',
    cautionBody:
      'Mineralized Clinker는 Troilite route를 읽는 단서입니다. 좌표, drop rates, safe early route를 주지는 않습니다.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Mineralized Clinker가 Troilite인가요?',
        body: '현재 루트 보도는 이를 Troilite collection과 연결합니다. deposit 단서로 보세요.',
      },
      {
        title: 'Hotfix 2가 Clinker를 추가했나요?',
        body: '공식 노트는 Troilite areas 증가를 말합니다. Clinker 좌표 목록은 없습니다.',
      },
      {
        title: '초보자가 찾아야 하나요?',
        body: '아니요. late-game입니다. 산소, 도구, 기지가 먼저입니다.',
      },
      {
        title: '왜 Metal Farm이 중요한가요?',
        body: 'Metal Farm은 첫 Troilite sample의 가치를 바꿉니다.',
      },
    ],
    readNextTitle: '다음 읽기',
    related: [
      { href: Routes.Subnautica2Troilite, label: 'Troilite Location' },
      {
        href: Routes.Subnautica2TroiliteAfterHotfix2,
        label: 'Troilite After Hotfix 2',
      },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm Guide' },
      { href: Routes.Subnautica2Mangalloy, label: 'Mangalloy Ingot' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
    ],
    sourcesTitle: '출처',
    sourceBody:
      '2026년 5월 24일 Hotfix 2, PC Gamer Troilite, Metal Farm, roadmap을 확인했습니다.',
    cardKicker: 'Mineral scan card',
    cardBody: 'Mineralized Clinker, Troilite, Metal Farm을 위한 루트 노트.',
    cardTypeLabel: '유형',
    cardTypeValue: 'Deposit guide',
    cardVerifiedLabel: '확인일',
    cardStatusLabel: '상태',
    cardStatusValue: 'Hotfix 2',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 Mineralized Clinker - Troilite ルート',
      description:
        'Subnautica 2 Mineralized Clinker: Troilite との関係、Hotfix 2、Metal Farm、古いルートの注意点。',
    },
    eyebrow: 'Subnautica 2 deposit note',
    title: 'Subnautica 2 Mineralized Clinker',
    description:
      'Mineralized Clinker は Troilite ルートで見る名前です。Troilite という単語だけを探すと見落とすことがあります。',
    quickLabel: '要点',
    quickAnswer:
      'Mineralized Clinker は現在のルート報道で Troilite 入手と関係します。序盤資源ではなく late-game clue です。Hotfix 2 は late-game region の Troilite areas を増やしましたが、座標リストはありません。',
    contentsLabel: '目次',
    routeTitle: 'Mineralized Clinker の使い方',
    routeSteps: [
      {
        title: 'deposit の手がかりとして読む',
        body: 'PC Gamer は Troilite を Mineralized Clinker という名前と結びつけています。名前の違いで素材を見落とさないためです。',
      },
      {
        title: 'late-game として扱う',
        body: 'Unknown Worlds は late-game region と書いています。序盤ルートではありません。',
      },
      {
        title: 'Troilite と Metal Farm に繋げる',
        body: 'Clinker は Troilite、Mangalloy、Metal Farm のチェーンに入ります。',
      },
      {
        title: '偽の座標を書かない',
        body: 'Landmark は使えます。現在ビルドで確認していない正確な座標は避けます。',
      },
    ],
    tableTitle: 'Mineralized Clinker notes',
    tableHeaders: ['質問', '答え'],
    tableRows: [
      ['何ですか？', 'Troilite ルートで見る deposit 名です。'],
      [
        'Troilite と同じ検索意図？',
        '多くの場合そうです。目的は Troilite です。',
      ],
      [
        'Hotfix 2 の変更？',
        'late-game region の Troilite resource areas が増えました。',
      ],
      [
        '最初の sample は？',
        'Metal Farm と Mangalloy の必要を先に確認します。',
      ],
      ['古いガイドは？', 'Landmark は参考にし、「ここだけ」は再テストします。'],
    ],
    visualTitle: 'Deposit card',
    visualItems: [
      { label: 'Name', value: 'Clinker', note: 'deposit 名。' },
      { label: 'Material', value: 'Troilite', note: '探している資源。' },
      { label: 'Patch', value: 'Hotfix 2', note: 'late-game areas 増加。' },
    ],
    cautionTitle: '手がかりを偽マップにしない',
    cautionBody:
      'Mineralized Clinker は Troilite route を読む手がかりです。座標、drop rates、安全な序盤ルートを与えるものではありません。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Mineralized Clinker は Troilite？',
        body: '現在のルート報道では Troilite collection と関係します。deposit の手がかりとして扱います。',
      },
      {
        title: 'Hotfix 2 で Clinker が増えた？',
        body: '公式ノートは Troilite areas の追加を説明しています。Clinker 座標一覧はありません。',
      },
      {
        title: '初心者が探すべき？',
        body: 'いいえ。late-game です。酸素、道具、拠点が先です。',
      },
      {
        title: 'なぜ Metal Farm？',
        body: 'Metal Farm は最初の Troilite sample の価値を変えるからです。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2Troilite, label: 'Troilite Location' },
      {
        href: Routes.Subnautica2TroiliteAfterHotfix2,
        label: 'Troilite After Hotfix 2',
      },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm Guide' },
      { href: Routes.Subnautica2Mangalloy, label: 'Mangalloy Ingot' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
    ],
    sourcesTitle: 'ソース',
    sourceBody:
      '2026年5月24日に Hotfix 2、PC Gamer Troilite、Metal Farm、roadmap を確認。',
    cardKicker: 'Mineral scan card',
    cardBody: 'Mineralized Clinker、Troilite、Metal Farm のための route note。',
    cardTypeLabel: '種類',
    cardTypeValue: 'Deposit guide',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: '状態',
    cardStatusValue: 'Hotfix 2',
  },
};

function getCopy(locale: Locale): ClinkerCopy {
  return clinkerCopy[locale] ?? clinkerCopy.en;
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
    pathname: Routes.Subnautica2MineralizedClinker,
  });
}

export default async function MineralizedClinkerPage({
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
      pathname={Routes.Subnautica2MineralizedClinker}
      sources={sharedSources}
    />
  );
}
