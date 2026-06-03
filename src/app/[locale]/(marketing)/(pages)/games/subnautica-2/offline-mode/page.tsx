import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { RadioIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type OfflineCopy = ResourceGuideCopy & {
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
];

const copyByLocale: Record<string, OfflineCopy> = {
  en: {
    metadata: {
      title:
        'Can You Play Subnautica 2 Offline? Single-Player and Internet Status',
      description:
        'A source-backed Subnautica 2 offline mode and single-player guide covering Steam requirements, solo play, online co-op, broadband internet wording, Xbox, Game Pass, cloud saves, and Early Access caveats.',
    },
    eyebrow: 'Subnautica 2 offline mode check',
    title:
      'Can You Play Subnautica 2 Offline? Single-Player and Internet Status',
    description:
      'This is a deceptively easy question. Subnautica is famous as a solo survival game, but Subnautica 2 also has online co-op, Early Access updates, platform services, and store requirements that make “offline” worth checking carefully.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Subnautica 2 is presented as playable alone and with friends, but do not treat that as a blanket promise that every install, account, cloud-save flow, or update state works fully offline. The Steam page lists broadband internet in the system requirements, and official platform pages are the best source for current single-player, co-op, and service wording. If offline play matters to you, test a solo save after installing and updating before you rely on it for travel or limited internet.',
    fieldNotesTitle: 'Why offline searches need nuance',
    fieldNotes: [
      {
        title: 'Single-player is not the same as offline',
        body: 'A game can support solo play and still need online services for first launch, updates, account checks, cloud saves, multiplayer, or store features.',
      },
      {
        title: 'Early Access updates matter',
        body: 'If you play while disconnected, you may also be playing an older build. That matters when hotfixes change crashes, DLSS behavior, co-op rejoin bugs, or resource routes.',
      },
      {
        title: 'Cloud saves can surprise you',
        body: 'Steam Cloud, Xbox sync, and Game Pass installs can add another layer. Offline saves are not scary, but you should know which copy is current before reconnecting.',
      },
    ],
    routeChecklistTitle: 'Before relying on offline play',
    routeChecklist: [
      'Install the game and let the launcher finish the newest update first.',
      'Start a fresh solo save while online, then test launching it again after disconnecting.',
      'Do not test offline behavior with your only important save.',
      'Let cloud sync finish before turning the network off or back on.',
      'Expect online co-op, invites, cloud play, and store services to need a network.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to test offline play without risking a save',
    routeSteps: [
      {
        title: 'Update before the test',
        body: 'Launch through Steam, Xbox, or your store client while online. Let patches finish, then close the game cleanly once.',
      },
      {
        title: 'Create a disposable solo save',
        body: 'Use a small test save, not your main world. Swim for a minute, save, close the game, then disconnect and try to reopen that save.',
      },
      {
        title: 'Watch for account or launcher prompts',
        body: 'If the client asks for sign-in, cloud sync, or an update before launch, write that down. That is a platform-service issue, not a creature or base-building problem.',
      },
      {
        title: 'Keep cloud saves boring',
        body: 'When you reconnect, let Steam Cloud or Xbox sync finish before moving files. Most save mistakes happen when players click through a conflict too fast.',
      },
      {
        title: 'Retest after major patches',
        body: 'A hotfix can change crashes, save behavior, and platform integration. If offline play matters, test again after big updates.',
      },
    ],
    tableTitle: 'Offline and solo search answers',
    tableHeaders: ['Question', 'Current answer'],
    tableRows: [
      [
        'Can you play Subnautica 2 single-player?',
        'Official wording presents Subnautica 2 as playable alone or with friends. Use store pages for current feature wording.',
      ],
      [
        'Can you play Subnautica 2 offline?',
        'Do not assume every install works fully offline. Test a fresh solo save after installation and updates, especially if cloud saves or Game Pass are involved.',
      ],
      [
        'Does Subnautica 2 require internet?',
        'Steam lists broadband internet in the system requirements, and online co-op/platform services need a network. Check the store page before buying for offline use.',
      ],
      [
        'Does co-op work offline?',
        'No practical reason to plan around that. Co-op, invites, crossplay, and cloud play should be treated as online features.',
      ],
      [
        'Can I play while traveling?',
        'Only after you have tested the exact device, launcher, and save while disconnected. Do not use your main save as the first test.',
      ],
    ],
    visualTitle: 'Offline test card',
    visualItems: [
      {
        label: 'Solo',
        value: 'Supported wording',
        note: 'Play alone is part of the official pitch.',
      },
      {
        label: 'Internet',
        value: 'Check required',
        note: 'Steam lists broadband internet in requirements.',
      },
      {
        label: 'Co-op',
        value: 'Online',
        note: 'Invites, crossplay, and cloud play need network access.',
      },
    ],
    cautionTitle: 'Do not test offline mode on your only save',
    cautionBody:
      'Offline testing is harmless when you use a fresh save and let cloud sync finish. It gets messy when you disconnect mid-sync, overwrite a newer cloud save, or test a patch issue on the only world you care about.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Is Subnautica 2 single-player?',
        body: 'Yes, official wording frames it as playable alone or with friends. The separate question is how your platform handles offline launching and saves.',
      },
      {
        title: 'Can I play Subnautica 2 without internet?',
        body: 'Test it on your own install after updating. Steam lists broadband internet in the requirements, and platform services can affect launch, sync, and saves.',
      },
      {
        title: 'Will offline play break my cloud saves?',
        body: 'Not by itself. The risk is reconnecting too quickly, choosing the wrong cloud/local copy, or testing on your only save. Make a small backup first.',
      },
      {
        title: 'Does Xbox Game Pass change the offline answer?',
        body: 'It can. Subscription checks, Xbox app behavior, cloud saves, and device policy can affect offline access. Test the exact device before you rely on it.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2SystemRequirements,
        label: 'System Requirements',
      },
      { href: Routes.Subnautica2SaveFileLocation, label: 'Save File Location' },
      {
        href: Routes.Subnautica2SaveRecoveryCloudSync,
        label: 'Save Recovery and Cloud Sync',
      },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      { href: Routes.Subnautica2CoopPlayerCount, label: 'Co-op Player Count' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 3, 2026 against the official Steam Early Access page, Xbox listing, and Unknown Worlds roadmap. The page separates single-player wording from full offline behavior because launchers, cloud saves, subscriptions, and Early Access updates can change the real experience.',
    cardKicker: 'Offline status card',
    cardBody:
      'A practical page for single-player, offline mode, internet requirements, cloud saves, Xbox/Game Pass, and travel-device checks.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Platform and mode guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Test your install',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 能离线玩吗？单人模式和联网需求说明',
      description:
        'Subnautica 2 离线模式和单人模式中文说明：核对 Steam 配置、单人游玩、在线合作、宽带网络需求、Xbox、Game Pass、云存档和抢先体验注意点。',
    },
    eyebrow: 'Subnautica 2 离线模式检查',
    title: 'Subnautica 2 能离线玩吗？单人模式和联网需求说明',
    description:
      '这个问题看起来简单，其实很容易答错。Subnautica 系列一直适合单人玩，但 Subnautica 2 同时有在线合作、抢先体验更新、平台服务和云存档，所以“能不能离线”要分开看。',
    quickLabel: '快速结论',
    quickAnswer:
      'Subnautica 2 官方表述包含单人游玩和与朋友合作，但不要把这句话直接理解成任何平台、任何安装状态、任何账号和云存档流程都能完全离线。Steam 页面在系统需求里列出宽带网络，平台页面才是判断当前单人、合作和服务要求的来源。如果你很在意离线游玩，安装并更新后，先用一个新的单人存档断网测试，再决定是否带着它出门或在弱网环境下玩。',
    fieldNotesTitle: '为什么离线问题不能一句话带过',
    fieldNotes: [
      {
        title: '单人不等于离线',
        body: '游戏可以支持单人，但首次启动、更新、账号检查、云存档、多人联机和商店服务仍然可能需要网络。',
      },
      {
        title: '抢先体验更新很重要',
        body: '断网玩可能意味着你停留在旧版本。补丁会影响崩溃、DLSS、联机重连、资源路线，这些都和攻略准确性有关。',
      },
      {
        title: '云存档容易让人手快点错',
        body: 'Steam Cloud、Xbox 同步和 Game Pass 安装会多一层状态。离线存档本身不可怕，怕的是重新联网时选错本地/云端副本。',
      },
    ],
    routeChecklistTitle: '真正依赖离线前先检查',
    routeChecklist: [
      '先联网安装游戏，并让启动器完成最新更新。',
      '新建一个测试用单人存档，再断网尝试重新打开。',
      '不要用唯一重要存档做第一次离线测试。',
      '断网或重新联网前，确认云存档同步已经结束。',
      '在线合作、邀请、跨平台、云游戏和商店服务都按需要网络处理。',
    ],
    contentsLabel: '目录',
    routeTitle: '怎么测试离线而不伤存档',
    routeSteps: [
      {
        title: '先更新，再测试',
        body: '用 Steam、Xbox 或对应商店客户端联网启动一次，让补丁完成。正常关闭游戏后再开始离线测试。',
      },
      {
        title: '创建一个临时单人存档',
        body: '不要拿主存档冒险。新开一个小存档，游一分钟，保存，关闭游戏，断网后再尝试打开。',
      },
      {
        title: '留意账号和启动器提示',
        body: '如果客户端要求登录、同步或更新，先记下来。这是平台服务问题，不是游戏内路线或基地问题。',
      },
      {
        title: '让云存档保持简单',
        body: '重新联网后，先等 Steam Cloud 或 Xbox 同步完成再移动文件。很多存档事故都是点云端冲突时太快。',
      },
      {
        title: '大补丁后重新测一次',
        body: 'Hotfix 可能改变崩溃、存档和平台集成。离线对你很重要的话，大更新后再测一遍。',
      },
    ],
    tableTitle: '离线和单人搜索怎么回答',
    tableHeaders: ['问题', '当前答案'],
    tableRows: [
      [
        'Subnautica 2 能单人玩吗？',
        '官方表述包含单人游玩和与朋友合作。具体功能文字以商店页面为准。',
      ],
      [
        'Subnautica 2 能离线玩吗？',
        '不要默认任何安装都完全离线可用。安装更新后，用新的单人存档断网测试，尤其是涉及云存档或 Game Pass 时。',
      ],
      [
        'Subnautica 2 需要联网吗？',
        'Steam 系统需求里列出宽带网络，在线合作和平台服务也需要网络。为了离线买游戏前要先核对商店页。',
      ],
      [
        '联机能离线玩吗？',
        '不要这样规划。合作、邀请、跨平台和云游戏都按在线功能处理。',
      ],
      [
        '旅行时能玩吗？',
        '只有你已经在同一台设备、同一启动器、同一存档上断网测试过，才适合依赖它。',
      ],
    ],
    visualTitle: '离线测试判断卡',
    visualItems: [
      {
        label: '单人',
        value: '官方表述支持',
        note: '可以单独游玩是官方卖点之一。',
      },
      {
        label: '网络',
        value: '需要核对',
        note: 'Steam 需求里列出宽带网络。',
      },
      {
        label: '合作',
        value: '在线',
        note: '邀请、跨平台和云游戏都需要网络。',
      },
    ],
    cautionTitle: '不要用唯一主存档测试离线',
    cautionBody:
      '用新存档测试离线很安全，真正麻烦的是断网时云同步没完成，或者重新联网时选错本地/云端副本。先备份，再测试。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 是单人游戏吗？',
        body: '官方表述是可以单人，也可以和朋友一起玩。另一个问题是你的平台怎么处理离线启动和存档。',
      },
      {
        title: '没有网络能玩 Subnautica 2 吗？',
        body: '安装更新后请自己用测试存档确认。Steam 需求里写有宽带网络，平台服务可能影响启动、同步和存档。',
      },
      {
        title: '离线会弄坏云存档吗？',
        body: '离线本身不会。风险在于重新联网时选错本地或云端副本，或者用唯一主存档乱测。先做一个小备份。',
      },
      {
        title: 'Xbox Game Pass 会影响离线答案吗？',
        body: '可能会。订阅检查、Xbox App、云存档和设备策略都会影响离线访问。要用哪台设备，就在那台设备上先测。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2SystemRequirements, label: '配置要求' },
      { href: Routes.Subnautica2SaveFileLocation, label: '存档位置' },
      {
        href: Routes.Subnautica2SaveRecoveryCloudSync,
        label: '存档恢复和云同步',
      },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      { href: Routes.Subnautica2CoopPlayerCount, label: '联机人数' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 3 日检查 Steam 抢先体验页面、Xbox 官方页面和 Unknown Worlds 路线图。这个页面把单人游玩和完整离线行为分开写，因为启动器、云存档、订阅和抢先体验更新都会影响真实体验。',
    cardKicker: '离线状态卡',
    cardBody:
      '面向单人模式、离线游玩、联网需求、云存档、Xbox/Game Pass 和旅行设备测试的实用页面。',
    cardTypeLabel: '类型',
    cardTypeValue: '平台和模式指南',
    cardVerifiedLabel: '已检查',
    cardStatusLabel: '状态',
    cardStatusValue: '建议实机测试',
  },
};

function getCopy(locale: Locale): OfflineCopy {
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
    pathname: Routes.Subnautica2OfflineMode,
  });
}

export default async function Subnautica2OfflineModePage({
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
      pathname={Routes.Subnautica2OfflineMode}
      sources={sharedSources}
    />
  );
}
