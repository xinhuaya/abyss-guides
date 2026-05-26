import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { BatteryChargingIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type BasicBatteryCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-25';
const UPDATED_AT = '2026-05-25';

const sharedSources = [
  {
    href: 'https://subnautica2.gg/blueprints/basic-battery',
    label: 'Subnautica2.gg Basic Battery blueprint',
  },
  {
    href: 'https://subnautica2hub.com/blueprints/basic-battery',
    label: 'Subnautica2Hub Basic Battery blueprint',
  },
];

const basicBatteryCopy: Record<string, BasicBatteryCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Basic Battery Guide - Recipe, Copper Plan, and Early Tools',
      description:
        'A practical Subnautica 2 Basic Battery guide covering the default unlock, Copper x2, Acidic Raion Pouch x1 recipe, 100 energy, and early tool priorities.',
    },
    eyebrow: 'Subnautica 2 early power',
    title: 'Subnautica 2 Basic Battery Guide',
    description:
      'Basic Battery looks small, but it quietly decides whether your first hour feels smooth or constantly interrupted. Make the first one early, then stop before you turn every Copper piece into spare power.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current blueprint data lists Basic Battery as unlocked by default. Craft it at the Fabricator with Copper x2 and Acidic Raion Pouch x1. Subnautica2Hub lists it at 100 energy, and current blueprint data connects it to early tools such as Scanner, Flashlight, Repair Tool, Lightstick, Power Cell, and Habitat Builder.',
    contentsLabel: 'Contents',
    routeTitle: 'Basic Battery route',
    routeSteps: [
      {
        title: 'Craft one before the scan run',
        body: 'Scanner planning starts with battery planning. If the first battery is missing, every fragment route gets slower because you keep returning to base empty-handed.',
      },
      {
        title: 'Collect Copper in pairs',
        body: 'The current recipe is Copper x2 plus Acidic Raion Pouch x1. Pick Copper in pairs so you know when a battery is ready instead of guessing from a mixed locker.',
      },
      {
        title: 'Keep pouch runs short',
        body: 'Acidic Raion Pouch is the odd piece in the recipe. Grab it on a focused food-and-power loop, then go home before the trip turns into a random inventory sweep.',
      },
      {
        title: 'Do not overcraft batteries',
        body: 'Copper also feeds Copper Wire and several early electronics. Make the battery you need for the next tool, then leave enough Copper for Scanner, Habitat Builder, and wiring work.',
      },
      {
        title: 'Label the power locker',
        body: 'A small battery locker saves time once Flashlight, Scanner, Repair Tool, and base projects all start asking for power parts.',
      },
    ],
    tableTitle: 'Basic Battery checklist',
    tableHeaders: ['Need', 'Why it matters'],
    tableRows: [
      ['Fabricator', 'Basic Battery is a default unlock in current data.'],
      ['Copper x2', 'The part most likely to be stolen by Copper Wire.'],
      [
        'Acidic Raion Pouch x1',
        'The organic ingredient that makes the recipe easy to forget.',
      ],
      [
        '100 energy',
        'Subnautica2Hub currently lists the output at 100 energy.',
      ],
      [
        'Tool queue',
        'Scanner, Flashlight, Repair Tool, Habitat Builder, and more pull from battery planning.',
      ],
    ],
    visualTitle: 'Power chain',
    visualItems: [
      {
        label: 'Gather',
        value: '2+1',
        note: 'Copper x2, Acidic Raion Pouch x1.',
      },
      {
        label: 'Craft',
        value: '100 energy',
        note: 'One battery gets early tools moving.',
      },
      {
        label: 'Reserve',
        value: 'Copper',
        note: 'Do not starve Copper Wire and builder recipes.',
      },
    ],
    cautionTitle: 'Batteries can quietly eat your whole Copper stack',
    cautionBody:
      'A spare battery feels useful until you need Copper Wire for the next craft. Keep one working battery, maybe one backup, and save the rest of the Copper for the tool chain.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you craft Basic Battery in Subnautica 2?',
        body: 'Current blueprint data says Basic Battery is crafted at the Fabricator with Copper x2 and Acidic Raion Pouch x1.',
      },
      {
        title: 'Do you need to scan anything for Basic Battery?',
        body: 'No. Current data lists Basic Battery as unlocked by default at the start of a save.',
      },
      {
        title: 'How much energy does Basic Battery have?',
        body: 'Subnautica2Hub currently lists Basic Battery at 100 energy.',
      },
      {
        title: 'Which early tools use Basic Battery planning?',
        body: 'Current data connects Basic Battery to Scanner, Flashlight, Repair Tool, Lightstick, Power Cell, and Habitat Builder planning.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2AcidicRaionPouch,
        label: 'Acidic Raion Pouch Guide',
      },
      { href: Routes.Subnautica2Copper, label: 'Copper Location' },
      { href: Routes.Subnautica2CopperWire, label: 'Copper Wire Guide' },
      {
        href: Routes.Subnautica2BatteryTerminal,
        label: 'Battery Terminal Guide',
      },
      {
        href: Routes.Subnautica2AdvancedBattery,
        label: 'Advanced Battery Guide',
      },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker Guide' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
      { href: Routes.Subnautica2RepairTool, label: 'Repair Tool Guide' },
      { href: Routes.Subnautica2Salt, label: 'Salt Location Guide' },
      {
        href: Routes.Subnautica2HabitatBuilder,
        label: 'Habitat Builder Guide',
      },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 25, 2026 against Subnautica2.gg and Subnautica2Hub Basic Battery blueprint data. Recipe costs, output stats, and used-in lists can change during Early Access patches.',
    cardKicker: 'Battery card',
    cardBody:
      'Default unlock, Copper x2, Acidic Raion Pouch x1, 100 energy, and early tool order.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Crafting guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Basic Battery 指南 - 配方、Copper 分配和早期工具',
      description:
        'Subnautica 2 中文 Basic Battery 指南：整理默认解锁、Copper x2、Acidic Raion Pouch x1、100 能量和早期工具优先级。',
    },
    eyebrow: 'Subnautica 2 早期供电',
    title: 'Subnautica 2 Basic Battery 指南',
    description:
      'Basic Battery 看起来只是一个小材料，但它会影响开局节奏。第一块电池要早做，可也别一口气把所有 Copper 都变成备用电池。',
    quickLabel: '快速结论',
    quickAnswer:
      '当前蓝图数据把 Basic Battery 写成默认解锁，在 Fabricator 用 Copper x2 和 Acidic Raion Pouch x1 制作。Subnautica2Hub 当前写的是 100 energy。它会牵扯到 Scanner、Flashlight、Repair Tool、Lightstick、Power Cell 和 Habitat Builder 等早期工具链。',
    contentsLabel: '目录',
    routeTitle: 'Basic Battery 路线',
    routeSteps: [
      {
        title: '扫描路线前先做一块',
        body: 'Scanner 路线其实从电池开始。如果第一块电池没准备好，你找到碎片也会反复回基地，节奏很散。',
      },
      {
        title: 'Copper 按两块一组拿',
        body: '当前配方是 Copper x2 加 Acidic Raion Pouch x1。Copper 按两块一组放，什么时候够做电池会一眼清楚。',
      },
      {
        title: 'Pouch 单独跑一趟短路线',
        body: 'Acidic Raion Pouch 是这个配方里最容易忘的材料。把它当成一次短补给路线拿，拿完就回，不要把背包塞成杂物箱。',
      },
      {
        title: '不要过量做电池',
        body: 'Copper 还要进 Copper Wire 和早期电子材料。先做下一个工具需要的电池，剩下的 Copper 留给 Scanner、Habitat Builder 和线路材料。',
      },
      {
        title: '给供电材料单独放箱子',
        body: '等 Flashlight、Scanner、Repair Tool 和基地项目都开始要电池时，一个小的 power locker 会省很多翻箱时间。',
      },
    ],
    tableTitle: 'Basic Battery 检查表',
    tableHeaders: ['需求', '为什么要看'],
    tableRows: [
      ['Fabricator', '当前资料里 Basic Battery 是默认解锁。'],
      ['Copper x2', '最容易被 Copper Wire 抢走的材料。'],
      ['Acidic Raion Pouch x1', '这个有机材料最容易出门前忘掉。'],
      ['100 energy', 'Subnautica2Hub 当前把输出写成 100 energy。'],
      [
        '工具顺序',
        'Scanner、Flashlight、Repair Tool、Habitat Builder 等都会牵扯到电池规划。',
      ],
    ],
    visualTitle: '供电链',
    visualItems: [
      {
        label: '收集',
        value: '2+1',
        note: 'Copper x2，Acidic Raion Pouch x1。',
      },
      {
        label: '制作',
        value: '100 energy',
        note: '一块电池就能让早期工具跑起来。',
      },
      {
        label: '预留',
        value: 'Copper',
        note: '别把 Copper Wire 和建造配方饿死。',
      },
    ],
    cautionTitle: '电池会悄悄吃光你的 Copper',
    cautionBody:
      '备用电池当然有用，但下一个工具经常缺的是 Copper Wire。先保证一块正在用的电池，最多再留一块备用，剩下的 Copper 留给工具链。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Basic Battery 怎么做？',
        body: '当前蓝图数据写的是在 Fabricator 用 Copper x2 和 Acidic Raion Pouch x1 制作。',
      },
      {
        title: 'Basic Battery 需要扫描解锁吗？',
        body: '不需要。当前资料把 Basic Battery 写成开局默认解锁。',
      },
      {
        title: 'Basic Battery 有多少能量？',
        body: 'Subnautica2Hub 当前写的是 100 energy。',
      },
      {
        title: '哪些早期工具会用到电池规划？',
        body: '当前资料把 Basic Battery 和 Scanner、Flashlight、Repair Tool、Lightstick、Power Cell、Habitat Builder 等路线联系在一起。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      {
        href: Routes.Subnautica2AcidicRaionPouch,
        label: 'Acidic Raion Pouch 指南',
      },
      { href: Routes.Subnautica2Copper, label: 'Copper 位置' },
      { href: Routes.Subnautica2CopperWire, label: 'Copper Wire 指南' },
      {
        href: Routes.Subnautica2BatteryTerminal,
        label: 'Battery Terminal Guide',
      },
      {
        href: Routes.Subnautica2AdvancedBattery,
        label: 'Advanced Battery Guide',
      },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker 指南' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner 指南' },
      { href: Routes.Subnautica2RepairTool, label: 'Repair Tool 指南' },
      { href: Routes.Subnautica2HabitatBuilder, label: 'Habitat Builder 指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 25 日核对 Subnautica2.gg 和 Subnautica2Hub 的 Basic Battery 蓝图数据。抢先体验期间，配方消耗、能量数值和用途列表都可能随补丁调整。',
    cardKicker: '电池卡片',
    cardBody:
      '默认解锁、Copper x2、Acidic Raion Pouch x1、100 energy 和早期工具顺序。',
    cardTypeLabel: '类型',
    cardTypeValue: '制作指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: 'Early Access',
  },
  ja: {
    metadata: {
      title:
        'Subnautica 2 Basic Battery Guide - レシピ、Copper 管理、序盤ツール',
      description:
        'Subnautica 2 の Basic Battery ガイド。初期解放、Copper x2、Acidic Raion Pouch x1、100 energy、序盤ツール優先度を整理します。',
    },
    eyebrow: 'Subnautica 2 early power',
    title: 'Subnautica 2 Basic Battery Guide',
    description:
      'Basic Battery は小さな素材ですが、序盤のテンポをかなり左右します。最初の 1 個は早めに作り、Copper を全部バッテリーにしないようにします。',
    quickLabel: '要点',
    quickAnswer:
      '現在のブループリント情報では、Basic Battery は初期状態で解放されています。Fabricator で Copper x2 と Acidic Raion Pouch x1 から作ります。Subnautica2Hub は 100 energy と記載しており、Scanner、Flashlight、Repair Tool、Lightstick、Power Cell、Habitat Builder などの序盤ツール計画につながります。',
    contentsLabel: '目次',
    routeTitle: 'Basic Battery ルート',
    routeSteps: [
      {
        title: 'スキャン前に 1 個作る',
        body: 'Scanner ルートは battery から始まります。最初の battery がないと、破片を見つけても基地に戻る回数が増えます。',
      },
      {
        title: 'Copper は 2 個単位で見る',
        body: '現在のレシピは Copper x2 と Acidic Raion Pouch x1 です。Copper を 2 個単位で分けると、battery 分が残っているかすぐ分かります。',
      },
      {
        title: 'Pouch は短いルートで取る',
        body: 'Acidic Raion Pouch は忘れやすい材料です。短い補給ルートで取り、余計な素材集めに伸ばしすぎないほうが楽です。',
      },
      {
        title: '作りすぎない',
        body: 'Copper は Copper Wire や序盤電子素材にも使います。次のツールに必要な分だけ battery を作り、残りは Scanner、Habitat Builder、wiring 用に残します。',
      },
      {
        title: '電源素材の箱を分ける',
        body: 'Flashlight、Scanner、Repair Tool、基地作りが同時に始まると、battery 系の素材はすぐ混ざります。小さな専用箱があると楽です。',
      },
    ],
    tableTitle: 'Basic Battery チェックリスト',
    tableHeaders: ['必要なもの', '確認すること'],
    tableRows: [
      ['Fabricator', '現在の情報では Basic Battery は初期解放です。'],
      ['Copper x2', 'Copper Wire と取り合いになりやすい素材です。'],
      ['Acidic Raion Pouch x1', '出発前に忘れやすい有機素材です。'],
      ['100 energy', 'Subnautica2Hub は現在 100 energy と記載しています。'],
      [
        'Tool queue',
        'Scanner、Flashlight、Repair Tool、Habitat Builder などの計画に関わります。',
      ],
    ],
    visualTitle: 'Power chain',
    visualItems: [
      {
        label: 'Gather',
        value: '2+1',
        note: 'Copper x2、Acidic Raion Pouch x1。',
      },
      {
        label: 'Craft',
        value: '100 energy',
        note: '序盤ツールを動かす最初の電源。',
      },
      {
        label: 'Reserve',
        value: 'Copper',
        note: 'Copper Wire と builder レシピ用に残す。',
      },
    ],
    cautionTitle: 'Battery は Copper を静かに食べます',
    cautionBody:
      '予備 battery は便利ですが、次に止まる理由は Copper Wire 不足になりがちです。使う 1 個と予備 1 個くらいにして、残りの Copper はツールチェーンへ回します。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 の Basic Battery はどう作る？',
        body: '現在のブループリント情報では、Fabricator で Copper x2 と Acidic Raion Pouch x1 から作ります。',
      },
      {
        title: 'Basic Battery はスキャンが必要？',
        body: '必要ありません。現在の情報では初期解放です。',
      },
      {
        title: 'Basic Battery の energy は？',
        body: 'Subnautica2Hub は現在 100 energy と記載しています。',
      },
      {
        title: '序盤で battery 計画が必要なツールは？',
        body: 'Scanner、Flashlight、Repair Tool、Lightstick、Power Cell、Habitat Builder などにつながります。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      {
        href: Routes.Subnautica2AcidicRaionPouch,
        label: 'Acidic Raion Pouch Guide',
      },
      { href: Routes.Subnautica2Copper, label: 'Copper の場所' },
      { href: Routes.Subnautica2CopperWire, label: 'Copper Wire ガイド' },
      {
        href: Routes.Subnautica2BatteryTerminal,
        label: 'Battery Terminal Guide',
      },
      {
        href: Routes.Subnautica2AdvancedBattery,
        label: 'Advanced Battery Guide',
      },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker Guide' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner ガイド' },
      { href: Routes.Subnautica2RepairTool, label: 'Repair Tool Guide' },
      {
        href: Routes.Subnautica2HabitatBuilder,
        label: 'Habitat Builder Guide',
      },
      { href: Routes.Subnautica2Resources, label: '資源ガイド' },
      { href: Routes.Subnautica2Crafting, label: 'クラフトガイド' },
    ],
    sourcesTitle: 'ソースメモ',
    sourceBody:
      '2026年5月25日に Subnautica2.gg と Subnautica2Hub の Basic Battery 情報を確認しました。Early Access 中はレシピ、出力、用途リストが変わる可能性があります。',
    cardKicker: 'Battery card',
    cardBody:
      '初期解放、Copper x2、Acidic Raion Pouch x1、100 energy、序盤ツール順。',
    cardTypeLabel: '種類',
    cardTypeValue: 'クラフトガイド',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: '状態',
    cardStatusValue: 'Early Access',
  },
};

const fallbackLocaleAliases = {
  de: {
    title: 'Subnautica 2 Basic Battery Guide',
    description:
      'Guide for Basic Battery recipe, Copper x2, Acidic Raion Pouch x1, 100 energy, and early tools.',
  },
  fr: {
    title: 'Subnautica 2 Basic Battery Guide',
    description:
      'Guide Basic Battery: Copper x2, Acidic Raion Pouch x1, 100 energy et outils du debut.',
  },
  'pt-BR': {
    title: 'Subnautica 2 Basic Battery Guide',
    description:
      'Guia de Basic Battery com Copper x2, Acidic Raion Pouch x1, 100 energy e ferramentas iniciais.',
  },
  'es-419': {
    title: 'Subnautica 2 Basic Battery Guide',
    description:
      'Guia de Basic Battery: Copper x2, Acidic Raion Pouch x1, 100 energy y herramientas iniciales.',
  },
  ko: {
    title: 'Subnautica 2 Basic Battery Guide',
    description:
      'Basic Battery recipe, Copper x2, Acidic Raion Pouch x1, 100 energy, and early tool planning.',
  },
  ru: {
    title: 'Subnautica 2 Basic Battery Guide',
    description:
      'Guide for Basic Battery recipe, Copper x2, Acidic Raion Pouch x1, 100 energy, and early tools.',
  },
} satisfies Record<string, { title: string; description: string }>;

function getCopy(locale: Locale): BasicBatteryCopy {
  if (basicBatteryCopy[locale]) {
    return basicBatteryCopy[locale];
  }

  const fallback =
    fallbackLocaleAliases[locale as keyof typeof fallbackLocaleAliases] ??
    fallbackLocaleAliases.de;

  return {
    ...basicBatteryCopy.en,
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
    pathname: Routes.Subnautica2BasicBattery,
  });
}

export default async function BasicBatteryPage({
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
      icon={BatteryChargingIcon}
      locale={locale}
      pathname={Routes.Subnautica2BasicBattery}
      sources={sharedSources}
    />
  );
}
