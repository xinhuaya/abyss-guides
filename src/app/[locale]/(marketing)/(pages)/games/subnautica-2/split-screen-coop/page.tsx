import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { MonitorPlayIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type SplitScreenCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-06-03';
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
    href: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap',
    label: 'Unknown Worlds Early Access roadmap',
  },
];

const copyByLocale: Record<string, SplitScreenCopy> = {
  en: {
    metadata: {
      title: 'Does Subnautica 2 Have Split Screen or Couch Co-op?',
      description:
        'A direct Subnautica 2 split-screen and couch co-op guide covering online co-op, local co-op wording, player count, crossplay, Xbox, Steam, and Early Access caveats.',
    },
    eyebrow: 'Subnautica 2 local co-op check',
    title: 'Does Subnautica 2 Have Split Screen or Couch Co-op?',
    description:
      'This is the page to read before you put two controllers on the table. Subnautica 2 does have official online co-op wording, but split screen and couch co-op need a much stricter answer.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'No official source checked on June 4, 2026 confirms Subnautica 2 split screen or couch co-op. Steam and Xbox point players toward online co-op and cross-platform multiplayer, not a shared-screen local mode. If you want to play together today, plan around separate devices and an online session unless your platform store page later adds clear local co-op wording.',
    fieldNotesTitle: 'Why this search gets messy',
    fieldNotes: [
      {
        title: 'Online co-op is not split screen',
        body: 'Store pages can say co-op while still meaning online co-op. For local play, look for exact phrases such as local co-op, split screen, or shared screen.',
      },
      {
        title: 'Console players ask this first',
        body: 'Couch co-op searches usually come from players deciding whether one purchase and one TV are enough. Right now, that is not the safe assumption.',
      },
      {
        title: 'Early Access wording can move',
        body: 'Subnautica 2 is still being patched. Treat this as a status check, not a forever answer, and re-check store tags before a planned co-op night.',
      },
    ],
    routeChecklistTitle: 'Before planning couch co-op',
    routeChecklist: [
      'Check whether the official page says online co-op or local co-op.',
      'Do not treat crossplay as proof of split screen.',
      'Plan one device per player unless the store page clearly says otherwise.',
      'Test invites before building a long shared save.',
      'Re-check patch notes and store tags after major Early Access updates.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to read the co-op wording',
    routeSteps: [
      {
        title: 'Start with the exact store terms',
        body: 'On Steam, Xbox, or another official platform page, read the feature wording literally. Online co-op means each player joins over a network. It does not promise two people on the same screen.',
      },
      {
        title: 'Separate couch play from crossplay',
        body: 'Cross-platform multiplayer helps friends on different supported platforms. It says nothing by itself about local split screen on one machine.',
      },
      {
        title: 'Use separate devices for now',
        body: 'If your plan is two friends in one room, the practical setup is still separate PCs, Xbox devices, or supported cloud/handheld options, then an online co-op session.',
      },
      {
        title: 'Run a short invite test',
        body: 'Before a long base-building save, spend five minutes checking invites, reconnects, voice chat, and who hosts. It is boring, but it saves the night.',
      },
      {
        title: 'Watch platform pages after big updates',
        body: 'If local co-op is ever added, the safest confirmation should appear on official store pages or an Unknown Worlds post. A countdown blog without that link is not enough.',
      },
    ],
    tableTitle: 'Split-screen search answers',
    tableHeaders: ['Question', 'Current answer'],
    tableRows: [
      [
        'Does Subnautica 2 have split screen?',
        'No official split-screen confirmation was found in the checked Steam, Xbox, and Unknown Worlds sources on June 4, 2026.',
      ],
      [
        'Does Subnautica 2 have couch co-op?',
        'Treat couch co-op as unconfirmed unless your platform store page later says local co-op or shared-screen play clearly.',
      ],
      [
        'Can two players use one copy?',
        'Do not plan around one shared-screen copy. Plan around online co-op with separate devices and accounts unless official wording changes.',
      ],
      [
        'Does crossplay mean local co-op?',
        'No. Crossplay is about different platforms connecting online, not two players sharing one screen.',
      ],
      [
        'What should a group do now?',
        'Use the co-op player-count guide, pick a stable host, and test invites before building a serious shared base.',
      ],
    ],
    visualTitle: 'Local play decision card',
    visualItems: [
      {
        label: 'Split screen',
        value: 'Unconfirmed',
        note: 'No checked official source says shared-screen play.',
      },
      {
        label: 'Co-op',
        value: 'Online',
        note: 'Use official store pages for current player-count wording.',
      },
      {
        label: 'Best setup',
        value: 'Separate devices',
        note: 'Test invites before committing to a long save.',
      },
    ],
    cautionTitle: 'Do not buy for couch co-op on a guess',
    cautionBody:
      'This is exactly the kind of feature people assume from the word co-op. Do not spend money for a one-TV setup unless an official platform page says local co-op, split screen, or shared screen in plain language.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Is Subnautica 2 split screen?',
        body: 'Not from the official sources checked on June 4, 2026. The safe answer is online co-op, not confirmed split screen.',
      },
      {
        title: 'Can I play Subnautica 2 couch co-op on Xbox?',
        body: 'Check the Xbox listing before you plan it. The current page supports multiplayer and online co-op wording, but that should not be read as a confirmed couch co-op mode.',
      },
      {
        title: 'Can two players play on the same PC?',
        body: 'Do not assume that from the current official wording. Plan around separate devices for online co-op unless a future source says local co-op clearly.',
      },
      {
        title: 'Why do guides mention four-player co-op?',
        body: 'Because online co-op and player count are part of the official pitch. That is a different feature from split screen.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2CoopPlayerCount, label: 'Co-op Player Count' },
      { href: Routes.Subnautica2Coop, label: 'Full Co-op Guide' },
      { href: Routes.Subnautica2Crossplay, label: 'Crossplay Guide' },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      {
        href: Routes.Subnautica2MultiplayerNotWorking,
        label: 'Multiplayer Not Working',
      },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 4, 2026 against the official Steam Early Access page, Xbox listing, and Unknown Worlds roadmap. Abyss Guides artwork is original; it is used to explain the online-vs-local co-op distinction without copying official screenshots.',
    cardKicker: 'Co-op mode card',
    cardBody:
      'A quick status page for split-screen, couch co-op, local co-op, online co-op, crossplay, and invite planning.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Co-op status guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'No split-screen confirmation',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 有分屏或本地双人吗？同屏合作说明',
      description:
        'Subnautica 2 分屏、本地双人、同屏合作中文说明：区分在线合作、跨平台多人、Xbox、Steam、玩家人数和抢先体验阶段的注意点。',
    },
    eyebrow: 'Subnautica 2 本地合作检查',
    title: 'Subnautica 2 有分屏或本地双人吗？',
    description:
      '如果你准备把两个手柄放到电视前，这页先看。Subnautica 2 确实有官方在线合作信息，但“分屏”和“本地双人”不能靠猜。',
    quickLabel: '快速结论',
    quickAnswer:
      '截至 2026 年 6 月 3 日，我检查到的官方来源没有确认 Subnautica 2 支持分屏或本地同屏合作。Steam 和 Xbox 页面指向的是在线合作、跨平台多人，而不是一台设备上的共享屏幕模式。如果现在要和朋友一起玩，更稳的方案是一人一台设备，通过在线合作开局。',
    fieldNotesTitle: '为什么这个问题容易误会',
    fieldNotes: [
      {
        title: '在线合作不等于分屏',
        body: '商店页面写 co-op 时，可能只是在线合作。真要本地游玩，页面通常会明确写 local co-op、split screen 或 shared screen。',
      },
      {
        title: '主机玩家最容易搜这个',
        body: '同屏合作搜索通常来自一个很现实的问题：一台电视、一份游戏够不够两个人玩。目前不能这样假设。',
      },
      {
        title: '抢先体验阶段要常复查',
        body: 'Subnautica 2 还在更新。这个页面是当前状态判断，不是永远不变的结论。大更新之后最好再看官方商店标签。',
      },
    ],
    routeChecklistTitle: '计划本地双人前先检查',
    routeChecklist: [
      '看官方页面写的是 online co-op 还是 local co-op。',
      '不要把 crossplay 当成分屏证明。',
      '除非商店页面明确写同屏，否则按一人一台设备来规划。',
      '长期开档前先测试邀请和重连。',
      '大版本更新后重新看官方商店页和开发者公告。',
    ],
    contentsLabel: '目录',
    routeTitle: '怎么看懂合作模式说明',
    routeSteps: [
      {
        title: '先看商店里的准确用词',
        body: 'Steam、Xbox 或其它官方平台页面里的功能词要按字面理解。online co-op 是联网加入，不代表两个人能在同一块屏幕上玩。',
      },
      {
        title: '把同屏和跨平台分开看',
        body: '跨平台多人解决的是不同平台玩家能不能联机。它本身不能证明一台机器上可以分屏。',
      },
      {
        title: '目前按一人一台设备准备',
        body: '如果两个人坐在同一个房间，实用方案仍然是两台 PC、两台 Xbox、云游戏或掌机等支持设备，然后开在线合作。',
      },
      {
        title: '先跑一次短邀请测试',
        body: '正式建长期基地前，花五分钟测试邀请、断线重连、语音和房主。这个步骤不刺激，但能省掉很多麻烦。',
      },
      {
        title: '大更新后盯官方页面',
        body: '如果未来真的加入本地合作，最可靠的确认应该来自官方商店页面或 Unknown Worlds 公告。没有官方链接的倒计时文章不够用。',
      },
    ],
    tableTitle: '分屏相关搜索怎么回答',
    tableHeaders: ['问题', '当前答案'],
    tableRows: [
      [
        'Subnautica 2 有分屏吗？',
        '当前检查到的 Steam、Xbox 和 Unknown Worlds 官方来源没有确认分屏。',
      ],
      [
        'Subnautica 2 有本地双人吗？',
        '先按未确认处理。除非平台页面明确写 local co-op 或 shared screen。',
      ],
      [
        '两个人能不能用一份游戏玩？',
        '不要按一份同屏来规划。更稳妥的是在线合作，各自使用设备和账号。',
      ],
      [
        '跨平台是不是等于本地合作？',
        '不是。跨平台是不同平台联网，本地同屏是另一种功能。',
      ],
      [
        '现在想组队怎么办？',
        '看联机人数页，选稳定房主，先测试邀请，再正式建共享基地。',
      ],
    ],
    visualTitle: '本地游玩判断卡',
    visualItems: [
      {
        label: '分屏',
        value: '未确认',
        note: '当前官方来源没有写共享屏幕。',
      },
      {
        label: '合作',
        value: '在线',
        note: '人数和平台信息以官方商店页为准。',
      },
      {
        label: '推荐方案',
        value: '分设备',
        note: '长期存档前先测试邀请。',
      },
    ],
    cautionTitle: '不要为了同屏合作盲买',
    cautionBody:
      '“合作”这个词很容易让人以为能本地双人。除非官方平台页面清楚写了 local co-op、split screen 或 shared screen，否则不要为了同一台电视的玩法直接下单。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 是分屏游戏吗？',
        body: '按 2026 年 6 月 3 日检查到的官方来源来看，不是已确认分屏。稳妥说法是支持在线合作，而不是确认同屏。',
      },
      {
        title: 'Xbox 上能本地双人吗？',
        body: '计划前请看 Xbox 官方页面。当前页面有多人和在线合作相关信息，但不能直接解读成本地双人。',
      },
      {
        title: '同一台 PC 上能两个人玩吗？',
        body: '不要从当前官方用词里这样推断。除非未来来源明确写 local co-op，否则按两台设备在线合作准备。',
      },
      {
        title: '为什么很多页面说可以四人合作？',
        body: '因为在线合作人数是官方卖点之一。但在线四人合作和本地分屏不是同一个功能。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2CoopPlayerCount, label: '联机人数说明' },
      { href: Routes.Subnautica2Coop, label: '完整合作指南' },
      { href: Routes.Subnautica2Crossplay, label: '跨平台联机说明' },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      {
        href: Routes.Subnautica2MultiplayerNotWorking,
        label: '多人联机故障排查',
      },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 3 日检查 Steam 抢先体验页面、Xbox 官方页面和 Unknown Worlds 路线图。页面配图为 Abyss Guides 原创，用来说明在线合作和本地同屏的区别，没有复制官方截图。',
    cardKicker: '合作模式卡',
    cardBody:
      '快速判断分屏、本地双人、同屏合作、在线合作、跨平台和邀请测试该怎么看。',
    cardTypeLabel: '类型',
    cardTypeValue: '合作模式状态页',
    cardVerifiedLabel: '已检查',
    cardStatusLabel: '状态',
    cardStatusValue: '未确认分屏',
  },
};

function getCopy(locale: Locale): SplitScreenCopy {
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
    pathname: Routes.Subnautica2SplitScreenCoop,
  });
}

export default async function Subnautica2SplitScreenCoopPage({
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
      icon={MonitorPlayIcon}
      locale={locale}
      pathname={Routes.Subnautica2SplitScreenCoop}
      sources={sharedSources}
    />
  );
}
