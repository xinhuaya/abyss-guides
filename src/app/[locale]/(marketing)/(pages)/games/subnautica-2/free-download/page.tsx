import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { ShieldCheckIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type FreeDownloadCopy = ResourceGuideCopy & {
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

const copyByLocale: Record<string, FreeDownloadCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Free Download? Safe Ways to Play, Game Pass, and Crack Risks',
      description:
        'A compliant Subnautica 2 free download guide explaining safe official options, Steam, Xbox, Game Pass, Early Access pricing, and why cracked downloads are risky.',
    },
    eyebrow: 'Subnautica 2 safe download',
    title: 'Subnautica 2 Free Download? Use the Safe Routes Instead',
    description:
      'Players search for free downloads when they are unsure about price, platform, or whether Early Access is worth it. This page keeps the answer simple: use official stores or a legitimate subscription path, and avoid cracked installers.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Do not download Subnautica 2 from crack sites, repacks, passworded archives, or “free full game” pages. Use Steam, the Xbox store, or Game Pass where available. If you are unsure about paying, read the price page, check the roadmap, and use Game Pass as the lower-risk test path if it is available to your account.',
    fieldNotesTitle: 'Why this search is risky',
    fieldNotes: [
      {
        title: 'Cracked installers are not just a legal problem',
        body: 'They can bundle malware, fake launchers, hidden miners, stolen saves, or modified files that break co-op and future updates.',
      },
      {
        title: 'Early Access needs updates',
        body: 'Subnautica 2 is still changing. Unofficial builds can miss hotfixes, cloud-save behavior, co-op fixes, and resource-route changes.',
      },
      {
        title: 'Game Pass is the cleaner trial path',
        body: 'If your account and region show Game Pass access, it is the safer way to test the current build without hunting for unsafe files.',
      },
    ],
    routeChecklistTitle: 'Safe play checklist',
    routeChecklist: [
      'Open the official Steam page or Xbox store listing.',
      'Check Game Pass availability in your account region.',
      'Compare the current price with your appetite for Early Access.',
      'Read the roadmap so you know what is still unfinished.',
      'Avoid cracked installers, repacks, passworded archives, and “pre-activated” builds.',
      'Back up saves before major updates if you are already playing.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'What to do instead of using a cracked download',
    routeSteps: [
      {
        title: 'Check the official store first',
        body: 'Steam and Xbox are the places to confirm price, platform wording, update status, and account-region availability. Search snippets can be stale.',
      },
      {
        title: 'Use Game Pass if you want to test the build',
        body: 'A subscription path can reduce the pressure to buy immediately. It is still official, patched, and easier to uninstall cleanly.',
      },
      {
        title: 'Read the Early Access roadmap',
        body: 'If the current roadmap sounds too unfinished for you, waiting is better than gambling on an unsafe download.',
      },
      {
        title: 'Avoid “trainer included” or “online fix” packages',
        body: 'Those packages are common malware bait and can also break multiplayer trust. Treat them as a hard no.',
      },
      {
        title: 'Use the refund and wishlist tools honestly',
        body: 'If you are price-sensitive, wishlist the game, watch official updates, and check platform refund rules yourself before purchase.',
      },
    ],
    tableTitle: 'Common searches and safer answers',
    tableHeaders: ['Search', 'Safe answer'],
    tableRows: [
      [
        'subnautica 2 free download',
        'There is no safe “free full game” path. Check Game Pass or official stores.',
      ],
      [
        'subnautica 2 crack',
        'Avoid cracks and repacks. They can carry malware and miss Early Access updates.',
      ],
      [
        'subnautica 2 torrent',
        'Do not use torrents for the game. Use Steam, Xbox, or Game Pass instead.',
      ],
      [
        'subnautica 2 game pass free',
        'Game Pass is a subscription, not a free copy. Check the Xbox listing for current access.',
      ],
      [
        'subnautica 2 demo',
        'Use official store pages and Game Pass availability; do not trust third-party demo installers.',
      ],
    ],
    visualTitle: 'Safe route card',
    visualItems: [
      {
        label: 'Best source',
        value: 'Steam / Xbox',
        note: 'Official pages keep price, platform, and update wording current.',
      },
      {
        label: 'Try first',
        value: 'Game Pass',
        note: 'Lower-risk where the listing is available to your account.',
      },
      {
        label: 'Avoid',
        value: 'Cracks',
        note: 'Unsafe files, missing patches, and co-op trouble are not worth it.',
      },
    ],
    cautionTitle: 'This page will not link cracked downloads',
    cautionBody:
      'Abyss Guides is a fan guide, not a piracy directory. We can explain why people search the term and how to play safely, but we will not provide torrent links, cracks, bypasses, or “online fix” packages.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Can I download Subnautica 2 for free?',
        body: 'Use official sources only. If Game Pass is available to your account, that can be a lower-risk way to try the game, but it is still a subscription path rather than a free copy.',
      },
      {
        title: 'Are Subnautica 2 cracks safe?',
        body: 'No. Cracks, repacks, and “pre-activated” installers can carry malware, miss hotfixes, and break co-op or save behavior.',
      },
      {
        title: 'What should I do if the price feels high?',
        body: 'Check the live store page in your region, wishlist the game, use Game Pass where available, or wait for a more finished build.',
      },
      {
        title: 'Why do official updates matter so much?',
        body: 'Early Access routes, bugs, co-op behavior, and performance can change after hotfixes. Unofficial builds can leave you stuck on old behavior.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Price, label: 'Price Guide' },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      {
        href: Routes.Subnautica2EarlyAccessWorthIt,
        label: 'Is Early Access Worth It?',
      },
      {
        href: Routes.Subnautica2SystemRequirements,
        label: 'System Requirements',
      },
      { href: Routes.Subnautica2SaveRecoveryCloudSync, label: 'Save Recovery' },
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 Tracker' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 3, 2026 against the official Steam page, the official Xbox listing, the Unknown Worlds Early Access roadmap, and the official gameplay trailer. This page uses original Abyss Guides artwork and does not link to unofficial downloads.',
    cardKicker: 'Safe play',
    cardBody:
      'A compliant answer for free download, crack, torrent, and demo searches that points players toward official stores and Game Pass.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Safety guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Recommendation',
    cardStatusValue: 'Use official sources',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 免费下载？正版游玩方式、Game Pass 和盗版风险',
      description:
        'Subnautica 2 免费下载合规说明：Steam、Xbox、Game Pass、抢先体验价格，以及为什么不要下载破解、种子和第三方安装包。',
    },
    eyebrow: 'Subnautica 2 安全下载',
    title: 'Subnautica 2 免费下载？更稳的做法是走正版渠道',
    description:
      '很多玩家搜免费下载，其实是在犹豫价格、平台和抢先体验值不值得。本页只给安全答案：用 Steam、Xbox 或可用的 Game Pass，不碰破解安装包。',
    quickLabel: '快速结论',
    quickAnswer:
      '不要从破解站、种子、压缩包密码站、所谓“免费完整版”页面下载 Subnautica 2。请使用 Steam、Xbox 商店，或你账号地区可用的 Game Pass。如果还不确定是否付费，先看价格页、路线图和 Game Pass 可用性。',
    fieldNotesTitle: '为什么这个搜索词有风险',
    fieldNotes: [
      {
        title: '破解不只是版权问题',
        body: '破解包可能夹带木马、挖矿、假启动器，或者改坏存档、联机和后续更新。',
      },
      {
        title: '抢先体验更需要更新',
        body: 'Subnautica 2 仍在变化。非官方版本可能缺少热修、云存档行为、联机修复和资源路线变化。',
      },
      {
        title: 'Game Pass 是更干净的试玩路径',
        body: '如果你的账号和地区显示可用，Game Pass 比到处找不明文件更安全。',
      },
    ],
    routeChecklistTitle: '安全游玩清单',
    routeChecklist: [
      '打开 Steam 或 Xbox 官方页面。',
      '在自己的账号地区确认 Game Pass 是否可用。',
      '把当前价格和抢先体验接受度一起考虑。',
      '阅读路线图，确认哪些内容还没完成。',
      '避开破解、种子、加密压缩包和“预激活”版本。',
      '已经在玩的玩家，大更新前记得备份存档。',
    ],
    contentsLabel: '目录',
    routeTitle: '不要用破解下载时，可以怎么做',
    routeSteps: [
      {
        title: '先看官方商店',
        body: 'Steam 和 Xbox 能确认价格、平台文字、更新状态和地区可用性。搜索摘要可能缓存旧信息。',
      },
      {
        title: '想先试就看 Game Pass',
        body: '订阅路径可以降低立刻买断的压力，而且仍然是官方版本，更新和卸载都更干净。',
      },
      {
        title: '读一下抢先体验路线图',
        body: '如果当前路线图看起来还不够完整，那等待比冒险下载不明版本更合理。',
      },
      {
        title: '避开带 trainer 或 online fix 的包',
        body: '这类包经常是恶意软件诱饵，也会破坏联机信任。看到就关掉。',
      },
      {
        title: '用愿望单和退款规则做决策',
        body: '预算敏感就先加愿望单、看官方更新，并在平台页面自行确认退款规则。',
      },
    ],
    tableTitle: '常见搜索和安全回答',
    tableHeaders: ['搜索词', '安全回答'],
    tableRows: [
      [
        'subnautica 2 free download',
        '没有安全的“免费完整版”路径。请看 Game Pass 或官方商店。',
      ],
      [
        'subnautica 2 crack',
        '不要用破解和 repack。它们有恶意软件和缺失更新风险。',
      ],
      [
        'subnautica 2 torrent',
        '不要用种子下载游戏。请使用 Steam、Xbox 或 Game Pass。',
      ],
      [
        'subnautica 2 game pass free',
        'Game Pass 是订阅，不是免费买断。当前可用性看 Xbox 页面。',
      ],
      [
        'subnautica 2 demo',
        '只信官方页面和 Game Pass 可用性，不信第三方 demo 安装器。',
      ],
    ],
    visualTitle: '安全路线卡',
    visualItems: [
      {
        label: '首选来源',
        value: 'Steam / Xbox',
        note: '官方页面会更新价格、平台和版本说明。',
      },
      {
        label: '先试试',
        value: 'Game Pass',
        note: '账号地区可用时，试错成本更低。',
      },
      {
        label: '避开',
        value: '破解',
        note: '不明文件、缺失补丁和联机问题都不值得。',
      },
    ],
    cautionTitle: '本页不会提供破解下载链接',
    cautionBody:
      'Abyss Guides 是玩家攻略站，不是盗版目录。我们可以解释为什么玩家会搜这些词，也可以告诉你如何安全游玩，但不会提供种子、破解、绕过或 online fix 包。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 可以免费下载吗？',
        body: '请只使用官方来源。如果你的账号可用 Game Pass，它可以作为低风险试玩方式，但它仍然是订阅，不是免费买断。',
      },
      {
        title: 'Subnautica 2 破解安全吗？',
        body: '不安全。破解、repack 和预激活安装器可能夹带恶意软件，也可能缺少热修并影响联机或存档。',
      },
      {
        title: '觉得价格高怎么办？',
        body: '看你所在地区的实时商店价格，加入愿望单，使用可用的 Game Pass，或者等更完整的版本。',
      },
      {
        title: '为什么官方更新这么重要？',
        body: '抢先体验期间路线、Bug、联机和性能都可能被热修改变。非官方版本可能让你停在旧问题里。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Price, label: '价格指南' },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      {
        href: Routes.Subnautica2EarlyAccessWorthIt,
        label: '抢先体验值不值得买',
      },
      { href: Routes.Subnautica2SystemRequirements, label: '配置要求' },
      { href: Routes.Subnautica2SaveRecoveryCloudSync, label: '存档恢复' },
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 追踪' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 3 日核对 Steam 官方页、Xbox 官方页、Unknown Worlds 抢先体验路线图和官方实机预告。本页使用 Abyss Guides 原创图片，不链接任何非官方下载。',
    cardKicker: '安全游玩',
    cardBody:
      '给 free download、crack、torrent 和 demo 搜索词的合规回答，引导玩家走官方商店和 Game Pass。',
    cardTypeLabel: '类型',
    cardTypeValue: '安全说明',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '建议',
    cardStatusValue: '使用官方来源',
  },
};

function getCopy(locale: Locale): FreeDownloadCopy {
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
    pathname: Routes.Subnautica2FreeDownload,
  });
}

export default async function Subnautica2FreeDownloadPage({
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
      icon={ShieldCheckIcon}
      locale={locale}
      pathname={Routes.Subnautica2FreeDownload}
      sources={sharedSources}
    />
  );
}
