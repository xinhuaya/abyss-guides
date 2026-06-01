import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { Gamepad2Icon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type Ps5ReleaseCopy = ResourceGuideCopy & {
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
    label: 'Official Xbox store listing',
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

const ps5ReleaseCopy: Record<string, Ps5ReleaseCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 PS5 Release Date: What Is Confirmed So Far',
      description:
        'A careful Subnautica 2 PS5 release date guide that separates official Steam and Xbox Early Access facts from unconfirmed PlayStation timing.',
    },
    eyebrow: 'Subnautica 2 PS5 status',
    title: 'Subnautica 2 PS5 Release Date: What to Trust',
    description:
      'Players are already searching for a PS5 date, but the useful answer is still source-first: check what the developer and platform pages actually say, then treat the rest as unconfirmed.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'There is no PS5 release date we would treat as confirmed from the official sources checked on June 1, 2026. Subnautica 2 is publicly tracked here as an Early Access game on Steam and Xbox/Game Pass sources. If a page gives you a PS5 day, month, or preorder window without an Unknown Worlds or PlayStation source, do not use it as a real date.',
    fieldNotesTitle: 'Why this page exists',
    fieldNotes: [
      {
        title: 'PS5 searches are high-intent',
        body: 'A player searching this term usually wants one plain answer: can I play it on PlayStation, and if not, should I wait?',
      },
      {
        title: 'The wrong answer can age badly',
        body: 'A made-up console window might get clicks for a week, then hurt trust. It is better to say "not confirmed" and keep the page updated.',
      },
      {
        title: 'Early Access changes the guide job',
        body: 'Even without a PS5 date, console players still need to know what the current PC and Xbox build contains, because those systems shape later port expectations.',
      },
    ],
    routeChecklistTitle: 'Before you believe a PS5 date',
    routeChecklist: [
      'Look for an Unknown Worlds news post or a PlayStation store page.',
      'Check whether the article is talking about Early Access or a full 1.0 launch.',
      'Ignore pages that only repeat a guessed year without a source link.',
      'Check the newest patch notes if you are following the game from console.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to read the PS5 situation',
    routeSteps: [
      {
        title: 'Start with the confirmed platforms',
        body: 'The official Steam page is the source of truth for the PC Early Access build. The Xbox listing is the place to check Xbox and Game Pass wording. Those pages are stronger than rumor posts.',
      },
      {
        title: 'Treat PS5 as unconfirmed until a platform page exists',
        body: 'A real PS5 date should be easy to verify. You should be able to click through to Unknown Worlds, PlayStation, or another official platform page.',
      },
      {
        title: 'Do not confuse 1.0 with console timing',
        body: 'Early Access roadmaps describe updates, fixes, co-op work, and content drops. They do not automatically create a PlayStation launch date.',
      },
      {
        title: 'Watch the patch cadence',
        body: 'Hotfix pages matter because they show how quickly the build is moving. If you are waiting on console, that cadence tells you more than a guessed preorder date.',
      },
    ],
    tableTitle: 'PS5 search terms and the careful answer',
    tableHeaders: ['Search term', 'What to say now'],
    tableRows: [
      [
        'subnautica 2 ps5 release date',
        'No official PS5 date is confirmed by the sources checked here.',
      ],
      [
        'is subnautica 2 on ps5',
        'Check PlayStation and Unknown Worlds before trusting a yes/no answer from a third-party page.',
      ],
      [
        'subnautica 2 playstation',
        'Use this as a watch topic, not a confirmed platform claim.',
      ],
      [
        'subnautica 2 console release',
        'Separate confirmed Xbox information from unconfirmed PlayStation timing.',
      ],
      [
        'subnautica 2 ps plus',
        'Do not assume PS Plus availability unless PlayStation announces it.',
      ],
    ],
    visualTitle: 'PS5 status card',
    visualItems: [
      {
        label: 'PS5 date',
        value: 'Unconfirmed',
        note: 'No sourced date is listed here yet.',
      },
      {
        label: 'Current build',
        value: 'EA',
        note: 'Early Access guides should keep changing with patches.',
      },
      {
        label: 'Best source',
        value: 'Official pages',
        note: 'Store pages and developer posts beat rumor summaries.',
      },
    ],
    cautionTitle: 'A missing date is still useful information',
    cautionBody:
      'For SEO, it is tempting to fill the gap with a soft prediction. For players, that is worse than saying the date is not confirmed. This page is designed to rank by being careful, updated, and easy to verify.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Does Subnautica 2 have a PS5 release date?',
        body: 'No confirmed PS5 release date is listed in the official sources checked for this page.',
      },
      {
        title: 'Could Subnautica 2 come to PlayStation later?',
        body: 'It could, but this page will not present that as fact until an official source says so.',
      },
      {
        title: 'Why do some sites show a PS5 date?',
        body: 'Some pages mix speculation, old placeholders, and platform guesses. Always follow the source link before believing the date.',
      },
      {
        title: 'What should PlayStation players read now?',
        body: 'The release-date page, Xbox/Game Pass status, co-op notes, and patch trackers are still useful because they explain the current Early Access build.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2ReleaseDate, label: 'Release Date Guide' },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass Guide' },
      {
        href: Routes.Subnautica2CoopPlayerCount,
        label: 'Co-op Player Count',
      },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
      { href: Routes.Subnautica2InteractiveMap, label: 'Interactive Map' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 1, 2026 against Steam, Xbox, Unknown Worlds roadmap notes, and Hotfix 2. The page is written for PS5 and PlayStation search demand, but it only treats platform timing as real when the source is official.',
    cardKicker: 'Platform watch',
    cardBody:
      'A cautious status page for players searching PS5, PlayStation, console release, and preorder timing.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Platform status',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'PS5',
    cardStatusValue: 'Unconfirmed',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 PS5 发售日：目前哪些信息能确认',
      description:
        'Subnautica 2 PS5 发售日中文整理：区分 Steam、Xbox、Game Pass 已确认信息，以及 PlayStation 仍未确认的时间。',
    },
    eyebrow: 'Subnautica 2 PS5 状态',
    title: 'Subnautica 2 PS5 发售日：先别信乱填的日期',
    description:
      '很多玩家会直接搜 PS5 什么时候能玩。这个页面只做一件事：把官方能确认的写清楚，把没有来源的日期挡在外面。',
    quickLabel: '快速结论',
    quickAnswer:
      '截至 2026 年 6 月 1 日核对的官方来源，本页不会把任何 PS5 发售日当成已确认信息。现在能稳定引用的是 Steam 的抢先体验页面、Xbox 商店/Game Pass 相关页面，以及 Unknown Worlds 的路线图和热修说明。看到没有官方来源的 PS5 日期，先不要当真。',
    fieldNotesTitle: '为什么要单独做这一页',
    fieldNotes: [
      {
        title: 'PS5 搜索意图很明确',
        body: '搜这个词的玩家通常只想知道一件事：PlayStation 能不能玩，不能的话要不要等。',
      },
      {
        title: '乱写日期很伤信任',
        body: '猜一个主机窗口期也许短期有点击，但更新一来就会过时。攻略站更适合写清楚“未确认”。',
      },
      {
        title: '抢先体验也值得跟踪',
        body: '即使 PS5 没有日期，PC 和 Xbox 当前版本的内容、联机和补丁节奏，仍然会影响玩家对后续主机版的判断。',
      },
    ],
    routeChecklistTitle: '相信一个 PS5 日期前先看',
    routeChecklist: [
      '有没有 Unknown Worlds 新闻或 PlayStation 商店页面。',
      '文章说的是抢先体验，还是正式版 1.0。',
      '只有猜测年份、没有来源链接的页面先跳过。',
      '如果你在等主机版，也要看最新补丁节奏。',
    ],
    contentsLabel: '目录',
    routeTitle: '怎么判断 PS5 信息',
    routeSteps: [
      {
        title: '先看已确认平台',
        body: 'Steam 官方页适合确认 PC 抢先体验状态。Xbox 商店页适合确认 Xbox 和 Game Pass 相关文字。这些来源比传闻摘要更可靠。',
      },
      {
        title: '没有官方页面就先写未确认',
        body: '真正的 PS5 日期应该很容易核对：你能点到 Unknown Worlds、PlayStation 或其他官方平台页面。',
      },
      {
        title: '不要把 1.0 和主机时间混在一起',
        body: '路线图讲的是热修、体验改进、联机和内容更新，并不自动等于 PlayStation 发售日。',
      },
      {
        title: '看补丁频率比看传言更有用',
        body: 'Hotfix 页面能看出当前版本推进速度。等主机版的玩家，参考这个比参考猜测预购日期更稳。',
      },
    ],
    tableTitle: 'PS5 相关搜索怎么回答',
    tableHeaders: ['搜索词', '当前建议写法'],
    tableRows: [
      [
        'subnautica 2 ps5 release date',
        '本页核对的官方来源里，还没有可确认的 PS5 日期。',
      ],
      [
        'is subnautica 2 on ps5',
        '先看 PlayStation 和 Unknown Worlds，不要只信第三方页面。',
      ],
      ['subnautica 2 playstation', '可以作为观察主题，但不要写成已确认平台。'],
      [
        'subnautica 2 console release',
        '要把已确认的 Xbox 信息和未确认的 PlayStation 时间分开。',
      ],
      ['subnautica 2 ps plus', '没有 PlayStation 公告前，不要推断 PS Plus。'],
    ],
    visualTitle: 'PS5 状态卡',
    visualItems: [
      {
        label: 'PS5 日期',
        value: '未确认',
        note: '本页暂不列任何无来源日期。',
      },
      {
        label: '当前版本',
        value: 'EA',
        note: '抢先体验攻略需要跟着补丁更新。',
      },
      { label: '最佳来源', value: '官方页', note: '商店页和开发者公告优先。' },
    ],
    cautionTitle: '没有日期，本身也是有用信息',
    cautionBody:
      '做 SEO 时很容易想用预测填空，但对玩家来说，乱猜比直接说未确认更糟。本页的目标是靠谨慎、更新和可核对来获得信任。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 有 PS5 发售日了吗？',
        body: '本页核对的官方来源里，还没有可确认的 PS5 发售日。',
      },
      {
        title: '以后可能上 PlayStation 吗？',
        body: '有可能，但在官方公布之前，本页不会把它写成事实。',
      },
      {
        title: '为什么有些网站写了 PS5 日期？',
        body: '有些页面会混用猜测、旧占位信息和平台推断。相信之前先点开它的来源。',
      },
      {
        title: 'PlayStation 玩家现在该看什么？',
        body: '发售日、Xbox/Game Pass 状态、联机人数和补丁页都值得看，因为它们能说明当前抢先体验版本是什么样。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2ReleaseDate, label: '发售日总览' },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass 指南' },
      { href: Routes.Subnautica2CoopPlayerCount, label: '联机人数' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 更新' },
      { href: Routes.Subnautica2InteractiveMap, label: '互动地图' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 1 日核对 Steam、Xbox、Unknown Worlds 路线图和 Hotfix 2。页面面向 PS5、PlayStation、主机版搜索需求，但只有官方来源确认的平台时间才会写成事实。',
    cardKicker: '平台观察',
    cardBody: '给搜索 PS5、PlayStation、主机版和预购时间的玩家看的谨慎状态页。',
    cardTypeLabel: '类型',
    cardTypeValue: '平台状态',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: 'PS5',
    cardStatusValue: '未确认',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 PS5発売日: 現時点で確認できること',
      description:
        'Subnautica 2のPS5発売日について、Steam、Xbox、Game Passの確認済み情報と、未確認のPlayStation情報を分けて整理します。',
    },
    eyebrow: 'Subnautica 2 PS5状況',
    title: 'Subnautica 2 PS5発売日: 日付をうのみにしない',
    description:
      'PS5でいつ遊べるのかを探している人向けに、公式情報で確認できることだけを整理します。',
    quickLabel: '結論',
    quickAnswer:
      '2026年6月1日に確認した公式情報では、PS5版の発売日は確認できません。現在このページで根拠として扱うのは、SteamのEarly Accessページ、Xboxストア/Game Pass関連ページ、Unknown WorldsのロードマップとHotfix情報です。公式ソースがないPS5の日付は、まだ信じないほうが安全です。',
    fieldNotesTitle: 'このページの役割',
    fieldNotes: [
      {
        title: 'PS5検索は目的がはっきりしている',
        body: '知りたいのは、PlayStationで遊べるのか、待つ価値があるのか。この2点です。',
      },
      {
        title: '推測の日付は信頼を落とす',
        body: '根拠のない発売時期を書くより、未確認と書いて更新し続けるほうが攻略サイトとして強いです。',
      },
      {
        title: 'Early Accessの動きも見ておきたい',
        body: 'PS5の日付がなくても、PCとXboxの現在のビルド、co-op、修正ペースは今後の判断材料になります。',
      },
    ],
    routeChecklistTitle: 'PS5日付を見る前に確認',
    routeChecklist: [
      'Unknown WorldsのニュースかPlayStationストアへのリンクがあるか。',
      'Early Accessの話か、正式版1.0の話か。',
      '根拠なしの予想年だけで書かれていないか。',
      '最新Hotfixで現在の更新ペースも確認する。',
    ],
    contentsLabel: '目次',
    routeTitle: 'PS5情報の読み方',
    routeSteps: [
      {
        title: '確認済みプラットフォームから見る',
        body: 'Steam公式ページはPCのEarly Access状況、XboxストアはXboxとGame Pass表記を確認する場所です。噂記事より優先して読みます。',
      },
      {
        title: '公式ページがなければ未確認',
        body: '本当のPS5発売日は、Unknown WorldsかPlayStationなどの公式ページで簡単に確認できるはずです。',
      },
      {
        title: '1.0とコンソール時期を混ぜない',
        body: 'ロードマップは修正、改善、co-op、コンテンツ追加の予定です。それだけでPlayStation発売日にはなりません。',
      },
      {
        title: 'パッチのペースを見る',
        body: 'Hotfixページを見ると、現在のビルドがどれくらい動いているか分かります。コンソール待ちの人にも役立ちます。',
      },
    ],
    tableTitle: 'PS5関連検索への答え',
    tableHeaders: ['検索語', 'いま書ける答え'],
    tableRows: [
      [
        'subnautica 2 ps5 release date',
        'このページで確認した公式情報では、PS5の日付は未確認です。',
      ],
      [
        'is subnautica 2 on ps5',
        'PlayStationとUnknown Worldsの公式情報を確認してから判断します。',
      ],
      [
        'subnautica 2 playstation',
        '監視すべきテーマですが、確認済みプラットフォームとは書きません。',
      ],
      [
        'subnautica 2 console release',
        '確認済みのXbox情報と、未確認のPlayStation情報を分けます。',
      ],
      [
        'subnautica 2 ps plus',
        'PlayStationの発表がない限り、PS Plus対応とは書きません。',
      ],
    ],
    visualTitle: 'PS5状況カード',
    visualItems: [
      {
        label: 'PS5日付',
        value: '未確認',
        note: '根拠のない日付は載せません。',
      },
      {
        label: '現在',
        value: 'EA',
        note: 'Early Accessの攻略はパッチで変わります。',
      },
      {
        label: '情報源',
        value: '公式',
        note: 'ストアと開発元の発表を優先します。',
      },
    ],
    cautionTitle: '日付がないことも情報です',
    cautionBody:
      '検索需要があるからといって、空白を予想で埋める必要はありません。未確認なら未確認と書くほうが、あとで読み返した時に信頼できます。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2のPS5発売日はありますか？',
        body: 'このページで確認した公式情報では、PS5発売日は未確認です。',
      },
      {
        title: 'あとからPlayStationに出る可能性はありますか？',
        body: '可能性はありますが、公式発表があるまでは事実として扱いません。',
      },
      {
        title: 'なぜPS5の日付を書いているサイトがあるのですか？',
        body: '推測、古いプレースホルダー、プラットフォーム予想が混ざっている場合があります。必ず出典を開いて確認してください。',
      },
      {
        title: 'PlayStation待ちなら何を読むべきですか？',
        body: '発売日、Xbox/Game Pass、co-op人数、Hotfix情報を見ると、現在のEarly Accessビルドが分かります。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2ReleaseDate, label: '発売日ガイド' },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Passガイド' },
      { href: Routes.Subnautica2CoopPlayerCount, label: 'co-op人数' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2変更点' },
      {
        href: Routes.Subnautica2InteractiveMap,
        label: 'インタラクティブマップ',
      },
    ],
    sourcesTitle: '出典メモ',
    sourceBody:
      '2026年6月1日にSteam、Xbox、Unknown Worldsのロードマップ、Hotfix 2を確認。PS5とPlayStation検索向けのページですが、公式情報で確認できる内容だけを事実として扱います。',
    cardKicker: 'Platform watch',
    cardBody:
      'PS5、PlayStation、コンソール版、予約時期を探している人向けの状況ページです。',
    cardTypeLabel: '種類',
    cardTypeValue: 'プラットフォーム状況',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: 'PS5',
    cardStatusValue: '未確認',
  },
};

function getCopy(locale: Locale): Ps5ReleaseCopy {
  return ps5ReleaseCopy[locale] ?? ps5ReleaseCopy.en;
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
    pathname: Routes.Subnautica2Ps5ReleaseDate,
  });
}

export default async function Ps5ReleaseDatePage({
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
      icon={Gamepad2Icon}
      locale={locale}
      pathname={Routes.Subnautica2Ps5ReleaseDate}
      sources={sharedSources}
    />
  );
}
