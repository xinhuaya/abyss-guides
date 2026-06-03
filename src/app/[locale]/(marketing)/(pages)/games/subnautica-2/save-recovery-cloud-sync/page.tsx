import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { SaveIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type SaveRecoveryCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-06-02';
const UPDATED_AT = '2026-06-02';

const sharedSources = [
  {
    href: 'https://steamdb.info/app/1962700/ufs/',
    label: 'SteamDB Cloud Saves data',
  },
  {
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/?l=english',
    label: 'Official Steam page',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-3',
    label: 'Unknown Worlds Hotfix 3',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-2',
    label: 'Unknown Worlds Hotfix 2',
  },
  {
    href: 'https://www.xbox.com/en-US/games/store/subnautica-2/9pjpcb188svg',
    label: 'Official Xbox store listing',
  },
];

const copyByLocale: Record<string, SaveRecoveryCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Save Recovery - Cloud Sync Conflict and Backup Restore',
      description:
        'A practical Subnautica 2 save recovery checklist for Steam Cloud conflicts, corrupted saves, .bak files, backup restore timing, and Xbox/Game Pass caution.',
    },
    eyebrow: 'Subnautica 2 save recovery',
    title: 'Save Recovery and Cloud Sync Conflict Guide',
    description:
      'If a save looks wrong after a crash, hotfix, reinstall, or cloud sync prompt, slow down before clicking through. Most save problems get worse when players overwrite the only clean copy they had.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Do not launch into the same save repeatedly if something looks broken. Close the game, copy the current save folder somewhere safe, then check whether you have a dated backup or a `.bak` file from the same slot. On Steam, current public cloud-save data points to the LocalAppData save path. Let Steam Cloud finish syncing before you restore anything. For Xbox app and PC Game Pass, avoid manual package-folder edits unless you already have a clear recovery path.',
    fieldNotesTitle: 'Recovery rules that save time',
    fieldNotes: [
      {
        title: 'Freeze the current state first',
        body: 'Even a broken save can be useful evidence. Copy it before you try a restore, rename, or cloud overwrite.',
      },
      {
        title: 'Prefer the newest clean backup, not the newest file',
        body: 'The newest file may be the broken one. Look for the last save you remember loading correctly.',
      },
      {
        title: 'Cloud prompts are not harmless',
        body: 'A wrong choice can push the bad copy to every machine tied to the account. Pause and read the timestamp.',
      },
    ],
    routeChecklistTitle: 'Before restoring',
    routeChecklist: [
      'Close Subnautica 2 and wait for the platform client to stop syncing.',
      'Copy the current save folder before changing anything.',
      'Find the last backup or `.bak` file that predates the problem.',
      'Restore one slot at a time so you can test without losing the original.',
      'Launch once, check the slot, then close the game before making more changes.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to recover a Subnautica 2 save safely',
    routeSteps: [
      {
        title: 'Stop opening the broken slot',
        body: 'Repeated launches can create newer files over the state you wanted to keep. If the save loads in a strange place, crashes, or rolls back, close the game first.',
      },
      {
        title: 'Make a rescue copy',
        body: 'For Steam Windows installs, copy the whole save folder from `%LOCALAPPDATA%\\Subnautica2\\Saved\\SaveGames` to a separate folder. Name it with the date and the problem, such as `before-cloud-conflict`.',
      },
      {
        title: 'Compare timestamps before choosing a restore',
        body: 'Check the folder, `.sav`, and `.bak` timestamps. Pick the last file from before the crash, hotfix test, cloud prompt, or failed session. Do not assume the largest or newest file is best.',
      },
      {
        title: 'Restore one copy, then test once',
        body: 'Put back one candidate backup, launch the game, check whether the slot loads correctly, and close the game again. If it is wrong, restore from the untouched rescue copy before trying another candidate.',
      },
      {
        title: 'Let Steam Cloud settle',
        body: 'If Steam asks whether to use local or cloud data, compare the timestamps before choosing. After a restore, give Steam time to finish upload or download sync before moving files again.',
      },
      {
        title: 'Treat Game Pass differently',
        body: 'The Xbox app can manage saves through protected storage and account sync. Use in-game slots and platform cloud behavior first. Manual file recovery belongs at the end of the checklist, not the start.',
      },
    ],
    tableTitle: 'Recovery decision table',
    tableHeaders: ['Symptom', 'Safer move'],
    tableRows: [
      [
        'Cloud conflict prompt',
        'Read timestamps first. Choose the copy that matches the last good play session, then make a backup before launching.',
      ],
      [
        'Save loads at an old location',
        'Do not keep playing yet. Back up the current folder and check for a newer clean backup.',
      ],
      [
        'Game crashes on one save only',
        'Test a new slot or different save before blaming the whole install.',
      ],
      [
        'Only a `.bak` file looks recent',
        'Copy the full folder first, then test a restore with the backup file kept beside the matching save files.',
      ],
      [
        'Xbox app / Game Pass',
        'Avoid Steam-specific folder advice. Let account sync finish and use normal save slots before touching package folders.',
      ],
    ],
    visualTitle: 'Recovery scan card',
    visualItems: [
      {
        label: 'First move',
        value: 'Copy',
        note: 'Save the current state before every recovery attempt.',
      },
      {
        label: 'Cloud',
        value: 'Timestamp',
        note: 'Use dates to choose between local and cloud data.',
      },
      {
        label: 'Restore',
        value: 'One slot',
        note: 'Test one candidate at a time, then close the game.',
      },
    ],
    cautionTitle: 'Do not promise a repair when you only have a backup',
    cautionBody:
      'A backup can return you to a cleaner state. It cannot magically repair a save that was already written incorrectly. Keep every original copy until you know which file actually loads.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Can I recover a corrupted Subnautica 2 save?',
        body: 'Sometimes, but only if you have a clean backup, a usable `.bak` file, or a cloud copy from before the problem. If every copy already has the same issue, recovery is much harder.',
      },
      {
        title: 'Should I choose local or cloud data in a Steam conflict?',
        body: 'Do not guess. Compare timestamps and choose the copy that matches the last good session. If you are unsure, back up the local folder before picking.',
      },
      {
        title: 'Can I restore only one save slot?',
        body: 'Yes, that is usually safer. Work on one slot at a time and keep a copy of the untouched folder outside the game directory.',
      },
      {
        title: 'Do Hotfix 2 or Hotfix 3 require a new save?',
        body: 'The official notes list fixes and balance changes, not a blanket instruction to restart. Back up first, then test the existing save before starting over.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2SaveFileLocation,
        label: 'Save File Location',
      },
      { href: Routes.Subnautica2OfflineMode, label: 'Offline Mode' },
      {
        href: Routes.Subnautica2StartupCrashAfterHotfix3,
        label: 'Startup Crash Checklist',
      },
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 Changes' },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      { href: Routes.Subnautica2Crossplay, label: 'Crossplay Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 2, 2026 against SteamDB cloud-save metadata, the official Steam page, Unknown Worlds Hotfix 2 and Hotfix 3 notes, and the Xbox store listing. The recovery checklist is cautious on purpose: source pages confirm platform and patch context, while file restore steps should be tested on a copy first.',
    cardKicker: 'Recovery field card',
    cardBody:
      'A practical restore checklist for Steam Cloud conflicts, .bak files, hotfix testing, rollback worries, and Xbox/Game Pass caution.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Save recovery',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Risk',
    cardStatusValue: 'Use copies first',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 存档恢复 - 云同步冲突和备份还原',
      description:
        'Subnautica 2 存档恢复中文指南：Steam Cloud 冲突、坏档、.bak 文件、备份还原顺序，以及 Xbox / PC Game Pass 存档注意事项。',
    },
    eyebrow: 'Subnautica 2 存档恢复',
    title: '存档恢复和云同步冲突指南',
    description:
      '如果崩溃、热修、重装或云同步提示之后，存档看起来不对，先别急着点确认。很多坏档不是第一下坏的，是玩家把唯一干净的副本覆盖掉以后才真的麻烦。',
    quickLabel: '快速结论',
    quickAnswer:
      '如果存档已经不对，不要反复进入同一个槽位。先关游戏，把当前存档文件夹复制到安全位置，再检查有没有带日期的备份，或者同一槽位里的 `.bak` 文件。Steam 版当前公开的云存档数据指向 LocalAppData 路径；恢复前后都要等 Steam Cloud 同步完成。Xbox App 和 PC Game Pass 版本不要一上来就改 package 文件夹，除非你已经明确知道恢复路径。',
    fieldNotesTitle: '恢复前先记住这几条',
    fieldNotes: [
      {
        title: '先冻结当前状态',
        body: '就算是坏档，也可能是判断问题的证据。尝试还原、改名或覆盖云存档前，先复制一份。',
      },
      {
        title: '找最近的干净备份，不是最新文件',
        body: '最新文件很可能就是坏掉的那个。优先找你最后一次确认能正常读取的存档时间。',
      },
      {
        title: '云同步提示不能随手点',
        body: '选错以后，坏副本可能同步到同账号的所有设备。先看时间戳，再决定用本地还是云端。',
      },
    ],
    routeChecklistTitle: '还原前检查',
    routeChecklist: [
      '关闭 Subnautica 2，并等平台客户端停止同步。',
      '改任何文件前，先复制当前存档文件夹。',
      '找到早于问题出现时间的备份或 `.bak` 文件。',
      '一次只还原一个槽位，方便测试，也避免误伤原文件。',
      '启动一次确认槽位状态，然后关游戏，再继续下一步。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Subnautica 2 存档怎么安全恢复',
    routeSteps: [
      {
        title: '先停止打开坏掉的槽位',
        body: '反复启动可能写出更新的坏文件，覆盖你本来想保留的状态。如果读档后位置不对、崩溃、回档，先退出游戏。',
      },
      {
        title: '做一份救援副本',
        body: 'Steam Windows 版先从 `%LOCALAPPDATA%\\Subnautica2\\Saved\\SaveGames` 复制整个存档文件夹到单独位置。文件夹名写清日期和问题，比如 `before-cloud-conflict`。',
      },
      {
        title: '按时间戳选还原文件',
        body: '查看文件夹、`.sav` 和 `.bak` 的修改时间。选择崩溃、热修测试、云同步提示或联机失败之前的最后一个干净版本。不要默认最大或最新的文件最好。',
      },
      {
        title: '一次只还原一个候选副本',
        body: '放回一个候选备份，启动游戏，看槽位能不能正常读取，然后再次关游戏。如果不对，先用未动过的救援副本恢复现场，再试下一个。',
      },
      {
        title: '等 Steam Cloud 同步稳定',
        body: '如果 Steam 询问使用本地还是云端数据，先比较时间戳。还原后也要给 Steam 足够时间完成上传或下载同步，再继续移动文件。',
      },
      {
        title: 'Game Pass 版本单独处理',
        body: 'Xbox App 可能通过受保护存储和账号同步管理存档。优先使用游戏内槽位和平台云同步。手动文件恢复应该放在流程末尾，不是第一步。',
      },
    ],
    tableTitle: '恢复判断表',
    tableHeaders: ['现象', '更稳的做法'],
    tableRows: [
      [
        '出现云同步冲突提示',
        '先看时间戳。选择和最后一次正常游玩对应的副本，启动前再备份一次。',
      ],
      [
        '读档后回到旧位置',
        '先不要继续玩。复制当前文件夹，再找是否有更新的干净备份。',
      ],
      ['只有某个存档崩溃', '先测试新槽位或其他存档，别直接认定整个安装坏了。'],
      [
        '只有 `.bak` 文件看起来比较新',
        '先复制整个文件夹，再把备份文件和对应槽位文件放在一起测试。',
      ],
      [
        'Xbox App / Game Pass',
        '不要套 Steam 路径。等账号同步完成，先用正常存档槽位处理，再考虑文件层面恢复。',
      ],
    ],
    visualTitle: '恢复扫描卡',
    visualItems: [
      {
        label: '第一步',
        value: '复制',
        note: '每次恢复尝试前，都先保存当前状态。',
      },
      {
        label: '云同步',
        value: '看时间',
        note: '用时间戳判断本地和云端哪个更可信。',
      },
      {
        label: '还原',
        value: '单槽位',
        note: '一次只测试一个候选副本，测完关游戏。',
      },
    ],
    cautionTitle: '不要把备份当成万能修档',
    cautionBody:
      '备份能让你回到更干净的状态，但不能保证修好已经写坏的存档。确认哪个文件能正常读取之前，所有原始副本都先留着。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 坏档能恢复吗？',
        body: '有时可以，但前提是你有干净备份、可用的 `.bak` 文件，或者问题出现前的云端副本。如果所有副本都已经同样损坏，恢复难度会高很多。',
      },
      {
        title: 'Steam 冲突提示应该选本地还是云端？',
        body: '不要猜。先比较时间戳，选择和最后一次正常游玩对应的副本。不确定时，先备份本地文件夹再选。',
      },
      {
        title: '可以只恢复一个存档槽位吗？',
        body: '可以，而且通常更稳。一次只处理一个槽位，并在游戏目录外保留一份未动过的文件夹。',
      },
      {
        title: 'Hotfix 2 或 Hotfix 3 之后必须重开档吗？',
        body: '官方补丁说明列出的是修复和调整，不是要求所有玩家重开。先备份，再测试旧存档，不要直接放弃。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      {
        href: Routes.Subnautica2SaveFileLocation,
        label: '存档位置和备份',
      },
      { href: Routes.Subnautica2OfflineMode, label: '离线模式' },
      {
        href: Routes.Subnautica2StartupCrashAfterHotfix3,
        label: '启动崩溃排查',
      },
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 更新内容' },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      { href: Routes.Subnautica2Crossplay, label: '跨平台联机' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 2 日核对 SteamDB 云存档数据、Steam 官方页面、Unknown Worlds Hotfix 2 / Hotfix 3，以及 Xbox 商店页面。恢复流程会故意写得保守：来源能确认平台和补丁背景，实际还原文件前仍然应该先复制副本测试。',
    cardKicker: '存档恢复卡',
    cardBody:
      '面向 Steam Cloud 冲突、.bak 文件、热修测试、回档疑问，以及 Xbox/Game Pass 注意事项的恢复清单。',
    cardTypeLabel: '类型',
    cardTypeValue: '存档恢复',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '风险',
    cardStatusValue: '先复制再操作',
  },
};

function getCopy(locale: Locale): SaveRecoveryCopy {
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
    pathname: Routes.Subnautica2SaveRecoveryCloudSync,
  });
}

export default async function Subnautica2SaveRecoveryCloudSyncPage({
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
      pathname={Routes.Subnautica2SaveRecoveryCloudSync}
      sources={sharedSources}
    />
  );
}
