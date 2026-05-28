import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { BatteryChargingIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type AdvancedBatteryCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-27';

const sharedSources = [
  {
    href: 'https://allthings.how/advanced-battery-blueprint-location-in-subnautica-2/',
    label: 'All Things How Advanced Battery blueprint guide',
  },
  {
    href: 'https://subnautica2.gg/blueprints/advanced-battery',
    label: 'Subnautica2.gg Advanced Battery blueprint',
  },
  {
    href: 'https://subnautica2hub.com/blueprints/advanced-battery',
    label: 'Subnautica2Hub Advanced Battery blueprint',
  },
];

const advancedBatteryCopy: Record<string, AdvancedBatteryCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Advanced Battery Guide - Blueprint, Recipe, and 200 Energy',
      description:
        'A practical Subnautica 2 Advanced Battery guide covering Karakorum Power Plant fragments, Data Box unlocks, Conduit Crystal, Strong Acid, Silver Ingot, 200 energy, and battery rotation.',
    },
    eyebrow: 'Subnautica 2 power upgrade',
    title: 'Subnautica 2 Advanced Battery Guide',
    description:
      'Advanced Battery is the point where handheld tools stop feeling hungry every few minutes. The catch is that the recipe pulls from deeper routes, so it is worth planning as a small expedition instead of a casual Fabricator craft.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'All Things How says Advanced Battery stores 200 energy and points the blueprint route to the Karakorum Power Plant area, where you scan two fragments. Subnautica2.gg lists two unlock paths: scan 2 Advanced Battery fragments or open a Data Box. Current blueprint pages list the Fabricator recipe as Conduit Crystal x1, Strong Acid x1, and Silver Ingot x1. Build Battery Terminal first if you already have a base, then rotate Advanced Batteries through it instead of crafting replacements. Keep Entangled Power Cell materials separate, because that route adds Gold Ingot and Troilite pressure.',
    contentsLabel: 'Contents',
    routeTitle: 'Advanced Battery route',
    routeSteps: [
      {
        title: 'Do not treat it like a first-hour battery',
        body: 'Basic Battery is a Copper problem. Advanced Battery is a route problem. You need deeper materials, a safer oxygen setup, and a scanner trip before the recipe is even useful.',
      },
      {
        title: 'Scout Karakorum Power Plant with real dive prep',
        body: 'All Things How places the fragment route around Karakorum Power Plant and recommends a charged Scanner, Rebreather, and at least a Standard Air Tank. If that list sounds heavy, that is the page telling you not to rush it.',
      },
      {
        title: 'Scan fragments, but watch for a Data Box',
        body: 'Subnautica2.gg lists multiple unlock paths: two scanned Advanced Battery fragments or a Data Box. Scan the obvious wall-mounted gear, but do not ignore containers if the area gives you one.',
      },
      {
        title: 'Gather the recipe as a three-part checklist',
        body: 'The current recipe is Conduit Crystal x1, Strong Acid x1, and Silver Ingot x1. Put those in a small locker before crafting so the trip does not turn into five half-runs.',
      },
      {
        title: 'Use Battery Terminal to make it pay off',
        body: 'A 200-energy battery is much better when you can recharge it. Keep Advanced Batteries in the tools you use on long routes, then cycle drained ones through the Battery Terminal back at base.',
      },
      {
        title: 'Do not confuse it with Entangled Power Cell',
        body: 'Advanced Battery is the tool-upgrade battery. Entangled Power Cell is a later power craft with Gold Ingot and Troilite in the mix. Keep the two routes beside each other, not on top of each other.',
      },
    ],
    tableTitle: 'Advanced Battery checklist',
    tableHeaders: ['Need', 'Why it matters'],
    tableRows: [
      ['Scanner', 'Needed for the fragment unlock route.'],
      [
        'Karakorum Power Plant prep',
        'All Things How points the fragments to this deeper area.',
      ],
      ['Conduit Crystal x1', 'Depth-gated resource used in the recipe.'],
      ['Strong Acid x1', 'Processor-chain material; do not spend it blindly.'],
      [
        'Silver Ingot x1',
        'Processed Silver cost that makes early stock planning matter.',
      ],
      [
        'Battery Terminal',
        'Makes the 200-energy battery reusable instead of disposable.',
      ],
      [
        'Entangled split',
        'Do not spend Gold Ingot or Troilite here; those belong to the Entangled Power Cell route.',
      ],
    ],
    visualTitle: 'Power upgrade card',
    visualItems: [
      {
        label: 'Unlock',
        value: '2 scans',
        note: 'Or Data Box, according to current blueprint data.',
      },
      {
        label: 'Craft',
        value: '3 parts',
        note: 'Conduit Crystal, Strong Acid, Silver Ingot.',
      },
      {
        label: 'Output',
        value: '200',
        note: 'Subnautica2Hub lists 200 energy.',
      },
    ],
    cautionTitle:
      'Do not spend rare materials on a battery you cannot recharge',
    cautionBody:
      'Advanced Battery is excellent, but the first one costs materials that also sit near upgrade and vehicle planning. If your base has no Battery Terminal yet, build the charger before turning rare parts into a pile of dead batteries.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you unlock Advanced Battery in Subnautica 2?',
        body: 'Current blueprint data lists two paths: scan two Advanced Battery fragments or open a Data Box. All Things How points the fragment route toward Karakorum Power Plant.',
      },
      {
        title: 'What is the Advanced Battery recipe?',
        body: 'Current blueprint pages list Conduit Crystal x1, Strong Acid x1, and Silver Ingot x1 at the Fabricator.',
      },
      {
        title: 'How much energy does Advanced Battery have?',
        body: 'Subnautica2Hub currently lists Advanced Battery at 200 energy, double the Basic Battery value shown on the Basic Battery page.',
      },
      {
        title: 'Should you craft Advanced Battery before Battery Terminal?',
        body: 'Usually no. A Battery Terminal makes the upgrade much more useful because you can recharge expensive batteries instead of replacing them.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2BatteryTerminal,
        label: 'Battery Terminal Guide',
      },
      {
        href: Routes.Subnautica2KarakorumPowerPlant,
        label: 'Karakorum Power Plant Route',
      },
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery Guide' },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal Guide',
      },
      { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid Guide' },
      { href: Routes.Subnautica2NecroleiCyst, label: 'Necrolei Cyst Guide' },
      { href: Routes.Subnautica2Silver, label: 'Silver Location Guide' },
      { href: Routes.Subnautica2SilverIngot, label: 'Silver Ingot Guide' },
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2 Guide' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Vehicle Guide' },
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell Guide' },
      {
        href: Routes.Subnautica2EntangledPowerCell,
        label: 'Entangled Power Cell Guide',
      },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 27, 2026 against All Things How, Subnautica2.gg, and Subnautica2Hub. Subnautica 2 is still in Early Access, so fragment routes, Data Box placement, recipes, and energy values should be rechecked after patches.',
    cardKicker: 'Battery upgrade card',
    cardBody:
      'Karakorum fragment route, Data Box unlock, Conduit Crystal, Strong Acid, Silver Ingot, 200 energy, and Battery Terminal rotation.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Power guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Advanced Battery 指南 - 蓝图、配方和 200 能量',
      description:
        'Subnautica 2 中文 Advanced Battery 指南：整理 Karakorum Power Plant 碎片、Data Box 解锁、Conduit Crystal、Strong Acid、Silver Ingot、200 能量和电池轮换。',
    },
    eyebrow: 'Subnautica 2 供电升级',
    title: 'Subnautica 2 Advanced Battery 指南',
    description:
      'Advanced Battery 做出来以后，Scanner、Repair Tool 这类手持工具会耐用很多。但它不是开局随手做的小电池，材料和蓝图都要你往更深的路线走一趟。',
    quickLabel: '快速结论',
    quickAnswer:
      'All Things How 写到 Advanced Battery 有 200 energy，并把碎片路线指向 Karakorum Power Plant 区域，需要扫描两个碎片。Subnautica2.gg 当前列出两种解锁方式：扫描 2 个 Advanced Battery 碎片，或打开 Data Box。当前蓝图页面写的 Fabricator 配方是 Conduit Crystal x1、Strong Acid x1、Silver Ingot x1。如果你已经有基地，先做 Battery Terminal，再把 Advanced Battery 拿来轮换充电，价值会高很多。',
    contentsLabel: '目录',
    routeTitle: 'Advanced Battery 路线',
    routeSteps: [
      {
        title: '别把它当成开局电池',
        body: 'Basic Battery 主要卡 Copper；Advanced Battery 卡的是路线。你需要更深的材料、更稳的氧气准备，以及一次蓝图扫描路线。',
      },
      {
        title: '去 Karakorum Power Plant 前先备好潜水装备',
        body: 'All Things How 把碎片路线指向 Karakorum Power Plant，并建议带满电 Scanner、Rebreather，以及至少 Standard Air Tank。如果这些还没准备好，就先别硬冲。',
      },
      {
        title: '扫碎片，也别漏 Data Box',
        body: 'Subnautica2.gg 当前列出两条解锁路径：扫描两个 Advanced Battery 碎片，或者打开 Data Box。墙面设备要扫，路上箱子也别完全忽略。',
      },
      {
        title: '按三件材料做清单',
        body: '当前配方是 Conduit Crystal x1、Strong Acid x1、Silver Ingot x1。先把三件材料放进同一个箱子，再去 Fabricator，少很多来回找材料的时间。',
      },
      {
        title: '配合 Battery Terminal 才真正划算',
        body: '200 能量的电池能撑更久，但能反复充电才舒服。长路线工具用 Advanced Battery，没电后回基地放进 Battery Terminal 轮换。',
      },
    ],
    tableTitle: 'Advanced Battery 检查表',
    tableHeaders: ['需要什么', '为什么重要'],
    tableRows: [
      ['Scanner', '碎片路线需要扫描解锁。'],
      [
        'Karakorum Power Plant 准备',
        'All Things How 把碎片路线指向这个更深区域。',
      ],
      ['Conduit Crystal x1', '配方里的深水/升级材料。'],
      ['Strong Acid x1', 'Processor 链材料，不要随手浪费。'],
      ['Silver Ingot x1', '加工后的 Silver 成本，前期库存要提前规划。'],
      ['Battery Terminal', '让 200 能量电池可以反复使用，而不是一次性消耗品。'],
    ],
    visualTitle: '供电升级卡',
    visualItems: [
      {
        label: '解锁',
        value: '2 扫描',
        note: '当前资料还列出 Data Box 路线。',
      },
      {
        label: '制作',
        value: '3 件',
        note: 'Conduit Crystal、Strong Acid、Silver Ingot。',
      },
      {
        label: '输出',
        value: '200',
        note: 'Subnautica2Hub 当前写的是 200 energy。',
      },
    ],
    cautionTitle: '别把稀有材料做成没法充的死电池',
    cautionBody:
      'Advanced Battery 很好用，但第一块会吃到升级和载具链附近的材料。如果基地还没有 Battery Terminal，先把充电器做出来，再把稀有材料投入高级电池。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Advanced Battery 怎么解锁？',
        body: '当前蓝图资料列出两条路线：扫描两个 Advanced Battery 碎片，或打开 Data Box。All Things How 把碎片路线指向 Karakorum Power Plant。',
      },
      {
        title: 'Advanced Battery 配方是什么？',
        body: '当前蓝图页面写的是在 Fabricator 使用 Conduit Crystal x1、Strong Acid x1、Silver Ingot x1。',
      },
      {
        title: 'Advanced Battery 有多少能量？',
        body: 'Subnautica2Hub 当前写的是 200 energy，是 Basic Battery 当前 100 energy 的两倍。',
      },
      {
        title: '要不要先做 Advanced Battery 再做 Battery Terminal？',
        body: '通常不建议。Battery Terminal 能让高级电池反复充电，这样 Advanced Battery 的稀有材料成本才更值得。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      {
        href: Routes.Subnautica2BatteryTerminal,
        label: 'Battery Terminal 指南',
      },
      {
        href: Routes.Subnautica2KarakorumPowerPlant,
        label: 'Karakorum Power Plant 路线',
      },
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery 指南' },
      { href: Routes.Subnautica2ConduitCrystal, label: 'Conduit Crystal 指南' },
      { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid 指南' },
      { href: Routes.Subnautica2NecroleiCyst, label: 'Necrolei Cyst 指南' },
      { href: Routes.Subnautica2Silver, label: 'Silver 位置指南' },
      { href: Routes.Subnautica2SilverIngot, label: 'Silver Ingot 指南' },
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather 指南' },
      { href: Routes.Subnautica2AirTank, label: '气瓶和氧气指南' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 载具指南' },
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell Guide' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 27 日核对 All Things How、Subnautica2.gg 和 Subnautica2Hub。Subnautica 2 仍处于抢先体验阶段，碎片路线、Data Box 位置、配方和能量数值都可能随补丁调整。',
    cardKicker: '电池升级卡',
    cardBody:
      'Karakorum 碎片路线、Data Box 解锁、Conduit Crystal、Strong Acid、Silver Ingot、200 能量和 Battery Terminal 轮换。',
    cardTypeLabel: '类型',
    cardTypeValue: '供电指南',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = advancedBatteryCopy.en;

advancedBatteryCopy.zh = {
  ...advancedBatteryCopy.zh,
  quickAnswer:
    'All Things How 写到 Advanced Battery 有 200 energy，并把碎片路线指向 Karakorum Power Plant 区域，需要扫描两个碎片。Subnautica2.gg 当前列出两种解锁方式：扫描 2 个 Advanced Battery 碎片，或打开 Data Box。当前蓝图页面写的 Fabricator 配方是 Conduit Crystal x1、Strong Acid x1、Silver Ingot x1。如果你已经有基地，先做 Battery Terminal，再把 Advanced Battery 拿来轮换充电，价值会高很多。Entangled Power Cell 的材料要分开存，因为那条路线还会吃 Gold Ingot 和 Troilite。',
  routeSteps: [
    ...advancedBatteryCopy.zh.routeSteps,
    {
      title: '别和 Entangled Power Cell 混在一起',
      body: 'Advanced Battery 是手持工具的高级电池。Entangled Power Cell 是更后面的供电材料，会吃 Gold Ingot 和 Troilite。两条路线可以相邻收纳，但不要混成一箱。',
    },
  ],
  tableRows: [
    ...advancedBatteryCopy.zh.tableRows,
    [
      'Entangled 分流',
      'Gold Ingot 和 Troilite 不属于 Advanced Battery，留给 Entangled Power Cell。',
    ],
  ],
  related: [
    { href: Routes.Subnautica2BatteryTerminal, label: 'Battery Terminal 指南' },
    {
      href: Routes.Subnautica2KarakorumPowerPlant,
      label: 'Karakorum Power Plant 路线',
    },
    { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery 指南' },
    { href: Routes.Subnautica2PowerCell, label: 'Power Cell 指南' },
    {
      href: Routes.Subnautica2EntangledPowerCell,
      label: 'Entangled Power Cell 指南',
    },
    { href: Routes.Subnautica2ConduitCrystal, label: 'Conduit Crystal 指南' },
    { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid 指南' },
    { href: Routes.Subnautica2SilverIngot, label: 'Silver Ingot 指南' },
    { href: Routes.Subnautica2Rebreather, label: 'Rebreather 指南' },
    { href: Routes.Subnautica2Crafting, label: '制作指南' },
  ],
  sourceBody:
    '2026 年 5 月 27 日核对 All Things How、Subnautica2.gg 和 Subnautica2Hub。Subnautica 2 仍处于抢先体验阶段，碎片路线、Data Box 位置、配方和能量数值都可能随补丁调整。',
};

advancedBatteryCopy.ja = {
  ...fallbackCopy,
  metadata: {
    title: 'Subnautica 2 Advanced Battery Guide',
    description:
      'Guide for Advanced Battery fragments, Karakorum Power Plant, Data Box unlocks, Conduit Crystal, Strong Acid, Silver Ingot, 200 energy, Entangled Power Cell split, and battery charging.',
  },
  sourceBody:
    'Checked May 27, 2026 against All Things How, Subnautica2.gg, and Subnautica2Hub. Early Access fragment routes, Data Box placement, recipes, and energy values can change.',
};

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  if (advancedBatteryCopy[locale]) {
    continue;
  }

  advancedBatteryCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Advanced Battery Guide',
      description:
        'Guide for Advanced Battery fragments, Karakorum Power Plant, Data Box unlocks, Conduit Crystal, Strong Acid, Silver Ingot, 200 energy, and battery charging.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = advancedBatteryCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2AdvancedBattery,
  });
}

export default async function AdvancedBatteryGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = advancedBatteryCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={BatteryChargingIcon}
      locale={locale}
      pathname={Routes.Subnautica2AdvancedBattery}
      sources={sharedSources}
    />
  );
}
