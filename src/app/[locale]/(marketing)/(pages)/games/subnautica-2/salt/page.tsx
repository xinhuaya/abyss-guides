import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { GemIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type SaltCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-28';

const sharedSources = [
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-salt-location/',
    label: 'PC Gamer Salt location guide',
  },
  {
    href: 'https://subnautica2hub.com/resources/salt',
    label: 'Subnautica2Hub Salt resource page',
  },
  {
    href: 'https://subnautica2.gg/items/salt',
    label: 'Subnautica2.gg Salt item page',
  },
  {
    href: 'https://www.dexerto.com/wikis/subnautica-2/resources/salt/',
    label: 'Dexerto Salt resource guide',
  },
];

const saltCopy: Record<string, SaltCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Salt Location Guide - Chap Black Box Cave and Power Cell Prep',
      description:
        'A practical Subnautica 2 Salt guide covering the southeast Lifepod cave near Chap Black Box, respawning early pickups, Power Cell and Tadpole prep, jerky, Glass from Salt, Coral Gardens farming, and Heat Tolerance routes.',
    },
    eyebrow: 'Subnautica 2 resource route',
    title: 'Subnautica 2 Salt Location Guide',
    description:
      'Salt looks humble until a Power Cell blocks your Tadpole. Grab the early cave pieces, mark the respawn, then split Salt between power, Glass, water, and food instead of spending it by habit.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'PC Gamer reports the easiest early Salt spot as a cave roughly 200 meters southeast of the Lifepod, near Chap Black Box, past the Welcome Center and down by two pillars with a giant Coral Crab nearby. The cave holds two Salt pieces that respawn over time. Dexerto also points to the same Chap Blackbox cave and a bulk Dead Coral Biome route south-southeast of the Lifepod. Subnautica2Hub lists Salt in Coral Gardens at 0-400m, with Salt Crystals and Sonic Resonator deposits, and connects it to Power Cell, Glass from Salt, food, water, and Power Storage recipes. If you mark only one material route early, make it this one or your Tadpole and Glass plan will keep nagging you.',
    fieldNotesTitle: 'Field notes for Salt reserves',
    fieldNotes: [
      {
        title: 'Salt is cheap until the Power Cell is waiting',
        body: 'Food and water habits make Salt feel disposable. Then Power Cell asks for one and the Tadpole plan stalls over the easiest material on the list.',
      },
      {
        title: 'Keep one piece out of the kitchen pile',
        body: 'A tiny vehicle reserve solves most Salt mistakes. Put one piece with batteries and Strong Acid instead of the general survival box.',
      },
      {
        title: 'Do not farm it as a main trip',
        body: 'Salt is best collected as a tagalong item on safer shallow routes. Dedicated Salt trips are usually a sign the storage split failed.',
      },
    ],
    routeChecklistTitle: 'Before spending Salt',
    routeChecklist: [
      'One piece is reserved for Power Cell.',
      'Food and water stock does not touch the vehicle reserve.',
      'Battery and Strong Acid materials are staged nearby.',
      'Salt route is paired with another shallow errand.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Salt route plan',
    routeSteps: [
      {
        title: 'Start with Chap Black Box cave',
        body: 'PC Gamer points to a small cave about 200 meters southeast of the Lifepod, near Chap Black Box. This is the cleanest early route because the story already sends you close to it.',
      },
      {
        title: 'Use the pillars as the entrance clue',
        body: 'Swim southeast past the Welcome Center, then look for two pillars and a giant Coral Crab. PC Gamer describes a standing light in front of the pillar near the cave entrance.',
      },
      {
        title: 'Take the two early pieces and mark the spot',
        body: 'The same guide reports two Salt pieces in the cave, with respawns over time. Drop a Beacon if you are still learning the southeast route.',
      },
      {
        title: 'Reserve one for the Power Cell',
        body: 'PC Gamer ties Salt directly to Power Cell crafting for the Tadpole. Do not turn every piece into food before the vehicle chain is solved.',
      },
      {
        title: 'Decide before making Glass from Salt',
        body: 'The Salt-to-Glass recipe is useful when Quartz is being saved for electronics, but it also competes with Power Cell, water, and food. Check the next build before processing a full stack.',
      },
      {
        title: 'Use later farms for bulk',
        body: 'PC Gamer points to volcanic vents and The Great Jaw as later Salt areas. Dexerto calls out a Dead Coral Biome bulk route, while Subnautica2Hub lists Coral Gardens 0-400m and Sonic Resonator deposit farming.',
      },
    ],
    tableTitle: 'Salt checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      [
        'Early route',
        'Chap Black Box cave about 200m southeast of the Lifepod.',
      ],
      [
        'Landmark',
        'Welcome Center, two pillars, giant Coral Crab, standing light.',
      ],
      [
        'First pickup',
        'PC Gamer reports two Salt pieces that respawn over time.',
      ],
      ['Vehicle chain', 'Power Cell uses Salt in current public data.'],
      ['Glass option', 'Salt x2 can become Glass at the Processor.'],
      ['Bulk data', 'Subnautica2Hub lists Coral Gardens at 0-400m.'],
    ],
    visualTitle: 'Salt plan',
    visualItems: [
      {
        label: 'First grab',
        value: '2 salt',
        note: 'Chap cave respawn pickup.',
      },
      {
        label: 'Spend',
        value: 'Power',
        note: 'Power Cell before snacks.',
      },
      {
        label: 'Bulk',
        value: 'Coral',
        note: 'Later Coral Gardens farming.',
      },
    ],
    cautionTitle: 'Jerky can wait',
    cautionBody:
      'Salt food is cute, but a dead Tadpole route is not. Keep vehicle power, water, and glass needs ahead of snack crafting until your storage has a proper buffer.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Where is Salt early in Subnautica 2?',
        body: 'PC Gamer points to a cave roughly 200 meters southeast of the Lifepod near Chap Black Box. Dexerto also lists that cave as the closest early source.',
      },
      {
        title: 'Does Salt respawn?',
        body: 'PC Gamer reports that the two early Salt pieces in the Chap Black Box cave respawn over time, making the cave worth marking.',
      },
      {
        title: 'What is Salt used for first?',
        body: 'Power Cell is the important early use because it feeds Tadpole vehicle progress. Subnautica2Hub also lists food, water, Power Storage, and Glass from Salt recipes.',
      },
      {
        title: 'Where do you farm Salt in bulk?',
        body: 'Subnautica2Hub lists Coral Gardens at 0-400m, PC Gamer mentions volcanic vents and The Great Jaw, and Dexerto points to a Dead Coral Biome bulk route south-southeast of the Lifepod.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Vehicle Guide' },
      { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid Guide' },
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell Guide' },
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery Guide' },
      { href: Routes.Subnautica2Glass, label: 'Glass Recipe Guide' },
      { href: Routes.Subnautica2Beacon, label: 'Beacon Guide' },
      { href: Routes.Subnautica2Quartz, label: 'Quartz Location Guide' },
      { href: Routes.Subnautica2Lithium, label: 'Lithium Location Guide' },
      { href: Routes.Subnautica2Lead, label: 'Lead Location Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 28, 2026 against PC Gamer, Subnautica2Hub, Subnautica2.gg, and Dexerto. Early Access spawn routes, respawn behavior, and recipe lists can change; verify with the PDA and current map after patches.',
    cardKicker: 'Resource card',
    cardBody:
      'Chap Black Box cave, southeast Lifepod route, respawning early Salt, Power Cell priority, jerky caution, Coral Gardens farming, and Heat Tolerance route notes.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Resource guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Salt 位置指南 - Chap 黑匣子洞穴和 Power Cell 准备',
      description:
        'Subnautica 2 中文 Salt 指南：整理 Lifepod 东南 Chap Black Box 洞穴、前期刷新拾取、Power Cell 和 Tadpole 准备、jerky、Glass from Salt、Coral Gardens 采集和耐热路线。',
    },
    eyebrow: 'Subnautica 2 资源路线',
    title: 'Subnautica 2 Salt 位置指南',
    description:
      'Salt 看起来普通，但 Power Cell 一卡住，Tadpole 就动不了。先拿东南洞穴里的早期材料，把刷新点标出来，再把 Salt 分给供电、Glass、水和食物。',
    quickLabel: '快速结论',
    quickAnswer:
      'PC Gamer 报道最容易的早期 Salt 点在 Lifepod 东南约 200 米、Chap Black Box 附近的小洞穴；路线会经过 Welcome Center，往下到两根石柱和一只巨大 Coral Crab 附近。洞里有两块 Salt，并且会随时间刷新。Dexerto 也指向 Chap Blackbox 洞穴，并补充 Lifepod 南偏东的 Dead Coral Biome 批量路线。Subnautica2Hub 把 Salt 列在 Coral Gardens，深度 0-400m，采集方式包含 Salt Crystal 和 Sonic Resonator 矿点，并关联 Power Cell、Glass from Salt、食物、水和 Power Storage 配方。前期如果只标一个材料点，就先标这个洞穴，后面 Tadpole 和 Glass 都会回头找它。',
    fieldNotesTitle: 'Salt 储备笔记',
    fieldNotes: [
      {
        title: 'Salt 便宜，直到 Power Cell 等它',
        body: '做食物和水时，Salt 很容易被当成随便花的材料。等 Power Cell 只差一块 Salt，Tadpole 计划就会被最简单的材料卡住。',
      },
      {
        title: '厨房堆外单独留一块',
        body: '给载具路线留一小份 Salt 储备，能避免大多数错误。把一块 Salt 放在电池和 Strong Acid 旁边。',
      },
      {
        title: '不要专门为 Salt 跑大路线',
        body: 'Salt 最适合在浅水安全路线顺手带回。专门跑 Salt，通常说明收纳分区已经出问题了。',
      },
    ],
    routeChecklistTitle: '花 Salt 前',
    routeChecklist: [
      'Power Cell 已经单独预留一块 Salt。',
      '食物和水材料不碰载具储备。',
      '电池和 Strong Acid 材料放在附近。',
      'Salt 路线和另一个浅水任务一起做。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Salt 路线规划',
    routeSteps: [
      {
        title: '先去 Chap Black Box 洞穴',
        body: 'PC Gamer 指向 Lifepod 东南约 200 米、Chap Black Box 附近的小洞穴。这条路线很适合前期，因为剧情本来就会把你带到附近。',
      },
      {
        title: '用石柱找入口',
        body: '从 Lifepod 往东南，经过 Welcome Center，再下到两根石柱和巨大 Coral Crab 附近。PC Gamer 提到洞口旁的石柱前有一盏立灯。',
      },
      {
        title: '拿两块 Salt，并把点标出来',
        body: '同一篇攻略提到洞里有两块 Salt，而且会随时间刷新。前期还不熟路线的话，可以放一个 Beacon。',
      },
      {
        title: '先给 Power Cell 留一块',
        body: 'PC Gamer 把 Salt 和 Tadpole 所需的 Power Cell 直接关联起来。在载具链完成前，不要把所有 Salt 都做成食物。',
      },
      {
        title: '用 Salt 做 Glass 前先看下一步',
        body: 'Salt 转 Glass 在 Quartz 要留给电子材料时很好用，但它也会和 Power Cell、水、食物抢材料。处理一整组 Salt 前，先看当前最卡的是哪条链。',
      },
      {
        title: '后期再做批量路线',
        body: 'PC Gamer 还提到火山热泉区和 The Great Jaw 周边也能找 Salt。Dexerto 指向 Dead Coral Biome 批量路线，Subnautica2Hub 则列出 Coral Gardens 0-400m 和 Sonic Resonator 矿点采集。',
      },
    ],
    tableTitle: 'Salt 检查表',
    tableHeaders: ['需要', '确认什么'],
    tableRows: [
      ['早期路线', 'Lifepod 东南约 200m 的 Chap Black Box 洞穴。'],
      ['地标', 'Welcome Center、两根石柱、巨大 Coral Crab、立灯。'],
      ['第一批材料', 'PC Gamer 报道洞内两块 Salt 会随时间刷新。'],
      ['载具链', '当前公开资料中 Power Cell 需要 Salt。'],
      ['Glass 选项', 'Processor 中 Salt x2 可以转成 Glass。'],
      ['批量数据', 'Subnautica2Hub 当前列出 Coral Gardens，0-400m。'],
    ],
    visualTitle: 'Salt 跑图',
    visualItems: [
      {
        label: '第一趟',
        value: '2 块',
        note: 'Chap 洞穴刷新点。',
      },
      {
        label: '优先',
        value: '供电',
        note: '先 Power Cell，后零食。',
      },
      {
        label: '批量',
        value: 'Coral',
        note: '后期 Coral Gardens 补货。',
      },
    ],
    cautionTitle: 'Jerky 可以晚点再做',
    cautionBody:
      'Salt 做食物挺有意思，但 Tadpole 没电就不好玩了。Power Cell、水、玻璃和基地储备先排前面，等库存稳定后再考虑食物配方。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 前期 Salt 在哪里？',
        body: 'PC Gamer 指向 Lifepod 东南约 200 米、Chap Black Box 附近的洞穴。Dexerto 也把这个洞穴列为最近的早期来源。',
      },
      {
        title: 'Salt 会刷新吗？',
        body: 'PC Gamer 报道 Chap Black Box 洞穴里的两块 Salt 会随时间刷新，所以这个点值得标记。',
      },
      {
        title: 'Salt 最先用来做什么？',
        body: '最重要的早期用途是 Power Cell，因为它会卡 Tadpole 载具推进。Subnautica2Hub 还列出食物、水、Power Storage 和 Glass from Salt 配方。',
      },
      {
        title: '哪里适合批量刷 Salt？',
        body: 'Subnautica2Hub 列出 Coral Gardens 0-400m；PC Gamer 提到火山热泉和 The Great Jaw；Dexerto 指向 Lifepod 南偏东的 Dead Coral Biome 批量路线。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 载具指南' },
      { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid 指南' },
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell 指南' },
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery 指南' },
      { href: Routes.Subnautica2Glass, label: 'Glass 配方指南' },
      { href: Routes.Subnautica2Beacon, label: 'Beacon 指南' },
      { href: Routes.Subnautica2Quartz, label: 'Quartz 位置指南' },
      { href: Routes.Subnautica2Lithium, label: 'Lithium 位置指南' },
      { href: Routes.Subnautica2Lead, label: 'Lead 位置指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 28 日核对 PC Gamer、Subnautica2Hub、Subnautica2.gg 和 Dexerto。抢先体验阶段生成路线、刷新情况和配方列表都可能变化；更新后请以 PDA 和当前地图为准。',
    cardKicker: '资源卡',
    cardBody:
      'Chap Black Box 洞穴、Lifepod 东南路线、前期刷新 Salt、Power Cell 优先级、jerky 提醒、Coral Gardens 采集和 Heat Tolerance 路线备注。',
    cardTypeLabel: '类型',
    cardTypeValue: '资源指南',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = saltCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  saltCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Salt Location Guide',
      description:
        'Guide for Salt locations, Chap Black Box cave, Power Cell and Tadpole prep, Coral Gardens farming, Glass from Salt, food, water, and Heat Tolerance routes.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = saltCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2Salt,
  });
}

export default async function SaltGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = saltCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={GemIcon}
      locale={locale}
      pathname={Routes.Subnautica2Salt}
      sources={sharedSources}
    />
  );
}
