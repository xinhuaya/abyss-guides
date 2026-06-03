import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { MonitorPlayIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type MacCopy = ResourceGuideCopy & {
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
    label: 'Official Xbox listing',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap',
    label: 'Unknown Worlds Early Access roadmap',
  },
];

const copyByLocale: Record<string, MacCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Mac Release Date: macOS and Apple Silicon Status',
      description:
        'A source-backed Subnautica 2 Mac release date and macOS support guide covering Steam system requirements, Apple Silicon, Windows PC, Xbox, Game Pass, cloud play, and Early Access caveats.',
    },
    eyebrow: 'Subnautica 2 Mac platform watch',
    title: 'Subnautica 2 Mac Release Date: macOS and Apple Silicon Status',
    description:
      'Mac players have a fair question: the first Subnautica games reached people far beyond Windows PCs, so where does that leave Subnautica 2? Right now the answer is not “buy it on Mac and hope.”',
    quickLabel: 'Quick answer',
    quickAnswer:
      'No official source checked on June 3, 2026 confirms a Subnautica 2 Mac release date, native macOS version, or Apple Silicon build. The Steam page currently points to Windows 10/11 system requirements, while Xbox covers Xbox and PC/Game Pass wording. If you are on a Mac, do not buy for native macOS support until Steam or Unknown Worlds says it plainly.',
    fieldNotesTitle: 'Why Mac searches need a careful answer',
    fieldNotes: [
      {
        title: 'Windows requirements are not Mac support',
        body: 'A Steam page can list PC specs without listing macOS. Treat the operating-system table as the buying source, not a forum summary.',
      },
      {
        title: 'Apple Silicon makes guessing risky',
        body: 'M-series hardware can be powerful, but native support, translation layers, anti-cheat, drivers, and early performance are separate questions.',
      },
      {
        title: 'Cloud and remote play are workarounds',
        body: 'A cloud or remote PC setup may let a Mac user play, but that is not the same as a native Mac release. Say which setup you mean.',
      },
    ],
    routeChecklistTitle: 'Before buying on a Mac',
    routeChecklist: [
      'Check the Steam system requirements tab for macOS before purchase.',
      'Look for an Unknown Worlds post if a Mac version is announced later.',
      'Do not treat Windows PC requirements as Apple Silicon support.',
      'If using cloud or remote play, test input latency before a long save.',
      'Avoid manual compatibility advice that does not cite an official page.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to read the Mac status',
    routeSteps: [
      {
        title: 'Start with Steam, not a copied spec list',
        body: 'The Steam store page is the practical source for operating-system support. If macOS is not listed there, do not assume a native Mac build exists.',
      },
      {
        title: 'Separate Apple Silicon from Windows handhelds',
        body: 'Steam Deck, Windows handhelds, and Apple Silicon Macs are different compatibility stories. Advice for one does not automatically transfer to the other.',
      },
      {
        title: 'Treat cloud play as a different product path',
        body: 'If you play through Xbox Cloud or a remote Windows PC, the Mac is mostly acting as the screen and input device. That can be useful, but it is not a Mac port.',
      },
      {
        title: 'Wait for a plain announcement',
        body: 'A real Mac release should be easy to verify: a Steam macOS listing, platform-store page, or Unknown Worlds announcement. Anything weaker is a watch item.',
      },
      {
        title: 'Check again after major Early Access updates',
        body: 'Platform support can change during Early Access, but guesses age badly. Re-check the official pages after roadmap updates or large patches.',
      },
    ],
    tableTitle: 'Mac search answers',
    tableHeaders: ['Question', 'Current answer'],
    tableRows: [
      [
        'Subnautica 2 Mac release date',
        'No official Mac release date was found in the checked Steam, Xbox, or Unknown Worlds sources.',
      ],
      [
        'Subnautica 2 macOS support',
        'Do not assume native macOS support unless the Steam requirements or developer post says it directly.',
      ],
      [
        'Subnautica 2 Apple Silicon',
        'M1, M2, M3, and M4 searches should be treated as unconfirmed until a native build or tested official path is listed.',
      ],
      [
        'Can I play on a Mac through cloud play?',
        'Possibly through a cloud or remote setup, depending on your subscription, region, latency, and device support. That is not a native Mac version.',
      ],
      [
        'What should Mac players do now?',
        'Follow the Steam page and Unknown Worlds roadmap, or play through a confirmed Windows/Xbox path if you want to start now.',
      ],
    ],
    visualTitle: 'Mac buying decision card',
    visualItems: [
      {
        label: 'Native Mac',
        value: 'Unconfirmed',
        note: 'No checked official source lists a Mac build.',
      },
      {
        label: 'Steam specs',
        value: 'Windows',
        note: 'Use the store requirements table before buying.',
      },
      {
        label: 'Workaround',
        value: 'Cloud/remote',
        note: 'Useful for some players, but not a Mac port.',
      },
    ],
    cautionTitle: 'Do not buy for native Mac support on a rumor',
    cautionBody:
      'Mac compatibility posts can sound confident, especially when they mention Apple Silicon. The safer rule is boring but effective: if Steam or Unknown Worlds does not say macOS, do not treat it as supported.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Is Subnautica 2 coming to Mac?',
        body: 'No official Mac release date was confirmed by the sources checked on June 3, 2026. Watch Steam and Unknown Worlds for a plain platform announcement.',
      },
      {
        title: 'Does Subnautica 2 support Apple Silicon?',
        body: 'Not from the official sources checked here. Apple Silicon performance guesses are not the same as a confirmed native build.',
      },
      {
        title: 'Can I run the Windows version on a Mac?',
        body: 'Compatibility layers and remote setups are separate from official support. If you test them, back up saves and expect Early Access performance to move around.',
      },
      {
        title: 'Should I buy Subnautica 2 now if I only own a Mac?',
        body: 'Only if you already have a confirmed way to play it, such as a separate Windows/Xbox path or a cloud setup you have tested. Do not buy just because a Mac version might happen later.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2SystemRequirements,
        label: 'System Requirements',
      },
      {
        href: Routes.Subnautica2SteamDeckSettings,
        label: 'Steam Deck Settings',
      },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      { href: Routes.Subnautica2ReleaseDate, label: 'Release Date' },
      {
        href: Routes.Subnautica2EarlyAccessWorthIt,
        label: 'Is Early Access Worth It?',
      },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 3, 2026 against the official Steam Early Access page, Xbox listing, and Unknown Worlds roadmap. Abyss Guides artwork is original and is used here to explain platform status without copying official screenshots.',
    cardKicker: 'Mac status card',
    cardBody:
      'A buying page for Mac, macOS, Apple Silicon, Steam requirements, Windows PC, cloud play, and Early Access platform checks.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Platform watch guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'No Mac date confirmed',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Mac 发售日：macOS 和 Apple Silicon 支持状态',
      description:
        'Subnautica 2 Mac 发售日和 macOS 支持中文整理：核对 Steam 配置、Apple Silicon、Windows PC、Xbox、Game Pass、云游戏和抢先体验阶段注意点。',
    },
    eyebrow: 'Subnautica 2 Mac 平台观察',
    title: 'Subnautica 2 Mac 发售日：macOS 和 Apple Silicon 状态',
    description:
      'Mac 玩家问这个很正常。前几作让很多非 Windows 玩家也能玩到，所以 Subnautica 2 到底有没有 Mac 版，不能靠论坛一句“应该能跑”来判断。',
    quickLabel: '快速结论',
    quickAnswer:
      '截至 2026 年 6 月 3 日，我检查到的官方来源没有确认 Subnautica 2 的 Mac 发售日、原生 macOS 版本或 Apple Silicon 版本。Steam 页面当前指向 Windows 10/11 配置需求，Xbox 页面覆盖 Xbox 和 PC/Game Pass 相关信息。如果你只有 Mac，不要因为猜测就按原生 macOS 支持来购买。',
    fieldNotesTitle: '为什么 Mac 搜索要谨慎回答',
    fieldNotes: [
      {
        title: 'Windows 配置不等于 Mac 支持',
        body: 'Steam 页面可以列出 PC 配置，但这不代表 macOS 也支持。买前要看操作系统支持表，而不是转述文章。',
      },
      {
        title: 'Apple Silicon 不能直接猜',
        body: 'M 系列芯片性能不错，但原生支持、转译层、驱动、抢先体验性能和稳定性是不同问题。',
      },
      {
        title: '云游戏和远程游玩是绕路方案',
        body: 'Mac 可以作为屏幕和输入设备接入云游戏或远程 Windows PC，但这不是 Mac 原生版本。',
      },
    ],
    routeChecklistTitle: 'Mac 玩家买前检查',
    routeChecklist: [
      '购买前先看 Steam 系统需求里有没有 macOS。',
      '如果未来公布 Mac 版，优先看 Unknown Worlds 公告。',
      '不要把 Windows PC 配置解读成 Apple Silicon 支持。',
      '如果用云游戏或远程游玩，先测试输入延迟。',
      '没有官方页面支撑的兼容性建议，先当作个人测试结果。',
    ],
    contentsLabel: '目录',
    routeTitle: '怎么看 Mac 支持状态',
    routeSteps: [
      {
        title: '先看 Steam，不看复制配置表',
        body: 'Steam 商店页是判断操作系统支持的实用来源。如果里面没有 macOS，就不要默认存在原生 Mac 版本。',
      },
      {
        title: '把 Apple Silicon 和 Windows 掌机分开',
        body: 'Steam Deck、Windows 掌机、Apple Silicon Mac 是三种不同兼容路径。一个平台的设置建议不能直接套到另一个平台。',
      },
      {
        title: '把云游戏当作另一种玩法路径',
        body: '如果你通过 Xbox Cloud 或远程 Windows PC 玩，Mac 更多是显示器和输入端。能玩不代表这是 Mac 版。',
      },
      {
        title: '等一句清楚的官方确认',
        body: '真正的 Mac 版应该很好确认：Steam macOS 支持、平台商店页，或 Unknown Worlds 公告。比这更弱的说法只能当观察项。',
      },
      {
        title: '大更新后再复查一次',
        body: '抢先体验期间平台支持可能变化，但猜测很容易过期。路线图更新或大补丁之后，再看官方页面。',
      },
    ],
    tableTitle: 'Mac 相关搜索怎么回答',
    tableHeaders: ['问题', '当前答案'],
    tableRows: [
      [
        'Subnautica 2 Mac 发售日',
        '当前检查到的 Steam、Xbox 和 Unknown Worlds 官方来源没有给出 Mac 发售日。',
      ],
      [
        'Subnautica 2 支持 macOS 吗？',
        '除非 Steam 系统需求或开发者公告明确写 macOS，否则不要当作已支持。',
      ],
      [
        'Subnautica 2 Apple Silicon',
        'M1、M2、M3、M4 相关说法都先按未确认处理，除非出现原生版本或官方测试路径。',
      ],
      [
        'Mac 能不能通过云游戏玩？',
        '可能可以，但取决于订阅、地区、延迟和设备支持。这不是 Mac 原生版。',
      ],
      [
        'Mac 玩家现在怎么办？',
        '关注 Steam 页面和 Unknown Worlds 路线图；想现在玩，就走已确认的 Windows/Xbox 路径。',
      ],
    ],
    visualTitle: 'Mac 购买判断卡',
    visualItems: [
      {
        label: '原生 Mac',
        value: '未确认',
        note: '当前官方来源没有列出 Mac 版本。',
      },
      {
        label: 'Steam 配置',
        value: 'Windows',
        note: '购买前看商店需求表。',
      },
      {
        label: '绕路方案',
        value: '云/远程',
        note: '可能可用，但不是 Mac 移植版。',
      },
    ],
    cautionTitle: '不要为了传闻里的 Mac 支持下单',
    cautionBody:
      '兼容性帖子有时写得很肯定，尤其会提 Apple Silicon。更稳的规则很简单：Steam 或 Unknown Worlds 没写 macOS，就不要把它当成已支持。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 会出 Mac 版吗？',
        body: '截至 2026 年 6 月 3 日检查的来源，没有确认 Mac 发售日。后续看 Steam 和 Unknown Worlds 是否明确公布。',
      },
      {
        title: 'Subnautica 2 支持 Apple Silicon 吗？',
        body: '目前官方来源没有确认。Apple Silicon 性能猜测不等于原生版本。',
      },
      {
        title: 'Mac 能运行 Windows 版吗？',
        body: '兼容层和远程方案不属于官方支持。如果你自己测试，先备份存档，并准备接受抢先体验阶段的性能波动。',
      },
      {
        title: '只有 Mac，要不要现在买？',
        body: '只有在你已经有确认可用的玩法路径时才建议买，比如单独的 Windows/Xbox 设备，或者你已经测试过的云游戏方案。不要为了未来可能有 Mac 版而下单。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2SystemRequirements, label: '配置要求' },
      { href: Routes.Subnautica2SteamDeckSettings, label: 'Steam Deck 设置' },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      { href: Routes.Subnautica2ReleaseDate, label: '发售日' },
      {
        href: Routes.Subnautica2EarlyAccessWorthIt,
        label: '抢先体验值不值得买',
      },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 3 日检查 Steam 抢先体验页面、Xbox 官方页面和 Unknown Worlds 路线图。页面配图为 Abyss Guides 原创，用来说明平台状态，没有复制官方截图。',
    cardKicker: 'Mac 状态卡',
    cardBody:
      '面向 Mac、macOS、Apple Silicon、Steam 配置、Windows PC、云游戏和抢先体验平台检查的买前页面。',
    cardTypeLabel: '类型',
    cardTypeValue: '平台观察指南',
    cardVerifiedLabel: '已检查',
    cardStatusLabel: '状态',
    cardStatusValue: '未确认 Mac 发售日',
  },
};

function getCopy(locale: Locale): MacCopy {
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
    pathname: Routes.Subnautica2MacReleaseDate,
  });
}

export default async function Subnautica2MacReleaseDatePage({
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
      icon={MonitorPlayIcon}
      locale={locale}
      pathname={Routes.Subnautica2MacReleaseDate}
      sources={sharedSources}
    />
  );
}
