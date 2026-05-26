import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { CpuIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type ProcessorCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-25';
const UPDATED_AT = '2026-05-25';

const sharedSources = [
  {
    href: 'https://subnautica2.gg/blueprints/processor',
    label: 'Subnautica2.gg Processor blueprint',
  },
  {
    href: 'https://subnautica2hub.com/blueprints/processor',
    label: 'Subnautica2Hub Processor blueprint',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-strong-acid-necrolei-cyst-location/',
    label: 'PC Gamer Strong Acid and Processor route',
  },
];

const processorCopy: Record<string, ProcessorCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Processor Guide - Scan Unlock, Recipe, and Old Habitat Route',
      description:
        'A practical Subnautica 2 Processor guide covering scan unlocks, Titanium, Mild Acid, Copper Wire, Habitat Builder crafting, Old Habitat route notes, and processing uses.',
    },
    eyebrow: 'Subnautica 2 production station',
    title: 'Subnautica 2 Processor Guide',
    description:
      'Processor is the station that turns a base into a workshop. Once it is built, materials like Strong Acid, Strontium, ingots, and advanced chains stop being guesses and start becoming planned batches.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current Subnautica2.gg and Subnautica2Hub data list Processor as a scan-unlocked interior facility built with Titanium x2, Mild Acid x1, and Copper Wire x1. Subnautica2.gg shows verified scan locations, while PC Gamer points players toward the Old Habitat north of the Life Pod during the black-box route. Build it with the Habitat Builder/Builder Tool after the scan unlock lands.',
    contentsLabel: 'Contents',
    routeTitle: 'Processor unlock plan',
    routeSteps: [
      {
        title: 'Bring Scanner and enough air',
        body: 'Processor is not a default station. Treat the first trip as a scan run: oxygen margin, a clear return path, and enough inventory space to bring back any nearby samples.',
      },
      {
        title: 'Use Old Habitat as the first lead',
        body: 'PC Gamer reports a Processor at the Old Habitat north of the Life Pod during the black-box objective route. Subnautica2.gg also lists verified Processor scan locations, so check its map if your route differs.',
      },
      {
        title: 'Prepare the build recipe',
        body: 'The two blueprint databases agree on Titanium x2, Mild Acid x1, and Copper Wire x1. Mild Acid is the piece most likely to send you back to Acidic Raion Pouch farming.',
      },
      {
        title: 'Place it in a powered base',
        body: 'The Processor belongs near storage and crafting, not in a decorative corner. Put a chemical locker nearby for Mild Acid, Strong Acid, Celestine, and later processed materials.',
      },
      {
        title: 'Batch expensive conversions',
        body: 'Do not feed rare materials one by one without a goal. Check whether the next craft needs Strong Acid, Strontium, Titanium Ingots, or another processed output before spending the input pile.',
      },
    ],
    tableTitle: 'Processor checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      [
        'Scan unlock',
        'Current data says the Processor blueprint unlocks by scanning.',
      ],
      [
        'Build station',
        'Crafted with the Habitat Builder or Builder Tool after unlock.',
      ],
      [
        'Titanium x2',
        'Common material, but still needed for many base pieces.',
      ],
      ['Mild Acid x1', 'Craft from Acidic Raion Pouch route before building.'],
      [
        'Copper Wire x1',
        'Reserve wire instead of spending every Copper stack.',
      ],
    ],
    visualTitle: 'Processing chain',
    visualItems: [
      {
        label: 'Scan',
        value: 'Processor',
        note: 'Old Habitat is a practical first lead.',
      },
      {
        label: 'Build',
        value: 'Station',
        note: 'Titanium, Mild Acid, Copper Wire.',
      },
      {
        label: 'Convert',
        value: 'Materials',
        note: 'Strong Acid, Strontium, ingots, and later chains.',
      },
    ],
    cautionTitle: 'Do not build the station before the material route is ready',
    cautionBody:
      'Processor looks like a single base object, but it pulls from several early bottlenecks. If Mild Acid or Copper Wire is still shaky, fix those routes first so the station does not sit empty.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you unlock Processor in Subnautica 2?',
        body: 'Current blueprint data says to scan Processor fragments or stations. PC Gamer points to the Old Habitat north of the Life Pod as a practical route lead.',
      },
      {
        title: 'What is the Processor recipe?',
        body: 'Subnautica2.gg and Subnautica2Hub currently list Titanium x2, Mild Acid x1, and Copper Wire x1.',
      },
      {
        title: 'Where do you build Processor?',
        body: 'Current data lists it as an interior production facility built with the Habitat Builder or Builder Tool after the blueprint unlocks.',
      },
      {
        title: 'Why should I build Processor early?',
        body: 'It unlocks the processing loop behind materials such as Strong Acid and Strontium, which feed vehicle and advanced upgrade progress.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2MildAcid, label: 'Mild Acid Guide' },
      { href: Routes.Subnautica2Biolab, label: 'Biolab Guide' },
      {
        href: Routes.Subnautica2AcidicRaionPouch,
        label: 'Acidic Raion Pouch Guide',
      },
      { href: Routes.Subnautica2CopperWire, label: 'Copper Wire Guide' },
      { href: Routes.Subnautica2CopperIngot, label: 'Copper Ingot Guide' },
      {
        href: Routes.Subnautica2HabitatBuilder,
        label: 'Habitat Builder Guide',
      },
      { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid Guide' },
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell Guide' },
      { href: Routes.Subnautica2SilverIngot, label: 'Silver Ingot Guide' },
      { href: Routes.Subnautica2Strontium, label: 'Strontium Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 25, 2026 against Subnautica2.gg, Subnautica2Hub, and PC Gamer. Subnautica 2 is in Early Access, so scan locations, station names, and recipe counts should be rechecked after patches.',
    cardKicker: 'Station card',
    cardBody:
      'Scan unlock, Old Habitat lead, Titanium, Mild Acid, Copper Wire, and processing-chain priorities.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Station guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Processor 指南 - 扫描解锁、配方和 Old Habitat 路线',
      description:
        'Subnautica 2 中文 Processor 指南：整理扫描解锁、Titanium、Mild Acid、Copper Wire、Habitat Builder 建造、Old Habitat 路线和加工用途。',
    },
    eyebrow: 'Subnautica 2 加工设备',
    title: 'Subnautica 2 Processor 指南',
    description:
      'Processor 做出来以后，基地才真正像一个工作间。Strong Acid、Strontium、锭类和后期加工链，都要从“捡到什么用什么”变成按批次规划。',
    quickLabel: '快速结论',
    quickAnswer:
      'Subnautica2.gg 和 Subnautica2Hub 当前都把 Processor 写成扫描解锁的室内设施，建造材料是 Titanium x2、Mild Acid x1、Copper Wire x1。Subnautica2.gg 有已验证扫描点地图；PC Gamer 提到 Life Pod 北边 Old Habitat 的 black-box 路线可以找到 Processor。扫描解锁后，用 Habitat Builder/Builder Tool 放进基地。',
    contentsLabel: '目录',
    routeTitle: 'Processor 解锁规划',
    routeSteps: [
      {
        title: '先按扫描任务准备',
        body: 'Processor 不是开局默认工作站。第一次去找它时，把这趟当扫描路线：氧气余量、回程路线、背包空间都要留出来。',
      },
      {
        title: '把 Old Habitat 当第一条线索',
        body: 'PC Gamer 把 Processor 线索指向 Life Pod 北边的 Old Habitat，和 black-box 目标路线有关。如果你的路线不一样，再用 Subnautica2.gg 的扫描点地图核对。',
      },
      {
        title: '提前备好建造材料',
        body: '两个蓝图数据库在配方上是一致的：Titanium x2、Mild Acid x1、Copper Wire x1。最容易卡你的通常不是 Titanium，而是 Mild Acid。',
      },
      {
        title: '放在有电、有箱子的基地里',
        body: 'Processor 应该靠近存储和制作区域。旁边放一个化学材料箱，专门放 Mild Acid、Strong Acid、Celestine 和后续加工材料。',
      },
      {
        title: '稀有材料按批次加工',
        body: '不要看到按钮亮了就把稀有材料全塞进去。先确认下一步到底是 Strong Acid、Strontium、Titanium Ingot，还是别的加工产物。',
      },
    ],
    tableTitle: 'Processor 检查表',
    tableHeaders: ['需求', '确认什么'],
    tableRows: [
      ['扫描解锁', '当前资料显示 Processor 需要扫描解锁。'],
      ['建造方式', '解锁后用 Habitat Builder 或 Builder Tool 建造。'],
      ['Titanium x2', '常见，但基地部件也会大量消耗。'],
      ['Mild Acid x1', '建造前先走 Acidic Raion Pouch 路线。'],
      ['Copper Wire x1', '提前留线，不要把 Copper 全花光。'],
    ],
    visualTitle: '加工链',
    visualItems: [
      {
        label: '扫描',
        value: 'Processor',
        note: 'Old Habitat 是很实用的第一条线索。',
      },
      {
        label: '建造',
        value: '设备',
        note: 'Titanium、Mild Acid、Copper Wire。',
      },
      {
        label: '加工',
        value: '材料',
        note: 'Strong Acid、Strontium、锭类和后续材料链。',
      },
    ],
    cautionTitle: '材料路线没稳前，不要急着只造个空设备',
    cautionBody:
      'Processor 看起来只是一个基地物件，但它会拉动好几条早期卡点。Mild Acid 或 Copper Wire 还不稳定时，先把对应路线补好。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Processor 怎么解锁？',
        body: '当前蓝图数据写的是扫描解锁。PC Gamer 提到 Life Pod 北边 Old Habitat 是实用路线线索。',
      },
      {
        title: 'Processor 配方是什么？',
        body: 'Subnautica2.gg 和 Subnautica2Hub 当前都写的是 Titanium x2、Mild Acid x1、Copper Wire x1。',
      },
      {
        title: 'Processor 在哪里建造？',
        body: '当前资料把它列为室内生产设施，蓝图解锁后用 Habitat Builder 或 Builder Tool 建造。',
      },
      {
        title: '为什么 Processor 要尽早做？',
        body: '它会接上 Strong Acid、Strontium 等加工链，后面车辆和高级升级会用到这些材料。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2MildAcid, label: 'Mild Acid 指南' },
      { href: Routes.Subnautica2Biolab, label: 'Biolab 指南' },
      {
        href: Routes.Subnautica2AcidicRaionPouch,
        label: 'Acidic Raion Pouch 指南',
      },
      { href: Routes.Subnautica2CopperWire, label: 'Copper Wire 指南' },
      { href: Routes.Subnautica2CopperIngot, label: 'Copper Ingot 指南' },
      { href: Routes.Subnautica2HabitatBuilder, label: 'Habitat Builder 指南' },
      { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid 指南' },
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell 指南' },
      { href: Routes.Subnautica2SilverIngot, label: 'Silver Ingot 指南' },
      { href: Routes.Subnautica2Strontium, label: 'Strontium 指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 25 日核对 Subnautica2.gg、Subnautica2Hub 和 PC Gamer。Subnautica 2 仍在抢先体验，扫描点、工作站名称和配方数量后续可能调整。',
    cardKicker: '设备卡片',
    cardBody:
      '扫描解锁、Old Habitat 线索、Titanium、Mild Acid、Copper Wire 和加工链优先级。',
    cardTypeLabel: '类型',
    cardTypeValue: '设备指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: 'Early Access',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 Processor Guide - scan unlock, recipe, Old Habitat',
      description:
        'Subnautica 2 Processor guide for scan unlock, Titanium, Mild Acid, Copper Wire, Habitat Builder placement, Old Habitat route, and processing uses.',
    },
    eyebrow: 'Subnautica 2 production station',
    title: 'Subnautica 2 Processor Guide',
    description:
      'Processor ができると、基地はただの倉庫ではなく作業場になります。Strong Acid、Strontium、ingot などを目的別に作る段階です。',
    quickLabel: '要点',
    quickAnswer:
      '現在の Subnautica2.gg と Subnautica2Hub では、Processor は scan unlock の interior facility で、材料は Titanium x2、Mild Acid x1、Copper Wire x1 です。PC Gamer は Life Pod 北の Old Habitat をルートの手がかりとして紹介しています。',
    contentsLabel: '目次',
    routeTitle: 'Processor unlock plan',
    routeSteps: [
      {
        title: 'Scanner と酸素を準備',
        body: 'Processor は初期クラフトではありません。最初は scan run と考え、戻る道と酸素に余裕を持たせます。',
      },
      {
        title: 'Old Habitat を最初の手がかりにする',
        body: 'PC Gamer は black-box route の流れで、Life Pod 北の Old Habitat を紹介しています。違うルートなら Subnautica2.gg の scan map を確認します。',
      },
      {
        title: '材料を先に揃える',
        body: '現在のデータは Titanium x2、Mild Acid x1、Copper Wire x1 で一致しています。特に Mild Acid を先に用意します。',
      },
      {
        title: 'powered base に置く',
        body: 'Processor は storage と crafting の近くに置きます。Mild Acid、Strong Acid、Celestine 用の箱を横に作ると楽です。',
      },
      {
        title: 'rare input は目的を決めて加工',
        body: '光った材料を全部入れず、次に Strong Acid、Strontium、ingot のどれが必要かを確認します。',
      },
    ],
    tableTitle: 'Processor checklist',
    tableHeaders: ['Need', 'Check'],
    tableRows: [
      ['Scan unlock', 'Current data says Processor unlocks by scanning.'],
      ['Build station', 'Use Habitat Builder or Builder Tool after unlock.'],
      ['Titanium x2', 'Common, but also used in base pieces.'],
      ['Mild Acid x1', 'Prepare the Acidic Raion Pouch chain first.'],
      ['Copper Wire x1', 'Reserve wire before spending Copper.'],
    ],
    visualTitle: 'Processing chain',
    visualItems: [
      {
        label: 'Scan',
        value: 'Processor',
        note: 'Old Habitat is the first lead.',
      },
      {
        label: 'Build',
        value: 'Station',
        note: 'Titanium, Mild Acid, Copper Wire.',
      },
      {
        label: 'Convert',
        value: 'Materials',
        note: 'Strong Acid, Strontium, ingots.',
      },
    ],
    cautionTitle: 'Do not build it before the supply route is ready',
    cautionBody:
      'Processor は複数の素材ルートを要求します。Mild Acid と Copper Wire が不安定なら、先にそこを整えます。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you unlock Processor?',
        body: 'Current data says to scan Processor. PC Gamer points to Old Habitat north of the Life Pod as a useful lead.',
      },
      {
        title: 'What is the Processor recipe?',
        body: 'Current data lists Titanium x2, Mild Acid x1, and Copper Wire x1.',
      },
      {
        title: 'Where do you build Processor?',
        body: 'It is listed as an interior facility built with Habitat Builder or Builder Tool after unlock.',
      },
      {
        title: 'Why build Processor?',
        body: 'It opens material processing for Strong Acid, Strontium, ingots, and later upgrade chains.',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2MildAcid, label: 'Mild Acid Guide' },
      { href: Routes.Subnautica2Biolab, label: 'Biolab Guide' },
      {
        href: Routes.Subnautica2AcidicRaionPouch,
        label: 'Acidic Raion Pouch Guide',
      },
      { href: Routes.Subnautica2CopperWire, label: 'Copper Wire Guide' },
      {
        href: Routes.Subnautica2HabitatBuilder,
        label: 'Habitat Builder Guide',
      },
      { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid Guide' },
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell Guide' },
      { href: Routes.Subnautica2Strontium, label: 'Strontium Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 25, 2026 against Subnautica2.gg, Subnautica2Hub, and PC Gamer. Early Access data can change after patches.',
    cardKicker: 'Station card',
    cardBody:
      'Scan unlock, Old Habitat lead, Titanium, Mild Acid, Copper Wire, and processing-chain priorities.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Station guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
};

const fallbackCopy = processorCopy.en;

for (const locale of ['de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  processorCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Processor Guide',
      description:
        'Guide for Processor scan unlock, Titanium, Mild Acid, Copper Wire, Old Habitat route, and processing uses.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = processorCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2Processor,
  });
}

export default async function ProcessorGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = processorCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={CpuIcon}
      locale={locale}
      pathname={Routes.Subnautica2Processor}
      sources={sharedSources}
    />
  );
}
