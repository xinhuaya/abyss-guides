import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { CloudIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type XboxCloudCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-06-04';
const UPDATED_AT = '2026-06-04';

const sharedSources = [
  {
    href: 'https://www.xbox.com/en-US/cloud-gaming',
    label: 'Official Xbox Cloud Gaming page',
  },
  {
    href: 'https://www.xbox.com/en-US/games/store/subnautica-2/9pjpcb188svg',
    label: 'Official Xbox store listing',
  },
  {
    href: 'https://support.xbox.com/en-US/xbox-live-status',
    label: 'Xbox status page',
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
    href: 'https://www.youtube.com/watch?v=6t2nDHldoSk',
    label: 'Official Subnautica 2 gameplay trailer',
  },
];

const copyByLocale: Record<string, XboxCloudCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Xbox Cloud Gaming Guide - Game Pass Cloud Checks',
      description:
        'A source-backed Subnautica 2 Xbox Cloud Gaming guide covering cloud availability, Game Pass, supported devices, latency, controller input, saves, co-op, and status checks.',
    },
    eyebrow: 'Subnautica 2 Xbox Cloud Gaming',
    title: 'Subnautica 2 on Xbox Cloud Gaming: Check the Store Before You Plan',
    description:
      'Cloud play can be perfect for a quick test dive, but it changes the questions. Availability wording, controller input, latency, saves, and co-op stability all matter before you invite friends.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'As of June 4, 2026, use the official Xbox store listing to confirm whether Subnautica 2 is cloud playable for your account and region. The Xbox Cloud Gaming page explains supported devices and browser-style play, while the Xbox status page is the first place to check if cloud launch or account services fail.',
    fieldNotesTitle: 'Why cloud play is different',
    fieldNotes: [
      {
        title: 'You skip installation, not platform rules',
        body: 'Cloud play can avoid a local download, but it still depends on Xbox account state, subscription wording, supported devices, and service health.',
      },
      {
        title: 'Latency changes the feel',
        body: 'Subnautica 2 is slower than a shooter, but scanning, piloting, and co-op communication still feel worse on a weak connection.',
      },
      {
        title: 'Cloud status can fail before the game does',
        body: 'If a stream will not launch, the problem may be Xbox Cloud Gaming, account status, browser support, or region availability rather than Subnautica 2 itself.',
      },
    ],
    routeChecklistTitle: 'Before cloud play',
    routeChecklist: [
      'Open the official Xbox store listing and confirm cloud wording for your account.',
      'Check the Xbox Cloud Gaming page for supported device and browser expectations.',
      'Use a controller path that your device and cloud session both support.',
      'Check Xbox status if cloud launch, sign-in, or Game Pass entitlement fails.',
      'Test solo movement before starting a co-op save through cloud play.',
      'Do not judge PC performance from a cloud stream.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to evaluate Subnautica 2 cloud play',
    routeSteps: [
      {
        title: 'Confirm cloud availability on Xbox first',
        body: 'The store listing is the source to check for current platform, Game Pass, and cloud wording. Do not rely on a copied screenshot if the store wording has changed.',
      },
      {
        title: 'Check the device path',
        body: 'Xbox Cloud Gaming supports play across supported devices and browsers. Before blaming the game, make sure the device, browser, controller, and account are all supported for your session.',
      },
      {
        title: 'Test input before co-op',
        body: 'Cloud play adds latency. Swim, scan, pilot, open storage, and use quick slots in a solo test before hosting or joining a serious co-op save.',
      },
      {
        title: 'Separate cloud problems from game problems',
        body: 'If the stream never opens, check Xbox status and account entitlement first. If the stream opens but co-op fails, move to invite, Friend Code, and online-services checks.',
      },
      {
        title: 'Use cloud as a trial path, not a benchmark',
        body: 'A cloud stream is not a useful test of your PC specs. Use it to decide whether the game flow interests you, then use local performance guides for a real install.',
      },
    ],
    tableTitle: 'Cloud gaming questions',
    tableHeaders: ['Question', 'Practical answer'],
    tableRows: [
      [
        'Is Subnautica 2 on Xbox Cloud Gaming?',
        'Check the official Xbox store listing for current cloud wording in your region and account.',
      ],
      [
        'Do I need Game Pass?',
        'Use Xbox pages for current subscription wording. Do not rely on old guide text.',
      ],
      [
        'Can I play on browser?',
        'Xbox Cloud Gaming supports browser-style play on supported devices; confirm your setup on Xbox pages.',
      ],
      [
        'Can I co-op through cloud?',
        'Test solo first, then check invites, Friend Code, Xbox status, and online services if joining fails.',
      ],
      [
        'Will cloud show PC performance?',
        'No. Cloud tells you stream quality and input feel, not your local GPU or CPU performance.',
      ],
    ],
    visualTitle: 'Cloud play card',
    visualItems: [
      {
        label: 'Availability',
        value: 'Xbox store',
        note: 'Cloud wording can vary by account and region.',
      },
      {
        label: 'Input',
        value: 'Controller',
        note: 'Test control feel before co-op.',
      },
      {
        label: 'Status',
        value: 'Xbox',
        note: 'Cloud launch issues start with Xbox status.',
      },
    ],
    cautionTitle: 'Do not confuse stream lag with game performance',
    cautionBody:
      'If a cloud session feels soft or delayed, that may be network latency. It does not prove your local install will run badly, and it does not prove the game is broken.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Is Subnautica 2 playable on Xbox Cloud Gaming?',
        body: 'Check the official Xbox store listing for the live answer. Cloud wording can depend on account, region, subscription, and current store presentation.',
      },
      {
        title: 'What device should I use for cloud play?',
        body: 'Use the official Xbox Cloud Gaming page to confirm supported devices and browser paths, then test controller input before a long save.',
      },
      {
        title: 'Does cloud play support co-op?',
        body: 'Cloud launch and co-op join are separate checks. If the stream opens but friends cannot join, use the invite, Friend Code, and online-services guides.',
      },
      {
        title: 'Should I use cloud before buying or installing?',
        body: 'It can help you test the mood and controls quickly. For performance, use local system requirements and settings pages instead.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass Guide' },
      {
        href: Routes.Subnautica2OnlineServicesConnectionFailed,
        label: 'Online Services Connection Failed',
      },
      { href: Routes.Subnautica2ServerStatus, label: 'Server Status' },
      { href: Routes.Subnautica2FriendCode, label: 'Friend Code Guide' },
      {
        href: Routes.Subnautica2SystemRequirements,
        label: 'System Requirements',
      },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 4, 2026 against the official Xbox Cloud Gaming page, Xbox store listing, Xbox status page, Steam Early Access page, Unknown Worlds roadmap, and the official gameplay trailer. Abyss Guides artwork is original fan-site artwork; the video is the official Subnautica embed.',
    cardKicker: 'Xbox Cloud card',
    cardBody:
      'A platform-status page for cloud availability, Game Pass wording, supported devices, latency, controller input, saves, and co-op planning.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Cloud play guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'First check',
    cardStatusValue: 'Xbox listing',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Xbox Cloud Gaming 指南：云游戏和 Game Pass',
      description:
        'Subnautica 2 Xbox Cloud Gaming 中文指南：云游戏可用性、Game Pass、设备、延迟、手柄、存档、联机和 Xbox 状态检查。',
    },
    eyebrow: 'Subnautica 2 Xbox 云游戏',
    title: 'Subnautica 2 能不能用 Xbox Cloud Gaming？先看商店页',
    description:
      '云游戏很适合快速试玩，但问题也变了。可用性、手柄输入、延迟、存档和联机稳定性，都要在邀请朋友前确认。',
    quickLabel: '快速结论',
    quickAnswer:
      '截至 2026 年 6 月 4 日，是否能云玩要以 Xbox 官方商店页为准，并结合你的账号和地区查看。Xbox Cloud Gaming 官方页用于确认支持设备和浏览器玩法；云启动或账号服务失败时，先看 Xbox 状态页。',
    fieldNotesTitle: '云游戏为什么不一样',
    fieldNotes: [
      {
        title: '省掉下载，不省掉平台规则',
        body: '云游戏可以不用本地安装，但仍然依赖 Xbox 账号、订阅说明、支持设备和服务状态。',
      },
      {
        title: '延迟会改变手感',
        body: 'Subnautica 2 不是高速射击游戏，但扫描、驾驶和联机沟通在弱网络下仍然会变差。',
      },
      {
        title: '云服务可能先于游戏失败',
        body: '如果串流打不开，原因可能是 Xbox Cloud Gaming、账号、浏览器支持或地区可用性，而不是游戏本体。',
      },
    ],
    routeChecklistTitle: '云玩前先确认',
    routeChecklist: [
      '打开 Xbox 官方商店页，确认当前账号是否显示云游戏相关说明。',
      '查看 Xbox Cloud Gaming 官方页，确认设备和浏览器路径。',
      '使用设备和云会话都支持的手柄或输入方式。',
      '云启动、登录或权益异常时，先看 Xbox 状态页。',
      '联机前先单人测试移动、扫描、驾驶和快捷栏。',
      '不要用云串流判断本地 PC 性能。',
    ],
    contentsLabel: '目录',
    routeTitle: '怎么判断 Subnautica 2 云游戏体验',
    routeSteps: [
      {
        title: '先确认 Xbox 当前可用性',
        body: 'Xbox 商店页是确认平台、Game Pass 和 Cloud 说明的来源。不要只看旧截图，因为商店文案可能变化。',
      },
      {
        title: '检查设备路径',
        body: 'Xbox Cloud Gaming 支持部分设备和浏览器路径。怪游戏前，先确认设备、浏览器、手柄和账号都适合当前会话。',
      },
      {
        title: '联机前先测试输入',
        body: '云游戏会增加延迟。先单人测试游泳、扫描、驾驶、开箱和快捷栏，再开严肃联机存档。',
      },
      {
        title: '把云问题和游戏问题分开',
        body: '如果串流都打不开，先查 Xbox 状态和账号权益。如果串流能开但联机失败，再去查邀请、好友代码和在线服务。',
      },
      {
        title: '云游戏适合试玩，不适合跑分',
        body: '云串流不能判断你的本地电脑性能。它适合判断游戏节奏是否合胃口，本地性能要看配置和设置指南。',
      },
    ],
    tableTitle: '云游戏常见问题',
    tableHeaders: ['问题', '实用答案'],
    tableRows: [
      [
        'Subnautica 2 能云玩吗？',
        '看 Xbox 官方商店页中你账号和地区的当前说明。',
      ],
      ['需要 Game Pass 吗？', '以 Xbox 页面当前订阅文案为准，不要依赖旧攻略。'],
      [
        '浏览器能玩吗？',
        'Xbox Cloud Gaming 支持部分设备和浏览器路径，按官方页确认。',
      ],
      [
        '云游戏能联机吗？',
        '先测试单人，再查邀请、好友代码、Xbox 状态和在线服务。',
      ],
      [
        '云游戏能代表 PC 性能吗？',
        '不能。它反映的是串流质量和输入延迟，不是本地显卡性能。',
      ],
    ],
    visualTitle: '云游戏检查卡',
    visualItems: [
      {
        label: '可用性',
        value: 'Xbox 商店',
        note: 'Cloud 说明可能和账号、地区有关。',
      },
      {
        label: '输入',
        value: '手柄',
        note: '联机前先测试操作手感。',
      },
      {
        label: '状态',
        value: 'Xbox',
        note: '云启动问题先看 Xbox 状态。',
      },
    ],
    cautionTitle: '不要把串流延迟当成本地性能问题',
    cautionBody:
      '云会话如果感觉迟钝，可能只是网络延迟。它不能证明本地安装也会卡，也不能证明游戏本身坏了。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 能在 Xbox Cloud Gaming 上玩吗？',
        body: '以 Xbox 官方商店页为准。Cloud 说明可能受账号、地区、订阅和当前商店展示影响。',
      },
      {
        title: '云游戏应该用什么设备？',
        body: '先看 Xbox Cloud Gaming 官方页确认支持设备和浏览器路径，再测试手柄输入。',
      },
      {
        title: '云游戏支持联机吗？',
        body: '云启动和联机加入是两个检查。串流能打开但朋友进不来时，看邀请、好友代码和在线服务指南。',
      },
      {
        title: '买之前或下载前适合先云玩吗？',
        body: '适合快速判断氛围和操作是否喜欢。性能判断还是要看本地配置和设置页面。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass 指南' },
      {
        href: Routes.Subnautica2OnlineServicesConnectionFailed,
        label: '在线服务连接失败',
      },
      { href: Routes.Subnautica2ServerStatus, label: '服务器状态' },
      { href: Routes.Subnautica2FriendCode, label: '好友代码指南' },
      {
        href: Routes.Subnautica2SystemRequirements,
        label: '配置要求',
      },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 4 日核对 Xbox Cloud Gaming 官方页、Xbox 商店页、Xbox 状态页、Steam 抢先体验页、Unknown Worlds 路线图和官方玩法预告。页面插图为 Abyss Guides 原创粉丝站配图；视频为官方 Subnautica 嵌入视频。',
    cardKicker: 'Xbox 云游戏卡',
    cardBody:
      '用于说明云游戏可用性、Game Pass 文案、支持设备、延迟、手柄输入、存档和联机规划。',
    cardTypeLabel: '类型',
    cardTypeValue: '云游戏指南',
    cardVerifiedLabel: '已检查',
    cardStatusLabel: '第一步',
    cardStatusValue: '看 Xbox 商店',
  },
};

function getCopy(locale: Locale): XboxCloudCopy {
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
    pathname: Routes.Subnautica2XboxCloudGaming,
  });
}

export default async function Subnautica2XboxCloudGamingPage({
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
      icon={CloudIcon}
      locale={locale}
      pathname={Routes.Subnautica2XboxCloudGaming}
      sources={sharedSources}
    />
  );
}
