import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { CompassIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type ShallowCaveCopy = ResourceGuideCopy & {
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
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-o2-oxygen-air-tank/',
    label: 'PC Gamer O2 and Air Tank guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-tips/',
    label: 'PC Gamer beginner tips',
  },
  {
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/',
    label: 'Official Steam page',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap',
    label: 'Unknown Worlds Early Access roadmap',
  },
];

const sharedReferenceStills = [
  {
    src: '/abyss/video-stills/bv1zh5d68eft/shallow-route-607s.webp',
    alt: 'Bilibili gameplay still showing a shallow-water route reference for an early Subnautica 2 dive',
    title: 'Use the shallow-water light line first',
    body: 'This frame is the cue to copy: stay near water that still has bright surface light and readable terrain. If the entrance is already dark before you enter, save it for a later oxygen upgrade.',
    sourceLabel: 'Source: Bilibili BV1zh5d68Eft, around 10:07',
    sourceHref: BILIBILI_FIRST_RUN_URL,
  },
  {
    src: '/abyss/video-stills/bv1zh5d68eft/resource-scan-1063s.webp',
    alt: 'Bilibili gameplay still showing a scan or resource-check moment during a Subnautica 2 beginner route',
    title: 'Scan time counts as oxygen cost',
    body: 'The player pauses here to read the area. That pause is exactly why cave runs need a bigger O2 margin than open-water looting.',
    sourceLabel: 'Source: Bilibili BV1zh5d68Eft, around 17:43',
    sourceHref: BILIBILI_FIRST_RUN_URL,
  },
  {
    src: '/abyss/video-stills/bv1zh5d68eft/cave-cue-1215s.webp',
    alt: 'Bilibili gameplay still showing a cave cue and route-risk moment in Subnautica 2',
    title: 'Turn around before the cave stops looking familiar',
    body: 'Treat the cave mouth, light shaft, and first bend as your return chain. If you pass the second bend without a plan, the route is no longer a quick beginner dive.',
    sourceLabel: 'Source: Bilibili BV1zh5d68Eft, around 20:15',
    sourceHref: BILIBILI_FIRST_RUN_URL,
  },
];

const copyByLocale: Record<string, ShallowCaveCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Shallow Cave Route - Oxygen Safety and Early Dive Cues',
      description:
        'A practical Subnautica 2 shallow cave route guide using video stills, oxygen turn-back rules, cave entrance cues, scan timing, and early dive safety notes.',
    },
    eyebrow: 'Subnautica 2 route notes',
    title: 'Subnautica 2 Shallow Cave Route and Oxygen Safety',
    description:
      'A cave is not dangerous because it is deep. It gets dangerous when the exit stops being obvious and the oxygen timer keeps talking.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'For early shallow caves, stay close to bright water, enter only when you can still name the exit landmark, and turn around before the second unfamiliar bend. If you stop to scan, treat that as a real oxygen expense. This page uses Bilibili gameplay stills as visual route cues, not fixed coordinates, because Subnautica 2 Early Access routes can shift after patches.',
    fieldNotesTitle: 'Field notes from the video',
    fieldNotes: [
      {
        title: 'Start where the surface still helps',
        body: 'Good beginner cave routes begin in water where the surface light, cave mouth, and nearby terrain are all readable. If the cave is already a black slot from outside, it is probably not the first route to force.',
      },
      {
        title: 'Scan after you know the exit',
        body: 'Scanning feels harmless until the O2 warning hits. Find the exit cue first, then scan. If the scan pulls you deeper, leave it marked in your head and come back with a better tank.',
      },
      {
        title: 'The second bend is the honest check',
        body: 'One bend is fine. Two bends without a landmark chain is how a short dive becomes a bad swim. If you cannot picture the way out, turn around while you still feel calm.',
      },
    ],
    routeChecklistTitle: 'Before entering a shallow cave',
    routeChecklist: [
      'You can point back to the cave mouth from outside.',
      'The first bend has a clear return cue: light shaft, rock shape, coral color, or open-water silhouette.',
      'You still have enough oxygen to scan one item and leave.',
      'Inventory has space, so the dive has a reason.',
      'No hostile pressure or poor visibility is already stacking on top of low O2.',
    ],
    referenceStillsTitle: 'Gameplay stills for this route',
    referenceStillsIntro:
      'These stills come from the user-provided Bilibili first-run video. Use them as visual cues for route reading. They are not official coordinates.',
    referenceStills: sharedReferenceStills,
    contentsLabel: 'Contents',
    routeTitle: 'How to run the route without wasting oxygen',
    routeSteps: [
      {
        title: 'Walk the route from the outside first',
        body: 'Before entering, hover outside the cave mouth and look for a return marker. The best marker is something you can see from both directions: a bright water column, a distinctive rock lip, or a clean opening back to blue water.',
      },
      {
        title: 'Enter with a single job',
        body: 'Do not mix three goals on the first pass. Pick one: check the first chamber, scan the nearest fragment, or grab one obvious resource cluster. Leave the deeper fork alone until the route is familiar.',
      },
      {
        title: 'Turn around at half oxygen if you stopped to scan',
        body: 'The usual mistake is treating scanning as free. It is not. If you stop inside the cave, use half oxygen as the turn-back line unless you have an upgraded tank or a known oxygen reset nearby.',
      },
      {
        title: 'Use the entrance as your save point, not the cave floor',
        body: 'When the first chamber is clear, leave and reset. A second short dive with a known path beats one long dive where every extra item makes the exit feel farther away.',
      },
      {
        title: 'Write down the useful cue',
        body: 'After the route, keep one note: which entrance, which first bend, and what you saw inside. That note turns the next dive into a route instead of a guess.',
      },
    ],
    tableTitle: 'Shallow cave decisions',
    tableHeaders: ['Moment', 'What to do'],
    tableRows: [
      [
        'Bright cave mouth, readable terrain',
        'Enter for a short first chamber check.',
      ],
      [
        'Dark entrance before you go in',
        'Mark it mentally and come back with more oxygen.',
      ],
      [
        'First scan target appears',
        'Scan only if the exit cue is still clear.',
      ],
      [
        'Second unfamiliar bend',
        'Turn around unless you already mapped the cave.',
      ],
      [
        'Inventory is nearly full',
        'Leave. A full bag makes the dive less useful and more stressful.',
      ],
      [
        'O2 warning hits inside the cave',
        'Stop looting immediately and swim the exit chain.',
      ],
    ],
    visualTitle: 'Route cue card',
    visualItems: [
      {
        label: 'Green',
        value: 'Enter',
        note: 'Bright entrance, clear exit cue, one small objective.',
      },
      {
        label: 'Yellow',
        value: 'Scout',
        note: 'One unknown is okay if the exit is still obvious.',
      },
      {
        label: 'Red',
        value: 'Leave',
        note: 'Dark second bend, low oxygen, or scan target pulling you deeper.',
      },
    ],
    cautionTitle: 'Do not turn video frames into fake coordinates',
    cautionBody:
      'The Bilibili stills are useful because they show how a real player reads water, cave shape, and scan timing. They should not be treated as fixed spawn coordinates. Early Access patches, save seed differences, and route choices can change what you see.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Where should I start looking for shallow caves?',
        body: 'Start near safe, bright shallows around your early route rather than swimming straight into dark water. Look for cave mouths with visible surface light and a clear way back out.',
      },
      {
        title: 'How much oxygen do I need before entering?',
        body: 'For a first pass, enter only if you can reach the first chamber, pause once, and leave with margin. If you plan to scan, treat half oxygen as the practical turn-back point.',
      },
      {
        title: 'Should I keep exploring after finding one useful resource?',
        body: 'Usually no. Leave, store the item, and return with a known route. The first good find often tempts players into the part of the cave they have not mapped yet.',
      },
      {
        title: 'Are the video stills exact locations?',
        body: 'No. They are route-reading examples from a Bilibili gameplay video. Use them to recognize entrance lighting, scan pauses, and turn-back cues, not as exact map markers.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Beginner, label: 'First 50 Minutes Route' },
      { href: Routes.Subnautica2OxygenDepth, label: 'Oxygen and Depth Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank Guide' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resource Routes' },
      { href: Routes.Subnautica2Beacon, label: 'Beacon Guide' },
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 5, 2026 against the Bilibili first-run video supplied by the site owner, current PC Gamer O2 and beginner guidance, the official Steam page, and the Unknown Worlds Early Access roadmap. The screenshots on this page are marked as source stills, not official map coordinates.',
    cardKicker: 'Cave route card',
    cardBody:
      'A beginner-safe cave plan built around entrance cues, scan timing, oxygen margin, and when to leave.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Route guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 浅层洞穴路线：氧气安全和早期探索判断',
      description:
        'Subnautica 2 浅层洞穴路线攻略，结合视频截图说明洞口判断、氧气回头线、扫描耗时、资源探索和新手安全路线。',
    },
    eyebrow: 'Subnautica 2 路线笔记',
    title: 'Subnautica 2 浅层洞穴路线和氧气安全',
    description:
      '洞穴真正麻烦的地方不是深，而是出口不再明显，氧气提示却还在继续倒数。',
    quickLabel: '快速结论',
    quickAnswer:
      '早期浅层洞穴不要硬冲。优先选还能看到亮水和清楚洞口的入口；进去前先记住出口地标；遇到第二个陌生拐弯前就该考虑回头。如果要扫描，把扫描时间也算进氧气成本。这篇会用 B 站实机视频截图当视觉参考，但不把它们说成固定坐标。',
    fieldNotesTitle: '视频路线笔记',
    fieldNotes: [
      {
        title: '从亮水还能帮你的地方开始',
        body: '适合新手的洞口，外面应该还能看清水面光、洞口轮廓和附近地形。如果你在外面看它已经是一条黑缝，这条路线最好等氧气升级后再来。',
      },
      {
        title: '先确认出口，再扫描',
        body: '扫描最容易骗过玩家，因为它看起来只停一小会儿。进洞后先确认回头 cue，再扫最近的目标。扫到一半发现还想往深处追，就先撤。',
      },
      {
        title: '第二个陌生拐弯就是警戒线',
        body: '一个拐弯通常还好。两个拐弯之后，如果你说不清出口在哪里，这趟就已经不再是安全的新手短线了。',
      },
    ],
    routeChecklistTitle: '进浅洞前先看这几项',
    routeChecklist: [
      '你在洞外就能指出洞口和返回方向。',
      '第一个拐弯有清楚的返回提示，比如光柱、岩石形状、珊瑚颜色或蓝水出口。',
      '氧气足够你扫描一次并留有回程余量。',
      '背包有空位，这趟探索有实际收益。',
      '低氧、黑暗、敌对生物和差能见度没有同时叠在一起。',
    ],
    referenceStillsTitle: '这条路线用到的视频截图',
    referenceStillsIntro:
      '截图来自你提供的 B 站实机视频。它们适合用来理解路线判断，不是官方坐标，也不是固定刷新点。',
    referenceStills: sharedReferenceStills,
    contentsLabel: '目录',
    routeTitle: '怎么跑这条路线才不浪费氧气',
    routeSteps: [
      {
        title: '先在洞外把回程看一遍',
        body: '进入前先悬停在洞口外，找一个从里外都能认出来的回程标记。最好是亮水柱、特殊岩边，或者一眼能看到的蓝水出口。',
      },
      {
        title: '第一次进洞只做一件事',
        body: '不要第一次就又扫、又采、又往深处探索。选一个目标：看第一间洞室、扫最近碎片，或者拿一个很明显的资源点。更深的岔路等路线熟了再说。',
      },
      {
        title: '只要停下来扫描，半氧就回头',
        body: '常见错误是把扫描当成免费动作。它不是。只要你在洞里停下来扫描，在没有更好气瓶或已知补氧点前，半氧就是比较稳的回头线。',
      },
      {
        title: '把洞口当作重置点，不要贪洞底',
        body: '第一间洞室确认完就离开，回到安全水域重置。第二次短线、有记忆的路线，通常比一次长线硬贪安全得多。',
      },
      {
        title: '离开后记一个有用 cue',
        body: '每次回来只记一条：哪个洞口、哪个第一拐弯、里面看到了什么。下次再去就不是瞎找，而是路线复盘。',
      },
    ],
    tableTitle: '浅层洞穴判断表',
    tableHeaders: ['遇到的情况', '建议操作'],
    tableRows: [
      ['洞口明亮，地形好认', '可以进第一间洞室短探。'],
      ['洞口在外面看就很黑', '先记住位置，等氧气升级后再来。'],
      ['看到第一个扫描目标', '出口 cue 还清楚时再扫。'],
      ['出现第二个陌生拐弯', '除非你已经熟悉路线，否则回头。'],
      ['背包快满了', '直接离开，满背包会让探索收益变低。'],
      ['洞里响起低氧提示', '停止采集，按出口地标链游回去。'],
    ],
    visualTitle: '路线判断卡',
    visualItems: [
      {
        label: '绿色',
        value: '进入',
        note: '明亮洞口、出口 cue 清楚、目标很小。',
      },
      {
        label: '黄色',
        value: '侦察',
        note: '只有一个未知因素，而且出口还明显。',
      },
      {
        label: '红色',
        value: '离开',
        note: '第二个陌生拐弯、低氧，或扫描目标把你拉得更深。',
      },
    ],
    cautionTitle: '不要把视频截图写成假坐标',
    cautionBody:
      '这些 B 站截图的价值在于让你看懂洞口亮度、地形 cue 和扫描时机。它们不应该被当成固定坐标。抢先体验阶段的补丁、存档差异和路线选择都可能改变你看到的东西。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: '我应该从哪里开始找浅层洞穴？',
        body: '从安全、明亮、离早期路线近的浅水区开始，不要一上来就往黑水里冲。优先找洞口仍有亮水、出口能看清的地方。',
      },
      {
        title: '进洞前需要多少氧气？',
        body: '第一次只要能到第一间洞室、停一下、再安全返回就够。如果你还要扫描，半氧就应该准备回头。',
      },
      {
        title: '找到一个资源后要不要继续往里走？',
        body: '通常不要。先回去存资源，再带着已知路线回来。很多新手翻车都是因为第一个好东西之后继续贪第二个。',
      },
      {
        title: '这些视频截图是准确位置吗？',
        body: '不是。它们是 B 站实机视频里的路线判断示例，用来看洞口亮度、扫描停顿和回头 cue，不是地图标点。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Beginner, label: '前 50 分钟新手路线' },
      { href: Routes.Subnautica2OxygenDepth, label: '氧气与深度指南' },
      { href: Routes.Subnautica2AirTank, label: '气瓶指南' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner 指南' },
      { href: Routes.Subnautica2Resources, label: '资源路线总览' },
      { href: Routes.Subnautica2Beacon, label: 'Beacon 指南' },
      { href: Routes.Subnautica2Silver, label: 'Silver 位置' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 5 日核对你提供的 B 站实机视频、PC Gamer 氧气和新手指南、Steam 官方页面，以及 Unknown Worlds 抢先体验路线图。本文截图会标注来源，只作为路线判断参考，不写成官方坐标。',
    cardKicker: '洞穴路线卡',
    cardBody: '围绕洞口 cue、扫描耗时、氧气余量和回头时机整理的新手浅洞路线。',
    cardTypeLabel: '类型',
    cardTypeValue: '路线攻略',
    cardVerifiedLabel: '已核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

function getCopy(locale: Locale): ShallowCaveCopy {
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
    pathname: Routes.Subnautica2ShallowCaveOxygenRoute,
  });
}

export default async function ShallowCaveOxygenRoutePage({
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
      icon={CompassIcon}
      locale={locale}
      pathname={Routes.Subnautica2ShallowCaveOxygenRoute}
      sources={sharedSources}
    />
  );
}
