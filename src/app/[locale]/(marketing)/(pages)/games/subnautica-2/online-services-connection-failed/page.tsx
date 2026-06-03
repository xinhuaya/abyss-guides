import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { RadioIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type OnlineServicesCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-06-03';
const UPDATED_AT = '2026-06-03';

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

const copyByLocale: Record<string, OnlineServicesCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Online Services Connection Failed - Timeout Fixes',
      description:
        'Troubleshoot Subnautica 2 online services connection failed, connection timeout, sign-in, Xbox, Steam, firewall, NAT, and co-op retry issues with a practical checklist.',
    },
    eyebrow: 'Subnautica 2 online services failed',
    title: 'Online Services Connection Failed? Do the Boring Checks First',
    description:
      'A connection error can look like the whole ocean is offline. Often it is a platform login, firewall prompt, Xbox service hiccup, stale session, or one router being less friendly than usual.',
    quickLabel: 'Fast fix',
    quickAnswer:
      'As of June 3, 2026, check platform login first, then Xbox status if Xbox services are involved, restart the game and platform app, verify the latest hotfix is installed, let the firewall prompt through, and test a fresh host session before changing router settings.',
    fieldNotesTitle: 'What this error can mean',
    fieldNotes: [
      {
        title: 'It may be account sign-in',
        body: 'Online services often depend on Steam, Xbox, or Game Pass account state before the game can even test a co-op session.',
      },
      {
        title: 'It may be a local block',
        body: 'Windows firewall, VPNs, strict routers, security suites, and stale app sessions can all cause timeouts that feel like a server outage.',
      },
      {
        title: 'It may be temporary',
        body: 'Early Access games receive frequent fixes. A short wait after a hotfix, platform update, or service warning can be more useful than changing every network setting.',
      },
    ],
    routeChecklistTitle: 'Connection checklist',
    routeChecklist: [
      'Confirm Steam, Xbox app, or console account login is healthy.',
      'Check Xbox status if Xbox, PC Game Pass, or cloud play is involved.',
      'Install the latest Subnautica 2 hotfix on every player machine.',
      'Restart the game, Steam or Xbox app, and the host session.',
      'Allow the game through Windows firewall or security software.',
      'Temporarily disable VPN or proxy tools while testing.',
      'Try a short fresh session before touching router settings.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to troubleshoot online services connection failed',
    routeSteps: [
      {
        title: 'Check platform login first',
        body: 'Open Steam, the Xbox app, or the console store page and confirm your account is signed in normally. If the platform itself is struggling, Subnautica 2 co-op will not be the first thing to work.',
      },
      {
        title: 'Look at Xbox status when it matters',
        body: 'For Xbox, PC Game Pass, or cloud play, check the official Xbox status page. A platform warning is a real signal. No warning does not prove your local setup is fine, but it narrows the search.',
      },
      {
        title: 'Match updates across the group',
        body: 'A hotfix can reach players at different times. Make every player close the game, update, and relaunch before testing the same host session again.',
      },
      {
        title: 'Let the firewall prompt through',
        body: 'If Windows asks whether the game can communicate on a network, do not dismiss the prompt blindly. Allow the game on your normal private network, then restart the session.',
      },
      {
        title: 'Remove avoidable network noise',
        body: 'VPNs, proxies, aggressive DNS filters, and strict security suites can add one more failure point. Turn them off for a short test if you can do so safely.',
      },
      {
        title: 'Save router work for repeat failures',
        body: 'Do not jump straight to port forwarding. First test a fresh host, a different host, and a clean app restart. Router changes are easier to justify after the simple checks repeat.',
      },
    ],
    tableTitle: 'Connection error map',
    tableHeaders: ['Message or symptom', 'Best first check'],
    tableRows: [
      [
        'Online services connection failed',
        'Platform login, Xbox status if relevant, then game restart.',
      ],
      [
        'Connection timed out',
        'Firewall, VPN, strict network, stale host session, or host upload load.',
      ],
      [
        'Can play solo but not co-op',
        'Invite path, host session, account permissions, NAT, and matching build.',
      ],
      [
        'Only Game Pass players fail',
        'Xbox app login, Gaming Services, Xbox status, and account restrictions.',
      ],
      [
        'Everyone fails at once',
        'Platform status, new hotfix rollout, or short-term service instability.',
      ],
    ],
    visualTitle: 'Signal check card',
    visualItems: [
      {
        label: 'First check',
        value: 'Login',
        note: 'Platform account state comes before co-op.',
      },
      {
        label: 'Second check',
        value: 'Status',
        note: 'Xbox status matters for Game Pass paths.',
      },
      {
        label: 'Third check',
        value: 'Firewall',
        note: 'A blocked prompt can look like a server issue.',
      },
    ],
    cautionTitle: 'Do not rewrite your router on the first timeout',
    cautionBody:
      'Router changes can help in some repeated cases, but they also create new problems. Exhaust the account, update, firewall, VPN, and fresh-host checks first. If the error only happened once, treat it like a retry problem, not a network rebuild.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'What does online services connection failed mean?',
        body: 'It usually means the game could not complete a platform or network step needed for online play. That can be sign-in, service status, firewall, VPN, host session, or a temporary platform problem.',
      },
      {
        title: 'Is Subnautica 2 down?',
        body: 'Do not assume that from one error. Check official platform status pages and official updates first, especially if several players are affected at the same time.',
      },
      {
        title: 'Why can I play solo but not co-op?',
        body: 'Solo play can work while co-op fails because invites, account permissions, host sessions, NAT, firewall, and platform services are only used when you go online.',
      },
      {
        title: 'Should I port forward for Subnautica 2?',
        body: 'Not as the first move. Try platform login, updates, firewall, VPN, app restart, fresh host, and a different host before changing router rules.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2InviteNotWorking, label: 'Invite Not Working' },
      {
        href: Routes.Subnautica2MultiplayerNotWorking,
        label: 'Multiplayer Not Working',
      },
      {
        href: Routes.Subnautica2MultiplayerLagDesync,
        label: 'Multiplayer Lag and Desync',
      },
      {
        href: Routes.Subnautica2GamePassInstallError,
        label: 'Game Pass Install Error',
      },
      { href: Routes.Subnautica2Crossplay, label: 'Crossplay Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 3, 2026 against the official Steam page, Xbox listing, Xbox status page, Unknown Worlds Hotfix 3, the Early Access roadmap, and the official gameplay trailer. Abyss Guides artwork is original fan-site artwork; the video is the official Subnautica embed.',
    cardKicker: 'Online signal card',
    cardBody:
      'A calm connection-failure page for online services, timeouts, platform login, Xbox status, firewall prompts, VPNs, and fresh co-op host tests.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Network troubleshooting',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'First check',
    cardStatusValue: 'Platform login',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 在线服务连接失败：超时、Xbox、Steam 排查',
      description:
        'Subnautica 2 online services connection failed、连接超时、Steam/Xbox/Game Pass 登录、防火墙、VPN、NAT 和联机重试排查。',
    },
    eyebrow: 'Subnautica 2 在线服务连接失败',
    title: '在线服务连接失败？先做最普通的排查',
    description:
      '连接错误看起来像整个服务器都离线了，但很多时候只是平台登录、防火墙提示、Xbox 服务短暂异常、旧会话，或者本地网络太严格。',
    quickLabel: '快速处理',
    quickAnswer:
      '截至 2026 年 6 月 3 日，先检查 Steam、Xbox 应用或主机账号是否正常登录；涉及 Xbox 服务时查看 Xbox 状态页；重启游戏和平台应用；确认所有玩家安装最新热修补；允许防火墙提示；最后再考虑路由器设置。',
    fieldNotesTitle: '这个错误可能代表什么',
    fieldNotes: [
      {
        title: '可能是账号登录',
        body: '在线服务通常要先通过 Steam、Xbox 或 Game Pass 的账号状态，游戏才会继续测试联机会话。',
      },
      {
        title: '可能是本地拦截',
        body: 'Windows 防火墙、VPN、代理、严格路由、安全软件和旧应用会话，都可能造成类似服务器故障的超时。',
      },
      {
        title: '也可能只是临时问题',
        body: '抢先体验游戏会频繁更新。热修补、平台更新或服务提示刚出现时，等几分钟有时比乱改网络设置更有用。',
      },
    ],
    routeChecklistTitle: '连接排查清单',
    routeChecklist: [
      '确认 Steam、Xbox 应用或主机账号登录正常。',
      '涉及 Xbox、PC Game Pass 或云游戏时查看 Xbox 状态页。',
      '确保所有玩家都安装了最新 Subnautica 2 热修补。',
      '重启游戏、Steam 或 Xbox 应用，再让房主重新开会话。',
      '允许游戏通过 Windows 防火墙或安全软件。',
      '测试时暂时关闭 VPN、代理或加速器类工具。',
      '先试短时间新会话，再考虑路由器设置。',
    ],
    contentsLabel: '目录',
    routeTitle: '在线服务连接失败怎么排查',
    routeSteps: [
      {
        title: '先看平台登录',
        body: '打开 Steam、Xbox 应用或主机商店页，确认账号登录正常。如果平台本身不稳定，Subnautica 2 联机通常也不会先恢复。',
      },
      {
        title: '涉及 Xbox 时看官方状态页',
        body: 'Xbox、PC Game Pass 或云游戏玩家要看 Xbox 官方状态页。官方状态异常是很强的信号；没有异常也不能证明本地一定没问题，但能缩小范围。',
      },
      {
        title: '让队伍版本一致',
        body: '热修补可能在不同设备上更新时间不同。所有玩家关闭游戏、更新、重启，再测试同一个房主会话。',
      },
      {
        title: '允许防火墙提示',
        body: '如果 Windows 弹出网络通信提示，不要随手关掉。在常用的私人网络中允许游戏通信，然后重开会话。',
      },
      {
        title: '减少可避免的网络干扰',
        body: 'VPN、代理、DNS 过滤和过强的安全软件都会增加失败点。如果可以安全关闭，先做一次短测试。',
      },
      {
        title: '路由器设置放到最后',
        body: '不要一上来就端口转发。先测试新房主、不同房主、平台应用重启和防火墙。简单项重复失败后，再考虑路由器。',
      },
    ],
    tableTitle: '连接错误对照表',
    tableHeaders: ['提示或现象', '优先检查'],
    tableRows: [
      ['在线服务连接失败', '平台登录、Xbox 状态、然后重启游戏。'],
      ['连接超时', '防火墙、VPN、严格网络、旧房主会话或房主上传压力。'],
      ['单人能玩，联机不行', '邀请、房主、账号权限、NAT 和版本一致性。'],
      [
        '只有 Game Pass 玩家失败',
        'Xbox 应用登录、Gaming Services、Xbox 状态和账号限制。',
      ],
      ['所有人同时失败', '平台状态、热修补推送或短时间服务异常。'],
    ],
    visualTitle: '信号检查卡',
    visualItems: [
      {
        label: '第一步',
        value: '账号登录',
        note: '平台账号状态在联机之前。',
      },
      {
        label: '第二步',
        value: '服务状态',
        note: 'Game Pass 路径尤其要看 Xbox 状态。',
      },
      {
        label: '第三步',
        value: '防火墙',
        note: '一个被拒绝的提示就可能像服务器故障。',
      },
    ],
    cautionTitle: '第一次超时不要立刻改路由器',
    cautionBody:
      '路由器设置在反复失败时可能有用，但也容易引入新问题。先完成账号、更新、防火墙、VPN、应用重启和新房主测试。如果只出现一次，把它当成重试问题，不要当成网络重建。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'online services connection failed 是什么意思？',
        body: '通常是游戏没有完成在线玩法需要的平台或网络步骤。可能是登录、服务状态、防火墙、VPN、房主会话或临时平台问题。',
      },
      {
        title: '这代表 Subnautica 2 服务器宕机了吗？',
        body: '不要凭一次错误就这样判断。先看官方平台状态页和官方更新，尤其是多个玩家同时受影响的时候。',
      },
      {
        title: '为什么单人能玩，联机不行？',
        body: '单人不一定需要邀请、账号权限、房主会话、NAT、防火墙和平台在线服务，所以单人正常不代表联机链路正常。',
      },
      {
        title: '需要给 Subnautica 2 做端口转发吗？',
        body: '不要作为第一步。先检查平台登录、版本、防火墙、VPN、应用重启、新房主和不同房主，再考虑路由器规则。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2InviteNotWorking, label: '邀请无效排查' },
      {
        href: Routes.Subnautica2MultiplayerNotWorking,
        label: '多人联机进不去',
      },
      {
        href: Routes.Subnautica2MultiplayerLagDesync,
        label: '联机延迟和不同步',
      },
      {
        href: Routes.Subnautica2GamePassInstallError,
        label: 'Game Pass 安装错误',
      },
      { href: Routes.Subnautica2Crossplay, label: '跨平台联机' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 3 日核对 Steam 官方页、Xbox 官方页、Xbox 状态页、Unknown Worlds Hotfix 3、抢先体验路线图和官方玩法预告。页面插图为 Abyss Guides 原创粉丝站配图；视频为官方 Subnautica 嵌入视频。',
    cardKicker: '在线信号卡',
    cardBody:
      '用于排查在线服务、连接超时、平台登录、Xbox 状态、防火墙提示、VPN 和新房主测试。',
    cardTypeLabel: '类型',
    cardTypeValue: '网络排查',
    cardVerifiedLabel: '已检查',
    cardStatusLabel: '第一步',
    cardStatusValue: '平台登录',
  },
};

function getCopy(locale: Locale): OnlineServicesCopy {
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
    pathname: Routes.Subnautica2OnlineServicesConnectionFailed,
  });
}

export default async function Subnautica2OnlineServicesConnectionFailedPage({
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
      icon={RadioIcon}
      locale={locale}
      pathname={Routes.Subnautica2OnlineServicesConnectionFailed}
      sources={sharedSources}
    />
  );
}
