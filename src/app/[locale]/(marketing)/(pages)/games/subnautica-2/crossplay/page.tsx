import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { UsersRoundIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type CrossplayCopy = ResourceGuideCopy & {
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
    label: 'Official Steam page',
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
    href: 'https://www.youtube.com/watch?v=6t2nDHldoSk',
    label: 'Official Subnautica 2 gameplay trailer',
  },
];

const crossplayCopy: Record<string, CrossplayCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Crossplay: Steam, Xbox, Game Pass, and Co-op Notes',
      description:
        'A source-backed Subnautica 2 crossplay guide for Steam, Xbox, PC Game Pass, co-op invites, and what to check before planning a squad save.',
    },
    eyebrow: 'Subnautica 2 crossplay',
    title:
      'Subnautica 2 Crossplay: What to Check Before You Start a Co-op Save',
    description:
      'Crossplay searches usually come from one real situation: a friend owns the game somewhere else and nobody wants to buy or install twice. This page keeps the answer practical and source-led.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Use the official Steam and Xbox pages first, then check the current build notes before promising a mixed-platform co-op night. Subnautica 2 is built around co-op, but crossplay details can depend on the store build, account flow, and Early Access updates. If Steam, Xbox, or Game Pass wording changes, treat the newest official listing as stronger than old forum posts.',
    fieldNotesTitle: 'Why players search this',
    fieldNotes: [
      {
        title: 'Buying decisions happen before the first dive',
        body: 'Crossplay is not a tiny feature question. It decides whether a group buys on Steam, installs through Game Pass, or waits.',
      },
      {
        title: 'Co-op and crossplay are not the same word',
        body: 'A page can confirm co-op without answering every Steam-to-Xbox scenario. Keep those two ideas separate when reading store pages.',
      },
      {
        title: 'Early Access pages age quickly',
        body: 'If a patch adjusts sessions, invites, or multiplayer stability, last week’s answer may be incomplete.',
      },
    ],
    routeChecklistTitle: 'Before planning co-op',
    routeChecklist: [
      'Check the Steam page for PC build and Early Access wording.',
      'Check the Xbox listing for Xbox, PC Game Pass, and cloud wording.',
      'Make sure every player is on the same current build.',
      'Read the newest hotfix if invites or sessions feel unstable.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to read crossplay information',
    routeSteps: [
      {
        title: 'Start with platform listings',
        body: 'Steam and Xbox listings are the safest places to verify platform wording. If a third-party guide says crossplay works a certain way, it should still line up with those pages.',
      },
      {
        title: 'Separate online co-op from local co-op',
        body: 'Most player confusion starts here. Online co-op, split-screen, and cross-platform play are different features. Do not assume one confirms the others.',
      },
      {
        title: 'Check invites after updates',
        body: 'Early Access builds move fast. If a patch lands, re-check invites, party flow, and account prompts before blaming your network.',
      },
      {
        title: 'Use a low-risk test save',
        body: 'Before a four-player main save, make a short test session. Confirm everyone can join, save, leave, and return.',
      },
    ],
    tableTitle: 'Crossplay search terms and practical answers',
    tableHeaders: ['Search term', 'Answer to give'],
    tableRows: [
      [
        'subnautica 2 crossplay',
        'Check current Steam and Xbox wording before treating any mixed-platform claim as final.',
      ],
      [
        'subnautica 2 steam xbox crossplay',
        'Use official store pages first, then test invites on the current build.',
      ],
      [
        'subnautica 2 game pass crossplay',
        'Game Pass wording should be checked on the Xbox listing before installing.',
      ],
      [
        'subnautica 2 local co op',
        'Do not confuse local co-op searches with online co-op or crossplay.',
      ],
      [
        'subnautica 2 coop with friends',
        'Confirm same build, account prompts, and invitation flow before starting a serious save.',
      ],
    ],
    visualTitle: 'Crossplay prep card',
    visualItems: [
      {
        label: 'Best first check',
        value: 'Store pages',
        note: 'Steam and Xbox are stronger than copied summaries.',
      },
      {
        label: 'Safest test',
        value: 'Short save',
        note: 'Test joining and returning before a main co-op world.',
      },
      {
        label: 'Risk point',
        value: 'Patches',
        note: 'Early Access updates can change session behavior.',
      },
    ],
    cautionTitle: 'Do not turn a co-op listing into a crossplay promise',
    cautionBody:
      'That is the main trap. A store page can say the game supports co-op while still leaving details about mixed storefronts, account flow, or platform support for later notes. Write the answer as a checklist, not a rumor.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Does Subnautica 2 have crossplay?',
        body: 'Check the official Steam and Xbox pages for the newest platform wording. This guide avoids treating old summaries as final because Early Access details can move.',
      },
      {
        title: 'Can Steam and Xbox players play together?',
        body: 'That is the exact case to verify against official store wording and the current build. Test with a short save before committing a group playthrough.',
      },
      {
        title: 'Is local split-screen the same as crossplay?',
        body: 'No. Local co-op, online co-op, and cross-platform play are separate feature questions.',
      },
      {
        title: 'What should I do if friends cannot join?',
        body: 'Update the game, confirm the same build, restart the session, check platform services, and read the newest hotfix notes.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2CoopPlayerCount, label: 'Co-op Player Count' },
      {
        href: Routes.Subnautica2MultiplayerNotWorking,
        label: 'Multiplayer Not Working',
      },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      { href: Routes.Subnautica2ReleaseDate, label: 'Release Date' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 1, 2026 against official Steam, Xbox, Unknown Worlds roadmap notes, and the official trailer. The original image on this page is Abyss Guides artwork; the video embed is the official Subnautica trailer.',
    cardKicker: 'Co-op watch',
    cardBody:
      'A pre-install page for players comparing Steam, Xbox, Game Pass, and friend-group saves.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Platform guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Best action',
    cardStatusValue: 'Verify first',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 跨平台联机：Steam、Xbox、Game Pass 怎么看',
      description:
        'Subnautica 2 跨平台联机中文指南：整理 Steam、Xbox、PC Game Pass、好友邀请和开联机存档前需要核对的内容。',
    },
    eyebrow: 'Subnautica 2 跨平台联机',
    title: 'Subnautica 2 跨平台联机：开多人存档前先核对这些',
    description:
      '玩家搜 crossplay 通常不是随便看看，而是朋友在另一个平台，大家不想买错版本。这个页面只按官方来源和实际开局流程来写。',
    quickLabel: '快速结论',
    quickAnswer:
      '先看 Steam 和 Xbox 官方页面，再看当前版本说明，不要只靠旧帖子决定整队去哪买或安装。Subnautica 2 的重点包含联机体验，但跨平台细节可能受商店版本、账号流程和抢先体验更新影响。官方页面如果更新，要优先相信最新官方文字。',
    fieldNotesTitle: '为什么这个词值得做',
    fieldNotes: [
      {
        title: '这会影响购买',
        body: '跨平台不是小功能。它会决定一队朋友买 Steam、装 Game Pass，还是先等等。',
      },
      {
        title: '联机不等于跨平台',
        body: '页面确认 co-op，不代表每个 Steam 到 Xbox 的组合都已经说清楚。写攻略时要分开。',
      },
      {
        title: '抢先体验信息会变',
        body: '补丁如果改了邀请、会话或多人稳定性，旧答案就可能不完整。',
      },
    ],
    routeChecklistTitle: '开联机前核对',
    routeChecklist: [
      '先看 Steam 页面确认 PC 抢先体验信息。',
      '再看 Xbox 页面确认 Xbox、PC Game Pass 和云游戏相关文字。',
      '确认所有玩家都是同一个当前版本。',
      '如果邀请失败，先看最新 hotfix，不要马上怪网络。',
    ],
    contentsLabel: '目录',
    routeTitle: '跨平台信息怎么读',
    routeSteps: [
      {
        title: '先看平台商店页',
        body: 'Steam 和 Xbox 页面最适合确认平台文字。第三方攻略如果说得很绝对，也应该能和这些页面对上。',
      },
      {
        title: '把在线联机和本地双人分开',
        body: '很多误解都从这里开始。在线联机、分屏、本地双人、跨平台是不同问题，不能互相代替。',
      },
      {
        title: '更新后重新测试邀请',
        body: '抢先体验版本变动快。补丁发布后，先重新试邀请、队伍流程和账号提示。',
      },
      {
        title: '先建一个测试存档',
        body: '正式四人档之前，先用短存档测试加入、保存、退出和回档。',
      },
    ],
    tableTitle: '跨平台相关搜索怎么回答',
    tableHeaders: ['搜索词', '当前写法'],
    tableRows: [
      [
        'subnautica 2 crossplay',
        '先核对 Steam 和 Xbox 当前页面，不把混合平台说法写死。',
      ],
      [
        'subnautica 2 steam xbox crossplay',
        '优先看官方商店页，再用当前版本测试邀请。',
      ],
      [
        'subnautica 2 game pass crossplay',
        '安装前先看 Xbox 页面里的 Game Pass 说明。',
      ],
      ['subnautica 2 local co op', '不要把本地双人和在线跨平台混在一起。'],
      ['subnautica 2 coop with friends', '先确认同版本、账号提示和邀请流程。'],
    ],
    visualTitle: '跨平台准备卡',
    visualItems: [
      {
        label: '先看',
        value: '商店页',
        note: 'Steam 和 Xbox 比转载摘要可靠。',
      },
      {
        label: '最稳测试',
        value: '短存档',
        note: '先测试加入和回档，再开主存档。',
      },
      {
        label: '风险点',
        value: '补丁',
        note: '抢先体验更新可能改变会话表现。',
      },
    ],
    cautionTitle: '不要把 co-op 直接写成跨平台承诺',
    cautionBody:
      '这是最容易踩坑的地方。商店页可以确认联机，但混合平台、账号流程、平台支持细节未必都写完。这里更适合写成核对清单，而不是传闻结论。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 支持跨平台联机吗？',
        body: '请以 Steam 和 Xbox 官方页面的最新文字为准。本页不会把旧摘要当成最终结论。',
      },
      {
        title: 'Steam 和 Xbox 玩家能一起玩吗？',
        body: '这是需要重点核对的场景。先看官方页面，再用短存档测试当前版本。',
      },
      {
        title: '本地双人就是跨平台吗？',
        body: '不是。本地双人、在线联机、跨平台是三个不同问题。',
      },
      {
        title: '好友加不进来怎么办？',
        body: '更新游戏、确认同版本、重开会话、检查平台服务，再看最新 hotfix。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2CoopPlayerCount, label: '联机人数' },
      { href: Routes.Subnautica2MultiplayerNotWorking, label: '联机失败排查' },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      { href: Routes.Subnautica2ReleaseDate, label: '发售时间' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 1 日核对 Steam、Xbox、Unknown Worlds 路线图和官方预告片。本页图片为 Abyss Guides 原创图，视频为 Subnautica 官方 YouTube 嵌入。',
    cardKicker: '联机观察',
    cardBody: '给正在比较 Steam、Xbox、Game Pass 和好友存档方案的玩家看。',
    cardTypeLabel: '类型',
    cardTypeValue: '平台指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '建议',
    cardStatusValue: '先核对',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 クロスプレイ: Steam、Xbox、Game Passの確認点',
      description:
        'Subnautica 2のクロスプレイ確認ガイド。Steam、Xbox、PC Game Pass、フレンド招待、協力プレイ前のチェックを整理します。',
    },
    eyebrow: 'Subnautica 2 クロスプレイ',
    title: 'Subnautica 2 クロスプレイ: 協力プレイを始める前の確認',
    description:
      'クロスプレイ検索は、友達が別の環境で遊ぶ時に出てくる疑問です。買う前、入れる前に、公式情報から順に確認します。',
    quickLabel: '結論',
    quickAnswer:
      'まずSteamとXboxの公式ページを確認し、そのあと現在のビルド情報を見てください。Subnautica 2は協力プレイを重視していますが、クロスプレイの細部はストア版、アカウント手順、Early Access更新で変わる場合があります。',
    fieldNotesTitle: 'このページの役割',
    fieldNotes: [
      {
        title: '購入前に知りたい情報',
        body: 'クロスプレイは、Steamで買うか、Game Passで入れるかを決める材料になります。',
      },
      {
        title: 'co-opとクロスプレイは別',
        body: '協力プレイ対応と、すべてのプラットフォーム組み合わせ対応は同じ意味ではありません。',
      },
      {
        title: 'Early Accessでは更新を追う',
        body: '招待、セッション、安定性がパッチで変わることがあります。',
      },
    ],
    routeChecklistTitle: '協力プレイ前の確認',
    routeChecklist: [
      'SteamページでPC Early Accessの表記を見る。',
      'XboxページでXbox、PC Game Pass、Cloud表記を見る。',
      '全員が同じ現在ビルドか確認する。',
      '招待が不安定なら最新Hotfixを読む。',
    ],
    contentsLabel: '目次',
    routeTitle: 'クロスプレイ情報の読み方',
    routeSteps: [
      {
        title: '公式ストアから始める',
        body: 'SteamとXboxのページは、対応環境を確認する一番安全な場所です。第三者ページだけで決めないほうが安全です。',
      },
      {
        title: 'オンライン協力とローカル協力を分ける',
        body: 'オンライン協力、分割画面、クロスプラットフォームは別の機能です。',
      },
      {
        title: '更新後は招待を試す',
        body: 'パッチ後は招待、パーティー、アカウント表示をもう一度確認しましょう。',
      },
      {
        title: '短いテストセーブを作る',
        body: '本番セーブの前に、参加、保存、退出、復帰を確認すると安心です。',
      },
    ],
    tableTitle: '検索語と答え方',
    tableHeaders: ['検索語', '今の答え方'],
    tableRows: [
      [
        'subnautica 2 crossplay',
        'SteamとXboxの現在表記を確認してから判断します。',
      ],
      [
        'subnautica 2 steam xbox crossplay',
        '公式ストアを見て、現在ビルドで招待を試します。',
      ],
      [
        'subnautica 2 game pass crossplay',
        'XboxページのGame Pass表記を確認します。',
      ],
      [
        'subnautica 2 local co op',
        'ローカル協力とクロスプレイを混同しません。',
      ],
      [
        'subnautica 2 coop with friends',
        '同じビルド、招待手順、アカウント表示を確認します。',
      ],
    ],
    visualTitle: 'クロスプレイ確認カード',
    visualItems: [
      {
        label: '最初に見る',
        value: 'ストア',
        note: 'SteamとXboxの公式表記を優先。',
      },
      {
        label: 'テスト',
        value: '短いセーブ',
        note: '本番前に参加と復帰を確認。',
      },
      {
        label: '注意点',
        value: '更新',
        note: 'Early Accessのパッチで変わることがあります。',
      },
    ],
    cautionTitle: 'co-op表記をクロスプレイ確定にしない',
    cautionBody:
      '協力プレイ対応と混合プラットフォーム対応は別です。噂より、公式表記と現在ビルドで確認してください。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2はクロスプレイできますか？',
        body: 'SteamとXboxの公式ページで最新表記を確認してください。古いまとめだけでは判断しません。',
      },
      {
        title: 'SteamとXboxで一緒に遊べますか？',
        body: '公式表記と現在ビルドで確認し、短いセーブでテストするのがおすすめです。',
      },
      {
        title: 'ローカル協力はクロスプレイですか？',
        body: 'いいえ。ローカル協力、オンライン協力、クロスプレイは別です。',
      },
      {
        title: '友達が参加できない時は？',
        body: '更新、同じビルド、セッション再作成、プラットフォームサービス、Hotfixを確認します。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2CoopPlayerCount, label: '協力プレイ人数' },
      {
        href: Routes.Subnautica2MultiplayerNotWorking,
        label: 'マルチ不具合確認',
      },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      { href: Routes.Subnautica2ReleaseDate, label: '発売日' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2' },
    ],
    sourcesTitle: '出典メモ',
    sourceBody:
      '2026年6月1日にSteam、Xbox、Unknown Worldsロードマップ、公式トレーラーを確認。画像はAbyss Guidesオリジナル、動画はSubnautica公式YouTube埋め込みです。',
    cardKicker: 'Co-op watch',
    cardBody: 'Steam、Xbox、Game Pass、友達とのセーブを比べる人向けです。',
    cardTypeLabel: '種類',
    cardTypeValue: 'プラットフォームガイド',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: '次の行動',
    cardStatusValue: '先に確認',
  },
};

function getCopy(locale: Locale): CrossplayCopy {
  return crossplayCopy[locale] ?? crossplayCopy.en;
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
    pathname: Routes.Subnautica2Crossplay,
  });
}

export default async function Subnautica2CrossplayPage({
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
      icon={UsersRoundIcon}
      locale={locale}
      pathname={Routes.Subnautica2Crossplay}
      sources={sharedSources}
    />
  );
}
