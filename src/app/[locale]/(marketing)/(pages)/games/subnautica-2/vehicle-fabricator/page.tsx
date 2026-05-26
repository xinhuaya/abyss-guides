import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { FactoryIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type VehicleFabricatorCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-26';

const sharedSources = [
  {
    href: 'https://subnautica2.gg/blueprints/vehicle-fabricator',
    label: 'Subnautica2.gg Vehicle Fabricator blueprint',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-tadpole-scan-locations/',
    label: 'PC Gamer Tadpole and Vehicle Fabricator guide',
  },
  {
    href: 'https://allthings.how/how-to-place-the-tadpole-dock-in-subnautica-2/',
    label: 'AllThingsHow Tadpole Dock placement guide',
  },
];

const vehicleFabricatorCopy: Record<string, VehicleFabricatorCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Vehicle Fabricator Guide - Unlock, Recipe, and Moonpool Setup',
      description:
        'A practical Subnautica 2 Vehicle Fabricator guide covering the current blueprint recipe, Moonpool placement, Tadpole Dock setup, Tadpole crafting, and base-space mistakes.',
    },
    eyebrow: 'Subnautica 2 vehicle station',
    title: 'Subnautica 2 Vehicle Fabricator Guide',
    description:
      'Vehicle Fabricator is where the Tadpole plan stops being a pile of parts and becomes an actual vehicle. The catch is that the station is not just another wall gadget; it needs the Moonpool and Tadpole Dock setup to make sense.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current Subnautica2.gg data lists Vehicle Fabricator as a Builder Tool construct using Titanium Ingot x2, Copper Ingot x1, and Glass x2. PC Gamer and AllThingsHow both point players toward a Moonpool-based setup: build enough base space, place the Moonpool, attach the Tadpole Dock, then use the Vehicle Fabricator for the Tadpole chain. Treat the recipe as patch-sensitive and check your PDA after updates.',
    contentsLabel: 'Contents',
    routeTitle: 'Vehicle Fabricator route',
    routeSteps: [
      {
        title: 'Build for space before you build the station',
        body: 'PC Gamer warns that the Moonpool needs real room below the base because the Tadpole Dock goes downward. If the base is cramped or too close to terrain, the station plan gets annoying fast.',
      },
      {
        title: 'Prepare the ingot and glass materials',
        body: 'Subnautica2.gg currently lists Titanium Ingot x2, Copper Ingot x1, and Glass x2. That means you should solve Titanium, Copper, and Quartz routes before blaming the vehicle chain.',
      },
      {
        title: 'Place Moonpool and Tadpole Dock first',
        body: 'AllThingsHow describes the vehicle setup around Moonpool, Tadpole Dock, and Vehicle Fabricator pieces. Put the dock where the vehicle can enter cleanly instead of squeezing it into a storage corner.',
      },
      {
        title: 'Craft Power Cell only when the build chain is ready',
        body: 'The Power Cell is easy to make too early. Keep it tied to Tadpole progress, not a random spare part, especially while Strong Acid and Salt are still tight.',
      },
      {
        title: 'Leave room for upgrades',
        body: 'Once the Tadpole exists, depth and efficiency upgrades become the next search loop. A clean vehicle bay makes swapping routes and checking materials less painful.',
      },
    ],
    tableTitle: 'Vehicle Fabricator checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      ['Moonpool space', 'Enough clearance below and around the base.'],
      [
        'Tadpole Dock',
        'Placed where the vehicle path is not blocked by terrain.',
      ],
      [
        'Titanium Ingot x2',
        'Current Subnautica2.gg recipe data for Vehicle Fabricator.',
      ],
      [
        'Copper Ingot x1',
        'Current recipe data; recheck in the PDA after patches.',
      ],
      ['Glass x2', 'Quartz route or stored Glass before the build push.'],
      ['Power Cell', 'Needed for Tadpole progress, not for random storage.'],
    ],
    visualTitle: 'Vehicle bay plan',
    visualItems: [
      {
        label: 'Station',
        value: 'Builder',
        note: 'Vehicle Fabricator is placed from base building.',
      },
      {
        label: 'Space',
        value: 'Pool',
        note: 'Moonpool clearance matters more than it looks.',
      },
      {
        label: 'Goal',
        value: 'Tadpole',
        note: 'Finish power and dock prep together.',
      },
    ],
    cautionTitle: 'Do not build the Moonpool into a tight corner',
    cautionBody:
      'A pretty base layout can still be a bad vehicle bay. Give the Moonpool and dock more space than the preview seems to need, especially underneath. Rebuilding a bay after the materials are spent is the boring kind of expedition.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you unlock Vehicle Fabricator in Subnautica 2?',
        body: 'Current public blueprint data points to a Builder Tool construct, while PC Gamer and AllThingsHow place it in the Moonpool and Tadpole Dock vehicle chain. Check the in-game PDA for the final unlock state after patches.',
      },
      {
        title: 'What is the Vehicle Fabricator recipe?',
        body: 'Subnautica2.gg currently lists Titanium Ingot x2, Copper Ingot x1, and Glass x2. Early Access recipes can move, so treat this as a checked snapshot rather than a permanent rule.',
      },
      {
        title: 'Why will the Vehicle Fabricator or Tadpole setup not fit?',
        body: 'The usual problem is base space. The Moonpool and Tadpole Dock need enough clearance, including room below the base, not just a clear wall panel.',
      },
      {
        title: 'Should I craft the Tadpole before building a proper bay?',
        body: 'No. Finish the Moonpool, dock, power chain, and repair plan first. The vehicle is much more useful when the base can actually support it.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Vehicle Guide' },
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell Guide' },
      { href: Routes.Subnautica2BaseBuilding, label: 'Base Building Guide' },
      {
        href: Routes.Subnautica2HabitatBuilder,
        label: 'Habitat Builder Guide',
      },
      { href: Routes.Subnautica2TitaniumIngot, label: 'Titanium Ingot Guide' },
      { href: Routes.Subnautica2Copper, label: 'Copper Location Guide' },
      { href: Routes.Subnautica2Glass, label: 'Glass Recipe Guide' },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        label: 'Tadpole Depth Module Guide',
      },
      {
        href: Routes.Subnautica2EngineEfficiency,
        label: 'Engine Efficiency Guide',
      },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 26, 2026 against Subnautica2.gg, PC Gamer, and AllThingsHow. Subnautica 2 is in Early Access, so construction costs, unlocks, and placement rules should be rechecked after major patches.',
    cardKicker: 'Vehicle station',
    cardBody:
      'Moonpool clearance, Tadpole Dock setup, current Vehicle Fabricator recipe data, Power Cell timing, and upgrade planning.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Vehicle crafting guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Vehicle Fabricator 指南 - 解锁、配方和 Moonpool 摆放',
      description:
        'Subnautica 2 中文 Vehicle Fabricator 指南：整理当前蓝图配方、Moonpool 摆放、Tadpole Dock 设置、Tadpole 制作和基地空间常见问题。',
    },
    eyebrow: 'Subnautica 2 载具工作站',
    title: 'Subnautica 2 Vehicle Fabricator 指南',
    description:
      'Vehicle Fabricator 是 Tadpole 从材料清单变成真正载具的那一步。问题是它不是普通墙面工具，Moonpool、Tadpole Dock 和基地下方空间都要提前想好。',
    quickLabel: '快速结论',
    quickAnswer:
      'Subnautica2.gg 当前数据把 Vehicle Fabricator 写成 Builder Tool 建造，材料是 Titanium Ingot x2、Copper Ingot x1、Glass x2。PC Gamer 和 AllThingsHow 都把玩家引向 Moonpool 体系：先留足基地空间，摆 Moonpool，接 Tadpole Dock，再用 Vehicle Fabricator 推 Tadpole 链。抢先体验配方会变，更新后请以 PDA 为准。',
    contentsLabel: '目录',
    routeTitle: 'Vehicle Fabricator 路线',
    routeSteps: [
      {
        title: '先给空间，再给工作站',
        body: 'PC Gamer 提醒 Moonpool 下方需要真实空间，因为 Tadpole Dock 会往下延伸。基地太挤、太贴地形时，载具工作站会很难摆。',
      },
      {
        title: '提前准备锭和玻璃',
        body: 'Subnautica2.gg 当前配方写的是 Titanium Ingot x2、Copper Ingot x1、Glass x2。先把 Titanium、Copper 和 Quartz 路线理顺，再回头查载具链。',
      },
      {
        title: '先摆 Moonpool 和 Tadpole Dock',
        body: 'AllThingsHow 把载具设置写成 Moonpool、Tadpole Dock 和 Vehicle Fabricator 一起处理。Dock 要放在载具能顺畅进出的地方，不要塞在储物角落里。',
      },
      {
        title: 'Power Cell 等链条接近完成再做',
        body: 'Power Cell 很容易提前做掉。把它和 Tadpole 进度绑在一起，不要当普通备用件，尤其是在 Strong Acid 和 Salt 还紧张的时候。',
      },
      {
        title: '给升级留空间',
        body: 'Tadpole 做出来之后，深度和效率升级马上会变成下一轮搜索。载具区清爽一点，后面查材料和换路线会少很多烦躁。',
      },
    ],
    tableTitle: 'Vehicle Fabricator 检查表',
    tableHeaders: ['需要', '确认什么'],
    tableRows: [
      ['Moonpool 空间', '基地下方和周围都要有足够余量。'],
      ['Tadpole Dock', '载具进出路线不要被地形挡住。'],
      [
        'Titanium Ingot x2',
        'Subnautica2.gg 当前 Vehicle Fabricator 配方数据。',
      ],
      ['Copper Ingot x1', '当前配方数据；补丁后以 PDA 为准。'],
      ['Glass x2', '制作前先准备 Quartz 路线或现成 Glass。'],
      ['Power Cell', '留给 Tadpole 进度，不要当随机储备件。'],
    ],
    visualTitle: '载具区计划',
    visualItems: [
      {
        label: '工作站',
        value: 'Builder',
        note: 'Vehicle Fabricator 走基地建造体系。',
      },
      {
        label: '空间',
        value: 'Pool',
        note: 'Moonpool 的下方余量很重要。',
      },
      {
        label: '目标',
        value: 'Tadpole',
        note: '供电和 Dock 一起准备。',
      },
    ],
    cautionTitle: '不要把 Moonpool 塞进角落',
    cautionBody:
      '漂亮的基地布局不一定适合载具。Moonpool 和 Dock 要比预览看起来更吃空间，尤其是下方。材料花完之后再重建载具区，会很烦。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Vehicle Fabricator 怎么解锁？',
        body: '当前公开蓝图数据指向 Builder Tool 建造，PC Gamer 和 AllThingsHow 则把它放在 Moonpool 与 Tadpole Dock 的载具链里。补丁后请看游戏内 PDA 的最终解锁状态。',
      },
      {
        title: 'Vehicle Fabricator 配方是什么？',
        body: 'Subnautica2.gg 当前写的是 Titanium Ingot x2、Copper Ingot x1、Glass x2。抢先体验阶段配方可能调整，所以这只是当前核对快照。',
      },
      {
        title: '为什么 Vehicle Fabricator 或 Tadpole 摆不上去？',
        body: '通常是基地空间问题。Moonpool 和 Tadpole Dock 需要足够余量，包括基地下方，不只是墙面空着就行。',
      },
      {
        title: '要不要先做 Tadpole，再慢慢整理载具区？',
        body: '不建议。先把 Moonpool、Dock、供电链和维修路线整理好，Tadpole 做出来才真正有用。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 载具指南' },
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell 指南' },
      { href: Routes.Subnautica2BaseBuilding, label: '基地建造指南' },
      { href: Routes.Subnautica2HabitatBuilder, label: 'Habitat Builder 指南' },
      { href: Routes.Subnautica2TitaniumIngot, label: 'Titanium Ingot 指南' },
      { href: Routes.Subnautica2Copper, label: 'Copper 位置指南' },
      { href: Routes.Subnautica2Glass, label: 'Glass 配方指南' },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        label: 'Tadpole Depth Module 指南',
      },
      {
        href: Routes.Subnautica2EngineEfficiency,
        label: 'Engine Efficiency 指南',
      },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 26 日核对 Subnautica2.gg、PC Gamer 和 AllThingsHow。Subnautica 2 仍在抢先体验阶段，建造消耗、解锁条件和摆放规则都可能随大补丁变化。',
    cardKicker: '载具工作站',
    cardBody:
      'Moonpool 空间、Tadpole Dock 设置、当前 Vehicle Fabricator 配方数据、Power Cell 时机和升级规划。',
    cardTypeLabel: '类型',
    cardTypeValue: '载具制作指南',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = vehicleFabricatorCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  vehicleFabricatorCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Vehicle Fabricator Guide',
      description:
        'Guide for Vehicle Fabricator recipe data, Moonpool placement, Tadpole Dock setup, Tadpole crafting, and vehicle upgrade planning.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = vehicleFabricatorCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2VehicleFabricator,
  });
}

export default async function VehicleFabricatorGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = vehicleFabricatorCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={FactoryIcon}
      locale={locale}
      pathname={Routes.Subnautica2VehicleFabricator}
      sources={sharedSources}
    />
  );
}
