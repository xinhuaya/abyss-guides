import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { ServerIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type DedicatedServerCopy = ResourceGuideCopy & {
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
    href: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap',
    label: 'Unknown Worlds Early Access roadmap',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-3',
    label: 'Unknown Worlds Hotfix 3',
  },
];

const copyByLocale: Record<string, DedicatedServerCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Dedicated Server Status: Hosting, Co-op Saves, and Friends',
      description:
        'A source-backed Subnautica 2 dedicated server guide covering official co-op wording, host sessions, server rental claims, friends joining without the host, and Early Access caveats.',
    },
    eyebrow: 'Subnautica 2 dedicated server check',
    title: 'Does Subnautica 2 Have Dedicated Servers?',
    description:
      'This is the page to read before you rent anything or promise a friend group that the world will stay online all night. Subnautica 2 has online co-op, but dedicated-server wording needs a cooler head.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Treat Subnautica 2 as an online co-op game that needs a host session unless an official source says otherwise for dedicated servers. The Steam and Xbox pages are useful for co-op, cross-platform, and player-count wording, but they are not the same as a public dedicated-server manual. If a third-party page sells Subnautica 2 server rental, check whether it points to official support before you spend money or move your group around that claim.',
    fieldNotesTitle: 'Why this search is easy to get wrong',
    fieldNotes: [
      {
        title: 'Co-op is not the same as dedicated servers',
        body: 'Online co-op means players can join a session. A dedicated server usually means a separate always-on host that friends can join without the save owner being in game.',
      },
      {
        title: 'Server-rental pages need proof',
        body: 'Search results may include hosting companies or generic game-server pages. That is not official support by itself.',
      },
      {
        title: 'Early Access can change the answer',
        body: 'Unknown Worlds is still patching co-op behavior and larger systems. Recheck official notes before turning one answer into a permanent rule.',
      },
    ],
    routeChecklistTitle: 'Before planning a group world',
    routeChecklist: [
      'Pick the player who can host most consistently.',
      'Make sure everyone can join the same short test save.',
      'Do not pay for server rental unless it clearly points to official Subnautica 2 support.',
      'Assume friends need the host session online until official dedicated-server wording exists.',
      'Back up saves before testing co-op after patches.',
      'Read hotfix notes if rejoin position, lag, or invites suddenly change.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to check dedicated-server claims',
    routeSteps: [
      {
        title: 'Start with the official store pages',
        body: 'Use Steam and Xbox for current co-op wording, player count, platform support, and account requirements. If dedicated servers matter to you, look for that exact wording.',
      },
      {
        title: 'Separate hosting from owning the save',
        body: 'A host player can start a co-op session. That does not automatically mean the save runs when that player is offline.',
      },
      {
        title: 'Treat rental pages as unverified until sourced',
        body: 'A hosting company can rank for a keyword before the game has public server tooling. Look for official docs, not just a checkout button.',
      },
      {
        title: 'Test friend access with a disposable save',
        body: 'Before your group commits to a long world, create a short save, invite everyone, close the host session, and see exactly what happens on your platforms.',
      },
      {
        title: 'Retest after big co-op patches',
        body: 'Hotfix 3 already touched a client rejoin-position issue. That is a reminder to retest multiplayer assumptions after updates.',
      },
    ],
    tableTitle: 'Dedicated-server search answers',
    tableHeaders: ['Search', 'Practical answer'],
    tableRows: [
      [
        'subnautica 2 dedicated server',
        'Check official Steam, Xbox, and Unknown Worlds pages. Do not treat rental ads as official support.',
      ],
      [
        'subnautica 2 server hosting',
        'Use caution. Hosting pages need to cite official Subnautica 2 dedicated-server support before you pay.',
      ],
      [
        'can friends play without host',
        'Plan as if the host session is required unless your platform and official docs say otherwise.',
      ],
      [
        'subnautica 2 private server',
        'A private co-op session and a dedicated private server are different things. Keep the wording separate.',
      ],
      [
        'subnautica 2 co-op save owner',
        'Choose the host carefully, test rejoin behavior, and back up the save before important sessions.',
      ],
    ],
    visualTitle: 'Host status card',
    visualItems: [
      {
        label: 'Co-op',
        value: 'Online',
        note: 'Official pages support small-team online co-op wording.',
      },
      {
        label: 'Server rental',
        value: 'Verify',
        note: 'Look for official support before paying.',
      },
      {
        label: 'Group save',
        value: 'Host first',
        note: 'Pick the player with the best schedule and connection.',
      },
    ],
    cautionTitle: 'Do not buy a server because a search result says so',
    cautionBody:
      'The safest page for players is the boring one: check the official feature wording, run a tiny co-op test, and only pay for hosting when official Subnautica 2 server support is clear. A good group save is easier to protect before it has thirty hours on it.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Does Subnautica 2 have dedicated servers?',
        body: 'Use official sources for the current answer. Steam and Xbox confirm online co-op wording, but that is not the same as a public dedicated-server setup guide.',
      },
      {
        title: 'Can my friends join when the host is offline?',
        body: 'Plan as if they cannot unless your exact platform flow or official wording proves otherwise. Test with a small save before relying on it.',
      },
      {
        title: 'Should I rent a Subnautica 2 server?',
        body: 'Not just from a search result. Only consider it if the provider clearly maps to official Subnautica 2 server support and you understand what happens to saves.',
      },
      {
        title: 'What should our group do instead?',
        body: 'Pick a reliable host, back up the save, test invites after each major patch, and keep a shared checklist for storage and route names.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Coop, label: 'Full Co-op Guide' },
      { href: Routes.Subnautica2CoopPlayerCount, label: 'Co-op Player Count' },
      {
        href: Routes.Subnautica2MultiplayerNotWorking,
        label: 'Multiplayer Not Working',
      },
      {
        href: Routes.Subnautica2MultiplayerLagDesync,
        label: 'Multiplayer Lag and Desync',
      },
      {
        href: Routes.Subnautica2CoopRejoinAfterHotfix3,
        label: 'Co-op Rejoin After Hotfix 3',
      },
      { href: Routes.Subnautica2Crossplay, label: 'Crossplay Guide' },
      { href: Routes.Subnautica2OfflineMode, label: 'Offline Mode' },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 3, 2026 against the official Steam Early Access page, the official Xbox listing, Unknown Worlds Early Access roadmap, and Hotfix 3. This page separates online co-op wording from dedicated-server claims because search results can mix official features with third-party hosting pages.',
    cardKicker: 'Host session card',
    cardBody:
      'A cautious co-op infrastructure page for dedicated-server searches, server rental claims, host saves, friend access, and patch-sensitive rejoin behavior.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Co-op status guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Best move',
    cardStatusValue: 'Host test save',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 有专用服务器吗？联机房主、存档和租服说明',
      description:
        'Subnautica 2 专用服务器中文说明：官方联机表述、房主存档、朋友能否在房主离线时加入、租服页面风险和抢先体验注意事项。',
    },
    eyebrow: 'Subnautica 2 专用服务器检查',
    title: 'Subnautica 2 有专用服务器吗？先别急着租服',
    description:
      '准备和朋友长期联机前，先把“在线合作”和“专用服务器”分清楚。能联机，不代表世界会在房主离线后继续开着。',
    quickLabel: '快速结论',
    quickAnswer:
      '在没有官方明确专用服务器说明前，先把 Subnautica 2 当成需要房主开启会话的在线合作游戏处理。Steam 和 Xbox 页面适合确认联机、跨平台和人数表述，但它们不是公开专用服务器搭建手册。如果搜索结果里有第三方租服页面，先看它有没有指向官方支持，再决定要不要付费。',
    fieldNotesTitle: '为什么这个问题容易被写歪',
    fieldNotes: [
      {
        title: '联机不等于专用服务器',
        body: '在线合作是玩家加入一个会话。专用服务器通常指独立常驻主机，朋友可以在存档主人不在线时加入。',
      },
      {
        title: '租服页面要看证据',
        body: '搜索结果里可能出现主机商或通用游戏服务器页面。那不等于 Subnautica 2 官方支持专用服务器。',
      },
      {
        title: '抢先体验答案会变化',
        body: 'Unknown Worlds 还在修联机和大系统。把一个答案写死之前，先看最新官方说明。',
      },
    ],
    routeChecklistTitle: '开长期联机档前先做',
    routeChecklist: [
      '选择最稳定、最常在线的玩家做房主。',
      '先用短测试存档确认每个人能加入。',
      '租服前确认它是否明确指向官方 Subnautica 2 支持。',
      '没有官方专用服务器说明前，先按需要房主在线处理。',
      '补丁后测试联机前，先备份重要存档。',
      '如果重进位置、延迟或邀请突然异常，先看最新 hotfix。',
    ],
    contentsLabel: '目录',
    routeTitle: '怎么判断专用服务器说法靠不靠谱',
    routeSteps: [
      {
        title: '先看官方商店页面',
        body: 'Steam 和 Xbox 用来确认当前联机表述、人数、平台支持和账号要求。如果你需要专用服务器，就找“dedicated server”这种明确字样。',
      },
      {
        title: '区分房主和服务器',
        body: '玩家做房主可以开合作会话，但这不自动等于房主离线后存档还能继续运行。',
      },
      {
        title: '租服页面先当未验证',
        body: '主机商可能先抢关键词排名。先找官方文档，不要只看购买按钮。',
      },
      {
        title: '用临时存档测试朋友能否加入',
        body: '长期玩之前，新建一个短存档，邀请所有人，关闭房主会话，看你们平台上实际会发生什么。',
      },
      {
        title: '大补丁后重新测试',
        body: 'Hotfix 3 已经提到过客户端重进位置问题。联机假设要在更新后重新确认。',
      },
    ],
    tableTitle: '专用服务器搜索怎么回答',
    tableHeaders: ['搜索词', '实用答案'],
    tableRows: [
      [
        'subnautica 2 dedicated server',
        '先查 Steam、Xbox 和 Unknown Worlds 官方页面。不要把租服广告当官方支持。',
      ],
      [
        'subnautica 2 server hosting',
        '谨慎处理。付费前要看到它明确对应官方 Subnautica 2 专用服务器支持。',
      ],
      [
        'can friends play without host',
        '没有官方说明前，先按需要房主开启会话处理。',
      ],
      [
        'subnautica 2 private server',
        '私人合作会话和专用私人服务器不是一回事，别混着写。',
      ],
      [
        'subnautica 2 co-op save owner',
        '房主要慎选，重进要测试，重要存档先备份。',
      ],
    ],
    visualTitle: '房主状态卡',
    visualItems: [
      {
        label: '联机',
        value: '在线合作',
        note: '官方页面有小队在线合作相关表述。',
      },
      {
        label: '租服',
        value: '先验证',
        note: '付费前找官方支持依据。',
      },
      {
        label: '长期存档',
        value: '先选房主',
        note: '优先选网络和在线时间最稳定的人。',
      },
    ],
    cautionTitle: '不要因为搜到租服页面就直接付钱',
    cautionBody:
      '对玩家最稳的答案反而很朴素：先看官方功能表述，跑一个小合作测试，等官方服务器支持清楚后再考虑付费托管。一个三十小时的联机档，最好在开始前就保护好。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 有专用服务器吗？',
        body: '以官方来源为准。Steam 和 Xbox 可以确认在线合作表述，但这不等于已经有公开专用服务器搭建指南。',
      },
      {
        title: '房主不在线，朋友还能玩吗？',
        body: '没有你们平台的实测结果或官方说明前，先按不能处理。长期玩之前用小存档测试。',
      },
      {
        title: '要不要租 Subnautica 2 服务器？',
        body: '不要只因为搜索结果就租。除非服务商能明确对应官方 Subnautica 2 服务器支持，而且你知道存档怎么处理。',
      },
      {
        title: '朋友组队现在怎么做更稳？',
        body: '选稳定房主，备份存档，大补丁后重新测邀请和重进，再约定箱子标签和路线名字。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Coop, label: '完整联机攻略' },
      { href: Routes.Subnautica2CoopPlayerCount, label: '联机人数' },
      { href: Routes.Subnautica2MultiplayerNotWorking, label: '联机进不去' },
      {
        href: Routes.Subnautica2MultiplayerLagDesync,
        label: '联机延迟和不同步',
      },
      {
        href: Routes.Subnautica2CoopRejoinAfterHotfix3,
        label: 'Hotfix 3 后重进联机',
      },
      { href: Routes.Subnautica2Crossplay, label: '跨平台联机' },
      { href: Routes.Subnautica2OfflineMode, label: '离线模式' },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 3 日核对 Steam 抢先体验页面、Xbox 官方页面、Unknown Worlds 抢先体验路线图和 Hotfix 3。这个页面刻意把在线合作和专用服务器说法分开，因为搜索结果容易把官方功能和第三方租服页面混在一起。',
    cardKicker: '房主会话卡',
    cardBody:
      '面向专用服务器、租服、房主存档、朋友离线加入和补丁后重进问题的谨慎联机说明。',
    cardTypeLabel: '类型',
    cardTypeValue: '联机状态指南',
    cardVerifiedLabel: '已检查',
    cardStatusLabel: '建议',
    cardStatusValue: '先测房主存档',
  },
};

function getCopy(locale: Locale): DedicatedServerCopy {
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
    pathname: Routes.Subnautica2DedicatedServer,
  });
}

export default async function Subnautica2DedicatedServerPage({
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
      pathname={Routes.Subnautica2DedicatedServer}
      sources={sharedSources}
    />
  );
}
