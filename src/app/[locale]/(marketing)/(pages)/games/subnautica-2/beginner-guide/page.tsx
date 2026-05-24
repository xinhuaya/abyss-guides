import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { CompassIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type BeginnerCopy = ResourceGuideCopy & {
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
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-tips/',
    label: 'PC Gamer beginner tips',
  },
];

const beginnerCopy: Record<string, BeginnerCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Beginner Route - First 60 Minutes Guide',
      description:
        'A spoiler-light Subnautica 2 beginner route for the first 60 minutes, including Copper, Silver, Scanner, oxygen, storage, and common mistakes.',
    },
    eyebrow: 'Subnautica 2 first 60 minutes',
    title: 'Subnautica 2 Beginner Route: First 60 Minutes',
    description:
      'Your first hour should not be a heroic deep dive. It should be a calm loop: stabilize, scan, build a short resource route, then push outward only when the route has a reason.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'In the first 60 minutes, stay close to the Lifepod, craft the early tool chain, scan before looting, collect Copper for batteries and Scanner progress, find Silver for O2 upgrades, and avoid building a large base until a route proves useful. Subnautica 2 is Early Access, so keep the plan flexible after patches.',
    contentsLabel: 'Contents',
    routeTitle: 'First-hour route',
    routeSteps: [
      {
        title: '0-10 minutes: stabilize',
        body: 'Learn the safe area around the Lifepod. Grab common materials, mark obvious landmarks in your head, and return before oxygen becomes a panic timer.',
      },
      {
        title: '10-25 minutes: craft the tool loop',
        body: 'Copper matters early because it leads into batteries and Scanner progress. Do not leave every interesting fragment for a second trip.',
      },
      {
        title: '25-45 minutes: build O2 margin',
        body: 'Use Air Bladders and environmental oxygen, then work toward the Standard Air Tank. Silver is the piece that often slows this down.',
      },
      {
        title: '45-60 minutes: choose a repeatable route',
        body: 'Pick one short loop for Copper, Silver, scans, or base materials. A boring route that works beats a dramatic swim you barely survive.',
      },
    ],
    visualTitle: 'First-hour flow',
    visualItems: [
      {
        label: 'Start',
        value: 'Stay close',
        note: 'Learn safe landmarks before chasing the deep view.',
      },
      {
        label: 'Middle',
        value: 'Scan + O2',
        note: 'Scanner progress and oxygen upgrades create real momentum.',
      },
      {
        label: 'End',
        value: 'Repeat loop',
        note: 'One repeatable route is better than five half-remembered swims.',
      },
    ],
    tableTitle: 'Early priorities',
    tableHeaders: ['Priority', 'Why it matters'],
    tableRows: [
      ['Oxygen', 'More O2 turns caves from panic into planning.'],
      ['Scanner', 'Blueprint progress beats random looting.'],
      ['Copper', 'Batteries and early electronics start here.'],
      ['Silver', 'The first big oxygen upgrade often waits on it.'],
      ['Small storage', 'A tidy base stash prevents constant backtracking.'],
    ],
    cautionTitle: 'Do not sprint past the basics',
    cautionBody:
      'The most common early mistake is swimming farther because the view looks interesting. If you do not know the return route, do not have oxygen margin, and have not scanned nearby fragments, you are probably skipping progress.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'What should I do first in Subnautica 2?',
        body: 'Stay near the Lifepod, gather common materials, craft the early tool chain, scan useful objects, and build a short resource loop before pushing deeper.',
      },
      {
        title: 'When should I build my first base?',
        body: 'Build small after you find a route you will repeat. A useful outpost beats a big base in a spot you barely understand.',
      },
      {
        title: 'Is co-op good for beginners?',
        body: 'Yes, if the group uses storage rules and route names. Without that, co-op turns into scattered inventories very quickly.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Copper, label: 'Copper Location' },
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2OxygenDepth, label: 'Oxygen and Depth' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
      {
        href: Routes.Subnautica2BioscannerBiomods,
        label: 'Bioscanner and Biomods',
      },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 23, 2026 against the official Steam Early Access listing and current beginner tips. Routes, recipes, and balance can change.',
    cardKicker: 'Starter route card',
    cardBody:
      'Spoiler-light first-hour route with tools, oxygen, scans, and resource loops.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Beginner route',
    cardVerifiedLabel: 'Verified',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 新手路线 - 前 60 分钟先做什么',
      description:
        'Subnautica 2 新手中文路线，整理前 60 分钟该做什么：铜、银、Scanner、氧气、储物和常见错误。',
    },
    eyebrow: 'Subnautica 2 前 60 分钟',
    title: 'Subnautica 2 新手路线：前 60 分钟先做什么',
    description:
      '开局第一小时不要急着往深处冲。更稳的节奏是：先活下来，做工具，扫蓝图，跑一条短资源路线，再决定往外推。',
    quickLabel: '快速答案',
    quickAnswer:
      '前 60 分钟先留在 Lifepod 附近，做早期工具链，先扫描再搜刮，用 Copper 推电池和 Scanner，用 Silver 推氧气升级。不要太早盖大基地，先确认某条路线真的值得反复跑。Subnautica 2 仍是抢先体验，补丁后路线要留一点弹性。',
    contentsLabel: '目录',
    routeTitle: '第一小时路线',
    routeSteps: [
      {
        title: '0-10 分钟：先稳定',
        body: '熟悉 Lifepod 周围安全区，捡常见材料，记住明显地标，在氧气变成红色警报前回去。',
      },
      {
        title: '10-25 分钟：做工具链',
        body: 'Copper 前期很重要，因为它会进入电池和 Scanner 路线。不要让每个有用碎片都变成“下次再来”。',
      },
      {
        title: '25-45 分钟：提高氧气余量',
        body: '先用 Air Bladder 和环境氧气，再推进 Standard Air Tank。卡点通常是 Silver。',
      },
      {
        title: '45-60 分钟：确定一条可复跑路线',
        body: '选择一条短循环：Copper、Silver、扫描点或基地材料。稳定路线比惊险远游更值钱。',
      },
    ],
    visualTitle: '第一小时流程',
    visualItems: [
      {
        label: '开始',
        value: '靠近基地',
        note: '先认地标，不要追着深处风景跑。',
      },
      {
        label: '中段',
        value: '扫描 + 氧气',
        note: '蓝图和氧气升级才是真正的进度。',
      },
      {
        label: '结束',
        value: '重复路线',
        note: '一条能复跑的路线，比五条记不清的路线强。',
      },
    ],
    tableTitle: '前期优先级',
    tableHeaders: ['优先级', '为什么重要'],
    tableRows: [
      ['氧气', '更多 O2 会把洞穴探索从慌乱变成计划。'],
      ['Scanner', '蓝图进度比随机捡材料更重要。'],
      ['Copper', '电池和早期电子工具从这里开始。'],
      ['Silver', '第一波重要氧气升级通常会卡它。'],
      ['小型储物', '整理好的储物能减少无意义往返。'],
    ],
    cautionTitle: '别跳过基础步骤',
    cautionBody:
      '新手最常见的问题，是因为远处好看就一直游。你如果不知道回程、没有氧气余量、附近碎片也没扫完，那大概率不是探索，是在跳进麻烦。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 开局先做什么？',
        body: '先留在 Lifepod 附近，捡常见材料，做早期工具链，扫描有用物件，再建立一条短资源路线。',
      },
      {
        title: '什么时候盖第一座基地？',
        body: '找到一条会反复跑的路线后再小规模建。一个有用小据点，比一座位置不熟的大基地更好。',
      },
      {
        title: '新手适合联机吗？',
        body: '适合，但要约好储物规则和路线名称。否则很快会变成每个人背包里都有一半关键材料。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Copper, label: '铜位置' },
      { href: Routes.Subnautica2Silver, label: '银位置' },
      { href: Routes.Subnautica2AirTank, label: '气瓶和氧气' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner 攻略' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 23 日核对官方 Steam 抢先体验页面和当前新手提示。路线、配方和平衡可能随补丁变化。',
    cardKicker: '新手路线卡',
    cardBody: '轻剧透第一小时路线：工具、氧气、扫描和资源循环。',
    cardTypeLabel: '类型',
    cardTypeValue: '新手路线',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
  ru: {
    metadata: {
      title: 'Subnautica 2 маршрут новичка - первые 60 минут',
      description:
        'Русский маршрут новичка Subnautica 2 на первые 60 минут: Copper, Silver, Scanner, кислород, хранение и частые ошибки.',
    },
    eyebrow: 'Первые 60 минут Subnautica 2',
    title: 'Subnautica 2 маршрут новичка: первые 60 минут',
    description:
      'Первый час не должен быть героическим заплывом в глубину. Лучше спокойно закрепиться, сделать инструменты, сканировать и построить короткий маршрут.',
    quickLabel: 'Короткий ответ',
    quickAnswer:
      'В первые 60 минут держитесь Lifepod, сделайте ранние инструменты, сканируйте до лута, собирайте Copper для батарей и Scanner, ищите Silver для O2, и не стройте большую базу до понятного повторяемого маршрута.',
    contentsLabel: 'Содержание',
    routeTitle: 'Маршрут первого часа',
    routeSteps: [
      {
        title: '0-10 минут: стабилизация',
        body: 'Изучите безопасную зону вокруг Lifepod, соберите базовые материалы и возвращайтесь до паники с кислородом.',
      },
      {
        title: '10-25 минут: инструменты',
        body: 'Copper ведет к батареям и Scanner. Без Scanner полезные фрагменты станут вторым заплывом.',
      },
      {
        title: '25-45 минут: запас O2',
        body: 'Используйте Air Bladders и кислород окружения, затем идите к Standard Air Tank. Часто мешает Silver.',
      },
      {
        title: '45-60 минут: повторяемый круг',
        body: 'Выберите короткий маршрут для Copper, Silver, сканов или базы. Стабильность лучше риска.',
      },
    ],
    visualTitle: 'Поток первого часа',
    visualItems: [
      {
        label: 'Старт',
        value: 'Близко',
        note: 'Сначала ориентиры, потом глубина.',
      },
      {
        label: 'Середина',
        value: 'Scan + O2',
        note: 'Чертежи и кислород дают реальный прогресс.',
      },
      {
        label: 'Финиш',
        value: 'Повтор',
        note: 'Один понятный круг лучше пяти случайных.',
      },
    ],
    tableTitle: 'Ранние приоритеты',
    tableHeaders: ['Приоритет', 'Почему важно'],
    tableRows: [
      ['Кислород', 'Больше O2 превращает пещеры из паники в план.'],
      ['Scanner', 'Чертежи важнее случайного лута.'],
      ['Copper', 'Батареи и ранняя электроника начинаются здесь.'],
      ['Silver', 'Первый важный O2 апгрейд часто ждет его.'],
      ['Хранение', 'Порядок в запасах уменьшает лишние рейсы.'],
    ],
    cautionTitle: 'Не перепрыгивайте базу',
    cautionBody:
      'Если вы не знаете дорогу назад, у вас мало кислорода и рядом еще не все отсканировано, дальний заплыв обычно не прогресс.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Что делать первым в Subnautica 2?',
        body: 'Держаться Lifepod, собирать базовые материалы, делать инструменты, сканировать и строить короткий маршрут.',
      },
      {
        title: 'Когда строить первую базу?',
        body: 'После того как нашли маршрут, который будете повторять. Малый полезный аванпост лучше большой случайной базы.',
      },
      {
        title: 'Подходит ли co-op новичкам?',
        body: 'Да, если есть правила хранения и названия маршрутов. Иначе материалы быстро теряются по инвентарям.',
      },
    ],
    readNextTitle: 'Дальше',
    related: [
      { href: Routes.Subnautica2Copper, label: 'Где найти Copper' },
      { href: Routes.Subnautica2Silver, label: 'Где найти Silver' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank и O2' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner' },
    ],
    sourcesTitle: 'Источники',
    sourceBody:
      'Проверено 23 мая 2026 по Steam Early Access и текущим beginner tips. Рецепты и баланс могут меняться.',
    cardKicker: 'Starter route card',
    cardBody:
      'Первый час без тяжелых спойлеров: инструменты, O2, scans и ресурсы.',
    cardTypeLabel: 'Тип',
    cardTypeValue: 'Маршрут новичка',
    cardVerifiedLabel: 'Проверено',
    cardStatusLabel: 'Статус',
    cardStatusValue: 'Early Access',
  },
  de: {
    metadata: {
      title: 'Subnautica 2 Anfängerroute - die ersten 60 Minuten',
      description:
        'Deutscher Subnautica 2 Anfängerroute für die ersten 60 Minuten: Copper, Silver, Scanner, O2, Storage und typische Fehler.',
    },
    eyebrow: 'Subnautica 2 erste 60 Minuten',
    title: 'Subnautica 2 Anfängerroute: erste 60 Minuten',
    description:
      'Die erste Stunde sollte kein wilder Tiefentauchgang sein. Stabilisieren, Tools bauen, scannen, kurze Route finden, dann erst weiter raus.',
    quickLabel: 'Kurzantwort',
    quickAnswer:
      'Bleib in den ersten 60 Minuten nahe am Lifepod. Baue frühe Tools, scanne vor dem Looten, sammle Copper für Batterien und Scanner, finde Silver für O2-Upgrades und baue keine große Base, bevor eine Route wirklich nützlich ist.',
    contentsLabel: 'Inhalt',
    routeTitle: 'Route der ersten Stunde',
    routeSteps: [
      {
        title: '0-10 Minuten: stabilisieren',
        body: 'Lerne die sichere Zone am Lifepod, sammle Basics und kehre zurück, bevor O2 zur Panik wird.',
      },
      {
        title: '10-25 Minuten: Tool-Loop',
        body: 'Copper führt zu Batterien und Scanner. Ohne Scanner werden gute Fragmente zur zweiten Reise.',
      },
      {
        title: '25-45 Minuten: O2-Puffer',
        body: 'Air Bladders und Umwelt-O2 helfen, dann kommt Standard Air Tank. Silver ist oft der Engpass.',
      },
      {
        title: '45-60 Minuten: Route wählen',
        body: 'Eine kurze Route für Copper, Silver, Scans oder Base-Materialien schlägt riskantes Herumschwimmen.',
      },
    ],
    visualTitle: 'Flow der ersten Stunde',
    visualItems: [
      {
        label: 'Start',
        value: 'Nah bleiben',
        note: 'Erst Orientierung, dann Tiefe.',
      },
      {
        label: 'Mitte',
        value: 'Scan + O2',
        note: 'Blueprints und Sauerstoff schaffen Tempo.',
      },
      {
        label: 'Ende',
        value: 'Loop',
        note: 'Eine wiederholbare Route ist Gold wert.',
      },
    ],
    tableTitle: 'Frühe Prioritäten',
    tableHeaders: ['Priorität', 'Warum wichtig'],
    tableRows: [
      ['Sauerstoff', 'Mehr O2 macht Höhlen planbar.'],
      ['Scanner', 'Blueprints schlagen zufälligen Loot.'],
      ['Copper', 'Batterien und frühe Elektronik starten hier.'],
      ['Silver', 'Das erste große O2-Upgrade braucht es oft.'],
      ['Storage', 'Ordnung spart Rückwege.'],
    ],
    cautionTitle: 'Basics nicht überspringen',
    cautionBody:
      'Wenn du den Rückweg nicht kennst, kaum O2 hast und nahe Fragmente nicht gescannt sind, ist weiter schwimmen meist kein Fortschritt.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Was zuerst in Subnautica 2 tun?',
        body: 'Beim Lifepod bleiben, Basics sammeln, Tools bauen, scannen und eine kurze Route einrichten.',
      },
      {
        title: 'Wann die erste Base bauen?',
        body: 'Wenn du eine Route gefunden hast, die du wiederholen wirst. Klein und nützlich ist besser als groß und zufällig.',
      },
      {
        title: 'Ist co-op gut für Anfänger?',
        body: 'Ja, mit Storage-Regeln und Routennamen. Ohne das verteilen sich wichtige Materialien schnell.',
      },
    ],
    readNextTitle: 'Weiterlesen',
    related: [
      { href: Routes.Subnautica2Copper, label: 'Copper finden' },
      { href: Routes.Subnautica2Silver, label: 'Silver finden' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank und O2' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
    ],
    sourcesTitle: 'Quellenhinweis',
    sourceBody:
      'Geprüft am 23. Mai 2026 mit Steam Early Access und aktuellen Beginner-Tipps. Balance und Rezepte können sich ändern.',
    cardKicker: 'Starter route card',
    cardBody:
      'Spoilerarme erste Stunde mit Tools, O2, Scans und Ressourcen-Loops.',
    cardTypeLabel: 'Typ',
    cardTypeValue: 'Anfängerroute',
    cardVerifiedLabel: 'Geprüft',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  fr: {
    metadata: {
      title: 'Subnautica 2 route débutant - les 60 premières minutes',
      description:
        'Route débutant Subnautica 2 en français : Copper, Silver, Scanner, oxygène, stockage et erreurs courantes.',
    },
    eyebrow: 'Subnautica 2 premières 60 minutes',
    title: 'Subnautica 2 route débutant : les 60 premières minutes',
    description:
      'La première heure n’a pas besoin d’être héroïque. Stabilisez, scannez, faites une boucle courte, puis poussez plus loin avec une vraie raison.',
    quickLabel: 'Réponse rapide',
    quickAnswer:
      'Restez près du Lifepod, fabriquez les premiers outils, scannez avant de looter, prenez Copper pour batteries et Scanner, cherchez Silver pour O2, et ne construisez pas une grosse base avant d’avoir une route utile.',
    contentsLabel: 'Sommaire',
    routeTitle: 'Route de la première heure',
    routeSteps: [
      {
        title: '0-10 min : stabiliser',
        body: 'Apprenez la zone sûre autour du Lifepod, prenez les matériaux communs et rentrez avant la panique O2.',
      },
      {
        title: '10-25 min : outils',
        body: 'Copper mène aux batteries et au Scanner. Sans Scanner, un fragment utile devient un deuxième trajet.',
      },
      {
        title: '25-45 min : marge O2',
        body: 'Air Bladders et oxygène d’environnement aident, puis visez Standard Air Tank. Silver bloque souvent.',
      },
      {
        title: '45-60 min : boucle répétable',
        body: 'Choisissez une boucle courte pour Copper, Silver, scans ou base. Stable bat spectaculaire.',
      },
    ],
    visualTitle: 'Flux de la première heure',
    visualItems: [
      {
        label: 'Départ',
        value: 'Rester près',
        note: 'Repères avant profondeur.',
      },
      {
        label: 'Milieu',
        value: 'Scan + O2',
        note: 'Plans et oxygène créent l’élan.',
      },
      {
        label: 'Fin',
        value: 'Boucle',
        note: 'Une route répétable vaut mieux que cinq souvenirs flous.',
      },
    ],
    tableTitle: 'Priorités de début',
    tableHeaders: ['Priorité', 'Pourquoi'],
    tableRows: [
      ['Oxygène', 'Plus d’O2 transforme les grottes en plan, pas en panique.'],
      ['Scanner', 'Les plans valent mieux que le loot au hasard.'],
      ['Copper', 'Batteries et électronique commencent ici.'],
      ['Silver', 'Le premier gros upgrade O2 l’attend souvent.'],
      ['Stockage', 'Un petit rangement propre évite les allers-retours.'],
    ],
    cautionTitle: 'Ne sautez pas les bases',
    cautionBody:
      'Si vous ne connaissez pas le retour, manquez d’O2 et n’avez pas scanné les fragments proches, aller plus loin n’est pas du progrès.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Que faire en premier dans Subnautica 2 ?',
        body: 'Rester près du Lifepod, prendre les matériaux communs, fabriquer les outils, scanner et créer une boucle courte.',
      },
      {
        title: 'Quand construire la première base ?',
        body: 'Après avoir trouvé une route que vous répéterez. Petit et utile vaut mieux que grand et mal placé.',
      },
      {
        title: 'Le co-op est-il bon pour débuter ?',
        body: 'Oui, avec des règles de stockage et des noms de routes. Sinon les matériaux clés se dispersent vite.',
      },
    ],
    readNextTitle: 'À lire ensuite',
    related: [
      { href: Routes.Subnautica2Copper, label: 'Trouver Copper' },
      { href: Routes.Subnautica2Silver, label: 'Trouver Silver' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank et O2' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
    ],
    sourcesTitle: 'Sources',
    sourceBody:
      'Vérifié le 23 mai 2026 avec Steam Early Access et les conseils débutant actuels. Recettes et équilibre peuvent changer.',
    cardKicker: 'Starter route card',
    cardBody:
      'Première heure légère en spoilers : outils, O2, scans et boucles ressources.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Route débutant',
    cardVerifiedLabel: 'Vérifié',
    cardStatusLabel: 'Statut',
    cardStatusValue: 'Early Access',
  },
  'pt-BR': {
    metadata: {
      title: 'Subnautica 2 rota inicial - primeiros 60 minutos',
      description:
        'Rota inicial em português do Brasil para Subnautica 2: Copper, Silver, Scanner, oxigênio, armazenamento e erros comuns.',
    },
    eyebrow: 'Subnautica 2 primeiros 60 minutos',
    title: 'Subnautica 2 rota inicial: primeiros 60 minutos',
    description:
      'A primeira hora não precisa ser uma corrida para o fundo. Estabilize, escaneie, monte uma volta curta e só avance quando houver motivo.',
    quickLabel: 'Resposta rápida',
    quickAnswer:
      'Nos primeiros 60 minutos, fique perto do Lifepod, faça ferramentas iniciais, escaneie antes de lootear, use Copper para baterias e Scanner, procure Silver para O2 e não faça uma base grande antes de provar que a rota vale repetir.',
    contentsLabel: 'Conteúdo',
    routeTitle: 'Rota da primeira hora',
    routeSteps: [
      {
        title: '0-10 min: estabilizar',
        body: 'Aprenda a área segura perto do Lifepod, pegue materiais comuns e volte antes do oxigênio virar pânico.',
      },
      {
        title: '10-25 min: ferramentas',
        body: 'Copper leva a baterias e Scanner. Sem Scanner, fragmento útil vira segunda viagem.',
      },
      {
        title: '25-45 min: margem de O2',
        body: 'Air Bladders e oxigênio do ambiente ajudam, depois mire no Standard Air Tank. Silver costuma travar.',
      },
      {
        title: '45-60 min: loop repetível',
        body: 'Escolha uma volta curta para Copper, Silver, scans ou base. Rota estável vence mergulho dramático.',
      },
    ],
    visualTitle: 'Fluxo da primeira hora',
    visualItems: [
      {
        label: 'Começo',
        value: 'Ficar perto',
        note: 'Aprenda referências antes de buscar profundidade.',
      },
      {
        label: 'Meio',
        value: 'Scan + O2',
        note: 'Projetos e oxigênio criam progresso real.',
      },
      {
        label: 'Fim',
        value: 'Repetir',
        note: 'Uma rota repetível vale mais que cinco voltas confusas.',
      },
    ],
    tableTitle: 'Prioridades iniciais',
    tableHeaders: ['Prioridade', 'Por que importa'],
    tableRows: [
      ['Oxigênio', 'Mais O2 transforma cavernas em planejamento.'],
      ['Scanner', 'Projetos valem mais que loot aleatório.'],
      ['Copper', 'Baterias e eletrônica começam aqui.'],
      ['Silver', 'O primeiro upgrade grande de O2 costuma pedir isso.'],
      ['Armazenamento', 'Estoque organizado reduz idas e voltas.'],
    ],
    cautionTitle: 'Não pule o básico',
    cautionBody:
      'Se você não conhece o retorno, tem pouco O2 e ainda não escaneou os fragmentos próximos, ir mais longe provavelmente não é progresso.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'O que fazer primeiro em Subnautica 2?',
        body: 'Ficar perto do Lifepod, coletar materiais comuns, fazer ferramentas, escanear e montar uma rota curta.',
      },
      {
        title: 'Quando fazer a primeira base?',
        body: 'Depois de achar uma rota que você vai repetir. Pequena e útil vence grande e mal escolhida.',
      },
      {
        title: 'Co-op é bom para iniciantes?',
        body: 'Sim, se houver regras de armazenamento e nomes de rota. Sem isso, os materiais somem entre inventários.',
      },
    ],
    readNextTitle: 'Leia a seguir',
    related: [
      { href: Routes.Subnautica2Copper, label: 'Onde encontrar Copper' },
      { href: Routes.Subnautica2Silver, label: 'Onde encontrar Silver' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank e O2' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
    ],
    sourcesTitle: 'Fontes',
    sourceBody:
      'Verificado em 23 de maio de 2026 com Steam Early Access e dicas iniciais atuais. Receitas e balanceamento podem mudar.',
    cardKicker: 'Starter route card',
    cardBody:
      'Primeira hora com poucos spoilers: ferramentas, O2, scans e rotas de recurso.',
    cardTypeLabel: 'Tipo',
    cardTypeValue: 'Rota inicial',
    cardVerifiedLabel: 'Verificado',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  'es-419': {
    metadata: {
      title: 'Subnautica 2 ruta inicial - primeros 60 minutos',
      description:
        'Ruta inicial en español latino para Subnautica 2: Copper, Silver, Scanner, oxígeno, almacenamiento y errores comunes.',
    },
    eyebrow: 'Subnautica 2 primeros 60 minutos',
    title: 'Subnautica 2 ruta inicial: primeros 60 minutos',
    description:
      'La primera hora no tiene que ser una carrera hacia lo profundo. Estabiliza, escanea, arma una vuelta corta y avanza solo con un motivo claro.',
    quickLabel: 'Respuesta rápida',
    quickAnswer:
      'En los primeros 60 minutos, quédate cerca del Lifepod, fabrica herramientas iniciales, escanea antes de lootear, usa Copper para baterías y Scanner, busca Silver para O2 y no construyas una base grande hasta probar que la ruta sirve.',
    contentsLabel: 'Contenido',
    routeTitle: 'Ruta de la primera hora',
    routeSteps: [
      {
        title: '0-10 min: estabilizar',
        body: 'Aprende la zona segura cerca del Lifepod, toma materiales comunes y vuelve antes de que el oxígeno sea pánico.',
      },
      {
        title: '10-25 min: herramientas',
        body: 'Copper lleva a baterías y Scanner. Sin Scanner, un fragmento útil se vuelve segundo viaje.',
      },
      {
        title: '25-45 min: margen de O2',
        body: 'Air Bladders y oxígeno del entorno ayudan, luego apunta al Standard Air Tank. Silver suele bloquear.',
      },
      {
        title: '45-60 min: loop repetible',
        body: 'Elige una vuelta corta para Copper, Silver, scans o base. Estable gana a dramático.',
      },
    ],
    visualTitle: 'Flujo de la primera hora',
    visualItems: [
      {
        label: 'Inicio',
        value: 'Cerca',
        note: 'Aprende referencias antes de buscar profundidad.',
      },
      {
        label: 'Medio',
        value: 'Scan + O2',
        note: 'Planos y oxígeno crean progreso real.',
      },
      {
        label: 'Final',
        value: 'Repetir',
        note: 'Una ruta repetible vale más que cinco vueltas confusas.',
      },
    ],
    tableTitle: 'Prioridades iniciales',
    tableHeaders: ['Prioridad', 'Por qué importa'],
    tableRows: [
      ['Oxígeno', 'Más O2 convierte cuevas en planificación.'],
      ['Scanner', 'Los planos valen más que loot aleatorio.'],
      ['Copper', 'Baterías y electrónica empiezan aquí.'],
      ['Silver', 'La primera mejora grande de O2 suele pedirlo.'],
      ['Almacenamiento', 'Un stock ordenado reduce viajes inútiles.'],
    ],
    cautionTitle: 'No saltes lo básico',
    cautionBody:
      'Si no conoces el regreso, tienes poco O2 y no escaneaste fragmentos cercanos, ir más lejos probablemente no es progreso.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '¿Qué hacer primero en Subnautica 2?',
        body: 'Quédate cerca del Lifepod, reúne materiales comunes, fabrica herramientas, escanea y crea una ruta corta.',
      },
      {
        title: '¿Cuándo hacer la primera base?',
        body: 'Después de encontrar una ruta que vas a repetir. Pequeña y útil gana a grande y mal ubicada.',
      },
      {
        title: '¿Co-op es bueno para principiantes?',
        body: 'Sí, si hay reglas de almacenamiento y nombres de rutas. Sin eso, los materiales se pierden entre inventarios.',
      },
    ],
    readNextTitle: 'Leer después',
    related: [
      { href: Routes.Subnautica2Copper, label: 'Dónde encontrar Copper' },
      { href: Routes.Subnautica2Silver, label: 'Dónde encontrar Silver' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank y O2' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
    ],
    sourcesTitle: 'Fuentes',
    sourceBody:
      'Verificado el 23 de mayo de 2026 con Steam Early Access y consejos iniciales actuales. Recetas y balance pueden cambiar.',
    cardKicker: 'Starter route card',
    cardBody:
      'Primera hora con pocos spoilers: herramientas, O2, scans y rutas de recurso.',
    cardTypeLabel: 'Tipo',
    cardTypeValue: 'Ruta inicial',
    cardVerifiedLabel: 'Verificado',
    cardStatusLabel: 'Estado',
    cardStatusValue: 'Early Access',
  },
  ko: {
    metadata: {
      title: 'Subnautica 2 초보자 루트 - 첫 60분 공략',
      description:
        'Subnautica 2 초보자 한국어 루트입니다. 첫 60분 동안 Copper, Silver, Scanner, 산소, 보관, 흔한 실수를 정리합니다.',
    },
    eyebrow: 'Subnautica 2 첫 60분',
    title: 'Subnautica 2 초보자 루트: 첫 60분',
    description:
      '첫 한 시간은 깊은 곳으로 무작정 가는 시간이 아닙니다. 안정화, 도구, 스캔, 짧은 자원 루트를 먼저 만드세요.',
    quickLabel: '빠른 답',
    quickAnswer:
      '첫 60분은 Lifepod 근처에 머물고, 초반 도구를 만들고, 루팅보다 스캔을 먼저 하세요. Copper는 배터리와 Scanner, Silver는 O2 업그레이드에 필요합니다. 반복할 루트를 찾기 전에는 큰 기지를 짓지 않는 편이 좋습니다.',
    contentsLabel: '목차',
    routeTitle: '첫 한 시간 루트',
    routeSteps: [
      {
        title: '0-10분: 안정화',
        body: 'Lifepod 주변 안전 구역을 익히고, 기본 재료를 모은 뒤 산소가 위험해지기 전에 돌아오세요.',
      },
      {
        title: '10-25분: 도구 루프',
        body: 'Copper는 배터리와 Scanner로 이어집니다. Scanner 없이 나가면 좋은 조각을 보고도 다시 와야 합니다.',
      },
      {
        title: '25-45분: O2 여유 만들기',
        body: 'Air Bladders와 환경 산소를 쓰고 Standard Air Tank를 노리세요. 보통 Silver가 병목입니다.',
      },
      {
        title: '45-60분: 반복 루트 선택',
        body: 'Copper, Silver, 스캔, 기지 재료 중 하나를 위한 짧은 루트를 정하세요.',
      },
    ],
    visualTitle: '첫 한 시간 흐름',
    visualItems: [
      {
        label: '시작',
        value: '가까이',
        note: '깊은 곳보다 먼저 지형을 익힙니다.',
      },
      {
        label: '중간',
        value: '스캔 + O2',
        note: '설계도와 산소가 진짜 진행입니다.',
      },
      {
        label: '끝',
        value: '반복',
        note: '반복 가능한 루트 하나가 가장 강합니다.',
      },
    ],
    tableTitle: '초반 우선순위',
    tableHeaders: ['우선순위', '중요한 이유'],
    tableRows: [
      ['산소', 'O2가 늘면 동굴이 패닉이 아니라 계획이 됩니다.'],
      ['Scanner', '무작위 루팅보다 설계도 진행이 중요합니다.'],
      ['Copper', '배터리와 초반 전자 제작의 시작입니다.'],
      ['Silver', '첫 큰 O2 업그레이드가 자주 기다립니다.'],
      ['보관함', '정리된 재고는 불필요한 왕복을 줄입니다.'],
    ],
    cautionTitle: '기본을 건너뛰지 마세요',
    cautionBody:
      '돌아오는 길을 모르고, 산소가 부족하고, 근처 조각도 스캔하지 않았다면 더 멀리 가는 것은 진행이 아닐 때가 많습니다.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2에서 처음 뭘 해야 하나요?',
        body: 'Lifepod 근처에서 기본 재료를 모으고, 도구를 만들고, 스캔하고, 짧은 자원 루트를 만드세요.',
      },
      {
        title: '첫 기지는 언제 짓나요?',
        body: '반복할 루트를 찾은 뒤 작게 지으세요. 큰 기지보다 쓸모 있는 전초기지가 낫습니다.',
      },
      {
        title: '초보자에게 협동이 좋나요?',
        body: '보관 규칙과 루트 이름이 있으면 좋습니다. 없으면 재료가 각자 인벤토리에 흩어집니다.',
      },
    ],
    readNextTitle: '다음 글',
    related: [
      { href: Routes.Subnautica2Copper, label: 'Copper 위치' },
      { href: Routes.Subnautica2Silver, label: 'Silver 위치' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank와 O2' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner 공략' },
    ],
    sourcesTitle: '출처 메모',
    sourceBody:
      '2026년 5월 23일 Steam Early Access와 현재 초반 팁을 기준으로 확인했습니다. 레시피와 밸런스는 바뀔 수 있습니다.',
    cardKicker: 'Starter route card',
    cardBody: '스포일러를 줄인 첫 한 시간: 도구, O2, 스캔, 자원 루트.',
    cardTypeLabel: '유형',
    cardTypeValue: '초보자 루트',
    cardVerifiedLabel: '확인',
    cardStatusLabel: '상태',
    cardStatusValue: 'Early Access',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 初心者ルート - 最初の60分ガイド',
      description:
        'Subnautica 2 初心者向け日本語ルート。最初の60分で Copper、Silver、Scanner、酸素、保管、よくある失敗を整理します。',
    },
    eyebrow: 'Subnautica 2 最初の60分',
    title: 'Subnautica 2 初心者ルート：最初の60分',
    description:
      '最初の1時間は深く潜る勝負ではありません。安定、道具、スキャン、短い資源ルートを先に作る時間です。',
    quickLabel: '要点',
    quickAnswer:
      '最初の60分は Lifepod 近くに留まり、序盤道具を作り、拾う前にスキャンします。Copper は Battery と Scanner、Silver は O2 強化に必要です。繰り返す価値のあるルートを見つける前に大きな基地を作らないほうが安全です。',
    contentsLabel: '目次',
    routeTitle: '最初の1時間ルート',
    routeSteps: [
      {
        title: '0-10分：安定する',
        body: 'Lifepod 周辺の安全地帯を覚え、基本素材を集め、酸素が危険になる前に戻ります。',
      },
      {
        title: '10-25分：道具ループ',
        body: 'Copper は Battery と Scanner につながります。Scanner なしだと有用な破片を見つけても再訪問になります。',
      },
      {
        title: '25-45分：O2 の余裕を作る',
        body: 'Air Bladders と環境酸素を使い、Standard Air Tank を目指します。詰まりやすいのは Silver です。',
      },
      {
        title: '45-60分：反復ルートを選ぶ',
        body: 'Copper、Silver、スキャン、基地素材のどれかに絞った短いルートを作ります。',
      },
    ],
    visualTitle: '最初の1時間フロー',
    visualItems: [
      { label: '開始', value: '近く', note: '深さより先に目印を覚える。' },
      {
        label: '中盤',
        value: 'Scan + O2',
        note: '設計図と酸素が本当の進行です。',
      },
      {
        label: '終盤',
        value: '反復',
        note: '繰り返せる1本のルートが強いです。',
      },
    ],
    tableTitle: '序盤の優先度',
    tableHeaders: ['優先度', '重要な理由'],
    tableRows: [
      ['酸素', 'O2 が増えると洞窟探索が計画になります。'],
      ['Scanner', 'ランダムな素材より設計図進行が重要です。'],
      ['Copper', 'Battery と序盤電子クラフトの起点です。'],
      ['Silver', '最初の大きな O2 強化で必要になりがちです。'],
      ['保管', '整理された素材は無駄な往復を減らします。'],
    ],
    cautionTitle: '基本を飛ばさない',
    cautionBody:
      '帰り道が分からず、酸素も少なく、近くの破片も未スキャンなら、遠くへ行くことは進行ではない場合が多いです。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 で最初に何をする？',
        body: 'Lifepod 近くで基本素材を集め、道具を作り、スキャンし、短い資源ルートを作ります。',
      },
      {
        title: '最初の基地はいつ作る？',
        body: '繰り返すルートを見つけた後に小さく作ります。大きい基地より役に立つ前哨地が大事です。',
      },
      {
        title: '初心者に協力プレイは向いている？',
        body: '保管ルールとルート名があれば向いています。ないと重要素材が各自のインベントリに散らばります。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2Copper, label: 'Copper の場所' },
      { href: Routes.Subnautica2Silver, label: 'Silver の場所' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank と O2' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner 攻略' },
    ],
    sourcesTitle: '出典メモ',
    sourceBody:
      '2026年5月23日に Steam Early Access と現在の初心者向け記事を確認。レシピとバランスは変わる可能性があります。',
    cardKicker: 'Starter route card',
    cardBody: 'ネタバレ少なめの最初の1時間：道具、O2、スキャン、資源ルート。',
    cardTypeLabel: '種類',
    cardTypeValue: '初心者ルート',
    cardVerifiedLabel: '確認',
    cardStatusLabel: '状態',
    cardStatusValue: 'Early Access',
  },
};

function getCopy(locale: Locale): BeginnerCopy {
  return beginnerCopy[locale] ?? beginnerCopy.en;
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
    pathname: Routes.Subnautica2Beginner,
  });
}

export default async function BeginnerGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <LocalizedResourceGuidePage
      copy={copy}
      icon={CompassIcon}
      locale={locale}
      pathname={Routes.Subnautica2Beginner}
      sources={sharedSources}
    />
  );
}
