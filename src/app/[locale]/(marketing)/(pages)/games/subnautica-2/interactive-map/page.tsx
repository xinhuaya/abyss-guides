import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { MapIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type InteractiveMapCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-06-01';
const UPDATED_AT = '2026-06-01';

const sharedSources = [
  {
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/',
    label: 'Official Steam Early Access page',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap',
    label: 'Unknown Worlds Early Access roadmap',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-2',
    label: 'Unknown Worlds Hotfix 2',
  },
];

const mapCopy: Record<string, InteractiveMapCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Interactive Map, Map Size, and Route Planning',
      description:
        'A practical Subnautica 2 interactive map guide covering map size searches, route notes, biome planning, base markers, and why exact coordinates can be risky during Early Access.',
    },
    eyebrow: 'Subnautica 2 interactive map',
    title: 'Subnautica 2 Interactive Map and Map Size Guide',
    description:
      'Players are already searching for a full interactive map. That makes sense, but Early Access maps are better treated as route notes first and final coordinate grids later.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Use any Subnautica 2 map as a planning tool, not as a final truth. During Early Access, prioritize repeatable routes, landmarks, biome notes, safe base markers, and patch-sensitive resource checks over exact coordinates. If a page claims a complete map size or every resource node, check whether it was updated after the latest hotfix.',
    fieldNotesTitle: 'Search intent notes',
    fieldNotes: [
      {
        title: 'Interactive map does not mean finished map',
        body: 'A clickable map can still be incomplete. What matters is whether it says when the data was checked and which routes were verified after patches.',
      },
      {
        title: 'Map size searches are usually comparison searches',
        body: 'Most players asking about map size want to know how big the world feels, how long routes take, and whether biomes are worth revisiting.',
      },
      {
        title: 'Good map pages should reduce panic',
        body: 'A map is useful when it helps you return safely, name a route, and decide what to carry. A giant spoiler image is not always better.',
      },
    ],
    routeChecklistTitle: 'Before using a map',
    routeChecklist: [
      'Check when the map page was last updated.',
      'Prefer landmarks and routes over fake exactness.',
      'Mark oxygen pressure and return cues, not just loot.',
      'Recheck resource-heavy pages after hotfixes.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to use a map without ruining the run',
    routeSteps: [
      {
        title: 'Start with a route loop',
        body: 'Pick one job: Silver, Scanner fragments, base scouting, or biome notes. A useful map starts with a loop you can repeat, not with every icon turned on.',
      },
      {
        title: 'Use landmarks before coordinates',
        body: 'Early routes are easier to remember when they use Lifepod direction, cave mouths, terrain shapes, and Beacon names. Coordinates can come later if the build stabilizes.',
      },
      {
        title: 'Separate map size from map usefulness',
        body: 'A bigger map is not automatically a better guide. For players, the useful question is whether a route has oxygen safety, resource value, and a clean return path.',
      },
      {
        title: 'Treat resource markers as patch-sensitive',
        body: 'Hotfix 2 already changed Silver and Troilite availability. Any resource marker-heavy map should say which patch it was checked against.',
      },
    ],
    tableTitle: 'Interactive map fields to track',
    tableHeaders: ['Map field', 'What to write down'],
    tableRows: [
      [
        'Landmark',
        'The real-world phrase you can use to find the route again without staring at a guide.',
      ],
      [
        'Biome feel',
        'Visibility, creature pressure, oxygen demand, and whether the area is calm enough for repeat farming.',
      ],
      [
        'Resource confidence',
        'Mark whether a resource is confirmed after the latest patch or still needs another pass.',
      ],
      [
        'Base marker',
        'A good base spot needs return access, storage value, expansion space, and a route worth repeating.',
      ],
      [
        'Co-op name',
        'Use short shared names so teammates can call out the same place without confusion.',
      ],
    ],
    visualTitle: 'Map planning card',
    visualItems: [
      {
        label: 'Best use',
        value: 'Routes',
        note: 'A repeatable loop beats a cluttered icon dump.',
      },
      {
        label: 'Risk',
        value: 'Patches',
        note: 'Resource markers can age after hotfixes.',
      },
      {
        label: 'Search',
        value: 'Map size',
        note: 'Answer with practical travel and biome context.',
      },
    ],
    cautionTitle: 'Avoid fake precision',
    cautionBody:
      'It is tempting to publish exact-looking dots because they feel authoritative. During Early Access, a safer guide says what was checked, what patch it matches, and which route a player can actually repeat.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Is there a complete Subnautica 2 interactive map?',
        body: 'Treat complete-map claims carefully during Early Access. A useful map should show when it was checked and whether important resource routes were verified after hotfixes.',
      },
      {
        title: 'How big is the Subnautica 2 map?',
        body: 'The practical answer is route-based: how long it takes to reach biomes, return safely, and revisit resource loops. Avoid exact-size claims unless they come from a reliable source.',
      },
      {
        title: 'Should I use coordinates or Beacons?',
        body: 'Use Beacons and landmark names first. Coordinates are useful later, but early players usually need routes they can understand while swimming.',
      },
      {
        title: 'Why are resource maps risky after patches?',
        body: 'Hotfix 2 changed Silver and Troilite resource availability, which is a reminder that resource-heavy maps need patch dates.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Map, label: 'Map and Biomes Guide' },
      { href: Routes.Subnautica2Biomes, label: 'Biomes Guide' },
      {
        href: Routes.Subnautica2BestBaseLocations,
        label: 'Best Base Locations',
      },
      { href: Routes.Subnautica2Beacon, label: 'Beacon Guide' },
      { href: Routes.Subnautica2Coop, label: 'Co-op Guide' },
      {
        href: Routes.Subnautica2SilverAfterHotfix2,
        label: 'Silver After Hotfix 2',
      },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 1, 2026 against the Steam Early Access page, Unknown Worlds roadmap, and Hotfix 2 notes. Topic choice follows Bing autocomplete demand for interactive map, map size, map details, and map exploration.',
    cardKicker: 'Map search card',
    cardBody:
      'A search-led map guide for players looking for interactive maps, map size, route planning, base markers, and patch-safe resource notes.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Map planning guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 互动地图、地图大小和路线规划',
      description:
        'Subnautica 2 互动地图中文指南，覆盖地图大小、路线笔记、生态区规划、建家标记，以及抢先体验阶段为什么不能乱写精确坐标。',
    },
    eyebrow: 'Subnautica 2 互动地图',
    title: 'Subnautica 2 互动地图和地图大小指南',
    description:
      '现在已经有人在搜完整互动地图了，这很正常。但抢先体验阶段，地图最好先当路线笔记用，等版本更稳定后再追求完整坐标。',
    quickLabel: '快速结论',
    quickAnswer:
      'Subnautica 2 的地图应该先用来规划路线，不要当成最终答案。抢先体验期间，优先记录可重复路线、地标、生态区感受、安全建家点和补丁相关资源变化。看到声称完整地图大小或所有资源点的页面，先看它是不是在最新热修后更新过。',
    fieldNotesTitle: '搜索意图笔记',
    fieldNotes: [
      {
        title: '互动地图不等于最终地图',
        body: '能点击的地图也可能不完整。关键是它有没有写清楚核对时间，以及路线是不是在补丁后重新验证过。',
      },
      {
        title: '地图大小通常是在问体验',
        body: '搜 map size 的玩家，多半想知道世界跑起来有多大、路线要多久、哪些生态区值得反复回去。',
      },
      {
        title: '好地图应该减少慌乱',
        body: '能帮你安全返回、给路线命名、决定带什么装备的地图，才是真的有用。单纯一张大剧透图不一定更好。',
      },
    ],
    routeChecklistTitle: '使用地图前先检查',
    routeChecklist: [
      '页面上次更新时间是什么时候？',
      '优先看地标和路线，不要迷信假精确坐标。',
      '记录氧气压力和返程信号，不只记录资源。',
      '资源密集页面要在热修后重新核对。',
    ],
    contentsLabel: '目录',
    routeTitle: '怎么用地图而不破坏探索体验',
    routeSteps: [
      {
        title: '先从一条循环路线开始',
        body: '只定一个目标：Silver、Scanner 碎片、建家侦察或生态区笔记。好地图先从能复跑的路线开始，不是把所有图标全打开。',
      },
      {
        title: '先用地标，再谈坐标',
        body: '前期路线更适合用 Lifepod 方向、洞口、地形轮廓和 Beacon 名字来记。等版本稳定后，再补坐标也不迟。',
      },
      {
        title: '地图大小和地图实用性分开看',
        body: '地图大不代表攻略好。玩家真正需要的是氧气安全、资源价值和清楚的回程路线。',
      },
      {
        title: '资源标记要看补丁',
        body: 'Hotfix 2 已经影响 Silver 和 Troilite 的资源区域。资源点很多的地图，必须写清楚对应哪个补丁版本。',
      },
    ],
    tableTitle: '互动地图应该记录什么',
    tableHeaders: ['地图字段', '应该写什么'],
    tableRows: [
      ['地标', '不用盯着攻略也能找回来的描述，比如洞口、地形、基地方向。'],
      ['生态区感受', '能见度、生物压力、氧气需求，以及是否适合反复采集。'],
      ['资源可信度', '这个资源点是否在最新补丁后确认过，还是需要再跑一次。'],
      [
        '建家标记',
        '安全返程、储物价值、扩建空间，以及有没有值得反复跑的路线。',
      ],
      ['联机名称', '用短名字统一叫法，避免队友每个人都说不同方向。'],
    ],
    visualTitle: '地图规划卡片',
    visualItems: [
      {
        label: '最佳用途',
        value: '路线',
        note: '一条能复跑的路线，比满屏图标更有用。',
      },
      { label: '风险', value: '补丁', note: '资源标记可能因为热修过时。' },
      {
        label: '搜索',
        value: '地图大小',
        note: '用路线距离和生态区体验回答。',
      },
    ],
    cautionTitle: '不要制造假精确',
    cautionBody:
      '精确小点看起来很权威，但抢先体验阶段更稳的写法是：说明核对时间、对应补丁，以及玩家能不能真的按这条路线复跑。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 有完整互动地图了吗？',
        body: '抢先体验阶段要谨慎看待“完整地图”说法。有用的地图应该写清核对时间，并说明资源路线是否在热修后验证过。',
      },
      {
        title: 'Subnautica 2 地图有多大？',
        body: '实用回答应该看路线：到生态区要多久、能不能安全返回、资源循环是否值得复跑。没有可靠来源时不要写精确大小。',
      },
      {
        title: '前期应该用坐标还是 Beacon？',
        body: '先用 Beacon 和地标名称。坐标以后可以补，但新玩家更需要游动时也能理解的路线。',
      },
      {
        title: '为什么资源地图容易过时？',
        body: 'Hotfix 2 已经改变了 Silver 和 Troilite 的资源可用性，所以资源密集地图必须标注补丁时间。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2Map, label: '地图和生态区指南' },
      { href: Routes.Subnautica2Biomes, label: '生态区指南' },
      { href: Routes.Subnautica2BestBaseLocations, label: '最佳建家点' },
      { href: Routes.Subnautica2Beacon, label: 'Beacon 指南' },
      { href: Routes.Subnautica2Coop, label: '联机指南' },
      {
        href: Routes.Subnautica2SilverAfterHotfix2,
        label: 'Hotfix 2 后的 Silver',
      },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 更新内容' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 1 日核对 Steam 抢先体验页面、Unknown Worlds 路线图和 Hotfix 2。选题来自 Bing 自动补全中的 interactive map、map size、map details、map exploration。',
    cardKicker: '地图搜索卡',
    cardBody:
      '给搜索互动地图、地图大小、路线规划、建家标记和补丁安全资源点的玩家看的页面。',
    cardTypeLabel: '类型',
    cardTypeValue: '地图规划指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 インタラクティブマップ、マップサイズ、ルート計画',
      description:
        'Subnautica 2のインタラクティブマップ、マップサイズ検索、ルートメモ、バイオーム計画、拠点マーカー、Early Access中の座標リスクを整理します。',
    },
    eyebrow: 'Subnautica 2 インタラクティブマップ',
    title: 'Subnautica 2 インタラクティブマップとマップサイズガイド',
    description:
      '完全なインタラクティブマップを探す人は増えています。ただしEarly Access中は、完成した座標表よりルートメモとして使う方が安全です。',
    quickLabel: '結論',
    quickAnswer:
      'Subnautica 2のマップは最終回答ではなく計画ツールとして使いましょう。Early Accessでは、正確な座標よりも、再現できるルート、ランドマーク、バイオームメモ、安全な拠点候補、パッチ後の資源確認を優先します。',
    fieldNotesTitle: '検索意図メモ',
    fieldNotes: [
      {
        title: 'インタラクティブでも完成版とは限らない',
        body: 'クリックできる地図でも未完成の場合があります。確認日とパッチ後の検証が大事です。',
      },
      {
        title: 'マップサイズ検索は体感の質問',
        body: '多くのプレイヤーは、世界がどれくらい広く感じるか、移動にどれくらい時間がかかるかを知りたいだけです。',
      },
      {
        title: '良い地図は焦りを減らす',
        body: '安全に戻れる、ルート名を決められる、持ち物を判断できる地図が本当に役立ちます。',
      },
    ],
    routeChecklistTitle: '地図を見る前に',
    routeChecklist: [
      '最終更新日を確認する。',
      '座標よりランドマークとルートを優先する。',
      '資源だけでなく酸素と帰還目印も記録する。',
      '資源ページはHotfix後に再確認する。',
    ],
    contentsLabel: '目次',
    routeTitle: '探索を壊さず地図を使う方法',
    routeSteps: [
      {
        title: 'まずループを作る',
        body: 'Silver、Scanner断片、拠点候補、バイオームメモなど、1回の潜水に1つの目的を置きます。',
      },
      {
        title: '座標よりランドマーク',
        body: 'Lifepodの方向、洞窟入口、地形、Beacon名の方が序盤では覚えやすいです。',
      },
      {
        title: 'サイズと実用性を分ける',
        body: '広いマップでも、酸素、安全、資源価値、帰還ルートがなければ実用的ではありません。',
      },
      {
        title: '資源マーカーはパッチ依存',
        body: 'Hotfix 2でSilverとTroiliteの資源状況が変わりました。資源地図には確認したパッチが必要です。',
      },
    ],
    tableTitle: '地図で記録する項目',
    tableHeaders: ['項目', '書くこと'],
    tableRows: [
      ['ランドマーク', 'ガイドを見続けなくても戻れる目印。'],
      ['バイオーム感', '視界、生物圧、酸素負荷、周回しやすさ。'],
      ['資源信頼度', '最新パッチ後に確認済みか、再確認が必要か。'],
      ['拠点候補', '帰還しやすさ、収納価値、拡張余地、繰り返すルート。'],
      ['co-op名', '短い共通名で、仲間が同じ場所を呼べるようにする。'],
    ],
    visualTitle: 'マップ計画カード',
    visualItems: [
      {
        label: '用途',
        value: 'Routes',
        note: 'アイコンより再現できるルート。',
      },
      {
        label: 'リスク',
        value: 'Patches',
        note: '資源マーカーは古くなります。',
      },
      {
        label: '検索',
        value: 'Map size',
        note: '移動感とバイオームで答えます。',
      },
    ],
    cautionTitle: '偽の精度を避ける',
    cautionBody:
      '正確そうな点は魅力的ですが、Early Accessでは確認日、対応パッチ、再現できるルートを書く方が信頼できます。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '完全なSubnautica 2インタラクティブマップはありますか？',
        body: 'Early Access中は慎重に見てください。有用な地図は確認日とHotfix後の検証状況を書いています。',
      },
      {
        title: 'Subnautica 2のマップサイズは？',
        body: '実用的には、バイオームまでの移動、帰還しやすさ、資源ループの価値で考える方が役立ちます。',
      },
      {
        title: '座標とBeaconのどちらを使うべき？',
        body: '序盤はBeaconとランドマーク名を優先しましょう。座標は後で補えます。',
      },
      {
        title: 'なぜ資源地図は古くなりやすい？',
        body: 'Hotfix 2でSilverとTroiliteの可用性が変わったため、資源地図にはパッチ日付が必要です。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2Map, label: 'マップとバイオーム' },
      { href: Routes.Subnautica2Biomes, label: 'バイオームガイド' },
      { href: Routes.Subnautica2BestBaseLocations, label: 'おすすめ拠点候補' },
      { href: Routes.Subnautica2Beacon, label: 'Beaconガイド' },
      { href: Routes.Subnautica2Coop, label: 'Co-opガイド' },
      {
        href: Routes.Subnautica2SilverAfterHotfix2,
        label: 'Hotfix 2後のSilver',
      },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2変更点' },
    ],
    sourcesTitle: 'ソース',
    sourceBody:
      '2026年6月1日にSteam Early Accessページ、Unknown Worldsロードマップ、Hotfix 2を確認。テーマはBing autocompleteのinteractive map、map size、map details、map explorationから選びました。',
    cardKicker: 'Map search card',
    cardBody:
      'インタラクティブマップ、マップサイズ、ルート計画、拠点マーカー、パッチ安全な資源メモのためのページです。',
    cardTypeLabel: '種類',
    cardTypeValue: 'Map planning guide',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: '状態',
    cardStatusValue: 'Early Access',
  },
};

function getCopy(locale: Locale): InteractiveMapCopy {
  return mapCopy[locale] ?? mapCopy.en;
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
    pathname: Routes.Subnautica2InteractiveMap,
  });
}

export default async function InteractiveMapGuidePage({
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
      pathname={Routes.Subnautica2InteractiveMap}
      sources={sharedSources}
    />
  );
}
