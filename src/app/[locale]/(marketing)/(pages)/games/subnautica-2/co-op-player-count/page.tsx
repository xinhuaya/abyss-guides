import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { UsersIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type CoopCountCopy = ResourceGuideCopy & {
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
    href: 'https://www.xbox.com/en-US/games/store/subnautica-2/9pjpcb188svg',
    label: 'Official Xbox listing',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap',
    label: 'Unknown Worlds Early Access roadmap',
  },
];

const copyByLocale: Record<string, CoopCountCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Co-op Player Count, Crossplay, and Local Co-op',
      description:
        'A source-backed Subnautica 2 co-op player count guide covering 2-4 player online co-op, crossplay, local couch co-op searches, hosting, invites, and Early Access caveats.',
    },
    eyebrow: 'Subnautica 2 co-op player count',
    title: 'Subnautica 2 Co-op Player Count and Crossplay',
    description:
      'Most co-op searches are not about deep strategy. Players want one clean answer: how many people can play, whether crossplay works, and whether local couch co-op is a thing.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Official store listings point to small-team online co-op, with Xbox listing 2-4 online co-op and Steam promoting four-player co-op plus cross-platform multiplayer. Treat local or couch co-op claims carefully: check the official store page for your platform before planning a shared-screen session.',
    fieldNotesTitle: 'Search intent notes',
    fieldNotes: [
      {
        title: 'Player count is the main query',
        body: 'Searches like co-op player count and how many players usually need a fast answer before anything else.',
      },
      {
        title: 'Local co-op is a different question',
        body: 'Online co-op does not automatically mean couch co-op. A guide should not blur those together.',
      },
      {
        title: 'Crossplay can still have account friction',
        body: 'A store listing can support cross-platform multiplayer while invites, accounts, and patch behavior still need checking in real sessions.',
      },
    ],
    routeChecklistTitle: 'Before starting a session',
    routeChecklist: [
      'Confirm the official store page for your platform.',
      'Choose the host with the most stable connection.',
      'Agree on voice chat before the first long dive.',
      'Name routes and lockers before the base becomes crowded.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to plan co-op around the player count',
    routeSteps: [
      {
        title: 'Read the listing, not a copied summary',
        body: 'For player count and crossplay, start with Steam, Xbox, or the official platform page. These details can be updated during Early Access.',
      },
      {
        title: 'Plan for 2-4 online players',
        body: 'Small-team co-op works best when the team has one host, one shared base plan, and one agreed crafting target. Four players with no plan can burn through materials quickly.',
      },
      {
        title: 'Do not assume couch co-op',
        body: 'If you are searching for local co-op or couch co-op, verify the platform listing directly. Online co-op and split-screen co-op are not the same feature.',
      },
      {
        title: 'Check crossplay before a long save',
        body: 'If your group is split across stores or platforms, test invites and reconnects before building a serious shared base.',
      },
    ],
    tableTitle: 'Co-op search answers',
    tableHeaders: ['Search', 'Practical answer'],
    tableRows: [
      [
        'subnautica 2 co-op player count',
        'Official listings point to small-team online co-op, with Xbox listing 2-4 players and Steam promoting four-player co-op.',
      ],
      [
        'subnautica 2 crossplay',
        'Steam lists cross-platform multiplayer. Test invites for your own platform mix before a long session.',
      ],
      [
        'subnautica 2 local co-op',
        'Do not assume split-screen or couch co-op from online co-op wording. Check the platform page directly.',
      ],
      [
        'subnautica 2 couch co-op',
        'Treat couch co-op claims as unconfirmed unless the store page says it clearly.',
      ],
      [
        'subnautica 2 co-op host',
        'Pick the most stable player and schedule because the shared save experience depends on access.',
      ],
    ],
    visualTitle: 'Co-op readiness card',
    visualItems: [
      {
        label: 'Count',
        value: '2-4',
        note: 'Use official listings for current platform wording.',
      },
      {
        label: 'Mode',
        value: 'Online',
        note: 'Do not confuse online co-op with couch co-op.',
      },
      {
        label: 'Test',
        value: 'Invites',
        note: 'Try crossplay before committing to a long save.',
      },
    ],
    cautionTitle: 'Do not promise local co-op without a source',
    cautionBody:
      'Local co-op, split-screen, and couch co-op are high-intent searches, but they are also easy to answer wrongly. If the official platform listing does not say it, write the claim as unconfirmed.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How many players can play Subnautica 2 co-op?',
        body: 'Official listings point to small-team online co-op, with Xbox listing 2-4 players and Steam promoting four-player co-op.',
      },
      {
        title: 'Does Subnautica 2 have crossplay?',
        body: 'Steam lists cross-platform multiplayer. Because the game is in Early Access, test your platform mix before a long shared save.',
      },
      {
        title: 'Does Subnautica 2 have local or couch co-op?',
        body: 'Do not assume local co-op from online co-op wording. Check your platform store page for the exact supported modes.',
      },
      {
        title: 'What should a co-op group do first?',
        body: 'Pick the host, test invites, agree on voice chat, then set shared locker names and a first crafting goal.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Coop, label: 'Full Co-op Guide' },
      {
        href: Routes.Subnautica2DedicatedServer,
        label: 'Dedicated Server Status',
      },
      { href: Routes.Subnautica2OfflineMode, label: 'Offline Mode' },
      {
        href: Routes.Subnautica2SplitScreenCoop,
        label: 'Split Screen and Couch Co-op',
      },
      { href: Routes.Subnautica2Map, label: 'Map and Biomes Guide' },
      { href: Routes.Subnautica2BaseBuilding, label: 'Base Building Guide' },
      {
        href: Routes.Subnautica2InteractiveMap,
        label: 'Interactive Map Guide',
      },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 1, 2026 against official Steam and Xbox listings plus the Unknown Worlds roadmap. Topic choice follows Bing autocomplete demand for co-op mode, co-op player count, local co-op, couch co-op, and cross-platform play.',
    cardKicker: 'Co-op search card',
    cardBody:
      'A direct answer page for player count, online co-op, crossplay, local co-op searches, hosting, and invite checks.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Co-op status guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 联机人数、跨平台和本地合作说明',
      description:
        'Subnautica 2 联机人数中文指南，整理 2-4 人在线合作、跨平台、本地/同屏合作搜索、房主、邀请和抢先体验注意事项。',
    },
    eyebrow: 'Subnautica 2 联机人数',
    title: 'Subnautica 2 联机人数和跨平台说明',
    description:
      '大部分联机搜索不是在问复杂攻略，而是在问一个直接问题：几个人能玩、能不能跨平台、有没有本地同屏。',
    quickLabel: '快速结论',
    quickAnswer:
      '官方商店信息指向小队在线合作：Xbox 页面标注 2-4 人在线合作，Steam 也宣传 4 人合作和跨平台多人。至于本地合作、同屏合作或 couch co-op，不要从“在线合作”自动推断，开局前要看对应平台的官方页面。',
    fieldNotesTitle: '搜索意图笔记',
    fieldNotes: [
      {
        title: '联机人数是第一问题',
        body: 'co-op player count、how many players 这类搜索，玩家通常只想先得到一个快答案。',
      },
      {
        title: '本地合作是另一回事',
        body: '在线合作不等于同屏合作。文章里必须分开写，不能混成一个说法。',
      },
      {
        title: '跨平台也可能有账号摩擦',
        body: '商店写支持跨平台多人，不代表每种邀请、账号和补丁状态都完全顺滑。正式长期开档前先测试。',
      },
    ],
    routeChecklistTitle: '开联机前检查',
    routeChecklist: [
      '先确认自己平台的官方商店页面。',
      '选网络最稳、上线最规律的人当房主。',
      '长途下潜前先约好语音方式。',
      '基地变乱前先统一路线名和箱子名。',
    ],
    contentsLabel: '目录',
    routeTitle: '按联机人数规划开局',
    routeSteps: [
      {
        title: '看官方页面，不看复制摘要',
        body: '联机人数和跨平台信息优先看 Steam、Xbox 或对应平台官方页面。抢先体验期间这些说明可能会调整。',
      },
      {
        title: '按 2-4 人在线合作来规划',
        body: '小队联机最需要一个稳定房主、一套共享基地规则和一个共同制作目标。四个人没有计划，很快就会把材料花乱。',
      },
      {
        title: '不要默认有本地同屏',
        body: '如果你搜的是 local co-op 或 couch co-op，一定要直接核对平台页面。在线合作和分屏合作不是同一个功能。',
      },
      {
        title: '跨平台先试邀请',
        body: '队伍如果跨商店或跨平台，先测试邀请、断线重连，再认真建长期共享基地。',
      },
    ],
    tableTitle: '联机搜索怎么回答',
    tableHeaders: ['搜索词', '实用回答'],
    tableRows: [
      [
        'subnautica 2 co-op player count',
        '官方信息指向小队在线合作，Xbox 标注 2-4 人，Steam 宣传 4 人合作。',
      ],
      [
        'subnautica 2 crossplay',
        'Steam 写有跨平台多人。正式长期开档前先测试自己的平台组合。',
      ],
      [
        'subnautica 2 local co-op',
        '不要把在线合作理解成本地同屏，先看平台页面。',
      ],
      [
        'subnautica 2 couch co-op',
        '没有官方商店明确说明前，同屏合作不要写成确定。',
      ],
      [
        'subnautica 2 co-op host',
        '选网络最稳、时间最规律的人，因为共享存档体验很依赖访问稳定性。',
      ],
    ],
    visualTitle: '联机准备卡片',
    visualItems: [
      { label: '人数', value: '2-4', note: '以官方平台页面当前写法为准。' },
      { label: '模式', value: '在线', note: '不要把在线合作等同于本地同屏。' },
      { label: '测试', value: '邀请', note: '跨平台长期开档前先试一次。' },
    ],
    cautionTitle: '没有来源就不要承诺本地合作',
    cautionBody:
      'local co-op、split-screen、couch co-op 都是高意图搜索，但也最容易写错。官方平台页面没写清楚，就应该标成未确认。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 联机最多几个人？',
        body: '官方页面指向小队在线合作，Xbox 标注 2-4 人，Steam 宣传 4 人合作。',
      },
      {
        title: 'Subnautica 2 支持跨平台吗？',
        body: 'Steam 页面写有跨平台多人。抢先体验阶段，建议先测试自己的平台组合。',
      },
      {
        title: 'Subnautica 2 有本地合作或同屏吗？',
        body: '不要从在线合作自动推断本地同屏。请查看你所在平台商店页的具体模式。',
      },
      {
        title: '联机开局先做什么？',
        body: '选房主、测试邀请、约好语音，然后统一箱子名和第一个共同制作目标。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2Coop, label: '完整联机指南' },
      {
        href: Routes.Subnautica2DedicatedServer,
        label: '专用服务器状态',
      },
      { href: Routes.Subnautica2OfflineMode, label: '离线模式' },
      { href: Routes.Subnautica2SplitScreenCoop, label: '分屏和本地双人' },
      { href: Routes.Subnautica2Map, label: '地图和生态区' },
      { href: Routes.Subnautica2BaseBuilding, label: '基地建造指南' },
      { href: Routes.Subnautica2InteractiveMap, label: '互动地图指南' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 更新内容' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 1 日核对 Steam、Xbox 官方页面和 Unknown Worlds 路线图。选题来自 Bing 自动补全中的 co-op mode、co-op player count、local co-op、couch co-op、cross-platform play。',
    cardKicker: '联机搜索卡',
    cardBody:
      '直接回答联机人数、在线合作、跨平台、本地合作搜索、房主和邀请检查的页面。',
    cardTypeLabel: '类型',
    cardTypeValue: '联机状态指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 co-op人数、クロスプレイ、ローカルco-op',
      description:
        'Subnautica 2のco-op人数、2-4人オンライン協力、クロスプレイ、ローカル/カウチco-op検索、ホスト、招待、Early Access注意点を整理します。',
    },
    eyebrow: 'Subnautica 2 co-op人数',
    title: 'Subnautica 2 co-op人数とクロスプレイ',
    description:
      'co-op検索の多くは深い攻略ではなく、何人で遊べるか、クロスプレイできるか、ローカル協力があるかを知りたいだけです。',
    quickLabel: '結論',
    quickAnswer:
      '公式ストア情報では小規模なオンラインco-opが示されています。Xboxは2-4人オンラインco-op、Steamは4人co-opとクロスプラットフォームマルチプレイを掲げています。ローカルまたはカウチco-opは、オンラインco-op表記から自動的に判断しないでください。',
    fieldNotesTitle: '検索意図メモ',
    fieldNotes: [
      {
        title: '人数が最初の質問',
        body: 'co-op player countやhow many playersの検索は、まず短い答えを求めています。',
      },
      {
        title: 'ローカルco-opは別問題',
        body: 'オンラインco-opはカウチco-opと同じ意味ではありません。記事では分けて書きます。',
      },
      {
        title: 'クロスプレイにも確認が必要',
        body: 'クロスプラットフォーム対応でも、招待、アカウント、パッチ状況で挙動が変わる場合があります。',
      },
    ],
    routeChecklistTitle: 'セッション前に確認',
    routeChecklist: [
      '自分のプラットフォームの公式ストアを確認する。',
      '接続が安定している人をホストにする。',
      '最初の長い潜水前にボイスチャットを決める。',
      '基地が散らかる前にルート名とロッカー名を決める。',
    ],
    contentsLabel: '目次',
    routeTitle: '人数に合わせたco-op計画',
    routeSteps: [
      {
        title: 'コピー記事ではなく公式ページを見る',
        body: '人数とクロスプレイはSteam、Xbox、または各プラットフォームの公式ページから確認します。',
      },
      {
        title: '2-4人オンライン前提で計画する',
        body: '小規模co-opでは、ホスト、共有拠点ルール、最初のクラフト目標を決めておくと楽です。',
      },
      {
        title: 'カウチco-opを仮定しない',
        body: 'local co-opやcouch co-opを探しているなら、プラットフォームページの対応モードを直接確認します。',
      },
      {
        title: '長期セーブ前に招待をテスト',
        body: 'ストアやプラットフォームが混ざる場合は、本格的な拠点作りの前に招待と再接続を試します。',
      },
    ],
    tableTitle: 'co-op検索への答え',
    tableHeaders: ['検索', '実用的な答え'],
    tableRows: [
      [
        'subnautica 2 co-op player count',
        '公式情報では小規模オンラインco-op。Xboxは2-4人、Steamは4人co-opを掲げています。',
      ],
      [
        'subnautica 2 crossplay',
        'Steamはクロスプラットフォームマルチプレイを掲載。長期プレイ前に招待を確認しましょう。',
      ],
      [
        'subnautica 2 local co-op',
        'オンラインco-op表記からローカル同時プレイを仮定しないでください。',
      ],
      [
        'subnautica 2 couch co-op',
        'ストアページが明記していない限り未確認として扱います。',
      ],
      [
        'subnautica 2 co-op host',
        '安定した回線と予定の合う人をホストにします。',
      ],
    ],
    visualTitle: 'co-op準備カード',
    visualItems: [
      { label: '人数', value: '2-4', note: '公式ストア表記を確認。' },
      { label: 'モード', value: 'Online', note: 'カウチco-opとは別です。' },
      { label: 'テスト', value: 'Invites', note: '長期セーブ前に試す。' },
    ],
    cautionTitle: 'ソースなしでローカルco-opを断定しない',
    cautionBody:
      'local co-op、split-screen、couch co-opは検索意図が強い一方で誤答も多い項目です。公式ページが明記していなければ未確認です。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2のco-op人数は？',
        body: '公式情報では小規模オンラインco-op。Xboxは2-4人、Steamは4人co-opを掲げています。',
      },
      {
        title: 'Subnautica 2はクロスプレイ対応ですか？',
        body: 'Steamはクロスプラットフォームマルチプレイを掲載しています。Early Access中なので自分の組み合わせを確認しましょう。',
      },
      {
        title: 'ローカルまたはカウチco-opはありますか？',
        body: 'オンラインco-op表記からは判断できません。各プラットフォームのストアページで確認してください。',
      },
      {
        title: 'co-opで最初に決めることは？',
        body: 'ホスト、招待、ボイスチャット、ロッカー名、最初のクラフト目標です。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2Coop, label: 'Co-opガイド' },
      { href: Routes.Subnautica2Map, label: 'マップとバイオーム' },
      { href: Routes.Subnautica2BaseBuilding, label: '拠点建築ガイド' },
      {
        href: Routes.Subnautica2InteractiveMap,
        label: 'インタラクティブマップ',
      },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2変更点' },
    ],
    sourcesTitle: 'ソース',
    sourceBody:
      '2026年6月1日にSteam、Xbox公式ページ、Unknown Worldsロードマップを確認。テーマはBing autocompleteのco-op mode、co-op player count、local co-op、couch co-op、cross-platform playから選びました。',
    cardKicker: 'Co-op search card',
    cardBody:
      '人数、オンラインco-op、クロスプレイ、ローカルco-op検索、ホスト、招待確認のためのページです。',
    cardTypeLabel: '種類',
    cardTypeValue: 'Co-op status guide',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: '状態',
    cardStatusValue: 'Early Access',
  },
};

function getCopy(locale: Locale): CoopCountCopy {
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
    pathname: Routes.Subnautica2CoopPlayerCount,
  });
}

export default async function CoopPlayerCountGuidePage({
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
      icon={UsersIcon}
      locale={locale}
      pathname={Routes.Subnautica2CoopPlayerCount}
      sources={sharedSources}
    />
  );
}
