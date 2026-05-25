import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { RadioTowerIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type FeedbackCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-24';
const UPDATED_AT = '2026-05-24';

const sharedSources = [
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-feedback-resonator-scan-locations/',
    label: 'PC Gamer Feedback Resonator guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-mining-unknown-tool-sonic-resonator/',
    label: 'PC Gamer Sonic Resonator guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-conduit-crystal-location/',
    label: 'PC Gamer Conduit Crystal guide',
  },
];

const feedbackCopy: Record<string, FeedbackCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Feedback Resonator Guide - Scan Route, Crafting, and Angel Comb Use',
      description:
        'A practical Subnautica 2 Feedback Resonator guide covering the Sonic Resonator base tool, scan route, Modification Station craft, Conduit Crystal prep, and Angel Comb use.',
    },
    eyebrow: 'Subnautica 2 tool upgrade',
    title: 'Subnautica 2 Feedback Resonator Guide',
    description:
      'The Feedback Resonator is not just a stronger mining tool. It changes the Sonic Resonator into a ranged upgrade, which matters once Alien Ruins routes start asking you to clear hostile growths without swimming into them.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Get the Sonic Resonator first, then scan two Feedback Resonator fragments later in the Alien Ruins and Metal Farms route. Build the upgrade at a Modification Station with your Sonic Resonator, Enameled Glass, Conduit Crystal, and Strontium. Bring a Tadpole Depth Module, repairs, healing, and enough patience to leave if the green-pool route gets messy.',
    contentsLabel: 'Contents',
    routeTitle: 'Feedback Resonator route plan',
    routeSteps: [
      {
        title: 'Start with the Sonic Resonator',
        body: 'The Feedback Resonator is an upgrade, so the basic Sonic Resonator has to exist first. Use it to break large ore nodes, clear Bloom Biofilm, and make the deeper material loop less painful.',
      },
      {
        title: 'Do not rush the deep route',
        body: 'Current guide reporting puts Feedback Resonator progress after vehicle and Alien Ruins milestones. If your Tadpole depth, oxygen margin, or repair planning is shaky, fix that before chasing the scan.',
      },
      {
        title: 'Scan the two upgrade fragments',
        body: 'PC Gamer reports two scans in the green abyssal pool and Metal Farms area northeast of the Alien Ruins route, so treat this as a late-route scan mission rather than a casual loot swim.',
      },
      {
        title: 'Craft it at the Modification Station',
        body: 'The reported craft uses the Sonic Resonator plus Enameled Glass, Conduit Crystal, and Strontium. Build the Modification Station before you make the deep trip feel urgent, or the materials will sit in storage while you backtrack.',
      },
      {
        title: 'Use range, not bravery',
        body: 'The point of the upgrade is distance. If an Angel Comb or viral growth closes when you approach, stand off, aim calmly, and let the projectile do the work.',
      },
    ],
    tableTitle: 'Before you leave base',
    tableHeaders: ['Check', 'Why it matters'],
    tableRows: [
      [
        'Sonic Resonator',
        'Required for the upgrade and still useful for ore, biofilm, and Conduit Crystal harvesting.',
      ],
      [
        'Tadpole Depth Module',
        'The route reaches depths where a basic vehicle plan will feel thin.',
      ],
      [
        'Repair Tool and healing',
        'The green-pool area is hostile enough that one bad bite can turn a scan trip into a salvage trip.',
      ],
      [
        'Modification Station',
        'Needed to craft the upgrade once the blueprint and materials are ready.',
      ],
      [
        'Conduit Crystal plan',
        'Grab crystals around Alien Ruins ledges while you are already running this route.',
      ],
    ],
    visualTitle: 'Route card',
    visualItems: [
      {
        label: 'Tool',
        value: 'Sonic first',
        note: 'Mine, clear biofilm, then turn it into the ranged version.',
      },
      {
        label: 'Route',
        value: 'Ruins to pools',
        note: 'Treat Metal Farms as a planned dive with an exit line.',
      },
      {
        label: 'Use',
        value: 'Ranged clear',
        note: 'Back up before firing at the growths that punish close swims.',
      },
    ],
    cautionTitle: 'This is a late-route tool, not a flex item',
    cautionBody:
      'The route has predators, depth pressure, and several tempting side objectives. Pick one job for the trip: scan the fragments, grab Conduit Crystal, or scout Metal Farms. Trying to do everything at once is how you lose the vehicle, the loot, and your temper.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you unlock the Feedback Resonator in Subnautica 2?',
        body: 'Current guides report that you need two Feedback Resonator scans, then craft the upgrade at a Modification Station.',
      },
      {
        title: 'Do I need the Sonic Resonator first?',
        body: 'Yes. The Feedback Resonator is a modification of the Sonic Resonator, and the Sonic tool is also useful for gathering some of the materials around the route.',
      },
      {
        title: 'Where is the Feedback Resonator route?',
        body: 'PC Gamer places the route around the green abyssal pools and Metal Farms northeast of the Alien Ruins path, near deep alien structures and hostile patrols.',
      },
      {
        title: 'What does the Feedback Resonator do?',
        body: 'It turns the Sonic Resonator into a ranged tool, which lets you clear growths from safer distance instead of swimming right into them.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2SonicResonator,
        label: 'Sonic Resonator Guide',
      },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal Guide',
      },
      { href: Routes.Subnautica2Strontium, label: 'Strontium Guide' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Vehicle Guide' },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        label: 'Tadpole Depth Module Guide',
      },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm Guide' },
      {
        href: Routes.Subnautica2BioscannerBiomods,
        label: 'Bioscanner and Biomods',
      },
      { href: Routes.Subnautica2OxygenDepth, label: 'Oxygen and Depth' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 24, 2026 against current PC Gamer reporting. Subnautica 2 is in Early Access, so route markers, material costs, and upgrade behavior should be rechecked after patches.',
    cardKicker: 'Tool upgrade card',
    cardBody:
      'Sonic Resonator base tool, two scan route, Modification Station craft, Conduit Crystal prep, and safe ranged use.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Tool upgrade',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Feedback Resonator 指南 - 扫描路线、制作材料和用途',
      description:
        'Subnautica 2 中文 Feedback Resonator 指南：先做 Sonic Resonator，怎么跑 Alien Ruins 和 Metal Farms 扫描路线，制作需要什么，以及什么时候用远程清理。',
    },
    eyebrow: 'Subnautica 2 工具升级',
    title: 'Subnautica 2 Feedback Resonator 指南',
    description:
      'Feedback Resonator 不是单纯“伤害更高”的矿枪。它把 Sonic Resonator 变成远程工具，真正有价值的地方，是你开始处理外星遗迹路线里那些不能贴脸碰的生长物时。',
    quickLabel: '快速结论',
    quickAnswer:
      '先拿 Sonic Resonator，再去 Alien Ruins 和 Metal Farms 这一条深水路线扫两个 Feedback Resonator 碎片。蓝图解锁后，在 Modification Station 里用 Sonic Resonator、Enameled Glass、Conduit Crystal 和 Strontium 制作。出发前带 Tadpole Depth Module、Repair Tool、回血物品，并且给自己留好撤退路线。',
    contentsLabel: '目录',
    routeTitle: 'Feedback Resonator 路线规划',
    routeSteps: [
      {
        title: '先把 Sonic Resonator 做出来',
        body: 'Feedback Resonator 是升级件，不是从零制作的新工具。Sonic Resonator 先用来敲大矿、清 Bloom Biofilm，也会让后面跑深水材料舒服很多。',
      },
      {
        title: '不要太早冲深水路线',
        body: '当前资料把 Feedback Resonator 放在载具和外星遗迹之后。如果 Tadpole 深度、氧气余量、Repair Tool 都还没准备好，先别硬跑。',
      },
      {
        title: '扫描两个升级碎片',
        body: 'PC Gamer 把两个扫描点放在 Alien Ruins 路线东北方向的绿色深水池和 Metal Farms 区域，所以这趟更像一次中后期任务，不是顺手捡材料。',
      },
      {
        title: '回基地用 Modification Station 制作',
        body: '当前报道的配方需要 Sonic Resonator、Enameled Glass、Conduit Crystal 和 Strontium。建议先把 Modification Station 准备好，不然扫完蓝图还得来回补设施。',
      },
      {
        title: '靠距离解决问题',
        body: '这个升级最重要的是“远程”。遇到靠近就闭合或惩罚贴脸的外星生长物时，退一步，瞄稳，再开火。',
      },
    ],
    tableTitle: '出门前检查',
    tableHeaders: ['检查项', '为什么重要'],
    tableRows: [
      [
        'Sonic Resonator',
        '升级本体，也能用来挖大矿、清障和采 Conduit Crystal。',
      ],
      ['Tadpole Depth Module', '这条路线深度压力高，普通载具准备会很吃力。'],
      [
        'Repair Tool 和回血',
        '绿色池子附近危险多，扫碎片时可能需要离开 Tadpole。',
      ],
      ['Modification Station', '蓝图和材料都有了以后，制作升级需要它。'],
      [
        'Conduit Crystal 路线',
        '跑 Alien Ruins 时顺手规划晶体采集，减少后面重复下潜。',
      ],
    ],
    visualTitle: '路线卡片',
    visualItems: [
      {
        label: '工具',
        value: '先 Sonic',
        note: '先能挖矿和清障，再升级成远程版本。',
      },
      {
        label: '路线',
        value: '遗迹到绿池',
        note: '把 Metal Farms 当成一趟有撤退线的深潜任务。',
      },
      {
        label: '用途',
        value: '远程清理',
        note: '别贴脸硬冲，保持距离才是这个升级的意义。',
      },
    ],
    cautionTitle: '这不是炫耀用的道具',
    cautionBody:
      '这条路线有深度压力、敌对生物和一堆容易让人分心的顺路目标。一趟最好只定一个主要任务：扫碎片、拿 Conduit Crystal，或者侦察 Metal Farms。全都想做，最容易把载具和背包一起丢在深水里。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Feedback Resonator 怎么解锁？',
        body: '当前攻略显示需要扫描两个 Feedback Resonator 碎片，然后在 Modification Station 制作升级。',
      },
      {
        title: '必须先有 Sonic Resonator 吗？',
        body: '需要。Feedback Resonator 是 Sonic Resonator 的升级，而且 Sonic 工具本身也会用于挖矿和采集部分路线材料。',
      },
      {
        title: 'Feedback Resonator 在哪里找？',
        body: 'PC Gamer 把路线放在 Alien Ruins 东北方向的绿色深水池和 Metal Farms 区域，附近有外星结构和危险巡逻。',
      },
      {
        title: 'Feedback Resonator 有什么用？',
        body: '它让 Sonic Resonator 具备远程发射能力，可以更安全地清理一些不适合贴近处理的外星生长物。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      {
        href: Routes.Subnautica2SonicResonator,
        label: 'Sonic Resonator 指南',
      },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal 指南',
      },
      { href: Routes.Subnautica2Strontium, label: 'Strontium 指南' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 载具指南' },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        label: 'Tadpole Depth Module 指南',
      },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm 指南' },
      {
        href: Routes.Subnautica2BioscannerBiomods,
        label: 'Bioscanner 和 Biomods',
      },
      { href: Routes.Subnautica2OxygenDepth, label: '氧气和深度' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 24 日核对 PC Gamer 的当前报道。Subnautica 2 仍在抢先体验，路线、材料和升级效果后续补丁可能会调整。',
    cardKicker: '工具升级卡',
    cardBody:
      '整理 Sonic Resonator 前置、两个扫描点、Modification Station 制作、Conduit Crystal 准备和远程清理用法。',
    cardTypeLabel: '类型',
    cardTypeValue: '工具升级',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
  ja: {
    metadata: {
      title:
        'Subnautica 2 Feedback Resonator Guide - scan route, craft, and use',
      description:
        'Subnautica 2 Feedback Resonator guide for Sonic Resonator prep, Alien Ruins and Metal Farms scans, materials, and safe ranged use.',
    },
    eyebrow: 'Subnautica 2 tool upgrade',
    title: 'Subnautica 2 Feedback Resonator Guide',
    description:
      'Feedback Resonator is a ranged upgrade for the Sonic Resonator. It matters once Alien Ruins routes ask you to clear growths without swimming right into them.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Make the Sonic Resonator first, then scan two Feedback Resonator fragments on the Alien Ruins and Metal Farms route. Craft it at a Modification Station with Sonic Resonator, Enameled Glass, Conduit Crystal, and Strontium.',
    contentsLabel: 'Contents',
    routeTitle: 'Feedback Resonator route plan',
    routeSteps: [
      {
        title: 'Make Sonic Resonator first',
        body: 'The upgrade depends on the base tool. Use Sonic Resonator for large ore, Bloom Biofilm, and material prep before deep routes.',
      },
      {
        title: 'Wait for vehicle depth',
        body: 'This is safer after Tadpole depth planning, repair prep, and Alien Ruins orientation.',
      },
      {
        title: 'Scan two fragments',
        body: 'Current reports point players toward the green pool and Metal Farms side of the Alien Ruins route.',
      },
      {
        title: 'Craft at Modification Station',
        body: 'Prepare the station before the scan trip so the upgrade does not stall in storage.',
      },
      {
        title: 'Use distance',
        body: 'Back away from hostile growths and use the projectile instead of forcing a close swim.',
      },
    ],
    tableTitle: 'Pre-dive checks',
    tableHeaders: ['Check', 'Why it matters'],
    tableRows: [
      [
        'Sonic Resonator',
        'Required as the base tool and still useful for materials.',
      ],
      ['Tadpole Depth Module', 'The route reaches uncomfortable depth.'],
      ['Repairs and healing', 'The scan area can punish sloppy exits.'],
      ['Modification Station', 'Needed to craft the tool modification.'],
      [
        'Conduit Crystal plan',
        'Worth gathering while you are already near Alien Ruins.',
      ],
    ],
    visualTitle: 'Route card',
    visualItems: [
      {
        label: 'Tool',
        value: 'Sonic first',
        note: 'Upgrade the tool after it earns its place.',
      },
      {
        label: 'Route',
        value: 'Ruins pools',
        note: 'Plan the return before diving deeper.',
      },
      {
        label: 'Use',
        value: 'Ranged clear',
        note: 'Distance is the whole point.',
      },
    ],
    cautionTitle: 'Do not turn one route into five chores',
    cautionBody:
      'Scan fragments, gather Conduit Crystal, or scout Metal Farms. Pick the main job before leaving base, then come home alive.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you unlock Feedback Resonator?',
        body: 'Scan two upgrade fragments and craft the modification at a Modification Station.',
      },
      {
        title: 'Do you need Sonic Resonator?',
        body: 'Yes. Feedback Resonator modifies that tool.',
      },
      {
        title: 'Where is the route?',
        body: 'Current guides point to the Alien Ruins, green pools, and Metal Farms route.',
      },
      {
        title: 'What is it for?',
        body: 'It gives Sonic Resonator a ranged projectile for safer clearing.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2SonicResonator,
        label: 'Sonic Resonator Guide',
      },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal Guide',
      },
      { href: Routes.Subnautica2Strontium, label: 'Strontium Guide' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Guide' },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        label: 'Tadpole Depth Module Guide',
      },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm Guide' },
      {
        href: Routes.Subnautica2BioscannerBiomods,
        label: 'Bioscanner and Biomods',
      },
      { href: Routes.Subnautica2OxygenDepth, label: 'Oxygen and Depth' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 24, 2026 against PC Gamer reporting. Early Access details may change.',
    cardKicker: 'Tool upgrade card',
    cardBody:
      'Sonic Resonator prep, scan route, craft materials, and ranged clearing notes.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Tool upgrade',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
};

const fallbackLocaleAliases = {
  de: {
    title: 'Subnautica 2 Feedback Resonator Guide',
    description:
      'Route-first guide for Feedback Resonator scans, Sonic Resonator prep, materials, and ranged use.',
  },
  fr: {
    title: 'Subnautica 2 Feedback Resonator Guide',
    description:
      'Guide pratique pour les scans Feedback Resonator, le Sonic Resonator, les materiaux et l usage a distance.',
  },
  'pt-BR': {
    title: 'Subnautica 2 Feedback Resonator Guide',
    description:
      'Guia do Feedback Resonator com scans, preparo do Sonic Resonator, materiais e uso a distancia.',
  },
  'es-419': {
    title: 'Subnautica 2 Feedback Resonator Guide',
    description:
      'Guia del Feedback Resonator: scans, Sonic Resonator, materiales y uso a distancia.',
  },
  ko: {
    title: 'Subnautica 2 Feedback Resonator Guide',
    description:
      'Feedback Resonator scans, Sonic Resonator prep, materials, and ranged clearing guide.',
  },
  ru: {
    title: 'Subnautica 2 Feedback Resonator Guide',
    description:
      'Guide for Feedback Resonator scans, Sonic Resonator prep, materials, and safe ranged use.',
  },
} satisfies Record<string, { title: string; description: string }>;

function getCopy(locale: Locale): FeedbackCopy {
  if (feedbackCopy[locale]) {
    return feedbackCopy[locale];
  }

  const fallback =
    fallbackLocaleAliases[locale as keyof typeof fallbackLocaleAliases] ??
    fallbackLocaleAliases.de;

  return {
    ...feedbackCopy.en,
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
    pathname: Routes.Subnautica2FeedbackResonator,
  });
}

export default async function FeedbackResonatorPage({
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
      icon={RadioTowerIcon}
      locale={locale}
      pathname={Routes.Subnautica2FeedbackResonator}
      sources={sharedSources}
    />
  );
}
