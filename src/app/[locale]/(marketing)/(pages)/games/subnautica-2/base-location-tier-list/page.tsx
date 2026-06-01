import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { MapPinIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type BaseTierCopy = ResourceGuideCopy & {
  metadata: { title: string; description: string };
};

const PUBLISHED_AT = '2026-06-01';
const UPDATED_AT = '2026-06-01';

const sources = [
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-2',
    label: 'Unknown Worlds Hotfix 2',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap',
    label: 'Unknown Worlds Early Access roadmap',
  },
  {
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/',
    label: 'Official Steam page',
  },
  {
    href: 'https://www.youtube.com/watch?v=6t2nDHldoSk',
    label: 'Official Subnautica 2 gameplay trailer',
  },
];

const copyByLocale: Record<string, BaseTierCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Base Location Tier List: Safe, Useful, and Risky Spots',
      description:
        'A Subnautica 2 base location tier list for Early Access players comparing safety, resources, Tadpole access, creature risk, and map route value.',
    },
    eyebrow: 'Subnautica 2 base locations',
    title:
      'Subnautica 2 Base Location Tier List: What Makes a Spot Worth Keeping',
    description:
      'A good base is not just pretty. It needs a safe return path, nearby materials, vehicle access, and low creature trouble. In Early Access, it also needs to survive patch changes.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Use tiers based on function, not exact coordinates: S-tier bases are safe, easy to return to, near early materials, and friendly to Tadpole routes. A-tier spots are strong but need one workaround. B-tier spots are temporary. Risk-tier spots look exciting but pull too much danger, depth pressure, or travel time into normal play.',
    fieldNotesTitle: 'Base tiers that actually help',
    fieldNotes: [
      {
        title: 'Safety beats drama',
        body: 'A dangerous scenic base is fun once. A safe base with clean return paths gets used every session.',
      },
      {
        title: 'Vehicles change the ranking',
        body: 'Once Tadpole routes enter the plan, docking, approach lanes, and light-related creature behavior matter more.',
      },
      {
        title: 'Patch notes can move a spot',
        body: 'Hotfix 2 touched creature behavior near Tadpole lights and base-following problems. That is enough reason to keep tiers flexible.',
      },
    ],
    routeChecklistTitle: 'Ranking checklist',
    routeChecklist: [
      'Can a new player find the base again without panic?',
      'Are silver, copper, titanium, and oxygen routes nearby?',
      'Can a Tadpole approach without dragging danger home?',
      'Is there room for power, storage, and future modules?',
      'Would a patch or biome update likely change the ranking?',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to rank a Subnautica 2 base spot',
    routeSteps: [
      {
        title: 'Start with the return path',
        body: 'The best base location is useless if players get lost or run out of oxygen trying to return to it.',
      },
      {
        title: 'Check material loops',
        body: 'A strong base keeps common materials close enough that early crafting does not become a commute.',
      },
      {
        title: 'Test vehicle approach',
        body: 'If the Tadpole route is awkward, dangerous, or creature-heavy, the base loses value even if the view is good.',
      },
      {
        title: 'Leave room for the roadmap',
        body: 'Early Access bases should not be ranked as permanent forever. Roadmap updates, vehicles, and biome changes can shift what feels central.',
      },
    ],
    tableTitle: 'Base location tiers',
    tableHeaders: ['Tier', 'How to use it'],
    tableRows: [
      [
        'S-tier',
        'Safe return, nearby starter materials, simple vehicle approach, and room to expand.',
      ],
      [
        'A-tier',
        'Strong location with one manageable drawback, such as distance, power setup, or creature patrols.',
      ],
      [
        'B-tier',
        'Good temporary base, scanner stop, or resource outpost, but weak as a main home.',
      ],
      [
        'Risk-tier',
        'Looks exciting but adds too much depth, danger, or travel time for normal routes.',
      ],
      [
        'Patch-watch',
        'Any spot affected by creature behavior, vehicle bugs, or roadmap biome changes.',
      ],
    ],
    visualTitle: 'Base score card',
    visualItems: [
      {
        label: 'Best trait',
        value: 'Return path',
        note: 'If you can always get home, the base works.',
      },
      {
        label: 'Vehicle check',
        value: 'Tadpole',
        note: 'Approach lanes and docking matter after early game.',
      },
      {
        label: 'Risk',
        value: 'Creature pull',
        note: 'Do not turn your base into a danger magnet.',
      },
    ],
    cautionTitle: 'Do not rank bases by looks alone',
    cautionBody:
      'A beautiful spot can still be a bad main base if every trip home is tense. The tier list should reward repeatable routes, not screenshots.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'What is the best Subnautica 2 base location?',
        body: 'The best early base is the one with a clear return path, useful nearby materials, room to expand, and a safe vehicle approach.',
      },
      {
        title: 'Should I build near dangerous creatures?',
        body: 'Not for a main base. Use risky areas as temporary scanner or resource stops unless you have a very clear route plan.',
      },
      {
        title: 'Does Tadpole access affect base ranking?',
        body: 'Yes. Vehicle approach, docking, and creature behavior around Tadpole routes can change whether a base feels good.',
      },
      {
        title: 'Will base rankings change?',
        body: 'They can. Early Access patches, roadmap content, and behavior fixes can all change which spots feel safest or most central.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2BestBaseLocations,
        label: 'Best Base Locations',
      },
      { href: Routes.Subnautica2BaseBuilding, label: 'Base Building' },
      { href: Routes.Subnautica2Vehicles, label: 'Vehicles Guide' },
      {
        href: Routes.Subnautica2CreaturesLeviathans,
        label: 'Creatures and Leviathans',
      },
      { href: Routes.Subnautica2MapSizeBiomes, label: 'Map Size and Biomes' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 1, 2026 against Hotfix 2, the Early Access roadmap, Steam, and the official trailer. The page image is Abyss Guides original art; video is the official Subnautica embed.',
    cardKicker: 'Base ranking',
    cardBody:
      'A practical base-location tier page for safety, materials, vehicle access, and creature risk.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Base guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Best metric',
    cardStatusValue: 'Return path',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 基地位置梯度：安全、资源、载具和风险怎么排',
      description:
        'Subnautica 2 基地位置梯度中文指南：按安全性、资源、Tadpole 路线、生物风险和地图价值排序。',
    },
    eyebrow: 'Subnautica 2 基地位置',
    title: 'Subnautica 2 基地位置梯度：什么地方值得长期保留',
    description:
      '好基地不只是好看。它要有安全回程、附近材料、载具入口和低生物麻烦。抢先体验阶段，还要能适应补丁变化。',
    quickLabel: '快速结论',
    quickAnswer:
      '按功能分层，不按没来源的精确坐标分层：S 级基地安全、容易回去、靠近早期材料，并适合 Tadpole 路线。A 级很强但有一个可处理缺点。B 级适合临时基地。风险级看起来刺激，但把危险、深度压力或路程拉得太长。',
    fieldNotesTitle: '有用的基地分层',
    fieldNotes: [
      {
        title: '安全比风景重要',
        body: '危险风景基地可能拍照好看，但安全回家的基地才会每天用。',
      },
      {
        title: '载具会改变排名',
        body: '有 Tadpole 后，停靠、进出路线和生物被灯光吸引的问题会更重要。',
      },
      {
        title: '补丁会改变位置价值',
        body: 'Hotfix 2 调整了 Tadpole 灯光相关生物行为，所以梯度要保留弹性。',
      },
    ],
    routeChecklistTitle: '排名检查',
    routeChecklist: [
      '新玩家能不能不慌地找回基地？',
      '银、铜、钛和氧气路线近不近？',
      'Tadpole 能不能安全靠近？',
      '有没有空间放电力、储物和未来模块？',
      '补丁或生态区更新会不会改变排名？',
    ],
    contentsLabel: '目录',
    routeTitle: '基地位置怎么分层',
    routeSteps: [
      {
        title: '先看回程路线',
        body: '如果玩家每次回家都迷路或缺氧，再好看的地方也不适合做主基地。',
      },
      {
        title: '看材料循环',
        body: '好基地要让常用材料足够近，不要把早期制作变成通勤。',
      },
      {
        title: '测试载具靠近',
        body: 'Tadpole 路线如果危险、绕路或容易引怪，基地价值就会下降。',
      },
      {
        title: '给路线图留空间',
        body: '抢先体验基地不要写死永久最优。路线图、载具和生态区变化都会影响中心位置。',
      },
    ],
    tableTitle: '基地位置梯度',
    tableHeaders: ['等级', '怎么用'],
    tableRows: [
      ['S 级', '安全回程、附近材料、载具好靠近，并且有扩展空间。'],
      ['A 级', '很强，但有一个可处理缺点，比如距离、电力或生物巡逻。'],
      ['B 级', '适合临时基地、扫描点或资源前哨，不适合长期主基地。'],
      ['风险级', '看起来刺激，但深度、危险或通勤时间太高。'],
      ['补丁观察', '受生物行为、载具问题或生态区变化影响的位置。'],
    ],
    visualTitle: '基地评分卡',
    visualItems: [
      {
        label: '最好指标',
        value: '回程路线',
        note: '能稳定回家，基地才算好用。',
      },
      { label: '载具检查', value: 'Tadpole', note: '中后期要看靠近和停靠。' },
      { label: '风险', value: '引怪', note: '不要把基地变成危险聚点。' },
    ],
    cautionTitle: '不要只按风景给基地排名',
    cautionBody:
      '漂亮地点不一定适合主基地。如果每次回家都紧张，就算不上 S 级。梯度应该奖励可重复路线，而不是截图。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 最好的基地位置是什么？',
        body: '早期最好的基地要有清楚回程、附近材料、扩展空间和安全载具入口。',
      },
      {
        title: '能建在危险生物附近吗？',
        body: '主基地不建议。危险区更适合做临时扫描点或资源前哨。',
      },
      {
        title: 'Tadpole 会影响基地排名吗？',
        body: '会。载具靠近、停靠和生物行为都会改变基地手感。',
      },
      {
        title: '基地排名会变吗？',
        body: '会。抢先体验补丁、路线图内容和行为修复都会改变位置价值。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2BestBaseLocations, label: '最佳建家点' },
      { href: Routes.Subnautica2BaseBuilding, label: '基地建造' },
      { href: Routes.Subnautica2Vehicles, label: '载具指南' },
      { href: Routes.Subnautica2CreaturesLeviathans, label: '生物和利维坦' },
      { href: Routes.Subnautica2MapSizeBiomes, label: '地图大小和生态区' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 1 日核对 Hotfix 2、抢先体验路线图、Steam 和官方预告。图片为 Abyss Guides 原创图，视频为 Subnautica 官方嵌入。',
    cardKicker: '基地排名',
    cardBody: '按安全、资源、载具入口和生物风险整理的实用基地梯度页。',
    cardTypeLabel: '类型',
    cardTypeValue: '基地指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '最佳指标',
    cardStatusValue: '回程路线',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 拠点候補ランク: 安全、資源、乗り物、リスク',
      description:
        'Subnautica 2の拠点候補を安全性、資源、Tadpoleルート、生物リスク、マップ価値で整理します。',
    },
    eyebrow: 'Subnautica 2 拠点候補',
    title: 'Subnautica 2 拠点候補ランク: 長く使える場所の条件',
    description:
      '良い拠点は見た目だけではありません。安全な帰り道、近い素材、乗り物の入りやすさ、低い生物リスクが必要です。',
    quickLabel: '結論',
    quickAnswer:
      '正確な座標ではなく機能でランクします。Sランクは安全で戻りやすく、序盤素材が近く、Tadpoleルートに合います。Aは強いが一つ欠点あり。Bは一時拠点。リスク枠は深度、危険、移動時間が重い場所です。',
    fieldNotesTitle: '役に立つランク条件',
    fieldNotes: [
      {
        title: '景色より安全',
        body: '危険な絶景拠点より、毎回安全に戻れる拠点が使われます。',
      },
      {
        title: '乗り物で変わる',
        body: 'Tadpoleを使うと、接近ルート、ドッキング、生物挙動が重要になります。',
      },
      {
        title: 'パッチで変わる',
        body: 'Hotfix 2はTadpoleライト周辺の生物挙動に触れています。',
      },
    ],
    routeChecklistTitle: 'ランク確認',
    routeChecklist: [
      '初心者でも戻れるか。',
      '銀、銅、チタン、酸素ルートが近いか。',
      'Tadpoleが安全に接近できるか。',
      '電力、収納、今後のモジュールに余裕があるか。',
      'パッチやバイオーム更新で変わりそうか。',
    ],
    contentsLabel: '目次',
    routeTitle: '拠点候補のランク方法',
    routeSteps: [
      {
        title: '帰り道から見る',
        body: '戻るたびに迷う場所は、主拠点には向きません。',
      },
      {
        title: '素材ループを見る',
        body: 'よく使う素材が近いと、序盤クラフトが楽になります。',
      },
      {
        title: '乗り物接近を試す',
        body: 'Tadpoleルートが危険なら、景色が良くても評価は下がります。',
      },
      {
        title: '更新の余地を残す',
        body: 'Early Accessではロードマップやバイオーム変化で中心地が変わります。',
      },
    ],
    tableTitle: '拠点ランク',
    tableHeaders: ['ランク', '使い方'],
    tableRows: [
      ['S', '安全な帰還、近い素材、簡単な乗り物接近、拡張余地。'],
      ['A', '強い場所だが、距離、電力、生物など一つ欠点あり。'],
      ['B', '一時拠点、スキャン地点、資源前哨として便利。'],
      ['リスク', '見た目は良いが、深度、危険、移動時間が重い。'],
      ['パッチ観察', '生物挙動、乗り物、バイオーム更新で変わる場所。'],
    ],
    visualTitle: '拠点スコアカード',
    visualItems: [
      {
        label: '最重要',
        value: '帰り道',
        note: 'いつも戻れるなら強い拠点です。',
      },
      {
        label: '乗り物',
        value: 'Tadpole',
        note: '接近とドッキングが重要です。',
      },
      { label: 'リスク', value: '生物誘導', note: '危険を拠点に集めない。' },
    ],
    cautionTitle: '見た目だけでランクしない',
    cautionBody:
      '美しい場所でも、毎回帰るのが怖いなら主拠点には向きません。ランクはスクリーンショットではなく反復ルートで見ます。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '一番良い拠点場所は？',
        body: '安全な帰り道、近い素材、拡張余地、乗り物接近がある場所です。',
      },
      {
        title: '危険生物の近くに作れますか？',
        body: '主拠点にはおすすめしません。一時拠点や資源前哨にしてください。',
      },
      {
        title: 'Tadpoleはランクに影響しますか？',
        body: '影響します。接近、ドッキング、生物挙動が重要です。',
      },
      {
        title: 'ランクは変わりますか？',
        body: '変わります。Early Accessの更新や行動調整で評価が動きます。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2BestBaseLocations, label: 'おすすめ拠点' },
      { href: Routes.Subnautica2BaseBuilding, label: '拠点建築' },
      { href: Routes.Subnautica2Vehicles, label: '乗り物ガイド' },
      {
        href: Routes.Subnautica2CreaturesLeviathans,
        label: '生物とリヴァイアサン',
      },
      {
        href: Routes.Subnautica2MapSizeBiomes,
        label: 'マップサイズとバイオーム',
      },
    ],
    sourcesTitle: '出典メモ',
    sourceBody:
      '2026年6月1日にHotfix 2、Early Accessロードマップ、Steam、公式トレーラーを確認。画像はAbyss Guidesオリジナル、動画は公式Subnautica埋め込みです。',
    cardKicker: 'Base ranking',
    cardBody: '安全、素材、乗り物接近、生物リスクで拠点候補を整理します。',
    cardTypeLabel: '種類',
    cardTypeValue: '拠点ガイド',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: '最重要',
    cardStatusValue: '帰り道',
  },
};

function getCopy(locale: Locale): BaseTierCopy {
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
    pathname: Routes.Subnautica2BaseLocationTierList,
  });
}

export default async function Subnautica2BaseLocationTierListPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <LocalizedResourceGuidePage
      copy={{ ...copy, publishedAt: PUBLISHED_AT, updatedAt: UPDATED_AT }}
      icon={MapPinIcon}
      locale={locale}
      pathname={Routes.Subnautica2BaseLocationTierList}
      sources={sources}
    />
  );
}
