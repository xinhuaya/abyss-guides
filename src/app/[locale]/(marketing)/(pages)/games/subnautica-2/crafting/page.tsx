import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { WrenchIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type CraftingCopy = ResourceGuideCopy & {
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
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-metal-farm-scan-locations/',
    label: 'PC Gamer Metal Farm guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-troilite-location/',
    label: 'PC Gamer Troilite guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-atacamite-location/',
    label: 'PC Gamer Atacamite guide',
  },
];

const craftingCopy: Record<string, CraftingCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Crafting Guide - Recipes and Blueprint Priorities',
      description:
        'A spoiler-light Subnautica 2 crafting guide covering recipe priorities, Scanner unlocks, storage, power, rare materials, Mangalloy, and Metal Farms.',
    },
    eyebrow: 'Subnautica 2 recipe tracker',
    title: 'Subnautica 2 Crafting Guide',
    description:
      'Crafting is not just a menu you open at base. It is the shape of progression: scan the right thing, protect rare inputs, build oxygen margin, then spend materials with a plan.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Prioritize recipes that increase survival time, scanning progress, storage, power, and route access. Treat rare materials as strategic inputs, especially around Mangalloy-style chains and Metal Farm setup. Subnautica 2 is Early Access, so recipe counts should be rechecked after patches.',
    contentsLabel: 'Contents',
    routeTitle: 'Crafting order that actually helps',
    routeSteps: [
      {
        title: 'Scan before hoarding',
        body: 'Blueprints decide what materials matter. If the Scanner route is behind, a full locker of random ore still feels useless.',
      },
      {
        title: 'Craft safety first',
        body: 'Oxygen, basic tools, storage, and power make every later recipe easier. Expensive toys can wait until the route home is reliable.',
      },
      {
        title: 'Map the ingredient chain',
        body: 'Processed items can hide several raw materials behind one icon. Before making an advanced ingot, check what else that same input unlocks.',
      },
      {
        title: 'Save rare samples',
        body: 'If a material is rare or tied to a production system, keep at least one spare sample until you know whether the current build needs it.',
      },
    ],
    visualTitle: 'Recipe decision board',
    visualItems: [
      {
        label: 'Unlock',
        value: 'Scan first',
        note: 'Recipes are only useful after the blueprint exists.',
      },
      {
        label: 'Spend',
        value: 'Safety first',
        note: 'O2, power, storage, and tools beat flashy upgrades.',
      },
      {
        label: 'Protect',
        value: 'Rare inputs',
        note: 'Keep samples before processing late-route materials.',
      },
    ],
    tableTitle: 'Recipe priority table',
    tableHeaders: ['Recipe group', 'Why it matters'],
    tableRows: [
      [
        'Scanner and blueprint tools',
        'They turn exploration into unlocks instead of a pile of unidentified parts.',
      ],
      [
        'Oxygen and safety',
        'More breathing room turns caves and wreck checks into planned trips.',
      ],
      [
        'Storage and base power',
        'A tidy base makes resource loops faster and keeps co-op from becoming inventory chaos.',
      ],
      [
        'Vehicle and route upgrades',
        'Craft these when they open a route you can name, not just because the menu allows it.',
      ],
      [
        'Rare processed materials',
        'Mangalloy-style chains can consume Atacamite, Troilite, or other scarce inputs. Verify before spending all of them.',
      ],
    ],
    cautionTitle: 'Do not spend every rare material',
    cautionBody:
      'Current reporting around Metal Farms and rare materials makes one rule worth keeping: do not process every rare sample the moment you find it. Keep a spare until the route, recipe, and production use are clear.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'What should I craft first in Subnautica 2?',
        body: 'Craft the items that improve survival and information first: Scanner progress, oxygen margin, storage, power, and basic route tools.',
      },
      {
        title: 'Should I craft advanced ingots as soon as I can?',
        body: 'Usually no. Check whether the ingredients are rare, whether a production system needs a sample, and whether the upgrade opens a route you actually need.',
      },
      {
        title: 'Will recipe data change?',
        body: 'Yes, it can. Subnautica 2 is in Early Access, so recipe counts, station requirements, and material availability should be checked after patches.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker Guide' },
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather Guide' },
      {
        href: Routes.Subnautica2ScannerStation,
        label: 'Scanner Station Guide',
      },
      { href: Routes.Subnautica2Beacon, label: 'Beacon Guide' },
      { href: Routes.Subnautica2RepairTool, label: 'Repair Tool Guide' },
      { href: Routes.Subnautica2Sulfur, label: 'Sulfur Location Guide' },
      { href: Routes.Subnautica2Quartz, label: 'Quartz Location Guide' },
      { href: Routes.Subnautica2Glass, label: 'Glass Recipe Guide' },
      { href: Routes.Subnautica2Lithium, label: 'Lithium Location Guide' },
      { href: Routes.Subnautica2PlasteelIngot, label: 'Plasteel Ingot Guide' },
      { href: Routes.Subnautica2Lead, label: 'Lead Location Guide' },
      {
        href: Routes.Subnautica2GermaniumIngot,
        label: 'Germanium Ingot Guide',
      },
      { href: Routes.Subnautica2Gold, label: 'Gold Location Guide' },
      { href: Routes.Subnautica2GoldIngot, label: 'Gold Ingot Guide' },
      { href: Routes.Subnautica2HeatTolerance, label: 'Heat Tolerance Guide' },
      { href: Routes.Subnautica2AngelComb, label: 'Angel Comb Guide' },
      { href: Routes.Subnautica2BloomBiofilm, label: 'Bloom Biofilm Guide' },
      { href: Routes.Subnautica2Salt, label: 'Salt Location Guide' },
      { href: Routes.Subnautica2MetalSalvage, label: 'Metal Salvage Guide' },
      { href: Routes.Subnautica2FiberMesh, label: 'Fiber Mesh Guide' },
      { href: Routes.Subnautica2Rubber, label: 'Rubber Recipe Guide' },
      { href: Routes.Subnautica2BasicFins, label: 'Basic Fins Guide' },
      { href: Routes.Subnautica2ImprovedFins, label: 'Improved Fins Guide' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium Location Guide' },
      { href: Routes.Subnautica2Copper, label: 'Copper Location' },
      { href: Routes.Subnautica2CopperIngot, label: 'Copper Ingot Guide' },
      {
        href: Routes.Subnautica2BatteryTerminal,
        label: 'Battery Terminal Guide',
      },
      {
        href: Routes.Subnautica2AdvancedBattery,
        label: 'Advanced Battery Guide',
      },
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell Guide' },
      {
        href: Routes.Subnautica2VehicleFabricator,
        label: 'Vehicle Fabricator Guide',
      },
      { href: Routes.Subnautica2Moonpool, label: 'Moonpool Guide' },
      { href: Routes.Subnautica2TadpoleDock, label: 'Tadpole Dock Guide' },
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery Guide' },
      {
        href: Routes.Subnautica2AcidicRaionPouch,
        label: 'Acidic Raion Pouch Guide',
      },
      { href: Routes.Subnautica2MildAcid, label: 'Mild Acid Guide' },
      { href: Routes.Subnautica2Processor, label: 'Processor Guide' },
      { href: Routes.Subnautica2Biolab, label: 'Biolab Guide' },
      { href: Routes.Subnautica2EchoLocation, label: 'Echo Location Guide' },
      {
        href: Routes.Subnautica2ModificationStation,
        label: 'Modification Station Guide',
      },
      {
        href: Routes.Subnautica2EngineEfficiency,
        label: 'Engine Efficiency Guide',
      },
      { href: Routes.Subnautica2CopperWire, label: 'Copper Wire Guide' },
      {
        href: Routes.Subnautica2HabitatBuilder,
        label: 'Habitat Builder Guide',
      },
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2SilverIngot, label: 'Silver Ingot Guide' },
      { href: Routes.Subnautica2WiringKit, label: 'Wiring Kit Guide' },
      { href: Routes.Subnautica2SystemChip, label: 'System Chip Guide' },
      {
        href: Routes.Subnautica2AdvancedWiringKit,
        label: 'Advanced Wiring Kit Guide',
      },
      { href: Routes.Subnautica2EnameledGlass, label: 'Enameled Glass Guide' },
      {
        href: Routes.Subnautica2CreatureEnamel,
        label: 'Creature Enamel Guide',
      },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 23, 2026 against Steam Early Access and current PC Gamer reporting on Metal Farms, Atacamite, and Troilite. Treat exact recipe counts as patch-sensitive.',
    cardKicker: 'Recipe tracker card',
    cardBody:
      'A crafting route for Scanner unlocks, O2, storage, power, processed materials, and rare-sample safety.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Crafting hub',
    cardVerifiedLabel: 'Verified',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 制作指南 - 配方、蓝图和材料链优先级',
      description:
        'Subnautica 2 中文制作指南，整理配方优先级、Scanner 解锁、氧气、储物、供电、稀有材料、Mangalloy 和 Metal Farm。',
    },
    eyebrow: 'Subnautica 2 配方追踪',
    title: 'Subnautica 2 制作指南',
    description:
      '制作不是回基地点一下菜单那么简单。它决定你的推进节奏：先扫到关键蓝图，保住稀有材料，做出氧气余量，再按路线花材料。',
    quickLabel: '快速答案',
    quickAnswer:
      '优先制作能增加生存时间、扫描进度、储物、供电和路线能力的东西。稀有材料不要当普通零件用，尤其是 Mangalloy 这类加工链和 Metal Farm 相关内容。Subnautica 2 仍是抢先体验，配方数量要随补丁复查。',
    contentsLabel: '目录',
    routeTitle: '真正有用的制作顺序',
    routeSteps: [
      {
        title: '先扫描，再囤货',
        body: '蓝图决定哪些材料有用。Scanner 路线没推进时，塞满一柜子的矿也会显得很尴尬。',
      },
      {
        title: '先做安全项目',
        body: '氧气、基础工具、储物和供电，会让后面所有配方都更好做。昂贵升级可以等回程路线稳定后再说。',
      },
      {
        title: '看完整材料链',
        body: '加工材料常常把好几种原料藏在一个图标后面。做高级锭之前，先看同一种材料还会解锁什么。',
      },
      {
        title: '保留稀有样本',
        body: '如果材料稀有，或者可能和生产系统有关，至少留一个样本，等确认当前版本是否还需要它。',
      },
    ],
    visualTitle: '配方决策板',
    visualItems: [
      {
        label: '解锁',
        value: '先扫描',
        note: '有蓝图以后，配方才真正有意义。',
      },
      {
        label: '花费',
        value: '先安全',
        note: 'O2、供电、储物和工具优先于炫酷升级。',
      },
      {
        label: '保留',
        value: '稀有材料',
        note: '后期材料加工前，先留样本。',
      },
    ],
    tableTitle: '配方优先级表',
    tableHeaders: ['配方组', '为什么重要'],
    tableRows: [
      ['Scanner 和蓝图工具', '把探索变成解锁，而不是一堆暂时看不懂的零件。'],
      ['氧气和安全', '更多氧气会把洞穴探索从慌乱变成计划。'],
      ['储物和基地供电', '整齐的基地会让资源路线更快，联机也不容易乱。'],
      [
        '载具和路线升级',
        '当它能打开一条明确路线时再做，不要只因为菜单亮了就做。',
      ],
      [
        '稀有加工材料',
        'Mangalloy 这类链条可能会消耗 Atacamite、Troilite 等稀缺材料，花光前先核对。',
      ],
    ],
    cautionTitle: '不要花光所有稀有材料',
    cautionBody:
      '围绕 Metal Farm 和稀有材料的当前资料给了一个很实用的规则：刚找到稀有样本时，不要马上全部加工掉。至少留一个，等路线、配方和生产用途都确认后再花。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 前期先做什么？',
        body: '先做能提高生存和信息量的东西：Scanner 进度、氧气余量、储物、供电和基础路线工具。',
      },
      {
        title: '高级锭能做就马上做吗？',
        body: '通常不要。先看材料是否稀有、生产系统是否需要样本，以及这个升级是否真的打开你需要的路线。',
      },
      {
        title: '配方数据会变吗？',
        body: '会。Subnautica 2 是抢先体验，配方数量、制作站要求和材料可获得性都可能随补丁变化。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner 攻略' },
      { href: Routes.Subnautica2AirTank, label: '气瓶和氧气' },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker 指南' },
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather 指南' },
      { href: Routes.Subnautica2ScannerStation, label: 'Scanner Station 指南' },
      { href: Routes.Subnautica2Beacon, label: 'Beacon 指南' },
      { href: Routes.Subnautica2RepairTool, label: 'Repair Tool 指南' },
      { href: Routes.Subnautica2Sulfur, label: 'Sulfur Location Guide' },
      { href: Routes.Subnautica2Quartz, label: 'Quartz Location Guide' },
      { href: Routes.Subnautica2Glass, label: 'Glass 配方指南' },
      { href: Routes.Subnautica2Lithium, label: 'Lithium Location Guide' },
      { href: Routes.Subnautica2Lead, label: 'Lead Location Guide' },
      { href: Routes.Subnautica2Gold, label: 'Gold Location Guide' },
      { href: Routes.Subnautica2HeatTolerance, label: 'Heat Tolerance Guide' },
      { href: Routes.Subnautica2AngelComb, label: 'Angel Comb Guide' },
      { href: Routes.Subnautica2BloomBiofilm, label: 'Bloom Biofilm Guide' },
      { href: Routes.Subnautica2Salt, label: 'Salt Location Guide' },
      { href: Routes.Subnautica2MetalSalvage, label: 'Metal Salvage 指南' },
      { href: Routes.Subnautica2FiberMesh, label: 'Fiber Mesh 指南' },
      { href: Routes.Subnautica2Rubber, label: 'Rubber 配方指南' },
      { href: Routes.Subnautica2BasicFins, label: 'Basic Fins 指南' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium 位置指南' },
      { href: Routes.Subnautica2Copper, label: 'Copper 位置' },
      {
        href: Routes.Subnautica2BatteryTerminal,
        label: 'Battery Terminal Guide',
      },
      {
        href: Routes.Subnautica2AdvancedBattery,
        label: 'Advanced Battery Guide',
      },
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell Guide' },
      {
        href: Routes.Subnautica2VehicleFabricator,
        label: 'Vehicle Fabricator Guide',
      },
      { href: Routes.Subnautica2Moonpool, label: 'Moonpool 指南' },
      { href: Routes.Subnautica2TadpoleDock, label: 'Tadpole Dock Guide' },
      {
        href: Routes.Subnautica2AcidicRaionPouch,
        label: 'Acidic Raion Pouch Guide',
      },
      { href: Routes.Subnautica2MildAcid, label: 'Mild Acid Guide' },
      { href: Routes.Subnautica2Processor, label: 'Processor Guide' },
      { href: Routes.Subnautica2Biolab, label: 'Biolab Guide' },
      { href: Routes.Subnautica2EchoLocation, label: 'Echo Location Guide' },
      {
        href: Routes.Subnautica2ModificationStation,
        label: 'Modification Station Guide',
      },
      {
        href: Routes.Subnautica2EngineEfficiency,
        label: 'Engine Efficiency Guide',
      },
      { href: Routes.Subnautica2Silver, label: 'Silver 位置' },
      { href: Routes.Subnautica2SilverIngot, label: 'Silver Ingot 指南' },
      { href: Routes.Subnautica2CopperIngot, label: 'Copper Ingot 指南' },
      {
        href: Routes.Subnautica2AdvancedWiringKit,
        label: 'Advanced Wiring Kit 指南',
      },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 23 日核对 Steam 抢先体验页面，以及 PC Gamer 当前关于 Metal Farm、Atacamite、Troilite 的报道。精确配方数量需要随补丁复查。',
    cardKicker: '配方追踪卡',
    cardBody:
      '围绕 Scanner 解锁、O2、储物、供电、加工材料和稀有样本安全来安排制作顺序。',
    cardTypeLabel: '类型',
    cardTypeValue: '制作中心',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
  ru: {
    metadata: {
      title: 'Subnautica 2 крафт - рецепты и приоритеты чертежей',
      description:
        'Русский гид по крафту Subnautica 2: рецепты, Scanner, кислород, хранение, питание, редкие материалы, Mangalloy и Metal Farm.',
    },
    eyebrow: 'Трекер рецептов Subnautica 2',
    title: 'Subnautica 2: крафт',
    description:
      'Крафт здесь не просто меню на базе. Это план прогресса: сначала сканы, потом запас кислорода, хранение, питание и только затем дорогие траты.',
    quickLabel: 'Короткий ответ',
    quickAnswer:
      'Сначала крафтите то, что дает выживание, сканы, хранение, питание и доступ к маршрутам. Редкие материалы тратьте осторожно, особенно в цепочках вроде Mangalloy и Metal Farm. Рецепты в Early Access могут меняться.',
    contentsLabel: 'Содержание',
    routeTitle: 'Полезный порядок крафта',
    routeSteps: [
      {
        title: 'Сначала сканировать',
        body: 'Чертежи решают, какие материалы нужны. Без прогресса Scanner полный шкаф руды мало помогает.',
      },
      {
        title: 'Сначала безопасность',
        body: 'Кислород, базовые инструменты, хранение и питание облегчают все следующие рецепты.',
      },
      {
        title: 'Проверять всю цепочку',
        body: 'За обработанным материалом могут стоять несколько редких ресурсов. Перед advanced ingot проверьте, где еще нужен тот же ингредиент.',
      },
      {
        title: 'Хранить редкие образцы',
        body: 'Если ресурс редкий или связан с производством, держите один запасной образец до проверки текущей версии.',
      },
    ],
    visualTitle: 'Доска решений',
    visualItems: [
      {
        label: 'Открыть',
        value: 'Scan first',
        note: 'Рецепт полезен только после чертежа.',
      },
      {
        label: 'Тратить',
        value: 'Safety first',
        note: 'O2, питание, хранение и инструменты важнее красивых апгрейдов.',
      },
      {
        label: 'Беречь',
        value: 'Rare inputs',
        note: 'Не перерабатывайте все редкие материалы сразу.',
      },
    ],
    tableTitle: 'Приоритет рецептов',
    tableHeaders: ['Группа', 'Почему важно'],
    tableRows: [
      ['Scanner и чертежи', 'Превращают исследование в реальные открытия.'],
      ['O2 и безопасность', 'Дают время для пещер и дальних проверок.'],
      [
        'Хранение и питание базы',
        'Ускоряют маршруты и уменьшают хаос в co-op.',
      ],
      [
        'Апгрейды транспорта',
        'Делайте их, когда они открывают понятный маршрут.',
      ],
      [
        'Редкие обработанные материалы',
        'Mangalloy-цепочки могут тратить Atacamite, Troilite и другие редкие входы.',
      ],
    ],
    cautionTitle: 'Не тратьте все редкие материалы',
    cautionBody:
      'Правило простое: если материал редкий, не перерабатывайте все сразу. Оставьте образец, пока не ясно, нужен ли он для рецепта или производства.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Что крафтить первым?',
        body: 'Scanner, запас кислорода, хранение, питание и базовые инструменты для маршрутов.',
      },
      {
        title: 'Делать advanced ingots сразу?',
        body: 'Обычно нет. Сначала проверьте редкость ингредиентов и реальную пользу апгрейда.',
      },
      {
        title: 'Рецепты будут меняться?',
        body: 'Могут. Subnautica 2 в Early Access, так что цифры и станции стоит перепроверять после патчей.',
      },
    ],
    readNextTitle: 'Дальше',
    related: [
      { href: Routes.Subnautica2Resources, label: 'Ресурсы' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank и O2' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium Location Guide' },
      { href: Routes.Subnautica2Glass, label: 'Glass Recipe Guide' },
      { href: Routes.Subnautica2Copper, label: 'Copper' },
      {
        href: Routes.Subnautica2BatteryTerminal,
        label: 'Battery Terminal Guide',
      },
      {
        href: Routes.Subnautica2AdvancedBattery,
        label: 'Advanced Battery Guide',
      },
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell Guide' },
      {
        href: Routes.Subnautica2VehicleFabricator,
        label: 'Vehicle Fabricator Guide',
      },
      { href: Routes.Subnautica2TadpoleDock, label: 'Tadpole Dock Guide' },
      { href: Routes.Subnautica2Silver, label: 'Silver' },
    ],
    sourcesTitle: 'Источники',
    sourceBody:
      'Проверено 23 мая 2026 по Steam Early Access и текущим материалам PC Gamer про Metal Farm, Atacamite и Troilite. Точные числа рецептов зависят от патчей.',
    cardKicker: 'Recipe tracker card',
    cardBody:
      'Порядок крафта для Scanner, O2, хранения, питания, обработанных и редких материалов.',
    cardTypeLabel: 'Тип',
    cardTypeValue: 'Хаб крафта',
    cardVerifiedLabel: 'Проверено',
    cardStatusLabel: 'Статус',
    cardStatusValue: 'Early Access',
  },
  de: {
    metadata: {
      title: 'Subnautica 2 Crafting - Rezepte und Blueprint-Prioritäten',
      description:
        'Deutscher Crafting-Guide für Subnautica 2: Rezepte, Scanner, O2, Lager, Strom, seltene Materialien, Mangalloy und Metal Farm.',
    },
    eyebrow: 'Subnautica 2 Rezepttracker',
    title: 'Subnautica 2 Crafting-Guide',
    description:
      'Crafting ist mehr als ein Menü in der Basis. Es ist dein Fortschrittsplan: scannen, O2 sichern, Lager bauen, Strom legen und dann erst teuer investieren.',
    quickLabel: 'Kurzantwort',
    quickAnswer:
      'Priorisiere Rezepte für Überleben, Scanner-Fortschritt, Lager, Strom und neue Routen. Seltene Materialien sind strategische Eingaben, besonders bei Mangalloy-Ketten und Metal Farms. Early Access kann Rezeptzahlen ändern.',
    contentsLabel: 'Inhalt',
    routeTitle: 'Crafting-Reihenfolge',
    routeSteps: [
      {
        title: 'Erst scannen',
        body: 'Blueprints entscheiden, welche Materialien zählen. Ohne Scanner-Fortschritt hilft ein voller Schrank Erz wenig.',
      },
      {
        title: 'Sicherheit zuerst',
        body: 'O2, einfache Tools, Lager und Strom machen jedes spätere Rezept leichter.',
      },
      {
        title: 'Die ganze Kette prüfen',
        body: 'Verarbeitete Materialien verstecken oft mehrere Rohstoffe. Vor advanced ingots prüfen, wofür derselbe Input noch gebraucht wird.',
      },
      {
        title: 'Seltene Proben behalten',
        body: 'Ist ein Material selten oder produktionsrelevant, behalte eine Probe, bis der aktuelle Build klar ist.',
      },
    ],
    visualTitle: 'Rezept-Entscheidungen',
    visualItems: [
      {
        label: 'Unlock',
        value: 'Scan first',
        note: 'Rezepte helfen erst mit Blueprint.',
      },
      {
        label: 'Spend',
        value: 'Safety first',
        note: 'O2, Strom, Lager und Tools zuerst.',
      },
      {
        label: 'Protect',
        value: 'Rare inputs',
        note: 'Seltene Materialien nicht sofort komplett verarbeiten.',
      },
    ],
    tableTitle: 'Rezeptpriorität',
    tableHeaders: ['Gruppe', 'Warum wichtig'],
    tableRows: [
      ['Scanner und Blueprints', 'Machen aus Erkundung echte Freischaltungen.'],
      ['O2 und Sicherheit', 'Geben Zeit für Höhlen und längere Checks.'],
      ['Lager und Basisstrom', 'Machen Routen schneller und Co-op sauberer.'],
      ['Fahrzeug-Upgrades', 'Craften, wenn sie eine benannte Route öffnen.'],
      [
        'Seltene verarbeitete Materialien',
        'Mangalloy-Ketten können Atacamite, Troilite und knappe Inputs verbrauchen.',
      ],
    ],
    cautionTitle: 'Nicht alle seltenen Materialien ausgeben',
    cautionBody:
      'Wenn ein Material selten ist, verarbeite nicht alles sofort. Behalte eine Probe, bis Rezept, Route und Produktionsnutzen klar sind.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Was zuerst craften?',
        body: 'Scanner-Fortschritt, O2, Lager, Strom und einfache Route-Tools.',
      },
      {
        title: 'Advanced ingots sofort herstellen?',
        body: 'Meist nein. Erst prüfen, ob die Inputs selten sind und ob der Upgrade wirklich eine Route öffnet.',
      },
      {
        title: 'Ändern sich Rezepte?',
        body: 'Ja, möglich. Subnautica 2 ist Early Access, daher nach Patches prüfen.',
      },
    ],
    readNextTitle: 'Weiterlesen',
    related: [
      { href: Routes.Subnautica2Resources, label: 'Ressourcen' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank und O2' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium Location Guide' },
      { href: Routes.Subnautica2Glass, label: 'Glass Recipe Guide' },
      { href: Routes.Subnautica2Copper, label: 'Copper finden' },
      {
        href: Routes.Subnautica2BatteryTerminal,
        label: 'Battery Terminal Guide',
      },
      {
        href: Routes.Subnautica2AdvancedBattery,
        label: 'Advanced Battery Guide',
      },
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell Guide' },
      {
        href: Routes.Subnautica2VehicleFabricator,
        label: 'Vehicle Fabricator Guide',
      },
      { href: Routes.Subnautica2TadpoleDock, label: 'Tadpole Dock Guide' },
      { href: Routes.Subnautica2Silver, label: 'Silver finden' },
    ],
    sourcesTitle: 'Quellen',
    sourceBody:
      'Geprüft am 23. Mai 2026 mit Steam Early Access und PC Gamer zu Metal Farm, Atacamite und Troilite. Exakte Rezeptzahlen bleiben patch-sensitiv.',
    cardKicker: 'Recipe tracker card',
    cardBody:
      'Crafting-Route für Scanner, O2, Lager, Strom, verarbeitete und seltene Materialien.',
    cardTypeLabel: 'Typ',
    cardTypeValue: 'Crafting-Hub',
    cardVerifiedLabel: 'Geprüft',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  fr: {
    metadata: {
      title: 'Subnautica 2 crafting - recettes et priorités de plans',
      description:
        'Guide français du crafting Subnautica 2: recettes, Scanner, O2, stockage, énergie, matériaux rares, Mangalloy et Metal Farm.',
    },
    eyebrow: 'Suivi recettes Subnautica 2',
    title: 'Guide crafting Subnautica 2',
    description:
      'Le crafting n’est pas juste un menu de base. C’est ton plan de progression: scanner, sécuriser l’O2, ranger, alimenter la base, puis dépenser.',
    quickLabel: 'Réponse courte',
    quickAnswer:
      'Priorise les recettes qui améliorent survie, Scanner, stockage, énergie et accès aux routes. Les matériaux rares doivent être traités comme des entrées stratégiques, surtout pour Mangalloy et Metal Farm. Les recettes peuvent changer en Early Access.',
    contentsLabel: 'Sommaire',
    routeTitle: 'Ordre de crafting utile',
    routeSteps: [
      {
        title: 'Scanner avant de stocker',
        body: 'Les plans décident des matériaux utiles. Sans Scanner, un coffre plein de minerais ne règle pas grand-chose.',
      },
      {
        title: 'Sécurité d’abord',
        body: 'O2, outils de base, stockage et énergie rendent toutes les recettes suivantes plus simples.',
      },
      {
        title: 'Lire toute la chaîne',
        body: 'Un matériau traité peut cacher plusieurs ressources. Vérifie les autres usages avant un advanced ingot.',
      },
      {
        title: 'Garder les échantillons rares',
        body: 'Si le matériau est rare ou lié à la production, garde une pièce tant que le build actuel n’est pas clair.',
      },
    ],
    visualTitle: 'Tableau de décision',
    visualItems: [
      {
        label: 'Débloquer',
        value: 'Scan first',
        note: 'La recette sert vraiment après le plan.',
      },
      {
        label: 'Dépenser',
        value: 'Safety first',
        note: 'O2, énergie, stockage et outils avant le luxe.',
      },
      {
        label: 'Protéger',
        value: 'Rare inputs',
        note: 'Ne transforme pas tout le rare trop tôt.',
      },
    ],
    tableTitle: 'Priorité des recettes',
    tableHeaders: ['Groupe', 'Pourquoi ça compte'],
    tableRows: [
      [
        'Scanner et plans',
        'Transforment l’exploration en déblocages concrets.',
      ],
      [
        'O2 et sécurité',
        'Donnent du temps pour les grottes et les sorties longues.',
      ],
      ['Stockage et énergie', 'Rendent les boucles ressources plus propres.'],
      [
        'Améliorations véhicule',
        'À faire quand elles ouvrent une route claire.',
      ],
      [
        'Matériaux rares traités',
        'Les chaînes Mangalloy peuvent consommer Atacamite, Troilite et autres entrées rares.',
      ],
    ],
    cautionTitle: 'Ne dépense pas tout le rare',
    cautionBody:
      'Si un matériau est rare, ne le transforme pas entièrement dès la découverte. Garde un échantillon jusqu’à connaître recette, route et usage de production.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Que crafter en premier?',
        body: 'Scanner, marge d’O2, stockage, énergie et outils de route de base.',
      },
      {
        title: 'Faire les advanced ingots tout de suite?',
        body: 'Souvent non. Vérifie la rareté des ingrédients et l’utilité réelle de l’amélioration.',
      },
      {
        title: 'Les recettes changent?',
        body: 'Oui, possible. Subnautica 2 est en Early Access, donc il faut vérifier après les patchs.',
      },
    ],
    readNextTitle: 'Lire ensuite',
    related: [
      { href: Routes.Subnautica2Resources, label: 'Ressources' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank et O2' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium Location Guide' },
      { href: Routes.Subnautica2Glass, label: 'Glass Recipe Guide' },
      { href: Routes.Subnautica2Copper, label: 'Où trouver Copper' },
      {
        href: Routes.Subnautica2BatteryTerminal,
        label: 'Battery Terminal Guide',
      },
      {
        href: Routes.Subnautica2AdvancedBattery,
        label: 'Advanced Battery Guide',
      },
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell Guide' },
      {
        href: Routes.Subnautica2VehicleFabricator,
        label: 'Vehicle Fabricator Guide',
      },
      { href: Routes.Subnautica2TadpoleDock, label: 'Tadpole Dock Guide' },
      { href: Routes.Subnautica2Silver, label: 'Où trouver Silver' },
    ],
    sourcesTitle: 'Sources',
    sourceBody:
      'Vérifié le 23 mai 2026 avec Steam Early Access et PC Gamer sur Metal Farm, Atacamite et Troilite. Les chiffres exacts restent sensibles aux patchs.',
    cardKicker: 'Recipe tracker card',
    cardBody:
      'Route crafting pour Scanner, O2, stockage, énergie, matériaux traités et rares.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Hub crafting',
    cardVerifiedLabel: 'Vérifié',
    cardStatusLabel: 'Statut',
    cardStatusValue: 'Early Access',
  },
  'pt-BR': {
    metadata: {
      title: 'Subnautica 2 crafting - receitas e prioridades de blueprint',
      description:
        'Guia brasileiro de crafting em Subnautica 2: receitas, Scanner, O2, armazenamento, energia, materiais raros, Mangalloy e Metal Farm.',
    },
    eyebrow: 'Rastreador de receitas Subnautica 2',
    title: 'Guia de crafting de Subnautica 2',
    description:
      'Crafting não é só abrir um menu na base. É seu mapa de progressão: escanear, ganhar O2, organizar armazenamento, ligar energia e só então gastar caro.',
    quickLabel: 'Resposta rápida',
    quickAnswer:
      'Priorize receitas que aumentam sobrevivência, Scanner, armazenamento, energia e acesso a rotas. Materiais raros são estratégicos, especialmente em cadeias de Mangalloy e Metal Farm. Receitas podem mudar no Early Access.',
    contentsLabel: 'Conteúdo',
    routeTitle: 'Ordem de crafting que ajuda',
    routeSteps: [
      {
        title: 'Escanear antes de estocar',
        body: 'Blueprints dizem quais materiais importam. Sem Scanner, um baú cheio de minério ainda parece perdido.',
      },
      {
        title: 'Segurança primeiro',
        body: 'O2, ferramentas básicas, armazenamento e energia deixam todas as receitas seguintes mais fáceis.',
      },
      {
        title: 'Mapear a cadeia inteira',
        body: 'Material processado pode esconder várias matérias-primas. Confira outros usos antes de fazer ingots avançados.',
      },
      {
        title: 'Guardar amostras raras',
        body: 'Se o material é raro ou ligado à produção, guarde uma amostra até confirmar o build atual.',
      },
    ],
    visualTitle: 'Quadro de decisão',
    visualItems: [
      {
        label: 'Desbloquear',
        value: 'Scan first',
        note: 'Receita só ajuda depois do blueprint.',
      },
      {
        label: 'Gastar',
        value: 'Safety first',
        note: 'O2, energia, armazenamento e ferramentas primeiro.',
      },
      {
        label: 'Proteger',
        value: 'Rare inputs',
        note: 'Não processe todo material raro cedo demais.',
      },
    ],
    tableTitle: 'Prioridade de receitas',
    tableHeaders: ['Grupo', 'Por que importa'],
    tableRows: [
      ['Scanner e blueprints', 'Transformam exploração em desbloqueios reais.'],
      ['O2 e segurança', 'Dão tempo para cavernas e saídas longas.'],
      ['Armazenamento e energia', 'Deixam loops de recurso mais limpos.'],
      ['Upgrades de veículo', 'Faça quando abrirem uma rota clara.'],
      [
        'Materiais raros processados',
        'Cadeias de Mangalloy podem consumir Atacamite, Troilite e entradas raras.',
      ],
    ],
    cautionTitle: 'Não gaste todo material raro',
    cautionBody:
      'Se o material é raro, não processe tudo assim que achar. Guarde uma amostra até entender receita, rota e uso de produção.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'O que craftar primeiro?',
        body: 'Scanner, margem de O2, armazenamento, energia e ferramentas básicas de rota.',
      },
      {
        title: 'Fazer advanced ingots na hora?',
        body: 'Geralmente não. Veja se os ingredientes são raros e se o upgrade realmente abre uma rota.',
      },
      {
        title: 'As receitas mudam?',
        body: 'Podem mudar. Subnautica 2 está em Early Access, então confira depois de patches.',
      },
    ],
    readNextTitle: 'Leia a seguir',
    related: [
      { href: Routes.Subnautica2Resources, label: 'Recursos' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank e O2' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium Location Guide' },
      { href: Routes.Subnautica2Glass, label: 'Glass Recipe Guide' },
      { href: Routes.Subnautica2Copper, label: 'Onde encontrar Copper' },
      {
        href: Routes.Subnautica2BatteryTerminal,
        label: 'Battery Terminal Guide',
      },
      {
        href: Routes.Subnautica2AdvancedBattery,
        label: 'Advanced Battery Guide',
      },
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell Guide' },
      {
        href: Routes.Subnautica2VehicleFabricator,
        label: 'Vehicle Fabricator Guide',
      },
      { href: Routes.Subnautica2TadpoleDock, label: 'Tadpole Dock Guide' },
      { href: Routes.Subnautica2Silver, label: 'Onde encontrar Silver' },
    ],
    sourcesTitle: 'Fontes',
    sourceBody:
      'Verificado em 23 de maio de 2026 com Steam Early Access e PC Gamer sobre Metal Farm, Atacamite e Troilite. Números exatos de receita podem mudar com patches.',
    cardKicker: 'Recipe tracker card',
    cardBody:
      'Rota de crafting para Scanner, O2, armazenamento, energia, processados e materiais raros.',
    cardTypeLabel: 'Tipo',
    cardTypeValue: 'Hub de crafting',
    cardVerifiedLabel: 'Verificado',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  'es-419': {
    metadata: {
      title: 'Subnautica 2 crafting - recetas y prioridades de blueprint',
      description:
        'Guía en español latino de crafting en Subnautica 2: recetas, Scanner, O2, almacenamiento, energía, materiales raros, Mangalloy y Metal Farm.',
    },
    eyebrow: 'Rastreador de recetas Subnautica 2',
    title: 'Guía de crafting de Subnautica 2',
    description:
      'El crafting no es solo un menú de base. Es tu mapa de progreso: escanear, ganar O2, ordenar almacenamiento, encender energía y gastar con cabeza.',
    quickLabel: 'Respuesta rápida',
    quickAnswer:
      'Prioriza recetas que aumentan supervivencia, Scanner, almacenamiento, energía y acceso a rutas. Los materiales raros son estratégicos, sobre todo en cadenas de Mangalloy y Metal Farm. Las recetas pueden cambiar en Early Access.',
    contentsLabel: 'Contenido',
    routeTitle: 'Orden de crafting útil',
    routeSteps: [
      {
        title: 'Escanear antes de guardar',
        body: 'Los blueprints dicen qué materiales importan. Sin Scanner, un cofre lleno de mineral sigue sin resolver mucho.',
      },
      {
        title: 'Seguridad primero',
        body: 'O2, herramientas básicas, almacenamiento y energía hacen más fáciles todas las recetas siguientes.',
      },
      {
        title: 'Mapear toda la cadena',
        body: 'Un material procesado puede esconder varias materias primas. Revisa otros usos antes de advanced ingots.',
      },
      {
        title: 'Guardar muestras raras',
        body: 'Si el material es raro o sirve para producción, guarda una muestra hasta confirmar el build actual.',
      },
    ],
    visualTitle: 'Tablero de decisión',
    visualItems: [
      {
        label: 'Desbloquear',
        value: 'Scan first',
        note: 'La receta sirve cuando ya existe el blueprint.',
      },
      {
        label: 'Gastar',
        value: 'Safety first',
        note: 'O2, energía, almacenamiento y herramientas primero.',
      },
      {
        label: 'Proteger',
        value: 'Rare inputs',
        note: 'No proceses todo lo raro demasiado pronto.',
      },
    ],
    tableTitle: 'Prioridad de recetas',
    tableHeaders: ['Grupo', 'Por qué importa'],
    tableRows: [
      ['Scanner y blueprints', 'Convierten exploración en desbloqueos reales.'],
      ['O2 y seguridad', 'Dan tiempo para cuevas y salidas largas.'],
      ['Almacenamiento y energía', 'Hacen más limpios los loops de recursos.'],
      ['Upgrades de vehículo', 'Hazlos cuando abran una ruta clara.'],
      [
        'Materiales raros procesados',
        'Cadenas de Mangalloy pueden consumir Atacamite, Troilite y entradas raras.',
      ],
    ],
    cautionTitle: 'No gastes todo material raro',
    cautionBody:
      'Si el material es raro, no lo proceses todo al encontrarlo. Guarda una muestra hasta entender receta, ruta y uso de producción.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '¿Qué craftar primero?',
        body: 'Scanner, margen de O2, almacenamiento, energía y herramientas básicas de ruta.',
      },
      {
        title: '¿Hacer advanced ingots de inmediato?',
        body: 'Normalmente no. Revisa si los ingredientes son raros y si el upgrade abre una ruta real.',
      },
      {
        title: '¿Las recetas cambian?',
        body: 'Pueden cambiar. Subnautica 2 está en Early Access, así que revisa después de parches.',
      },
    ],
    readNextTitle: 'Leer después',
    related: [
      { href: Routes.Subnautica2Resources, label: 'Recursos' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank y O2' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium Location Guide' },
      { href: Routes.Subnautica2Glass, label: 'Glass Recipe Guide' },
      { href: Routes.Subnautica2Copper, label: 'Dónde encontrar Copper' },
      {
        href: Routes.Subnautica2BatteryTerminal,
        label: 'Battery Terminal Guide',
      },
      {
        href: Routes.Subnautica2AdvancedBattery,
        label: 'Advanced Battery Guide',
      },
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell Guide' },
      {
        href: Routes.Subnautica2VehicleFabricator,
        label: 'Vehicle Fabricator Guide',
      },
      { href: Routes.Subnautica2TadpoleDock, label: 'Tadpole Dock Guide' },
      { href: Routes.Subnautica2Silver, label: 'Dónde encontrar Silver' },
    ],
    sourcesTitle: 'Fuentes',
    sourceBody:
      'Verificado el 23 de mayo de 2026 con Steam Early Access y PC Gamer sobre Metal Farm, Atacamite y Troilite. Los números exactos pueden cambiar con parches.',
    cardKicker: 'Recipe tracker card',
    cardBody:
      'Ruta de crafting para Scanner, O2, almacenamiento, energía, procesados y materiales raros.',
    cardTypeLabel: 'Tipo',
    cardTypeValue: 'Hub de crafting',
    cardVerifiedLabel: 'Verificado',
    cardStatusLabel: 'Estado',
    cardStatusValue: 'Early Access',
  },
  ko: {
    metadata: {
      title: 'Subnautica 2 제작 가이드 - 레시피와 설계도 우선순위',
      description:
        'Subnautica 2 한국어 제작 가이드. 레시피, Scanner, O2, 보관, 전력, 희귀 재료, Mangalloy, Metal Farm을 정리합니다.',
    },
    eyebrow: 'Subnautica 2 레시피 추적',
    title: 'Subnautica 2 제작 가이드',
    description:
      '제작은 기지에서 여는 메뉴가 아닙니다. 진행 계획입니다. 먼저 스캔하고, O2와 보관을 안정시키고, 전력을 만든 뒤 재료를 써야 합니다.',
    quickLabel: '빠른 답',
    quickAnswer:
      '생존 시간, Scanner 진행, 보관, 전력, 루트 접근을 늘리는 제작을 먼저 하세요. Mangalloy나 Metal Farm처럼 희귀 재료가 들어가는 체인은 신중하게 다뤄야 합니다. Early Access라 레시피는 바뀔 수 있습니다.',
    contentsLabel: '목차',
    routeTitle: '도움 되는 제작 순서',
    routeSteps: [
      {
        title: '쌓기 전에 스캔',
        body: '설계도가 어떤 재료가 필요한지 정합니다. Scanner 진행이 없으면 광석이 많아도 막힙니다.',
      },
      {
        title: '안전부터 제작',
        body: 'O2, 기본 도구, 보관, 전력이 이후 모든 제작을 쉽게 만듭니다.',
      },
      {
        title: '재료 체인 확인',
        body: '가공 재료 뒤에는 여러 원료가 숨어 있을 수 있습니다. advanced ingot 전에 다른 사용처를 확인하세요.',
      },
      {
        title: '희귀 샘플 보관',
        body: '재료가 희귀하거나 생산 시스템과 연결되면 현재 버전을 확인할 때까지 하나는 남기세요.',
      },
    ],
    visualTitle: '레시피 결정 보드',
    visualItems: [
      {
        label: '해금',
        value: 'Scan first',
        note: '설계도가 있어야 레시피가 의미 있습니다.',
      },
      {
        label: '사용',
        value: 'Safety first',
        note: 'O2, 전력, 보관, 도구가 먼저입니다.',
      },
      {
        label: '보호',
        value: 'Rare inputs',
        note: '희귀 재료를 너무 빨리 전부 가공하지 마세요.',
      },
    ],
    tableTitle: '레시피 우선순위',
    tableHeaders: ['그룹', '중요한 이유'],
    tableRows: [
      ['Scanner와 설계도', '탐험을 실제 해금으로 바꿉니다.'],
      ['O2와 안전', '동굴과 긴 루트를 계획할 시간을 줍니다.'],
      ['보관과 전력', '자원 루프를 정리하고 협동 플레이 혼란을 줄입니다.'],
      ['탈것 업그레이드', '이름 붙일 수 있는 루트를 열 때 제작하세요.'],
      [
        '희귀 가공 재료',
        'Mangalloy 체인은 Atacamite, Troilite 같은 희귀 입력을 소비할 수 있습니다.',
      ],
    ],
    cautionTitle: '희귀 재료를 전부 쓰지 않기',
    cautionBody:
      '희귀한 재료라면 찾자마자 전부 가공하지 마세요. 레시피, 루트, 생산 용도가 확실해질 때까지 하나는 남기는 편이 안전합니다.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '무엇을 먼저 제작해야 하나요?',
        body: 'Scanner 진행, O2 여유, 보관, 전력, 기본 루트 도구를 먼저 제작하세요.',
      },
      {
        title: 'advanced ingot을 바로 만들어도 되나요?',
        body: '대부분은 기다리는 편이 좋습니다. 재료가 희귀한지, 업그레이드가 필요한 루트를 여는지 확인하세요.',
      },
      {
        title: '레시피가 바뀔 수 있나요?',
        body: '가능합니다. Subnautica 2는 Early Access라 패치 후 다시 확인해야 합니다.',
      },
    ],
    readNextTitle: '다음 글',
    related: [
      { href: Routes.Subnautica2Resources, label: '자원 가이드' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner 가이드' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank와 O2' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium Location Guide' },
      { href: Routes.Subnautica2Glass, label: 'Glass Recipe Guide' },
      { href: Routes.Subnautica2Copper, label: 'Copper 위치' },
      {
        href: Routes.Subnautica2BatteryTerminal,
        label: 'Battery Terminal Guide',
      },
      {
        href: Routes.Subnautica2AdvancedBattery,
        label: 'Advanced Battery Guide',
      },
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell Guide' },
      {
        href: Routes.Subnautica2VehicleFabricator,
        label: 'Vehicle Fabricator Guide',
      },
      { href: Routes.Subnautica2TadpoleDock, label: 'Tadpole Dock Guide' },
      { href: Routes.Subnautica2Silver, label: 'Silver 위치' },
    ],
    sourcesTitle: '출처 메모',
    sourceBody:
      '2026년 5월 23일 Steam Early Access 페이지와 PC Gamer의 Metal Farm, Atacamite, Troilite 보도를 확인했습니다. 정확한 레시피 수치는 패치 영향을 받을 수 있습니다.',
    cardKicker: 'Recipe tracker card',
    cardBody:
      'Scanner, O2, 보관, 전력, 가공 재료, 희귀 샘플을 위한 제작 루트입니다.',
    cardTypeLabel: '유형',
    cardTypeValue: '제작 허브',
    cardVerifiedLabel: '확인',
    cardStatusLabel: '상태',
    cardStatusValue: 'Early Access',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 制作ガイド - レシピと設計図優先度',
      description:
        'Subnautica 2 日本語制作ガイド。レシピ、Scanner、O2、保管、電力、レア素材、Mangalloy、Metal Farmを整理します。',
    },
    eyebrow: 'Subnautica 2 レシピ追跡',
    title: 'Subnautica 2 制作ガイド',
    description:
      '制作は基地で開くメニューではなく、進行の形です。まずスキャンし、O2 と保管を安定させ、電力を作ってから材料を使います。',
    quickLabel: '要点',
    quickAnswer:
      '生存時間、Scanner 進行、保管、電力、ルート解放に関わる制作を優先します。Mangalloy や Metal Farm のようにレア素材を使うチェーンは慎重に扱います。Early Access なのでレシピは変わる可能性があります。',
    contentsLabel: '目次',
    routeTitle: '役に立つ制作順',
    routeSteps: [
      {
        title: '貯める前にスキャン',
        body: '設計図が必要素材を決めます。Scanner が進んでいないと、鉱石を集めても使い道が見えません。',
      },
      {
        title: '安全を先に作る',
        body: 'O2、基本道具、保管、電力はその後の制作を楽にします。',
      },
      {
        title: '素材チェーンを見る',
        body: '加工素材の裏には複数の原料があります。advanced ingot の前に他の用途を確認します。',
      },
      {
        title: 'レア素材を残す',
        body: '素材がレア、または生産システムに関係するなら、現在のビルドを確認するまで一つ残します。',
      },
    ],
    visualTitle: 'レシピ判断板',
    visualItems: [
      {
        label: '解放',
        value: 'Scan first',
        note: '設計図があって初めてレシピが役立ちます。',
      },
      {
        label: '消費',
        value: 'Safety first',
        note: 'O2、電力、保管、道具を優先します。',
      },
      {
        label: '保護',
        value: 'Rare inputs',
        note: 'レア素材を早く全部加工しないこと。',
      },
    ],
    tableTitle: 'レシピ優先度',
    tableHeaders: ['グループ', '重要な理由'],
    tableRows: [
      ['Scanner と設計図', '探索を実際の解放に変えます。'],
      ['O2 と安全', '洞窟や長いルートを計画できる時間を作ります。'],
      ['保管と電力', '資源ループを整え、協力プレイの混乱も減ります。'],
      ['乗り物アップグレード', '明確なルートを開くときに作ります。'],
      [
        'レア加工素材',
        'Mangalloy チェーンは Atacamite、Troilite などを消費する可能性があります。',
      ],
    ],
    cautionTitle: 'レア素材を全部使わない',
    cautionBody:
      'レア素材は見つけた瞬間に全部加工しない方が安全です。レシピ、ルート、生産用途が分かるまで一つ残しておきます。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '最初に何を制作する？',
        body: 'Scanner 進行、O2 余裕、保管、電力、基本のルート道具を優先します。',
      },
      {
        title: 'advanced ingot はすぐ作る？',
        body: '多くの場合は待ちます。素材がレアか、そのアップグレードが必要ルートを開くか確認します。',
      },
      {
        title: 'レシピは変わりますか？',
        body: '変わる可能性があります。Subnautica 2 は Early Access なので、パッチ後に確認します。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2Resources, label: '資源ガイド' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner ガイド' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank と O2' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium Location Guide' },
      { href: Routes.Subnautica2Glass, label: 'Glass Recipe Guide' },
      { href: Routes.Subnautica2Copper, label: 'Copper の場所' },
      {
        href: Routes.Subnautica2BatteryTerminal,
        label: 'Battery Terminal Guide',
      },
      {
        href: Routes.Subnautica2AdvancedBattery,
        label: 'Advanced Battery Guide',
      },
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell Guide' },
      {
        href: Routes.Subnautica2VehicleFabricator,
        label: 'Vehicle Fabricator Guide',
      },
      { href: Routes.Subnautica2TadpoleDock, label: 'Tadpole Dock Guide' },
      { href: Routes.Subnautica2Silver, label: 'Silver の場所' },
    ],
    sourcesTitle: '出典メモ',
    sourceBody:
      '2026年5月23日に Steam Early Access ページと PC Gamer の Metal Farm、Atacamite、Troilite 記事を確認しました。正確なレシピ数はパッチで変わる可能性があります。',
    cardKicker: 'Recipe tracker card',
    cardBody:
      'Scanner、O2、保管、電力、加工素材、レア素材を整理する制作ルートです。',
    cardTypeLabel: '種類',
    cardTypeValue: '制作ハブ',
    cardVerifiedLabel: '確認',
    cardStatusLabel: '状態',
    cardStatusValue: 'Early Access',
  },
};

function getCopy(locale: Locale): CraftingCopy {
  return craftingCopy[locale] ?? craftingCopy.en;
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
    pathname: Routes.Subnautica2Crafting,
  });
}

export default async function CraftingGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <LocalizedResourceGuidePage
      copy={copy}
      icon={WrenchIcon}
      locale={locale}
      pathname={Routes.Subnautica2Crafting}
      sources={sharedSources}
    />
  );
}
