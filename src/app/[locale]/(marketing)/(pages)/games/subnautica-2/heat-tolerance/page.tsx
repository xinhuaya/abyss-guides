import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { FlameIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type HeatToleranceCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-29';

const sharedSources = [
  {
    href: 'https://www.gamesradar.com/games/survival/subnautica-2-heat-tolerance-adaptation/',
    label: 'GamesRadar+ Heat Tolerance Adaptation guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-angel-comb-heat-tolerance-adaptation/',
    label: 'PC Gamer Angel Comb and Heat Tolerance guide',
  },
  {
    href: 'https://games.gg/subnautica-2/guides/subnautica-2-how-to-get-past-the-heat-barrier/',
    label: 'GAMES.GG heat barrier guide',
  },
  {
    href: 'https://gamewith.net/subnautica-2/75820',
    label: 'GameWith mid-game progression guide',
  },
];

const heatToleranceCopy: Record<string, HeatToleranceCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Heat Tolerance Guide - Angel Comb, Bloom, and Hot Biome Access',
      description:
        'A practical Subnautica 2 Heat Tolerance guide covering the Angel Comb route, Bloom infestations, Sonic Resonator prep, oxygen kit, hot biome access, Gold, Sulfur, and Tadpole Pens progression.',
    },
    eyebrow: 'Subnautica 2 adaptation gate',
    title: 'Subnautica 2 Heat Tolerance Guide',
    description:
      'Heat Tolerance is the point where warm water stops being a warning sign and starts becoming a route. Clear the Angel Comb carefully, bring the right tools, and use the unlock to open mid-game resources instead of rushing into vents blind.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'GamesRadar+ places the Heat Tolerance Adaptation inside an infected Angel Comb roughly 190-200m northwest of the Lifepod at about bearing 285. PC Gamer describes the first Angel Comb as about 200m northwest, around bearing 300, and says it grants Heat Tolerance after clearing viral blooms. GAMES.GG says you need to clear three Bloom infestations before the Angel Comb becomes accessible and notes the adaptation helps you pass the heat barrier into the hot biome. Bring Sonic Resonator, better oxygen, medical kits, and a distraction option.',
    fieldNotesTitle: 'Field notes for the heat gate',
    fieldNotes: [
      {
        title: 'Use bearings to find the neighborhood',
        body: 'The reported bearings are close but not identical. Use them to reach the northwest biome, then follow infection, Bloom sites, and terrain instead of staring at degrees.',
      },
      {
        title: 'Heat Tolerance is the reward, not the route',
        body: 'The work is clearing Bloom infestations safely. The adaptation comes after the area is stable enough for the central Angel Comb interaction.',
      },
      {
        title: 'Bring recovery, not just tools',
        body: 'Sonic Resonator matters, but so do medical kits, oxygen margin, and a way out. The route gets messy when players prepare only for the object they need to hit.',
      },
    ],
    routeChecklistTitle: 'Before chasing Heat Tolerance',
    routeChecklist: [
      'Bring Sonic Resonator, Air Bladder, stronger oxygen, and medical kits.',
      'Use northwest bearing only until Bloom clues take over.',
      'Clear the connected Bloom infestations before the central comb.',
      'Confirm the heat-barrier adaptation before leaving.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Heat Tolerance route plan',
    routeSteps: [
      {
        title: 'Find the northwest Angel Comb route',
        body: 'Current guides point northwest from the Lifepod, roughly 190-200m away, with bearings reported around 285 to 300 degrees. Use the numbers as a search cone, not a pixel-perfect coordinate.',
      },
      {
        title: 'Bring Sonic Resonator before touching Bloom',
        body: 'PC Gamer and GAMES.GG both tie the route to clearing viral Bloom growths, and PC Gamer calls out Sonic Resonator prep. If you arrive without the tool, you have found the problem but not the solution.',
      },
      {
        title: 'Upgrade oxygen before the cave work',
        body: 'PC Gamer recommends better O2 capacity, such as Standard Air Tank and an Air Bladder. This is a route with chambers, enemies, and backtracking, so shallow-water oxygen habits will feel thin.',
      },
      {
        title: 'Clear the smaller Bloom sites first',
        body: 'GAMES.GG describes the route as two smaller Bloom sites and a larger central Angel Comb. Treat it like a small sequence: clear access, check oxygen, then move to the core.',
      },
      {
        title: 'Use the unlock for hot-biome resources',
        body: 'GAMES.GG points players toward the hot biome after Heat Tolerance, with Gold and Sulfur as resources worth prioritizing. Do not hug thermal vents even after the adaptation; heat protection is not invincibility.',
      },
    ],
    tableTitle: 'Heat Tolerance checklist',
    tableHeaders: ['Bring', 'Why it matters'],
    tableRows: [
      [
        'Sonic Resonator',
        'Needed for Bloom / Angel Comb progress in current guides.',
      ],
      ['Standard Air Tank', 'Gives more room for cave chambers and mistakes.'],
      ['Air Bladder', 'Useful emergency exit tool when the route gets messy.'],
      [
        'Medical Kits',
        'Aggressive sea life can turn the route into attrition.',
      ],
      [
        'Flare or mobility help',
        'PC Gamer suggests distraction or movement prep.',
      ],
    ],
    visualTitle: 'Heat gate stack',
    visualItems: [
      {
        label: 'Route',
        value: 'NW',
        note: 'Search 190-200m from Lifepod, around 285-300 degrees.',
      },
      {
        label: 'Tool',
        value: 'Sonic',
        note: 'Clear Bloom before the Angel Comb opens.',
      },
      {
        label: 'Unlock',
        value: 'Heat',
        note: 'Use it for hot biome access and resource routes.',
      },
    ],
    cautionTitle: 'Heat Tolerance does not make vents harmless',
    cautionBody:
      'GAMES.GG notes the adaptation raises what you can survive, but direct vent contact can still punish you. Treat the hot biome like a new route with new rules, not a victory lap.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Where is Heat Tolerance in Subnautica 2?',
        body: 'Current guides place the first Heat Tolerance Angel Comb northwest of the Lifepod, roughly 190-200m away, with reported bearings around 285 to 300 degrees.',
      },
      {
        title: 'What do you need before getting Heat Tolerance?',
        body: 'Bring Sonic Resonator, better oxygen capacity, an Air Bladder, medical kits, and a distraction or mobility option if you have one.',
      },
      {
        title: 'Why is the Angel Comb closed?',
        body: 'Guides describe the Angel Comb as blocked by viral Bloom infestations. Clear the connected Bloom sites first, then return to the core.',
      },
      {
        title: 'What does Heat Tolerance unlock?',
        body: 'It lets you push through heat-gated water and hot-biome routes. Current guides connect that progress to Tadpole Pens, Gold, Sulfur, and deeper mid-game routing.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2AngelComb, label: 'Angel Comb Guide' },
      { href: Routes.Subnautica2BloomBiofilm, label: 'Bloom Biofilm Guide' },
      {
        href: Routes.Subnautica2SonicResonator,
        label: 'Sonic Resonator Guide',
      },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2 Guide' },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker Guide' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Vehicle Guide' },
      { href: Routes.Subnautica2ImprovedFins, label: 'Improved Fins Guide' },
      { href: Routes.Subnautica2Gold, label: 'Gold Location Guide' },
      { href: Routes.Subnautica2Sulfur, label: 'Sulfur Guide' },
      { href: Routes.Subnautica2Biolab, label: 'Biolab and Biomods' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 26, 2026 against GamesRadar+, PC Gamer, GAMES.GG, and GameWith. Early Access route markers, Bloom behavior, and biome access can change, so the guide uses the current reported bearing as a search cone and tells players to bring extra safety margin.',
    cardKicker: 'Adaptation card',
    cardBody:
      'Northwest Angel Comb route, Bloom clearing, Sonic Resonator prep, oxygen kit, hot-biome access, Gold, Sulfur, and Tadpole Pens progression.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Adaptation guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Heat Tolerance 指南 - Angel Comb、Bloom 和热区路线',
      description:
        'Subnautica 2 中文 Heat Tolerance 指南：整理 Angel Comb 路线、Bloom 感染点、Sonic Resonator 准备、氧气装备、热区入口、Gold、Sulfur 和 Tadpole Pens 推进。',
    },
    eyebrow: 'Subnautica 2 适应能力门槛',
    title: 'Subnautica 2 Heat Tolerance 指南',
    description:
      'Heat Tolerance 是中期很关键的路线门槛。拿到之后，热水不再只是警告，而会变成通往 Gold、Sulfur 和后续剧情区域的路线。',
    quickLabel: '快速结论',
    quickAnswer:
      'GamesRadar+ 把 Heat Tolerance Adaptation 放在 Lifepod 西北约 190-200m、方位约 285 度的感染 Angel Comb 中。PC Gamer 描述的第一处 Angel Comb 也在 Lifepod 西北约 200m、方位约 300 度，并说明清理 viral blooms 后会获得 Heat Tolerance。GAMES.GG 说你需要先清理三处 Bloom infestations，中央 Angel Comb 才能进入。出发前带 Sonic Resonator、更多氧气、医疗包和干扰或位移手段。',
    fieldNotesTitle: '热区门槛笔记',
    fieldNotes: [
      {
        title: '方位是找区域用的',
        body: '资料里的方位接近但不完全一样。用它们找到西北区域后，就该看感染痕迹、Bloom 点和地形，而不是死盯角度。',
      },
      {
        title: 'Heat Tolerance 是奖励，不是路线本身',
        body: '真正的工作是安全清理 Bloom infestations。中央 Angel Comb 能互动时，说明周围路线已经稳定下来。',
      },
      {
        title: '带恢复手段，不只带工具',
        body: 'Sonic Resonator 很重要，但医疗包、氧气余量和撤退线也一样重要。只准备敲目标的工具，很容易在路线上乱掉。',
      },
    ],
    routeChecklistTitle: '追 Heat Tolerance 前',
    routeChecklist: [
      '带 Sonic Resonator、Air Bladder、更高氧气容量和医疗包。',
      '西北方位只用来进区域，后面跟 Bloom 线索走。',
      '先清连接的 Bloom infestations，再回中央 Angel Comb。',
      '离开前确认热屏障适应能力已经获得。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Heat Tolerance 路线规划',
    routeSteps: [
      {
        title: '先找 Lifepod 西北 Angel Comb',
        body: '当前攻略都指向 Lifepod 西北，大约 190-200m，方位在 285 到 300 度附近。把它当成搜索扇区，不要当成绝对坐标。',
      },
      {
        title: '碰 Bloom 前先带 Sonic Resonator',
        body: 'PC Gamer 和 GAMES.GG 都把这条路线和清理 viral Bloom 联系在一起，PC Gamer 也提醒先准备 Sonic Resonator。没带工具就去，只会找到门槛但过不去。',
      },
      {
        title: '进洞前把氧气补上',
        body: 'PC Gamer 建议准备更好的 O2 容量，例如 Standard Air Tank 和 Air Bladder。这里有洞穴、敌对生物和折返，普通浅水路线的氧气习惯不够稳。',
      },
      {
        title: '先清小 Bloom，再进中央核心',
        body: 'GAMES.GG 描述为两处小 Bloom 加一处中央 Angel Comb。按顺序来：先开通路，检查氧气，再进核心。',
      },
      {
        title: '拿到后去规划热区资源',
        body: 'GAMES.GG 提到 Heat Tolerance 之后可以推进 hot biome，并把 Gold 和 Sulfur 列为优先资源。即使有适应能力，也不要贴着热泉乱游。',
      },
    ],
    tableTitle: 'Heat Tolerance 检查表',
    tableHeaders: ['带什么', '为什么重要'],
    tableRows: [
      ['Sonic Resonator', '当前攻略把它和 Bloom / Angel Comb 推进绑定在一起。'],
      ['Standard Air Tank', '洞穴和失误都需要更多氧气余量。'],
      ['Air Bladder', '路线混乱时可以作为紧急脱离工具。'],
      ['医疗包', '敌对生物会把这条路线拖成消耗战。'],
      ['干扰或位移手段', 'PC Gamer 建议准备 flare 或移动能力。'],
    ],
    visualTitle: '热区门槛卡',
    visualItems: [
      {
        label: '路线',
        value: '西北',
        note: 'Lifepod 外约 190-200m，方位 285-300 度附近。',
      },
      {
        label: '工具',
        value: 'Sonic',
        note: '先清 Bloom，Angel Comb 才会打开。',
      },
      {
        label: '解锁',
        value: 'Heat',
        note: '用于热区资源和中期路线。',
      },
    ],
    cautionTitle: 'Heat Tolerance 不等于不怕热泉',
    cautionBody:
      'GAMES.GG 提醒，适应能力会提高你能承受的热度，但直接接触热泉仍然可能出事。把热区当成新路线，而不是拿到能力后随便冲。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Heat Tolerance 在哪里？',
        body: '当前攻略把第一处 Heat Tolerance Angel Comb 放在 Lifepod 西北，约 190-200m，方位大约 285 到 300 度。',
      },
      {
        title: '拿 Heat Tolerance 前要准备什么？',
        body: '建议带 Sonic Resonator、更高氧气容量、Air Bladder、医疗包，以及 flare 或位移类辅助手段。',
      },
      {
        title: '为什么 Angel Comb 进不去？',
        body: '攻略描述它被 viral Bloom infestations 卡住了。先清理连接的 Bloom 点，再回到核心。',
      },
      {
        title: 'Heat Tolerance 解锁后能做什么？',
        body: '它让你能推进热区路线。当前攻略把这一步和 Tadpole Pens、Gold、Sulfur 以及中期资源路线联系在一起。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2AngelComb, label: 'Angel Comb 指南' },
      { href: Routes.Subnautica2SonicResonator, label: 'Sonic Resonator 指南' },
      { href: Routes.Subnautica2AirTank, label: '气瓶和氧气指南' },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker 指南' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 载具指南' },
      { href: Routes.Subnautica2ImprovedFins, label: 'Improved Fins 指南' },
      { href: Routes.Subnautica2Gold, label: 'Gold 位置指南' },
      { href: Routes.Subnautica2Sulfur, label: 'Sulfur 指南' },
      { href: Routes.Subnautica2Biolab, label: 'Biolab 和 Biomods' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 26 日核对 GamesRadar+、PC Gamer、GAMES.GG 和 GameWith。抢先体验阶段路线标记、Bloom 机制和热区入口可能变化，所以页面把当前方位写成搜索扇区，并提醒玩家多留安全余量。',
    cardKicker: '适应能力卡片',
    cardBody:
      '西北 Angel Comb 路线、Bloom 清理、Sonic Resonator 准备、氧气装备、热区入口、Gold、Sulfur 和 Tadpole Pens 推进。',
    cardTypeLabel: '类型',
    cardTypeValue: '适应能力指南',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = heatToleranceCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  heatToleranceCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Heat Tolerance Guide',
      description:
        'Guide for Heat Tolerance, Angel Comb, Bloom clearing, Sonic Resonator prep, oxygen kit, hot biome access, Gold, Sulfur, and mid-game progression.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = heatToleranceCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2HeatTolerance,
  });
}

export default async function HeatToleranceGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = heatToleranceCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={FlameIcon}
      locale={locale}
      pathname={Routes.Subnautica2HeatTolerance}
      sources={sharedSources}
    />
  );
}
