import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { DiamondIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type QuartzCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-26';

const sharedSources = [
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-quartz-location/',
    label: 'PC Gamer Quartz location guide',
  },
  {
    href: 'https://subnautica2hub.com/resources/quartz',
    label: 'Subnautica2Hub Quartz resource page',
  },
  {
    href: 'https://subnautica2.gg/items/quartz',
    label: 'Subnautica2.gg Quartz item page',
  },
  {
    href: 'https://www.dexerto.com/wikis/subnautica-2/resources/quartz/',
    label: 'Dexerto Quartz resource guide',
  },
];

const quartzCopy: Record<string, QuartzCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Quartz Location Guide - Early Coral Domes and Bulk Mining',
      description:
        'A practical Subnautica 2 Quartz guide covering coral dome pickups, the northwest Lifepod route, glass, Scanner, Habitat Builder, Sonic Resonator bulk mining, and electronics storage.',
    },
    eyebrow: 'Subnautica 2 resource route',
    title: 'Subnautica 2 Quartz Location Guide',
    description:
      'Quartz feels common until every recipe wants it at once. Get a few by hand for the first tools, then set up a cleaner bulk route before glass and electronics start fighting over the same locker.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'PC Gamer reports that early Quartz appears as white crystal chunks on and inside orange-green coral domes, including under the Lifepod, with many domes northwest of the Lifepod. Hand pickups are enough for early Scanner and Glass work, medium crystals can be smashed with the Survival Multitool, and large Quartz deposits later need the Sonic Resonator. Subnautica2Hub lists Quartz in Coral Gardens and Observatory Ruins, while Subnautica2.gg lists it as used in 20 recipes and tied to Processor / glass crafting data.',
    contentsLabel: 'Contents',
    routeTitle: 'Quartz route plan',
    routeSteps: [
      {
        title: 'Start with the domes near the Lifepod',
        body: 'PC Gamer describes Quartz as white crystal chunks on and inside orange-green coral domes, including under the Lifepod. Check the nearby domes before turning the first tool craft into a long swim.',
      },
      {
        title: 'Sweep northwest for early stacks',
        body: 'The same guide points to loads of coral domes northwest of the Lifepod. This is the safer early route for Scanner, Glass, and Habitat Builder prep.',
      },
      {
        title: 'Break medium crystals when you see them',
        body: 'Medium Quartz crystals can be smashed with the Survival Multitool in PC Gamer reporting. Use that to top up without committing to a full mining run.',
      },
      {
        title: 'Save bulk farming for Sonic Resonator',
        body: 'Large Quartz deposits need the Sonic Resonator. PC Gamer calls out cave deposits and a trench near a water current north of the Lifepod, around the Old Habitat route, as a repeatable stock spot.',
      },
      {
        title: 'Split storage by job',
        body: 'Quartz feeds both glass and electronics. Keep a small stack with Wiring Kit and System Chip parts so every piece does not vanish into base windows.',
      },
    ],
    tableTitle: 'Quartz checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      [
        'Early pickup',
        'White crystals on or inside coral domes near the Lifepod.',
      ],
      ['Direction', 'PC Gamer points to many domes northwest of the Lifepod.'],
      ['Bulk mining', 'Large deposits need Sonic Resonator.'],
      [
        'Biome data',
        'Subnautica2Hub lists Coral Gardens and Observatory Ruins.',
      ],
      ['Recipe pressure', 'Subnautica2.gg lists Quartz as used in 20 recipes.'],
    ],
    visualTitle: 'Quartz split',
    visualItems: [
      {
        label: 'First tools',
        value: 'Hand pickup',
        note: 'Scanner and early Glass prep.',
      },
      {
        label: 'Base work',
        value: 'Glass',
        note: 'Habitat Builder and windows eat stacks fast.',
      },
      {
        label: 'Later stock',
        value: 'Sonic',
        note: 'Large cave deposits become the real route.',
      },
    ],
    cautionTitle: 'Do not let glass consume all of it',
    cautionBody:
      'A pretty base can empty the Quartz box before System Chip, Echo Location, or other electronics are ready. Keep a separate electronics stack even if it feels fussy.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Where is Quartz near the start in Subnautica 2?',
        body: 'PC Gamer points to white crystal chunks on and inside orange-green coral domes, including under the Lifepod, with many domes northwest of the Lifepod.',
      },
      {
        title: 'Do you need Sonic Resonator for Quartz?',
        body: 'Not for the first pieces. Hand pickups and medium crystals work early, but large Quartz deposits need the Sonic Resonator.',
      },
      {
        title: 'What is Quartz used for?',
        body: 'Quartz feeds Scanner and Glass prep early, then electronics such as System Chip and modules later. Subnautica2.gg currently lists it in 20 recipes.',
      },
      {
        title: 'Where should you store Quartz?',
        body: 'Split it between glass/base materials and electronics. That keeps System Chip and module crafts from being blocked by base decoration.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
      {
        href: Routes.Subnautica2HabitatBuilder,
        label: 'Habitat Builder Guide',
      },
      { href: Routes.Subnautica2SystemChip, label: 'System Chip Guide' },
      { href: Routes.Subnautica2WiringKit, label: 'Wiring Kit Guide' },
      { href: Routes.Subnautica2EchoLocation, label: 'Echo Location Guide' },
      {
        href: Routes.Subnautica2SonicResonator,
        label: 'Sonic Resonator Guide',
      },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 26, 2026 against PC Gamer, Subnautica2Hub, Subnautica2.gg, and Dexerto. Early Access resource locations and recipe lists can change, so recheck the PDA and map after patches.',
    cardKicker: 'Resource card',
    cardBody:
      'Coral dome pickups, northwest Lifepod sweep, medium crystal smash, Sonic Resonator bulk mining, glass pressure, and electronics storage.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Resource guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Quartz 位置指南 - 早期珊瑚穹顶和批量采集',
      description:
        'Subnautica 2 中文 Quartz 指南：整理珊瑚穹顶手捡、Lifepod 西北路线、Glass、Scanner、Habitat Builder、Sonic Resonator 批量采集和电子材料收纳。',
    },
    eyebrow: 'Subnautica 2 资源路线',
    title: 'Subnautica 2 Quartz 位置指南',
    description:
      'Quartz 看起来很常见，直到 Scanner、Glass、System Chip 和模块一起要它。前期先手捡，后面再安排批量路线，别让玻璃把电子材料吃光。',
    quickLabel: '快速结论',
    quickAnswer:
      'PC Gamer 报道早期 Quartz 是白色水晶块，出现在橙绿色珊瑚穹顶上或里面，包括 Lifepod 下方；Lifepod 西北方向有很多这类穹顶。手捡足够支撑早期 Scanner 和 Glass，中等水晶可以用 Survival Multitool 打碎，大型 Quartz 矿点后期需要 Sonic Resonator。Subnautica2Hub 把 Quartz 区域列为 Coral Gardens 和 Observatory Ruins；Subnautica2.gg 当前写 Quartz 用于 20 个配方，并和 Processor / glass 制作资料相关。',
    contentsLabel: '目录',
    routeTitle: 'Quartz 路线规划',
    routeSteps: [
      {
        title: '先搜 Lifepod 附近的珊瑚穹顶',
        body: 'PC Gamer 把 Quartz 描述成橙绿色珊瑚穹顶上或里面的白色水晶块，包括 Lifepod 下方。第一批工具材料先在附近找，不要一开始就游很远。',
      },
      {
        title: '早期往西北扫一圈',
        body: '同一篇攻略提到 Lifepod 西北方向有很多珊瑚穹顶。这条路线适合早期 Scanner、Glass 和 Habitat Builder 准备。',
      },
      {
        title: '看到中等水晶就敲掉',
        body: 'PC Gamer 说中等 Quartz 水晶可以用 Survival Multitool 打碎。路过时顺手补一点，不必每次都专门跑矿。',
      },
      {
        title: '批量库存等 Sonic Resonator',
        body: '大型 Quartz 矿点需要 Sonic Resonator。PC Gamer 提到洞穴矿点，以及 Lifepod 北方、Old Habitat 路线附近水流边的沟槽，适合反复补库存。',
      },
      {
        title: '按用途拆箱收纳',
        body: 'Quartz 同时吃玻璃和电子材料。留一小组在 Wiring Kit、System Chip 附近，别让所有 Quartz 都变成基地窗户。',
      },
    ],
    tableTitle: 'Quartz 检查表',
    tableHeaders: ['需要', '确认什么'],
    tableRows: [
      ['早期获取', 'Lifepod 附近珊瑚穹顶上或里面的白色水晶。'],
      ['方向', 'PC Gamer 指向 Lifepod 西北方向的大量珊瑚穹顶。'],
      ['批量采集', '大型矿点需要 Sonic Resonator。'],
      ['生态区', 'Subnautica2Hub 列出 Coral Gardens 和 Observatory Ruins。'],
      ['配方压力', 'Subnautica2.gg 当前写 Quartz 用于 20 个配方。'],
    ],
    visualTitle: 'Quartz 分流',
    visualItems: [
      {
        label: '早期工具',
        value: '手捡',
        note: 'Scanner 和早期 Glass 准备。',
      },
      {
        label: '基地',
        value: 'Glass',
        note: 'Habitat Builder 和窗户会吃很多。',
      },
      {
        label: '后期库存',
        value: 'Sonic',
        note: '大型洞穴矿点才是批量来源。',
      },
    ],
    cautionTitle: '不要让 Glass 吃掉所有 Quartz',
    cautionBody:
      '漂亮基地很容易把 Quartz 箱子清空，然后 System Chip、Echo Location 或模块材料突然卡住。单独留一份电子材料用 Quartz，麻烦一点但很省心。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 开局 Quartz 在哪里？',
        body: 'PC Gamer 指向 Lifepod 附近橙绿色珊瑚穹顶上或里面的白色水晶块，包括 Lifepod 下方；Lifepod 西北方向也有很多。',
      },
      {
        title: 'Quartz 需要 Sonic Resonator 吗？',
        body: '第一批不需要。前期可以手捡，也可以敲中等水晶；大型 Quartz 矿点才需要 Sonic Resonator。',
      },
      {
        title: 'Quartz 用来做什么？',
        body: '早期会接 Scanner 和 Glass，后面还会接 System Chip 与模块材料。Subnautica2.gg 当前列出 20 个相关配方。',
      },
      {
        title: 'Quartz 应该怎么收纳？',
        body: '建议拆成玻璃/基地材料和电子材料两份。这样基地装饰不会把 System Chip 和模块路线卡住。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Scanner, label: 'Scanner 指南' },
      { href: Routes.Subnautica2HabitatBuilder, label: 'Habitat Builder 指南' },
      { href: Routes.Subnautica2SystemChip, label: 'System Chip 指南' },
      { href: Routes.Subnautica2WiringKit, label: 'Wiring Kit 指南' },
      { href: Routes.Subnautica2EchoLocation, label: 'Echo Location 指南' },
      { href: Routes.Subnautica2SonicResonator, label: 'Sonic Resonator 指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 26 日核对 PC Gamer、Subnautica2Hub、Subnautica2.gg 和 Dexerto。抢先体验阶段资源点和配方列表可能变化，更新后请重新核对 PDA 和地图。',
    cardKicker: '资源卡',
    cardBody:
      '珊瑚穹顶手捡、Lifepod 西北路线、中等水晶敲碎、Sonic Resonator 批量采集、Glass 消耗和电子材料收纳。',
    cardTypeLabel: '类型',
    cardTypeValue: '资源指南',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = quartzCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  quartzCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Quartz Location Guide',
      description:
        'Guide for Quartz location, coral dome pickups, Glass, Scanner, Habitat Builder, Sonic Resonator bulk mining, and electronics storage.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = quartzCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2Quartz,
  });
}

export default async function QuartzGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = quartzCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={DiamondIcon}
      locale={locale}
      pathname={Routes.Subnautica2Quartz}
      sources={sharedSources}
    />
  );
}
