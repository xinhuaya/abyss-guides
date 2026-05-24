import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { WavesIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type BiomesCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-24';
const UPDATED_AT = '2026-05-24';

const sharedSources = [
  {
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/',
    label: 'Official Steam page',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap',
    label: 'Unknown Worlds Early Access roadmap',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-best-base-locations/',
    label: 'PC Gamer base locations',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-tips/',
    label: 'PC Gamer beginner tips',
  },
];

const biomesCopy: Record<string, BiomesCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Biomes Guide - Safe Routes, Resource Zones, and Base Planning',
      description:
        'A spoiler-light Subnautica 2 biomes guide for Early Access route planning, safe starter loops, wreck routes, oxygen pressure, resource zones, and base placement.',
    },
    eyebrow: 'Subnautica 2 biome routes',
    title: 'Subnautica 2 Biomes Guide',
    description:
      'The useful question is not “what is every biome called?” yet. In Early Access, the better question is where a route starts, what it gives you, how risky it feels, and whether you can repeat it without getting turned around.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Treat Subnautica 2 biomes as route zones: starter safety, scan routes, wreck routes, base candidates, and late rare-material runs. Keep exact names and borders flexible until official notes or repeated in-game checks confirm them.',
    contentsLabel: 'Contents',
    routeTitle: 'Biome route order',
    routeSteps: [
      {
        title: 'Starter loop around the Lifepod',
        body: 'Use the nearest safe water as your first material loop. This is where early Copper, Silver checks, food, water, Scanner habits, and oxygen discipline should become boring before you push farther out.',
      },
      {
        title: 'Old Habitat staging route',
        body: 'Old Habitat routes are useful once objectives or repeated materials pull you away from the starter loop. Build notes around landmarks and return cues, not a vague memory of “somewhere past the rocks.”',
      },
      {
        title: 'Wreck and scan routes',
        body: 'Wreck routes are for fragments, scans, and longer dives. Mark visibility, air pressure, and whether a small staging base would save time before you commit materials.',
      },
      {
        title: 'Thermal and deep-resource routes',
        body: 'Warmer or deeper route zones matter once you start planning power, rare materials, Metal Farm progress, Troilite, and Atacamite. These should be prepared runs, not curiosity swims.',
      },
    ],
    visualTitle: 'Biome scouting board',
    visualItems: [
      {
        label: 'Safe',
        value: 'Starter',
        note: 'Build the first loop near easy landmarks and common resources.',
      },
      {
        label: 'Useful',
        value: 'Route',
        note: 'Old Habitat and wreck trips need notes you can repeat.',
      },
      {
        label: 'Late',
        value: 'Deep',
        note: 'Rare materials need oxygen, tools, storage, and a return plan.',
      },
    ],
    tableTitle: 'Biome planning checklist',
    tableHeaders: ['Biome note', 'What to write down'],
    tableRows: [
      [
        'Safety',
        'Visibility, hostile pressure, oxygen strain, and the first point where you should turn back.',
      ],
      [
        'Resources',
        'Common materials worth repeating, plus rare finds that need a separate run.',
      ],
      [
        'Landmarks',
        'One starting landmark, one midpoint cue, and one return cue you can describe later.',
      ],
      [
        'Base value',
        'Whether the zone saves time for storage, crafting, scans, power, or co-op navigation.',
      ],
      [
        'Patch risk',
        'Any claim that depends on Early Access balance, resource placement, or a recent hotfix.',
      ],
    ],
    cautionTitle: 'Do not fake an all-biomes atlas',
    cautionBody:
      'Subnautica 2 is still changing. A good biome guide should separate confirmed route behavior from guesses. If a name, border, or resource cluster cannot be checked, write it as a note to verify rather than a fact.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How many biomes are in Subnautica 2?',
        body: 'Early Access coverage is still changing, so this guide avoids pretending the final biome list and borders are locked. Use route zones until official or repeated in-game checks confirm details.',
      },
      {
        title: 'Which biome should beginners explore first?',
        body: 'Stay around the starter loop until Copper, Silver checks, Scanner progress, food, water, and oxygen returns feel repeatable.',
      },
      {
        title: 'When should I scout deeper biomes?',
        body: 'After you have better oxygen, a clear landmark chain, storage space, and a reason to go there, such as scans, base staging, power, or rare materials.',
      },
      {
        title: 'Should I build a base in every biome?',
        body: 'No. Build small staging outposts only where a route repeats. Too many early bases split your materials and make storage worse.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Map, label: 'Map and Routes' },
      {
        href: Routes.Subnautica2BestBaseLocations,
        label: 'Best Base Locations',
      },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
      {
        href: Routes.Subnautica2TroiliteAfterHotfix2,
        label: 'Troilite After Hotfix 2',
      },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 24, 2026 against the official Steam page, Unknown Worlds Early Access roadmap, and current route/base-planning coverage. Exact biome borders and resource clusters should be treated as patch-sensitive.',
    cardKicker: 'Biome scout card',
    cardBody:
      'Spoiler-light biome planning for starter loops, wreck routes, base candidates, oxygen pressure, and late rare-material runs.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Biome guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 生物群系指南 - 安全路线、资源区域和基地规划',
      description:
        'Subnautica 2 中文生物群系指南，按抢先体验阶段整理新手安全路线、扫描路线、残骸路线、氧气压力、资源区域和基地选址。',
    },
    eyebrow: 'Subnautica 2 生物群系路线',
    title: 'Subnautica 2 生物群系指南',
    description:
      '现在最有用的问题不是“所有 biome 分别叫什么”。在抢先体验阶段，更应该先问：这条路线从哪里开始、能拿到什么、危险在哪里、下次能不能稳定复跑。',
    quickLabel: '快速结论',
    quickAnswer:
      '先把 Subnautica 2 的生物群系当作路线区域来理解：新手安全圈、扫描路线、残骸路线、基地候选点、后期稀有材料路线。具体名称、边界和资源簇，在官方说明或多次实测前都要保持弹性。',
    contentsLabel: '目录',
    routeTitle: '生物群系路线顺序',
    routeSteps: [
      {
        title: 'Lifepod 周边新手循环',
        body: '最近的安全水域就是第一条材料循环。早期 Copper、Silver 检查、食物、水、Scanner 习惯和氧气纪律，都应该先在这里练到不慌。',
      },
      {
        title: 'Old Habitat 中转路线',
        body: '当任务或重复材料把你从新手圈拉出去时，再记录 Old Habitat 路线。笔记要围绕地标和回头信号写，不要只写“石头那边”。',
      },
      {
        title: '残骸和扫描路线',
        body: '残骸路线适合碎片、扫描和更长潜水。先记能见度、氧气压力、是否值得建小中转点，再投入材料。',
      },
      {
        title: '热源和深层资源路线',
        body: '更暖或更深的区域，通常要等你开始考虑供电、稀有材料、Metal Farm、Troilite 和 Atacamite 时再去。那是准备好的路线，不是随便游过去看看。',
      },
    ],
    visualTitle: '生物群系侦察卡',
    visualItems: [
      {
        label: '安全',
        value: '新手圈',
        note: '围绕清晰地标和常用资源建立第一条循环。',
      },
      {
        label: '有用',
        value: '路线',
        note: 'Old Habitat 和残骸路线要能复跑。',
      },
      {
        label: '后期',
        value: '深层',
        note: '稀有材料需要氧气、工具、储物和返程计划。',
      },
    ],
    tableTitle: '生物群系记录表',
    tableHeaders: ['记录项', '该写什么'],
    tableRows: [
      [
        '安全性',
        '能见度、敌对生物压力、氧气紧张点，以及第一个应该回头的位置。',
      ],
      ['资源', '值得重复采集的常用材料，以及需要单独跑一趟的稀有材料。'],
      ['地标', '一个起点地标、一个中途提示、一个能说明白的返程提示。'],
      [
        '基地价值',
        '这个区域是否能节省储物、制作、扫描、供电或联机导航的时间。',
      ],
      [
        '补丁风险',
        '任何依赖抢先体验平衡、资源位置或最近 hotfix 的说法，都要标记。',
      ],
    ],
    cautionTitle: '不要伪装成完整全图图鉴',
    cautionBody:
      'Subnautica 2 还在变化。好的生物群系指南应该区分已确认路线体验和猜测。名称、边界或资源簇不能核对时，就写成待确认笔记，不要写死。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 有多少个生物群系？',
        body: '抢先体验内容还会变化，所以这篇不会假装最终数量和边界已经固定。先按路线区域来规划，等官方或反复实测确认后再细化。',
      },
      {
        title: '新手先探索哪个区域？',
        body: '先留在 Lifepod 周边循环，直到 Copper、Silver 检查、Scanner 进度、食物、水和氧气返程都能稳定处理。',
      },
      {
        title: '什么时候去更深的区域？',
        body: '等氧气更稳、地标链清楚、背包空间足够，并且有明确理由，比如扫描、建中转点、供电或稀有材料。',
      },
      {
        title: '每个 biome 都要建基地吗？',
        body: '不用。只有路线会重复时才建小中转点。太早建太多基地，会分散材料，储物也会更乱。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2Map, label: '地图和路线' },
      { href: Routes.Subnautica2BestBaseLocations, label: '最佳基地位置' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2AirTank, label: '气瓶和氧气' },
      {
        href: Routes.Subnautica2TroiliteAfterHotfix2,
        label: 'Hotfix 2 后 Troilite',
      },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 24 日核对 Steam 官方页面、Unknown Worlds 抢先体验路线图和当前路线/基地规划资料。具体边界和资源簇按补丁敏感信息处理。',
    cardKicker: '侦察卡',
    cardBody:
      '面向新手循环、残骸路线、基地候选点、氧气压力和后期稀有材料路线的轻剧透规划。',
    cardTypeLabel: '类型',
    cardTypeValue: '生物群系指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 Biomes Guide - 安全ルート、資源ゾーン、拠点計画',
      description:
        'Early Access 向けの Subnautica 2 バイオームガイド。開始ループ、スキャンルート、残骸ルート、酸素、資源ゾーン、拠点候補を整理します。',
    },
    eyebrow: 'Subnautica 2 biome routes',
    title: 'Subnautica 2 Biomes Guide',
    description:
      '今は全 biome 名を丸暗記するより、どこから入り、何を取り、どこで危なくなり、もう一度同じルートを走れるかを考えるほうが役に立ちます。',
    quickLabel: '短い答え',
    quickAnswer:
      'Subnautica 2 の biomes は route zones として見るのが安全です。starter loop、scan route、wreck route、base candidate、late rare-material run に分け、名前や境界は確認できるまで固定しません。',
    contentsLabel: '目次',
    routeTitle: 'Biome route order',
    routeSteps: [
      {
        title: 'Lifepod 周辺の starter loop',
        body: '最初の安全な水域で Copper、Silver、食料、水、Scanner、酸素帰還を安定させます。',
      },
      {
        title: 'Old Habitat staging route',
        body: '目的や素材集めで繰り返すようになったら、地形と帰還サインをメモします。',
      },
      {
        title: 'Wreck and scan routes',
        body: '残骸ルートは fragments と scans 向けです。視界、酸素、staging base の価値を確認します。',
      },
      {
        title: 'Thermal and deep-resource routes',
        body: 'power、rare materials、Metal Farm、Troilite、Atacamite に関わるルートは、準備してから入ります。',
      },
    ],
    visualTitle: 'Biome scouting board',
    visualItems: [
      {
        label: 'Safe',
        value: 'Starter',
        note: '分かりやすい地標と common resources から始める。',
      },
      {
        label: 'Useful',
        value: 'Route',
        note: 'Old Habitat と wreck trips は再現できるメモにする。',
      },
      {
        label: 'Late',
        value: 'Deep',
        note: 'rare materials は oxygen、tools、storage が必要。',
      },
    ],
    tableTitle: 'Biome planning checklist',
    tableHeaders: ['Note', 'What to record'],
    tableRows: [
      ['Safety', '視界、敵、酸素、引き返す合図。'],
      ['Resources', '繰り返し取る素材と、専用ルートが必要な rare finds。'],
      ['Landmarks', '開始地点、中間サイン、帰還サイン。'],
      [
        'Base value',
        'storage、crafting、scans、power、co-op navigation に役立つか。',
      ],
      ['Patch risk', 'Early Access balance や hotfix に依存する情報。'],
    ],
    cautionTitle: '全 biome 図鑑のふりをしない',
    cautionBody:
      'Subnautica 2 はまだ変わります。確認できない名前、境界、資源群は事実ではなく検証メモとして扱います。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 の biome 数は？',
        body: 'Early Access では変わる可能性があるため、最終リストとして固定しません。',
      },
      {
        title: '初心者はどこから探索する？',
        body: 'Lifepod 周辺の starter loop から始め、酸素と素材集めを安定させます。',
      },
      {
        title: '深い biome はいつ行く？',
        body: 'oxygen、landmarks、storage、目的が揃ってからです。',
      },
      {
        title: '各 biome に base は必要？',
        body: '不要です。繰り返すルートだけ small outpost を検討します。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2Map, label: 'Map and Routes' },
      {
        href: Routes.Subnautica2BestBaseLocations,
        label: 'Best Base Locations',
      },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
      {
        href: Routes.Subnautica2TroiliteAfterHotfix2,
        label: 'Troilite After Hotfix 2',
      },
    ],
    sourcesTitle: '出典メモ',
    sourceBody:
      '2026年5月24日に Steam、Unknown Worlds roadmap、現在の route/base planning coverage を確認。',
    cardKicker: 'Biome scout card',
    cardBody:
      'starter loops、wreck routes、base candidates、oxygen pressure、late rare-material runs の計画メモ。',
    cardTypeLabel: '種類',
    cardTypeValue: 'Biome guide',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: '状態',
    cardStatusValue: 'Early Access',
  },
};

const fallbackLocaleAliases = {
  de: {
    title: 'Subnautica 2 Biomes Guide',
    description:
      'Ein route-first Biome Guide fuer Early Access: sichere Starter-Loops, Wreck-Routen, Sauerstoffdruck, Ressourcen-Zonen und Base-Planung.',
  },
  fr: {
    title: 'Subnautica 2 Biomes Guide',
    description:
      'Guide de biomes pense par routes: boucle de depart, scans, epaves, oxygene, ressources et bases pendant l Early Access.',
  },
  'pt-BR': {
    title: 'Subnautica 2 Biomes Guide',
    description:
      'Guia de biomas por rotas: starter loop, wreck routes, oxigenio, recursos e base planning no Early Access.',
  },
  'es-419': {
    title: 'Subnautica 2 Biomes Guide',
    description:
      'Guia de biomas por rutas: zona inicial, wreck routes, oxigeno, recursos y bases durante Early Access.',
  },
  ko: {
    title: 'Subnautica 2 Biomes Guide',
    description:
      'Early Access용 route-first 바이옴 가이드: starter loop, wreck routes, oxygen pressure, resources, base planning.',
  },
  ru: {
    title: 'Subnautica 2 Biomes Guide',
    description:
      'Маршрутный гайд по биомам Early Access: стартовые петли, wreck routes, кислород, ресурсы и базы.',
  },
} satisfies Record<
  string,
  {
    title: string;
    description: string;
  }
>;

function getCopy(locale: Locale): BiomesCopy {
  if (biomesCopy[locale]) {
    return biomesCopy[locale];
  }

  const fallback =
    fallbackLocaleAliases[locale as keyof typeof fallbackLocaleAliases] ??
    fallbackLocaleAliases.de;

  return {
    ...biomesCopy.en,
    metadata: {
      title: fallback.title,
      description: fallback.description,
    },
    title: fallback.title,
    description: fallback.description,
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = getCopy(locale);

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2Biomes,
  });
}

export default async function BiomesGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={WavesIcon}
      locale={locale}
      pathname={Routes.Subnautica2Biomes}
      sources={sharedSources}
    />
  );
}
