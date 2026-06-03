import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { AlertTriangleIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type StuckLoadingSaveCopy = ResourceGuideCopy & {
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
    href: 'https://www.xbox.com/en-US/games/store/subnautica-2/9pjpcb188svg',
    label: 'Official Xbox store listing',
  },
  {
    href: 'https://www.youtube.com/watch?v=6t2nDHldoSk',
    label: 'Official Subnautica 2 gameplay trailer',
  },
];

const copyByLocale: Record<string, StuckLoadingSaveCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Stuck Loading Save - Safe Fixes Before Deleting Files',
      description:
        'A safe Subnautica 2 stuck loading save guide covering cloud sync, co-op saves, file verification, mods, backups, Hotfix 3, and when to restore a save.',
    },
    eyebrow: 'Subnautica 2 loading save fix',
    title: 'Subnautica 2 Stuck Loading a Save? Do Not Delete First',
    description:
      'An endless loading screen feels like the save is dead, but it often is not that simple. Treat the save like something worth protecting: check sync, files, patch state, mods, and co-op state before deleting anything.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Stop force-closing the game over and over. Restart the platform client, check cloud or Xbox service status, verify files on Steam, remove recent mods, and try a short solo load before touching the save folder. If you need to experiment, copy the save first and work on the copy. Use recovery only after you know whether the problem is the save, the platform, the patch, or a modded setup.',
    fieldNotesTitle: 'What a stuck save can mean',
    fieldNotes: [
      {
        title: 'Loading can be waiting on the platform',
        body: 'Cloud sync, store services, or a half-finished update can look like a save problem. Check the platform path before you blame the file.',
      },
      {
        title: 'Co-op saves have more context',
        body: 'A world used by friends can depend on host state, rejoin position, vehicles, and patch behavior. Test solo and co-op separately.',
      },
      {
        title: 'Mods change the first question',
        body: 'If the save last worked before a mod, remove the modded setup from the first test. Do not treat a modded load failure as a normal save failure.',
      },
    ],
    routeChecklistTitle: 'Safe loading checklist',
    routeChecklist: [
      'Close the game and platform client fully, then reopen them.',
      'Check Xbox status if the save relies on Xbox app, Game Pass, or cloud services.',
      'Verify files on Steam before editing save folders.',
      'Disable recent mods and test a clean launch path.',
      'Try loading a fresh solo save to separate game launch from save load.',
      'Copy the save folder before restoring, deleting, or moving files.',
      'Write down whether the stuck load happens solo, co-op, or only after a patch.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to troubleshoot without risking the save',
    routeSteps: [
      {
        title: 'Separate game launch from save loading',
        body: 'If Subnautica 2 does not open at all, use the not-launching checklist. If the menu opens and only one save loops forever, stay here.',
      },
      {
        title: 'Let sync finish once',
        body: 'Do not interrupt the same cloud sync prompt five times. Restart the client, wait for sync or service state to settle, then test the save once.',
      },
      {
        title: 'Verify files before touching the save',
        body: 'A damaged or stale game file can block loading. Steam verification is safer than deleting save data, and it gives you a cleaner baseline.',
      },
      {
        title: 'Test a fresh save',
        body: 'Create or load a small fresh save. If that loads, the problem is more likely tied to one world. If it also hangs, look at install, files, drivers, or platform services.',
      },
      {
        title: 'Remove recent mods from the test',
        body: 'A save that loads with clean files and fails with a modded setup is not a mystery. Keep the clean test separate from the modded one.',
      },
      {
        title: 'Back up before recovery',
        body: 'Before restoring, deleting, or moving save files, copy the folder. Recovery work without a backup turns one bad load into a worse afternoon.',
      },
    ],
    tableTitle: 'Stuck loading symptoms',
    tableHeaders: ['Symptom', 'Best next check'],
    tableRows: [
      [
        'Menu opens but one save loops',
        'Copy the save, then test a fresh save and clean files.',
      ],
      [
        'Every save hangs',
        'Verify files, check platform services, and inspect recent updates.',
      ],
      [
        'Only co-op save hangs',
        'Test solo, then check host state and recent rejoin behavior.',
      ],
      ['Started after mods', 'Disable the modded setup and test clean first.'],
      [
        'Started after cloud sync prompt',
        'Let sync settle and check Xbox or platform status.',
      ],
      [
        'Crash happens before menu',
        'Use the not-launching or startup crash checklist instead.',
      ],
    ],
    visualTitle: 'Save safety card',
    visualItems: [
      {
        label: 'First move',
        value: 'Copy',
        note: 'Back up before editing save files.',
      },
      {
        label: 'Clean test',
        value: 'Fresh save',
        note: 'Separate game load from one bad world.',
      },
      {
        label: 'Risk',
        value: 'Mods',
        note: 'Test clean files before blaming the game.',
      },
    ],
    cautionTitle: 'Do not delete the save to test a theory',
    cautionBody:
      'Deleting a save is not troubleshooting. Copy it first, verify game files, check platform status, and test a fresh save. If the save is truly damaged, you still want the original file available for recovery attempts.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Is my Subnautica 2 save corrupted if it loads forever?',
        body: 'Maybe, but do not assume that first. Platform sync, game files, mods, and co-op state can all look like a corrupted save.',
      },
      {
        title: 'Should I delete the save folder?',
        body: 'No. Copy the save folder first. Only move or restore files after you know what you are testing.',
      },
      {
        title: 'Can mods cause a save to hang?',
        body: 'Yes. If the issue started after mods, test with a clean setup before calling the save broken.',
      },
      {
        title: 'What if every save gets stuck?',
        body: 'That points away from a single save. Verify files, check platform services, confirm the current patch, and use the not-launching or black-screen pages if the symptom changes.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2SaveFileLocation, label: 'Save File Location' },
      {
        href: Routes.Subnautica2SaveRecoveryCloudSync,
        label: 'Save Recovery and Cloud Sync',
      },
      {
        href: Routes.Subnautica2NotLaunching,
        label: 'Not Launching Checklist',
      },
      { href: Routes.Subnautica2Mods, label: 'Mods Safety Setup' },
      {
        href: Routes.Subnautica2CoopRejoinAfterHotfix3,
        label: 'Co-op Rejoin Checklist',
      },
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 Tracker' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 3, 2026 against Steam file verification help, Xbox status, Unknown Worlds Hotfix 3, official Steam and Xbox pages, and the official gameplay trailer. Page art is original Abyss Guides artwork.',
    cardKicker: 'Save field card',
    cardBody:
      'A save-safe troubleshooting page for endless loading, cloud sync waits, co-op saves, file verification, mods, and recovery planning.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Save fix',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'First move',
    cardStatusValue: 'Back up',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 存档一直加载怎么办 - 删除文件前的安全排查',
      description:
        'Subnautica 2 存档一直加载中文排查：云同步、联机存档、验证文件、模组、备份、Hotfix 3，以及什么时候恢复存档。',
    },
    eyebrow: 'Subnautica 2 存档加载排查',
    title: 'Subnautica 2 存档一直加载？先别删文件',
    description:
      '无限加载很容易让人以为存档死了，但原因不一定在存档本身。先把存档当成值得保护的东西：查同步、文件、补丁、模组和联机状态，再决定要不要恢复。',
    quickLabel: '快速结论',
    quickAnswer:
      '不要反复强退游戏。先重启平台客户端，检查云同步或 Xbox 服务状态，Steam 版本先验证文件，移除最近装的模组，并测试一个新的单人存档。需要尝试修复时，先复制存档文件夹，只在副本上操作。先判断问题来自存档、平台、补丁还是模组环境。',
    fieldNotesTitle: '存档卡加载可能代表什么',
    fieldNotes: [
      {
        title: '加载可能是在等平台',
        body: '云同步、商店服务或未完成更新，都可能看起来像存档问题。先查平台路径。',
      },
      {
        title: '联机存档上下文更多',
        body: '朋友一起玩的世界可能受到房主状态、重连位置、载具和补丁行为影响。单人和联机要分开测试。',
      },
      {
        title: '装过模组后，第一问题会变',
        body: '如果存档上次正常是在装模组之前，那第一次测试就应该用干净文件。不要把模组加载失败当成普通存档失败。',
      },
    ],
    routeChecklistTitle: '安全加载检查清单',
    routeChecklist: [
      '完全关闭游戏和平台客户端，再重新打开。',
      '使用 Xbox app、Game Pass 或云服务时，先看 Xbox 状态。',
      '编辑存档文件夹前，Steam 版本先验证文件。',
      '禁用最近装的模组，测试干净启动路径。',
      '试着加载一个新的单人存档，区分游戏加载和单个世界加载。',
      '恢复、删除或移动文件前，先复制存档文件夹。',
      '记录卡加载发生在单人、联机，还是补丁之后。',
    ],
    contentsLabel: '目录',
    routeTitle: '怎么排查才不容易弄坏存档',
    routeSteps: [
      {
        title: '先区分游戏启动和存档加载',
        body: '如果 Subnautica 2 完全打不开，看“打不开”页面。如果菜单能进，只是某个存档一直转圈，继续看这里。',
      },
      {
        title: '让同步完整跑一次',
        body: '不要连续打断同一个云同步提示。重启客户端，等同步或服务状态稳定，再测试一次存档。',
      },
      {
        title: '动存档前先验证文件',
        body: '损坏或过旧的游戏文件也会影响加载。Steam 验证文件比直接删除存档更安全。',
      },
      {
        title: '测试一个新存档',
        body: '创建或加载一个很短的新存档。如果新存档能进，问题更可能和某个世界有关；如果也卡住，就看安装、文件、驱动或平台服务。',
      },
      {
        title: '把最近模组从测试里拿掉',
        body: '干净文件能加载、模组环境不能加载，就不是谜题了。先保持干净测试和模组测试分开。',
      },
      {
        title: '恢复前先备份',
        body: '恢复、删除、移动存档前先复制文件夹。没有备份的修复，很容易把一次坏加载变成更麻烦的问题。',
      },
    ],
    tableTitle: '卡加载症状',
    tableHeaders: ['症状', '下一步检查'],
    tableRows: [
      ['菜单能进，但一个存档一直加载', '复制存档，再测试新存档和干净文件。'],
      ['所有存档都卡住', '验证文件、检查平台服务和最近更新。'],
      ['只有联机存档卡住', '先测单人，再看房主状态和重连问题。'],
      ['装模组后开始卡', '先禁用模组环境，测试干净状态。'],
      ['云同步提示后出问题', '等同步稳定，并检查 Xbox 或平台状态。'],
      ['进菜单前就崩溃', '改看打不开或启动崩溃页面。'],
    ],
    visualTitle: '存档安全卡片',
    visualItems: [
      { label: '第一步', value: '复制', note: '动文件前先备份。' },
      {
        label: '干净测试',
        value: '新存档',
        note: '区分游戏加载和单个世界问题。',
      },
      { label: '风险项', value: '模组', note: '先用干净文件测试。' },
    ],
    cautionTitle: '不要为了测试猜想直接删除存档',
    cautionBody:
      '删除存档不是排查。先复制，验证游戏文件，检查平台状态，再测试新存档。如果存档真的损坏，原文件也可能用于后续恢复。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 存档一直加载就是坏档吗？',
        body: '不一定。平台同步、游戏文件、模组和联机状态都可能表现成坏档。',
      },
      {
        title: '我应该删除存档文件夹吗？',
        body: '不要直接删。先复制存档文件夹，只在知道自己测试什么的时候再移动或恢复文件。',
      },
      {
        title: '模组会导致存档卡加载吗？',
        body: '会。如果问题出现在装模组之后，先用干净环境测试。',
      },
      {
        title: '所有存档都卡住怎么办？',
        body: '这就不像单个存档问题。先验证文件、查平台服务、确认当前补丁。如果症状变成打不开或黑屏，再换对应页面。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2SaveFileLocation, label: '存档位置' },
      {
        href: Routes.Subnautica2SaveRecoveryCloudSync,
        label: '存档恢复和云同步',
      },
      { href: Routes.Subnautica2NotLaunching, label: '打不开排查' },
      { href: Routes.Subnautica2Mods, label: 'Mods 安全设置' },
      { href: Routes.Subnautica2CoopRejoinAfterHotfix3, label: '联机重连排查' },
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 追踪' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 3 日核对 Steam 文件验证说明、Xbox 状态、Unknown Worlds Hotfix 3、Steam 和 Xbox 官方页面，以及官方实机预告。页面图片为 Abyss Guides 原创图。',
    cardKicker: '存档排查',
    cardBody:
      '围绕无限加载、云同步等待、联机存档、验证文件、模组和恢复计划写的安全排查页。',
    cardTypeLabel: '类型',
    cardTypeValue: '存档修复',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '第一步',
    cardStatusValue: '先备份',
  },
};

function getCopy(locale: Locale): StuckLoadingSaveCopy {
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
    pathname: Routes.Subnautica2StuckLoadingSave,
  });
}

export default async function Subnautica2StuckLoadingSavePage({
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
      pathname={Routes.Subnautica2StuckLoadingSave}
      sources={sharedSources}
    />
  );
}
