import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { WrenchIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type FabricatorCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-27';
const UPDATED_AT = '2026-05-29';

const sharedSources = [
  {
    href: 'https://subnautica2.gg/blueprints/fabricator',
    label: 'Subnautica2.gg Fabricator blueprint',
  },
  {
    href: 'https://subnautica2.gg/items/fabricator',
    label: 'Subnautica2.gg Fabricator item page',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-fully-functional-fabricator-upgrade/',
    label: 'PC Gamer Fully Functional Fabricator guide',
  },
];

const fabricatorCopy: Record<string, FabricatorCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Fabricator Guide - Fully Functional Fabricator, Recipe, and Base Setup',
      description:
        'A practical Subnautica 2 Fabricator guide covering the fully functional Fabricator upgrade, Titanium x1, Copper x1, Quartz x1, Habitat Builder setup, and base placement.',
    },
    eyebrow: 'Subnautica 2 base crafting station',
    title: 'Subnautica 2 Fabricator Guide',
    description:
      'The Fabricator is easy to ignore because the Life Pod already gives you one. The useful upgrade is the fully functional Fabricator you place in your own base, where the whole crafting loop finally stops depending on a swim back to the pod.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current Subnautica2.gg and PC Gamer data point to a buildable Fabricator that uses Titanium x1, Copper x1, and Quartz x1. PC Gamer frames it as the fully functional Fabricator upgrade: unlock base building, build a base room, craft the station with the Habitat Builder, then place it on an interior wall. Treat exact station names as Early Access wording and confirm your PDA after updates.',
    fieldNotesTitle: 'Field notes for the first base bench',
    fieldNotes: [
      {
        title: 'Build it where your hands already go',
        body: 'A base Fabricator is not special because of the recipe. It is special because it sits beside storage, chargers, and finished parts instead of forcing every craft back through the Life Pod.',
      },
      {
        title: 'Quartz is the ingredient people forget',
        body: 'Titanium and Copper usually ride along with base work. Quartz is small enough to miss, so keep one piece in the same locker as your Habitat Builder materials.',
      },
      {
        title: 'Make the wall boring on purpose',
        body: 'The best Fabricator spot is not dramatic. It is a plain interior wall beside labeled boxes, close enough that Copper Wire, batteries, glass, and processors do not scatter across the base.',
      },
    ],
    routeChecklistTitle: 'Before placing Fabricator',
    routeChecklist: [
      'Confirm base building and interior module placement are already unlocked.',
      'Carry Titanium x1, Copper x1, Quartz x1, and a charged Habitat Builder.',
      'Place at least two labeled storage boxes beside the station.',
      'Keep Vehicle Fabricator materials in a different box so the recipes do not blur together.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Fabricator setup route',
    routeSteps: [
      {
        title: 'Unlock base building first',
        body: 'The Life Pod Fabricator can carry early survival, but the buildable version belongs to your base loop. If you cannot place interior modules yet, solve Habitat Builder and base room access before farming the recipe.',
      },
      {
        title: 'Bring the small-material trio',
        body: 'Subnautica2.gg lists Titanium x1, Copper x1, and Quartz x1 for Fabricator. None of those is rare, but the mistake is forgetting one and making the return trip feel silly.',
      },
      {
        title: 'Place it on a clean interior wall',
        body: 'PC Gamer describes using the Habitat Builder to place the fully functional Fabricator in a base. Keep it near labeled storage so battery, wire, glass, and processor chains are easy to stage.',
      },
      {
        title: 'Do not confuse it with Vehicle Fabricator',
        body: 'Fabricator handles personal crafting and many material chains. Vehicle Fabricator is the Moonpool-side Tadpole station. Keep the guide names separate when planning the base.',
      },
      {
        title: 'Build storage before batching recipes',
        body: 'A Fabricator without storage nearby turns every craft into a locker search. Put one small box for raw materials and one for finished parts before making bigger electronics.',
      },
    ],
    tableTitle: 'Fabricator checklist',
    tableHeaders: ['Need', 'Why it matters'],
    tableRows: [
      ['Titanium x1', 'Common build material; keep it with base parts.'],
      ['Copper x1', 'Also competes with batteries, wire, and electronics.'],
      ['Quartz x1', 'Small ingredient that is easy to forget on a base run.'],
      ['Habitat Builder', 'Used to place the Fabricator inside the base.'],
      ['Interior wall', 'Keeps crafting near storage and charging habits.'],
      ['PDA check', 'Early Access wording can shift after patches.'],
    ],
    visualTitle: 'Base crafting card',
    visualItems: [
      {
        label: 'Recipe',
        value: '3 parts',
        note: 'Titanium, Copper, and Quartz.',
      },
      {
        label: 'Tool',
        value: 'Builder',
        note: 'Place it as a base interior module.',
      },
      {
        label: 'Best spot',
        value: 'Storage wall',
        note: 'Shortens every crafting loop after that.',
      },
    ],
    cautionTitle: 'Do not build the station in an awkward corner',
    cautionBody:
      'The Fabricator becomes a habit machine. If it is far from storage, chargers, and processors, every craft costs extra walking. Give it a boring, central wall and your future routes get cleaner.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you build a Fabricator in Subnautica 2?',
        body: 'Current Subnautica2.gg and PC Gamer data list Titanium x1, Copper x1, and Quartz x1. Use the Habitat Builder inside a base.',
      },
      {
        title: 'Is this different from the Life Pod Fabricator?',
        body: 'Yes in practice. The Life Pod Fabricator handles early crafting, while the buildable Fabricator lets your base become the main crafting hub.',
      },
      {
        title: 'Is Fabricator the same as Vehicle Fabricator?',
        body: 'No. Vehicle Fabricator is tied to Moonpool and Tadpole progress. Fabricator is the general crafting station for base-side item production.',
      },
      {
        title: 'Where should I place it?',
        body: 'Put it on an interior wall beside labeled storage. That keeps raw materials, finished parts, and power items from getting scattered across the base.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2HabitatBuilder,
        label: 'Habitat Builder Guide',
      },
      { href: Routes.Subnautica2BaseBuilding, label: 'Base Building Guide' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium Location Guide' },
      { href: Routes.Subnautica2Copper, label: 'Copper Location Guide' },
      { href: Routes.Subnautica2Quartz, label: 'Quartz Location Guide' },
      { href: Routes.Subnautica2Processor, label: 'Processor Guide' },
      {
        href: Routes.Subnautica2VehicleFabricator,
        label: 'Vehicle Fabricator Guide',
      },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 27, 2026 against Subnautica2.gg and PC Gamer. Subnautica 2 is in Early Access, so recipe costs, unlock wording, and station labels can change after patches.',
    cardKicker: 'Crafting station card',
    cardBody:
      'Titanium x1, Copper x1, Quartz x1, Habitat Builder placement, Life Pod difference, storage wall setup, and Vehicle Fabricator distinction.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Base crafting station',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Fabricator 指南 - Fully Functional Fabricator、配方与基地摆放',
      description:
        'Subnautica 2 中文 Fabricator 指南：整理 fully functional Fabricator、Titanium x1、Copper x1、Quartz x1、Habitat Builder 摆放和基地制作动线。',
    },
    eyebrow: 'Subnautica 2 基地制作站',
    title: 'Subnautica 2 Fabricator 指南',
    description:
      'Fabricator 很容易被忽略，因为 Life Pod 里已经有一个。真正改变体验的是放进自己基地里的 fully functional Fabricator：从这一步开始，你的制作循环终于不用每次游回逃生舱。',
    quickLabel: '快速结论',
    quickAnswer:
      '当前 Subnautica2.gg 和 PC Gamer 数据都指向可建造 Fabricator：材料是 Titanium x1、Copper x1、Quartz x1。PC Gamer 把它称为 fully functional Fabricator 升级：先解锁基地建造，建一个基地空间，再用 Habitat Builder 把它放在室内墙面上。抢先体验阶段名称可能变化，更新后以 PDA 为准。',
    fieldNotesTitle: '第一台基地工作台笔记',
    fieldNotes: [
      {
        title: '放在手最常去的位置',
        body: '基地 Fabricator 的价值不在配方多复杂，而在它能和箱子、充电、半成品放在一起。这样你不用每做一件东西就游回 Life Pod。',
      },
      {
        title: 'Quartz 最容易被忘掉',
        body: 'Titanium 和 Copper 通常会跟着基地材料一起带，Quartz 因为太小反而容易漏。把一块 Quartz 和 Habitat Builder 材料放在同一个箱子里。',
      },
      {
        title: '普通墙面反而最好用',
        body: 'Fabricator 不需要摆在很炫的位置。最实用的是一面干净墙，旁边放原料箱和成品箱，Copper Wire、电池、玻璃和 Processor 都能顺手处理。',
      },
    ],
    routeChecklistTitle: '放置 Fabricator 前',
    routeChecklist: [
      '先确认基地建造和室内模块已经解锁。',
      '带齐 Titanium x1、Copper x1、Quartz x1，以及有电的 Habitat Builder。',
      '工作台旁边至少放两个有标签的储物箱。',
      'Vehicle Fabricator 材料单独放，避免两套配方混在一起。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Fabricator 设置路线',
    routeSteps: [
      {
        title: '先解锁基地建造',
        body: 'Life Pod Fabricator 可以撑过前期，但可建造 Fabricator 属于基地循环。如果你还不能放室内模块，先解决 Habitat Builder 和基地房间，再去准备材料。',
      },
      {
        title: '带齐三种小材料',
        body: 'Subnautica2.gg 当前列出 Fabricator 需要 Titanium x1、Copper x1、Quartz x1。它们都不稀有，麻烦的是少带一个就要再跑一趟。',
      },
      {
        title: '放在干净的室内墙面',
        body: 'PC Gamer 描述的是用 Habitat Builder 把 fully functional Fabricator 放进基地。最好放在有标签的储物箱旁边，电池、线材、玻璃和加工链都会顺很多。',
      },
      {
        title: '别和 Vehicle Fabricator 混在一起',
        body: 'Fabricator 负责个人制作和大量材料链；Vehicle Fabricator 是 Moonpool 旁边服务 Tadpole 的载具站。规划基地时要把两个名字分清楚。',
      },
      {
        title: '批量制作前先放储物箱',
        body: '没有储物箱的 Fabricator 会让每次制作都变成翻箱倒柜。先放一个原材料箱、一个成品零件箱，再做更大的电子链。',
      },
    ],
    tableTitle: 'Fabricator 检查表',
    tableHeaders: ['需要什么', '为什么重要'],
    tableRows: [
      ['Titanium x1', '常见建造材料，建议和基地组件放一起。'],
      ['Copper x1', '还会和电池、线材、电子件竞争。'],
      ['Quartz x1', '基地出门时很容易忘带的小材料。'],
      ['Habitat Builder', '用来把 Fabricator 放进基地内部。'],
      ['室内墙面', '让制作靠近储物和充电动线。'],
      ['PDA 复查', '抢先体验阶段名称和配方可能变化。'],
    ],
    visualTitle: '基地制作卡',
    visualItems: [
      {
        label: '配方',
        value: '3 件',
        note: 'Titanium、Copper 和 Quartz。',
      },
      {
        label: '工具',
        value: 'Builder',
        note: '作为基地室内模块摆放。',
      },
      {
        label: '位置',
        value: '储物墙',
        note: '以后每条制作路线都会短一点。',
      },
    ],
    cautionTitle: '不要把制作站塞进难用角落',
    cautionBody:
      'Fabricator 会变成你反复使用的习惯点。如果它离储物、充电和加工设备太远，每次制作都会多走路。给它一面普通但居中的墙，后面的路线都会更舒服。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Fabricator 怎么建？',
        body: '当前 Subnautica2.gg 和 PC Gamer 数据列出 Titanium x1、Copper x1、Quartz x1。用 Habitat Builder 在基地内部摆放。',
      },
      {
        title: '它和 Life Pod 里的 Fabricator 有区别吗？',
        body: '实际用法上有区别。Life Pod Fabricator 负责前期生存；可建造 Fabricator 让基地成为主要制作中心。',
      },
      {
        title: 'Fabricator 和 Vehicle Fabricator 一样吗？',
        body: '不一样。Vehicle Fabricator 和 Moonpool、Tadpole 进度有关；Fabricator 是基地里的通用制作站。',
      },
      {
        title: 'Fabricator 放在哪里最好？',
        body: '放在有标签的储物箱旁边。这样原材料、成品零件和供电物品不会散在基地各处。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2HabitatBuilder, label: 'Habitat Builder 指南' },
      { href: Routes.Subnautica2BaseBuilding, label: '基地建造指南' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium 位置指南' },
      { href: Routes.Subnautica2Copper, label: 'Copper 位置指南' },
      { href: Routes.Subnautica2Quartz, label: 'Quartz 位置指南' },
      { href: Routes.Subnautica2Processor, label: 'Processor 指南' },
      {
        href: Routes.Subnautica2VehicleFabricator,
        label: 'Vehicle Fabricator 指南',
      },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 27 日核对 Subnautica2.gg 和 PC Gamer。Subnautica 2 仍处于抢先体验阶段，配方消耗、解锁写法和制作站名称都可能随补丁变化。',
    cardKicker: '制作站卡',
    cardBody:
      'Titanium x1、Copper x1、Quartz x1、Habitat Builder 摆放、Life Pod 区别、储物墙设置和 Vehicle Fabricator 区分。',
    cardTypeLabel: '类型',
    cardTypeValue: '基地制作站',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = fabricatorCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  fabricatorCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Fabricator Guide',
      description:
        'Guide for the fully functional Fabricator, Titanium x1, Copper x1, Quartz x1, Habitat Builder placement, and base crafting setup.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = fabricatorCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2Fabricator,
  });
}

export default async function FabricatorGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = fabricatorCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={WrenchIcon}
      locale={locale}
      pathname={Routes.Subnautica2Fabricator}
      sources={sharedSources}
    />
  );
}
