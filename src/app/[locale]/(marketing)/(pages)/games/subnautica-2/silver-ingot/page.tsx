import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { GemIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type SilverIngotCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-29';

const sharedSources = [
  {
    href: 'https://subnautica2.gg/blueprints/silver-ingot',
    label: 'Subnautica2.gg Silver Ingot blueprint',
  },
  {
    href: 'https://subnautica2.gg/blueprints/advanced-battery',
    label: 'Subnautica2.gg Advanced Battery blueprint',
  },
  {
    href: 'https://www.dexerto.com/wikis/subnautica-2/tools/tadpole-dock/',
    label: 'Dexerto Tadpole Dock tool page',
  },
];

const silverIngotCopy: Record<string, SilverIngotCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Silver Ingot Guide - Recipe, Processor, and Uses',
      description:
        'A practical Subnautica 2 Silver Ingot guide covering Silver x3, Processor crafting, Advanced Battery planning, Tadpole Dock prep, and raw Silver reserves.',
    },
    eyebrow: 'Subnautica 2 processed material',
    title: 'Subnautica 2 Silver Ingot Guide',
    description:
      'Silver Ingot is the moment Silver stops being only an oxygen-and-electronics bottleneck and starts feeding bigger plans. Do not process every piece you find. The good move is to decide which craft needs the ingot first.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current Subnautica2.gg data lists Silver Ingot as a Processor craft made from Silver x3. The same public blueprint chain points to Silver Ingot x1 for Advanced Battery, and Dexerto currently lists Silver Ingot x1 in the Tadpole Dock recipe. Make one only when you are ready to spend it, and keep raw Silver aside for Wiring Kit, oxygen, and other electronics.',
    fieldNotesTitle: 'Field notes for Silver compression',
    fieldNotes: [
      {
        title: 'Raw Silver has too many jobs',
        body: 'Silver Ingot is useful, but raw Silver also feeds electronics, power, and oxygen-adjacent chains. Compressing every piece too early creates a different shortage.',
      },
      {
        title: 'Only make ingots with a destination',
        body: 'Advanced Battery and Tadpole Dock are clear destinations. A vague plan to need Silver later is not enough reason to lock three pieces into an ingot.',
      },
      {
        title: 'Keep one electronics stack untouched',
        body: 'A small raw Silver reserve beside Wiring Kit parts prevents a base upgrade from stealing the metal meant for tools and power.',
      },
    ],
    routeChecklistTitle: 'Before making Silver Ingot',
    routeChecklist: [
      'Confirm Advanced Battery, Tadpole Dock, or another exact target recipe.',
      'Keep raw Silver aside for Wiring Kit and electronics chains.',
      'Do not process the last three Silver unless the next craft is immediate.',
      'Store finished ingots with power or dock materials, not loose ore.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Silver Ingot planning route',
    routeSteps: [
      {
        title: 'Start with raw Silver, not the ingot button',
        body: 'Three Silver sounds small until your next tool also wants Silver. Run the normal Silver route first, then check whether the immediate goal is Advanced Battery, Tadpole Dock, or something still using raw ore.',
      },
      {
        title: 'Use Processor as a planned conversion',
        body: 'Silver Ingot is currently a Processor recipe. Treat the station like a batch table: put exactly the Silver you intend to convert in your bag and leave the rest in a locker.',
      },
      {
        title: 'Pick the first ingot target',
        body: 'If your base already has Battery Terminal, Advanced Battery can be worth the first ingot. If you are pushing the Tadpole bay, save that ingot for Tadpole Dock instead.',
      },
      {
        title: 'Keep raw Silver for electronics',
        body: 'Wiring Kit and early oxygen/electronics routes can still need loose Silver. A full conversion feels tidy for five seconds, then annoying when the next recipe asks for the raw material.',
      },
      {
        title: 'Recheck recipes after patches',
        body: 'Subnautica 2 is still in Early Access. Blueprint databases are useful, but the in-game PDA wins if a patch changes the count or station.',
      },
    ],
    tableTitle: 'Silver Ingot checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      ['Silver x3', 'Current public recipe data for one Silver Ingot.'],
      ['Processor', 'The listed station for the ingot conversion.'],
      [
        'Advanced Battery route',
        'Uses Silver Ingot x1 in current blueprint data.',
      ],
      ['Tadpole Dock route', 'Dexerto currently lists Silver Ingot x1.'],
      [
        'Raw Silver buffer',
        'Keep a small reserve before converting every piece.',
      ],
      ['Patch check', 'Confirm the PDA after Early Access updates.'],
    ],
    visualTitle: 'Ingot decision card',
    visualItems: [
      {
        label: 'Input',
        value: '3 Silver',
        note: 'Do not process your final raw stack.',
      },
      {
        label: 'Station',
        value: 'Processor',
        note: 'Convert only for a known craft.',
      },
      {
        label: 'Use',
        value: 'Battery/Dock',
        note: 'Advanced Battery or Tadpole Dock are the early asks.',
      },
    ],
    cautionTitle: 'The first Silver Ingot is usually more valuable unspent',
    cautionBody:
      'Before clicking craft, ask what this ingot unlocks right now. If the answer is vague, keep the Silver raw. Processed materials are useful when they finish a chain, not when they sit in a locker looking expensive.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you make Silver Ingot in Subnautica 2?',
        body: 'Current Subnautica2.gg blueprint data lists Silver Ingot as a Processor craft using Silver x3.',
      },
      {
        title: 'What is Silver Ingot used for?',
        body: 'Current public recipe data links it to Advanced Battery, and Dexerto lists Silver Ingot in the Tadpole Dock recipe. Recipe data can change during Early Access.',
      },
      {
        title: 'Should I process all my Silver into ingots?',
        body: 'No. Keep raw Silver for electronics and other early recipes. Convert only the amount your next craft needs.',
      },
      {
        title:
          'Which should get the first Silver Ingot: Advanced Battery or Tadpole Dock?',
        body: 'Choose based on your route. If your base has Battery Terminal and you need longer tool runs, Advanced Battery is tempting. If you are building the Tadpole bay, keep the ingot for Tadpole Dock.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Silver, label: 'Silver Location Guide' },
      { href: Routes.Subnautica2Processor, label: 'Processor Guide' },
      {
        href: Routes.Subnautica2AdvancedBattery,
        label: 'Advanced Battery Guide',
      },
      { href: Routes.Subnautica2TadpoleDock, label: 'Tadpole Dock Guide' },
      { href: Routes.Subnautica2WiringKit, label: 'Wiring Kit Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 26, 2026 against Subnautica2.gg blueprint pages and Dexerto recipe data. Subnautica 2 is in Early Access, so Processor station, material counts, and use cases should be rechecked after patches.',
    cardKicker: 'Material chain card',
    cardBody:
      'Silver x3, Processor conversion, Advanced Battery planning, Tadpole Dock prep, and raw Silver reserve rules.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Processed material',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Silver Ingot 指南 - 配方、Processor 和用途',
      description:
        'Subnautica 2 中文 Silver Ingot 指南：整理 Silver x3、Processor 加工、Advanced Battery、Tadpole Dock 和原矿库存规划。',
    },
    eyebrow: 'Subnautica 2 加工材料',
    title: 'Subnautica 2 Silver Ingot 指南',
    description:
      'Silver Ingot 不是看到按钮就该马上做的材料。它会把前期本来就紧张的 Silver 直接压进更大的制作链里，所以最好先想清楚：这块 ingot 是给 Advanced Battery，还是给 Tadpole Dock。',
    quickLabel: '快速结论',
    quickAnswer:
      'Subnautica2.gg 当前资料把 Silver Ingot 写成 Processor 配方，材料是 Silver x3。公开蓝图链里 Advanced Battery 需要 Silver Ingot x1，Dexerto 当前的 Tadpole Dock 配方也列出 Silver Ingot x1。建议有明确目标再加工，同时给 Wiring Kit、氧气和其它电子材料留一点原始 Silver。',
    fieldNotesTitle: 'Silver 压 ingot 笔记',
    fieldNotes: [
      {
        title: '原 Silver 用途太多',
        body: 'Silver Ingot 很有用，但原 Silver 还会进入电子材料、电力和氧气相关链条。太早全压成 ingot，只是把一种缺货换成另一种缺货。',
      },
      {
        title: '有目标再加工',
        body: 'Advanced Battery 和 Tadpole Dock 都是明确目标。只是觉得以后可能会用 Silver，不足以让你把三块原料锁进一个 ingot。',
      },
      {
        title: '留一小堆给电子材料',
        body: 'Wiring Kit 材料旁边留一点原 Silver，可以防止基地升级顺手拿走工具和供电链需要的金属。',
      },
    ],
    routeChecklistTitle: '制作 Silver Ingot 前',
    routeChecklist: [
      '先确认目标是 Advanced Battery、Tadpole Dock 或其它明确配方。',
      '给 Wiring Kit 和电子材料链留原 Silver。',
      '如果下一个制作不是马上发生，不要压掉最后三块 Silver。',
      '成品 ingot 放到电力或 dock 材料旁边，不要混进散矿箱。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Silver Ingot 规划路线',
    routeSteps: [
      {
        title: '先看原始 Silver 库存',
        body: 'Silver x3 看起来不多，但前期每一块银都可能卡住下一个工具。先跑完 Silver 路线，再决定这次到底是要 Advanced Battery、Tadpole Dock，还是继续留给原矿配方。',
      },
      {
        title: '把 Processor 当成加工台，不是清仓按钮',
        body: 'Silver Ingot 当前是 Processor 配方。只把这次要加工的 Silver 带在身上，其余放回箱子，避免一口气把全部银都压成 ingot。',
      },
      {
        title: '决定第一块 ingot 的去向',
        body: '如果你已经有 Battery Terminal，第一块 Silver Ingot 可以考虑给 Advanced Battery。如果正在推 Tadpole 载具区，那就先留给 Tadpole Dock。',
      },
      {
        title: '给电子制作留原矿',
        body: 'Wiring Kit、氧气升级和一些电子路线仍然会用到原始 Silver。全部加工完，当下很整齐，下一张配方跳出来时就会很难受。',
      },
      {
        title: '补丁后看一眼 PDA',
        body: 'Subnautica 2 还在抢先体验。攻略和蓝图站可以帮你提前规划，但版本更新后，以游戏内 PDA 显示为准。',
      },
    ],
    tableTitle: 'Silver Ingot 检查表',
    tableHeaders: ['需要什么', '确认什么'],
    tableRows: [
      ['Silver x3', '当前公开资料里一块 Silver Ingot 的材料。'],
      ['Processor', '当前列出的加工站。'],
      ['Advanced Battery 路线', '当前蓝图资料需要 Silver Ingot x1。'],
      ['Tadpole Dock 路线', 'Dexerto 当前配方列出 Silver Ingot x1。'],
      ['原始 Silver 库存', '加工前留一点，别把全部银都转掉。'],
      ['版本检查', '抢先体验更新后，看一眼 PDA 最稳。'],
    ],
    visualTitle: 'Ingot 决策卡',
    visualItems: [
      {
        label: '输入',
        value: '3 Silver',
        note: '别把最后一组原矿加工掉。',
      },
      {
        label: '设备',
        value: 'Processor',
        note: '有明确制作目标再转。',
      },
      {
        label: '用途',
        value: '电池 / Dock',
        note: '前期主要看 Advanced Battery 和 Tadpole Dock。',
      },
    ],
    cautionTitle: '第一块 Silver Ingot 不一定要马上花掉',
    cautionBody:
      '点下制作前先问一句：这块 ingot 现在能帮我完成哪条链？如果答案还不清楚，就先留原始 Silver。加工材料只有在补上最后一环时最有价值。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Silver Ingot 怎么做？',
        body: 'Subnautica2.gg 当前蓝图资料把 Silver Ingot 写成 Processor 配方，材料是 Silver x3。',
      },
      {
        title: 'Silver Ingot 有什么用？',
        body: '当前公开配方资料把它接到 Advanced Battery，Dexerto 也把它列进 Tadpole Dock 配方。抢先体验阶段这些数据可能会改。',
      },
      {
        title: '要不要把所有 Silver 都加工成 ingot？',
        body: '不建议。原始 Silver 还会进电子制作和前期配方。只加工下一步确实要用的数量。',
      },
      {
        title: '第一块 Silver Ingot 给 Advanced Battery 还是 Tadpole Dock？',
        body: '看你的路线。如果基地已经能充电，Advanced Battery 很香；如果你在做 Tadpole 载具区，先留给 Tadpole Dock 更稳。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Silver, label: 'Silver 位置指南' },
      { href: Routes.Subnautica2Processor, label: 'Processor 指南' },
      {
        href: Routes.Subnautica2AdvancedBattery,
        label: 'Advanced Battery 指南',
      },
      { href: Routes.Subnautica2TadpoleDock, label: 'Tadpole Dock 指南' },
      { href: Routes.Subnautica2WiringKit, label: 'Wiring Kit 指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 26 日核对 Subnautica2.gg 蓝图页和 Dexerto 配方资料。Subnautica 2 仍处于抢先体验阶段，Processor、材料数量和用途可能随补丁调整。',
    cardKicker: '材料链卡片',
    cardBody:
      'Silver x3、Processor 加工、Advanced Battery 规划、Tadpole Dock 准备和原始 Silver 留存规则。',
    cardTypeLabel: '类型',
    cardTypeValue: '加工材料',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = silverIngotCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  silverIngotCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Silver Ingot Guide',
      description:
        'Guide for Silver Ingot recipe, Silver x3, Processor conversion, Advanced Battery use, Tadpole Dock prep, and raw Silver reserves.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = silverIngotCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2SilverIngot,
  });
}

export default async function SilverIngotGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = silverIngotCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={GemIcon}
      locale={locale}
      pathname={Routes.Subnautica2SilverIngot}
      sources={sharedSources}
    />
  );
}
