import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { AlertTriangleIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type StartupCrashCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-06-02';
const UPDATED_AT = '2026-06-02';

const sharedSources = [
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-3',
    label: 'Unknown Worlds Hotfix 3',
  },
  {
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/?l=english',
    label: 'Official Steam page',
  },
  {
    href: 'https://www.xbox.com/en-US/games/store/subnautica-2/9pjpcb188svg',
    label: 'Official Xbox store listing',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap',
    label: 'Unknown Worlds Early Access roadmap',
  },
];

const copyByLocale: Record<string, StartupCrashCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Startup Crash After Hotfix 3 - Launch and DLSS Checklist',
      description:
        'A practical Subnautica 2 startup crash checklist after Hotfix 3, covering patched launch crashes, DLSS crashes, Frame Generation, graphics settings, file checks, and co-op retesting.',
    },
    eyebrow: 'Subnautica 2 crash checklist',
    title: 'Startup Crash After Hotfix 3',
    description:
      'If Subnautica 2 still crashes when you start the game, treat Hotfix 3 as the first line in the notes, not the final answer. The patch fixes a rare start crash and several DLSS problems, but your local build, driver, and settings still matter.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Install Hotfix 3 first. Unknown Worlds says the patch fixes a rare crash when starting games, DLSS crashes, DLSS settings not saving correctly, Frame Generation being unavailable in some versions, and upgrades DLSS to 4.5. If the game still crashes on launch, restart the client, confirm the patched build, try one clean launch with DLSS and Frame Generation off, verify files, update your GPU driver, and then test again before blaming a save or multiplayer session.',
    fieldNotesTitle: 'What Hotfix 3 actually tells us',
    fieldNotes: [
      {
        title: 'There was a real start-crash fix',
        body: 'The useful detail is narrow: the official note says Hotfix 3 fixes a rare crash when starting games. That makes the patch check step one.',
      },
      {
        title: 'DLSS belongs in the launch checklist',
        body: 'The same patch also names DLSS crashes, saved DLSS settings, Frame Generation availability, and DLSS 4.5. If launch fails on a PC setup, graphics options are not a side note.',
      },
      {
        title: 'Do not diagnose from one failed click',
        body: 'Early Access builds move quickly. One crash after a patch can be stale files, old drivers, an overlay, or a setting that did not save cleanly.',
      },
    ],
    routeChecklistTitle: 'Five-minute launch test',
    routeChecklist: [
      'Update the game, close the launcher, and open it again.',
      'Start once with DLSS and Frame Generation disabled if you can reach settings.',
      'Verify game files before deleting saves or reinstalling.',
      'Update the GPU driver if the crash is tied to a graphics change.',
      'Test single-player before treating the problem as co-op related.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to troubleshoot a launch crash',
    routeSteps: [
      {
        title: 'Confirm you are testing the patched build',
        body: 'Hotfix 3 is the line between useful troubleshooting and guesswork. If the install is not updated, you may be chasing a crash that the patch already addressed.',
      },
      {
        title: 'Make one graphics-only test',
        body: 'Because the patch mentions DLSS crashes and Frame Generation availability, do one clean launch with those features off if settings are accessible. Do not change resolution, window mode, overlays, and DLSS all at once.',
      },
      {
        title: 'Verify files before touching saves',
        body: 'A launch crash does not automatically mean the save is damaged. Verify files through your store client first, then restart the PC if the client repaired anything.',
      },
      {
        title: 'Separate solo from co-op',
        body: 'Hotfix 3 also fixes a multiplayer rejoin position issue. If the game launches solo but fails around a session, write that down. It changes which page you should follow next.',
      },
      {
        title: 'Keep a short crash note',
        body: 'Write the platform, GPU, driver date, DLSS state, Frame Generation state, and whether it crashes before the menu or after selecting a save. That note is more useful than reinstalling three times.',
      },
    ],
    tableTitle: 'Startup crash checklist',
    tableHeaders: ['Symptom', 'Best next check'],
    tableRows: [
      [
        'Crashes before the menu',
        'Confirm Hotfix 3 is installed, restart the client, then verify files.',
      ],
      [
        'Crashes after changing DLSS',
        'Retest with DLSS and Frame Generation off, then update the GPU driver.',
      ],
      [
        'Settings keep reverting',
        'Hotfix 3 fixed DLSS settings not saving correctly, so test again after the patch.',
      ],
      [
        'Only fails in co-op',
        'Try a solo load first, then move to the multiplayer rejoin checklist.',
      ],
      [
        'Old guide says to reinstall first',
        'Do file verification and graphics retesting before a full reinstall.',
      ],
    ],
    visualTitle: 'Crash notes card',
    visualItems: [
      {
        label: 'Patch',
        value: 'Hotfix 3',
        note: 'Start-crash and DLSS fixes are official patch items.',
      },
      {
        label: 'Graphics',
        value: 'DLSS 4.5',
        note: 'Retest DLSS and Frame Generation after updating.',
      },
      {
        label: 'Order',
        value: 'Verify',
        note: 'Check files before deleting saves or reinstalling.',
      },
    ],
    cautionTitle: 'Do not promise a universal crash fix',
    cautionBody:
      'Hotfix 3 tells us what Unknown Worlds fixed, but it does not prove the same cause for every PC, Xbox install, driver, overlay, or save. Keep the checklist practical and stop short of pretending one magic setting fixes all crashes.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Did Hotfix 3 fix a Subnautica 2 startup crash?',
        body: 'Yes. Unknown Worlds says Hotfix 3 fixes a rare crash when starting games.',
      },
      {
        title: 'Did Hotfix 3 fix DLSS crashes?',
        body: 'Yes. The same patch includes DLSS crash fixes, saved DLSS setting fixes, Frame Generation availability fixes for some versions, and DLSS 4.5.',
      },
      {
        title: 'Should I delete my save if Subnautica 2 crashes on launch?',
        body: 'Not first. Confirm Hotfix 3, verify files, test graphics settings, and separate solo from co-op before touching saves.',
      },
      {
        title: 'Can an old crash guide still help?',
        body: 'Only partly. Anything written before June 1, 2026 should be checked against Hotfix 3 because the crash and DLSS notes changed.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 Changes' },
      {
        href: Routes.Subnautica2DlssSettingsAfterHotfix3,
        label: 'DLSS Settings After Hotfix 3',
      },
      {
        href: Routes.Subnautica2SystemRequirements,
        label: 'System Requirements',
      },
      {
        href: Routes.Subnautica2SteamDeckSettings,
        label: 'Steam Deck Settings',
      },
      {
        href: Routes.Subnautica2SaveFileLocation,
        label: 'Save File Backup',
      },
      {
        href: Routes.Subnautica2SaveRecoveryCloudSync,
        label: 'Save Recovery Checklist',
      },
      {
        href: Routes.Subnautica2MultiplayerNotWorking,
        label: 'Multiplayer Not Working',
      },
      {
        href: Routes.Subnautica2CoopRejoinAfterHotfix3,
        label: 'Co-op Rejoin Checklist',
      },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 2, 2026 against Unknown Worlds Hotfix 3, the official Steam page, Xbox listing, and the Early Access roadmap. The page image is original Abyss Guides artwork; the video is the official Subnautica embed.',
    cardKicker: 'Crash field card',
    cardBody:
      'A launch troubleshooting page for Hotfix 3, DLSS crashes, Frame Generation checks, file verification, driver retesting, and solo versus co-op notes.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Crash fix',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Patch',
    cardStatusValue: 'Hotfix 3',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Hotfix 3 后启动崩溃怎么办 - 启动和 DLSS 排查清单',
      description:
        'Subnautica 2 Hotfix 3 后启动崩溃中文排查：启动游戏崩溃、DLSS 崩溃、Frame Generation、图形设置、验证文件、驱动更新和联机复测。',
    },
    eyebrow: 'Subnautica 2 崩溃排查',
    title: 'Hotfix 3 后启动崩溃怎么办',
    description:
      '如果 Subnautica 2 还是一启动就崩，不要急着删存档或重装。Hotfix 3 已经修了少见的启动崩溃和几项 DLSS 问题，但本机版本、显卡驱动、图形设置和平台文件也要一起排查。',
    quickLabel: '快速结论',
    quickAnswer:
      '先确认已经装上 Hotfix 3。Unknown Worlds 在补丁说明里写明：Hotfix 3 修复了启动游戏时的少见崩溃、DLSS 崩溃、DLSS 设置不能正确保存、部分版本 Frame Generation 不可用，并把 DLSS 升级到 4.5。如果更新后仍然启动崩溃，先重启平台客户端，确认版本，能进设置的话先关掉 DLSS 和 Frame Generation 做一次干净启动，再验证游戏文件、更新显卡驱动，最后再判断是不是存档或联机问题。',
    fieldNotesTitle: 'Hotfix 3 给出的关键信息',
    fieldNotes: [
      {
        title: '启动崩溃确实被点名修复',
        body: '官方补丁写的是修复启动游戏时的少见崩溃，所以第一步不是乱改设置，而是先确认你跑的是 Hotfix 3 之后的版本。',
      },
      {
        title: 'DLSS 要放进启动排查里',
        body: '同一个补丁还提到 DLSS 崩溃、DLSS 设置保存、Frame Generation 可用性和 DLSS 4.5。PC 玩家启动失败时，图形选项不是无关项。',
      },
      {
        title: '别用一次失败点击下结论',
        body: '抢先体验版本变化很快。补丁后一次崩溃，可能是旧文件、旧驱动、叠加层、或者某个图形设置没有正常保存。',
      },
    ],
    routeChecklistTitle: '五分钟启动测试',
    routeChecklist: [
      '更新游戏后，完全关闭平台客户端再重新打开。',
      '如果能进设置，先关掉 DLSS 和 Frame Generation 测一次启动。',
      '先验证游戏文件，不要第一时间删存档。',
      '如果问题和图形设置有关，更新显卡驱动。',
      '先测试单人能不能进，再判断是不是联机问题。',
    ],
    contentsLabel: '目录',
    routeTitle: '启动崩溃怎么排查',
    routeSteps: [
      {
        title: '先确认补丁版本',
        body: 'Hotfix 3 是排查的分界线。如果游戏没有更新，你可能还在追一个官方已经修掉的问题。',
      },
      {
        title: '做一次单独的图形测试',
        body: '因为补丁明确提到 DLSS 崩溃和 Frame Generation 可用性，能进设置的话，先只关 DLSS 和 Frame Generation 测一次。不要同时改分辨率、窗口模式、叠加层和一堆画质项。',
      },
      {
        title: '动存档前先验证文件',
        body: '启动崩溃不等于存档坏了。先用 Steam、Xbox App 或对应平台验证文件。如果平台修复了文件，再重启电脑测一次。',
      },
      {
        title: '把单人和联机分开看',
        body: 'Hotfix 3 也修了多人重连位置回退的问题。如果单人能进，只有开会话或重连时出问题，那就应该转到联机排查，而不是继续按启动崩溃处理。',
      },
      {
        title: '留一条简短记录',
        body: '记下平台、显卡、驱动日期、DLSS 状态、Frame Generation 状态，以及崩溃发生在菜单前还是读档后。这比反复重装更有用。',
      },
    ],
    tableTitle: '启动崩溃排查表',
    tableHeaders: ['现象', '下一步先查什么'],
    tableRows: [
      ['菜单前崩溃', '确认 Hotfix 3 已安装，重启客户端，然后验证游戏文件。'],
      [
        '改 DLSS 后崩溃',
        '先关闭 DLSS 和 Frame Generation 复测，再更新显卡驱动。',
      ],
      [
        '设置总是回退',
        'Hotfix 3 修了 DLSS 设置保存问题，更新后按同样步骤再测。',
      ],
      ['只有联机时失败', '先加载单人存档，再去看多人重连排查。'],
      ['旧攻略建议先重装', '先验证文件和复测图形设置，最后再考虑完整重装。'],
    ],
    visualTitle: '崩溃记录卡',
    visualItems: [
      {
        label: '补丁',
        value: 'Hotfix 3',
        note: '启动崩溃和 DLSS 修复都在官方说明里。',
      },
      {
        label: '图形',
        value: 'DLSS 4.5',
        note: '更新后重新测试 DLSS 和 Frame Generation。',
      },
      {
        label: '顺序',
        value: '验证文件',
        note: '删存档或重装之前，先做文件检查。',
      },
    ],
    cautionTitle: '不要把它写成万能修复',
    cautionBody:
      'Hotfix 3 告诉我们官方修了什么，但不能证明每台 PC、每个 Xbox 安装、每个驱动、每个叠加层或每个存档都是同一个原因。排查清单要实用，但不要假装一个设置能修所有崩溃。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Hotfix 3 修了 Subnautica 2 启动崩溃吗？',
        body: '修了。Unknown Worlds 说明 Hotfix 3 修复了启动游戏时的少见崩溃。',
      },
      {
        title: 'Hotfix 3 修了 DLSS 崩溃吗？',
        body: '修了。官方补丁还包括 DLSS 崩溃、DLSS 设置保存、部分版本 Frame Generation 不可用，以及 DLSS 4.5 升级。',
      },
      {
        title: '启动崩溃要不要删存档？',
        body: '先不要。先确认 Hotfix 3、验证文件、测试图形设置，并分清单人和联机问题，再考虑存档。',
      },
      {
        title: '旧的崩溃修复攻略还能看吗？',
        body: '可以参考，但 2026 年 6 月 1 日前写的崩溃和 DLSS 结论，都要按 Hotfix 3 重新核对。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 更新内容' },
      {
        href: Routes.Subnautica2DlssSettingsAfterHotfix3,
        label: 'Hotfix 3 后 DLSS 设置',
      },
      { href: Routes.Subnautica2SystemRequirements, label: '配置要求' },
      {
        href: Routes.Subnautica2SteamDeckSettings,
        label: 'Steam Deck 设置',
      },
      { href: Routes.Subnautica2SaveFileLocation, label: '存档备份' },
      {
        href: Routes.Subnautica2SaveRecoveryCloudSync,
        label: '存档恢复流程',
      },
      { href: Routes.Subnautica2MultiplayerNotWorking, label: '联机问题修复' },
      {
        href: Routes.Subnautica2CoopRejoinAfterHotfix3,
        label: '联机重连检查',
      },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 2 日核对 Unknown Worlds Hotfix 3、Steam 官方页面、Xbox 商店页面和 Early Access 路线图。图片为 Abyss Guides 原创图，视频为 Subnautica 官方嵌入。',
    cardKicker: '崩溃排查卡',
    cardBody:
      '围绕 Hotfix 3、DLSS 崩溃、Frame Generation、文件验证、驱动复测，以及单人和联机区别写的启动排查页。',
    cardTypeLabel: '类型',
    cardTypeValue: '崩溃修复',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '补丁',
    cardStatusValue: 'Hotfix 3',
  },
};

function getCopy(locale: Locale): StartupCrashCopy {
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
    pathname: Routes.Subnautica2StartupCrashAfterHotfix3,
  });
}

export default async function StartupCrashAfterHotfix3Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <LocalizedResourceGuidePage
      copy={{ ...copy, publishedAt: PUBLISHED_AT, updatedAt: UPDATED_AT }}
      icon={AlertTriangleIcon}
      locale={locale}
      pathname={Routes.Subnautica2StartupCrashAfterHotfix3}
      sources={sharedSources}
    />
  );
}
