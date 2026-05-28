import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { BoxesIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type CopperIngotCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-28';

const sharedSources = [
  {
    href: 'https://subnautica2.gg/blueprints/copper-ingot',
    label: 'Subnautica2.gg Copper Ingot blueprint',
  },
  {
    href: 'https://www.dexerto.com/wikis/subnautica-2/resources/copper-ingot/',
    label: 'Dexerto Copper Ingot resource page',
  },
  {
    href: 'https://www.gamesradar.com/games/survival/subnautica-2-ingots/',
    label: 'GamesRadar Subnautica 2 ingots guide',
  },
];

const copperIngotCopy: Record<string, CopperIngotCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Copper Ingot Guide - Recipe, Processor, and Vehicle Uses',
      description:
        'A practical Subnautica 2 Copper Ingot guide covering Copper x3, Processor crafting, Vehicle Fabricator prep, Copper Wire timing, and raw Copper reserves.',
    },
    eyebrow: 'Subnautica 2 processed material',
    title: 'Subnautica 2 Copper Ingot Guide',
    description:
      'Copper Ingot looks simple because Copper is everywhere early. That is exactly why it is easy to waste. Copper still feeds batteries, wire, tools, and base parts, so the first ingot should have a job before you process it.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current Subnautica2.gg and Dexerto pages list Copper Ingot as a Processor craft made from Copper x3, and GamesRadar also reports the 3x Copper ingot recipe. Vehicle Fabricator currently uses Copper Ingot x1, so keep at least one planned batch for the Tadpole vehicle chain without draining every raw Copper stack.',
    fieldNotesTitle: 'Field notes for Copper Ingot timing',
    fieldNotes: [
      {
        title: 'Do not process your battery route',
        body: 'Copper Ingot feels tidy, but raw Copper still feeds batteries, wire, and early tools. Keep the ordinary route funded before compressing it.',
      },
      {
        title: 'Make ingots only for visible chains',
        body: 'Processed Copper is less flexible. Wait until a station, alloy, or upgrade recipe actually asks for it.',
      },
      {
        title: 'Count wire before ingot',
        body: 'If Copper Wire is still shaky, Copper Ingot can wait. Most early stalls hurt more on the wire side than the ingot side.',
      },
    ],
    routeChecklistTitle: 'Before making Copper Ingot',
    routeChecklist: [
      'Basic Battery and Copper Wire needs are covered.',
      'Processor route is ready.',
      'The target recipe asks for Copper Ingot directly.',
      'Raw Copper reserve remains in a separate locker.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Copper Ingot planning route',
    routeSteps: [
      {
        title: 'Separate raw Copper from ingot Copper',
        body: 'Copper is not spare just because it is common. Keep one locker section for raw Copper and one slot for processed ingots so batteries and wire do not lose a fight with vehicle prep.',
      },
      {
        title: 'Use Processor for the conversion',
        body: 'The current public pages point to Processor as the station for Copper Ingot. Bring exactly three Copper when you mean to make one ingot, then stop.',
      },
      {
        title: 'Reserve the first ingot for Vehicle Fabricator',
        body: 'If Tadpole planning is next, do not spend the first Copper Ingot on a vague future idea. Vehicle Fabricator is the clean reason to make one early.',
      },
      {
        title: 'Do Copper Wire math before processing',
        body: 'Copper Wire can disappear into base and electronics recipes. If you still need wire, craft it or reserve the Copper before turning the rest into ingot form.',
      },
      {
        title: 'Treat recipe counts as a checked snapshot',
        body: 'Subnautica 2 is in Early Access. Use this page to plan, then trust the PDA if a patch changes the station or count.',
      },
    ],
    tableTitle: 'Copper Ingot checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      ['Copper x3', 'Current public recipe data for one Copper Ingot.'],
      ['Processor', 'Listed station for the conversion.'],
      ['Vehicle Fabricator', 'Current vehicle chain uses Copper Ingot x1.'],
      ['Copper Wire reserve', 'Do not process Copper needed for wire.'],
      ['Battery reserve', 'Basic Battery still competes for Copper early.'],
      ['Patch check', 'Confirm the PDA after Early Access updates.'],
    ],
    visualTitle: 'Copper split card',
    visualItems: [
      {
        label: 'Input',
        value: '3 Copper',
        note: 'One planned ingot batch.',
      },
      {
        label: 'Station',
        value: 'Processor',
        note: 'Convert only after wire needs are covered.',
      },
      {
        label: 'Use',
        value: 'Vehicle',
        note: 'Vehicle Fabricator is the first strong reason.',
      },
    ],
    cautionTitle: 'Common materials still run out when recipes stack',
    cautionBody:
      'The trap with Copper is confidence. One battery, one wire, one ingot, and suddenly the "common" ore is gone. Process Copper only after the next two crafts are visible.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you make Copper Ingot in Subnautica 2?',
        body: 'Current Subnautica2.gg, Dexerto, and GamesRadar data point to Copper x3 at the Processor.',
      },
      {
        title: 'What is Copper Ingot used for?',
        body: 'Current Vehicle Fabricator data uses Copper Ingot x1, which makes it part of the Tadpole vehicle path.',
      },
      {
        title: 'Should I process all Copper into ingots?',
        body: 'No. Keep raw Copper for Basic Battery, Copper Wire, tools, and early base needs. Make ingots only for a specific recipe.',
      },
      {
        title: 'Is Copper Ingot more important than Copper Wire?',
        body: 'Not always. Copper Wire feeds many early systems, while Copper Ingot is more of a vehicle-chain step. Reserve both before processing.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Copper, label: 'Copper Location Guide' },
      { href: Routes.Subnautica2CopperWire, label: 'Copper Wire Guide' },
      { href: Routes.Subnautica2Processor, label: 'Processor Guide' },
      {
        href: Routes.Subnautica2VehicleFabricator,
        label: 'Vehicle Fabricator Guide',
      },
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 26, 2026 against Subnautica2.gg, Dexerto, and GamesRadar. Subnautica 2 is in Early Access, so Processor station, material counts, and vehicle-chain uses can change after patches.',
    cardKicker: 'Material chain card',
    cardBody:
      'Copper x3, Processor conversion, Vehicle Fabricator prep, Copper Wire timing, and raw Copper reserve rules.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Processed material',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Copper Ingot 指南 - 配方、Processor 和载具用途',
      description:
        'Subnautica 2 中文 Copper Ingot 指南：整理 Copper x3、Processor 加工、Vehicle Fabricator、Copper Wire 时机和原矿库存规划。',
    },
    eyebrow: 'Subnautica 2 加工材料',
    title: 'Subnautica 2 Copper Ingot 指南',
    description:
      'Copper Ingot 看起来不难，因为 Copper 前期到处都用得到。也正因为这样，它很容易被乱花掉。电池、Copper Wire、工具和基地部件都会抢 Copper，第一块 ingot 最好先有明确用途。',
    quickLabel: '快速结论',
    quickAnswer:
      'Subnautica2.gg 和 Dexerto 当前都把 Copper Ingot 写成 Processor 配方，材料是 Copper x3；GamesRadar 的 ingot 指南也写到 3x Copper。Vehicle Fabricator 当前需要 Copper Ingot x1，所以如果你在推 Tadpole 载具链，先留一批 Copper 做 ingot，但别把所有原矿都加工掉。',
    fieldNotesTitle: 'Copper Ingot 时机笔记',
    fieldNotes: [
      {
        title: '不要把电池路线加工掉',
        body: 'Copper Ingot 看起来整齐，但 raw Copper 还要做电池、wire 和早期工具。先保证普通路线够用，再压成 ingot。',
      },
      {
        title: '只为明确链条做 ingot',
        body: '加工后的 Copper 没有散装材料灵活。等工作站、合金或升级配方直接要它时再做。',
      },
      {
        title: '先算 wire，再算 ingot',
        body: 'Copper Wire 还不稳定时，Copper Ingot 可以等。前期真正疼的通常是 wire，不是 ingot。',
      },
    ],
    routeChecklistTitle: '制作 Copper Ingot 前',
    routeChecklist: [
      'Basic Battery 和 Copper Wire 需求已经覆盖。',
      'Processor 路线已经准备好。',
      '目标配方直接要求 Copper Ingot。',
      'Raw Copper 仍然单独留有储备。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Copper Ingot 规划路线',
    routeSteps: [
      {
        title: '把原始 Copper 和 ingot 分开管',
        body: 'Copper 常见，不代表永远够用。箱子里最好分一格放原矿，一格放加工好的 ingot，这样电池、wire 和载具准备不会互相打架。',
      },
      {
        title: '用 Processor 加工',
        body: '当前公开资料都指向 Processor。想做一块 Copper Ingot，就只带 3 个 Copper 去加工，做完停手。',
      },
      {
        title: '第一块优先留给 Vehicle Fabricator',
        body: '如果下一步是 Tadpole 载具区，第一块 Copper Ingot 就别随便花。Vehicle Fabricator 是前期最清楚的使用目标。',
      },
      {
        title: '先算 Copper Wire',
        body: 'Copper Wire 会被基地和电子配方快速吃掉。还缺 wire 的时候，先把那部分 Copper 留出来，再考虑加工 ingot。',
      },
      {
        title: '把配方当成当前版本快照',
        body: 'Subnautica 2 仍在抢先体验。攻略用来规划很方便，但补丁之后，以游戏内 PDA 的配方为准。',
      },
    ],
    tableTitle: 'Copper Ingot 检查表',
    tableHeaders: ['需要什么', '确认什么'],
    tableRows: [
      ['Copper x3', '当前公开资料里一块 Copper Ingot 的材料。'],
      ['Processor', '当前列出的加工站。'],
      ['Vehicle Fabricator', '当前载具链需要 Copper Ingot x1。'],
      ['Copper Wire 预留', '别把 wire 要用的 Copper 加工掉。'],
      ['电池预留', 'Basic Battery 前期也会吃 Copper。'],
      ['版本检查', '抢先体验更新后，看一眼 PDA 最稳。'],
    ],
    visualTitle: 'Copper 分配卡',
    visualItems: [
      {
        label: '输入',
        value: '3 Copper',
        note: '一批明确目标的 ingot。',
      },
      {
        label: '设备',
        value: 'Processor',
        note: '先处理完 wire 需求再加工。',
      },
      {
        label: '用途',
        value: '载具',
        note: 'Vehicle Fabricator 是最早的明确用途。',
      },
    ],
    cautionTitle: '常见材料也会被连续配方吃空',
    cautionBody:
      'Copper 的陷阱是你会太放心。一个电池、一卷 wire、一块 ingot 做完，原矿就没了。加工前先看接下来两张配方需要什么。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Copper Ingot 怎么做？',
        body: '当前 Subnautica2.gg、Dexerto 和 GamesRadar 资料都指向 Processor，材料是 Copper x3。',
      },
      {
        title: 'Copper Ingot 有什么用？',
        body: '当前 Vehicle Fabricator 配方需要 Copper Ingot x1，所以它会进入 Tadpole 载具路线。',
      },
      {
        title: '要不要把所有 Copper 都加工成 ingot？',
        body: '不建议。原始 Copper 还要做 Basic Battery、Copper Wire、工具和前期基地部件。只为明确配方做 ingot。',
      },
      {
        title: 'Copper Ingot 比 Copper Wire 更优先吗？',
        body: '不一定。Copper Wire 会进入很多前期系统，Copper Ingot 更偏载具链。两边都先预留，再加工。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Copper, label: 'Copper 位置指南' },
      { href: Routes.Subnautica2CopperWire, label: 'Copper Wire 指南' },
      { href: Routes.Subnautica2Processor, label: 'Processor 指南' },
      {
        href: Routes.Subnautica2VehicleFabricator,
        label: 'Vehicle Fabricator 指南',
      },
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery 指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 26 日核对 Subnautica2.gg、Dexerto 和 GamesRadar。Subnautica 2 仍处于抢先体验阶段，Processor、材料数量和载具链用途可能随补丁调整。',
    cardKicker: '材料链卡片',
    cardBody:
      'Copper x3、Processor 加工、Vehicle Fabricator 准备、Copper Wire 时机和原始 Copper 留存规则。',
    cardTypeLabel: '类型',
    cardTypeValue: '加工材料',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = copperIngotCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  copperIngotCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Copper Ingot Guide',
      description:
        'Guide for Copper Ingot recipe, Copper x3, Processor conversion, Vehicle Fabricator use, Copper Wire timing, and raw Copper reserves.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = copperIngotCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2CopperIngot,
  });
}

export default async function CopperIngotGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = copperIngotCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={BoxesIcon}
      locale={locale}
      pathname={Routes.Subnautica2CopperIngot}
      sources={sharedSources}
    />
  );
}
