import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { BadgeDollarSignIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type PriceCopy = ResourceGuideCopy & {
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
];

const copyByLocale: Record<string, PriceCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Price: Steam, Xbox, Game Pass, and Buy-or-Wait Tips',
      description:
        'A source-backed Subnautica 2 price guide covering Steam regional pricing, the Xbox US $29.99+ listing, Game Pass checks, Early Access price caveats, and whether to buy now or wait.',
    },
    eyebrow: 'Subnautica 2 price check',
    title: 'Subnautica 2 Price: What to Check Before You Buy',
    description:
      'Price pages go stale fast, so this guide is built around the store pages players actually use. Check the live price, then decide whether Early Access is worth paying for today.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'On June 3, 2026, the official Xbox US listing showed Subnautica 2 at $29.99+, while Steam pricing should be checked in your own region because Steam storefronts localize currency, taxes, and discounts. Steam also says the price may increase after Early Access, so a cheap-looking wait is not guaranteed. If you have Game Pass access where the game is listed for you, use that as the lower-risk test path before buying a permanent copy.',
    fieldNotesTitle: 'How to read the price',
    fieldNotes: [
      {
        title: 'Use the store you will actually play on',
        body: 'Steam, Xbox, PC Game Pass, and Cloud can show different wording. A price found on one store is not a promise for another region or platform.',
      },
      {
        title: 'Early Access pricing can move',
        body: 'Steam says the price may rise after Early Access. That makes the buy-or-wait decision less simple than waiting for a finished build.',
      },
      {
        title: 'Game Pass lowers risk, not friction',
        body: 'A subscription can be a good test path, but you still need to check platform availability, storage, performance, co-op, and save behavior.',
      },
    ],
    routeChecklistTitle: 'Before paying',
    routeChecklist: [
      'Open Steam or Xbox directly and check the price in your account region.',
      'Confirm whether you want a permanent copy or a subscription test through Game Pass.',
      'Read the roadmap so you know what Early Access still needs.',
      'Check PC requirements before buying on Steam.',
      'If you plan to play co-op, make sure your friends are using compatible platforms.',
      'Do not assume a discount or final-launch price until the store page shows it.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Buy now, use Game Pass, or wait',
    routeSteps: [
      {
        title: 'Start with the live storefront',
        body: 'Search results often cache old prices. Open Steam or Xbox directly, sign in if needed, and check the price shown for your region.',
      },
      {
        title: 'Decide whether you are buying access or testing interest',
        body: 'If you know you want to follow Early Access patches, buying a copy makes sense. If you mainly want to see whether the build feels good, Game Pass is the cleaner first stop where available.',
      },
      {
        title: 'Read the Early Access warning like a buyer',
        body: 'The important detail is not only that the game is unfinished. It is that saves, co-op, resource routes, performance, and content amount can change after you pay.',
      },
      {
        title: 'Check the refund window yourself',
        body: 'Steam and platform refunds depend on account, region, play time, and policy. Treat refund rules as a store question, not a guide-page promise.',
      },
      {
        title: 'Recheck price during major updates',
        body: 'Roadmap drops, hotfixes, seasonal sales, and a future 1.0 push can all change what feels like the right buy point.',
      },
    ],
    tableTitle: 'Price search answers',
    tableHeaders: ['Search', 'Practical answer'],
    tableRows: [
      [
        'subnautica 2 price',
        'Check Steam or Xbox directly. On June 3, 2026, the Xbox US listing showed $29.99+.',
      ],
      [
        'subnautica 2 steam price',
        'Steam localizes price by region, taxes, currency, and discounts. Open the Steam page while signed in.',
      ],
      [
        'subnautica 2 game pass price',
        'Game Pass is a subscription path, not the same as owning a permanent copy. Check the Xbox listing for current availability.',
      ],
      [
        'subnautica 2 sale',
        'Do not plan around a sale until the store page shows one. Wishlist the game if you are waiting for a discount.',
      ],
      [
        'should i buy subnautica 2 now',
        'Buy now if you want Early Access exploration. Wait if you mainly want a finished story and settled balance.',
      ],
    ],
    visualTitle: 'Price check card',
    visualItems: [
      {
        label: 'Xbox US',
        value: '$29.99+',
        note: 'Shown on the official Xbox US listing when checked.',
      },
      {
        label: 'Steam',
        value: 'Regional',
        note: 'Use your own storefront for currency and taxes.',
      },
      {
        label: 'Game Pass',
        value: 'Try first',
        note: 'Useful where the listing is available to you.',
      },
    ],
    cautionTitle: 'Do not copy a price without a date',
    cautionBody:
      'Prices can change by country, sale, tax display, platform, and Early Access stage. A good Subnautica 2 price answer should name the store checked, the date checked, and what the player still needs to confirm in their own account.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How much is Subnautica 2?',
        body: 'On June 3, 2026, the Xbox US listing showed $29.99+. Steam should be checked in your own region because pricing is localized.',
      },
      {
        title: 'Will Subnautica 2 get more expensive?',
        body: 'Steam says the price may increase after Early Access. That is not the same as a dated price change, but it is worth factoring into the buy-or-wait call.',
      },
      {
        title: 'Is Game Pass cheaper than buying?',
        body: 'It can be cheaper as a test path if you already use Game Pass. It is still a subscription, so it is not the same as owning the game.',
      },
      {
        title: 'Should I wait for a sale?',
        body: 'Wait if you are price-sensitive or want a more finished build. Just do not assume a sale or final price until Steam or Xbox shows it.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2EarlyAccessWorthIt,
        label: 'Is Early Access Worth It?',
      },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      {
        href: Routes.Subnautica2SystemRequirements,
        label: 'System Requirements',
      },
      { href: Routes.Subnautica2ReleaseDate, label: 'Release Date' },
      { href: Routes.Subnautica2OfflineMode, label: 'Offline Mode' },
      { href: Routes.Subnautica2CoopPlayerCount, label: 'Co-op Player Count' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 3, 2026 against the official Steam Early Access page, the official Xbox US listing, and the Unknown Worlds Early Access roadmap. Xbox US showed $29.99+ when checked; Steam pricing is treated as regional because store currency, tax display, and discounts can vary.',
    cardKicker: 'Price card',
    cardBody:
      'A buyer-focused page for Steam price checks, Xbox pricing, Game Pass, regional pricing, and whether Early Access is worth paying for now.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Buying guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Best path',
    cardStatusValue: 'Check store',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 多少钱？Steam、Xbox、Game Pass 和购买建议',
      description:
        'Subnautica 2 价格中文指南：Steam 区域价格、Xbox 美区 $29.99+、Game Pass、抢先体验涨价提示，以及现在买还是等。',
    },
    eyebrow: 'Subnautica 2 价格检查',
    title: 'Subnautica 2 多少钱？买之前先看这几项',
    description:
      '价格类页面最容易过时，所以这里不只写一个数字。先看你实际要玩的商店价格，再决定现在买、先用 Game Pass 试，还是等正式版。',
    quickLabel: '快速结论',
    quickAnswer:
      '2026 年 6 月 3 日检查时，Xbox 美区官方页面显示 Subnautica 2 为 $29.99+；Steam 价格要按你自己的地区页面确认，因为货币、税费和折扣会本地化。Steam 页面还写明抢先体验后价格可能上涨，所以“等等一定更便宜”不能当成确定结论。如果你的地区能用 Game Pass，先试再买会更稳。',
    fieldNotesTitle: '看价格时别只看一个数字',
    fieldNotes: [
      {
        title: '看你真正会玩的商店',
        body: 'Steam、Xbox、PC Game Pass 和 Cloud 的展示文字可能不同。一个平台的价格，不能直接套到另一个地区或设备。',
      },
      {
        title: '抢先体验价格可能变化',
        body: 'Steam 写的是抢先体验后价格可能上涨。也就是说，现在买还是等正式版，不只是“等打折”这么简单。',
      },
      {
        title: 'Game Pass 降低试错成本',
        body: '订阅适合先试手感，但你还是要检查平台可用性、容量、性能、联机和存档行为。',
      },
    ],
    routeChecklistTitle: '付款前检查',
    routeChecklist: [
      '直接打开 Steam 或 Xbox，看自己账号地区显示的价格。',
      '想清楚你要永久拥有，还是先用 Game Pass 试。',
      '先读路线图，知道抢先体验还缺什么。',
      'Steam 购买前先看 PC 配置要求。',
      '准备和朋友联机的话，确认大家平台兼容。',
      '别预设会打折，也别预设正式版价格，等商店页面显示再说。',
    ],
    contentsLabel: '目录',
    routeTitle: '现在买、Game Pass 试，还是继续等',
    routeSteps: [
      {
        title: '先看实时商店页面',
        body: '搜索结果可能缓存旧价格。直接打开 Steam 或 Xbox，必要时登录账号，看自己地区显示的价格。',
      },
      {
        title: '区分“购买”还是“试试”',
        body: '如果你本来就想追补丁、玩抢先体验，买断可以；如果只是想看看当前版本手感，能用 Game Pass 就先试。',
      },
      {
        title: '把抢先体验提示当成购买信息',
        body: '重点不只是游戏没做完，而是存档、联机、资源路线、性能和内容量都可能在你付款后继续变化。',
      },
      {
        title: '退款规则自己到平台确认',
        body: 'Steam 和平台退款会受账号、地区、游玩时长和政策影响。退款不是攻略页能替商店承诺的事。',
      },
      {
        title: '大更新和促销时重新查价',
        body: '路线图更新、hotfix、季节促销和未来 1.0 都可能改变“什么时候买最合适”。',
      },
    ],
    tableTitle: '价格搜索怎么回答',
    tableHeaders: ['搜索词', '实用答案'],
    tableRows: [
      [
        'subnautica 2 price',
        '直接看 Steam 或 Xbox。2026 年 6 月 3 日检查时，Xbox 美区显示 $29.99+。',
      ],
      [
        'subnautica 2 steam price',
        'Steam 会按地区、货币、税费和折扣本地化，最好登录自己的 Steam 页面看。',
      ],
      [
        'subnautica 2 game pass price',
        'Game Pass 是订阅路径，不等于永久拥有。当前可用性以 Xbox 页面为准。',
      ],
      [
        'subnautica 2 sale',
        '别在商店显示前预设折扣。想等降价，可以先加愿望单。',
      ],
      [
        'should i buy subnautica 2 now',
        '想参与抢先体验探索就可以买；更在意完整剧情和稳定平衡就等。',
      ],
    ],
    visualTitle: '价格检查卡',
    visualItems: [
      {
        label: 'Xbox 美区',
        value: '$29.99+',
        note: '检查时官方 Xbox 美区页面显示的价格。',
      },
      {
        label: 'Steam',
        value: '按地区',
        note: '以你自己的商店货币和税费显示为准。',
      },
      {
        label: 'Game Pass',
        value: '先试',
        note: '所在地区可用时，适合降低试错成本。',
      },
    ],
    cautionTitle: '不要复制没有日期的价格',
    cautionBody:
      '游戏价格会因为国家、促销、税费显示、平台和抢先体验阶段而变化。一个靠谱的 Subnautica 2 价格页面，应该写清楚检查了哪个商店、哪天检查，以及玩家还需要在自己账号里确认什么。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 多少钱？',
        body: '2026 年 6 月 3 日检查时，Xbox 美区显示 $29.99+。Steam 价格请按你自己的地区页面确认。',
      },
      {
        title: 'Subnautica 2 会涨价吗？',
        body: 'Steam 页面写的是抢先体验后价格可能上涨。这不是具体涨价日期，但买不买时应该算进去。',
      },
      {
        title: 'Game Pass 比买断更划算吗？',
        body: '如果你本来就有 Game Pass，它适合先试。但订阅不等于永久拥有游戏。',
      },
      {
        title: '要不要等打折？',
        body: '预算敏感或想等更完整版本，可以等。只是不要在 Steam 或 Xbox 显示前假设一定有折扣。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      {
        href: Routes.Subnautica2EarlyAccessWorthIt,
        label: '抢先体验值不值得买',
      },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      { href: Routes.Subnautica2SystemRequirements, label: '配置要求' },
      { href: Routes.Subnautica2ReleaseDate, label: '发售时间' },
      { href: Routes.Subnautica2OfflineMode, label: '离线模式' },
      { href: Routes.Subnautica2CoopPlayerCount, label: '联机人数' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 3 日核对 Steam 抢先体验页面、Xbox 美区官方页面和 Unknown Worlds 抢先体验路线图。检查时 Xbox 美区显示 $29.99+；Steam 价格按地区处理，因为货币、税费显示和折扣会变化。',
    cardKicker: '价格卡',
    cardBody:
      '给买前玩家看的价格页：Steam 区域价格、Xbox 价格、Game Pass、抢先体验价格风险，以及现在买还是等。',
    cardTypeLabel: '类型',
    cardTypeValue: '购买指南',
    cardVerifiedLabel: '检查时间',
    cardStatusLabel: '建议',
    cardStatusValue: '先查商店',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = copyByLocale[locale] ?? copyByLocale.en;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2Price,
  });
}

export default async function Subnautica2PricePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = copyByLocale[locale] ?? copyByLocale.en;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
        checkedAt: UPDATED_AT,
      }}
      icon={BadgeDollarSignIcon}
      locale={locale}
      pathname={Routes.Subnautica2Price}
      sources={sharedSources}
    />
  );
}
