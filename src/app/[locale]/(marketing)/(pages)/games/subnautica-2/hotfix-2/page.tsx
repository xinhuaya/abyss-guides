import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { RefreshCcwIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type HotfixCopy = ResourceGuideCopy & {
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
    href: 'https://unknownworlds.com/en/news/subnautica-2-community-letter-feedback',
    label: 'Unknown Worlds community feedback letter',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap',
    label: 'Unknown Worlds Early Access roadmap',
  },
  {
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/',
    label: 'Official Steam Early Access page',
  },
];

const hotfixCopy: Record<string, HotfixCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Hotfix 2 Changes - Silver, Oxygen, Co-op, and Early Routes',
      description:
        'A practical Subnautica 2 Hotfix 2 guide covering Silver changes, Troilite late-game areas, oxygen bugs, Hammerhead behavior, Epic performance, co-op crashes, and pages to recheck.',
    },
    eyebrow: 'Subnautica 2 Hotfix 2 notes',
    title: 'Subnautica 2 Hotfix 2 Changes',
    description:
      'Hotfix 2 is not just a bug list. It changes how early players should think about Silver, resource checks, oxygen safety, co-op sessions, and a few routes that felt rough at launch.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Hotfix 2 adds more Silver resource areas in the early-game region, adds more Troilite resource areas in the late-game region, reduces some Hammerhead attacks, fixes a "breathe forever" oxygen bug, improves Epic performance, and addresses several crashes and multiplayer issues. Silver and rare-material guides should be rechecked after this patch.',
    contentsLabel: 'Contents',
    routeTitle: 'What changed in Hotfix 2',
    routeSteps: [
      {
        title: 'Silver got easier to route',
        body: 'Unknown Worlds added more Silver resource areas in the early-game region. That matters because Silver blocks oxygen and electronics progress for many first-session players.',
      },
      {
        title: 'Troilite got more late-game checks',
        body: 'The patch adds more Troilite resource areas in the late-game region. Older rare-material notes should be treated as incomplete if they were written before Hotfix 2.',
      },
      {
        title: 'Early survival bugs were cleaned up',
        body: 'Hotfix 2 fixes an oxygen edge case where players could keep breathing forever, plus cases where Hammerhead creatures attacked vehicles or players more than intended.',
      },
      {
        title: 'Co-op and performance need another check',
        body: 'The patch includes fixes for several crashes, multiplayer problems, incorrect status messages, and a performance issue affecting the Epic Games Store version.',
      },
    ],
    tableTitle: 'Patch impact table',
    tableHeaders: ['Area', 'What to recheck'],
    tableRows: [
      [
        'Silver route',
        'Run early caves and Old Habitat-adjacent routes again before trusting launch-week Silver notes.',
      ],
      [
        'Oxygen planning',
        'Do not rely on old oxygen bug behavior. Treat dive timers and return routes normally.',
      ],
      [
        'Co-op sessions',
        'Retest joining, disconnects, status messages, and shared route callouts after the patch.',
      ],
      [
        'Rare materials',
        'Troilite pages should mention that more late-game resource areas were added in Hotfix 2.',
      ],
      [
        'Epic version',
        'Performance complaints from launch week may not match the patched build.',
      ],
    ],
    visualTitle: 'Hotfix 2 field scan',
    visualItems: [
      {
        label: 'Resource',
        value: 'Silver',
        note: 'More early-game areas were added.',
      },
      {
        label: 'Survival',
        value: 'Oxygen',
        note: 'The infinite-breathing bug was fixed.',
      },
      {
        label: 'Co-op',
        value: 'Stability',
        note: 'Crash and multiplayer fixes need route retests.',
      },
    ],
    cautionTitle: 'Do not mix pre-patch and post-patch advice',
    cautionBody:
      'A launch-week guide can be right about direction and still wrong about friction. If it says Silver is brutally scarce, Troilite has only one tight route, or a co-op issue always happens, check whether it was written before May 22, 2026.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Did Hotfix 2 make Silver easier to find?',
        body: 'Yes. Unknown Worlds says Hotfix 2 added more Silver resource areas in the early-game region.',
      },
      {
        title: 'Does Hotfix 2 change every resource route?',
        body: 'No. The confirmed resource changes to watch are Silver early-game area additions and Troilite late-game area additions. Other material routes still need direct patch checks before claiming they changed.',
      },
      {
        title: 'Should I restart my save after Hotfix 2?',
        body: 'The official note does not say players need to restart. For normal guide use, keep playing and recheck affected early resource areas.',
      },
      {
        title: 'Why does this patch matter for guide pages?',
        body: 'Because it touches early bottlenecks and late-route farming. Silver, oxygen, co-op stability, and rare-material routes all affect pages players search for repeatedly.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Updates, label: 'Roadmap and Updates' },
      {
        href: Routes.Subnautica2SilverAfterHotfix2,
        label: 'Silver After Hotfix 2',
      },
      {
        href: Routes.Subnautica2TroiliteAfterHotfix2,
        label: 'Troilite After Hotfix 2',
      },
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Coop, label: 'Co-op Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 24, 2026 against the official Unknown Worlds Hotfix 2 post, community feedback letter, roadmap, and Steam Early Access page.',
    cardKicker: 'Patch field card',
    cardBody:
      'A patch-aware guide to the Hotfix 2 changes that affect Silver, oxygen, co-op, Troilite, Hammerheads, and early routing.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Patch guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Live patch',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Hotfix 2 更新内容 - 银、氧气、联机和前期路线',
      description:
        'Subnautica 2 Hotfix 2 中文整理，覆盖银资源变化、Troilite 后期区域增加、氧气 bug、Hammerhead、Epic 性能、联机崩溃和需要复查的攻略页。',
    },
    eyebrow: 'Subnautica 2 Hotfix 2 笔记',
    title: 'Subnautica 2 Hotfix 2 更新内容',
    description:
      'Hotfix 2 不只是修 bug。它会影响前期找银、资源路线、氧气安全、联机体验，以及一些首发时很折磨的路线判断。',
    quickLabel: '快速结论',
    quickAnswer:
      'Hotfix 2 增加了前期区域的银资源点，也增加了后期区域的 Troilite 资源点；同时降低部分 Hammerhead 攻击异常，修复“无限呼吸”氧气 bug，改善 Epic 版本性能，并处理多项崩溃和联机问题。银和稀有材料相关攻略都应该按这个版本重新核对。',
    contentsLabel: '目录',
    routeTitle: 'Hotfix 2 改了什么',
    routeSteps: [
      {
        title: '银资源路线更值得重跑',
        body: 'Unknown Worlds 增加了前期区域的银资源点。银会卡住氧气和电子制作进度，所以这不是小变化。',
      },
      {
        title: 'Troilite 后期区域增加',
        body: '补丁增加了后期区域的 Troilite 资源点。Hotfix 2 之前写的稀有材料路线，可能只覆盖了旧版本的一部分路线。',
      },
      {
        title: '前期生存 bug 被处理',
        body: '补丁修复了玩家可以一直呼吸的氧气异常，也修了部分 Hammerhead 对载具或玩家攻击过多的问题。',
      },
      {
        title: '联机和性能需要重新测试',
        body: 'Hotfix 2 包含多项崩溃、多人联机、状态提示错误，以及 Epic Games Store 版本性能问题的修复。',
      },
    ],
    tableTitle: '补丁影响表',
    tableHeaders: ['影响区域', '需要复查什么'],
    tableRows: [
      [
        '银路线',
        '重新跑前期洞穴和 Old Habitat 附近路线，不要直接照搬首发周找银结论。',
      ],
      [
        '氧气规划',
        '不要依赖旧版氧气 bug。潜水时间和返程路线要按正常生存逻辑计算。',
      ],
      ['联机体验', '重新测试加入、断线、状态提示和队友报点。'],
      ['稀有材料', 'Troilite 页面需要注明 Hotfix 2 增加了后期资源区域。'],
      ['Epic 版本', '首发周的性能抱怨不一定适用于补丁后的版本。'],
    ],
    visualTitle: 'Hotfix 2 扫描卡',
    visualItems: [
      { label: '资源', value: '银', note: '前期可找区域增加。' },
      { label: '生存', value: '氧气', note: '无限呼吸 bug 已修复。' },
      { label: '联机', value: '稳定性', note: '崩溃和多人问题需要重测。' },
    ],
    cautionTitle: '不要混用补丁前后的攻略',
    cautionBody:
      '首发周攻略可能方向没错，但难度和稳定性已经变了。如果一篇文章说银极度稀缺、Troilite 只有很窄的一条路线、某个联机问题必定发生，先看它是不是 2026 年 5 月 22 日之前写的。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Hotfix 2 让银更好找了吗？',
        body: '是的。Unknown Worlds 明确说 Hotfix 2 增加了前期区域的银资源点。',
      },
      {
        title: 'Hotfix 2 会改变所有资源路线吗？',
        body: '不会。官方确认需要重点看的是前期银资源点增加，以及后期 Troilite 资源点增加。其他材料不能没实测就写成已变化。',
      },
      {
        title: 'Hotfix 2 之后需要重开存档吗？',
        body: '官方说明没有要求重开。正常攻略角度，继续玩并重新检查受影响的前期资源区域即可。',
      },
      {
        title: '为什么这个补丁值得单独做一页？',
        body: '因为它影响玩家反复搜索的卡点：银、氧气、联机稳定性和稀有材料路线。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Updates, label: '路线图与更新' },
      {
        href: Routes.Subnautica2SilverAfterHotfix2,
        label: 'Hotfix 2 后银怎么找',
      },
      {
        href: Routes.Subnautica2TroiliteAfterHotfix2,
        label: 'Hotfix 2 后 Troilite 怎么找',
      },
      { href: Routes.Subnautica2Silver, label: '银在哪里找' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Coop, label: '联机指南' },
      { href: Routes.Subnautica2AirTank, label: '气瓶与氧气' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 24 日核对 Unknown Worlds 官方 Hotfix 2、社区反馈信、路线图和 Steam 抢先体验页面。',
    cardKicker: '补丁记录卡',
    cardBody:
      '整理 Hotfix 2 对银、氧气、联机、Troilite、Hammerhead 和前期路线的实际影响。',
    cardTypeLabel: '类型',
    cardTypeValue: '补丁攻略',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '已上线补丁',
  },
  ru: {
    metadata: {
      title: 'Subnautica 2 Hotfix 2 - Silver, oxygen, co-op и ранние маршруты',
      description:
        'Разбор Subnautica 2 Hotfix 2: Silver, Troilite, oxygen bug, Hammerhead, Epic performance, co-op crashes и гайды для перепроверки.',
    },
    eyebrow: 'Заметки Hotfix 2',
    title: 'Subnautica 2 Hotfix 2: что изменилось',
    description:
      'Hotfix 2 меняет не только список ошибок. Он влияет на ранний Silver, безопасность кислорода, co-op и маршруты, которые на запуске были неприятными.',
    quickLabel: 'Коротко',
    quickAnswer:
      'Hotfix 2 добавляет больше ранних зон Silver, добавляет больше поздних зон Troilite, уменьшает часть атак Hammerhead, закрывает oxygen bug с бесконечным дыханием, улучшает Epic performance и правит несколько crash и multiplayer проблем.',
    contentsLabel: 'Содержание',
    routeTitle: 'Что изменил Hotfix 2',
    routeSteps: [
      {
        title: 'Silver проще маршрутизировать',
        body: 'Unknown Worlds добавила больше зон Silver в ранней области. Это важно, потому что Silver блокирует кислород и электронику.',
      },
      {
        title: 'Troilite получил больше поздних зон',
        body: 'Патч добавляет больше зон Troilite в late-game region. Старые заметки по rare materials нужно перепроверить.',
      },
      {
        title: 'Ранние survival bugs закрыты',
        body: 'Исправлен oxygen edge case с бесконечным дыханием и часть ситуаций, где Hammerhead атаковал слишком часто.',
      },
      {
        title: 'Co-op и performance нужно ретестить',
        body: 'Патч включает crash fixes, multiplayer fixes, status messages и Epic Games Store performance issue.',
      },
    ],
    tableTitle: 'Влияние патча',
    tableHeaders: ['Зона', 'Что проверить'],
    tableRows: [
      ['Silver route', 'Перепройти ранние пещеры и Old Habitat routes.'],
      ['Oxygen planning', 'Не полагаться на старое поведение oxygen bug.'],
      [
        'Co-op sessions',
        'Проверить join, disconnects, status messages и callouts.',
      ],
      [
        'Rare materials',
        'Указать, что Hotfix 2 добавляет late-game Troilite areas.',
      ],
      [
        'Epic version',
        'Launch-week performance complaints могут быть устаревшими.',
      ],
    ],
    visualTitle: 'Скан Hotfix 2',
    visualItems: [
      { label: 'Resource', value: 'Silver', note: 'Больше ранних зон.' },
      {
        label: 'Survival',
        value: 'Oxygen',
        note: 'Infinite-breathing bug закрыт.',
      },
      {
        label: 'Co-op',
        value: 'Stability',
        note: 'Crash и multiplayer fixes.',
      },
    ],
    cautionTitle: 'Не смешивайте советы до и после патча',
    cautionBody:
      'Гайд первой недели может верно показывать направление, но уже неверно описывать сложность. Проверяйте дату, если текст говорит, что Silver почти нет или у Troilite только один узкий маршрут.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Hotfix 2 сделал Silver проще?',
        body: 'Да. Unknown Worlds пишет, что добавлены новые ранние зоны Silver.',
      },
      {
        title: 'Hotfix 2 меняет все ресурсы?',
        body: 'Нет. Подтверждены Silver early-game area additions и Troilite late-game area additions. Остальное нужно проверять отдельно.',
      },
      {
        title: 'Нужно начинать новый save?',
        body: 'В официальной заметке такого требования нет. Для гайдов важно заново проверить затронутые ранние зоны.',
      },
      {
        title: 'Почему патч важен для SEO-страниц?',
        body: 'Он касается частых поисковых проблем: Silver, oxygen, co-op stability и rare-material routes.',
      },
    ],
    readNextTitle: 'Дальше',
    related: [
      { href: Routes.Subnautica2Updates, label: 'Roadmap and Updates' },
      {
        href: Routes.Subnautica2SilverAfterHotfix2,
        label: 'Silver After Hotfix 2',
      },
      {
        href: Routes.Subnautica2TroiliteAfterHotfix2,
        label: 'Troilite After Hotfix 2',
      },
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Coop, label: 'Co-op Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
    ],
    sourcesTitle: 'Источники',
    sourceBody:
      'Проверено 24 мая 2026 по официальным заметкам Unknown Worlds, roadmap и Steam Early Access page.',
    cardKicker: 'Patch card',
    cardBody:
      'Патч-гайд по Silver, oxygen, co-op, Troilite, Hammerhead и ранним маршрутам.',
    cardTypeLabel: 'Тип',
    cardTypeValue: 'Patch guide',
    cardVerifiedLabel: 'Проверено',
    cardStatusLabel: 'Статус',
    cardStatusValue: 'Live patch',
  },
  de: {
    metadata: {
      title: 'Subnautica 2 Hotfix 2 - Silver, Sauerstoff, Koop und Routen',
      description:
        'Subnautica 2 Hotfix 2 Guide zu Silver, Troilite, oxygen bug, Hammerhead, Epic performance, co-op crashes und Patch-Routen.',
    },
    eyebrow: 'Subnautica 2 Hotfix 2 Notizen',
    title: 'Subnautica 2 Hotfix 2 Aenderungen',
    description:
      'Hotfix 2 ist mehr als eine Bugliste. Der Patch betrifft fruehe Silver-Routen, Sauerstoffsicherheit, Koop und einige Launch-Routen.',
    quickLabel: 'Kurzfassung',
    quickAnswer:
      'Hotfix 2 fuegt mehr Silver-Bereiche im fruehen Gebiet hinzu, fuegt mehr Troilite-Bereiche im late game hinzu, reduziert einige Hammerhead-Angriffe, schliesst einen oxygen bug, verbessert Epic performance und fixt mehrere crashes und multiplayer issues.',
    contentsLabel: 'Inhalt',
    routeTitle: 'Was Hotfix 2 aendert',
    routeSteps: [
      {
        title: 'Silver-Routen lohnen sich neu',
        body: 'Unknown Worlds hat mehr Silver resource areas im Early Game hinzugefuegt. Das betrifft Sauerstoff- und Elektronikprogression.',
      },
      {
        title: 'Troilite bekommt mehr late-game checks',
        body: 'Der Patch fuegt mehr Troilite resource areas im late-game region hinzu. Alte rare-material notes sollten geprueft werden.',
      },
      {
        title: 'Survival-Bugs wurden bereinigt',
        body: 'Ein oxygen edge case mit endlosem Atmen wurde gefixt, ebenso einige uebertriebene Hammerhead-Angriffe.',
      },
      {
        title: 'Koop und Performance neu testen',
        body: 'Hotfix 2 bringt Fixes fuer crashes, multiplayer, status messages und ein Epic Games Store performance issue.',
      },
    ],
    tableTitle: 'Patch-Auswirkung',
    tableHeaders: ['Bereich', 'Was pruefen'],
    tableRows: [
      ['Silver route', 'Fruehe Hoehlen und Old-Habitat-Routen neu laufen.'],
      [
        'Oxygen planning',
        'Nicht mehr auf altes oxygen bug Verhalten verlassen.',
      ],
      [
        'Koop sessions',
        'Joining, disconnects, status messages und callouts testen.',
      ],
      [
        'Rare materials',
        'Troilite pages mit den neuen late-game resource areas aktualisieren.',
      ],
      ['Epic version', 'Launch-week performance notes koennen veraltet sein.'],
    ],
    visualTitle: 'Hotfix 2 Scan',
    visualItems: [
      { label: 'Resource', value: 'Silver', note: 'Mehr Early-Game-Bereiche.' },
      {
        label: 'Survival',
        value: 'Oxygen',
        note: 'Infinite-breathing bug gefixt.',
      },
      {
        label: 'Koop',
        value: 'Stability',
        note: 'Crash und multiplayer fixes.',
      },
    ],
    cautionTitle: 'Pre- und Post-Patch-Guides nicht mischen',
    cautionBody:
      'Ein Launch-Guide kann die Richtung treffen und trotzdem die aktuelle Schwierigkeit falsch beschreiben. Pruefe das Datum, wenn Silver extrem selten wirkt oder Troilite nur eine enge Route hat.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Macht Hotfix 2 Silver leichter?',
        body: 'Ja. Unknown Worlds sagt, dass mehr Silver resource areas im Early Game hinzugefuegt wurden.',
      },
      {
        title: 'Aendert Hotfix 2 alle Ressourcen?',
        body: 'Nein. Bestaetigt sind Silver early-game additions und Troilite late-game area additions. Andere Routen brauchen eigene Checks.',
      },
      {
        title: 'Muss ich einen neuen Save starten?',
        body: 'Die offizielle Notiz verlangt keinen Neustart. Fuer Guides reicht es, betroffene fruehe Bereiche neu zu pruefen.',
      },
      {
        title: 'Warum ist der Patch fuer Guides wichtig?',
        body: 'Er trifft Suchthemen: Silver, oxygen, co-op stability und rare-material routes.',
      },
    ],
    readNextTitle: 'Weiterlesen',
    related: [
      { href: Routes.Subnautica2Updates, label: 'Roadmap and Updates' },
      {
        href: Routes.Subnautica2SilverAfterHotfix2,
        label: 'Silver After Hotfix 2',
      },
      {
        href: Routes.Subnautica2TroiliteAfterHotfix2,
        label: 'Troilite After Hotfix 2',
      },
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Coop, label: 'Co-op Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
    ],
    sourcesTitle: 'Quellen',
    sourceBody:
      'Geprueft am 24. Mai 2026 mit Unknown Worlds Hotfix 2, Feedback-Brief, Roadmap und Steam Early Access page.',
    cardKicker: 'Patch field card',
    cardBody:
      'Patch-Guide zu Silver, oxygen, co-op, Troilite, Hammerhead und fruehen Routen.',
    cardTypeLabel: 'Typ',
    cardTypeValue: 'Patch guide',
    cardVerifiedLabel: 'Geprueft',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Live patch',
  },
  fr: {
    metadata: {
      title: 'Subnautica 2 Hotfix 2 - Silver, oxygene, coop et routes',
      description:
        'Guide Subnautica 2 Hotfix 2 : Silver, Troilite, bug oxygene, Hammerhead, performance Epic, crashes co-op et guides a verifier.',
    },
    eyebrow: 'Notes Hotfix 2',
    title: 'Subnautica 2 Hotfix 2 : changements',
    description:
      'Hotfix 2 ne se limite pas aux bugs. Il touche Silver, oxygene, co-op et plusieurs routes de debut de partie.',
    quickLabel: 'Reponse rapide',
    quickAnswer:
      'Hotfix 2 ajoute plus de zones Silver au debut, ajoute plus de zones Troilite en late game, reduit certains comportements Hammerhead, corrige un bug d oxygene, ameliore Epic performance et corrige plusieurs crashes et problemes multiplayer.',
    contentsLabel: 'Sommaire',
    routeTitle: 'Ce que change Hotfix 2',
    routeSteps: [
      {
        title: 'Silver devient plus fiable',
        body: 'Unknown Worlds ajoute plus de zones Silver en debut de jeu. C est important pour l oxygene et l electronique.',
      },
      {
        title: 'Troilite a plus de zones late game',
        body: 'Le patch ajoute plus de Troilite resource areas en late-game region. Les anciennes notes rare-material doivent etre verifiees.',
      },
      {
        title: 'Bugs de survie corriges',
        body: 'Le patch corrige un cas d oxygene infini et certains Hammerhead trop agressifs envers joueurs ou vehicules.',
      },
      {
        title: 'Co-op et performance a retester',
        body: 'Hotfix 2 corrige crashes, multiplayer issues, messages de statut et performance Epic Games Store.',
      },
    ],
    tableTitle: 'Impact du patch',
    tableHeaders: ['Zone', 'A verifier'],
    tableRows: [
      [
        'Route Silver',
        'Rejouer les grottes de depart et les routes Old Habitat.',
      ],
      ['Oxygene', 'Ne pas compter sur l ancien bug d oxygene.'],
      ['Co-op', 'Retester joining, disconnects, status messages et callouts.'],
      [
        'Rare materials',
        'Mentionner les nouvelles zones late-game Troilite dans les pages concernees.',
      ],
      [
        'Version Epic',
        'Les notes de performance du lancement peuvent etre datees.',
      ],
    ],
    visualTitle: 'Scan Hotfix 2',
    visualItems: [
      { label: 'Ressource', value: 'Silver', note: 'Plus de zones au debut.' },
      {
        label: 'Survie',
        value: 'Oxygene',
        note: 'Bug de respiration infinie corrige.',
      },
      {
        label: 'Co-op',
        value: 'Stabilite',
        note: 'Crash et multiplayer fixes.',
      },
    ],
    cautionTitle: 'Ne pas melanger avant et apres patch',
    cautionBody:
      'Un guide de lancement peut avoir la bonne direction mais une mauvaise difficulte. Si Silver semble introuvable ou si Troilite n a qu une route etroite, verifiez la date.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Hotfix 2 rend Silver plus simple ?',
        body: 'Oui. Unknown Worlds dit avoir ajoute plus de zones Silver au debut.',
      },
      {
        title: 'Hotfix 2 change toutes les ressources ?',
        body: 'Non. Les changements confirmes concernent Silver en early game et Troilite en late game. Le reste demande verification.',
      },
      {
        title: 'Faut-il recommencer une sauvegarde ?',
        body: 'La note officielle ne le demande pas. Pour les guides, il faut surtout reverifier les zones touchees.',
      },
      {
        title: 'Pourquoi ce patch merite une page ?',
        body: 'Il touche des recherches frequentes: Silver, oxygen, co-op stability et rare-material routes.',
      },
    ],
    readNextTitle: 'Lire ensuite',
    related: [
      { href: Routes.Subnautica2Updates, label: 'Roadmap and Updates' },
      {
        href: Routes.Subnautica2SilverAfterHotfix2,
        label: 'Silver After Hotfix 2',
      },
      {
        href: Routes.Subnautica2TroiliteAfterHotfix2,
        label: 'Troilite After Hotfix 2',
      },
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Coop, label: 'Co-op Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
    ],
    sourcesTitle: 'Sources',
    sourceBody:
      'Verifie le 24 mai 2026 avec Hotfix 2, la lettre feedback, la roadmap et la page Steam Early Access.',
    cardKicker: 'Patch card',
    cardBody:
      'Guide patch pour Silver, oxygene, co-op, Troilite, Hammerhead et routes de debut.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Patch guide',
    cardVerifiedLabel: 'Verifie',
    cardStatusLabel: 'Statut',
    cardStatusValue: 'Patch live',
  },
  'pt-BR': {
    metadata: {
      title: 'Subnautica 2 Hotfix 2 - Silver, oxigenio, co-op e rotas',
      description:
        'Guia Subnautica 2 Hotfix 2 sobre Silver, Troilite, bug de oxigenio, Hammerhead, Epic performance, crashes co-op e rotas iniciais.',
    },
    eyebrow: 'Notas do Hotfix 2',
    title: 'Subnautica 2 Hotfix 2: mudancas',
    description:
      'Hotfix 2 nao e so lista de bugs. Ele mexe em Silver no comeco, seguranca de oxigenio, co-op e rotas que estavam asperas no lancamento.',
    quickLabel: 'Resposta rapida',
    quickAnswer:
      'Hotfix 2 adiciona mais areas de Silver no inicio, adiciona mais areas de Troilite no late game, reduz alguns ataques de Hammerhead, corrige bug de oxigenio infinito, melhora Epic performance e resolve varios crashes e problemas multiplayer.',
    contentsLabel: 'Conteudo',
    routeTitle: 'O que mudou no Hotfix 2',
    routeSteps: [
      {
        title: 'Silver ficou melhor de rotear',
        body: 'Unknown Worlds adicionou mais areas de Silver no early game. Isso afeta oxigenio e progresso de eletronica.',
      },
      {
        title: 'Troilite ganhou mais areas late game',
        body: 'O patch adiciona mais Troilite resource areas no late-game region. Notas antigas de rare materials precisam ser revistas.',
      },
      {
        title: 'Bugs de sobrevivencia corrigidos',
        body: 'O patch corrige um caso de respirar para sempre e ataques demais de Hammerhead contra players ou veiculos.',
      },
      {
        title: 'Co-op e performance pedem reteste',
        body: 'Hotfix 2 inclui fixes de crashes, multiplayer, status messages e performance no Epic Games Store.',
      },
    ],
    tableTitle: 'Impacto do patch',
    tableHeaders: ['Area', 'O que rechecar'],
    tableRows: [
      [
        'Rota de Silver',
        'Rodar cavernas iniciais e Old Habitat routes de novo.',
      ],
      ['Oxigenio', 'Nao contar com o comportamento antigo do oxygen bug.'],
      ['Co-op', 'Retestar join, disconnects, status messages e callouts.'],
      [
        'Rare materials',
        'Mencionar as novas areas late-game de Troilite nas paginas certas.',
      ],
      [
        'Versao Epic',
        'Notas de performance da semana de lancamento podem estar velhas.',
      ],
    ],
    visualTitle: 'Scan Hotfix 2',
    visualItems: [
      { label: 'Recurso', value: 'Silver', note: 'Mais areas no inicio.' },
      {
        label: 'Sobrevivencia',
        value: 'Oxigenio',
        note: 'Bug de respirar infinito corrigido.',
      },
      {
        label: 'Co-op',
        value: 'Estabilidade',
        note: 'Crash e multiplayer fixes.',
      },
    ],
    cautionTitle: 'Nao misture guia pre-patch e pos-patch',
    cautionBody:
      'Um guia de lancamento pode acertar a direcao e errar a dificuldade atual. Se fala que Silver e raro demais ou que Troilite tem so uma rota apertada, veja a data.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Hotfix 2 deixa Silver mais facil?',
        body: 'Sim. Unknown Worlds diz que adicionou mais areas de Silver no early game.',
      },
      {
        title: 'Hotfix 2 muda todas as rotas?',
        body: 'Nao. Confirmado mesmo: Silver early-game areas e Troilite late-game areas. Outras rotas precisam de teste.',
      },
      {
        title: 'Preciso criar novo save?',
        body: 'A nota oficial nao pede isso. Para guias, basta rechecar as areas iniciais afetadas.',
      },
      {
        title: 'Por que esse patch importa para guias?',
        body: 'Ele toca buscas recorrentes: Silver, oxygen, co-op stability e rare-material routes.',
      },
    ],
    readNextTitle: 'Ler depois',
    related: [
      { href: Routes.Subnautica2Updates, label: 'Roadmap and Updates' },
      {
        href: Routes.Subnautica2SilverAfterHotfix2,
        label: 'Silver After Hotfix 2',
      },
      {
        href: Routes.Subnautica2TroiliteAfterHotfix2,
        label: 'Troilite After Hotfix 2',
      },
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Coop, label: 'Co-op Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
    ],
    sourcesTitle: 'Fontes',
    sourceBody:
      'Checado em 24 de maio de 2026 com Hotfix 2 oficial, carta de feedback, roadmap e Steam Early Access page.',
    cardKicker: 'Patch card',
    cardBody:
      'Guia de patch para Silver, oxigenio, co-op, Troilite, Hammerhead e rotas iniciais.',
    cardTypeLabel: 'Tipo',
    cardTypeValue: 'Patch guide',
    cardVerifiedLabel: 'Verificado',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Patch live',
  },
  'es-419': {
    metadata: {
      title: 'Subnautica 2 Hotfix 2 - Silver, oxigeno, co-op y rutas',
      description:
        'Guia Subnautica 2 Hotfix 2 sobre Silver, Troilite, bug de oxigeno, Hammerhead, Epic performance, crashes co-op y rutas iniciales.',
    },
    eyebrow: 'Notas de Hotfix 2',
    title: 'Subnautica 2 Hotfix 2: cambios',
    description:
      'Hotfix 2 no es solo una lista de bugs. Cambia como pensar Silver temprano, oxigeno, co-op y algunas rutas del lanzamiento.',
    quickLabel: 'Respuesta rapida',
    quickAnswer:
      'Hotfix 2 agrega mas areas de Silver al inicio, agrega mas areas de Troilite en late game, reduce ciertos ataques de Hammerhead, corrige un bug de oxigeno infinito, mejora Epic performance y arregla varios crashes y problemas multiplayer.',
    contentsLabel: 'Contenido',
    routeTitle: 'Que cambio en Hotfix 2',
    routeSteps: [
      {
        title: 'Silver tiene mejor ruta',
        body: 'Unknown Worlds agrego mas zonas de Silver en early game. Importa porque Silver frena oxigeno y electronica.',
      },
      {
        title: 'Troilite gana mas areas late game',
        body: 'El patch agrega mas Troilite resource areas en late-game region. Las notas antiguas de rare materials deben revisarse.',
      },
      {
        title: 'Bugs de supervivencia corregidos',
        body: 'El patch corrige un caso de respirar para siempre y ataques excesivos de Hammerhead.',
      },
      {
        title: 'Co-op y performance necesitan retest',
        body: 'Hotfix 2 incluye fixes de crashes, multiplayer, status messages y performance en Epic Games Store.',
      },
    ],
    tableTitle: 'Impacto del patch',
    tableHeaders: ['Area', 'Que revisar'],
    tableRows: [
      [
        'Ruta de Silver',
        'Revisar cuevas tempranas y rutas cerca de Old Habitat.',
      ],
      ['Oxigeno', 'No depender del comportamiento viejo del oxygen bug.'],
      ['Co-op', 'Retestar join, disconnects, status messages y callouts.'],
      [
        'Rare materials',
        'Mencionar las nuevas areas late-game de Troilite en paginas relevantes.',
      ],
      [
        'Version Epic',
        'Notas de performance de lanzamiento pueden estar viejas.',
      ],
    ],
    visualTitle: 'Scan Hotfix 2',
    visualItems: [
      { label: 'Recurso', value: 'Silver', note: 'Mas areas tempranas.' },
      {
        label: 'Supervivencia',
        value: 'Oxigeno',
        note: 'Bug de respiracion infinita corregido.',
      },
      {
        label: 'Co-op',
        value: 'Estabilidad',
        note: 'Crash y multiplayer fixes.',
      },
    ],
    cautionTitle: 'No mezcles guias pre-patch y post-patch',
    cautionBody:
      'Una guia de lanzamiento puede acertar direccion pero fallar en dificultad actual. Si dice que Silver es casi imposible o que Troilite solo tiene una ruta estrecha, mira la fecha.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Hotfix 2 hace Silver mas facil?',
        body: 'Si. Unknown Worlds dice que agrego mas areas de Silver en early game.',
      },
      {
        title: 'Hotfix 2 cambia todas las rutas?',
        body: 'No. Confirmado: Silver early-game areas y Troilite late-game areas. Otras rutas necesitan prueba propia.',
      },
      {
        title: 'Necesito nuevo save?',
        body: 'La nota oficial no lo pide. Para guias, basta revisar las zonas tempranas afectadas.',
      },
      {
        title: 'Por que importa para SEO?',
        body: 'Toca busquedas repetidas: Silver, oxygen, co-op stability y rare-material routes.',
      },
    ],
    readNextTitle: 'Leer despues',
    related: [
      { href: Routes.Subnautica2Updates, label: 'Roadmap and Updates' },
      {
        href: Routes.Subnautica2SilverAfterHotfix2,
        label: 'Silver After Hotfix 2',
      },
      {
        href: Routes.Subnautica2TroiliteAfterHotfix2,
        label: 'Troilite After Hotfix 2',
      },
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Coop, label: 'Co-op Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
    ],
    sourcesTitle: 'Fuentes',
    sourceBody:
      'Revisado el 24 de mayo de 2026 con Hotfix 2 oficial, carta de feedback, roadmap y Steam Early Access page.',
    cardKicker: 'Patch card',
    cardBody:
      'Guia de patch para Silver, oxigeno, co-op, Troilite, Hammerhead y rutas tempranas.',
    cardTypeLabel: 'Tipo',
    cardTypeValue: 'Patch guide',
    cardVerifiedLabel: 'Verificado',
    cardStatusLabel: 'Estado',
    cardStatusValue: 'Patch live',
  },
  ko: {
    metadata: {
      title: 'Subnautica 2 Hotfix 2 변경점 - Silver, 산소, co-op, 초반 루트',
      description:
        'Subnautica 2 Hotfix 2 가이드: Silver 변경, Troilite 수정, 산소 버그, Hammerhead, Epic 성능, co-op 크래시와 재확인할 루트.',
    },
    eyebrow: 'Subnautica 2 Hotfix 2 노트',
    title: 'Subnautica 2 Hotfix 2 변경점',
    description:
      'Hotfix 2는 단순한 버그 목록이 아닙니다. 초반 Silver, 산소 안전, co-op, 출시 초기에 거칠었던 루트에 영향을 줍니다.',
    quickLabel: '빠른 답변',
    quickAnswer:
      'Hotfix 2는 초반 지역의 Silver 영역을 늘리고, late game 지역의 Troilite 영역을 늘리고, 일부 Hammerhead 공격을 줄이고, 무한 호흡 산소 버그를 고치고, Epic performance와 여러 crash/multiplayer 문제를 수정합니다.',
    contentsLabel: '목차',
    routeTitle: 'Hotfix 2에서 바뀐 것',
    routeSteps: [
      {
        title: 'Silver 루트가 더 안정적입니다',
        body: 'Unknown Worlds는 초반 지역에 더 많은 Silver resource areas를 추가했습니다. Silver는 산소와 전자 제작을 막는 재료입니다.',
      },
      {
        title: 'Troilite late-game 영역이 늘었습니다',
        body: '패치는 late-game region에 Troilite resource areas를 더 추가합니다. 이전 rare-material 메모는 다시 확인해야 합니다.',
      },
      {
        title: '초반 생존 버그가 정리됐습니다',
        body: '무한 호흡 oxygen bug와 Hammerhead가 차량이나 플레이어를 과하게 공격하는 일부 상황이 수정됐습니다.',
      },
      {
        title: 'Co-op과 성능은 재확인이 필요합니다',
        body: 'Hotfix 2는 crash, multiplayer, status messages, Epic Games Store performance issue를 포함합니다.',
      },
    ],
    tableTitle: '패치 영향표',
    tableHeaders: ['영역', '다시 확인할 것'],
    tableRows: [
      ['Silver route', '초반 동굴과 Old Habitat 근처 루트를 다시 돕니다.'],
      ['Oxygen planning', '이전 oxygen bug 동작에 기대지 않습니다.'],
      [
        'Co-op sessions',
        'join, disconnects, status messages, callouts를 테스트합니다.',
      ],
      [
        'Rare materials',
        'Troilite late-game resource areas 추가를 관련 페이지에 적습니다.',
      ],
      ['Epic version', '출시 주 성능 메모는 오래됐을 수 있습니다.'],
    ],
    visualTitle: 'Hotfix 2 스캔',
    visualItems: [
      { label: 'Resource', value: 'Silver', note: '초반 영역 증가.' },
      { label: 'Survival', value: 'Oxygen', note: '무한 호흡 버그 수정.' },
      {
        label: 'Co-op',
        value: 'Stability',
        note: 'Crash와 multiplayer fixes.',
      },
    ],
    cautionTitle: '패치 전후 조언을 섞지 마세요',
    cautionBody:
      '출시 주 가이드는 방향은 맞아도 현재 난이도를 틀릴 수 있습니다. Silver가 너무 희귀하거나 Troilite가 아주 좁은 루트 하나뿐이라는 글은 날짜를 확인하세요.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Hotfix 2가 Silver를 더 쉽게 만들었나요?',
        body: '네. Unknown Worlds는 초반 지역에 Silver resource areas를 더 추가했다고 말했습니다.',
      },
      {
        title: 'Hotfix 2가 모든 자원 루트를 바꾸나요?',
        body: '아니요. 확인된 것은 Silver early-game area additions와 Troilite late-game area additions입니다. 나머지는 별도 확인이 필요합니다.',
      },
      {
        title: '새 save가 필요한가요?',
        body: '공식 노트는 새 save를 요구하지 않습니다. 영향을 받은 초반 지역만 다시 확인하면 됩니다.',
      },
      {
        title: '왜 이 패치가 가이드에 중요하죠?',
        body: 'Silver, oxygen, co-op stability, rare-material routes처럼 반복 검색되는 문제를 건드립니다.',
      },
    ],
    readNextTitle: '다음 읽기',
    related: [
      { href: Routes.Subnautica2Updates, label: 'Roadmap and Updates' },
      {
        href: Routes.Subnautica2SilverAfterHotfix2,
        label: 'Silver After Hotfix 2',
      },
      {
        href: Routes.Subnautica2TroiliteAfterHotfix2,
        label: 'Troilite After Hotfix 2',
      },
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Coop, label: 'Co-op Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
    ],
    sourcesTitle: '출처',
    sourceBody:
      '2026년 5월 24일 Unknown Worlds Hotfix 2, feedback letter, roadmap, Steam Early Access page를 확인했습니다.',
    cardKicker: 'Patch card',
    cardBody:
      'Silver, oxygen, co-op, Troilite, Hammerhead, 초반 루트를 위한 패치 가이드.',
    cardTypeLabel: '유형',
    cardTypeValue: 'Patch guide',
    cardVerifiedLabel: '확인일',
    cardStatusLabel: '상태',
    cardStatusValue: 'Live patch',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 Hotfix 2 変更点 - Silver、酸素、co-op、序盤ルート',
      description:
        'Subnautica 2 Hotfix 2 の Silver 変更、Troilite 修正、酸素バグ、Hammerhead、Epic 性能、co-op クラッシュ、再確認すべき攻略を整理。',
    },
    eyebrow: 'Subnautica 2 Hotfix 2 メモ',
    title: 'Subnautica 2 Hotfix 2 変更点',
    description:
      'Hotfix 2 はただのバグ修正一覧ではありません。序盤の Silver、酸素安全、co-op、発売直後に不安定だったルートに関係します。',
    quickLabel: '要点',
    quickAnswer:
      'Hotfix 2 は序盤地域の Silver エリア追加、late game 地域の Troilite エリア追加、一部 Hammerhead 攻撃の調整、無限呼吸の酸素バグ修正、Epic performance 改善、複数の crash / multiplayer 修正を含みます。',
    contentsLabel: '目次',
    routeTitle: 'Hotfix 2 の主な変更',
    routeSteps: [
      {
        title: 'Silver ルートを再確認',
        body: 'Unknown Worlds は序盤地域に Silver resource areas を追加しました。Silver は酸素と電子系クラフトを止めやすい素材です。',
      },
      {
        title: 'Troilite late-game エリアの追加',
        body: 'パッチは late-game region に Troilite resource areas を追加します。古い rare-material メモは再確認が必要です。',
      },
      {
        title: '序盤サバイバルバグの修正',
        body: '無限に呼吸できる oxygen bug と、一部 Hammerhead の過剰攻撃が修正されています。',
      },
      {
        title: 'Co-op と性能を再テスト',
        body: 'Hotfix 2 には crashes、multiplayer、status messages、Epic Games Store performance issue の修正が含まれます。',
      },
    ],
    tableTitle: 'パッチ影響表',
    tableHeaders: ['領域', '再確認すること'],
    tableRows: [
      ['Silver route', '序盤の洞窟と Old Habitat 近くのルートを再確認。'],
      ['Oxygen planning', '古い oxygen bug 前提で潜水しない。'],
      [
        'Co-op sessions',
        'join、disconnects、status messages、callouts を確認。',
      ],
      [
        'Rare materials',
        'Troilite late-game resource areas 追加を関連ページに反映。',
      ],
      ['Epic version', '発売週の performance note は古い可能性あり。'],
    ],
    visualTitle: 'Hotfix 2 スキャン',
    visualItems: [
      { label: 'Resource', value: 'Silver', note: '序盤エリア追加。' },
      { label: 'Survival', value: 'Oxygen', note: '無限呼吸バグ修正。' },
      {
        label: 'Co-op',
        value: 'Stability',
        note: 'Crash と multiplayer fixes。',
      },
    ],
    cautionTitle: 'パッチ前後の攻略を混ぜない',
    cautionBody:
      '発売週の攻略は方向が合っていても、現在の難しさを間違えている場合があります。Silver が極端に少ない、Troilite が狭い1ルートだけという記事は日付を確認しましょう。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Hotfix 2 で Silver は見つけやすくなりましたか？',
        body: 'はい。Unknown Worlds は序盤地域に Silver resource areas を追加したと説明しています。',
      },
      {
        title: 'Hotfix 2 は全資源ルートを変えますか？',
        body: 'いいえ。確認済みは Silver early-game area additions と Troilite late-game area additions です。他は個別確認が必要です。',
      },
      {
        title: '新しい save が必要ですか？',
        body: '公式ノートでは要求されていません。攻略上は影響を受けた序盤エリアを再確認します。',
      },
      {
        title: 'なぜこのパッチが攻略に重要？',
        body: 'Silver、oxygen、co-op stability、rare-material routes という検索されやすい問題に触れるからです。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2Updates, label: 'Roadmap and Updates' },
      {
        href: Routes.Subnautica2SilverAfterHotfix2,
        label: 'Silver After Hotfix 2',
      },
      {
        href: Routes.Subnautica2TroiliteAfterHotfix2,
        label: 'Troilite After Hotfix 2',
      },
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Coop, label: 'Co-op Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
    ],
    sourcesTitle: 'ソース',
    sourceBody:
      '2026年5月24日に Unknown Worlds Hotfix 2、feedback letter、roadmap、Steam Early Access page を確認。',
    cardKicker: 'Patch card',
    cardBody:
      'Silver、oxygen、co-op、Troilite、Hammerhead、序盤ルート向けのパッチガイド。',
    cardTypeLabel: '種類',
    cardTypeValue: 'Patch guide',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: '状態',
    cardStatusValue: 'Live patch',
  },
};

function getCopy(locale: Locale): HotfixCopy {
  return hotfixCopy[locale] ?? hotfixCopy.en;
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
    pathname: Routes.Subnautica2Hotfix2,
  });
}

export default async function Hotfix2GuidePage({
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
      icon={RefreshCcwIcon}
      locale={locale}
      pathname={Routes.Subnautica2Hotfix2}
      sources={sharedSources}
    />
  );
}
