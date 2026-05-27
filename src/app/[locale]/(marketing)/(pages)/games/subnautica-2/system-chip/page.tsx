import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { CpuIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type SystemChipCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-25';
const UPDATED_AT = '2026-05-27';

const sharedSources = [
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-o2-oxygen-air-tank/',
    label: 'PC Gamer O2 and Rebreather guide',
  },
  {
    href: 'https://www.dexerto.com/wikis/subnautica-2/resources/system-chip/',
    label: 'Dexerto System Chip database',
  },
  {
    href: 'https://subnautica2.gg/blueprints/system-chip/',
    label: 'Subnautica2.gg System Chip blueprint',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-tadpole-scan-locations/',
    label: 'PC Gamer Tadpole guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-silver-location/',
    label: 'PC Gamer Silver guide',
  },
];

const systemChipCopy: Record<string, SystemChipCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 System Chip Guide - Recipe, Wiring Kit, Quartz, and Upgrade Uses',
      description:
        'A practical Subnautica 2 System Chip guide covering Wiring Kit, Quartz, Silver prep, Rebreather, Scanner Station, Tadpole, and Tadpole Depth Module use.',
    },
    eyebrow: 'Subnautica 2 electronics material',
    title: 'Subnautica 2 System Chip Guide',
    description:
      'System Chips are small enough to forget and important enough to stall half your plan. Treat them as an electronics checkpoint: Silver first, Quartz second, then decide which upgrade actually deserves the chip.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current guides list System Chip as a crafted electronics part made from Wiring Kit and Quartz. PC Gamer currently lists one System Chip in the Rebreather recipe, and GameSpot/PC Gamer upgrade reporting also connects the chip to Tadpole and depth-module planning. The real bottleneck is usually Silver for the Wiring Kit, not the chip itself.',
    contentsLabel: 'Contents',
    routeTitle: 'System Chip craft plan',
    routeSteps: [
      {
        title: 'Solve Silver before blaming the recipe',
        body: 'Wiring Kit is the awkward half of the chip chain, and Wiring Kit means Silver. If your System Chip is blocked, check the Silver route first.',
      },
      {
        title: 'Keep Quartz with electronics',
        body: 'Quartz is easier to overlook because it feels like a glass material. Store a small stack near Copper, Silver, and wiring parts so chip crafts do not send you back out for one loose crystal.',
      },
      {
        title: 'Craft against a named upgrade',
        body: 'Do not turn every Wiring Kit into a System Chip just because the fabricator allows it. Rebreather, Scanner Station, Tadpole, Engine Efficiency, and Depth Module routes compete for the same electronics pile.',
      },
      {
        title: 'Pair it with depth planning',
        body: 'Rebreather and Tadpole Depth Module Mk.1 both pull System Chip into deeper-route planning. That makes this tiny part a gate between ordinary travel and safer deep routes.',
      },
      {
        title: 'Leave a spare if Silver is comfortable',
        body: 'Once your Silver loop is stable, one spare System Chip is useful. Before that, keeping raw Silver and Quartz is more flexible.',
      },
    ],
    tableTitle: 'System Chip checklist',
    tableHeaders: ['Item', 'Why it matters'],
    tableRows: [
      [
        'Wiring Kit',
        'The key crafted input and the reason Silver routes matter.',
      ],
      ['Quartz', 'Easy to forget when you mentally file it under glass.'],
      [
        'Silver route',
        'A repeatable Silver loop keeps electronics from stalling.',
      ],
      [
        'Recipe target',
        'Craft only when Rebreather, Scanner Station, Tadpole, or a module asks for it.',
      ],
      ['Rebreather', 'PC Gamer currently lists System Chip x1 in the craft.'],
      [
        'Depth Module plan',
        'Mk.1 uses System Chip in current Tadpole upgrade reporting.',
      ],
    ],
    visualTitle: 'Electronics chain',
    visualItems: [
      {
        label: 'Mine',
        value: 'Silver',
        note: 'Silver feeds Wiring Kit, the real blocker for many chips.',
      },
      {
        label: 'Add',
        value: 'Quartz',
        note: 'Keep it near electronics, not only glass materials.',
      },
      {
        label: 'Spend',
        value: 'Upgrade',
        note: 'Use chips on named recipes instead of blind stockpiling.',
      },
    ],
    cautionTitle: 'Do not eat your whole Wiring Kit stack',
    cautionBody:
      'A locker full of System Chips feels organized until another recipe asks for Wiring Kit directly. Keep part of the chain raw unless you know the next craft.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you make a System Chip in Subnautica 2?',
        body: 'Current guides list the recipe as Wiring Kit plus Quartz. If it feels blocked, the Silver needed for Wiring Kit is usually the part to fix first.',
      },
      {
        title: 'What is System Chip used for?',
        body: 'Current reporting connects it to Rebreather, Scanner Station, Tadpole, Engine Efficiency, and Tadpole Depth Module Mk.1 chains.',
      },
      {
        title: 'Should I craft System Chips early?',
        body: 'Craft one for a known recipe. Before your Silver route is stable, raw Silver and Wiring Kit are more flexible than a pile of finished chips.',
      },
      {
        title: 'Why does Tadpole Depth Module need System Chip?',
        body: 'It is part of the electronics side of the Mk.1 upgrade chain in current guides, alongside route materials like Celestine and Enameled Glass.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather Guide' },
      { href: Routes.Subnautica2FiberMesh, label: 'Fiber Mesh Guide' },
      {
        href: Routes.Subnautica2ScannerStation,
        label: 'Scanner Station Guide',
      },
      { href: Routes.Subnautica2WiringKit, label: 'Wiring Kit Guide' },
      {
        href: Routes.Subnautica2AdvancedWiringKit,
        label: 'Advanced Wiring Kit Guide',
      },
      { href: Routes.Subnautica2Quartz, label: 'Quartz Location Guide' },
      { href: Routes.Subnautica2Gold, label: 'Gold Location Guide' },
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2Copper, label: 'Copper Location' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
      {
        href: Routes.Subnautica2EngineEfficiency,
        label: 'Engine Efficiency Guide',
      },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Vehicle Guide' },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        label: 'Tadpole Depth Module Guide',
      },
      {
        href: Routes.Subnautica2EnameledGlass,
        label: 'Enameled Glass Guide',
      },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 27, 2026 against current PC Gamer, Dexerto, and Subnautica2.gg System Chip data, plus PC Gamer Silver and Tadpole coverage. Recipe use can change during Early Access patches.',
    cardKicker: 'Electronics card',
    cardBody:
      'Wiring Kit, Quartz, Silver prep, Rebreather, Scanner Station, Tadpole, and Depth Module planning.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Crafting material',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 System Chip 指南 - 配方、Wiring Kit、Quartz 和升级用途',
      description:
        'Subnautica 2 中文 System Chip 指南：整理 Wiring Kit、Quartz、Silver 准备、Rebreather、Scanner Station、Tadpole 和 Tadpole Depth Module 用途。',
    },
    eyebrow: 'Subnautica 2 电子材料',
    title: 'Subnautica 2 System Chip 指南',
    description:
      'System Chip 很小，但很容易卡住一整条升级链。别把它当成随手做的零件，先解决 Silver，再准备 Quartz，最后看哪个升级真正需要它。',
    quickLabel: '快速结论',
    quickAnswer:
      '当前攻略把 System Chip 写成 Wiring Kit + Quartz。真正容易卡住的通常不是芯片本身，而是 Wiring Kit 需要的 Silver。建议等 Rebreather、Scanner Station、Tadpole、Engine Efficiency 或 Tadpole Depth Module Mk.1 明确需要时再制作。',
    contentsLabel: '目录',
    routeTitle: 'System Chip 制作规划',
    routeSteps: [
      {
        title: '先解决 Silver',
        body: 'Wiring Kit 是 System Chip 链里最麻烦的部分，而 Wiring Kit 又会回到 Silver 路线。芯片做不出来时，先别骂配方，去看 Silver 是否稳定。',
      },
      {
        title: 'Quartz 和电子材料放一起',
        body: 'Quartz 很容易被当成玻璃材料丢到另一边。留一小组和 Copper、Silver、Wiring Kit 放在一起，制作芯片时会省很多来回。',
      },
      {
        title: '按明确升级来制作',
        body: 'Fabricator 能做不代表马上要做。Rebreather、Scanner Station、Tadpole、Engine Efficiency 和 Depth Module 都可能抢同一批电子材料。',
      },
      {
        title: '和深度升级一起规划',
        body: '当前 Tadpole Depth Module Mk.1 资料里包含 System Chip。也就是说，这个小零件会卡在普通载具路线和深水路线之间。',
      },
      {
        title: 'Silver 稳定后再留备用',
        body: '当 Silver 路线稳定后，留一个备用 System Chip 很舒服。在那之前，原料状态更灵活。',
      },
    ],
    tableTitle: 'System Chip 检查表',
    tableHeaders: ['项目', '为什么重要'],
    tableRows: [
      ['Wiring Kit', '核心输入材料，也是 Silver 路线重要的原因。'],
      ['Quartz', '容易被放去玻璃箱，制作芯片时才发现少一个。'],
      ['Silver 路线', '稳定 Silver 循环能让电子材料不卡住。'],
      [
        '配方目标',
        '等 Rebreather、Scanner Station、Tadpole 或模块明确需要再做。',
      ],
      ['Depth Module 规划', '当前 Mk.1 升级链会用到 System Chip。'],
    ],
    visualTitle: '电子材料链',
    visualItems: [
      {
        label: '采集',
        value: 'Silver',
        note: 'Silver 支撑 Wiring Kit，是很多芯片的真正卡点。',
      },
      {
        label: '补足',
        value: 'Quartz',
        note: '和电子材料放一起，不要只当玻璃材料。',
      },
      {
        label: '使用',
        value: 'Upgrade',
        note: '按明确配方使用，不要盲目囤成品。',
      },
    ],
    cautionTitle: '别把 Wiring Kit 全吃掉',
    cautionBody:
      '一柜子 System Chip 看起来很整齐，但下一个配方可能直接要 Wiring Kit。除非知道下一步要做什么，否则保留一部分原料更稳。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 System Chip 怎么做？',
        body: '当前攻略写的是 Wiring Kit 加 Quartz。如果做不了，通常先检查 Wiring Kit 需要的 Silver。',
      },
      {
        title: 'System Chip 有什么用？',
        body: '当前资料把它和 Rebreather、Scanner Station、Tadpole、Engine Efficiency、Tadpole Depth Module Mk.1 等制作链联系在一起。',
      },
      {
        title: 'System Chip 要不要前期就囤？',
        body: '不建议大量提前制作。Silver 路线稳定前，保留 Silver 和 Wiring Kit 会更灵活。',
      },
      {
        title: '为什么 Tadpole Depth Module 会需要 System Chip？',
        body: '它属于 Mk.1 升级链里的电子材料部分，和 Celestine、Enameled Glass 这类路线材料一起构成前置需求。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather 指南' },
      { href: Routes.Subnautica2ScannerStation, label: 'Scanner Station 指南' },
      { href: Routes.Subnautica2WiringKit, label: 'Wiring Kit 指南' },
      {
        href: Routes.Subnautica2AdvancedWiringKit,
        label: 'Advanced Wiring Kit 指南',
      },
      { href: Routes.Subnautica2Quartz, label: 'Quartz Location Guide' },
      { href: Routes.Subnautica2Gold, label: 'Gold Location Guide' },
      { href: Routes.Subnautica2Silver, label: 'Silver 位置' },
      { href: Routes.Subnautica2Copper, label: 'Copper 位置' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
      {
        href: Routes.Subnautica2EngineEfficiency,
        label: 'Engine Efficiency 指南',
      },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 载具指南' },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        label: 'Tadpole Depth Module 指南',
      },
      {
        href: Routes.Subnautica2EnameledGlass,
        label: 'Enameled Glass 指南',
      },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 25 日根据 Dexerto 和 Subnautica2.gg 的 System Chip 当前资料，以及 PC Gamer 的 Silver 和 Tadpole 资料整理。抢先体验阶段配方用途可能随补丁变化。',
    cardKicker: '电子材料卡',
    cardBody:
      'Wiring Kit、Quartz、Silver 准备、Rebreather、Scanner Station、Tadpole 和 Depth Module 规划。',
    cardTypeLabel: '类型',
    cardTypeValue: '制作材料',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
  ja: {
    metadata: {
      title:
        'Subnautica 2 System Chip ガイド - レシピ、Wiring Kit、Quartz、アップグレード用途',
      description:
        'Subnautica 2 の System Chip ガイド。Wiring Kit、Quartz、Silver、Rebreather、Scanner Station、Tadpole、Depth Module 用途を整理します。',
    },
    eyebrow: 'Subnautica 2 電子素材',
    title: 'Subnautica 2 System Chip ガイド',
    description:
      'System Chip は小さい素材ですが、アップグレードをよく止めます。先に Silver、次に Quartz、そして本当に必要なレシピだけに使うのが安全です。',
    quickLabel: '要点',
    quickAnswer:
      '現在のガイドでは System Chip は Wiring Kit と Quartz で作ります。詰まりやすいのは、Wiring Kit に必要な Silver です。Rebreather、Scanner Station、Tadpole、Engine Efficiency、Tadpole Depth Module Mk.1 など、必要なレシピが出てから作るのが無難です。',
    contentsLabel: '目次',
    routeTitle: 'System Chip 作成計画',
    routeSteps: [
      {
        title: 'Silver を先に安定させる',
        body: 'System Chip が止まる時は、だいたい Wiring Kit 側です。Wiring Kit は Silver が必要なので、まず Silver ルートを確認します。',
      },
      {
        title: 'Quartz を電子素材の近くに置く',
        body: 'Quartz は Glass 素材として片付けがちです。Copper、Silver、Wiring Kit と近くに置くと、チップ作成が楽になります。',
      },
      {
        title: '必要なレシピが出てから作る',
        body: '作れるから全部作る必要はありません。Rebreather、Scanner Station、Tadpole、Engine Efficiency、Depth Module は同じ電子素材を取り合います。',
      },
      {
        title: '深度アップグレードと一緒に考える',
        body: '現在の Tadpole Depth Module Mk.1 情報には System Chip が含まれます。普通の移動から深海ルートへ進む時の小さなゲートです。',
      },
      {
        title: 'Silver が安定してから予備を作る',
        body: 'Silver ルートが安定したら、予備の System Chip は便利です。それまでは原料のまま保管するほうが柔軟です。',
      },
    ],
    tableTitle: 'System Chip チェック',
    tableHeaders: ['項目', '理由'],
    tableRows: [
      ['Wiring Kit', '中心になる入力素材で、Silver が重要になります。'],
      ['Quartz', 'Glass 箱に入れっぱなしになりやすい素材です。'],
      ['Silver ルート', '電子素材の詰まりを減らします。'],
      [
        'レシピ目標',
        'Rebreather、Scanner Station、Tadpole、Module など必要な時に作ります。',
      ],
      ['Depth Module', '現在の Mk.1 アップグレードチェーンで使われます。'],
    ],
    visualTitle: '電子素材チェーン',
    visualItems: [
      {
        label: '採掘',
        value: 'Silver',
        note: 'Wiring Kit のための本当のボトルネックです。',
      },
      {
        label: '追加',
        value: 'Quartz',
        note: 'Glass だけでなく電子素材側にも置きます。',
      },
      {
        label: '使用',
        value: 'Upgrade',
        note: '必要なレシピに合わせて使います。',
      },
    ],
    cautionTitle: 'Wiring Kit を全部チップにしない',
    cautionBody:
      'System Chip を作り置きしすぎると、次のレシピが Wiring Kit を直接要求した時に困ります。次のクラフトが見えるまでは原料も残しましょう。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'System Chip はどう作る？',
        body: '現在の情報では Wiring Kit と Quartz で作ります。止まる場合は Silver ルートを見直します。',
      },
      {
        title: '何に使う？',
        body: 'Rebreather、Scanner Station、Tadpole、Engine Efficiency、Tadpole Depth Module Mk.1 などに関わります。',
      },
      {
        title: '早めに作り置きすべき？',
        body: '大量の作り置きは不要です。Silver が安定するまでは、原料のまま持つほうが使いやすいです。',
      },
      {
        title: 'Depth Module との関係は？',
        body: 'Mk.1 の電子素材側に含まれます。Celestine や Enameled Glass と合わせて準備します。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather Guide' },
      {
        href: Routes.Subnautica2ScannerStation,
        label: 'Scanner Station Guide',
      },
      { href: Routes.Subnautica2WiringKit, label: 'Wiring Kit ガイド' },
      {
        href: Routes.Subnautica2AdvancedWiringKit,
        label: 'Advanced Wiring Kit Guide',
      },
      { href: Routes.Subnautica2Quartz, label: 'Quartz Location Guide' },
      { href: Routes.Subnautica2Gold, label: 'Gold Location Guide' },
      { href: Routes.Subnautica2Silver, label: 'Silver の場所' },
      { href: Routes.Subnautica2Copper, label: 'Copper の場所' },
      { href: Routes.Subnautica2Crafting, label: 'クラフトガイド' },
      {
        href: Routes.Subnautica2EngineEfficiency,
        label: 'Engine Efficiency Guide',
      },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole ガイド' },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        label: 'Tadpole Depth Module ガイド',
      },
      {
        href: Routes.Subnautica2EnameledGlass,
        label: 'Enameled Glass ガイド',
      },
    ],
    sourcesTitle: 'ソースメモ',
    sourceBody:
      '2026年5月25日に Dexerto と Subnautica2.gg の System Chip 情報、PC Gamer の Silver / Tadpole 情報を確認しました。Early Access 中は用途やレシピが変わる可能性があります。',
    cardKicker: '電子素材カード',
    cardBody:
      'Wiring Kit、Quartz、Silver、Rebreather、Scanner Station、Tadpole、Depth Module の準備。',
    cardTypeLabel: '種類',
    cardTypeValue: 'クラフト素材',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: '状態',
    cardStatusValue: 'Early Access',
  },
};

systemChipCopy.zh = {
  ...systemChipCopy.zh,
  quickAnswer:
    '当前攻略把 System Chip 写成 Wiring Kit + Quartz。PC Gamer 当前把 System Chip x1 列进 Rebreather 配方，Tadpole 和深度模块路线也会吃到它。真正容易卡的通常不是芯片本身，而是 Wiring Kit 需要的 Silver。',
  related: [
    { href: Routes.Subnautica2Rebreather, label: 'Rebreather 指南' },
    { href: Routes.Subnautica2FiberMesh, label: 'Fiber Mesh 指南' },
    { href: Routes.Subnautica2WiringKit, label: 'Wiring Kit 指南' },
    { href: Routes.Subnautica2Quartz, label: 'Quartz 位置指南' },
    { href: Routes.Subnautica2Silver, label: 'Silver 位置' },
    {
      href: Routes.Subnautica2TadpoleDepthModule,
      label: 'Tadpole Depth Module 指南',
    },
  ],
  sourceBody:
    '2026 年 5 月 27 日核对 PC Gamer、Dexerto、Subnautica2.gg 的 System Chip 资料，以及 PC Gamer 的 Silver 和 Tadpole 报道。抢先体验阶段用途可能随补丁变化。',
};

systemChipCopy.ja = {
  ...systemChipCopy.en,
  sourceBody:
    'Checked May 27, 2026 against current PC Gamer, Dexerto, and Subnautica2.gg System Chip data, plus PC Gamer Silver and Tadpole coverage.',
};

const fallbackLocaleAliases = {
  de: {
    title: 'Subnautica 2 System Chip Guide',
    description:
      'Guide for System Chip recipe, Wiring Kit, Quartz, Silver prep, Tadpole, and Depth Module use.',
  },
  fr: {
    title: 'Subnautica 2 System Chip Guide',
    description:
      'Guide System Chip: Wiring Kit, Quartz, Silver, Tadpole et Tadpole Depth Module.',
  },
  'pt-BR': {
    title: 'Subnautica 2 System Chip Guide',
    description:
      'Guia de System Chip com Wiring Kit, Quartz, Silver, Tadpole e Depth Module.',
  },
  'es-419': {
    title: 'Subnautica 2 System Chip Guide',
    description:
      'Guia de System Chip: Wiring Kit, Quartz, Silver, Tadpole y Depth Module.',
  },
  ko: {
    title: 'Subnautica 2 System Chip Guide',
    description:
      'System Chip recipe, Wiring Kit, Quartz, Silver prep, Tadpole, and Depth Module use.',
  },
  ru: {
    title: 'Subnautica 2 System Chip Guide',
    description:
      'Guide for System Chip recipe, Wiring Kit, Quartz, Silver prep, Tadpole, and Depth Module use.',
  },
} satisfies Record<string, { title: string; description: string }>;

function getCopy(locale: Locale): SystemChipCopy {
  if (systemChipCopy[locale]) {
    return systemChipCopy[locale];
  }

  const fallback =
    fallbackLocaleAliases[locale as keyof typeof fallbackLocaleAliases] ??
    fallbackLocaleAliases.de;

  return {
    ...systemChipCopy.en,
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
    pathname: Routes.Subnautica2SystemChip,
  });
}

export default async function SystemChipPage({
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
      icon={CpuIcon}
      locale={locale}
      pathname={Routes.Subnautica2SystemChip}
      sources={sharedSources}
    />
  );
}
