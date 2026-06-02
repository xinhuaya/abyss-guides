import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { Gamepad2Icon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type SwitchReleaseCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-06-03';
const UPDATED_AT = '2026-06-03';

const sharedSources = [
  {
    href: 'https://www.nintendo.com/en-ca/store/products/subnautica-nintendo-switch-2-edition-switch-2/',
    label: 'Nintendo Subnautica Switch 2 Edition page',
  },
  {
    href: 'https://www.nintendo.com/en-ca/store/products/subnautica-below-zero-nintendo-switch-2-edition-switch-2/',
    label: 'Nintendo Subnautica: Below Zero Switch 2 Edition page',
  },
  {
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/?l=english',
    label: 'Official Steam Subnautica 2 page',
  },
  {
    href: 'https://www.xbox.com/en-US/games/store/subnautica-2/9pjpcb188svg',
    label: 'Official Xbox Subnautica 2 listing',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap',
    label: 'Unknown Worlds Early Access roadmap',
  },
];

const copyByLocale: Record<string, SwitchReleaseCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Switch 2 Release Date: Nintendo Status and Platforms',
      description:
        'A careful Subnautica 2 Nintendo Switch 2 release date guide that separates old Subnautica Switch 2 Edition pages from confirmed Subnautica 2 Steam, Xbox, Game Pass, and Early Access sources.',
    },
    eyebrow: 'Subnautica 2 Nintendo status',
    title: 'Subnautica 2 Switch 2 Release Date: What Is Actually Confirmed',
    description:
      'Nintendo searches are easy to mix up right now. The original Subnautica games have Switch 2 Edition pages, but that does not create a Subnautica 2 Switch 2 date. Treat those as separate products until an official Subnautica 2 Nintendo page exists.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'We do not have a Subnautica 2 Nintendo Switch 2 release date that is confirmed by the sources checked on June 3, 2026. Nintendo has official Switch 2 Edition pages for Subnautica and Subnautica: Below Zero, while Subnautica 2 is confirmed here through the Steam page, Xbox listing, and Unknown Worlds Early Access roadmap. If a page gives you a Switch 2 date for Subnautica 2 without a Nintendo or Unknown Worlds source, treat it as unconfirmed.',
    fieldNotesTitle: 'Why players get confused',
    fieldNotes: [
      {
        title: 'Old games are not Subnautica 2',
        body: 'Nintendo pages for Subnautica and Below Zero can appear beside Subnautica 2 searches. They are useful context, but they are not a release date for the sequel.',
      },
      {
        title: 'Portable searches are high intent',
        body: 'A player searching Switch 2 usually wants a buying answer: wait for Nintendo, play on Xbox or PC, or use a handheld PC now.',
      },
      {
        title: 'Early Access matters',
        body: 'Subnautica 2 is still moving through Early Access. Patches, performance, co-op, and content cadence matter more than a guessed console window.',
      },
    ],
    routeChecklistTitle: 'Before trusting a Switch 2 date',
    routeChecklist: [
      'Check whether the page is about Subnautica, Below Zero, or Subnautica 2.',
      'Look for a Nintendo store page or Unknown Worlds announcement.',
      'Separate Steam Deck and handheld PC advice from Nintendo Switch 2 claims.',
      'Check Xbox and Steam if you want to play the current Early Access build.',
      'Ignore countdown pages that do not link to an official source.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to read the Switch 2 situation',
    routeSteps: [
      {
        title: 'Start with the Nintendo pages that do exist',
        body: 'Nintendo has official pages for Subnautica and Subnautica: Below Zero Switch 2 Editions. Those pages show that earlier games are present on the platform, but they do not confirm Subnautica 2.',
      },
      {
        title: 'Check the current Subnautica 2 platform sources',
        body: 'For Subnautica 2 itself, Steam and Xbox are the official platform pages to read now. Unknown Worlds roadmap posts explain the Early Access update path.',
      },
      {
        title: 'Do not treat Steam Deck as Switch 2 evidence',
        body: 'Steam Deck Verified means the Steam version has a handheld PC path. It does not say anything about a Nintendo release date.',
      },
      {
        title: 'Use the page as a watchlist',
        body: 'A Nintendo date should be easy to verify once it exists. Until then, this page should help players avoid mixing old product pages, wishlists, and speculative console posts.',
      },
    ],
    tableTitle: 'Switch and Nintendo search answers',
    tableHeaders: ['Search term', 'Careful answer'],
    tableRows: [
      [
        'subnautica 2 switch 2 release date',
        'No official Switch 2 date is confirmed by the sources checked here.',
      ],
      [
        'subnautica 2 nintendo switch',
        'Do not confuse Subnautica or Below Zero Switch 2 Edition pages with Subnautica 2.',
      ],
      [
        'subnautica 2 portable',
        'For current portable play, check Steam Deck and handheld PC guidance, not Nintendo timing.',
      ],
      [
        'subnautica 2 console release',
        'Xbox information is official; Nintendo and PlayStation timing should stay unconfirmed until sourced.',
      ],
      [
        'subnautica 2 switch preorder',
        'Do not trust preorder wording unless it links to Nintendo or Unknown Worlds.',
      ],
    ],
    visualTitle: 'Nintendo watch card',
    visualItems: [
      {
        label: 'Switch 2 date',
        value: 'Unconfirmed',
        note: 'No official sequel listing is linked here yet.',
      },
      {
        label: 'Old games',
        value: 'Listed',
        note: 'Subnautica and Below Zero have Switch 2 Edition pages.',
      },
      {
        label: 'Current build',
        value: 'EA',
        note: 'Steam and Xbox are the live platform sources for Subnautica 2.',
      },
    ],
    cautionTitle:
      'Do not let the old Switch 2 pages answer the sequel question',
    cautionBody:
      'It is reasonable to watch Nintendo because older Subnautica games have Switch 2 pages. It is not reasonable to turn that into a Subnautica 2 date. The moment an official sequel page appears, the answer changes; until then, write it as unconfirmed.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Is Subnautica 2 coming to Nintendo Switch 2?',
        body: 'This page has no official source confirming a Subnautica 2 Switch 2 release date. It only links Nintendo pages for the older games as context.',
      },
      {
        title: 'Why are Subnautica Switch 2 pages showing up in searches?',
        body: 'Nintendo has pages for Subnautica and Subnautica: Below Zero Switch 2 Editions. Search engines can surface those near Subnautica 2 queries even though they are different products.',
      },
      {
        title: 'Can I play Subnautica 2 on a handheld now?',
        body: 'If you mean handheld PC, read the Steam Deck settings page. If you mean Nintendo Switch 2, wait for an official Nintendo or Unknown Worlds source.',
      },
      {
        title: 'What should Nintendo players watch next?',
        body: 'Watch the release-date page, official Unknown Worlds posts, and platform store pages. Avoid unsourced preorder or countdown pages.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2ReleaseDate, label: 'Release Date Guide' },
      { href: Routes.Subnautica2Ps5ReleaseDate, label: 'PS5 Release Date' },
      {
        href: Routes.Subnautica2SteamDeckSettings,
        label: 'Steam Deck Settings',
      },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      {
        href: Routes.Subnautica2EarlyAccessWorthIt,
        label: 'Is Early Access Worth It?',
      },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 3, 2026 against Nintendo pages for Subnautica and Below Zero Switch 2 Editions, plus the official Steam page, Xbox listing, and Unknown Worlds roadmap for Subnautica 2. Page art is original Abyss Guides artwork; the embedded video is the official Subnautica trailer.',
    cardKicker: 'Nintendo watch',
    cardBody:
      'A platform watch page for players searching Switch 2, Nintendo Switch, portable play, console release, and preorder timing.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Platform status',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Switch 2',
    cardStatusValue: 'Unconfirmed',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Switch 2 发售日：任天堂平台状态和官方来源',
      description:
        'Subnautica 2 Nintendo Switch 2 发售日中文整理：区分旧作 Switch 2 Edition 页面和 Subnautica 2 当前已确认的 Steam、Xbox、Game Pass、抢先体验来源。',
    },
    eyebrow: 'Subnautica 2 任天堂平台状态',
    title: 'Subnautica 2 Switch 2 发售日：目前能确认什么',
    description:
      '现在搜 Nintendo 或 Switch 2 很容易混淆。初代 Subnautica 和 Below Zero 有 Switch 2 Edition 页面，但这不等于 Subnautica 2 已经有 Switch 2 发售日。没有官方续作页面之前，先把它们当成不同产品。',
    quickLabel: '快速结论',
    quickAnswer:
      '截至 2026 年 6 月 3 日核对的来源，本页没有找到可以确认的 Subnautica 2 Nintendo Switch 2 发售日。Nintendo 有初代 Subnautica 和 Subnautica: Below Zero 的 Switch 2 Edition 官方页面；Subnautica 2 当前可引用的是 Steam 页面、Xbox 商店和 Unknown Worlds 抢先体验路线图。如果某个页面给了 Switch 2 日期，但没有 Nintendo 或 Unknown Worlds 来源，先按未确认处理。',
    fieldNotesTitle: '为什么容易混淆',
    fieldNotes: [
      {
        title: '旧作不是 Subnautica 2',
        body: 'Nintendo 的 Subnautica 和 Below Zero 页面可能会出现在 Subnautica 2 搜索旁边。它们可以作为平台背景，但不能当成续作发售日。',
      },
      {
        title: '掌机搜索是买前搜索',
        body: '搜 Switch 2 的玩家通常想知道该不该等 Nintendo 版、现在玩 Xbox/PC，还是先用掌机 PC 路线。',
      },
      {
        title: '抢先体验阶段要看补丁节奏',
        body: 'Subnautica 2 仍在抢先体验推进中。补丁、性能、联机和内容节奏，比猜一个主机窗口更有参考价值。',
      },
    ],
    routeChecklistTitle: '相信 Switch 2 日期前先检查',
    routeChecklist: [
      '页面说的是 Subnautica、Below Zero，还是 Subnautica 2。',
      '有没有 Nintendo 商店页或 Unknown Worlds 公告。',
      '不要把 Steam Deck 和掌机 PC 建议当成 Nintendo Switch 2 证据。',
      '想现在玩当前抢先体验版本，就先看 Xbox 和 Steam。',
      '没有官方来源链接的倒计时页面先不要信。',
    ],
    contentsLabel: '目录',
    routeTitle: '怎么判断 Switch 2 状态',
    routeSteps: [
      {
        title: '先看已经存在的 Nintendo 页面',
        body: 'Nintendo 有 Subnautica 和 Subnautica: Below Zero Switch 2 Edition 官方页面。这说明旧作在平台上有页面，但不能用来确认 Subnautica 2。',
      },
      {
        title: '再看 Subnautica 2 当前平台来源',
        body: '就 Subnautica 2 本身来说，现在优先看 Steam 和 Xbox 官方页面；Unknown Worlds 路线图用来判断抢先体验后续更新方向。',
      },
      {
        title: '不要把 Steam Deck 当成 Switch 2 证据',
        body: 'Steam Deck Verified 说明的是 Steam 版掌机 PC 路线，不代表 Nintendo 发售日。',
      },
      {
        title: '把这个页面当观察页',
        body: '真正的 Nintendo 日期应该很容易核对。出现官方续作页面之前，本页的作用是帮玩家避开旧作页面、愿望单和无来源主机传闻的混淆。',
      },
    ],
    tableTitle: 'Switch 和 Nintendo 搜索怎么回答',
    tableHeaders: ['搜索词', '谨慎回答'],
    tableRows: [
      [
        'subnautica 2 switch 2 release date',
        '本页核对的官方来源里，还没有确认的 Switch 2 日期。',
      ],
      [
        'subnautica 2 nintendo switch',
        '不要把 Subnautica 或 Below Zero 的 Switch 2 Edition 页面当成 Subnautica 2。',
      ],
      [
        'subnautica 2 portable',
        '如果是当前掌机体验，先看 Steam Deck 和掌机 PC；如果是 Nintendo，等官方来源。',
      ],
      [
        'subnautica 2 console release',
        'Xbox 信息有官方来源；Nintendo 和 PlayStation 时间仍要等来源。',
      ],
      [
        'subnautica 2 switch preorder',
        '没有 Nintendo 或 Unknown Worlds 链接的预购文字不要信。',
      ],
    ],
    visualTitle: 'Nintendo 观察卡',
    visualItems: [
      {
        label: 'Switch 2 日期',
        value: '未确认',
        note: '本页暂未链接到续作官方页面。',
      },
      {
        label: '旧作',
        value: '有页面',
        note: 'Subnautica 和 Below Zero 有 Switch 2 Edition 页面。',
      },
      {
        label: '当前版本',
        value: 'EA',
        note: 'Subnautica 2 当前平台来源是 Steam 和 Xbox。',
      },
    ],
    cautionTitle: '不要让旧作 Switch 2 页面替续作回答',
    cautionBody:
      '因为旧作有 Switch 2 页面，所以关注 Nintendo 是合理的。但把这件事写成 Subnautica 2 已有日期就不合理。等官方续作页面出现，答案自然会变；在那之前，应该写未确认。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 会登陆 Nintendo Switch 2 吗？',
        body: '本页还没有官方来源能确认 Subnautica 2 Switch 2 发售日。Nintendo 旧作页面只作为背景参考。',
      },
      {
        title: '为什么搜索里会出现 Subnautica Switch 2 页面？',
        body: '因为 Nintendo 有 Subnautica 和 Subnautica: Below Zero Switch 2 Edition 页面。搜索引擎可能把它们放在 Subnautica 2 查询附近，但它们不是同一个产品。',
      },
      {
        title: '现在能在掌机上玩 Subnautica 2 吗？',
        body: '如果你说的是掌机 PC，请看 Steam Deck 设置页。如果你说的是 Nintendo Switch 2，就等 Nintendo 或 Unknown Worlds 官方来源。',
      },
      {
        title: '任天堂玩家接下来该关注什么？',
        body: '关注发售日总览、Unknown Worlds 官方文章和平台商店页。没有来源的预购和倒计时页面先不要信。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2ReleaseDate, label: '发售日总览' },
      { href: Routes.Subnautica2Ps5ReleaseDate, label: 'PS5 发售日' },
      { href: Routes.Subnautica2SteamDeckSettings, label: 'Steam Deck 设置' },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      {
        href: Routes.Subnautica2EarlyAccessWorthIt,
        label: '抢先体验值不值得买',
      },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 3 日核对 Nintendo 上 Subnautica 和 Below Zero Switch 2 Edition 页面，以及 Subnautica 2 的 Steam 官方页面、Xbox 商店和 Unknown Worlds 路线图。页面图片为 Abyss Guides 原创图；视频为 Subnautica 官方预告嵌入。',
    cardKicker: 'Nintendo 观察',
    cardBody:
      '给搜索 Switch 2、Nintendo Switch、掌机玩法、主机版和预购时间的玩家看的平台观察页。',
    cardTypeLabel: '类型',
    cardTypeValue: '平台状态',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: 'Switch 2',
    cardStatusValue: '未确认',
  },
};

function getCopy(locale: Locale): SwitchReleaseCopy {
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
    pathname: Routes.Subnautica2Switch2ReleaseDate,
  });
}

export default async function Switch2ReleaseDatePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <LocalizedResourceGuidePage
      copy={{ ...copy, publishedAt: PUBLISHED_AT, updatedAt: UPDATED_AT }}
      icon={Gamepad2Icon}
      locale={locale}
      pathname={Routes.Subnautica2Switch2ReleaseDate}
      sources={sharedSources}
    />
  );
}
