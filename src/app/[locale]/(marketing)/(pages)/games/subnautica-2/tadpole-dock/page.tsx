import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { AnchorIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type TadpoleDockCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-26';

const sharedSources = [
  {
    href: 'https://www.dexerto.com/wikis/subnautica-2/tools/tadpole-dock/',
    label: 'Dexerto Tadpole Dock tool page',
  },
  {
    href: 'https://allthings.how/how-to-place-the-tadpole-dock-in-subnautica-2/',
    label: 'AllThingsHow Tadpole Dock placement guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-tadpole-scan-locations/',
    label: 'PC Gamer Tadpole and Moonpool guide',
  },
];

const tadpoleDockCopy: Record<string, TadpoleDockCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Tadpole Dock Guide - Recipe, Moonpool Placement, and Fixes',
      description:
        'A practical Subnautica 2 Tadpole Dock guide covering the Titanium Ingot, Silver Ingot, Copper Wire recipe, Moonpool clearance, placement checks, and Tadpole support.',
    },
    eyebrow: 'Subnautica 2 Moonpool setup',
    title: 'Subnautica 2 Tadpole Dock Guide',
    description:
      'The Tadpole Dock is the part of the vehicle bay that feels obvious only after it works. Before that, it is a little placement puzzle: enough room under the Moonpool, a clean approach path, and no base pieces blocking the vehicle.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current Dexerto data lists Tadpole Dock as a Builder Tool construct using Titanium Ingot x2, Silver Ingot x1, and Copper Wire x2. AllThingsHow shows the dock as a Moonpool add-on, and PC Gamer warns that the Moonpool setup needs space below the base because the dock extends downward. Build the Moonpool in open water first, then place the Tadpole Dock where the vehicle can enter without clipping terrain or base parts.',
    contentsLabel: 'Contents',
    routeTitle: 'Tadpole Dock placement route',
    routeSteps: [
      {
        title: 'Pick open water before crafting',
        body: 'Do not start with the recipe. Start with the spot. If the base is too close to rock walls, coral, or shallow terrain, the dock can become technically placeable but awful to use.',
      },
      {
        title: 'Leave clearance under the Moonpool',
        body: 'PC Gamer notes that the Moonpool needs enough room below it because the dock drops down. Think of it as a hanging vehicle bay, not a flat room extension.',
      },
      {
        title: 'Craft the dock materials together',
        body: 'Dexerto currently lists Titanium Ingot x2, Silver Ingot x1, and Copper Wire x2. Copper Wire is easy to spend on other base parts, so put two wires aside before the build session starts.',
      },
      {
        title: 'Place Dock and Vehicle Fabricator as a pair',
        body: 'AllThingsHow treats Tadpole Dock and Vehicle Fabricator as part of the same Moonpool setup. Place them with the Tadpole route in mind, not just wherever the preview turns green.',
      },
      {
        title: 'Test the approach before long trips',
        body: 'Once the Tadpole is built, pilot in and out a few times. If the dock path feels clumsy now, it will feel much worse when you return low on oxygen or power.',
      },
    ],
    tableTitle: 'Tadpole Dock checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      ['Moonpool', 'Enough space below for the dock to hang downward.'],
      ['Titanium Ingot x2', 'Current public recipe data for the dock.'],
      ['Silver Ingot x1', 'Do not spend the Silver chain before docking prep.'],
      ['Copper Wire x2', 'Reserve two wires before base building eats them.'],
      ['Vehicle Fabricator', 'Works with the dock as part of the Tadpole bay.'],
      ['Clear approach', 'No terrain or base parts blocking vehicle entry.'],
    ],
    visualTitle: 'Dock fit check',
    visualItems: [
      {
        label: 'Below',
        value: 'clear',
        note: 'The dock needs space under the Moonpool.',
      },
      {
        label: 'Wire',
        value: '2',
        note: 'Copper Wire disappears fast in base projects.',
      },
      {
        label: 'Test',
        value: 'drive',
        note: 'Pilot in and out before trusting the bay.',
      },
    ],
    cautionTitle: 'A green placement preview is not the same as a good dock',
    cautionBody:
      'If the Tadpole has to scrape past terrain every time it enters the bay, the base location is fighting you. Move the dock early, while the mistake is still cheap.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'What is the Tadpole Dock recipe in Subnautica 2?',
        body: 'Dexerto currently lists Titanium Ingot x2, Silver Ingot x1, and Copper Wire x2 as the Builder Tool recipe.',
      },
      {
        title: 'Where do you place the Tadpole Dock?',
        body: 'Place it on a Moonpool with enough clearance below and a clean approach path for the Tadpole. Avoid tight terrain, shallow water, and cluttered base layouts.',
      },
      {
        title: 'Why will the Tadpole Dock not place?',
        body: 'The usual cause is space: the Moonpool may be too close to terrain or too shallow underneath. Move the Moonpool or rebuild that bay in more open water.',
      },
      {
        title: 'Do I need Vehicle Fabricator before Tadpole Dock?',
        body: 'Plan them together. The dock handles vehicle support while Vehicle Fabricator handles the craft chain, so a clean Moonpool bay should make room for both.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Moonpool, label: 'Moonpool Guide' },
      {
        href: Routes.Subnautica2VehicleFabricator,
        label: 'Vehicle Fabricator Guide',
      },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Vehicle Guide' },
      { href: Routes.Subnautica2BaseBuilding, label: 'Base Building Guide' },
      {
        href: Routes.Subnautica2HabitatBuilder,
        label: 'Habitat Builder Guide',
      },
      { href: Routes.Subnautica2TitaniumIngot, label: 'Titanium Ingot Guide' },
      { href: Routes.Subnautica2Silver, label: 'Silver Location Guide' },
      { href: Routes.Subnautica2SilverIngot, label: 'Silver Ingot Guide' },
      { href: Routes.Subnautica2CopperWire, label: 'Copper Wire Guide' },
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 26, 2026 against Dexerto, AllThingsHow, and PC Gamer. Subnautica 2 is in Early Access, so recipe costs, build behavior, and Moonpool placement rules can change after patches.',
    cardKicker: 'Dock card',
    cardBody:
      'Titanium Ingot x2, Silver Ingot x1, Copper Wire x2, Moonpool clearance, Vehicle Fabricator pairing, and Tadpole approach testing.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Vehicle bay guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Tadpole Dock 指南 - 配方、Moonpool 摆放和修正',
      description:
        'Subnautica 2 中文 Tadpole Dock 指南：整理 Titanium Ingot、Silver Ingot、Copper Wire 配方、Moonpool 下方空间、摆放检查和 Tadpole 支持。',
    },
    eyebrow: 'Subnautica 2 Moonpool 设置',
    title: 'Subnautica 2 Tadpole Dock 指南',
    description:
      'Tadpole Dock 只有摆好之后才显得简单。摆不好时，它就是一个小型空间谜题：Moonpool 下方要空，载具进出路线要顺，附近不要被基地部件和地形卡住。',
    quickLabel: '快速结论',
    quickAnswer:
      'Dexerto 当前数据把 Tadpole Dock 写成 Builder Tool 建造，材料是 Titanium Ingot x2、Silver Ingot x1、Copper Wire x2。AllThingsHow 把它放在 Moonpool 附属设置里，PC Gamer 也提醒 Moonpool 下方要有空间，因为 Dock 会向下延伸。先在开阔水域摆 Moonpool，再把 Tadpole Dock 放在载具能顺畅进出的方向。',
    contentsLabel: '目录',
    routeTitle: 'Tadpole Dock 摆放路线',
    routeSteps: [
      {
        title: '先选开阔水域，再看配方',
        body: '不要一上来只盯材料。先看位置。基地太靠近岩壁、珊瑚或浅水地形时，Dock 也许能放上去，但之后每次进出都会别扭。',
      },
      {
        title: 'Moonpool 下方要留空间',
        body: 'PC Gamer 提到 Moonpool 下方需要足够空间，因为 Dock 会往下延伸。把它想成吊下来的载具舱，而不是普通平面房间。',
      },
      {
        title: '材料一起准备',
        body: 'Dexerto 当前列出的配方是 Titanium Ingot x2、Silver Ingot x1、Copper Wire x2。Copper Wire 很容易被其它基地部件花掉，开工前先单独留两卷。',
      },
      {
        title: 'Dock 和 Vehicle Fabricator 一起规划',
        body: 'AllThingsHow 把 Tadpole Dock 和 Vehicle Fabricator 放在同一套 Moonpool 设置里。摆放时要按 Tadpole 进出路线想，不要只看预览变绿。',
      },
      {
        title: '远航前先试着进出几次',
        body: 'Tadpole 做出来后，先试着开进开出几次。如果现在就觉得别扭，等你低氧、低电量回家时只会更烦。',
      },
    ],
    tableTitle: 'Tadpole Dock 检查表',
    tableHeaders: ['需要', '确认什么'],
    tableRows: [
      ['Moonpool', '下方要有足够空间让 Dock 向下延伸。'],
      ['Titanium Ingot x2', '当前公开资料里的 Dock 配方材料。'],
      ['Silver Ingot x1', '别在 Dock 前把 Silver 链花完。'],
      ['Copper Wire x2', '基地建造会很快吃掉 wire，先留两卷。'],
      ['Vehicle Fabricator', '和 Dock 一起组成 Tadpole 载具区。'],
      ['进出路线', '不要被地形或基地部件挡住。'],
    ],
    visualTitle: 'Dock 适配检查',
    visualItems: [
      {
        label: '下方',
        value: '留空',
        note: 'Dock 需要 Moonpool 下方空间。',
      },
      {
        label: 'Wire',
        value: '2',
        note: 'Copper Wire 在基地项目里消耗很快。',
      },
      {
        label: '测试',
        value: '进出',
        note: '信任这个载具区前先开几次。',
      },
    ],
    cautionTitle: '预览能变绿，不代表这个 Dock 好用',
    cautionBody:
      '如果 Tadpole 每次进出都要蹭地形，这个基地位置就在和你作对。趁材料损失还小，早点改 Dock 或 Moonpool 位置。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Tadpole Dock 配方是什么？',
        body: 'Dexerto 当前列出的 Builder Tool 配方是 Titanium Ingot x2、Silver Ingot x1、Copper Wire x2。',
      },
      {
        title: 'Tadpole Dock 应该放在哪里？',
        body: '放在 Moonpool 上，并确保下方有空间、Tadpole 进出路线顺畅。尽量避开狭窄地形、浅水和拥挤基地。',
      },
      {
        title: '为什么 Tadpole Dock 放不上去？',
        body: '通常是空间问题：Moonpool 太贴地形，或者下方太浅。把 Moonpool 移到更开阔的水域，或重建载具区。',
      },
      {
        title: 'Tadpole Dock 和 Vehicle Fabricator 谁先做？',
        body: '建议一起规划。Dock 负责载具支持，Vehicle Fabricator 负责制作链，干净的 Moonpool 区应该同时给两者留位置。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Moonpool, label: 'Moonpool 指南' },
      {
        href: Routes.Subnautica2VehicleFabricator,
        label: 'Vehicle Fabricator 指南',
      },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 载具指南' },
      { href: Routes.Subnautica2BaseBuilding, label: '基地建造指南' },
      { href: Routes.Subnautica2HabitatBuilder, label: 'Habitat Builder 指南' },
      { href: Routes.Subnautica2TitaniumIngot, label: 'Titanium Ingot 指南' },
      { href: Routes.Subnautica2Silver, label: 'Silver 位置指南' },
      { href: Routes.Subnautica2SilverIngot, label: 'Silver Ingot 指南' },
      { href: Routes.Subnautica2CopperWire, label: 'Copper Wire 指南' },
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell 指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 26 日核对 Dexerto、AllThingsHow 和 PC Gamer。Subnautica 2 仍在抢先体验阶段，配方消耗、建造行为和 Moonpool 摆放规则都可能随补丁变化。',
    cardKicker: 'Dock 卡片',
    cardBody:
      'Titanium Ingot x2、Silver Ingot x1、Copper Wire x2、Moonpool 下方空间、Vehicle Fabricator 搭配和 Tadpole 进出测试。',
    cardTypeLabel: '类型',
    cardTypeValue: '载具区指南',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = tadpoleDockCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  tadpoleDockCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Tadpole Dock Guide',
      description:
        'Guide for Tadpole Dock recipe, Moonpool clearance, Vehicle Fabricator pairing, and Tadpole bay placement.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = tadpoleDockCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2TadpoleDock,
  });
}

export default async function TadpoleDockGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = tadpoleDockCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={AnchorIcon}
      locale={locale}
      pathname={Routes.Subnautica2TadpoleDock}
      sources={sharedSources}
    />
  );
}
