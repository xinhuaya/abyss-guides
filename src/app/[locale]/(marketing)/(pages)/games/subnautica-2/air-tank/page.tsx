import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { GaugeIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type AirTankCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const sharedSources = [
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-o2-oxygen-air-tank/',
    label: 'PC Gamer O2 guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-tips/',
    label: 'PC Gamer beginner tips',
  },
];

const airTankCopy: Record<string, AirTankCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Air Tank and O2 Guide - Increase Oxygen Early',
      description:
        'Increase oxygen in Subnautica 2 with Air Bladders, Oxygen Tunics, Bloom Sap funnels, Oxygen Control, and the Standard Air Tank route.',
    },
    eyebrow: 'Subnautica 2 oxygen route',
    title: 'Subnautica 2 Air Tank and O2 Guide',
    description:
      'Oxygen is the first real timer in Subnautica 2. Before you force a deeper cave, build a safer loop: temporary oxygen first, tools second, permanent tank upgrade after you have the materials.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Use environmental oxygen first: Oxygen Tunics, Bloom Sap funnels once cleared, and cave air pockets can stretch early dives. Carry Air Bladders for panic returns, unlock Oxygen Control when you can, then craft the Standard Air Tank once you can spare Silver, Titanium, and Rubber.',
    contentsLabel: 'Contents',
    routeTitle: 'Early O2 route',
    routeSteps: [
      {
        title: 'Use free oxygen before crafting',
        body: 'Do not treat every short dive as a gear problem. Oxygen Tunics, Bloom Sap funnels, and cave air pockets can keep a route alive while you are still poor on materials.',
      },
      {
        title: 'Carry Air Bladders',
        body: 'Air Bladders are still worth carrying after you know the area. They buy time, help with fast returns, and forgive one bad turn in a cave.',
      },
      {
        title: 'Craft the Standard Air Tank',
        body: 'The first permanent O2 upgrade is the point where caves stop feeling like a coin flip. Silver is usually the annoying part, so pair this page with the Silver route.',
      },
      {
        title: 'Unlock Oxygen Control',
        body: 'Oxygen Control is useful when you scan, inspect wreckage, or hover around a point of interest. It is not flashy, but it removes pressure from slow tasks.',
      },
    ],
    visualTitle: 'O2 planning card',
    visualItems: [
      {
        label: 'Step 01',
        value: 'Borrow air',
        note: 'Use tunics, funnels, and pockets to finish short dives before upgrades.',
      },
      {
        label: 'Step 02',
        value: 'Carry backup',
        note: 'Air Bladders turn a bad cave turn into a recoverable mistake.',
      },
      {
        label: 'Step 03',
        value: 'Upgrade tank',
        note: 'Spend Silver on the Standard Air Tank once the route starts pushing deeper.',
      },
    ],
    tableTitle: 'Oxygen options',
    tableHeaders: ['O2 method', 'Best use'],
    tableRows: [
      [
        'Oxygen Tunics',
        'Emergency oxygen while you are still learning the nearby biomes.',
      ],
      [
        'Bloom Sap funnels',
        'Route extender after clearing the blockage around them.',
      ],
      [
        'Cave air pockets',
        'Useful midpoint resets when you are mapping a cave loop.',
      ],
      [
        'Air Bladders',
        'Portable oxygen and a faster return toward the surface.',
      ],
      ['Standard Air Tank', 'First major permanent oxygen upgrade.'],
      ['Oxygen Control', 'Best when scanning or staying still underwater.'],
    ],
    cautionTitle: 'Oxygen is progression',
    cautionBody:
      'If a route feels impossible, the answer is usually not bravery. It is more oxygen, better landmarks, a shorter loop, or one Air Bladder you forgot to pack.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you increase oxygen early in Subnautica 2?',
        body: 'Use environmental oxygen, carry Air Bladders, unlock Oxygen Control, and craft the Standard Air Tank when you have Silver, Titanium, and Rubber.',
      },
      {
        title: 'What blocks the first Air Tank upgrade?',
        body: 'Silver is the early bottleneck for many players. Get a repeatable Silver route before trying to brute-force deeper caves.',
      },
      {
        title: 'Are Air Bladders still useful after a tank upgrade?',
        body: 'Yes. A bigger tank helps, but an Air Bladder can still save a bad return path or a greedy scan.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2BasicFins, label: 'Basic Fins Guide' },
      { href: Routes.Subnautica2ImprovedFins, label: 'Improved Fins Guide' },
      { href: Routes.Subnautica2Rubber, label: 'Rubber Recipe Guide' },
      { href: Routes.Subnautica2OxygenDepth, label: 'Oxygen and Depth' },
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather Guide' },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker Guide' },
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2Copper, label: 'Copper Location' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Lithium, label: 'Lithium Location Guide' },
      { href: Routes.Subnautica2Beginner, label: 'Beginner Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 23, 2026 against current O2 and beginner-route reporting. Early Access recipes and utility values can change.',
    cardKicker: 'O2 route card',
    cardBody:
      'Temporary oxygen, backup tools, tank upgrade timing, and safer cave loops.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Survival guide',
    cardVerifiedLabel: 'Verified',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 气瓶和氧气攻略 - 前期怎么提高 O2',
      description:
        'Subnautica 2 气瓶和氧气中文攻略，整理 Air Bladder、Oxygen Tunic、Bloom Sap funnel、Oxygen Control 和 Standard Air Tank 路线。',
    },
    eyebrow: 'Subnautica 2 氧气路线',
    title: 'Subnautica 2 气瓶和氧气攻略',
    description:
      '氧气是前期最真实的倒计时。别一上来就硬钻深洞，先把临时氧气、保命工具和气瓶升级顺序理清楚。',
    quickLabel: '快速答案',
    quickAnswer:
      '前期先利用环境氧气：Oxygen Tunic、清理后的 Bloom Sap funnel、洞穴里的空气口都能帮你多撑一段。背包带 Air Bladder 保命，能解锁 Oxygen Control 就先解锁；等银、钛和橡胶够了，再做 Standard Air Tank。',
    contentsLabel: '目录',
    routeTitle: '前期 O2 路线',
    routeSteps: [
      {
        title: '先用免费氧气',
        body: '每次憋不住气，不一定都是装备问题。Oxygen Tunic、Bloom Sap funnel 和洞穴空气口，能让短路线先跑起来。',
      },
      {
        title: '带 Air Bladder',
        body: 'Air Bladder 不只是新手拐杖。洞里多转错一个角，它就是你回家的那口气。',
      },
      {
        title: '尽早做 Standard Air Tank',
        body: '第一次永久氧气升级，会让洞穴探索从拼命变成可控。卡点通常是银，所以建议和 Silver 路线一起看。',
      },
      {
        title: '解锁 Oxygen Control',
        body: '扫描、看残骸、停在兴趣点附近时，Oxygen Control 很实用。它不显眼，但能少掉很多氧气压力。',
      },
    ],
    visualTitle: '氧气路线卡',
    visualItems: [
      {
        label: '步骤 01',
        value: '借氧',
        note: '先用 tunic、funnel 和空气口跑短路线。',
      },
      {
        label: '步骤 02',
        value: '备份',
        note: 'Air Bladder 可以救一次洞穴里的错误判断。',
      },
      {
        label: '步骤 03',
        value: '升级',
        note: '路线开始变深时，把银投进 Standard Air Tank。',
      },
    ],
    tableTitle: '氧气手段对比',
    tableHeaders: ['方法', '适合场景'],
    tableRows: [
      ['Oxygen Tunic', '前期探索附近生态区时的应急氧气。'],
      ['Bloom Sap funnel', '清理堵塞后，用来延长路线。'],
      ['洞穴空气口', '摸洞穴路线时，中途重置氧气压力。'],
      ['Air Bladder', '随身氧气和快速回到水面的安全线。'],
      ['Standard Air Tank', '第一件重要的永久氧气升级。'],
      ['Oxygen Control', '扫描或水下停留时最舒服。'],
    ],
    cautionTitle: '氧气就是进度',
    cautionBody:
      '如果一条路线怎么跑都很极限，答案通常不是更勇，而是更多氧气、更清楚的地标、更短的循环，或者背包里少带了一个 Air Bladder。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 前期怎么提高氧气？',
        body: '先用环境氧气和 Air Bladder，解锁 Oxygen Control，材料够了以后做 Standard Air Tank。',
      },
      {
        title: '第一件气瓶升级通常卡什么？',
        body: '很多玩家会卡银。先做一条稳定 Silver 路线，再去硬跑更深的洞。',
      },
      {
        title: '做了气瓶以后 Air Bladder 还有用吗？',
        body: '有用。气瓶让你撑更久，Air Bladder 能救贪扫描或回程判断失误。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2BasicFins, label: 'Basic Fins 指南' },
      { href: Routes.Subnautica2Rubber, label: 'Rubber 配方指南' },
      { href: Routes.Subnautica2Silver, label: '银位置' },
      { href: Routes.Subnautica2Copper, label: '铜位置' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Lithium, label: 'Lithium 位置指南' },
      { href: Routes.Subnautica2Beginner, label: '新手指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 23 日核对当前 O2 和新手路线报道。抢先体验阶段的配方和道具效果可能变化。',
    cardKicker: 'O2 路线卡',
    cardBody: '临时氧气、保命工具、气瓶升级时机，以及更安全的洞穴循环。',
    cardTypeLabel: '类型',
    cardTypeValue: '生存攻略',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
  ru: {
    metadata: {
      title: 'Subnautica 2 Air Tank и O2 - как увеличить кислород',
      description:
        'Русский гайд по кислороду в Subnautica 2: Air Bladders, Oxygen Tunics, Bloom Sap funnels, Oxygen Control и Standard Air Tank.',
    },
    eyebrow: 'Маршрут кислорода Subnautica 2',
    title: 'Subnautica 2 Air Tank и O2',
    description:
      'Кислород в начале игры это честный таймер. Не лезьте глубже через силу: сначала временный воздух, запасной план и только потом апгрейд баллона.',
    quickLabel: 'Короткий ответ',
    quickAnswer:
      'Сначала используйте кислород из окружения: Oxygen Tunics, Bloom Sap funnels после очистки и воздушные карманы в пещерах. Носите Air Bladders, откройте Oxygen Control и сделайте Standard Air Tank, когда есть Silver, Titanium и Rubber.',
    contentsLabel: 'Содержание',
    routeTitle: 'Ранний O2 маршрут',
    routeSteps: [
      {
        title: 'Используйте бесплатный воздух',
        body: 'Короткий заплыв не всегда требует нового снаряжения. Tunics, funnels и воздушные карманы дают закончить маршрут без риска.',
      },
      {
        title: 'Берите Air Bladders',
        body: 'Air Bladder спасает, когда вы свернули не туда или задержались на скане. Это не роскошь, а страховка.',
      },
      {
        title: 'Сделайте Standard Air Tank',
        body: 'Первый постоянный апгрейд кислорода резко успокаивает пещеры. Обычно мешает Silver, поэтому держите рядом маршрут за серебром.',
      },
      {
        title: 'Откройте Oxygen Control',
        body: 'Oxygen Control полезен при сканировании и медленном осмотре точек интереса. Он просто снимает давление таймера.',
      },
    ],
    visualTitle: 'Карточка O2 маршрута',
    visualItems: [
      {
        label: 'Шаг 01',
        value: 'Занять воздух',
        note: 'Tunics, funnels и карманы помогают закрыть короткие заплывы.',
      },
      {
        label: 'Шаг 02',
        value: 'Взять запас',
        note: 'Air Bladder превращает плохой поворот в исправимую ошибку.',
      },
      {
        label: 'Шаг 03',
        value: 'Апгрейд',
        note: 'Standard Air Tank нужен, когда маршрут уходит глубже.',
      },
    ],
    tableTitle: 'Варианты кислорода',
    tableHeaders: ['Метод', 'Лучшее применение'],
    tableRows: [
      ['Oxygen Tunics', 'Экстренный воздух в первых биомах.'],
      ['Bloom Sap funnels', 'Продление маршрута после очистки блокировки.'],
      ['Воздушные карманы', 'Средняя точка отдыха в пещерном круге.'],
      ['Air Bladders', 'Переносной воздух и быстрый возврат к поверхности.'],
      ['Standard Air Tank', 'Первый важный постоянный апгрейд O2.'],
      ['Oxygen Control', 'Сканирование и спокойный осмотр под водой.'],
    ],
    cautionTitle: 'Кислород это прогресс',
    cautionBody:
      'Если маршрут кажется невозможным, чаще всего нужен не героизм, а больше воздуха, понятные ориентиры, короткий круг или Air Bladder в инвентаре.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Как увеличить кислород в начале Subnautica 2?',
        body: 'Используйте кислород окружения, носите Air Bladders, откройте Oxygen Control и сделайте Standard Air Tank.',
      },
      {
        title: 'Что мешает первому апгрейду Air Tank?',
        body: 'Чаще всего Silver. Сначала сделайте повторяемый маршрут за серебром.',
      },
      {
        title: 'Air Bladders нужны после апгрейда баллона?',
        body: 'Да. Большой баллон помогает, но Air Bladder все еще спасает плохой возврат или жадный скан.',
      },
    ],
    readNextTitle: 'Дальше',
    related: [
      { href: Routes.Subnautica2Silver, label: 'Где найти Silver' },
      { href: Routes.Subnautica2Copper, label: 'Где найти Copper' },
      { href: Routes.Subnautica2Resources, label: 'Ресурсы' },
      { href: Routes.Subnautica2Lithium, label: 'Lithium Location Guide' },
      { href: Routes.Subnautica2Beginner, label: 'Гайд новичка' },
    ],
    sourcesTitle: 'Источники',
    sourceBody:
      'Проверено 23 мая 2026 по текущим O2 и beginner-route материалам. Рецепты и полезность предметов могут меняться в Early Access.',
    cardKicker: 'O2 route card',
    cardBody:
      'Временный воздух, запасные инструменты, апгрейд баллона и безопасные пещерные круги.',
    cardTypeLabel: 'Тип',
    cardTypeValue: 'Гайд выживания',
    cardVerifiedLabel: 'Проверено',
    cardStatusLabel: 'Статус',
    cardStatusValue: 'Early Access',
  },
  de: {
    metadata: {
      title: 'Subnautica 2 Air Tank und O2 - Sauerstoff früh erhöhen',
      description:
        'Deutscher Guide zu Sauerstoff in Subnautica 2: Air Bladders, Oxygen Tunics, Bloom Sap funnels, Oxygen Control und Standard Air Tank.',
    },
    eyebrow: 'Subnautica 2 Sauerstoffroute',
    title: 'Subnautica 2 Air Tank und O2 Guide',
    description:
      'Sauerstoff ist der erste harte Timer. Bevor du eine tiefere Höhle erzwingst, bau eine sichere Runde: erst temporäre Luft, dann Backup, dann Tank-Upgrade.',
    quickLabel: 'Kurzantwort',
    quickAnswer:
      'Nutze zuerst Sauerstoff aus der Umgebung: Oxygen Tunics, freigeräumte Bloom Sap funnels und Lufttaschen in Höhlen. Nimm Air Bladders mit, schalte Oxygen Control frei und baue den Standard Air Tank, sobald Silver, Titanium und Rubber reichen.',
    contentsLabel: 'Inhalt',
    routeTitle: 'Frühe O2-Route',
    routeSteps: [
      {
        title: 'Kostenlose Luft zuerst',
        body: 'Nicht jeder kurze Tauchgang braucht sofort neues Gear. Tunics, funnels und Lufttaschen halten kleine Routen am Leben.',
      },
      {
        title: 'Air Bladders mitnehmen',
        body: 'Ein Air Bladder verzeiht den falschen Abzweig in der Höhle. Auch später bleibt er als Notfallplan nützlich.',
      },
      {
        title: 'Standard Air Tank bauen',
        body: 'Das erste permanente O2-Upgrade macht Höhlen deutlich ruhiger. Der nervige Teil ist meist Silver.',
      },
      {
        title: 'Oxygen Control freischalten',
        body: 'Oxygen Control hilft beim Scannen und beim langsamen Prüfen von Orten. Es nimmt Druck aus stillen Aufgaben.',
      },
    ],
    visualTitle: 'O2-Planungskarte',
    visualItems: [
      {
        label: 'Schritt 01',
        value: 'Luft leihen',
        note: 'Tunics, funnels und Lufttaschen reichen für kurze Runden.',
      },
      {
        label: 'Schritt 02',
        value: 'Backup tragen',
        note: 'Air Bladders retten schlechte Rückwege.',
      },
      {
        label: 'Schritt 03',
        value: 'Tank bauen',
        note: 'Silver in den Standard Air Tank stecken, sobald Routen tiefer werden.',
      },
    ],
    tableTitle: 'Sauerstoff-Optionen',
    tableHeaders: ['O2-Methode', 'Bester Einsatz'],
    tableRows: [
      ['Oxygen Tunics', 'Notfallluft in frühen Biomen.'],
      ['Bloom Sap funnels', 'Routenverlängerung nach dem Freiräumen.'],
      ['Lufttaschen', 'Zwischenstopp beim Kartieren einer Höhle.'],
      ['Air Bladders', 'Tragbare Luft und schneller Weg Richtung Oberfläche.'],
      ['Standard Air Tank', 'Erstes großes permanentes O2-Upgrade.'],
      ['Oxygen Control', 'Scannen oder stilles Arbeiten unter Wasser.'],
    ],
    cautionTitle: 'Sauerstoff ist Fortschritt',
    cautionBody:
      'Wenn eine Route unmöglich wirkt, brauchst du meistens nicht mehr Mut. Du brauchst mehr Luft, bessere Orientierung, eine kürzere Runde oder ein Air Bladder.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Wie erhöhe ich Sauerstoff früh in Subnautica 2?',
        body: 'Nutze Umgebungssauerstoff, nimm Air Bladders mit, schalte Oxygen Control frei und baue den Standard Air Tank.',
      },
      {
        title: 'Was blockiert das erste Air-Tank-Upgrade?',
        body: 'Für viele Spieler ist es Silver. Eine feste Silver-Route löst das Problem schneller als riskante Tiefenläufe.',
      },
      {
        title: 'Sind Air Bladders nach dem Tank-Upgrade noch nützlich?',
        body: 'Ja. Der Tank gibt Zeit, aber ein Air Bladder rettet schlechte Rückwege und zu gierige Scans.',
      },
    ],
    readNextTitle: 'Weiterlesen',
    related: [
      { href: Routes.Subnautica2Silver, label: 'Silver finden' },
      { href: Routes.Subnautica2Copper, label: 'Copper finden' },
      { href: Routes.Subnautica2Resources, label: 'Ressourcen' },
      { href: Routes.Subnautica2Lithium, label: 'Lithium Location Guide' },
      { href: Routes.Subnautica2Beginner, label: 'Anfänger-Guide' },
    ],
    sourcesTitle: 'Quellenhinweis',
    sourceBody:
      'Geprüft am 23. Mai 2026 mit aktuellen O2- und Beginner-Routen. Rezepte und Item-Nutzen können sich in Early Access ändern.',
    cardKicker: 'O2 route card',
    cardBody:
      'Temporäre Luft, Backup-Werkzeuge, Tank-Timing und sichere Höhlenrunden.',
    cardTypeLabel: 'Typ',
    cardTypeValue: 'Survival-Guide',
    cardVerifiedLabel: 'Geprüft',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  fr: {
    metadata: {
      title: 'Subnautica 2 Air Tank et O2 - augmenter l’oxygène tôt',
      description:
        'Guide français O2 pour Subnautica 2 : Air Bladders, Oxygen Tunics, Bloom Sap funnels, Oxygen Control et Standard Air Tank.',
    },
    eyebrow: 'Route oxygène Subnautica 2',
    title: 'Subnautica 2 Air Tank et O2',
    description:
      'L’oxygène est le premier vrai chrono du jeu. Avant de forcer une grotte, sécurisez la boucle: oxygène temporaire, secours, puis upgrade du tank.',
    quickLabel: 'Réponse rapide',
    quickAnswer:
      'Utilisez d’abord l’oxygène de l’environnement: Oxygen Tunics, Bloom Sap funnels dégagés et poches d’air en grotte. Gardez des Air Bladders, débloquez Oxygen Control, puis fabriquez le Standard Air Tank quand vous avez Silver, Titanium et Rubber.',
    contentsLabel: 'Sommaire',
    routeTitle: 'Route O2 de début',
    routeSteps: [
      {
        title: 'Prenez l’air gratuit',
        body: 'Un petit trajet n’exige pas toujours un nouvel équipement. Tunics, funnels et poches d’air suffisent souvent à finir la boucle.',
      },
      {
        title: 'Emportez des Air Bladders',
        body: 'Un Air Bladder pardonne un mauvais virage en grotte. Même après un tank, c’est une bonne assurance.',
      },
      {
        title: 'Fabriquez le Standard Air Tank',
        body: 'Le premier upgrade permanent rend les grottes beaucoup moins nerveuses. Le blocage vient souvent de Silver.',
      },
      {
        title: 'Débloquez Oxygen Control',
        body: 'Oxygen Control aide quand vous scannez ou inspectez lentement un lieu sous l’eau.',
      },
    ],
    visualTitle: 'Carte de route O2',
    visualItems: [
      {
        label: 'Étape 01',
        value: 'Air gratuit',
        note: 'Tunics, funnels et poches d’air tiennent les petites routes.',
      },
      {
        label: 'Étape 02',
        value: 'Secours',
        note: 'Air Bladder rattrape un mauvais retour.',
      },
      {
        label: 'Étape 03',
        value: 'Tank',
        note: 'Investissez Silver dans le Standard Air Tank quand les routes s’allongent.',
      },
    ],
    tableTitle: 'Options d’oxygène',
    tableHeaders: ['Méthode O2', 'Meilleur usage'],
    tableRows: [
      ['Oxygen Tunics', 'Oxygène d’urgence dans les premiers biomes.'],
      [
        'Bloom Sap funnels',
        'Prolonger une route après avoir retiré le blocage.',
      ],
      ['Poches d’air', 'Pause au milieu d’une boucle de grotte.'],
      [
        'Air Bladders',
        'Oxygène portable et retour plus rapide vers la surface.',
      ],
      ['Standard Air Tank', 'Premier gros upgrade O2 permanent.'],
      ['Oxygen Control', 'Scanner ou rester immobile sous l’eau.'],
    ],
    cautionTitle: 'L’oxygène, c’est la progression',
    cautionBody:
      'Si une route semble impossible, la réponse n’est pas de serrer les dents. Il faut plus d’air, de meilleurs repères, une boucle plus courte ou un Air Bladder.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Comment augmenter l’oxygène tôt dans Subnautica 2 ?',
        body: 'Utilisez l’oxygène de l’environnement, gardez des Air Bladders, débloquez Oxygen Control et fabriquez le Standard Air Tank.',
      },
      {
        title: 'Qu’est-ce qui bloque le premier Air Tank ?',
        body: 'Souvent Silver. Une route Silver répétable aide plus qu’une plongée trop profonde.',
      },
      {
        title: 'Les Air Bladders restent utiles après le tank ?',
        body: 'Oui. Le tank donne du temps; Air Bladder sauve un retour raté ou un scan trop gourmand.',
      },
    ],
    readNextTitle: 'À lire ensuite',
    related: [
      { href: Routes.Subnautica2Silver, label: 'Trouver Silver' },
      { href: Routes.Subnautica2Copper, label: 'Trouver Copper' },
      { href: Routes.Subnautica2Resources, label: 'Ressources' },
      { href: Routes.Subnautica2Lithium, label: 'Lithium Location Guide' },
      { href: Routes.Subnautica2Beginner, label: 'Guide débutant' },
    ],
    sourcesTitle: 'Sources',
    sourceBody:
      'Vérifié le 23 mai 2026 avec les routes O2 et débutant actuelles. Recettes et utilité des objets peuvent changer en Early Access.',
    cardKicker: 'O2 route card',
    cardBody:
      'Oxygène temporaire, secours, timing du tank et boucles de grotte plus sûres.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Guide survie',
    cardVerifiedLabel: 'Vérifié',
    cardStatusLabel: 'Statut',
    cardStatusValue: 'Early Access',
  },
  'pt-BR': {
    metadata: {
      title: 'Subnautica 2 Air Tank e O2 - aumentar oxigênio no começo',
      description:
        'Guia em português do Brasil para O2 em Subnautica 2: Air Bladders, Oxygen Tunics, Bloom Sap funnels, Oxygen Control e Standard Air Tank.',
    },
    eyebrow: 'Rota de oxigênio de Subnautica 2',
    title: 'Subnautica 2 Air Tank e O2',
    description:
      'Oxigênio é o primeiro cronômetro real. Antes de forçar uma caverna, monte uma rota segura: ar temporário, ferramenta reserva e depois upgrade do tanque.',
    quickLabel: 'Resposta rápida',
    quickAnswer:
      'Use primeiro o oxigênio do ambiente: Oxygen Tunics, Bloom Sap funnels depois de liberar o bloqueio e bolsões de ar em cavernas. Leve Air Bladders, desbloqueie Oxygen Control e faça o Standard Air Tank quando tiver Silver, Titanium e Rubber.',
    contentsLabel: 'Conteúdo',
    routeTitle: 'Rota inicial de O2',
    routeSteps: [
      {
        title: 'Use ar grátis primeiro',
        body: 'Nem todo mergulho curto exige equipamento novo. Tunics, funnels e bolsões de ar seguram rotas pequenas no começo.',
      },
      {
        title: 'Leve Air Bladders',
        body: 'Air Bladder salva quando você entra errado numa caverna ou fica tempo demais escaneando.',
      },
      {
        title: 'Faça o Standard Air Tank',
        body: 'O primeiro upgrade permanente deixa as cavernas menos tensas. O gargalo costuma ser Silver.',
      },
      {
        title: 'Desbloqueie Oxygen Control',
        body: 'Oxygen Control ajuda ao escanear ou ficar parado inspecionando algo debaixo d’água.',
      },
    ],
    visualTitle: 'Cartão de rota O2',
    visualItems: [
      {
        label: 'Passo 01',
        value: 'Ar emprestado',
        note: 'Tunics, funnels e bolsões fecham rotas curtas.',
      },
      {
        label: 'Passo 02',
        value: 'Reserva',
        note: 'Air Bladder transforma erro de rota em volta segura.',
      },
      {
        label: 'Passo 03',
        value: 'Tanque',
        note: 'Use Silver no Standard Air Tank quando a rota ficar mais funda.',
      },
    ],
    tableTitle: 'Opções de oxigênio',
    tableHeaders: ['Método O2', 'Melhor uso'],
    tableRows: [
      ['Oxygen Tunics', 'Oxigênio de emergência nos primeiros biomas.'],
      ['Bloom Sap funnels', 'Estender rota depois de liberar o bloqueio.'],
      ['Bolsões de ar', 'Ponto de respiro no meio de uma caverna.'],
      ['Air Bladders', 'Oxigênio portátil e retorno rápido à superfície.'],
      ['Standard Air Tank', 'Primeiro grande upgrade permanente de O2.'],
      ['Oxygen Control', 'Escanear ou ficar parado debaixo d’água.'],
    ],
    cautionTitle: 'Oxigênio é progresso',
    cautionBody:
      'Se uma rota parece impossível, quase nunca falta coragem. Falta ar, referência melhor, loop mais curto ou um Air Bladder na mochila.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Como aumentar oxigênio cedo em Subnautica 2?',
        body: 'Use oxigênio do ambiente, leve Air Bladders, desbloqueie Oxygen Control e faça o Standard Air Tank.',
      },
      {
        title: 'O que trava o primeiro Air Tank?',
        body: 'Geralmente Silver. Uma rota estável de Silver resolve melhor que mergulhar fundo sem preparo.',
      },
      {
        title: 'Air Bladders ainda servem depois do tanque?',
        body: 'Sim. O tanque dá tempo; Air Bladder salva retorno ruim ou scan ganancioso.',
      },
    ],
    readNextTitle: 'Leia a seguir',
    related: [
      { href: Routes.Subnautica2Silver, label: 'Onde encontrar Silver' },
      { href: Routes.Subnautica2Copper, label: 'Onde encontrar Copper' },
      { href: Routes.Subnautica2Resources, label: 'Recursos' },
      { href: Routes.Subnautica2Lithium, label: 'Lithium Location Guide' },
      { href: Routes.Subnautica2Beginner, label: 'Guia inicial' },
    ],
    sourcesTitle: 'Fontes',
    sourceBody:
      'Verificado em 23 de maio de 2026 com rotas atuais de O2 e início de jogo. Receitas e utilidade dos itens podem mudar no Early Access.',
    cardKicker: 'O2 route card',
    cardBody:
      'Ar temporário, ferramenta reserva, timing do tanque e loops de caverna mais seguros.',
    cardTypeLabel: 'Tipo',
    cardTypeValue: 'Guia de sobrevivência',
    cardVerifiedLabel: 'Verificado',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  'es-419': {
    metadata: {
      title: 'Subnautica 2 Air Tank y O2 - aumentar oxígeno al inicio',
      description:
        'Guía en español latino para O2 en Subnautica 2: Air Bladders, Oxygen Tunics, Bloom Sap funnels, Oxygen Control y Standard Air Tank.',
    },
    eyebrow: 'Ruta de oxígeno de Subnautica 2',
    title: 'Subnautica 2 Air Tank y O2',
    description:
      'El oxígeno es el primer temporizador serio. Antes de forzar una cueva, arma una ruta segura: aire temporal, respaldo y luego mejora del tanque.',
    quickLabel: 'Respuesta rápida',
    quickAnswer:
      'Usa primero oxígeno del entorno: Oxygen Tunics, Bloom Sap funnels después de quitar el bloqueo y bolsas de aire en cuevas. Lleva Air Bladders, desbloquea Oxygen Control y fabrica el Standard Air Tank cuando tengas Silver, Titanium y Rubber.',
    contentsLabel: 'Contenido',
    routeTitle: 'Ruta inicial de O2',
    routeSteps: [
      {
        title: 'Usa aire gratis primero',
        body: 'No todo buceo corto exige equipo nuevo. Tunics, funnels y bolsas de aire sostienen rutas pequeñas al inicio.',
      },
      {
        title: 'Lleva Air Bladders',
        body: 'Un Air Bladder salva un mal giro en cueva o un escaneo que se alargó demasiado.',
      },
      {
        title: 'Fabrica el Standard Air Tank',
        body: 'La primera mejora permanente hace que las cuevas dejen de sentirse tan al límite. El cuello de botella suele ser Silver.',
      },
      {
        title: 'Desbloquea Oxygen Control',
        body: 'Oxygen Control sirve cuando escaneas o te quedas quieto revisando algo bajo el agua.',
      },
    ],
    visualTitle: 'Tarjeta de ruta O2',
    visualItems: [
      {
        label: 'Paso 01',
        value: 'Aire prestado',
        note: 'Tunics, funnels y bolsas de aire cierran rutas cortas.',
      },
      {
        label: 'Paso 02',
        value: 'Respaldo',
        note: 'Air Bladder convierte un mal giro en una vuelta segura.',
      },
      {
        label: 'Paso 03',
        value: 'Tanque',
        note: 'Usa Silver en el Standard Air Tank cuando la ruta empiece a bajar.',
      },
    ],
    tableTitle: 'Opciones de oxígeno',
    tableHeaders: ['Método O2', 'Mejor uso'],
    tableRows: [
      ['Oxygen Tunics', 'Oxígeno de emergencia en biomas tempranos.'],
      ['Bloom Sap funnels', 'Extender rutas después de quitar el bloqueo.'],
      ['Bolsas de aire', 'Pausa intermedia dentro de una cueva.'],
      ['Air Bladders', 'Oxígeno portátil y regreso rápido a la superficie.'],
      ['Standard Air Tank', 'Primera gran mejora permanente de O2.'],
      ['Oxygen Control', 'Escanear o quedarse quieto bajo el agua.'],
    ],
    cautionTitle: 'Oxígeno es progreso',
    cautionBody:
      'Si una ruta parece imposible, normalmente no falta valor. Falta aire, mejores referencias, un loop más corto o un Air Bladder en la mochila.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '¿Cómo aumento oxígeno temprano en Subnautica 2?',
        body: 'Usa oxígeno del entorno, lleva Air Bladders, desbloquea Oxygen Control y fabrica el Standard Air Tank.',
      },
      {
        title: '¿Qué bloquea el primer Air Tank?',
        body: 'Normalmente Silver. Una ruta estable de Silver ayuda más que meterte profundo sin preparación.',
      },
      {
        title: '¿Air Bladders siguen sirviendo después del tanque?',
        body: 'Sí. El tanque da tiempo; Air Bladder salva un mal regreso o un escaneo demasiado ambicioso.',
      },
    ],
    readNextTitle: 'Leer después',
    related: [
      { href: Routes.Subnautica2Silver, label: 'Dónde encontrar Silver' },
      { href: Routes.Subnautica2Copper, label: 'Dónde encontrar Copper' },
      { href: Routes.Subnautica2Resources, label: 'Recursos' },
      { href: Routes.Subnautica2Lithium, label: 'Lithium Location Guide' },
      { href: Routes.Subnautica2Beginner, label: 'Guía inicial' },
    ],
    sourcesTitle: 'Fuentes',
    sourceBody:
      'Verificado el 23 de mayo de 2026 con rutas actuales de O2 y consejos iniciales. Recetas y utilidad de objetos pueden cambiar en Early Access.',
    cardKicker: 'O2 route card',
    cardBody:
      'Aire temporal, respaldo, timing del tanque y loops de cueva más seguros.',
    cardTypeLabel: 'Tipo',
    cardTypeValue: 'Guía de supervivencia',
    cardVerifiedLabel: 'Verificado',
    cardStatusLabel: 'Estado',
    cardStatusValue: 'Early Access',
  },
  ko: {
    metadata: {
      title: 'Subnautica 2 Air Tank와 O2 공략 - 초반 산소 늘리기',
      description:
        'Subnautica 2 산소 한국어 공략입니다. Air Bladders, Oxygen Tunics, Bloom Sap funnels, Oxygen Control, Standard Air Tank 루트를 정리합니다.',
    },
    eyebrow: 'Subnautica 2 산소 루트',
    title: 'Subnautica 2 Air Tank와 O2 공략',
    description:
      '산소는 초반의 진짜 제한 시간입니다. 더 깊은 동굴을 억지로 들어가기 전에 임시 산소, 비상 도구, 탱크 업그레이드 순서를 잡으세요.',
    quickLabel: '빠른 답',
    quickAnswer:
      '처음에는 환경 산소를 쓰세요. Oxygen Tunics, 막힌 곳을 뚫은 뒤의 Bloom Sap funnels, 동굴 공기 포켓이 짧은 루트를 늘려줍니다. Air Bladders를 챙기고, Oxygen Control을 열고, Silver, Titanium, Rubber가 모이면 Standard Air Tank를 만드세요.',
    contentsLabel: '목차',
    routeTitle: '초반 O2 루트',
    routeSteps: [
      {
        title: '무료 산소부터 쓰기',
        body: '짧은 잠수가 항상 장비 문제는 아닙니다. tunics, funnels, 공기 포켓으로 초반 루트를 버틸 수 있습니다.',
      },
      {
        title: 'Air Bladders 챙기기',
        body: '동굴에서 한 번 길을 잘못 들거나 스캔을 오래 했을 때 Air Bladder가 돌아갈 시간을 벌어줍니다.',
      },
      {
        title: 'Standard Air Tank 만들기',
        body: '첫 영구 산소 업그레이드는 동굴 탐사를 훨씬 안정적으로 만듭니다. 보통 Silver가 병목입니다.',
      },
      {
        title: 'Oxygen Control 열기',
        body: '스캔하거나 관심 지점에서 오래 머물 때 Oxygen Control이 부담을 줄여줍니다.',
      },
    ],
    visualTitle: 'O2 루트 카드',
    visualItems: [
      {
        label: 'Step 01',
        value: '빌린 산소',
        note: 'tunics, funnels, 공기 포켓으로 짧은 루트를 마칩니다.',
      },
      {
        label: 'Step 02',
        value: '비상 산소',
        note: 'Air Bladder는 나쁜 회수 루트를 살려줍니다.',
      },
      {
        label: 'Step 03',
        value: '탱크 업그레이드',
        note: '루트가 깊어질 때 Silver를 Standard Air Tank에 씁니다.',
      },
    ],
    tableTitle: '산소 수단',
    tableHeaders: ['방법', '좋은 사용처'],
    tableRows: [
      ['Oxygen Tunics', '초반 바이옴에서의 비상 산소.'],
      ['Bloom Sap funnels', '막힌 곳을 제거한 뒤 루트 연장.'],
      ['동굴 공기 포켓', '동굴 루트 중간 산소 리셋.'],
      ['Air Bladders', '휴대 산소와 빠른 복귀.'],
      ['Standard Air Tank', '첫 주요 영구 O2 업그레이드.'],
      ['Oxygen Control', '스캔하거나 수중에서 멈춰 있을 때.'],
    ],
    cautionTitle: '산소가 진행도입니다',
    cautionBody:
      '어떤 루트가 불가능하게 느껴진다면 더 용감해질 문제가 아닙니다. 산소, 지형 기억, 짧은 루트, Air Bladder가 필요한 경우가 많습니다.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 초반 산소는 어떻게 늘리나요?',
        body: '환경 산소를 쓰고 Air Bladders를 챙긴 뒤, Oxygen Control과 Standard Air Tank를 준비하세요.',
      },
      {
        title: '첫 Air Tank 업그레이드는 뭐가 막나요?',
        body: '대부분 Silver가 병목입니다. 안정적인 Silver 루트를 먼저 만드는 편이 좋습니다.',
      },
      {
        title: '탱크 업그레이드 뒤에도 Air Bladders가 필요하나요?',
        body: '네. 큰 탱크는 시간을 주고, Air Bladder는 잘못된 복귀나 무리한 스캔을 살려줍니다.',
      },
    ],
    readNextTitle: '다음 글',
    related: [
      { href: Routes.Subnautica2Silver, label: 'Silver 위치' },
      { href: Routes.Subnautica2Copper, label: 'Copper 위치' },
      { href: Routes.Subnautica2Resources, label: '자원 가이드' },
      { href: Routes.Subnautica2Lithium, label: 'Lithium Location Guide' },
      { href: Routes.Subnautica2Beginner, label: '초보자 가이드' },
    ],
    sourcesTitle: '출처 메모',
    sourceBody:
      '2026년 5월 23일 현재 O2와 초반 팁 보도를 기준으로 확인했습니다. Early Access에서는 레시피와 아이템 효율이 바뀔 수 있습니다.',
    cardKicker: 'O2 route card',
    cardBody: '임시 산소, 비상 도구, 탱크 타이밍, 안전한 동굴 루프.',
    cardTypeLabel: '유형',
    cardTypeValue: '생존 공략',
    cardVerifiedLabel: '확인',
    cardStatusLabel: '상태',
    cardStatusValue: 'Early Access',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 Air Tank と O2 攻略 - 序盤の酸素を増やす',
      description:
        'Subnautica 2 の酸素日本語攻略。Air Bladders、Oxygen Tunics、Bloom Sap funnels、Oxygen Control、Standard Air Tank を整理します。',
    },
    eyebrow: 'Subnautica 2 酸素ルート',
    title: 'Subnautica 2 Air Tank と O2 攻略',
    description:
      '酸素は序盤の本当の制限時間です。深い洞窟へ無理に入る前に、一時的な酸素、保険、タンク強化の順番を作りましょう。',
    quickLabel: '要点',
    quickAnswer:
      'まず環境の酸素を使います。Oxygen Tunics、詰まりを除いた Bloom Sap funnels、洞窟の空気ポケットで短い探索を伸ばせます。Air Bladders を持ち、Oxygen Control を解放し、Silver、Titanium、Rubber が揃ったら Standard Air Tank を作ります。',
    contentsLabel: '目次',
    routeTitle: '序盤の O2 ルート',
    routeSteps: [
      {
        title: '無料の酸素を先に使う',
        body: '短い潜水は必ずしも装備不足ではありません。tunics、funnels、空気ポケットで序盤のルートはかなり伸びます。',
      },
      {
        title: 'Air Bladders を持つ',
        body: '洞窟で曲がる場所を間違えたり、スキャンが長引いた時に戻る時間を作れます。',
      },
      {
        title: 'Standard Air Tank を作る',
        body: '最初の恒久的な酸素強化で洞窟探索がかなり安定します。詰まりやすい素材は Silver です。',
      },
      {
        title: 'Oxygen Control を解放する',
        body: 'スキャンや水中での調査中に酸素消費の圧を下げられます。地味ですが効きます。',
      },
    ],
    visualTitle: 'O2 ルートカード',
    visualItems: [
      {
        label: 'Step 01',
        value: '借りる酸素',
        note: 'tunics、funnels、空気ポケットで短い探索を終える。',
      },
      {
        label: 'Step 02',
        value: '保険を持つ',
        note: 'Air Bladder は戻り道のミスを救います。',
      },
      {
        label: 'Step 03',
        value: 'タンク強化',
        note: '深いルートへ行く前に Silver を Standard Air Tank へ。',
      },
    ],
    tableTitle: '酸素の選択肢',
    tableHeaders: ['方法', '使いどころ'],
    tableRows: [
      ['Oxygen Tunics', '序盤バイオームでの緊急酸素。'],
      ['Bloom Sap funnels', '詰まりを除いた後のルート延長。'],
      ['洞窟の空気ポケット', '洞窟ルート途中の酸素リセット。'],
      ['Air Bladders', '携帯酸素と素早い帰還。'],
      ['Standard Air Tank', '最初の大きな恒久 O2 強化。'],
      ['Oxygen Control', 'スキャンや水中で止まる作業向け。'],
    ],
    cautionTitle: '酸素は進行度です',
    cautionBody:
      'あるルートが無理に感じる時、必要なのは気合いではありません。酸素、目印、短い周回、Air Bladder のどれかです。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 序盤で酸素を増やすには？',
        body: '環境酸素を使い、Air Bladders を持ち、Oxygen Control と Standard Air Tank を準備します。',
      },
      {
        title: '最初の Air Tank 強化で詰まりやすい素材は？',
        body: '多くの場合 Silver です。安定した Silver ルートを先に作ると楽になります。',
      },
      {
        title: 'タンク強化後も Air Bladders は必要？',
        body: '必要です。タンクは時間を増やし、Air Bladder は戻り道のミスや欲張ったスキャンを救います。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2Silver, label: 'Silver の場所' },
      { href: Routes.Subnautica2Copper, label: 'Copper の場所' },
      { href: Routes.Subnautica2Resources, label: '資源ガイド' },
      { href: Routes.Subnautica2Lithium, label: 'Lithium Location Guide' },
      { href: Routes.Subnautica2Beginner, label: '初心者ガイド' },
    ],
    sourcesTitle: '出典メモ',
    sourceBody:
      '2026年5月23日に現在の O2 と初心者向け記事を確認。Early Access ではレシピやアイテム性能が変わる可能性があります。',
    cardKicker: 'O2 route card',
    cardBody: '一時酸素、保険、タンク強化タイミング、安全な洞窟ループ。',
    cardTypeLabel: '種類',
    cardTypeValue: '生存ガイド',
    cardVerifiedLabel: '確認',
    cardStatusLabel: '状態',
    cardStatusValue: 'Early Access',
  },
};

function getCopy(locale: Locale): AirTankCopy {
  return airTankCopy[locale] ?? airTankCopy.en;
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
    pathname: Routes.Subnautica2AirTank,
  });
}

export default async function AirTankGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <LocalizedResourceGuidePage
      copy={copy}
      icon={GaugeIcon}
      locale={locale}
      pathname={Routes.Subnautica2AirTank}
      sources={sharedSources}
    />
  );
}
