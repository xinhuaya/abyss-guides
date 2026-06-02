import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { MonitorCogIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type BlackScreenCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-06-03';
const UPDATED_AT = '2026-06-03';

const sharedSources = [
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-3',
    label: 'Unknown Worlds Hotfix 3',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-2',
    label: 'Unknown Worlds Hotfix 2',
  },
  {
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/?l=english',
    label: 'Official Steam page',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap',
    label: 'Unknown Worlds Early Access roadmap',
  },
];

const copyByLocale: Record<string, BlackScreenCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Black Screen and Freezing - Stutter Fix Checklist',
      description:
        'A practical Subnautica 2 black screen, freezing, and stuttering checklist after Hotfix 3, covering patched startup crashes, DLSS, Frame Generation, files, drivers, saves, and handheld heat.',
    },
    eyebrow: 'Subnautica 2 performance fix',
    title: 'Black Screen, Freezing, and Stuttering Checklist',
    description:
      'When Subnautica 2 opens to a black screen, freezes after loading, or stutters hard near a base, the useful answer is not "reinstall everything". Start with the current patch, then isolate graphics, files, saves, and co-op one at a time.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Update to the newest Early Access build first. Hotfix 3 fixed a rare crash when starting games, DLSS crashes, DLSS settings not saving, some Frame Generation availability problems, and moved DLSS to 4.5. If you still see a black screen or freezing, restart the store client, verify files, test one launch with DLSS and Frame Generation off, update the GPU driver, try a fresh solo save, and only then decide whether the issue is your main save, co-op session, overlay, or handheld heat.',
    fieldNotesTitle: 'Sort the symptom before fixing it',
    fieldNotes: [
      {
        title: 'Black screen before the menu',
        body: 'Treat this like a launch problem. Patch, restart the client, verify files, and test a clean graphics state before touching saves.',
      },
      {
        title: 'Freeze after selecting a save',
        body: 'Do not assume the save is broken from one failed load. Try a fresh solo save and make one backup before experimenting with the main save.',
      },
      {
        title: 'Stutter while playing',
        body: 'Stutter is often a settings or heat problem, not a crash problem. Lower one expensive option at a time and watch whether it happens near bases, vehicles, or co-op activity.',
      },
    ],
    routeChecklistTitle: 'Ten-minute test order',
    routeChecklist: [
      'Update the game and restart Steam, Xbox app, or your store client.',
      'Verify files before reinstalling or deleting any save data.',
      'Disable overlays if the black screen appears before the menu.',
      'Retest with DLSS and Frame Generation off on supported PCs.',
      'Load a fresh solo save before blaming the main world or co-op.',
      'On handhelds, lower the frame cap and check heat before chasing visuals.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to troubleshoot black screen or freezing',
    routeSteps: [
      {
        title: 'Confirm the patched build',
        body: 'Hotfix 3 is the first checkpoint because Unknown Worlds named startup crashes and DLSS problems in that patch. If the client has not restarted since updating, close it fully and open it again.',
      },
      {
        title: 'Mark where it fails',
        body: 'Write down the exact point: before menu, after loading a save, after changing DLSS, during co-op, or after a long handheld session. That one line decides which fix is worth trying next.',
      },
      {
        title: 'Make a clean graphics test',
        body: 'If you can reach settings, turn off DLSS and Frame Generation once, apply, restart, and check whether the black screen or freeze changes. Do not also change resolution, window mode, and every quality slider in the same pass.',
      },
      {
        title: 'Verify files before reinstalling',
        body: 'A damaged or stale file can look like a serious crash. Use the store client file check first, then restart the PC if the client repaired anything.',
      },
      {
        title: 'Use a fresh solo save as a control',
        body: 'A fresh save tells you whether the problem is global or tied to one world. If a new save works, back up the main save before testing recovery steps.',
      },
      {
        title: 'Separate co-op and heat',
        body: 'If the problem appears only when friends join, move to multiplayer checks. If it appears after twenty warm minutes on a handheld, lower frame cap, shadows, and effects before blaming the patch.',
      },
    ],
    tableTitle: 'Symptom table',
    tableHeaders: ['What you see', 'Best next move'],
    tableRows: [
      [
        'Black screen before menu',
        'Restart client, confirm Hotfix 3, disable overlays, then verify files.',
      ],
      [
        'Freeze after loading save',
        'Try a fresh solo save and back up the main save before recovery tests.',
      ],
      [
        'Crash after DLSS change',
        'Retest with DLSS and Frame Generation off, then update GPU drivers.',
      ],
      [
        'Heavy stutter near base',
        'Lower shadows, effects, view distance, and frame cap one at a time.',
      ],
      [
        'Only happens in co-op',
        'Check version match, invite flow, platform services, and a fresh host session.',
      ],
      [
        'Handheld freezes after a while',
        'Treat heat and battery target as settings. Cap frames and retest a short loop.',
      ],
    ],
    visualTitle: 'Performance triage card',
    visualItems: [
      {
        label: 'First',
        value: 'Patch',
        note: 'Hotfix 3 changes the launch and DLSS baseline.',
      },
      {
        label: 'Then',
        value: 'Isolate',
        note: 'Change one graphics or platform variable at a time.',
      },
      {
        label: 'Before risk',
        value: 'Backup',
        note: 'Copy the save before testing recovery steps.',
      },
    ],
    cautionTitle: 'Do not turn one crash into five new problems',
    cautionBody:
      'The tempting move is to reinstall, delete saves, change every graphics option, and ask a friend to host at the same time. That makes the evidence useless. Keep each test small, write down what changed, and protect the save before touching it.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Did Hotfix 3 fix black screens in Subnautica 2?',
        body: 'The official note says Hotfix 3 fixed a rare crash when starting games and several DLSS issues. It does not name every black screen cause, so use the patch as step one, not a guaranteed fix.',
      },
      {
        title: 'Should I reinstall if Subnautica 2 freezes?',
        body: 'Not first. Restart the client, verify files, make one graphics test, and try a fresh solo save before a full reinstall.',
      },
      {
        title: 'Can DLSS cause a black screen or freeze?',
        body: 'DLSS was important enough for Unknown Worlds to fix crashes, saved settings, Frame Generation availability, and DLSS versioning in Hotfix 3. Retest DLSS carefully on the patched build.',
      },
      {
        title: 'Why does it stutter only near my base?',
        body: 'Bases, vehicles, lighting, storage, and creatures can add load. Lower expensive graphics settings one at a time and compare a quiet area against your base.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2StartupCrashAfterHotfix3,
        label: 'Startup Crash Checklist',
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
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 3, 2026 against Unknown Worlds Hotfix 3, Hotfix 2, the official Steam page, and the Early Access roadmap. The page image is original Abyss Guides artwork; the embedded video is the official Subnautica trailer.',
    cardKicker: 'Performance field card',
    cardBody:
      'A practical page for black screen, freezing, stutter, DLSS retesting, file checks, saves, co-op, and handheld heat.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Performance fix',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Patch baseline',
    cardStatusValue: 'Hotfix 3',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 黑屏、卡死、掉帧怎么办 - Hotfix 3 后排查清单',
      description:
        'Subnautica 2 黑屏、卡死和掉帧中文排查：Hotfix 3、启动崩溃、DLSS、Frame Generation、文件验证、显卡驱动、存档、联机和掌机发热。',
    },
    eyebrow: 'Subnautica 2 性能排查',
    title: '黑屏、卡死和掉帧排查清单',
    description:
      'Subnautica 2 黑屏、读档卡死或在基地附近严重掉帧时，最有用的做法不是马上重装。先确认补丁，再把图形设置、文件、存档、联机和掌机发热分开排查。',
    quickLabel: '快速结论',
    quickAnswer:
      '先更新到最新抢先体验版本。Hotfix 3 修复了启动游戏时的少见崩溃、DLSS 崩溃、DLSS 设置不正确保存、部分版本 Frame Generation 不可用，并把 DLSS 升到 4.5。如果仍然黑屏或卡死，先重启平台客户端，验证游戏文件，用关闭 DLSS 和 Frame Generation 的状态试一次，更新显卡驱动，再用全新的单人存档测试，最后再判断是不是主存档、联机会话、叠加层或掌机发热导致。',
    fieldNotesTitle: '先分清你遇到的是哪一种',
    fieldNotes: [
      {
        title: '进菜单前黑屏',
        body: '按启动问题处理。先补丁、重启客户端、验证文件，再用干净的图形设置测试，不要一上来动存档。',
      },
      {
        title: '读档后卡死',
        body: '一次失败不代表存档坏了。先开一个新的单人存档对照，处理主存档前留一份备份。',
      },
      {
        title: '游戏中掉帧或卡顿',
        body: '卡顿更像设置或发热问题，不一定是崩溃问题。一次只降一个高负载选项，看它是不是只发生在基地、载具或联机活动附近。',
      },
    ],
    routeChecklistTitle: '10 分钟测试顺序',
    routeChecklist: [
      '更新游戏，并重启 Steam、Xbox app 或对应平台客户端。',
      '先验证文件，再考虑重装或删除任何存档。',
      '如果进菜单前黑屏，先关闭常用叠加层。',
      '支持的 PC 上，用关闭 DLSS 和 Frame Generation 的状态复测。',
      '用新的单人存档测试，再判断主世界或联机是否有问题。',
      '掌机先降锁帧并观察发热，不要一开始追求画质。',
    ],
    contentsLabel: '目录',
    routeTitle: '黑屏或卡死怎么排查',
    routeSteps: [
      {
        title: '确认你在测试补丁后的版本',
        body: 'Hotfix 3 是第一个检查点，因为 Unknown Worlds 在这次补丁里点名修了启动崩溃和 DLSS 问题。如果更新后平台客户端一直没重启，先完全关闭再打开。',
      },
      {
        title: '记下它卡在哪一步',
        body: '写清楚具体位置：进菜单前、读档后、改 DLSS 后、联机时，还是掌机玩了一段时间后。这个信息会决定下一步该试哪一种修复。',
      },
      {
        title: '做一次干净的图形测试',
        body: '如果能进设置，先关闭 DLSS 和 Frame Generation，应用、重启，再看黑屏或卡死有没有变化。不要同一轮又改分辨率、窗口模式和所有画质滑块。',
      },
      {
        title: '重装前先验证文件',
        body: '损坏或过期文件看起来也像严重崩溃。先用平台客户端做文件验证；如果客户端修复了文件，再重启电脑测一次。',
      },
      {
        title: '用新单人存档做对照',
        body: '新存档可以判断问题是全局的，还是只和一个世界有关。如果新存档正常，先备份主存档，再测试恢复步骤。',
      },
      {
        title: '把联机和发热分开',
        body: '如果只有朋友加入后才出问题，转到联机排查。如果掌机玩了二十分钟变热后才卡，先降锁帧、阴影和特效，再考虑是不是补丁问题。',
      },
    ],
    tableTitle: '现象对照表',
    tableHeaders: ['你看到什么', '下一步先做什么'],
    tableRows: [
      ['进菜单前黑屏', '重启客户端，确认 Hotfix 3，关闭叠加层，然后验证文件。'],
      ['读档后卡死', '先试一个新单人存档，处理主存档前先备份。'],
      [
        '改 DLSS 后崩溃',
        '关闭 DLSS 和 Frame Generation 复测，再更新显卡驱动。',
      ],
      ['基地附近严重掉帧', '逐项降低阴影、特效、视距和锁帧，不要一次全改。'],
      ['只有联机时出问题', '检查版本一致、邀请流程、平台服务和新的主机会话。'],
      [
        '掌机玩一会儿卡死',
        '把发热和电量目标当成设置问题。先锁帧，再跑短循环测试。',
      ],
    ],
    visualTitle: '性能排查卡',
    visualItems: [
      {
        label: '第一步',
        value: '补丁',
        note: 'Hotfix 3 改变了启动和 DLSS 的判断基线。',
      },
      {
        label: '然后',
        value: '隔离变量',
        note: '一次只改一个图形或平台因素。',
      },
      {
        label: '动手前',
        value: '备份',
        note: '测试恢复步骤前先复制存档。',
      },
    ],
    cautionTitle: '别把一个崩溃变成五个新问题',
    cautionBody:
      '最容易犯的错，是同时重装、删存档、改一堆图形选项、再让朋友重新开房。这样最后什么也判断不出来。每次测试都要小，记下改了什么，碰存档前先保护原件。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Hotfix 3 修复了 Subnautica 2 黑屏吗？',
        body: '官方说明写的是 Hotfix 3 修复了启动游戏时的少见崩溃和多项 DLSS 问题。它没有覆盖所有黑屏原因，所以补丁是第一步，不是保证一定修好。',
      },
      {
        title: 'Subnautica 2 卡死要不要直接重装？',
        body: '先不要。重启客户端、验证文件、做一次图形设置测试，再用新的单人存档对照；这些都试过后再考虑完整重装。',
      },
      {
        title: 'DLSS 会导致黑屏或卡死吗？',
        body: 'DLSS 重要到被官方在 Hotfix 3 里单独修复：崩溃、设置保存、Frame Generation 可用性和 DLSS 版本都被提到。更新后要重新测试。',
      },
      {
        title: '为什么只有基地附近掉帧？',
        body: '基地、载具、灯光、储物和生物都会增加负载。一次只降一个高消耗选项，把安静区域和基地附近对比看。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      {
        href: Routes.Subnautica2StartupCrashAfterHotfix3,
        label: '启动崩溃排查',
      },
      {
        href: Routes.Subnautica2DlssSettingsAfterHotfix3,
        label: 'Hotfix 3 后 DLSS 设置',
      },
      { href: Routes.Subnautica2SystemRequirements, label: '配置要求' },
      { href: Routes.Subnautica2SteamDeckSettings, label: 'Steam Deck 设置' },
      { href: Routes.Subnautica2SaveFileLocation, label: '存档位置和备份' },
      {
        href: Routes.Subnautica2SaveRecoveryCloudSync,
        label: '存档恢复流程',
      },
      { href: Routes.Subnautica2MultiplayerNotWorking, label: '联机问题修复' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 3 日核对 Unknown Worlds Hotfix 3、Hotfix 2、Steam 官方页面和 Early Access 路线图。图片为 Abyss Guides 原创图，视频为 Subnautica 官方嵌入预告。',
    cardKicker: '性能排查卡',
    cardBody:
      '面向黑屏、卡死、掉帧、DLSS 复测、文件验证、存档、联机和掌机发热的实用排查页。',
    cardTypeLabel: '类型',
    cardTypeValue: '性能修复',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '补丁基线',
    cardStatusValue: 'Hotfix 3',
  },
};

function getCopy(locale: Locale): BlackScreenCopy {
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
    pathname: Routes.Subnautica2BlackScreenFreezing,
  });
}

export default async function BlackScreenFreezingPage({
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
      pathname={Routes.Subnautica2BlackScreenFreezing}
      sources={sharedSources}
    />
  );
}
