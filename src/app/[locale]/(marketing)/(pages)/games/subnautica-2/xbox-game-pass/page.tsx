import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { MonitorPlayIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type XboxGamePassCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-06-01';
const UPDATED_AT = '2026-06-01';

const sharedSources = [
  {
    href: 'https://www.xbox.com/en-US/games/store/subnautica-2/9pjpcb188svg',
    label: 'Official Xbox store listing',
  },
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

const xboxGamePassCopy: Record<string, XboxGamePassCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Xbox Game Pass Guide: Platforms, Co-op, and Updates',
      description:
        'A source-backed Subnautica 2 Xbox Game Pass guide covering the Xbox listing, Early Access status, co-op player count, Cloud searches, and patch notes.',
    },
    eyebrow: 'Subnautica 2 Xbox and Game Pass',
    title: 'Subnautica 2 on Xbox Game Pass: What to Check First',
    description:
      'This is the fast status page for players searching Xbox, Game Pass, PC Game Pass, Cloud, co-op, and whether the current Early Access build is worth installing.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Use the official Xbox store listing as the live source for Xbox and Game Pass availability, supported devices, Cloud wording, and co-op details. Steam remains useful for PC Early Access context, while Unknown Worlds posts are better for roadmap and patch timing. If you already installed the game, read the newest hotfix page before assuming an older guide still matches the build.',
    fieldNotesTitle: 'What Xbox players usually need',
    fieldNotes: [
      {
        title: 'Availability changes by store wording',
        body: 'Game Pass, PC Game Pass, Cloud, and console support should be checked against the Xbox page because store copy can change faster than guide pages.',
      },
      {
        title: 'Co-op is part of the search',
        body: 'Many Xbox searches are really about playing with friends. The Xbox listing is also where players look for multiplayer wording.',
      },
      {
        title: 'Early Access means patch-sensitive advice',
        body: 'Install size, bugs, resource routes, and co-op friction can change after hotfixes. A Game Pass page should point people to the patch tracker, not just the store.',
      },
    ],
    routeChecklistTitle: 'Before installing',
    routeChecklist: [
      'Open the Xbox listing and confirm availability for your device.',
      'Check whether you need console, PC Game Pass, or Cloud wording.',
      'Read the latest hotfix notes if a friend says a route or bug changed.',
      'Check co-op player count before planning a group session.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to use the Xbox and Game Pass listing',
    routeSteps: [
      {
        title: 'Check the official Xbox page first',
        body: 'The Xbox listing is the page to use for availability, supported platform wording, store requirements, and current Game Pass presentation.',
      },
      {
        title: 'Use Steam for Early Access context',
        body: 'Steam gives a clear PC Early Access frame. It helps explain why guides can change and why patch notes matter even if you play through Xbox.',
      },
      {
        title: 'Confirm co-op before inviting friends',
        body: 'Subnautica 2 searches often include multiplayer terms. Check the co-op player-count guide and the Xbox listing before planning a full group night.',
      },
      {
        title: 'Follow hotfixes after install',
        body: 'Game Pass lowers the friction to try the game, but Early Access still means rough edges. Hotfix notes are the page to read when something suddenly feels different.',
      },
    ],
    tableTitle: 'Xbox and Game Pass search answers',
    tableHeaders: ['Search', 'Practical answer'],
    tableRows: [
      [
        'subnautica 2 xbox game pass',
        'Start with the official Xbox listing for current availability and subscription wording.',
      ],
      [
        'subnautica 2 pc game pass',
        'Check the Xbox page for PC wording, then use Steam for broader Early Access context.',
      ],
      [
        'subnautica 2 cloud gaming',
        'Do not assume Cloud support from a third-party post. Verify it on the Xbox page.',
      ],
      [
        'subnautica 2 xbox co op',
        'Check the Xbox listing and the co-op player-count guide before planning a group session.',
      ],
      [
        'subnautica 2 xbox one',
        'Confirm supported devices on the official store page before installing or buying hardware around it.',
      ],
    ],
    visualTitle: 'Xbox status card',
    visualItems: [
      {
        label: 'Store',
        value: 'Xbox',
        note: 'Use the listing as the availability source.',
      },
      {
        label: 'Build',
        value: 'EA',
        note: 'Early Access details can change with hotfixes.',
      },
      {
        label: 'Plan',
        value: 'Co-op',
        note: 'Check player count before a group session.',
      },
    ],
    cautionTitle: 'Do not let Game Pass hide Early Access risk',
    cautionBody:
      'Game Pass makes trying the game easy, but it does not make the build final. If a route, bug, or co-op behavior changes, check the newest Unknown Worlds post before rewriting your plan.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Is Subnautica 2 on Xbox Game Pass?',
        body: 'Check the official Xbox store listing for current Game Pass and platform wording. That page is the source this guide points players to first.',
      },
      {
        title: 'Is Subnautica 2 on PC Game Pass?',
        body: 'Use the Xbox listing for current PC Game Pass wording, then use Steam and Unknown Worlds posts for Early Access and update context.',
      },
      {
        title: 'Can I play Subnautica 2 co-op on Xbox?',
        body: 'Read the Xbox listing and the co-op player-count guide before planning a session, because multiplayer wording and Early Access behavior are both important.',
      },
      {
        title: 'Should Game Pass players read patch notes?',
        body: 'Yes. Hotfixes can affect bugs, resource routes, and co-op friction even if you did not buy the game separately.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2ReleaseDate, label: 'Release Date Guide' },
      { href: Routes.Subnautica2Ps5ReleaseDate, label: 'PS5 Release Date' },
      {
        href: Routes.Subnautica2Switch2ReleaseDate,
        label: 'Switch 2 Release Date',
      },
      {
        href: Routes.Subnautica2CoopPlayerCount,
        label: 'Co-op Player Count',
      },
      {
        href: Routes.Subnautica2SplitScreenCoop,
        label: 'Split Screen and Couch Co-op',
      },
      {
        href: Routes.Subnautica2ControllerNotWorking,
        label: 'Controller Not Working',
      },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
      { href: Routes.Subnautica2SaveFileLocation, label: 'Save File Backup' },
      {
        href: Routes.Subnautica2SaveRecoveryCloudSync,
        label: 'Save Recovery Checklist',
      },
      { href: Routes.Subnautica2Beginner, label: 'Beginner Route' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 1, 2026 against the official Xbox listing, Steam Early Access page, Unknown Worlds roadmap, and Hotfix 2. Search topics were chosen around Xbox, Game Pass, PC Game Pass, Cloud, co-op, and install intent.',
    cardKicker: 'Game Pass card',
    cardBody:
      'A source-first page for Xbox and Game Pass players who want availability, co-op, and patch context before installing.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Platform guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Build',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Xbox Game Pass 指南：平台、联机和更新',
      description:
        'Subnautica 2 Xbox Game Pass 中文指南：整理 Xbox 商店、抢先体验、联机人数、云游戏搜索和补丁来源。',
    },
    eyebrow: 'Subnautica 2 Xbox / Game Pass',
    title: 'Subnautica 2 Xbox Game Pass：先看哪些信息',
    description:
      '给搜索 Xbox、Game Pass、PC Game Pass、云游戏、联机和是否值得安装的玩家看的快速状态页。',
    quickLabel: '快速结论',
    quickAnswer:
      'Xbox 和 Game Pass 相关信息，优先看官方 Xbox 商店页面：它最适合确认当前可用性、设备、Cloud 字样和联机描述。Steam 页面适合补充 PC 抢先体验背景，Unknown Worlds 更适合看路线图和补丁。已经安装的玩家，遇到资源路线、Bug 或联机问题时，先看最新 Hotfix。',
    fieldNotesTitle: 'Xbox 玩家通常想知道什么',
    fieldNotes: [
      {
        title: '订阅和平台文字要看商店',
        body: 'Game Pass、PC Game Pass、Cloud 和主机支持这些字样，可能比攻略页更新得更快，所以要以 Xbox 页面为准。',
      },
      {
        title: '很多搜索其实是联机问题',
        body: '玩家搜 Xbox 往往是想和朋友一起玩。联机人数、平台限制和当前版本状态，都要一起看。',
      },
      {
        title: '抢先体验意味着攻略会变',
        body: '安装、Bug、资源路线和联机摩擦都可能被热修改动。Game Pass 页面不该只放商店链接，还要引到补丁页。',
      },
    ],
    routeChecklistTitle: '安装前先确认',
    routeChecklist: [
      '打开 Xbox 商店页，确认你的设备能不能玩。',
      '区分你要找的是主机、PC Game Pass，还是 Cloud。',
      '朋友说路线或 Bug 变了时，先看最新 Hotfix。',
      '约人联机前，先确认联机人数。',
    ],
    contentsLabel: '目录',
    routeTitle: '怎么读 Xbox 和 Game Pass 页面',
    routeSteps: [
      {
        title: '先看 Xbox 官方页',
        body: '可用性、平台文字、商店要求和 Game Pass 展示，优先以 Xbox 商店页为准。',
      },
      {
        title: '用 Steam 补充抢先体验背景',
        body: 'Steam 页面能清楚说明 PC Early Access 状态，也能解释为什么攻略要跟着补丁变化。',
      },
      {
        title: '邀请朋友前确认联机',
        body: 'Subnautica 2 的 Xbox 搜索经常和多人联机有关。约人之前先看联机人数页和 Xbox 商店文字。',
      },
      {
        title: '安装后继续看热修',
        body: 'Game Pass 降低了尝试成本，但 Early Access 仍然会有变化。感觉路线或 Bug 不对时，先看 Hotfix。',
      },
    ],
    tableTitle: 'Xbox 和 Game Pass 搜索怎么回答',
    tableHeaders: ['搜索词', '实用回答'],
    tableRows: [
      [
        'subnautica 2 xbox game pass',
        '从 Xbox 官方商店页确认当前可用性和订阅文字。',
      ],
      [
        'subnautica 2 pc game pass',
        '先看 Xbox 页面里的 PC 字样，再用 Steam 补充抢先体验背景。',
      ],
      [
        'subnautica 2 cloud gaming',
        '不要从第三方摘要推断 Cloud，直接看 Xbox 页面。',
      ],
      ['subnautica 2 xbox co op', '约人前看 Xbox 商店页和联机人数指南。'],
      [
        'subnautica 2 xbox one',
        '安装或为了游戏买设备前，先确认官方商店支持设备。',
      ],
    ],
    visualTitle: 'Xbox 状态卡',
    visualItems: [
      { label: '商店', value: 'Xbox', note: '用商店页确认可用性。' },
      { label: '版本', value: 'EA', note: '抢先体验会被热修改动。' },
      { label: '计划', value: '联机', note: '组队前先看人数和平台文字。' },
    ],
    cautionTitle: 'Game Pass 不代表版本已经稳定',
    cautionBody:
      'Game Pass 让尝试游戏更容易，但不会把 Early Access 变成正式版。路线、Bug 或联机体验有变化时，先看 Unknown Worlds 最新说明。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 在 Xbox Game Pass 上吗？',
        body: '请以 Xbox 官方商店页的当前文字为准。本页会优先把玩家引到这个来源。',
      },
      {
        title: 'Subnautica 2 有 PC Game Pass 吗？',
        body: '先看 Xbox 商店页里的 PC Game Pass 字样，再结合 Steam 和 Unknown Worlds 看抢先体验背景。',
      },
      {
        title: 'Xbox 可以联机玩 Subnautica 2 吗？',
        body: '约人前先看 Xbox 商店页和联机人数指南，因为多人说明和抢先体验状态都重要。',
      },
      {
        title: 'Game Pass 玩家也要看补丁吗？',
        body: '要看。热修可能影响 Bug、资源路线和联机体验，即使你没有单独购买游戏。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2ReleaseDate, label: '发售日总览' },
      { href: Routes.Subnautica2Ps5ReleaseDate, label: 'PS5 发售日' },
      { href: Routes.Subnautica2Switch2ReleaseDate, label: 'Switch 2 发售日' },
      { href: Routes.Subnautica2CoopPlayerCount, label: '联机人数' },
      { href: Routes.Subnautica2SplitScreenCoop, label: '分屏和本地双人' },
      { href: Routes.Subnautica2ControllerNotWorking, label: '手柄没反应' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 更新' },
      { href: Routes.Subnautica2SaveFileLocation, label: '存档备份' },
      { href: Routes.Subnautica2Beginner, label: '新手路线' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 1 日核对 Xbox 官方商店、Steam 抢先体验页、Unknown Worlds 路线图和 Hotfix 2。选题围绕 Xbox、Game Pass、PC Game Pass、Cloud、联机和安装意图。',
    cardKicker: 'Game Pass 卡',
    cardBody:
      '给 Xbox 和 Game Pass 玩家安装前看的状态页，重点是可用性、联机和补丁。',
    cardTypeLabel: '类型',
    cardTypeValue: '平台指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '版本',
    cardStatusValue: '抢先体验',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 Xbox Game Passガイド: 対応、co-op、更新',
      description:
        'Subnautica 2のXbox Game Pass情報を、Xboxストア、Early Access、co-op人数、Cloud検索、パッチ情報と一緒に整理します。',
    },
    eyebrow: 'Subnautica 2 Xbox / Game Pass',
    title: 'Subnautica 2 Xbox Game Pass: まず確認すること',
    description:
      'Xbox、Game Pass、PC Game Pass、Cloud、co-op、インストール前の判断に使うための状況ページです。',
    quickLabel: '結論',
    quickAnswer:
      'XboxとGame Passの状況は、まず公式Xboxストアページで確認します。対応デバイス、Cloud表記、Game Passの見え方、co-op説明はストアが一番確認しやすいです。SteamはPC Early Accessの背景、Unknown WorldsはロードマップとHotfix確認に向いています。',
    fieldNotesTitle: 'Xboxプレイヤーが知りたいこと',
    fieldNotes: [
      {
        title: '対応状況はストア表記を見る',
        body: 'Game Pass、PC Game Pass、Cloud、コンソール対応は、攻略記事よりストア文言のほうが変わりやすいです。',
      },
      {
        title: '検索の多くはco-op目的',
        body: 'Xboxで探す人は、友達と遊べるかを知りたいことが多いです。人数と現在のビルド状況も一緒に確認します。',
      },
      {
        title: 'Early Accessはパッチで変わる',
        body: 'バグ、資源ルート、co-opの挙動はHotfixで変わることがあります。ストアだけでなく更新情報も見ます。',
      },
    ],
    routeChecklistTitle: 'インストール前に確認',
    routeChecklist: [
      'Xboxストアで自分のデバイスに対応しているか見る。',
      'コンソール、PC Game Pass、Cloudのどれを探しているか分ける。',
      'ルートやバグが変わったと聞いたらHotfixを読む。',
      '友達と遊ぶ前にco-op人数を確認する。',
    ],
    contentsLabel: '目次',
    routeTitle: 'XboxとGame Passページの使い方',
    routeSteps: [
      {
        title: '最初にXbox公式ページを見る',
        body: '対応状況、プラットフォーム表記、ストア要件、Game Passの表示はXboxストアで確認します。',
      },
      {
        title: 'SteamでEarly Access背景を見る',
        body: 'SteamはPC版のEarly Access状況を確認しやすく、なぜ攻略がパッチで変わるのかも理解しやすいです。',
      },
      {
        title: '友達を誘う前にco-opを確認',
        body: 'Subnautica 2のXbox検索にはマルチプレイ目的が多いです。co-op人数ガイドとXbox表記を先に見ます。',
      },
      {
        title: 'インストール後はHotfixを追う',
        body: 'Game Passなら試しやすいですが、Early Accessであることは変わりません。違和感があれば最新Hotfixを確認します。',
      },
    ],
    tableTitle: 'XboxとGame Pass検索への答え',
    tableHeaders: ['検索語', '実用的な答え'],
    tableRows: [
      [
        'subnautica 2 xbox game pass',
        '現在の対応とサブスク表記はXbox公式ストアで確認します。',
      ],
      [
        'subnautica 2 pc game pass',
        'XboxページでPC表記を確認し、SteamでEarly Access背景を補います。',
      ],
      [
        'subnautica 2 cloud gaming',
        '第三者の記事だけでCloud対応を判断せず、Xboxページを確認します。',
      ],
      [
        'subnautica 2 xbox co op',
        'グループで遊ぶ前にXbox表記とco-op人数ガイドを見ます。',
      ],
      [
        'subnautica 2 xbox one',
        'インストールや購入前に、公式ストアで対応デバイスを確認します。',
      ],
    ],
    visualTitle: 'Xbox状況カード',
    visualItems: [
      {
        label: 'ストア',
        value: 'Xbox',
        note: '対応状況はストアで確認します。',
      },
      { label: 'ビルド', value: 'EA', note: 'Hotfixで内容が変わります。' },
      { label: '予定', value: 'co-op', note: '人数と表記を先に確認します。' },
    ],
    cautionTitle: 'Game PassでもEarly Accessです',
    cautionBody:
      'Game Passは試しやすいですが、ビルドが完成版になるわけではありません。ルート、バグ、co-opの挙動が変わったら、Unknown Worldsの最新情報を確認します。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2はXbox Game Passにありますか？',
        body: '現在のGame Passとプラットフォーム表記は、公式Xboxストアページで確認してください。',
      },
      {
        title: 'PC Game Passでも遊べますか？',
        body: 'XboxストアのPC Game Pass表記を確認し、SteamとUnknown WorldsでEarly Accessの背景を補足します。',
      },
      {
        title: 'Xboxでco-opできますか？',
        body: 'Xboxストアとco-op人数ガイドを確認してから予定を立てるのが安全です。',
      },
      {
        title: 'Game Passプレイヤーもパッチノートを読むべきですか？',
        body: 'はい。Hotfixはバグ、資源ルート、co-opの遊びやすさに関わります。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2ReleaseDate, label: '発売日ガイド' },
      { href: Routes.Subnautica2Ps5ReleaseDate, label: 'PS5発売日' },
      { href: Routes.Subnautica2CoopPlayerCount, label: 'co-op人数' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2変更点' },
      { href: Routes.Subnautica2Beginner, label: '初心者ルート' },
    ],
    sourcesTitle: '出典メモ',
    sourceBody:
      '2026年6月1日にXbox公式ストア、Steam Early Accessページ、Unknown Worldsロードマップ、Hotfix 2を確認。Xbox、Game Pass、PC Game Pass、Cloud、co-op、インストール意図をもとに構成しました。',
    cardKicker: 'Game Pass card',
    cardBody:
      'XboxとGame Passプレイヤーが、インストール前に対応状況、co-op、パッチ情報を確認するページです。',
    cardTypeLabel: '種類',
    cardTypeValue: 'プラットフォームガイド',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: 'ビルド',
    cardStatusValue: 'Early Access',
  },
};

function getCopy(locale: Locale): XboxGamePassCopy {
  return xboxGamePassCopy[locale] ?? xboxGamePassCopy.en;
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
    pathname: Routes.Subnautica2XboxGamePass,
  });
}

export default async function XboxGamePassPage({
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
      icon={MonitorPlayIcon}
      locale={locale}
      pathname={Routes.Subnautica2XboxGamePass}
      sources={sharedSources}
    />
  );
}
