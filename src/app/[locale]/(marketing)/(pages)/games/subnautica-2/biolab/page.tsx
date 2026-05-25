import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { DnaIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type BiolabCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-25';
const UPDATED_AT = '2026-05-25';

const sharedSources = [
  {
    href: 'https://subnautica2.gg/blueprints/biolab',
    label: 'Subnautica2.gg Biolab blueprint',
  },
  {
    href: 'https://wand.com/wikis/subnautica-2/items/biolab',
    label: 'Wand Subnautica 2 Biolab item page',
  },
  {
    href: 'https://consolepulse.com/multiplatform/subnautica/guides/subnautica-2-biolab-guide',
    label: 'Console Pulse Biolab route guide',
  },
  {
    href: 'https://www.gamespot.com/articles/subnautica-2-biomod-upgrades-guide/1100-6539995/',
    label: 'GameSpot Biomod upgrades guide',
  },
];

const biolabCopy: Record<string, BiolabCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Biolab Guide - Welcome Center Route, Recipe, and Biomods',
      description:
        'A practical Subnautica 2 Biolab guide covering the Welcome Center route, Titanium, Copper Wire, Mild Acid recipe, Habitat Builder setup, and Biomod management.',
    },
    eyebrow: 'Subnautica 2 biomod station',
    title: 'Subnautica 2 Biolab Guide',
    description:
      'Biolab is where creature scans stop being trivia and start becoming loadout choices. Build one at base once you can spare Mild Acid, then use it as the place where Biomods, Adaptations, and route planning meet.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current blueprint data lists Biolab as a Builder Tool / Habitat Builder station that costs Titanium x3, Copper Wire x1, and Mild Acid x1. Console Pulse points to the Welcome Center southeast of the Life Pod, around bearing 150, as a quick early Biolab lead. GameSpot notes that once your base is running, you can build your own Biolab to manage Biomods.',
    contentsLabel: 'Contents',
    routeTitle: 'Biolab unlock and build plan',
    routeSteps: [
      {
        title: 'Visit the Welcome Center first',
        body: 'Console Pulse reports the closest Biolab inside the Welcome Center southeast of the Life Pod, near bearing 150. Bring a Scanner and enough air to check the room properly.',
      },
      {
        title: 'Power the existing station if needed',
        body: 'That same guide notes a Basic Battery power socket near the Biolab. If the station is dark, check the wall before assuming the route is bugged.',
      },
      {
        title: 'Build your own once base storage exists',
        body: 'The recipe is small but not free: Titanium x3, Copper Wire x1, and Mild Acid x1. Put it near your scanner, chemicals, and upgrade storage.',
      },
      {
        title: 'Treat Biomods as route tools',
        body: 'Wand describes the Biolab as the place to inject and remove Biomods. Do not swap them randomly; match the active and passive slots to the next dive.',
      },
      {
        title: 'Keep Mild Acid in reserve',
        body: 'Biolab competes with Processor and Echo Location for Mild Acid attention. Before building a second station, check whether that acid unlocks a route-critical craft.',
      },
    ],
    tableTitle: 'Biolab checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      [
        'Welcome Center lead',
        'Console Pulse points southeast from the Life Pod, around bearing 150.',
      ],
      [
        'Station role',
        'Current databank text says Biolab modifies Adaptations.',
      ],
      ['Titanium x3', 'The largest direct input in the build recipe.'],
      ['Copper Wire x1', 'Reserve wire before spending Copper on batteries.'],
      ['Mild Acid x1', 'Craft it from the Acidic Raion Pouch chain first.'],
    ],
    visualTitle: 'Biomod loop',
    visualItems: [
      {
        label: 'Find',
        value: 'Welcome Center',
        note: 'Use the southeast lead before building your own.',
      },
      {
        label: 'Build',
        value: 'Biolab',
        note: 'Titanium, Copper Wire, Mild Acid.',
      },
      {
        label: 'Tune',
        value: 'Biomods',
        note: 'Swap active/passive choices for the next route.',
      },
    ],
    cautionTitle: 'Do not treat Biomods like decoration',
    cautionBody:
      'A Biolab is useful because it changes what your next dive feels like. Pick Biomods for a job: travel, resource checks, dangerous biomes, or longer recovery routes.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Where is the first Biolab in Subnautica 2?',
        body: 'Console Pulse points to the Welcome Center southeast of the Life Pod, around bearing 150, as the closest early Biolab lead.',
      },
      {
        title: 'What is the Biolab recipe?',
        body: 'Current blueprint pages list Titanium x3, Copper Wire x1, and Mild Acid x1.',
      },
      {
        title: 'What does Biolab do?',
        body: 'Current databank text says the Biolab injects and removes Biomods, which modify your Adaptations.',
      },
      {
        title: 'Should I build Biolab before Processor?',
        body: 'If you only have one Mild Acid, think about the next route. Biolab helps Biomods; Processor opens processing chains such as Strong Acid and Strontium.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2MildAcid, label: 'Mild Acid Guide' },
      { href: Routes.Subnautica2EchoLocation, label: 'Echo Location Guide' },
      { href: Routes.Subnautica2Processor, label: 'Processor Guide' },
      {
        href: Routes.Subnautica2BioscannerBiomods,
        label: 'Bioscanner and Biomods',
      },
      {
        href: Routes.Subnautica2HabitatBuilder,
        label: 'Habitat Builder Guide',
      },
      { href: Routes.Subnautica2CopperWire, label: 'Copper Wire Guide' },
      { href: Routes.Subnautica2BaseBuilding, label: 'Base Building Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 25, 2026 against Subnautica2.gg, Wand, Console Pulse, and GameSpot. Subnautica 2 is in Early Access, so Welcome Center details, power behavior, and Biomod rules should be rechecked after patches.',
    cardKicker: 'Biomod card',
    cardBody:
      'Welcome Center lead, power note, Titanium, Copper Wire, Mild Acid, and Biomod planning.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Station guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Biolab 指南 - Welcome Center 路线、配方和 Biomods',
      description:
        'Subnautica 2 中文 Biolab 指南：整理 Welcome Center 路线、Titanium、Copper Wire、Mild Acid 配方、Habitat Builder 建造和 Biomod 管理。',
    },
    eyebrow: 'Subnautica 2 Biomod 设备',
    title: 'Subnautica 2 Biolab 指南',
    description:
      'Biolab 是把生物扫描变成实际能力选择的地方。等你能稳定做 Mild Acid 后，在基地里放一个 Biolab，后面的 Biomods、Adaptations 和路线规划会清楚很多。',
    quickLabel: '快速结论',
    quickAnswer:
      '当前蓝图资料把 Biolab 写成 Builder Tool / Habitat Builder 建造的设备，材料是 Titanium x3、Copper Wire x1、Mild Acid x1。Console Pulse 把早期线索指向 Life Pod 东南方向、bearing 150 附近的 Welcome Center。GameSpot 也提到基地稳定后可以自己建 Biolab 来管理 Biomods。',
    contentsLabel: '目录',
    routeTitle: 'Biolab 解锁和建造规划',
    routeSteps: [
      {
        title: '先去 Welcome Center',
        body: 'Console Pulse 说最近的 Biolab 在 Life Pod 东南方向的 Welcome Center 里，大约 bearing 150。带上 Scanner 和足够氧气，进去后把房间检查完整。',
      },
      {
        title: '设备没亮时先查电池口',
        body: '同一篇攻略提到 Biolab 附近墙上有 Basic Battery 供电口。如果设备没反应，先看墙，不要马上以为路线坏了。',
      },
      {
        title: '基地有收纳后再自己建',
        body: '配方不大，但会吃掉关键材料：Titanium x3、Copper Wire x1、Mild Acid x1。最好放在扫描、化学材料和升级箱附近。',
      },
      {
        title: '把 Biomods 当路线工具',
        body: 'Wand 的资料把 Biolab 描述为注入和移除 Biomods 的设备。不要随手乱换，按下一趟路线决定 active 和 passive 位置。',
      },
      {
        title: 'Mild Acid 留一点余量',
        body: 'Biolab、Processor、Echo Location 都会抢 Mild Acid。建第二个设备前，先看看这份酸有没有更关键的路线用途。',
      },
    ],
    tableTitle: 'Biolab 检查表',
    tableHeaders: ['需求', '确认什么'],
    tableRows: [
      [
        'Welcome Center 线索',
        'Console Pulse 指向 Life Pod 东南、bearing 150 左右。',
      ],
      ['设备用途', '当前 databank 文本写的是修改 Adaptations。'],
      ['Titanium x3', '建造配方里数量最多的直接材料。'],
      ['Copper Wire x1', 'Copper 不要全做电池，先留一卷线。'],
      ['Mild Acid x1', '先走 Acidic Raion Pouch 材料链做出来。'],
    ],
    visualTitle: 'Biomod 循环',
    visualItems: [
      {
        label: '寻找',
        value: 'Welcome Center',
        note: '先用东南方向线索找到现成设备。',
      },
      {
        label: '建造',
        value: 'Biolab',
        note: 'Titanium、Copper Wire、Mild Acid。',
      },
      {
        label: '调整',
        value: 'Biomods',
        note: '按下一条路线换 active/passive。',
      },
    ],
    cautionTitle: '不要把 Biomods 当装饰品',
    cautionBody:
      'Biolab 的价值在于改变下一次潜水的手感。出发前先想好目标：赶路、找资源、进危险区域，还是给长路线留容错。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 第一个 Biolab 在哪里？',
        body: 'Console Pulse 把最近的早期线索指向 Life Pod 东南方向、bearing 150 附近的 Welcome Center。',
      },
      {
        title: 'Biolab 配方是什么？',
        body: '当前蓝图资料写的是 Titanium x3、Copper Wire x1、Mild Acid x1。',
      },
      {
        title: 'Biolab 有什么用？',
        body: '当前 databank 文本显示 Biolab 用来注入和移除 Biomods，从而修改 Adaptations。',
      },
      {
        title: 'Biolab 要不要比 Processor 更早建？',
        body: '如果你只有一份 Mild Acid，先看下一步目标。Biolab 管 Biomods；Processor 打开 Strong Acid、Strontium 等加工链。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2MildAcid, label: 'Mild Acid 指南' },
      { href: Routes.Subnautica2EchoLocation, label: 'Echo Location 指南' },
      { href: Routes.Subnautica2Processor, label: 'Processor 指南' },
      {
        href: Routes.Subnautica2BioscannerBiomods,
        label: 'Bioscanner 和 Biomods',
      },
      { href: Routes.Subnautica2HabitatBuilder, label: 'Habitat Builder 指南' },
      { href: Routes.Subnautica2CopperWire, label: 'Copper Wire 指南' },
      { href: Routes.Subnautica2BaseBuilding, label: '基地建造指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 25 日核对 Subnautica2.gg、Wand、Console Pulse 和 GameSpot。Subnautica 2 仍在抢先体验，Welcome Center 细节、供电行为和 Biomod 规则后续可能调整。',
    cardKicker: 'Biomod 卡片',
    cardBody:
      'Welcome Center 线索、供电提醒、Titanium、Copper Wire、Mild Acid 和 Biomod 规划。',
    cardTypeLabel: '类型',
    cardTypeValue: '设备指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: 'Early Access',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 Biolab Guide - Welcome Center route and Biomods',
      description:
        'Subnautica 2 Biolab guide for Welcome Center route, Titanium, Copper Wire, Mild Acid, Habitat Builder setup, and Biomod management.',
    },
    eyebrow: 'Subnautica 2 biomod station',
    title: 'Subnautica 2 Biolab Guide',
    description:
      'Biolab は creature scan を loadout に変える場所です。Mild Acid が安定したら基地に作り、Biomods と Adaptations を次の潜水に合わせます。',
    quickLabel: '要点',
    quickAnswer:
      '現在の blueprint 情報では、Biolab は Titanium x3、Copper Wire x1、Mild Acid x1 で作る Builder Tool / Habitat Builder station です。Console Pulse は Life Pod 南東、bearing 150 付近の Welcome Center を早い手がかりとして紹介しています。',
    contentsLabel: '目次',
    routeTitle: 'Biolab unlock and build plan',
    routeSteps: [
      {
        title: 'Welcome Center を先に見る',
        body: 'Console Pulse は最初の Biolab を Life Pod 南東の Welcome Center 内としています。Scanner と酸素の余裕を持って向かいます。',
      },
      {
        title: 'power socket を確認',
        body: '同ガイドは近くの Basic Battery socket にも触れています。動かない時は壁を確認します。',
      },
      {
        title: 'base storage ができたら自作',
        body: '材料は Titanium x3、Copper Wire x1、Mild Acid x1。scanner と chemical storage の近くに置きます。',
      },
      {
        title: 'Biomods を route tools として扱う',
        body: 'Wand は Biolab を Biomods の注入と取り外しに使う場所と説明しています。次のルートに合わせて選びます。',
      },
      {
        title: 'Mild Acid を残す',
        body: 'Biolab、Processor、Echo Location が Mild Acid を取り合います。次の craft を確認してから使います。',
      },
    ],
    tableTitle: 'Biolab checklist',
    tableHeaders: ['Need', 'Check'],
    tableRows: [
      ['Welcome Center', 'Console Pulse points southeast, around bearing 150.'],
      ['Station role', 'Current text says Biolab modifies Adaptations.'],
      ['Titanium x3', 'Largest direct recipe input.'],
      ['Copper Wire x1', 'Reserve wire before spending Copper.'],
      ['Mild Acid x1', 'Prepare the Acidic Raion Pouch chain first.'],
    ],
    visualTitle: 'Biomod loop',
    visualItems: [
      {
        label: 'Find',
        value: 'Welcome Center',
        note: 'Use the southeast lead first.',
      },
      {
        label: 'Build',
        value: 'Biolab',
        note: 'Titanium, Copper Wire, Mild Acid.',
      },
      {
        label: 'Tune',
        value: 'Biomods',
        note: 'Swap active/passive for the next route.',
      },
    ],
    cautionTitle: 'Do not treat Biomods as decoration',
    cautionBody:
      'Biolab は次の dive を変えるための station です。移動、資源探し、危険 biome など、目的に合わせて選びます。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Where is the first Biolab?',
        body: 'Console Pulse points to the Welcome Center southeast of the Life Pod, around bearing 150.',
      },
      {
        title: 'What is the Biolab recipe?',
        body: 'Current pages list Titanium x3, Copper Wire x1, and Mild Acid x1.',
      },
      {
        title: 'What does Biolab do?',
        body: 'Current databank text says it injects and removes Biomods to modify Adaptations.',
      },
      {
        title: 'Biolab or Processor first?',
        body: 'If Mild Acid is limited, choose by route: Biolab for Biomods, Processor for processing chains.',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2MildAcid, label: 'Mild Acid Guide' },
      { href: Routes.Subnautica2EchoLocation, label: 'Echo Location Guide' },
      { href: Routes.Subnautica2Processor, label: 'Processor Guide' },
      {
        href: Routes.Subnautica2BioscannerBiomods,
        label: 'Bioscanner and Biomods',
      },
      {
        href: Routes.Subnautica2HabitatBuilder,
        label: 'Habitat Builder Guide',
      },
      { href: Routes.Subnautica2CopperWire, label: 'Copper Wire Guide' },
      { href: Routes.Subnautica2BaseBuilding, label: 'Base Building Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 25, 2026 against Subnautica2.gg, Wand, Console Pulse, and GameSpot. Early Access details can change after patches.',
    cardKicker: 'Biomod card',
    cardBody:
      'Welcome Center lead, power note, Titanium, Copper Wire, Mild Acid, and Biomod planning.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Station guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
};

const fallbackCopy = biolabCopy.en;

for (const locale of ['de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  biolabCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Biolab Guide',
      description:
        'Guide for Biolab route, Welcome Center, Titanium, Copper Wire, Mild Acid, and Biomod management.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = biolabCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2Biolab,
  });
}

export default async function BiolabGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = biolabCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={DnaIcon}
      locale={locale}
      pathname={Routes.Subnautica2Biolab}
      sources={sharedSources}
    />
  );
}
