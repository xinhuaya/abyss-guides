import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { CableIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type CopperWireCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-25';
const UPDATED_AT = '2026-05-25';

const sharedSources = [
  {
    href: 'https://subnautica2.gg/blueprints/copper-wire',
    label: 'Subnautica2.gg Copper Wire blueprint',
  },
  {
    href: 'https://www.dexerto.com/wikis/subnautica-2/resources/copper-wire/',
    label: 'Dexerto Copper Wire database',
  },
  {
    href: 'https://subnautica2hub.com/blueprints/copper-wire',
    label: 'Subnautica2Hub Copper Wire blueprint',
  },
];

const copperWireCopy: Record<string, CopperWireCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Copper Wire Guide - Recipe, Copper Route, and Wiring Kit Uses',
      description:
        'A practical Subnautica 2 Copper Wire guide covering the 2 Copper recipe, early Copper route, Wiring Kit chain, Habitat Builder, Processor, and storage tips.',
    },
    eyebrow: 'Subnautica 2 electronics material',
    title: 'Subnautica 2 Copper Wire Guide',
    description:
      'Copper Wire is the quiet hinge between basic Copper runs and the first real electronics chain. It is simple to craft, but easy to mismanage if every Copper piece turns into batteries first.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current blueprint data lists Copper Wire as unlocked by default and crafted at the Fabrication Station from 2 Copper. Keep a few wires ready for Wiring Kit, Habitat Builder, Processor, Battery Terminal, Tadpole Dock, and base pieces, but do not convert every Copper stack before your battery and tool plan is settled.',
    contentsLabel: 'Contents',
    routeTitle: 'Copper Wire craft plan',
    routeSteps: [
      {
        title: 'Start with a short Copper loop',
        body: 'Use the Lifepod cave route first. A two-minute Copper loop beats one long panic swim, especially before your oxygen upgrades are comfortable.',
      },
      {
        title: 'Split Copper before crafting',
        body: 'Copper has two early jobs: batteries and wire. Put aside a small wire pile before the Scanner, spare batteries, and base parts eat the whole stack.',
      },
      {
        title: 'Craft wire in pairs',
        body: 'Copper Wire currently costs 2 Copper. Count in pairs when you leave base so you do not return with an odd stack that still cannot make the next wire.',
      },
      {
        title: 'Feed Wiring Kit deliberately',
        body: 'Wiring Kit uses Copper Wire and Silver. If System Chip or a deeper electronics recipe is next, make the wire first, then check whether Silver is the real blocker.',
      },
      {
        title: 'Keep a base-building reserve',
        body: 'Habitat Builder, Processor, Battery Terminal, Tadpole Dock, and several builder pieces can pull from the same wire pile. Label the locker before the base project gets messy.',
      },
    ],
    tableTitle: 'Copper Wire checklist',
    tableHeaders: ['Item', 'What to confirm'],
    tableRows: [
      [
        'Copper x2',
        'Current blueprint data lists two Copper for one Copper Wire.',
      ],
      [
        'Battery plan',
        'Do not spend every Copper piece on batteries before saving wire.',
      ],
      ['Wiring Kit', 'Wire plus Silver starts the next electronics chain.'],
      [
        'Base tools',
        'Habitat Builder and Processor can make Copper Wire disappear quickly.',
      ],
      [
        'Storage rule',
        'Keep Copper, Copper Wire, Silver, Wiring Kit, and Quartz close together.',
      ],
    ],
    visualTitle: 'Copper split',
    visualItems: [
      {
        label: 'Mine',
        value: 'Copper',
        note: 'Run short cave loops until the stack is comfortable.',
      },
      {
        label: 'Split',
        value: 'Wire',
        note: 'Reserve pairs of Copper for electronics.',
      },
      {
        label: 'Spend',
        value: 'Base',
        note: 'Use wire for Wiring Kit, builder tools, and stations.',
      },
    ],
    cautionTitle: 'Do not let batteries eat the whole stack',
    cautionBody:
      'Batteries are the obvious early Copper spend, so they quietly starve Copper Wire. Before you craft every spare battery, set aside enough Copper for the next Wiring Kit or base tool.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you make Copper Wire in Subnautica 2?',
        body: 'Current blueprint data lists Copper Wire as unlocked by default and crafted at the Fabrication Station from 2 Copper.',
      },
      {
        title: 'What is Copper Wire used for?',
        body: 'Current databases connect it to Wiring Kit, Habitat Builder, Processor, Battery Terminal, Tadpole Dock, and several base or builder recipes.',
      },
      {
        title: 'Should I make Copper Wire before batteries?',
        body: 'Make the first battery and Scanner path, then reserve a few Copper pairs for wire. The mistake is crafting only batteries and discovering the base or Wiring Kit chain is empty.',
      },
      {
        title: 'Why does Wiring Kit still feel blocked?',
        body: 'Copper Wire is only half the recipe. If you already have wire, the blocker is usually Silver, so switch to the Silver route instead of farming more Copper.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Copper, label: 'Copper Location' },
      { href: Routes.Subnautica2WiringKit, label: 'Wiring Kit Guide' },
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2SystemChip, label: 'System Chip Guide' },
      { href: Routes.Subnautica2BaseBuilding, label: 'Base Building Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 25, 2026 against current Subnautica2.gg, Dexerto, and Subnautica2Hub Copper Wire data. Subnautica 2 is still in Early Access, so recipes and builder uses can move after patches.',
    cardKicker: 'Electronics card',
    cardBody:
      'Copper pairs, battery timing, Wiring Kit prep, base-building use, and electronics storage.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Crafting material',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Copper Wire 指南 - 配方、Copper 路线和 Wiring Kit 用途',
      description:
        'Subnautica 2 中文 Copper Wire 指南：整理 2 Copper 配方、早期 Copper 路线、Wiring Kit 链、Habitat Builder、Processor 和收纳建议。',
    },
    eyebrow: 'Subnautica 2 电子材料',
    title: 'Subnautica 2 Copper Wire 指南',
    description:
      'Copper Wire 本身不难做，难的是前期 Copper 太抢手。电池要它，工具要它，Wiring Kit 和基地工具也要它，所以最好一开始就分好用途。',
    quickLabel: '快速结论',
    quickAnswer:
      '当前蓝图数据把 Copper Wire 写成默认解锁，在 Fabrication Station 用 2 Copper 制作。建议留几卷给 Wiring Kit、Habitat Builder、Processor、Battery Terminal、Tadpole Dock 和基地部件；在电池和工具路线没理清前，不要把所有 Copper 都一次性花掉。',
    contentsLabel: '目录',
    routeTitle: 'Copper Wire 制作规划',
    routeSteps: [
      {
        title: '先跑短 Copper 循环',
        body: '开局先用 Lifepod 附近洞穴路线。两三分钟能重复跑的 Copper 循环，比氧气不够时硬冲远点更稳定。',
      },
      {
        title: '制作前先分配 Copper',
        body: 'Copper 前期至少有两条线：电池和线圈。先给 Copper Wire 留一小叠，再去做 Scanner、备用电池和基地部件。',
      },
      {
        title: '按两块 Copper 来数',
        body: 'Copper Wire 当前需要 2 Copper。出门采集时按偶数规划，不然带回一堆零散 Copper，还是差一块才能做下一卷线。',
      },
      {
        title: '专门喂给 Wiring Kit',
        body: 'Wiring Kit 会吃 Copper Wire 和 Silver。System Chip 或更深一层电子配方卡住时，先做线，再看真正缺的是不是 Silver。',
      },
      {
        title: '给基地工具留库存',
        body: 'Habitat Builder、Processor、Battery Terminal、Tadpole Dock 和不少基地物件都会用到这堆线。箱子提前分好类，后面少很多翻箱时间。',
      },
    ],
    tableTitle: 'Copper Wire 检查表',
    tableHeaders: ['项目', '要确认什么'],
    tableRows: [
      ['Copper x2', '当前蓝图数据是一卷 Copper Wire 需要两块 Copper。'],
      ['电池计划', '别把所有 Copper 都做成电池，先给 wire 留一部分。'],
      ['Wiring Kit', 'Copper Wire 加 Silver 会进入下一层电子材料链。'],
      ['基地工具', 'Habitat Builder 和 Processor 会很快消耗 Copper Wire。'],
      [
        '箱子规则',
        'Copper、Copper Wire、Silver、Wiring Kit、Quartz 放近一点。',
      ],
    ],
    visualTitle: 'Copper 分流',
    visualItems: [
      {
        label: '采集',
        value: 'Copper',
        note: '先跑短洞穴路线，把基础库存做起来。',
      },
      {
        label: '分配',
        value: 'Wire',
        note: '按两块 Copper 一卷线来预留。',
      },
      {
        label: '使用',
        value: 'Base',
        note: '给 Wiring Kit、基地工具和工作站使用。',
      },
    ],
    cautionTitle: '别让电池吃完整堆 Copper',
    cautionBody:
      '电池是前期最顺手的 Copper 消耗，但它也最容易把 Copper Wire 的库存吃空。每次做备用电池前，先看下一步 Wiring Kit 或基地工具还缺不缺线。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Copper Wire 怎么做？',
        body: '当前蓝图数据写的是默认解锁，在 Fabrication Station 用 2 Copper 制作。',
      },
      {
        title: 'Copper Wire 有什么用？',
        body: '当前资料把它和 Wiring Kit、Habitat Builder、Processor、Battery Terminal、Tadpole Dock 以及一些基地/建造配方联系在一起。',
      },
      {
        title: '要先做 Copper Wire 还是先做电池？',
        body: '先打通第一块电池和 Scanner 路线，然后留几组 Copper 给 Wire。最常见的问题是只做电池，回头发现 Wiring Kit 或基地工具没材料。',
      },
      {
        title: '为什么 Wiring Kit 还是做不了？',
        body: 'Copper Wire 只解决一半配方。如果线已经有了，通常真正缺的是 Silver，这时应该去跑 Silver 路线。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Copper, label: 'Copper 位置' },
      { href: Routes.Subnautica2WiringKit, label: 'Wiring Kit 指南' },
      { href: Routes.Subnautica2Silver, label: 'Silver 位置' },
      { href: Routes.Subnautica2SystemChip, label: 'System Chip 指南' },
      { href: Routes.Subnautica2BaseBuilding, label: '基地建造指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 25 日核对 Subnautica2.gg、Dexerto 和 Subnautica2Hub 的 Copper Wire 数据。Subnautica 2 仍处于抢先体验阶段，配方和建造用途可能随补丁调整。',
    cardKicker: '电子材料卡',
    cardBody:
      'Copper 配对、电池制作时机、Wiring Kit 前置、基地建造用途和电子材料收纳。',
    cardTypeLabel: '类型',
    cardTypeValue: '制作材料',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: 'Early Access',
  },
  ja: {
    metadata: {
      title:
        'Subnautica 2 Copper Wire Guide - レシピ、Copper ルート、Wiring Kit',
      description:
        'Subnautica 2 の Copper Wire ガイド。2 Copper レシピ、序盤 Copper ルート、Wiring Kit、Habitat Builder、Processor、保管の考え方を整理します。',
    },
    eyebrow: 'Subnautica 2 電子素材',
    title: 'Subnautica 2 Copper Wire Guide',
    description:
      'Copper Wire は簡単に作れますが、序盤の Copper はすぐ足りなくなります。バッテリー、ツール、Wiring Kit、基地ツールの分を先に分けておきましょう。',
    quickLabel: '要点',
    quickAnswer:
      '現在のブループリント情報では Copper Wire は最初から解放されており、Fabrication Station で 2 Copper から作ります。Wiring Kit、Habitat Builder、Processor、Battery Terminal、Tadpole Dock 用に少し残し、Copper を全部バッテリーにしないようにします。',
    contentsLabel: '目次',
    routeTitle: 'Copper Wire 作成プラン',
    routeSteps: [
      {
        title: '短い Copper ルートから始める',
        body: 'まずは Lifepod 近くの洞窟ルートを使います。酸素が少ない時は、長い遠征より短く繰り返せるルートの方が安定します。',
      },
      {
        title: 'Copper を先に分ける',
        body: 'Copper はバッテリーとワイヤーの両方で使います。Scanner や予備バッテリーを作る前に、Copper Wire 用の分を少し分けておきます。',
      },
      {
        title: '2 個単位で数える',
        body: 'Copper Wire は現在 2 Copper で作ります。採集に出る時は偶数を意識すると、あと 1 個足りない状況を減らせます。',
      },
      {
        title: 'Wiring Kit に回す',
        body: 'Wiring Kit は Copper Wire と Silver を使います。System Chip などで止まったら、ワイヤーがあるか確認し、次に Silver を見ます。',
      },
      {
        title: '基地用の予備を残す',
        body: 'Habitat Builder、Processor、Battery Terminal、Tadpole Dock なども同じ在庫を使います。電子素材用の箱を早めに作ると楽です。',
      },
    ],
    tableTitle: 'Copper Wire チェックリスト',
    tableHeaders: ['項目', '確認すること'],
    tableRows: [
      ['Copper x2', '現在の情報では Copper Wire 1 個に Copper 2 個。'],
      ['バッテリー計画', 'Copper を全部バッテリーにする前に wire を残す。'],
      ['Wiring Kit', 'Copper Wire と Silver が次の電子素材チェーンに入る。'],
      ['基地ツール', 'Habitat Builder と Processor で wire がすぐ減る。'],
      [
        '保管場所',
        'Copper、Copper Wire、Silver、Wiring Kit、Quartz を近くに置く。',
      ],
    ],
    visualTitle: 'Copper の分け方',
    visualItems: [
      {
        label: '採集',
        value: 'Copper',
        note: '短い洞窟ルートで在庫を作る。',
      },
      {
        label: '分配',
        value: 'Wire',
        note: '2 Copper を 1 セットとして残す。',
      },
      {
        label: '使用',
        value: 'Base',
        note: 'Wiring Kit、基地ツール、ステーションに使う。',
      },
    ],
    cautionTitle: 'バッテリーで Copper を使い切らない',
    cautionBody:
      '序盤はバッテリーを作りたくなりますが、Copper Wire が空になると Wiring Kit や基地ツールが止まります。予備バッテリーの前に次の wire 分を確認しましょう。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 で Copper Wire はどう作る？',
        body: '現在のブループリント情報では、最初から解放されており Fabrication Station で 2 Copper から作ります。',
      },
      {
        title: 'Copper Wire は何に使う？',
        body: 'Wiring Kit、Habitat Builder、Processor、Battery Terminal、Tadpole Dock、基地や建築レシピに使います。',
      },
      {
        title: 'バッテリーより先に作るべき？',
        body: '最初のバッテリーと Scanner は優先し、その後 Copper の一部を Copper Wire 用に残すのがおすすめです。',
      },
      {
        title: 'Wiring Kit がまだ作れない時は？',
        body: 'Copper Wire があるなら、足りないのは Silver の可能性が高いです。Copper ではなく Silver ルートを確認しましょう。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2Copper, label: 'Copper の場所' },
      { href: Routes.Subnautica2WiringKit, label: 'Wiring Kit ガイド' },
      { href: Routes.Subnautica2Silver, label: 'Silver の場所' },
      { href: Routes.Subnautica2SystemChip, label: 'System Chip ガイド' },
      { href: Routes.Subnautica2BaseBuilding, label: 'Base Building ガイド' },
      { href: Routes.Subnautica2Crafting, label: 'クラフトガイド' },
    ],
    sourcesTitle: 'ソースメモ',
    sourceBody:
      '2026年5月25日に Subnautica2.gg、Dexerto、Subnautica2Hub の Copper Wire 情報を確認しました。Early Access 中はレシピや建築用途が変わる可能性があります。',
    cardKicker: '電子素材カード',
    cardBody:
      'Copper の分配、バッテリーのタイミング、Wiring Kit 準備、基地建築、素材保管。',
    cardTypeLabel: '種類',
    cardTypeValue: 'クラフト素材',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: '状態',
    cardStatusValue: 'Early Access',
  },
};

const fallbackLocaleAliases = {
  de: {
    title: 'Subnautica 2 Copper Wire Guide',
    description:
      'Guide for Copper Wire recipe, Copper route, Wiring Kit, Habitat Builder, Processor, and electronics storage.',
  },
  fr: {
    title: 'Subnautica 2 Copper Wire Guide',
    description:
      'Guide Copper Wire: recette, Copper, Wiring Kit, Habitat Builder, Processor et stockage.',
  },
  'pt-BR': {
    title: 'Subnautica 2 Copper Wire Guide',
    description:
      'Guia de Copper Wire com receita, Copper, Wiring Kit, Habitat Builder, Processor e armazenamento.',
  },
  'es-419': {
    title: 'Subnautica 2 Copper Wire Guide',
    description:
      'Guia de Copper Wire: receta, Copper, Wiring Kit, Habitat Builder, Processor y almacenamiento.',
  },
  ko: {
    title: 'Subnautica 2 Copper Wire Guide',
    description:
      'Copper Wire recipe, Copper route, Wiring Kit, Habitat Builder, Processor, and electronics storage.',
  },
  ru: {
    title: 'Subnautica 2 Copper Wire Guide',
    description:
      'Guide for Copper Wire recipe, Copper route, Wiring Kit, Habitat Builder, Processor, and electronics storage.',
  },
} satisfies Record<string, { title: string; description: string }>;

function getCopy(locale: Locale): CopperWireCopy {
  if (copperWireCopy[locale]) {
    return copperWireCopy[locale];
  }

  const fallback =
    fallbackLocaleAliases[locale as keyof typeof fallbackLocaleAliases] ??
    fallbackLocaleAliases.de;

  return {
    ...copperWireCopy.en,
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
    pathname: Routes.Subnautica2CopperWire,
  });
}

export default async function CopperWirePage({
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
      icon={CableIcon}
      locale={locale}
      pathname={Routes.Subnautica2CopperWire}
      sources={sharedSources}
    />
  );
}
