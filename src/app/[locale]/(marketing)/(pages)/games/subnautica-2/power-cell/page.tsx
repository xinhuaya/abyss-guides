import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { BatteryChargingIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type PowerCellCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-28';

const sharedSources = [
  {
    href: 'https://subnautica2.gg/blueprints/power-cell',
    label: 'Subnautica2.gg Power Cell blueprint',
  },
  {
    href: 'https://subnautica2hub.com/blueprints/power-cell',
    label: 'Subnautica2Hub Power Cell blueprint',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-tadpole-scan-locations/',
    label: 'PC Gamer Tadpole scan and craft guide',
  },
];

const powerCellCopy: Record<string, PowerCellCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Power Cell Guide - Recipe, Strong Acid, Salt, and Tadpole Prep',
      description:
        'A practical Subnautica 2 Power Cell guide covering the Basic Battery x2, Strong Acid x1, Salt x1 recipe, Fabricator crafting, Tadpole use, and early material planning.',
    },
    eyebrow: 'Subnautica 2 vehicle power',
    title: 'Subnautica 2 Power Cell Guide',
    description:
      'Power Cell is the small part that makes the Tadpole plan suddenly feel expensive. It looks like a battery upgrade, but really it is a test of whether your Basic Battery, Strong Acid, and Salt routes are under control.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current Subnautica2.gg and Subnautica2Hub blueprint pages list Power Cell as a Fabricator craft using Basic Battery x2, Strong Acid x1, and Salt x1. PC Gamer notes that Power Cell is part of the Tadpole craft, so treat it as a vehicle milestone rather than a spare battery. Make the batteries first, confirm Strong Acid, keep one Salt aside, then craft the cell when the Tadpole plan is ready. If you are already chasing Advanced Battery or Entangled Power Cell, keep those rare-material routes separate.',
    fieldNotesTitle: 'Field notes for vehicle power',
    fieldNotes: [
      {
        title: 'Do not eat your tool batteries',
        body: 'A Power Cell feels like progress until your Scanner or Repair Tool is dead. Replace the Basic Batteries first, then feed two into the vehicle chain.',
      },
      {
        title: 'Strong Acid is the real errand',
        body: 'Copper and Salt are easy to notice. Strong Acid is the piece that makes this route branch into Processor and Necrolei Cyst planning.',
      },
      {
        title: 'Keep rare power in another box',
        body: 'Advanced Battery and Entangled Power Cell routes pull from deeper materials. Mixing those parts with normal Power Cell prep is how lockers become soup.',
      },
    ],
    routeChecklistTitle: 'Power Cell check',
    routeChecklist: [
      'Two spare Basic Batteries are ready, not stolen from tools.',
      'Strong Acid route is solved before final crafting.',
      'One Salt is reserved for the cell.',
      'Advanced power materials stay in a separate locker.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Power Cell route',
    routeSteps: [
      {
        title: 'Start with two working Basic Batteries',
        body: 'The recipe eats two Basic Batteries. If those batteries were meant for Scanner, Repair Tool, or Habitat Builder planning, make replacements before you empty your whole tool kit.',
      },
      {
        title: 'Do the Strong Acid run on purpose',
        body: 'Strong Acid is the awkward part. It comes from the processing chain, not from a casual Copper sweep, so tie the trip to Necrolei Cysts and Processor access instead of hoping it appears in a locker.',
      },
      {
        title: 'Save Salt before it becomes food prep',
        body: 'Salt is easy to spend without thinking. Keep one piece tagged for Power Cell so cooked food, water habits, or side recipes do not quietly steal the final ingredient.',
      },
      {
        title: 'Craft only when the Tadpole chain is close',
        body: 'PC Gamer connects Power Cell directly to Tadpole crafting. If the vehicle fragments or station work are not ready yet, leave the ingredients separate until the final build push.',
      },
      {
        title: 'Plan charging before long trips',
        body: 'Once vehicles and advanced batteries enter the picture, power stops being a one-item problem. A Battery Terminal and cleaner battery storage make the whole vehicle loop less annoying.',
      },
      {
        title: 'Separate normal power from rare power',
        body: 'Power Cell is a Tadpole bridge. Advanced Battery and Entangled Power Cell pull from deeper materials like Conduit Crystal, Silver Ingot, Gold Ingot, and Troilite, so do not merge those lockers unless the recipe is already visible.',
      },
    ],
    tableTitle: 'Power Cell checklist',
    tableHeaders: ['Need', 'Why it matters'],
    tableRows: [
      [
        'Basic Battery x2',
        'The recipe starts by consuming two regular batteries.',
      ],
      ['Strong Acid x1', 'The material most likely to block Tadpole progress.'],
      ['Salt x1', 'Cheap, but easy to spend before you notice.'],
      [
        'Fabricator',
        'Current blueprint pages list Power Cell as a Fabricator craft.',
      ],
      ['Tadpole plan', 'PC Gamer lists Power Cell in the Tadpole craft chain.'],
      [
        'Battery storage',
        'Keeps tool batteries and vehicle parts from fighting for the same pile.',
      ],
      [
        'Advanced split',
        'Keep Advanced Battery and Entangled Power Cell materials in their own route.',
      ],
    ],
    visualTitle: 'Vehicle power card',
    visualItems: [
      {
        label: 'Batteries',
        value: '2',
        note: 'Basic Batteries go into the cell.',
      },
      {
        label: 'Acid',
        value: '1',
        note: 'Strong Acid is the real gate.',
      },
      {
        label: 'Use',
        value: 'Tadpole',
        note: 'Save it for vehicle progress before rare power crafts.',
      },
    ],
    cautionTitle: 'Do not turn your last tool batteries into a Power Cell',
    cautionBody:
      'It is very easy to craft the Power Cell and then realize the Scanner or Repair Tool has no backup power. Keep the tools working first; the Tadpole can wait a few minutes longer than your oxygen route can.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'What is the Power Cell recipe in Subnautica 2?',
        body: 'Current blueprint pages list Basic Battery x2, Strong Acid x1, and Salt x1 at the Fabricator.',
      },
      {
        title: 'What is Power Cell used for?',
        body: 'PC Gamer lists Power Cell as part of the Tadpole craft, so it is mainly a vehicle-progress item in the current route.',
      },
      {
        title: 'Why can I not make Power Cell yet?',
        body: 'The blocker is usually Strong Acid or missing spare Basic Batteries. Check the Basic Battery, Strong Acid, and Salt routes before farming random electronics.',
      },
      {
        title: 'Should I craft extra Power Cells early?',
        body: 'Usually no. Make the Power Cell you need for the next vehicle step, then keep extra materials separate until you know what the next recipe asks for.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Vehicle Guide' },
      {
        href: Routes.Subnautica2VehicleFabricator,
        label: 'Vehicle Fabricator Guide',
      },
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery Guide' },
      {
        href: Routes.Subnautica2AdvancedBattery,
        label: 'Advanced Battery Guide',
      },
      {
        href: Routes.Subnautica2BatteryTerminal,
        label: 'Battery Terminal Guide',
      },
      {
        href: Routes.Subnautica2EntangledPowerCell,
        label: 'Entangled Power Cell Guide',
      },
      { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid Guide' },
      { href: Routes.Subnautica2NecroleiCyst, label: 'Necrolei Cyst Guide' },
      { href: Routes.Subnautica2Salt, label: 'Salt Location Guide' },
      { href: Routes.Subnautica2Processor, label: 'Processor Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 27, 2026 against Subnautica2.gg, Subnautica2Hub, and PC Gamer. Subnautica 2 is in Early Access, so recipe costs, battery routes, and vehicle requirements should be rechecked after patches.',
    cardKicker: 'Power card',
    cardBody:
      'Basic Battery x2, Strong Acid x1, Salt x1, Fabricator craft, Tadpole use, and battery storage planning.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Vehicle power guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Power Cell 指南 - 配方、Strong Acid、Salt 和 Tadpole 准备',
      description:
        'Subnautica 2 中文 Power Cell 指南：整理 Basic Battery x2、Strong Acid x1、Salt x1 配方、Fabricator 制作、Tadpole 用途和前期材料规划。',
    },
    eyebrow: 'Subnautica 2 载具供电',
    title: 'Subnautica 2 Power Cell 指南',
    description:
      'Power Cell 看起来只是“大电池”，但它真正卡住的是 Tadpole 载具路线。你要先把 Basic Battery、Strong Acid 和 Salt 三条小路线理顺，再去按下制作键。',
    quickLabel: '快速结论',
    quickAnswer:
      'Subnautica2.gg 和 Subnautica2Hub 当前蓝图页面把 Power Cell 写成 Fabricator 制作，配方是 Basic Battery x2、Strong Acid x1、Salt x1。PC Gamer 提到 Power Cell 是 Tadpole 制作链的一部分，所以别把它当普通备用电池。先做两块 Basic Battery，确认 Strong Acid，留一块 Salt，等 Tadpole 其他环节接近完成时再合成。',
    contentsLabel: '目录',
    routeTitle: 'Power Cell 路线',
    routeSteps: [
      {
        title: '先准备两块能用的 Basic Battery',
        body: '配方会吃掉两块 Basic Battery。如果这些电池本来要给 Scanner、Repair Tool 或 Habitat Builder 用，先补齐工具电池，再做 Power Cell。',
      },
      {
        title: 'Strong Acid 要专门跑',
        body: 'Strong Acid 是最容易卡住的部分。它不是 Copper 路线顺手就能解决的材料，最好和 Necrolei Cysts、Processor 路线一起规划。',
      },
      {
        title: '提前留一块 Salt',
        body: 'Salt 不稀有，但很容易被食物、水或其它配方顺手花掉。Power Cell 开始前，单独留一块在载具材料箱里。',
      },
      {
        title: '等 Tadpole 链接近完成再合成',
        body: 'PC Gamer 把 Power Cell 和 Tadpole 制作链放在一起。载具碎片或制作站还没准备好时，先让材料分开放着，不要急着变成成品。',
      },
      {
        title: '长线探索前先规划充电',
        body: '进入载具和高级电池阶段后，供电不再是单个物品问题。Battery Terminal 和清楚的电池箱，会让整条路线少很多麻烦。',
      },
    ],
    tableTitle: 'Power Cell 检查表',
    tableHeaders: ['需要什么', '为什么重要'],
    tableRows: [
      ['Basic Battery x2', '配方会消耗两块普通电池。'],
      ['Strong Acid x1', '最容易卡住 Tadpole 进度的材料。'],
      ['Salt x1', '便宜，但经常在你没注意时被花掉。'],
      ['Fabricator', '当前蓝图页面把 Power Cell 写成 Fabricator 制作。'],
      ['Tadpole 计划', 'PC Gamer 把 Power Cell 列在 Tadpole 制作链里。'],
      ['电池储物箱', '避免工具电池和载具材料混在一起互相抢。'],
    ],
    visualTitle: '载具供电卡',
    visualItems: [
      {
        label: '电池',
        value: '2',
        note: '两块 Basic Battery 会被合进去。',
      },
      {
        label: '酸',
        value: '1',
        note: 'Strong Acid 才是真正的卡点。',
      },
      {
        label: '用途',
        value: 'Tadpole',
        note: '优先留给载具进度。',
      },
    ],
    cautionTitle: '不要把最后的工具电池做成 Power Cell',
    cautionBody:
      '最难受的情况是 Power Cell 做出来了，Scanner 或 Repair Tool 却没备用电池。先保证工具能用，Tadpole 晚几分钟没事，氧气路线可等不了。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Power Cell 配方是什么？',
        body: '当前蓝图页面写的是在 Fabricator 使用 Basic Battery x2、Strong Acid x1、Salt x1。',
      },
      {
        title: 'Power Cell 有什么用？',
        body: 'PC Gamer 把 Power Cell 列在 Tadpole 制作链里，所以当前路线里它主要是载具进度材料。',
      },
      {
        title: '为什么 Power Cell 做不了？',
        body: '通常卡在 Strong Acid，或者手里没有多余 Basic Battery。先检查 Basic Battery、Strong Acid 和 Salt 三条路线。',
      },
      {
        title: '前期要不要多做 Power Cell？',
        body: '通常不要。先做下一步载具需要的那一块，多余材料先分开放，等下一个配方确认后再花。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 载具指南' },
      {
        href: Routes.Subnautica2VehicleFabricator,
        label: 'Vehicle Fabricator 指南',
      },
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery 指南' },
      {
        href: Routes.Subnautica2AdvancedBattery,
        label: 'Advanced Battery 指南',
      },
      {
        href: Routes.Subnautica2BatteryTerminal,
        label: 'Battery Terminal 指南',
      },
      { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid 指南' },
      { href: Routes.Subnautica2NecroleiCyst, label: 'Necrolei Cyst 指南' },
      {
        href: Routes.Subnautica2EntangledPowerCell,
        label: 'Entangled Power Cell 指南',
      },
      { href: Routes.Subnautica2Salt, label: 'Salt 位置指南' },
      { href: Routes.Subnautica2Processor, label: 'Processor 指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 27 日核对 Subnautica2.gg、Subnautica2Hub 和 PC Gamer。Subnautica 2 仍处于抢先体验阶段，配方消耗和载具需求可能随补丁调整。',
    cardKicker: '供电卡片',
    cardBody:
      'Basic Battery x2、Strong Acid x1、Salt x1、Fabricator 制作、Tadpole 用途和电池储物规划。',
    cardTypeLabel: '类型',
    cardTypeValue: '载具供电指南',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = powerCellCopy.en;

powerCellCopy.zh = {
  ...powerCellCopy.zh,
  quickAnswer:
    'Subnautica2.gg 和 Subnautica2Hub 当前把 Power Cell 写成 Fabricator 制作，配方是 Basic Battery x2、Strong Acid x1、Salt x1。PC Gamer 提到 Power Cell 是 Tadpole 制作链的一部分，所以别把它当普通备用电池。先做两块 Basic Battery，确认 Strong Acid，留一块 Salt，等 Tadpole 其他环节接近完成时再合成。如果你已经在做 Advanced Battery 或 Entangled Power Cell，把那些稀有材料路线单独放，不要混进普通 Power Cell 箱子。',
  fieldNotesTitle: '载具供电笔记',
  fieldNotes: [
    {
      title: '别吃掉工具电池',
      body: 'Power Cell 看起来像进度，但 Scanner 或 Repair Tool 没电会更烦。先补齐工具电池，再把两块 Basic Battery 合进去。',
    },
    {
      title: 'Strong Acid 才是真跑腿',
      body: 'Copper 和 Salt 很容易想起来，真正让路线分叉的是 Strong Acid，它会把你带到 Processor 和 Necrolei Cyst 链上。',
    },
    {
      title: '稀有供电材料另放一箱',
      body: 'Advanced Battery 和 Entangled Power Cell 会拉到更深材料。把它们和普通 Power Cell 材料混放，柜子很快就会看不懂。',
    },
  ],
  routeChecklistTitle: 'Power Cell 检查',
  routeChecklist: [
    '两块 Basic Battery 是备用，不是从工具里拆的。',
    'Strong Acid 路线已经解决，再最终合成。',
    '提前留一块 Salt 给 Power Cell。',
    '高级供电材料放在单独柜子里。',
  ],
  routeSteps: [
    ...powerCellCopy.zh.routeSteps,
    {
      title: '普通供电和稀有供电分开放',
      body: 'Power Cell 主要是 Tadpole 桥梁。Advanced Battery 和 Entangled Power Cell 会拉到 Conduit Crystal、Silver Ingot、Gold Ingot、Troilite 这些更深的材料，除非配方已经亮出来，否则别把它们和普通 Power Cell 材料混在一起。',
    },
  ],
  tableRows: [
    ...powerCellCopy.zh.tableRows,
    [
      '高级供电分流',
      'Advanced Battery 和 Entangled Power Cell 的材料单独走路线。',
    ],
  ],
  related: [
    { href: Routes.Subnautica2Tadpole, label: 'Tadpole 载具指南' },
    {
      href: Routes.Subnautica2VehicleFabricator,
      label: 'Vehicle Fabricator 指南',
    },
    { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery 指南' },
    { href: Routes.Subnautica2AdvancedBattery, label: 'Advanced Battery 指南' },
    {
      href: Routes.Subnautica2EntangledPowerCell,
      label: 'Entangled Power Cell 指南',
    },
    { href: Routes.Subnautica2BatteryTerminal, label: 'Battery Terminal 指南' },
    { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid 指南' },
    { href: Routes.Subnautica2NecroleiCyst, label: 'Necrolei Cyst 指南' },
    { href: Routes.Subnautica2Salt, label: 'Salt 位置指南' },
    { href: Routes.Subnautica2Processor, label: 'Processor 指南' },
    { href: Routes.Subnautica2Crafting, label: '制作指南' },
  ],
  sourceBody:
    '2026 年 5 月 27 日核对 Subnautica2.gg、Subnautica2Hub 和 PC Gamer。Subnautica 2 仍在抢先体验阶段，配方消耗、电池路线和载具需求都可能随补丁调整。',
};

powerCellCopy.ja = {
  ...fallbackCopy,
  metadata: {
    title: 'Subnautica 2 Power Cell Guide',
    description:
      'Guide for Power Cell recipe, Basic Battery, Strong Acid, Salt, Fabricator crafting, Tadpole use, Advanced Battery split, and vehicle power planning.',
  },
  sourceBody:
    'Checked May 27, 2026 against Subnautica2.gg, Subnautica2Hub, and PC Gamer. Early Access recipe costs, battery routes, and vehicle requirements can change.',
};

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  if (powerCellCopy[locale]) {
    continue;
  }

  powerCellCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Power Cell Guide',
      description:
        'Guide for Power Cell recipe, Basic Battery, Strong Acid, Salt, Fabricator crafting, Tadpole use, and vehicle power planning.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = powerCellCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2PowerCell,
  });
}

export default async function PowerCellGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = powerCellCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={BatteryChargingIcon}
      locale={locale}
      pathname={Routes.Subnautica2PowerCell}
      sources={sharedSources}
    />
  );
}
