import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { PanelsTopLeftIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type GlassCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-29';

const sharedSources = [
  {
    href: 'https://www.dexerto.com/wikis/subnautica-2/resources/glass/',
    label: 'Dexerto Glass resource guide',
  },
  {
    href: 'https://subnautica2hub.com/resources/glass',
    label: 'Subnautica2Hub Glass resource page',
  },
  {
    href: 'https://subnautica2.gg/items/glass',
    label: 'Subnautica2.gg Glass item page',
  },
  {
    href: 'https://subnautica2-wiki.com/en/items/glass',
    label: 'Subnautica 2 Wiki Glass item page',
  },
];

const glassCopy: Record<string, GlassCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Glass Recipe Guide - Quartz, Salt, Habitat Builder, and Engine Efficiency',
      description:
        'A practical Subnautica 2 Glass guide covering Quartz x2, the Salt alternate recipe, Fabricator, Processor, Habitat Builder, Enameled Glass, Tadpole, Engine Efficiency, and storage planning.',
    },
    eyebrow: 'Subnautica 2 crafting route',
    title: 'Subnautica 2 Glass Recipe Guide',
    description:
      'Glass is not rare, but it is annoyingly easy to spend before you notice. Make enough for the Habitat Builder, keep a few panes for Scanner Station and vehicle chains, and do not burn every Quartz run on decor.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Dexerto and Subnautica 2 Wiki list the standard Glass recipe as Quartz x2 at the Fabricator. Both also list an alternate Glass-from-Salt recipe using Salt x2 at the Processor, with Dexerto noting that the Quartz recipe unlocks after picking up Quartz and the Salt version unlocks through Processor Construct Data. Subnautica2Hub lists Glass as a crafted resource used in equipment, tools, base modules, and habitat structures, including Engine Efficiency, Enameled Glass, Tadpole, Habitat Builder, Biobed, Dining Table, Vehicle Fabricator, and Interior Door. In a real save, keep the first panes for Habitat Builder and Scanner Station work before you start window shopping.',
    fieldNotesTitle: 'Field notes for the first panes',
    fieldNotes: [
      {
        title: 'Glass is not decoration yet',
        body: 'The first few panes should unlock routes and stations before they make the base pretty. Habitat Builder, Scanner Station, and Enameled Glass chains all matter more than a nice view.',
      },
      {
        title: 'Quartz glass is the simple default',
        body: 'Salt can work through the Processor route, but Quartz is the easier early habit. Keep the Salt recipe in mind when Quartz is under pressure from electronics.',
      },
      {
        title: 'Label one window box later',
        body: 'Once tools and stations are covered, then make a dedicated window stack. Until then, loose Glass should live near upgrades, not base decoration plans.',
      },
    ],
    routeChecklistTitle: 'Before crafting Glass',
    routeChecklist: [
      'Protect enough Quartz for Scanner, System Chip, and module work.',
      'Make the first Glass for Habitat Builder or Scanner Station needs.',
      'Use Salt-to-Glass only after Processor access is clear in your save.',
      'Hold two Glass back if Enameled Glass is next.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Glass crafting plan',
    routeSteps: [
      {
        title: 'Make the first pane from Quartz',
        body: 'Dexerto lists the basic Fabricator recipe as Glass from Quartz x2. Pick Quartz first so the recipe appears, then craft only what the next build actually needs.',
      },
      {
        title: 'Save Salt for the Processor option',
        body: 'Dexerto and Subnautica 2 Wiki both list the alternate Glass-from-Salt recipe as Salt x2 at the Processor. Use it when Quartz is being saved for electronics or Sonic Resonator work.',
      },
      {
        title: 'Craft Habitat Builder before decorating',
        body: 'Subnautica2Hub and Subnautica2.gg both connect Glass to Habitat Builder. That unlock is more important than a pretty base window, so build the tool first.',
      },
      {
        title: 'Keep a base-tech stack',
        body: 'Once the Habitat Builder is handled, put a few panes aside for Scanner Station and vehicle-fabricator steps. That little stack saves you from stripping every Quartz dome twice.',
      },
      {
        title: 'Hold extra Glass for chain recipes',
        body: 'Public item pages list Glass in Enameled Glass, Engine Efficiency, Tadpole, Vehicle Fabricator, and several base pieces. A small reserve prevents a lot of backtracking.',
      },
      {
        title: 'Split Quartz, Salt, and finished Glass',
        body: 'Quartz can become electronics, Salt can become other crafted materials, and Glass gets swallowed by base pieces. Three small stacks are easier to manage than one messy locker.',
      },
    ],
    tableTitle: 'Glass checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      ['Standard recipe', 'Quartz x2 at the Fabricator.'],
      ['Alternate recipe', 'Salt x2 at the Processor.'],
      ['Unlock', 'Dexerto says Quartz pickup unlocks the standard recipe.'],
      [
        'Early priority',
        'Habitat Builder and Enameled Glass before cosmetic base pieces.',
      ],
      [
        'Recipe pressure',
        'Subnautica2Hub lists Glass across equipment, tools, modules, and structures.',
      ],
      [
        'Base chain',
        'Habitat Builder first, then Scanner Station and vehicle pieces.',
      ],
    ],
    visualTitle: 'Glass split',
    visualItems: [
      {
        label: 'Quartz',
        value: '2x',
        note: 'Fast Fabricator pane.',
      },
      {
        label: 'Salt',
        value: '2x',
        note: 'Processor alternate route.',
      },
      {
        label: 'Reserve',
        value: '3-5',
        note: 'Tools, Scanner Station, vehicle chain.',
      },
    ],
    cautionTitle: 'Do not craft Glass just because you can',
    cautionBody:
      'It is tempting to convert Quartz the moment a locker looks full. Wait. Quartz also feeds electronics routes, and Glass has enough chain uses that casual crafting can quietly block the next real upgrade.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you make Glass in Subnautica 2?',
        body: 'Dexerto and Subnautica 2 Wiki list Glass as Quartz x2 at the Fabricator.',
      },
      {
        title: 'Can you make Glass from Salt?',
        body: 'Yes. Dexerto and Subnautica 2 Wiki list an alternate Processor recipe using Salt x2.',
      },
      {
        title: 'When does the Glass recipe unlock?',
        body: 'Dexerto says the standard recipe unlocks when you pick up Quartz for the first time, while the Salt recipe comes from Processor Construct Data.',
      },
      {
        title: 'What should you save Glass for first?',
        body: 'Prioritize Habitat Builder and chain recipes such as Enameled Glass, Engine Efficiency, Tadpole, and Vehicle Fabricator before cosmetic base pieces.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Quartz, label: 'Quartz Location Guide' },
      { href: Routes.Subnautica2Salt, label: 'Salt Location Guide' },
      {
        href: Routes.Subnautica2HabitatBuilder,
        label: 'Habitat Builder Guide',
      },
      { href: Routes.Subnautica2EnameledGlass, label: 'Enameled Glass Guide' },
      {
        href: Routes.Subnautica2ScannerStation,
        label: 'Scanner Station Guide',
      },
      {
        href: Routes.Subnautica2VehicleFabricator,
        label: 'Vehicle Fabricator Guide',
      },
      {
        href: Routes.Subnautica2EngineEfficiency,
        label: 'Engine Efficiency Guide',
      },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 28, 2026 against Dexerto, Subnautica2Hub, Subnautica2.gg, and Subnautica 2 Wiki. Early Access recipes, unlock data, and use lists can change, so recheck the Fabricator, Processor, and PDA after patches.',
    cardKicker: 'Crafting card',
    cardBody:
      'Quartz x2, Salt x2 alternate recipe, Fabricator, Processor, Habitat Builder, Enameled Glass, Tadpole, Engine Efficiency, and storage planning.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Crafting guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Glass 配方指南 - Quartz、Salt、Habitat Builder 和 Engine Efficiency',
      description:
        'Subnautica 2 中文 Glass 指南：整理 Quartz x2、Salt 替代配方、Fabricator、Processor、Habitat Builder、Enameled Glass、Tadpole、Engine Efficiency 和收纳规划。',
    },
    eyebrow: 'Subnautica 2 制作路线',
    title: 'Subnautica 2 Glass 配方指南',
    description:
      'Glass 不算稀有，但特别容易在你没注意时被花光。先保证 Habitat Builder，再留几块给 Scanner Station 和载具链，别把每次 Quartz 路线都拿去装饰基地。',
    quickLabel: '快速结论',
    quickAnswer:
      'Dexerto 和 Subnautica 2 Wiki 都把标准 Glass 配方列为 Fabricator 中的 Quartz x2。它们也列出替代配方：在 Processor 中用 Salt x2 制作 Glass；Dexerto 还说明，标准配方会在第一次捡起 Quartz 后解锁，Salt 版本则来自 Processor Construct Data。Subnautica2Hub 把 Glass 列为制作资源，用在装备、工具、基地模块和舱室结构里，包括 Engine Efficiency、Enameled Glass、Tadpole、Habitat Builder、Biobed、Dining Table、Vehicle Fabricator 和 Interior Door。实际开荒时，第一批 Glass 先给 Habitat Builder 和 Scanner Station，不要一上来全拿去做窗户。',
    fieldNotesTitle: '第一批 Glass 笔记',
    fieldNotes: [
      {
        title: '现在还不是装修材料',
        body: '前几块 Glass 应该先服务路线和工作站，而不是让基地好看。Habitat Builder、Scanner Station 和 Enameled Glass 链条都比窗景更重要。',
      },
      {
        title: 'Quartz 配方更适合早期习惯',
        body: 'Salt 通过 Processor 也能做 Glass，但早期更顺手的还是 Quartz。等电子材料也在抢 Quartz 时，再考虑 Salt 版本。',
      },
      {
        title: '晚一点再建窗户箱',
        body: '工具和工作站覆盖之后，再专门留一箱做窗户。那之前，Glass 应该靠近升级材料，而不是装饰计划。',
      },
    ],
    routeChecklistTitle: '制作 Glass 前',
    routeChecklist: [
      '先保护 Scanner、System Chip 和模块需要的 Quartz。',
      '第一批 Glass 优先给 Habitat Builder 或 Scanner Station。',
      'Salt 转 Glass 要等你存档里 Processor 路线明确后再用。',
      '如果下一步要做 Enameled Glass，提前留两块 Glass。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Glass 制作规划',
    routeSteps: [
      {
        title: '第一块先用 Quartz 做',
        body: 'Dexerto 把基础 Fabricator 配方列为 Quartz x2 制作 Glass。先捡 Quartz 让配方出现，再按下一步真正需要的数量制作。',
      },
      {
        title: 'Processor 路线留给 Salt',
        body: 'Dexerto 和 Subnautica 2 Wiki 都列出 Salt x2 在 Processor 中制作 Glass 的替代配方。当 Quartz 要留给电子材料或 Sonic Resonator 路线时，这个配方很有用。',
      },
      {
        title: '装饰基地前先做 Habitat Builder',
        body: 'Subnautica2Hub 和 Subnautica2.gg 都把 Glass 连接到 Habitat Builder。这个工具优先级比好看的窗户更高，先做工具。',
      },
      {
        title: '留一份基地科技库存',
        body: 'Habitat Builder 做完后，再给 Scanner Station 和载具制作链留几块 Glass。这个小库存能省掉很多重复刷 Quartz 的时间。',
      },
      {
        title: '额外 Glass 留给链式配方',
        body: '公开物品页面列出 Glass 会进入 Enameled Glass、Engine Efficiency、Tadpole、Vehicle Fabricator 和多个基地部件。留一点库存能少跑很多回头路。',
      },
      {
        title: 'Quartz、Salt、成品 Glass 分开收',
        body: 'Quartz 还能进电子路线，Salt 也会进其他材料，Glass 又会被基地部件吃掉。三个小堆比一个混乱箱子更好管。',
      },
    ],
    tableTitle: 'Glass 检查表',
    tableHeaders: ['需要', '确认什么'],
    tableRows: [
      ['标准配方', 'Fabricator 中 Quartz x2。'],
      ['替代配方', 'Processor 中 Salt x2。'],
      ['解锁', 'Dexerto 说捡起 Quartz 会解锁标准配方。'],
      ['早期优先级', 'Habitat Builder 和 Enameled Glass 先于装饰性基地部件。'],
      ['配方压力', 'Subnautica2Hub 显示 Glass 会进入装备、工具、模块和结构。'],
      ['基地链', '先 Habitat Builder，再 Scanner Station 和载具部件。'],
    ],
    visualTitle: 'Glass 分配',
    visualItems: [
      {
        label: 'Quartz',
        value: '2x',
        note: '最快的 Fabricator 路线。',
      },
      {
        label: 'Salt',
        value: '2x',
        note: 'Processor 替代路线。',
      },
      {
        label: '预留',
        value: '3-5',
        note: '工具、Scanner Station、载具链。',
      },
    ],
    cautionTitle: '不要因为能做就一直做 Glass',
    cautionBody:
      '看到 Quartz 箱子满了，很容易顺手全压成 Glass。先等等。Quartz 也会进入电子材料路线，而 Glass 的链式用途不少，随手制作很可能悄悄卡住下一个真正的升级。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Glass 怎么做？',
        body: 'Dexerto 和 Subnautica 2 Wiki 都列出 Glass 的标准配方：Fabricator 中使用 Quartz x2。',
      },
      {
        title: 'Glass 能用 Salt 做吗？',
        body: '可以。Dexerto 和 Subnautica 2 Wiki 都列出 Processor 替代配方：Salt x2。',
      },
      {
        title: 'Glass 配方什么时候解锁？',
        body: 'Dexerto 说第一次捡起 Quartz 会解锁标准配方；Salt 版本来自 Processor Construct Data。',
      },
      {
        title: 'Glass 前期应该先留给什么？',
        body: '优先留给 Habitat Builder，以及 Enameled Glass、Engine Efficiency、Tadpole、Vehicle Fabricator 这类链式配方，再考虑装饰性基地部件。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Quartz, label: 'Quartz 位置指南' },
      { href: Routes.Subnautica2Salt, label: 'Salt 位置指南' },
      { href: Routes.Subnautica2HabitatBuilder, label: 'Habitat Builder 指南' },
      { href: Routes.Subnautica2EnameledGlass, label: 'Enameled Glass 指南' },
      { href: Routes.Subnautica2ScannerStation, label: 'Scanner Station 指南' },
      {
        href: Routes.Subnautica2VehicleFabricator,
        label: 'Vehicle Fabricator 指南',
      },
      {
        href: Routes.Subnautica2EngineEfficiency,
        label: 'Engine Efficiency 指南',
      },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 28 日核对 Dexerto、Subnautica2Hub、Subnautica2.gg 和 Subnautica 2 Wiki。抢先体验阶段配方、解锁数据和用途列表都可能变化；更新后请重新检查 Fabricator、Processor 和 PDA。',
    cardKicker: '制作卡',
    cardBody:
      'Quartz x2、Salt x2 替代配方、Fabricator、Processor、Habitat Builder、Enameled Glass、Tadpole、Engine Efficiency 和收纳规划。',
    cardTypeLabel: '类型',
    cardTypeValue: '制作指南',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = glassCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  glassCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Glass Recipe Guide',
      description:
        'Guide for the Glass recipe, Quartz x2, Salt x2 alternate recipe, Fabricator, Processor, Habitat Builder, Enameled Glass, Tadpole, and Engine Efficiency.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = glassCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2Glass,
  });
}

export default async function GlassGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = glassCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={PanelsTopLeftIcon}
      locale={locale}
      pathname={Routes.Subnautica2Glass}
      sources={sharedSources}
    />
  );
}
