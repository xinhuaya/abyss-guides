import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { WrenchIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type RepairToolCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-27';

const sharedSources = [
  {
    href: 'https://subnautica2.gg/blueprints/repair-tool',
    label: 'Subnautica2.gg Repair Tool blueprint',
  },
  {
    href: 'https://subnautica2hub.com/blueprints/repair-tool',
    label: 'Subnautica2Hub Repair Tool blueprint',
  },
  {
    href: 'https://www.gamesradar.com/games/survival/subnautica-2-repair-tool/',
    label: 'GamesRadar Repair Tool fragment guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-repair-tool-fragment-locations/',
    label: 'PC Gamer Repair Tool fragment guide',
  },
];

const repairToolCopy: Record<string, RepairToolCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Repair Tool Guide - Fragments, Recipe, and Safe Repairs',
      description:
        'A practical Subnautica 2 Repair Tool guide covering fragment scans, the Fabrication Station recipe, Titanium Ingot, Wiring Kit, Basic Battery, Sulfur, and vehicle or base repair priorities.',
    },
    eyebrow: 'Subnautica 2 survival tool',
    title: 'Subnautica 2 Repair Tool Guide',
    description:
      'Repair Tool is the boring-looking item you only miss after something breaks. Build it before your first long Tadpole route or serious base stretch.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current Subnautica2.gg and Subnautica2Hub data list Repair Tool as a scan-unlocked tool crafted at the Fabrication Station / Fabricator with Titanium Ingot, Wiring Kit, Basic Battery, and Sulfur. PC Gamer currently reports 2 Titanium Ingots while the database pages list 1, so check your PDA before the final craft. Build it before the Tadpole, Karakorum, or deeper power routes start turning small damage into lost time.',
    contentsLabel: 'Contents',
    routeTitle: 'Repair Tool unlock and craft plan',
    routeSteps: [
      {
        title: 'Scan first, farm second',
        body: 'Subnautica2.gg currently says Repair Tool unlocks after 3 scans. If the recipe is missing, do not waste a storage run on the full material list yet.',
      },
      {
        title: 'Treat the recipe as a small chain',
        body: 'The public blueprint pages list Titanium Ingot, Wiring Kit, Basic Battery, and Sulfur. PC Gamer currently disagrees on the Titanium Ingot count, so bring a spare if you are crafting away from base.',
      },
      {
        title: 'Build it before vehicle confidence',
        body: 'A Tadpole makes distance feel safe, but damage still matters. Keep the Repair Tool ready before repeated wreck, predator, or deep-resource loops.',
      },
      {
        title: 'Keep one repair kit near the base job',
        body: 'The tool repairs bases and systems as well as vehicles. If you are expanding rooms or power infrastructure, store a charged battery and spare sulfur near the Fabricator.',
      },
      {
        title: 'Pair it with your charger habit',
        body: 'A Repair Tool with a dead Basic Battery is just locker clutter. Once Battery Terminal is built, keep one charged battery beside the tool and rotate the weak one through the terminal before a long route.',
      },
      {
        title: 'Check the Fabricator after every patch',
        body: 'Early Access data moves. If the recipe on your save differs from the public pages, trust the PDA and update the locker labels around the real recipe.',
      },
    ],
    tableTitle: 'Repair Tool checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      ['Unlock', 'Subnautica2.gg currently lists 3 Repair Tool scans.'],
      ['Station', 'Fabrication Station / Fabricator in current data.'],
      [
        'Titanium Ingot',
        'Public sources differ between x1 and x2. Check the PDA.',
      ],
      ['Wiring Kit x1', 'Plan the Silver chain before you leave base.'],
      [
        'Basic Battery x1',
        'Keep one tool battery out of your flashlight pile.',
      ],
      [
        'Battery Terminal',
        'Recharge the tool battery before Tadpole, Karakorum, and base power routes.',
      ],
      ['Sulfur x1', 'Reserve it; do not spend every piece on other recipes.'],
    ],
    visualTitle: 'Repair loop',
    visualItems: [
      {
        label: 'Scan',
        value: '3 tools',
        note: 'Finish the unlock before material farming.',
      },
      {
        label: 'Craft',
        value: '4 inputs',
        note: 'Ingot, Wiring Kit, Battery, Sulfur.',
      },
      {
        label: 'Carry',
        value: 'Routes',
        note: 'Vehicle and base repair safety.',
      },
      {
        label: 'Recharge',
        value: 'Before trips',
        note: 'Rotate the weak battery through the terminal.',
      },
    ],
    cautionTitle: 'Do not wait until the Tadpole is smoking',
    cautionBody:
      'The Repair Tool is cheap compared with losing a long trip. Make it while the route is calm, then leave it in the kit you grab for vehicle runs.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you unlock the Repair Tool in Subnautica 2?',
        body: 'Current Subnautica2.gg data says to scan 3 Repair Tools. If your PDA does not show the recipe, keep scanning fragments or tool wreckage until the blueprint completes.',
      },
      {
        title: 'What is the Repair Tool recipe?',
        body: 'Current database pages list Titanium Ingot x1, Wiring Kit x1, Basic Battery x1, and Sulfur x1 at the Fabrication Station / Fabricator; PC Gamer currently reports 2 Titanium Ingots, so check your PDA before crafting.',
      },
      {
        title: 'What does the Repair Tool repair?',
        body: 'Current descriptions say it repairs vehicles, bases, and systems. Treat it as part of the Tadpole kit and base-building kit.',
      },
      {
        title: 'Should you craft Repair Tool before Tadpole routes?',
        body: 'Yes. It is one of the safer prep items before repeated vehicle trips, especially when you are learning routes with predators, tight caves, low power margin, or new power-plant objectives.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Vehicle Guide' },
      { href: Routes.Subnautica2Sulfur, label: 'Sulfur Location Guide' },
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery Guide' },
      { href: Routes.Subnautica2WiringKit, label: 'Wiring Kit Guide' },
      { href: Routes.Subnautica2TitaniumIngot, label: 'Titanium Ingot Guide' },
      { href: Routes.Subnautica2Beacon, label: 'Beacon Guide' },
      { href: Routes.Subnautica2BaseBuilding, label: 'Base Building Guide' },
      {
        href: Routes.Subnautica2BatteryTerminal,
        label: 'Battery Terminal Guide',
      },
      {
        href: Routes.Subnautica2KarakorumPowerPlant,
        label: 'Karakorum Power Plant Guide',
      },
      {
        href: Routes.Subnautica2PowerPlantObservatory,
        label: 'Power Plant Observatory Guide',
      },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 27, 2026 against Subnautica2.gg, Subnautica2Hub, GamesRadar, and PC Gamer. Current public pages agree on scan unlock, Sulfur use, and vehicle/base repair use; Titanium Ingot count differs between database pages and PC Gamer, so check your PDA after patches.',
    cardKicker: 'Repair card',
    cardBody:
      'Scan unlock, Fabricator recipe, Titanium Ingot, Wiring Kit, Basic Battery, Sulfur, Tadpole repairs, and base repair timing.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Tool guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Repair Tool 指南 - 碎片、配方和维修优先级',
      description:
        'Subnautica 2 中文 Repair Tool 指南：整理碎片扫描、Fabricator 配方、Titanium Ingot、Wiring Kit、Basic Battery、Sulfur，以及载具和基地维修顺序。',
    },
    eyebrow: 'Subnautica 2 生存工具',
    title: 'Subnautica 2 Repair Tool 指南',
    description:
      'Repair Tool 看起来不抢眼，但等 Tadpole 冒烟、基地漏水时，你会希望它早就在背包里。',
    quickLabel: '快速结论',
    quickAnswer:
      'Subnautica2.gg 和 Subnautica2Hub 当前资料把 Repair Tool 写成扫描解锁工具，在 Fabrication Station / Fabricator 用 Titanium Ingot、Wiring Kit、Basic Battery 和 Sulfur 制作。PC Gamer 当前写 Titanium Ingot x2，而数据库页写 x1，所以最终制作前看一眼 PDA。Subnautica2.gg 当前还写到需要扫描 3 个 Repair Tool，并列出 11 个扫描位置。',
    contentsLabel: '目录',
    routeTitle: 'Repair Tool 解锁和制作路线',
    routeSteps: [
      {
        title: '先扫描，再囤材料',
        body: 'Subnautica2.gg 当前写的是扫描 3 个 Repair Tool 解锁。配方还没出现时，先别急着把整套材料都搬回家。',
      },
      {
        title: '把配方当成一条小材料链',
        body: '公开蓝图页列的是 Titanium Ingot、Wiring Kit、Basic Battery 和 Sulfur。PC Gamer 和数据库页在 Titanium Ingot 数量上有出入，如果离基地远，最好多带一份 Titanium 准备。',
      },
      {
        title: '别等载具坏了才想起来',
        body: 'Tadpole 会让距离看起来安全，但碰撞和生物伤害照样会发生。准备重复跑沉船、深水资源或捕食者区域前，先带上 Repair Tool。',
      },
      {
        title: '基地施工也要留一套维修准备',
        body: '它不只修载具，也修基地和系统。扩建房间、电力或管线前，在 Fabricator 附近留一块电池和一份 Sulfur。',
      },
      {
        title: '每次更新后看一眼 PDA',
        body: '抢先体验阶段配方会变。你的存档里如果和公开网页不一样，以 PDA 为准，再更新箱子标签和材料清单。',
      },
    ],
    tableTitle: 'Repair Tool 检查表',
    tableHeaders: ['需要', '确认什么'],
    tableRows: [
      ['解锁', 'Subnautica2.gg 当前写的是扫描 3 个 Repair Tool。'],
      ['工作站', '当前资料写作 Fabrication Station / Fabricator。'],
      ['Titanium Ingot', '公开资料在 x1 / x2 上有出入，最终看 PDA。'],
      ['Wiring Kit x1', '出门前确认 Silver 链路没有断。'],
      ['Basic Battery x1', '别把最后一块电池都塞进手电筒路线。'],
      ['Sulfur x1', '提前留一份，别被其他配方用空。'],
    ],
    visualTitle: '维修准备链',
    visualItems: [
      {
        label: '扫描',
        value: '3 个工具',
        note: '先解锁，再开始完整囤料。',
      },
      {
        label: '制作',
        value: '4 类材料',
        note: 'Ingot、Wiring Kit、Battery、Sulfur。',
      },
      {
        label: '携带',
        value: '长路线',
        note: '给载具和基地留后手。',
      },
    ],
    cautionTitle: '别等 Tadpole 冒烟了才回头补',
    cautionBody:
      'Repair Tool 的成本比一次长路线失败低太多。路线还平静的时候做出来，放进你每次开载具都会拿的工具箱。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Repair Tool 怎么解锁？',
        body: 'Subnautica2.gg 当前资料写的是扫描 3 个 Repair Tool。PDA 里还没有配方时，继续找碎片或工具残骸扫描。',
      },
      {
        title: 'Repair Tool 配方是什么？',
        body: '当前数据库页写的是在 Fabrication Station / Fabricator 用 Titanium Ingot x1、Wiring Kit x1、Basic Battery x1、Sulfur x1 制作；PC Gamer 当前写 Titanium Ingot x2，所以最终以 PDA 为准。',
      },
      {
        title: 'Repair Tool 能修什么？',
        body: '当前描述写的是可以维修载具、基地和系统。可以把它当成 Tadpole 工具包和基地施工工具包的一部分。',
      },
      {
        title: '跑 Tadpole 路线前要先做 Repair Tool 吗？',
        body: '建议先做。尤其是你还在熟悉捕食者、窄洞、深水资源和电量余量时，它能把很多事故变成小插曲。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 载具指南' },
      { href: Routes.Subnautica2Sulfur, label: 'Sulfur 位置指南' },
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery 指南' },
      { href: Routes.Subnautica2WiringKit, label: 'Wiring Kit 指南' },
      { href: Routes.Subnautica2TitaniumIngot, label: 'Titanium Ingot 指南' },
      { href: Routes.Subnautica2Beacon, label: 'Beacon 指南' },
      { href: Routes.Subnautica2BaseBuilding, label: '基地建设指南' },
      {
        href: Routes.Subnautica2BatteryTerminal,
        label: 'Battery Terminal 指南',
      },
      {
        href: Routes.Subnautica2KarakorumPowerPlant,
        label: 'Karakorum Power Plant 指南',
      },
      {
        href: Routes.Subnautica2PowerPlantObservatory,
        label: 'Power Plant Observatory 指南',
      },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 27 日核对 Subnautica2.gg、Subnautica2Hub、GamesRadar 和 PC Gamer。当前公开资料在扫描解锁、Sulfur 用途和载具/基地维修上基本一致；Titanium Ingot 数量在数据库页和 PC Gamer 之间有出入，更新后请以 PDA 为准。',
    cardKicker: '维修工具卡',
    cardBody:
      '扫描解锁、Fabricator 配方、Titanium Ingot、Wiring Kit、Basic Battery、Sulfur、Tadpole 维修和基地维修时机。',
    cardTypeLabel: '类型',
    cardTypeValue: '工具指南',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = repairToolCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  repairToolCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Repair Tool Guide',
      description:
        'Guide for Repair Tool scans, Fabricator recipe, Titanium Ingot, Wiring Kit, Basic Battery, Sulfur, and repair priorities.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = repairToolCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2RepairTool,
  });
}

export default async function RepairToolGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = repairToolCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={WrenchIcon}
      locale={locale}
      pathname={Routes.Subnautica2RepairTool}
      sources={sharedSources}
    />
  );
}
