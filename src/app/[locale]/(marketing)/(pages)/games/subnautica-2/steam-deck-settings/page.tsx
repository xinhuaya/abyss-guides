import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { Gamepad2Icon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type SteamDeckCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-06-02';
const UPDATED_AT = '2026-06-02';

const sharedSources = [
  {
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/?l=english',
    label: 'Official Steam page',
  },
  {
    href: 'https://www.steamdeck.com/en/verified',
    label: 'Valve Steam Deck Verified program',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-3',
    label: 'Unknown Worlds Hotfix 3',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap',
    label: 'Unknown Worlds Early Access roadmap',
  },
];

const copyByLocale: Record<string, SteamDeckCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Steam Deck Settings - Handheld Performance Checklist',
      description:
        'A practical Subnautica 2 Steam Deck and handheld settings guide covering verified status checks, PC specs, resolution, frame caps, battery, heat, DLSS limits, and safe testing.',
    },
    eyebrow: 'Subnautica 2 handheld settings',
    title: 'Steam Deck and Handheld Settings Guide',
    description:
      'Subnautica 2 is the kind of game people want to play from a couch or a handheld, but a desktop spec table does not answer every portable device. Treat this as a test plan, not a magic preset.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Check the Steam page and Steam Deck compatibility status first, then test on your own device before committing to a long save. The official Steam page lists Windows 10/11, 12 GB RAM, GTX 1660 6GB or RX 5500 XT 6GB, DirectX 12, and 50 GB storage as the minimum desktop baseline. Steam Deck and Windows handhelds have different limits: shared memory, battery targets, heat, driver behavior, and lower screen resolution. Start with a frame cap, lower visual settings, and one short save test before trusting any best-settings claim.',
    fieldNotesTitle: 'What handheld players should know first',
    fieldNotes: [
      {
        title: 'Verified status is a starting point',
        body: 'Valve compatibility labels help, but they do not replace testing the current Early Access build, patch, and your own tolerance for frame drops.',
      },
      {
        title: 'DLSS advice does not help every handheld',
        body: 'Hotfix 3 matters for DLSS and Frame Generation on supported NVIDIA setups. Steam Deck and many handhelds will not use that path.',
      },
      {
        title: 'Heat is part of the settings menu',
        body: 'If a handheld starts loud, hot, or unstable, lower settings before assuming the game itself is broken.',
      },
    ],
    routeChecklistTitle: 'First handheld test',
    routeChecklist: [
      'Check Steam compatibility wording before installing.',
      'Make sure the game is updated past Hotfix 3 before judging PC settings.',
      'Start with a short new save instead of risking a long co-op world.',
      'Use a frame cap before chasing higher graphics settings.',
      'Watch battery drain, fan noise, heat, and stutter during the first 20 minutes.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to test Subnautica 2 on Steam Deck or a handheld',
    routeSteps: [
      {
        title: 'Read compatibility before settings',
        body: 'Start with the Steam page and Valve compatibility status. If the page does not give you a clean answer, treat the device as a test case rather than a guaranteed platform.',
      },
      {
        title: 'Compare against the desktop minimum',
        body: 'The Steam minimum spec is a useful warning sign: 12 GB RAM, a 6 GB GPU baseline, DirectX 12, and 50 GB storage. Handhelds can play below or around desktop specs in some games, but shared memory and heat make the comparison messy.',
      },
      {
        title: 'Cap frames before raising visuals',
        body: 'A steady lower cap usually feels better than a jumpy higher number. Start conservative, then raise texture, shadows, view distance, or effects one at a time.',
      },
      {
        title: 'Separate GPU features from handheld reality',
        body: 'Hotfix 3 fixed DLSS crashes, saved DLSS settings, Frame Generation availability in some versions, and DLSS 4.5. That is useful for NVIDIA PCs. It does not automatically create a Deck preset.',
      },
      {
        title: 'Test a short save loop',
        body: 'Run a small loop: start a save, swim near a busy area, open menus, build or craft once, save, quit, and reopen. That catches more practical problems than staring at the title screen.',
      },
      {
        title: 'Keep co-op for the second test',
        body: 'Do not judge handheld performance and multiplayer stability at the same time. Test solo first, then invite a friend once the device feels stable.',
      },
    ],
    tableTitle: 'Handheld settings table',
    tableHeaders: ['Setting area', 'Safer first move'],
    tableRows: [
      [
        'Frame rate',
        'Use a cap first. Smooth 30 or 40 can feel better than unstable higher numbers.',
      ],
      [
        'Resolution / scaling',
        'Stay near the handheld screen target before raising expensive visual options.',
      ],
      [
        'Textures',
        'Raise slowly. Shared memory can behave differently from a desktop GPU.',
      ],
      [
        'Shadows and effects',
        'Lower these early if the device gets hot or stutters near bases and creatures.',
      ],
      [
        'Co-op',
        'Test after solo play feels stable. Co-op adds network and session variables.',
      ],
    ],
    visualTitle: 'Handheld test card',
    visualItems: [
      {
        label: 'Start',
        value: 'Cap FPS',
        note: 'A steady cap is the first portable comfort setting.',
      },
      {
        label: 'Watch',
        value: 'Heat',
        note: 'Fan noise and temperature matter on long dives.',
      },
      {
        label: 'Retest',
        value: 'Hotfix',
        note: 'Patch notes can change PC and settings advice.',
      },
    ],
    cautionTitle: 'Do not sell a fake perfect preset',
    cautionBody:
      'A handheld preset without device, build, driver, battery target, and test route is just a guess. Use this page to find a stable starting point, then adjust around your own screen and comfort level.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Does Subnautica 2 run on Steam Deck?',
        body: 'Check the current Steam compatibility status first, then test the current build yourself. This page does not promise a fixed result because Early Access patches and handheld limits can change the experience.',
      },
      {
        title: 'What settings should I lower first?',
        body: 'Start with a frame cap, then lower shadows, effects, and view distance before blaming the save or reinstalling.',
      },
      {
        title: 'Does DLSS help Steam Deck?',
        body: 'No, not in the same way it helps supported NVIDIA PCs. Hotfix 3 DLSS fixes are still important for PC settings pages, but Steam Deck uses a different hardware path.',
      },
      {
        title: 'Should I test co-op on handheld right away?',
        body: 'Test solo first. If solo play already stutters or overheats, co-op will make the diagnosis harder.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2SystemRequirements, label: 'PC Requirements' },
      {
        href: Routes.Subnautica2BlackScreenFreezing,
        label: 'Black Screen and Freezing',
      },
      {
        href: Routes.Subnautica2DlssSettingsAfterHotfix3,
        label: 'DLSS Settings After Hotfix 3',
      },
      {
        href: Routes.Subnautica2StartupCrashAfterHotfix3,
        label: 'Startup Crash Checklist',
      },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      {
        href: Routes.Subnautica2SaveFileLocation,
        label: 'Save File Backup',
      },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 2, 2026 against the official Steam page, Valve Steam Deck Verified program notes, Unknown Worlds Hotfix 3, and the Early Access roadmap. The page uses cautious settings language because handheld performance depends on device model, patch, driver, heat, and player comfort.',
    cardKicker: 'Handheld field card',
    cardBody:
      'A portable-device checklist for Steam Deck, Windows handhelds, frame caps, heat, battery, DLSS limits, and short save tests.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Handheld settings',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Best use',
    cardStatusValue: 'Test first',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Steam Deck 设置 - 掌机性能测试指南',
      description:
        'Subnautica 2 Steam Deck 和掌机设置中文指南：兼容性状态、PC 配置、分辨率、帧率上限、电量、发热、DLSS 限制和安全测试流程。',
    },
    eyebrow: 'Subnautica 2 掌机设置',
    title: 'Steam Deck 和掌机设置指南',
    description:
      'Subnautica 2 很适合躺在沙发上慢慢探索，但 PC 配置表不能直接回答每一台掌机。把这页当成测试流程，不要当成万能画质预设。',
    quickLabel: '快速结论',
    quickAnswer:
      '先看 Steam 页面和 Steam Deck 兼容性状态，再用自己的设备短测。Steam 官方页面列出的最低桌面基础是 Windows 10/11、12 GB 内存、GTX 1660 6GB 或 RX 5500 XT 6GB、DirectX 12 和 50 GB 空间。Steam Deck 和 Windows 掌机还要看共享内存、电量目标、发热、驱动和较低屏幕分辨率。先锁帧，降低画面选项，跑一个短存档测试，再相信任何“最佳设置”。',
    fieldNotesTitle: '掌机玩家先看这些',
    fieldNotes: [
      {
        title: '兼容性状态只是起点',
        body: 'Valve 的兼容性标签有参考价值，但不能替代当前抢先体验版本、补丁和你自己对掉帧的接受程度。',
      },
      {
        title: 'DLSS 不是所有掌机都能用',
        body: 'Hotfix 3 对支持的 NVIDIA 平台很重要，因为它修了 DLSS 和 Frame Generation 问题。但 Steam Deck 和不少掌机走的是另一条硬件路线。',
      },
      {
        title: '发热也是设置的一部分',
        body: '如果掌机风扇很吵、发热明显或开始卡顿，先降设置，不要马上认定游戏坏了。',
      },
    ],
    routeChecklistTitle: '第一次掌机测试',
    routeChecklist: [
      '安装前先看 Steam 兼容性文字。',
      '判断 PC 设置前，确认游戏已经更新到 Hotfix 3 之后。',
      '先开一个短新档测试，不要直接拿长时间联机档冒险。',
      '先锁帧，再慢慢提高画面选项。',
      '前 20 分钟观察耗电、风扇、发热和卡顿。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Steam Deck 或掌机怎么测试 Subnautica 2',
    routeSteps: [
      {
        title: '先看兼容性，再谈设置',
        body: '先看 Steam 页面和 Valve 兼容性状态。如果页面没有给你明确答案，就把这台设备当成需要测试的设备，而不是默认可用平台。',
      },
      {
        title: '和桌面最低配置做对照',
        body: 'Steam 最低配置是一个提醒：12 GB 内存、6 GB 显存级别 GPU、DirectX 12 和 50 GB 空间。掌机在某些游戏里可以靠低分辨率撑住，但共享内存和发热会让结果更复杂。',
      },
      {
        title: '先锁帧，再提高画质',
        body: '稳定的较低帧率，通常比跳来跳去的高帧率舒服。先保守设置，再逐项提高纹理、阴影、视距或特效。',
      },
      {
        title: '区分 GPU 功能和掌机现实',
        body: 'Hotfix 3 修了 DLSS 崩溃、DLSS 设置保存、部分版本 Frame Generation 不可用，并升级到 DLSS 4.5。这对 NVIDIA PC 有用，但不会自动变成 Steam Deck 预设。',
      },
      {
        title: '跑一个短存档循环',
        body: '新建存档，游到比较忙的区域，打开菜单，做一次建造或制作，保存、退出、再打开。这个流程比只看标题界面更能发现实际问题。',
      },
      {
        title: '联机放到第二轮测试',
        body: '不要同时判断掌机性能和多人稳定性。先单人测试稳定，再邀请朋友进来。',
      },
    ],
    tableTitle: '掌机设置表',
    tableHeaders: ['设置区域', '更稳的第一步'],
    tableRows: [
      ['帧率', '先锁帧。稳定 30 或 40 往往比不稳定的更高帧率更舒服。'],
      ['分辨率 / 缩放', '先贴近掌机屏幕目标，再提高昂贵的画质选项。'],
      ['纹理', '慢慢提高。共享内存和桌面独显的表现不一样。'],
      ['阴影和特效', '基地、生物多的区域发热或卡顿时，优先降低这些。'],
      ['联机', '单人稳定后再测。联机会增加网络和会话变量。'],
    ],
    visualTitle: '掌机测试卡',
    visualItems: [
      {
        label: '开始',
        value: '锁帧',
        note: '稳定帧率是掌机最重要的舒适设置。',
      },
      {
        label: '观察',
        value: '发热',
        note: '长时间下潜时，风扇和温度都要看。',
      },
      {
        label: '复测',
        value: '热修',
        note: '补丁会改变 PC 和画质建议。',
      },
    ],
    cautionTitle: '不要卖一个假的完美预设',
    cautionBody:
      '不说明设备型号、游戏版本、驱动、电量目标和测试路线的掌机预设，本质上只是猜。用这页找到稳定起点，再按自己的屏幕和舒适度调整。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 能在 Steam Deck 上玩吗？',
        body: '先看当前 Steam 兼容性状态，再用当前版本自己测试。这页不会承诺固定结果，因为抢先体验补丁和掌机限制都会改变体验。',
      },
      {
        title: '掌机先降低哪些设置？',
        body: '先锁帧，再降阴影、特效和视距。不要一开始就删存档或重装。',
      },
      {
        title: 'Steam Deck 能靠 DLSS 提升吗？',
        body: '不能按 NVIDIA PC 那套理解。Hotfix 3 的 DLSS 修复对 PC 设置页很重要，但 Steam Deck 是另一条硬件路线。',
      },
      {
        title: '掌机应该马上测联机吗？',
        body: '先测单人。如果单人已经卡顿或发热明显，联机只会让问题更难判断。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2SystemRequirements, label: 'PC 配置要求' },
      {
        href: Routes.Subnautica2BlackScreenFreezing,
        label: '黑屏和卡死排查',
      },
      {
        href: Routes.Subnautica2DlssSettingsAfterHotfix3,
        label: 'Hotfix 3 后 DLSS 设置',
      },
      {
        href: Routes.Subnautica2StartupCrashAfterHotfix3,
        label: '启动崩溃排查',
      },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      {
        href: Routes.Subnautica2SaveFileLocation,
        label: '存档位置和备份',
      },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 2 日核对 Steam 官方页面、Valve Steam Deck Verified 说明、Unknown Worlds Hotfix 3 和 Early Access 路线图。掌机性能受设备型号、补丁、驱动、发热和个人接受程度影响，所以本页使用保守设置建议。',
    cardKicker: '掌机测试卡',
    cardBody:
      '面向 Steam Deck、Windows 掌机、锁帧、发热、电量、DLSS 限制和短存档测试的便携设备清单。',
    cardTypeLabel: '类型',
    cardTypeValue: '掌机设置',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '建议',
    cardStatusValue: '先短测',
  },
};

function getCopy(locale: Locale): SteamDeckCopy {
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
    pathname: Routes.Subnautica2SteamDeckSettings,
  });
}

export default async function Subnautica2SteamDeckSettingsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <LocalizedResourceGuidePage
      copy={{ ...copy, publishedAt: PUBLISHED_AT, updatedAt: UPDATED_AT }}
      icon={Gamepad2Icon}
      locale={locale}
      pathname={Routes.Subnautica2SteamDeckSettings}
      sources={sharedSources}
    />
  );
}
