import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { RecycleIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type MetalSalvageCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-29';

const sharedSources = [
  {
    href: 'https://subnautica2hub.com/resources/metal-salvage',
    label: 'Subnautica2Hub Metal Salvage resource page',
  },
  {
    href: 'https://subnautica2.gg/items/metal-salvage',
    label: 'Subnautica2.gg Metal Salvage item page',
  },
  {
    href: 'https://www.dexerto.com/wikis/subnautica-2/resources/metal-salvage/',
    label: 'Dexerto Metal Salvage resource page',
  },
  {
    href: 'https://www.dexerto.com/wikis/subnautica-2/resources/titanium/',
    label: 'Dexerto Titanium resource guide',
  },
  {
    href: 'https://subnautica2-wiki.com/en/items/metal-salvage',
    label: 'Subnautica 2 Wiki Metal Salvage item page',
  },
];

const metalSalvageCopy: Record<string, MetalSalvageCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Metal Salvage Guide - Wreck Debris, Fabricator, and Titanium Stock',
      description:
        'A practical Subnautica 2 Metal Salvage guide covering wreck debris, Fabricator conversion, Salvaged Titanium, raw Titanium planning, inventory weight, and early base-building stock.',
    },
    eyebrow: 'Subnautica 2 resource route',
    title: 'Subnautica 2 Metal Salvage Guide',
    description:
      'Metal Salvage is not glamorous. Good. That is why it is easy to ignore until the base plan wants another pile of Titanium. Pick it up when a wreck route gives you the chance.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Subnautica2Hub, Subnautica2.gg, Dexerto, and Subnautica 2 Wiki describe Metal Salvage as debris from a human habitat or vehicle that is easily converted into raw materials in a Fabricator. Subnautica2Hub lists it as a harvested material used as the ingredient for Salvaged Titanium, requiring one Metal Salvage per craft at the Fabricator. Dexerto Titanium guidance says Metal Salvage near wreck debris can be processed into Salvaged Titanium and yields four Titanium per piece. Subnautica 2 Wiki also lists Metal Salvage as an inventory pickup with buoyancy and mass stats.',
    fieldNotesTitle: 'Field notes for salvage runs',
    fieldNotes: [
      {
        title: 'Pick it up when the route is already paid for',
        body: 'Metal Salvage is best when you are already at a wreck, scanning fragments, or checking old structures. A dedicated salvage trip feels slow; a spare backpack slot on an existing route feels free.',
      },
      {
        title: 'Process it before it becomes clutter',
        body: 'The item is useful because it turns into planned Titanium stock. If it sits in your bag or a random locker for three trips, it is not stock anymore. It is noise.',
      },
      {
        title: 'Use salvage before base expansion',
        body: 'A few processed pieces can cover lockers, hatches, and station placement without draining the loose Titanium pile you need for tools and repairs.',
      },
    ],
    routeChecklistTitle: 'Before keeping Metal Salvage',
    routeChecklist: [
      'Leave one or two backpack slots open on wreck and fragment routes.',
      'Process salvage at the Fabricator when you return to base.',
      'Store processed Titanium near base-building materials.',
      'Do not carry salvage into Silver, Quartz, or story-item routes unless you have space.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Metal Salvage route plan',
    routeSteps: [
      {
        title: 'Treat wreck debris as a Titanium errand',
        body: 'The item text describes Metal Salvage as human habitat or vehicle debris. When you are already checking wrecks or old structures, leave one or two inventory slots open for salvage.',
      },
      {
        title: 'Do not carry it forever',
        body: 'Subnautica 2 Wiki lists Metal Salvage as an inventory pickup with mass. Bring it home, process it, and free the space before the next resource loop.',
      },
      {
        title: 'Convert through Fabricator',
        body: 'Subnautica2Hub lists Metal Salvage as the ingredient for Salvaged Titanium at the Fabricator. It is a processing step, not a trophy for the locker.',
      },
      {
        title: 'Use it when Titanium demand spikes',
        body: 'Dexerto Titanium guidance reports that Metal Salvage can turn into Salvaged Titanium for four Titanium per piece. That makes it useful before base expansions, storage rows, and tool rebuilds.',
      },
      {
        title: 'Keep salvage separate from loose Titanium',
        body: 'A small salvage box beside the Fabricator keeps the flow obvious: wreck debris in, Titanium stock out. Mixing it with loose resources makes it easier to forget.',
      },
    ],
    tableTitle: 'Metal Salvage checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      ['Source type', 'Human habitat or vehicle debris.'],
      [
        'Processing',
        'One Metal Salvage feeds Salvaged Titanium at Fabricator.',
      ],
      ['Titanium value', 'Dexerto reports four Titanium per processed piece.'],
      [
        'Inventory',
        'Subnautica 2 Wiki lists pickup, mass, and buoyancy stats.',
      ],
      ['Best timing', 'Process before base building or locker expansion runs.'],
    ],
    visualTitle: 'Salvage flow',
    visualItems: [
      {
        label: 'Find',
        value: 'Debris',
        note: 'Wreck or old human structure routes.',
      },
      {
        label: 'Process',
        value: 'Fab',
        note: 'Convert instead of hoarding.',
      },
      {
        label: 'Spend',
        value: 'Titanium',
        note: 'Base, storage, tools, ingot buffer.',
      },
    ],
    cautionTitle: 'Do not let salvage clog the backpack',
    cautionBody:
      'Metal Salvage is valuable because it compresses a good Titanium run into one pickup. It stops being valuable when three pieces sit in your bag while you swim past Silver, Quartz, or quest parts.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'What is Metal Salvage in Subnautica 2?',
        body: 'Current item pages describe it as debris from a human habitat or vehicle that can be converted into raw materials in a Fabricator.',
      },
      {
        title: 'What is Metal Salvage used for?',
        body: 'Subnautica2Hub and Subnautica2.gg list it as used in Salvaged Titanium at the Fabricator.',
      },
      {
        title: 'How much Titanium does Metal Salvage give?',
        body: 'Dexerto Titanium guidance reports four Titanium per processed Metal Salvage piece.',
      },
      {
        title: 'Should you keep Metal Salvage or process it right away?',
        body: 'Process it when you return to base unless you are deliberately saving a Fabricator batch. The pickup takes inventory space and is more useful as planned Titanium stock.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Titanium, label: 'Titanium Location Guide' },
      { href: Routes.Subnautica2RepairTool, label: 'Repair Tool Guide' },
      { href: Routes.Subnautica2BaseBuilding, label: 'Base Building Guide' },
      {
        href: Routes.Subnautica2HabitatBuilder,
        label: 'Habitat Builder Guide',
      },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 26, 2026 against Subnautica2Hub, Subnautica2.gg, Dexerto, and Subnautica 2 Wiki. Early Access salvage rules, processing yield, and item stats can change; recheck the Fabricator and PDA after patches.',
    cardKicker: 'Resource card',
    cardBody:
      'Human debris pickup, Fabricator processing, Salvaged Titanium, Titanium reserve planning, inventory weight, and base-building timing.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Resource guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Metal Salvage 指南 - 残骸、Fabricator 和 Titanium 储备',
      description:
        'Subnautica 2 中文 Metal Salvage 指南：整理沉船残骸、Fabricator 加工、Salvaged Titanium、原 Titanium 储备、背包占用和早期基地建造节奏。',
    },
    eyebrow: 'Subnautica 2 资源路线',
    title: 'Subnautica 2 Metal Salvage 指南',
    description:
      'Metal Salvage 不华丽。正因为这样，它很容易被忽略，直到基地规划突然又要一堆 Titanium。跑残骸路线时顺手捡，回家就加工。',
    quickLabel: '快速结论',
    quickAnswer:
      'Subnautica2Hub、Subnautica2.gg、Dexerto 和 Subnautica 2 Wiki 都把 Metal Salvage 描述为来自人类舱室或载具的残骸，可以在 Fabricator 中轻松转成原材料。Subnautica2Hub 列出它是 Salvaged Titanium 的材料，在 Fabricator 中每次制作需要 1 个 Metal Salvage。Dexerto 的 Titanium 指南说明，沉船残骸附近的 Metal Salvage 可以加工成 Salvaged Titanium，每块给 4 个 Titanium。Subnautica 2 Wiki 还列出 Metal Salvage 是背包拾取物，并带有浮力和质量数据。',
    fieldNotesTitle: 'Metal Salvage 路线笔记',
    fieldNotes: [
      {
        title: '顺路捡最划算',
        body: 'Metal Salvage 最适合在你本来就在查残骸、扫碎片、看旧设施时顺手拿。专门为了它出门会慢；已有路线里空一个背包格就很舒服。',
      },
      {
        title: '回家就加工，别变成杂物',
        body: '它的价值在于能变成计划内的 Titanium 库存。如果在背包或随机箱子里躺了好几趟，那就不是库存，而是干扰。',
      },
      {
        title: '扩建基地前优先处理',
        body: '几块加工后的 salvage 可以顶住储物箱、舱门和工作站摆放，不用把工具维修需要的原 Titanium 一次花光。',
      },
    ],
    routeChecklistTitle: '留下 Metal Salvage 前',
    routeChecklist: [
      '残骸和碎片路线给背包留一两个格子。',
      '回到基地后用 Fabricator 立刻加工。',
      '加工后的 Titanium 放到基地建造材料旁边。',
      '跑 Silver、Quartz 或剧情物品路线时，空间不够就别硬背 salvage。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Metal Salvage 路线规划',
    routeSteps: [
      {
        title: '把残骸路线当成 Titanium 补货',
        body: '当前物品文本把 Metal Salvage 描述为人类舱室或载具残骸。只要你已经在查沉船、旧设施或残骸路线，就给背包留一两个格子。',
      },
      {
        title: '别一直背着不处理',
        body: 'Subnautica 2 Wiki 把 Metal Salvage 列为背包拾取物，并带有质量数据。带回家就加工，别让它卡住下一趟资源路线。',
      },
      {
        title: '通过 Fabricator 转换',
        body: 'Subnautica2Hub 把 Metal Salvage 列为 Fabricator 中 Salvaged Titanium 的材料。它是加工步骤，不是放在箱子里好看的战利品。',
      },
      {
        title: 'Titanium 需求暴涨时优先处理',
        body: 'Dexerto 的 Titanium 指南说，Metal Salvage 可以加工成 Salvaged Titanium，每块给 4 个 Titanium。基地扩建、储物排和工具重做前都很实用。',
      },
      {
        title: 'Metal Salvage 和散 Titanium 分开放',
        body: 'Fabricator 旁边放一个小箱子专门收残骸，流程会清楚很多：残骸进箱，Titanium 出库。混在一堆资源里很容易忘。',
      },
    ],
    tableTitle: 'Metal Salvage 检查表',
    tableHeaders: ['需要', '确认什么'],
    tableRows: [
      ['来源类型', '人类舱室或载具残骸。'],
      ['加工', '1 个 Metal Salvage 在 Fabricator 中进入 Salvaged Titanium。'],
      ['Titanium 价值', 'Dexerto 报道每块加工后可给 4 个 Titanium。'],
      ['背包', 'Subnautica 2 Wiki 列出拾取、质量和浮力数据。'],
      ['最佳时机', '基地建造或扩储物箱前先处理。'],
    ],
    visualTitle: '残骸流程',
    visualItems: [
      {
        label: '寻找',
        value: '残骸',
        note: '沉船或旧人类结构路线。',
      },
      {
        label: '加工',
        value: 'Fab',
        note: '别长期囤原件。',
      },
      {
        label: '消耗',
        value: 'Titanium',
        note: '基地、储物、工具、ingot 缓冲。',
      },
    ],
    cautionTitle: '不要让 Metal Salvage 堵住背包',
    cautionBody:
      'Metal Salvage 值钱，是因为一次拾取能换来不错的 Titanium 补货。但如果三块残骸一直占着背包，让你错过 Silver、Quartz 或任务零件，它就开始拖后腿了。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Metal Salvage 是什么？',
        body: '当前物品页面把它描述为来自人类舱室或载具的残骸，可以在 Fabricator 中转成原材料。',
      },
      {
        title: 'Metal Salvage 有什么用？',
        body: 'Subnautica2Hub 和 Subnautica2.gg 都列出它用于 Fabricator 中的 Salvaged Titanium。',
      },
      {
        title: 'Metal Salvage 能换多少 Titanium？',
        body: 'Dexerto 的 Titanium 指南报道，每块加工后的 Metal Salvage 可给 4 个 Titanium。',
      },
      {
        title: 'Metal Salvage 应该留着还是马上加工？',
        body: '回基地后建议加工，除非你刻意攒一批一起做。它占背包空间，变成计划好的 Titanium 储备才更有用。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Titanium, label: 'Titanium 位置指南' },
      { href: Routes.Subnautica2RepairTool, label: 'Repair Tool 指南' },
      { href: Routes.Subnautica2BaseBuilding, label: '基地建造指南' },
      { href: Routes.Subnautica2HabitatBuilder, label: 'Habitat Builder 指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 26 日核对 Subnautica2Hub、Subnautica2.gg、Dexerto 和 Subnautica 2 Wiki。抢先体验阶段残骸规则、加工收益和物品数据可能变化；更新后请重新检查 Fabricator 和 PDA。',
    cardKicker: '资源卡',
    cardBody:
      '人类残骸拾取、Fabricator 加工、Salvaged Titanium、Titanium 储备规划、背包重量和基地建造时机。',
    cardTypeLabel: '类型',
    cardTypeValue: '资源指南',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = metalSalvageCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  metalSalvageCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Metal Salvage Guide',
      description:
        'Guide for Metal Salvage, wreck debris, Fabricator conversion, Salvaged Titanium, Titanium stock, inventory planning, and early base building.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = metalSalvageCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2MetalSalvage,
  });
}

export default async function MetalSalvageGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = metalSalvageCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={RecycleIcon}
      locale={locale}
      pathname={Routes.Subnautica2MetalSalvage}
      sources={sharedSources}
    />
  );
}
