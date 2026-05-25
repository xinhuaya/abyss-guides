import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { GemIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type LeadCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-26';

const sharedSources = [
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-lead-location/',
    label: 'PC Gamer Lead location guide',
  },
  {
    href: 'https://subnautica2hub.com/resources/lead',
    label: 'Subnautica2Hub Lead resource page',
  },
  {
    href: 'https://subnautica2.gg/items/lead',
    label: 'Subnautica2.gg Lead item page',
  },
];

const leadCopy: Record<string, LeadCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Lead Location Guide - Ravine Route and Sonic Resonator Prep',
      description:
        'A practical Subnautica 2 Lead guide covering the northeast Lifepod ravine, natural current route, hand pickups, Sonic Resonator use, Germanium, and Coral Gardens depth data.',
    },
    eyebrow: 'Subnautica 2 resource route',
    title: 'Subnautica 2 Lead Location Guide',
    description:
      'Lead is the annoying early metal: you need it to make mining easier, but the good mining tool also makes lead easier. The first two pieces are the whole trick.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'PC Gamer reports an early Lead route in a ravine about 280 meters northeast of the Lifepod, around bearing 75 degrees. Ride the blue natural current down, stop near the colony platform construction and Tadpole fragment, then search the ravine sand for small Lead pieces or smaller breakable blocks. Subnautica2Hub lists Lead in Coral Gardens at 0-200m, with Lead Node breaks giving early pieces and Sonic Resonator deposits becoming the efficient farm. Current public data ties Lead to Sonic Resonator, Germanium from Lead, and Sugar of Saturn.',
    contentsLabel: 'Contents',
    routeTitle: 'First Lead route',
    routeSteps: [
      {
        title: 'Use the current instead of wandering',
        body: 'PC Gamer points northeast from the Lifepod, around bearing 75 degrees, until you see a blue natural current below. Let it pull you down into the ravine instead of guessing every nearby trench.',
      },
      {
        title: 'Stop at the colony platform landmark',
        body: 'The route landmark is a colony platform construction on the left with a Tadpole fragment nearby. If you see that, you are in the right ravine.',
      },
      {
        title: 'Pick up the small pieces first',
        body: 'PC Gamer describes small Lead pieces in the sand and smaller blocks you can break. Those early pieces matter because Sonic Resonator itself costs Lead.',
      },
      {
        title: 'Build Sonic Resonator before bulk farming',
        body: 'Subnautica2Hub notes that Lead deposits are much better with Sonic Resonator. Get the initial two pieces, craft the tool, then come back for proper stock.',
      },
      {
        title: 'Do one storage pass, then leave',
        body: 'Lead is not used everywhere early, but returning to the ravine for one missing piece is dull. Keep a small reserve for Sonic Resonator, Germanium processing, and later odd recipes.',
      },
    ],
    tableTitle: 'Lead checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      [
        'Early route',
        'PC Gamer points to a ravine about 280m northeast of the Lifepod.',
      ],
      ['Bearing', 'About 75 degrees from the Lifepod in PC Gamer reporting.'],
      ['Landmark', 'Blue current, colony platform, Tadpole fragment nearby.'],
      ['Biome data', 'Subnautica2Hub lists Coral Gardens at 0-200m.'],
      ['First spend', 'Sonic Resonator costs Lead in current public data.'],
    ],
    visualTitle: 'Lead plan',
    visualItems: [
      {
        label: 'Find',
        value: '75 deg',
        note: 'Use the northeast current route.',
      },
      {
        label: 'Start',
        value: '2 lead',
        note: 'Enough to unlock efficient mining.',
      },
      {
        label: 'Farm',
        value: 'Sonic',
        note: 'Deposits become worth the trip.',
      },
    ],
    cautionTitle: 'Do not spend the first Lead casually',
    cautionBody:
      'The first pieces should point straight at Sonic Resonator. Once that tool is built, Lead stops feeling like a scavenger hunt and starts behaving like a normal metal run.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Where is Lead near the start in Subnautica 2?',
        body: 'PC Gamer points to a ravine about 280 meters northeast of the Lifepod, around bearing 75 degrees, reached by riding a blue natural current down.',
      },
      {
        title: 'Can you get Lead before Sonic Resonator?',
        body: 'Yes. PC Gamer reports small Lead pieces in the ravine sand and smaller breakable blocks. Subnautica2Hub also notes Lead Node breaks for early pieces.',
      },
      {
        title: 'What is Lead used for first?',
        body: 'The important first use is Sonic Resonator. Public data also lists Germanium from Lead and Sugar of Saturn, but the mining tool is the progression piece.',
      },
      {
        title: 'Is Lead a deep resource?',
        body: 'Not in current public data. Subnautica2Hub lists Lead in Coral Gardens from the surface down to 200m, so oxygen planning matters more than deep-gear gating.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2SonicResonator,
        label: 'Sonic Resonator Guide',
      },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Vehicle Guide' },
      { href: Routes.Subnautica2OxygenDepth, label: 'Oxygen and Depth' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Silver, label: 'Silver Location Guide' },
      { href: Routes.Subnautica2Lithium, label: 'Lithium Location Guide' },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 26, 2026 against PC Gamer, Subnautica2Hub, and Subnautica2.gg. Early Access resource routes, drop rates, and recipe links can move; recheck the PDA and current map after patches.',
    cardKicker: 'Resource card',
    cardBody:
      'Northeast ravine route, blue current entry, Tadpole-fragment landmark, hand pickups, Sonic Resonator unlock, and Germanium processing note.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Resource guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Lead 位置指南 - 峡谷路线和 Sonic Resonator 准备',
      description:
        'Subnautica 2 中文 Lead 指南：整理 Lifepod 东北峡谷、蓝色水流路线、手捡小块、Sonic Resonator、Germanium 和 Coral Gardens 深度数据。',
    },
    eyebrow: 'Subnautica 2 资源路线',
    title: 'Subnautica 2 Lead 位置指南',
    description:
      'Lead 前期最烦的点在于：你需要它来做更好的采矿工具，但那个工具又会让 Lead 更好采。先拿到最初两块，后面就顺了。',
    quickLabel: '快速结论',
    quickAnswer:
      'PC Gamer 报道的前期 Lead 路线在 Lifepod 东北约 280 米的峡谷，方位大约 75 度。看到下方蓝色天然水流后顺着下去，在左侧殖民地平台施工点和 Tadpole 碎片附近停下，然后在峡谷沙地里找小块 Lead，或敲较小的矿块。Subnautica2Hub 把 Lead 列在 Coral Gardens，深度 0-200m；前期可以敲 Lead Node 拿少量 Lead，后面用 Sonic Resonator 采大矿点效率更高。当前公开资料把 Lead 和 Sonic Resonator、Germanium from Lead、Sugar of Saturn 关联起来。',
    contentsLabel: '目录',
    routeTitle: '第一趟 Lead 路线',
    routeSteps: [
      {
        title: '跟着水流走，别乱找沟',
        body: 'PC Gamer 指向 Lifepod 东北，大约 75 度方向，直到看到下方的蓝色天然水流。顺着水流下去，比在附近每条沟里乱试更省时间。',
      },
      {
        title: '看到殖民地平台就停',
        body: '路线地标是左侧的殖民地平台施工点，附近还有 Tadpole 碎片。看到这两个东西，基本就到正确峡谷了。',
      },
      {
        title: '先捡小块 Lead',
        body: 'PC Gamer 提到峡谷沙地里有小块 Lead，也有较小的矿块可以敲。前两块很关键，因为 Sonic Resonator 本身就要 Lead。',
      },
      {
        title: '先做 Sonic Resonator，再回来刷',
        body: 'Subnautica2Hub 的数据里，大型 Lead Deposit 用 Sonic Resonator 更划算。先拿够初始材料，把工具做出来，再回来补库存。',
      },
      {
        title: '多留一点，不要只拿刚好够',
        body: 'Lead 前期不是每个配方都吃，但为了少跑回头路，建议留一小格给 Sonic Resonator、Germanium 加工和后面的特殊配方。',
      },
    ],
    tableTitle: 'Lead 检查表',
    tableHeaders: ['需要', '确认什么'],
    tableRows: [
      ['前期路线', 'PC Gamer 指向 Lifepod 东北约 280m 的峡谷。'],
      ['方位', 'PC Gamer 报道中约为 Lifepod 75 度方向。'],
      ['地标', '蓝色水流、殖民地平台、附近 Tadpole 碎片。'],
      ['生态区数据', 'Subnautica2Hub 当前列出 Coral Gardens，0-200m。'],
      ['第一用途', '当前公开资料中 Sonic Resonator 需要 Lead。'],
    ],
    visualTitle: 'Lead 跑图',
    visualItems: [
      {
        label: '寻找',
        value: '75 度',
        note: '走东北水流路线。',
      },
      {
        label: '起步',
        value: '2 块',
        note: '先把采矿工具做出来。',
      },
      {
        label: '刷矿',
        value: 'Sonic',
        note: '有工具后大矿点才舒服。',
      },
    ],
    cautionTitle: '第一批 Lead 不要随手花掉',
    cautionBody:
      '最初几块 Lead 应该优先指向 Sonic Resonator。工具做出来之后，Lead 就不再像摸奖，而是正常的金属补给路线。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 前期 Lead 在哪里？',
        body: 'PC Gamer 指向 Lifepod 东北约 280 米、方位约 75 度的峡谷，可以顺着蓝色天然水流下去。',
      },
      {
        title: '没有 Sonic Resonator 能拿 Lead 吗？',
        body: '可以。PC Gamer 提到峡谷沙地里有小块 Lead，也有较小的矿块可以敲；Subnautica2Hub 也提到 Lead Node 可以给前期材料。',
      },
      {
        title: 'Lead 最先用来做什么？',
        body: '最重要的是 Sonic Resonator。公开数据还列出 Germanium from Lead 和 Sugar of Saturn，但采矿工具才是前期推进点。',
      },
      {
        title: 'Lead 算深水资源吗？',
        body: '当前公开数据里不算。Subnautica2Hub 列出的范围是 Coral Gardens 0-200m，所以重点是氧气规划，不是深潜装备门槛。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2SonicResonator, label: 'Sonic Resonator 指南' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 载具指南' },
      { href: Routes.Subnautica2OxygenDepth, label: '氧气和深度' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Silver, label: 'Silver 位置指南' },
      { href: Routes.Subnautica2Lithium, label: 'Lithium 位置指南' },
      { href: Routes.Subnautica2MetalFarm, label: '金属采集路线' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 26 日核对 PC Gamer、Subnautica2Hub 和 Subnautica2.gg。抢先体验阶段资源路线、掉落率和配方关联都可能调整；更新后请重新核对 PDA 和当前地图。',
    cardKicker: '资源卡',
    cardBody:
      '东北峡谷路线、蓝色水流入口、Tadpole 碎片地标、手捡小块、Sonic Resonator 解锁和 Germanium 加工提醒。',
    cardTypeLabel: '类型',
    cardTypeValue: '资源指南',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = leadCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  leadCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Lead Location Guide',
      description:
        'Guide for Lead locations, the northeast Lifepod ravine, natural current route, Sonic Resonator prep, Germanium, and Coral Gardens depth data.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = leadCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2Lead,
  });
}

export default async function LeadGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = leadCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={GemIcon}
      locale={locale}
      pathname={Routes.Subnautica2Lead}
      sources={sharedSources}
    />
  );
}
