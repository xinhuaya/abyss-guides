import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { MapPinnedIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type KarakorumPowerPlantCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-27';
const UPDATED_AT = '2026-05-29';

const sharedSources = [
  {
    href: 'https://allthings.how/advanced-battery-blueprint-location-in-subnautica-2/',
    label: 'All Things How Advanced Battery blueprint route',
  },
  {
    href: 'https://subnautica2.gg/blueprints/advanced-battery',
    label: 'Subnautica2.gg Advanced Battery blueprint',
  },
  {
    href: 'https://subnautica2.gg/blueprints/entangled-power-cell',
    label: 'Subnautica2.gg Entangled Power Cell blueprint',
  },
  {
    href: 'https://subnautica2.guide/wikis/entangled-power-cell',
    label: 'Subnautica 2 Guide Entangled Power Cell wiki',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-power-plant-observatory/',
    label: 'PC Gamer Power Plant and Observatory guide',
  },
  {
    href: 'https://www.gamesradar.com/games/survival/subnautica-2-conduit-crystals/',
    label: 'GamesRadar Conduit Crystal location guide',
  },
];

const karakorumPowerPlantCopy: Record<string, KarakorumPowerPlantCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Karakorum Power Plant Route Guide - Fragments, Power, and Deep Prep',
      description:
        'A practical Subnautica 2 Karakorum Power Plant route guide covering Advanced Battery fragments, Entangled Power Cell leads, Power Plant repair, Observatory access, Conduit Crystal prep, oxygen, and tools.',
    },
    eyebrow: 'Subnautica 2 deep route',
    title: 'Subnautica 2 Karakorum Power Plant Route Guide',
    description:
      'Karakorum Power Plant is where a lot of mid-game plans start to collide: better batteries, strange power tech, deeper crystal routes, and the Observatory path. Treat it like a planned dive, not a quick swim with a half-charged Scanner.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current sources point to Karakorum Power Plant as a deep route for Advanced Battery fragments, with All Things How listing two Advanced Battery scans in the area and Subnautica2.gg listing either two scans or a Data Box. Subnautica 2 Guide places Entangled Power Cell near the Karakorum Power Plant, while PC Gamer covers repairing the Power Plant and entering the Observatory. GamesRadar puts Conduit Crystal below the Alien Power Plant region, often below 300m, so bring depth, oxygen, and a clean exit plan.',
    fieldNotesTitle: 'Field notes for Karakorum runs',
    fieldNotes: [
      {
        title: 'This is a route cluster',
        body: 'Advanced Battery, Entangled Power Cell, Conduit Crystal, and Observatory progress all point near the same deep region. Plan a loop, not a single pickup.',
      },
      {
        title: 'Depth prep decides the trip',
        body: 'The materials are not the only gate. If your Tadpole depth, oxygen, or return markers are weak, the same route becomes much more expensive.',
      },
      {
        title: 'Separate scan goals from haul goals',
        body: 'Scanning fragments and hauling repair materials are different trips. Mixing both without storage and power planning can turn one clean route into two messy ones.',
      },
    ],
    routeChecklistTitle: 'Before entering Karakorum',
    routeChecklist: [
      'Bring Tadpole depth, oxygen margin, Repair Tool, and route markers.',
      'List whether this trip is for scans, Conduit Crystal, or Observatory prep.',
      'Keep Advanced Battery and Entangled Power Cell materials separated.',
      'Do not start repair hauling until Power Plant requirements are confirmed.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Karakorum route plan',
    routeSteps: [
      {
        title: 'Make it a route, not a panic dive',
        body: 'The area is tied to several separate goals, so decide what you are doing before you leave: scan Advanced Battery fragments, check power-cell leads, repair Power Plant machinery, or mark Conduit Crystal spots for later.',
      },
      {
        title: 'Pack for scanning first',
        body: 'All Things How recommends a charged Scanner, Rebreather, and at least a Standard Air Tank for the Advanced Battery fragment route. I would add Beacon markers and a spare battery if you are still learning the approach.',
      },
      {
        title: 'Use the structure as your anchor',
        body: 'Once you reach the Power Plant zone, search around wall gear, broken equipment, turbine-like machinery, crate clusters, and debris close to the structure. A fixed landmark keeps the dive from turning into a wide, messy sweep.',
      },
      {
        title: 'Scan the battery fragments before looting randomly',
        body: 'For Advanced Battery, the public data is useful but not identical: All Things How says scan two fragments in the Power Plant area, while Subnautica2.gg also lists a Data Box path. Scan first, then check containers if the blueprint is still short.',
      },
      {
        title: 'Treat Entangled Power Cell as a late-power lead',
        body: 'Subnautica 2 Guide says Entangled Power Cell is found near the Karakorum Power Plant, and Subnautica2.gg lists Conduit Crystal, Strong Acid, Gold Ingot, and Troilite for the craft. Do not burn those materials until your PDA makes the next power goal clear.',
      },
      {
        title: 'Separate repair work from resource farming',
        body: 'PC Gamer covers the Power Plant repair route into the Observatory. That job asks you to read the machinery and bring repair materials. If you also try to farm crystals, scan fragments, and open every crate in the same trip, oxygen becomes the real boss.',
      },
      {
        title: 'Mark Conduit Crystal for a dedicated return',
        body: 'GamesRadar places Conduit Crystal beneath the Alien Power Plant region and warns that deeper crystals may push you toward Tadpole depth planning, Rebreather, improved fins, and a stronger oxygen tank. Mark the route now; mine it when the tool chain is ready.',
      },
    ],
    tableTitle: 'Dive checklist',
    tableHeaders: ['Bring or confirm', 'Why it matters'],
    tableRows: [
      [
        'Charged Scanner',
        'Needed for Advanced Battery fragments and structure scans.',
      ],
      ['Rebreather', 'The route sits beyond comfortable early-depth swimming.'],
      [
        'Standard or better Air Tank',
        'Short oxygen turns are the main reason this route gets messy.',
      ],
      [
        'Beacon markers',
        'Mark the Power Plant, exit line, and crystal ledges.',
      ],
      [
        'Repair Tool plan',
        'Useful if you are following the Power Plant repair route.',
      ],
      [
        'Spare battery or charger loop',
        'The Scanner and tools can drain during a long search.',
      ],
      [
        'Tadpole depth plan',
        'Important before chasing deeper Conduit Crystal spots.',
      ],
    ],
    visualTitle: 'Route card',
    visualItems: [
      {
        label: 'Scan',
        value: 'Battery',
        note: 'Advanced Battery fragments and possible Data Box route.',
      },
      {
        label: 'Power',
        value: 'Repair',
        note: 'Power Plant work can open the Observatory path.',
      },
      {
        label: 'Mark',
        value: 'Crystal',
        note: 'Conduit Crystal sits deeper around the Alien Power Plant zone.',
      },
    ],
    cautionTitle: 'Do not stack every objective into one first trip',
    cautionBody:
      'The safest first Karakorum run is boring on purpose: reach the structure, scan what you came for, drop a marker, and leave while you still know the way out. Come back for repair work or crystal mining after the route feels familiar.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Where is Karakorum Power Plant useful in Subnautica 2?',
        body: 'Current guides tie the area to Advanced Battery fragments, Entangled Power Cell leads, Power Plant repair and Observatory access, plus nearby deeper Conduit Crystal planning.',
      },
      {
        title: 'What should I bring before going to Karakorum Power Plant?',
        body: 'Bring a charged Scanner, Rebreather, at least a Standard Air Tank, Beacon markers, spare battery power, and a Repair Tool plan if you are working on the Power Plant repair route.',
      },
      {
        title: 'Are Advanced Battery fragments at Karakorum Power Plant?',
        body: 'All Things How places two Advanced Battery fragments in the Karakorum Power Plant area. Subnautica2.gg also lists a Data Box unlock path, so scan fragments first and check containers if the blueprint is still incomplete.',
      },
      {
        title: 'Should I farm Conduit Crystal on the same trip?',
        body: 'Only if your depth and oxygen setup is already stable. GamesRadar places Conduit Crystal deeper beneath the Alien Power Plant region, so it is often better to mark the spot and return with better gear.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2AdvancedBattery,
        label: 'Advanced Battery Guide',
      },
      {
        href: Routes.Subnautica2EntangledPowerCell,
        label: 'Entangled Power Cell Guide',
      },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal Guide',
      },
      {
        href: Routes.Subnautica2PowerPlantObservatory,
        label: 'Power Plant Observatory Guide',
      },
      { href: Routes.Subnautica2AxumVision, label: 'Axum Vision Guide' },
      { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid Guide' },
      { href: Routes.Subnautica2NecroleiCyst, label: 'Necrolei Cyst Guide' },
      { href: Routes.Subnautica2Troilite, label: 'Troilite Location Guide' },
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2 Guide' },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        label: 'Tadpole Depth Module Guide',
      },
      { href: Routes.Subnautica2Beacon, label: 'Beacon Guide' },
      { href: Routes.Subnautica2RepairTool, label: 'Repair Tool Guide' },
      { href: Routes.Subnautica2Biomes, label: 'Biomes Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 27, 2026 against All Things How, Subnautica2.gg, Subnautica 2 Guide, PC Gamer, and GamesRadar. Subnautica 2 is in Early Access, so fragment locations, Data Box paths, repair requirements, depth numbers, and recipes should be rechecked after patches.',
    cardKicker: 'Deep route card',
    cardBody:
      'Advanced Battery scans, Entangled Power Cell lead, Power Plant repair, Observatory access, Conduit Crystal marking, oxygen, and exit planning.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Route guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Karakorum Power Plant 路线指南 - 碎片、供电和深潜准备',
      description:
        'Subnautica 2 中文 Karakorum Power Plant 路线指南：Advanced Battery 碎片、Entangled Power Cell 线索、Power Plant 修复、Observatory、Conduit Crystal、氧气和工具准备。',
    },
    eyebrow: 'Subnautica 2 深区路线',
    title: 'Subnautica 2 Karakorum Power Plant 路线指南',
    description:
      'Karakorum Power Plant 不是那种“顺路游一下”的地点。这里会把 Advanced Battery、Entangled Power Cell、Power Plant 修复、Observatory 和 Conduit Crystal 几条线挤在一起。最好把它当成一次正式深潜。',
    quickLabel: '快速结论',
    quickAnswer:
      '当前资料把 Karakorum Power Plant 指向 Advanced Battery 碎片路线：All Things How 写的是在这个区域扫描 2 个 Advanced Battery 碎片，Subnautica2.gg 还列出 Data Box 作为另一条解锁路。Subnautica 2 Guide 把 Entangled Power Cell 放在 Karakorum Power Plant 附近，PC Gamer 则有 Power Plant 修复并进入 Observatory 的路线。GamesRadar 把 Conduit Crystal 放在 Alien Power Plant 下方更深的位置，很多点在 300m 以下，所以先准备深度、氧气和回程路线。',
    fieldNotesTitle: 'Karakorum 路线笔记',
    fieldNotes: [
      {
        title: '这里是一组路线，不是单点采集',
        body: 'Advanced Battery、Entangled Power Cell、Conduit Crystal 和 Observatory 进度都指向这片深区。先规划一条 loop，不要只想着捡一个东西。',
      },
      {
        title: '深度准备决定成本',
        body: '材料不是唯一门槛。如果 Tadpole 深度、氧气或回程标记不稳，同一条路线会贵很多。',
      },
      {
        title: '扫描目标和运输目标分开',
        body: '扫碎片和运输修复材料是两种任务。没有仓储和电力规划时硬混在一起，很容易把一条干净路线拆成两条乱路线。',
      },
    ],
    routeChecklistTitle: '进入 Karakorum 前',
    routeChecklist: [
      '准备 Tadpole 深度、氧气余量、Repair Tool 和路线标记。',
      '写清这趟是扫碎片、采 Conduit Crystal，还是准备 Observatory。',
      'Advanced Battery 和 Entangled Power Cell 材料分开放。',
      '确认 Power Plant 需求前，不要开始大量运输修复材料。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Karakorum 路线规划',
    routeSteps: [
      {
        title: '把它当成路线，不要当成临时下潜',
        body: '这个区域同时牵着好几件事：Advanced Battery 碎片、Entangled Power Cell 线索、Power Plant 修复和 Conduit Crystal 深区标点。出发前先决定这一趟到底做哪一件事。',
      },
      {
        title: '先按扫描路线打包',
        body: 'All Things How 建议 Advanced Battery 路线带满电 Scanner、Rebreather 和至少 Standard Air Tank。如果你还不熟路，我还会加 Beacon 和备用电池，别让工具半路没电。',
      },
      {
        title: '用建筑本体当锚点',
        body: '到 Power Plant 区域后，围着墙面设备、破损机械、涡轮结构、箱子堆和建筑边缘找。固定一个大地标，比在海底平面盲扫舒服很多。',
      },
      {
        title: '先扫电池碎片，再开箱乱摸',
        body: 'Advanced Battery 的公开资料不完全一样：All Things How 写的是在 Power Plant 区域扫描 2 个碎片，Subnautica2.gg 还列出 Data Box 路线。先扫碎片，如果 PDA 还没解锁，再顺路查箱子。',
      },
      {
        title: 'Entangled Power Cell 先当线索看',
        body: 'Subnautica 2 Guide 写到 Entangled Power Cell 在 Karakorum Power Plant 附近，Subnautica2.gg 的配方则是 Conduit Crystal、Strong Acid、Gold Ingot 和 Troilite。材料都偏后期，别看到按钮亮了就马上合成。',
      },
      {
        title: '修复 Power Plant 和采资源分开做',
        body: 'PC Gamer 写的是 Power Plant 修复到 Observatory 的路线，这件事本身就要读机器、带修复材料、留氧气。如果同一趟还想扫碎片、挖晶体、开箱子，最容易乱的是回程。',
      },
      {
        title: 'Conduit Crystal 先标点，后面专门回来',
        body: 'GamesRadar 把 Conduit Crystal 放在 Alien Power Plant 下方更深的区域，还提到 Tadpole 深度、Rebreather、Improved Fins 和更大的氧气储备。第一趟先标路线，工具链齐了再挖。',
      },
    ],
    tableTitle: '下潜检查表',
    tableHeaders: ['带什么或确认什么', '为什么重要'],
    tableRows: [
      ['满电 Scanner', 'Advanced Battery 碎片和结构扫描都要用。'],
      ['Rebreather', '这条路线已经超过开局舒服下潜范围。'],
      ['Standard 或更好的 Air Tank', '氧气回合太短，是这条路最容易乱的原因。'],
      ['Beacon 标记', '标 Power Plant、回程线和晶体 ledge。'],
      ['Repair Tool 计划', '如果你要做 Power Plant 修复路线，提前准备。'],
      ['备用电池或充电循环', 'Scanner 和工具在长时间搜索里会掉电。'],
      ['Tadpole 深度计划', '追 Conduit Crystal 深点前要先解决载具深度。'],
    ],
    visualTitle: '路线卡',
    visualItems: [
      {
        label: '扫描',
        value: '电池',
        note: 'Advanced Battery 碎片，也注意 Data Box 路线。',
      },
      {
        label: '供电',
        value: '修复',
        note: 'Power Plant 修复会牵到 Observatory 路线。',
      },
      {
        label: '标点',
        value: '晶体',
        note: 'Conduit Crystal 在 Alien Power Plant 更深区域。',
      },
    ],
    cautionTitle: '第一次别把所有目标塞进同一趟',
    cautionBody:
      '最稳的 Karakorum 第一趟其实很朴素：到建筑，扫目标，放 Beacon，还知道怎么回去的时候就离开。修复路线和晶体采集可以等第二趟，熟路以后反而快很多。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Karakorum Power Plant 主要用来做什么？',
        body: '当前攻略把它和 Advanced Battery 碎片、Entangled Power Cell 线索、Power Plant 修复、Observatory，以及更深处的 Conduit Crystal 路线联系在一起。',
      },
      {
        title: '去 Karakorum Power Plant 前要带什么？',
        body: '建议带满电 Scanner、Rebreather、至少 Standard Air Tank、Beacon、备用电力。如果要走修复路线，再按 PDA 或攻略准备 Repair Tool 相关材料。',
      },
      {
        title: 'Advanced Battery 碎片在 Karakorum Power Plant 吗？',
        body: 'All Things How 把 2 个 Advanced Battery 碎片放在 Karakorum Power Plant 区域。Subnautica2.gg 还列了 Data Box 解锁方式，所以先扫碎片，再看是否需要开箱补进度。',
      },
      {
        title: 'Conduit Crystal 要不要同一趟采？',
        body: '只有在深度和氧气都稳定时才建议顺路采。GamesRadar 把 Conduit Crystal 放在 Alien Power Plant 下方更深区域，很多时候先标点，之后带更好装备回来更稳。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      {
        href: Routes.Subnautica2AdvancedBattery,
        label: 'Advanced Battery 指南',
      },
      {
        href: Routes.Subnautica2EntangledPowerCell,
        label: 'Entangled Power Cell 指南',
      },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal 指南',
      },
      {
        href: Routes.Subnautica2PowerPlantObservatory,
        label: 'Power Plant Observatory 指南',
      },
      { href: Routes.Subnautica2AxumVision, label: 'Axum Vision 指南' },
      { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid 指南' },
      { href: Routes.Subnautica2NecroleiCyst, label: 'Necrolei Cyst 指南' },
      { href: Routes.Subnautica2Troilite, label: 'Troilite 位置指南' },
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather 指南' },
      { href: Routes.Subnautica2AirTank, label: '气瓶和氧气指南' },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        label: 'Tadpole Depth Module 指南',
      },
      { href: Routes.Subnautica2Beacon, label: 'Beacon 指南' },
      { href: Routes.Subnautica2RepairTool, label: 'Repair Tool 指南' },
      { href: Routes.Subnautica2Biomes, label: 'Biomes 指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 27 日核对 All Things How、Subnautica2.gg、Subnautica 2 Guide、PC Gamer 和 GamesRadar。Subnautica 2 仍处于抢先体验阶段，碎片位置、Data Box 路径、修复需求、深度数值和配方都可能随补丁变化。',
    cardKicker: '深区路线卡',
    cardBody:
      'Advanced Battery 扫描、Entangled Power Cell 线索、Power Plant 修复、Observatory、Conduit Crystal 标点、氧气和回程规划。',
    cardTypeLabel: '类型',
    cardTypeValue: '路线指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = karakorumPowerPlantCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  karakorumPowerPlantCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Karakorum Power Plant Route Guide',
      description:
        'Guide for Karakorum Power Plant, Advanced Battery fragments, Entangled Power Cell leads, Power Plant repair, Observatory access, Conduit Crystal prep, oxygen, and tools.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = karakorumPowerPlantCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2KarakorumPowerPlant,
  });
}

export default async function KarakorumPowerPlantGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = karakorumPowerPlantCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={MapPinnedIcon}
      locale={locale}
      pathname={Routes.Subnautica2KarakorumPowerPlant}
      sources={sharedSources}
    />
  );
}
