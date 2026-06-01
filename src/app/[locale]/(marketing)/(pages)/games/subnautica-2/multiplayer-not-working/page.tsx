import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { WrenchIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type MultiplayerFixCopy = ResourceGuideCopy & {
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
    href: 'https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-2',
    label: 'Unknown Worlds Hotfix 2',
  },
  {
    href: 'https://www.youtube.com/watch?v=6t2nDHldoSk',
    label: 'Official Subnautica 2 gameplay trailer',
  },
];

const multiplayerFixCopy: Record<string, MultiplayerFixCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Multiplayer Not Working: Co-op Checklist',
      description:
        'A practical Subnautica 2 multiplayer not working checklist for failed invites, friend sessions, Game Pass installs, updates, and Early Access hotfix notes.',
    },
    eyebrow: 'Subnautica 2 co-op troubleshooting',
    title: 'Subnautica 2 Multiplayer Not Working: A Calm Co-op Checklist',
    description:
      'When a friend cannot join, the fastest fix is usually not a dramatic reinstall. Start with build version, platform services, invite flow, and the newest patch notes.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Update the game, restart the session, make sure everyone is on the same build, check Steam or Xbox service status, then try a fresh invite in a short test save. If the issue appeared after a patch, read the newest Unknown Worlds hotfix before deleting saves or reinstalling.',
    fieldNotesTitle: 'What usually goes wrong',
    fieldNotes: [
      {
        title: 'Mixed versions',
        body: 'One player updates, another does not, and the invite looks broken even though the session is fine.',
      },
      {
        title: 'Platform service hiccups',
        body: 'Steam, Xbox, and Game Pass all add their own account and service layers. A game guide should not pretend every failure is inside the game.',
      },
      {
        title: 'Patch-day confusion',
        body: 'Early Access patches can change session behavior or expose old save problems. Hotfix notes are worth reading before bigger fixes.',
      },
    ],
    routeChecklistTitle: 'Fast checklist',
    routeChecklist: [
      'Update Subnautica 2 on every device.',
      'Restart the game and recreate the co-op session.',
      'Confirm every player uses the same current build.',
      'Check Steam or Xbox service status if invites fail immediately.',
      'Try a new short save before changing the main save.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Fix order that wastes the least time',
    routeSteps: [
      {
        title: 'Confirm version and platform first',
        body: 'Ask every player to fully close the game, check for updates, and relaunch. It is boring, but it catches the most common Early Access mismatch.',
      },
      {
        title: 'Recreate the session',
        body: 'Have the host make a fresh session and send a new invite. If the old invite sat open during an update or disconnect, do not keep hammering it.',
      },
      {
        title: 'Test with a small save',
        body: 'A five-minute test save tells you whether the problem is the game session, a specific save, or a friend/account flow.',
      },
      {
        title: 'Read the newest hotfix',
        body: 'If the issue started after a patch, the hotfix notes may mention multiplayer, saves, performance, or a known workaround.',
      },
    ],
    tableTitle: 'Search terms and first response',
    tableHeaders: ['Search term', 'Useful first answer'],
    tableRows: [
      [
        'subnautica 2 multiplayer not working',
        'Update, restart, same build, service status, fresh invite.',
      ],
      [
        'subnautica 2 co op not working',
        'Recreate the session and test a short save before reinstalling.',
      ],
      [
        'subnautica 2 can’t join friend',
        'Check platform invites, account prompts, and host session state.',
      ],
      [
        'subnautica 2 connection lost',
        'Check network stability and platform service status before blaming the save.',
      ],
      [
        'subnautica 2 game pass multiplayer',
        'Verify Xbox/Game Pass install, account, and current build wording.',
      ],
    ],
    visualTitle: 'Co-op repair card',
    visualItems: [
      {
        label: 'First fix',
        value: 'Update',
        note: 'Same build matters more than most settings.',
      },
      {
        label: 'Second fix',
        value: 'New invite',
        note: 'Old invites can be stale after restarts or updates.',
      },
      {
        label: 'Last resort',
        value: 'Reinstall',
        note: 'Do this after lighter checks, not before.',
      },
    ],
    cautionTitle: 'Do not delete a main save as your first move',
    cautionBody:
      'That is the expensive mistake. A co-op problem can come from an invite, service outage, version mismatch, or fresh patch. Test a small save first, then decide whether the main save is involved.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Why can’t my friend join Subnautica 2?',
        body: 'The common checks are game version, platform service, invite flow, account prompt, and host session state. Start there before reinstalling.',
      },
      {
        title: 'Should I reinstall Subnautica 2 if multiplayer fails?',
        body: 'Not first. Try updates, restarts, a fresh invite, and a test save before using a full reinstall.',
      },
      {
        title: 'Does Game Pass change the multiplayer checklist?',
        body: 'It can add Xbox account, install, and service-status checks. Use the Xbox listing and account flow as part of troubleshooting.',
      },
      {
        title: 'Can hotfixes affect co-op?',
        body: 'Yes. Early Access hotfixes can touch stability, saves, and session behavior, so read the newest notes when a problem appears suddenly.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Crossplay, label: 'Crossplay Guide' },
      { href: Routes.Subnautica2CoopPlayerCount, label: 'Co-op Player Count' },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2' },
      { href: Routes.Subnautica2Beginner, label: 'Beginner Route' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 1, 2026 against Steam, Xbox, Unknown Worlds Hotfix 2, and official trailer material. Page visuals use Abyss Guides original art plus the official Subnautica trailer embed.',
    cardKicker: 'Co-op repair',
    cardBody:
      'A low-risk troubleshooting page for failed invites, dropped sessions, and Game Pass co-op checks.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Troubleshooting',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'First move',
    cardStatusValue: 'Update and retest',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 联机失败怎么办：多人模式排查清单',
      description:
        'Subnautica 2 联机失败中文排查：好友无法加入、Game Pass 安装、版本不同、邀请失效和抢先体验 hotfix 说明。',
    },
    eyebrow: 'Subnautica 2 联机排查',
    title: 'Subnautica 2 联机失败怎么办：先按这个顺序查',
    description:
      '好友加不进来时，不要第一步就重装。先看版本、平台服务、邀请流程和最新补丁，通常能少走很多弯路。',
    quickLabel: '快速结论',
    quickAnswer:
      '先更新游戏，重开会话，确认所有人都是同一当前版本，再检查 Steam 或 Xbox 服务状态，然后用短测试存档发一次新邀请。如果问题出现在补丁后，先读 Unknown Worlds 最新 hotfix，再考虑重装或动主存档。',
    fieldNotesTitle: '常见问题点',
    fieldNotes: [
      {
        title: '版本不一致',
        body: '一个人更新了，另一个人没更新，邀请就可能看起来像坏了。',
      },
      {
        title: '平台服务问题',
        body: 'Steam、Xbox、Game Pass 都有自己的账号和服务层，不是所有失败都在游戏内。',
      },
      {
        title: '补丁日混乱',
        body: '抢先体验补丁可能影响会话、存档或稳定性，先看 hotfix 很有用。',
      },
    ],
    routeChecklistTitle: '快速排查',
    routeChecklist: [
      '所有设备都更新 Subnautica 2。',
      '重启游戏并重新创建联机会话。',
      '确认每个玩家都是同一当前版本。',
      '邀请立刻失败时检查 Steam 或 Xbox 服务状态。',
      '动主存档前，先用新短存档测试。',
    ],
    contentsLabel: '目录',
    routeTitle: '最省时间的排查顺序',
    routeSteps: [
      {
        title: '先确认版本和平台',
        body: '让每个玩家完全关闭游戏，检查更新，再重新打开。这个步骤无聊，但最容易抓到版本不一致。',
      },
      {
        title: '重新创建会话',
        body: '让房主开新会话，再发新邀请。更新或断线前留下的旧邀请，不值得一直点。',
      },
      {
        title: '用小存档测试',
        body: '五分钟测试存档可以判断问题是在会话、具体存档，还是好友账号流程。',
      },
      {
        title: '读最新 hotfix',
        body: '如果问题是补丁后突然出现，hotfix 说明可能提到多人、存档、性能或临时解决办法。',
      },
    ],
    tableTitle: '联机失败相关搜索怎么回答',
    tableHeaders: ['搜索词', '先给的答案'],
    tableRows: [
      [
        'subnautica 2 multiplayer not working',
        '更新、重启、同版本、服务状态、新邀请。',
      ],
      [
        'subnautica 2 co op not working',
        '先重建会话并测试短存档，不要马上重装。',
      ],
      [
        'subnautica 2 can’t join friend',
        '检查平台邀请、账号提示和房主会话状态。',
      ],
      [
        'subnautica 2 connection lost',
        '先看网络稳定性和平台服务，再怀疑存档。',
      ],
      [
        'subnautica 2 game pass multiplayer',
        '核对 Xbox/Game Pass 安装、账号和当前版本。',
      ],
    ],
    visualTitle: '联机修复卡',
    visualItems: [
      { label: '第一步', value: '更新', note: '同版本比大多数设置更重要。' },
      { label: '第二步', value: '新邀请', note: '旧邀请可能已经失效。' },
      { label: '最后再做', value: '重装', note: '先做轻量检查，再考虑重装。' },
    ],
    cautionTitle: '不要第一步就删主存档',
    cautionBody:
      '联机问题可能来自邀请、服务、版本或新补丁。先用小存档测试，再判断主存档有没有问题。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '为什么好友加不进 Subnautica 2？',
        body: '先查游戏版本、平台服务、邀请流程、账号提示和房主会话。',
      },
      {
        title: '联机失败要重装吗？',
        body: '不要第一步就重装。先更新、重启、发新邀请，并用短存档测试。',
      },
      {
        title: 'Game Pass 会影响排查吗？',
        body: '会多出 Xbox 账号、安装和服务状态检查。',
      },
      {
        title: 'hotfix 会影响联机吗？',
        body: '可能会。抢先体验 hotfix 可能涉及稳定性、存档和会话表现。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2Crossplay, label: '跨平台联机' },
      { href: Routes.Subnautica2CoopPlayerCount, label: '联机人数' },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2' },
      { href: Routes.Subnautica2Beginner, label: '新手路线' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 1 日核对 Steam、Xbox、Unknown Worlds Hotfix 2 和官方预告片。页面图片为 Abyss Guides 原创图，视频为 Subnautica 官方 YouTube 嵌入。',
    cardKicker: '联机修复',
    cardBody: '给邀请失败、会话掉线、Game Pass 联机异常的玩家用。',
    cardTypeLabel: '类型',
    cardTypeValue: '排查指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '先做',
    cardStatusValue: '更新后再测',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 マルチプレイできない時のチェックリスト',
      description:
        'Subnautica 2でフレンドが参加できない、招待が失敗する、Game Passで遊べない時の確認手順をまとめます。',
    },
    eyebrow: 'Subnautica 2 マルチ確認',
    title: 'Subnautica 2 マルチプレイできない時の落ち着いた確認手順',
    description:
      'フレンドが参加できない時、最初から再インストールする必要はありません。まずビルド、サービス、招待、Hotfixを見ます。',
    quickLabel: '結論',
    quickAnswer:
      'ゲームを更新し、セッションを作り直し、全員が同じビルドか確認します。その後、SteamまたはXboxのサービス状態を見て、短いテストセーブで新しい招待を試してください。',
    fieldNotesTitle: 'よくある原因',
    fieldNotes: [
      {
        title: 'ビルド違い',
        body: '一人だけ更新されていないと、招待が壊れたように見えます。',
      },
      {
        title: 'サービス側の問題',
        body: 'Steam、Xbox、Game Passにはゲーム外のアカウントとサービスがあります。',
      },
      {
        title: 'パッチ直後',
        body: 'Early Accessでは、更新後にセッションや保存の挙動が変わることがあります。',
      },
    ],
    routeChecklistTitle: 'クイック確認',
    routeChecklist: [
      '全員がSubnautica 2を更新する。',
      'ゲームを再起動し、セッションを作り直す。',
      '同じ現在ビルドか確認する。',
      'すぐ失敗する時はSteamまたはXboxサービスを見る。',
      '本番セーブの前に短い新規セーブで試す。',
    ],
    contentsLabel: '目次',
    routeTitle: '時間を無駄にしない順番',
    routeSteps: [
      {
        title: 'バージョンから見る',
        body: '全員がゲームを閉じ、更新を確認し、再起動します。単純ですが一番効きます。',
      },
      {
        title: 'セッションを作り直す',
        body: 'ホストが新しいセッションを作り、新しい招待を送ります。古い招待にこだわらないでください。',
      },
      {
        title: '小さいセーブで試す',
        body: '5分のテストで、セッション問題か、特定セーブか、アカウント問題か見えます。',
      },
      {
        title: '最新Hotfixを読む',
        body: 'パッチ後に起きた問題なら、Hotfixに手がかりがある場合があります。',
      },
    ],
    tableTitle: '検索語と最初の答え',
    tableHeaders: ['検索語', 'まず見ること'],
    tableRows: [
      [
        'subnautica 2 multiplayer not working',
        '更新、再起動、同じビルド、サービス状態、新招待。',
      ],
      [
        'subnautica 2 co op not working',
        'セッションを作り直し、短いセーブで試します。',
      ],
      [
        'subnautica 2 can’t join friend',
        '招待、アカウント表示、ホストの状態を確認します。',
      ],
      [
        'subnautica 2 connection lost',
        'ネットワークとサービス状態も確認します。',
      ],
      [
        'subnautica 2 game pass multiplayer',
        'Xbox/Game Passのインストール、アカウント、ビルドを確認します。',
      ],
    ],
    visualTitle: '修復カード',
    visualItems: [
      { label: '最初', value: '更新', note: '同じビルドが大事です。' },
      {
        label: '次',
        value: '新招待',
        note: '古い招待は無効な場合があります。',
      },
      {
        label: '最後',
        value: '再インストール',
        note: '軽い確認の後で十分です。',
      },
    ],
    cautionTitle: '最初に本番セーブを消さない',
    cautionBody:
      '原因は招待、サービス、バージョン、パッチかもしれません。短いセーブで試してから判断しましょう。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'なぜフレンドが参加できませんか？',
        body: 'バージョン、サービス、招待、アカウント表示、ホスト状態を確認します。',
      },
      {
        title: '再インストールすべきですか？',
        body: '最初にはしません。更新、再起動、新招待、テストセーブを先に試します。',
      },
      {
        title: 'Game Passでは確認が増えますか？',
        body: 'Xboxアカウント、インストール、サービス状態の確認が増えます。',
      },
      {
        title: 'Hotfixはマルチに影響しますか？',
        body: '影響する場合があります。急に問題が出たら最新メモを見てください。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2Crossplay, label: 'クロスプレイ' },
      { href: Routes.Subnautica2CoopPlayerCount, label: '協力プレイ人数' },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2' },
      { href: Routes.Subnautica2Beginner, label: '初心者ルート' },
    ],
    sourcesTitle: '出典メモ',
    sourceBody:
      '2026年6月1日にSteam、Xbox、Unknown Worlds Hotfix 2、公式トレーラーを確認。画像はAbyss Guidesオリジナル、動画はSubnautica公式YouTube埋め込みです。',
    cardKicker: 'Co-op repair',
    cardBody: '招待失敗、セッション切断、Game Pass確認向けです。',
    cardTypeLabel: '種類',
    cardTypeValue: 'トラブル確認',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: '最初',
    cardStatusValue: '更新して再テスト',
  },
};

function getCopy(locale: Locale): MultiplayerFixCopy {
  return multiplayerFixCopy[locale] ?? multiplayerFixCopy.en;
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
    pathname: Routes.Subnautica2MultiplayerNotWorking,
  });
}

export default async function Subnautica2MultiplayerNotWorkingPage({
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
      icon={WrenchIcon}
      locale={locale}
      pathname={Routes.Subnautica2MultiplayerNotWorking}
      sources={sharedSources}
    />
  );
}
