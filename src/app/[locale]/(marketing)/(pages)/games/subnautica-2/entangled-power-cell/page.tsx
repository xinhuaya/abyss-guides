import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { BatteryChargingIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type EntangledPowerCellCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-27';
const UPDATED_AT = '2026-05-28';

const sharedSources = [
  {
    href: 'https://subnautica2.gg/blueprints/entangled-power-cell',
    label: 'Subnautica2.gg Entangled Power Cell blueprint',
  },
  {
    href: 'https://subnautica2.guide/wikis/entangled-power-cell',
    label: 'Subnautica 2 Guide Entangled Power Cell page',
  },
  {
    href: 'https://wikily.gg/subnautica-2/items/entangled-power-cell/',
    label: 'Wikily Entangled Power Cell item page',
  },
  {
    href: 'https://nerdschalk.com/subnautica-2-how-to-find-entangled-power-cell-blueprint-exact-fragment-locations-and-crafting-guide/',
    label: 'Nerdschalk Entangled Power Cell fragment guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-strong-acid-necrolei-cyst-location/',
    label: 'PC Gamer Strong Acid guide',
  },
];

const entangledPowerCellCopy: Record<string, EntangledPowerCellCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Entangled Power Cell Guide - Recipe, Fragments, and Rare Materials',
      description:
        'A practical Subnautica 2 Entangled Power Cell guide covering Conduit Crystal x1, Strong Acid x1, Gold Ingot x1, Troilite x1, fragment scans, Fabricator data, and late-route planning.',
    },
    eyebrow: 'Subnautica 2 advanced power',
    title: 'Subnautica 2 Entangled Power Cell Guide',
    description:
      'Entangled Power Cell is not a casual battery craft. It pulls from four awkward chains at once, so the smart move is to unlock it, mark the recipe, and only spend the materials when the next power step is already visible.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current public data agrees that Entangled Power Cell uses Conduit Crystal x1, Strong Acid x1, Gold Ingot x1, and Troilite x1 at the Fabricator or Fabrication Station. Wikily lists it as locked behind scans and currently not used in another recipe, while Subnautica 2 Guide and Nerdschalk describe fragment scanning near the Karakorum Power Plant or alien-structure route. Treat it as late-route power prep and recheck your PDA after patches.',
    fieldNotesTitle: 'Field notes for rare power',
    fieldNotes: [
      {
        title: 'This is not a better spare battery',
        body: 'Entangled Power Cell pulls from expensive routes. Treat it as a named upgrade material, not something you craft because the locker happens to allow it.',
      },
      {
        title: 'Protect Gold Ingot and Troilite',
        body: 'Those two inputs can quietly block other late-chain crafts. Check what else is waiting before you commit them to power.',
      },
      {
        title: 'Keep it away from normal Power Cell prep',
        body: 'Normal vehicle power and entangled power should sit beside each other, not in the same pile. The ingredients are too different to count casually.',
      },
    ],
    routeChecklistTitle: 'Before crafting Entangled Power Cell',
    routeChecklist: [
      'The recipe that needs Entangled Power Cell is visible.',
      'Gold Ingot and Troilite are not needed by a higher-priority craft.',
      'Advanced Battery route is already stable.',
      'Normal Power Cell stock remains separate.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Entangled Power Cell route',
    routeSteps: [
      {
        title: 'Unlock it before planning the craft',
        body: 'Public guides point to fragment scanning rather than a basic pickup unlock. Nerdschalk says two fragments unlock the blueprint, while Subnautica 2 Guide lists one fragment on its current page. Check your PDA scan progress before hauling rare materials home.',
      },
      {
        title: 'Do not spend the first Troilite blindly',
        body: 'Troilite is still a late-route material. If Mangalloy Ingot, Metal Farm progress, or another power recipe is also waiting, keep one piece tagged instead of turning it into a cell just because the button is available.',
      },
      {
        title: 'Use Gold Ingot only when raw Gold is covered',
        body: 'Gold Ingot costs processed Gold, while raw Gold still competes with electronics and thermal-power planning. Keep a small raw reserve before committing the ingot.',
      },
      {
        title: 'Bring Strong Acid from a known route',
        body: 'PC Gamer ties Strong Acid to Processor work and Necrolei Cyst collection, with a later sulfur-and-gold alternative. This is not a material you want to remember after you have already reached the deep route.',
      },
      {
        title: 'Check station wording in your save',
        body: 'Wikily and Subnautica 2 Guide list Fabricator. Some database mirrors use Fabrication Station wording for advanced crafts. The ingredients agree; the safest answer is still the current PDA.',
      },
      {
        title: 'Craft for a visible power goal',
        body: 'Because listed uses are still patch-sensitive, leave Conduit Crystal, Strong Acid, Gold Ingot, and Troilite separate until a vehicle, charger, or base-power plan clearly asks for the cell.',
      },
      {
        title: 'Keep it apart from Advanced Battery',
        body: 'Advanced Battery is usually the better first upgrade for handheld tools. Entangled Power Cell belongs in the late-power locker, beside Troilite and Gold Ingot, not in the same pile as charger rotation parts.',
      },
    ],
    tableTitle: 'Entangled Power Cell checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      [
        'Conduit Crystal x1',
        'Late-route crystal material; do not spend your only one casually.',
      ],
      ['Strong Acid x1', 'Processor route, commonly tied to Necrolei Cysts.'],
      [
        'Gold Ingot x1',
        'Costs processed Gold, so keep raw Gold for electronics first.',
      ],
      ['Troilite x1', 'Late-game material with other rare crafting pressure.'],
      [
        'Fragment scan',
        'Public pages disagree on scan count; verify PDA progress.',
      ],
      [
        'Use case',
        'Patch-sensitive. Craft when a clear power goal is waiting.',
      ],
      [
        'Battery split',
        'Keep it separate from Advanced Battery and normal Power Cell materials.',
      ],
    ],
    visualTitle: 'Advanced power card',
    visualItems: [
      {
        label: 'Crystal',
        value: '1',
        note: 'Conduit Crystal starts the high-end chain.',
      },
      {
        label: 'Acid',
        value: '1',
        note: 'Strong Acid should be routed before the deep trip.',
      },
      {
        label: 'Metal',
        value: '2',
        note: 'Gold Ingot and Troilite both compete with late crafts.',
      },
    ],
    cautionTitle: 'This craft can empty a late-game locker fast',
    cautionBody:
      'The dangerous part is not the recipe size. It is that every ingredient belongs to a different plan. If the next recipe is not visible, the loose parts are worth more than one finished Entangled Power Cell.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you make Entangled Power Cell in Subnautica 2?',
        body: 'Current public pages agree on Conduit Crystal x1, Strong Acid x1, Gold Ingot x1, and Troilite x1 at the Fabricator or Fabrication Station.',
      },
      {
        title: 'How do you unlock Entangled Power Cell?',
        body: 'It is tied to fragment scanning. Nerdschalk reports two fragments, Wikily lists two fragments to scan, and Subnautica 2 Guide currently lists one fragment, so check the PDA progress in your build.',
      },
      {
        title: 'Is Entangled Power Cell used in another recipe?',
        body: 'Wikily currently marks it as not used, while other public pages frame it as higher-capacity power prep. Because Early Access data changes quickly, craft it for a visible need rather than stockpiling it early.',
      },
      {
        title: 'Which ingredient blocks this craft most often?',
        body: 'Troilite and Conduit Crystal are the easiest to underestimate. Strong Acid and Gold Ingot also need planned routes, but they are easier to replace once your base loop is stable.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal Guide',
      },
      { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid Guide' },
      { href: Routes.Subnautica2NecroleiCyst, label: 'Necrolei Cyst Guide' },
      { href: Routes.Subnautica2GoldIngot, label: 'Gold Ingot Guide' },
      { href: Routes.Subnautica2Troilite, label: 'Troilite Location Guide' },
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell Guide' },
      {
        href: Routes.Subnautica2AdvancedBattery,
        label: 'Advanced Battery Guide',
      },
      {
        href: Routes.Subnautica2BatteryTerminal,
        label: 'Battery Terminal Guide',
      },
      {
        href: Routes.Subnautica2KarakorumPowerPlant,
        label: 'Karakorum Power Plant Route',
      },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 27, 2026 against Subnautica2.gg, Subnautica 2 Guide, Wikily, Nerdschalk, and PC Gamer. Subnautica 2 is in Early Access, so scan counts, station wording, and listed uses can change after patches.',
    cardKicker: 'Power material card',
    cardBody:
      'Conduit Crystal x1, Strong Acid x1, Gold Ingot x1, Troilite x1, fragment scanning, Fabricator wording, and late-route power planning.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Advanced power material',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Entangled Power Cell 指南 - 配方、碎片扫描与稀有材料',
      description:
        'Subnautica 2 中文 Entangled Power Cell 指南：整理 Conduit Crystal x1、Strong Acid x1、Gold Ingot x1、Troilite x1、碎片扫描、Fabricator 数据和后期路线规划。',
    },
    eyebrow: 'Subnautica 2 高级供电',
    title: 'Subnautica 2 Entangled Power Cell 指南',
    description:
      'Entangled Power Cell 不是随手做的大号电池。它会一次吃掉四条麻烦路线的材料，所以更稳的做法是先解锁、记配方，等下一个供电目标明确后再合成。',
    quickLabel: '快速结论',
    quickAnswer:
      '当前公开资料基本一致：Entangled Power Cell 使用 Conduit Crystal x1、Strong Acid x1、Gold Ingot x1、Troilite x1，在 Fabricator 或 Fabrication Station 制作。Wikily 把它标成扫描解锁，并显示当前不再进入其他配方；Subnautica 2 Guide 和 Nerdschalk 则把碎片路线指向 Karakorum Power Plant 或 alien structure 附近。把它当成后期供电准备，补丁后要回 PDA 复查。',
    fieldNotesTitle: 'Entangled Power Cell 稀有电力笔记',
    fieldNotes: [
      {
        title: '这不是更高级的备用电池',
        body: 'Entangled Power Cell 会吃很贵的材料。把它当成明确升级材料，不要因为箱子里刚好够就随手做。',
      },
      {
        title: '保护 Gold Ingot 和 Troilite',
        body: '这两种输入也会卡住别的后期制作。投入电力路线前，先看有没有更优先的配方在等。',
      },
      {
        title: '和普通 Power Cell 分开放',
        body: '普通载具电力和 entangled 电力最好相邻但不混放。材料差太多，混在一起很容易算错。',
      },
    ],
    routeChecklistTitle: '制作 Entangled Power Cell 前',
    routeChecklist: [
      '需要 Entangled Power Cell 的配方已经显示出来。',
      'Gold Ingot 和 Troilite 没有被更高优先级配方占用。',
      'Advanced Battery 路线已经稳定。',
      '普通 Power Cell 库存单独放。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Entangled Power Cell 路线',
    routeSteps: [
      {
        title: '先解锁，再考虑合成',
        body: '公开攻略都更偏向碎片扫描解锁，而不是捡到材料就自动出现。Nerdschalk 写的是扫描 2 个碎片，Subnautica 2 Guide 当前页面写 1 个碎片。搬稀有材料回家之前，先看 PDA 里的扫描进度。',
      },
      {
        title: '不要随便花掉第一块 Troilite',
        body: 'Troilite 仍然是后期路线材料。如果 Mangalloy Ingot、Metal Farm 或其他供电配方也在等它，先给 Troilite 做标记，别只因为按钮亮了就合成。',
      },
      {
        title: 'Gold Ingot 要在 raw Gold 够用后再做',
        body: 'Gold Ingot 会消耗加工后的 Gold，而原始 Gold 还会和电子件、热能供电路线竞争。先留一小部分 raw Gold，再把 ingot 放进这条链。',
      },
      {
        title: 'Strong Acid 要按固定路线拿',
        body: 'PC Gamer 把 Strong Acid 和 Processor、Necrolei Cyst 采集放在一起，也提到后期有 sulfur + gold 的替代路线。这个材料不要等到深区跑完才想起来缺。',
      },
      {
        title: '制作台名称以存档 PDA 为准',
        body: 'Wikily 和 Subnautica 2 Guide 写的是 Fabricator，一些数据库镜像会把高级制作写成 Fabrication Station。材料清单一致；抢先体验阶段，最终还是看你当前版本的 PDA。',
      },
      {
        title: '只为明确供电目标合成',
        body: '因为用途列表仍然很容易随补丁变化，最好让 Conduit Crystal、Strong Acid、Gold Ingot 和 Troilite 先分开存着。等载具、充电器或基地供电计划明确要它时再做。',
      },
    ],
    tableTitle: 'Entangled Power Cell 检查表',
    tableHeaders: ['需要什么', '确认什么'],
    tableRows: [
      ['Conduit Crystal x1', '后期晶体材料，不要轻易花掉唯一的一块。'],
      ['Strong Acid x1', 'Processor 路线，常见来源和 Necrolei Cysts 有关。'],
      ['Gold Ingot x1', '会消耗加工 Gold，先给电子件留 raw Gold。'],
      ['Troilite x1', '后期材料，会和其他稀有制作互相竞争。'],
      ['碎片扫描', '公开页面对数量有差异，以 PDA 进度为准。'],
      ['用途', '补丁敏感。等明确供电目标出现后再合成。'],
    ],
    visualTitle: '高级供电卡',
    visualItems: [
      {
        label: '晶体',
        value: '1',
        note: 'Conduit Crystal 是高阶链条的起点。',
      },
      {
        label: '强酸',
        value: '1',
        note: 'Strong Acid 最好在深区前就规划好。',
      },
      {
        label: '金属',
        value: '2',
        note: 'Gold Ingot 和 Troilite 都会被后期配方抢。',
      },
    ],
    cautionTitle: '这个配方很容易掏空后期储物箱',
    cautionBody:
      '危险点不在材料数量，而是每个材料都属于不同计划。下一个配方还没出现时，分开的材料通常比一个成品 Entangled Power Cell 更灵活。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Entangled Power Cell 怎么做？',
        body: '当前公开页面基本一致：Conduit Crystal x1、Strong Acid x1、Gold Ingot x1、Troilite x1，在 Fabricator 或 Fabrication Station 制作。',
      },
      {
        title: 'Entangled Power Cell 怎么解锁？',
        body: '它和碎片扫描有关。Nerdschalk 写 2 个碎片，Wikily 也列出需要扫描 2 个碎片，Subnautica 2 Guide 当前页面写 1 个碎片，所以以你当前版本的 PDA 进度为准。',
      },
      {
        title: 'Entangled Power Cell 现在会进其他配方吗？',
        body: 'Wikily 当前标记为 Not used，其他公开页面更强调它是更高容量的供电准备。抢先体验数据变化很快，最好只在有明确需求时合成。',
      },
      {
        title: '哪个材料最容易卡住？',
        body: 'Troilite 和 Conduit Crystal 最容易被低估。Strong Acid 和 Gold Ingot 也需要规划，但基地循环稳定后更容易补。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2ConduitCrystal, label: 'Conduit Crystal 指南' },
      { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid 指南' },
      { href: Routes.Subnautica2NecroleiCyst, label: 'Necrolei Cyst 指南' },
      { href: Routes.Subnautica2GoldIngot, label: 'Gold Ingot 指南' },
      { href: Routes.Subnautica2Troilite, label: 'Troilite 位置指南' },
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell 指南' },
      {
        href: Routes.Subnautica2AdvancedBattery,
        label: 'Advanced Battery 指南',
      },
      {
        href: Routes.Subnautica2KarakorumPowerPlant,
        label: 'Karakorum Power Plant 路线',
      },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 27 日核对 Subnautica2.gg、Subnautica 2 Guide、Wikily、Nerdschalk 和 PC Gamer。Subnautica 2 仍处于抢先体验阶段，碎片数量、制作台名称和用途列表都可能随补丁变化。',
    cardKicker: '供电材料卡',
    cardBody:
      'Conduit Crystal x1、Strong Acid x1、Gold Ingot x1、Troilite x1、碎片扫描、Fabricator 写法和后期供电规划。',
    cardTypeLabel: '类型',
    cardTypeValue: '高级供电材料',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = entangledPowerCellCopy.en;

entangledPowerCellCopy.zh = {
  ...entangledPowerCellCopy.zh,
  quickAnswer:
    '当前公开资料基本一致：Entangled Power Cell 使用 Conduit Crystal x1、Strong Acid x1、Gold Ingot x1、Troilite x1，在 Fabricator 或 Fabrication Station 制作。Wikily 把它标成扫描解锁，并显示当前不再进入其他配方；Subnautica 2 Guide 和 Nerdschalk 则把碎片路线指向 Karakorum Power Plant 或 alien structure 附近。把它当成后期供电准备，和 Advanced Battery、普通 Power Cell 的材料分开存，补丁后再回 PDA 复查。',
  routeSteps: [
    ...entangledPowerCellCopy.zh.routeSteps,
    {
      title: '和 Advanced Battery 分开规划',
      body: 'Advanced Battery 更像手持工具的第一轮供电升级。Entangled Power Cell 应该放进后期供电箱，和 Troilite、Gold Ingot 这些材料在一起，不要和普通充电轮换材料混成一堆。',
    },
  ],
  tableRows: [
    ...entangledPowerCellCopy.zh.tableRows,
    ['电池分流', '和 Advanced Battery、普通 Power Cell 的材料分开收纳。'],
  ],
  related: [
    { href: Routes.Subnautica2ConduitCrystal, label: 'Conduit Crystal 指南' },
    { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid 指南' },
    { href: Routes.Subnautica2GoldIngot, label: 'Gold Ingot 指南' },
    { href: Routes.Subnautica2Troilite, label: 'Troilite 位置指南' },
    { href: Routes.Subnautica2PowerCell, label: 'Power Cell 指南' },
    { href: Routes.Subnautica2AdvancedBattery, label: 'Advanced Battery 指南' },
    { href: Routes.Subnautica2BatteryTerminal, label: 'Battery Terminal 指南' },
    {
      href: Routes.Subnautica2KarakorumPowerPlant,
      label: 'Karakorum Power Plant 路线',
    },
    { href: Routes.Subnautica2Crafting, label: '制作指南' },
  ],
  sourceBody:
    '2026 年 5 月 27 日核对 Subnautica2.gg、Subnautica 2 Guide、Wikily、Nerdschalk 和 PC Gamer。Subnautica 2 仍处于抢先体验阶段，碎片数量、制作台名称和用途列表都可能随补丁变化。',
};

entangledPowerCellCopy.ja = {
  ...fallbackCopy,
  metadata: {
    title: 'Subnautica 2 Entangled Power Cell Guide',
    description:
      'Guide for Entangled Power Cell recipe, fragment scans, Conduit Crystal, Strong Acid, Gold Ingot, Troilite, Advanced Battery split, and late-route power planning.',
  },
  sourceBody:
    'Checked May 27, 2026 against Subnautica2.gg, Subnautica 2 Guide, Wikily, Nerdschalk, and PC Gamer. Early Access scan counts, station wording, and listed uses can change.',
};

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  if (entangledPowerCellCopy[locale]) {
    continue;
  }

  entangledPowerCellCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Entangled Power Cell Guide',
      description:
        'Guide for Entangled Power Cell recipe, fragment scans, Conduit Crystal, Strong Acid, Gold Ingot, Troilite, and late-route power planning.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = entangledPowerCellCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2EntangledPowerCell,
  });
}

export default async function EntangledPowerCellGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = entangledPowerCellCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={BatteryChargingIcon}
      locale={locale}
      pathname={Routes.Subnautica2EntangledPowerCell}
      sources={sharedSources}
    />
  );
}
