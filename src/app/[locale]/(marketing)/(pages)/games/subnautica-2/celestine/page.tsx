import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { PickaxeIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type CelestineCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-25';
const UPDATED_AT = '2026-05-25';

const sharedSources = [
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-celestine-location/',
    label: 'PC Gamer Celestine guide',
  },
  {
    href: 'https://www.gamesradar.com/games/survival/celestine-subnautica-2/',
    label: 'GamesRadar Celestine guide',
  },
  {
    href: 'https://allthings.how/where-to-find-celestine-in-subnautica-2/',
    label: 'All Things How Celestine guide',
  },
];

const celestineCopy: Record<string, CelestineCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Celestine Guide - Location, Sonic Resonator Mining, and Strontium Route',
      description:
        'A practical Subnautica 2 Celestine guide covering Alien Ruins routes, Needler patrol risk, Sonic Resonator mining, Tadpole prep, and Strontium processing.',
    },
    eyebrow: 'Subnautica 2 deep mineral',
    title: 'Subnautica 2 Celestine Guide',
    description:
      'Celestine is the rock you need before Strontium becomes a real plan. It lives on deeper Alien Ruins routes, so the route is less about spotting a blue vein and more about arriving with the right tool and leaving cleanly.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Look for Celestine around the deeper Alien Ruins biome, including rocky walls and routes near Needler patrols. Bring the Tadpole, enough depth margin, and the Sonic Resonator for large nodes. Mine Celestine first, then process it into Strontium back at base when an upgrade asks for the refined material.',
    contentsLabel: 'Contents',
    routeTitle: 'Celestine route plan',
    routeSteps: [
      {
        title: 'Use Alien Ruins as the route anchor',
        body: 'PC Gamer points players toward the Alien Ruins biome and a route southeast of the Alien Ruins Research Base. Use the base, cliffs, and alien structures as landmarks instead of trying to sweep open water.',
      },
      {
        title: 'Watch the lower rock faces',
        body: 'Current guides describe Celestine as a blue mineral vein found on deeper rocks and cave walls. It is easy to miss if you only scan the sea floor.',
      },
      {
        title: 'Bring the Sonic Resonator',
        body: 'Large Celestine deposits need the Sonic Resonator. If you reach the vein and cannot mine it, stop blaming the route. You came without the tool that turns the route into a haul.',
      },
      {
        title: 'Respect Needler patrols',
        body: 'Several current guides warn about Needlers around the good Celestine route. Park the Tadpole with an exit angle, mine quickly, and do not hang around counting inventory while something is chewing the hull.',
      },
      {
        title: 'Process later, not in the water',
        body: 'Celestine is the raw material. Strontium is made later at the Processor, so keep the two names separate when checking upgrade recipes.',
      },
    ],
    tableTitle: 'Before the Celestine run',
    tableHeaders: ['Check', 'Why it matters'],
    tableRows: [
      [
        'Tadpole depth margin',
        'The useful deposits sit past early-water comfort, so the vehicle needs to survive the route calmly.',
      ],
      [
        'Sonic Resonator',
        'Needed for large Celestine nodes and worth checking before you leave base.',
      ],
      [
        'Repair and healing',
        'Needlers can turn one greedy mining stop into a damaged vehicle and a bad swim home.',
      ],
      [
        'Beacon or landmark note',
        'A repeatable route matters more than one lucky blue vein.',
      ],
      [
        'Processor plan',
        'Celestine becomes Strontium only after base processing.',
      ],
    ],
    visualTitle: 'Mining card',
    visualItems: [
      {
        label: 'Find',
        value: 'Blue veins',
        note: 'Search lower rocks around Alien Ruins, not just the flat floor.',
      },
      {
        label: 'Mine',
        value: 'Sonic',
        note: 'Use Sonic Resonator on large deposits.',
      },
      {
        label: 'Refine',
        value: 'Strontium',
        note: 'Bring Celestine home before processing.',
      },
    ],
    cautionTitle: 'Do not turn a mining trip into a tour',
    cautionBody:
      'Celestine routes sit near other tempting materials. That is useful later, but on the first run it is a trap. Mine the blue veins, mark what you see, and leave with the Tadpole intact.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Where do you find Celestine in Subnautica 2?',
        body: 'Current guides point to the deeper Alien Ruins biome, including routes southeast of the Alien Ruins Research Base, rocky walls, and lower cave faces.',
      },
      {
        title: 'What does Celestine look like?',
        body: 'Look for blue mineral veins on rock faces. Slow down near cliffs and ledges, because it can blend into deep-water lighting.',
      },
      {
        title: 'Do you need Sonic Resonator to mine Celestine?',
        body: 'Yes for large deposits. Bring the Sonic Resonator before making the deep route.',
      },
      {
        title: 'Is Celestine the same as Strontium?',
        body: 'No. Celestine is the raw mineral. Strontium is the processed material made from Celestine at base.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Strontium, label: 'Strontium Guide' },
      {
        href: Routes.Subnautica2CreatureEnamel,
        label: 'Creature Enamel Guide',
      },
      {
        href: Routes.Subnautica2SonicResonator,
        label: 'Sonic Resonator Guide',
      },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal Guide',
      },
      { href: Routes.Subnautica2Biomes, label: 'Biomes Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 25, 2026 against current PC Gamer, GamesRadar, and All Things How reporting. Subnautica 2 is in Early Access, so Celestine routes, hostile patrols, and processing recipes should be rechecked after patches.',
    cardKicker: 'Deep mineral card',
    cardBody:
      'Alien Ruins route, blue vein search pattern, Sonic Resonator mining, Needler risk, and Strontium processing.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Resource guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Celestine 指南 - 位置、Sonic Resonator 采矿和 Strontium 路线',
      description:
        'Subnautica 2 中文 Celestine 指南：Alien Ruins 深水路线、Needler 风险、Sonic Resonator 采集方法、Tadpole 准备，以及加工 Strontium 的关系。',
    },
    eyebrow: 'Subnautica 2 深水矿物',
    title: 'Subnautica 2 Celestine 指南',
    description:
      'Celestine 是 Strontium 之前真正要解决的矿。它不在舒服的前期浅水区，而在 Alien Ruins 附近的深水路线里。重点不是只看见一条蓝色矿脉，而是带对工具，安全挖完，再顺利回家。',
    quickLabel: '快速结论',
    quickAnswer:
      '去 Alien Ruins 生物群系较深区域找 Celestine，重点看岩壁、洞壁、低处 ledges，以及 Needler 巡逻附近的路线。出发前准备 Tadpole、足够的深度余量和 Sonic Resonator。先采 Celestine，回基地后再用 Processor 加工成 Strontium。',
    contentsLabel: '目录',
    routeTitle: 'Celestine 路线规划',
    routeSteps: [
      {
        title: '用 Alien Ruins 当路线锚点',
        body: 'PC Gamer 把玩家指向 Alien Ruins 生物群系，并提到 Alien Ruins Research Base 东南方向的路线。用基地、岩壁和外星结构当参照，不要在开阔水域里盲目扫图。',
      },
      {
        title: '多看低处岩壁',
        body: '当前攻略把 Celestine 描述成深水岩石和洞壁上的蓝色矿脉。只盯着海底平面看，很容易错过。',
      },
      {
        title: '带上 Sonic Resonator',
        body: '大的 Celestine 节点需要 Sonic Resonator。看到矿却采不下来时，通常不是路线错了，而是工具没带对。',
      },
      {
        title: '注意 Needler 巡逻',
        body: '多篇当前攻略都提醒 Celestine 好路线附近有 Needler。停 Tadpole 时给自己留好离开角度，挖完就走，不要在车旁边慢慢数背包。',
      },
      {
        title: '回基地后再加工',
        body: 'Celestine 是原矿，Strontium 是后面用 Processor 加工出来的材料。看升级配方时，把这两个名字分清楚。',
      },
    ],
    tableTitle: 'Celestine 出发前检查',
    tableHeaders: ['检查项', '为什么重要'],
    tableRows: [
      [
        'Tadpole 深度余量',
        '好用的矿点在前期舒适深度之外，载具要能稳稳跑完整条路线。',
      ],
      ['Sonic Resonator', '大 Celestine 节点需要它，出发前就确认带上。'],
      ['Repair 和回血', 'Needler 会把贪心采矿变成坏车加游泳回家。'],
      ['Beacon 或地标记录', '稳定可重复的路线，比偶然找到一条蓝矿更重要。'],
      ['Processor 计划', 'Celestine 需要回基地加工后才会变成 Strontium。'],
    ],
    visualTitle: '采矿卡',
    visualItems: [
      {
        label: '寻找',
        value: '蓝色矿脉',
        note: '多看 Alien Ruins 附近的低处岩壁，不要只扫平地。',
      },
      {
        label: '采集',
        value: 'Sonic',
        note: '大矿点用 Sonic Resonator 打开。',
      },
      {
        label: '加工',
        value: 'Strontium',
        note: '先把 Celestine 带回基地，再用 Processor。',
      },
    ],
    cautionTitle: '别把采矿路线变成观光路线',
    cautionBody:
      'Celestine 附近经常还有别的诱人材料。以后有用，但第一趟容易害人分心。先挖蓝矿，记下路上看到的东西，带着完整的 Tadpole 回家。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Celestine 在哪里找？',
        body: '当前攻略指向 Alien Ruins 生物群系较深区域，包括 Alien Ruins Research Base 东南方向、岩壁和低处洞壁。',
      },
      {
        title: 'Celestine 长什么样？',
        body: '它通常像岩壁上的蓝色矿脉。深水光线会让它不那么显眼，靠近 cliff 和 ledge 时要放慢一点。',
      },
      {
        title: 'Celestine 需要 Sonic Resonator 吗？',
        body: '大的矿点需要。跑深水路线前先把 Sonic Resonator 带上。',
      },
      {
        title: 'Celestine 和 Strontium 是一个东西吗？',
        body: '不是。Celestine 是原矿，Strontium 是回基地后用 Processor 加工出来的材料。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2Strontium, label: 'Strontium 指南' },
      { href: Routes.Subnautica2SonicResonator, label: 'Sonic Resonator 指南' },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal 指南',
      },
      { href: Routes.Subnautica2Biomes, label: '生物群系指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 25 日核对 PC Gamer、GamesRadar 和 All Things How 的当前报道。Subnautica 2 仍在抢先体验，Celestine 路线、敌对生物和加工配方后续可能会调整。',
    cardKicker: '深水矿物卡',
    cardBody:
      '整理 Alien Ruins 路线、蓝色矿脉查找、Sonic Resonator 采矿、Needler 风险和 Strontium 加工。',
    cardTypeLabel: '类型',
    cardTypeValue: '资源指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
  ja: {
    metadata: {
      title:
        'Subnautica 2 Celestine Guide - location, Sonic Resonator mining, and Strontium route',
      description:
        'Subnautica 2 Celestine guide for Alien Ruins routes, Sonic Resonator mining, Needler risk, Tadpole prep, and Strontium processing.',
    },
    eyebrow: 'Subnautica 2 deep mineral',
    title: 'Subnautica 2 Celestine Guide',
    description:
      'Celestine is the raw mineral behind Strontium. The useful route sits around deeper Alien Ruins water, so bring the right tool and leave with the vehicle intact.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Search deeper Alien Ruins routes, especially rocky walls, ledges, and areas near Needler patrols. Bring Tadpole depth planning and Sonic Resonator. Mine Celestine, then process it into Strontium back at base.',
    contentsLabel: 'Contents',
    routeTitle: 'Celestine route plan',
    routeSteps: [
      {
        title: 'Anchor on Alien Ruins',
        body: 'Current guides point to the Alien Ruins biome and routes southeast of the research base.',
      },
      {
        title: 'Check lower rock faces',
        body: 'Celestine appears as blue veins on deeper rocks and walls.',
      },
      {
        title: 'Bring Sonic Resonator',
        body: 'Large Celestine deposits need Sonic Resonator.',
      },
      {
        title: 'Watch Needlers',
        body: 'Mine quickly and keep the Tadpole pointed toward an exit.',
      },
      {
        title: 'Process later',
        body: 'Celestine is raw mineral. Strontium comes later at base.',
      },
    ],
    tableTitle: 'Before the run',
    tableHeaders: ['Check', 'Why'],
    tableRows: [
      ['Tadpole depth', 'The route is deeper than early safe travel.'],
      ['Sonic Resonator', 'Needed for large nodes.'],
      ['Repair and healing', 'Needlers can punish a slow stop.'],
      ['Beacon', 'Repeatable routes beat lucky finds.'],
      ['Processor plan', 'Celestine becomes Strontium later.'],
    ],
    visualTitle: 'Mining card',
    visualItems: [
      {
        label: 'Find',
        value: 'Blue veins',
        note: 'Search lower Alien Ruins rocks.',
      },
      { label: 'Mine', value: 'Sonic', note: 'Use Sonic Resonator on nodes.' },
      { label: 'Refine', value: 'Strontium', note: 'Process at base later.' },
    ],
    cautionTitle: 'Keep the first trip simple',
    cautionBody:
      'Mine Celestine, mark nearby materials, and leave. The second trip is better for side objectives.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Where is Celestine?',
        body: 'Around deeper Alien Ruins routes, rocky walls, and lower cave faces.',
      },
      {
        title: 'What does it look like?',
        body: 'Blue mineral veins on rock faces.',
      },
      {
        title: 'Do I need Sonic Resonator?',
        body: 'Yes for large Celestine deposits.',
      },
      {
        title: 'Is Celestine Strontium?',
        body: 'No. Celestine is processed into Strontium at base.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Strontium, label: 'Strontium Guide' },
      {
        href: Routes.Subnautica2SonicResonator,
        label: 'Sonic Resonator Guide',
      },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal Guide',
      },
      { href: Routes.Subnautica2Biomes, label: 'Biomes Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 25, 2026 against current PC Gamer, GamesRadar, and All Things How reporting. Early Access details may change.',
    cardKicker: 'Deep mineral card',
    cardBody:
      'Alien Ruins route, blue vein search, Sonic Resonator mining, Needler risk, and Strontium processing.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Resource guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
};

const fallbackLocaleAliases = {
  de: {
    title: 'Subnautica 2 Celestine Guide',
    description:
      'Guide for Celestine locations, Alien Ruins routes, Sonic Resonator mining, and Strontium processing.',
  },
  fr: {
    title: 'Subnautica 2 Celestine Guide',
    description:
      'Guide Celestine pour Alien Ruins, Sonic Resonator, Needlers et Strontium.',
  },
  'pt-BR': {
    title: 'Subnautica 2 Celestine Guide',
    description:
      'Guia de Celestine com Alien Ruins, Sonic Resonator, Needlers e Strontium.',
  },
  'es-419': {
    title: 'Subnautica 2 Celestine Guide',
    description:
      'Guia de Celestine: Alien Ruins, Sonic Resonator, Needlers y Strontium.',
  },
  ko: {
    title: 'Subnautica 2 Celestine Guide',
    description:
      'Celestine locations, Alien Ruins route, Sonic Resonator mining, and Strontium processing.',
  },
  ru: {
    title: 'Subnautica 2 Celestine Guide',
    description:
      'Guide for Celestine locations, Alien Ruins routes, Sonic Resonator mining, and Strontium processing.',
  },
} satisfies Record<string, { title: string; description: string }>;

function getCopy(locale: Locale): CelestineCopy {
  if (celestineCopy[locale]) {
    return celestineCopy[locale];
  }

  const fallback =
    fallbackLocaleAliases[locale as keyof typeof fallbackLocaleAliases] ??
    fallbackLocaleAliases.de;

  return {
    ...celestineCopy.en,
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
    pathname: Routes.Subnautica2Celestine,
  });
}

export default async function CelestinePage({
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
      icon={PickaxeIcon}
      locale={locale}
      pathname={Routes.Subnautica2Celestine}
      sources={sharedSources}
    />
  );
}
