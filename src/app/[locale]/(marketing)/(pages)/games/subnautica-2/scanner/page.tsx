import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { ScanLineIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type ScannerCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-23';
const UPDATED_AT = '2026-05-28';

const sharedSources = [
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-bioscanner-location/',
    label: 'PC Gamer Bioscanner guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-biomods-best/',
    label: 'PC Gamer Biomods guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-tips/',
    label: 'PC Gamer beginner tips',
  },
];

const scannerCopy: Record<string, ScannerCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Scanner and Bioscanner Guide - Blueprint Priority',
      description:
        'Use the Scanner and Bioscanner in Subnautica 2 to unlock blueprints, Biomods, and early upgrade routes without wasting oxygen.',
    },
    eyebrow: 'Subnautica 2 blueprint route',
    title: 'Subnautica 2 Scanner and Bioscanner Guide',
    description:
      'The Scanner is easy to underestimate because it does not look dramatic. Then you miss one fragment, lose the blueprint, and realize the tool was the route all along. The Bioscanner comes later and turns creature scans into Biomod progress.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Make and carry the Scanner early. Scan fragments, stations, alien-route objects, and anything that looks like it belongs in a recipe chain before filling your inventory with loose loot. PC Gamer places the Bioscanner in Cicada wreckage about 500m southeast of the Alien Ruins Research Outpost, around bearing 130, and notes that earlier lifeform scans do not count retroactively.',
    fieldNotesTitle: 'Field notes for scan routes',
    fieldNotes: [
      {
        title: 'Fragments beat loose loot',
        body: 'A full bag feels good for five minutes. A missed fragment costs another whole trip. When you enter wreckage or a worksite, scan first and tidy the inventory later.',
      },
      {
        title: 'Do not scan at panic oxygen',
        body: 'Scanning makes you stop moving and stare at the thing instead of the exit. If the oxygen warning is already loud, mark the spot in your head and come back with a cleaner route.',
      },
      {
        title: 'Bioscanner is a second pass',
        body: 'Lifeform scans become more important once the Bioscanner is in your kit. Treat that as a planned revisit, not a reason to chase every creature before you are ready.',
      },
    ],
    routeChecklistTitle: 'Scan route check',
    routeChecklist: [
      'Scanner is packed before leaving the safe route.',
      'Fragments and stations are scanned before inventory looting.',
      'Oxygen budget includes still-time for scans.',
      'Bioscanner targets are saved for a deliberate revisit.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Scanner priority route',
    routeSteps: [
      {
        title: 'Craft the Scanner before long routes',
        body: 'Copper matters here because the Scanner depends on the early battery and electronics chain. If you leave base without it, every interesting fragment becomes a second trip.',
      },
      {
        title: 'Scan before you loot',
        body: 'At wreckage, stations, and alien structures, scan first. Inventory loot is replaceable; missed blueprint progress is what quietly slows the next hour.',
      },
      {
        title: 'Separate blueprint scans from Biomods',
        body: 'The regular Scanner pushes tools, stations, and vehicle progress. Bioscanner is later, and PC Gamer reports it lets marine-life scans unlock extra Biomods. Re-scan important lifeforms after getting it because old scans are not credited backward.',
      },
      {
        title: 'Do not rush the Cicada wreck unprepared',
        body: 'The Bioscanner lead sits far enough from the Alien Ruins Research Outpost that oxygen and landmarks matter. Put a Beacon or route note on the outpost side before swimming southeast.',
      },
      {
        title: 'Use oxygen planning for slow scans',
        body: 'Scanning takes calm seconds you may not have in a cave. Pair scan routes with Air Bladders, air pockets, or a tank upgrade instead of forcing one last scan at 10 O2.',
      },
    ],
    visualTitle: 'Scan priority card',
    visualItems: [
      {
        label: 'First',
        value: 'Fragments',
        note: 'Tools, stations, and vehicle pieces are the first scans that change your route.',
      },
      {
        label: 'Next',
        value: 'Systems',
        note: 'Alien-route objects and production stations often open the next crafting step.',
      },
      {
        label: 'Later',
        value: 'Biomods',
        note: 'Use Bioscanner when marine life starts feeding your upgrade plan.',
      },
    ],
    tableTitle: 'What to scan first',
    tableHeaders: ['Target', 'Why it matters'],
    tableRows: [
      [
        'Tool fragments',
        'They unlock the gear that makes every later route shorter.',
      ],
      [
        'Stations',
        'Processing and production systems can change what you are able to craft.',
      ],
      [
        'Vehicle fragments',
        'They move you from swimming routes toward vehicle routes.',
      ],
      [
        'Alien-route objects',
        'These often point to the next story or upgrade path.',
      ],
      [
        'Marine life',
        'With Bioscanner, lifeform scans can contribute to Biomod progression, but earlier scans may need to be repeated.',
      ],
    ],
    cautionTitle: 'Scanning is not optional',
    cautionBody:
      'Exploring without a Scanner is mostly sightseeing. If you see fragments, stations, alien tech, or new organisms, scan first and argue with your inventory later.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'What should I scan first in Subnautica 2?',
        body: 'Start with fragments and stations that unlock tools, base systems, vehicle routes, and route-extending upgrades.',
      },
      {
        title: 'What does the Bioscanner do?',
        body: 'Current reporting says the Bioscanner upgrade lets you scan marine life to unlock additional Biomods. PC Gamer also warns that old lifeform scans do not retroactively count.',
      },
      {
        title: 'Where should I look for the Bioscanner?',
        body: 'PC Gamer places it in Cicada wreckage roughly 500m southeast of the Alien Ruins Research Outpost, around bearing 130.',
      },
      {
        title: 'Do I need more oxygen for scan routes?',
        body: 'Usually, yes. Scanning asks you to stay still, so Air Bladders, air pockets, and tank upgrades make the route much safer.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2BioscannerBiomods,
        label: 'Bioscanner and Biomods',
      },
      {
        href: Routes.Subnautica2SonicResonator,
        label: 'Sonic Resonator Guide',
      },
      { href: Routes.Subnautica2Copper, label: 'Copper Location' },
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery Guide' },
      { href: Routes.Subnautica2Quartz, label: 'Quartz Location Guide' },
      {
        href: Routes.Subnautica2HabitatBuilder,
        label: 'Habitat Builder Guide',
      },
      {
        href: Routes.Subnautica2ScannerStation,
        label: 'Scanner Station Guide',
      },
      { href: Routes.Subnautica2Beacon, label: 'Beacon Guide' },
      { href: Routes.Subnautica2RepairTool, label: 'Repair Tool Guide' },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Beginner, label: 'Beginner Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 27, 2026 against current Bioscanner, Biomod, and beginner-route reporting. Early Access unlocks can still change.',
    cardKicker: 'Scanner field card',
    cardBody:
      'Blueprint order, oxygen-safe scans, Bioscanner timing, and Biomod route notes.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Tool guide',
    cardVerifiedLabel: 'Verified',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Scanner 和 Bioscanner 攻略 - 蓝图扫描优先级',
      description:
        'Subnautica 2 Scanner 中文攻略，整理蓝图扫描顺序、Bioscanner、Biomod、氧气规划和前期工具路线。',
    },
    eyebrow: 'Subnautica 2 蓝图路线',
    title: 'Subnautica 2 Scanner 和 Bioscanner 攻略',
    description:
      'Scanner 看起来不刺激，但它经常决定你是不是要为同一个碎片再跑一趟。前期少漏扫，比多捡两块材料更重要。',
    quickLabel: '快速答案',
    quickAnswer:
      '尽早做 Scanner，并且每次长路线都带上。看到碎片、工作站、外星路线物件，先扫再捡东西。Bioscanner 是后面的升级，当前报道提到它可以通过扫描海洋生物解锁更多 Biomod，所以不要把它当成开局五分钟就必须追的目标。',
    fieldNotesTitle: '扫描路线笔记',
    fieldNotes: [
      {
        title: '碎片比散装材料更值钱',
        body: '满背包只爽五分钟，漏扫一个碎片可能要你整条路线重跑。进残骸或工作区时，先扫，再整理背包。',
      },
      {
        title: '低氧时不要硬扫',
        body: '扫描会让你停在原地盯着目标，而不是看出口。氧气警报已经响得烦人时，先记住位置，回去补路线。',
      },
      {
        title: 'Bioscanner 算第二轮回访',
        body: '拿到 Bioscanner 以后，生物扫描才会更重要。把它当成计划好的回访目标，不要前期为了每只生物乱追。',
      },
    ],
    routeChecklistTitle: '扫描前检查',
    routeChecklist: [
      '离开安全路线前，Scanner 已经带上。',
      '碎片和工作站先扫，再捡背包材料。',
      '氧气预算要算上停下来扫描的时间。',
      'Bioscanner 相关目标留给专门回访。',
    ],
    contentsLabel: '目录',
    routeTitle: '扫描优先级路线',
    routeSteps: [
      {
        title: '长路线前先做 Scanner',
        body: 'Scanner 依赖早期电池和电子链，所以 Copper 这里很关键。不带 Scanner 出门，看到有用碎片就只能下次再来。',
      },
      {
        title: '先扫描再搜刮',
        body: '残骸、工作站、外星结构附近，先扫。背包里的散装材料可以再找，漏掉的蓝图进度会悄悄拖慢后面一小时。',
      },
      {
        title: '分清蓝图扫描和 Biomod',
        body: '普通 Scanner 主要推进工具、工作站、载具。Bioscanner 是后续升级，PC Gamer 报道它能通过扫描海洋生物推进 Biomod。',
      },
      {
        title: '扫描路线要算氧气',
        body: '扫描需要你停下来。洞穴里别在 10 点氧气时硬扫最后一下，带 Air Bladder、找空气口，或者先升级气瓶。',
      },
    ],
    visualTitle: '扫描优先级卡',
    visualItems: [
      {
        label: '优先',
        value: '碎片',
        note: '工具、工作站、载具碎片最容易改变路线。',
      },
      {
        label: '其次',
        value: '系统',
        note: '外星物件和生产站经常打开下一步制作链。',
      },
      {
        label: '后续',
        value: 'Biomod',
        note: '拿到 Bioscanner 后，再把海洋生物扫描纳入升级计划。',
      },
    ],
    tableTitle: '优先扫描什么',
    tableHeaders: ['目标', '为什么重要'],
    tableRows: [
      ['工具碎片', '解锁工具以后，后面每条路线都会更短。'],
      ['工作站', '加工和生产系统会改变你能做什么。'],
      ['载具碎片', '把移动方式从纯游泳推进到载具路线。'],
      ['外星路线物件', '经常指向下一段剧情或升级路径。'],
      ['海洋生物', '拿到 Bioscanner 后，生物扫描可以帮助 Biomod 进度。'],
    ],
    cautionTitle: '扫描不是可选项',
    cautionBody:
      '不带 Scanner 探索，很多时候只是看风景。看到碎片、工作站、外星科技或新生物，先扫，背包整理可以之后再烦。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 先扫什么？',
        body: '先扫能解锁工具、基地系统、载具路线和延长路线升级的碎片或工作站。',
      },
      {
        title: 'Bioscanner 有什么用？',
        body: '当前报道说 Bioscanner 升级可以扫描海洋生物，用来解锁额外 Biomod。',
      },
      {
        title: '扫描路线需要更多氧气吗？',
        body: '通常需要。扫描会让你停在原地，Air Bladder、空气口和气瓶升级都会让路线安全很多。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      {
        href: Routes.Subnautica2SonicResonator,
        label: 'Sonic Resonator 指南',
      },
      { href: Routes.Subnautica2ScannerStation, label: 'Scanner Station 指南' },
      { href: Routes.Subnautica2Beacon, label: 'Beacon 指南' },
      { href: Routes.Subnautica2RepairTool, label: 'Repair Tool 指南' },
      { href: Routes.Subnautica2Copper, label: '铜位置' },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker 指南' },
      { href: Routes.Subnautica2AirTank, label: '气瓶和氧气' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Beginner, label: '新手指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 27 日核对当前 Bioscanner、Biomod 和新手路线报道。抢先体验阶段的解锁顺序可能变化。',
    cardKicker: 'Scanner 路线卡',
    cardBody: '蓝图顺序、安全扫描、Bioscanner 时机，以及 Biomod 路线提醒。',
    cardTypeLabel: '类型',
    cardTypeValue: '工具攻略',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
  ru: {
    metadata: {
      title: 'Subnautica 2 Scanner и Bioscanner - приоритет чертежей',
      description:
        'Русский гайд по Scanner и Bioscanner в Subnautica 2: чертежи, Biomods, кислород и ранний порядок сканирования.',
    },
    eyebrow: 'Маршрут чертежей Subnautica 2',
    title: 'Subnautica 2 Scanner и Bioscanner',
    description:
      'Scanner не выглядит эффектно, но один пропущенный фрагмент легко превращается во второй лишний заплыв.',
    quickLabel: 'Короткий ответ',
    quickAnswer:
      'Сделайте Scanner рано и носите его на длинные маршруты. Сканируйте фрагменты, станции и чужие объекты до того, как забьете инвентарь лутом. Bioscanner появляется позже: текущие материалы говорят, что он дает сканировать морскую жизнь для Biomods.',
    contentsLabel: 'Содержание',
    routeTitle: 'Приоритет сканирования',
    routeSteps: [
      {
        title: 'Сделайте Scanner до длинных маршрутов',
        body: 'Scanner зависит от ранней батареи и электроники. Без него любой полезный фрагмент становится поводом вернуться еще раз.',
      },
      {
        title: 'Сначала сканируйте, потом лутайте',
        body: 'У обломков, станций и чужих структур сканируйте первым делом. Лут подождет, прогресс чертежа нет.',
      },
      {
        title: 'Разделяйте чертежи и Biomods',
        body: 'Обычный Scanner двигает инструменты, станции и транспорт. Bioscanner позже добавляет морскую жизнь в прогресс Biomods.',
      },
      {
        title: 'Планируйте кислород под сканы',
        body: 'Сканирование требует остановиться. Air Bladder, воздушный карман или Air Tank часто важнее последней жадной попытки.',
      },
    ],
    visualTitle: 'Карточка приоритета',
    visualItems: [
      {
        label: 'Сначала',
        value: 'Фрагменты',
        note: 'Инструменты, станции и транспорт меняют маршрут быстрее всего.',
      },
      {
        label: 'Потом',
        value: 'Системы',
        note: 'Чужие объекты и станции часто открывают следующий крафт.',
      },
      {
        label: 'Позже',
        value: 'Biomods',
        note: 'Bioscanner подключает морскую жизнь к плану апгрейдов.',
      },
    ],
    tableTitle: 'Что сканировать первым',
    tableHeaders: ['Цель', 'Почему важно'],
    tableRows: [
      [
        'Фрагменты инструментов',
        'Открывают снаряжение, которое сокращает будущие маршруты.',
      ],
      ['Станции', 'Производство и обработка меняют доступный крафт.'],
      [
        'Фрагменты транспорта',
        'Переводят прогресс от плавания к маршрутам на технике.',
      ],
      ['Чужие объекты', 'Часто ведут к следующей истории или апгрейду.'],
      ['Морская жизнь', 'С Bioscanner сканы могут помогать Biomod-прогрессу.'],
    ],
    cautionTitle: 'Scanner не опция',
    cautionBody:
      'Исследовать без Scanner значит просто смотреть на мир. Увидели фрагмент, станцию, чужую технологию или новый организм: сначала скан.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Что сканировать первым в Subnautica 2?',
        body: 'Фрагменты и станции, которые открывают инструменты, базовые системы, транспорт и апгрейды маршрутов.',
      },
      {
        title: 'Что делает Bioscanner?',
        body: 'Текущие материалы говорят, что Bioscanner позволяет сканировать морскую жизнь для дополнительных Biomods.',
      },
      {
        title: 'Нужен ли кислород для scan routes?',
        body: 'Да. Вы стоите на месте, поэтому Air Bladders, карманы воздуха и апгрейд танка сильно помогают.',
      },
    ],
    readNextTitle: 'Дальше',
    related: [
      { href: Routes.Subnautica2Copper, label: 'Где найти Copper' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank и O2' },
      { href: Routes.Subnautica2Resources, label: 'Ресурсы' },
      { href: Routes.Subnautica2Beginner, label: 'Гайд новичка' },
    ],
    sourcesTitle: 'Источники',
    sourceBody:
      'Проверено 27 мая 2026 по текущим материалам Bioscanner, Biomods и beginner routes. Разблокировки Early Access могут меняться.',
    cardKicker: 'Scanner field card',
    cardBody:
      'Порядок чертежей, безопасное сканирование, Bioscanner и Biomods.',
    cardTypeLabel: 'Тип',
    cardTypeValue: 'Гайд по инструменту',
    cardVerifiedLabel: 'Проверено',
    cardStatusLabel: 'Статус',
    cardStatusValue: 'Early Access',
  },
  de: {
    metadata: {
      title: 'Subnautica 2 Scanner und Bioscanner - Blueprint-Priorität',
      description:
        'Deutscher Guide zu Scanner und Bioscanner in Subnautica 2: Blueprints, Biomods, Sauerstoffplanung und Scan-Reihenfolge.',
    },
    eyebrow: 'Subnautica 2 Blueprint-Route',
    title: 'Subnautica 2 Scanner und Bioscanner',
    description:
      'Der Scanner sieht unscheinbar aus. Dann fehlt ein Fragment, der Blueprint bleibt offen, und du schwimmst denselben Weg noch einmal.',
    quickLabel: 'Kurzantwort',
    quickAnswer:
      'Baue und trage den Scanner früh. Scanne Fragmente, Stationen und Alien-Objekte, bevor du dein Inventar mit losem Loot füllst. Bioscanner kommt später und lässt laut aktuellen Berichten Marine Life für Biomods scannen.',
    contentsLabel: 'Inhalt',
    routeTitle: 'Scanner-Priorität',
    routeSteps: [
      {
        title: 'Scanner vor langen Routen bauen',
        body: 'Copper, Batterie und Elektronik führen direkt in den Scanner. Ohne ihn wird jeder gute Fund zur zweiten Reise.',
      },
      {
        title: 'Erst scannen, dann looten',
        body: 'Bei Wracks, Stationen und Alien-Strukturen zuerst scannen. Lose Materialien warten, Blueprint-Fortschritt nicht.',
      },
      {
        title: 'Blueprints und Biomods trennen',
        body: 'Der normale Scanner treibt Tools, Stationen und Fahrzeuge. Bioscanner ist später für Marine Life und Biomods da.',
      },
      {
        title: 'O2 für langsame Scans planen',
        body: 'Scannen kostet ruhige Sekunden. Air Bladders, Lufttaschen oder ein Tank-Upgrade sind besser als ein Scan bei 10 O2.',
      },
    ],
    visualTitle: 'Scan-Prioritätskarte',
    visualItems: [
      {
        label: 'Zuerst',
        value: 'Fragmente',
        note: 'Tools, Stationen und Fahrzeuge ändern deine Route sofort.',
      },
      {
        label: 'Danach',
        value: 'Systeme',
        note: 'Alien-Objekte und Produktionsstationen öffnen oft den nächsten Craft.',
      },
      {
        label: 'Später',
        value: 'Biomods',
        note: 'Bioscanner bringt Marine Life in deinen Upgrade-Plan.',
      },
    ],
    tableTitle: 'Was du zuerst scannen solltest',
    tableHeaders: ['Ziel', 'Warum es wichtig ist'],
    tableRows: [
      [
        'Tool-Fragmente',
        'Schalten Ausrüstung frei, die spätere Routen verkürzt.',
      ],
      ['Stationen', 'Produktion und Verarbeitung ändern, was du bauen kannst.'],
      [
        'Fahrzeugfragmente',
        'Bewegen dich von Schwimmrouten zu Fahrzeugrouten.',
      ],
      ['Alien-Objekte', 'Zeigen oft auf Story- oder Upgrade-Pfade.'],
      ['Marine Life', 'Mit Bioscanner kann das Biomod-Fortschritt bringen.'],
    ],
    cautionTitle: 'Scanning ist nicht optional',
    cautionBody:
      'Ohne Scanner ist Erkundung oft nur Sightseeing. Fragment, Station, Alien-Tech oder neue Kreatur gesehen? Erst scannen.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Was sollte ich zuerst in Subnautica 2 scannen?',
        body: 'Fragmente und Stationen für Tools, Basissysteme, Fahrzeuge und Routen-Upgrades.',
      },
      {
        title: 'Was macht der Bioscanner?',
        body: 'Aktuelle Berichte sagen, dass Bioscanner Marine Life für zusätzliche Biomods scannen lässt.',
      },
      {
        title: 'Brauche ich mehr Sauerstoff für Scan-Routen?',
        body: 'Meist ja. Du bleibst stehen, also helfen Air Bladders, Lufttaschen und Tank-Upgrades stark.',
      },
    ],
    readNextTitle: 'Weiterlesen',
    related: [
      { href: Routes.Subnautica2Copper, label: 'Copper finden' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank und O2' },
      { href: Routes.Subnautica2Resources, label: 'Ressourcen' },
      { href: Routes.Subnautica2Beginner, label: 'Anfänger-Guide' },
    ],
    sourcesTitle: 'Quellenhinweis',
    sourceBody:
      'Geprüft am 23. Mai 2026 mit aktuellen Bioscanner-, Biomod- und Beginner-Routen. Early-Access-Unlocks können sich ändern.',
    cardKicker: 'Scanner field card',
    cardBody:
      'Blueprint-Reihenfolge, sichere Scans, Bioscanner-Timing und Biomod-Routen.',
    cardTypeLabel: 'Typ',
    cardTypeValue: 'Tool-Guide',
    cardVerifiedLabel: 'Geprüft',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  fr: {
    metadata: {
      title: 'Subnautica 2 Scanner et Bioscanner - priorité des plans',
      description:
        'Guide français Scanner et Bioscanner pour Subnautica 2 : plans, Biomods, oxygène et priorités de scan.',
    },
    eyebrow: 'Route de plans Subnautica 2',
    title: 'Subnautica 2 Scanner et Bioscanner',
    description:
      'Le Scanner paraît discret, puis vous ratez un fragment et vous comprenez que le vrai progrès passait par lui.',
    quickLabel: 'Réponse rapide',
    quickAnswer:
      'Fabriquez et portez le Scanner tôt. Scannez fragments, stations et objets alien avant de remplir l’inventaire. Le Bioscanner arrive plus tard: les guides actuels indiquent qu’il sert à scanner la vie marine pour des Biomods.',
    contentsLabel: 'Sommaire',
    routeTitle: 'Priorité de scan',
    routeSteps: [
      {
        title: 'Construire le Scanner avant les longues routes',
        body: 'Copper, batterie et électronique mènent au Scanner. Sans lui, chaque bon fragment devient un aller-retour de plus.',
      },
      {
        title: 'Scanner avant de looter',
        body: 'Près des épaves, stations et structures alien, scannez d’abord. Les matériaux attendront.',
      },
      {
        title: 'Séparer plans et Biomods',
        body: 'Le Scanner classique pousse outils, stations et véhicules. Bioscanner vient plus tard pour la vie marine et les Biomods.',
      },
      {
        title: 'Prévoir l’oxygène',
        body: 'Scanner demande de rester immobile. Air Bladders, poches d’air et tank upgrade rendent la route beaucoup plus calme.',
      },
    ],
    visualTitle: 'Carte de priorité scan',
    visualItems: [
      {
        label: 'D’abord',
        value: 'Fragments',
        note: 'Outils, stations et véhicules changent vite votre route.',
      },
      {
        label: 'Ensuite',
        value: 'Systèmes',
        note: 'Objets alien et stations ouvrent souvent le craft suivant.',
      },
      {
        label: 'Plus tard',
        value: 'Biomods',
        note: 'Bioscanner ajoute la vie marine au plan d’upgrade.',
      },
    ],
    tableTitle: 'Que scanner en premier',
    tableHeaders: ['Cible', 'Pourquoi c’est important'],
    tableRows: [
      [
        'Fragments d’outil',
        'Débloque l’équipement qui raccourcit les prochaines routes.',
      ],
      [
        'Stations',
        'Production et traitement changent ce que vous pouvez fabriquer.',
      ],
      [
        'Fragments de véhicule',
        'Fait passer des routes à la nage aux routes en véhicule.',
      ],
      ['Objets alien', 'Indiquent souvent une suite d’histoire ou d’upgrade.'],
      ['Vie marine', 'Avec Bioscanner, peut nourrir la progression Biomod.'],
    ],
    cautionTitle: 'Scanner n’est pas optionnel',
    cautionBody:
      'Explorer sans Scanner, c’est souvent juste regarder le décor. Fragment, station, technologie alien ou créature inconnue: scannez d’abord.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Que scanner en premier dans Subnautica 2 ?',
        body: 'Les fragments et stations qui débloquent outils, base, véhicules et upgrades de route.',
      },
      {
        title: 'À quoi sert le Bioscanner ?',
        body: 'Les guides actuels indiquent qu’il permet de scanner la vie marine pour obtenir des Biomods supplémentaires.',
      },
      {
        title: 'Faut-il plus d’oxygène pour scanner ?',
        body: 'Souvent oui. Vous restez immobile, donc Air Bladders, poches d’air et tank upgrade aident beaucoup.',
      },
    ],
    readNextTitle: 'À lire ensuite',
    related: [
      { href: Routes.Subnautica2Copper, label: 'Trouver Copper' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank et O2' },
      { href: Routes.Subnautica2Resources, label: 'Ressources' },
      { href: Routes.Subnautica2Beginner, label: 'Guide débutant' },
    ],
    sourcesTitle: 'Sources',
    sourceBody:
      'Vérifié le 23 mai 2026 avec les guides Bioscanner, Biomod et routes débutant actuels. Les unlocks Early Access peuvent changer.',
    cardKicker: 'Scanner field card',
    cardBody: 'Ordre des plans, scans sûrs, timing Bioscanner et route Biomod.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Guide outil',
    cardVerifiedLabel: 'Vérifié',
    cardStatusLabel: 'Statut',
    cardStatusValue: 'Early Access',
  },
  'pt-BR': {
    metadata: {
      title: 'Subnautica 2 Scanner e Bioscanner - prioridade de projetos',
      description:
        'Guia em português do Brasil para Scanner e Bioscanner em Subnautica 2: projetos, Biomods, oxigênio e ordem de scan.',
    },
    eyebrow: 'Rota de projetos de Subnautica 2',
    title: 'Subnautica 2 Scanner e Bioscanner',
    description:
      'O Scanner parece simples, até você perder um fragmento e precisar repetir uma rota inteira.',
    quickLabel: 'Resposta rápida',
    quickAnswer:
      'Faça e leve o Scanner cedo. Escaneie fragmentos, estações e objetos alienígenas antes de lotar o inventário. O Bioscanner vem depois: guias atuais dizem que ele permite escanear vida marinha para liberar mais Biomods.',
    contentsLabel: 'Conteúdo',
    routeTitle: 'Prioridade de scan',
    routeSteps: [
      {
        title: 'Faça o Scanner antes das rotas longas',
        body: 'Copper, bateria e eletrônica levam ao Scanner. Sem ele, cada fragmento bom vira uma segunda viagem.',
      },
      {
        title: 'Escaneie antes de pegar loot',
        body: 'Em destroços, estações e estruturas alienígenas, escaneie primeiro. Material solto pode esperar.',
      },
      {
        title: 'Separe projetos de Biomods',
        body: 'O Scanner comum avança ferramentas, estações e veículos. Bioscanner entra depois, com vida marinha e Biomods.',
      },
      {
        title: 'Planeje oxigênio para scans lentos',
        body: 'Escanear exige ficar parado. Air Bladders, bolsões de ar e tanque melhorado deixam a rota bem mais segura.',
      },
    ],
    visualTitle: 'Cartão de prioridade',
    visualItems: [
      {
        label: 'Primeiro',
        value: 'Fragmentos',
        note: 'Ferramentas, estações e veículos mudam sua rota rápido.',
      },
      {
        label: 'Depois',
        value: 'Sistemas',
        note: 'Objetos alienígenas e estações costumam abrir o próximo craft.',
      },
      {
        label: 'Mais tarde',
        value: 'Biomods',
        note: 'Bioscanner coloca vida marinha no plano de upgrade.',
      },
    ],
    tableTitle: 'O que escanear primeiro',
    tableHeaders: ['Alvo', 'Por que importa'],
    tableRows: [
      [
        'Fragmentos de ferramenta',
        'Liberam equipamentos que encurtam as próximas rotas.',
      ],
      ['Estações', 'Produção e processamento mudam o que você pode fabricar.'],
      ['Fragmentos de veículo', 'Levam da natação para rotas com veículo.'],
      ['Objetos alienígenas', 'Costumam apontar para história ou upgrade.'],
      ['Vida marinha', 'Com Bioscanner, pode alimentar progresso de Biomod.'],
    ],
    cautionTitle: 'Scanner não é opcional',
    cautionBody:
      'Explorar sem Scanner é quase só turismo. Viu fragmento, estação, tecnologia alienígena ou criatura nova? Escaneie primeiro.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'O que escanear primeiro em Subnautica 2?',
        body: 'Fragmentos e estações que liberam ferramentas, base, veículos e upgrades de rota.',
      },
      {
        title: 'Para que serve o Bioscanner?',
        body: 'Guias atuais dizem que ele permite escanear vida marinha para liberar Biomods adicionais.',
      },
      {
        title: 'Preciso de mais oxigênio para rotas de scan?',
        body: 'Quase sempre. Você fica parado, então Air Bladders, bolsões de ar e tanque melhorado ajudam muito.',
      },
    ],
    readNextTitle: 'Leia a seguir',
    related: [
      { href: Routes.Subnautica2Copper, label: 'Onde encontrar Copper' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank e O2' },
      { href: Routes.Subnautica2Resources, label: 'Recursos' },
      { href: Routes.Subnautica2Beginner, label: 'Guia inicial' },
    ],
    sourcesTitle: 'Fontes',
    sourceBody:
      'Verificado em 23 de maio de 2026 com guias atuais de Bioscanner, Biomods e rotas iniciais. Unlocks de Early Access podem mudar.',
    cardKicker: 'Scanner field card',
    cardBody:
      'Ordem de projetos, scans seguros, timing do Bioscanner e rota Biomod.',
    cardTypeLabel: 'Tipo',
    cardTypeValue: 'Guia de ferramenta',
    cardVerifiedLabel: 'Verificado',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  'es-419': {
    metadata: {
      title: 'Subnautica 2 Scanner y Bioscanner - prioridad de planos',
      description:
        'Guía en español latino para Scanner y Bioscanner en Subnautica 2: planos, Biomods, oxígeno y orden de escaneo.',
    },
    eyebrow: 'Ruta de planos de Subnautica 2',
    title: 'Subnautica 2 Scanner y Bioscanner',
    description:
      'El Scanner parece una herramienta menor, hasta que pierdes un fragmento y tienes que repetir toda la ruta.',
    quickLabel: 'Respuesta rápida',
    quickAnswer:
      'Fabrica y lleva el Scanner temprano. Escanea fragmentos, estaciones y objetos alienígenas antes de llenar el inventario. El Bioscanner viene después: las guías actuales dicen que permite escanear vida marina para desbloquear más Biomods.',
    contentsLabel: 'Contenido',
    routeTitle: 'Prioridad de escaneo',
    routeSteps: [
      {
        title: 'Haz el Scanner antes de rutas largas',
        body: 'Copper, batería y electrónica llevan al Scanner. Sin él, cada fragmento útil se convierte en un segundo viaje.',
      },
      {
        title: 'Escanea antes de lootear',
        body: 'En restos, estaciones y estructuras alienígenas, escanea primero. El material suelto puede esperar.',
      },
      {
        title: 'Separa planos de Biomods',
        body: 'El Scanner común empuja herramientas, estaciones y vehículos. Bioscanner llega después, con vida marina y Biomods.',
      },
      {
        title: 'Planea oxígeno para scans lentos',
        body: 'Escanear te deja quieto. Air Bladders, bolsas de aire y tanque mejorado hacen la ruta mucho más segura.',
      },
    ],
    visualTitle: 'Tarjeta de prioridad',
    visualItems: [
      {
        label: 'Primero',
        value: 'Fragmentos',
        note: 'Herramientas, estaciones y vehículos cambian rápido tu ruta.',
      },
      {
        label: 'Luego',
        value: 'Sistemas',
        note: 'Objetos alienígenas y estaciones suelen abrir el siguiente craft.',
      },
      {
        label: 'Después',
        value: 'Biomods',
        note: 'Bioscanner mete vida marina en el plan de mejoras.',
      },
    ],
    tableTitle: 'Qué escanear primero',
    tableHeaders: ['Objetivo', 'Por qué importa'],
    tableRows: [
      [
        'Fragmentos de herramienta',
        'Desbloquean equipo que acorta las siguientes rutas.',
      ],
      [
        'Estaciones',
        'Producción y procesamiento cambian lo que puedes fabricar.',
      ],
      [
        'Fragmentos de vehículo',
        'Te llevan de rutas nadando a rutas con vehículo.',
      ],
      ['Objetos alienígenas', 'A menudo apuntan a historia o mejoras.'],
      ['Vida marina', 'Con Bioscanner, puede sumar progreso de Biomods.'],
    ],
    cautionTitle: 'Scanner no es opcional',
    cautionBody:
      'Explorar sin Scanner es casi hacer turismo. Si ves fragmento, estación, tecnología alienígena o criatura nueva, escanea primero.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '¿Qué escanear primero en Subnautica 2?',
        body: 'Fragmentos y estaciones que desbloquean herramientas, base, vehículos y mejoras de ruta.',
      },
      {
        title: '¿Para qué sirve el Bioscanner?',
        body: 'Las guías actuales dicen que permite escanear vida marina para desbloquear Biomods adicionales.',
      },
      {
        title: '¿Necesito más oxígeno para rutas de escaneo?',
        body: 'Casi siempre. Te quedas quieto, así que Air Bladders, bolsas de aire y tanque mejorado ayudan mucho.',
      },
    ],
    readNextTitle: 'Leer después',
    related: [
      { href: Routes.Subnautica2Copper, label: 'Dónde encontrar Copper' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank y O2' },
      { href: Routes.Subnautica2Resources, label: 'Recursos' },
      { href: Routes.Subnautica2Beginner, label: 'Guía inicial' },
    ],
    sourcesTitle: 'Fuentes',
    sourceBody:
      'Verificado el 23 de mayo de 2026 con guías actuales de Bioscanner, Biomods y rutas iniciales. Los desbloqueos de Early Access pueden cambiar.',
    cardKicker: 'Scanner field card',
    cardBody:
      'Orden de planos, scans seguros, timing de Bioscanner y ruta Biomod.',
    cardTypeLabel: 'Tipo',
    cardTypeValue: 'Guía de herramienta',
    cardVerifiedLabel: 'Verificado',
    cardStatusLabel: 'Estado',
    cardStatusValue: 'Early Access',
  },
  ko: {
    metadata: {
      title: 'Subnautica 2 Scanner와 Bioscanner 공략 - 설계도 우선순위',
      description:
        'Subnautica 2 Scanner 한국어 공략입니다. 설계도, Bioscanner, Biomods, 산소 계획, 초반 스캔 순서를 정리합니다.',
    },
    eyebrow: 'Subnautica 2 설계도 루트',
    title: 'Subnautica 2 Scanner와 Bioscanner 공략',
    description:
      'Scanner는 조용한 도구지만, 조각 하나를 놓치면 같은 길을 다시 가게 됩니다.',
    quickLabel: '빠른 답',
    quickAnswer:
      'Scanner를 일찍 만들고 긴 루트마다 챙기세요. 조각, 시설, 외계 물체는 인벤토리를 채우기 전에 먼저 스캔합니다. Bioscanner는 이후 업그레이드이며, 현재 가이드는 해양 생물 스캔으로 추가 Biomods를 열 수 있다고 설명합니다.',
    contentsLabel: '목차',
    routeTitle: '스캔 우선순위',
    routeSteps: [
      {
        title: '긴 루트 전 Scanner 만들기',
        body: 'Copper, 배터리, 전자 제작이 Scanner로 이어집니다. 없으면 유용한 조각을 봐도 다시 와야 합니다.',
      },
      {
        title: '루팅보다 스캔 먼저',
        body: '잔해, 시설, 외계 구조물에서는 먼저 스캔하세요. 재료는 기다리지만 설계도 진행은 놓치기 쉽습니다.',
      },
      {
        title: '설계도와 Biomods 구분',
        body: '일반 Scanner는 도구, 시설, 탈것을 밀어줍니다. Bioscanner는 나중에 해양 생물과 Biomods에 쓰입니다.',
      },
      {
        title: '스캔 루트에는 산소 계획',
        body: '스캔은 멈춰 있어야 합니다. Air Bladders, 공기 포켓, 탱크 업그레이드가 안전성을 크게 올립니다.',
      },
    ],
    visualTitle: '스캔 우선순위 카드',
    visualItems: [
      {
        label: '먼저',
        value: '조각',
        note: '도구, 시설, 탈것 조각이 루트를 가장 빨리 바꿉니다.',
      },
      {
        label: '다음',
        value: '시스템',
        note: '외계 물체와 생산 시설은 다음 제작을 열 때가 많습니다.',
      },
      {
        label: '이후',
        value: 'Biomods',
        note: 'Bioscanner로 해양 생물을 업그레이드 계획에 넣습니다.',
      },
    ],
    tableTitle: '먼저 스캔할 것',
    tableHeaders: ['목표', '중요한 이유'],
    tableRows: [
      ['도구 조각', '이후 루트를 짧게 만드는 장비를 엽니다.'],
      ['시설', '제작과 생산 가능 범위를 바꿉니다.'],
      ['탈것 조각', '수영 루트에서 탈것 루트로 넘어갑니다.'],
      ['외계 물체', '다음 스토리나 업그레이드 방향을 보여줄 때가 많습니다.'],
      ['해양 생물', 'Bioscanner가 있으면 Biomod 진행에 도움이 됩니다.'],
    ],
    cautionTitle: 'Scanner는 선택이 아닙니다',
    cautionBody:
      'Scanner 없이 탐사하면 그냥 구경으로 끝날 수 있습니다. 조각, 시설, 외계 기술, 새 생물을 보면 먼저 스캔하세요.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2에서 먼저 뭘 스캔하나요?',
        body: '도구, 기지 시스템, 탈것, 루트 업그레이드를 여는 조각과 시설부터 스캔하세요.',
      },
      {
        title: 'Bioscanner는 뭘 하나요?',
        body: '현재 가이드는 Bioscanner가 해양 생물을 스캔해 추가 Biomods를 여는 데 쓰인다고 설명합니다.',
      },
      {
        title: '스캔 루트에 산소가 더 필요한가요?',
        body: '대부분 그렇습니다. 멈춰 있어야 하므로 Air Bladders, 공기 포켓, 탱크 업그레이드가 도움이 됩니다.',
      },
    ],
    readNextTitle: '다음 글',
    related: [
      { href: Routes.Subnautica2Copper, label: 'Copper 위치' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank와 O2' },
      { href: Routes.Subnautica2Resources, label: '자원 가이드' },
      { href: Routes.Subnautica2Beginner, label: '초보자 가이드' },
    ],
    sourcesTitle: '출처 메모',
    sourceBody:
      '2026년 5월 27일 현재 Bioscanner, Biomods, 초반 루트 보도를 기준으로 확인했습니다. Early Access 해금 순서는 바뀔 수 있습니다.',
    cardKicker: 'Scanner field card',
    cardBody: '설계도 순서, 안전한 스캔, Bioscanner 타이밍, Biomod 루트.',
    cardTypeLabel: '유형',
    cardTypeValue: '도구 공략',
    cardVerifiedLabel: '확인',
    cardStatusLabel: '상태',
    cardStatusValue: 'Early Access',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 スキャナーガイド - Bioscannerと設計図の優先度',
      description:
        'Subnautica 2 の Scanner 日本語攻略。設計図、Bioscanner、Biomods、酸素計画、序盤スキャン順を整理します。',
    },
    eyebrow: 'Subnautica 2 設計図ルート',
    title: 'Subnautica 2 スキャナーガイド',
    description:
      'Scanner は地味ですが、破片を1つ見逃すだけで同じルートをもう一度泳ぐことになります。',
    quickLabel: '要点',
    quickAnswer:
      'Scanner は早めに作り、長い探索では必ず持ちます。破片、施設、エイリアン系オブジェクトは、インベントリを埋める前にスキャンしてください。Bioscanner は後のアップグレードで、現在の記事では海洋生物をスキャンして追加 Biomods を解放できるとされています。',
    contentsLabel: '目次',
    routeTitle: 'スキャン優先度',
    routeSteps: [
      {
        title: '長い探索前に Scanner を作る',
        body: 'Copper、Battery、電子クラフトが Scanner につながります。持たずに出ると、有用な破片を見つけても再訪問になります。',
      },
      {
        title: '拾う前にスキャンする',
        body: '残骸、施設、エイリアン構造物では先にスキャン。素材は後でも拾えます。',
      },
      {
        title: '設計図と Biomods を分ける',
        body: '通常 Scanner は道具、施設、乗り物を進めます。Bioscanner は後から海洋生物と Biomods に関わります。',
      },
      {
        title: 'スキャンには酸素計画が必要',
        body: 'スキャン中は止まります。Air Bladders、空気ポケット、タンク強化があるとかなり安全です。',
      },
    ],
    visualTitle: 'スキャン優先カード',
    visualItems: [
      {
        label: '最初',
        value: '破片',
        note: '道具、施設、乗り物の破片がルートを変えます。',
      },
      {
        label: '次',
        value: 'システム',
        note: 'エイリアン物体や生産施設が次のクラフトを開きます。',
      },
      {
        label: '後半',
        value: 'Biomods',
        note: 'Bioscanner で海洋生物をアップグレード計画に入れます。',
      },
    ],
    tableTitle: '先にスキャンするもの',
    tableHeaders: ['対象', '重要な理由'],
    tableRows: [
      ['道具の破片', '次の探索を短くする装備を解放します。'],
      ['施設', '制作や生産の選択肢が増えます。'],
      ['乗り物の破片', '泳ぎ中心から乗り物ルートへ進みます。'],
      ['エイリアン物体', '次のストーリーや強化先を示すことがあります。'],
      ['海洋生物', 'Bioscanner があれば Biomod 進行に関わります。'],
    ],
    cautionTitle: 'Scanner は任意ではありません',
    cautionBody:
      'Scanner なしの探索は、ただ見て回るだけになりがちです。破片、施設、エイリアン技術、新生物を見たら先にスキャンしましょう。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 で最初に何をスキャンする？',
        body: '道具、基地システム、乗り物、ルート強化を解放する破片や施設を優先します。',
      },
      {
        title: 'Bioscanner は何をする？',
        body: '現在の記事では、海洋生物をスキャンして追加 Biomods を解放するアップグレードとされています。',
      },
      {
        title: 'スキャンルートには酸素が必要？',
        body: '必要です。止まる時間が増えるため、Air Bladders、空気ポケット、タンク強化が役立ちます。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      {
        href: Routes.Subnautica2SonicResonator,
        label: 'Sonic Resonator Guide',
      },
      {
        href: Routes.Subnautica2ScannerStation,
        label: 'Scanner Station Guide',
      },
      { href: Routes.Subnautica2Beacon, label: 'Beacon Guide' },
      { href: Routes.Subnautica2RepairTool, label: 'Repair Tool Guide' },
      { href: Routes.Subnautica2Copper, label: 'Copper の場所' },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank と O2' },
      { href: Routes.Subnautica2Resources, label: '資源ガイド' },
      { href: Routes.Subnautica2Beginner, label: '初心者ガイド' },
    ],
    sourcesTitle: '出典メモ',
    sourceBody:
      '2026年5月27日に現在の Bioscanner、Biomods、序盤ルート記事を確認。Early Access の解放順は変わる可能性があります。',
    cardKicker: 'Scanner field card',
    cardBody: '設計図順、安全なスキャン、Bioscanner の時期、Biomod ルート。',
    cardTypeLabel: '種類',
    cardTypeValue: '道具ガイド',
    cardVerifiedLabel: '確認',
    cardStatusLabel: '状態',
    cardStatusValue: 'Early Access',
  },
};

scannerCopy.zh = {
  ...scannerCopy.zh,
  metadata: {
    title: 'Subnautica 2 Scanner 和 Bioscanner 指南 - 蓝图扫描顺序',
    description:
      'Subnautica 2 中文 Scanner 指南：蓝图扫描优先级、Bioscanner 位置、Cicada 残骸路线、Biomod 扫描规则和氧气准备。',
  },
  eyebrow: 'Subnautica 2 蓝图路线',
  title: 'Subnautica 2 Scanner 和 Bioscanner 指南',
  description:
    'Scanner 不是“有空再带”的工具。少扫一个碎片，后面常常就要多跑一趟。Bioscanner 则是中期分水岭，它把生物扫描接到 Biomod 进度上。',
  quickLabel: '快速结论',
  quickAnswer:
    '前期先做普通 Scanner，遇到碎片、工作站、外星路线物件和看起来像配方链的东西都先扫。Bioscanner 在更后面，PC Gamer 把位置指向 Alien Ruins Research Outpost 东南约 500m、bearing 130 左右的 Cicada 残骸，并提醒旧的生物扫描不会自动补算。',
  routeTitle: '扫描优先级路线',
  routeSteps: [
    {
      title: '长路线前先做 Scanner',
      body: 'Scanner 依赖早期电池和电子材料链。没带它出门，看到有用碎片也只能记位置，下次再跑。',
    },
    {
      title: '先扫描，再捡材料',
      body: '残骸、工作站和外星结构附近，先扫。散装材料可以再找，漏掉的蓝图进度会拖慢后面的路线。',
    },
    {
      title: '普通扫描和 Biomod 扫描分开看',
      body: '普通 Scanner 推进工具、站点和载具；Bioscanner 用于生命体扫描和 Biomods。拿到 Bioscanner 后，重要生物需要重新扫一遍。',
    },
    {
      title: '去 Cicada 残骸前先做氧气计划',
      body: 'Bioscanner 线索离 Alien Ruins Research Outpost 有一段距离。建议先在 outpost 一侧放 Beacon 或写路线笔记，再往东南游。',
    },
  ],
  visualTitle: '扫描优先级卡',
  visualItems: [
    {
      label: '先扫',
      value: '碎片',
      note: '工具、工作站、载具会直接改变路线。',
    },
    {
      label: '再扫',
      value: '系统',
      note: '外星物件和生产站常常接到下一步制作链。',
    },
    {
      label: '后期',
      value: 'Biomods',
      note: '拿到 Bioscanner 后再集中补生命体扫描。',
    },
  ],
  tableTitle: '优先扫描什么',
  tableHeaders: ['目标', '为什么重要'],
  tableRows: [
    ['工具碎片', '先解锁能缩短路线的工具。'],
    ['工作站', '加工和生产系统会改变你能做什么。'],
    ['载具碎片', '把移动方式从纯游泳推到载具路线。'],
    ['外星路线物件', '经常指向剧情或升级路径。'],
    ['海洋生物', '有 Bioscanner 后，生命体扫描会进入 Biomod 进度。'],
  ],
  cautionTitle: '别把扫描留到“下次再说”',
  cautionBody:
    'Subnautica 2 的很多卡点不是缺材料，而是漏扫。看到碎片、站点、外星科技或新生物，先扫，再处理背包。',
  faqs: [
    {
      title: 'Subnautica 2 先扫什么？',
      body: '先扫能解锁工具、基地系统、载具路线和路线延长升级的碎片或工作站。',
    },
    {
      title: 'Bioscanner 在哪里？',
      body: 'PC Gamer 把它放在 Alien Ruins Research Outpost 东南约 500m、bearing 130 左右的 Cicada 残骸。',
    },
    {
      title: '旧的生物扫描会算进 Biomods 吗？',
      body: '当前报道说不会。拿到 Bioscanner 后，重要生命体最好重新扫一遍。',
    },
  ],
  related: [
    {
      href: Routes.Subnautica2BioscannerBiomods,
      label: 'Bioscanner 和 Biomods',
    },
    { href: Routes.Subnautica2Biolab, label: 'Biolab 指南' },
    { href: Routes.Subnautica2ScannerStation, label: 'Scanner Station 指南' },
    { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery 指南' },
    { href: Routes.Subnautica2OxygenDepth, label: '氧气和下潜深度' },
    { href: Routes.Subnautica2AirTank, label: '气瓶和氧气' },
    { href: Routes.Subnautica2Beginner, label: '新手路线' },
  ],
  sourceBody:
    '2026 年 5 月 27 日核对 PC Gamer 的 Bioscanner、Biomods 和新手路线报道。抢先体验阶段的解锁顺序和残骸细节可能变化。',
  cardBody:
    '普通 Scanner 的蓝图顺序、Bioscanner 残骸线索、旧扫描不补算提醒，以及 Biomod 路线衔接。',
};

function getCopy(locale: Locale): ScannerCopy {
  return scannerCopy[locale] ?? scannerCopy.en;
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
    pathname: Routes.Subnautica2Scanner,
  });
}

export default async function ScannerGuidePage({
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
      icon={ScanLineIcon}
      locale={locale}
      pathname={Routes.Subnautica2Scanner}
      sources={sharedSources}
    />
  );
}
