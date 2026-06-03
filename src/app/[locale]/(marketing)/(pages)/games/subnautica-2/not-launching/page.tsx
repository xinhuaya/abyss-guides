import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { AlertTriangleIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type NotLaunchingCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-06-03';
const UPDATED_AT = '2026-06-03';

const sharedSources = [
  {
    href: 'https://help.steampowered.com/en/faqs/view/0C48-FCBD-DA71-93EB',
    label: 'Steam verify game files help',
  },
  {
    href: 'https://help.steampowered.com/en/faqs/view/21F5-8D5D-0141-7A5E',
    label: 'Steam game troubleshooting help',
  },
  {
    href: 'https://support.xbox.com/en-US/xbox-live-status',
    label: 'Official Xbox status page',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-3',
    label: 'Unknown Worlds Hotfix 3',
  },
  {
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/',
    label: 'Official Steam Early Access page',
  },
  {
    href: 'https://www.youtube.com/watch?v=6t2nDHldoSk',
    label: 'Official Subnautica 2 gameplay trailer',
  },
];

const copyByLocale: Record<string, NotLaunchingCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Not Launching - Steam, Xbox App, DLSS, Files, and Driver Checks',
      description:
        'A practical Subnautica 2 not launching guide covering Steam, Xbox app, Hotfix 3, stuck splash screens, DLSS, overlays, file verification, drivers, and save-safe checks.',
    },
    eyebrow: 'Subnautica 2 launch fix',
    title: 'Subnautica 2 Not Launching? Start With the Boring Checks',
    description:
      'When the game will not open, the fastest fix is usually not a dramatic reinstall. Work through the dull checks first: service status, patched build, client restart, files, overlays, and one clean graphics test.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Restart Steam or the Xbox app, confirm the current build is installed, and check Xbox status if you are using Microsoft services. On Steam, verify game files before reinstalling. If the game reaches settings but will not launch cleanly after that, test once with overlays off and DLSS or Frame Generation disabled. If it crashes after clicking Play, use the startup crash page; if it opens to black screen, use the black screen page.',
    fieldNotesTitle: 'What “not launching” can mean',
    fieldNotes: [
      {
        title: 'No window is different from a crash',
        body: 'Nothing happening after Play usually points to the launcher, permissions, services, overlays, files, or drivers. A crash report after the menu is a different path.',
      },
      {
        title: 'Hotfix 3 changed the launch baseline',
        body: 'Unknown Worlds fixed a rare crash when starting games and several DLSS problems in Hotfix 3. Old launch advice should be checked against that patch.',
      },
      {
        title: 'Store clients can lie quietly',
        body: 'A client may show Play while a background update, repaired file, account refresh, or service problem is still settling. Restarting the client is not wasted time here.',
      },
    ],
    routeChecklistTitle: 'Ten-minute launch checklist',
    routeChecklist: [
      'Close Steam or the Xbox app completely, then open it again.',
      'Confirm the latest Subnautica 2 update is installed.',
      'Check Xbox status if you use Xbox app, PC Game Pass, or Microsoft services.',
      'Verify game files on Steam before reinstalling.',
      'Disable overlays for one test launch.',
      'Update the GPU driver if the game fails after a graphics setting change.',
      'Test solo before blaming a co-op save.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to sort the launch problem',
    routeSteps: [
      {
        title: 'Name the exact failure',
        body: 'Write down whether nothing happens, a splash screen appears then closes, the screen goes black, the game crashes before menu, or it fails after picking a save. Those are not the same bug.',
      },
      {
        title: 'Restart the store client',
        body: 'Fully close Steam or the Xbox app, then open it again. This catches half-finished updates, account refreshes, and client handoff problems before you start changing Windows settings.',
      },
      {
        title: 'Verify files or repair the install',
        body: 'On Steam, use the official file verification flow. On Xbox app or Game Pass, move to the install-error checklist if the app cannot finish, repair, or hand off the install cleanly.',
      },
      {
        title: 'Run one overlay-free test',
        body: 'Disable recording overlays, FPS counters, controller remappers, and aggressive GPU tools for one launch. Do not uninstall them yet; just remove them from the first test.',
      },
      {
        title: 'Retest graphics features carefully',
        body: 'Hotfix 3 mentions DLSS crashes, DLSS setting saves, Frame Generation availability, and DLSS 4.5. If you can reach settings, test a clean launch with DLSS and Frame Generation off.',
      },
      {
        title: 'Stop before deleting saves',
        body: 'A not-launching problem is usually not proof that your save is broken. Back up saves if you are worried, but verify files, patch state, and client behavior first.',
      },
    ],
    tableTitle: 'Launch symptoms and next checks',
    tableHeaders: ['Symptom', 'Best next check'],
    tableRows: [
      [
        'Nothing happens after Play',
        'Restart the client, check services, and verify files.',
      ],
      [
        'Splash screen closes',
        'Disable overlays, then test file verification and drivers.',
      ],
      [
        'Black screen opens',
        'Move to the black screen and freezing checklist.',
      ],
      ['Crash before menu', 'Use the Hotfix 3 startup crash checklist.'],
      [
        'Fails only from Xbox app',
        'Check Xbox status and the Game Pass install-error page.',
      ],
      [
        'Fails after mods',
        'Remove the modded setup and test a clean install first.',
      ],
    ],
    visualTitle: 'Launch diagnosis card',
    visualItems: [
      {
        label: 'First step',
        value: 'Restart',
        note: 'Close the client fully before changing files.',
      },
      {
        label: 'File check',
        value: 'Verify',
        note: 'Steam has an official flow for this.',
      },
      {
        label: 'Patch baseline',
        value: 'Hotfix 3',
        note: 'Launch and DLSS advice changed after it.',
      },
    ],
    cautionTitle: 'Do not reinstall as the first move',
    cautionBody:
      'A full reinstall is slow, and it can hide the real cause. Restart the launcher, check status, verify files, disable overlays for one launch, and write down the exact failure before taking the heavier step.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Why does Subnautica 2 do nothing after I click Play?',
        body: 'It can be a launcher handoff issue, unfinished update, service problem, overlay conflict, missing file, driver problem, or a patched crash. Start with the client restart and file check.',
      },
      {
        title: 'Should I verify files on Steam?',
        body: 'Yes. Steam has an official file verification flow, and it is safer than deleting folders or reinstalling immediately.',
      },
      {
        title: 'Does Hotfix 3 matter for launch problems?',
        body: 'Yes. Unknown Worlds says Hotfix 3 fixed a rare crash when starting games and several DLSS-related problems, so old fixes need to be checked against it.',
      },
      {
        title: 'Is this the same as a black screen?',
        body: 'Not always. If a game window opens and stays black, use the black screen page. If nothing opens at all, stay on this launch checklist first.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2StartupCrashAfterHotfix3,
        label: 'Startup Crash After Hotfix 3',
      },
      {
        href: Routes.Subnautica2BlackScreenFreezing,
        label: 'Black Screen and Freezing',
      },
      {
        href: Routes.Subnautica2GamePassInstallError,
        label: 'Game Pass Install Error',
      },
      {
        href: Routes.Subnautica2BestSettingsLowFps,
        label: 'Best Settings for Low FPS',
      },
      { href: Routes.Subnautica2Mods, label: 'Mods Safety Setup' },
      { href: Routes.Subnautica2SaveFileLocation, label: 'Save File Location' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 3, 2026 against Steam support, Xbox status, Unknown Worlds Hotfix 3, the official Steam page, and the official gameplay trailer. Page art is original Abyss Guides artwork.',
    cardKicker: 'Launch field card',
    cardBody:
      'A launch troubleshooting page for Subnautica 2 not opening, stuck splash screens, client handoff, overlays, file checks, DLSS, and save-safe next steps.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Launch fix',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'First move',
    cardStatusValue: 'Restart client',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 打不开怎么办 - Steam、Xbox app、DLSS、文件和驱动排查',
      description:
        'Subnautica 2 打不开中文排查：Steam、Xbox app、Hotfix 3、卡启动画面、DLSS、覆盖层、验证文件、显卡驱动和存档安全检查。',
    },
    eyebrow: 'Subnautica 2 启动排查',
    title: 'Subnautica 2 打不开？先做这些无聊但有效的检查',
    description:
      '游戏打不开时，最快的办法通常不是立刻重装。先按顺序查：服务状态、当前补丁、平台客户端、文件、覆盖层，以及一次干净的图形设置测试。',
    quickLabel: '快速结论',
    quickAnswer:
      '先完全重启 Steam 或 Xbox app，确认当前版本已经更新。如果你用 Xbox app、PC Game Pass 或 Microsoft 服务，先看 Xbox 状态页。Steam 版本先验证游戏文件，不要急着重装。如果能进设置但启动不稳定，先关覆盖层，并用关闭 DLSS 和 Frame Generation 的状态测试一次。点 Play 后直接崩溃看启动崩溃页；能打开但黑屏看黑屏页。',
    fieldNotesTitle: '“打不开”其实有几种情况',
    fieldNotes: [
      {
        title: '没有窗口和崩溃不是一回事',
        body: '点 Play 后什么都没有，通常更像平台客户端、权限、服务、覆盖层、文件或驱动问题。进菜单后崩溃是另一条排查路线。',
      },
      {
        title: 'Hotfix 3 改变了启动问题的基线',
        body: 'Unknown Worlds 在 Hotfix 3 修复了启动游戏时的少见崩溃，以及多项 DLSS 问题。旧启动教程要按这个补丁重新看。',
      },
      {
        title: '平台客户端有时不会明显报错',
        body: '客户端可能显示可以 Play，但后台更新、文件修复、账号刷新或服务问题还没处理完。先重启客户端并不浪费时间。',
      },
    ],
    routeChecklistTitle: '10 分钟启动检查',
    routeChecklist: [
      '完全关闭 Steam 或 Xbox app，再重新打开。',
      '确认 Subnautica 2 已经更新到最新版本。',
      '使用 Xbox app、PC Game Pass 或 Microsoft 服务时，先看 Xbox 状态。',
      'Steam 版本先验证游戏文件，再考虑重装。',
      '关闭覆盖层，做一次干净启动测试。',
      '如果问题出现在图形设置变化后，更新显卡驱动。',
      '先测试单人，不要一开始就认定是联机存档问题。',
    ],
    contentsLabel: '目录',
    routeTitle: '怎么把启动问题分清楚',
    routeSteps: [
      {
        title: '先说清楚失败发生在哪一步',
        body: '记录是点 Play 后没反应、启动画面出现后关闭、黑屏、进菜单前崩溃，还是选存档后失败。这几种不是同一个问题。',
      },
      {
        title: '重启平台客户端',
        body: '完全关闭 Steam 或 Xbox app，再打开。这样可以先排除未完成更新、账号刷新和客户端交接问题。',
      },
      {
        title: '验证文件或修复安装',
        body: 'Steam 走官方验证文件流程。Xbox app 或 Game Pass 如果安装、修复、启动交接都不顺，就去看安装错误页。',
      },
      {
        title: '做一次无覆盖层启动测试',
        body: '录屏覆盖层、帧率计数器、手柄映射、激进显卡工具都先关一次。不用卸载，只是从第一次测试里拿掉。',
      },
      {
        title: '谨慎复测图形功能',
        body: 'Hotfix 3 提到 DLSS 崩溃、DLSS 设置保存、Frame Generation 可用性和 DLSS 4.5。能进设置的话，用关闭 DLSS 和 Frame Generation 的状态测试一次。',
      },
      {
        title: '别急着删存档',
        body: '打不开通常不能证明存档坏了。担心的话先备份，但优先查文件、补丁、客户端和启动行为。',
      },
    ],
    tableTitle: '启动症状和下一步',
    tableHeaders: ['症状', '下一步检查'],
    tableRows: [
      ['点 Play 没反应', '重启客户端，检查服务，再验证文件。'],
      ['启动画面出现后关闭', '关闭覆盖层，再查文件和驱动。'],
      ['打开后黑屏', '转到黑屏和卡死排查页。'],
      ['进菜单前崩溃', '看 Hotfix 3 启动崩溃清单。'],
      ['只在 Xbox app 失败', '检查 Xbox 状态，并看 Game Pass 安装错误页。'],
      ['装模组后失败', '先移除模组环境，测试干净安装。'],
    ],
    visualTitle: '启动诊断卡片',
    visualItems: [
      { label: '第一步', value: '重启', note: '先完整关闭平台客户端。' },
      { label: '文件检查', value: '验证', note: 'Steam 有官方验证流程。' },
      {
        label: '补丁基线',
        value: 'Hotfix 3',
        note: '启动和 DLSS 建议已变化。',
      },
    ],
    cautionTitle: '不要把重装放在第一步',
    cautionBody:
      '完整重装很慢，而且可能掩盖真正原因。先重启平台、查服务、验证文件、关闭覆盖层测试，并记录清楚失败位置，再考虑更重的操作。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '为什么 Subnautica 2 点 Play 后没反应？',
        body: '可能是平台交接、未完成更新、服务状态、覆盖层、缺文件、驱动或补丁相关崩溃。先重启客户端和验证文件。',
      },
      {
        title: 'Steam 版本需要验证文件吗？',
        body: '建议验证。Steam 有官方验证文件流程，比直接删文件或重装更稳。',
      },
      {
        title: 'Hotfix 3 和启动问题有关吗？',
        body: '有关。Unknown Worlds 写明 Hotfix 3 修复了启动游戏时的少见崩溃和多项 DLSS 问题。',
      },
      {
        title: '这和黑屏是同一个问题吗？',
        body: '不一定。如果窗口能打开但一直黑屏，看黑屏页；如果什么都打不开，先留在启动清单。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      {
        href: Routes.Subnautica2StartupCrashAfterHotfix3,
        label: 'Hotfix 3 启动崩溃',
      },
      { href: Routes.Subnautica2BlackScreenFreezing, label: '黑屏和卡死' },
      {
        href: Routes.Subnautica2GamePassInstallError,
        label: 'Game Pass 安装错误',
      },
      { href: Routes.Subnautica2BestSettingsLowFps, label: '低 FPS 设置' },
      { href: Routes.Subnautica2Mods, label: 'Mods 安全设置' },
      { href: Routes.Subnautica2SaveFileLocation, label: '存档位置' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 3 日核对 Steam 支持、Xbox 状态、Unknown Worlds Hotfix 3、Steam 官方页和官方实机预告。页面图片为 Abyss Guides 原创图。',
    cardKicker: '启动排查',
    cardBody:
      '围绕 Subnautica 2 打不开、卡启动画面、客户端交接、覆盖层、文件检查、DLSS 和存档安全写的排查页。',
    cardTypeLabel: '类型',
    cardTypeValue: '启动修复',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '第一步',
    cardStatusValue: '重启客户端',
  },
};

function getCopy(locale: Locale): NotLaunchingCopy {
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
    pathname: Routes.Subnautica2NotLaunching,
  });
}

export default async function Subnautica2NotLaunchingPage({
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
      icon={AlertTriangleIcon}
      locale={locale}
      pathname={Routes.Subnautica2NotLaunching}
      sources={sharedSources}
    />
  );
}
