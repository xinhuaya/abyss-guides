import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { FlaskConicalIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type MildAcidCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-25';
const UPDATED_AT = '2026-05-25';

const sharedSources = [
  {
    href: 'https://subnautica2.gg/blueprints/mild-acid',
    label: 'Subnautica2.gg Mild Acid blueprint',
  },
  {
    href: 'https://subnautica2hub.com/blueprints/mild-acid',
    label: 'Subnautica2Hub Mild Acid blueprint',
  },
  {
    href: 'https://www.dexerto.com/wikis/subnautica-2/resources/mild-acid/',
    label: 'Dexerto Mild Acid wiki page',
  },
];

const mildAcidCopy: Record<string, MildAcidCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Mild Acid Guide - Recipe, Processor Route, and Uses',
      description:
        'A practical Subnautica 2 Mild Acid guide covering Acidic Raion Pouch, Copper, Fabricator recipe, Processor route, Biolab, Processor, and Echo Location uses.',
    },
    eyebrow: 'Subnautica 2 chemical material',
    title: 'Subnautica 2 Mild Acid Guide',
    description:
      'Mild Acid is where the pouch route stops being just a battery errand. Once you need Biolab, Processor, or Echo Location, the little Acidic Raion Pouch loop turns into a real crafting bottleneck.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current Subnautica2.gg and Subnautica2Hub blueprint data list Mild Acid as unlocked by default and crafted at the Fabricator with Acidic Raion Pouch x2 and Copper x1. Dexerto also lists a Processor route that uses Acidic Raion Pouch x2. Current use lists connect Mild Acid to Biolab, Processor, and Echo Location, so keep extra pouches if those upgrades are next.',
    contentsLabel: 'Contents',
    routeTitle: 'Mild Acid crafting plan',
    routeSteps: [
      {
        title: 'Start from the Acidic Raion Pouch loop',
        body: 'Mild Acid depends on pouches first. If you are still missing the source, go back to the Acidic Raion Pouch route and mark your Coral Gardens path before you farm Copper.',
      },
      {
        title: 'Use Fabricator as the safe recipe',
        body: 'The two blueprint databases agree on the Fabricator recipe: Acidic Raion Pouch x2 and Copper x1 for Mild Acid x1. That is the recipe to plan around first.',
      },
      {
        title: 'Check Processor once it exists',
        body: 'Dexerto lists a Processor route using Acidic Raion Pouch x2. Treat it as a useful alternate route, but confirm it in your save before moving all pouch stock away from the Fabricator.',
      },
      {
        title: 'Make acid in pairs',
        body: 'Pouches are the slow part. A single Mild Acid may unblock one craft, but two or three planned acids stop you from making the same harvest trip every ten minutes.',
      },
      {
        title: 'Store it near upgrade crafting',
        body: 'Biolab, Processor, and Echo Location sit around different build and upgrade loops. A labeled chemical locker saves a lot of "where did I put that acid" time.',
      },
    ],
    tableTitle: 'Mild Acid checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      [
        'Fabricator recipe',
        'Acidic Raion Pouch x2 and Copper x1 in current blueprint data.',
      ],
      [
        'Processor route',
        'Dexerto lists Acidic Raion Pouch x2 at a Processor.',
      ],
      ['Unlock state', 'Subnautica2.gg and S2Hub list default unlock.'],
      [
        'Used in',
        'Current public data connects Mild Acid to Biolab, Processor, and Echo Location.',
      ],
      [
        'Patch check',
        'Recipe routes and station requirements can change during Early Access.',
      ],
    ],
    visualTitle: 'Acid chain',
    visualItems: [
      {
        label: 'Harvest',
        value: 'Pouches',
        note: 'Acidic Raion Pouch is the slow input.',
      },
      {
        label: 'Craft',
        value: 'Mild Acid',
        note: 'Fabricator first, Processor if available.',
      },
      {
        label: 'Spend',
        value: 'Upgrades',
        note: 'Biolab, Processor, Echo Location.',
      },
    ],
    cautionTitle: 'Do not spend every pouch on batteries',
    cautionBody:
      'Basic Battery only needs one Acidic Raion Pouch, but Mild Acid asks for two. Once you are past the first Scanner and tool crafts, start reserving pouch stock for chemistry.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you craft Mild Acid in Subnautica 2?',
        body: 'Current Subnautica2.gg and Subnautica2Hub blueprint data list the Fabricator recipe as Acidic Raion Pouch x2 plus Copper x1.',
      },
      {
        title: 'Can you make Mild Acid at a Processor?',
        body: 'Dexerto currently lists a Processor route using Acidic Raion Pouch x2. Confirm it in-game before depending on that route, because public Early Access data can differ.',
      },
      {
        title: 'What is Mild Acid used for?',
        body: 'Current public data connects Mild Acid to Biolab, Processor, and Echo Location recipes.',
      },
      {
        title: 'Do you need to scan Mild Acid?',
        body: 'Subnautica2.gg and Subnautica2Hub currently list Mild Acid as unlocked by default. If it does not appear in your save, pick up an Acidic Raion Pouch and check the Fabricator again.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2AcidicRaionPouch,
        label: 'Acidic Raion Pouch Guide',
      },
      { href: Routes.Subnautica2Processor, label: 'Processor Guide' },
      { href: Routes.Subnautica2Biolab, label: 'Biolab Guide' },
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery Guide' },
      { href: Routes.Subnautica2Copper, label: 'Copper Location' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 25, 2026 against Subnautica2.gg, Subnautica2Hub, and Dexerto Mild Acid pages. Public Early Access datasets do not fully agree on station routes, so this page separates the agreed Fabricator recipe from the Processor route.',
    cardKicker: 'Chemical card',
    cardBody:
      'Acidic Raion Pouch, Copper, Fabricator recipe, Processor route, Biolab and Echo Location uses.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Crafting guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Mild Acid 指南 - 配方、Processor 路线和用途',
      description:
        'Subnautica 2 中文 Mild Acid 指南：整理 Acidic Raion Pouch、Copper、Fabricator 配方、Processor 路线、Biolab、Processor 和 Echo Location 用途。',
    },
    eyebrow: 'Subnautica 2 化学材料',
    title: 'Subnautica 2 Mild Acid 指南',
    description:
      'Mild Acid 开始把 Acidic Raion Pouch 从电池材料变成真正的化学材料。等你要做 Biolab、Processor 或 Echo Location 时，这条 pouch 路线就会突然变重要。',
    quickLabel: '快速结论',
    quickAnswer:
      'Subnautica2.gg 和 Subnautica2Hub 当前蓝图数据都把 Mild Acid 写成默认解锁，在 Fabricator 用 Acidic Raion Pouch x2 和 Copper x1 制作。Dexerto 还列了 Processor 路线，材料是 Acidic Raion Pouch x2。当前用途数据把 Mild Acid 和 Biolab、Processor、Echo Location 联系在一起，所以后面要做升级时，pouch 不要全做成电池。',
    contentsLabel: '目录',
    routeTitle: 'Mild Acid 制作规划',
    routeSteps: [
      {
        title: '从 Acidic Raion Pouch 路线开始',
        body: 'Mild Acid 先卡 pouch。如果来源还没摸清，先回到 Acidic Raion Pouch 页面，把 Coral Gardens 的入口和回程路线记下来，再去补 Copper。',
      },
      {
        title: '先按 Fabricator 配方准备',
        body: '两个蓝图数据库都写了 Fabricator 配方：Acidic Raion Pouch x2 加 Copper x1，产出 Mild Acid x1。先按这条路线备料最稳。',
      },
      {
        title: '有 Processor 后再核对第二条路线',
        body: 'Dexerto 当前列了 Processor 路线，材料是 Acidic Raion Pouch x2。可以当成备用路线，但在你的存档里确认前，别把所有 pouch 都搬离 Fabricator。',
      },
      {
        title: '一次做两三份更省事',
        body: '真正慢的是 pouch。只做一份 Mild Acid 能解一个配方，但很快又要回去采。提前做两三份，后面少跑很多重复路。',
      },
      {
        title: '单独放化学材料箱',
        body: 'Biolab、Processor、Echo Location 会把你带到不同制作和升级路线。Mild Acid 单独放箱子，后面找材料时不会翻到烦。',
      },
    ],
    tableTitle: 'Mild Acid 检查表',
    tableHeaders: ['需求', '要确认什么'],
    tableRows: [
      [
        'Fabricator 配方',
        '当前蓝图数据是 Acidic Raion Pouch x2 和 Copper x1。',
      ],
      ['Processor 路线', 'Dexerto 当前列的是 Acidic Raion Pouch x2。'],
      ['解锁状态', 'Subnautica2.gg 和 S2Hub 当前写的是默认解锁。'],
      [
        '用途',
        '当前公开数据把它和 Biolab、Processor、Echo Location 联系在一起。',
      ],
      ['补丁核对', '抢先体验期间，配方路线和制作站要求都可能改。'],
    ],
    visualTitle: '酸液链路',
    visualItems: [
      {
        label: '采集',
        value: 'Pouch',
        note: 'Acidic Raion Pouch 是慢材料。',
      },
      {
        label: '制作',
        value: 'Mild Acid',
        note: '先按 Fabricator，Processor 有了再核对。',
      },
      {
        label: '消耗',
        value: '升级',
        note: 'Biolab、Processor、Echo Location。',
      },
    ],
    cautionTitle: '别把所有 pouch 都拿去做电池',
    cautionBody:
      'Basic Battery 只吃一份 Acidic Raion Pouch，但 Mild Acid 一次要两份。过了第一批 Scanner 和工具制作后，就该开始给化学路线预留 pouch。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Mild Acid 怎么做？',
        body: 'Subnautica2.gg 和 Subnautica2Hub 当前蓝图数据写的是 Fabricator 配方：Acidic Raion Pouch x2 加 Copper x1。',
      },
      {
        title: 'Mild Acid 能在 Processor 做吗？',
        body: 'Dexerto 当前列了 Processor 路线，材料是 Acidic Raion Pouch x2。因为抢先体验公开数据会有差异，建议先在存档里确认。',
      },
      {
        title: 'Mild Acid 有什么用？',
        body: '当前公开数据把 Mild Acid 和 Biolab、Processor、Echo Location 配方联系在一起。',
      },
      {
        title: 'Mild Acid 需要扫描解锁吗？',
        body: 'Subnautica2.gg 和 Subnautica2Hub 当前写的是默认解锁。如果你的存档里没出现，先捡一次 Acidic Raion Pouch，再回 Fabricator 看。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      {
        href: Routes.Subnautica2AcidicRaionPouch,
        label: 'Acidic Raion Pouch 指南',
      },
      { href: Routes.Subnautica2Processor, label: 'Processor 指南' },
      { href: Routes.Subnautica2Biolab, label: 'Biolab 指南' },
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery 指南' },
      { href: Routes.Subnautica2Copper, label: 'Copper 位置' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid 指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 25 日核对 Subnautica2.gg、Subnautica2Hub 和 Dexerto 的 Mild Acid 页面。当前公开抢先体验数据对制作站路线并不完全一致，所以页面把共识 Fabricator 配方和 Processor 路线分开写。',
    cardKicker: '化学卡片',
    cardBody:
      'Acidic Raion Pouch、Copper、Fabricator 配方、Processor 路线、Biolab 和 Echo Location 用途。',
    cardTypeLabel: '类型',
    cardTypeValue: '制作指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: 'Early Access',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 Mild Acid Guide - レシピ、Processor ルート、使い道',
      description:
        'Subnautica 2 の Mild Acid ガイド。Acidic Raion Pouch、Copper、Fabricator レシピ、Processor ルート、Biolab、Processor、Echo Location 用途を整理します。',
    },
    eyebrow: 'Subnautica 2 chemical material',
    title: 'Subnautica 2 Mild Acid Guide',
    description:
      'Mild Acid は Acidic Raion Pouch が battery 用だけではなくなる地点です。Biolab、Processor、Echo Location が見えてくると、pouch ルートが急に大事になります。',
    quickLabel: '要点',
    quickAnswer:
      'Subnautica2.gg と Subnautica2Hub の現在の blueprint 情報では、Mild Acid は初期解放で、Fabricator に Acidic Raion Pouch x2 と Copper x1 を入れて作ります。Dexerto は Acidic Raion Pouch x2 の Processor ルートも記載しています。用途は Biolab、Processor、Echo Location に関係します。',
    contentsLabel: '目次',
    routeTitle: 'Mild Acid の作り方',
    routeSteps: [
      {
        title: 'Acidic Raion Pouch から始める',
        body: 'Mild Acid はまず pouch で止まります。まだ場所が曖昧なら、Coral Gardens の入口と帰り道をメモしてから Copper を集めます。',
      },
      {
        title: 'Fabricator レシピを基準にする',
        body: '二つの blueprint データベースは Fabricator レシピで一致しています。Acidic Raion Pouch x2 と Copper x1 で Mild Acid x1 です。',
      },
      {
        title: 'Processor は入手後に確認する',
        body: 'Dexerto は Processor ルートを載せています。便利な別ルートですが、自分の save で確認するまでは Fabricator 用の在庫も残しておきます。',
      },
      {
        title: '二、三個まとめて作る',
        body: '遅いのは pouch 集めです。Mild Acid を一個だけ作ると、次の craft ですぐ同じ場所へ戻ることになります。',
      },
      {
        title: '化学素材用の箱を分ける',
        body: 'Biolab、Processor、Echo Location は別々の upgrade ルートに出てきます。Mild Acid は専用箱に入れると後で探しやすいです。',
      },
    ],
    tableTitle: 'Mild Acid チェックリスト',
    tableHeaders: ['必要なもの', '確認すること'],
    tableRows: [
      [
        'Fabricator recipe',
        '現在の blueprint 情報では Acidic Raion Pouch x2 と Copper x1。',
      ],
      ['Processor route', 'Dexerto は Acidic Raion Pouch x2 と記載。'],
      ['Unlock state', 'Subnautica2.gg と S2Hub は初期解放と記載。'],
      ['Used in', 'Biolab、Processor、Echo Location に関係します。'],
      [
        'Patch check',
        'Early Access 中は station requirements が変わる可能性があります。',
      ],
    ],
    visualTitle: 'Acid chain',
    visualItems: [
      {
        label: 'Harvest',
        value: 'Pouches',
        note: 'Acidic Raion Pouch が遅い材料。',
      },
      {
        label: 'Craft',
        value: 'Mild Acid',
        note: 'Fabricator を基準に、Processor は確認後。',
      },
      {
        label: 'Spend',
        value: 'Upgrades',
        note: 'Biolab、Processor、Echo Location。',
      },
    ],
    cautionTitle: 'Pouch を全部 battery にしない',
    cautionBody:
      'Basic Battery は pouch 1 個ですが、Mild Acid は 2 個使います。Scanner と最初の道具が終わったら、化学素材用に pouch を残します。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 の Mild Acid はどう作る？',
        body: '現在の Subnautica2.gg と Subnautica2Hub の blueprint 情報では、Fabricator で Acidic Raion Pouch x2 と Copper x1 から作ります。',
      },
      {
        title: 'Processor でも作れますか？',
        body: 'Dexerto は Acidic Raion Pouch x2 の Processor ルートを記載しています。Early Access の公開データは差が出るので、save 内で確認してください。',
      },
      {
        title: 'Mild Acid の使い道は？',
        body: '現在の公開データでは Biolab、Processor、Echo Location に関係します。',
      },
      {
        title: 'Mild Acid は scan が必要？',
        body: 'Subnautica2.gg と Subnautica2Hub は初期解放と記載しています。表示されない場合は Acidic Raion Pouch を拾ってから Fabricator を確認してください。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      {
        href: Routes.Subnautica2AcidicRaionPouch,
        label: 'Acidic Raion Pouch Guide',
      },
      { href: Routes.Subnautica2Processor, label: 'Processor Guide' },
      { href: Routes.Subnautica2Biolab, label: 'Biolab Guide' },
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery Guide' },
      { href: Routes.Subnautica2Copper, label: 'Copper の場所' },
      { href: Routes.Subnautica2Crafting, label: 'クラフトガイド' },
      { href: Routes.Subnautica2Resources, label: '資源ガイド' },
      { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid Guide' },
    ],
    sourcesTitle: 'ソースメモ',
    sourceBody:
      '2026年5月25日に Subnautica2.gg、Subnautica2Hub、Dexerto の Mild Acid 情報を確認しました。Early Access の公開データは station route が一致しない部分があるため、Fabricator recipe と Processor route を分けて記載しています。',
    cardKicker: 'Chemical card',
    cardBody:
      'Acidic Raion Pouch、Copper、Fabricator recipe、Processor route、Biolab と Echo Location。',
    cardTypeLabel: '種類',
    cardTypeValue: 'クラフトガイド',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: '状態',
    cardStatusValue: 'Early Access',
  },
};

const fallbackLocaleAliases = {
  de: {
    title: 'Subnautica 2 Mild Acid Guide',
    description:
      'Guide for Mild Acid recipe, Acidic Raion Pouch, Copper, Fabricator, Processor route, and uses.',
  },
  fr: {
    title: 'Subnautica 2 Mild Acid Guide',
    description:
      'Guide Mild Acid: Acidic Raion Pouch, Copper, Fabricator, Processor et usages.',
  },
  'pt-BR': {
    title: 'Subnautica 2 Mild Acid Guide',
    description:
      'Guia de Mild Acid com Acidic Raion Pouch, Copper, Fabricator, Processor e usos.',
  },
  'es-419': {
    title: 'Subnautica 2 Mild Acid Guide',
    description:
      'Guia de Mild Acid: Acidic Raion Pouch, Copper, Fabricator, Processor y usos.',
  },
  ko: {
    title: 'Subnautica 2 Mild Acid Guide',
    description:
      'Mild Acid recipe, Acidic Raion Pouch, Copper, Fabricator, Processor route, and uses.',
  },
  ru: {
    title: 'Subnautica 2 Mild Acid Guide',
    description:
      'Guide for Mild Acid recipe, Acidic Raion Pouch, Copper, Fabricator, Processor route, and uses.',
  },
} satisfies Record<string, { title: string; description: string }>;

function getCopy(locale: Locale): MildAcidCopy {
  if (mildAcidCopy[locale]) {
    return mildAcidCopy[locale];
  }

  const fallback =
    fallbackLocaleAliases[locale as keyof typeof fallbackLocaleAliases] ??
    fallbackLocaleAliases.de;

  return {
    ...mildAcidCopy.en,
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
    pathname: Routes.Subnautica2MildAcid,
  });
}

export default async function MildAcidPage({
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
      pathname={Routes.Subnautica2MildAcid}
      sources={sharedSources}
    />
  );
}
