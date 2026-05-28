import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { PickaxeIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type SilverPatchCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-24';
const UPDATED_AT = '2026-05-29';

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
    href: 'https://www.gamesradar.com/games/survival/subnautica-2-adding-better-callouts-for-silver-in-first-patch-as-players-struggle-to-find-any/',
    label: 'GamesRadar Silver reporting',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap',
    label: 'Unknown Worlds Early Access roadmap',
  },
];

const silverPatchCopy: Record<string, SilverPatchCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Silver After Hotfix 2 - What Changed and What to Recheck',
      description:
        'A focused guide to Subnautica 2 Silver after Hotfix 2, including what changed, what did not, how to recheck early routes, and which older guide claims to treat carefully.',
    },
    eyebrow: 'Subnautica 2 Silver patch note',
    title: 'Subnautica 2 Silver After Hotfix 2',
    description:
      'Silver was one of the first Early Access pain points. Hotfix 2 made the early route less stingy, but the patch note does not hand players a new map. Here is the sensible way to read it.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Yes, Silver changed in Hotfix 2. Unknown Worlds says the patch added more Silver resource areas in the early-game region. That means old “Silver is almost impossible to find” advice is stale, but it does not mean every cave or recipe changed.',
    fieldNotesTitle: 'Field notes for rechecking Silver',
    fieldNotes: [
      {
        title: 'Old complaints are not useless',
        body: 'Pre-hotfix Silver complaints still tell you where players got stuck. The difference is that you should now recheck nearby early areas before accepting the old bottleneck.',
      },
      {
        title: 'Routes beat rumor',
        body: 'The official note says more areas, not exact coordinates. Mark the new reliable path in your own save instead of chasing one copied spot from an older guide.',
      },
      {
        title: 'Raw Silver still matters',
        body: 'More spawns do not make Silver disposable. Wiring Kit, Advanced Battery, Silver Ingot, and electronics still compete for the same metal.',
      },
    ],
    routeChecklistTitle: 'Before farming Silver again',
    routeChecklist: [
      'Confirm your game is on Hotfix 2 or later.',
      'Recheck early-game resource areas before following pre-hotfix routes.',
      'Keep raw Silver separate from Silver Ingot plans.',
      'Drop a Beacon once your save reveals a repeatable route.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to recheck Silver after Hotfix 2',
    routeSteps: [
      {
        title: 'Start with the same early route',
        body: 'Use the Lifepod as your anchor and head back toward the Old Habitat and black-box route. Hotfix 2 changes scarcity, not the basic habit of using landmarks.',
      },
      {
        title: 'Sweep caves instead of open seabed',
        body: 'Silver is still a cave-and-route material. Do a slow pass through early cave pockets, then mark which entrances actually produce Silver in the current build.',
      },
      {
        title: 'Separate hand pickups from deposits',
        body: 'Small Silver pieces and larger deposits are different jobs. Do not call a route dry just because you found a deposit before you have the right tool.',
      },
      {
        title: 'Treat launch-week posts as old weather',
        body: 'GamesRadar covered how much players struggled with Silver before the fix. That context helps explain the patch, but current route advice should be checked after May 22, 2026.',
      },
    ],
    tableTitle: 'Before and after Hotfix 2',
    tableHeaders: ['Question', 'Practical answer'],
    tableRows: [
      [
        'Is Silver still important?',
        'Yes. It still gates oxygen and electronics progress, so it remains a high-priority early material.',
      ],
      [
        'Is it confirmed that Silver was buffed?',
        'The official note says more Silver resource areas were added in the early-game region.',
      ],
      [
        'Are exact new locations listed?',
        'No. The patch note does not publish a coordinate list, so route pages should avoid fake precision.',
      ],
      [
        'Should old routes be deleted?',
        'No. Keep good landmarks, but re-run them and update the difficulty notes.',
      ],
      [
        'What page should change first?',
        'The Silver guide, Resources guide, Air Tank guide, and beginner route are the first pages to refresh.',
      ],
    ],
    visualTitle: 'Silver check card',
    visualItems: [
      {
        label: 'Patch',
        value: 'Hotfix 2',
        note: 'Released May 22, 2026.',
      },
      {
        label: 'Change',
        value: 'More Silver',
        note: 'Officially added to the early-game region.',
      },
      {
        label: 'Risk',
        value: 'Old guides',
        note: 'Launch-week scarcity notes may be too harsh now.',
      },
    ],
    cautionTitle: 'Do not invent exact coordinates',
    cautionBody:
      'The official patch note confirms more early Silver areas, but it does not list coordinates. A good guide should say what was confirmed, then show a route that can be checked in-game.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Did Hotfix 2 add more Silver in Subnautica 2?',
        body: 'Yes. Unknown Worlds says Hotfix 2 added more Silver resource areas in the early-game region.',
      },
      {
        title: 'Does this make every old Silver guide wrong?',
        body: 'No. Landmarks may still be useful. The part most likely to be wrong is how scarce or frustrating the route feels.',
      },
      {
        title: 'Where should I check first after Hotfix 2?',
        body: 'Start near the Lifepod-to-Old-Habitat route and early cave pockets. That keeps the run repeatable instead of random.',
      },
      {
        title: 'Should I wait for a full map before farming Silver?',
        body: 'No. A small repeatable route is enough for early upgrades. A full map helps later, but it is not required to break the first Silver bottleneck.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Silver, label: 'Where to Find Silver' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
      { href: Routes.Subnautica2Beginner, label: 'Beginner Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 28, 2026 against Unknown Worlds Hotfix 2, the community feedback letter, GamesRadar launch-week Silver reporting, and the official roadmap.',
    cardKicker: 'Silver patch card',
    cardBody:
      'A patch-aware Silver note for players checking whether old routes still match the current Early Access build.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Patch route',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Hotfix 2',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Hotfix 2 之后银怎么找 - 银资源变化和路线复查',
      description:
        '整理 Subnautica 2 Hotfix 2 后银资源变化：官方确认增加前期银资源区域、旧攻略哪些地方要小心、前期路线怎么重新核对。',
    },
    eyebrow: 'Subnautica 2 银资源补丁说明',
    title: 'Subnautica 2 Hotfix 2 之后银怎么找',
    description:
      '银是抢先体验首周最容易卡人的材料之一。Hotfix 2 让前期找银没那么难，但官方没有直接给玩家一张新地图，所以这页只写能确认的东西。',
    quickLabel: '快速结论',
    quickAnswer:
      'Hotfix 2 确实改了银。Unknown Worlds 明确说补丁增加了前期区域的银资源点。所以“银几乎找不到”的旧说法已经不够准，但这不代表每个洞穴或配方都变了。',
    fieldNotesTitle: '重新找 Silver 的笔记',
    fieldNotes: [
      {
        title: '旧抱怨不是完全没用',
        body: '补丁前玩家卡 Silver 的反馈仍然能告诉你哪里曾经容易断货。区别是现在要先重新查附近前期区域，不要直接接受旧瓶颈。',
      },
      {
        title: '路线比传闻更可靠',
        body: '官方只说增加了区域，没有给精确坐标。找到你存档里稳定路线后放 Beacon，比追一条旧攻略点位更稳。',
      },
      {
        title: '原 Silver 仍然重要',
        body: '刷新点变多不代表 Silver 可以乱花。Wiring Kit、Advanced Battery、Silver Ingot 和电子材料仍然会抢它。',
      },
    ],
    routeChecklistTitle: '重新刷 Silver 前',
    routeChecklist: [
      '先确认游戏版本已经是 Hotfix 2 或更新。',
      '跟旧路线前，重新检查前期资源区域。',
      '原 Silver 和 Silver Ingot 计划分开放。',
      '一旦找到稳定路线，立刻放 Beacon。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Hotfix 2 后怎么重新核对银路线',
    routeSteps: [
      {
        title: '仍然从旧的前期路线开始',
        body: '用 Lifepod 当起点，往 Old Habitat 和黑匣子路线方向复查。Hotfix 2 改的是稀缺程度，不是“靠地标跑路线”这个基本方法。',
      },
      {
        title: '重点扫洞穴，不要乱扫海底',
        body: '银仍然更像洞穴和任务路线材料。慢慢扫前期洞穴口和洞内小空间，把当前版本确实出银的位置记下来。',
      },
      {
        title: '区分手捡银和矿床',
        body: '小块银和大型矿床不是一回事。工具还没到位时，不要因为看到不能挖的矿床就判断这条路线没用。',
      },
      {
        title: '首发周文章只能当背景',
        body: 'GamesRadar 记录过玩家首发时找银很痛苦，这能解释为什么官方要改。现在写路线，应该按 2026 年 5 月 22 日之后的版本重新核对。',
      },
    ],
    tableTitle: 'Hotfix 2 前后怎么理解',
    tableHeaders: ['问题', '实用答案'],
    tableRows: [
      [
        '银还重要吗？',
        '重要。它仍然会卡住氧气和电子制作进度，是前期高优先级材料。',
      ],
      ['银确定加强了吗？', '官方说明是：前期区域增加了更多银资源点。'],
      [
        '官方列出新坐标了吗？',
        '没有。所以攻略不能编造精确坐标，只能写已核对路线。',
      ],
      [
        '旧路线要删掉吗？',
        '不用。好地标仍然有用，但难度和出货说明要重跑后再写。',
      ],
      ['哪些页面优先更新？', '银、资源、气瓶和新手路线页面都应该优先复查。'],
    ],
    visualTitle: '银资源核对卡',
    visualItems: [
      { label: '补丁', value: 'Hotfix 2', note: '2026 年 5 月 22 日发布。' },
      { label: '变化', value: '更多银', note: '官方确认加入前期区域。' },
      { label: '风险', value: '旧攻略', note: '首发周的稀缺描述可能过时。' },
    ],
    cautionTitle: '不要编精确坐标',
    cautionBody:
      '官方只确认了前期银资源区域增加，并没有公开坐标清单。好的攻略应该先写清楚官方确认了什么，再给出可以进游戏复查的路线。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Hotfix 2 真的增加银了吗？',
        body: '是的。Unknown Worlds 明确说 Hotfix 2 增加了前期区域的银资源点。',
      },
      {
        title: '这代表所有旧银攻略都错了吗？',
        body: '不代表。地标可能仍然有用，最容易过时的是“有多难找”和“这条路线是否值得跑”的判断。',
      },
      {
        title: 'Hotfix 2 后先去哪里找银？',
        body: '先复查 Lifepod 到 Old Habitat 方向，以及前期洞穴口和洞内小空间。这样路线能重复，不是乱碰运气。',
      },
      {
        title: '要等完整地图出来再刷银吗？',
        body: '不用。前期只需要一条能重复的小路线，就足够解决第一波氧气和电子制作卡点。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Silver, label: '银在哪里找' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 更新内容' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2AirTank, label: '气瓶与氧气' },
      { href: Routes.Subnautica2Beginner, label: '新手指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 28 日核对 Unknown Worlds Hotfix 2、社区反馈信、GamesRadar 首发周银资源报道和官方路线图。',
    cardKicker: '银资源补丁卡',
    cardBody:
      '专门核对 Hotfix 2 后银资源是否变多、旧路线是否还可靠，以及哪些说法不能照搬。',
    cardTypeLabel: '类型',
    cardTypeValue: '补丁路线',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: 'Hotfix 2',
  },
  ru: {
    metadata: {
      title: 'Subnautica 2 Silver после Hotfix 2 - что изменилось',
      description:
        'Короткий разбор Silver после Subnautica 2 Hotfix 2: что изменилось, какие старые советы устарели и как перепроверить ранний маршрут.',
    },
    eyebrow: 'Silver после Hotfix 2',
    title: 'Subnautica 2 Silver после Hotfix 2',
    description:
      'Silver был ранней болью Early Access. Hotfix 2 сделал старт менее жестким, но не дал готовую карту. Поэтому держимся фактов.',
    quickLabel: 'Коротко',
    quickAnswer:
      'Да, Silver изменился. Unknown Worlds пишет, что Hotfix 2 добавил больше Silver resource areas в ранней области. Старые жалобы на дефицит могут быть устаревшими.',
    contentsLabel: 'Содержание',
    routeTitle: 'Как проверить Silver после Hotfix 2',
    routeSteps: [
      {
        title: 'Начните с прежнего маршрута',
        body: 'Берите Lifepod как якорь и идите к Old Habitat и black-box route. Патч меняет дефицит, а не саму привычку ходить по landmarks.',
      },
      {
        title: 'Проверяйте пещеры',
        body: 'Silver все еще стоит искать в ранних cave pockets, а не просто на открытом дне.',
      },
      {
        title: 'Отделяйте pickups от deposits',
        body: 'Малые куски Silver и крупные deposits требуют разного подхода. Не списывайте маршрут из-за инструмента, которого еще нет.',
      },
      {
        title: 'Launch-week posts уже старые',
        body: 'Отчеты первой недели полезны как контекст, но текущие маршруты надо проверять после 22 мая 2026.',
      },
    ],
    tableTitle: 'До и после Hotfix 2',
    tableHeaders: ['Вопрос', 'Практический ответ'],
    tableRows: [
      [
        'Silver все еще важен?',
        'Да. Он нужен для oxygen и electronics progression.',
      ],
      [
        'Silver официально усилен?',
        'Официально добавлены новые ранние Silver areas.',
      ],
      ['Есть точные координаты?', 'Нет. Патч не дает coordinate list.'],
      [
        'Удалять старые маршруты?',
        'Нет. Оставьте landmarks, но обновите difficulty notes.',
      ],
      [
        'Что обновлять первым?',
        'Silver, resources, air tank и beginner route.',
      ],
    ],
    visualTitle: 'Silver check card',
    visualItems: [
      { label: 'Patch', value: 'Hotfix 2', note: '22 мая 2026.' },
      { label: 'Change', value: 'More Silver', note: 'В ранней области.' },
      {
        label: 'Risk',
        value: 'Old guides',
        note: 'Launch-week notes may be harsh.',
      },
    ],
    cautionTitle: 'Не придумывайте координаты',
    cautionBody:
      'Официальная заметка подтверждает больше ранних Silver areas, но не дает координат. Хороший гайд должен отделять факт от проверенного маршрута.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Hotfix 2 добавил больше Silver?',
        body: 'Да. Unknown Worlds пишет о большем числе Silver resource areas в ранней области.',
      },
      {
        title: 'Все старые Silver guides неверны?',
        body: 'Нет. Landmarks могут быть полезны. Устаревает в основном оценка редкости.',
      },
      {
        title: 'Где проверять сначала?',
        body: 'Маршрут Lifepod to Old Habitat и ранние cave pockets.',
      },
      {
        title: 'Ждать полной карты?',
        body: 'Нет. Для ранних upgrades достаточно маленького повторяемого маршрута.',
      },
    ],
    readNextTitle: 'Дальше',
    related: [
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
      { href: Routes.Subnautica2Beginner, label: 'Beginner Guide' },
    ],
    sourcesTitle: 'Источники',
    sourceBody:
      'Проверено 28 мая 2026 по Hotfix 2, feedback letter, GamesRadar и официальной roadmap.',
    cardKicker: 'Silver patch card',
    cardBody:
      'Проверка Silver после Hotfix 2: что стало мягче и какие старые советы осторожно читать.',
    cardTypeLabel: 'Тип',
    cardTypeValue: 'Patch route',
    cardVerifiedLabel: 'Проверено',
    cardStatusLabel: 'Статус',
    cardStatusValue: 'Hotfix 2',
  },
  de: {
    metadata: {
      title: 'Subnautica 2 Silver nach Hotfix 2 - was sich geaendert hat',
      description:
        'Fokussierter Guide zu Silver nach Subnautica 2 Hotfix 2: offizielle Aenderung, alte Guide-Risiken und fruehe Route zum Nachpruefen.',
    },
    eyebrow: 'Silver Patch Note',
    title: 'Subnautica 2 Silver nach Hotfix 2',
    description:
      'Silver war ein frueher Early-Access-Schmerzpunkt. Hotfix 2 macht die Lage besser, liefert aber keine neue Karte. Also bleiben wir bei pruefbaren Routen.',
    quickLabel: 'Kurzfassung',
    quickAnswer:
      'Ja, Silver wurde in Hotfix 2 geaendert. Unknown Worlds sagt, dass mehr Silver resource areas im Early Game hinzugefuegt wurden. Alte Scarcity-Notizen koennen zu hart sein.',
    contentsLabel: 'Inhalt',
    routeTitle: 'Silver nach Hotfix 2 pruefen',
    routeSteps: [
      {
        title: 'Mit der alten Early Route starten',
        body: 'Lifepod als Anker nehmen und Richtung Old Habitat und black-box route gehen. Die Grundlogik bleibt: landmarks schlagen Zufall.',
      },
      {
        title: 'Caves statt offener Meeresboden',
        body: 'Silver bleibt ein cave-and-route Material. Pruefe fruehe cave pockets langsam und notiere echte Treffer.',
      },
      {
        title: 'Pickups und deposits trennen',
        body: 'Kleine Silver pieces und grosse deposits sind nicht dasselbe. Ohne passendes Tool ist ein deposit kein trockener Run.',
      },
      {
        title: 'Launch-week posts als Kontext lesen',
        body: 'Berichte ueber Silver-Frust erklaeren den Patch, ersetzen aber keine aktuelle Routenpruefung nach dem 22. Mai 2026.',
      },
    ],
    tableTitle: 'Vor und nach Hotfix 2',
    tableHeaders: ['Frage', 'Praktische Antwort'],
    tableRows: [
      [
        'Ist Silver weiter wichtig?',
        'Ja. Es bremst oxygen und electronics progression.',
      ],
      [
        'Wurde Silver offiziell verbessert?',
        'Mehr fruehe Silver areas wurden offiziell genannt.',
      ],
      [
        'Gibt es genaue Koordinaten?',
        'Nein. Die Patch Note enthaelt keine coordinate list.',
      ],
      [
        'Alte Routen loeschen?',
        'Nein. Landmarks behalten, difficulty notes neu schreiben.',
      ],
      [
        'Welche Seiten zuerst?',
        'Silver, resources, air tank und beginner route.',
      ],
    ],
    visualTitle: 'Silver Check Card',
    visualItems: [
      { label: 'Patch', value: 'Hotfix 2', note: '22. Mai 2026.' },
      {
        label: 'Change',
        value: 'More Silver',
        note: 'Mehr Early-Game-Bereiche.',
      },
      {
        label: 'Risk',
        value: 'Old guides',
        note: 'Launch-week scarcity kann alt sein.',
      },
    ],
    cautionTitle: 'Keine Koordinaten erfinden',
    cautionBody:
      'Die offizielle Patch Note bestaetigt mehr fruehe Silver areas, aber keine Koordinaten. Gute Guides trennen bestaetigte Aenderung und getestete Route.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Fuegt Hotfix 2 mehr Silver hinzu?',
        body: 'Ja. Unknown Worlds nennt mehr Silver resource areas im Early Game.',
      },
      {
        title: 'Sind alte Silver guides falsch?',
        body: 'Nicht komplett. Landmarks koennen stimmen, Scarcity-Urteile koennen veraltet sein.',
      },
      {
        title: 'Wo zuerst suchen?',
        body: 'Lifepod to Old Habitat route und fruehe cave pockets.',
      },
      {
        title: 'Auf eine volle Karte warten?',
        body: 'Nein. Ein kleiner wiederholbarer Run reicht fuer fruehe upgrades.',
      },
    ],
    readNextTitle: 'Weiterlesen',
    related: [
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
      { href: Routes.Subnautica2Beginner, label: 'Beginner Guide' },
    ],
    sourcesTitle: 'Quellen',
    sourceBody:
      'Geprueft am 28. Mai 2026 mit Hotfix 2, Feedback-Brief, GamesRadar und offizieller Roadmap.',
    cardKicker: 'Silver patch card',
    cardBody:
      'Silver nach Hotfix 2: bestaetigte Aenderung, alte Guide-Risiken und Routencheck.',
    cardTypeLabel: 'Typ',
    cardTypeValue: 'Patch route',
    cardVerifiedLabel: 'Geprueft',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Hotfix 2',
  },
  fr: {
    metadata: {
      title: 'Subnautica 2 Silver apres Hotfix 2 - ce qui change',
      description:
        'Guide Silver apres Subnautica 2 Hotfix 2 : changement officiel, anciennes affirmations a verifier et route de debut a refaire.',
    },
    eyebrow: 'Note Silver Hotfix 2',
    title: 'Subnautica 2 Silver apres Hotfix 2',
    description:
      'Silver a bloque beaucoup de joueurs au lancement. Hotfix 2 rend la route moins rude, mais ne donne pas une carte complete.',
    quickLabel: 'Reponse rapide',
    quickAnswer:
      'Oui, Silver change avec Hotfix 2. Unknown Worlds indique plus de Silver resource areas au debut du jeu. Les vieux conseils sur la rarete peuvent etre depasses.',
    contentsLabel: 'Sommaire',
    routeTitle: 'Verifier Silver apres Hotfix 2',
    routeSteps: [
      {
        title: 'Repartir de la route connue',
        body: 'Utilisez le Lifepod comme point de depart et revenez vers Old Habitat et la route black-box.',
      },
      {
        title: 'Scanner les caves',
        body: 'Silver reste un materiau de caves et de route. Les zones ouvertes au hasard donnent de mauvais tests.',
      },
      {
        title: 'Separer pickups et deposits',
        body: 'Les petits morceaux et les gros deposits ne se gerent pas pareil. Sans outil, un deposit ne prouve pas que la route est mauvaise.',
      },
      {
        title: 'Lire les posts de lancement comme contexte',
        body: 'Ils expliquent pourquoi le patch existe, mais les conseils actuels doivent etre verifies apres le 22 mai 2026.',
      },
    ],
    tableTitle: 'Avant et apres Hotfix 2',
    tableHeaders: ['Question', 'Reponse utile'],
    tableRows: [
      ['Silver reste important ?', 'Oui. Il bloque oxygene et electronique.'],
      [
        'Silver est confirme comme change ?',
        'Oui, plus de zones Silver au debut.',
      ],
      [
        'Des coordonnees exactes ?',
        'Non. La patch note ne donne pas de liste.',
      ],
      [
        'Supprimer les vieilles routes ?',
        'Non. Garder les landmarks, revoir la difficulte.',
      ],
      [
        'Pages a changer en premier ?',
        'Silver, resources, air tank et beginner route.',
      ],
    ],
    visualTitle: 'Carte de verification Silver',
    visualItems: [
      { label: 'Patch', value: 'Hotfix 2', note: '22 mai 2026.' },
      {
        label: 'Changement',
        value: 'More Silver',
        note: 'Ajout officiel au debut.',
      },
      {
        label: 'Risque',
        value: 'Old guides',
        note: 'Notes de rarete peut-etre trop dures.',
      },
    ],
    cautionTitle: 'Ne pas inventer de coordonnees',
    cautionBody:
      'La patch note confirme plus de Silver au debut, pas une liste de coordonnees. Un bon guide doit rester verifiable.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Hotfix 2 ajoute plus de Silver ?',
        body: 'Oui. Unknown Worlds mentionne plus de Silver resource areas au debut du jeu.',
      },
      {
        title: 'Tous les anciens guides sont faux ?',
        body: 'Non. Les landmarks peuvent rester bons. La rarete ressentie peut etre depassee.',
      },
      {
        title: 'Ou verifier d abord ?',
        body: 'Route Lifepod vers Old Habitat et petites caves de debut.',
      },
      {
        title: 'Faut-il attendre une carte complete ?',
        body: 'Non. Une petite route repetable suffit pour les premiers upgrades.',
      },
    ],
    readNextTitle: 'Lire ensuite',
    related: [
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
      { href: Routes.Subnautica2Beginner, label: 'Beginner Guide' },
    ],
    sourcesTitle: 'Sources',
    sourceBody:
      'Verifie le 28 mai 2026 avec Hotfix 2, lettre feedback, GamesRadar et roadmap officielle.',
    cardKicker: 'Silver patch card',
    cardBody:
      'Silver apres Hotfix 2: ce qui est confirme et ce qu il faut verifier.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Patch route',
    cardVerifiedLabel: 'Verifie',
    cardStatusLabel: 'Statut',
    cardStatusValue: 'Hotfix 2',
  },
  'pt-BR': {
    metadata: {
      title: 'Subnautica 2 Silver depois do Hotfix 2 - o que mudou',
      description:
        'Guia de Silver depois do Subnautica 2 Hotfix 2: mudanca oficial, riscos de guias antigos e rota inicial para rechecar.',
    },
    eyebrow: 'Nota Silver Hotfix 2',
    title: 'Subnautica 2 Silver depois do Hotfix 2',
    description:
      'Silver foi um dos primeiros gargalos. Hotfix 2 melhora a situacao, mas nao entrega um mapa pronto.',
    quickLabel: 'Resposta rapida',
    quickAnswer:
      'Sim, Silver mudou. Unknown Worlds diz que Hotfix 2 adicionou mais Silver resource areas no early game. Guias antigos sobre escassez podem estar duros demais.',
    contentsLabel: 'Conteudo',
    routeTitle: 'Como rechecar Silver depois do Hotfix 2',
    routeSteps: [
      {
        title: 'Comece pela mesma rota inicial',
        body: 'Use o Lifepod como ancora e volte para Old Habitat e black-box route.',
      },
      {
        title: 'Cheque cavernas',
        body: 'Silver continua sendo material de cave pockets e rotas, nao de varrer o fundo do mar sem plano.',
      },
      {
        title: 'Separe pickups de deposits',
        body: 'Pecas pequenas e deposits grandes pedem ferramentas diferentes. Nao descarte a rota cedo demais.',
      },
      {
        title: 'Leia posts de lancamento como contexto',
        body: 'Eles explicam a dor de Silver, mas a rota atual precisa ser checada depois de 22 de maio de 2026.',
      },
    ],
    tableTitle: 'Antes e depois do Hotfix 2',
    tableHeaders: ['Pergunta', 'Resposta pratica'],
    tableRows: [
      ['Silver ainda importa?', 'Sim. Ainda prende oxigenio e eletronica.'],
      [
        'Silver foi melhorado?',
        'A nota oficial fala em mais Silver areas no inicio.',
      ],
      ['Ha coordenadas exatas?', 'Nao. O patch nao da lista de coordenadas.'],
      [
        'Apagar rotas antigas?',
        'Nao. Manter landmarks, atualizar dificuldade.',
      ],
      [
        'Paginas prioritarias?',
        'Silver, resources, air tank e beginner route.',
      ],
    ],
    visualTitle: 'Silver check card',
    visualItems: [
      { label: 'Patch', value: 'Hotfix 2', note: '22 de maio de 2026.' },
      {
        label: 'Mudanca',
        value: 'More Silver',
        note: 'Adicionado ao early game.',
      },
      {
        label: 'Risco',
        value: 'Old guides',
        note: 'Notas de escassez podem estar velhas.',
      },
    ],
    cautionTitle: 'Nao invente coordenadas',
    cautionBody:
      'A nota oficial confirma mais areas de Silver, mas nao lista coordenadas. Um bom guia separa fato confirmado e rota testavel.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Hotfix 2 adicionou mais Silver?',
        body: 'Sim. Unknown Worlds diz que adicionou mais Silver resource areas no early game.',
      },
      {
        title: 'Todo guia antigo esta errado?',
        body: 'Nao. Landmarks ainda podem servir. A parte de escassez pode estar desatualizada.',
      },
      {
        title: 'Onde checar primeiro?',
        body: 'Rota Lifepod para Old Habitat e cave pockets iniciais.',
      },
      {
        title: 'Esperar mapa completo?',
        body: 'Nao. Uma rota pequena e repetivel basta para upgrades iniciais.',
      },
    ],
    readNextTitle: 'Ler depois',
    related: [
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
      { href: Routes.Subnautica2Beginner, label: 'Beginner Guide' },
    ],
    sourcesTitle: 'Fontes',
    sourceBody:
      'Checado em 28 de maio de 2026 com Hotfix 2, carta de feedback, GamesRadar e roadmap oficial.',
    cardKicker: 'Silver patch card',
    cardBody:
      'Silver depois do Hotfix 2: mudanca confirmada, risco de guia antigo e rota para testar.',
    cardTypeLabel: 'Tipo',
    cardTypeValue: 'Patch route',
    cardVerifiedLabel: 'Verificado',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Hotfix 2',
  },
  'es-419': {
    metadata: {
      title: 'Subnautica 2 Silver despues de Hotfix 2 - que cambio',
      description:
        'Guia de Silver despues de Subnautica 2 Hotfix 2: cambio oficial, riesgos de guias antiguas y ruta inicial para revisar.',
    },
    eyebrow: 'Nota Silver Hotfix 2',
    title: 'Subnautica 2 Silver despues de Hotfix 2',
    description:
      'Silver fue uno de los primeros bloqueos. Hotfix 2 mejora la situacion, pero no entrega un mapa nuevo.',
    quickLabel: 'Respuesta rapida',
    quickAnswer:
      'Si, Silver cambio. Unknown Worlds dice que Hotfix 2 agrego mas Silver resource areas en early game. Los consejos viejos sobre escasez pueden estar exagerados ahora.',
    contentsLabel: 'Contenido',
    routeTitle: 'Como revisar Silver despues de Hotfix 2',
    routeSteps: [
      {
        title: 'Empieza por la ruta conocida',
        body: 'Usa Lifepod como ancla y vuelve hacia Old Habitat y black-box route.',
      },
      {
        title: 'Revisa cuevas',
        body: 'Silver sigue siendo material de cave pockets y ruta, no de barrer el fondo al azar.',
      },
      {
        title: 'Separa pickups y deposits',
        body: 'Piezas pequenas y deposits grandes son cosas distintas. No descartes una ruta por no tener herramienta.',
      },
      {
        title: 'Lee posts de lanzamiento como contexto',
        body: 'Sirven para entender la queja, pero la ruta actual debe revisarse despues del 22 de mayo de 2026.',
      },
    ],
    tableTitle: 'Antes y despues de Hotfix 2',
    tableHeaders: ['Pregunta', 'Respuesta practica'],
    tableRows: [
      ['Silver sigue importando?', 'Si. Todavia frena oxigeno y electronica.'],
      [
        'Silver fue mejorado?',
        'La nota oficial dice mas Silver areas en early game.',
      ],
      ['Hay coordenadas exactas?', 'No. El patch no da lista de coordenadas.'],
      [
        'Borrar rutas antiguas?',
        'No. Mantener landmarks, actualizar dificultad.',
      ],
      [
        'Paginas prioritarias?',
        'Silver, resources, air tank y beginner route.',
      ],
    ],
    visualTitle: 'Silver check card',
    visualItems: [
      { label: 'Patch', value: 'Hotfix 2', note: '22 de mayo de 2026.' },
      {
        label: 'Cambio',
        value: 'More Silver',
        note: 'Agregado al early game.',
      },
      {
        label: 'Riesgo',
        value: 'Old guides',
        note: 'Notas de escasez pueden estar viejas.',
      },
    ],
    cautionTitle: 'No inventes coordenadas',
    cautionBody:
      'La nota oficial confirma mas Silver temprano, pero no lista coordenadas. Un buen guia separa hecho confirmado y ruta comprobable.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Hotfix 2 agrego mas Silver?',
        body: 'Si. Unknown Worlds dice que agrego mas Silver resource areas en early game.',
      },
      {
        title: 'Todas las guias viejas estan mal?',
        body: 'No. Landmarks pueden servir. La escasez descrita puede estar vieja.',
      },
      {
        title: 'Donde revisar primero?',
        body: 'Ruta Lifepod a Old Habitat y cave pockets iniciales.',
      },
      {
        title: 'Esperar un mapa completo?',
        body: 'No. Una ruta pequena repetible alcanza para upgrades iniciales.',
      },
    ],
    readNextTitle: 'Leer despues',
    related: [
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
      { href: Routes.Subnautica2Beginner, label: 'Beginner Guide' },
    ],
    sourcesTitle: 'Fuentes',
    sourceBody:
      'Revisado el 28 de mayo de 2026 con Hotfix 2, carta de feedback, GamesRadar y roadmap oficial.',
    cardKicker: 'Silver patch card',
    cardBody:
      'Silver despues de Hotfix 2: cambio confirmado, riesgo de guia vieja y ruta para probar.',
    cardTypeLabel: 'Tipo',
    cardTypeValue: 'Patch route',
    cardVerifiedLabel: 'Verificado',
    cardStatusLabel: 'Estado',
    cardStatusValue: 'Hotfix 2',
  },
  ko: {
    metadata: {
      title: 'Subnautica 2 Hotfix 2 이후 Silver - 무엇이 바뀌었나',
      description:
        'Subnautica 2 Hotfix 2 이후 Silver 변화, 오래된 가이드의 위험, 초반 루트 재확인 방법을 정리합니다.',
    },
    eyebrow: 'Silver Hotfix 2 note',
    title: 'Subnautica 2 Hotfix 2 이후 Silver',
    description:
      'Silver는 Early Access 초반 병목이었습니다. Hotfix 2로 나아졌지만, 공식이 새 지도를 준 것은 아닙니다.',
    quickLabel: '빠른 답변',
    quickAnswer:
      '네, Silver는 Hotfix 2에서 바뀌었습니다. Unknown Worlds는 초반 지역에 더 많은 Silver resource areas를 추가했다고 말했습니다. 출시 주 부족하다는 조언은 지금은 과할 수 있습니다.',
    contentsLabel: '목차',
    routeTitle: 'Hotfix 2 후 Silver 확인법',
    routeSteps: [
      {
        title: '기존 초반 루트부터 시작',
        body: 'Lifepod를 기준으로 Old Habitat와 black-box route 방향을 다시 확인합니다.',
      },
      {
        title: '동굴을 확인',
        body: 'Silver는 여전히 cave pockets와 route 소재입니다. 열린 해저를 무작정 훑는 것은 좋지 않습니다.',
      },
      {
        title: 'Pickups와 deposits를 분리',
        body: '작은 Silver와 큰 deposits는 다릅니다. 도구가 없어서 못 캐는 것을 루트 실패로 보지 마세요.',
      },
      {
        title: '출시 주 글은 배경으로만',
        body: '그 글들은 패치 이유를 보여주지만, 현재 루트는 2026년 5월 22일 이후 기준으로 확인해야 합니다.',
      },
    ],
    tableTitle: 'Hotfix 2 전후',
    tableHeaders: ['질문', '실전 답변'],
    tableRows: [
      ['Silver는 여전히 중요한가요?', '네. 산소와 전자 제작 진행을 막습니다.'],
      [
        '공식적으로 늘었나요?',
        '초반 Silver areas가 더 추가됐다고 나와 있습니다.',
      ],
      ['정확한 좌표가 있나요?', '아니요. patch note에는 좌표 목록이 없습니다.'],
      [
        '이전 루트를 지울까요?',
        '아니요. landmark는 두고 난이도 설명을 고칩니다.',
      ],
      [
        '먼저 바꿀 페이지는?',
        'Silver, resources, air tank, beginner route입니다.',
      ],
    ],
    visualTitle: 'Silver check card',
    visualItems: [
      { label: 'Patch', value: 'Hotfix 2', note: '2026년 5월 22일.' },
      { label: 'Change', value: 'More Silver', note: '초반 지역에 추가.' },
      {
        label: 'Risk',
        value: 'Old guides',
        note: '출시 주 부족 설명은 오래됐을 수 있음.',
      },
    ],
    cautionTitle: '정확한 좌표를 만들어내지 마세요',
    cautionBody:
      '공식은 초반 Silver areas 추가를 확인했지만 좌표 목록은 주지 않았습니다. 좋은 가이드는 확인된 사실과 테스트 가능한 루트를 나눕니다.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Hotfix 2가 Silver를 늘렸나요?',
        body: '네. Unknown Worlds는 초반 지역에 Silver resource areas를 더 추가했다고 말했습니다.',
      },
      {
        title: '이전 Silver 가이드는 다 틀렸나요?',
        body: '아니요. landmarks는 유용할 수 있습니다. 부족하다는 느낌 설명이 오래됐을 수 있습니다.',
      },
      {
        title: '어디부터 확인하나요?',
        body: 'Lifepod에서 Old Habitat 방향과 초반 cave pockets를 먼저 봅니다.',
      },
      {
        title: '전체 지도를 기다려야 하나요?',
        body: '아니요. 초반 upgrades에는 작고 반복 가능한 루트면 충분합니다.',
      },
    ],
    readNextTitle: '다음 읽기',
    related: [
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
      { href: Routes.Subnautica2Beginner, label: 'Beginner Guide' },
    ],
    sourcesTitle: '출처',
    sourceBody:
      '2026년 5월 28일 Unknown Worlds Hotfix 2, feedback letter, GamesRadar, official roadmap을 확인했습니다.',
    cardKicker: 'Silver patch card',
    cardBody:
      'Hotfix 2 이후 Silver 변경, 오래된 가이드 위험, 재확인 루트를 정리합니다.',
    cardTypeLabel: '유형',
    cardTypeValue: 'Patch route',
    cardVerifiedLabel: '확인일',
    cardStatusLabel: '상태',
    cardStatusValue: 'Hotfix 2',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 Hotfix 2 後の Silver - 何が変わったか',
      description:
        'Subnautica 2 Hotfix 2 後の Silver 変更、古い攻略の注意点、序盤ルートの再確認方法をまとめます。',
    },
    eyebrow: 'Silver Hotfix 2 note',
    title: 'Subnautica 2 Hotfix 2 後の Silver',
    description:
      'Silver は Early Access 序盤の大きな詰まりでした。Hotfix 2 で楽になりましたが、公式が新しい地図を出したわけではありません。',
    quickLabel: '要点',
    quickAnswer:
      'はい、Silver は Hotfix 2 で変わりました。Unknown Worlds は序盤地域に Silver resource areas を追加したと説明しています。発売週の「少なすぎる」という攻略は今では厳しすぎる場合があります。',
    contentsLabel: '目次',
    routeTitle: 'Hotfix 2 後の Silver 確認方法',
    routeSteps: [
      {
        title: '同じ序盤ルートから始める',
        body: 'Lifepod を起点に Old Habitat と black-box route 方面をもう一度確認します。',
      },
      {
        title: '洞窟を確認する',
        body: 'Silver はまだ cave pockets とルート素材です。開けた海底をランダムに探すより安定します。',
      },
      {
        title: 'Pickups と deposits を分ける',
        body: '小さな Silver と大きな deposits は別物です。道具がないだけでルートを失敗扱いしないようにします。',
      },
      {
        title: '発売週の記事は背景として読む',
        body: 'それらはパッチ理由の説明には役立ちますが、現在のルートは 2026年5月22日以降で確認します。',
      },
    ],
    tableTitle: 'Hotfix 2 前後',
    tableHeaders: ['質問', '実用的な答え'],
    tableRows: [
      ['Silver はまだ重要？', 'はい。酸素と電子系クラフトの進行に関わります。'],
      [
        '公式に増えた？',
        '序盤の Silver areas が追加されたと説明されています。',
      ],
      ['正確な座標はある？', 'いいえ。patch note に座標リストはありません。'],
      [
        '古いルートは削除？',
        'いいえ。landmark は残し、難易度説明を更新します。',
      ],
      [
        '先に直すページは？',
        'Silver、resources、air tank、beginner route です。',
      ],
    ],
    visualTitle: 'Silver check card',
    visualItems: [
      { label: 'Patch', value: 'Hotfix 2', note: '2026年5月22日。' },
      { label: 'Change', value: 'More Silver', note: '序盤地域に追加。' },
      {
        label: 'Risk',
        value: 'Old guides',
        note: '発売週の不足感は古い可能性。',
      },
    ],
    cautionTitle: '正確な座標を作らない',
    cautionBody:
      '公式は序盤 Silver areas の追加を確認していますが、座標リストはありません。良い攻略は確認済み事実と実地で試せるルートを分けます。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Hotfix 2 で Silver は増えましたか？',
        body: 'はい。Unknown Worlds は序盤地域に Silver resource areas を追加したと説明しています。',
      },
      {
        title: '古い Silver 攻略は全部間違い？',
        body: 'いいえ。landmarks は使える場合があります。古いのは主に「どれくらい少ないか」の判断です。',
      },
      {
        title: 'まずどこを見る？',
        body: 'Lifepod から Old Habitat 方面と序盤の cave pockets を確認します。',
      },
      {
        title: '完全な地図を待つべき？',
        body: 'いいえ。序盤 upgrades には小さく反復できるルートで十分です。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
      { href: Routes.Subnautica2Beginner, label: 'Beginner Guide' },
    ],
    sourcesTitle: 'ソース',
    sourceBody:
      '2026年5月28日に Unknown Worlds Hotfix 2、feedback letter、GamesRadar、official roadmap を確認。',
    cardKicker: 'Silver patch card',
    cardBody:
      'Hotfix 2 後の Silver 変更、古い攻略の注意点、再確認ルートを整理します。',
    cardTypeLabel: '種類',
    cardTypeValue: 'Patch route',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: '状態',
    cardStatusValue: 'Hotfix 2',
  },
};

function getCopy(locale: Locale): SilverPatchCopy {
  return silverPatchCopy[locale] ?? silverPatchCopy.en;
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
    pathname: Routes.Subnautica2SilverAfterHotfix2,
  });
}

export default async function SilverAfterHotfix2Page({
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
      pathname={Routes.Subnautica2SilverAfterHotfix2}
      sources={sharedSources}
    />
  );
}
