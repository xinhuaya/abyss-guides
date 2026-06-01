import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { CalendarDaysIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type ReleaseDateCopy = ResourceGuideCopy & {
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

const releaseDateCopy: Record<string, ReleaseDateCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Release Date, Early Access, PS5, Xbox, and Game Pass',
      description:
        'A source-backed Subnautica 2 release date guide covering Early Access status, Steam, Xbox, Game Pass, PS5 searches, release time, and what is confirmed.',
    },
    eyebrow: 'Subnautica 2 release date',
    title: 'Subnautica 2 Release Date and Platforms',
    description:
      'Release-date searches are noisy right now. This page keeps the practical answer separate from guesses about console ports, countdowns, and full 1.0 timing.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Subnautica 2 launched into Early Access on May 14, 2026. The official Steam page lists the game as Early Access, and Unknown Worlds describes a long Early Access plan with hotfixes, improvement updates, co-op work, and larger content drops. Treat exact 1.0 release-date claims, PS5 timing, and countdown pages carefully unless they point back to an official source.',
    fieldNotesTitle: 'Search intent notes',
    fieldNotes: [
      {
        title: 'Release date means two different things',
        body: 'Many players search for the launch day, while others mean the full 1.0 release. Keep those answers separate or the page becomes misleading.',
      },
      {
        title: 'Platform searches need calm wording',
        body: 'Xbox, Game Pass, Steam, and PS5 searches are mixed together. A good page should say what is confirmed, then name what is still unconfirmed.',
      },
      {
        title: 'Countdown pages age fast',
        body: 'If a countdown was written before Early Access launch, it is not useful anymore. After launch, the better page is a status tracker.',
      },
    ],
    routeChecklistTitle: 'Before trusting a release page',
    routeChecklist: [
      'Check whether it means Early Access launch or full 1.0.',
      'Look for an official Steam or Unknown Worlds link.',
      'Treat PS5 and console timing claims as unconfirmed unless sourced.',
      'Check the latest hotfix page if you already own Early Access.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to read the release status',
    routeSteps: [
      {
        title: 'Start with Early Access',
        body: 'The useful confirmed date is May 14, 2026, when Subnautica 2 entered Early Access. That is the build current guide pages are tracking.',
      },
      {
        title: 'Separate 1.0 from launch-week updates',
        body: 'Unknown Worlds is still shipping hotfixes and planned Early Access updates. That means a final 1.0 release date should not be guessed from a hotfix schedule.',
      },
      {
        title: 'Read platform claims by source',
        body: 'Steam and Xbox/Game Pass searches are common. PS5 searches are common too, but pages should avoid invented timing unless Unknown Worlds or a platform holder publishes it.',
      },
      {
        title: 'Use the roadmap for what comes next',
        body: 'The roadmap is better than a rumor post because it describes the update shape: hotfixes, smaller improvements, co-op work, and bigger content expansions.',
      },
    ],
    tableTitle: 'Release-date search answers',
    tableHeaders: ['Search', 'Practical answer'],
    tableRows: [
      [
        'subnautica 2 release date',
        'Early Access started May 14, 2026. A final 1.0 date should be checked against official sources.',
      ],
      [
        'subnautica 2 release time',
        'Release-time countdowns are mostly stale after launch. Use patch status if you are already playing.',
      ],
      [
        'subnautica 2 steam',
        'Steam is the official store page to check for Early Access status, system details, and official notices.',
      ],
      [
        'subnautica 2 xbox game pass',
        'Check official store/platform pages before trusting third-party summaries.',
      ],
      [
        'subnautica 2 ps5',
        'Treat PS5 timing as unconfirmed unless an official source says otherwise.',
      ],
    ],
    visualTitle: 'Release status card',
    visualItems: [
      {
        label: 'Launch',
        value: 'May 14',
        note: 'Early Access launch date tracked here.',
      },
      {
        label: 'Status',
        value: 'EA',
        note: 'Guides should expect patches and route changes.',
      },
      {
        label: 'Watch',
        value: 'Roadmap',
        note: 'Best source for planned update shape.',
      },
    ],
    cautionTitle: 'Do not turn guesses into dates',
    cautionBody:
      'Search demand is high, but that does not make every platform rumor useful. If a PS5, console, or 1.0 date is not official, write it as unconfirmed and point players to the source you checked.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'When did Subnautica 2 release?',
        body: 'Subnautica 2 entered Early Access on May 14, 2026.',
      },
      {
        title: 'Is Subnautica 2 fully released?',
        body: 'No. The current public build is Early Access, and Unknown Worlds is still tracking hotfixes and planned updates.',
      },
      {
        title: 'Is there a Subnautica 2 PS5 release date?',
        body: 'Do not trust a PS5 date unless it is backed by Unknown Worlds or an official platform page.',
      },
      {
        title: 'Why does this matter for guides?',
        body: 'Early Access patches can change resources, bugs, route friction, and co-op behavior. A release-date page should point players toward the newest patch-sensitive guides.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Updates, label: 'Roadmap and Updates' },
      { href: Routes.Subnautica2Ps5ReleaseDate, label: 'PS5 Release Date' },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass Guide' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
      { href: Routes.Subnautica2Coop, label: 'Co-op Guide' },
      { href: Routes.Subnautica2Map, label: 'Map Guide' },
      {
        href: Routes.Subnautica2SilverAfterHotfix2,
        label: 'Silver After Hotfix 2',
      },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 1, 2026 against the official Steam page, Unknown Worlds Early Access roadmap, and Hotfix 2 notes. Search topics were selected from Bing autocomplete suggestions for release date, release time, PS5, Xbox, Game Pass, and Steam.',
    cardKicker: 'Release card',
    cardBody:
      'A search-led status page for players asking about release date, platforms, Early Access, and what to read after launch.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Status guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 发售时间、抢先体验、PS5、Xbox 和 Game Pass',
      description:
        'Subnautica 2 发售时间中文整理：抢先体验状态、Steam、Xbox、Game Pass、PS5 搜索意图、上线时间和官方已确认信息。',
    },
    eyebrow: 'Subnautica 2 发售时间',
    title: 'Subnautica 2 发售时间和平台状态',
    description:
      '现在搜索发售时间的人很多，但里面混着抢先体验、正式版、PS5、Xbox、Game Pass 和倒计时。这里先把能确认的讲清楚。',
    quickLabel: '快速结论',
    quickAnswer:
      'Subnautica 2 已在 2026 年 5 月 14 日进入抢先体验。Steam 官方页面显示它仍是 Early Access，Unknown Worlds 的路线图也把后续更新分成热修、体验改进、联机相关更新和更大的内容扩展。正式版 1.0、PS5 时间和各种倒计时页面，都要先看有没有官方来源。',
    fieldNotesTitle: '搜索意图笔记',
    fieldNotes: [
      {
        title: '发售时间有两层意思',
        body: '有些玩家问的是抢先体验哪天开，有些玩家问的是正式版 1.0。文章里必须分开写，不然很容易误导。',
      },
      {
        title: '平台问题要写稳一点',
        body: 'Xbox、Game Pass、Steam、PS5 的搜索会混在一起。能确认的就写确认，不能确认的就别编日期。',
      },
      {
        title: '倒计时页面很容易过时',
        body: '抢先体验已经上线后，倒计时类内容价值会下降。玩家更需要的是当前版本状态和更新追踪。',
      },
    ],
    routeChecklistTitle: '看发售时间文章前先确认',
    routeChecklist: [
      '它说的是抢先体验，还是正式版 1.0？',
      '有没有链接到 Steam 或 Unknown Worlds 官方页面？',
      'PS5 和主机日期有没有官方来源？',
      '如果已经在玩，优先看最新 Hotfix 页面。',
    ],
    contentsLabel: '目录',
    routeTitle: '怎么判断当前发售状态',
    routeSteps: [
      {
        title: '先看抢先体验日期',
        body: '目前能稳定确认的是 2026 年 5 月 14 日的抢先体验上线日期。本站现有攻略也是围绕这个 Early Access 版本来更新。',
      },
      {
        title: '把 1.0 和热修分开',
        body: '热修和路线图更新不等于正式版日期。正式版 1.0 如果没有官方说明，就不要从补丁节奏里倒推。',
      },
      {
        title: '平台信息按来源判断',
        body: 'Steam、Xbox、Game Pass 相关搜索很多，PS5 搜索也很多。没有官方页面支撑时，就应该写成未确认。',
      },
      {
        title: '后续更新看路线图',
        body: '官方路线图比传闻更适合引用，因为它说明的是更新方向：热修、体验改进、联机更新和更大的内容扩展。',
      },
    ],
    tableTitle: '发售相关搜索怎么回答',
    tableHeaders: ['搜索词', '实用回答'],
    tableRows: [
      [
        'subnautica 2 release date',
        '抢先体验日期是 2026 年 5 月 14 日。正式版日期要等官方来源。',
      ],
      [
        'subnautica 2 release time',
        '上线后倒计时内容基本过时，已经在玩的玩家更该看补丁状态。',
      ],
      [
        'subnautica 2 steam',
        'Steam 是确认抢先体验状态、系统信息和官方公告的主要页面。',
      ],
      [
        'subnautica 2 xbox game pass',
        '先看官方商店或平台页面，不要只看第三方摘要。',
      ],
      ['subnautica 2 ps5', '没有官方来源前，不要把 PS5 时间写成确定日期。'],
    ],
    visualTitle: '发售状态卡片',
    visualItems: [
      {
        label: '上线',
        value: '5月14日',
        note: '这里追踪的是抢先体验上线日期。',
      },
      { label: '状态', value: 'EA', note: '攻略需要跟着补丁继续更新。' },
      { label: '关注', value: '路线图', note: '判断后续更新方向最稳。' },
    ],
    cautionTitle: '不要把猜测写成日期',
    cautionBody:
      '搜索需求很高，但不代表所有平台传闻都有价值。PS5、主机或 1.0 日期如果没有官方来源，就应该明确写成未确认。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 什么时候上线？',
        body: 'Subnautica 2 在 2026 年 5 月 14 日进入抢先体验。',
      },
      {
        title: 'Subnautica 2 已经正式发售了吗？',
        body: '还没有。现在公开版本是 Early Access，后续还有热修和路线图更新。',
      },
      {
        title: 'Subnautica 2 有 PS5 发售日期吗？',
        body: '除非 Unknown Worlds 或官方平台页面确认，否则不要相信具体 PS5 日期。',
      },
      {
        title: '为什么发售时间和攻略有关？',
        body: '抢先体验补丁会影响资源、Bug、路线难度和联机体验，所以发售页应该引导玩家去看最新补丁攻略。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2Updates, label: '路线图和更新' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 更新内容' },
      { href: Routes.Subnautica2Coop, label: '联机攻略' },
      { href: Routes.Subnautica2Map, label: '地图攻略' },
      {
        href: Routes.Subnautica2SilverAfterHotfix2,
        label: 'Hotfix 2 后的 Silver',
      },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 1 日核对 Steam 官方页面、Unknown Worlds 抢先体验路线图和 Hotfix 2。选题来自 Bing 自动补全里 release date、release time、PS5、Xbox、Game Pass、Steam 等搜索词。',
    cardKicker: '发售状态卡',
    cardBody:
      '给搜索发售时间、平台、抢先体验和上线后该看什么攻略的玩家看的状态页。',
    cardTypeLabel: '类型',
    cardTypeValue: '状态攻略',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 発売日、Early Access、PS5、Xbox、Game Passまとめ',
      description:
        'Subnautica 2の発売日、Early Access状況、Steam、Xbox、Game Pass、PS5検索、リリース時間、公式情報を整理します。',
    },
    eyebrow: 'Subnautica 2 発売日',
    title: 'Subnautica 2 発売日とプラットフォーム状況',
    description:
      '発売日検索にはEarly Access、正式版、PS5、Xbox、Game Pass、カウントダウンが混ざっています。ここでは確認できる情報だけを分けて整理します。',
    quickLabel: '結論',
    quickAnswer:
      'Subnautica 2は2026年5月14日にEarly Accessとして公開されました。Steam公式ページではEarly Access扱いで、Unknown Worldsのロードマップもホットフィックス、改善アップデート、co-op関連、より大きなコンテンツ追加を予定しています。1.0の正確な日付やPS5時期は、公式ソースがない限り未確認として扱うべきです。',
    fieldNotesTitle: '検索意図メモ',
    fieldNotes: [
      {
        title: '発売日には2つの意味がある',
        body: 'Early Access開始日を知りたい人と、正式版1.0の日付を知りたい人がいます。記事では必ず分けて書きます。',
      },
      {
        title: 'プラットフォーム情報は慎重に',
        body: 'Steam、Xbox、Game Pass、PS5の検索が混ざります。確認済みと未確認を分けるのが大事です。',
      },
      {
        title: 'カウントダウンは古くなりやすい',
        body: 'Early Access開始後は、カウントダウンより現在のパッチ状況の方が役に立ちます。',
      },
    ],
    routeChecklistTitle: '発売日ページを見る前に',
    routeChecklist: [
      'Early Access開始日か、正式版1.0の日付かを確認する。',
      'SteamまたはUnknown Worlds公式リンクがあるか見る。',
      'PS5やコンソール時期は公式ソースがあるか確認する。',
      'すでに遊んでいるなら最新Hotfixページを読む。',
    ],
    contentsLabel: '目次',
    routeTitle: '現在の発売状況の読み方',
    routeSteps: [
      {
        title: 'まずEarly Accessを見る',
        body: '確認できる日付は2026年5月14日のEarly Access開始です。Abyss Guidesの攻略もこの公開ビルドを基準にしています。',
      },
      {
        title: '1.0とホットフィックスを分ける',
        body: 'ホットフィックスの予定から正式版1.0の日付を推測するのは危険です。公式発表があるまで未確認です。',
      },
      {
        title: 'プラットフォーム情報はソースで判断',
        body: 'Steam、Xbox、Game Pass、PS5の検索需要は高いですが、公式ページなしの時期は断定しません。',
      },
      {
        title: '次はロードマップを見る',
        body: 'ロードマップは、ホットフィックス、改善、co-op、コンテンツ追加という更新の形を確認するのに向いています。',
      },
    ],
    tableTitle: '発売日検索への答え',
    tableHeaders: ['検索', '実用的な答え'],
    tableRows: [
      [
        'subnautica 2 release date',
        'Early Access開始日は2026年5月14日。正式版日付は公式確認が必要です。',
      ],
      [
        'subnautica 2 release time',
        '開始後のカウントダウンは古くなりがちです。今はパッチ状況を確認しましょう。',
      ],
      [
        'subnautica 2 steam',
        'SteamはEarly Access状況、仕様、公式告知を確認する中心ページです。',
      ],
      [
        'subnautica 2 xbox game pass',
        '公式ストアやプラットフォームページで確認してから判断します。',
      ],
      ['subnautica 2 ps5', '公式ソースがないPS5時期は未確認として扱います。'],
    ],
    visualTitle: '発売状況カード',
    visualItems: [
      { label: '開始', value: '5月14日', note: 'Early Access開始日です。' },
      {
        label: '状態',
        value: 'EA',
        note: '攻略はパッチに合わせて更新します。',
      },
      {
        label: '確認',
        value: 'Roadmap',
        note: '今後の更新方針を見る場所です。',
      },
    ],
    cautionTitle: '推測を日付にしない',
    cautionBody:
      '検索需要が高くても、PS5、コンソール、1.0の日付を公式発表なしで断定するべきではありません。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2はいつ発売されましたか？',
        body: '2026年5月14日にEarly Accessとして公開されました。',
      },
      {
        title: 'Subnautica 2は正式リリース済みですか？',
        body: 'いいえ。現在はEarly Accessで、今後もホットフィックスとアップデートが続きます。',
      },
      {
        title: 'PS5版の発売日はありますか？',
        body: 'Unknown Worldsまたは公式プラットフォームが発表するまでは未確認です。',
      },
      {
        title: '攻略と発売日がなぜ関係しますか？',
        body: 'Early Accessのパッチで資源、バグ、ルート難度、co-op挙動が変わるためです。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2Updates, label: 'ロードマップと更新' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2変更点' },
      { href: Routes.Subnautica2Coop, label: 'Co-opガイド' },
      { href: Routes.Subnautica2Map, label: 'マップガイド' },
      {
        href: Routes.Subnautica2SilverAfterHotfix2,
        label: 'Hotfix 2後のSilver',
      },
    ],
    sourcesTitle: 'ソース',
    sourceBody:
      '2026年6月1日にSteam公式ページ、Unknown Worlds Early Accessロードマップ、Hotfix 2を確認。検索テーマはBing autocompleteのrelease date、release time、PS5、Xbox、Game Pass、Steamから選びました。',
    cardKicker: 'Release card',
    cardBody:
      '発売日、プラットフォーム、Early Access、発売後に読むべき攻略を整理するページです。',
    cardTypeLabel: '種類',
    cardTypeValue: 'Status guide',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: '状態',
    cardStatusValue: 'Early Access',
  },
};

function getCopy(locale: Locale): ReleaseDateCopy {
  return releaseDateCopy[locale] ?? releaseDateCopy.en;
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
    pathname: Routes.Subnautica2ReleaseDate,
  });
}

export default async function ReleaseDateGuidePage({
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
      icon={CalendarDaysIcon}
      locale={locale}
      pathname={Routes.Subnautica2ReleaseDate}
      sources={sharedSources}
    />
  );
}
