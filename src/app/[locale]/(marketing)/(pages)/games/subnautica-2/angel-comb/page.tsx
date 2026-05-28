import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { LeafIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type AngelCombCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-29';

const sharedSources = [
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-angel-comb-heat-tolerance-adaptation/',
    label: 'PC Gamer Angel Comb guide',
  },
  {
    href: 'https://www.gamesradar.com/games/survival/subnautica-2-heat-tolerance-adaptation/',
    label: 'GamesRadar+ Heat Tolerance Adaptation guide',
  },
  {
    href: 'https://games.gg/subnautica-2/guides/subnautica-2-how-to-get-past-the-heat-barrier/',
    label: 'GAMES.GG heat barrier and Bloom guide',
  },
  {
    href: 'https://gamewith.net/subnautica-2/75820',
    label: 'GameWith mid-game progression guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-feedback-resonator-scan-locations/',
    label: 'PC Gamer Feedback Resonator guide',
  },
];

const angelCombCopy: Record<string, AngelCombCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Angel Comb Guide - Bloom Biofilm, Heat Tolerance, and Sonic Resonator',
      description:
        'A practical Subnautica 2 Angel Comb guide covering Bloom Biofilm clearing, Sonic Resonator prep, Heat Tolerance unlock, oxygen safety, and hot-biome progression.',
    },
    eyebrow: 'Subnautica 2 Angel Comb route',
    title: 'Subnautica 2 Angel Comb Guide',
    description:
      'Angel Comb is not a normal pickup. If the core will not open, the game is usually asking you to clean the Bloom route first. Bring the tool, bring more air than you think, and treat it like a small cave job.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'PC Gamer says the first Angel Comb is about 200m northwest of the Lifepod, around bearing 300, and contains Heat Tolerance after you clear viral blooms. GamesRadar+ gives a nearby estimate of 190-200m northwest at about bearing 285. GAMES.GG describes the heat-barrier route as two smaller Bloom sites plus a larger central Angel Comb, and says Sonic Resonator is needed before you can clear the Bloom infestations. Bring upgraded oxygen, an Air Bladder, medical kits, and a distraction or movement option.',
    fieldNotesTitle: 'Field notes for the first Angel Comb',
    fieldNotes: [
      {
        title: 'The bearing is only a starting point',
        body: 'PC Gamer and GamesRadar+ give slightly different bearings, which is normal for a route with terrain and vertical movement. Use the northwest heading to find the area, then follow the bloom layout.',
      },
      {
        title: 'Clear the small sites before the central prize',
        body: 'The route makes more sense when the smaller Bloom sites are treated as steps, not distractions. Skipping them is how you reach the central comb and wonder why nothing feels finished.',
      },
      {
        title: 'Heat Tolerance is a route unlock',
        body: 'This adaptation opens later hot areas, so do not leave the biome as soon as the fight pressure drops. Confirm the comb interaction before swimming home.',
      },
    ],
    routeChecklistTitle: 'Before clearing Angel Comb',
    routeChecklist: [
      'Bring Sonic Resonator, upgraded oxygen, Air Bladder, and medical kits.',
      'Use northwest bearings as guidance, then trust the Bloom trail.',
      'Clear side Bloom sites before returning to the central Angel Comb.',
      'Confirm Heat Tolerance before leaving the area.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Angel Comb clearing plan',
    routeSteps: [
      {
        title: 'Use bearings as a search cone',
        body: 'PC Gamer reports about 200m northwest at bearing 300, while GamesRadar+ reports roughly 190-200m northwest at bearing 285. That is close enough to define the same search pocket. Do not waste time trying to force one exact number.',
      },
      {
        title: 'Do the small Bloom sites first',
        body: 'GAMES.GG describes the route as smaller Bloom infestations feeding the central Angel Comb. If the big structure feels sealed, step back and look for the satellite Bloom sites instead of ramming the same wall.',
      },
      {
        title: 'Bring Sonic Resonator before the dive',
        body: 'Current guides tie Bloom clearing to the Sonic Resonator. If you can see the infection but cannot make progress, leave, craft the tool, and come back prepared.',
      },
      {
        title: 'Budget oxygen like this is a cave',
        body: 'The route has chambers, backtracking, and enemy pressure. Standard Air Tank plus Air Bladder makes the run much calmer than trying to thread it with starter air.',
      },
      {
        title: 'Claim Heat Tolerance, then leave cleanly',
        body: 'The point of this first Angel Comb is Heat Tolerance. Once it is unlocked, do not turn the same run into a full hot-biome shopping trip unless your health, oxygen, and route memory are still solid.',
      },
    ],
    tableTitle: 'Angel Comb checklist',
    tableHeaders: ['Need', 'Why'],
    tableRows: [
      ['Sonic Resonator', 'Required by current Bloom-clearing guides.'],
      ['Standard Air Tank', 'Gives room for chambers and backtracking.'],
      ['Air Bladder', 'Good emergency exit if the cave route gets messy.'],
      [
        'Medical Kits',
        'Useful when aggressive sea life turns the run into chip damage.',
      ],
      [
        'Route marker',
        'A northwest cave is easy to find once and annoying to refind.',
      ],
    ],
    visualTitle: 'Bloom route card',
    visualItems: [
      {
        label: 'Search',
        value: 'NW',
        note: 'About 190-200m from Lifepod.',
      },
      {
        label: 'Clear',
        value: 'Bloom',
        note: 'Small sites first, central Angel Comb after.',
      },
      {
        label: 'Reward',
        value: 'Heat',
        note: 'Unlock Heat Tolerance for hot routes.',
      },
    ],
    cautionTitle: 'If nothing opens, stop pushing the center',
    cautionBody:
      'The usual mistake is staring at the main Angel Comb and assuming the game is bugged. Current guides point to connected Bloom sites. Clear the route around it first, then return to the core.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Where is the first Angel Comb in Subnautica 2?',
        body: 'Current guides place it northwest of the Lifepod, roughly 190-200m away, with bearings reported around 285 to 300 degrees.',
      },
      {
        title: 'Why will the Angel Comb not open?',
        body: 'It is usually blocked by Bloom infection. Clear the connected smaller Bloom sites first, then return to the central Angel Comb.',
      },
      {
        title: 'What tool do you need for Bloom Biofilm?',
        body: 'Current guides point to Sonic Resonator for clearing Bloom / Angel Comb progress. Bring it before you start the route.',
      },
      {
        title: 'What do you get from the first Angel Comb?',
        body: 'PC Gamer and GamesRadar+ connect the first Angel Comb route to the Heat Tolerance Adaptation, which opens safer access to hot-biome routes.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2BloomBiofilm, label: 'Bloom Biofilm Guide' },
      { href: Routes.Subnautica2HeatTolerance, label: 'Heat Tolerance Guide' },
      {
        href: Routes.Subnautica2SonicResonator,
        label: 'Sonic Resonator Guide',
      },
      {
        href: Routes.Subnautica2FeedbackResonator,
        label: 'Feedback Resonator Guide',
      },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2 Guide' },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker Guide' },
      { href: Routes.Subnautica2Biolab, label: 'Biolab and Biomods' },
      {
        href: Routes.Subnautica2BioscannerBiomods,
        label: 'Bioscanner and Biomods',
      },
      { href: Routes.Subnautica2AxumVision, label: 'Axum Vision Guide' },
      { href: Routes.Subnautica2Gold, label: 'Gold Location Guide' },
      { href: Routes.Subnautica2Sulfur, label: 'Sulfur Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 27, 2026 against PC Gamer, GamesRadar+, GAMES.GG, and GameWith. Early Access route geometry and Bloom-clearing steps can change, so the guide treats the bearing as a search pocket and focuses on tool and oxygen prep.',
    cardKicker: 'Angel Comb card',
    cardBody:
      'Northwest search pocket, Bloom Biofilm clearing order, Sonic Resonator prep, oxygen margin, Heat Tolerance unlock, and hot-biome follow-up.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Route guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Angel Comb 指南 - Bloom Biofilm、Heat Tolerance 和 Sonic Resonator',
      description:
        'Subnautica 2 中文 Angel Comb 指南：整理 Bloom Biofilm 清理、Sonic Resonator 准备、Heat Tolerance 解锁、氧气安全和热区推进。',
    },
    eyebrow: 'Subnautica 2 Angel Comb 路线',
    title: 'Subnautica 2 Angel Comb 指南',
    description:
      'Angel Comb 不是普通采集点。如果核心打不开，通常不是你没点准，而是周围 Bloom 路线还没清干净。带好工具和氧气，把它当成一次小型洞穴任务来做。',
    quickLabel: '快速结论',
    quickAnswer:
      'PC Gamer 说第一处 Angel Comb 位于 Lifepod 西北约 200m、方位约 300 度，清理 viral blooms 后可获得 Heat Tolerance。GamesRadar+ 给出的范围很接近：Lifepod 西北约 190-200m、方位约 285 度。GAMES.GG 把热屏障路线描述成两处小 Bloom 加一处中央 Angel Comb，并说明你需要 Sonic Resonator 才能推进 Bloom 清理。建议带更高氧气容量、Air Bladder、医疗包，以及干扰或位移手段。',
    fieldNotesTitle: '第一次 Angel Comb 笔记',
    fieldNotes: [
      {
        title: '方位只是起点',
        body: 'PC Gamer 和 GamesRadar+ 给出的角度略有差异，这在有地形和上下游动的路线里很正常。先用西北方向找到区域，再跟着 Bloom 布局走。',
      },
      {
        title: '先清小点，再回中央',
        body: '两处小 Bloom 不是干扰项，而是这条路线的步骤。跳过它们，很容易到中央 Angel Comb 后觉得流程没有结束。',
      },
      {
        title: 'Heat Tolerance 是路线解锁',
        body: '这个适应能力会打开后续热区，所以压力下降后别立刻回家。离开前确认已经和 Angel Comb 完成互动。',
      },
    ],
    routeChecklistTitle: '清 Angel Comb 前',
    routeChecklist: [
      '带 Sonic Resonator、更高氧气容量、Air Bladder 和医疗包。',
      '西北方位只当参考，进入区域后跟着 Bloom 线索走。',
      '清完两处 side Bloom，再回中央 Angel Comb。',
      '离开前确认 Heat Tolerance 已经拿到。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Angel Comb 清理规划',
    routeSteps: [
      {
        title: '把方位当成搜索扇区',
        body: 'PC Gamer 写约 200m 西北、方位 300；GamesRadar+ 写约 190-200m 西北、方位 285。两个说法很接近，足够圈出同一片搜索区域，不要为了一个数字来回校准。',
      },
      {
        title: '先清小 Bloom',
        body: 'GAMES.GG 把路线描述为小 Bloom 感染点连接中央 Angel Comb。大结构打不开时，先退出来找周围的卫星 Bloom，不要一直撞同一个核心。',
      },
      {
        title: '出发前带 Sonic Resonator',
        body: '当前攻略都把 Bloom 清理和 Sonic Resonator 绑定在一起。如果你看到了感染点却没法推进，先回去把工具做好。',
      },
      {
        title: '按洞穴路线预留氧气',
        body: '这里有房间、折返和敌对生物压力。Standard Air Tank 加 Air Bladder 会比用开局氧气硬穿舒服很多。',
      },
      {
        title: '拿到 Heat Tolerance 后稳稳撤出',
        body: '第一处 Angel Comb 的重点是 Heat Tolerance。解锁后不要立刻把同一趟变成热区大采购，除非血量、氧气和路线记忆都还很稳。',
      },
    ],
    tableTitle: 'Angel Comb 检查表',
    tableHeaders: ['需要准备', '为什么'],
    tableRows: [
      ['Sonic Resonator', '当前 Bloom 清理攻略都指向它。'],
      ['Standard Air Tank', '洞穴房间和折返需要更多氧气余量。'],
      ['Air Bladder', '路线乱掉时很好用的紧急脱离工具。'],
      ['医疗包', '敌对生物会慢慢磨血。'],
      ['路线标记', '西北洞穴第一次好找，第二次可能就烦了。'],
    ],
    visualTitle: 'Bloom 路线卡',
    visualItems: [
      {
        label: '搜索',
        value: '西北',
        note: 'Lifepod 外约 190-200m。',
      },
      {
        label: '清理',
        value: 'Bloom',
        note: '先小点，后中央 Angel Comb。',
      },
      {
        label: '奖励',
        value: 'Heat',
        note: '解锁 Heat Tolerance。',
      },
    ],
    cautionTitle: '打不开时别一直推核心',
    cautionBody:
      '最常见的问题是盯着中央 Angel Comb，以为游戏卡住了。当前攻略指向周围连接的 Bloom 点。先把外圈路线清掉，再回核心。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 第一处 Angel Comb 在哪里？',
        body: '当前攻略把它放在 Lifepod 西北，约 190-200m，方位大约 285 到 300 度。',
      },
      {
        title: '为什么 Angel Comb 打不开？',
        body: '通常是因为 Bloom 感染还没清完。先清理连接的小 Bloom 点，再回中央 Angel Comb。',
      },
      {
        title: 'Bloom Biofilm 需要什么工具？',
        body: '当前攻略指向 Sonic Resonator。开路线前先带上它。',
      },
      {
        title: '第一处 Angel Comb 给什么？',
        body: 'PC Gamer 和 GamesRadar+ 都把第一处 Angel Comb 路线和 Heat Tolerance Adaptation 联系在一起，它会打开更安全的热区路线。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2BloomBiofilm, label: 'Bloom Biofilm 指南' },
      { href: Routes.Subnautica2HeatTolerance, label: 'Heat Tolerance 指南' },
      { href: Routes.Subnautica2SonicResonator, label: 'Sonic Resonator 指南' },
      { href: Routes.Subnautica2AirTank, label: '气瓶和氧气指南' },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker 指南' },
      { href: Routes.Subnautica2Biolab, label: 'Biolab 和 Biomods' },
      {
        href: Routes.Subnautica2BioscannerBiomods,
        label: 'Bioscanner 和 Biomods',
      },
      { href: Routes.Subnautica2AxumVision, label: 'Axum Vision 指南' },
      { href: Routes.Subnautica2Gold, label: 'Gold 位置指南' },
      { href: Routes.Subnautica2Sulfur, label: 'Sulfur 指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 27 日核对 PC Gamer、GamesRadar+、GAMES.GG 和 GameWith。抢先体验阶段路线地形和 Bloom 清理步骤可能变化，所以页面把方位写成搜索区域，并重点提醒工具和氧气准备。',
    cardKicker: 'Angel Comb 卡片',
    cardBody:
      '西北搜索区域、Bloom Biofilm 清理顺序、Sonic Resonator 准备、氧气余量、Heat Tolerance 解锁和热区后续路线。',
    cardTypeLabel: '类型',
    cardTypeValue: '路线指南',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

angelCombCopy.zh = {
  metadata: {
    title:
      'Subnautica 2 Angel Comb 指南 - Bloom Biofilm、Heat Tolerance 和 Sonic Resonator',
    description:
      'Subnautica 2 中文 Angel Comb 指南：整理 Bloom Biofilm 清理、Sonic Resonator 准备、Heat Tolerance 解锁、氧气安全和热区推进。',
  },
  eyebrow: 'Subnautica 2 Angel Comb 路线',
  title: 'Subnautica 2 Angel Comb 指南',
  description:
    'Angel Comb 不是普通采集点。如果核心打不开，通常不是你没点准，而是周围 Bloom 路线还没清干净。带好工具和氧气，把它当成一次小型洞穴任务来做。',
  quickLabel: '快速结论',
  quickAnswer:
    'PC Gamer 说第一处 Angel Comb 位于 Lifepod 西北约 200m、方位约 300 度，清理 viral blooms 后可获得 Heat Tolerance。GamesRadar+ 给出的范围很接近：Lifepod 西北约 190-200m、方位约 285 度。GAMES.GG 把热屏障路线描述成两处小 Bloom 加一处中央 Angel Comb，并说明你需要 Sonic Resonator 才能推进 Bloom 清理。建议带更高氧气容量、Air Bladder、医疗包，以及干扰或位移手段。',
  contentsLabel: '目录',
  routeTitle: 'Angel Comb 清理规划',
  routeSteps: [
    {
      title: '把方位当成搜索片区',
      body: 'PC Gamer 写约 200m 西北、方位 300；GamesRadar+ 写约 190-200m 西北、方位 285。两个说法很接近，足够圈出同一片搜索区域，不要为了一个数字来回校准。',
    },
    {
      title: '先清小 Bloom',
      body: 'GAMES.GG 把路线描述为小 Bloom 感染点连接中央 Angel Comb。大结构打不开时，先退出来找周围的卫星 Bloom，不要一直撞同一个核心。',
    },
    {
      title: '出发前带 Sonic Resonator',
      body: '当前攻略都把 Bloom 清理和 Sonic Resonator 绑在一起。如果你看到感染点却没法推进，先回去把工具做好。',
    },
    {
      title: 'Feedback Resonator 是后续升级',
      body: '如果你已经准备去 Axum Vision 或更深的 Bloom Canker 路线，先把 Feedback Resonator 做出来会更舒服。它不是第一次 Angel Comb 的硬门槛，但能让后续清理更稳。',
    },
    {
      title: '按洞穴路线预留氧气',
      body: '这里有房间、折返和敌对生物压力。Standard Air Tank 加 Air Bladder 会比用开局氧气硬穿舒服很多。',
    },
    {
      title: '拿到 Heat Tolerance 后稳稳撤出',
      body: '第一处 Angel Comb 的重点是 Heat Tolerance。解锁后不要立刻把同一趟变成热区大采购，除非血量、氧气和路线记忆都还很稳。',
    },
  ],
  tableTitle: 'Angel Comb 检查表',
  tableHeaders: ['需要准备', '为什么'],
  tableRows: [
    ['Sonic Resonator', '当前 Bloom 清理攻略都指向它。'],
    ['Standard Air Tank', '洞穴房间和折返需要更多氧气余量。'],
    ['Air Bladder', '路线乱掉时很好用的紧急脱离工具。'],
    ['医疗包', '敌对生物会慢慢磨血。'],
    ['路线标记', '西北洞穴第一次好找，第二次可能就烦了。'],
  ],
  visualTitle: 'Bloom 路线卡',
  visualItems: [
    {
      label: '搜索',
      value: '西北',
      note: 'Lifepod 外约 190-200m。',
    },
    {
      label: '清理',
      value: 'Bloom',
      note: '先小点，后中央 Angel Comb。',
    },
    {
      label: '奖励',
      value: 'Heat',
      note: '解锁 Heat Tolerance。',
    },
  ],
  cautionTitle: '打不开时别一直推核心',
  cautionBody:
    '最常见的问题是盯着中央 Angel Comb，以为游戏卡住了。当前攻略指向周围连接的 Bloom 点。先把外圈路线清掉，再回核心。',
  faqTitle: '常见问题',
  faqs: [
    {
      title: 'Subnautica 2 第一处 Angel Comb 在哪里？',
      body: '当前攻略把它放在 Lifepod 西北，约 190-200m，方位大约 285 到 300 度。',
    },
    {
      title: '为什么 Angel Comb 打不开？',
      body: '通常是因为 Bloom 感染还没清完。先清理连接的小 Bloom 点，再回中央 Angel Comb。',
    },
    {
      title: 'Bloom Biofilm 需要什么工具？',
      body: '当前攻略指向 Sonic Resonator。开路线前先带上它。',
    },
    {
      title: '第一处 Angel Comb 给什么？',
      body: 'PC Gamer 和 GamesRadar+ 都把第一处 Angel Comb 路线和 Heat Tolerance Adaptation 联系在一起，它会打开更安全的热区路线。',
    },
  ],
  readNextTitle: '继续阅读',
  related: [
    { href: Routes.Subnautica2BloomBiofilm, label: 'Bloom Biofilm 指南' },
    { href: Routes.Subnautica2HeatTolerance, label: 'Heat Tolerance 指南' },
    { href: Routes.Subnautica2SonicResonator, label: 'Sonic Resonator 指南' },
    {
      href: Routes.Subnautica2FeedbackResonator,
      label: 'Feedback Resonator 指南',
    },
    { href: Routes.Subnautica2AirTank, label: '气瓶和氧气指南' },
    { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker 指南' },
    { href: Routes.Subnautica2Biolab, label: 'Biolab 和 Biomods' },
    {
      href: Routes.Subnautica2BioscannerBiomods,
      label: 'Bioscanner 和 Biomods',
    },
    { href: Routes.Subnautica2AxumVision, label: 'Axum Vision 指南' },
    { href: Routes.Subnautica2Gold, label: 'Gold 位置指南' },
    { href: Routes.Subnautica2Sulfur, label: 'Sulfur 指南' },
  ],
  sourcesTitle: '来源说明',
  sourceBody:
    '2026 年 5 月 27 日核对 PC Gamer、GamesRadar+、GAMES.GG 和 GameWith。抢先体验阶段路线地形和 Bloom 清理步骤可能变化，所以页面把方位写成搜索区域，并重点提醒工具和氧气准备。',
  cardKicker: 'Angel Comb 卡片',
  cardBody:
    '西北搜索区域、Bloom Biofilm 清理顺序、Sonic Resonator 准备、Feedback Resonator 后续升级、氧气余量、Heat Tolerance 解锁和热区后续路线。',
  cardTypeLabel: '类型',
  cardTypeValue: '路线指南',
  cardVerifiedLabel: '核对',
  cardStatusLabel: '状态',
  cardStatusValue: '抢先体验',
};

const fallbackCopy = angelCombCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  angelCombCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Angel Comb Guide',
      description:
        'Guide for Angel Comb, Bloom Biofilm clearing, Sonic Resonator prep, Heat Tolerance, oxygen safety, and hot-biome progression.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = angelCombCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2AngelComb,
  });
}

export default async function AngelCombGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = angelCombCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={LeafIcon}
      locale={locale}
      pathname={Routes.Subnautica2AngelComb}
      sources={sharedSources}
    />
  );
}
