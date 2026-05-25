import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { RadarIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type EchoLocationCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-25';
const UPDATED_AT = '2026-05-25';

const sharedSources = [
  {
    href: 'https://subnautica2.gg/blueprints/echo-location',
    label: 'Subnautica2.gg Echo Location blueprint',
  },
  {
    href: 'https://subnautica2hub.com/blueprints/echo-location',
    label: 'Subnautica2Hub Echo Location blueprint',
  },
  {
    href: 'https://wikily.gg/subnautica-2/items/echo-location/',
    label: 'Wikily Echo Location module page',
  },
];

const echoLocationCopy: Record<string, EchoLocationCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Echo Location Guide - Recipe, Unlock, and Tadpole Use',
      description:
        'A practical Subnautica 2 Echo Location guide covering the Modification Station recipe, Quartz, Mild Acid, Atacamite, locked unlock state, and Tadpole resource ping use.',
    },
    eyebrow: 'Subnautica 2 Tadpole module',
    title: 'Subnautica 2 Echo Location Guide',
    description:
      'Echo Location is not a comfort upgrade. It is the module you make when resource hunting starts costing too much time, especially once deeper routes and rarer materials enter the plan.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current Subnautica2.gg, Subnautica2Hub, and Wikily data list Echo Location as a locked Tadpole module crafted at the Modification Station with Quartz x3, Mild Acid x1, and Atacamite x1. Its job is to ping nearby resources. Treat the unlock as progression-gated or scan-gated until your save shows the recipe.',
    contentsLabel: 'Contents',
    routeTitle: 'Echo Location craft plan',
    routeSteps: [
      {
        title: 'Confirm the unlock first',
        body: 'Public pages agree that Echo Location is locked, but word the unlock differently. Check the Modification Station before farming every ingredient; if it is missing, keep progressing scans and objectives.',
      },
      {
        title: 'Stock Quartz near electronics',
        body: 'The recipe asks for Quartz x3. Quartz feels common until it is sitting in a glass locker across the base, so store a small stack with wiring and module materials.',
      },
      {
        title: 'Spend Mild Acid carefully',
        body: 'Echo Location competes with Biolab and Processor for Mild Acid. If you only have one acid, decide whether resource pinging is more urgent than Biomods or processing chains.',
      },
      {
        title: 'Use Atacamite with a plan',
        body: 'Atacamite is not an early throwaway material. Bring it to the Modification Station only after the module is visible and the Tadpole route needs the scan utility.',
      },
      {
        title: 'Install it for resource routes',
        body: 'Echo Location pings nearby resources, so it pays off most when you are searching repeated material loops rather than taking a short sightseeing dive.',
      },
    ],
    tableTitle: 'Echo Location checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      ['Station', 'Current data lists Modification Station.'],
      ['Unlock', 'Locked, scan-gated, or progression-gated in public data.'],
      ['Quartz x3', 'Keep near electronics and module storage.'],
      ['Mild Acid x1', 'Shares the same bottleneck as Biolab and Processor.'],
      ['Atacamite x1', 'Use only after the module is visible in your save.'],
    ],
    visualTitle: 'Resource ping loop',
    visualItems: [
      {
        label: 'Unlock',
        value: 'Module',
        note: 'Check Modification Station before farming.',
      },
      {
        label: 'Craft',
        value: 'Echo Location',
        note: 'Quartz, Mild Acid, Atacamite.',
      },
      {
        label: 'Ping',
        value: 'Resources',
        note: 'Use it on repeated material routes.',
      },
    ],
    cautionTitle: 'Do not farm the full recipe before the module appears',
    cautionBody:
      'Echo Location is listed as locked in current data. The fastest mistake is collecting Atacamite and spending Mild Acid before your save can actually craft the module.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you craft Echo Location in Subnautica 2?',
        body: 'Current blueprint data lists Quartz x3, Mild Acid x1, and Atacamite x1 at the Modification Station.',
      },
      {
        title: 'What does Echo Location do?',
        body: 'The current description says it pings nearby resources, making it useful for repeated material routes in the Tadpole.',
      },
      {
        title: 'Is Echo Location unlocked by default?',
        body: 'No. Public data lists it as locked, with scan or progression wording depending on the site. Check your Modification Station after story or scan progress.',
      },
      {
        title: 'Is Echo Location worth the Mild Acid?',
        body: 'If you are short on Mild Acid, compare it against Biolab and Processor first. Echo Location is best when resource searches are slowing the run down.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2ModificationStation,
        label: 'Modification Station Guide',
      },
      { href: Routes.Subnautica2MildAcid, label: 'Mild Acid Guide' },
      { href: Routes.Subnautica2Atacamite, label: 'Atacamite Guide' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Vehicle Guide' },
      { href: Routes.Subnautica2Biolab, label: 'Biolab Guide' },
      { href: Routes.Subnautica2Processor, label: 'Processor Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 25, 2026 against Subnautica2.gg, Subnautica2Hub, and Wikily. Public Early Access pages agree on the recipe but use slightly different unlock wording, so this page treats the unlock as patch-sensitive.',
    cardKicker: 'Tadpole module card',
    cardBody:
      'Modification Station, Quartz, Mild Acid, Atacamite, locked unlock wording, and resource-ping use.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Module guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Echo Location 指南 - 配方、解锁和 Tadpole 用途',
      description:
        'Subnautica 2 中文 Echo Location 指南：整理 Modification Station 配方、Quartz、Mild Acid、Atacamite、锁定解锁状态和 Tadpole 资源 ping 用途。',
    },
    eyebrow: 'Subnautica 2 Tadpole 模块',
    title: 'Subnautica 2 Echo Location 指南',
    description:
      'Echo Location 不是装饰升级。等你找资源开始花太多时间，尤其是进入深水和稀有材料路线后，这个模块才真正有价值。',
    quickLabel: '快速结论',
    quickAnswer:
      'Subnautica2.gg、Subnautica2Hub 和 Wikily 当前都把 Echo Location 写成锁定的 Tadpole 模块，在 Modification Station 用 Quartz x3、Mild Acid x1、Atacamite x1 制作。作用是 ping 附近资源。解锁方式公开资料写法不完全一致，所以先按剧情/扫描进度锁定处理。',
    contentsLabel: '目录',
    routeTitle: 'Echo Location 制作规划',
    routeSteps: [
      {
        title: '先确认配方有没有出现',
        body: '公开页面都写它是 locked，但具体说法有 scan 和 progression 差异。先查 Modification Station，没出现就继续推扫描和目标，不要先把材料全搬过来。',
      },
      {
        title: 'Quartz 和电子材料放一起',
        body: '配方要 Quartz x3。Quartz 常被丢进玻璃材料箱，真正做模块时反而找不到。留一小组在电子/模块材料箱里。',
      },
      {
        title: 'Mild Acid 别乱花',
        body: 'Echo Location 会和 Biolab、Processor 抢 Mild Acid。如果你只有一份酸，先判断资源 ping 是否比 Biomods 或加工链更急。',
      },
      {
        title: 'Atacamite 要有目的地用',
        body: 'Atacamite 不是前期随便花的材料。等模块在存档里可见、Tadpole 路线确实需要资源扫描时，再带去 Modification Station。',
      },
      {
        title: '把它用在重复资源路线',
        body: 'Echo Location 的价值是 ping 附近资源，所以更适合反复找材料的路线，而不是随便短途观光。',
      },
    ],
    tableTitle: 'Echo Location 检查表',
    tableHeaders: ['需求', '确认什么'],
    tableRows: [
      ['工作站', '当前资料写的是 Modification Station。'],
      ['解锁', '公开资料写成 locked / scan / progression，后续要复查。'],
      ['Quartz x3', '放在电子材料和模块材料附近。'],
      ['Mild Acid x1', '和 Biolab、Processor 共用同一个卡点。'],
      ['Atacamite x1', '确认模块可做后再投入。'],
    ],
    visualTitle: '资源 ping 链路',
    visualItems: [
      { label: '解锁', value: '模块', note: '先查 Modification Station。' },
      {
        label: '制作',
        value: 'Echo Location',
        note: 'Quartz、Mild Acid、Atacamite。',
      },
      { label: '扫描', value: '资源', note: '用在重复刷材料路线。' },
    ],
    cautionTitle: '模块没出现前，不要提前把整套材料刷满',
    cautionBody:
      '当前资料把 Echo Location 写成 locked。最浪费时间的做法，是先拿 Atacamite、花掉 Mild Acid，结果你的存档还不能制作。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Echo Location 怎么做？',
        body: '当前蓝图资料写的是在 Modification Station 用 Quartz x3、Mild Acid x1、Atacamite x1 制作。',
      },
      {
        title: 'Echo Location 有什么用？',
        body: '当前描述是 ping 附近资源，适合 Tadpole 反复找材料路线。',
      },
      {
        title: 'Echo Location 默认解锁吗？',
        body: '不是。公开资料都写成 locked，但有的说 scan，有的说 progression。建议在剧情或扫描推进后再查 Modification Station。',
      },
      {
        title: 'Echo Location 值得花 Mild Acid 吗？',
        body: '如果 Mild Acid 很少，先和 Biolab、Processor 比优先级。只有当找资源明显拖慢进度时，它才更值得优先做。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      {
        href: Routes.Subnautica2ModificationStation,
        label: 'Modification Station 指南',
      },
      { href: Routes.Subnautica2MildAcid, label: 'Mild Acid 指南' },
      { href: Routes.Subnautica2Atacamite, label: 'Atacamite 指南' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 载具指南' },
      { href: Routes.Subnautica2Biolab, label: 'Biolab 指南' },
      { href: Routes.Subnautica2Processor, label: 'Processor 指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 25 日核对 Subnautica2.gg、Subnautica2Hub 和 Wikily。当前抢先体验公开资料在配方上基本一致，但解锁说法略有差异，所以本页把解锁当作补丁敏感信息处理。',
    cardKicker: 'Tadpole 模块卡',
    cardBody:
      'Modification Station、Quartz、Mild Acid、Atacamite、锁定解锁说法和资源 ping 用途。',
    cardTypeLabel: '类型',
    cardTypeValue: '模块指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: 'Early Access',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 Echo Location Guide - recipe, unlock, Tadpole use',
      description:
        'Subnautica 2 Echo Location guide for Modification Station recipe, Quartz, Mild Acid, Atacamite, locked unlock state, and Tadpole resource ping use.',
    },
    eyebrow: 'Subnautica 2 Tadpole module',
    title: 'Subnautica 2 Echo Location Guide',
    description:
      'Echo Location は快適装備というより、資源探しに時間を取られ始めた時の Tadpole module です。',
    quickLabel: '要点',
    quickAnswer:
      '現在の Subnautica2.gg、Subnautica2Hub、Wikily では、Echo Location は locked module で、Modification Station に Quartz x3、Mild Acid x1、Atacamite x1 を入れて作ります。近くの資源を ping する用途です。',
    contentsLabel: '目次',
    routeTitle: 'Echo Location craft plan',
    routeSteps: [
      {
        title: 'まず unlock を確認する',
        body: '公開ページは locked と書いていますが、scan と progression の表現に差があります。材料集めの前に Modification Station を確認します。',
      },
      {
        title: 'Quartz を電子素材箱に置く',
        body: 'Recipe は Quartz x3。Glass 用の箱に入れっぱなしにせず、module 材料の近くに残します。',
      },
      {
        title: 'Mild Acid を慎重に使う',
        body: 'Biolab と Processor も Mild Acid を使います。Echo Location が今必要かを先に決めます。',
      },
      {
        title: 'Atacamite は目的が出てから使う',
        body: 'Atacamite は雑に使う素材ではありません。module が見えてから Modification Station に持っていきます。',
      },
      {
        title: '資源ルートで使う',
        body: 'Echo Location は nearby resources を ping します。繰り返し素材を探す時に価値が出ます。',
      },
    ],
    tableTitle: 'Echo Location checklist',
    tableHeaders: ['Need', 'Check'],
    tableRows: [
      ['Station', 'Current data lists Modification Station.'],
      ['Unlock', 'Locked / scan / progression wording differs.'],
      ['Quartz x3', 'Keep near electronics storage.'],
      ['Mild Acid x1', 'Shared with Biolab and Processor.'],
      ['Atacamite x1', 'Spend after the module appears.'],
    ],
    visualTitle: 'Resource ping loop',
    visualItems: [
      {
        label: 'Unlock',
        value: 'Module',
        note: 'Check Modification Station first.',
      },
      {
        label: 'Craft',
        value: 'Echo Location',
        note: 'Quartz, Mild Acid, Atacamite.',
      },
      { label: 'Ping', value: 'Resources', note: 'Use it on repeated routes.' },
    ],
    cautionTitle: 'Do not farm the full recipe before the module appears',
    cautionBody:
      'Echo Location is currently listed as locked. Save Atacamite and Mild Acid until your save can craft it.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you craft Echo Location?',
        body: 'Current data lists Quartz x3, Mild Acid x1, and Atacamite x1 at the Modification Station.',
      },
      {
        title: 'What does Echo Location do?',
        body: 'It pings nearby resources, which helps repeated Tadpole material routes.',
      },
      {
        title: 'Is it unlocked by default?',
        body: 'No. Current pages list it as locked, with scan or progression wording depending on the source.',
      },
      {
        title: 'Is it worth Mild Acid?',
        body: 'If Mild Acid is limited, compare it with Biolab and Processor before crafting.',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      {
        href: Routes.Subnautica2ModificationStation,
        label: 'Modification Station Guide',
      },
      { href: Routes.Subnautica2MildAcid, label: 'Mild Acid Guide' },
      { href: Routes.Subnautica2Atacamite, label: 'Atacamite Guide' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Guide' },
      { href: Routes.Subnautica2Biolab, label: 'Biolab Guide' },
      { href: Routes.Subnautica2Processor, label: 'Processor Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 25, 2026 against Subnautica2.gg, Subnautica2Hub, and Wikily. Early Access unlock wording can change after patches.',
    cardKicker: 'Tadpole module card',
    cardBody:
      'Modification Station, Quartz, Mild Acid, Atacamite, locked unlock wording, and resource-ping use.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Module guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
};

const fallbackCopy = echoLocationCopy.en;

for (const locale of ['de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  echoLocationCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Echo Location Guide',
      description:
        'Guide for Echo Location recipe, unlock state, Quartz, Mild Acid, Atacamite, and Tadpole resource ping use.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = echoLocationCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2EchoLocation,
  });
}

export default async function EchoLocationGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = echoLocationCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={RadarIcon}
      locale={locale}
      pathname={Routes.Subnautica2EchoLocation}
      sources={sharedSources}
    />
  );
}
