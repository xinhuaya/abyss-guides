import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { ServerIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type ServerStatusCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-06-04';
const UPDATED_AT = '2026-06-04';

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
    href: 'https://support.xbox.com/en-US/xbox-live-status',
    label: 'Xbox status page',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-3',
    label: 'Unknown Worlds Hotfix 3',
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

const copyByLocale: Record<string, ServerStatusCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Server Status - Is Co-op Down or Local?',
      description:
        'Check Subnautica 2 server status with a practical guide for Xbox status, Steam login, Game Pass, online services, hotfix rollout, co-op invites, and local network checks.',
    },
    eyebrow: 'Subnautica 2 server status',
    title: 'Is Subnautica 2 Down? Check Status Before You Rebuild Your Setup',
    description:
      'When co-op fails, it is tempting to call the servers down. Sometimes that is true. Often it is one platform service, one stale host session, or one player’s login quietly causing the mess.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'As of June 4, 2026, check official platform status first: Xbox status for Xbox, PC Game Pass, and cloud paths; Steam login and download state for Steam players; then Unknown Worlds update notes for hotfix timing. If only one player fails, treat it as local until the evidence points wider.',
    fieldNotesTitle: 'How to read a co-op outage',
    fieldNotes: [
      {
        title: 'Platform-wide is different from one-player failure',
        body: 'If everyone on Xbox services fails at once, status pages matter. If one player fails while the rest join, the answer is probably local.',
      },
      {
        title: 'Hotfix windows can look like outages',
        body: 'During patch rollout, players can be on different builds. That can break joining even while the platform itself is healthy.',
      },
      {
        title: 'Solo play is not a clean status test',
        body: 'A player can load solo while co-op still fails because invites, account services, and host sessions are separate checks.',
      },
    ],
    routeChecklistTitle: 'Status check order',
    routeChecklist: [
      'Check Xbox status if Xbox, PC Game Pass, or cloud play is involved.',
      'Check Steam login, downloads, and update state for Steam players.',
      'Look at Unknown Worlds update notes if a hotfix just shipped.',
      'Ask whether every player fails or only one player fails.',
      'Reload the host session and test one fresh invite or Friend Code.',
      'Only change firewall, VPN, or router settings after the status checks.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to check Subnautica 2 server status',
    routeSteps: [
      {
        title: 'Start with the service you actually use',
        body: 'For Xbox, PC Game Pass, and cloud play, check Xbox status. For Steam, check whether Steam itself is signed in, online, and done updating the game.',
      },
      {
        title: 'Separate update timing from downtime',
        body: 'If a hotfix just shipped, your group may be split between builds. Have everyone close the game, update, and relaunch before calling it an outage.',
      },
      {
        title: 'Ask how many people are affected',
        body: 'Everyone failing at the same time points to platform status, hotfix rollout, or a broad online-services issue. One player failing points to login, privacy, NAT, firewall, VPN, or cache.',
      },
      {
        title: 'Use a fresh host test',
        body: 'Have the host reload the world and send one fresh invite or Friend Code. Stale sessions cause enough false alarms that this should happen before deep network work.',
      },
      {
        title: 'Wait when evidence points wide',
        body: 'If official status pages show a problem, do not burn time rewriting local settings. Take notes, wait for status to clear, then test a fresh session.',
      },
    ],
    tableTitle: 'Status signals',
    tableHeaders: ['Signal', 'What it usually means'],
    tableRows: [
      [
        'Xbox status warning',
        'Xbox, Game Pass, account, or cloud services may be affecting joins.',
      ],
      [
        'Steam offline or updating',
        'Steam players should finish login and updates before testing co-op.',
      ],
      [
        'Hotfix just released',
        'Players may be split across builds until everyone updates.',
      ],
      [
        'Only one player fails',
        'Local account, privacy, NAT, firewall, VPN, or app cache is more likely.',
      ],
      [
        'Everyone fails after a fresh host test',
        'Check official status and wait before changing router settings.',
      ],
    ],
    visualTitle: 'Status card',
    visualItems: [
      {
        label: 'Platform',
        value: 'Check first',
        note: 'Xbox status or Steam login comes before router work.',
      },
      {
        label: 'Patch',
        value: 'Match builds',
        note: 'Hotfix timing can split a group.',
      },
      {
        label: 'Scope',
        value: 'One or all',
        note: 'The number of affected players tells you where to look.',
      },
    ],
    cautionTitle: 'Do not treat every timeout as server downtime',
    cautionBody:
      'A timeout is just a failed connection attempt. It becomes a server-status problem only when the evidence is wider: multiple players, platform warnings, update rollout timing, or official notes.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Is Subnautica 2 down right now?',
        body: 'Check official platform status pages first. Xbox status matters for Xbox, PC Game Pass, and cloud play. Steam players should also check Steam login and update state.',
      },
      {
        title: 'Does Subnautica 2 have separate server status?',
        body: 'For player troubleshooting, the practical first checks are platform services, game updates, and host session state. Treat unofficial status claims carefully unless official sources back them up.',
      },
      {
        title: 'Why can my friend join but I cannot?',
        body: 'That usually points away from a full outage. Check your login, privacy, version, firewall, VPN, NAT, and app cache.',
      },
      {
        title: 'Should I wait or keep troubleshooting?',
        body: 'If official platform status shows a problem or everyone fails at once after fresh tests, wait. If only one player fails, keep local troubleshooting.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2OnlineServicesConnectionFailed,
        label: 'Online Services Connection Failed',
      },
      { href: Routes.Subnautica2FriendCode, label: 'Friend Code Guide' },
      { href: Routes.Subnautica2InviteNotWorking, label: 'Invite Not Working' },
      {
        href: Routes.Subnautica2MultiplayerNotWorking,
        label: 'Multiplayer Not Working',
      },
      { href: Routes.Subnautica2Crossplay, label: 'Crossplay Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 4, 2026 against the official Steam page, Xbox listing, Xbox status page, Unknown Worlds Hotfix 3, the Early Access roadmap, and the official gameplay trailer. Abyss Guides artwork is original fan-site artwork; the video is the official Subnautica embed.',
    cardKicker: 'Server status card',
    cardBody:
      'A co-op status page for Xbox services, Steam login, Game Pass, hotfix rollout, stale hosts, online services, and local network checks.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Status guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'First check',
    cardStatusValue: 'Platform status',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 服务器状态：联机是宕机还是本地问题？',
      description:
        'Subnautica 2 server status 服务器状态排查：Xbox 状态、Steam 登录、Game Pass、在线服务、热修补、邀请和本地网络检查。',
    },
    eyebrow: 'Subnautica 2 服务器状态',
    title: 'Subnautica 2 是服务器挂了吗？先别急着改网络',
    description:
      '联机失败时，玩家很容易先怀疑服务器。但有时只是某个平台服务异常、一个旧房主会话，或者某个玩家的登录状态出了问题。',
    quickLabel: '快速结论',
    quickAnswer:
      '截至 2026 年 6 月 4 日，先查官方平台状态：Xbox、PC Game Pass 和云游戏看 Xbox 状态页；Steam 玩家检查 Steam 登录和下载更新；再看 Unknown Worlds 更新说明。如果只有一个玩家失败，先按本地问题处理。',
    fieldNotesTitle: '怎么看联机故障范围',
    fieldNotes: [
      {
        title: '全平台失败和单人失败不是一回事',
        body: '如果 Xbox 服务玩家同时失败，状态页很重要。如果只有一个人进不去，通常更像本地问题。',
      },
      {
        title: '热修补期间很像宕机',
        body: '补丁刚推送时，队伍可能有人已更新、有人没更新。版本不同会让加入失败。',
      },
      {
        title: '单人能玩不代表在线正常',
        body: '单人存档不一定需要邀请、账号服务和房主会话，所以不能当成完整状态测试。',
      },
    ],
    routeChecklistTitle: '状态检查顺序',
    routeChecklist: [
      '涉及 Xbox、PC Game Pass 或云游戏时，先看 Xbox 状态页。',
      'Steam 玩家检查 Steam 登录、下载和更新状态。',
      '如果刚有热修补，查看 Unknown Worlds 更新说明。',
      '确认是所有人失败，还是只有一个人失败。',
      '房主重载会话，再测试一条新邀请或好友代码。',
      '状态检查后再考虑防火墙、VPN 或路由器。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Subnautica 2 服务器状态怎么查',
    routeSteps: [
      {
        title: '先查你实际用的平台',
        body: 'Xbox、PC Game Pass 和云游戏看 Xbox 状态页。Steam 玩家先确认 Steam 正常在线，并且游戏已经更新完成。',
      },
      {
        title: '把更新时差和宕机分开',
        body: '热修补刚发布时，队伍可能处在不同版本。所有人关闭游戏、更新、重启后再测一次。',
      },
      {
        title: '先问有几个人受影响',
        body: '所有人同时失败，更像平台状态、热修补推送或较大的在线服务问题。只有一个人失败，更像登录、隐私、NAT、防火墙、VPN 或缓存。',
      },
      {
        title: '做一次新房主测试',
        body: '让房主重新加载世界，发一条新的邀请或好友代码。旧会话造成的误判很多，这一步值得先做。',
      },
      {
        title: '证据指向大范围问题时就等',
        body: '如果官方状态页显示异常，不要浪费时间乱改本地设置。记下现象，等状态恢复后重新测试新会话。',
      },
    ],
    tableTitle: '状态信号对照',
    tableHeaders: ['信号', '通常代表什么'],
    tableRows: [
      ['Xbox 状态页异常', 'Xbox、Game Pass、账号或云游戏服务可能影响加入。'],
      ['Steam 离线或还在更新', 'Steam 玩家要先完成登录和更新。'],
      ['刚发布热修补', '队伍可能暂时处在不同版本。'],
      ['只有一个人失败', '更可能是账号、隐私、NAT、防火墙、VPN 或缓存。'],
      ['所有人新会话也失败', '优先看官方状态，别急着改路由器。'],
    ],
    visualTitle: '状态检查卡',
    visualItems: [
      {
        label: '平台',
        value: '先检查',
        note: 'Xbox 状态或 Steam 登录要先于路由器。',
      },
      {
        label: '补丁',
        value: '版本一致',
        note: '热修补期间队伍容易版本不同。',
      },
      {
        label: '范围',
        value: '一个或全部',
        note: '受影响人数决定排查方向。',
      },
    ],
    cautionTitle: '不要把每次超时都当成服务器宕机',
    cautionBody:
      '超时只说明这次连接失败。只有当多个玩家、平台状态、更新推送或官方说明都指向同一个方向时，才更像服务器或平台范围问题。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 现在服务器挂了吗？',
        body: '先看官方平台状态。Xbox、PC Game Pass 和云游戏看 Xbox 状态页。Steam 玩家还要看 Steam 登录和更新状态。',
      },
      {
        title: 'Subnautica 2 有单独服务器状态页吗？',
        body: '玩家排查时，最实用的第一步是平台服务、游戏更新和房主会话。没有官方来源支持的第三方状态说法要谨慎看。',
      },
      {
        title: '为什么朋友能进，只有我进不去？',
        body: '这通常不像全局宕机。先查你的登录、隐私、版本、防火墙、VPN、NAT 和应用缓存。',
      },
      {
        title: '我应该等还是继续排查？',
        body: '如果官方平台状态异常，或者所有人新会话都失败，就等。如果只有一个玩家失败，继续本地排查。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      {
        href: Routes.Subnautica2OnlineServicesConnectionFailed,
        label: '在线服务连接失败',
      },
      { href: Routes.Subnautica2FriendCode, label: '好友代码指南' },
      { href: Routes.Subnautica2InviteNotWorking, label: '邀请无效排查' },
      {
        href: Routes.Subnautica2MultiplayerNotWorking,
        label: '多人联机进不去',
      },
      { href: Routes.Subnautica2Crossplay, label: '跨平台联机' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 4 日核对 Steam 官方页、Xbox 官方页、Xbox 状态页、Unknown Worlds Hotfix 3、抢先体验路线图和官方玩法预告。页面插图为 Abyss Guides 原创粉丝站配图；视频为官方 Subnautica 嵌入视频。',
    cardKicker: '服务器状态卡',
    cardBody:
      '用于排查 Xbox 服务、Steam 登录、Game Pass、热修补推送、旧房主、在线服务和本地网络。',
    cardTypeLabel: '类型',
    cardTypeValue: '状态排查',
    cardVerifiedLabel: '已检查',
    cardStatusLabel: '第一步',
    cardStatusValue: '查平台状态',
  },
};

function getCopy(locale: Locale): ServerStatusCopy {
  return copyByLocale[locale] ?? copyByLocale.en;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = getCopy(locale);

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2ServerStatus,
  });
}

export default async function Subnautica2ServerStatusPage({
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
        checkedAt: UPDATED_AT,
      }}
      icon={ServerIcon}
      locale={locale}
      pathname={Routes.Subnautica2ServerStatus}
      sources={sharedSources}
    />
  );
}
