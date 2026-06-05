import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { SearchIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type ScanFirstCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-06-05';
const UPDATED_AT = '2026-06-05';

const BILIBILI_FIRST_RUN_URL = 'https://www.bilibili.com/video/BV1zh5d68Eft/';

const sharedSources = [
  {
    href: BILIBILI_FIRST_RUN_URL,
    label: 'Bilibili first-run gameplay video',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-tips/',
    label: 'PC Gamer beginner tips',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-o2-oxygen-air-tank/',
    label: 'PC Gamer O2 and Air Tank guide',
  },
  {
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/',
    label: 'Official Steam page',
  },
];

const sharedReferenceStills = [
  {
    src: '/abyss/video-stills/bv1zh5d68eft/base-check-151s.webp',
    alt: 'Bilibili gameplay still showing an early base or inventory check before a Subnautica 2 route',
    title: 'Start with a clean bag',
    body: 'A scan-first route works better after a storage pass. If the bag is already noisy, every fragment stop turns into inventory sorting.',
    sourceLabel: 'Source: Bilibili BV1zh5d68Eft, around 02:31',
    sourceHref: BILIBILI_FIRST_RUN_URL,
  },
  {
    src: '/abyss/video-stills/bv1zh5d68eft/resource-scan-1063s.webp',
    alt: 'Bilibili gameplay still showing a scan-focused resource stop in Subnautica 2',
    title: 'Scan before the room becomes a shopping trip',
    body: 'This is the core habit: read the prompt, scan the useful object, then decide whether the nearby materials are worth the oxygen.',
    sourceLabel: 'Source: Bilibili BV1zh5d68Eft, around 17:43',
    sourceHref: BILIBILI_FIRST_RUN_URL,
  },
  {
    src: '/abyss/video-stills/bv1zh5d68eft/shallow-route-607s.webp',
    alt: 'Bilibili gameplay still showing a shallow route before a Subnautica 2 scan run',
    title: 'Keep the scan loop close to the route',
    body: 'Early fragments are only useful if you can repeat the path. If the scan pulls you away from landmarks, leave the room and reset the route.',
    sourceLabel: 'Source: Bilibili BV1zh5d68Eft, around 10:07',
    sourceHref: BILIBILI_FIRST_RUN_URL,
  },
];

const copyByLocale: Record<string, ScanFirstCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Scan First Route - Fragment Priority and Resource Room Habits',
      description:
        'A Subnautica 2 scan-first route guide for early fragments, Scanner timing, resource-room decisions, oxygen cost, inventory prep, and beginner route loops.',
    },
    eyebrow: 'Subnautica 2 scanner route',
    title: 'Subnautica 2 Scan First Route: Fragments Before Loot',
    description:
      'The fastest early route is often the one where you leave a few rocks behind and come home with blueprint progress.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'On your first passes through shallow routes, scan fragments and useful prompts before filling the bag with common materials. A single blueprint step can change the next hour. Loot is still useful, but scan first when oxygen is safe, the exit cue is clear, and your inventory has room for the one item you actually came to confirm.',
    fieldNotesTitle: 'Field notes from the first-run video',
    fieldNotes: [
      {
        title: 'A messy bag makes bad decisions',
        body: 'If your inventory is already full, you start judging the route by what fits instead of what matters. Store common materials before a scan loop.',
      },
      {
        title: 'Fragments beat random rocks',
        body: 'Copper and Titanium matter, but early blueprint progress changes your options. Scanner, oxygen, storage, and mobility upgrades should beat blind looting.',
      },
      {
        title: 'Do not scan yourself lost',
        body: 'The scan animation is a small pause. The bigger cost is turning around afterward and realizing the room no longer looks familiar.',
      },
    ],
    routeChecklistTitle: 'Before a scan-first loop',
    routeChecklist: [
      'Scanner is charged enough for a short route.',
      'Inventory has space for one or two planned pickups.',
      'Exit cue is visible before you stop to scan.',
      'You know whether this run is for fragments, materials, or route notes.',
      'Oxygen margin is high enough to pause and leave calmly.',
    ],
    referenceStillsTitle: 'Gameplay stills for scan routing',
    referenceStillsIntro:
      'These stills come from the Bilibili first-run video. They show route habits and inventory timing, not exact spawn coordinates.',
    referenceStills: sharedReferenceStills,
    contentsLabel: 'Contents',
    routeTitle: 'How to run a scan-first route',
    routeSteps: [
      {
        title: 'Empty the bag before the route',
        body: 'Start by dumping common materials at base or storage. Keep enough room for one planned resource and one surprise scan reward. This keeps the run from turning into a backpack puzzle.',
      },
      {
        title: 'Scan the prompt before looting the room',
        body: 'When you enter a small resource room, check the prompt first. If it is a fragment, scan it. If it is only common material, grab what fits your current craft plan and leave.',
      },
      {
        title: 'Count the scan as a stop, not a free action',
        body: 'Scanning inside a cave or wreck-like space should move your oxygen line earlier. If you stopped once, leave earlier than you would in open water.',
      },
      {
        title: 'Separate fragment runs from material runs',
        body: 'The first route should answer: what can I unlock? The second route can answer: what do I need to build it? Mixing both too early makes the route slower and less safe.',
      },
      {
        title: 'Return with a route note',
        body: 'A good scan loop ends with one useful note: where the fragment was, what the first landmark looked like, and which material blocked the next craft.',
      },
    ],
    tableTitle: 'Scan-first priority table',
    tableHeaders: ['What you see', 'Priority call'],
    tableRows: [
      ['Fragment prompt', 'Scan first if the exit cue is still clear.'],
      ['Unknown tool or station object', 'Scan before looting common rocks.'],
      [
        'Common Copper or Titanium',
        'Take only what matches the current craft plan.',
      ],
      [
        'Rare material in a dark room',
        'Mark the room mentally and come back with more O2.',
      ],
      [
        'Full inventory',
        'Leave and store. Do not delete useful route memory for random loot.',
      ],
      ['Low oxygen warning', 'Stop scanning and follow the return cue.'],
    ],
    visualTitle: 'Scan loop card',
    visualItems: [
      {
        label: 'First',
        value: 'Prompt',
        note: 'Read the object and decide whether it changes progression.',
      },
      {
        label: 'Second',
        value: 'O2',
        note: 'If you stopped to scan, move the turn-back line earlier.',
      },
      {
        label: 'Third',
        value: 'Loot',
        note: 'Only take materials tied to the next craft or storage plan.',
      },
    ],
    cautionTitle: 'Blueprint progress is easy to hide under busy looting',
    cautionBody:
      'A full inventory feels productive, but it can hide the fact that you skipped the fragment that would have changed your route. Scan-first does not mean ignore materials. It means do not let common loot interrupt the thing that unlocks better tools.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Should I scan or loot first in Subnautica 2?',
        body: 'Scan first when the object is a fragment or useful prompt and your exit is still obvious. Loot after the scan, based on the craft you are actually working toward.',
      },
      {
        title: 'What should I bring on a scan route?',
        body: 'Bring a charged Scanner, enough oxygen margin, and an empty enough bag. If the route goes through a cave, pair it with the shallow cave oxygen rules.',
      },
      {
        title: 'Is it bad to collect common materials early?',
        body: 'No. Copper, Titanium, Rubber, and storage materials still matter. The problem is filling the bag before checking nearby fragments.',
      },
      {
        title: 'Are the Bilibili stills exact fragment spots?',
        body: 'No. They are practical examples from a first-run video. Use them to copy the habits: store first, scan first, leave with a route note.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2ShallowCaveOxygenRoute,
        label: 'Shallow Cave Route',
      },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
      { href: Routes.Subnautica2Beginner, label: 'First 50 Minutes Route' },
      { href: Routes.Subnautica2Resources, label: 'Resource Routes' },
      { href: Routes.Subnautica2Copper, label: 'Copper Location' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank Guide' },
      { href: Routes.Subnautica2Beacon, label: 'Beacon Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 5, 2026 against the Bilibili first-run video supplied by the site owner, current PC Gamer beginner and oxygen guidance, and the official Steam page. The video stills are marked as source examples, not fixed fragment coordinates.',
    cardKicker: 'Scan route card',
    cardBody:
      'A practical route rule for early fragments, Scanner pauses, inventory prep, and leaving with useful progress.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Scanner route',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 先扫描路线：碎片优先级和资源房判断',
      description:
        'Subnautica 2 新手扫描路线攻略，整理 Scanner 使用时机、碎片优先级、资源房取舍、氧气成本、背包准备和视频截图参考。',
    },
    eyebrow: 'Subnautica 2 Scanner 路线',
    title: 'Subnautica 2 先扫描路线：碎片优先于乱捡',
    description: '开局最快的路线，很多时候不是背包装满，而是带着蓝图进度回家。',
    quickLabel: '快速结论',
    quickAnswer:
      '浅水路线前几趟，优先扫描碎片和有用提示，再考虑把常见材料捡满。一个蓝图进度可能会改变接下来一小时的路线。材料当然也重要，但当氧气安全、出口 cue 清楚、背包还有计划空位时，先扫再捡通常更稳。',
    fieldNotesTitle: '视频里的路线笔记',
    fieldNotes: [
      {
        title: '背包越乱，判断越差',
        body: '背包快满时，你会开始按“还能塞什么”来判断路线，而不是按“什么更重要”。跑扫描路线前，先把普通材料存掉。',
      },
      {
        title: '碎片优先于随机石头',
        body: 'Copper 和 Titanium 很重要，但蓝图进度会改变选择。Scanner、氧气、储物和移动能力相关内容，优先级高于盲目捡东西。',
      },
      {
        title: '不要把自己扫迷路',
        body: '扫描动作本身只是停几秒，真正贵的是扫完以后转身，发现这个房间看起来已经不熟了。',
      },
    ],
    routeChecklistTitle: '跑扫描路线前',
    routeChecklist: [
      'Scanner 电量足够支撑一条短线。',
      '背包留出一两个计划空位。',
      '停下来扫描前，出口 cue 仍然看得见。',
      '这趟目的明确：碎片、材料，还是路线笔记。',
      '氧气余量足够你停一下再冷静离开。',
    ],
    referenceStillsTitle: '扫描路线用到的视频截图',
    referenceStillsIntro:
      '截图来自 B 站实机视频。它们展示的是路线习惯和背包节奏，不是固定刷新坐标。',
    referenceStills: sharedReferenceStills,
    contentsLabel: '目录',
    routeTitle: '怎么跑一条先扫描路线',
    routeSteps: [
      {
        title: '出发前先清背包',
        body: '把普通材料先放回基地或储物箱。背包至少留一个计划材料位和一个意外发现位。这样路线不会变成整理背包小游戏。',
      },
      {
        title: '进资源房后先看提示',
        body: '进入小资源房时，先看物品提示。如果是碎片就先扫。如果只是普通材料，就按当前制作目标拿几件，然后离开。',
      },
      {
        title: '把扫描当成停留，不是免费动作',
        body: '在洞穴或类似残骸的空间里扫描，会让氧气回头线提前。只要停过一次，就比开放水域更早离开。',
      },
      {
        title: '碎片路线和材料路线分开',
        body: '第一趟回答“我能解锁什么”。第二趟再回答“我需要什么材料来做它”。太早混在一起，路线会慢，也更容易乱。',
      },
      {
        title: '回来时带一条路线笔记',
        body: '好的扫描路线，回来时至少能说清一件事：碎片在哪里、第一个地标长什么样、下一步制作卡哪个材料。',
      },
    ],
    tableTitle: '先扫描优先级表',
    tableHeaders: ['看到什么', '怎么判断'],
    tableRows: [
      ['碎片提示', '出口 cue 还清楚就先扫。'],
      ['未知工具或站点物体', '先扫，再考虑捡普通石头。'],
      ['常见 Copper 或 Titanium', '只拿当前制作计划需要的数量。'],
      ['黑暗房间里的稀有材料', '先记位置，氧气更稳再回来。'],
      ['背包已满', '离开并存东西，不要为了随机材料打乱路线记忆。'],
      ['低氧提示响起', '停止扫描，按回程 cue 离开。'],
    ],
    visualTitle: '扫描循环卡',
    visualItems: [
      {
        label: '第一步',
        value: '提示',
        note: '先看这个物体会不会改变进度。',
      },
      {
        label: '第二步',
        value: '氧气',
        note: '只要停下扫描，就提前回头线。',
      },
      {
        label: '第三步',
        value: '材料',
        note: '只拿和下一步制作或储物计划有关的材料。',
      },
    ],
    cautionTitle: '蓝图进度很容易被“满背包”盖住',
    cautionBody:
      '背包装满会让人觉得这一趟很赚，但它也可能掩盖你错过了真正改变路线的碎片。先扫描不是不要材料，而是别让普通材料打断解锁更好工具的机会。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 应该先扫描还是先捡材料？',
        body: '如果是碎片或有用提示，并且出口还清楚，就先扫描。扫完以后，再按当前制作目标决定捡什么。',
      },
      {
        title: '扫描路线应该带什么？',
        body: '带有电的 Scanner、足够氧气余量，以及不太满的背包。如果路线经过洞穴，就配合浅层洞穴氧气规则一起看。',
      },
      {
        title: '开局捡普通材料不好吗？',
        body: '不是。Copper、Titanium、Rubber 和储物材料都重要。问题是还没看附近碎片，就先把背包装满。',
      },
      {
        title: 'B 站截图是准确碎片位置吗？',
        body: '不是。它们是实机视频里的例子，用来学习习惯：先存包、先扫描、带着路线笔记回家。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      {
        href: Routes.Subnautica2ShallowCaveOxygenRoute,
        label: '浅层洞穴路线',
      },
      { href: Routes.Subnautica2Scanner, label: 'Scanner 指南' },
      { href: Routes.Subnautica2Beginner, label: '前 50 分钟路线' },
      { href: Routes.Subnautica2Resources, label: '资源路线' },
      { href: Routes.Subnautica2Copper, label: 'Copper 位置' },
      { href: Routes.Subnautica2AirTank, label: '气瓶指南' },
      { href: Routes.Subnautica2Beacon, label: 'Beacon 指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 5 日核对你提供的 B 站实机视频、PC Gamer 新手与氧气指南，以及 Steam 官方页面。本文截图只作为路线习惯示例，不写成固定碎片坐标。',
    cardKicker: '扫描路线卡',
    cardBody: '围绕早期碎片、Scanner 停顿、背包准备和有效进度整理的路线规则。',
    cardTypeLabel: '类型',
    cardTypeValue: 'Scanner 路线',
    cardVerifiedLabel: '已核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

function getCopy(locale: Locale): ScanFirstCopy {
  return copyByLocale[locale] ?? copyByLocale.en;
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
    pathname: Routes.Subnautica2ScanFirstFragmentRoute,
  });
}

export default async function ScanFirstFragmentRoutePage({
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
      icon={SearchIcon}
      locale={locale}
      pathname={Routes.Subnautica2ScanFirstFragmentRoute}
      sources={sharedSources}
    />
  );
}
