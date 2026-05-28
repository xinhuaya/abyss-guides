import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { FlaskConicalIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type StrongAcidCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-23';
const UPDATED_AT = '2026-05-28';

const sharedSources = [
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-strong-acid-necrolei-cyst-location/',
    label: 'PC Gamer Strong Acid guide',
  },
  {
    href: 'https://www.gamesradar.com/games/survival/subnautica-2-necrolei-cysts/',
    label: 'GamesRadar Necrolei Cyst guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-rebreather-how-to-get/',
    label: 'PC Gamer Rebreather guide',
  },
];

const strongAcidCopy: Record<string, StrongAcidCopy> = {
  en: {
    metadata: {
      title: 'How to Get Strong Acid in Subnautica 2 - Necrolei Cyst Route',
      description:
        'Craft Strong Acid in Subnautica 2 with Necrolei Cyst route notes, Processor unlocks, Fiber Mesh and Rebreather planning, Power Cell use, and Tadpole prep.',
    },
    eyebrow: 'Necrolei Cyst crafting route',
    title: 'How to Get Strong Acid in Subnautica 2',
    description:
      'Strong Acid is one of the first materials that forces you to connect exploration, processing, oxygen prep, and vehicle planning. It starts with Necrolei Cysts and a Processor, then quickly affects what you can build next.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'To get Strong Acid, gather Necrolei Cysts around the Old Habitat route and craft them at the Processor. PC Gamer notes that Strong Acid is key for Power Cells, which are needed for the Tadpole. Keep a small reserve if your next route also includes Fiber Mesh or Rebreather prep.',
    fieldNotesTitle: 'Field notes for Strong Acid runs',
    fieldNotes: [
      {
        title: 'Treat cysts as chemistry stock',
        body: 'Necrolei Cysts are easy to mentally file as another plant pickup. Once Strong Acid appears, they belong in the same plan as Power Cells, Processor use, and deep-route prep.',
      },
      {
        title: 'Do not craft acid without a next recipe',
        body: 'Strong Acid is useful, but raw cysts and Processor access are more flexible. Craft it when Power Cell, Tadpole, or a breathing-route item is the visible target.',
      },
      {
        title: 'Return from Old Habitat with a margin',
        body: 'The Old Habitat route already asks for attention and oxygen. If the path is safe, gather a little more than the minimum so one mistake does not force the same swim again.',
      },
    ],
    routeChecklistTitle: 'Before crafting Strong Acid',
    routeChecklist: [
      'Scan or build the Processor before counting Strong Acid as available.',
      'Mark the Necrolei Cyst route near Old Habitat.',
      'Reserve Strong Acid for Power Cell or deep-route gear before comfort crafts.',
      'Keep enough oxygen margin to leave the cyst route cleanly.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Strong Acid craft route',
    routeSteps: [
      {
        title: 'Unlock the Processor route',
        body: 'PC Gamer reports that the Processor can be scanned at the Old Habitat north of the Life Pod as part of the black-box objective route. Treat the first trip as a scan and oxygen run, not a casual material swim.',
      },
      {
        title: 'Gather Necrolei Cysts nearby',
        body: 'The same Old Habitat region is reported as a practical place to gather Necrolei Cysts. Mark the exit path before your inventory is full, because this area is easy to overstay.',
      },
      {
        title: 'Craft with a Power Cell goal',
        body: 'Strong Acid matters because it feeds Power Cell crafting. If your next milestone is Tadpole, do not spend the chemistry chain just because the Processor is ready.',
      },
      {
        title: 'Check the oxygen route before spending it',
        body: 'Recent Rebreather and Fiber Mesh notes pull this material chain into deep-route planning. If you are about to push below your comfortable oxygen range, keep enough stock to finish the breathing kit.',
      },
      {
        title: 'Return with a buffer',
        body: 'If the route is safe, gather more than the minimum. Vehicle chains often need extra attempts, repairs, or backup power planning.',
      },
    ],
    tableTitle: 'Strong Acid crafting chain',
    tableHeaders: ['Material or station', 'Role'],
    tableRows: [
      ['Necrolei Cyst', 'Key gathered ingredient for Strong Acid.'],
      ['Processor', 'Station used to craft Strong Acid.'],
      ['Strong Acid', 'Processing material used in Power Cell crafting.'],
      [
        'Fiber Mesh / Rebreather',
        'Deep-route prep that can compete for the same chemistry plan.',
      ],
      ['Power Cell', 'Vehicle-chain item connected to Tadpole progress.'],
    ],
    visualTitle: 'Chemistry-to-vehicle chain',
    visualItems: [
      {
        label: 'Gather',
        value: 'Cysts',
        note: 'Necrolei Cysts are the route item to protect.',
      },
      {
        label: 'Process',
        value: 'Acid',
        note: 'Use the Processor once the station is ready.',
      },
      {
        label: 'Spend',
        value: 'Power',
        note: 'Power Cell and Tadpole prep are the main pressure points.',
      },
    ],
    cautionTitle: 'Strong Acid is a vehicle-chain material',
    cautionBody:
      'Do not treat Necrolei Cysts as random plants. Strong Acid feeds Power Cell planning and now sits close to the Fiber Mesh and Rebreather prep route too.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you craft Strong Acid in Subnautica 2?',
        body: 'Gather Necrolei Cysts, unlock or use the Processor, and craft Strong Acid through the processing chain. Current reporting points players toward the Old Habitat route for both Processor and cyst planning.',
      },
      {
        title: 'Why do you need Strong Acid?',
        body: 'Strong Acid is used for Power Cell crafting, which is part of getting the Tadpole vehicle running. Current route planning also connects it to Fiber Mesh and Rebreather prep through the broader chemistry chain.',
      },
      {
        title: 'Where should you look for Necrolei Cysts?',
        body: 'PC Gamer and GamesRadar both point players toward the Old Habitat route. Bring enough oxygen margin and keep the return path clear before farming.',
      },
      {
        title: 'Should you stockpile Strong Acid?',
        body: 'Keep a small reserve once the route is safe. Before that, raw cysts plus Processor access are more flexible than a pile of finished acid.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2NecroleiCyst, label: 'Necrolei Cyst Guide' },
      { href: Routes.Subnautica2Processor, label: 'Processor Guide' },
      { href: Routes.Subnautica2MildAcid, label: 'Mild Acid Guide' },
      { href: Routes.Subnautica2Sulfur, label: 'Sulfur Location Guide' },
      { href: Routes.Subnautica2Gold, label: 'Gold Location Guide' },
      { href: Routes.Subnautica2FiberMesh, label: 'Fiber Mesh Guide' },
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather Guide' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Vehicle' },
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell Guide' },
      {
        href: Routes.Subnautica2EntangledPowerCell,
        label: 'Entangled Power Cell Guide',
      },
      {
        href: Routes.Subnautica2AdvancedBattery,
        label: 'Advanced Battery Guide',
      },
      { href: Routes.Subnautica2TitaniumIngot, label: 'Titanium Ingot' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 28, 2026 against PC Gamer Strong Acid and Rebreather coverage plus GamesRadar Necrolei Cyst route notes. Subnautica 2 is in Early Access, so Processor routes, material counts, and later uses should be rechecked after patches.',
    cardKicker: 'Chemical route card',
    cardBody:
      'Necrolei Cysts, Processor unlocks, Strong Acid crafting, Power Cell use, Fiber Mesh pressure, and Tadpole prep.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Crafting route',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Strong Acid 指南 - Necrolei Cyst 路线和用途',
      description:
        'Subnautica 2 中文 Strong Acid 指南：整理 Necrolei Cyst 路线、Processor 解锁、Fiber Mesh 与 Rebreather 规划、Power Cell 用途和 Tadpole 前置。',
    },
    eyebrow: 'Necrolei Cyst 制作路线',
    title: 'Subnautica 2 Strong Acid 获取指南',
    description:
      'Strong Acid 是前期第一个会把探索、加工、氧气装备和载具规划串起来的材料。它从 Necrolei Cyst 和 Processor 开始，很快就会影响 Power Cell、Tadpole 和深潜路线。',
    quickLabel: '快速结论',
    quickAnswer:
      '想做 Strong Acid，先沿 Old Habitat 路线收集 Necrolei Cyst，再用 Processor 加工。PC Gamer 提到 Strong Acid 是 Power Cell 的关键材料，而 Power Cell 又会影响 Tadpole。若下一步还要做 Fiber Mesh 或 Rebreather，最好留一点化学材料余量。',
    fieldNotesTitle: 'Strong Acid 路线笔记',
    fieldNotes: [
      {
        title: '把 cyst 当成化学库存',
        body: 'Necrolei Cyst 很容易被当成普通植物顺手捡。Strong Acid 出现后，它应该和 Power Cell、Processor、深潜路线放在同一个计划里。',
      },
      {
        title: '没有目标配方时先别急着加工',
        body: 'Strong Acid 有用，但原始 cyst 加上 Processor 权限更灵活。等 Power Cell、Tadpole 或呼吸装备明确需要时，再加工更稳。',
      },
      {
        title: 'Old Habitat 回程要留余量',
        body: 'Old Habitat 路线本身就需要注意氧气和方向。路线安全的话，多带一点材料回来，避免因为少一个材料又游一趟。',
      },
    ],
    routeChecklistTitle: '制作 Strong Acid 前',
    routeChecklist: [
      '先扫描或建好 Processor，再把 Strong Acid 当成可用材料。',
      '标记 Old Habitat 附近的 Necrolei Cyst 路线。',
      '优先把 Strong Acid 留给 Power Cell 或深潜装备。',
      '进入 cyst 路线前，确认氧气余量足够安全返回。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Strong Acid 制作路线',
    routeSteps: [
      {
        title: '先解锁 Processor 路线',
        body: 'PC Gamer 提到 Processor 可以在 Life Pod 北边 Old Habitat 的 black-box 目标路线中扫描到。第一次去时，把它当成扫描和氧气路线，而不是随便游一趟。',
      },
      {
        title: '在附近收集 Necrolei Cyst',
        body: 'Old Habitat 周边也是收集 Necrolei Cyst 的实用区域。背包快满前先确认回程出口，因为这里很容易一边找材料一边待太久。',
      },
      {
        title: '按 Power Cell 目标来加工',
        body: 'Strong Acid 重要，是因为它会进入 Power Cell 制作。下一个目标如果是 Tadpole，不要因为 Processor 已经能用就随手把材料链花掉。',
      },
      {
        title: '花掉之前检查氧气路线',
        body: 'Rebreather 和 Fiber Mesh 会把这条材料链拉进深潜规划。如果你准备往更深区域推进，先留够材料完成呼吸装备。',
      },
      {
        title: '安全时多带一点回来',
        body: '路线安全的话，别只拿最低数量。载具链经常会多一次尝试、修理或备用电源需求。',
      },
    ],
    tableTitle: 'Strong Acid 制作链',
    tableHeaders: ['材料或工作站', '作用'],
    tableRows: [
      ['Necrolei Cyst', 'Strong Acid 的关键采集材料。'],
      ['Processor', '用于加工 Strong Acid 的工作站。'],
      ['Strong Acid', '进入 Power Cell 制作的加工材料。'],
      ['Fiber Mesh / Rebreather', '可能与同一条深潜准备路线竞争材料。'],
      ['Power Cell', '和 Tadpole 推进有关的载具链材料。'],
    ],
    visualTitle: '化学材料到载具链',
    visualItems: [
      {
        label: '收集',
        value: 'Cysts',
        note: 'Necrolei Cyst 是这条路线要保护的材料。',
      },
      {
        label: '加工',
        value: 'Acid',
        note: 'Processor 可用后再处理成 Strong Acid。',
      },
      {
        label: '使用',
        value: 'Power',
        note: 'Power Cell 和 Tadpole 是主要压力点。',
      },
    ],
    cautionTitle: 'Strong Acid 是载具链材料',
    cautionBody:
      '不要把 Necrolei Cyst 当成普通植物乱花。Strong Acid 会进入 Power Cell 规划，也会贴近 Fiber Mesh 和 Rebreather 的深潜准备路线。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Strong Acid 怎么做？',
        body: '收集 Necrolei Cyst，解锁或使用 Processor，再通过加工链制作 Strong Acid。当前资料把 Old Habitat 路线作为 Processor 和 cyst 规划的重要线索。',
      },
      {
        title: '为什么需要 Strong Acid？',
        body: 'Strong Acid 用于 Power Cell 制作，而 Power Cell 会影响 Tadpole 载具推进。当前路线规划也会把它和 Fiber Mesh、Rebreather 准备联系起来。',
      },
      {
        title: 'Necrolei Cyst 去哪里找？',
        body: 'PC Gamer 和 GamesRadar 都把玩家指向 Old Habitat 路线。去之前确认氧气余量，并记好回程方向。',
      },
      {
        title: 'Strong Acid 要不要囤？',
        body: '路线安全后可以留少量备用。在那之前，原始 cyst 加上 Processor 权限通常比一堆成品 acid 更灵活。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2NecroleiCyst, label: 'Necrolei Cyst 指南' },
      { href: Routes.Subnautica2Processor, label: 'Processor 指南' },
      { href: Routes.Subnautica2MildAcid, label: 'Mild Acid 指南' },
      { href: Routes.Subnautica2Sulfur, label: 'Sulfur 位置指南' },
      { href: Routes.Subnautica2FiberMesh, label: 'Fiber Mesh 指南' },
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather 指南' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 载具指南' },
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell 指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 28 日核对 PC Gamer 的 Strong Acid 与 Rebreather 资料，以及 GamesRadar 的 Necrolei Cyst 路线说明。Subnautica 2 仍在抢先体验，Processor 路线、材料数量和后续用途都可能随补丁调整。',
    cardKicker: '化学路线卡',
    cardBody:
      'Necrolei Cyst、Processor 解锁、Strong Acid 制作、Power Cell 用途、Fiber Mesh 压力和 Tadpole 前置。',
    cardTypeLabel: '类型',
    cardTypeValue: '制作路线',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

strongAcidCopy.ja = {
  ...strongAcidCopy.en,
  metadata: {
    title: 'How to Get Strong Acid in Subnautica 2',
    description:
      'Guide for Strong Acid, Necrolei Cysts, Processor route, Power Cell, Rebreather prep, and Tadpole planning.',
  },
  sourceBody:
    'Checked May 28, 2026 against PC Gamer Strong Acid and Rebreather coverage plus GamesRadar Necrolei Cyst route notes.',
};

const fallbackLocaleAliases = {
  de: {
    title: 'How to Get Strong Acid in Subnautica 2',
    description:
      'Strong Acid guide covering Necrolei Cysts, Processor route, Power Cell, Rebreather prep, and Tadpole planning.',
  },
  fr: {
    title: 'How to Get Strong Acid in Subnautica 2',
    description:
      'Guide Strong Acid: Necrolei Cysts, Processor, Power Cell, Rebreather et Tadpole.',
  },
  'pt-BR': {
    title: 'How to Get Strong Acid in Subnautica 2',
    description:
      'Guia de Strong Acid com Necrolei Cysts, Processor, Power Cell, Rebreather e Tadpole.',
  },
  'es-419': {
    title: 'How to Get Strong Acid in Subnautica 2',
    description:
      'Guia de Strong Acid: Necrolei Cysts, Processor, Power Cell, Rebreather y Tadpole.',
  },
  ko: {
    title: 'How to Get Strong Acid in Subnautica 2',
    description:
      'Strong Acid, Necrolei Cysts, Processor route, Power Cell, Rebreather prep, and Tadpole planning.',
  },
  ru: {
    title: 'How to Get Strong Acid in Subnautica 2',
    description:
      'Strong Acid guide covering Necrolei Cysts, Processor route, Power Cell, Rebreather prep, and Tadpole planning.',
  },
} satisfies Record<string, { title: string; description: string }>;

function getCopy(locale: Locale): StrongAcidCopy {
  if (strongAcidCopy[locale]) {
    return strongAcidCopy[locale];
  }

  const fallback =
    fallbackLocaleAliases[locale as keyof typeof fallbackLocaleAliases] ??
    fallbackLocaleAliases.de;

  return {
    ...strongAcidCopy.en,
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
    pathname: Routes.Subnautica2StrongAcid,
  });
}

export default async function StrongAcidGuidePage({
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
      icon={FlaskConicalIcon}
      locale={locale}
      pathname={Routes.Subnautica2StrongAcid}
      sources={sharedSources}
    />
  );
}
