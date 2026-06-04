import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { CloudIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type SteamCloudCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-06-04';
const UPDATED_AT = '2026-06-04';

const sharedSources = [
  {
    href: 'https://help.steampowered.com/en/faqs/view/68D2-35AB-09A9-7678',
    label: 'Steam Support: Steam Cloud',
  },
  {
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/',
    label: 'Official Steam Early Access page',
  },
  {
    href: 'https://steamdb.info/app/1962700/ufs/',
    label: 'SteamDB Cloud Saves data',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-3',
    label: 'Unknown Worlds Hotfix 3',
  },
  {
    href: 'https://www.youtube.com/watch?v=6t2nDHldoSk',
    label: 'Official Subnautica 2 gameplay trailer',
  },
];

const copyByLocale: Record<string, SteamCloudCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Steam Cloud Save Guide - Sync, Conflict, Backup',
      description:
        'A practical Subnautica 2 Steam Cloud save guide covering sync status, cloud conflicts, moving PCs, Steam Deck, backups, and what to do before launching a save.',
    },
    eyebrow: 'Subnautica 2 Steam Cloud save',
    title: 'Subnautica 2 Steam Cloud Save: Let Sync Finish Before You Dive',
    description:
      'Steam Cloud is useful, but it is not a safety spell. If you swap PCs, use Steam Deck, or see a cloud conflict prompt, slow down and protect the save before you click through.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'As of June 4, 2026, the official Steam page lists Steam Cloud support for Subnautica 2. Before moving between PCs or Steam Deck, close the game, wait for Steam to finish syncing, and make a local backup if you see a cloud conflict or missing progress. Steam Support warns that picking the wrong side of a conflict can lose progress.',
    fieldNotesTitle: 'Where Steam Cloud helps and hurts',
    fieldNotes: [
      {
        title: 'It helps when you change devices',
        body: 'A clean Steam Cloud sync can carry a save between desktop, laptop, and handheld sessions without manual file copying.',
      },
      {
        title: 'It hurts when sync is interrupted',
        body: 'Closing Steam too quickly, playing on two machines, or ignoring a conflict prompt can leave local and cloud files out of step.',
      },
      {
        title: 'It is not a recovery service',
        body: 'Steam Support explains the cloud system, but it cannot reliably recover a save you already overwrote with the wrong copy.',
      },
    ],
    routeChecklistTitle: 'Before changing devices',
    routeChecklist: [
      'Close Subnautica 2 and wait for Steam Cloud sync to finish.',
      'Check the Steam library page for sync warnings before launching elsewhere.',
      'Back up the local save folder before choosing a cloud-conflict option.',
      'Use timestamps, not guesses, when deciding between local and cloud files.',
      'Launch once on the new device, confirm the slot, then close and let Steam sync again.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to handle Steam Cloud saves safely',
    routeSteps: [
      {
        title: 'Check the Steam page and sync state',
        body: 'The Steam store page is the official place to confirm Steam Cloud support. Your local Steam client is the place to check whether the current save has actually finished syncing.',
      },
      {
        title: 'Wait before switching machines',
        body: 'After a play session, give Steam time to upload the save. On the next device, wait for the download before launching. Rushing both ends is how clean saves become confusing.',
      },
      {
        title: 'Back up before resolving a conflict',
        body: 'If Steam asks you to choose between local and cloud data, copy the local save folder first. Then compare timestamps and choose the version that matches your last good session.',
      },
      {
        title: 'Treat Steam Deck like another PC',
        body: 'Handheld play still needs the same patience. Let the cloud download finish before launching, and let upload finish before returning to desktop.',
      },
      {
        title: 'Move to recovery only if something is wrong',
        body: 'If the wrong save loads, stop playing and use the save recovery guide. Do not keep opening the same slot while Steam is still trying to sync.',
      },
    ],
    tableTitle: 'Steam Cloud situations',
    tableHeaders: ['Situation', 'Safer move'],
    tableRows: [
      [
        'Moving to another PC',
        'Wait for upload on the old PC and download on the new one.',
      ],
      [
        'Using Steam Deck',
        'Treat it as a second device and wait for both sync directions.',
      ],
      [
        'Cloud conflict prompt',
        'Back up local files, compare timestamps, then choose.',
      ],
      [
        'Progress missing',
        'Stop launching the slot and check recovery options before overwriting.',
      ],
      [
        'Co-op save after hotfix',
        'Make sure every device has updated before trusting sync behavior.',
      ],
    ],
    visualTitle: 'Cloud sync card',
    visualItems: [
      {
        label: 'Before launch',
        value: 'Wait',
        note: 'Let Steam finish upload and download.',
      },
      {
        label: 'Conflict',
        value: 'Backup',
        note: 'Copy local files before choosing. ',
      },
      {
        label: 'Decision',
        value: 'Timestamp',
        note: 'Pick the copy that matches the last good session.',
      },
    ],
    cautionTitle: 'Do not use cloud sync as your only backup',
    cautionBody:
      'Steam Cloud is convenient, but convenience is not the same as a manual backup. Before a hotfix test, reinstall, device swap, or conflict prompt, copy the save folder somewhere outside the game directory.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Does Subnautica 2 support Steam Cloud?',
        body: 'The official Steam page lists Steam Cloud support. Still, check the Steam client for local sync warnings before moving devices.',
      },
      {
        title: 'Should I choose local or cloud in a conflict?',
        body: 'Compare timestamps and choose the copy that matches your last good session. Back up the local folder before choosing if you are unsure.',
      },
      {
        title: 'Can Steam Cloud restore a lost save?',
        body: 'Only if the clean copy still exists in cloud or local storage. Steam Support warns that cloud conflicts are limited and cannot always recover lost progress.',
      },
      {
        title: 'Is Steam Deck safe for Subnautica 2 saves?',
        body: 'It can be, as long as you wait for sync in both directions. Treat Steam Deck like another PC rather than a separate save system.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2SaveRecoveryCloudSync,
        label: 'Save Recovery and Cloud Sync',
      },
      {
        href: Routes.Subnautica2SaveFileLocation,
        label: 'Save File Location',
      },
      {
        href: Routes.Subnautica2SteamDownloadStuck,
        label: 'Steam Download Stuck',
      },
      { href: Routes.Subnautica2OfflineMode, label: 'Offline Mode' },
      {
        href: Routes.Subnautica2SteamDeckSettings,
        label: 'Steam Deck Settings',
      },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 4, 2026 against Steam Support, the official Steam page, SteamDB Cloud Saves data, Unknown Worlds Hotfix 3, and the official gameplay trailer. Abyss Guides artwork is original fan-site artwork; the video is the official Subnautica embed.',
    cardKicker: 'Steam Cloud card',
    cardBody:
      'A sync-safety page for Steam Cloud support, conflicts, backups, Steam Deck, moving PCs, and avoiding overwritten progress.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Save sync guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'First move',
    cardStatusValue: 'Wait for sync',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Steam Cloud 存档指南：同步、冲突和备份',
      description:
        'Subnautica 2 Steam Cloud 存档同步指南：换电脑、Steam Deck、云冲突、备份、本地和云端时间戳怎么判断。',
    },
    eyebrow: 'Subnautica 2 Steam Cloud 存档',
    title: 'Subnautica 2 Steam Cloud：同步完成后再下海',
    description:
      'Steam Cloud 很方便，但不是保险箱。换电脑、用 Steam Deck 或看到云冲突提示时，先保护存档，再点确认。',
    quickLabel: '快速结论',
    quickAnswer:
      '截至 2026 年 6 月 4 日，Steam 官方页显示 Subnautica 2 支持 Steam Cloud。换电脑或 Steam Deck 前，关闭游戏，等 Steam 完成同步；如果出现云冲突或进度丢失，先备份本地存档，再根据时间戳选择本地或云端。',
    fieldNotesTitle: 'Steam Cloud 帮忙和添乱的地方',
    fieldNotes: [
      {
        title: '换设备时很有用',
        body: '同步正常时，它能把存档带到台式机、笔记本和掌机上，不需要手动复制文件。',
      },
      {
        title: '同步被打断时会出事',
        body: '太快关闭 Steam、两台机器交替玩、忽略冲突提示，都可能让本地和云端不同步。',
      },
      {
        title: '它不是万能恢复服务',
        body: 'Steam Support 能解释云系统，但如果你已经用错误副本覆盖了好存档，恢复就不一定有办法。',
      },
    ],
    routeChecklistTitle: '换设备前先做',
    routeChecklist: [
      '关闭 Subnautica 2，等 Steam Cloud 同步完成。',
      '在另一台设备启动前，看 Steam 库里有没有同步警告。',
      '遇到云冲突时，先备份本地存档文件夹。',
      '根据时间戳判断本地和云端，不要凭感觉选。',
      '新设备启动一次确认存档后，退出游戏并等 Steam 再同步一次。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Steam Cloud 存档怎么安全处理',
    routeSteps: [
      {
        title: '先确认 Steam 页面和同步状态',
        body: 'Steam 商店页用于确认是否支持 Steam Cloud；本地 Steam 客户端用于确认当前存档是否真的同步完成。',
      },
      {
        title: '换机器前等一等',
        body: '一台设备玩完后，等 Steam 上传。另一台设备启动前，等 Steam 下载。两边都急着点开始，是最容易把存档弄乱的方式。',
      },
      {
        title: '处理冲突前先备份',
        body: 'Steam 让你选择本地或云端时，先复制本地存档文件夹。然后看时间戳，选和最后一次正常游玩匹配的版本。',
      },
      {
        title: 'Steam Deck 也当成另一台电脑',
        body: '掌机同样需要等待同步。上 Deck 前等下载，从 Deck 回桌面前等上传。',
      },
      {
        title: '出错后再进入恢复流程',
        body: '如果载入了错误进度，先停止游玩，去看存档恢复指南。不要在 Steam 还同步时反复打开同一个槽位。',
      },
    ],
    tableTitle: 'Steam Cloud 场景',
    tableHeaders: ['场景', '更安全的做法'],
    tableRows: [
      ['换到另一台 PC', '旧电脑等上传，新电脑等下载。'],
      ['使用 Steam Deck', '把它当成第二台设备，双向同步都要等。'],
      ['云冲突提示', '备份本地文件，看时间戳后再选择。'],
      ['进度不见了', '停止打开槽位，先看恢复选项，别继续覆盖。'],
      ['热修补后的联机存档', '确认所有设备都更新后，再相信同步结果。'],
    ],
    visualTitle: '云同步卡',
    visualItems: [
      {
        label: '启动前',
        value: '等待',
        note: '先让 Steam 完成上传和下载。',
      },
      {
        label: '冲突时',
        value: '备份',
        note: '选择前复制本地文件。',
      },
      {
        label: '判断',
        value: '时间戳',
        note: '选择最后一次正常游玩的副本。',
      },
    ],
    cautionTitle: '不要把云同步当成唯一备份',
    cautionBody:
      'Steam Cloud 很方便，但方便不等于备份。热修补测试、重装、换设备或看到冲突提示前，把存档复制到游戏目录外。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 支持 Steam Cloud 吗？',
        body: 'Steam 官方页显示支持 Steam Cloud。但换设备前仍然要看 Steam 客户端有没有同步警告。',
      },
      {
        title: '云冲突时选本地还是云端？',
        body: '看时间戳，选择和最后一次正常游玩匹配的副本。不确定时先备份本地文件夹。',
      },
      {
        title: 'Steam Cloud 能恢复丢失存档吗？',
        body: '只有干净副本还在云端或本地时才有机会。Steam Support 也提醒，云冲突不一定能恢复已丢失进度。',
      },
      {
        title: 'Steam Deck 玩 Subnautica 2 存档安全吗？',
        body: '可以，但要等同步完成。把 Steam Deck 当成另一台电脑，而不是独立存档系统。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      {
        href: Routes.Subnautica2SaveRecoveryCloudSync,
        label: '存档恢复和云同步',
      },
      {
        href: Routes.Subnautica2SaveFileLocation,
        label: '存档位置',
      },
      {
        href: Routes.Subnautica2SteamDownloadStuck,
        label: 'Steam 下载卡住',
      },
      { href: Routes.Subnautica2OfflineMode, label: '离线模式' },
      { href: Routes.Subnautica2SteamDeckSettings, label: 'Steam Deck 设置' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 4 日核对 Steam Support、Steam 官方页、SteamDB Cloud Saves 数据、Unknown Worlds Hotfix 3 和官方玩法预告。页面插图为 Abyss Guides 原创粉丝站配图；视频为官方 Subnautica 嵌入视频。',
    cardKicker: 'Steam Cloud 卡',
    cardBody:
      '用于说明 Steam Cloud 支持、云冲突、备份、Steam Deck、换电脑和避免覆盖进度。',
    cardTypeLabel: '类型',
    cardTypeValue: '存档同步指南',
    cardVerifiedLabel: '已检查',
    cardStatusLabel: '第一步',
    cardStatusValue: '等待同步',
  },
};

function getCopy(locale: Locale): SteamCloudCopy {
  return copyByLocale[locale] ?? copyByLocale.en;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = getCopy(locale);

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2SteamCloudSave,
  });
}

export default async function Subnautica2SteamCloudSavePage({
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
        checkedAt: UPDATED_AT,
      }}
      icon={CloudIcon}
      locale={locale}
      pathname={Routes.Subnautica2SteamCloudSave}
      sources={sharedSources}
    />
  );
}
