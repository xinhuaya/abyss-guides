import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { WavesIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type SonicCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-24';
const UPDATED_AT = '2026-05-24';

const sharedSources = [
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-mining-unknown-tool-sonic-resonator/',
    label: 'PC Gamer Sonic Resonator guide',
  },
  {
    href: 'https://www.gamesradar.com/games/survival/subnautica-2-sonic-resonator/',
    label: 'GamesRadar Sonic Resonator guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-feedback-resonator-scan-locations/',
    label: 'PC Gamer Feedback Resonator guide',
  },
];

const sonicCopy: Record<string, SonicCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Sonic Resonator Guide - Mining Tool, Fragments, and Upgrade Prep',
      description:
        'A practical Subnautica 2 Sonic Resonator guide covering what the tool does, when to scan fragments, how to plan the mining route, and why it matters before Feedback Resonator.',
    },
    eyebrow: 'Subnautica 2 mining tool',
    title: 'Subnautica 2 Sonic Resonator Guide',
    description:
      'The Sonic Resonator is the point where mining stops being only a hand-tool habit. It opens large ore nodes, clears route blockers, and becomes the base tool for the Feedback Resonator upgrade later.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Scan the Sonic Resonator fragments once your Scanner, oxygen rhythm, and basic route confidence are in place. Treat it as a mining and route-clearing tool first, not as a late-game weapon. After you build it, use it on large ore nodes and route blockers, then keep it ready because Feedback Resonator later upgrades from this same tool.',
    contentsLabel: 'Contents',
    routeTitle: 'Sonic Resonator route plan',
    routeSteps: [
      {
        title: 'Bring the normal Scanner',
        body: 'This tool starts with fragment scanning. If your Scanner battery, oxygen, or return route is unreliable, the first job is still basic field discipline.',
      },
      {
        title: 'Follow the mineral route, not the panic route',
        body: 'Current PC Gamer and GamesRadar guides frame the Sonic Resonator as the answer to large ore and unknown mining prompts. Plan the trip around scanning, then test the tool close to home before pushing deeper.',
      },
      {
        title: 'Use it on large ore and blockers',
        body: 'After crafting, the practical use is simple: aim at the large node or blocking growth, fire, and collect what the normal hand tools could not reach. Do not waste a long dive proving it works on every object in the area.',
      },
      {
        title: 'Connect it to the upgrade chain',
        body: 'The Sonic Resonator is also the base tool for Feedback Resonator. If you are heading toward Alien Ruins, Metal Farms, or Conduit Crystal routes, keep the tool repaired, powered, and easy to find.',
      },
    ],
    tableTitle: 'What to prepare before scanning',
    tableHeaders: ['Prep', 'Reason'],
    tableRows: [
      [
        'Scanner and battery margin',
        'Fragment routes fail fast when the tool dies halfway through a scan loop.',
      ],
      [
        'Oxygen buffer',
        'Large nodes often sit where you want to stare at the wall too long.',
      ],
      [
        'Inventory space',
        'The point of the tool is mining; coming home full of random clutter wastes the trip.',
      ],
      [
        'Beacon or clear landmark',
        'Mark the scan route if it also leads toward later resources.',
      ],
      [
        'Feedback Resonator plan',
        'Once this tool exists, the later ranged upgrade becomes a natural next page in progression.',
      ],
    ],
    visualTitle: 'Tool use card',
    visualItems: [
      {
        label: 'Before',
        value: 'Scan route',
        note: 'Find fragments only after your oxygen loop feels calm.',
      },
      {
        label: 'First use',
        value: 'Large ore',
        note: 'Test it on mining prompts before deep-route experiments.',
      },
      {
        label: 'Later',
        value: 'Upgrade base',
        note: 'Keep it ready for the Feedback Resonator chain.',
      },
    ],
    cautionTitle: 'Do not make this tool your excuse to overextend',
    cautionBody:
      'The Sonic Resonator makes new materials reachable, which is exactly why it can pull you into bad routes. Mine what you came for, check oxygen, then leave before curiosity turns the return swim into the hard part.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'What does the Sonic Resonator do in Subnautica 2?',
        body: 'It is the tool used for large ore nodes and certain route blockers that normal early tools cannot handle.',
      },
      {
        title: 'Should I rush the Sonic Resonator early?',
        body: 'No. Get the Scanner habits, oxygen upgrades, and a reliable return route first. The tool is valuable when you can safely repeat mining runs.',
      },
      {
        title: 'Is Sonic Resonator needed for Feedback Resonator?',
        body: 'Yes. Feedback Resonator is an upgrade path built from the Sonic Resonator, so this tool is part of the later Alien Ruins chain.',
      },
      {
        title: 'What should I do after crafting it?',
        body: 'Test it on nearby large ore, update your resource route, then connect the tool to Conduit Crystal, Metal Farm, and Feedback Resonator planning.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Celestine, label: 'Celestine Guide' },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal Guide',
      },
      { href: Routes.Subnautica2Strontium, label: 'Strontium Guide' },
      {
        href: Routes.Subnautica2FeedbackResonator,
        label: 'Feedback Resonator Guide',
      },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Sulfur, label: 'Sulfur Location Guide' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
      { href: Routes.Subnautica2OxygenDepth, label: 'Oxygen and Depth' },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 24, 2026 against current PC Gamer and GamesRadar reporting. Subnautica 2 is in Early Access, so fragment routes, tool behavior, and upgrade materials should be rechecked after patches.',
    cardKicker: 'Mining tool card',
    cardBody:
      'Fragment scanning, large ore use, route-blocker clearing, inventory prep, and Feedback Resonator upgrade planning.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Tool guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Sonic Resonator 指南 - 挖矿工具、碎片扫描和升级前置',
      description:
        'Subnautica 2 中文 Sonic Resonator 指南：这个工具有什么用，什么时候去扫碎片，怎么规划挖矿路线，以及为什么它是 Feedback Resonator 的前置。',
    },
    eyebrow: 'Subnautica 2 挖矿工具',
    title: 'Subnautica 2 Sonic Resonator 指南',
    description:
      'Sonic Resonator 是你从“手搓小矿”进入大矿节点和路线清障的节点。它不是拿到就乱冲深水的许可证，而是后面 Feedback Resonator 升级链的基础工具。',
    quickLabel: '快速结论',
    quickAnswer:
      '等 Scanner、氧气节奏和回程路线都比较稳以后，再去扫 Sonic Resonator 碎片。先把它当成挖大矿和清路障的工具，不要当武器。做出来以后，先在近一点的大矿节点测试，再把它接到 Feedback Resonator、Conduit Crystal 和 Metal Farm 这条后续路线里。',
    contentsLabel: '目录',
    routeTitle: 'Sonic Resonator 路线规划',
    routeSteps: [
      {
        title: '先带好普通 Scanner',
        body: '这个工具从碎片扫描开始。如果 Scanner 电量、氧气余量和回程地标都不稳，先处理这些基础问题。',
      },
      {
        title: '按挖矿路线走，不要慌着乱游',
        body: 'PC Gamer 和 GamesRadar 当前都把 Sonic Resonator 放在大矿节点和未知挖矿提示的语境里。先围绕扫描规划路线，做出来以后再从近处开始测试。',
      },
      {
        title: '用它处理大矿和路障',
        body: '制作完成后，用法很直接：对准大矿节点或挡路生长物，发射，然后收集普通工具够不到的东西。别在一次长潜里到处试每个物体。',
      },
      {
        title: '把它接到升级链里',
        body: 'Sonic Resonator 也是 Feedback Resonator 的前置工具。如果接下来要跑 Alien Ruins、Metal Farms 或 Conduit Crystal 路线，记得把它放在顺手的位置。',
      },
    ],
    tableTitle: '扫描前准备',
    tableHeaders: ['准备项', '原因'],
    tableRows: [
      ['Scanner 和电量余量', '扫碎片时工具没电，会让整趟路线很难受。'],
      ['氧气缓冲', '大矿节点附近最容易让人盯着墙看太久。'],
      ['背包空间', '这趟的目标是挖矿，背包塞满杂物就亏了。'],
      ['Beacon 或清楚地标', '如果这条路线以后还要回头跑，最好留下记号。'],
      [
        'Feedback Resonator 计划',
        '拿到 Sonic 以后，远程升级链就可以顺着往后做。',
      ],
    ],
    visualTitle: '工具使用卡',
    visualItems: [
      {
        label: '出发前',
        value: '扫描路线',
        note: '氧气循环稳定后，再去找碎片更舒服。',
      },
      {
        label: '第一次用',
        value: '大矿节点',
        note: '先在明确的挖矿提示上测试，不要直接深潜乱试。',
      },
      {
        label: '后续',
        value: '升级前置',
        note: '保留给 Feedback Resonator 这条路线。',
      },
    ],
    cautionTitle: '别因为有了新工具就过度深入',
    cautionBody:
      'Sonic Resonator 会让新材料变得可采，也正因为这样，它很容易把你拉进不该久留的路线。挖到目标、看一眼氧气，然后回家。好奇心可以留到下一趟。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Sonic Resonator 有什么用？',
        body: '它主要用来处理大矿节点，以及部分普通早期工具没法处理的路线阻挡物。',
      },
      {
        title: 'Sonic Resonator 要不要很早就冲？',
        body: '不建议。先把 Scanner、氧气升级和稳定回程路线做好，能安全反复挖矿以后再拿它更划算。',
      },
      {
        title: 'Feedback Resonator 需要 Sonic Resonator 吗？',
        body: '需要。Feedback Resonator 是从 Sonic Resonator 升级来的，所以 Sonic 是后续 Alien Ruins 工具链的一部分。',
      },
      {
        title: '做出 Sonic Resonator 后先干什么？',
        body: '先找附近的大矿节点测试，再更新你的资源路线，把它接到 Conduit Crystal、Metal Farm 和 Feedback Resonator 的计划里。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2Celestine, label: 'Celestine 指南' },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal 指南',
      },
      { href: Routes.Subnautica2Strontium, label: 'Strontium 指南' },
      {
        href: Routes.Subnautica2FeedbackResonator,
        label: 'Feedback Resonator 指南',
      },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Sulfur, label: 'Sulfur Location Guide' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner 指南' },
      { href: Routes.Subnautica2OxygenDepth, label: '氧气和下潜深度' },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm 指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 24 日核对 PC Gamer 和 GamesRadar 的当前报道。Subnautica 2 仍在抢先体验，碎片路线、工具效果和后续材料可能会随补丁调整。',
    cardKicker: '挖矿工具卡',
    cardBody:
      '整理碎片扫描、大矿节点、路线清障、背包准备和 Feedback Resonator 升级前置。',
    cardTypeLabel: '类型',
    cardTypeValue: '工具指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
  ja: {
    metadata: {
      title:
        'Subnautica 2 Sonic Resonator Guide - mining tool, fragments, and upgrades',
      description:
        'Subnautica 2 Sonic Resonator guide for fragment scans, large ore use, route blockers, and Feedback Resonator prep.',
    },
    eyebrow: 'Subnautica 2 mining tool',
    title: 'Subnautica 2 Sonic Resonator Guide',
    description:
      'Sonic Resonator opens large ore and route blockers, then becomes the base tool for Feedback Resonator later.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Scan Sonic Resonator fragments after your Scanner, oxygen, and return route are stable. Use it first for large ore and blockers, then keep it ready for Feedback Resonator progression.',
    contentsLabel: 'Contents',
    routeTitle: 'Sonic Resonator route plan',
    routeSteps: [
      {
        title: 'Bring Scanner basics',
        body: 'Fragment scanning still depends on battery, oxygen, landmarks, and calm route habits.',
      },
      {
        title: 'Plan a mining route',
        body: 'Current guides connect Sonic Resonator to large ore and unknown mining prompts, so treat the trip as a tool route.',
      },
      {
        title: 'Test it close to home',
        body: 'Use it on obvious large ore before making a deep route depend on it.',
      },
      {
        title: 'Save it for upgrades',
        body: 'Feedback Resonator later builds from Sonic Resonator, so keep the tool in your main kit.',
      },
    ],
    tableTitle: 'Pre-scan checks',
    tableHeaders: ['Prep', 'Reason'],
    tableRows: [
      ['Scanner battery', 'Fragments are the unlock path.'],
      ['Oxygen buffer', 'Mining routes invite slow movement.'],
      ['Inventory space', 'You are here to bring materials home.'],
      ['Landmark', 'Mark a route you may repeat later.'],
      ['Upgrade plan', 'Feedback Resonator comes after this tool.'],
    ],
    visualTitle: 'Tool card',
    visualItems: [
      { label: 'Before', value: 'Scan route', note: 'Do fragments calmly.' },
      {
        label: 'Use',
        value: 'Large ore',
        note: 'Test obvious mining nodes first.',
      },
      {
        label: 'Later',
        value: 'Upgrade base',
        note: 'Keep it for Feedback Resonator.',
      },
    ],
    cautionTitle: 'Do not overextend for one tool',
    cautionBody:
      'New mining access can pull you into bad routes. Mine the target, check oxygen, and return before the route becomes messy.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'What does Sonic Resonator do?',
        body: 'It handles large ore nodes and some blockers that early tools cannot manage.',
      },
      {
        title: 'Should I rush it?',
        body: 'No. It is better after basic Scanner and oxygen planning are stable.',
      },
      {
        title: 'Is it needed for Feedback Resonator?',
        body: 'Yes. Feedback Resonator upgrades from Sonic Resonator.',
      },
      {
        title: 'What comes next?',
        body: 'Connect it to resource routes, Conduit Crystal, Metal Farm, and Feedback Resonator.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Celestine, label: 'Celestine Guide' },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal Guide',
      },
      { href: Routes.Subnautica2Strontium, label: 'Strontium Guide' },
      {
        href: Routes.Subnautica2FeedbackResonator,
        label: 'Feedback Resonator Guide',
      },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Sulfur, label: 'Sulfur Location Guide' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
      { href: Routes.Subnautica2OxygenDepth, label: 'Oxygen and Depth' },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 24, 2026 against current PC Gamer and GamesRadar reporting. Early Access details may change.',
    cardKicker: 'Mining tool card',
    cardBody:
      'Fragment scans, large ore use, blockers, and Feedback Resonator prep.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Tool guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
};

const fallbackLocaleAliases = {
  de: {
    title: 'Subnautica 2 Sonic Resonator Guide',
    description:
      'Guide for Sonic Resonator fragments, large ore mining, route blockers, and Feedback Resonator prep.',
  },
  fr: {
    title: 'Subnautica 2 Sonic Resonator Guide',
    description:
      'Guide Sonic Resonator pour fragments, gros minerais, blocages de route et preparation Feedback Resonator.',
  },
  'pt-BR': {
    title: 'Subnautica 2 Sonic Resonator Guide',
    description:
      'Guia do Sonic Resonator para fragmentos, grandes minerios, bloqueios de rota e Feedback Resonator.',
  },
  'es-419': {
    title: 'Subnautica 2 Sonic Resonator Guide',
    description:
      'Guia del Sonic Resonator: fragmentos, minerales grandes, bloqueos de ruta y Feedback Resonator.',
  },
  ko: {
    title: 'Subnautica 2 Sonic Resonator Guide',
    description:
      'Sonic Resonator fragments, large ore mining, route blockers, and Feedback Resonator prep.',
  },
  ru: {
    title: 'Subnautica 2 Sonic Resonator Guide',
    description:
      'Guide for Sonic Resonator fragments, large ore mining, blockers, and Feedback Resonator prep.',
  },
} satisfies Record<string, { title: string; description: string }>;

function getCopy(locale: Locale): SonicCopy {
  if (sonicCopy[locale]) {
    return sonicCopy[locale];
  }

  const fallback =
    fallbackLocaleAliases[locale as keyof typeof fallbackLocaleAliases] ??
    fallbackLocaleAliases.de;

  return {
    ...sonicCopy.en,
    metadata: {
      title: fallback.title,
      description: fallback.description,
    },
    title: fallback.title,
    description: fallback.description,
  };
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
    pathname: Routes.Subnautica2SonicResonator,
  });
}

export default async function SonicResonatorPage({
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
      icon={WavesIcon}
      locale={locale}
      pathname={Routes.Subnautica2SonicResonator}
      sources={sharedSources}
    />
  );
}
