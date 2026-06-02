import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { MonitorCogIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type DlssCopy = ResourceGuideCopy & {
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
    label: 'Official Steam system requirements',
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

const copyByLocale: Record<string, DlssCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 DLSS Settings After Hotfix 3 - DLSS 4.5 and Frame Generation',
      description:
        'A practical Subnautica 2 DLSS settings guide after Hotfix 3, covering DLSS 4.5, Frame Generation availability, crashes, saved settings, and when to retest PC graphics advice.',
    },
    eyebrow: 'Subnautica 2 PC settings',
    title: 'DLSS Settings After Hotfix 3',
    description:
      'If you saw launch-week advice telling you to avoid DLSS, ignore Frame Generation, or expect settings not to save, retest after Hotfix 3 before trusting that advice.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Hotfix 3 fixes DLSS crashes, fixes DLSS settings not saving correctly, fixes Frame Generation being unavailable in certain versions, and upgrades DLSS to 4.5. That does not mean every PC should max every setting. It means old DLSS warnings should be treated as stale until you retest the patched build on your GPU, driver, monitor refresh rate, and co-op setup.',
    fieldNotesTitle: 'What changed for PC players',
    fieldNotes: [
      {
        title: 'DLSS 4.5 is now the baseline note',
        body: 'Any page that still talks about launch-week DLSS without mentioning Hotfix 3 is missing the most important PC settings change.',
      },
      {
        title: 'Saved settings need retesting',
        body: 'The patch specifically mentions DLSS settings not saving correctly. If your settings kept reverting before, test the same steps again after updating.',
      },
      {
        title: 'Frame Generation is version-sensitive',
        body: 'Hotfix 3 says Frame Generation was unavailable in certain versions. If it still does not appear, do not assume the game is broken before checking GPU support, drivers, and the patched build.',
      },
    ],
    routeChecklistTitle: 'Retest checklist',
    routeChecklist: [
      'Install the latest game update before changing settings again.',
      'Update GPU drivers if your DLSS or Frame Generation option still behaves oddly.',
      'Change one setting at a time, apply, restart, and confirm it saved.',
      'Test solo before blaming co-op network problems.',
      'Keep notes on resolution, refresh rate, DLSS mode, and Frame Generation state.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to retest DLSS after Hotfix 3',
    routeSteps: [
      {
        title: 'Start from the patched build',
        body: 'Do not troubleshoot a pre-Hotfix 3 install. The patch itself names the crash, saved-setting, Frame Generation, and DLSS version fixes.',
      },
      {
        title: 'Reset only the graphics settings you are testing',
        body: 'Avoid changing five things at once. Set resolution, DLSS mode, and Frame Generation one by one so you know which option caused a change.',
      },
      {
        title: 'Restart once after saving',
        body: 'Because saved DLSS settings were part of the patch, restart the game and confirm the option stayed where you left it.',
      },
      {
        title: 'Separate FPS from stability',
        body: 'A setting can improve frame rate and still feel bad because of stutter, input feel, or co-op load. Keep the notes separate.',
      },
      {
        title: 'Keep older advice on a short leash',
        body: 'Guides written before June 1, 2026 can still be useful for general settings, but their DLSS and Frame Generation claims need a Hotfix 3 check.',
      },
    ],
    tableTitle: 'DLSS troubleshooting table',
    tableHeaders: ['Problem', 'What to check after Hotfix 3'],
    tableRows: [
      [
        'DLSS caused crashes before',
        'Retest on the patched build because Hotfix 3 directly fixes DLSS crashes.',
      ],
      [
        'DLSS setting kept reverting',
        'Apply the setting, restart once, and confirm it now saves correctly.',
      ],
      [
        'Frame Generation missing',
        'Check the patched build, GPU support, drivers, and whether your version was affected.',
      ],
      [
        'Performance still feels uneven',
        'Lower settings gradually and separate FPS, stutter, and co-op session behavior.',
      ],
      [
        'Old guide says to disable DLSS',
        'Treat that as launch-week advice unless it mentions Hotfix 3 and DLSS 4.5.',
      ],
    ],
    visualTitle: 'PC settings card',
    visualItems: [
      {
        label: 'DLSS',
        value: '4.5',
        note: 'Upgraded in Hotfix 3.',
      },
      {
        label: 'Fix',
        value: 'Saves',
        note: 'DLSS settings not saving was patched.',
      },
      {
        label: 'Check',
        value: 'FG',
        note: 'Frame Generation availability was patched for some versions.',
      },
    ],
    cautionTitle: 'Do not turn this into a universal best-settings page',
    cautionBody:
      'The official patch tells us what was fixed. It does not prove one perfect DLSS mode for every GPU, monitor, driver, co-op session, or recording setup. Keep settings advice tied to your hardware.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Did Hotfix 3 upgrade DLSS in Subnautica 2?',
        body: 'Yes. Unknown Worlds says Hotfix 3 upgrades DLSS to version 4.5.',
      },
      {
        title: 'Did Hotfix 3 fix DLSS crashes?',
        body: 'Yes. The official Hotfix 3 notes include a fix for DLSS crashes.',
      },
      {
        title: 'Why is Frame Generation still missing?',
        body: 'Hotfix 3 fixes Frame Generation being unavailable in certain versions. If it is still missing, check the patched build, GPU support, and drivers before assuming the game option is broken.',
      },
      {
        title: 'Should I follow older DLSS guides?',
        body: 'Use them carefully. Anything written before June 1, 2026 should be checked against Hotfix 3 because the DLSS and Frame Generation behavior changed.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 Changes' },
      {
        href: Routes.Subnautica2BlackScreenFreezing,
        label: 'Black Screen and Freezing',
      },
      {
        href: Routes.Subnautica2StartupCrashAfterHotfix3,
        label: 'Startup Crash Checklist',
      },
      {
        href: Routes.Subnautica2SystemRequirements,
        label: 'System Requirements',
      },
      {
        href: Routes.Subnautica2SteamDeckSettings,
        label: 'Steam Deck Settings',
      },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      {
        href: Routes.Subnautica2MultiplayerNotWorking,
        label: 'Multiplayer Fixes',
      },
      {
        href: Routes.Subnautica2EarlyAccessWorthIt,
        label: 'Early Access Worth It',
      },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 2, 2026 against Unknown Worlds Hotfix 3, Steam system requirements, the Xbox listing, and the Early Access roadmap. This page explains the patch impact; it does not benchmark every GPU.',
    cardKicker: 'Settings field card',
    cardBody:
      'A Hotfix 3 PC settings guide for DLSS 4.5, saved DLSS settings, Frame Generation availability, crash retesting, and stale launch-week advice.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'PC settings',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Patch',
    cardStatusValue: 'DLSS 4.5',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Hotfix 3 后 DLSS 设置怎么调 - DLSS 4.5 和 Frame Generation',
      description:
        'Subnautica 2 Hotfix 3 后 DLSS 设置中文指南：DLSS 4.5、Frame Generation 不显示、崩溃、设置不保存，以及旧 PC 画质建议怎么重新判断。',
    },
    eyebrow: 'Subnautica 2 PC 设置',
    title: 'Hotfix 3 后 DLSS 设置怎么调',
    description:
      '如果你看过首发周攻略，说 DLSS 先别开、Frame Generation 不用管、设置会保存失败，Hotfix 3 后都应该重新测一遍。',
    quickLabel: '快速结论',
    quickAnswer:
      'Hotfix 3 修复了 DLSS 崩溃、DLSS 设置无法正确保存、部分版本 Frame Generation 不可用的问题，并把 DLSS 升级到 4.5。这不等于每台电脑都该把设置拉满，而是说明旧 DLSS 警告需要重新判断。建议在更新游戏后，按自己的显卡、驱动、显示器刷新率和联机情况重新测试。',
    fieldNotesTitle: 'PC 玩家真正要注意什么',
    fieldNotes: [
      {
        title: 'DLSS 4.5 是新的基础信息',
        body: '如果某篇设置攻略还停在首发周 DLSS 说法，又没提 Hotfix 3，那它的 PC 设置部分就已经落后了。',
      },
      {
        title: '设置保存要重新试',
        body: '官方补丁明确提到 DLSS 设置无法正确保存。以前遇到设置回退的玩家，更新后要按同样步骤再试一次。',
      },
      {
        title: 'Frame Generation 和版本有关',
        body: 'Hotfix 3 写的是部分版本 Frame Generation 不可用被修复。如果还是不显示，先查补丁版本、显卡支持和驱动，不要马上判断游戏坏了。',
      },
    ],
    routeChecklistTitle: '重新测试清单',
    routeChecklist: [
      '先确认游戏已经更新到最新补丁。',
      '如果 DLSS 或 Frame Generation 仍异常，更新显卡驱动。',
      '一次只改一个图形选项，应用、重启，再确认是否保存。',
      '先单人测试，再判断是不是联机网络问题。',
      '记录分辨率、刷新率、DLSS 模式和 Frame Generation 状态。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Hotfix 3 后怎么重新测 DLSS',
    routeSteps: [
      {
        title: '先从新补丁版本开始',
        body: '不要在 Hotfix 3 之前的版本上排查。官方这次点名修了崩溃、设置保存、Frame Generation 和 DLSS 版本。',
      },
      {
        title: '只重置你要测试的图形项',
        body: '不要一次改五个选项。分辨率、DLSS 模式、Frame Generation 分开改，这样才知道是哪一项造成变化。',
      },
      {
        title: '保存后重启一次',
        body: '因为 DLSS 设置保存就是这次修复内容之一，所以保存后重启游戏，再确认设置有没有留住。',
      },
      {
        title: '把帧率和稳定性分开看',
        body: '某个设置可能提高 FPS，但仍然有卡顿、输入手感差或联机负载问题。不要只看一个数字。',
      },
      {
        title: '旧攻略要打折看',
        body: '2026 年 6 月 1 日前写的设置攻略仍可能有参考价值，但 DLSS 和 Frame Generation 结论要按 Hotfix 3 重查。',
      },
    ],
    tableTitle: 'DLSS 排查表',
    tableHeaders: ['问题', 'Hotfix 3 后先查什么'],
    tableRows: [
      ['以前开 DLSS 会崩溃', 'Hotfix 3 直接修复 DLSS 崩溃，先在新版本重新测。'],
      ['DLSS 设置总是回退', '应用设置后重启一次，确认现在是否能正确保存。'],
      [
        'Frame Generation 不显示',
        '检查补丁版本、显卡支持、驱动，以及自己是否属于受影响版本。',
      ],
      ['性能仍不稳定', '逐步降设置，把 FPS、卡顿和联机会话表现分开记录。'],
      [
        '旧攻略说关闭 DLSS',
        '除非它提到 Hotfix 3 和 DLSS 4.5，否则当作首发周建议。',
      ],
    ],
    visualTitle: 'PC 设置卡',
    visualItems: [
      {
        label: 'DLSS',
        value: '4.5',
        note: 'Hotfix 3 已升级。',
      },
      {
        label: '修复',
        value: '保存',
        note: 'DLSS 设置不保存已修。',
      },
      {
        label: '检查',
        value: 'FG',
        note: '部分版本 Frame Generation 可用性已修。',
      },
    ],
    cautionTitle: '不要把它写成万能最佳设置',
    cautionBody:
      '官方补丁说明能告诉我们修了什么，但不能证明所有显卡、显示器、驱动、联机和录制环境都适合同一套 DLSS 模式。设置建议必须跟硬件绑定。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Hotfix 3 升级了 Subnautica 2 的 DLSS 吗？',
        body: '是的。Unknown Worlds 说明 Hotfix 3 把 DLSS 升级到 4.5。',
      },
      {
        title: 'Hotfix 3 修复了 DLSS 崩溃吗？',
        body: '是的。官方 Hotfix 3 说明包含 DLSS 崩溃修复。',
      },
      {
        title: '为什么 Frame Generation 还是不显示？',
        body: 'Hotfix 3 修复的是部分版本不可用。如果你仍然看不到，先查补丁版本、显卡支持和驱动。',
      },
      {
        title: '旧 DLSS 设置攻略还能看吗？',
        body: '可以参考，但 2026 年 6 月 1 日前的 DLSS 和 Frame Generation 结论都要按 Hotfix 3 重新核对。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 更新内容' },
      {
        href: Routes.Subnautica2BlackScreenFreezing,
        label: '黑屏和卡死排查',
      },
      {
        href: Routes.Subnautica2StartupCrashAfterHotfix3,
        label: '启动崩溃排查',
      },
      { href: Routes.Subnautica2SystemRequirements, label: '配置要求' },
      {
        href: Routes.Subnautica2SteamDeckSettings,
        label: 'Steam Deck 设置',
      },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      { href: Routes.Subnautica2MultiplayerNotWorking, label: '联机问题修复' },
      {
        href: Routes.Subnautica2EarlyAccessWorthIt,
        label: '抢先体验值不值得买',
      },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 2 日核对 Unknown Worlds Hotfix 3、Steam 配置要求、Xbox 页面和抢先体验路线图。本页解释补丁影响，不做所有显卡的跑分承诺。',
    cardKicker: '设置现场卡',
    cardBody:
      '围绕 Hotfix 3 后 DLSS 4.5、DLSS 设置保存、Frame Generation 可用性、崩溃复测和旧攻略判断写的 PC 设置页。',
    cardTypeLabel: '类型',
    cardTypeValue: 'PC 设置',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '补丁',
    cardStatusValue: 'DLSS 4.5',
  },
};

function getCopy(locale: Locale): DlssCopy {
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
    pathname: Routes.Subnautica2DlssSettingsAfterHotfix3,
  });
}

export default async function DlssSettingsAfterHotfix3Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <LocalizedResourceGuidePage
      copy={{ ...copy, publishedAt: PUBLISHED_AT, updatedAt: UPDATED_AT }}
      icon={MonitorCogIcon}
      locale={locale}
      pathname={Routes.Subnautica2DlssSettingsAfterHotfix3}
      sources={sharedSources}
    />
  );
}
