import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { LeafIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type AcidicRaionPouchCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-25';
const UPDATED_AT = '2026-05-27';

const sharedSources = [
  {
    href: 'https://subnautica2.gg/items/acidic-raion-pouch',
    label: 'Subnautica2.gg Acidic Raion Pouch item',
  },
  {
    href: 'https://subnautica2hub.com/resources/acidic-raion-pouch',
    label: 'Subnautica2Hub Acidic Raion Pouch resource',
  },
  {
    href: 'https://subnautica2.gg/creatures/acid-raion',
    label: 'Subnautica2.gg Acid Raion databank',
  },
];

const acidicRaionPouchCopy: Record<string, AcidicRaionPouchCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Acidic Raion Pouch Guide - Location, Harvest, and Uses',
      description:
        'A practical Subnautica 2 Acidic Raion Pouch guide covering Coral Gardens, harvest notes, Basic Battery, Mild Acid, and Early Access data gaps.',
    },
    eyebrow: 'Subnautica 2 battery material',
    title: 'Subnautica 2 Acidic Raion Pouch Guide',
    description:
      'Acidic Raion Pouch is the part that makes the early battery route feel less obvious than it should. Copper is easy to remember. This pouch is the thing you forget, then the Scanner, Mild Acid, and Processor plans wait.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current Subnautica2Hub data lists Acidic Raion Pouch as a harvest raw resource found in Coral Gardens. Current item data connects it to Basic Battery x1, Mild Acid x2 at the Fabricator, and Mild Acid x2 at a Processor. That Mild Acid route leads into Biolab, Processor, and Strong Acid planning. The same data does not provide stable spawn coordinates yet, so treat exact pouch routes as patch-sensitive until the map data fills in.',
    contentsLabel: 'Contents',
    routeTitle: 'Acidic Raion Pouch route',
    routeSteps: [
      {
        title: 'Use Coral Gardens as the starting call',
        body: 'Subnautica2Hub currently points Acidic Raion Pouch to Coral Gardens. That is the best public breadcrumb right now; do not trust random exact coordinates unless they were checked after the latest patch.',
      },
      {
        title: 'Look for the Acid Raion source',
        body: 'The item is tied to Acid Raion, described as a colony inside a shared membrane. The databank text talks about pressurized acid, so approach it like a harvest material rather than loose floor loot.',
      },
      {
        title: 'Bring it home for Basic Battery first',
        body: 'The first strong use is Basic Battery. If you are doing the Scanner or early tool route, one pouch plus two Copper gets the battery chain moving.',
      },
      {
        title: 'Save extra pouches for Mild Acid',
        body: 'Current data also lists Mild Acid at both Fabricator and Processor routes using Acidic Raion Pouch x2. Do not turn every pouch into batteries if Biolab, Processor, Strong Acid, or deeper equipment crafting is next.',
      },
      {
        title: 'Write down the room, not just the biome',
        body: 'Until spawn data is cleaner, the useful note is your own path: entrance, depth, nearby landmark, and the way back. That beats trying to remember "somewhere in Coral Gardens" later.',
      },
    ],
    tableTitle: 'Acidic Raion Pouch checklist',
    tableHeaders: ['Need', 'What to check'],
    tableRows: [
      ['Biome lead', 'Subnautica2Hub currently lists Coral Gardens.'],
      ['Obtain method', 'Harvest, not a default loose mineral pickup.'],
      ['Basic Battery', 'Uses Acidic Raion Pouch x1 with Copper x2.'],
      ['Mild Acid', 'Current data lists Acidic Raion Pouch x2.'],
      [
        'Follow-up crafts',
        'Mild Acid points toward Biolab, Processor, and later Strong Acid planning.',
      ],
      [
        'Map confidence',
        'Public data currently has no stable spawn-coordinate list.',
      ],
    ],
    visualTitle: 'Pouch chain',
    visualItems: [
      {
        label: 'Find',
        value: 'Coral Gardens',
        note: 'Best current public biome lead.',
      },
      {
        label: 'Harvest',
        value: 'Pouch',
        note: 'Treat it as an Acid Raion material.',
      },
      {
        label: 'Craft',
        value: 'Battery',
        note: 'Then decide whether extras become Mild Acid.',
      },
    ],
    cautionTitle: 'Do not overpromise exact locations yet',
    cautionBody:
      'The current public databases agree on the item and its uses, but exact spawn data is still thin. This page will be safer if it points players to the biome and the harvest target, then gets refined when better map data appears.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Where do you find Acidic Raion Pouch in Subnautica 2?',
        body: 'Subnautica2Hub currently lists Acidic Raion Pouch as found in Coral Gardens and obtained by harvest.',
      },
      {
        title: 'What is Acidic Raion Pouch used for?',
        body: 'Current data lists it for Basic Battery, Mild Acid at the Fabricator, and Mild Acid at a Processor. Mild Acid then gates Biolab, Processor, and the Strong Acid route.',
      },
      {
        title: 'How many Acidic Raion Pouches does Basic Battery need?',
        body: 'Basic Battery currently uses Acidic Raion Pouch x1 plus Copper x2.',
      },
      {
        title: 'Are there exact Acidic Raion Pouch coordinates?',
        body: 'Not from the public data checked here. Subnautica2Hub lists Coral Gardens but also shows no known spawn-coordinate list, so exact routes should be rechecked after patches.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery Guide' },
      { href: Routes.Subnautica2MildAcid, label: 'Mild Acid Guide' },
      { href: Routes.Subnautica2Processor, label: 'Processor Guide' },
      { href: Routes.Subnautica2Biolab, label: 'Biolab Guide' },
      { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid Guide' },
      { href: Routes.Subnautica2Copper, label: 'Copper Location' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
      { href: Routes.Subnautica2Biomes, label: 'Biomes Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 27, 2026 against Subnautica2.gg item and Acid Raion databank pages plus Subnautica2Hub resource data. Exact spawns, harvest behavior, and crafting uses can change during Early Access patches.',
    cardKicker: 'Harvest card',
    cardBody:
      'Coral Gardens lead, harvest notes, Basic Battery use, Mild Acid use, and map-data caveat.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Resource guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Acidic Raion Pouch 指南 - 位置、采集和用途',
      description:
        'Subnautica 2 中文 Acidic Raion Pouch 指南：整理 Coral Gardens、采集方式、Basic Battery、Mild Acid 和抢先体验数据空缺。',
    },
    eyebrow: 'Subnautica 2 电池材料',
    title: 'Subnautica 2 Acidic Raion Pouch 指南',
    description:
      'Acidic Raion Pouch 是早期电池路线里最容易漏掉的那一块。Copper 你大概率记得拿，真正卡住 Scanner 的，常常是这只酸性 pouch。',
    quickLabel: '快速结论',
    quickAnswer:
      'Subnautica2Hub 当前把 Acidic Raion Pouch 写成可 harvest 的 raw resource，地点线索是 Coral Gardens。当前物品数据把它用于 Basic Battery x1、Fabricator 里的 Mild Acid x2，以及 Processor 里的 Mild Acid x2。公开数据暂时没有稳定坐标列表，所以具体路线要按补丁后数据重新核对。',
    contentsLabel: '目录',
    routeTitle: 'Acidic Raion Pouch 路线',
    routeSteps: [
      {
        title: '先把 Coral Gardens 当起点',
        body: 'Subnautica2Hub 当前给出的地点线索是 Coral Gardens。这是目前比较稳的公开线索；网上零散坐标如果没有补丁后核对，不要直接照抄。',
      },
      {
        title: '找 Acid Raion 来源',
        body: '这个材料和 Acid Raion 相关。databank 描述里提到共享膜、虫群和加压酸液，所以把它当成需要采集的生物材料，不要按普通矿物来找。',
      },
      {
        title: '第一份优先给 Basic Battery',
        body: '早期最直接的用途是 Basic Battery。Scanner 和早期工具路线里，一份 pouch 加两块 Copper 就能把电池链跑起来。',
      },
      {
        title: '多出来的留给 Mild Acid',
        body: '当前资料还把 Acidic Raion Pouch x2 写进 Mild Acid 的 Fabricator 和 Processor 路线。后面要做化学材料时，别把所有 pouch 都做成电池。',
      },
      {
        title: '记房间路线，不只记生物群系',
        body: '在坐标数据更完整之前，自己记一条路线更有用：入口、深度、旁边的地标、怎么回去。只记 Coral Gardens 很容易下一趟又迷路。',
      },
    ],
    tableTitle: 'Acidic Raion Pouch 检查表',
    tableHeaders: ['要点', '检查什么'],
    tableRows: [
      ['地点线索', 'Subnautica2Hub 当前写的是 Coral Gardens。'],
      ['获取方式', 'Harvest，不是默认散落矿物。'],
      ['Basic Battery', '当前配方用 Acidic Raion Pouch x1 和 Copper x2。'],
      ['Mild Acid', '当前资料写的是 Acidic Raion Pouch x2。'],
      ['地图可信度', '公开数据暂时没有稳定坐标列表。'],
    ],
    visualTitle: 'Pouch 链路',
    visualItems: [
      {
        label: '寻找',
        value: 'Coral Gardens',
        note: '目前最明确的公开生物群系线索。',
      },
      {
        label: '采集',
        value: 'Pouch',
        note: '按 Acid Raion 材料处理。',
      },
      {
        label: '制作',
        value: 'Battery',
        note: '多余的再考虑 Mild Acid。',
      },
    ],
    cautionTitle: '现在别把精确坐标写死',
    cautionBody:
      '当前公开数据库能确认物品和用途，但坐标数据还不够完整。先把玩家带到生物群系和采集目标，等更可靠的地图数据出来后再细化路线。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Acidic Raion Pouch 在哪里找？',
        body: 'Subnautica2Hub 当前写的是 Coral Gardens，通过 harvest 获得。',
      },
      {
        title: 'Acidic Raion Pouch 有什么用？',
        body: '当前资料把它用于 Basic Battery、Fabricator 里的 Mild Acid，以及 Processor 里的 Mild Acid。',
      },
      {
        title: 'Basic Battery 需要几个 Acidic Raion Pouch？',
        body: '当前 Basic Battery 配方需要 Acidic Raion Pouch x1 和 Copper x2。',
      },
      {
        title: '有没有精确坐标？',
        body: '这次核对的公开数据没有稳定坐标列表。Subnautica2Hub 写了 Coral Gardens，但具体刷新点还应该等补丁后地图数据更新。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery 指南' },
      { href: Routes.Subnautica2MildAcid, label: 'Mild Acid 指南' },
      { href: Routes.Subnautica2Copper, label: 'Copper 位置' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner 指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
      { href: Routes.Subnautica2Biomes, label: '生物群系指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 25 日核对 Subnautica2.gg 的物品页、Acid Raion databank，以及 Subnautica2Hub 的资源页。抢先体验期间，刷新位置、采集方式和用途都可能随补丁变化。',
    cardKicker: '采集卡片',
    cardBody:
      'Coral Gardens 线索、采集说明、Basic Battery 用途、Mild Acid 用途和地图数据提醒。',
    cardTypeLabel: '类型',
    cardTypeValue: '资源指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: 'Early Access',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 Acidic Raion Pouch Guide - 場所、採取、使い道',
      description:
        'Subnautica 2 の Acidic Raion Pouch ガイド。Coral Gardens、採取、Basic Battery、Mild Acid、Early Access のデータ不足を整理します。',
    },
    eyebrow: 'Subnautica 2 battery material',
    title: 'Subnautica 2 Acidic Raion Pouch Guide',
    description:
      'Acidic Raion Pouch は序盤 battery ルートで忘れやすい素材です。Copper は覚えていても、この pouch がなくて Scanner が止まることがあります。',
    quickLabel: '要点',
    quickAnswer:
      'Subnautica2Hub は現在、Acidic Raion Pouch を Coral Gardens で harvest する raw resource と記載しています。現在のアイテム情報では、Basic Battery x1、Fabricator の Mild Acid x2、Processor の Mild Acid x2 に使います。安定した座標リストはまだ出ていないため、具体ルートはパッチ後に確認してください。',
    contentsLabel: '目次',
    routeTitle: 'Acidic Raion Pouch ルート',
    routeSteps: [
      {
        title: 'Coral Gardens を起点にする',
        body: 'Subnautica2Hub の現在の手がかりは Coral Gardens です。細かい座標メモは、最新パッチ後に確認されたものだけ信用するほうが安全です。',
      },
      {
        title: 'Acid Raion を探す',
        body: 'この素材は Acid Raion に関係します。databank では共有膜、虫の群体、加圧された酸が説明されているので、床に落ちた鉱石ではなく harvest 素材として見ます。',
      },
      {
        title: '最初は Basic Battery に使う',
        body: '序盤で一番分かりやすい使い道は Basic Battery です。pouch 1 個と Copper 2 個で Scanner 用の battery ルートが進みます。',
      },
      {
        title: '余りは Mild Acid 用に残す',
        body: '現在の情報では Mild Acid の Fabricator ルートと Processor ルートにも Acidic Raion Pouch x2 が入っています。全部 battery にしないほうが後で楽です。',
      },
      {
        title: '部屋までの道をメモする',
        body: '座標データが弱い間は、自分のルートメモが役に立ちます。入口、深度、近くの目印、帰り道まで書いておくと再訪問しやすいです。',
      },
    ],
    tableTitle: 'Acidic Raion Pouch チェックリスト',
    tableHeaders: ['確認するもの', 'メモ'],
    tableRows: [
      ['Biome lead', 'Subnautica2Hub は現在 Coral Gardens と記載。'],
      ['Obtain method', 'Harvest。通常の鉱物拾いとは違います。'],
      ['Basic Battery', 'Acidic Raion Pouch x1 と Copper x2。'],
      ['Mild Acid', '現在の情報では Acidic Raion Pouch x2。'],
      ['Map confidence', '安定した座標リストはまだありません。'],
    ],
    visualTitle: 'Pouch chain',
    visualItems: [
      {
        label: 'Find',
        value: 'Coral Gardens',
        note: '現在の公開データで一番使える biome 情報。',
      },
      {
        label: 'Harvest',
        value: 'Pouch',
        note: 'Acid Raion 素材として扱います。',
      },
      {
        label: 'Craft',
        value: 'Battery',
        note: '余りは Mild Acid に残します。',
      },
    ],
    cautionTitle: '今は正確な座標を書き切らない',
    cautionBody:
      '公開データで確認できるのは item、用途、biome の手がかりまでです。座標が出そろうまでは、Coral Gardens と harvest 対象を中心にして、後からルートを更新するのが安全です。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 の Acidic Raion Pouch はどこ？',
        body: 'Subnautica2Hub は現在 Coral Gardens で harvest と記載しています。',
      },
      {
        title: 'Acidic Raion Pouch の使い道は？',
        body: '現在の情報では Basic Battery、Fabricator の Mild Acid、Processor の Mild Acid に使います。',
      },
      {
        title: 'Basic Battery に何個必要？',
        body: '現在の Basic Battery は Acidic Raion Pouch x1 と Copper x2 です。',
      },
      {
        title: '正確な座標はありますか？',
        body: '今回確認した公開データには安定した座標リストがありません。Coral Gardens という手がかりを使い、パッチ後に再確認してください。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery Guide' },
      { href: Routes.Subnautica2MildAcid, label: 'Mild Acid Guide' },
      { href: Routes.Subnautica2Copper, label: 'Copper の場所' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner ガイド' },
      { href: Routes.Subnautica2Resources, label: '資源ガイド' },
      { href: Routes.Subnautica2Crafting, label: 'クラフトガイド' },
      { href: Routes.Subnautica2Biomes, label: 'Biomes Guide' },
    ],
    sourcesTitle: 'ソースメモ',
    sourceBody:
      '2026年5月25日に Subnautica2.gg の item、Acid Raion databank、Subnautica2Hub の resource 情報を確認しました。Early Access 中は spawn、harvest、crafting uses が変わる可能性があります。',
    cardKicker: 'Harvest card',
    cardBody:
      'Coral Gardens、harvest、Basic Battery、Mild Acid、map data caveat。',
    cardTypeLabel: '種類',
    cardTypeValue: 'リソースガイド',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: '状態',
    cardStatusValue: 'Early Access',
  },
};

acidicRaionPouchCopy.zh = {
  ...acidicRaionPouchCopy.zh,
  quickAnswer:
    'Subnautica2Hub 当前把 Acidic Raion Pouch 写成可 harvest 的 raw resource，地点线索是 Coral Gardens。当前物品数据把它用于 Basic Battery x1、Fabricator 里的 Mild Acid x2，以及 Processor 里的 Mild Acid x2。Mild Acid 又会接到 Biolab、Processor 和 Strong Acid，所以这不是只给早期电池用的一次性材料。公开数据暂时没有稳定坐标列表，具体路线要按补丁后数据重新核对。',
  routeSteps: [
    ...acidicRaionPouchCopy.zh.routeSteps.slice(0, 3),
    {
      title: '多出来的留给 Mild Acid',
      body: '当前资料把 Acidic Raion Pouch x2 写进 Mild Acid 的 Fabricator 和 Processor 路线。后面要做 Biolab、Processor、Strong Acid 或深潜装备时，别把所有 pouch 都做成电池。',
    },
    {
      title: '记房间路线，不只记生物群系',
      body: '在坐标数据更完整之前，自己记一条路线更有用：入口、深度、附近地标、怎么回去。只记 Coral Gardens，很容易下一趟又迷路。',
    },
  ],
  tableRows: [
    ...acidicRaionPouchCopy.zh.tableRows,
    ['后续制作', 'Mild Acid 会接到 Biolab、Processor 和 Strong Acid。'],
  ],
  related: [
    { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery 指南' },
    { href: Routes.Subnautica2MildAcid, label: 'Mild Acid 指南' },
    { href: Routes.Subnautica2Processor, label: 'Processor 指南' },
    { href: Routes.Subnautica2Biolab, label: 'Biolab 指南' },
    { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid 指南' },
    { href: Routes.Subnautica2Copper, label: 'Copper 位置' },
    { href: Routes.Subnautica2Scanner, label: 'Scanner 指南' },
    { href: Routes.Subnautica2Crafting, label: '制作指南' },
  ],
  sourceBody:
    '2026 年 5 月 27 日核对 Subnautica2.gg 的物品页、Acid Raion databank，以及 Subnautica2Hub 的资源页。抢先体验期间，刷新位置、采集方式和用途都可能随补丁变化。',
};

acidicRaionPouchCopy.ja = {
  ...acidicRaionPouchCopy.en,
  metadata: {
    title: 'Subnautica 2 Acidic Raion Pouch Guide',
    description:
      'Guide for Acidic Raion Pouch location, Coral Gardens, harvest route, Basic Battery, Mild Acid, Processor, and Strong Acid planning.',
  },
  sourceBody:
    'Checked May 27, 2026 against Subnautica2.gg item and Acid Raion databank pages plus Subnautica2Hub resource data. Early Access spawn and crafting data can change.',
};

const fallbackLocaleAliases = {
  de: {
    title: 'Subnautica 2 Acidic Raion Pouch Guide',
    description:
      'Guide for Acidic Raion Pouch location, Coral Gardens, harvest route, Basic Battery, and Mild Acid.',
  },
  fr: {
    title: 'Subnautica 2 Acidic Raion Pouch Guide',
    description:
      'Guide Acidic Raion Pouch: Coral Gardens, harvest, Basic Battery et Mild Acid.',
  },
  'pt-BR': {
    title: 'Subnautica 2 Acidic Raion Pouch Guide',
    description:
      'Guia de Acidic Raion Pouch com Coral Gardens, harvest, Basic Battery e Mild Acid.',
  },
  'es-419': {
    title: 'Subnautica 2 Acidic Raion Pouch Guide',
    description:
      'Guia de Acidic Raion Pouch: Coral Gardens, harvest, Basic Battery y Mild Acid.',
  },
  ko: {
    title: 'Subnautica 2 Acidic Raion Pouch Guide',
    description:
      'Acidic Raion Pouch location, Coral Gardens, harvest route, Basic Battery, and Mild Acid.',
  },
  ru: {
    title: 'Subnautica 2 Acidic Raion Pouch Guide',
    description:
      'Guide for Acidic Raion Pouch location, Coral Gardens, harvest route, Basic Battery, and Mild Acid.',
  },
} satisfies Record<string, { title: string; description: string }>;

function getCopy(locale: Locale): AcidicRaionPouchCopy {
  if (acidicRaionPouchCopy[locale]) {
    return acidicRaionPouchCopy[locale];
  }

  const fallback =
    fallbackLocaleAliases[locale as keyof typeof fallbackLocaleAliases] ??
    fallbackLocaleAliases.de;

  return {
    ...acidicRaionPouchCopy.en,
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
    pathname: Routes.Subnautica2AcidicRaionPouch,
  });
}

export default async function AcidicRaionPouchPage({
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
      icon={LeafIcon}
      locale={locale}
      pathname={Routes.Subnautica2AcidicRaionPouch}
      sources={sharedSources}
    />
  );
}
