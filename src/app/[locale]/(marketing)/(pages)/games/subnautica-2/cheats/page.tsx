import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { AlertTriangleIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type CheatsCopy = ResourceGuideCopy & {
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
    href: 'https://www.youtube.com/watch?v=6t2nDHldoSk',
    label: 'Official Subnautica 2 gameplay trailer',
  },
];

const copyByLocale: Record<string, CheatsCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Cheats, Console Commands, and Trainers: What Is Safe?',
      description:
        'A safe Subnautica 2 cheats guide covering console-command searches, trainers, save risks, co-op problems, Early Access updates, and safer alternatives.',
    },
    eyebrow: 'Subnautica 2 cheat safety',
    title:
      'Subnautica 2 Cheats and Console Commands: Read This Before You Try Anything',
    description:
      'Searches for cheats usually mean one of three things: a player is stuck, a route changed after a hotfix, or someone wants creative-style freedom. This page focuses on safe alternatives instead of linking trainers or risky files.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Do not install third-party trainers, DLL injectors, “unlock all” files, or cheat bundles for Subnautica 2. Early Access builds change, and unsafe tools can corrupt saves, break co-op, trigger antivirus warnings, or leave you stuck on old behavior. If you are stuck, use route guides, save backups, accessibility/settings changes, and official hotfix notes first.',
    fieldNotesTitle: 'Why cheat tools are a bad fit for Early Access',
    fieldNotes: [
      {
        title: 'Builds change under you',
        body: 'A trainer made for an older build may misread inventory, vehicles, coordinates, or resource IDs after a hotfix.',
      },
      {
        title: 'Co-op is fragile enough already',
        body: 'Modified files can create desync, item mismatch, or trust issues in a group save, even if the tool seems harmless in solo play.',
      },
      {
        title: 'Most cheat searches are actually route problems',
        body: 'Low oxygen, missing Silver, broken Tadpole routing, or a lost save usually has a cleaner fix than installing a tool.',
      },
    ],
    routeChecklistTitle: 'Before using any cheat-like tool',
    routeChecklist: [
      'Back up your save manually.',
      'Read the latest hotfix page for changed behavior.',
      'Search the specific blocker first: Silver, oxygen, Tadpole, save recovery, or co-op.',
      'Do not install trainers, injectors, or unknown DLL files.',
      'Do not use modified files in co-op saves.',
      'If you only want an easier run, adjust settings and route planning first.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Safer alternatives to cheats',
    routeSteps: [
      {
        title: 'Fix the blocker, not the whole game',
        body: 'If you are looking for infinite oxygen, you may need the oxygen-depth guide. If you want free resources, you may need the resource checklist and route pages.',
      },
      {
        title: 'Use save backups before experiments',
        body: 'Even without cheats, Early Access can surprise you. Back up your save before testing routes, settings, or major base changes.',
      },
      {
        title: 'Check hotfix notes before blaming yourself',
        body: 'A route that worked last week can change. Read the latest Unknown Worlds notes and our hotfix tracker before changing files.',
      },
      {
        title: 'Keep co-op saves clean',
        body: 'If a friend group depends on one save, do not introduce modified files, trainers, or suspicious “online fix” packages.',
      },
      {
        title: 'Use guide tools for planning',
        body: 'The Resource Checklist is safer than a trainer because it only tracks what you need and links to the route pages.',
      },
    ],
    tableTitle: 'Cheat searches and safer paths',
    tableHeaders: ['Search', 'Safer answer'],
    tableRows: [
      [
        'subnautica 2 cheats',
        'Use route guides and backups first. Avoid trainer downloads.',
      ],
      [
        'subnautica 2 console commands',
        'Check current official/patch context before assuming commands exist or are stable.',
      ],
      [
        'subnautica 2 trainer',
        'Avoid trainers during Early Access. They can break saves, co-op, or antivirus trust.',
      ],
      [
        'subnautica 2 infinite oxygen',
        'Use oxygen and depth planning before changing files.',
      ],
      [
        'subnautica 2 unlock all',
        'Route and checklist pages are safer than unlock files.',
      ],
    ],
    visualTitle: 'Risk card',
    visualItems: [
      {
        label: 'Most common need',
        value: 'Unstuck',
        note: 'A route guide usually solves the actual problem.',
      },
      {
        label: 'Highest risk',
        value: 'Trainer',
        note: 'Build mismatch, malware, and save damage are all possible.',
      },
      {
        label: 'Safer tool',
        value: 'Checklist',
        note: 'Track resources without modifying game files.',
      },
    ],
    cautionTitle: 'We will not link trainers or bypass tools',
    cautionBody:
      'This page is for safety and troubleshooting. It does not provide cheat tables, trainer files, DLL injectors, bypasses, cracked executables, or multiplayer workarounds.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Does Subnautica 2 have cheats?',
        body: 'Players search for cheats and console commands, but Early Access behavior can change. Treat any claim as build-specific until official or patch-aware sources confirm it.',
      },
      {
        title: 'Are trainers safe for Subnautica 2?',
        body: 'No trainer should be treated as safe by default. They can trigger antivirus warnings, corrupt saves, break co-op, or fail after a hotfix.',
      },
      {
        title: 'What should I do if I am stuck?',
        body: 'Back up your save, read the latest hotfix notes, then use a specific route page for oxygen, Silver, Tadpole, resource checks, or save recovery.',
      },
      {
        title: 'Can I use cheat tools in co-op?',
        body: 'Do not use modified files or trainers in co-op saves. They can cause desync and put the group save at risk.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2ResourceChecklist,
        label: 'Resource Checklist',
      },
      { href: Routes.Subnautica2OxygenDepth, label: 'Oxygen and Depth' },
      { href: Routes.Subnautica2Silver, label: 'Silver Route' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Guide' },
      { href: Routes.Subnautica2SaveRecoveryCloudSync, label: 'Save Recovery' },
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 Tracker' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 3, 2026 against the official Steam Early Access page, Unknown Worlds roadmap, Hotfix 3, and the official gameplay trailer. This page does not link or recommend third-party cheat tools.',
    cardKicker: 'Safety card',
    cardBody:
      'A compliant answer for cheats, console commands, trainers, infinite oxygen, and unlock-all searches.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Risk guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Advice',
    cardStatusValue: 'Keep saves clean',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 作弊、控制台和修改器安全吗？存档和联机风险说明',
      description:
        'Subnautica 2 作弊搜索合规说明：控制台、修改器、存档风险、联机问题、抢先体验热修，以及更安全的替代做法。',
    },
    eyebrow: 'Subnautica 2 作弊风险',
    title: 'Subnautica 2 作弊和控制台命令：尝试前先看风险',
    description:
      '玩家搜索作弊，通常不是单纯想破坏游戏，而是卡关、路线被热修改变，或者想更轻松探索。本页只讲安全替代做法，不提供修改器和危险文件。',
    quickLabel: '快速结论',
    quickAnswer:
      '不要安装第三方修改器、DLL 注入器、unlock all 文件或作弊包。Subnautica 2 仍是抢先体验版本，版本变化可能让这些工具损坏存档、破坏联机、触发杀毒报警，或让你停留在旧问题里。卡关时先用路线攻略、存档备份、设置调整和官方热修说明。',
    fieldNotesTitle: '为什么抢先体验不适合乱用修改器',
    fieldNotes: [
      {
        title: '版本会变',
        body: '为旧版本做的修改器，可能在热修后读错背包、载具、坐标或资源 ID。',
      },
      {
        title: '联机更容易出问题',
        body: '改文件可能导致不同步、物品状态不一致，或者让朋友不敢继续用同一个存档。',
      },
      {
        title: '很多“作弊需求”其实是路线问题',
        body: '缺氧、找不到 Silver、Tadpole 路线乱、存档丢失，通常都有比装工具更干净的解决方案。',
      },
    ],
    routeChecklistTitle: '尝试任何类似作弊的工具前',
    routeChecklist: [
      '先手动备份存档。',
      '阅读最新 Hotfix 页面，确认行为是否被改过。',
      '先搜索具体卡点：Silver、氧气、Tadpole、存档恢复或联机。',
      '不要安装修改器、注入器或未知 DLL。',
      '不要在联机存档里用改文件。',
      '只是想简单一点时，先调整设置和路线规划。',
    ],
    contentsLabel: '目录',
    routeTitle: '比作弊更安全的做法',
    routeSteps: [
      {
        title: '解决卡点，不要改整局游戏',
        body: '想要无限氧气，可能真正需要的是氧气和深度路线；想要免费资源，可能真正需要的是资源清单和材料路线。',
      },
      {
        title: '实验前先备份存档',
        body: '即使不用作弊，抢先体验也可能有意外。测试路线、设置或大规模改基地前先备份。',
      },
      {
        title: '怀疑路线失效时先看热修',
        body: '上周能用的路线，这周可能已经变了。改文件前先看 Unknown Worlds 最新说明和本站 hotfix 追踪。',
      },
      {
        title: '联机存档保持干净',
        body: '如果朋友小队依赖同一个存档，不要引入修改器、可疑 online fix 或改过的文件。',
      },
      {
        title: '用攻略工具做规划',
        body: 'Resource Checklist 只帮你追踪材料和路线，不改游戏文件，比修改器安全得多。',
      },
    ],
    tableTitle: '作弊搜索和更安全答案',
    tableHeaders: ['搜索词', '更安全的回答'],
    tableRows: [
      ['subnautica 2 cheats', '先用路线攻略和存档备份，不要下载修改器。'],
      [
        'subnautica 2 console commands',
        '不要默认控制台命令存在或稳定，要看当前版本和官方/补丁语境。',
      ],
      [
        'subnautica 2 trainer',
        '抢先体验期间避开 trainer，它可能伤存档、联机和安全信任。',
      ],
      ['subnautica 2 infinite oxygen', '先用氧气和深度规划，不要改文件。'],
      ['subnautica 2 unlock all', '路线和清单页比 unlock 文件安全。'],
    ],
    visualTitle: '风险卡',
    visualItems: [
      {
        label: '常见需求',
        value: '脱卡',
        note: '真正的问题通常能用路线攻略解决。',
      },
      {
        label: '最高风险',
        value: '修改器',
        note: '版本不匹配、恶意软件和存档损坏都有可能。',
      },
      {
        label: '更安全工具',
        value: '清单',
        note: '不修改游戏文件，也能追踪材料。',
      },
    ],
    cautionTitle: '本站不会提供修改器或绕过工具',
    cautionBody:
      '本页只做安全和排查说明，不提供 cheat table、trainer 文件、DLL 注入器、绕过、破解执行文件或多人联机修补包。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 有作弊吗？',
        body: '玩家会搜索作弊和控制台命令，但抢先体验行为可能变化。任何说法都要当成版本相关信息，等官方或补丁语境确认。',
      },
      {
        title: 'Subnautica 2 修改器安全吗？',
        body: '不能默认安全。修改器可能触发杀毒、损坏存档、破坏联机，或者在热修后失效。',
      },
      {
        title: '卡关了怎么办？',
        body: '先备份存档，再看最新 hotfix，然后找具体路线页：氧气、Silver、Tadpole、资源清单或存档恢复。',
      },
      {
        title: '联机可以用作弊工具吗？',
        body: '不要在联机存档里用改文件或修改器。它们可能导致不同步，并让整个小队存档有风险。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2ResourceChecklist, label: '资源清单' },
      { href: Routes.Subnautica2OxygenDepth, label: '氧气和深度' },
      { href: Routes.Subnautica2Silver, label: 'Silver 路线' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 指南' },
      { href: Routes.Subnautica2SaveRecoveryCloudSync, label: '存档恢复' },
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 追踪' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 3 日核对 Steam 抢先体验页、Unknown Worlds 路线图、Hotfix 3 和官方实机预告。本页不链接也不推荐第三方作弊工具。',
    cardKicker: '安全卡',
    cardBody:
      '给 cheats、console commands、trainers、infinite oxygen 和 unlock all 搜索词的合规风险说明。',
    cardTypeLabel: '类型',
    cardTypeValue: '风险说明',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '建议',
    cardStatusValue: '保持存档干净',
  },
};

function getCopy(locale: Locale): CheatsCopy {
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
    pathname: Routes.Subnautica2Cheats,
  });
}

export default async function Subnautica2CheatsPage({
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
      pathname={Routes.Subnautica2Cheats}
      sources={sharedSources}
    />
  );
}
