import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { MonitorPlayIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type SteamDownloadCopy = ResourceGuideCopy & {
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
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/',
    label: 'Official Steam Early Access page',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-3',
    label: 'Unknown Worlds Hotfix 3',
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

const copyByLocale: Record<string, SteamDownloadCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Steam Download Stuck - Update, Disk Write, and File Checks',
      description:
        'A practical Subnautica 2 Steam download stuck guide covering paused updates, disk write errors, storage, file verification, client restart, Early Access patches, and launch handoff.',
    },
    eyebrow: 'Subnautica 2 Steam download fix',
    title: 'Subnautica 2 Steam Download Stuck? Check the Install Path First',
    description:
      'A stuck Steam download is not the same as a broken game. Before you reinstall or delete folders, check whether Steam is downloading, unpacking, patching, verifying, or waiting on disk space.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Pause and resume once, restart Steam, check free space on the install drive, and wait if Steam is patching or verifying rather than downloading. If the update completes but the game will not open, switch to the not-launching page. If Steam reports missing or damaged files, use Steam file verification before reinstalling Subnautica 2.',
    fieldNotesTitle: 'What “stuck” can mean on Steam',
    fieldNotes: [
      {
        title: 'Download speed is not the whole job',
        body: 'Steam may download a small patch, then spend longer unpacking, writing, or verifying files. That can look stuck if you only watch network speed.',
      },
      {
        title: 'Early Access updates can be patch-heavy',
        body: 'Subnautica 2 can change through hotfixes. Small notes can still require local file work depending on what changed and how Steam applies the patch.',
      },
      {
        title: 'Disk problems masquerade as network problems',
        body: 'A nearly full drive, slow external drive, antivirus scan, or permission issue can make a download look frozen even when the network is fine.',
      },
    ],
    routeChecklistTitle: 'Steam update checklist',
    routeChecklist: [
      'Pause and resume the download once, then restart Steam if it stays stuck.',
      'Check free space on the Steam library drive.',
      'Watch whether Steam says downloading, patching, verifying, or disk write.',
      'Avoid force-deleting folders while Steam is still writing files.',
      'Verify files after the update if the game will not launch.',
      'Move to the not-launching page after the install completes but Play fails.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to handle a stuck Steam update',
    routeSteps: [
      {
        title: 'Check the status label, not just the bar',
        body: 'Look for the difference between downloading, patching, verifying, and disk activity. A flat network graph during disk work does not always mean the update is frozen.',
      },
      {
        title: 'Restart Steam cleanly',
        body: 'Pause the download, close Steam fully, reopen it, and let the queue settle. Do this before changing folders or reinstalling the game.',
      },
      {
        title: 'Check storage with breathing room',
        body: 'Do not aim for exactly the game size. Patching can need temporary space. If the drive is nearly full, free space or use a healthier library drive.',
      },
      {
        title: 'Avoid interrupting file writes',
        body: 'If Steam is writing or verifying, do not delete the install folder mid-process. That can turn a slow patch into a full repair.',
      },
      {
        title: 'Verify files after a suspicious finish',
        body: 'If the update completes but Subnautica 2 fails to open, use Steam verification first. It is slower than guessing, but safer than reinstalling immediately.',
      },
      {
        title: 'Switch to launch troubleshooting when Play fails',
        body: 'Once Steam says the game is installed and ready, a failed Play button is no longer a download problem. Use the not-launching checklist next.',
      },
    ],
    tableTitle: 'Steam download symptoms',
    tableHeaders: ['Symptom', 'Best next check'],
    tableRows: [
      [
        'Download stuck at 0%',
        'Restart Steam and check whether the queue is waiting or paused.',
      ],
      [
        'Network speed drops to zero',
        'Check whether Steam is patching or writing to disk.',
      ],
      [
        'Disk write error',
        'Check drive space, permissions, drive health, and library location.',
      ],
      [
        'Update restarts repeatedly',
        'Let Steam verify files, then avoid force-deleting folders.',
      ],
      ['Update done but Play fails', 'Move to the not-launching checklist.'],
      [
        'Game opens but black screen appears',
        'Use the black screen and freezing page.',
      ],
    ],
    visualTitle: 'Steam install card',
    visualItems: [
      {
        label: 'First check',
        value: 'Status',
        note: 'Downloading and patching are different.',
      },
      {
        label: 'Local risk',
        value: 'Disk',
        note: 'Space and writes can stall updates.',
      },
      {
        label: 'After update',
        value: 'Verify',
        note: 'Check files before reinstalling.',
      },
    ],
    cautionTitle: 'Do not delete the install folder mid-update',
    cautionBody:
      'Deleting folders while Steam is writing, patching, or verifying can make the repair bigger. Pause, restart Steam, check storage, and use verification before heavy-handed cleanup.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Why is Subnautica 2 download stuck on Steam?',
        body: 'It may be paused, waiting in the queue, patching files, verifying, or stuck on disk activity. Check the Steam status label before assuming a network problem.',
      },
      {
        title: 'Should I verify files after a stuck update?',
        body: 'Yes, especially if the update completes but the game will not launch. Steam has an official verification flow for this.',
      },
      {
        title: 'Is a disk write error a Subnautica 2 bug?',
        body: 'Usually no. Disk write errors are often storage, permission, antivirus, or library-drive issues. Treat the install path first.',
      },
      {
        title:
          'What if the update finishes but Subnautica 2 still will not open?',
        body: 'Move to the not-launching page. At that point the symptom is launch handoff, not download progress.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2NotLaunching,
        label: 'Not Launching Checklist',
      },
      {
        href: Routes.Subnautica2GamePassInstallError,
        label: 'Game Pass Install Error',
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
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 Tracker' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 3, 2026 against Steam support pages, the official Steam Early Access page, Unknown Worlds Hotfix 3, the Early Access roadmap, and the official gameplay trailer. Page art is original Abyss Guides artwork.',
    cardKicker: 'Steam install card',
    cardBody:
      'A Steam troubleshooting page for stuck Subnautica 2 downloads, paused updates, disk write errors, file verification, and launch handoff.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Install fix',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'First check',
    cardStatusValue: 'Steam status',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Steam 下载卡住怎么办 - 更新、磁盘写入和文件验证',
      description:
        'Subnautica 2 Steam 下载卡住中文排查：更新暂停、磁盘写入错误、存储空间、验证文件、重启 Steam、抢先体验补丁和启动交接。',
    },
    eyebrow: 'Subnautica 2 Steam 下载排查',
    title: 'Subnautica 2 Steam 下载卡住？先看安装路径',
    description:
      'Steam 下载卡住不等于游戏坏了。重装或删文件前，先确认 Steam 是在下载、解包、打补丁、验证，还是在等磁盘空间。',
    quickLabel: '快速结论',
    quickAnswer:
      '先暂停/继续一次，再重启 Steam，检查安装盘剩余空间。如果 Steam 正在打补丁或验证，不要只看下载速度为 0 就判断卡死。更新完成但游戏打不开，转到“打不开”页面；Steam 提示文件缺失或损坏，先走 Steam 验证文件流程，再考虑重装。',
    fieldNotesTitle: 'Steam 上“卡住”可能是什么意思',
    fieldNotes: [
      {
        title: '下载速度不是全部',
        body: 'Steam 可能下载很小的补丁，然后花更久时间解包、写入或验证文件。只看网络速度，很容易误判。',
      },
      {
        title: '抢先体验更新可能很吃本地文件操作',
        body: 'Subnautica 2 会通过热修变化。补丁说明看起来不长，本地仍可能需要 Steam 做不少文件处理。',
      },
      {
        title: '磁盘问题会伪装成网络问题',
        body: '空间太满、外置硬盘慢、杀毒扫描或权限问题，都可能让下载看起来冻结。',
      },
    ],
    routeChecklistTitle: 'Steam 更新检查清单',
    routeChecklist: [
      '先暂停/继续一次，如果仍卡住，再完整重启 Steam。',
      '检查 Steam 库所在硬盘的剩余空间。',
      '看清楚 Steam 显示的是 downloading、patching、verifying 还是 disk write。',
      'Steam 正在写文件时，不要强删安装目录。',
      '更新后打不开游戏时，先验证文件。',
      '安装完成但 Play 失败时，转到打不开排查。',
    ],
    contentsLabel: '目录',
    routeTitle: '怎么处理 Steam 更新卡住',
    routeSteps: [
      {
        title: '先看状态文字，不只看进度条',
        body: '下载、打补丁、验证、磁盘活动不是一回事。网络图不动但磁盘在工作，并不一定是卡死。',
      },
      {
        title: '干净重启 Steam',
        body: '暂停下载，完全关闭 Steam，再重新打开，让队列重新稳定。这个步骤要放在改文件夹或重装之前。',
      },
      {
        title: '给存储留出余量',
        body: '不要只按游戏大小留空间。打补丁可能需要临时空间。如果硬盘快满了，先清空间或换更健康的库位置。',
      },
      {
        title: '不要打断文件写入',
        body: 'Steam 正在写入或验证时，不要中途删除安装目录。这样可能把慢补丁变成大修复。',
      },
      {
        title: '可疑完成后验证文件',
        body: '如果更新完成但 Subnautica 2 打不开，先用 Steam 验证文件。它比猜测慢一点，但比直接重装稳。',
      },
      {
        title: 'Play 失败后换到启动排查',
        body: 'Steam 显示游戏已安装可用后，点 Play 失败就不再是下载问题。下一步看打不开页面。',
      },
    ],
    tableTitle: 'Steam 下载症状',
    tableHeaders: ['症状', '下一步检查'],
    tableRows: [
      ['下载卡在 0%', '重启 Steam，看队列是否暂停或等待。'],
      ['网络速度掉到 0', '看 Steam 是否正在打补丁或写入磁盘。'],
      ['Disk write error', '检查空间、权限、硬盘状态和库位置。'],
      ['更新反复重来', '让 Steam 验证文件，不要强删目录。'],
      ['更新完成但 Play 失败', '转到打不开排查。'],
      ['游戏打开后黑屏', '看黑屏和卡死页面。'],
    ],
    visualTitle: 'Steam 安装卡片',
    visualItems: [
      { label: '第一项', value: '状态', note: '下载和打补丁不是一回事。' },
      { label: '本地风险', value: '磁盘', note: '空间和写入会卡更新。' },
      { label: '更新后', value: '验证', note: '重装前先查文件。' },
    ],
    cautionTitle: '不要在更新中途删除安装目录',
    cautionBody:
      'Steam 正在写入、打补丁或验证时，强删文件夹可能让修复变得更大。先暂停、重启 Steam、查存储，并使用验证文件流程。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '为什么 Subnautica 2 Steam 下载卡住？',
        body: '可能是队列暂停、等待、打补丁、验证或磁盘活动。先看 Steam 状态文字，不要只看网络速度。',
      },
      {
        title: '卡住后要验证文件吗？',
        body: '建议。尤其是更新完成但游戏打不开时，Steam 官方验证流程比直接重装更稳。',
      },
      {
        title: 'Disk write error 是游戏 bug 吗？',
        body: '通常不是。磁盘写入错误更像存储、权限、杀毒软件或库位置问题。',
      },
      {
        title: '更新完成后还是打不开怎么办？',
        body: '转到打不开页面。那时问题已经不是下载进度，而是启动交接。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2NotLaunching, label: '打不开排查' },
      {
        href: Routes.Subnautica2GamePassInstallError,
        label: 'Game Pass 安装错误',
      },
      {
        href: Routes.Subnautica2StartupCrashAfterHotfix3,
        label: 'Hotfix 3 启动崩溃',
      },
      { href: Routes.Subnautica2BlackScreenFreezing, label: '黑屏和卡死' },
      { href: Routes.Subnautica2SystemRequirements, label: '配置要求' },
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 追踪' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 3 日核对 Steam 支持页面、Steam 抢先体验页、Unknown Worlds Hotfix 3、抢先体验路线图和官方实机预告。页面图片为 Abyss Guides 原创图。',
    cardKicker: 'Steam 安装',
    cardBody:
      '围绕 Subnautica 2 Steam 下载卡住、更新暂停、磁盘写入错误、文件验证和启动交接写的排查页。',
    cardTypeLabel: '类型',
    cardTypeValue: '安装修复',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '第一项',
    cardStatusValue: 'Steam 状态',
  },
};

function getCopy(locale: Locale): SteamDownloadCopy {
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
    pathname: Routes.Subnautica2SteamDownloadStuck,
  });
}

export default async function Subnautica2SteamDownloadStuckPage({
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
      pathname={Routes.Subnautica2SteamDownloadStuck}
      sources={sharedSources}
    />
  );
}
