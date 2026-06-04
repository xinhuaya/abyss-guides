import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { UsersRoundIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type FriendCodeCopy = ResourceGuideCopy & {
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

const copyByLocale: Record<string, FriendCodeCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Friend Code Guide - Join Co-op Without Guessing',
      description:
        'Use Subnautica 2 Friend Code cleanly with checks for fresh sessions, Steam, Xbox, Game Pass, crossplay, privacy, stale codes, and failed joins.',
    },
    eyebrow: 'Subnautica 2 Friend Code',
    title: 'Subnautica 2 Friend Code: Join the Right Session, Not an Old One',
    description:
      'Friend Code is useful when platform invites are messy, but it is not magic. Treat it like a live session pass: use the newest code, keep the host stable, and check platform sign-in before blaming crossplay.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'As of June 4, 2026, use Friend Code after the host has fully loaded the save. If a code fails, reload the host session, generate or copy the current code again, confirm every player is on the same build, and check Xbox status when Xbox or Game Pass is part of the group.',
    fieldNotesTitle: 'Why Friend Code helps',
    fieldNotes: [
      {
        title: 'It bypasses some friend-list friction',
        body: 'A code can be cleaner than chasing a missed Steam overlay notification or an Xbox party invite that never showed up.',
      },
      {
        title: 'It still depends on the host',
        body: 'If the host closes the world, reloads the save, or loses online service connection, the old code can stop being useful.',
      },
      {
        title: 'It does not fix account problems',
        body: 'Friend Code cannot solve a platform login, age restriction, privacy block, or player running a different hotfix.',
      },
    ],
    routeChecklistTitle: 'Friend Code join checklist',
    routeChecklist: [
      'Have the host load the co-op save before sharing the code.',
      'Copy the current code from the live session, not a screenshot from earlier.',
      'Confirm every player is updated to the same build.',
      'Ask joining players to sign in fully to Steam, Xbox app, or console services.',
      'If the code fails once, reload the host world and send a fresh code.',
      'If Xbox or Game Pass players fail together, check Xbox status before changing network settings.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to use Friend Code cleanly',
    routeSteps: [
      {
        title: 'Wait until the host is fully in the world',
        body: 'Do not share a code while the host is still loading or after the host has returned to the menu. The cleanest test starts with the host standing in the world and online services already connected.',
      },
      {
        title: 'Share the current code only',
        body: 'Codes can become stale after reloads, privacy changes, or session restarts. If anyone is unsure, throw away the old code and copy the one the host sees right now.',
      },
      {
        title: 'Use platform invites as a backup',
        body: 'Friend Code is not always better than Steam or Xbox invites. If the code path fails, try the normal platform invite once after a clean restart.',
      },
      {
        title: 'Keep privacy settings plain during testing',
        body: 'Appear-offline mode, strict cross-network settings, family controls, and private profiles can make a valid code feel broken. Relax those settings for one short test if possible.',
      },
      {
        title: 'Switch host only after the simple checks',
        body: 'If the same player fails with a fresh code and a platform invite, try a different host. If the problem follows one player, the issue is probably local to that player.',
      },
    ],
    tableTitle: 'Friend Code problems',
    tableHeaders: ['Problem', 'What to try first'],
    tableRows: [
      [
        'Code says invalid',
        'Ask the host for the current code from the live session.',
      ],
      [
        'Code hangs while joining',
        'Reload host, match builds, then check firewall or platform login.',
      ],
      [
        'Steam player can join but Xbox player cannot',
        'Check Xbox status and cross-network account settings.',
      ],
      [
        'One player always fails',
        'Check that player’s account, privacy, NAT, firewall, and app cache.',
      ],
      [
        'Everyone fails',
        'Check platform status, hotfix rollout timing, and host online connection.',
      ],
    ],
    visualTitle: 'Join flow card',
    visualItems: [
      {
        label: 'Host state',
        value: 'Loaded',
        note: 'Share the code after the world is live.',
      },
      {
        label: 'Code state',
        value: 'Fresh',
        note: 'Old screenshots are the enemy here.',
      },
      {
        label: 'Fallback',
        value: 'Invite',
        note: 'Try the platform invite path once after restart.',
      },
    ],
    cautionTitle: 'A Friend Code is not proof that crossplay is broken',
    cautionBody:
      'A failed code only tells you one join attempt failed. Before calling it a crossplay problem, check build version, host session, account sign-in, privacy, and whether the same player fails through a platform invite too.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do I use Subnautica 2 Friend Code?',
        body: 'Have the host load the world, copy the current code from that live session, then have the other player join with that code. If it fails, reload the host and use a fresh code.',
      },
      {
        title: 'Why does my Friend Code say invalid?',
        body: 'The usual cause is a stale code from an older session. It can also be version mismatch, platform login trouble, privacy restrictions, or a host session that is no longer active.',
      },
      {
        title: 'Is Friend Code better than Steam or Xbox invites?',
        body: 'It is a useful backup, especially for mixed groups. Same-platform groups should still try the normal platform invite after a clean restart.',
      },
      {
        title: 'Can Friend Code fix Game Pass join problems?',
        body: 'Not by itself. Game Pass players still need healthy Xbox app login, account permissions, service status, and matching game versions.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2InviteNotWorking, label: 'Invite Not Working' },
      { href: Routes.Subnautica2Crossplay, label: 'Crossplay Guide' },
      { href: Routes.Subnautica2ServerStatus, label: 'Server Status' },
      {
        href: Routes.Subnautica2OnlineServicesConnectionFailed,
        label: 'Online Services Connection Failed',
      },
      { href: Routes.Subnautica2Coop, label: 'Co-op Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 4, 2026 against the official Steam page, Xbox listing, Xbox status page, Unknown Worlds Hotfix 3, the Early Access roadmap, and the official gameplay trailer. Abyss Guides artwork is original fan-site artwork; the video is the official Subnautica embed.',
    cardKicker: 'Friend Code card',
    cardBody:
      'A clean join-flow page for current codes, stale sessions, crossplay checks, Steam and Xbox invites, Game Pass, and host stability.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Co-op join guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'First move',
    cardStatusValue: 'Fresh code',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 好友代码怎么用：联机加入和无效排查',
      description:
        'Subnautica 2 Friend Code 好友代码使用指南：当前会话、房主、Steam、Xbox、Game Pass、跨平台、隐私和代码无效排查。',
    },
    eyebrow: 'Subnautica 2 好友代码',
    title: 'Subnautica 2 好友代码：别拿旧代码加入新会话',
    description:
      '好友代码适合平台邀请不稳定的时候用，但它不是万能钥匙。把它当成当前会话的通行证：用最新代码，保证房主稳定，再去排查跨平台。',
    quickLabel: '快速结论',
    quickAnswer:
      '截至 2026 年 6 月 4 日，建议房主完全进入存档后再分享好友代码。代码失败时，让房主重载会话，复制当前代码，确认所有玩家版本一致；如果涉及 Xbox 或 Game Pass，再查看 Xbox 状态页。',
    fieldNotesTitle: '好友代码为什么有用',
    fieldNotes: [
      {
        title: '它能绕开部分好友列表问题',
        body: 'Steam 覆盖层通知没弹出来，或者 Xbox 派对邀请没收到时，好友代码通常更直接。',
      },
      {
        title: '它仍然依赖房主',
        body: '房主关闭世界、重新读档或在线服务断开后，旧代码就可能失效。',
      },
      {
        title: '它解决不了账号问题',
        body: '平台登录、年龄限制、隐私拦截、版本不同，这些不是一个代码能修好的。',
      },
    ],
    routeChecklistTitle: '好友代码加入清单',
    routeChecklist: [
      '房主先加载联机存档，再分享代码。',
      '复制当前会话里的代码，不要用旧截图。',
      '确认所有玩家更新到同一个版本。',
      '加入者先正常登录 Steam、Xbox 应用或主机服务。',
      '代码失败一次后，房主重载世界并发送新代码。',
      'Xbox 或 Game Pass 玩家同时失败时，先看 Xbox 状态页。',
    ],
    contentsLabel: '目录',
    routeTitle: '好友代码怎么正确使用',
    routeSteps: [
      {
        title: '等房主完全进入世界',
        body: '不要在房主还在读档时分享代码，也不要用房主退回菜单前的代码。最干净的测试，是房主已经站在世界里并且在线服务连接正常。',
      },
      {
        title: '只用当前代码',
        body: '重新读档、隐私改变或会话重启后，旧代码可能失效。不确定时，直接丢掉旧代码，让房主复制当前显示的代码。',
      },
      {
        title: '平台邀请也可以作为备用',
        body: '好友代码不一定永远比 Steam 或 Xbox 邀请更好。代码失败后，重启一次再试平台邀请，能帮助判断问题范围。',
      },
      {
        title: '测试时先简化隐私设置',
        body: '隐身、严格跨网络设置、家庭控制和私密资料都可能让有效代码看起来无效。能临时放宽的话，先做一次短测试。',
      },
      {
        title: '最后再换房主',
        body: '如果新代码和平台邀请都失败，再试换房主。如果问题只跟着某一个玩家走，原因更可能在这个玩家本地。',
      },
    ],
    tableTitle: '好友代码问题对照',
    tableHeaders: ['问题', '先试什么'],
    tableRows: [
      ['提示代码无效', '让房主从当前会话重新复制代码。'],
      ['输入代码后卡住', '房主重载、版本一致，然后查防火墙或平台登录。'],
      ['Steam 能进，Xbox 不能进', '查看 Xbox 状态和跨网络账号设置。'],
      ['只有一个人总失败', '查这个人的账号、隐私、NAT、防火墙和应用缓存。'],
      ['所有人都失败', '查平台状态、热修补推送时间和房主在线连接。'],
    ],
    visualTitle: '加入流程卡',
    visualItems: [
      {
        label: '房主状态',
        value: '已进世界',
        note: '世界加载完成后再分享。',
      },
      {
        label: '代码状态',
        value: '当前代码',
        note: '旧截图最容易误导。',
      },
      {
        label: '备用方式',
        value: '平台邀请',
        note: '重启后再试一次邀请路径。',
      },
    ],
    cautionTitle: '好友代码失败不等于跨平台坏了',
    cautionBody:
      '一次代码失败只能说明这次加入失败。先查版本、房主会话、账号登录、隐私，以及同一个玩家是否通过平台邀请也失败，再判断是不是跨平台问题。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 好友代码怎么用？',
        body: '房主进入世界后复制当前代码，其他玩家用这个代码加入。失败时，让房主重载世界并发新代码。',
      },
      {
        title: '为什么好友代码提示无效？',
        body: '最常见是代码来自旧会话。也可能是版本不同、平台登录异常、隐私限制或房主会话已经关闭。',
      },
      {
        title: '好友代码比 Steam 或 Xbox 邀请更好吗？',
        body: '它是很好的备用方式，尤其适合混合平台队伍。同平台队伍也可以在重启后试一次正常平台邀请。',
      },
      {
        title: '好友代码能修 Game Pass 加入失败吗？',
        body: '不能单独解决。Game Pass 玩家仍然需要 Xbox 应用登录正常、账号权限正常、服务状态正常，并且游戏版本一致。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2InviteNotWorking, label: '邀请无效排查' },
      { href: Routes.Subnautica2Crossplay, label: '跨平台联机' },
      { href: Routes.Subnautica2ServerStatus, label: '服务器状态' },
      {
        href: Routes.Subnautica2OnlineServicesConnectionFailed,
        label: '在线服务连接失败',
      },
      { href: Routes.Subnautica2Coop, label: '联机指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 4 日核对 Steam 官方页、Xbox 官方页、Xbox 状态页、Unknown Worlds Hotfix 3、抢先体验路线图和官方玩法预告。页面插图为 Abyss Guides 原创粉丝站配图；视频为官方 Subnautica 嵌入视频。',
    cardKicker: '好友代码卡',
    cardBody:
      '用于说明当前代码、旧会话、跨平台检查、Steam 和 Xbox 邀请、Game Pass 以及房主稳定性。',
    cardTypeLabel: '类型',
    cardTypeValue: '联机加入指南',
    cardVerifiedLabel: '已检查',
    cardStatusLabel: '第一步',
    cardStatusValue: '用当前代码',
  },
};

function getCopy(locale: Locale): FriendCodeCopy {
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
    pathname: Routes.Subnautica2FriendCode,
  });
}

export default async function Subnautica2FriendCodePage({
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
      icon={UsersRoundIcon}
      locale={locale}
      pathname={Routes.Subnautica2FriendCode}
      sources={sharedSources}
    />
  );
}
