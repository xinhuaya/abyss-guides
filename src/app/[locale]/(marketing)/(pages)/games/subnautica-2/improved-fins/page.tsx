import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { WavesIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type ImprovedFinsCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-29';

const sharedSources = [
  {
    href: 'https://www.dexerto.com/wikis/subnautica-2/equipment/improved-fins/',
    label: 'Dexerto Improved Fins equipment page',
  },
  {
    href: 'https://www.gamesradar.com/games/survival/subnautica-2-improved-fins/',
    label: 'GamesRadar+ Improved Fins guide',
  },
  {
    href: 'https://subnautica2.gg/items/improved-fins',
    label: 'Subnautica2.gg Improved Fins item page',
  },
  {
    href: 'https://www.dexerto.com/wikis/subnautica-2/resources/conduit-crystal/',
    label: 'Dexerto Conduit Crystal resource page',
  },
];

const improvedFinsCopy: Record<string, ImprovedFinsCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Improved Fins Guide - Scan Location, Recipe, and Conduit Crystal',
      description:
        'A practical Subnautica 2 Improved Fins guide covering the scan unlock, Alien Ruins route, Basic Fins, Fiber Mesh, Conduit Crystal, Tadpole safety, and Fabricator crafting.',
    },
    eyebrow: 'Subnautica 2 mid-game movement',
    title: 'Subnautica 2 Improved Fins Guide',
    description:
      'Improved Fins are not a starter errand. Treat them like a mid-game movement upgrade: bring the Tadpole, keep a Repair Tool handy, scan the discarded fins, then craft once you have the crystal chain ready.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Dexerto lists Improved Fins as feet-slot equipment crafted at the Fabricator from Basic Fins x1, Fiber Mesh x1, and Conduit Crystal x2, with a data card / scan unlock. GamesRadar+ says the blueprint comes from scanning three discarded pairs near the Alien Ruins route after mid-game story progress, and warns about Tadpole depth, Needlers, and needing a Rebreather for the area. Treat this as a Tadpole route: bring Repair Tool, Battery Terminal charged batteries, and enough oxygen to scan calmly.',
    fieldNotesTitle: 'Field notes for the Alien Ruins swim',
    fieldNotes: [
      {
        title: 'This is a route, not a shopping list',
        body: 'The recipe is short, but the scan trip is the real cost. If you are not ready to leave the Tadpole, scan under pressure, and get back cleanly, the blueprint can wait.',
      },
      {
        title: 'The old fins are part of the plan',
        body: 'Improved Fins use the starter pair. Put Basic Fins in a known locker before the trip so the final craft does not turn into a second early-game material run.',
      },
      {
        title: 'Charge tools before chasing fragments',
        body: 'The scan route often stacks Scanner, Repair Tool, route markers, and a nervous Tadpole repair in the same outing. Weak batteries make the whole trip feel worse than it needs to.',
      },
    ],
    routeChecklistTitle: 'Before chasing Improved Fins',
    routeChecklist: [
      'Bring Tadpole, Rebreather, Repair Tool, Scanner, and a real oxygen margin.',
      'Store Basic Fins safely before collecting Conduit Crystal.',
      'Charge Scanner and Repair Tool batteries before leaving base.',
      'Mark the exit line before scanning around Alien Ruins debris.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Improved Fins route plan',
    routeSteps: [
      {
        title: 'Do not rush this before the story route opens',
        body: 'GamesRadar+ places the scan route after heat adaptation, the Tadpole Pens key code, and the Alien Ruins marker. If those words mean nothing in your save yet, keep this page bookmarked and finish safer oxygen and vehicle prep first.',
      },
      {
        title: 'Bring the right kit before leaving the Tadpole',
        body: 'The route asks you to leave the vehicle around deep water while Needlers are nearby. Bring a Rebreather, a repaired Tadpole, a Repair Tool, and enough oxygen margin to scan without panic.',
      },
      {
        title: 'Charge tools before the scan loop',
        body: 'Improved Fins runs often stack Scanner, Repair Tool, and route-marker use in the same trip. Put weak batteries through the Battery Terminal before you leave, and keep one fresh Basic Battery in the locker.',
      },
      {
        title: 'Scan the discarded fins, then check the recipe',
        body: 'Dexerto lists a data card / scan unlock, while GamesRadar+ points to three discarded Improved Fins pairs near Alien Ruins. Scan the nearby pairs, then open the Fabricator before farming the final crystal count.',
      },
      {
        title: 'Craft from your old fins instead of duplicating work',
        body: 'The recipe uses Basic Fins x1. Keep your early pair instead of rebuilding it later; this is why the Basic Fins guide tells you not to throw them away.',
      },
      {
        title: 'Pair Conduit Crystal collection with other mid-game goals',
        body: 'Dexerto lists Conduit Crystal in the recipe, and that same resource feeds other mid-game pages on the site. Do not swim out for only one crystal unless you are already close to the area.',
      },
    ],
    tableTitle: 'Improved Fins checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      ['Unlock', 'Scan / data card route for Improved Fins.'],
      ['Recipe', 'Basic Fins x1, Fiber Mesh x1, Conduit Crystal x2.'],
      ['Station', 'Fabricator equipment craft.'],
      ['Safety', 'Tadpole, Rebreather, Repair Tool, and oxygen margin.'],
      ['Power prep', 'Charge Scanner and Repair Tool before the route.'],
      ['Timing', 'Mid-game route after Alien Ruins access.'],
    ],
    visualTitle: 'Upgrade stack',
    visualItems: [
      {
        label: 'Basic Fins',
        value: '1',
        note: 'Keep the starter pair.',
      },
      {
        label: 'Fiber Mesh',
        value: '1',
        note: 'Prep before the trip.',
      },
      {
        label: 'Conduit Crystal',
        value: '2',
        note: 'Farm with a safe route.',
      },
    ],
    cautionTitle: 'Spoiler-light warning',
    cautionBody:
      'GamesRadar+ ties the scan route to Alien Ruins and mid-game story progress. This guide keeps exact story wording light, but the practical takeaway is clear: do not chase Improved Fins until your save has the vehicle, oxygen, and route markers to survive the trip.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you unlock Improved Fins in Subnautica 2?',
        body: 'Current sources point to scanning Improved Fins data. GamesRadar+ describes three discarded pairs near the Alien Ruins route; Dexerto lists scan / data card unlock requirements.',
      },
      {
        title: 'What is the Improved Fins recipe?',
        body: 'Dexerto lists Basic Fins x1, Fiber Mesh x1, and Conduit Crystal x2 at the Fabricator.',
      },
      {
        title: 'Do you need Basic Fins first?',
        body: 'Yes. Dexerto lists Basic Fins as part of the Improved Fins recipe, so keep your first pair instead of discarding it.',
      },
      {
        title: 'When should you go for Improved Fins?',
        body: 'After you have mid-game travel tools. GamesRadar+ warns that the route involves deeper water, Needlers, and a Tadpole safety check, so Rebreather and Repair Tool prep matters.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2HeatTolerance, label: 'Heat Tolerance Guide' },
      { href: Routes.Subnautica2BasicFins, label: 'Basic Fins Guide' },
      { href: Routes.Subnautica2FiberMesh, label: 'Fiber Mesh Guide' },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal Guide',
      },
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather Guide' },
      { href: Routes.Subnautica2RepairTool, label: 'Repair Tool Guide' },
      {
        href: Routes.Subnautica2BatteryTerminal,
        label: 'Battery Terminal Guide',
      },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Vehicle Guide' },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        label: 'Tadpole Depth Module',
      },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 27, 2026 against Dexerto, GamesRadar+, Subnautica2.gg, and Dexerto Conduit Crystal data. Early Access routes can change, so the page separates confirmed recipe items from the scan route and tells players to verify the Fabricator after unlocking the blueprint.',
    cardKicker: 'Movement card',
    cardBody:
      'Scan unlock, Basic Fins x1, Fiber Mesh x1, Conduit Crystal x2, Fabricator crafting, Tadpole safety, Rebreather prep, and mid-game route planning.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Equipment upgrade',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Improved Fins 指南 - 扫描位置、配方和 Conduit Crystal',
      description:
        'Subnautica 2 中文 Improved Fins 指南：整理扫描解锁、Alien Ruins 路线、Basic Fins、Fiber Mesh、Conduit Crystal、Tadpole 安全和 Fabricator 制作。',
    },
    eyebrow: 'Subnautica 2 中期移动升级',
    title: 'Subnautica 2 Improved Fins 指南',
    description:
      'Improved Fins 不是开局随手就能做的装备。把它当作中期移动升级来规划：带上 Tadpole，准备 Repair Tool，扫描废弃 fins，再用准备好的晶体链去制作。',
    quickLabel: '快速结论',
    quickAnswer:
      'Dexerto 把 Improved Fins 列为脚部装备，Fabricator 配方为 Basic Fins x1、Fiber Mesh x1 和 Conduit Crystal x2，并写有 data card / scan 解锁要求。GamesRadar+ 说蓝图来自 Alien Ruins 路线附近三双废弃 Improved Fins 的扫描，并提醒这条路线涉及 Tadpole 深度、Needlers 和 Rebreather。Subnautica2.gg 也把 Improved Fins 标为通过 Fabrication Station 制作的 fins。',
    fieldNotesTitle: 'Alien Ruins 路线笔记',
    fieldNotes: [
      {
        title: '这不是单纯的材料清单',
        body: '配方本身不长，真正麻烦的是扫描路线。如果你还不能稳定离开 Tadpole、边扫边看氧气、再安全回车，那就先把这页收藏着。',
      },
      {
        title: '旧 Basic Fins 也是材料',
        body: 'Improved Fins 会吃掉第一双 Basic Fins。出发前把它放进固定箱子里，别到最后缺的不是稀有材料，而是开局装备。',
      },
      {
        title: '电池状态会影响整趟体验',
        body: '这条路线常常同时用到 Scanner、Repair Tool、路线标记和 Tadpole 维修。弱电池会把本来能稳稳完成的扫描变成手忙脚乱。',
      },
    ],
    routeChecklistTitle: '追 Improved Fins 前',
    routeChecklist: [
      '带上 Tadpole、Rebreather、Repair Tool、Scanner，并留出足够氧气余量。',
      '采 Conduit Crystal 前，先确认 Basic Fins 已经收好。',
      '出门前给 Scanner 和 Repair Tool 换上满电电池。',
      '围着 Alien Ruins 残骸扫描前，先标好返回路线。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Improved Fins 路线规划',
    routeSteps: [
      {
        title: '剧情路线没打开前别硬冲',
        body: 'GamesRadar+ 把扫描路线放在 heat adaptation、Tadpole Pens key code 和 Alien Ruins 标记之后。如果你的存档还没到这些点，先把氧气、载具和基础装备补齐。',
      },
      {
        title: '离开 Tadpole 前带够安全装备',
        body: '这条路线会让你在较深区域离开载具，附近还有 Needlers。建议带 Rebreather、耐久健康的 Tadpole、Repair Tool，并留出足够氧气余量。',
      },
      {
        title: '先扫描废弃 fins，再看配方',
        body: 'Dexerto 列出 data card / scan 解锁，GamesRadar+ 指向 Alien Ruins 附近三双废弃 Improved Fins。先完成扫描，再打开 Fabricator 确认最终材料数量。',
      },
      {
        title: '用旧 Basic Fins 升级，不要重复做',
        body: '配方会用到 Basic Fins x1。前期做出的那一双请留着，后面可以直接进 Improved Fins 配方。',
      },
      {
        title: 'Conduit Crystal 和其他目标一起跑',
        body: 'Dexerto 把 Conduit Crystal 列入配方，这个材料也会连接其他中期装备页。除非你已经很近，否则不要只为一两个晶体单独跑一趟。',
      },
    ],
    tableTitle: 'Improved Fins 检查表',
    tableHeaders: ['需要确认', '建议做法'],
    tableRows: [
      ['解锁', '扫描 / data card 路线。'],
      ['配方', 'Basic Fins x1、Fiber Mesh x1、Conduit Crystal x2。'],
      ['工作台', '在 Fabricator 的装备栏制作。'],
      ['安全', 'Tadpole、Rebreather、Repair Tool 和氧气余量。'],
      ['时机', 'Alien Ruins 路线打开后的中期目标。'],
    ],
    visualTitle: '升级材料栈',
    visualItems: [
      {
        label: 'Basic Fins',
        value: '1',
        note: '保留开局那双。',
      },
      {
        label: 'Fiber Mesh',
        value: '1',
        note: '出发前准备好。',
      },
      {
        label: 'Conduit Crystal',
        value: '2',
        note: '按安全路线采集。',
      },
    ],
    cautionTitle: '轻剧透提醒',
    cautionBody:
      'GamesRadar+ 把扫描路线和 Alien Ruins、中期剧情进度联系在一起。这里尽量少写剧情细节，但实用结论很明确：在载具、氧气和路线标记都准备好之前，不要硬追 Improved Fins。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Improved Fins 怎么解锁？',
        body: '当前来源都指向扫描解锁。GamesRadar+ 描述了 Alien Ruins 路线附近三双废弃 fins；Dexerto 列出 scan / data card 解锁要求。',
      },
      {
        title: 'Improved Fins 配方是什么？',
        body: 'Dexerto 列出的 Fabricator 配方是 Basic Fins x1、Fiber Mesh x1 和 Conduit Crystal x2。',
      },
      {
        title: '一定需要 Basic Fins 吗？',
        body: '需要。Dexerto 把 Basic Fins 列为 Improved Fins 配方的一部分，所以第一双 fins 不要丢。',
      },
      {
        title: '什么时候适合去拿 Improved Fins？',
        body: '等中期移动和生存工具到位之后再去。GamesRadar+ 提醒该路线涉及深水、Needlers 和 Tadpole 安全，Rebreather 与 Repair Tool 都很重要。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2HeatTolerance, label: 'Heat Tolerance Guide' },
      { href: Routes.Subnautica2BasicFins, label: 'Basic Fins 指南' },
      { href: Routes.Subnautica2FiberMesh, label: 'Fiber Mesh 指南' },
      { href: Routes.Subnautica2ConduitCrystal, label: 'Conduit Crystal 指南' },
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather 指南' },
      { href: Routes.Subnautica2RepairTool, label: 'Repair Tool 指南' },
      {
        href: Routes.Subnautica2BatteryTerminal,
        label: 'Battery Terminal 指南',
      },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 载具指南' },
      { href: Routes.Subnautica2TadpoleDepthModule, label: 'Tadpole 深度模块' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 27 日核对 Dexerto、GamesRadar+、Subnautica2.gg 和 Dexerto Conduit Crystal 资料。抢先体验路线可能变化，所以页面把配方材料和扫描路线分开写，并提醒玩家解锁后再确认 Fabricator。',
    cardKicker: '移动卡片',
    cardBody:
      '扫描解锁、Basic Fins x1、Fiber Mesh x1、Conduit Crystal x2、Fabricator 制作、Tadpole 安全、Rebreather 准备和中期路线规划。',
    cardTypeLabel: '类型',
    cardTypeValue: '装备升级',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = improvedFinsCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  improvedFinsCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Improved Fins Guide',
      description:
        'Guide for Improved Fins, scan unlock, Basic Fins, Fiber Mesh, Conduit Crystal, Fabricator crafting, and Tadpole safety.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = improvedFinsCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2ImprovedFins,
  });
}

export default async function ImprovedFinsGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = improvedFinsCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={WavesIcon}
      locale={locale}
      pathname={Routes.Subnautica2ImprovedFins}
      sources={sharedSources}
    />
  );
}
