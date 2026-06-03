import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { WrenchIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type ModsCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-06-03';
const UPDATED_AT = '2026-06-03';

const sharedSources = [
  {
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/',
    label: 'Official Steam Early Access page',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap',
    label: 'Unknown Worlds Early Access roadmap',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-3',
    label: 'Unknown Worlds Hotfix 3',
  },
  {
    href: 'https://www.gamesradar.com/games/survival/subnautica-2-devs-say-no-to-killing-in-their-survival-game-modders-respond-with-add-on-that-lets-you-shoot-fish-anyway/',
    label: 'GamesRadar modding coverage',
  },
  {
    href: 'https://www.youtube.com/watch?v=6t2nDHldoSk',
    label: 'Official Subnautica 2 gameplay trailer',
  },
];

const copyByLocale: Record<string, ModsCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Mods - Safe Early Access Setup, Backups, and Risks',
      description:
        'A practical Subnautica 2 mods guide covering Early Access risks, save backups, hotfix checks, co-op safety, mod manager caution, and when to wait.',
    },
    eyebrow: 'Subnautica 2 mods safety',
    title: 'Subnautica 2 Mods: Set Up Safely Before You Experiment',
    description:
      'Mods are tempting early, especially for quality-of-life fixes and visual tweaks. The catch is that Subnautica 2 is still in Early Access, so a mod that feels harmless today can break after a hotfix tomorrow.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Use mods only if you are comfortable backing up saves, testing one change at a time, and removing everything after a patch. Do not install random DLLs, passworded archives, trainer bundles, or mod packs that also promise cheats, online fixes, or free downloads. If your main save is co-op, wait or clone the save before testing.',
    fieldNotesTitle: 'What matters before installing',
    fieldNotes: [
      {
        title: 'Early Access changes the ground under mods',
        body: 'Hotfixes can adjust systems, crashes, performance, and multiplayer behavior. A mod made for one build may behave badly on the next build.',
      },
      {
        title: 'Save backups are not optional',
        body: 'Treat your first mod session like a risky dive: back up the save, write down what changed, and keep a clean way back.',
      },
      {
        title: 'Co-op adds another failure point',
        body: 'If friends are joining the same world, every player needs to know what was changed. Mismatched files can turn a simple bug into a long evening of guessing.',
      },
    ],
    routeChecklistTitle: 'Pre-mod checklist',
    routeChecklist: [
      'Update the game and restart Steam or the Xbox app.',
      'Read the latest hotfix notes before trusting old mod comments.',
      'Back up your save folder before adding anything.',
      'Install one mod, test one route, then write down the result.',
      'Avoid trainers, cracks, online-fix bundles, and executable files from unknown mirrors.',
      'Keep a clean profile or save for co-op sessions.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to test mods without wrecking a save',
    routeSteps: [
      {
        title: 'Start with the patch baseline',
        body: 'Open the official store page and latest Unknown Worlds update first. If a mod comment is older than the current hotfix, treat it as unverified.',
      },
      {
        title: 'Clone the save you care about',
        body: 'Do not test a new mod on the only copy of a long save. Copy the save folder, name the copy with the date, and launch the test from that copy when possible.',
      },
      {
        title: 'Add only one change',
        body: 'One mod at a time sounds slow, but it saves time when something breaks. If you install five at once, you will not know which one caused the crash, missing item, or UI issue.',
      },
      {
        title: 'Test a real play loop',
        body: 'Load the save, swim a short route, open storage, use a vehicle, craft something, and save again. A mod that survives the main menu has not really passed yet.',
      },
      {
        title: 'Keep co-op clean',
        body: 'For multiplayer, the safest first rule is simple: use an unmodded save unless everyone agrees to the same setup and accepts the risk.',
      },
      {
        title: 'Remove before blaming the game',
        body: 'If a crash, black screen, desync, or missing item appears after modding, disable the modded setup before treating it as a general Subnautica 2 bug.',
      },
    ],
    tableTitle: 'Modding risk table',
    tableHeaders: ['Mod search', 'Safer answer'],
    tableRows: [
      [
        'subnautica 2 mods',
        'Start with backups, patch notes, and one small change at a time.',
      ],
      [
        'subnautica 2 mod manager',
        'Use only if you understand how to remove files and restore a clean install.',
      ],
      [
        'subnautica 2 nexus mods',
        'Check comments, update dates, and build compatibility before installing.',
      ],
      [
        'subnautica 2 trainer mod',
        'Treat trainers as a cheat/tooling risk, especially for co-op and saves.',
      ],
      [
        'subnautica 2 multiplayer mods',
        'Keep the main co-op save clean unless everyone uses the same tested setup.',
      ],
    ],
    visualTitle: 'Safe modding field card',
    visualItems: [
      {
        label: 'First move',
        value: 'Backup',
        note: 'Copy the save before touching files.',
      },
      {
        label: 'Test style',
        value: 'One mod',
        note: 'Install one, test one route, then decide.',
      },
      {
        label: 'Co-op rule',
        value: 'Clean save',
        note: 'Avoid surprise mismatches with friends.',
      },
    ],
    cautionTitle: 'Do not mix mods with cracks or trainers',
    cautionBody:
      'A harmless quality-of-life mod and a random executable trainer are not the same thing. Abyss Guides will not link cracked builds, bypass tools, trainer packs, or mirrors that hide files behind passwords. If a mod page smells like a piracy page, leave it.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Does Subnautica 2 support mods officially?',
        body: 'Treat current modding as early and fragile unless an official page says otherwise. Early Access hotfixes can change behavior quickly, so compatibility can lag behind the game.',
      },
      {
        title: 'Can mods break Subnautica 2 saves?',
        body: 'Yes. Any mod that changes files, items, UI, saves, or progression can create problems. Back up saves first and test on a copy.',
      },
      {
        title: 'Are Subnautica 2 mods safe for multiplayer?',
        body: 'Only if everyone understands the setup and accepts the risk. For a shared co-op save, clean and unmodded is the safer default.',
      },
      {
        title: 'Should I wait before modding?',
        body: 'If you only have one save, play co-op often, or do not like troubleshooting files, waiting is the better move. The mod scene will be easier to judge after more patches.',
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
        href: Routes.Subnautica2BlackScreenFreezing,
        label: 'Black Screen and Freezing',
      },
      {
        href: Routes.Subnautica2MultiplayerLagDesync,
        label: 'Multiplayer Lag and Desync',
      },
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 Tracker' },
      { href: Routes.Subnautica2Cheats, label: 'Cheats and Trainers' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 3, 2026 against the official Steam page, Unknown Worlds roadmap, Hotfix 3 notes, public modding coverage, and the official gameplay trailer. Page art is original Abyss Guides artwork.',
    cardKicker: 'Modding safety',
    cardBody:
      'A pre-install guide for Subnautica 2 mods, save backups, hotfix risk, co-op cleanliness, and trainer avoidance.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Safety guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Best move',
    cardStatusValue: 'Back up first',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Mods 模组安全吗 - 抢先体验备份和安装前检查',
      description:
        'Subnautica 2 Mods 中文指南：抢先体验模组风险、存档备份、补丁兼容、联机安全、mod manager 注意事项，以及什么时候应该先等等。',
    },
    eyebrow: 'Subnautica 2 模组安全',
    title: 'Subnautica 2 Mods：动手前先把存档和补丁想清楚',
    description:
      '模组很诱人，尤其是画面、小修小补、便利功能。但 Subnautica 2 还在抢先体验，一个今天能用的模组，明天热修之后就可能出问题。',
    quickLabel: '快速结论',
    quickAnswer:
      '只有在你愿意备份存档、一次只测一个改动、补丁后能手动恢复干净文件时，才建议尝试模组。不要安装随机 DLL、加密压缩包、trainer 捆绑包，也不要碰同时宣传作弊、online fix、免费下载的“模组包”。如果你主要玩联机存档，先复制一份再测试，或者暂时别装。',
    fieldNotesTitle: '安装前最该看什么',
    fieldNotes: [
      {
        title: '抢先体验会不断改底层',
        body: '热修可能调整系统、崩溃、性能和联机行为。某个模组适配当前版本，不代表下个补丁后还稳定。',
      },
      {
        title: '备份存档不是可选项',
        body: '第一次装模组要当成一次有风险的下潜：先备份，记下改了什么，保证能回到干净状态。',
      },
      {
        title: '联机会多一层风险',
        body: '朋友一起进同一个世界时，大家必须知道改了哪些文件。文件不一致会让一个小 bug 变成很难排查的麻烦。',
      },
    ],
    routeChecklistTitle: '安装前检查清单',
    routeChecklist: [
      '先更新游戏，并重启 Steam 或 Xbox app。',
      '看最新 Hotfix，再判断旧评论是否还可信。',
      '添加任何文件前，先备份存档。',
      '一次只装一个模组，测试一条路线，再记录结果。',
      '避开 trainer、破解、online-fix 包，以及不明镜像里的可执行文件。',
      '联机存档尽量保留一个干净版本。',
    ],
    contentsLabel: '目录',
    routeTitle: '怎么测试模组，才不容易毁存档',
    routeSteps: [
      {
        title: '先确认当前补丁基线',
        body: '先打开官方商店页和 Unknown Worlds 最新更新。模组评论如果早于当前 Hotfix，就先当作未验证信息。',
      },
      {
        title: '复制你在乎的存档',
        body: '不要在唯一一份长时间游玩的存档上测试新模组。复制存档文件夹，用日期命名，尽量在副本上测试。',
      },
      {
        title: '一次只加一个改动',
        body: '一次一个模组看起来慢，但出问题时最快。如果一次装五个，崩溃、物品消失或 UI 异常时，你不知道是谁造成的。',
      },
      {
        title: '测试真实游玩循环',
        body: '进存档后，游一小段路线，打开储物，使用载具，制作一个物品，再保存。能进主菜单不代表真正通过测试。',
      },
      {
        title: '联机存档保持干净',
        body: '多人游戏最安全的第一原则很简单：除非所有人都同意同一套设置并接受风险，否则主联机存档保持无模组。',
      },
      {
        title: '先移除模组，再怪游戏',
        body: '如果装模组后出现崩溃、黑屏、不同步或物品异常，先禁用模组环境，再判断是不是 Subnautica 2 本身的问题。',
      },
    ],
    tableTitle: '常见模组搜索和更稳答案',
    tableHeaders: ['搜索词', '更安全的做法'],
    tableRows: [
      ['subnautica 2 mods', '先备份、看补丁、一次只装一个小改动。'],
      [
        'subnautica 2 mod manager',
        '只有在你知道怎么移除文件、恢复干净安装时再用。',
      ],
      ['subnautica 2 nexus mods', '安装前看评论、更新时间和当前版本兼容性。'],
      [
        'subnautica 2 trainer mod',
        '把 trainer 当成作弊和文件风险，联机尤其别碰。',
      ],
      [
        'subnautica 2 multiplayer mods',
        '主联机存档尽量保持干净，除非所有人同配置。',
      ],
    ],
    visualTitle: '安全模组卡片',
    visualItems: [
      { label: '第一步', value: '备份', note: '动文件前先复制存档。' },
      {
        label: '测试方式',
        value: '单个模组',
        note: '装一个，跑一圈，再决定。',
      },
      {
        label: '联机规则',
        value: '干净存档',
        note: '避免朋友之间文件不一致。',
      },
    ],
    cautionTitle: '不要把模组、破解和 trainer 混在一起',
    cautionBody:
      '便利模组和随机可执行 trainer 不是一回事。Abyss Guides 不会链接破解、绕过工具、trainer 包，也不会链接需要密码解压的可疑镜像。如果一个“模组页”看起来像盗版页，直接离开。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 官方支持模组吗？',
        body: '除非官方页面明确写出支持方式，否则把当前模组当成早期、脆弱、需要自己承担风险的玩法。抢先体验热修会很快改变兼容性。',
      },
      {
        title: '模组会弄坏 Subnautica 2 存档吗？',
        body: '有可能。任何会改文件、物品、UI、存档或进度的模组，都可能带来问题。先备份，再用副本测试。',
      },
      {
        title: 'Subnautica 2 联机能装模组吗？',
        body: '只有所有人都理解并接受同一套设置时才考虑。共享联机存档默认保持干净，风险最低。',
      },
      {
        title: '现在是不是应该先等等再装模组？',
        body: '如果你只有一个主存档，经常联机，或者不想折腾文件，等一等更合适。补丁更多之后，模组生态会更容易判断。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2SaveFileLocation, label: '存档位置' },
      {
        href: Routes.Subnautica2SaveRecoveryCloudSync,
        label: '存档恢复和云同步',
      },
      { href: Routes.Subnautica2BlackScreenFreezing, label: '黑屏和卡死排查' },
      {
        href: Routes.Subnautica2MultiplayerLagDesync,
        label: '联机延迟和不同步',
      },
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 追踪' },
      { href: Routes.Subnautica2Cheats, label: '作弊码和 trainer 风险' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 3 日核对 Steam 官方页、Unknown Worlds 路线图、Hotfix 3、公开模组报道和官方实机预告。页面图片为 Abyss Guides 原创图。',
    cardKicker: '模组安全',
    cardBody:
      '围绕 Subnautica 2 模组、存档备份、补丁风险、联机干净环境和 trainer 风险写的安装前指南。',
    cardTypeLabel: '类型',
    cardTypeValue: '安全指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '建议',
    cardStatusValue: '先备份',
  },
};

function getCopy(locale: Locale): ModsCopy {
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
    pathname: Routes.Subnautica2Mods,
  });
}

export default async function Subnautica2ModsPage({
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
      icon={WrenchIcon}
      locale={locale}
      pathname={Routes.Subnautica2Mods}
      sources={sharedSources}
    />
  );
}
