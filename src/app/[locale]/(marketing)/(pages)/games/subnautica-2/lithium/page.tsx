import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { GemIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type LithiumCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-29';

const sharedSources = [
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-lithium-location/',
    label: 'PC Gamer Lithium location guide',
  },
  {
    href: 'https://subnautica2hub.com/resources/lithium',
    label: 'Subnautica2Hub Lithium resource page',
  },
  {
    href: 'https://subnautica2.gg/items/lithium',
    label: 'Subnautica2.gg Lithium item page',
  },
  {
    href: 'https://www.gamesradar.com/games/survival/subnautica-2-lithium-location/',
    label: 'GamesRadar Lithium location guide',
  },
];

const lithiumCopy: Record<string, LithiumCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Lithium Location Guide - Great Jaw Route and Air Tank Upgrade',
      description:
        'A practical Subnautica 2 Lithium guide covering The Great Jaw, Sonic Resonator mining, High Capacity Air Tank prep, Coral Gardens data, and safe escape planning.',
    },
    eyebrow: 'Subnautica 2 resource route',
    title: 'Subnautica 2 Lithium Location Guide',
    description:
      'Lithium is not a casual shoreline pickup. Early on, it asks you to swim into a bad-looking mouth, mine fast, and leave before the game turns the joke on you. Bring oxygen margin.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'PC Gamer reports that the early reliable Lithium route is The Great Jaw southwest of the Lifepod, after you have Sonic Resonator and Standard Air Tank. One piece can be found near a ruined colony building before the jaw, then more Lithium sits inside the jaw structure and must be mined quickly with Sonic Resonator. Subnautica2Hub lists Lithium in Coral Gardens at 0-250m and tied to Sonic Resonator / Lithium Node harvesting. Public recipe pages disagree slightly on count, but Lithium is important for Plasteel Ingot and the High Capacity Air Tank chain.',
    fieldNotesTitle: 'Field notes for The Great Jaw run',
    fieldNotes: [
      {
        title: 'This is not the place to test oxygen math',
        body: 'Lithium is early enough to tempt you, but the jaw route punishes messy prep. Bring the tank, movement kit, and a clear exit plan before mining inside the structure.',
      },
      {
        title: 'Take the easy piece first',
        body: 'The ruined building pickup matters because it gives progress without committing to the mouth. Grab that piece, check oxygen, then decide whether the inside run is still worth it.',
      },
      {
        title: 'Mine once and leave with dignity',
        body: 'The first Lithium trip does not need to become a perfect farm. Break the node, grab the drops, and get out before curiosity turns into a long swim with no air.',
      },
    ],
    routeChecklistTitle: 'Before entering The Great Jaw',
    routeChecklist: [
      'Bring Sonic Resonator, Standard Air Tank, Basic Fins, and a charged tool battery.',
      'Pick up the ruin-side Lithium before committing to the inside route.',
      'Use nearby oxygen plants before mining inside the jaw.',
      'Save bulk Lithium farming for safer routes after Heat Tolerance progress.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Lithium route plan',
    routeSteps: [
      {
        title: 'Do not go before the tool is ready',
        body: 'PC Gamer puts Sonic Resonator and Standard Air Tank on the prep list. Add Basic Fins, Wakemaker, and a few Air Bladders if you are still learning the swim back.',
      },
      {
        title: 'Head southwest from the Lifepod',
        body: 'Follow the drop-off and keep the crater wall on your right. PC Gamer describes colony wreckage and a ruined building on the approach, which is your landmark before the jaw.',
      },
      {
        title: 'Check the ruin before the risky grab',
        body: 'The same route notes a first Lithium piece outside the ruined colony building, near a coral-dome fragment, and a High Capacity Dive Tank recipe card inside the building if you still need it.',
      },
      {
        title: 'Refill oxygen around The Great Jaw',
        body: 'There are Oxygen Tunics around the outside in PC Gamer reporting. Use them before entering because the jaw section can cut your comfort window fast.',
      },
      {
        title: 'Mine once, grab, and leave',
        body: 'Lithium sits inside the jaw structure. Hit the node with Sonic Resonator, pick up what drops, then exit without trying to make the first trip perfect.',
      },
      {
        title: 'Come back later for a cleaner farm',
        body: 'PC Gamer also points to hot caves below the Tadpole Pens after Heat Tolerance. Subnautica2Hub lists Coral Gardens 0-250m spawn data, so treat the first jaw run as an unlock run, not your forever route.',
      },
    ],
    tableTitle: 'Lithium checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      ['Main early spot', 'The Great Jaw route southwest of the Lifepod.'],
      ['Tool', 'Sonic Resonator for the node inside the jaw.'],
      [
        'Oxygen prep',
        'Standard Air Tank minimum; backups make the exit calmer.',
      ],
      ['Biome data', 'Subnautica2Hub lists Coral Gardens at 0-250m.'],
      [
        'Main use',
        'Plasteel Ingot and the High Capacity Air Tank upgrade chain.',
      ],
    ],
    visualTitle: 'Lithium run',
    visualItems: [
      {
        label: 'Prep',
        value: 'Sonic',
        note: 'Do not swim there without mining access.',
      },
      {
        label: 'Grab',
        value: 'Jaw',
        note: 'Mine fast and leave before greed takes over.',
      },
      {
        label: 'Spend',
        value: 'Tank',
        note: 'Plasteel pushes the better air tank forward.',
      },
    ],
    cautionTitle: 'One extra node is not worth a lost run',
    cautionBody:
      'The Great Jaw is built to punish hesitation. If the mouth starts closing or oxygen looks thin, leave with whatever you grabbed. A second clean trip beats one panicked inventory screen.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Where do you find Lithium early in Subnautica 2?',
        body: 'PC Gamer points to The Great Jaw southwest of the Lifepod. The route passes colony wreckage and a ruined building before the jaw itself.',
      },
      {
        title: 'Do you need Sonic Resonator for Lithium?',
        body: 'Yes for the main early node inside The Great Jaw. PC Gamer says to bring Sonic Resonator, and Subnautica2Hub lists Lithium Node harvesting with Sonic Resonator.',
      },
      {
        title: 'What is Lithium used for in Subnautica 2?',
        body: 'The early pressure is Plasteel Ingot, which feeds the High Capacity Air Tank upgrade chain. Subnautica2Hub and Subnautica2.gg currently disagree on the exact public recipe count, so trust your PDA after patches.',
      },
      {
        title: 'Is The Great Jaw the best long-term farm?',
        body: 'It is the early route. Later, PC Gamer points to hot caves below the Tadpole Pens after Heat Tolerance, and Subnautica2Hub lists broader Coral Gardens spawn data.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2AirTank, label: 'Air Tank Guide' },
      { href: Routes.Subnautica2OxygenDepth, label: 'Oxygen and Depth' },
      {
        href: Routes.Subnautica2SonicResonator,
        label: 'Sonic Resonator Guide',
      },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker Guide' },
      { href: Routes.Subnautica2PlasteelIngot, label: 'Plasteel Ingot Guide' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Vehicle Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Quartz, label: 'Quartz Location Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 26, 2026 against PC Gamer, Subnautica2Hub, Subnautica2.gg, and GamesRadar. Early Access routes, spawn counts, and recipe data can change; verify with the PDA and current map after patches.',
    cardKicker: 'Resource card',
    cardBody:
      'Great Jaw approach, ruin pickup, Sonic Resonator mining, Oxygen Tunic refill, Plasteel Ingot pressure, and safer return timing.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Resource guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Lithium 位置指南 - Great Jaw 路线和氧气瓶升级',
      description:
        'Subnautica 2 中文 Lithium 指南：整理 The Great Jaw 路线、Sonic Resonator 挖矿、High Capacity Air Tank 前置、Coral Gardens 数据和安全撤离。 ',
    },
    eyebrow: 'Subnautica 2 资源路线',
    title: 'Subnautica 2 Lithium 位置指南',
    description:
      'Lithium 不是海边随手捡的材料。前期想拿它，基本就是游进 The Great Jaw，敲一下、拿上东西、马上走。氧气余量一定要留出来。',
    quickLabel: '快速结论',
    quickAnswer:
      'PC Gamer 报道的前期可靠 Lithium 路线是 Lifepod 西南方向的 The Great Jaw，建议先拿到 Sonic Resonator 和 Standard Air Tank。进入大嘴之前，废弃殖民地建筑附近能先拿到一块 Lithium；更多 Lithium 在 The Great Jaw 内部，需要用 Sonic Resonator 快速敲开。Subnautica2Hub 把 Lithium 列在 Coral Gardens，深度 0-250m，并和 Sonic Resonator / Lithium Node 采集关联。公开配方页在数量上略有出入，但 Lithium 对 Plasteel Ingot 和 High Capacity Air Tank 升级链很关键。',
    fieldNotesTitle: 'The Great Jaw 路线笔记',
    fieldNotes: [
      {
        title: '这里不适合临场算氧气',
        body: 'Lithium 出现得不算特别晚，所以很容易让人想硬冲。但 The Great Jaw 会惩罚准备不充分的路线。先带好气瓶、移动工具和明确出口。',
      },
      {
        title: '先拿外面的那一块',
        body: '废弃建筑旁边那块 Lithium 很重要，因为它不用你立刻钻进大嘴内部。先拿它，确认氧气，再决定要不要继续进去。',
      },
      {
        title: '第一趟别贪',
        body: '第一次 Lithium 路线不需要完美刷满。敲开节点、拿掉掉落物、干净出来，比为了多看一眼把自己卡在没氧气的深处更好。',
      },
    ],
    routeChecklistTitle: '进入 The Great Jaw 前',
    routeChecklist: [
      '带 Sonic Resonator、Standard Air Tank、Basic Fins 和有电的工具电池。',
      '进入内部前先拿废墟旁边那块 Lithium。',
      '进大嘴采矿前先利用附近氧气植物补满节奏。',
      '等 Heat Tolerance 进度推进后，再考虑更安全的批量 Lithium 路线。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Lithium 路线规划',
    routeSteps: [
      {
        title: '工具没准备好就别急着去',
        body: 'PC Gamer 把 Sonic Resonator 和 Standard Air Tank 放在准备清单里。刚熟悉路线的话，再带 Basic Fins、Wakemaker 和几只 Air Bladder，会稳很多。',
      },
      {
        title: '从 Lifepod 往西南走',
        body: '沿着海底落差游，把环形坑壁保持在右手边。PC Gamer 提到路上会经过殖民地残骸和一座废弃建筑，那就是进入 The Great Jaw 前的地标。',
      },
      {
        title: '先搜废墟，不要一头扎进嘴里',
        body: '同一条路线提到，废弃殖民地建筑外、靠近珊瑚穹顶碎片的位置有一块 Lithium；建筑里还可能有 High Capacity Dive Tank 配方卡。',
      },
      {
        title: '进 The Great Jaw 前补满氧气',
        body: 'PC Gamer 说大嘴外面有 Oxygen Tunics。进去前先补一次，因为里面留给你的安全窗口不算宽。',
      },
      {
        title: '敲一次，拿东西，马上撤',
        body: 'Lithium 在大嘴内部结构里。用 Sonic Resonator 敲开节点，捡掉落物，然后别贪，先出来再说。',
      },
      {
        title: '后期再换更舒服的采集路线',
        body: 'PC Gamer 还提到，拿到 Heat Tolerance 后，可以去 Tadpole Pens 下方的热洞找更多 Lithium。第一次 The Great Jaw 跑图更像解锁任务，不适合当长期刷点。',
      },
    ],
    tableTitle: 'Lithium 检查表',
    tableHeaders: ['需要', '确认什么'],
    tableRows: [
      ['前期主路线', 'Lifepod 西南方向的 The Great Jaw。'],
      ['工具', 'The Great Jaw 内部节点需要 Sonic Resonator。'],
      ['氧气准备', '至少 Standard Air Tank；备份氧气会让撤离轻松很多。'],
      ['生态区数据', 'Subnautica2Hub 当前列出 Coral Gardens，0-250m。'],
      ['主要用途', 'Plasteel Ingot，以及 High Capacity Air Tank 升级链。'],
    ],
    visualTitle: 'Lithium 跑图',
    visualItems: [
      {
        label: '准备',
        value: 'Sonic',
        note: '没有采矿工具就先别跑这趟。',
      },
      {
        label: '获取',
        value: 'Jaw',
        note: '快速敲矿，别在里面整理背包。',
      },
      {
        label: '消耗',
        value: 'Tank',
        note: 'Plasteel 会把氧气瓶升级往前推。',
      },
    ],
    cautionTitle: '多贪一个节点不值得',
    cautionBody:
      'The Great Jaw 就是用来惩罚犹豫的。嘴开始合上，或者氧气不舒服，就带着已经拿到的东西撤。第二趟稳稳回来，比一次慌乱地死撑强。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 前期 Lithium 在哪里？',
        body: 'PC Gamer 指向 Lifepod 西南方向的 The Great Jaw。路上会经过殖民地残骸和一座废弃建筑。',
      },
      {
        title: 'Lithium 需要 Sonic Resonator 吗？',
        body: 'The Great Jaw 里面的主要节点需要。PC Gamer 建议带 Sonic Resonator，Subnautica2Hub 也把 Lithium Node 和 Sonic Resonator 采集关联起来。',
      },
      {
        title: 'Lithium 用来做什么？',
        body: '前期最主要是 Plasteel Ingot，并进一步卡到 High Capacity Air Tank 升级链。Subnautica2Hub 和 Subnautica2.gg 当前公开配方数量略有不同，最终以游戏里的 PDA 为准。',
      },
      {
        title: 'The Great Jaw 是长期刷 Lithium 的地方吗？',
        body: '它更像前期路线。后面拿到 Heat Tolerance 后，PC Gamer 指向 Tadpole Pens 下方热洞；Subnautica2Hub 也列了更广的 Coral Gardens 生成数据。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2AirTank, label: 'Air Tank 指南' },
      { href: Routes.Subnautica2OxygenDepth, label: '氧气和深度' },
      { href: Routes.Subnautica2SonicResonator, label: 'Sonic Resonator 指南' },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker 指南' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 载具指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Quartz, label: 'Quartz 位置指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 26 日核对 PC Gamer、Subnautica2Hub、Subnautica2.gg 和 GamesRadar。抢先体验阶段路线、生成数量和配方数据都可能变化；更新后请以 PDA 和当前地图为准。',
    cardKicker: '资源卡',
    cardBody:
      'The Great Jaw 路线、废墟外拾取、Sonic Resonator 挖矿、Oxygen Tunic 补氧、Plasteel Ingot 压力和安全撤离时机。',
    cardTypeLabel: '类型',
    cardTypeValue: '资源指南',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = lithiumCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  lithiumCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Lithium Location Guide',
      description:
        'Guide for Lithium locations, The Great Jaw, Sonic Resonator mining, Coral Gardens, Plasteel Ingot, and High Capacity Air Tank prep.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = lithiumCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2Lithium,
  });
}

export default async function LithiumGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = lithiumCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={GemIcon}
      locale={locale}
      pathname={Routes.Subnautica2Lithium}
      sources={sharedSources}
    />
  );
}
