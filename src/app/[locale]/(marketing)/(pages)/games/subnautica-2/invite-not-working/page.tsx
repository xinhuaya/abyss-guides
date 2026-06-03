import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { UsersRoundIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type InviteCopy = ResourceGuideCopy & {
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

const copyByLocale: Record<string, InviteCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Invite Not Working - Friend Code, Steam, Xbox Fixes',
      description:
        'Fix Subnautica 2 invite not working issues with a source-backed checklist for Friend Code, Steam, Xbox, Game Pass, host saves, versions, privacy, and co-op retries.',
    },
    eyebrow: 'Subnautica 2 invite not working',
    title: 'Subnautica 2 Invite Not Working? Check the Quiet Stuff First',
    description:
      'Most failed co-op invites are not dramatic server mysteries. They are version mismatches, privacy settings, Friend Code confusion, host-save timing, or platform services being fussy for a few minutes.',
    quickLabel: 'Fast fix',
    quickAnswer:
      'As of June 3, 2026, start with the simple checks: make sure every player is on the same build, restart the host session, use the current Friend Code or platform invite, check Xbox status if Xbox or Game Pass is involved, and avoid mixing old invites with a freshly restarted save.',
    fieldNotesTitle: 'Why Subnautica 2 invites fail',
    fieldNotes: [
      {
        title: 'Old invites go stale',
        body: 'If the host closes the session, reloads the save, or changes privacy state, an invite link or platform notification may point to a session that no longer exists.',
      },
      {
        title: 'Platforms do not fail the same way',
        body: 'Steam, Xbox, PC Game Pass, and crossplay paths can each have their own friends list, privacy, overlay, and service-state checks.',
      },
      {
        title: 'The host carries the save',
        body: 'Subnautica 2 co-op still revolves around the host world. If the host is mid-load, stuck syncing, or on a different build, invited players can bounce before the world opens.',
      },
    ],
    routeChecklistTitle: 'Invite checklist',
    routeChecklist: [
      'Confirm every player has the same Subnautica 2 build and hotfix.',
      'Have the host reload the save, then send a fresh invite.',
      'Try Friend Code if a platform invite does not arrive.',
      'Check Xbox status when Xbox, PC Game Pass, or cloud play is involved.',
      'Turn off strict privacy or appear-offline settings while testing.',
      'Restart Steam, the Xbox app, or the console if invites never show up.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to fix Subnautica 2 co-op invites',
    routeSteps: [
      {
        title: 'Start with a fresh host session',
        body: 'Ask the host to quit to the menu, load the world again, and send one new invite. Do not keep clicking old notifications from before the restart.',
      },
      {
        title: 'Match build numbers before blaming the network',
        body: 'After a hotfix, one player can be updated while another is still waiting on Steam, Xbox app, or console patching. If versions do not match, invites can fail even when both players are online.',
      },
      {
        title: 'Use the cleanest invite path',
        body: 'For same-platform friends, use the normal platform invite first. For mixed groups, use the current Friend Code or the in-game invite method the host sees in the live build.',
      },
      {
        title: 'Check privacy and online presence',
        body: 'Private profiles, appear-offline mode, blocked cross-network play, family controls, or party restrictions can stop an invite from reaching the other player.',
      },
      {
        title: 'Check service status only when it fits',
        body: 'If several players cannot receive Xbox or Game Pass invites, check the Xbox status page. If only one player is affected, local app state, privacy, or a stale invite is more likely.',
      },
      {
        title: 'Keep the first retry boring',
        body: 'Close overlays, restart the platform app, send one new invite, and test with a short world load. Save deeper troubleshooting for repeat failures, not the first missed notification.',
      },
    ],
    tableTitle: 'Invite problem map',
    tableHeaders: ['Symptom', 'Likely check'],
    tableRows: [
      [
        'Invite never appears',
        'Check overlay, notifications, privacy, online presence, and platform app state.',
      ],
      [
        'Invite appears but join fails',
        'Reload host save, send a fresh invite, then check matching builds.',
      ],
      [
        'Friend Code does not work',
        'Make sure the code is from the current session and has not changed after reload.',
      ],
      [
        'Xbox or Game Pass friend cannot join',
        'Check Xbox status, account permissions, app updates, and cross-network settings.',
      ],
      [
        'One player can join, another cannot',
        'Look at the blocked player first: privacy, version, NAT, firewall, or app cache.',
      ],
    ],
    visualTitle: 'Fresh invite flow',
    visualItems: [
      {
        label: 'First move',
        value: 'Reload host',
        note: 'A fresh save session clears many stale invite problems.',
      },
      {
        label: 'Second move',
        value: 'Match build',
        note: 'Hotfix timing can split a group without anyone noticing.',
      },
      {
        label: 'Third move',
        value: 'Swap method',
        note: 'Try platform invite, then Friend Code, or the reverse.',
      },
    ],
    cautionTitle: 'Do not spam ten invites at once',
    cautionBody:
      'Invite spam makes the problem harder to read. Send one fresh invite after the host reloads, wait for the result, then change one variable at a time. That gives you a real answer instead of a stack of stale notifications.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Why is my Subnautica 2 invite not working?',
        body: 'The common causes are stale invites, different builds, privacy settings, platform overlay problems, Xbox or Game Pass service issues, or a host save that has not fully loaded.',
      },
      {
        title: 'Should I use Friend Code or platform invites?',
        body: 'Use the method that fits your group. Same-platform groups can start with platform invites. Mixed Steam, Xbox, and Game Pass groups should test the current Friend Code path if platform invites do not land.',
      },
      {
        title: 'Can Xbox status break Subnautica 2 invites?',
        body: 'It can affect Xbox, PC Game Pass, and account services. Check the official Xbox status page when several Xbox-service players are affected at the same time.',
      },
      {
        title: 'Does restarting the host really help?',
        body: 'Yes, because the host owns the active world session. A clean reload gives the group a fresh session and avoids old notifications pointing at a closed one.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Coop, label: 'Co-op Guide' },
      { href: Routes.Subnautica2Crossplay, label: 'Crossplay Guide' },
      {
        href: Routes.Subnautica2OnlineServicesConnectionFailed,
        label: 'Online Services Connection Failed',
      },
      {
        href: Routes.Subnautica2MultiplayerLagDesync,
        label: 'Multiplayer Lag and Desync',
      },
      { href: Routes.Subnautica2VoiceChat, label: 'Voice Chat Status' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 3, 2026 against the official Steam page, Xbox listing, Xbox status page, Unknown Worlds Hotfix 3, the Early Access roadmap, and the official gameplay trailer. Abyss Guides artwork is original fan-site artwork; the video is the official Subnautica embed.',
    cardKicker: 'Co-op invite card',
    cardBody:
      'A practical invite-failure page for Friend Code, Steam, Xbox, Game Pass, host saves, privacy, hotfix versions, and stale session retries.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Co-op troubleshooting',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'First move',
    cardStatusValue: 'Reload host',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 邀请无效怎么办：好友代码、Steam、Xbox 排查',
      description:
        'Subnautica 2 邀请进不去、好友代码无效、Steam/Xbox/Game Pass 联机失败排查：版本、房主、隐私、服务状态和重试顺序。',
    },
    eyebrow: 'Subnautica 2 邀请无效',
    title: 'Subnautica 2 邀请进不去？先查这些小问题',
    description:
      '很多联机邀请失败并不是服务器大故障，而是版本不同、隐私设置、好友代码过期、房主刚重开存档，或者平台服务短时间不稳定。',
    quickLabel: '快速处理',
    quickAnswer:
      '截至 2026 年 6 月 3 日，先确认所有玩家是同一个版本；让房主重新加载存档并发送新的邀请；平台邀请不行就试当前好友代码；如果涉及 Xbox、PC Game Pass 或云游戏，再查看 Xbox 官方状态页。',
    fieldNotesTitle: '为什么邀请会失败',
    fieldNotes: [
      {
        title: '旧邀请很容易失效',
        body: '房主关闭会话、重新读档或改了隐私状态后，旧通知可能还在，但它指向的会话已经不存在。',
      },
      {
        title: '不同平台的失败方式不同',
        body: 'Steam、Xbox、PC Game Pass 和跨平台联机都有自己的好友列表、隐私、通知和服务状态。',
      },
      {
        title: '房主承担存档和会话',
        body: '联机世界围绕房主存档运行。房主还在读档、同步或版本没更新时，被邀请的人可能直接进不去。',
      },
    ],
    routeChecklistTitle: '邀请排查清单',
    routeChecklist: [
      '确认所有玩家的 Subnautica 2 版本和热修补一致。',
      '让房主重新加载存档，再发一条新的邀请。',
      '平台邀请收不到时，改用当前会话的好友代码。',
      '涉及 Xbox、PC Game Pass 或云游戏时，查看 Xbox 状态页。',
      '测试时先关闭严格隐私、离线显示和跨网络限制。',
      '通知一直不出现时，重启 Steam、Xbox 应用或主机。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Subnautica 2 联机邀请怎么修',
    routeSteps: [
      {
        title: '先让房主开一个新会话',
        body: '让房主退到菜单，重新加载世界，然后只发一条新邀请。不要继续点重开前留下的旧通知。',
      },
      {
        title: '先对版本，再怪网络',
        body: '热修补后，一个玩家可能已经更新，另一个还在等待 Steam、Xbox 应用或主机补丁。版本不同，在线状态正常也可能进不去。',
      },
      {
        title: '选择最干净的邀请方式',
        body: '同平台好友先用平台邀请。混合 Steam、Xbox、Game Pass 的队伍，如果平台邀请不稳定，就试房主当前能看到的好友代码或游戏内邀请。',
      },
      {
        title: '检查隐私和在线状态',
        body: '私密资料、隐身、家庭控制、跨网络联机限制、派对权限，都可能让邀请发不到对方手里。',
      },
      {
        title: '只在合适时检查服务状态',
        body: '如果多个 Xbox 或 Game Pass 玩家同时收不到邀请，就看 Xbox 状态页。如果只有一个人失败，更可能是本地应用、隐私、版本或旧邀请。',
      },
      {
        title: '第一次重试要简单',
        body: '关掉覆盖层，重启平台应用，发一条新邀请，用短时间读档测试。不要一开始就改太多设置。',
      },
    ],
    tableTitle: '邀请问题对照表',
    tableHeaders: ['现象', '优先检查'],
    tableRows: [
      ['邀请完全不出现', '检查通知、覆盖层、隐私、在线状态和平台应用。'],
      ['看到邀请但加入失败', '房主重新读档，发新邀请，再确认版本一致。'],
      ['好友代码无效', '确认代码来自当前会话，不是房主重开前的旧代码。'],
      [
        'Xbox 或 Game Pass 好友进不来',
        '检查 Xbox 状态、账号权限、应用更新和跨网络设置。',
      ],
      [
        '别人能进，只有一个人不能进',
        '优先查这个人的隐私、版本、NAT、防火墙或应用缓存。',
      ],
    ],
    visualTitle: '新邀请流程',
    visualItems: [
      {
        label: '第一步',
        value: '房主重载',
        note: '新会话能排除很多旧邀请问题。',
      },
      {
        label: '第二步',
        value: '版本一致',
        note: '热修补期间队伍很容易分成不同版本。',
      },
      {
        label: '第三步',
        value: '换邀请方式',
        note: '平台邀请和好友代码可以互相验证。',
      },
    ],
    cautionTitle: '不要连续狂发十条邀请',
    cautionBody:
      '邀请刷太多只会更乱。房主重载后发一条新的，等结果，再一次只改一个变量。这样才能知道真正卡在哪里。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 邀请为什么进不去？',
        body: '常见原因是旧邀请、版本不同、隐私设置、平台通知异常、Xbox 或 Game Pass 服务问题，或者房主存档还没有完全加载。',
      },
      {
        title: '应该用好友代码还是平台邀请？',
        body: '同平台队伍可以先用平台邀请。Steam、Xbox、Game Pass 混合队伍，如果平台邀请收不到，就试当前会话的好友代码。',
      },
      {
        title: 'Xbox 状态会影响邀请吗？',
        body: '会，特别是 Xbox、PC Game Pass 和账号服务。如果多个 Xbox 服务玩家同时异常，就看官方状态页。',
      },
      {
        title: '重启房主真的有用吗？',
        body: '有用。房主掌握当前世界会话。重新加载后再发邀请，可以避免旧通知指向已关闭的会话。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Coop, label: '联机指南' },
      { href: Routes.Subnautica2Crossplay, label: '跨平台联机' },
      {
        href: Routes.Subnautica2OnlineServicesConnectionFailed,
        label: '在线服务连接失败',
      },
      {
        href: Routes.Subnautica2MultiplayerLagDesync,
        label: '联机延迟和不同步',
      },
      { href: Routes.Subnautica2VoiceChat, label: '语音聊天状态' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 3 日核对 Steam 官方页、Xbox 官方页、Xbox 状态页、Unknown Worlds Hotfix 3、抢先体验路线图和官方玩法预告。页面插图为 Abyss Guides 原创粉丝站配图；视频为官方 Subnautica 嵌入视频。',
    cardKicker: '联机邀请卡',
    cardBody:
      '用于排查好友代码、Steam、Xbox、Game Pass、房主存档、隐私、热修补版本和旧会话邀请。',
    cardTypeLabel: '类型',
    cardTypeValue: '联机排查',
    cardVerifiedLabel: '已检查',
    cardStatusLabel: '第一步',
    cardStatusValue: '房主重载',
  },
};

function getCopy(locale: Locale): InviteCopy {
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
    pathname: Routes.Subnautica2InviteNotWorking,
  });
}

export default async function Subnautica2InviteNotWorkingPage({
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
      pathname={Routes.Subnautica2InviteNotWorking}
      sources={sharedSources}
    />
  );
}
