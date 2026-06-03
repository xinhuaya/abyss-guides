import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { MonitorPlayIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type GamePassInstallCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-06-03';
const UPDATED_AT = '2026-06-03';

const sharedSources = [
  {
    href: 'https://www.xbox.com/en-US/games/store/subnautica-2/9pjpcb188svg',
    label: 'Official Xbox store listing',
  },
  {
    href: 'https://support.xbox.com/en-US/xbox-live-status',
    label: 'Official Xbox status page',
  },
  {
    href: 'https://support.microsoft.com/en-us/windows/repair-apps-and-programs-in-windows-e90eefe4-d0a2-7c1b-dd59-949a9030f317',
    label: 'Microsoft repair apps in Windows',
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

const copyByLocale: Record<string, GamePassInstallCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Game Pass Install Error - Xbox App, PC Game Pass, Storage, and Services',
      description:
        'A practical Subnautica 2 Game Pass install error guide for Xbox app, PC Game Pass, stuck downloads, Gaming Services, storage, account checks, Xbox status, and launch handoff.',
    },
    eyebrow: 'Subnautica 2 Game Pass install',
    title:
      'Subnautica 2 Game Pass Install Error: Check the App Before the Game',
    description:
      'If the Xbox app cannot install or hand off Subnautica 2 cleanly, the problem may sit outside the game itself. Start with account, service, storage, and app repair checks before treating it like a gameplay bug.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Confirm the Xbox listing shows access for your account and device, check Xbox status, restart the Xbox app and Microsoft Store, then make sure the install drive has space and Windows can repair the app if needed. If the download finishes but the game will not open, move to the not-launching page. If the game opens but crashes, use the startup crash or black screen pages instead.',
    fieldNotesTitle: 'Why Game Pass errors feel messy',
    fieldNotes: [
      {
        title: 'The store path has more moving parts',
        body: 'Xbox app, Microsoft Store, Gaming Services, account status, storage permissions, and Windows repair behavior can all affect the same install button.',
      },
      {
        title: 'The error may not be Subnautica-specific',
        body: 'If other Game Pass games also fail, fix the Xbox app path first. Do not spend the whole evening tuning Subnautica 2 settings for a store problem.',
      },
      {
        title: 'A finished download is not a finished handoff',
        body: 'Some players can download but still fail at launch. That is where you switch from install troubleshooting to launch troubleshooting.',
      },
    ],
    routeChecklistTitle: 'Install-error checklist',
    routeChecklist: [
      'Open the official Xbox listing and confirm access for your account.',
      'Check Xbox status before changing Windows settings.',
      'Restart Xbox app, Microsoft Store, and the PC.',
      'Confirm the install drive has enough free space.',
      'Repair or reset the Xbox app through Windows settings if the app itself is stuck.',
      'Try a different install drive only after account and service checks.',
      'If install completes but Play fails, move to the launch checklist.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to isolate a Game Pass install problem',
    routeSteps: [
      {
        title: 'Confirm access on the Xbox listing',
        body: 'Start on the official Xbox page. Make sure the page shows the right edition, device, subscription wording, and account state for your region.',
      },
      {
        title: 'Check Xbox service status',
        body: 'If downloads, purchases, or account services are having problems, local fixes may not stick. The official status page is faster than guessing.',
      },
      {
        title: 'Restart the app path',
        body: 'Close Xbox app and Microsoft Store fully, then restart the PC. It sounds basic because it is, but it clears a surprising number of stuck queue and license handoff problems.',
      },
      {
        title: 'Check storage and install location',
        body: 'A nearly full drive, removable drive, or protected folder can make a Game Pass install behave strangely. Use a normal internal drive with comfortable free space for the first successful install.',
      },
      {
        title: 'Repair the Xbox app when the app is the symptom',
        body: 'If the Xbox app queue is frozen, buttons do nothing, or the app keeps failing before the game files are complete, use Windows app repair or reset tools before reinstalling the whole game.',
      },
      {
        title: 'Switch pages when the symptom changes',
        body: 'Once the install completes, a failed Play button is a launch problem. A black game window is a black-screen problem. Keep the symptom narrow so the fix stays narrow.',
      },
    ],
    tableTitle: 'Game Pass install symptoms',
    tableHeaders: ['Symptom', 'Best next check'],
    tableRows: [
      [
        'Install button missing',
        'Check account, region, subscription, and Xbox listing wording.',
      ],
      [
        'Download stuck at 0%',
        'Check Xbox status, restart Xbox app and Microsoft Store, then reboot.',
      ],
      [
        'Install stops near the end',
        'Check drive space, install location, and app repair options.',
      ],
      [
        'Xbox app button does nothing',
        'Repair or reset the Xbox app through Windows settings.',
      ],
      [
        'Game installed but will not launch',
        'Move to the Subnautica 2 not-launching checklist.',
      ],
      [
        'Other Game Pass games also fail',
        'Treat it as an Xbox app or Windows service issue first.',
      ],
    ],
    visualTitle: 'Install status card',
    visualItems: [
      {
        label: 'First check',
        value: 'Account',
        note: 'Confirm access on the Xbox listing.',
      },
      {
        label: 'Service check',
        value: 'Xbox',
        note: 'Look for store or download issues.',
      },
      {
        label: 'Local check',
        value: 'Storage',
        note: 'Use a clean internal install drive.',
      },
    ],
    cautionTitle: 'Do not blame the save before the game installs',
    cautionBody:
      'Install errors happen before Subnautica 2 has a chance to load a save. Keep save fixes, graphics fixes, and co-op fixes for later. First make the Xbox app finish the install and hand off the Play button cleanly.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Why does Subnautica 2 fail to install from Game Pass?',
        body: 'It can be account access, Xbox service status, app queue state, Microsoft Store handoff, storage location, or Windows app health. Start outside the game first.',
      },
      {
        title: 'Should I reinstall Subnautica 2 first?',
        body: 'Not usually. Check Xbox status, restart the Xbox app and Microsoft Store, confirm storage, and repair the app path before repeating a large download.',
      },
      {
        title: 'What if the install finishes but Play does nothing?',
        body: 'That is no longer just an install error. Move to the Subnautica 2 not-launching checklist.',
      },
      {
        title: 'Can Xbox service status affect PC Game Pass installs?',
        body: 'Yes. Account, store, and subscription services can affect PC Game Pass behavior, so check the official status page before changing too much locally.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass Guide' },
      {
        href: Routes.Subnautica2NotLaunching,
        label: 'Not Launching Checklist',
      },
      {
        href: Routes.Subnautica2StartupCrashAfterHotfix3,
        label: 'Startup Crash After Hotfix 3',
      },
      {
        href: Routes.Subnautica2BlackScreenFreezing,
        label: 'Black Screen and Freezing',
      },
      {
        href: Routes.Subnautica2SystemRequirements,
        label: 'System Requirements',
      },
      { href: Routes.Subnautica2Price, label: 'Price Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 3, 2026 against the official Xbox listing, Xbox status page, Microsoft Windows app repair guidance, the official Steam page, Unknown Worlds roadmap, and the official gameplay trailer. Page art is original Abyss Guides artwork.',
    cardKicker: 'Install field card',
    cardBody:
      'A PC Game Pass and Xbox app troubleshooting page for install access, stuck downloads, app repair, storage, account status, and launch handoff.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Install fix',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'First check',
    cardStatusValue: 'Xbox listing',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Game Pass 安装错误 - Xbox app、PC Game Pass、存储和服务检查',
      description:
        'Subnautica 2 Game Pass 安装错误中文排查：Xbox app、PC Game Pass、下载卡住、Gaming Services、存储空间、账号、Xbox 状态和启动交接。',
    },
    eyebrow: 'Subnautica 2 Game Pass 安装',
    title: 'Subnautica 2 Game Pass 安装错误：先查 Xbox app，再查游戏',
    description:
      '如果 Xbox app 不能正常安装或启动 Subnautica 2，问题可能不在游戏本身。先查账号、服务、存储和应用修复，再把它当成游戏 bug。',
    quickLabel: '快速结论',
    quickAnswer:
      '先确认 Xbox 官方页面显示你的账号和设备可用，再检查 Xbox 状态。然后重启 Xbox app、Microsoft Store 和电脑，确认安装盘有足够空间。Xbox app 自己卡住时，用 Windows 的应用修复/重置功能。下载完成但点 Play 没反应，转到“打不开”页面；能打开但崩溃或黑屏，再看启动崩溃/黑屏页。',
    fieldNotesTitle: '为什么 Game Pass 安装问题很乱',
    fieldNotes: [
      {
        title: '商店安装路径有很多环节',
        body: 'Xbox app、Microsoft Store、Gaming Services、账号状态、存储权限和 Windows 应用修复，都可能影响同一个安装按钮。',
      },
      {
        title: '错误不一定是 Subnautica 2 独有',
        body: '如果其他 Game Pass 游戏也安装失败，先修 Xbox app 这条路径，不要一直改 Subnautica 2 的图形设置。',
      },
      {
        title: '下载完成不代表启动交接完成',
        body: '有些情况是能下载，但点 Play 失败。那时要从安装排查切换到启动排查。',
      },
    ],
    routeChecklistTitle: '安装错误检查清单',
    routeChecklist: [
      '打开 Xbox 官方页面，确认你的账号有访问权限。',
      '先看 Xbox 状态，再改 Windows 设置。',
      '重启 Xbox app、Microsoft Store 和电脑。',
      '确认安装盘有足够可用空间。',
      'Xbox app 自己卡住时，用 Windows 设置修复或重置应用。',
      '账号和服务确认后，再尝试换安装盘。',
      '安装完成但 Play 失败时，转到启动排查。',
    ],
    contentsLabel: '目录',
    routeTitle: '怎么定位 Game Pass 安装问题',
    routeSteps: [
      {
        title: '先确认 Xbox 页面访问权限',
        body: '从 Xbox 官方页面开始，看清楚版本、设备、订阅文字和账号所在地区是否匹配。',
      },
      {
        title: '检查 Xbox 服务状态',
        body: '如果下载、购买、账号服务正在出问题，本地修复可能不会稳定。官方状态页比猜测更快。',
      },
      {
        title: '重启应用路径',
        body: '完全关闭 Xbox app 和 Microsoft Store，然后重启电脑。这个步骤很基础，但能清掉不少下载队列和授权交接问题。',
      },
      {
        title: '检查存储和安装位置',
        body: '空间太满、移动硬盘、受保护目录，都可能让 Game Pass 安装表现奇怪。第一次成功安装建议用空间充足的普通内置硬盘。',
      },
      {
        title: '应用本身异常时修复 Xbox app',
        body: '如果 Xbox app 队列冻结、按钮没反应，或还没下载完就失败，先用 Windows 的应用修复或重置功能，而不是反复下载游戏。',
      },
      {
        title: '症状变化后要换页面',
        body: '安装完成后点 Play 失败是启动问题。窗口能打开但黑屏是黑屏问题。症状越清楚，排查越快。',
      },
    ],
    tableTitle: 'Game Pass 安装症状',
    tableHeaders: ['症状', '下一步检查'],
    tableRows: [
      ['找不到安装按钮', '检查账号、地区、订阅和 Xbox 页面文字。'],
      [
        '下载卡在 0%',
        '检查 Xbox 状态，重启 Xbox app 和 Microsoft Store，再重启电脑。',
      ],
      ['快下载完时失败', '检查空间、安装位置和应用修复选项。'],
      ['Xbox app 按钮没反应', '在 Windows 设置里修复或重置 Xbox app。'],
      ['安装完成但打不开', '转到 Subnautica 2 打不开排查。'],
      ['其他 Game Pass 游戏也失败', '先按 Xbox app 或 Windows 服务问题处理。'],
    ],
    visualTitle: '安装状态卡片',
    visualItems: [
      { label: '第一项', value: '账号', note: '先在 Xbox 页面确认访问权限。' },
      { label: '服务检查', value: 'Xbox', note: '看商店和下载服务是否异常。' },
      { label: '本机检查', value: '存储', note: '优先用干净的内置安装盘。' },
    ],
    cautionTitle: '游戏还没装好前，不要先怪存档',
    cautionBody:
      '安装错误发生在 Subnautica 2 读取存档之前。存档修复、图形修复、联机修复都先放后面。第一步是让 Xbox app 完成安装，并把 Play 按钮正常交给游戏。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '为什么 Subnautica 2 Game Pass 安装失败？',
        body: '可能是账号权限、Xbox 服务状态、应用队列、Microsoft Store 交接、存储位置或 Windows 应用状态。先查游戏外部。',
      },
      {
        title: '我应该先重装 Subnautica 2 吗？',
        body: '通常不要。先查 Xbox 状态，重启 Xbox app 和 Microsoft Store，确认空间，并修复应用路径，再考虑重新下载。',
      },
      {
        title: '安装完成但点 Play 没反应怎么办？',
        body: '那已经不只是安装错误了，转到 Subnautica 2 打不开排查。',
      },
      {
        title: 'Xbox 服务状态会影响 PC Game Pass 吗？',
        body: '会。账号、商店和订阅服务都可能影响 PC Game Pass 行为，所以先看官方状态页。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass 指南' },
      { href: Routes.Subnautica2NotLaunching, label: '打不开排查' },
      {
        href: Routes.Subnautica2StartupCrashAfterHotfix3,
        label: 'Hotfix 3 启动崩溃',
      },
      { href: Routes.Subnautica2BlackScreenFreezing, label: '黑屏和卡死' },
      { href: Routes.Subnautica2SystemRequirements, label: '配置要求' },
      { href: Routes.Subnautica2Price, label: '价格指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 3 日核对 Xbox 官方页面、Xbox 状态页、Microsoft Windows 应用修复说明、Steam 官方页、Unknown Worlds 路线图和官方实机预告。页面图片为 Abyss Guides 原创图。',
    cardKicker: '安装排查',
    cardBody:
      '围绕 PC Game Pass 和 Xbox app 的访问权限、下载卡住、应用修复、存储、账号状态和启动交接写的排查页。',
    cardTypeLabel: '类型',
    cardTypeValue: '安装修复',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '第一项',
    cardStatusValue: 'Xbox 页面',
  },
};

function getCopy(locale: Locale): GamePassInstallCopy {
  return copyByLocale[locale] ?? copyByLocale.en;
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
    pathname: Routes.Subnautica2GamePassInstallError,
  });
}

export default async function Subnautica2GamePassInstallErrorPage({
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
      icon={MonitorPlayIcon}
      locale={locale}
      pathname={Routes.Subnautica2GamePassInstallError}
      sources={sharedSources}
    />
  );
}
