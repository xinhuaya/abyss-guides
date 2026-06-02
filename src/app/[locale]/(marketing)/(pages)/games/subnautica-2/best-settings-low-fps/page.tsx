import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { SlidersHorizontalIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type SettingsCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-06-03';
const UPDATED_AT = '2026-06-03';

const sharedSources = [
  {
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/?l=english',
    label: 'Official Steam page',
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

const copyByLocale: Record<string, SettingsCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Best Settings for Low FPS - Stutter Fix Order',
      description:
        'A practical Subnautica 2 best settings guide for low FPS, stutter, frame caps, DLSS, Frame Generation, handheld heat, co-op load, and Early Access performance checks.',
    },
    eyebrow: 'Subnautica 2 performance settings',
    title: 'Best Settings for Low FPS and Stutter',
    description:
      'There is no magic preset that fits every Subnautica 2 PC. The useful version is a test order: lock the frame rate, lower the expensive options first, then retest DLSS and Frame Generation only after the current patch is installed.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Update the game, restart the store client, and confirm your PC is at least near the official Steam requirements before changing graphics. For low FPS, set a frame cap first, lower shadows, effects, post-processing, and view distance before textures, then test DLSS or Frame Generation one at a time on supported NVIDIA hardware. If the problem appears only near a base, during co-op, or after a handheld heats up, treat that as a separate load problem instead of copying someone else’s preset.',
    fieldNotesTitle: 'What changes first',
    fieldNotes: [
      {
        title: 'Frame cap before visual chasing',
        body: 'A stable 40 or 60 FPS target usually feels better than a higher number that drops every time a base, vehicle, or creature enters the scene.',
      },
      {
        title: 'DLSS changed after Hotfix 3',
        body: 'Unknown Worlds listed DLSS crashes, saved DLSS settings, Frame Generation availability, and a DLSS 4.5 upgrade in Hotfix 3. Test the patched build before trusting older advice.',
      },
      {
        title: 'Busy areas are their own benchmark',
        body: 'A quiet swim and a crowded base are not the same workload. Use both when testing settings, otherwise you may tune the game for the wrong moment.',
      },
    ],
    routeChecklistTitle: 'Five-minute settings pass',
    routeChecklist: [
      'Update Subnautica 2 and restart Steam or the Xbox app before testing.',
      'Pick a frame cap first: 30, 40, or 60 FPS depending on device and heat.',
      'Lower shadows, effects, post-processing, and view distance before textures.',
      'Test DLSS and Frame Generation separately on supported NVIDIA PCs.',
      'Compare a quiet biome, a vehicle route, and your busiest base.',
      'Keep one written preset so you can undo bad experiments quickly.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to tune Subnautica 2 without guessing',
    routeSteps: [
      {
        title: 'Start from the official hardware baseline',
        body: 'The Steam page is the first reality check. If a PC is below the listed CPU, GPU, RAM, DirectX 12, or storage expectations, aggressive graphics settings will not turn it into a recommended-spec machine.',
      },
      {
        title: 'Set the frame target',
        body: 'Choose the number you can hold in a real play area. On desktop, 60 FPS is a reasonable first target. On handhelds or weaker laptops, 30 or 40 FPS can be the better call because heat and battery drain matter.',
      },
      {
        title: 'Lower the settings that hurt motion first',
        body: 'Shadows, effects, post-processing, and view distance tend to show up during motion, wide views, particles, and base lighting. Lower them one step at a time and retest the same short route.',
      },
      {
        title: 'Leave textures until you see memory pressure',
        body: 'Textures affect sharpness, but lowering them too early can make the game look worse without fixing the real stutter. Treat textures as a VRAM or shared-memory fix, not the first slider to touch.',
      },
      {
        title: 'Retest DLSS after the patch',
        body: 'If your GPU supports DLSS, test Quality or Balanced after Hotfix 3, then restart and check whether the setting sticks. Turn Frame Generation on only as its own test, not during a batch of five other changes.',
      },
      {
        title: 'Check co-op and base load separately',
        body: 'If FPS is fine solo but poor when hosting friends, write that down. If it is fine in open water but dips near storage, lights, and vehicles, you are tuning base load, not the whole game.',
      },
    ],
    tableTitle: 'Settings order',
    tableHeaders: ['Setting or test', 'What to do first'],
    tableRows: [
      [
        'Frame cap',
        'Start with 60 FPS on desktop, 40 or 30 FPS on handhelds and weaker laptops.',
      ],
      [
        'Shadows',
        'Lower early if bases, caves, or artificial lights cause dips.',
      ],
      [
        'Effects',
        'Lower if particles, bubbles, storms, or creature-heavy scenes stutter.',
      ],
      [
        'Post-processing',
        'Drop one step if motion feels smeary or camera turns spike frame time.',
      ],
      [
        'View distance',
        'Lower for open water dips, then retest the same travel route.',
      ],
      [
        'Textures',
        'Adjust later if VRAM or shared memory looks like the limit.',
      ],
      [
        'DLSS and Frame Generation',
        'Use only on supported NVIDIA hardware and test after Hotfix 3.',
      ],
    ],
    visualTitle: 'Preset field card',
    visualItems: [
      {
        label: 'First target',
        value: 'Stable FPS',
        note: 'Choose a cap the device can hold while moving.',
      },
      {
        label: 'First sliders',
        value: 'Light load',
        note: 'Shadows, effects, post-processing, and view distance.',
      },
      {
        label: 'Retest zone',
        value: 'Base loop',
        note: 'Compare quiet water against your busiest base.',
      },
    ],
    cautionTitle: 'Do not copy a universal “best preset”',
    cautionBody:
      'Two players can have the same average FPS and completely different pain points. One may be GPU-limited in open water, another may dip only near a base, and a handheld may be heat-limited after twenty minutes. Copy the order, not the exact numbers.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'What settings should I lower first for low FPS?',
        body: 'Start with a frame cap, then lower shadows, effects, post-processing, and view distance. Save textures for VRAM or shared-memory problems.',
      },
      {
        title: 'Should I use DLSS in Subnautica 2?',
        body: 'Use DLSS only if your GPU supports it, and retest after Hotfix 3 because the official notes changed the DLSS baseline. Do not test DLSS and Frame Generation at the same time as five other settings.',
      },
      {
        title: 'Is Subnautica 2 low FPS a bug?',
        body: 'Sometimes, but not always. Early Access performance can change, yet bases, co-op hosting, heat, overlays, drivers, and below-spec hardware can all look like a bug at first glance.',
      },
      {
        title: 'Should Steam Deck use the same settings as a desktop PC?',
        body: 'No. A handheld needs a frame cap, heat control, and battery-aware settings. Start with the Steam Deck page if that is your main device.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2BlackScreenFreezing,
        label: 'Black Screen and Freezing',
      },
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
        href: Routes.Subnautica2StartupCrashAfterHotfix3,
        label: 'Startup Crash Checklist',
      },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 3, 2026 against the official Steam page, Unknown Worlds Hotfix 3, and the Early Access roadmap. Page art is original Abyss Guides artwork; the video embed is the official Subnautica trailer.',
    cardKicker: 'Settings field card',
    cardBody:
      'A low-FPS tuning page for frame caps, shadows, effects, DLSS, Frame Generation, handheld heat, co-op sessions, and base-heavy saves.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Performance settings',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Patch baseline',
    cardStatusValue: 'Hotfix 3',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 低 FPS 和最佳设置 - 掉帧卡顿优化顺序',
      description:
        'Subnautica 2 低 FPS、掉帧、卡顿和最佳画质设置中文攻略：锁帧、阴影、特效、后处理、视距、DLSS、Frame Generation、掌机发热、联机负载和抢先体验性能排查。',
    },
    eyebrow: 'Subnautica 2 性能设置',
    title: '低 FPS、掉帧和卡顿的最佳设置顺序',
    description:
      'Subnautica 2 没有适合所有电脑的万能预设。更可靠的做法是按顺序测试：先锁帧，再降真正吃性能的选项，最后在当前补丁下单独复测 DLSS 和 Frame Generation。',
    quickLabel: '快速结论',
    quickAnswer:
      '先更新游戏，重启 Steam 或 Xbox app，并确认你的电脑至少接近 Steam 官方配置要求。低 FPS 先设置锁帧，再优先降低阴影、特效、后处理和视距，纹理不要一开始就乱降。支持的 NVIDIA 显卡可以在 Hotfix 3 后单独测试 DLSS 或 Frame Generation。问题只在基地、联机或掌机发热后出现时，要按对应场景排查，不要直接照搬别人的预设。',
    fieldNotesTitle: '先改哪些东西',
    fieldNotes: [
      {
        title: '先锁帧，再追画质',
        body: '能稳定维持的 40 或 60 FPS，通常比一会儿很高、一会儿突然掉下来的帧率更舒服。',
      },
      {
        title: 'DLSS 建议要按 Hotfix 3 后重新看',
        body: 'Unknown Worlds 在 Hotfix 3 里提到了 DLSS 崩溃、DLSS 设置保存、Frame Generation 可用性和 DLSS 4.5。旧帖子不一定还适用。',
      },
      {
        title: '基地附近要单独测',
        body: '安静水域和堆满储物、灯光、载具的基地不是同一种负载。只在空旷区域测试，很容易调错方向。',
      },
    ],
    routeChecklistTitle: '5 分钟设置顺序',
    routeChecklist: [
      '先更新 Subnautica 2，并重启 Steam 或 Xbox app。',
      '先选锁帧目标：30、40 或 60 FPS，按设备和发热情况来。',
      '先降阴影、特效、后处理和视距，再考虑纹理。',
      '支持的 NVIDIA PC 上，DLSS 和 Frame Generation 分开测试。',
      '分别对比安静生态区、载具路线和最卡的基地。',
      '保留一个能用的预设，方便把失败的尝试撤回来。',
    ],
    contentsLabel: '目录',
    routeTitle: '不靠猜的设置方法',
    routeSteps: [
      {
        title: '先看官方硬件底线',
        body: 'Steam 官方页面是第一道现实检查。如果 CPU、显卡、内存、DirectX 12 或硬盘空间低于要求，单靠画质设置很难把体验调成推荐配置水平。',
      },
      {
        title: '先确定帧率目标',
        body: '选一个真实游玩时能稳住的数字。桌面 PC 可以先试 60 FPS；掌机或较弱笔记本更适合从 30 或 40 FPS 开始，因为发热和电量同样重要。',
      },
      {
        title: '优先降影响运动流畅度的选项',
        body: '阴影、特效、后处理和视距更容易在移动、广阔视野、粒子和基地灯光里影响帧时间。每次只降一项，并用同一小段路线复测。',
      },
      {
        title: '纹理不要一上来就降',
        body: '纹理会影响清晰度，但太早降低不一定能解决真正的卡顿。只有当显存或共享内存明显吃紧时，再把纹理当成重点。',
      },
      {
        title: 'Hotfix 3 后再测 DLSS',
        body: '如果显卡支持 DLSS，可以在 Hotfix 3 后测试 Quality 或 Balanced，并重启确认设置是否保存。Frame Generation 要单独开关测试，不要和一堆画质选项混在一起改。',
      },
      {
        title: '联机和基地负载分开看',
        body: '单人正常、开房后才掉帧，就按联机负载排查。空旷区域正常、基地附近掉帧，就按基地灯光、储物、载具和生物负载来调。',
      },
    ],
    tableTitle: '设置顺序表',
    tableHeaders: ['设置或测试项', '先怎么做'],
    tableRows: [
      ['锁帧', '桌面 PC 先试 60 FPS；掌机和弱一些的笔记本先试 40 或 30 FPS。'],
      ['阴影', '基地、洞穴或人工灯光附近掉帧时，优先降低。'],
      ['特效', '气泡、粒子、风暴或生物多的场景卡顿时，先降一档。'],
      ['后处理', '转视角时拖影、卡顿或帧时间跳动明显，可以降一档。'],
      ['视距', '开放水域掉帧时降低，再用同一路线复测。'],
      ['纹理', '后面再动，主要用于显存或共享内存压力。'],
      [
        'DLSS 和 Frame Generation',
        '只在支持的 NVIDIA 硬件上用，并在 Hotfix 3 后单独测试。',
      ],
    ],
    visualTitle: '设置记录卡',
    visualItems: [
      {
        label: '第一目标',
        value: '稳定帧率',
        note: '先选设备能稳住的锁帧。',
      },
      {
        label: '先改滑块',
        value: '轻负载',
        note: '阴影、特效、后处理、视距。',
      },
      {
        label: '复测地点',
        value: '基地路线',
        note: '用安静水域对比最卡基地。',
      },
    ],
    cautionTitle: '不要照搬“万能最佳设置”',
    cautionBody:
      '两个玩家平均 FPS 一样，卡顿原因也可能完全不同。有人是开放水域吃 GPU，有人只在基地附近掉帧，掌机还可能是二十分钟后发热降频。可以参考测试顺序，不要迷信完全相同的数值。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 低 FPS 先降什么？',
        body: '先锁帧，再降阴影、特效、后处理和视距。纹理留到显存或共享内存明显不够时再动。',
      },
      {
        title: 'Subnautica 2 要不要开 DLSS？',
        body: '显卡支持才开，并且建议在 Hotfix 3 后重新测试。不要把 DLSS、Frame Generation 和五个画质选项同时改，否则很难判断到底是哪一项影响了体验。',
      },
      {
        title: '低 FPS 是游戏 bug 吗？',
        body: '可能是，也可能不是。抢先体验阶段性能会变，但基地负载、联机开房、发热、覆盖层、驱动和低于配置要求的硬件都会造成类似表现。',
      },
      {
        title: 'Steam Deck 能照搬桌面 PC 设置吗？',
        body: '不建议。掌机更需要锁帧、控热和电量目标。主要用掌机玩的话，先看 Steam Deck 设置页。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      {
        href: Routes.Subnautica2BlackScreenFreezing,
        label: '黑屏、卡死和掉帧排查',
      },
      {
        href: Routes.Subnautica2DlssSettingsAfterHotfix3,
        label: 'Hotfix 3 后 DLSS 设置',
      },
      { href: Routes.Subnautica2SystemRequirements, label: '配置要求' },
      { href: Routes.Subnautica2SteamDeckSettings, label: 'Steam Deck 设置' },
      {
        href: Routes.Subnautica2StartupCrashAfterHotfix3,
        label: '启动崩溃排查',
      },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 3 日核对 Steam 官方页面、Unknown Worlds Hotfix 3 和 Early Access 路线图。页面图片为 Abyss Guides 原创图；视频为 Subnautica 官方预告嵌入。',
    cardKicker: '设置记录卡',
    cardBody:
      '面向低 FPS、掉帧、锁帧、阴影、特效、DLSS、Frame Generation、掌机发热、联机和基地负载的设置页。',
    cardTypeLabel: '类型',
    cardTypeValue: '性能设置',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '补丁基线',
    cardStatusValue: 'Hotfix 3',
  },
};

function getCopy(locale: Locale): SettingsCopy {
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
    pathname: Routes.Subnautica2BestSettingsLowFps,
  });
}

export default async function Subnautica2BestSettingsLowFpsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <LocalizedResourceGuidePage
      copy={{ ...copy, publishedAt: PUBLISHED_AT, updatedAt: UPDATED_AT }}
      icon={SlidersHorizontalIcon}
      locale={locale}
      pathname={Routes.Subnautica2BestSettingsLowFps}
      sources={sharedSources}
    />
  );
}
