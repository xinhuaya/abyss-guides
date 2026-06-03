import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { RadioIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type VoiceChatCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-06-03';
const UPDATED_AT = '2026-06-03';

const sharedSources = [
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap',
    label: 'Unknown Worlds Early Access roadmap',
  },
  {
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/',
    label: 'Official Steam Early Access page',
  },
  {
    href: 'https://www.xbox.com/en-US/games/store/subnautica-2/9pjpcb188svg',
    label: 'Official Xbox listing',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-3',
    label: 'Unknown Worlds Hotfix 3',
  },
  {
    href: 'https://www.youtube.com/watch?v=6t2nDHldoSk',
    label: 'Official Subnautica 2 gameplay trailer',
  },
];

const copyByLocale: Record<string, VoiceChatCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Voice Chat Status - Co-op Audio and Roadmap Watch',
      description:
        'A clear Subnautica 2 voice chat guide covering current co-op audio planning, roadmap checks, Discord workarounds, crossplay, Xbox, Steam, and what not to assume yet.',
    },
    eyebrow: 'Subnautica 2 voice chat status',
    title: 'Does Subnautica 2 Have Voice Chat? Use a Backup Plan',
    description:
      'Voice chat sounds like a small feature until the first base run goes wrong. This page keeps the current answer simple: check the official roadmap, plan outside audio today, and do not build a co-op night around an unconfirmed in-game chat toggle.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'As of June 3, 2026, use Discord, Xbox party chat, Steam voice, or another outside voice tool for Subnautica 2 co-op unless your platform page or an Unknown Worlds update clearly says built-in voice chat is live. The Early Access roadmap is worth watching, but a roadmap mention is not the same as a current settings option.',
    fieldNotesTitle: 'Why this matters in co-op',
    fieldNotes: [
      {
        title: 'Exploration needs fast calls',
        body: 'Oxygen checks, creature sightings, beacon names, and base storage decisions are much easier when the group can talk without alt-tabbing mid-dive.',
      },
      {
        title: 'Crossplay complicates audio',
        body: 'Steam friends, Xbox players, and Game Pass players may not share the same party system. Pick the voice tool before the host starts a serious save.',
      },
      {
        title: 'Roadmap wording can be early',
        body: 'Early Access features often appear as planned work before they are in the live settings menu. Treat the roadmap as a watchlist, not a guarantee for tonight.',
      },
    ],
    routeChecklistTitle: 'Before a group dive',
    routeChecklist: [
      'Choose Discord, Xbox party chat, Steam voice, or another outside voice tool.',
      'Test microphones before starting the save.',
      'Agree on short callouts for oxygen, danger, base, and return route.',
      'Keep text chat or pings as a fallback if someone drops audio.',
      'Re-check the roadmap after major Early Access updates.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to handle Subnautica 2 voice chat today',
    routeSteps: [
      {
        title: 'Check official wording first',
        body: 'Look for a real in-game setting, patch note, or platform feature line. A community post saying voice chat is coming is useful context, but it is not proof that the feature is live in your build.',
      },
      {
        title: 'Pick one outside audio tool',
        body: 'For PC-only groups, Discord is usually the cleanest option. Xbox groups can use party chat. Mixed groups should test the tool that every player can access before loading into the world.',
      },
      {
        title: 'Keep the host stable',
        body: 'The host already carries the save and the session. Do not make the host troubleshoot audio while everyone is waiting underwater. Let someone else manage voice invites if possible.',
      },
      {
        title: 'Use short callouts',
        body: 'Long explanations are hard during a dive. Simple calls like return, oxygen, beacon, storage, and danger work better than everyone narrating at once.',
      },
      {
        title: 'Watch the roadmap after patches',
        body: 'If built-in voice chat moves from roadmap item to live feature, it should show up in official patch notes or the settings menu. When that happens, test it in a short save before relying on it for a long co-op route.',
      },
    ],
    tableTitle: 'Voice chat search answers',
    tableHeaders: ['Question', 'Current answer'],
    tableRows: [
      [
        'Is voice chat live in Subnautica 2?',
        'Do not assume it is live unless your build has a clear in-game option or official patch note.',
      ],
      [
        'What should Steam players use?',
        'Discord or Steam voice are the safest outside options to test before a save.',
      ],
      [
        'What should Xbox or Game Pass players use?',
        'Xbox party chat is the first tool to test, especially if the whole group is on Xbox services.',
      ],
      [
        'Does crossplay solve voice chat?',
        'No. Crossplay helps players connect across platforms; it does not automatically give every player the same voice system.',
      ],
      [
        'Should creators say voice chat is confirmed?',
        'Only if they are clear about the difference between roadmap status and live game status.',
      ],
    ],
    visualTitle: 'Co-op audio plan',
    visualItems: [
      {
        label: 'Live setting',
        value: 'Check build',
        note: 'Use the current settings menu and official notes, not old claims.',
      },
      {
        label: 'Best fallback',
        value: 'External voice',
        note: 'Discord, Xbox party chat, or Steam voice should be tested first.',
      },
      {
        label: 'Re-check',
        value: 'After patches',
        note: 'Roadmap items can move during Early Access.',
      },
    ],
    cautionTitle: 'Do not let audio planning sink the session',
    cautionBody:
      'A voice tool sounds boring until the group is trying to find a beacon in the dark. Set it up before the save. If built-in voice chat later ships, treat it as a new feature to test, not something to trust blindly on day one.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Does Subnautica 2 have built-in voice chat?',
        body: 'Use a backup voice tool unless your current build or an official update clearly says built-in voice chat is live. The roadmap is a watchlist, not a settings menu.',
      },
      {
        title: 'What is the best voice chat for Subnautica 2 co-op?',
        body: 'Discord is simple for PC groups. Xbox party chat is better for Xbox-only groups. Mixed Steam, Xbox, and Game Pass groups should test one tool before committing to a long save.',
      },
      {
        title: 'Does Subnautica 2 need proximity chat?',
        body: 'Proximity chat would fit the mood, but do not assume it exists or is planned in a specific form unless Unknown Worlds says so directly.',
      },
      {
        title: 'Will voice chat affect crossplay?',
        body: 'It could, but crossplay and voice chat are separate checks. A group can connect and still need outside audio.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Coop, label: 'Co-op Guide' },
      { href: Routes.Subnautica2Crossplay, label: 'Crossplay Guide' },
      {
        href: Routes.Subnautica2MultiplayerNotWorking,
        label: 'Multiplayer Not Working',
      },
      { href: Routes.Subnautica2DedicatedServer, label: 'Dedicated Servers' },
      { href: Routes.Subnautica2Sprint, label: 'Sprint Status' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 3, 2026 against the Unknown Worlds Early Access roadmap, official Steam and Xbox pages, Hotfix 3, and the official gameplay trailer. Abyss Guides artwork is original fan-site artwork; the video is the official Subnautica embed.',
    cardKicker: 'Co-op signal card',
    cardBody:
      'A current-status page for built-in voice chat searches, outside audio tools, crossplay audio planning, and roadmap wording.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Co-op audio guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'First move',
    cardStatusValue: 'Use outside voice',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 有语音聊天吗？联机语音和路线图说明',
      description:
        'Subnautica 2 语音聊天中文说明：内置语音状态、联机语音替代方案、Discord、Xbox 派对语音、Steam 语音、跨平台联机和路线图注意事项。',
    },
    eyebrow: 'Subnautica 2 语音聊天状态',
    title: 'Subnautica 2 有语音聊天吗？先准备备用语音',
    description:
      '语音聊天看起来只是小功能，但联机下海时很关键。这里先把答案说清楚：看官方路线图，当前组队先准备外部语音，不要把整晚联机建立在未确认的游戏内语音开关上。',
    quickLabel: '快速结论',
    quickAnswer:
      '截至 2026 年 6 月 3 日，除非你的游戏版本、平台页面或 Unknown Worlds 更新明确写出内置语音聊天已经上线，否则 Subnautica 2 联机建议先用 Discord、Xbox 派对语音、Steam 语音或其他外部语音工具。路线图值得关注，但路线图提到的功能不等于当前设置里已经可用。',
    fieldNotesTitle: '为什么联机语音很重要',
    fieldNotes: [
      {
        title: '探索时需要快速沟通',
        body: '氧气、怪物、信标、仓库、回程路线都需要快速说清楚。每个人都在水下时，再切出去调语音会很麻烦。',
      },
      {
        title: '跨平台会让语音更复杂',
        body: 'Steam、Xbox、Game Pass 玩家不一定共用同一套派对语音。开长期存档前，先选一个所有人都能用的工具。',
      },
      {
        title: '路线图不是当前设置菜单',
        body: '抢先体验里的功能可能先出现在计划里，再进入正式版本。把路线图当成观察清单，不要当成今晚就能用的承诺。',
      },
    ],
    routeChecklistTitle: '联机下海前先做',
    routeChecklist: [
      '先选 Discord、Xbox 派对语音、Steam 语音或其他外部语音。',
      '开存档前测试麦克风。',
      '提前约定氧气、危险、基地、返回路线等简短口令。',
      '有人掉语音时，保留文字或标记作为备用。',
      '大版本更新后重新检查官方路线图和补丁说明。',
    ],
    contentsLabel: '目录',
    routeTitle: '现在怎么处理 Subnautica 2 联机语音',
    routeSteps: [
      {
        title: '先看官方说法',
        body: '真正可靠的信息应该来自游戏内设置、补丁说明或官方平台页面。社区说某个功能会来，可以作为参考，但不能证明它已经在你当前版本里上线。',
      },
      {
        title: '选一个外部语音工具',
        body: '纯 PC 队伍通常用 Discord 最省事。Xbox 队伍可以先试派对语音。混合 Steam、Xbox、Game Pass 的队伍，先确认每个人都能加入同一个语音工具。',
      },
      {
        title: '别把压力都放在房主身上',
        body: '房主已经负责存档和会话稳定。不要让房主一边等人下海一边修语音。最好让另一个队友负责发语音邀请。',
      },
      {
        title: '用短口令',
        body: '水下行动时，长句子反而难听清。返回、氧气、信标、仓库、危险这类短词更适合多人探索。',
      },
      {
        title: '补丁后再复查',
        body: '如果内置语音从路线图进入正式功能，应该能在官方补丁或设置里看到。上线后也先用短存档测试，再决定是否替代外部语音。',
      },
    ],
    tableTitle: '语音聊天搜索怎么回答',
    tableHeaders: ['问题', '当前答案'],
    tableRows: [
      [
        'Subnautica 2 内置语音上线了吗？',
        '不要默认已经上线。以当前版本的设置菜单和官方补丁说明为准。',
      ],
      [
        'Steam 玩家用什么语音？',
        'Discord 或 Steam 语音都可以先测试，选队伍最稳定的那个。',
      ],
      [
        'Xbox 或 Game Pass 玩家用什么？',
        '如果全队在 Xbox 服务里，先试 Xbox 派对语音。',
      ],
      [
        '跨平台联机会自动解决语音吗？',
        '不会。跨平台解决的是连接问题，语音系统要单独确认。',
      ],
      [
        '创作者能不能说语音已确认？',
        '可以说路线图值得关注，但要区分计划状态和当前可用状态。',
      ],
    ],
    visualTitle: '联机语音计划',
    visualItems: [
      {
        label: '当前设置',
        value: '看版本',
        note: '以游戏内设置和官方补丁为准。',
      },
      {
        label: '备用方案',
        value: '外部语音',
        note: 'Discord、Xbox 派对或 Steam 语音先试。',
      },
      {
        label: '复查时间',
        value: '补丁后',
        note: '抢先体验功能会随更新变化。',
      },
    ],
    cautionTitle: '别让语音问题毁掉联机',
    cautionBody:
      '语音设置看起来无聊，但真正迷路或缺氧时就很关键。开长期存档前先把语音跑通。以后如果内置语音上线，也先测试一局，不要上线第一天就完全依赖。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 有内置语音聊天吗？',
        body: '除非当前版本或官方更新明确写出已经上线，否则先用外部语音。路线图是观察清单，不是设置菜单。',
      },
      {
        title: 'Subnautica 2 联机最好用什么语音？',
        body: 'PC 队伍用 Discord 通常最方便。Xbox 队伍先用派对语音。混合平台队伍要提前测试。',
      },
      {
        title: 'Subnautica 2 会有距离语音吗？',
        body: '距离语音很适合这种游戏氛围，但如果官方没有明确说具体形式，就不要当成已经确定。',
      },
      {
        title: '语音聊天会影响跨平台吗？',
        body: '跨平台和语音是两个问题。队伍可以成功连接，但仍然需要外部语音。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Coop, label: '联机指南' },
      { href: Routes.Subnautica2Crossplay, label: '跨平台联机' },
      {
        href: Routes.Subnautica2MultiplayerNotWorking,
        label: '多人联机故障排查',
      },
      { href: Routes.Subnautica2DedicatedServer, label: '专用服务器状态' },
      { href: Routes.Subnautica2Sprint, label: '奔跑功能状态' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 3 日检查 Unknown Worlds 抢先体验路线图、Steam 官方页、Xbox 官方页、Hotfix 3 和官方玩法预告。页面插图为 Abyss Guides 原创粉丝站配图；视频为官方 Subnautica 嵌入视频。',
    cardKicker: '联机信号卡',
    cardBody:
      '用于回答内置语音、外部语音工具、跨平台语音安排和路线图措辞的当前状态页。',
    cardTypeLabel: '类型',
    cardTypeValue: '联机语音指南',
    cardVerifiedLabel: '已检查',
    cardStatusLabel: '第一步',
    cardStatusValue: '使用外部语音',
  },
};

function getCopy(locale: Locale): VoiceChatCopy {
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
    pathname: Routes.Subnautica2VoiceChat,
  });
}

export default async function Subnautica2VoiceChatPage({
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
      pathname={Routes.Subnautica2VoiceChat}
      sources={sharedSources}
    />
  );
}
