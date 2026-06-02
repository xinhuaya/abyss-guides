import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { SaveIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type SaveFileCopy = ResourceGuideCopy & {
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
    href: 'https://steamdb.info/app/1962700/ufs/',
    label: 'SteamDB Cloud Saves data',
  },
  {
    href: 'https://primagames.com/tips/subnautica-2-save-file-location',
    label: 'Prima Games save location note',
  },
  {
    href: 'https://www.xbox.com/en-US/games/store/subnautica-2/9pjpcb188svg',
    label: 'Official Xbox store listing',
  },
];

const copyByLocale: Record<string, SaveFileCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Save File Location - Steam Backup and Cloud Notes',
      description:
        'Where to find Subnautica 2 save files on Steam, how to make a safe backup before patches, what .sav and .bak files mean, and why Xbox/Game Pass saves need extra caution.',
    },
    eyebrow: 'Subnautica 2 save backup',
    title: 'Save File Location and Backup Guide',
    description:
      'Before you test a hotfix, move a co-op save, or poke around after a crash, make one boring backup. It is the least exciting guide topic on the site, and probably the one you will be happiest you read before something goes sideways.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'For Steam on Windows, current public save-location notes point to `%LOCALAPPDATA%\\Subnautica2\\Saved\\SaveGames`, with save folders containing `.sav` and `.bak` files. SteamDB also lists Subnautica 2 cloud-save data under the same LocalAppData path. Copy the whole save folder, not just one file. For Xbox app or PC Game Pass installs, be more careful: Microsoft Store saves can sit inside protected package storage and sync through the Xbox account, so use in-game saves and cloud sync first instead of forcing manual edits.',
    fieldNotesTitle: 'What to know before opening the folder',
    fieldNotes: [
      {
        title: 'Back up the whole slot',
        body: 'A save slot can have more than one useful file. Copy the full folder so the game keeps the pieces together.',
      },
      {
        title: 'Cloud sync is not a replacement for a local backup',
        body: 'Cloud saves are helpful until the wrong state syncs everywhere. Make a local copy before testing risky fixes, mods, or file edits.',
      },
      {
        title: 'Game Pass is a different case',
        body: 'Do not assume the Steam folder applies to the Xbox app. Package folders can be locked down, renamed, or synced differently.',
      },
    ],
    routeChecklistTitle: 'Safe backup routine',
    routeChecklist: [
      'Close Subnautica 2 before copying save files.',
      'Open `%LOCALAPPDATA%\\Subnautica2\\Saved\\SaveGames` on Steam Windows installs.',
      'Copy the entire save slot folder to a dated backup folder.',
      'Do not overwrite cloud-synced files while the game or launcher is open.',
      'Test the backup only after keeping an untouched original copy.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to back up Subnautica 2 saves',
    routeSteps: [
      {
        title: 'Close the game first',
        body: 'A save copy made while the game is still writing can be useless. Close the game, wait a moment, and only then open the save folder.',
      },
      {
        title: 'Use the LocalAppData shortcut',
        body: 'Press Windows + R, paste `%LOCALAPPDATA%\\Subnautica2\\Saved\\SaveGames`, and open it. If the folder is missing, launch the game once and create a save first.',
      },
      {
        title: 'Copy the folder, not a random file',
        body: 'Keep `.sav` and `.bak` files together. Put the copy somewhere obvious, like a desktop folder named with the date and the patch you were testing.',
      },
      {
        title: 'Respect cloud sync timing',
        body: 'If Steam Cloud or another sync system is active, give it time to finish before and after the backup. Do not replace files while the client is syncing.',
      },
      {
        title: 'Treat Xbox and Game Pass saves gently',
        body: 'For Xbox app installs, manual paths are less friendly. Use normal save slots and account cloud sync first, and avoid editing protected package folders unless you already know what you are doing.',
      },
    ],
    tableTitle: 'Save and backup table',
    tableHeaders: ['Case', 'What to do'],
    tableRows: [
      [
        'Steam on Windows',
        'Check `%LOCALAPPDATA%\\Subnautica2\\Saved\\SaveGames` and copy the whole save folder.',
      ],
      [
        'Before a hotfix test',
        'Make a dated folder outside the game directory so you know which build it came from.',
      ],
      [
        '.sav and .bak files',
        'Keep them together. The backup file is not a reason to copy only one file.',
      ],
      [
        'Steam Cloud enabled',
        'Let sync finish before replacing anything, and keep a local untouched copy.',
      ],
      [
        'Xbox app / Game Pass',
        'Do not force the Steam path. Use platform saves and cloud sync unless you have a specific recovery reason.',
      ],
    ],
    visualTitle: 'Backup notes card',
    visualItems: [
      {
        label: 'Steam path',
        value: 'LocalAppData',
        note: 'Current public notes point to the Subnautica2 Saved folder.',
      },
      {
        label: 'Copy',
        value: 'Folder',
        note: 'Do not split the save slot into loose files.',
      },
      {
        label: 'Cloud',
        value: 'Wait',
        note: 'Let sync finish before replacing or restoring files.',
      },
    ],
    cautionTitle: 'Do not turn backup advice into risky recovery advice',
    cautionBody:
      'This page is for finding and backing up saves, not for promising save repair. If a file is already broken, copying it can preserve the problem. Keep one untouched backup before trying anything clever.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Where are Subnautica 2 Steam saves on Windows?',
        body: 'Current public notes point to `%LOCALAPPDATA%\\Subnautica2\\Saved\\SaveGames` for Steam Windows saves.',
      },
      {
        title: 'Should I copy the .sav file or the whole folder?',
        body: 'Copy the whole save folder. It is safer than guessing which single file matters.',
      },
      {
        title: 'Does Steam Cloud mean I do not need a backup?',
        body: 'No. Cloud sync helps with convenience, but a local dated backup is safer before hotfix testing or file changes.',
      },
      {
        title: 'Is the Game Pass save location the same as Steam?',
        body: 'Do not assume that. Xbox app and Microsoft Store saves can use protected package storage and cloud sync, so manual recovery needs more caution.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2StartupCrashAfterHotfix3,
        label: 'Startup Crash Checklist',
      },
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 Changes' },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      { href: Routes.Subnautica2Crossplay, label: 'Crossplay Guide' },
      {
        href: Routes.Subnautica2CoopRejoinAfterHotfix3,
        label: 'Co-op Rejoin Checklist',
      },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 2, 2026 against the official Steam page, SteamDB cloud-save metadata, Prima Games save-location notes, and the Xbox store listing. Steam local-path advice is specific to Windows Steam installs; Xbox and Game Pass saves should be treated as platform-managed unless you have a clear recovery reason.',
    cardKicker: 'Save field card',
    cardBody:
      'A practical backup page for Steam save folders, .sav and .bak files, Steam Cloud timing, patch testing, and Xbox/Game Pass caution.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Save backup',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Platform',
    cardStatusValue: 'Steam / Xbox',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 存档位置 - Steam 备份和云存档注意事项',
      description:
        'Subnautica 2 存档位置中文指南：Steam 存档文件夹、如何备份、.sav 和 .bak 文件、Steam Cloud、Xbox / PC Game Pass 存档注意事项。',
    },
    eyebrow: 'Subnautica 2 存档备份',
    title: '存档位置和备份指南',
    description:
      '测试补丁、处理崩溃、换电脑或准备联机前，先做一个普通到有点无聊的存档备份。真出问题时，你会感谢自己多做了这一步。',
    quickLabel: '快速结论',
    quickAnswer:
      'Windows 版 Steam 当前公开资料指向 `%LOCALAPPDATA%\\Subnautica2\\Saved\\SaveGames`，存档文件夹里会有 `.sav` 和 `.bak` 文件。SteamDB 的云存档数据也把 Subnautica 2 指向同一类 LocalAppData 路径。备份时复制整个存档文件夹，不要只挑一个文件。Xbox App 或 PC Game Pass 版本要更谨慎：Microsoft Store 存档可能在受保护的 package 目录里，并且会通过 Xbox 账号云同步，优先用游戏内存档和平台云同步，不要随便强行改系统文件。',
    fieldNotesTitle: '打开文件夹前先想清楚',
    fieldNotes: [
      {
        title: '备份整个存档槽',
        body: '一个存档槽可能不止一个有用文件。把整个文件夹复制走，别把 `.sav` 和 `.bak` 拆开猜。',
      },
      {
        title: '云存档不是本地备份',
        body: '云同步很方便，但如果坏状态同步上去了，也会一起传播。测试补丁、崩溃修复或文件改动前，先留一个本地副本。',
      },
      {
        title: 'Game Pass 版本不要照搬 Steam 路径',
        body: 'Xbox App 和 Microsoft Store 的存档路径可能被沙盒保护，命名和同步方式也不一样。别按 Steam 教程硬套。',
      },
    ],
    routeChecklistTitle: '安全备份流程',
    routeChecklist: [
      '复制存档前先关闭 Subnautica 2。',
      'Steam Windows 版先打开 `%LOCALAPPDATA%\\Subnautica2\\Saved\\SaveGames`。',
      '复制整个存档槽文件夹到带日期的备份文件夹。',
      '游戏或平台客户端正在同步时，不要覆盖文件。',
      '测试恢复前，先保留一份没有动过的原始备份。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Subnautica 2 存档怎么备份',
    routeSteps: [
      {
        title: '先完全关闭游戏',
        body: '游戏还在写入时复制文件，备份可能没有意义。先退出游戏，等一小会儿，再打开存档目录。',
      },
      {
        title: '用 LocalAppData 快捷路径',
        body: '按 Windows + R，输入 `%LOCALAPPDATA%\\Subnautica2\\Saved\\SaveGames`。如果没有这个文件夹，先启动游戏并创建一个存档。',
      },
      {
        title: '复制文件夹，不要随手复制单个文件',
        body: '把 `.sav` 和 `.bak` 放在一起。建议复制到桌面或硬盘里的日期文件夹，例如写上补丁版本和当天日期。',
      },
      {
        title: '等云同步完成',
        body: '如果 Steam Cloud 或其他同步功能正在工作，先等它同步完。不要在客户端同步时替换文件。',
      },
      {
        title: 'Xbox 和 Game Pass 慢一点处理',
        body: 'Xbox App 版本的本地文件不如 Steam 直观。优先用正常存档槽和账号云同步，不要为了找路径乱改受保护目录。',
      },
    ],
    tableTitle: '存档和备份表',
    tableHeaders: ['情况', '建议操作'],
    tableRows: [
      [
        'Steam Windows 版',
        '查看 `%LOCALAPPDATA%\\Subnautica2\\Saved\\SaveGames`，复制整个存档文件夹。',
      ],
      [
        '测试补丁前',
        '在游戏目录外建一个带日期的备份文件夹，方便知道来自哪个版本。',
      ],
      ['.sav 和 .bak 文件', '放在一起复制，不要只靠单个文件恢复。'],
      [
        '开启 Steam Cloud',
        '先等同步完成，再替换或恢复文件，并保留一份没动过的本地备份。',
      ],
      [
        'Xbox App / Game Pass',
        '不要套用 Steam 路径。除非有明确恢复需求，否则优先用平台存档和云同步。',
      ],
    ],
    visualTitle: '备份记录卡',
    visualItems: [
      {
        label: 'Steam 路径',
        value: 'LocalAppData',
        note: '当前公开资料指向 Subnautica2 的 Saved 文件夹。',
      },
      {
        label: '复制',
        value: '文件夹',
        note: '不要把一个存档槽拆成零散文件。',
      },
      {
        label: '云同步',
        value: '先等待',
        note: '同步完成后再替换或恢复文件。',
      },
    ],
    cautionTitle: '不要把备份指南当成万能修档教程',
    cautionBody:
      '这页是为了找到并备份存档，不承诺修复所有坏档。如果文件已经损坏，复制它只是把问题保存下来。动手恢复前，先留一份完全没有改过的备份。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 Steam 存档在哪？',
        body: '当前公开资料指向 `%LOCALAPPDATA%\\Subnautica2\\Saved\\SaveGames`，适用于 Windows Steam 版本。',
      },
      {
        title: '备份时复制 .sav 文件就够了吗？',
        body: '不建议。复制整个存档文件夹更稳，不要猜哪个单独文件才是关键。',
      },
      {
        title: '有 Steam Cloud 还需要手动备份吗？',
        body: '需要。云同步负责方便，不负责替你保留每个历史状态。测试补丁或改文件前，本地备份更安心。',
      },
      {
        title: 'Game Pass 存档位置和 Steam 一样吗？',
        body: '不要默认一样。Xbox App 和 Microsoft Store 存档可能在受保护目录里，并通过账号云同步，手动恢复要更谨慎。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      {
        href: Routes.Subnautica2StartupCrashAfterHotfix3,
        label: '启动崩溃排查',
      },
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 更新内容' },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      { href: Routes.Subnautica2Crossplay, label: '跨平台联机' },
      {
        href: Routes.Subnautica2CoopRejoinAfterHotfix3,
        label: '联机重连检查',
      },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 2 日核对 Steam 官方页面、SteamDB 云存档数据、Prima Games 存档位置说明和 Xbox 商店页面。Steam 本地路径建议只针对 Windows Steam 版本；Xbox 和 Game Pass 存档优先按平台托管处理。',
    cardKicker: '存档备份卡',
    cardBody:
      '面向 Steam 存档文件夹、.sav 和 .bak、Steam Cloud 同步、补丁测试，以及 Xbox/Game Pass 注意事项写的备份页。',
    cardTypeLabel: '类型',
    cardTypeValue: '存档备份',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '平台',
    cardStatusValue: 'Steam / Xbox',
  },
};

function getCopy(locale: Locale): SaveFileCopy {
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
    pathname: Routes.Subnautica2SaveFileLocation,
  });
}

export default async function Subnautica2SaveFileLocationPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <LocalizedResourceGuidePage
      copy={{ ...copy, publishedAt: PUBLISHED_AT, updatedAt: UPDATED_AT }}
      icon={SaveIcon}
      locale={locale}
      pathname={Routes.Subnautica2SaveFileLocation}
      sources={sharedSources}
    />
  );
}
