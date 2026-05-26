import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { WavesIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type BasicFinsCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-26';

const sharedSources = [
  {
    href: 'https://www.dexerto.com/wikis/subnautica-2/equipment/basic-fins/',
    label: 'Dexerto Basic Fins equipment page',
  },
  {
    href: 'https://allthings.how/basic-fins-in-subnautica-2-rubber-and-fiber-recipe/',
    label: 'All Things How Basic Fins recipe guide',
  },
  {
    href: 'https://gamewith.net/subnautica-2/75966',
    label: 'GameWith Basic Fins guide',
  },
  {
    href: 'https://subnautica2.gg/items/basic-fins',
    label: 'Subnautica2.gg Basic Fins item page',
  },
];

const basicFinsCopy: Record<string, BasicFinsCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Basic Fins Guide - Rubber, Fiber, Fabricator, and First Speed Upgrade',
      description:
        'A practical Subnautica 2 Basic Fins guide covering Rubber, Fiber, Fiber Mesh differences, Fabricator crafting, unlock notes, swim speed, Improved Fins, and early oxygen routing.',
    },
    eyebrow: 'Subnautica 2 movement upgrade',
    title: 'Subnautica 2 Basic Fins Guide',
    description:
      'Basic Fins are the first upgrade that makes the ocean feel less like a chore. Craft them before long material runs, because every extra second of swim speed pays you back all night.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Dexerto lists Basic Fins as feet-slot equipment with a small speed boost, crafted at the Fabricator from Rubber x2 and Fiber x2. All Things How matches the 2 Rubber + 2 Fiber recipe and breaks the raw chain down to 4 Lucifer Rotsac and 4 Fibrous Pulp. GameWith instead lists Rubber x2 and Fiber Mesh x2, while also saying the recipe is available from the start and later upgrades into Improved Fins with Basic Fins, Fiber Mesh, and Conduit Crystal. Because sources differ on Fiber versus Fiber Mesh, check the Fabricator in your current save before farming the second ingredient.',
    contentsLabel: 'Contents',
    routeTitle: 'Basic Fins route plan',
    routeSteps: [
      {
        title: 'Check the Fabricator recipe first',
        body: 'Dexerto and All Things How list Fiber, while GameWith lists Fiber Mesh. Before you farm the wrong plant material, open the Fabricator and confirm what your current build asks for.',
      },
      {
        title: 'Make Rubber before the longer swim',
        body: 'Rubber is already part of your early oxygen chain. If you have Lucifer Rotsac nearby, craft the Rubber first so the fins are not blocked by one missing processed material.',
      },
      {
        title: 'Grab the plant material in the same loop',
        body: 'All Things How breaks the raw chain into Lucifer Rotsac and Fibrous Pulp. Pair the run with Fiber or Fiber Mesh prep instead of making a separate trip.',
      },
      {
        title: 'Craft fins before deeper errands',
        body: 'The speed bump is small, but it touches every later swim. Make Basic Fins before Silver, Quartz, Rubber refills, or long wreck loops.',
      },
      {
        title: 'Keep the old pair for Improved Fins',
        body: 'GameWith says Basic Fins can later upgrade into Improved Fins with Fiber Mesh and Conduit Crystal. Do not trash the first pair just because a better option appears.',
      },
    ],
    tableTitle: 'Basic Fins checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      ['Station', 'Fabricator equipment craft.'],
      ['Rubber', 'Current sources agree on Rubber x2.'],
      [
        'Fiber slot',
        'Dexerto / All Things How say Fiber x2; GameWith says Fiber Mesh x2.',
      ],
      ['Use', 'Feet-slot fins with a small swim speed boost.'],
      ['Upgrade', 'GameWith lists Basic Fins as part of Improved Fins.'],
    ],
    visualTitle: 'First swim kit',
    visualItems: [
      {
        label: 'Rubber',
        value: '2',
        note: 'Lucifer Rotsac chain.',
      },
      {
        label: 'Fiber',
        value: '2',
        note: 'Confirm exact Fabricator wording.',
      },
      {
        label: 'Upgrade',
        value: 'Later',
        note: 'Keep for Improved Fins.',
      },
    ],
    cautionTitle: 'Source conflict: Fiber or Fiber Mesh',
    cautionBody:
      'This is exactly the kind of Early Access detail that can drift. Dexerto and All Things How currently say Fiber, while GameWith says Fiber Mesh. The safe play is simple: check the in-game Fabricator before collecting the second ingredient.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you craft Basic Fins in Subnautica 2?',
        body: 'Craft them at the Fabricator. Current sources agree on Rubber x2, but differ on whether the second ingredient is Fiber x2 or Fiber Mesh x2, so confirm the recipe in your save.',
      },
      {
        title: 'Are Basic Fins worth crafting early?',
        body: 'Yes. GameWith calls them one of the first upgrades worth crafting, and the speed boost helps every early resource loop before the Tadpole vehicle.',
      },
      {
        title: 'Do Basic Fins need scanning?',
        body: 'Sources differ. Dexerto lists scan and pickup unlock requirements, while GameWith says the recipe is unlocked from the start. If the recipe is missing, scan or pick up Fins-related data before farming.',
      },
      {
        title: 'Can Basic Fins be upgraded?',
        body: 'GameWith lists Improved Fins as an upgrade using Basic Fins, Fiber Mesh, and Conduit Crystal.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2ImprovedFins, label: 'Improved Fins Guide' },
      { href: Routes.Subnautica2Rubber, label: 'Rubber Recipe Guide' },
      { href: Routes.Subnautica2FiberMesh, label: 'Fiber Mesh Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2 Guide' },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker Guide' },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal Guide',
      },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 26, 2026 against Dexerto, All Things How, GameWith, and Subnautica2.gg. Early Access recipes and unlock rules can change, and current sources disagree on Fiber versus Fiber Mesh, so the guide tells players to verify the Fabricator before farming.',
    cardKicker: 'Movement card',
    cardBody:
      'Rubber x2, Fiber or Fiber Mesh check, Fabricator crafting, first swim-speed boost, early oxygen routing, and Improved Fins planning.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Equipment guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Basic Fins 指南 - Rubber、Fiber、Fabricator 和第一件速度升级',
      description:
        'Subnautica 2 中文 Basic Fins 指南：整理 Rubber、Fiber / Fiber Mesh 差异、Fabricator 制作、解锁说明、游速提升、Improved Fins 和前期氧气路线。',
    },
    eyebrow: 'Subnautica 2 移动升级',
    title: 'Subnautica 2 Basic Fins 指南',
    description:
      'Basic Fins 是第一件能明显改善游泳手感的装备。长距离采集前先把它做出来，后面每一趟找矿、补氧、跑沉船都会舒服一点。',
    quickLabel: '快速结论',
    quickAnswer:
      'Dexerto 把 Basic Fins 列为脚部装备，效果是小幅提高游泳速度，Fabricator 配方写为 Rubber x2 和 Fiber x2。All Things How 也写的是 2 Rubber + 2 Fiber，并把原材料拆成 4 个 Lucifer Rotsac 和 4 个 Fibrous Pulp。GameWith 则列为 Rubber x2 和 Fiber Mesh x2，同时说明配方开局可用，后续可用 Basic Fins、Fiber Mesh 和 Conduit Crystal 升级成 Improved Fins。因为当前来源在 Fiber / Fiber Mesh 上不完全一致，采集第二种材料前先看你存档里的 Fabricator。',
    contentsLabel: '目录',
    routeTitle: 'Basic Fins 路线规划',
    routeSteps: [
      {
        title: '先看 Fabricator 配方',
        body: 'Dexerto 和 All Things How 写的是 Fiber，GameWith 写的是 Fiber Mesh。为了避免采错材料，先打开 Fabricator，看当前版本到底要求什么。',
      },
      {
        title: '长距离游泳前先做 Rubber',
        body: 'Rubber 本来就会进入前期氧气链。如果附近能拿到 Lucifer Rotsac，先把 Rubber 做出来，别让 fins 卡在一个半成品材料上。',
      },
      {
        title: '同一趟顺手拿植物材料',
        body: 'All Things How 把原材料链拆成 Lucifer Rotsac 和 Fibrous Pulp。把 Fiber 或 Fiber Mesh 准备并进这一趟，比单独回头跑更省时间。',
      },
      {
        title: '深水和长路线前先做 fins',
        body: '速度提升不算夸张，但会影响后面每一次游泳。Silver、Quartz、Rubber 补货和残骸路线前，先把 Basic Fins 做掉。',
      },
      {
        title: '旧 fins 留给 Improved Fins',
        body: 'GameWith 说 Basic Fins 后续能用 Fiber Mesh 和 Conduit Crystal 升级成 Improved Fins。别因为看到更好的选项就把第一双丢掉。',
      },
    ],
    tableTitle: 'Basic Fins 检查表',
    tableHeaders: ['需要确认', '建议做法'],
    tableRows: [
      ['工作台', '在 Fabricator 的装备栏制作。'],
      ['Rubber', '当前来源都同意需要 Rubber x2。'],
      [
        'Fiber 槽位',
        'Dexerto / All Things How 写 Fiber x2；GameWith 写 Fiber Mesh x2。',
      ],
      ['用途', '脚部装备，小幅提高游泳速度。'],
      ['升级', 'GameWith 列出 Basic Fins 可进入 Improved Fins 配方。'],
    ],
    visualTitle: '第一套游泳装备',
    visualItems: [
      {
        label: 'Rubber',
        value: '2',
        note: 'Lucifer Rotsac 材料链。',
      },
      {
        label: 'Fiber',
        value: '2',
        note: '以 Fabricator 实际文字为准。',
      },
      {
        label: '升级',
        value: '后续',
        note: '留给 Improved Fins。',
      },
    ],
    cautionTitle: '来源冲突：Fiber 还是 Fiber Mesh',
    cautionBody:
      '这正是抢先体验资料容易变化的地方。Dexerto 和 All Things How 当前写 Fiber，GameWith 写 Fiber Mesh。最稳的做法很简单：采第二种材料前，先看你游戏里的 Fabricator。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Basic Fins 怎么做？',
        body: '在 Fabricator 制作。当前来源都同意需要 Rubber x2，但第二种材料有 Fiber x2 和 Fiber Mesh x2 两种说法，所以请以当前存档里的配方为准。',
      },
      {
        title: 'Basic Fins 前期值得做吗？',
        body: '值得。GameWith 把它列为前期值得制作的升级之一，Tadpole 载具到手前，游速提升会让每一趟资源路线更省时间。',
      },
      {
        title: 'Basic Fins 需要扫描吗？',
        body: '来源不完全一致。Dexerto 列出扫描和拾取解锁要求，GameWith 说开局自动解锁。如果你的 Fabricator 里没有配方，就先找相关扫描或拾取数据。',
      },
      {
        title: 'Basic Fins 可以升级吗？',
        body: 'GameWith 列出 Improved Fins 可由 Basic Fins、Fiber Mesh 和 Conduit Crystal 升级。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2ImprovedFins, label: 'Improved Fins 指南' },
      { href: Routes.Subnautica2Rubber, label: 'Rubber 配方指南' },
      { href: Routes.Subnautica2FiberMesh, label: 'Fiber Mesh 指南' },
      { href: Routes.Subnautica2AirTank, label: '气瓶和氧气指南' },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker 指南' },
      { href: Routes.Subnautica2ConduitCrystal, label: 'Conduit Crystal 指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 26 日核对 Dexerto、All Things How、GameWith 和 Subnautica2.gg。抢先体验阶段配方和解锁规则可能变化，而且当前来源在 Fiber / Fiber Mesh 上不完全一致，所以页面提醒玩家采集前先确认 Fabricator。',
    cardKicker: '移动卡片',
    cardBody:
      'Rubber x2、Fiber 或 Fiber Mesh 检查、Fabricator 制作、第一件游速升级、前期氧气路线和 Improved Fins 规划。',
    cardTypeLabel: '类型',
    cardTypeValue: '装备指南',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = basicFinsCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  basicFinsCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Basic Fins Guide',
      description:
        'Guide for Basic Fins, Rubber, Fiber or Fiber Mesh, Fabricator crafting, swim speed, Improved Fins, and early oxygen routing.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = basicFinsCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2BasicFins,
  });
}

export default async function BasicFinsGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = basicFinsCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={WavesIcon}
      locale={locale}
      pathname={Routes.Subnautica2BasicFins}
      sources={sharedSources}
    />
  );
}
