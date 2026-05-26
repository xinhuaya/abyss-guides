import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { HammerIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type HabitatBuilderCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-25';
const UPDATED_AT = '2026-05-25';

const sharedSources = [
  {
    href: 'https://subnautica2.gg/blueprints/habitat-builder',
    label: 'Subnautica2.gg Habitat Builder blueprint',
  },
  {
    href: 'https://subnautica2hub.com/blueprints/habitat-builder',
    label: 'Subnautica2Hub Habitat Builder blueprint',
  },
  {
    href: 'https://www.pcgamesn.com/subnautica-2/base-building',
    label: 'PCGamesN base building guide',
  },
];

const habitatBuilderCopy: Record<string, HabitatBuilderCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Habitat Builder Guide - Scan Unlock, Recipe, and First Base Prep',
      description:
        'A practical Subnautica 2 Habitat Builder guide covering the 2-scan unlock, Titanium, Glass, Basic Battery, Copper Wire recipe, and first base prep.',
    },
    eyebrow: 'Subnautica 2 base tool',
    title: 'Subnautica 2 Habitat Builder Guide',
    description:
      'Habitat Builder is the moment your run stops being a backpack problem and starts becoming a home route. Unlock it cleanly, craft it once, then build only what helps your next dives.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current blueprint data lists Habitat Builder as locked behind scanning 2 Habitat Builders. After the blueprint unlocks, craft it at the Fabrication Station with Titanium x2, Glass x1, Basic Battery x1, and Copper Wire x1. Treat Copper Wire and battery prep as the easy-to-miss parts before you leave base.',
    contentsLabel: 'Contents',
    routeTitle: 'Habitat Builder unlock plan',
    routeSteps: [
      {
        title: 'Bring the Scanner first',
        body: 'The tool is not a default craft. Current databases say you need 2 Habitat Builder scans, so the first job is a focused scan run, not a material hoard.',
      },
      {
        title: 'Prepare the recipe at base',
        body: 'Once the scan unlock lands, check Titanium x2, Glass x1, Basic Battery x1, and Copper Wire x1 before opening the Fabrication Station.',
      },
      {
        title: 'Do the Copper split early',
        body: 'Basic Battery and Copper Wire both pull from Copper. Make the battery, reserve the wire, and avoid spending every Copper piece on spare tool power.',
      },
      {
        title: 'Craft the tool before decorating',
        body: 'Habitat Builder unlocks the base-building loop, but the first goal is function: hatch, power, storage, and a route hub you can actually find again.',
      },
      {
        title: 'Build a working starter base',
        body: 'A small powered room with storage beats a huge shell with no rhythm. Expand after the base shortens Copper, Silver, Scanner, and food runs.',
      },
    ],
    tableTitle: 'Habitat Builder checklist',
    tableHeaders: ['Requirement', 'What to confirm'],
    tableRows: [
      ['Scanner', 'Needed for the 2 Habitat Builder scans in current data.'],
      ['Titanium x2', 'Common, but easy to spend on base pieces too early.'],
      ['Glass x1', 'Prepare the glass side before the craft check.'],
      [
        'Basic Battery x1',
        'Do not forget the battery while splitting Copper for wire.',
      ],
      [
        'Copper Wire x1',
        'The electronics piece that links this tool back to Copper planning.',
      ],
    ],
    visualTitle: 'Base tool chain',
    visualItems: [
      {
        label: 'Scan',
        value: '2 fragments',
        note: 'Unlock the blueprint before stockpiling parts.',
      },
      {
        label: 'Craft',
        value: 'Tool',
        note: 'Titanium, Glass, Basic Battery, Copper Wire.',
      },
      {
        label: 'Build',
        value: 'Starter base',
        note: 'Hatch, power, storage, then expansion.',
      },
    ],
    cautionTitle: 'Do not turn the first base into a showroom',
    cautionBody:
      'The Habitat Builder can tempt you into a huge layout before the base has a job. Start with the pieces that save time: a reachable location, power, storage, and a clear route back out.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you unlock Habitat Builder in Subnautica 2?',
        body: 'Current blueprint data says to scan 2 Habitat Builders with the Scanner. After that, the tool becomes craftable at the Fabrication Station.',
      },
      {
        title: 'What is the Habitat Builder recipe?',
        body: 'Current data lists Titanium x2, Glass x1, Basic Battery x1, and Copper Wire x1.',
      },
      {
        title: 'What should I build first with Habitat Builder?',
        body: 'Start with a simple working base: room, hatch, power, storage, and crafting access. Pretty layouts can wait until the route is stable.',
      },
      {
        title: 'Why am I missing Copper Wire for Habitat Builder?',
        body: 'Copper Wire competes with batteries for early Copper. If the tool is blocked, check whether you spent every Copper piece on spare batteries first.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2BaseBuilding, label: 'Base Building Guide' },
      {
        href: Routes.Subnautica2VehicleFabricator,
        label: 'Vehicle Fabricator Guide',
      },
      { href: Routes.Subnautica2Moonpool, label: 'Moonpool Guide' },
      { href: Routes.Subnautica2TadpoleDock, label: 'Tadpole Dock Guide' },
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery Guide' },
      {
        href: Routes.Subnautica2BatteryTerminal,
        label: 'Battery Terminal Guide',
      },
      { href: Routes.Subnautica2CopperWire, label: 'Copper Wire Guide' },
      { href: Routes.Subnautica2Quartz, label: 'Quartz Location Guide' },
      { href: Routes.Subnautica2Glass, label: 'Glass Recipe Guide' },
      { href: Routes.Subnautica2Copper, label: 'Copper Location' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 25, 2026 against current Subnautica2.gg and Subnautica2Hub Habitat Builder data, plus PCGamesN base-building coverage. Scan counts, recipes, and build costs can change during Early Access patches.',
    cardKicker: 'Base tool card',
    cardBody:
      'Scan unlock, Titanium, Glass, Basic Battery, Copper Wire, first base order, and starter storage.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Tool guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Habitat Builder 指南 - 扫描解锁、配方和第一座基地准备',
      description:
        'Subnautica 2 中文 Habitat Builder 指南：整理 2 次扫描解锁、Titanium、Glass、Basic Battery、Copper Wire 配方和第一座基地准备。',
    },
    eyebrow: 'Subnautica 2 基地工具',
    title: 'Subnautica 2 Habitat Builder 指南',
    description:
      '拿到 Habitat Builder 之后，游戏节奏会变得完全不一样。你不再只是背包不够用，而是可以把常跑路线变成一个真正的补给点。',
    quickLabel: '快速结论',
    quickAnswer:
      '当前蓝图数据写的是：Habitat Builder 需要扫描 2 个 Habitat Builder 解锁。解锁后在 Fabrication Station 用 Titanium x2、Glass x1、Basic Battery x1、Copper Wire x1 制作。出发前尤其要确认 Copper Wire 和 Basic Battery，因为它们都会吃前期 Copper。',
    contentsLabel: '目录',
    routeTitle: 'Habitat Builder 解锁规划',
    routeSteps: [
      {
        title: '先带 Scanner 去找蓝图',
        body: 'Habitat Builder 不是开局默认就能做的工具。当前资料显示需要扫描 2 个 Habitat Builder，所以第一趟重点是扫描，不是乱囤材料。',
      },
      {
        title: '回基地再核对配方',
        body: '蓝图解锁后，再检查 Titanium x2、Glass x1、Basic Battery x1、Copper Wire x1。别到了 Fabrication Station 才发现少一卷线。',
      },
      {
        title: '提前分好 Copper 用途',
        body: 'Basic Battery 和 Copper Wire 都会吃 Copper。先做电池，再给 wire 留料，不要把所有 Copper 都变成备用电池。',
      },
      {
        title: '先让工具开始工作',
        body: 'Habitat Builder 的价值不是马上盖豪宅，而是打开基地循环。第一目标是 hatch、供电、储物和一个能稳定回来的路线点。',
      },
      {
        title: '先做能用的小基地',
        body: '一个有电、有门、有箱子的简单房间，比一个空壳大基地更有用。等它能缩短 Copper、Silver、Scanner 和食物路线后，再扩建。',
      },
    ],
    tableTitle: 'Habitat Builder 检查表',
    tableHeaders: ['需求', '要确认什么'],
    tableRows: [
      ['Scanner', '当前资料里需要扫描 2 个 Habitat Builder。'],
      ['Titanium x2', '常见但容易提前花在基地部件上。'],
      ['Glass x1', '先把玻璃这一侧材料准备好。'],
      ['Basic Battery x1', '分配 Copper 时别忘了电池。'],
      ['Copper Wire x1', '把这个工具和 Copper 规划连接起来的电子材料。'],
    ],
    visualTitle: '基地工具链',
    visualItems: [
      {
        label: '扫描',
        value: '2 个蓝图',
        note: '先解锁，再开始大量囤料。',
      },
      {
        label: '制作',
        value: 'Tool',
        note: 'Titanium、Glass、Basic Battery、Copper Wire。',
      },
      {
        label: '建造',
        value: 'Starter base',
        note: '先 hatch、供电、储物，再扩建。',
      },
    ],
    cautionTitle: '别把第一座基地做成展厅',
    cautionBody:
      'Habitat Builder 很容易让人一上来就想盖大房子。先别急，第一座基地只要解决回家、供电、储物和出发路线，就已经很值。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Habitat Builder 怎么解锁？',
        body: '当前蓝图数据写的是用 Scanner 扫描 2 个 Habitat Builder。解锁后可以在 Fabrication Station 制作。',
      },
      {
        title: 'Habitat Builder 配方是什么？',
        body: '当前资料是 Titanium x2、Glass x1、Basic Battery x1、Copper Wire x1。',
      },
      {
        title: '拿到 Habitat Builder 后先建什么？',
        body: '先做一个能用的小基地：房间、hatch、供电、储物和制作点。好看的布局可以等路线稳定后再做。',
      },
      {
        title: '为什么总是缺 Copper Wire？',
        body: 'Copper Wire 和电池都会吃前期 Copper。如果工具做不了，先检查是不是把 Copper 都做成备用电池了。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2BaseBuilding, label: '基地建造指南' },
      {
        href: Routes.Subnautica2VehicleFabricator,
        label: 'Vehicle Fabricator 指南',
      },
      { href: Routes.Subnautica2Moonpool, label: 'Moonpool 指南' },
      { href: Routes.Subnautica2TadpoleDock, label: 'Tadpole Dock 指南' },
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery 指南' },
      {
        href: Routes.Subnautica2BatteryTerminal,
        label: 'Battery Terminal Guide',
      },
      { href: Routes.Subnautica2CopperWire, label: 'Copper Wire 指南' },
      { href: Routes.Subnautica2Quartz, label: 'Quartz Location Guide' },
      { href: Routes.Subnautica2Glass, label: 'Glass 配方指南' },
      { href: Routes.Subnautica2Copper, label: 'Copper 位置' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner 指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 25 日核对 Subnautica2.gg 与 Subnautica2Hub 的 Habitat Builder 数据，以及 PCGamesN 的基地建造资料。抢先体验期间，扫描数量、配方和建造消耗可能随补丁调整。',
    cardKicker: '基地工具卡',
    cardBody:
      '扫描解锁、Titanium、Glass、Basic Battery、Copper Wire、第一座基地顺序和储物准备。',
    cardTypeLabel: '类型',
    cardTypeValue: '工具指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: 'Early Access',
  },
  ja: {
    metadata: {
      title:
        'Subnautica 2 Habitat Builder Guide - スキャン解放、レシピ、最初の基地',
      description:
        'Subnautica 2 の Habitat Builder ガイド。2 回スキャン解放、Titanium、Glass、Basic Battery、Copper Wire レシピ、最初の基地準備を整理します。',
    },
    eyebrow: 'Subnautica 2 基地ツール',
    title: 'Subnautica 2 Habitat Builder Guide',
    description:
      'Habitat Builder を手に入れると、探索は「持ち帰るだけ」から「戻る場所を作る」段階に変わります。まず解放、次にクラフト、そして使える小さな基地です。',
    quickLabel: '要点',
    quickAnswer:
      '現在のブループリント情報では、Habitat Builder は 2 個の Habitat Builder をスキャンして解放します。解放後は Fabrication Station で Titanium x2、Glass x1、Basic Battery x1、Copper Wire x1 から作ります。Copper Wire と battery の Copper 消費を先に見ておくと楽です。',
    contentsLabel: '目次',
    routeTitle: 'Habitat Builder 解放プラン',
    routeSteps: [
      {
        title: 'Scanner を先に持つ',
        body: 'このツールは最初から作れるわけではありません。現在の情報では 2 回スキャンが必要なので、まず素材集めよりスキャンを優先します。',
      },
      {
        title: '基地でレシピを確認する',
        body: '解放後に Titanium x2、Glass x1、Basic Battery x1、Copper Wire x1 を確認します。特に Copper Wire は忘れやすいです。',
      },
      {
        title: 'Copper を分けておく',
        body: 'Basic Battery と Copper Wire はどちらも Copper を使います。予備バッテリーを作りすぎる前に、wire 用の分を残しましょう。',
      },
      {
        title: '飾る前に機能させる',
        body: 'Habitat Builder の最初の仕事は豪華な基地ではなく、hatch、電力、保管、帰り道を作ることです。',
      },
      {
        title: '小さなスターター基地を作る',
        body: '電力とロッカーがある小部屋は、大きな空の基地より役に立ちます。Copper、Silver、Scanner、食料ルートが短くなってから広げます。',
      },
    ],
    tableTitle: 'Habitat Builder チェックリスト',
    tableHeaders: ['必要なもの', '確認すること'],
    tableRows: [
      ['Scanner', '現在の情報では Habitat Builder を 2 回スキャン。'],
      ['Titanium x2', 'よくある素材だが、基地部品で先に使いがち。'],
      ['Glass x1', 'ガラス側の材料を先に準備する。'],
      ['Basic Battery x1', 'Copper を分ける時に battery 分も見る。'],
      ['Copper Wire x1', 'Copper 計画と基地ツールをつなぐ電子素材。'],
    ],
    visualTitle: '基地ツールチェーン',
    visualItems: [
      {
        label: 'Scan',
        value: '2 parts',
        note: '素材集めの前にブループリント解放。',
      },
      {
        label: 'Craft',
        value: 'Tool',
        note: 'Titanium、Glass、Basic Battery、Copper Wire。',
      },
      {
        label: 'Build',
        value: 'Base',
        note: 'Hatch、電力、保管、それから拡張。',
      },
    ],
    cautionTitle: '最初の基地を展示場にしない',
    cautionBody:
      'Habitat Builder を手に入れると大きく作りたくなりますが、最初は機能優先です。帰りやすい場所、電力、保管、次の出発ルートを先に作りましょう。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 で Habitat Builder はどう解放する？',
        body: '現在のブループリント情報では、Scanner で Habitat Builder を 2 回スキャンします。その後 Fabrication Station で作れます。',
      },
      {
        title: 'Habitat Builder のレシピは？',
        body: '現在の情報では Titanium x2、Glass x1、Basic Battery x1、Copper Wire x1 です。',
      },
      {
        title: '最初に何を建てるべき？',
        body: 'まずは小さな実用基地です。部屋、hatch、電力、保管、クラフトへのアクセスを作りましょう。',
      },
      {
        title: 'Copper Wire が足りない理由は？',
        body: 'Copper Wire と battery はどちらも序盤の Copper を使います。予備バッテリーを作りすぎていないか確認してください。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2BaseBuilding, label: 'Base Building ガイド' },
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery Guide' },
      {
        href: Routes.Subnautica2BatteryTerminal,
        label: 'Battery Terminal Guide',
      },
      { href: Routes.Subnautica2CopperWire, label: 'Copper Wire ガイド' },
      { href: Routes.Subnautica2Quartz, label: 'Quartz Location Guide' },
      { href: Routes.Subnautica2Glass, label: 'Glass Recipe Guide' },
      { href: Routes.Subnautica2Copper, label: 'Copper の場所' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner ガイド' },
      { href: Routes.Subnautica2Resources, label: 'リソースガイド' },
      { href: Routes.Subnautica2Crafting, label: 'クラフトガイド' },
    ],
    sourcesTitle: 'ソースメモ',
    sourceBody:
      '2026年5月25日に Subnautica2.gg と Subnautica2Hub の Habitat Builder 情報、PCGamesN の基地建築情報を確認しました。Early Access 中はスキャン数、レシピ、建築コストが変わる可能性があります。',
    cardKicker: '基地ツールカード',
    cardBody:
      'スキャン解放、Titanium、Glass、Basic Battery、Copper Wire、最初の基地順序。',
    cardTypeLabel: '種類',
    cardTypeValue: 'ツールガイド',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: '状態',
    cardStatusValue: 'Early Access',
  },
};

const fallbackLocaleAliases = {
  de: {
    title: 'Subnautica 2 Habitat Builder Guide',
    description:
      'Guide for Habitat Builder scan unlock, Titanium, Glass, Basic Battery, Copper Wire, and first base prep.',
  },
  fr: {
    title: 'Subnautica 2 Habitat Builder Guide',
    description:
      'Guide Habitat Builder: scans, Titanium, Glass, Basic Battery, Copper Wire et premiere base.',
  },
  'pt-BR': {
    title: 'Subnautica 2 Habitat Builder Guide',
    description:
      'Guia de Habitat Builder com scans, Titanium, Glass, Basic Battery, Copper Wire e primeira base.',
  },
  'es-419': {
    title: 'Subnautica 2 Habitat Builder Guide',
    description:
      'Guia de Habitat Builder: escaneos, Titanium, Glass, Basic Battery, Copper Wire y primera base.',
  },
  ko: {
    title: 'Subnautica 2 Habitat Builder Guide',
    description:
      'Habitat Builder scan unlock, Titanium, Glass, Basic Battery, Copper Wire, and first base prep.',
  },
  ru: {
    title: 'Subnautica 2 Habitat Builder Guide',
    description:
      'Guide for Habitat Builder scan unlock, Titanium, Glass, Basic Battery, Copper Wire, and first base prep.',
  },
} satisfies Record<string, { title: string; description: string }>;

function getCopy(locale: Locale): HabitatBuilderCopy {
  if (habitatBuilderCopy[locale]) {
    return habitatBuilderCopy[locale];
  }

  const fallback =
    fallbackLocaleAliases[locale as keyof typeof fallbackLocaleAliases] ??
    fallbackLocaleAliases.de;

  return {
    ...habitatBuilderCopy.en,
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
    pathname: Routes.Subnautica2HabitatBuilder,
  });
}

export default async function HabitatBuilderPage({
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
      icon={HammerIcon}
      locale={locale}
      pathname={Routes.Subnautica2HabitatBuilder}
      sources={sharedSources}
    />
  );
}
