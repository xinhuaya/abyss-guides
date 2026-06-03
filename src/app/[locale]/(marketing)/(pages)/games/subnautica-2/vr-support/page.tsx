import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { MonitorPlayIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type VrCopy = ResourceGuideCopy & {
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
    href: 'https://www.roadtovr.com/play-subnautica-2-vr-guide/',
    label: 'Road to VR setup guide',
  },
  {
    href: 'https://flat2vrstudios.com/',
    label: 'Flat2VR Studios',
  },
  {
    href: 'https://www.youtube.com/watch?v=6t2nDHldoSk',
    label: 'Official Subnautica 2 gameplay trailer',
  },
];

const copyByLocale: Record<string, VrCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 VR Support - Official Status, Flat2VR Talk, and Comfort Checks',
      description:
        'A practical Subnautica 2 VR support guide covering official Steam wording, Flat2VR coverage, UEVR-style experiments, comfort risk, performance, and when to wait.',
    },
    eyebrow: 'Subnautica 2 VR status',
    title: 'Subnautica 2 VR Support: What Is Official and What Is Experimental',
    description:
      'Subnautica and VR are a natural search pair, but the safe answer is boring in a useful way: separate official store wording from experimental community routes before buying a headset, installing a tool, or expecting a finished VR mode.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Check the official Steam page first. If VR support is not shown as an official feature for your build, treat any VR setup as experimental. Road to VR has covered Flat2VR-related interest, and PC players may see community experiments, but those are not the same thing as a polished built-in VR mode. Expect performance cost, comfort issues, UI problems, and patch breakage.',
    fieldNotesTitle: 'What to separate',
    fieldNotes: [
      {
        title: 'Store wording beats wishful posts',
        body: 'The Steam page is the first place to check features, requirements, and Early Access language. Search snippets can lag behind store changes.',
      },
      {
        title: 'Experimental VR can break quickly',
        body: 'Tools that hook into a PC game can be impressive, but Early Access patches, DLSS changes, UI updates, and anti-crash fixes can change the experience overnight.',
      },
      {
        title: 'Comfort matters more underwater',
        body: 'Swimming, turning, floating, vehicles, dark caves, and frame drops can make VR comfort harder than a flat-screen settings page suggests.',
      },
    ],
    routeChecklistTitle: 'VR decision checklist',
    routeChecklist: [
      'Confirm whether the current official store page lists VR support.',
      'Read current roadmap wording before assuming a future VR mode.',
      'Do not buy hardware only for an unofficial setup.',
      'Expect lower settings and a stricter frame target than flat-screen play.',
      'Test comfort in short sessions before touching a long save.',
      'Keep a normal flat-screen setup ready in case a patch breaks the experiment.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to think about Subnautica 2 VR right now',
    routeSteps: [
      {
        title: 'Start with official feature wording',
        body: 'Open the Steam page and look at the features and requirements. If the current listing does not clearly say VR, do not treat community videos or forum posts as official support.',
      },
      {
        title: 'Separate Flat2VR interest from a shipped mode',
        body: 'Flat2VR and VR outlets are worth watching, but coverage and interest do not mean every player has a stable one-click VR mode today.',
      },
      {
        title: 'Treat UEVR-style setups as PC experiments',
        body: 'Experimental injector-style setups can vary by GPU, driver, game build, settings, and user tolerance. They are not a good baseline for a casual buyer.',
      },
      {
        title: 'Plan for a performance hit',
        body: 'VR usually needs steadier frame pacing than flat-screen play. If your PC is already near minimum requirements, test flat-screen stability before trying anything heavier.',
      },
      {
        title: 'Check UI and input before judging the world',
        body: 'A VR view can look exciting while menus, crafting, scanner use, or vehicle controls still feel awkward. Test the boring parts too.',
      },
      {
        title: 'Wait if comfort is the real goal',
        body: 'If you want a polished underwater VR survival game rather than a technical experiment, waiting for clearer official support is the safer expectation.',
      },
    ],
    tableTitle: 'VR search terms and safer answers',
    tableHeaders: ['Search', 'Safer answer'],
    tableRows: [
      [
        'subnautica 2 vr support',
        'Check the official store page first; treat everything else as experimental unless confirmed.',
      ],
      [
        'subnautica 2 flat2vr',
        'Follow coverage, but do not treat interest or reporting as a shipped mode.',
      ],
      [
        'subnautica 2 uevr',
        'Expect PC-specific setup, performance cost, UI quirks, and patch breakage.',
      ],
      [
        'subnautica 2 quest 3',
        'Do not assume standalone Quest play. Check PC streaming requirements and official platform wording.',
      ],
      [
        'subnautica 2 psvr2',
        'Keep it in the watch column unless official PlayStation and VR support are announced together.',
      ],
    ],
    visualTitle: 'VR comfort card',
    visualItems: [
      {
        label: 'Official check',
        value: 'Steam',
        note: 'Feature wording comes first.',
      },
      {
        label: 'Experiment risk',
        value: 'High',
        note: 'Patches, UI, and performance can shift.',
      },
      {
        label: 'Comfort test',
        value: 'Short dives',
        note: 'Try ten minutes before a long save.',
      },
    ],
    cautionTitle: 'Do not buy hardware for an unconfirmed mode',
    cautionBody:
      'A good fan video can make VR look finished. That is not enough reason to buy a headset, promise friends a VR co-op night, or assume official support. Wait for current store wording, developer notes, or a stable toolchain you understand.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Does Subnautica 2 have official VR support?',
        body: 'Use the current official store page as the source of truth. If VR is not listed there for your build, treat VR as unconfirmed or experimental.',
      },
      {
        title: 'Will Flat2VR make Subnautica 2 VR?',
        body: 'Flat2VR-related coverage is worth watching, but interest or reporting is not the same as a stable release for every player.',
      },
      {
        title: 'Can I play Subnautica 2 VR with Quest 3?',
        body: 'Do not assume standalone Quest support. Any PC-based experiment would still depend on your PC, headset link setup, drivers, and performance headroom.',
      },
      {
        title: 'Should I wait for official VR support?',
        body: 'If you want comfort, easy setup, and fewer broken updates, yes. If you like tinkering, use a test save and expect to troubleshoot.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2SystemRequirements,
        label: 'System Requirements',
      },
      {
        href: Routes.Subnautica2BestSettingsLowFps,
        label: 'Best Settings for Low FPS',
      },
      {
        href: Routes.Subnautica2SteamDeckSettings,
        label: 'Steam Deck Settings',
      },
      {
        href: Routes.Subnautica2BlackScreenFreezing,
        label: 'Black Screen and Freezing',
      },
      { href: Routes.Subnautica2Mods, label: 'Mods Safety Setup' },
      { href: Routes.Subnautica2ReleaseDate, label: 'Release Date' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 3, 2026 against the official Steam page, Unknown Worlds roadmap, Road to VR coverage, Flat2VR Studios, and the official gameplay trailer. Page art is original Abyss Guides artwork.',
    cardKicker: 'VR status',
    cardBody:
      'A careful Subnautica 2 VR support page for official wording, Flat2VR interest, UEVR-style experiments, PC performance, and comfort checks.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Platform guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Recommendation',
    cardStatusValue: 'Verify first',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 VR 支持吗 - 官方状态、Flat2VR 和舒适度检查',
      description:
        'Subnautica 2 VR 中文说明：官方 Steam 页面状态、Flat2VR 相关报道、UEVR 类实验、Quest 3/PSVR2 搜索、性能和晕动风险。',
    },
    eyebrow: 'Subnautica 2 VR 状态',
    title: 'Subnautica 2 VR 支持：哪些是官方，哪些只是实验',
    description:
      'Subnautica 和 VR 很容易让人联想到一起，但现在最重要的是分清楚：官方商店页面怎么写，社区实验怎么说，二者不是一回事。',
    quickLabel: '快速结论',
    quickAnswer:
      '先看官方 Steam 页面。如果当前版本没有把 VR 写成官方功能，就把任何 VR 玩法都当成实验。Road to VR 确实关注过 Flat2VR 相关动向，PC 玩家也可能看到社区实验，但这不等于已经有稳定内置 VR 模式。你要预期性能压力、舒适度问题、UI 不适配和补丁后失效。',
    fieldNotesTitle: '先分清这几件事',
    fieldNotes: [
      {
        title: '商店页面比传言更重要',
        body: 'Steam 页面是确认功能、配置和抢先体验状态的第一来源。搜索摘要和帖子可能滞后。',
      },
      {
        title: '实验性 VR 很容易被补丁影响',
        body: '能把 PC 游戏接进 VR 的工具很厉害，但抢先体验补丁、DLSS、UI、崩溃修复都可能让体验一夜之间变化。',
      },
      {
        title: '水下 VR 更考验舒适度',
        body: '游泳、转向、漂浮、载具、黑暗洞穴和掉帧，都会让 VR 舒适度比普通画面设置更复杂。',
      },
    ],
    routeChecklistTitle: 'VR 判断清单',
    routeChecklist: [
      '先确认当前官方商店页是否列出 VR 支持。',
      '读路线图，不要自行脑补未来 VR 模式。',
      '不要只为了非官方方案购买硬件。',
      '预期比普通屏幕更低的画质和更严格的帧率目标。',
      '先用短时间测试舒适度，再打开长期存档。',
      '保留普通屏幕玩法，避免补丁后实验方案失效。',
    ],
    contentsLabel: '目录',
    routeTitle: '现在应该怎么看 Subnautica 2 VR',
    routeSteps: [
      {
        title: '先看官方功能描述',
        body: '打开 Steam 页面，看功能和配置要求。如果当前列表没有清楚写 VR，就不要把社区视频或论坛帖子当作官方支持。',
      },
      {
        title: '区分 Flat2VR 关注和已上线模式',
        body: 'Flat2VR 和 VR 媒体值得关注，但报道和兴趣不等于每个玩家今天都有稳定的一键 VR 模式。',
      },
      {
        title: '把 UEVR 类方案当成 PC 实验',
        body: '注入类或转换类实验会受显卡、驱动、游戏版本、设置和个人耐受度影响。它不适合当成普通购买建议。',
      },
      {
        title: '先预留性能余量',
        body: 'VR 通常比普通屏幕更需要稳定帧时间。如果你的电脑已经接近最低配置，先保证普通模式稳定，再考虑更重的玩法。',
      },
      {
        title: '菜单和输入也要测',
        body: '画面进入 VR 看起来很酷，但菜单、制作、扫描、载具控制可能仍然别扭。无聊的部分也要测试。',
      },
      {
        title: '如果你想要的是舒适体验，先等',
        body: '如果你要的是成熟的水下 VR 生存游戏，而不是技术实验，那等待更明确的官方支持会更稳。',
      },
    ],
    tableTitle: 'VR 搜索词和更稳答案',
    tableHeaders: ['搜索词', '更安全的回答'],
    tableRows: [
      ['subnautica 2 vr support', '先看官方商店页面；没有确认就按实验看待。'],
      ['subnautica 2 flat2vr', '可以关注报道，但不要把兴趣当成已上线模式。'],
      ['subnautica 2 uevr', '预期 PC 设置、性能、UI 和补丁兼容问题。'],
      [
        'subnautica 2 quest 3',
        '不要默认有 Quest 单机版；先看 PC 串流和官方平台说明。',
      ],
      [
        'subnautica 2 psvr2',
        '除非官方同时确认 PlayStation 和 VR，否则先放观察列表。',
      ],
    ],
    visualTitle: 'VR 舒适度卡片',
    visualItems: [
      { label: '官方检查', value: 'Steam', note: '功能描述先看这里。' },
      { label: '实验风险', value: '较高', note: '补丁、UI、性能都可能变化。' },
      {
        label: '舒适度测试',
        value: '短下潜',
        note: '先测十分钟，再碰长期存档。',
      },
    ],
    cautionTitle: '不要为了未确认模式直接买硬件',
    cautionBody:
      '一个好看的粉丝视频会让 VR 看起来像已经完成，但这不足以支撑你买头显、约朋友 VR 联机，或默认官方支持已经到位。先等商店页面、开发者说明，或你真正理解的稳定工具链。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 有官方 VR 支持吗？',
        body: '以当前官方商店页面为准。如果那里没有列出 VR，就先当作未确认或实验玩法。',
      },
      {
        title: 'Flat2VR 会做 Subnautica 2 VR 吗？',
        body: 'Flat2VR 相关报道值得关注，但关注和报道不等于所有玩家都已经有稳定版本。',
      },
      {
        title: 'Quest 3 能玩 Subnautica 2 VR 吗？',
        body: '不要默认有 Quest 单机支持。任何 PC 方案都还要看你的电脑、串流连接、驱动和性能余量。',
      },
      {
        title: '我是不是应该等官方 VR？',
        body: '如果你要的是舒适、简单安装、少折腾补丁，那就等。如果你喜欢折腾，至少用测试存档，并准备排查问题。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2SystemRequirements, label: '配置要求' },
      { href: Routes.Subnautica2BestSettingsLowFps, label: '低 FPS 设置' },
      { href: Routes.Subnautica2SteamDeckSettings, label: 'Steam Deck 设置' },
      { href: Routes.Subnautica2BlackScreenFreezing, label: '黑屏和卡死' },
      { href: Routes.Subnautica2Mods, label: 'Mods 安全设置' },
      { href: Routes.Subnautica2ReleaseDate, label: '发售日期' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 3 日核对 Steam 官方页、Unknown Worlds 路线图、Road to VR 报道、Flat2VR Studios 和官方实机预告。页面图片为 Abyss Guides 原创图。',
    cardKicker: 'VR 状态',
    cardBody:
      '围绕 Subnautica 2 VR 官方状态、Flat2VR 关注、UEVR 类实验、PC 性能和舒适度检查写的谨慎说明。',
    cardTypeLabel: '类型',
    cardTypeValue: '平台指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '建议',
    cardStatusValue: '先确认',
  },
};

function getCopy(locale: Locale): VrCopy {
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
    pathname: Routes.Subnautica2VrSupport,
  });
}

export default async function Subnautica2VrSupportPage({
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
      pathname={Routes.Subnautica2VrSupport}
      sources={sharedSources}
    />
  );
}
