import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { GemIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type GoldCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-28';

const sharedSources = [
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-gold-location/',
    label: 'PC Gamer Gold location guide',
  },
  {
    href: 'https://subnautica2hub.com/resources/gold',
    label: 'Subnautica2Hub Gold resource page',
  },
  {
    href: 'https://subnautica2.gg/items/gold',
    label: 'Subnautica2.gg Gold item page',
  },
  {
    href: 'https://www.dexerto.com/wikis/subnautica-2/resources/gold/',
    label: 'Dexerto Gold resource guide',
  },
];

const goldCopy: Record<string, GoldCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Gold Location Guide - Volcanic Vent Route and Thermal Plant Prep',
      description:
        'A practical Subnautica 2 Gold guide covering the volcanic vent route east of the Lifepod, Heat Tolerance, crashed colony ship farming, Sonic Resonator deposits, Advanced Wiring Kit, Strong Acid, and Thermal Plant planning.',
    },
    eyebrow: 'Subnautica 2 resource route',
    title: 'Subnautica 2 Gold Location Guide',
    description:
      'Gold is not an opening-hour chore, but once electronics and thermal power start asking for it, one lazy run is never enough. Get Heat Tolerance first, then make the hot-zone trip count.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'PC Gamer reports Gold in the volcanic vent region east of the Lifepod, especially around rocks near the crashed colony ship roughly 450 meters east. You need Heat Tolerance before safely farming the area, and Sonic Resonator helps with larger nodes. Dexerto points to the Cicada Wreck area as a dense farming spot, while Subnautica2Hub lists Gold in Coral Gardens and Observatory Ruins down to 500m and ties it to Advanced Wiring Kit, Strong Acid, Gold Ingot, Silver conversion, and Thermal Plant recipes.',
    fieldNotesTitle: 'Field notes for Gold routing',
    fieldNotes: [
      {
        title: 'Gold has too many jobs',
        body: 'Electronics, power, and advanced kits all reach for Gold. Treat the first few pieces like route currency, not generic treasure.',
      },
      {
        title: 'Do not spend it before the next station is known',
        body: 'A random Gold craft can block Advanced Wiring Kit, ingots, or power chains. Write down the next recipe before you touch the stack.',
      },
      {
        title: 'Keep hot-zone trips focused',
        body: 'Gold routes often happen when you are already pushing heat or depth. Go in for one job and leave with enough oxygen margin.',
      },
    ],
    routeChecklistTitle: 'Before spending Gold',
    routeChecklist: [
      'Advanced Wiring Kit demand is checked.',
      'Gold Ingot demand is checked separately.',
      'Power-chain recipes are not waiting on the same piece.',
      'At least one raw Gold stays reserved if the route is not repeatable.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Gold route plan',
    routeSteps: [
      {
        title: 'Wait until Heat Tolerance is unlocked',
        body: 'PC Gamer says the volcanic vent region is not safe to farm until you have Heat Tolerance. If the temperature gauge appears and the water turns orange, do not treat the damage as background noise.',
      },
      {
        title: 'Go east from the Lifepod',
        body: 'The main public route points to the volcanic vent region east of the Lifepod, with PC Gamer calling out rocks around the crashed colony ship about 450 meters east.',
      },
      {
        title: 'Use the wreck as your visual anchor',
        body: 'Dexerto describes a dense Gold spot near the Cicada Wreck. The area is productive, but both PC Gamer and Dexerto warn about large predators around the wreck.',
      },
      {
        title: 'Grab small pieces, then mine deposits',
        body: 'PC Gamer notes tiny hand pickups, small smashable blocks, and bigger nodes for Sonic Resonator. Subnautica2Hub also shows better yields from resonated Gold Deposits than hand-broken nodes.',
      },
      {
        title: 'Farm sulfur on the same pass',
        body: 'Gold and sulfur both feed Strong Acid paths in current data, and Dexerto notes sulfur in the same zone. If storage allows, combine the route instead of burning another hot-zone trip.',
      },
      {
        title: 'Stockpile before Thermal Plant work',
        body: 'Subnautica2Hub lists Thermal Plant at three Gold per unit and recommends keeping several pieces ready before committing to thermal power. A half-built power plan feels worse than a full locker.',
      },
    ],
    tableTitle: 'Gold checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      ['Unlock', 'Heat Tolerance before safe volcanic vent farming.'],
      ['Route', 'PC Gamer points about 450m east of the Lifepod.'],
      ['Landmark', 'Crashed colony ship / Cicada Wreck rocks.'],
      ['Tool', 'Sonic Resonator for the bigger Gold nodes.'],
      [
        'Main uses',
        'Advanced Wiring Kit, Strong Acid, Gold Ingot, Silver conversion, Thermal Plant.',
      ],
    ],
    visualTitle: 'Gold route',
    visualItems: [
      {
        label: 'Gate',
        value: 'Heat',
        note: 'Do not farm the vent route cold.',
      },
      {
        label: 'Farm',
        value: '450m E',
        note: 'Crashed colony ship rocks.',
      },
      {
        label: 'Spend',
        value: 'Power',
        note: 'Thermal Plant eats Gold fast.',
      },
    ],
    cautionTitle: 'Gold is a power plan, not just shiny electronics',
    cautionBody:
      'Advanced Wiring Kits are the obvious pull, but Thermal Plant construction can drain the box faster than expected. Decide whether this run is for electronics, Strong Acid, or base power before every piece disappears.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Where is Gold in Subnautica 2?',
        body: 'PC Gamer points to the volcanic vent region east of the Lifepod, especially around the crashed colony ship about 450 meters east. Dexerto also highlights the Cicada Wreck area.',
      },
      {
        title: 'Do you need Heat Tolerance for Gold?',
        body: 'Yes for the main hot-zone farm. PC Gamer says you need Heat Tolerance before entering the volcanic vent region safely.',
      },
      {
        title: 'Do you need Sonic Resonator for Gold?',
        body: 'Not for every piece. PC Gamer notes hand pickups and small smashable blocks, but larger nodes need Sonic Resonator, and Subnautica2Hub shows resonated deposits as the better yield.',
      },
      {
        title: 'What is Gold used for first?',
        body: 'The big early asks are Advanced Wiring Kit and System Chip progress, then Strong Acid paths and Thermal Plant planning. Subnautica2Hub currently lists six Gold-linked recipes.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2HeatTolerance, label: 'Heat Tolerance Guide' },
      { href: Routes.Subnautica2AngelComb, label: 'Angel Comb Guide' },
      { href: Routes.Subnautica2BloomBiofilm, label: 'Bloom Biofilm Guide' },
      {
        href: Routes.Subnautica2SonicResonator,
        label: 'Sonic Resonator Guide',
      },
      { href: Routes.Subnautica2SystemChip, label: 'System Chip Guide' },
      { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid Guide' },
      {
        href: Routes.Subnautica2AdvancedWiringKit,
        label: 'Advanced Wiring Kit Guide',
      },
      { href: Routes.Subnautica2GoldIngot, label: 'Gold Ingot Guide' },
      { href: Routes.Subnautica2BaseBuilding, label: 'Base Building Guide' },
      { href: Routes.Subnautica2Sulfur, label: 'Sulfur Location Guide' },
      { href: Routes.Subnautica2Silver, label: 'Silver Location Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 26, 2026 against PC Gamer, Subnautica2Hub, Subnautica2.gg, and Dexerto. Early Access route safety, recipe counts, and resource yields can change; verify the PDA and current map after patches.',
    cardKicker: 'Resource card',
    cardBody:
      'Volcanic vent route, Heat Tolerance gate, crashed colony ship farm, Sonic Resonator nodes, sulfur combo run, and Thermal Plant stock planning.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Resource guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Gold 位置指南 - 火山热泉路线和 Thermal Plant 准备',
      description:
        'Subnautica 2 中文 Gold 指南：整理 Lifepod 东方火山热泉路线、Heat Tolerance、坠毁殖民船采集点、Sonic Resonator 大矿点、Advanced Wiring Kit、Strong Acid 和 Thermal Plant 规划。',
    },
    eyebrow: 'Subnautica 2 资源路线',
    title: 'Subnautica 2 Gold 位置指南',
    description:
      'Gold 不是开局马上要刷的材料，但一旦电子件和热能供电开始要它，一趟随便捡几块通常不够。先拿 Heat Tolerance，再把热区跑图跑扎实。',
    quickLabel: '快速结论',
    quickAnswer:
      'PC Gamer 报道 Gold 位于 Lifepod 东方的火山热泉区域，尤其是 Lifepod 正东约 450 米、坠毁殖民船附近的岩石上。安全采集前需要 Heat Tolerance，较大的节点用 Sonic Resonator 更合适。Dexerto 指向 Cicada Wreck 附近的高密度采集点；Subnautica2Hub 则把 Gold 列在 Coral Gardens 和 Observatory Ruins，深度可到 500m，并关联 Advanced Wiring Kit、Strong Acid、Gold Ingot、Silver 转换和 Thermal Plant 配方。',
    fieldNotesTitle: 'Gold 路线笔记',
    fieldNotes: [
      {
        title: 'Gold 要做的事太多',
        body: '电子、电力和高级 kit 都会抢 Gold。前几块 Gold 更像路线货币，不是普通宝贝。',
      },
      {
        title: '不知道下个工作站前先别花',
        body: '随手花一块 Gold，可能卡住 Advanced Wiring Kit、ingot 或电力链。动用库存前，先写清下个配方。',
      },
      {
        title: '热区路线要专注',
        body: 'Gold 路线经常伴随热区或深度压力。进去只做一个目标，留够氧气再离开。',
      },
    ],
    routeChecklistTitle: '花 Gold 前',
    routeChecklist: [
      'Advanced Wiring Kit 需求已经检查。',
      'Gold Ingot 需求单独检查。',
      '电力链配方没有等同一块 Gold。',
      '路线还不能稳定重复时，至少留一块 raw Gold。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Gold 路线规划',
    routeSteps: [
      {
        title: '先拿 Heat Tolerance',
        body: 'PC Gamer 说火山热泉区域在没有 Heat Tolerance 前不适合安全采集。看到温度条、水色变橙，就别把持续伤害当小事。',
      },
      {
        title: '从 Lifepod 往正东方向走',
        body: '当前公开路线主要指向 Lifepod 东方火山区。PC Gamer 特别提到 Lifepod 正东约 450 米、坠毁殖民船周围岩石。',
      },
      {
        title: '用残骸当定位点',
        body: 'Dexerto 描述 Cicada Wreck 附近有比较密集的 Gold 点。这里很肥，但 PC Gamer 和 Dexerto 都提醒附近有大型捕食者巡逻。',
      },
      {
        title: '先拿小块，再敲大矿',
        body: 'PC Gamer 提到 Gold 有手捡小碎片、小型可敲矿块，以及需要 Sonic Resonator 的大节点。Subnautica2Hub 数据里，Sonic Resonator 敲大矿的收益也更稳定。',
      },
      {
        title: '同一趟顺手带 Sulfur',
        body: '当前资料里 Gold 和 Sulfur 都会接到 Strong Acid 路线，Dexerto 也提到同区有 Sulfur。如果背包够，热区一趟把两种都带回去。',
      },
      {
        title: '建 Thermal Plant 前先囤货',
        body: 'Subnautica2Hub 当前列出 Thermal Plant 每个需要 3 个 Gold。准备走热能供电前，先留几块库存，不然基地供电计划会卡得很难受。',
      },
    ],
    tableTitle: 'Gold 检查表',
    tableHeaders: ['需要', '确认什么'],
    tableRows: [
      ['解锁', '安全刷火山热泉前先拿 Heat Tolerance。'],
      ['路线', 'PC Gamer 指向 Lifepod 正东约 450m。'],
      ['地标', '坠毁殖民船 / Cicada Wreck 周围岩石。'],
      ['工具', '大型 Gold 节点需要 Sonic Resonator。'],
      [
        '主要用途',
        'Advanced Wiring Kit、Strong Acid、Gold Ingot、Silver 转换、Thermal Plant。',
      ],
    ],
    visualTitle: 'Gold 跑图',
    visualItems: [
      {
        label: '门槛',
        value: 'Heat',
        note: '没耐热别硬刷热区。',
      },
      {
        label: '采集',
        value: '450m E',
        note: '坠毁殖民船附近岩石。',
      },
      {
        label: '消耗',
        value: '供电',
        note: 'Thermal Plant 很吃 Gold。',
      },
    ],
    cautionTitle: 'Gold 不只是发光的电子材料',
    cautionBody:
      'Advanced Wiring Kit 是最明显的需求，但 Thermal Plant 会很快清空 Gold 库存。每次出发前想清楚：这趟是给电子件、Strong Acid，还是给基地供电。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Gold 在哪里？',
        body: 'PC Gamer 指向 Lifepod 东方火山热泉区域，尤其是正东约 450 米的坠毁殖民船附近。Dexerto 也特别提到 Cicada Wreck 区域。',
      },
      {
        title: 'Gold 需要 Heat Tolerance 吗？',
        body: '主要热区路线需要。PC Gamer 说进入火山热泉区域安全采集前，要先拿到 Heat Tolerance。',
      },
      {
        title: 'Gold 需要 Sonic Resonator 吗？',
        body: '不是每块都需要。PC Gamer 提到可以手捡小碎片、敲小矿块，但大节点需要 Sonic Resonator；Subnautica2Hub 的数据也显示大矿收益更好。',
      },
      {
        title: 'Gold 最先用来做什么？',
        body: '前期主要卡 Advanced Wiring Kit 和 System Chip 推进，后面会接 Strong Acid 路线和 Thermal Plant 供电规划。Subnautica2Hub 当前列出 6 个 Gold 相关配方。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2HeatTolerance, label: 'Heat Tolerance Guide' },
      { href: Routes.Subnautica2AngelComb, label: 'Angel Comb Guide' },
      { href: Routes.Subnautica2BloomBiofilm, label: 'Bloom Biofilm Guide' },
      { href: Routes.Subnautica2SonicResonator, label: 'Sonic Resonator 指南' },
      { href: Routes.Subnautica2SystemChip, label: 'System Chip 指南' },
      { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid 指南' },
      {
        href: Routes.Subnautica2AdvancedWiringKit,
        label: 'Advanced Wiring Kit 指南',
      },
      { href: Routes.Subnautica2GoldIngot, label: 'Gold Ingot 指南' },
      { href: Routes.Subnautica2BaseBuilding, label: '基地建造指南' },
      { href: Routes.Subnautica2Sulfur, label: 'Sulfur 位置指南' },
      { href: Routes.Subnautica2Silver, label: 'Silver 位置指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 26 日核对 PC Gamer、Subnautica2Hub、Subnautica2.gg 和 Dexerto。抢先体验阶段路线安全性、配方数量和资源收益都可能变化；更新后请以 PDA 和当前地图为准。',
    cardKicker: '资源卡',
    cardBody:
      '火山热泉路线、Heat Tolerance 门槛、坠毁殖民船采集点、Sonic Resonator 大矿、Sulfur 顺路采集和 Thermal Plant 库存规划。',
    cardTypeLabel: '类型',
    cardTypeValue: '资源指南',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = goldCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  goldCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Gold Location Guide',
      description:
        'Guide for Gold locations, volcanic vent farming, Heat Tolerance, crashed colony ship route, Sonic Resonator deposits, Advanced Wiring Kit, Strong Acid, and Thermal Plant planning.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = goldCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2Gold,
  });
}

export default async function GoldGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = goldCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={GemIcon}
      locale={locale}
      pathname={Routes.Subnautica2Gold}
      sources={sharedSources}
    />
  );
}
