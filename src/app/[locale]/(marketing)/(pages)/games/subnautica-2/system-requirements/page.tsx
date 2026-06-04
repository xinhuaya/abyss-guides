import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { MonitorPlayIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type SystemRequirementsCopy = ResourceGuideCopy & {
  metadata: { title: string; description: string };
};

const PUBLISHED_AT = '2026-06-01';
const UPDATED_AT = '2026-06-04';

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
  {
    href: 'https://www.youtube.com/watch?v=6t2nDHldoSk',
    label: 'Official Subnautica 2 gameplay trailer',
  },
];

const copyByLocale: Record<string, SystemRequirementsCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 System Requirements: Minimum and Recommended PC Specs',
      description:
        'Subnautica 2 PC system requirements explained with minimum specs, recommended specs, storage, RAM, GPU notes, and Early Access performance caution.',
    },
    eyebrow: 'Subnautica 2 PC specs',
    title: 'Subnautica 2 System Requirements: Can Your PC Run It?',
    description:
      'Before you buy or install, check the official Steam specs and leave room for Early Access changes. The game may run today, but future biomes, vehicles, and effects can raise practical expectations.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'The official Steam page lists Windows 10/11, a 64-bit system, 12 GB RAM, GTX 1660 6GB or RX 5500 XT 6GB, DirectX 12, broadband internet, and 50 GB storage as the minimum baseline. Recommended specs move up to Windows 11, 16 GB RAM, an RTX 3070 8GB or RX 6700 XT 8GB, and stronger CPUs. If you are asking "can my PC run Subnautica 2?", minimum is the entry line and recommended is the safer comfort line. If you sit near minimum, read the low-FPS settings page before blaming a bug.',
    fieldNotesTitle: 'What the specs really mean',
    fieldNotes: [
      {
        title: 'Minimum means entry, not comfort',
        body: 'Minimum specs are a door into the game. They are not a promise that every biome, co-op session, or future update will feel smooth.',
      },
      {
        title: 'Storage needs breathing room',
        body: 'Steam lists 50 GB available space. Keep extra room for patches, shader caches, screenshots, and save backups.',
      },
      {
        title: 'Early Access can shift performance',
        body: 'Unknown Worlds says the game will keep expanding with biomes, creatures, tools, vehicles, and optimization work. Recheck specs after major updates.',
      },
      {
        title: 'DLSS advice changed after Hotfix 3',
        body: 'Do not rely on launch-week DLSS warnings without checking the patched build. Hotfix 3 specifically names DLSS crashes, saved settings, Frame Generation, and DLSS 4.5.',
      },
    ],
    routeChecklistTitle: 'Install checklist',
    routeChecklist: [
      'Check Windows 10/11 and 64-bit support.',
      'Confirm at least 12 GB RAM for the minimum baseline.',
      'Compare your GPU against GTX 1660 6GB or RX 5500 XT 6GB.',
      'Keep more than 50 GB free before installing.',
      'Retest DLSS and Frame Generation after Hotfix 3 if you are on an NVIDIA setup.',
      'Use recommended specs if you plan to play co-op or record footage.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to read the PC requirements',
    routeSteps: [
      {
        title: 'Start with Steam, not copied tables',
        body: 'The Steam page is the source to check first because it is the platform page players actually install from.',
      },
      {
        title: 'Treat recommended specs as the smoother target',
        body: 'If you want fewer compromises, aim closer to 16 GB RAM and the recommended GPU tier instead of trying to live exactly on minimum.',
      },
      {
        title: 'Plan for online co-op overhead',
        body: 'Online co-op adds network and session variables. If your PC is barely above minimum, lower settings before blaming the connection.',
      },
      {
        title: 'Check DLSS after the latest hotfix',
        body: 'Hotfix 3 upgrades DLSS to 4.5 and fixes several DLSS and Frame Generation problems. A settings guide written before June 1, 2026 may be stale.',
      },
      {
        title: 'Recheck after major roadmap updates',
        body: 'New biomes, creatures, vehicles, and visual work can change the practical feel of performance even if the official table stays similar.',
      },
    ],
    tableTitle: 'Official PC spec summary',
    tableHeaders: ['Part', 'What to check'],
    tableRows: [
      ['OS', 'Minimum: Windows 10/11. Recommended: Windows 11.'],
      [
        'CPU',
        'Minimum: Intel Core i5-8400 / Ryzen 5 2600. Recommended: i7-13700 / Ryzen 7 7700X.',
      ],
      ['Memory', 'Minimum: 12 GB RAM. Recommended: 16 GB RAM.'],
      [
        'Graphics',
        'Minimum: GTX 1660 6GB / RX 5500 XT 6GB. Recommended: RTX 3070 8GB / RX 6700 XT 8GB.',
      ],
      [
        'Storage',
        '50 GB available space, with extra free space strongly preferred.',
      ],
      [
        'DLSS / Frame Generation',
        'Hotfix 3 fixed DLSS crashes, saved settings, and some Frame Generation availability problems.',
      ],
    ],
    visualTitle: 'PC readiness card',
    visualItems: [
      {
        label: 'Minimum RAM',
        value: '12 GB',
        note: 'Enough to enter, not always enough for comfort.',
      },
      {
        label: 'Storage',
        value: '50 GB',
        note: 'Leave room for patches and saves.',
      },
      {
        label: 'Best target',
        value: 'Recommended',
        note: 'A better fit for co-op and recording.',
      },
      {
        label: 'Hotfix 3',
        value: 'DLSS 4.5',
        note: 'Retest graphics settings after the patch.',
      },
    ],
    cautionTitle:
      'Do not promise Steam Deck or laptop performance from PC specs alone',
    cautionBody:
      'A desktop spec table does not automatically answer every handheld or thin laptop case. Treat portable devices, shared memory, heat limits, and driver issues as separate checks.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How much RAM does Subnautica 2 need?',
        body: 'Steam lists 12 GB RAM minimum and 16 GB RAM recommended.',
      },
      {
        title: 'How much storage does Subnautica 2 need?',
        body: 'Steam lists 50 GB available space. Keeping more free space is safer for updates and saves.',
      },
      {
        title: 'Can I play below minimum specs?',
        body: 'Maybe, but this page would not recommend buying based on below-minimum hardware. Wait for more performance reports or play on a stronger device.',
      },
      {
        title: 'Will specs change during Early Access?',
        body: 'They can. Early Access updates can add content and optimization changes, so recheck after major patches.',
      },
      {
        title: 'Did Hotfix 3 change PC graphics advice?',
        body: 'Yes. It fixes DLSS crashes, DLSS settings not saving correctly, Frame Generation availability in some versions, and upgrades DLSS to 4.5.',
      },
      {
        title: 'Can my PC run Subnautica 2 if it is close to minimum?',
        body: 'It may run, but expect compromises. Start with a frame cap, lower expensive visual settings, and avoid judging performance from one quiet area only.',
      },
      {
        title: 'What GPU do I need for Subnautica 2?',
        body: 'Steam lists GTX 1660 6GB or RX 5500 XT 6GB as the minimum GPU tier, and RTX 3070 8GB or RX 6700 XT 8GB as the recommended tier.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2SteamDeckSettings,
        label: 'Steam Deck Settings',
      },
      {
        href: Routes.Subnautica2BestSettingsLowFps,
        label: 'Best Settings for Low FPS',
      },
      { href: Routes.Subnautica2Price, label: 'Price Guide' },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      { href: Routes.Subnautica2MacReleaseDate, label: 'Mac Release Date' },
      { href: Routes.Subnautica2OfflineMode, label: 'Offline Mode' },
      {
        href: Routes.Subnautica2EarlyAccessWorthIt,
        label: 'Is Early Access Worth It?',
      },
      { href: Routes.Subnautica2Crossplay, label: 'Crossplay Guide' },
      { href: Routes.Subnautica2ReleaseDate, label: 'Release Date' },
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3' },
      {
        href: Routes.Subnautica2DlssSettingsAfterHotfix3,
        label: 'DLSS Settings After Hotfix 3',
      },
      {
        href: Routes.Subnautica2BlackScreenFreezing,
        label: 'Black Screen and Freezing',
      },
      {
        href: Routes.Subnautica2StartupCrashAfterHotfix3,
        label: 'Startup Crash Checklist',
      },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 4, 2026 against Hotfix 3, the official Steam requirements, Xbox listing, Unknown Worlds roadmap, and official trailer. The page image is Abyss Guides original art; the video is the official Subnautica embed.',
    cardKicker: 'Install check',
    cardBody:
      'A buy-before-install page for players checking RAM, GPU, storage, and Early Access performance risk.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'PC specs',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Best target',
    cardStatusValue: 'Recommended specs',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 配置要求：最低配置和推荐 PC 配置',
      description:
        'Subnautica 2 配置要求中文整理：最低配置、推荐配置、显卡、内存、硬盘空间和抢先体验性能注意事项。',
    },
    eyebrow: 'Subnautica 2 PC 配置',
    title: 'Subnautica 2 配置要求：你的电脑能不能跑？',
    description:
      '购买或安装前，先看 Steam 官方配置，并给抢先体验更新留余量。现在能跑，不代表未来新生态区、载具和特效更新后一定舒服。',
    quickLabel: '快速结论',
    quickAnswer:
      'Steam 官方页面列出的最低基础是 Windows 10/11、64 位系统、12 GB 内存、GTX 1660 6GB 或 RX 5500 XT 6GB、DirectX 12、宽带网络和 50 GB 空间。推荐配置提升到 Windows 11、16 GB 内存、RTX 3070 8GB 或 RX 6700 XT 8GB，以及更强 CPU。Hotfix 3 对 PC 玩家也很重要：它修复 DLSS 崩溃、DLSS 设置保存、部分版本 Frame Generation 不可用的问题，并把 DLSS 升级到 4.5。',
    fieldNotesTitle: '配置表应该这样看',
    fieldNotes: [
      {
        title: '最低配置只是入门',
        body: '最低配置不是保证所有生态区、联机和未来更新都很流畅。',
      },
      {
        title: '硬盘空间要多留',
        body: 'Steam 写的是 50 GB 可用空间，实际最好给补丁、缓存、截图和存档留余量。',
      },
      {
        title: '抢先体验会变',
        body: '路线图提到后续会有更多生态区、生物、工具、载具和优化，所以大更新后要重新核对。Hotfix 3 还直接改了 DLSS 和 Frame Generation，旧图形设置建议不要照搬。',
      },
    ],
    routeChecklistTitle: '安装前检查',
    routeChecklist: [
      '确认 Windows 10/11 和 64 位系统。',
      '最低至少 12 GB 内存。',
      '显卡对照 GTX 1660 6GB 或 RX 5500 XT 6GB。',
      '安装前留出超过 50 GB 空间。',
      '如果用 NVIDIA 显卡，Hotfix 3 后重新测试 DLSS 和 Frame Generation。',
      '如果要联机或录视频，尽量按推荐配置来。',
    ],
    contentsLabel: '目录',
    routeTitle: 'PC 配置怎么读',
    routeSteps: [
      {
        title: '先看 Steam 官方页',
        body: 'Steam 是玩家实际安装的平台，配置表先以它为准。',
      },
      {
        title: '推荐配置更适合长期玩',
        body: '想少调画质，就尽量靠近 16 GB 内存和推荐显卡档位。',
      },
      {
        title: '联机也会增加变量',
        body: '在线联机有网络和会话变量。电脑刚压线时，先降设置再判断是不是连接问题。',
      },
      {
        title: '大更新后重新核对',
        body: '新生态区、生物、载具和画面更新，可能改变实际性能感受。Hotfix 3 已经修复 DLSS 崩溃、DLSS 设置保存和部分 Frame Generation 可用性问题。',
      },
    ],
    tableTitle: '官方 PC 配置摘要',
    tableHeaders: ['项目', '需要核对什么'],
    tableRows: [
      ['系统', '最低：Windows 10/11。推荐：Windows 11。'],
      ['CPU', '最低：i5-8400 / Ryzen 5 2600。推荐：i7-13700 / Ryzen 7 7700X。'],
      ['内存', '最低 12 GB，推荐 16 GB。'],
      [
        '显卡',
        '最低 GTX 1660 6GB / RX 5500 XT 6GB。推荐 RTX 3070 8GB / RX 6700 XT 8GB。',
      ],
      ['硬盘', '50 GB 可用空间，最好多留一些。'],
      [
        'DLSS / Frame Generation',
        'Hotfix 3 修复了 DLSS 崩溃、设置保存和部分版本 Frame Generation 不可用的问题。',
      ],
    ],
    visualTitle: 'PC 准备卡',
    visualItems: [
      { label: '最低内存', value: '12 GB', note: '能进门，不一定舒服。' },
      { label: '硬盘', value: '50 GB', note: '补丁和存档还要空间。' },
      { label: '更稳目标', value: '推荐配置', note: '更适合联机和录制。' },
      { label: 'Hotfix 3', value: 'DLSS 4.5', note: '补丁后重新测图形设置。' },
    ],
    cautionTitle: '不要用桌面配置直接判断掌机或轻薄本',
    cautionBody:
      'PC 配置表不能直接回答所有 Steam Deck、掌机和轻薄本情况。便携设备还要看散热、共享内存、驱动和兼容性。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 需要多少内存？',
        body: 'Steam 列出最低 12 GB，推荐 16 GB。',
      },
      {
        title: 'Subnautica 2 需要多少硬盘空间？',
        body: 'Steam 列出 50 GB 可用空间，建议多留一点。',
      },
      {
        title: '低于最低配置能玩吗？',
        body: '可能能启动，但不建议按低于最低配置来购买。',
      },
      {
        title: '抢先体验期间配置会变吗？',
        body: '可能会。大更新后应该重新看官方配置和玩家反馈。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      {
        href: Routes.Subnautica2SteamDeckSettings,
        label: 'Steam Deck 设置',
      },
      { href: Routes.Subnautica2Price, label: '价格指南' },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      { href: Routes.Subnautica2MacReleaseDate, label: 'Mac ???' },
      { href: Routes.Subnautica2OfflineMode, label: '????' },
      {
        href: Routes.Subnautica2EarlyAccessWorthIt,
        label: '抢先体验值不值得买',
      },
      { href: Routes.Subnautica2Crossplay, label: '跨平台联机' },
      { href: Routes.Subnautica2ReleaseDate, label: '发售时间' },
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3' },
      {
        href: Routes.Subnautica2BlackScreenFreezing,
        label: '黑屏和卡死排查',
      },
      {
        href: Routes.Subnautica2StartupCrashAfterHotfix3,
        label: '启动崩溃排查',
      },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 2 日核对 Hotfix 3、Steam 官方配置、Xbox 页面、Unknown Worlds 路线图和官方预告。图片为 Abyss Guides 原创图，视频为 Subnautica 官方嵌入。',
    cardKicker: '安装检查',
    cardBody: '给安装前核对内存、显卡、硬盘和抢先体验性能风险的玩家看。',
    cardTypeLabel: '类型',
    cardTypeValue: 'PC 配置',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '更稳目标',
    cardStatusValue: '推荐配置',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 推奨スペックと最低スペック',
      description:
        'Subnautica 2のPC必要スペック、RAM、GPU、容量、Early Access中の性能注意点を整理します。',
    },
    eyebrow: 'Subnautica 2 PCスペック',
    title: 'Subnautica 2 推奨スペック: 自分のPCで動く？',
    description:
      '購入やインストール前に、Steam公式の必要スペックを確認します。Early Access中は今後の更新で体感が変わる可能性があります。',
    quickLabel: '結論',
    quickAnswer:
      'Steam公式ページでは、最低にWindows 10/11、64-bit、12 GB RAM、GTX 1660 6GBまたはRX 5500 XT 6GB、DirectX 12、ブロードバンド、50 GB容量が listed されています。推奨はWindows 11、16 GB RAM、RTX 3070 8GBまたはRX 6700 XT 8GB、より強いCPUです。',
    fieldNotesTitle: 'スペック表の読み方',
    fieldNotes: [
      {
        title: '最低は快適保証ではない',
        body: '最低スペックは入口です。全てのバイオームやco-opが快適とは限りません。',
      },
      {
        title: '容量は余裕を持つ',
        body: 'Steamは50 GB空き容量を表示しています。パッチや保存用に余裕を残します。',
      },
      {
        title: 'Early Accessでは変わる',
        body: 'ロードマップでは新しいバイオーム、生物、道具、乗り物、最適化が予定されています。',
      },
    ],
    routeChecklistTitle: 'インストール前チェック',
    routeChecklist: [
      'Windows 10/11と64-bitを確認。',
      '最低12 GB RAMを確認。',
      'GPUをGTX 1660 6GBまたはRX 5500 XT 6GBと比べる。',
      '50 GB以上の空き容量を用意。',
      'co-opや録画をするなら推奨寄りを目標にする。',
    ],
    contentsLabel: '目次',
    routeTitle: 'PC必要スペックの見方',
    routeSteps: [
      {
        title: 'Steam公式を先に見る',
        body: '実際にインストールするSteamページを先に確認します。',
      },
      {
        title: '推奨スペックを目標にする',
        body: '快適に遊ぶなら16 GB RAMと推奨GPUに近い環境が安心です。',
      },
      {
        title: 'co-opも考える',
        body: 'オンライン協力ではネットワークとセッションの影響もあります。',
      },
      {
        title: '大型更新後に再確認',
        body: '新要素や最適化で体感性能が変わることがあります。',
      },
    ],
    tableTitle: '公式PCスペックまとめ',
    tableHeaders: ['項目', '確認すること'],
    tableRows: [
      ['OS', '最低: Windows 10/11。推奨: Windows 11。'],
      ['CPU', '最低: i5-8400 / Ryzen 5 2600。推奨: i7-13700 / Ryzen 7 7700X。'],
      ['メモリ', '最低12 GB、推奨16 GB。'],
      [
        'GPU',
        '最低GTX 1660 6GB / RX 5500 XT 6GB。推奨RTX 3070 8GB / RX 6700 XT 8GB。',
      ],
      ['容量', '50 GB空き容量。余裕を残すのがおすすめ。'],
    ],
    visualTitle: 'PC準備カード',
    visualItems: [
      { label: '最低RAM', value: '12 GB', note: '入口としての数字です。' },
      { label: '容量', value: '50 GB', note: '更新用の余裕も必要です。' },
      { label: '目標', value: '推奨', note: 'co-opや録画ならこちら。' },
    ],
    cautionTitle: 'PCスペックだけで携帯機を判断しない',
    cautionBody:
      'Steam Deckや薄型ノートは、発熱、共有メモリ、ドライバ、互換性も確認が必要です。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2に必要なRAMは？',
        body: 'Steamでは最低12 GB、推奨16 GBです。',
      },
      {
        title: '必要な容量は？',
        body: '50 GB空き容量です。多めに空けておくと安心です。',
      },
      {
        title: '最低未満でも遊べますか？',
        body: '起動する可能性はありますが、購入判断にはおすすめしません。',
      },
      {
        title: 'Early Access中に変わりますか？',
        body: '変わる可能性があります。大型更新後に再確認してください。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      {
        href: Routes.Subnautica2EarlyAccessWorthIt,
        label: 'Early Accessは買い？',
      },
      { href: Routes.Subnautica2Crossplay, label: 'クロスプレイ' },
      { href: Routes.Subnautica2ReleaseDate, label: '発売日' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2' },
    ],
    sourcesTitle: '出典メモ',
    sourceBody:
      '2026年6月1日にSteam公式スペック、Xboxページ、Unknown Worldsロードマップ、公式トレーラーを確認。画像はAbyss Guidesオリジナル、動画は公式Subnautica埋め込みです。',
    cardKicker: 'Install check',
    cardBody:
      'RAM、GPU、容量、Early Access中の性能リスクを確認するページです。',
    cardTypeLabel: '種類',
    cardTypeValue: 'PCスペック',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: '目標',
    cardStatusValue: '推奨スペック',
  },
};

function getCopy(locale: Locale): SystemRequirementsCopy {
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
    pathname: Routes.Subnautica2SystemRequirements,
  });
}

export default async function Subnautica2SystemRequirementsPage({
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
      pathname={Routes.Subnautica2SystemRequirements}
      sources={sharedSources}
    />
  );
}
