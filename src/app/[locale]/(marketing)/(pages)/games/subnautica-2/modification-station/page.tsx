import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { WrenchIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type ModificationStationCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-25';
const UPDATED_AT = '2026-05-25';

const sharedSources = [
  {
    href: 'https://subnautica2.gg/blueprints/modification-station/',
    label: 'Subnautica2.gg Modification Station blueprint',
  },
  {
    href: 'https://wand.com/wikis/subnautica-2/blueprints/modification-station',
    label: 'Wand Modification Station blueprint',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-tadpole-scan-locations/',
    label: 'PC Gamer Tadpole and Modification Station route',
  },
  {
    href: 'https://www.keengamer.com/articles/guides/how-to-get-the-modification-station-in-subnautica-2/',
    label: 'KeenGamer Modification Station guide',
  },
];

const modificationStationCopy: Record<string, ModificationStationCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Modification Station Guide - Unlock, Recipe, and Upgrade Use',
      description:
        'A practical Subnautica 2 Modification Station guide covering scan and Data Box unlocks, Titanium, Celestine, Copper, Alien Ruins route notes, and Tadpole upgrade crafting.',
    },
    eyebrow: 'Subnautica 2 upgrade station',
    title: 'Subnautica 2 Modification Station Guide',
    description:
      'Modification Station is the point where a Tadpole stops being just transport and starts becoming a platform. Build it once the Alien Ruins route is stable, then use it for the upgrades that actually open new water.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current Subnautica2.gg data lists Modification Station as a locked Builder Tool interior facility made with Titanium x2, Celestine x2, and Copper x2. The same page says it can unlock by scanning a Modification Station or opening a Data Box. PC Gamer places a working route in the Alien Ruins Research Base after the Tadpole Pens section.',
    contentsLabel: 'Contents',
    routeTitle: 'Modification Station unlock plan',
    routeSteps: [
      {
        title: 'Reach the Alien Ruins route safely',
        body: 'PC Gamer describes finding a Modification Station in the Research Base after crossing toward Alien Ruins. Bring the Tadpole, repair safety, and enough depth margin before treating this as a quick errand.',
      },
      {
        title: 'Scan first, Data Box second',
        body: 'Subnautica2.gg lists two unlock paths: scan the station or open a Data Box. If one route does not trigger in your save, check the other before farming the build recipe.',
      },
      {
        title: 'Prepare Celestine before the craft',
        body: 'The recipe uses Celestine x2, which is the part that ties this station to deeper routes. Do not assume common base storage will already have it.',
      },
      {
        title: 'Keep Copper raw until the station is visible',
        body: 'Copper x2 is easy, but it competes with Copper Wire, batteries, and module prep. Leave a little raw Copper unspent until the Modification Station is unlocked.',
      },
      {
        title: 'Build it beside module storage',
        body: 'Echo Location, Tadpole Depth Module, Feedback Resonator, Bioscanner, and other upgrades all point back here. Keep Atacamite, Quartz, Celestine, chips, and acids nearby.',
      },
    ],
    tableTitle: 'Modification Station checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      [
        'Unlock paths',
        'Scan Modification Station or open Data Box in current Subnautica2.gg data.',
      ],
      ['Build station', 'Builder Tool / Habitat Builder interior facility.'],
      ['Titanium x2', 'Common, but also used by base pieces.'],
      ['Celestine x2', 'The deeper-route material to plan around.'],
      ['Copper x2', 'Keep raw Copper, not only wire and batteries.'],
    ],
    visualTitle: 'Upgrade bench loop',
    visualItems: [
      {
        label: 'Unlock',
        value: 'Scan / Data Box',
        note: 'Check both paths if the recipe is missing.',
      },
      {
        label: 'Build',
        value: 'Station',
        note: 'Titanium, Celestine, Copper.',
      },
      {
        label: 'Upgrade',
        value: 'Modules',
        note: 'Echo Location, depth, resonator, Bioscanner.',
      },
    ],
    cautionTitle: 'Do not confuse the station unlock with module unlocks',
    cautionBody:
      'Building the Modification Station does not magically reveal every upgrade. Many modules still need their own scan, data card, or story progress before the recipe appears.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you unlock Modification Station in Subnautica 2?',
        body: 'Current Subnautica2.gg data says to scan a Modification Station or open a Data Box. PC Gamer points to the Alien Ruins Research Base route.',
      },
      {
        title: 'What is the Modification Station recipe?',
        body: 'Current blueprint data lists Titanium x2, Celestine x2, and Copper x2.',
      },
      {
        title: 'What is Modification Station used for?',
        body: 'It crafts upgrades and modules, including Tadpole-related modules such as Echo Location and depth upgrades once those recipes are unlocked.',
      },
      {
        title: 'Why is the recipe missing after I build the station?',
        body: 'The station and each module can have separate unlock requirements. Keep scanning fragments, checking Data Boxes, and progressing objectives.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2EchoLocation, label: 'Echo Location Guide' },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        label: 'Tadpole Depth Module',
      },
      {
        href: Routes.Subnautica2FeedbackResonator,
        label: 'Feedback Resonator Guide',
      },
      {
        href: Routes.Subnautica2BioscannerBiomods,
        label: 'Bioscanner and Biomods',
      },
      { href: Routes.Subnautica2Celestine, label: 'Celestine Guide' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Vehicle Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 25, 2026 against Subnautica2.gg, Wand, PC Gamer, and KeenGamer. Subnautica 2 is in Early Access, so location counts, Data Box behavior, and module menus should be rechecked after patches.',
    cardKicker: 'Upgrade station card',
    cardBody:
      'Scan/Data Box unlock, Alien Ruins route, Titanium, Celestine, Copper, and module-crafting use.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Station guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Modification Station 指南 - 解锁、配方和升级用途',
      description:
        'Subnautica 2 中文 Modification Station 指南：整理扫描/Data Box 解锁、Titanium、Celestine、Copper、Alien Ruins 路线和 Tadpole 升级制作。',
    },
    eyebrow: 'Subnautica 2 升级工作站',
    title: 'Subnautica 2 Modification Station 指南',
    description:
      'Modification Station 做出来后，Tadpole 就不只是交通工具了。等 Alien Ruins 路线稳定，再用它做真正能打开新路线的升级。',
    quickLabel: '快速结论',
    quickAnswer:
      'Subnautica2.gg 当前把 Modification Station 写成 locked 的 Builder Tool 室内设施，材料是 Titanium x2、Celestine x2、Copper x2。同页还写了两条解锁方式：扫描 Modification Station 或打开 Data Box。PC Gamer 把可用路线放在 Tadpole Pens 后前往 Alien Ruins Research Base 的流程里。',
    contentsLabel: '目录',
    routeTitle: 'Modification Station 解锁规划',
    routeSteps: [
      {
        title: '先保证 Alien Ruins 路线安全',
        body: 'PC Gamer 提到 Alien Ruins Research Base 里能找到 Modification Station。出发前带 Tadpole、修理方案和足够深度余量，不要把它当成普通短途。',
      },
      {
        title: '先扫描，再查 Data Box',
        body: 'Subnautica2.gg 写了两个解锁方式：扫描工作站，或打开 Data Box。如果一个方式没触发，先查另一个，不要马上去刷完整配方。',
      },
      {
        title: '提前准备 Celestine',
        body: '配方要 Celestine x2，这才是它真正的卡点。普通基地箱子里通常不会顺手有这类深水材料。',
      },
      {
        title: 'Copper 先留原矿',
        body: 'Copper x2 本身不难，但会被 Copper Wire、电池和模块准备分走。解锁前留一点原始 Copper 更稳。',
      },
      {
        title: '放在模块材料箱旁边',
        body: 'Echo Location、Tadpole Depth Module、Feedback Resonator、Bioscanner 等都会回到这里。Atacamite、Quartz、Celestine、芯片和酸类材料放近一点。',
      },
    ],
    tableTitle: 'Modification Station 检查表',
    tableHeaders: ['需求', '确认什么'],
    tableRows: [
      ['解锁方式', '当前 Subnautica2.gg 写的是扫描工作站或打开 Data Box。'],
      ['建造方式', 'Builder Tool / Habitat Builder 室内设施。'],
      ['Titanium x2', '常见，但基地部件也会用。'],
      ['Celestine x2', '需要按深水路线提前规划。'],
      ['Copper x2', '保留原矿，不要全变成线或电池。'],
    ],
    visualTitle: '升级工作台链路',
    visualItems: [
      {
        label: '解锁',
        value: 'Scan / Data Box',
        note: '配方缺失时两条路都查。',
      },
      {
        label: '建造',
        value: 'Station',
        note: 'Titanium、Celestine、Copper。',
      },
      {
        label: '升级',
        value: 'Modules',
        note: 'Echo Location、深度、Resonator、Bioscanner。',
      },
    ],
    cautionTitle: '不要把工作站解锁和模块解锁混在一起',
    cautionBody:
      '建好 Modification Station 不等于所有升级都会出现。很多模块还需要单独扫描、Data Card 或剧情推进。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Modification Station 怎么解锁？',
        body: '当前 Subnautica2.gg 写的是扫描 Modification Station 或打开 Data Box。PC Gamer 给的路线线索是 Alien Ruins Research Base。',
      },
      {
        title: 'Modification Station 配方是什么？',
        body: '当前蓝图资料写的是 Titanium x2、Celestine x2、Copper x2。',
      },
      {
        title: 'Modification Station 有什么用？',
        body: '它用来制作升级和模块，比如 Echo Location、Tadpole 深度模块等，但前提是对应模块也已经解锁。',
      },
      {
        title: '为什么建好后看不到某个升级？',
        body: '工作站和模块本身可能有独立解锁要求。继续扫描碎片、查 Data Box，并推进目标。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2EchoLocation, label: 'Echo Location 指南' },
      { href: Routes.Subnautica2TadpoleDepthModule, label: 'Tadpole 深度模块' },
      {
        href: Routes.Subnautica2FeedbackResonator,
        label: 'Feedback Resonator 指南',
      },
      {
        href: Routes.Subnautica2BioscannerBiomods,
        label: 'Bioscanner 和 Biomods',
      },
      { href: Routes.Subnautica2Celestine, label: 'Celestine 指南' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 载具指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 25 日核对 Subnautica2.gg、Wand、PC Gamer 和 KeenGamer。Subnautica 2 仍在抢先体验，地点数量、Data Box 行为和模块菜单后续可能调整。',
    cardKicker: '升级工作站卡',
    cardBody:
      '扫描/Data Box 解锁、Alien Ruins 路线、Titanium、Celestine、Copper 和模块制作用途。',
    cardTypeLabel: '类型',
    cardTypeValue: '设备指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: 'Early Access',
  },
};

const fallbackCopy = modificationStationCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  modificationStationCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Modification Station Guide',
      description:
        'Guide for Modification Station unlock, recipe, Alien Ruins route, Celestine, Copper, and upgrade crafting.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = modificationStationCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2ModificationStation,
  });
}

export default async function ModificationStationGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = modificationStationCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={WrenchIcon}
      locale={locale}
      pathname={Routes.Subnautica2ModificationStation}
      sources={sharedSources}
    />
  );
}
