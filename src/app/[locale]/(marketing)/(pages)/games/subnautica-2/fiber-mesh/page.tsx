import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { LeafIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type FiberMeshCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-26';

const sharedSources = [
  {
    href: 'https://allthings.how/fiber-mesh-in-subnautica-2-recipe-and-crafting-steps/',
    label: 'All Things How Fiber Mesh recipe',
  },
  {
    href: 'https://mobalytics.gg/blog/subnautica-2/how-to-get-fiber-mesh/',
    label: 'Mobalytics Fiber Mesh guide',
  },
  {
    href: 'https://www.dexerto.com/gaming/how-to-get-fiber-mesh-in-subnautica-2-3240875/',
    label: 'Dexerto Fiber Mesh guide',
  },
  {
    href: 'https://subnautica2hub.com/blueprints/wakemaker',
    label: 'Subnautica2Hub Wakemaker blueprint',
  },
];

const fiberMeshCopy: Record<string, FiberMeshCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Fiber Mesh Guide - Creepvine Recipe, Uses, and Timing',
      description:
        'A practical Subnautica 2 Fiber Mesh guide covering Creepvine Seed Cluster, Creepvine Sample, Fabricator crafting, Wakemaker prep, Rebreather planning, and early storage tips.',
    },
    eyebrow: 'Subnautica 2 plant material',
    title: 'Subnautica 2 Fiber Mesh Guide',
    description:
      'Fiber Mesh looks like a small plant errand until it blocks a tool you actually want. Grab it before you head home from a creepvine run, because returning for one missing mesh feels worse than the recipe deserves.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current All Things How, Mobalytics, and Dexerto guides point players toward Creepvine material for Fiber Mesh, with current recipe wording commonly listing Creepvine Seed Cluster and Creepvine Sample at the Fabricator. Subnautica2Hub also lists Fiber Mesh as part of the Wakemaker recipe.',
    contentsLabel: 'Contents',
    routeTitle: 'Fiber Mesh gathering plan',
    routeSteps: [
      {
        title: 'Bring a cutting tool if your route needs samples',
        body: 'Guides split the wording between Creepvine Seed Cluster and Creepvine Sample, so do not plan the trip around a single pickup type. If your save asks for samples, you want the tool ready before you are already at the vines.',
      },
      {
        title: 'Use the creepvine run for more than one job',
        body: 'Seed clusters and samples often sit near the same early plant route. Check battery, lubricant, and Fiber Mesh plans together instead of making three separate swims.',
      },
      {
        title: 'Craft it at the Fabricator',
        body: 'Treat Fiber Mesh as a processed material, not a raw plant. Once the Fabricator recipe is available, convert the plant inputs before you reorganize storage.',
      },
      {
        title: 'Reserve one for the Wakemaker',
        body: 'Subnautica2Hub currently lists Fiber Mesh in the Wakemaker recipe. If that movement tool is your next upgrade, keep one mesh out of base clutter.',
      },
      {
        title: 'Keep a small plant bin',
        body: 'Fiber Mesh is cheap, but the second trip is the tax. A little labeled storage for creepvine parts saves time when later oxygen or tool recipes ask for plant material again.',
      },
    ],
    tableTitle: 'Fiber Mesh checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      [
        'Creepvine route',
        'Seed clusters and samples are the plant loop to check.',
      ],
      ['Tool', 'Bring a cutter if your save asks for Creepvine Sample.'],
      ['Station', 'Current guides point to Fabricator crafting.'],
      ['Wakemaker', 'Subnautica2Hub lists Fiber Mesh in the recipe.'],
      ['Storage', 'Keep one spare mesh or plant set before leaving the biome.'],
    ],
    visualTitle: 'Plant-to-tool chain',
    visualItems: [
      {
        label: 'Gather',
        value: 'Creepvine',
        note: 'Check seed clusters and samples before heading back.',
      },
      {
        label: 'Craft',
        value: 'Fiber Mesh',
        note: 'Use the Fabricator once the recipe is available.',
      },
      {
        label: 'Spend',
        value: 'Wakemaker',
        note: 'Save one if early mobility is next.',
      },
    ],
    cautionTitle: 'Do not trust memory from Subnautica 1 blindly',
    cautionBody:
      'Early Access recipe wording can shift, and guide sites do not all describe the same plant input the same way. Check your Fabricator recipe, then gather the plant parts your save actually asks for.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you make Fiber Mesh in Subnautica 2?',
        body: 'Current guides point to the Fabricator and Creepvine material, commonly naming Creepvine Seed Cluster and Creepvine Sample as the inputs to check.',
      },
      {
        title: 'What is Fiber Mesh used for?',
        body: 'Subnautica2Hub currently lists Fiber Mesh in the Wakemaker recipe, and several guides connect it to early equipment planning such as mobility and breathing upgrades.',
      },
      {
        title: 'Where should you look for Fiber Mesh ingredients?',
        body: 'Start with the creepvine route. Bring the right tool if your recipe asks for samples rather than only seed clusters.',
      },
      {
        title: 'Should you make extra Fiber Mesh?',
        body: 'One spare is sensible. A locker full of it is probably overkill unless a patch or new recipe changes the demand.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker Guide' },
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather Guide' },
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
      { href: Routes.Subnautica2OxygenDepth, label: 'Oxygen and Depth Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
      { href: Routes.Subnautica2Beginner, label: 'Beginner Route' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 26, 2026 against All Things How, Mobalytics, Dexerto, and Subnautica2Hub. Early Access recipe text can change, so the page tells players to confirm the exact Fabricator inputs in their save.',
    cardKicker: 'Plant material card',
    cardBody:
      'Creepvine gathering, Fabricator recipe check, Wakemaker use, and storage timing for early plant materials.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Material guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Fiber Mesh 指南 - Creepvine 配方、用途和时机',
      description:
        'Subnautica 2 中文 Fiber Mesh 指南：整理 Creepvine Seed Cluster、Creepvine Sample、Fabricator 制作、Wakemaker 前置、Rebreather 规划和前期收纳。',
    },
    eyebrow: 'Subnautica 2 植物材料',
    title: 'Subnautica 2 Fiber Mesh 指南',
    description:
      'Fiber Mesh 看起来只是顺手采一点植物，直到它卡住你想做的工具。跑 creepvine 路线时顺手备好，比回家后发现少一个 mesh 再折返舒服太多。',
    quickLabel: '快速结论',
    quickAnswer:
      'All Things How、Mobalytics 和 Dexerto 当前都把 Fiber Mesh 指向 Creepvine 材料，常见写法是用 Creepvine Seed Cluster 和 Creepvine Sample 在 Fabricator 制作。Subnautica2Hub 也把 Fiber Mesh 列在 Wakemaker 配方里。',
    contentsLabel: '目录',
    routeTitle: 'Fiber Mesh 收集规划',
    routeSteps: [
      {
        title: '如果需要样本，先带好切割工具',
        body: '不同攻略对 Creepvine Seed Cluster 和 Creepvine Sample 的写法不完全一样，所以别只按一种拾取物规划。你的存档如果要 sample，到了藤蔓旁边才发现没工具会很烦。',
      },
      {
        title: '一趟 creepvine 路线多办几件事',
        body: 'Seed cluster 和 sample 往往都在前期植物路线附近。把电池、润滑剂、Fiber Mesh 的需求一起看，别分三趟游。',
      },
      {
        title: '回 Fabricator 再加工',
        body: '把 Fiber Mesh 当作加工材料，不是原始植物。配方可用后，先在 Fabricator 转成 mesh，再整理箱子。',
      },
      {
        title: '给 Wakemaker 留一份',
        body: 'Subnautica2Hub 当前把 Fiber Mesh 列在 Wakemaker 配方里。如果下一个目标是移动工具，别把唯一一份 mesh 混进基地杂物箱。',
      },
      {
        title: '留一个小植物箱',
        body: 'Fiber Mesh 本身不贵，贵的是第二次折返。给 creepvine 材料单独留点位置，后面氧气或工具配方再要植物材料时会省事。',
      },
    ],
    tableTitle: 'Fiber Mesh 检查表',
    tableHeaders: ['需求', '确认什么'],
    tableRows: [
      ['Creepvine 路线', 'Seed cluster 和 sample 都是要检查的植物链。'],
      ['工具', '如果你的配方需要 Creepvine Sample，先带切割工具。'],
      ['工作站', '当前攻略都指向 Fabricator 制作。'],
      ['Wakemaker', 'Subnautica2Hub 把 Fiber Mesh 列进配方。'],
      ['收纳', '离开生物群系前，留一份 mesh 或一组植物材料。'],
    ],
    visualTitle: '植物到工具链',
    visualItems: [
      {
        label: '收集',
        value: 'Creepvine',
        note: '回家前检查 seed cluster 和 sample。',
      },
      {
        label: '制作',
        value: 'Fiber Mesh',
        note: '配方可用后在 Fabricator 加工。',
      },
      {
        label: '使用',
        value: 'Wakemaker',
        note: '前期移动工具要用就先留一份。',
      },
    ],
    cautionTitle: '不要完全套用一代记忆',
    cautionBody:
      '抢先体验阶段配方文本可能变化，攻略站对植物输入的描述也不完全一致。先看你的 Fabricator 配方，再采它真正要求的材料。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Fiber Mesh 怎么做？',
        body: '当前攻略指向 Fabricator 和 Creepvine 材料，常见写法是检查 Creepvine Seed Cluster 与 Creepvine Sample。',
      },
      {
        title: 'Fiber Mesh 有什么用？',
        body: 'Subnautica2Hub 当前把 Fiber Mesh 列在 Wakemaker 配方里，其他攻略也把它和前期移动、呼吸类装备规划联系在一起。',
      },
      {
        title: 'Fiber Mesh 材料去哪找？',
        body: '先找 creepvine 路线。如果配方要 sample，记得带能采样的工具。不要只拿 seed cluster 就回家。',
      },
      {
        title: '需要多做 Fiber Mesh 吗？',
        body: '留一份备用比较稳。做满一箱通常没必要，除非后续补丁或新配方提高需求。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker 指南' },
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather 指南' },
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery 指南' },
      { href: Routes.Subnautica2AirTank, label: '气瓶和氧气' },
      { href: Routes.Subnautica2OxygenDepth, label: '氧气与深度指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
      { href: Routes.Subnautica2Beginner, label: '新手路线' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 26 日核对 All Things How、Mobalytics、Dexerto 和 Subnautica2Hub。抢先体验阶段配方文本可能调整，所以页面提醒玩家以自己存档里的 Fabricator 输入为准。',
    cardKicker: '植物材料卡',
    cardBody:
      'Creepvine 收集、Fabricator 配方检查、Wakemaker 用途，以及前期植物材料收纳时机。',
    cardTypeLabel: '类型',
    cardTypeValue: '材料指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: 'Early Access',
  },
};

const fallbackCopy = fiberMeshCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  fiberMeshCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Fiber Mesh Guide',
      description:
        'Guide for Fiber Mesh, Creepvine material, Fabricator crafting, Wakemaker prep, and early equipment planning.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = fiberMeshCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2FiberMesh,
  });
}

export default async function FiberMeshGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = fiberMeshCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={LeafIcon}
      locale={locale}
      pathname={Routes.Subnautica2FiberMesh}
      sources={sharedSources}
    />
  );
}
