import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { MapIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type MapSizeCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-06-01';
const UPDATED_AT = '2026-06-01';

const sharedSources = [
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap',
    label: 'Unknown Worlds Early Access roadmap',
  },
  {
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/',
    label: 'Official Steam page',
  },
  {
    href: 'https://www.xbox.com/en-US/games/store/subnautica-2/9pjpcb188svg',
    label: 'Official Xbox store listing',
  },
  {
    href: 'https://www.youtube.com/watch?v=6t2nDHldoSk',
    label: 'Official Subnautica 2 gameplay trailer',
  },
];

const mapSizeCopy: Record<string, MapSizeCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Map Size and Biomes: What Is Known in Early Access',
      description:
        'A cautious Subnautica 2 map size and biomes guide for Early Access players planning routes, base locations, resource loops, and update watchlists.',
    },
    eyebrow: 'Subnautica 2 map and biomes',
    title: 'Subnautica 2 Map Size and Biomes: What to Trust in Early Access',
    description:
      'Map-size searches are popular because players want to know how big the world feels before they commit. The careful answer is to track confirmed biomes, route depth, and roadmap changes instead of inventing exact numbers.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Do not treat any unsourced exact map-size number as final. In Early Access, the useful approach is to track confirmed biome names, safe route loops, vehicle reach, base locations, and roadmap updates. Exact size matters less than whether players can plan oxygen, depth, resource runs, and return paths.',
    fieldNotesTitle: 'What matters more than a number',
    fieldNotes: [
      {
        title: 'Depth changes the map',
        body: 'A small horizontal route can feel huge if oxygen, visibility, and return time are tight.',
      },
      {
        title: 'Biomes drive repeat visits',
        body: 'Players come back to maps for resource loops, safe base points, scanner routes, and danger zones.',
      },
      {
        title: 'Roadmap content can move the answer',
        body: 'Early Access worlds can expand or shift. A map page should be updated with patch notes, not frozen on launch week.',
      },
    ],
    routeChecklistTitle: 'Map notes to track',
    routeChecklist: [
      'Confirmed biome names and rough route roles.',
      'Safe early base candidates and return paths.',
      'Resource loops that connect to crafting pages.',
      'Vehicle reach, depth pressure, and oxygen planning.',
      'Roadmap or hotfix changes that alter navigation.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to use this map-size page',
    routeSteps: [
      {
        title: 'Start with route usefulness',
        body: 'Instead of asking only how many square kilometers exist, ask what a new player can safely do in the first hour, second hour, and first vehicle route.',
      },
      {
        title: 'Group biomes by job',
        body: 'A good map guide should label starter safety, resource loops, base-building candidates, scanner routes, and deeper risk zones.',
      },
      {
        title: 'Link every map claim to a useful page',
        body: 'If a biome matters because of silver, wiring kits, oxygen, or base spots, link to those practical guides so the reader can act.',
      },
      {
        title: 'Update after roadmap beats',
        body: 'When Unknown Worlds changes the Early Access roadmap or patch notes, map pages should be checked again.',
      },
    ],
    tableTitle: 'Map searches and useful answers',
    tableHeaders: ['Search term', 'What the page should answer'],
    tableRows: [
      [
        'subnautica 2 map size',
        'Avoid fake exact numbers; explain route scale, depth, and Early Access uncertainty.',
      ],
      [
        'subnautica 2 biomes',
        'List confirmed or commonly referenced biome roles with source caution.',
      ],
      [
        'subnautica 2 map',
        'Connect map planning to resources, crafting, oxygen, and base locations.',
      ],
      [
        'subnautica 2 early access map',
        'Track roadmap changes and patch cadence.',
      ],
      [
        'subnautica 2 base locations',
        'Rank places by safety, nearby materials, and return route clarity.',
      ],
    ],
    visualTitle: 'Map planning card',
    visualItems: [
      {
        label: 'Best metric',
        value: 'Route time',
        note: 'How long it takes to go out, gather, and return.',
      },
      {
        label: 'Best pages',
        value: 'Loops',
        note: 'Resource loops make map pages useful after the first visit.',
      },
      {
        label: 'Update risk',
        value: 'High',
        note: 'Early Access map notes need regular checks.',
      },
    ],
    cautionTitle: 'Exact size claims need sources',
    cautionBody:
      'A big number looks impressive, but if it is not official or clearly measured, it is not worth building trust on. A player-friendly map page should help with routes first and size claims second.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How big is the Subnautica 2 map?',
        body: 'Use official roadmap and platform information first. Do not treat unsourced exact numbers as final during Early Access.',
      },
      {
        title: 'What biomes should new players learn first?',
        body: 'Start with safe starter routes, resource loops, and base candidates before chasing deep-risk areas.',
      },
      {
        title: 'Will the map change during Early Access?',
        body: 'It can. Early Access updates and roadmap beats are exactly why map pages need update dates and source notes.',
      },
      {
        title: 'Should a map page include screenshots or video?',
        body: 'Yes, but with source labels. This page uses original Abyss Guides art and an official Subnautica trailer embed for visual context.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2InteractiveMap, label: 'Interactive Map' },
      { href: Routes.Subnautica2Map, label: 'Map Planning' },
      { href: Routes.Subnautica2Biomes, label: 'Biomes Guide' },
      {
        href: Routes.Subnautica2BestBaseLocations,
        label: 'Best Base Locations',
      },
      { href: Routes.Subnautica2Resources, label: 'Resources Index' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 1, 2026 against Unknown Worlds roadmap notes, Steam, Xbox, and official trailer material. This page does not publish exact map-size numbers without a clear official or measured source.',
    cardKicker: 'Map watch',
    cardBody:
      'A route-first map page for players comparing world size, biomes, resource loops, and base locations.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Map guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Size claim',
    cardStatusValue: 'Source required',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 地图大小和生态区：抢先体验阶段怎么判断',
      description:
        'Subnautica 2 地图大小、生态区、基地位置和资源路线中文指南：按抢先体验路线图和实际探索需求来整理。',
    },
    eyebrow: 'Subnautica 2 地图和生态区',
    title: 'Subnautica 2 地图大小和生态区：不要只看一个数字',
    description:
      '地图大小是热门搜索，因为玩家想知道这个世界值不值得深入玩。抢先体验阶段，更稳的写法是看生态区、路线、深度和更新，而不是编一个精确面积。',
    quickLabel: '快速结论',
    quickAnswer:
      '没有清楚来源的精确地图大小，不要当成最终答案。现在更有用的是记录已确认生态区、早期安全路线、载具可到范围、建家点、资源循环和路线图更新。对玩家来说，能不能规划氧气、深度、采集和回程，比一个面积数字更重要。',
    fieldNotesTitle: '比面积更重要的东西',
    fieldNotes: [
      {
        title: '深度会改变地图感觉',
        body: '横向距离不远，但氧气紧、能见度低、回程长，也会让路线变得很大。',
      },
      {
        title: '生态区决定复访',
        body: '玩家会为了资源、基地点、扫描路线和危险区反复打开地图。',
      },
      {
        title: '路线图会改变答案',
        body: '抢先体验世界会扩展或调整，地图页要跟补丁更新。',
      },
    ],
    routeChecklistTitle: '地图页需要追踪',
    routeChecklist: [
      '已确认生态区名称和大致用途。',
      '早期安全建家点和回程路线。',
      '能连接制作页的资源循环。',
      '载具可达范围、深度压力和氧气规划。',
      '路线图或 hotfix 对导航的影响。',
    ],
    contentsLabel: '目录',
    routeTitle: '这类地图页怎么用',
    routeSteps: [
      {
        title: '先看路线价值',
        body: '不要只问有多少平方公里。先问新玩家第一小时、第二小时、第一条载具路线能安全做什么。',
      },
      {
        title: '按用途整理生态区',
        body: '好的地图页应该标出新手安全区、资源循环、建家候选、扫描路线和高风险深区。',
      },
      {
        title: '把地图说法连到可执行页面',
        body: '一个生态区如果因为银、Wiring Kit、氧气或基地点重要，就要链接到对应攻略。',
      },
      {
        title: '路线图更新后重查',
        body: 'Unknown Worlds 更新路线图或补丁后，地图页也应该重新核对。',
      },
    ],
    tableTitle: '地图相关搜索怎么回答',
    tableHeaders: ['搜索词', '页面应该回答什么'],
    tableRows: [
      [
        'subnautica 2 map size',
        '不要编精确数字，先解释路线规模、深度和抢先体验不确定性。',
      ],
      ['subnautica 2 biomes', '列出生态区用途，并保留来源说明。'],
      ['subnautica 2 map', '把地图规划连到资源、制作、氧气和基地位置。'],
      ['subnautica 2 early access map', '追踪路线图和补丁节奏。'],
      ['subnautica 2 base locations', '按安全性、附近材料和回程清晰度来排。'],
    ],
    visualTitle: '地图规划卡',
    visualItems: [
      {
        label: '最好指标',
        value: '路线时间',
        note: '出去、采集、回来要多久。',
      },
      {
        label: '最好内容',
        value: '循环路线',
        note: '资源循环让地图页能反复使用。',
      },
      { label: '更新风险', value: '高', note: '抢先体验地图需要定期核对。' },
    ],
    cautionTitle: '精确面积必须有来源',
    cautionBody:
      '一个大数字看起来很吸引人，但没有官方或清楚测量来源，就不值得拿来建立信任。地图页应该先帮玩家规划路线，再谈大小。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 地图有多大？',
        body: '先看官方路线图和平台信息。抢先体验阶段，不要把无来源精确数字当最终答案。',
      },
      {
        title: '新玩家先学哪些生态区？',
        body: '先学安全开局路线、资源循环和建家候选，再去深层高风险区域。',
      },
      {
        title: '抢先体验地图会变吗？',
        body: '可能会，所以地图页要保留更新时间和来源。',
      },
      {
        title: '地图页要不要放图和视频？',
        body: '要，但要标来源。本页使用本站原创图和 Subnautica 官方预告嵌入。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2InteractiveMap, label: '互动地图' },
      { href: Routes.Subnautica2Map, label: '地图规划' },
      { href: Routes.Subnautica2Biomes, label: '生态区' },
      { href: Routes.Subnautica2BestBaseLocations, label: '最佳建家点' },
      { href: Routes.Subnautica2Resources, label: '资源索引' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 1 日核对 Unknown Worlds 路线图、Steam、Xbox 和官方预告。本页不会发布没有官方或清楚测量来源的精确地图大小。',
    cardKicker: '地图观察',
    cardBody: '给正在比较世界大小、生态区、资源循环和建家点的玩家看。',
    cardTypeLabel: '类型',
    cardTypeValue: '地图指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '面积说法',
    cardStatusValue: '需要来源',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 マップサイズとバイオーム: Early Accessで分かること',
      description:
        'Subnautica 2のマップサイズ、バイオーム、拠点候補、資源ルートをEarly Access情報から整理します。',
    },
    eyebrow: 'Subnautica 2 マップとバイオーム',
    title: 'Subnautica 2 マップサイズとバイオーム: 数字よりルートを見る',
    description:
      'マップサイズ検索は人気ですが、Early Accessでは正確な面積より、確認済みのバイオーム、深度、資源ルート、更新を追うほうが役に立ちます。',
    quickLabel: '結論',
    quickAnswer:
      '出典のない正確なマップサイズを最終情報として扱わないでください。今は、確認済みバイオーム、安全ルート、乗り物の到達範囲、拠点候補、資源ループ、ロードマップ更新を追うほうが実用的です。',
    fieldNotesTitle: '数字より大事なこと',
    fieldNotes: [
      {
        title: '深度で広さが変わる',
        body: '距離が短くても、酸素、視界、帰り道が厳しいと広く感じます。',
      },
      {
        title: 'バイオームは再訪理由になる',
        body: '資源、拠点、スキャン、危険地帯を確認するために何度も見ます。',
      },
      {
        title: 'ロードマップで変わる',
        body: 'Early Accessの世界は更新されるため、マップページも更新が必要です。',
      },
    ],
    routeChecklistTitle: '追跡するメモ',
    routeChecklist: [
      '確認済みバイオーム名と役割。',
      '序盤の安全な拠点候補と帰り道。',
      'クラフトページにつながる資源ルート。',
      '乗り物、深度、酸素計画。',
      'ロードマップやHotfixによる変化。',
    ],
    contentsLabel: '目次',
    routeTitle: 'このページの使い方',
    routeSteps: [
      {
        title: 'ルートの使いやすさから見る',
        body: '面積だけではなく、最初の1時間、2時間、最初の乗り物ルートで何ができるかを見ます。',
      },
      {
        title: 'バイオームを役割で分ける',
        body: '安全地帯、資源ループ、拠点候補、スキャンルート、危険地帯に分けると使いやすくなります。',
      },
      {
        title: '実用ページへつなぐ',
        body: '銀、Wiring Kit、酸素、拠点に関係するなら、その攻略へリンクします。',
      },
      {
        title: '更新後に見直す',
        body: 'ロードマップやパッチが変わったら、マップページも確認します。',
      },
    ],
    tableTitle: '検索語と答え方',
    tableHeaders: ['検索語', 'ページで答えること'],
    tableRows: [
      [
        'subnautica 2 map size',
        '出典のない正確な数字ではなく、ルート規模と不確実性を説明します。',
      ],
      ['subnautica 2 biomes', 'バイオームの役割を出典注意つきで整理します。'],
      ['subnautica 2 map', '資源、クラフト、酸素、拠点候補へつなげます。'],
      ['subnautica 2 early access map', 'ロードマップとパッチを追います。'],
      ['subnautica 2 base locations', '安全性、近い素材、帰り道で評価します。'],
    ],
    visualTitle: 'マップ計画カード',
    visualItems: [
      {
        label: '良い指標',
        value: 'ルート時間',
        note: '出発、採集、帰還にかかる時間。',
      },
      {
        label: '良い内容',
        value: '資源ループ',
        note: '何度も使えるページになります。',
      },
      {
        label: '更新リスク',
        value: '高い',
        note: 'Early Accessでは定期確認が必要です。',
      },
    ],
    cautionTitle: '正確なサイズには出典が必要',
    cautionBody:
      '大きな数字は目立ちますが、公式または明確な測定がなければ信頼を落とします。まずルートを助けるページにします。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2のマップはどれくらい大きいですか？',
        body: '公式ロードマップとプラットフォーム情報を優先します。出典のない数字は最終情報にしません。',
      },
      {
        title: '初心者はどのバイオームから見るべきですか？',
        body: '安全な序盤ルート、資源ループ、拠点候補から始めます。',
      },
      {
        title: 'Early Access中にマップは変わりますか？',
        body: '変わる可能性があります。だから更新日と出典メモが必要です。',
      },
      {
        title: '画像や動画は必要ですか？',
        body: '必要です。このページはAbyss Guidesのオリジナル画像と公式Subnautica動画を使います。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      {
        href: Routes.Subnautica2InteractiveMap,
        label: 'インタラクティブマップ',
      },
      { href: Routes.Subnautica2Map, label: 'マップ計画' },
      { href: Routes.Subnautica2Biomes, label: 'バイオーム' },
      { href: Routes.Subnautica2BestBaseLocations, label: '拠点候補' },
      { href: Routes.Subnautica2Resources, label: '資源一覧' },
    ],
    sourcesTitle: '出典メモ',
    sourceBody:
      '2026年6月1日にUnknown Worldsロードマップ、Steam、Xbox、公式トレーラーを確認。明確な出典のない正確なマップサイズは掲載しません。',
    cardKicker: 'Map watch',
    cardBody:
      '世界サイズ、バイオーム、資源ループ、拠点候補を比べる人向けです。',
    cardTypeLabel: '種類',
    cardTypeValue: 'マップガイド',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: 'サイズ情報',
    cardStatusValue: '出典が必要',
  },
};

function getCopy(locale: Locale): MapSizeCopy {
  return mapSizeCopy[locale] ?? mapSizeCopy.en;
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
    pathname: Routes.Subnautica2MapSizeBiomes,
  });
}

export default async function Subnautica2MapSizeBiomesPage({
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
      icon={MapIcon}
      locale={locale}
      pathname={Routes.Subnautica2MapSizeBiomes}
      sources={sharedSources}
    />
  );
}
