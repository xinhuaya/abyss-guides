import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { FlaskConicalIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type EnameledGlassCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-25';
const UPDATED_AT = '2026-05-25';

const sharedSources = [
  {
    href: 'https://www.gamesradar.com/games/survival/subnautica-2-enameled-glass/',
    label: 'GamesRadar Enameled Glass guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-creature-enamel-location/',
    label: 'PC Gamer Creature Enamel guide',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap',
    label: 'Unknown Worlds Early Access roadmap',
  },
];

const enameledGlassCopy: Record<string, EnameledGlassCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Enameled Glass Guide - Recipe, Creature Enamel, and Upgrade Planning',
      description:
        'A practical Subnautica 2 Enameled Glass guide covering the recipe chain, Creature Enamel, Needler Mango routes, glass prep, and when to craft it.',
    },
    eyebrow: 'Subnautica 2 processed material',
    title: 'Subnautica 2 Enameled Glass Guide',
    description:
      'Enameled Glass is not a mystery material once the chain clicks: make the glass, solve Creature Enamel, then craft only when the next upgrade actually asks for it. The mistake is burning route time before you know which part of the chain is missing.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current guides point to Enameled Glass as a recipe chain built around Glass and Creature Enamel. Get the ordinary glass side ready first, then run the Needler Mango route for Creature Enamel. Do not craft every piece immediately; keep the ingredients grouped until a vehicle, base, or advanced recipe needs the finished material.',
    contentsLabel: 'Contents',
    routeTitle: 'Enameled Glass craft plan',
    routeSteps: [
      {
        title: 'Separate the easy half from the risky half',
        body: 'Glass prep is the calmer side of the recipe. Creature Enamel is the route tax. Sort the safe base materials first so the deep run has one clear purpose.',
      },
      {
        title: 'Use Creature Enamel as the gate',
        body: 'PC Gamer ties Creature Enamel to Needler Mango. If Enameled Glass is blocked, check whether the missing piece is really Creature Enamel before wasting another trip on basic glass materials.',
      },
      {
        title: 'Run Needler Mango as a focused dive',
        body: 'Treat the Creature Enamel trip like a hostile-route errand. Bring the Tadpole, park toward open water, grab the plant material, and leave before chasing side loot.',
      },
      {
        title: 'Craft only against a real recipe',
        body: 'Enameled Glass is tempting to make the moment you can. Hold raw ingredients unless the next blueprint specifically needs the finished material. Early Access recipes can move, and storage is cheaper than regret.',
      },
      {
        title: 'Store it with upgrade materials',
        body: 'Keep Enameled Glass beside Strontium, Conduit Crystal, Power Cell parts, and vehicle modules. That makes the next missing bottleneck obvious when you return from a route.',
      },
    ],
    tableTitle: 'Recipe-chain checklist',
    tableHeaders: ['Step', 'What to confirm'],
    tableRows: [
      [
        'Glass side',
        'Have the basic glass materials ready before you spend a deep trip on Creature Enamel.',
      ],
      [
        'Creature Enamel',
        'Confirm the Needler Mango route is the actual blocker, then prepare for hostile water.',
      ],
      [
        'Tadpole route',
        'Use depth margin, repair planning, and an exit angle instead of swimming the route loose.',
      ],
      [
        'Craft timing',
        'Make Enameled Glass when a known recipe asks for it, not because the station allows it.',
      ],
      [
        'Storage label',
        'Group it with later upgrade materials so the next craft check is fast.',
      ],
    ],
    visualTitle: 'Material chain',
    visualItems: [
      {
        label: 'Base',
        value: 'Glass',
        note: 'Finish the calm material side at base first.',
      },
      {
        label: 'Route',
        value: 'Enamel',
        note: 'Creature Enamel sends you toward Needler Mango.',
      },
      {
        label: 'Craft',
        value: 'Upgrade',
        note: 'Use the finished glass only when a blueprint needs it.',
      },
    ],
    cautionTitle: 'Do not pre-craft your whole stock',
    cautionBody:
      'Finished Enameled Glass feels tidy, but raw ingredients are more flexible. Keep a few ingredients uncrafted until you know whether the next plan needs Enameled Glass, Creature Enamel, or plain glass.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you make Enameled Glass in Subnautica 2?',
        body: 'Current reporting points to a chain built around Glass and Creature Enamel. Prepare the glass side, then get Creature Enamel from the Needler Mango route before crafting the finished material.',
      },
      {
        title: 'What blocks Enameled Glass most often?',
        body: 'Creature Enamel is the awkward half because it sends you toward hostile Needler routes. Basic glass prep is usually easier to solve at base.',
      },
      {
        title: 'Do I need Creature Enamel for Enameled Glass?',
        body: 'Yes, current guides connect Enameled Glass to Creature Enamel. Recheck after patches, because Subnautica 2 is still in Early Access.',
      },
      {
        title: 'Should I craft Enameled Glass early?',
        body: 'Only if a known recipe needs it. Otherwise, store the raw ingredients together so they can still serve other recipes if the upgrade chain changes.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Glass, label: 'Glass Recipe Guide' },
      {
        href: Routes.Subnautica2CreatureEnamel,
        label: 'Creature Enamel Guide',
      },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Vehicle Guide' },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        label: 'Tadpole Depth Module Guide',
      },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
      { href: Routes.Subnautica2Strontium, label: 'Strontium Guide' },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal Guide',
      },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 25, 2026 against current GamesRadar Enameled Glass reporting, PC Gamer Creature Enamel reporting, and the official Early Access roadmap. Recipes and upgrade use can change during Early Access patches.',
    cardKicker: 'Craft chain card',
    cardBody:
      'Glass prep, Creature Enamel route, Needler Mango risk, craft timing, and upgrade-material storage.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Crafting guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Enameled Glass 指南 - 配方、Creature Enamel 和升级材料规划',
      description:
        'Subnautica 2 中文 Enameled Glass 指南：整理配方链、Creature Enamel、Needler Mango 路线、普通 Glass 准备和什么时候该制作。',
    },
    eyebrow: 'Subnautica 2 加工材料',
    title: 'Subnautica 2 Enameled Glass 指南',
    description:
      'Enameled Glass 真正麻烦的地方不是名字，而是材料链。普通 Glass 是安静的基地准备，Creature Enamel 才是要跑危险路线的部分。先分清缺哪一段，再决定要不要下深水。',
    quickLabel: '快速结论',
    quickAnswer:
      '当前攻略把 Enameled Glass 指向 Glass + Creature Enamel 这条材料链。先把普通 Glass 一侧准备好，再去 Needler Mango 路线拿 Creature Enamel。不要一有材料就全做成成品，等载具、基地或高级配方真的需要时再制作。',
    contentsLabel: '目录',
    routeTitle: 'Enameled Glass 制作规划',
    routeSteps: [
      {
        title: '把简单材料和危险材料分开',
        body: '普通 Glass 是基地里比较安稳的部分，Creature Enamel 才会把你带去 Needler 路线。先把安全材料备齐，深水这一趟才不会目标混乱。',
      },
      {
        title: '确认真正卡点是不是 Creature Enamel',
        body: 'PC Gamer 把 Creature Enamel 和 Needler Mango 联系在一起。如果 Enameled Glass 做不了，先看缺的是不是 Creature Enamel，不要反复去刷普通玻璃材料。',
      },
      {
        title: 'Needler Mango 单独跑一趟',
        body: 'Creature Enamel 路线按危险任务处理。带 Tadpole，车头朝出口，拿到植物材料就走，别顺手再去追旁边的矿。',
      },
      {
        title: '按真实配方再制作',
        body: '能做 Enameled Glass 不代表马上要做。除非下一个蓝图明确需要成品，否则先把原料放一起。抢先体验阶段配方可能调整，原料比成品更灵活。',
      },
      {
        title: '和升级材料放在同一组',
        body: '把 Enameled Glass 和 Strontium、Conduit Crystal、Power Cell、载具升级材料放在一起。下一次查配方时，你会更快看出真正缺什么。',
      },
    ],
    tableTitle: '配方链检查表',
    tableHeaders: ['步骤', '要确认什么'],
    tableRows: [
      ['Glass 一侧', '先把普通玻璃材料备好，再去跑 Creature Enamel 深水路线。'],
      [
        'Creature Enamel',
        '确认缺口在 Needler Mango 路线，然后按危险水域准备。',
      ],
      ['Tadpole 路线', '准备深度余量、维修和撤离角度，不要裸游硬冲。'],
      [
        '制作时机',
        '看到明确配方需求再做成 Enameled Glass，不要为了整齐提前全做。',
      ],
      ['仓库存放', '和后续升级材料放一起，查下一步材料会快很多。'],
    ],
    visualTitle: '材料链',
    visualItems: [
      {
        label: '基地',
        value: 'Glass',
        note: '先解决普通材料。',
      },
      {
        label: '路线',
        value: 'Enamel',
        note: 'Creature Enamel 会把你带向 Needler Mango。',
      },
      {
        label: '制作',
        value: 'Upgrade',
        note: '蓝图真的需要时再做成品。',
      },
    ],
    cautionTitle: '别把所有原料提前做成成品',
    cautionBody:
      'Enameled Glass 看起来很像应该提前囤的材料，但原料更灵活。先留一部分 Glass 和 Creature Enamel 不加工，等确认下一步升级要什么再做。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Enameled Glass 怎么做？',
        body: '当前资料指向 Glass 和 Creature Enamel 这条材料链。先准备普通 Glass，再从 Needler Mango 路线拿 Creature Enamel，之后制作成品。',
      },
      {
        title: 'Enameled Glass 最常卡在哪里？',
        body: '通常是 Creature Enamel，因为它需要去 Needler 活动区域。普通 Glass 一侧在基地附近更容易处理。',
      },
      {
        title: 'Enameled Glass 需要 Creature Enamel 吗？',
        body: '当前攻略是这样写的。由于 Subnautica 2 还在抢先体验，补丁后要重新核对配方。',
      },
      {
        title: '要不要提前大量制作 Enameled Glass？',
        body: '不建议。除非明确知道下一项升级需要它，否则原料状态更灵活。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Glass, label: 'Glass 配方指南' },
      {
        href: Routes.Subnautica2CreatureEnamel,
        label: 'Creature Enamel 指南',
      },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 载具指南' },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        label: 'Tadpole Depth Module 指南',
      },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
      { href: Routes.Subnautica2Strontium, label: 'Strontium 指南' },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal 指南',
      },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 25 日根据 GamesRadar 的 Enameled Glass 当前资料、PC Gamer 的 Creature Enamel 资料，以及官方 Early Access 路线图整理。抢先体验阶段配方和升级用途可能变化。',
    cardKicker: '制作链卡',
    cardBody:
      '普通 Glass 准备、Creature Enamel 路线、Needler Mango 风险、制作时机和升级材料存放。',
    cardTypeLabel: '类型',
    cardTypeValue: '制作指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
  ja: {
    metadata: {
      title:
        'Subnautica 2 Enameled Glass ガイド - レシピ、Creature Enamel、アップグレード準備',
      description:
        'Subnautica 2 の Enameled Glass ガイド。Glass、Creature Enamel、Needler Mango ルート、作るタイミング、アップグレード素材管理を整理します。',
    },
    eyebrow: 'Subnautica 2 加工素材',
    title: 'Subnautica 2 Enameled Glass ガイド',
    description:
      'Enameled Glass は、仕組みがわかると単純です。Glass を用意し、Creature Enamel の危険ルートを解決し、必要なレシピが出た時だけ完成品にします。',
    quickLabel: '要点',
    quickAnswer:
      '現在のガイドでは、Enameled Glass は Glass と Creature Enamel の素材チェーンとして扱われています。先に普通の Glass 側を整え、Needler Mango ルートで Creature Enamel を取ります。次のアップグレードが必要とするまで、全部を完成品にしないほうが安全です。',
    contentsLabel: '目次',
    routeTitle: 'Enameled Glass の作成計画',
    routeSteps: [
      {
        title: '安全な素材と危険な素材を分ける',
        body: 'Glass 側は基地で準備しやすい素材です。Creature Enamel が危険なルート側なので、先に安全な半分を終わらせます。',
      },
      {
        title: 'Creature Enamel をゲートとして見る',
        body: 'PC Gamer は Creature Enamel を Needler Mango と結びつけています。足りないのが本当に Creature Enamel なのか確認してから深場へ行きます。',
      },
      {
        title: 'Needler Mango は集中して取る',
        body: 'Tadpole を用意し、出口向きに停めて、素材を取ったら離脱します。横の鉱石を追うのは二回目で十分です。',
      },
      {
        title: '必要なレシピが出てから作る',
        body: 'Enameled Glass を作れるからといって、すぐ全部作る必要はありません。Early Access ではレシピ変更もあり得るので、原料のまま置くほうが柔軟です。',
      },
      {
        title: 'アップグレード素材と一緒に置く',
        body: 'Strontium、Conduit Crystal、Power Cell 系、車両モジュール素材と同じ箱に置くと、次に足りない素材が見やすくなります。',
      },
    ],
    tableTitle: '素材チェーン確認',
    tableHeaders: ['手順', '確認すること'],
    tableRows: [
      ['Glass 側', '危険ルートへ行く前に、普通の Glass 素材を用意します。'],
      ['Creature Enamel', 'Needler Mango ルートが本当の不足点か確認します。'],
      ['Tadpole ルート', '深度、修理、離脱方向を準備します。'],
      ['作るタイミング', '必要なブループリントが出てから完成品にします。'],
      ['保管', '後半アップグレード素材とまとめて置きます。'],
    ],
    visualTitle: '素材チェーン',
    visualItems: [
      {
        label: '基地',
        value: 'Glass',
        note: '安全な素材側を先に終わらせます。',
      },
      {
        label: 'ルート',
        value: 'Enamel',
        note: 'Creature Enamel は Needler Mango ルートです。',
      },
      {
        label: '作成',
        value: 'Upgrade',
        note: '必要な時だけ完成品にします。',
      },
    ],
    cautionTitle: '完成品を作りすぎない',
    cautionBody:
      'Enameled Glass は便利そうに見えますが、原料のままのほうが使い回しやすいです。次のレシピを確認してから作りましょう。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Enameled Glass はどう作る？',
        body: '現在の情報では Glass と Creature Enamel の素材チェーンです。Glass 側を用意し、Needler Mango ルートで Creature Enamel を取ります。',
      },
      {
        title: '一番詰まりやすい素材は？',
        body: 'Creature Enamel です。Needler がいる危険ルートへ行く必要があるためです。',
      },
      {
        title: 'Creature Enamel は必要？',
        body: '現在のガイドでは必要です。Early Access 中なので、パッチ後はレシピを確認してください。',
      },
      {
        title: '早めに作っておくべき？',
        body: '必要なレシピが出るまでは、原料のまま保管するほうが柔軟です。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2Glass, label: 'Glass Recipe Guide' },
      {
        href: Routes.Subnautica2CreatureEnamel,
        label: 'Creature Enamel ガイド',
      },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole ガイド' },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        label: 'Tadpole Depth Module ガイド',
      },
      { href: Routes.Subnautica2Crafting, label: 'クラフトガイド' },
      { href: Routes.Subnautica2Strontium, label: 'Strontium ガイド' },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal ガイド',
      },
      { href: Routes.Subnautica2Resources, label: 'Resources ガイド' },
    ],
    sourcesTitle: 'ソースメモ',
    sourceBody:
      '2026年5月25日に GamesRadar の Enameled Glass 情報、PC Gamer の Creature Enamel 情報、公式 Early Access ロードマップを確認しました。Early Access 中はレシピや用途が変わる可能性があります。',
    cardKicker: 'クラフトチェーンカード',
    cardBody:
      'Glass、Creature Enamel、Needler Mango、作成タイミング、アップグレード素材の保管。',
    cardTypeLabel: '種類',
    cardTypeValue: 'クラフトガイド',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: '状態',
    cardStatusValue: 'Early Access',
  },
};

const fallbackLocaleAliases = {
  de: {
    title: 'Subnautica 2 Enameled Glass Guide',
    description:
      'Guide for Enameled Glass recipes, Creature Enamel, Needler Mango routes, and upgrade planning.',
  },
  fr: {
    title: 'Subnautica 2 Enameled Glass Guide',
    description:
      'Guide Enameled Glass: recette, Creature Enamel, Needler Mango, Tadpole et upgrades.',
  },
  'pt-BR': {
    title: 'Subnautica 2 Enameled Glass Guide',
    description:
      'Guia de Enameled Glass com receita, Creature Enamel, Needler Mango e upgrades.',
  },
  'es-419': {
    title: 'Subnautica 2 Enameled Glass Guide',
    description:
      'Guia de Enameled Glass: receta, Creature Enamel, Needler Mango y mejoras.',
  },
  ko: {
    title: 'Subnautica 2 Enameled Glass Guide',
    description:
      'Enameled Glass recipe chain, Creature Enamel, Needler Mango route, and upgrade planning.',
  },
  ru: {
    title: 'Subnautica 2 Enameled Glass Guide',
    description:
      'Guide for Enameled Glass recipes, Creature Enamel, Needler Mango routes, and upgrade planning.',
  },
} satisfies Record<string, { title: string; description: string }>;

function getCopy(locale: Locale): EnameledGlassCopy {
  if (enameledGlassCopy[locale]) {
    return enameledGlassCopy[locale];
  }

  const fallback =
    fallbackLocaleAliases[locale as keyof typeof fallbackLocaleAliases] ??
    fallbackLocaleAliases.de;

  return {
    ...enameledGlassCopy.en,
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
    pathname: Routes.Subnautica2EnameledGlass,
  });
}

export default async function EnameledGlassPage({
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
      pathname={Routes.Subnautica2EnameledGlass}
      sources={sharedSources}
    />
  );
}
