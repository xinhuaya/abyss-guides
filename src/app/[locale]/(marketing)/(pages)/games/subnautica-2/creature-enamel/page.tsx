import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { ShieldAlertIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type CreatureEnamelCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-25';
const UPDATED_AT = '2026-05-25';

const sharedSources = [
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-creature-enamel-location/',
    label: 'PC Gamer Creature Enamel guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-celestine-location/',
    label: 'PC Gamer Celestine route guide',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap',
    label: 'Unknown Worlds Early Access roadmap',
  },
];

const creatureEnamelCopy: Record<string, CreatureEnamelCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Creature Enamel Guide - Needler Mango, Alien Ruins, and Enameled Glass',
      description:
        'A practical Subnautica 2 Creature Enamel guide covering Needler Mango routes, Alien Ruins safety, Tadpole prep, Bioscanner checks, and Enameled Glass planning.',
    },
    eyebrow: 'Subnautica 2 hostile-route material',
    title: 'Subnautica 2 Creature Enamel Guide',
    description:
      'Creature Enamel is the kind of material that punishes sloppy route planning. You are not just picking a plant. You are entering Needler space, grabbing a Needler Mango, and getting out before the trip turns into a repair bill.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Look for Needler Mango around Alien Ruins routes where Needlers patrol. Bring the Tadpole, repair supplies, a clear exit line, and the Bioscanner if you still need creature-related progress. Treat Creature Enamel as a risky route material for Enameled Glass and later upgrades, not as something to casually collect on a first deep dive.',
    contentsLabel: 'Contents',
    routeTitle: 'Creature Enamel route plan',
    routeSteps: [
      {
        title: 'Use Alien Ruins as the search zone',
        body: 'Current reporting ties Creature Enamel to Needler Mango, and Needler Mango to hostile Alien Ruins routes. Start from known Alien Ruins landmarks instead of sweeping open water.',
      },
      {
        title: 'Scan before you grab',
        body: 'If you are still building out Bioscanner progress, pause at a safe angle and scan the lifeforms you can reach without drifting into a bad chase. This route is useful for more than one material.',
      },
      {
        title: 'Park the Tadpole like you plan to leave fast',
        body: 'Face the vehicle toward open water, not deeper into the rocks. Needlers make slow inventory sorting feel expensive, so decide what you came for before you get out.',
      },
      {
        title: 'Collect Needler Mango and reset',
        body: 'Grab the plant material, return to the Tadpole, and move away before checking the rest of the area. If you want Celestine or Conduit Crystal too, make that a second pass after the patrol pattern feels readable.',
      },
      {
        title: 'Turn the haul into upgrade planning',
        body: 'Creature Enamel matters because it leads into Enameled Glass and later build chains. Store it with glass, rare minerals, and vehicle-upgrade materials so you can see what the next route is missing.',
      },
    ],
    tableTitle: 'Before a Needler Mango run',
    tableHeaders: ['Check', 'Why it matters'],
    tableRows: [
      [
        'Tadpole health',
        'A scratched vehicle is normal. A half-broken vehicle before the run is asking for a walk home.',
      ],
      [
        'Repair Tool and med supplies',
        'Needlers turn small mistakes into chained damage if you stay too long.',
      ],
      [
        'Empty slots',
        'You want to grab the material quickly, not play inventory puzzle beside a hostile patrol.',
      ],
      [
        'Bioscanner plan',
        'The route can double as creature-scan progress if you prepare for it.',
      ],
      [
        'Beacon note',
        'A marked safe approach is more useful than remembering one lucky plant spot.',
      ],
    ],
    visualTitle: 'Route card',
    visualItems: [
      {
        label: 'Zone',
        value: 'Alien Ruins',
        note: 'Use ruins, rock walls, and patrol lanes as landmarks.',
      },
      {
        label: 'Target',
        value: 'Needler Mango',
        note: 'Collect the plant material without lingering near Needlers.',
      },
      {
        label: 'Use',
        value: 'Enameled Glass',
        note: 'Keep it with glass and upgrade materials back at base.',
      },
    ],
    cautionTitle: 'Do not stack too many objectives',
    cautionBody:
      'Needler Mango, Celestine, and Conduit Crystal can live in the same mental route cluster. That does not mean the first run should grab all of them. Get Creature Enamel first, then come back for mining when the escape path is familiar.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you get Creature Enamel in Subnautica 2?',
        body: 'Current guides point players toward Needler Mango. Search hostile Alien Ruins routes, collect the material quickly, and return to base before refining or crafting with it.',
      },
      {
        title: 'Where is Needler Mango found?',
        body: 'Look around deeper Alien Ruins routes where Needlers patrol. Use alien structures, rock faces, and known mineral routes as your landmarks.',
      },
      {
        title: 'Do I need the Tadpole for Creature Enamel?',
        body: 'You can technically swim into trouble, but the Tadpole makes the route far safer. Bring enough depth margin and park with a clean exit angle.',
      },
      {
        title: 'What is Creature Enamel used for?',
        body: 'It is tied to Enameled Glass and later upgrade planning. Keep it with glass and rare-route materials so recipe checks are easier.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Celestine, label: 'Celestine Guide' },
      { href: Routes.Subnautica2Strontium, label: 'Strontium Guide' },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal Guide',
      },
      {
        href: Routes.Subnautica2BioscannerBiomods,
        label: 'Bioscanner and Biomods',
      },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Vehicle Guide' },
      { href: Routes.Subnautica2Biomes, label: 'Biomes Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 25, 2026 against current PC Gamer Creature Enamel and Celestine reporting, plus the official Early Access roadmap. Creature routes, hostile behavior, and recipe use can change during Early Access.',
    cardKicker: 'Hostile route card',
    cardBody:
      'Needler Mango route, Alien Ruins safety, Tadpole parking, Bioscanner timing, and Enameled Glass planning.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Resource guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Creature Enamel 指南 - Needler Mango、Alien Ruins 和 Enameled Glass',
      description:
        'Subnautica 2 中文 Creature Enamel 指南：Needler Mango 路线、Alien Ruins 安全走法、Tadpole 准备、Bioscanner 扫描和 Enameled Glass 材料规划。',
    },
    eyebrow: 'Subnautica 2 危险路线材料',
    title: 'Subnautica 2 Creature Enamel 指南',
    description:
      'Creature Enamel 不是那种顺手捡一下就走的材料。你要去 Needler 活动的区域，拿 Needler Mango，然后在路线变成修车任务之前离开。',
    quickLabel: '快速结论',
    quickAnswer:
      'Creature Enamel 目前和 Needler Mango 相关，重点去 Alien Ruins 一带、Needler 巡逻附近找。出发前准备 Tadpole、Repair Tool、回血物品、空背包格子，以及清楚的撤离方向。如果还缺 Bioscanner 进度，可以顺路扫生物，但不要为了多扫一个目标把车停在危险位置。',
    contentsLabel: '目录',
    routeTitle: 'Creature Enamel 路线规划',
    routeSteps: [
      {
        title: '把 Alien Ruins 当搜索区域',
        body: '当前资料把 Creature Enamel 指向 Needler Mango，而 Needler Mango 又和 Alien Ruins 附近的危险路线有关。先用外星结构、岩壁和已知矿物路线定位，不要在深水里乱扫。',
      },
      {
        title: '能扫就先扫，但别硬扫',
        body: '如果你还在补 Bioscanner 进度，可以在安全角度停一下，扫到能扫的生物。扫不到就算了，这条路线的第一目标还是活着把材料带回去。',
      },
      {
        title: 'Tadpole 停车要面向出口',
        body: '停车时让车头朝向开阔水域，不要朝更深的岩缝。Needler 会惩罚慢吞吞整理背包的人，所以下车前就想好自己要拿什么。',
      },
      {
        title: '拿到 Needler Mango 就重置路线',
        body: '拿到材料后先回 Tadpole，拉开距离，再决定要不要看周围。Celestine 和 Conduit Crystal 可以之后再来，第一趟别贪。',
      },
      {
        title: '回基地后按升级链整理',
        body: 'Creature Enamel 的价值在于后续 Enameled Glass 和升级链。回去后把它和玻璃、稀有矿物、载具升级材料放在一起，之后查配方会轻松很多。',
      },
    ],
    tableTitle: 'Needler Mango 出发前检查',
    tableHeaders: ['检查项', '为什么重要'],
    tableRows: [
      [
        'Tadpole 耐久',
        '车本来就半血时还往 Needler 区域跑，很容易变成游泳回家。',
      ],
      ['Repair Tool 和回血', 'Needler 会把小失误变成连续损伤，别空手硬扛。'],
      ['背包空格', '在敌对巡逻旁边整理背包，通常不是好主意。'],
      [
        'Bioscanner 计划',
        '这条路线可以顺便补生物扫描，但前提是你有安全停靠点。',
      ],
      [
        'Beacon 或路线记录',
        '能重复走的安全入口，比记住一个偶然发现的点更有用。',
      ],
    ],
    visualTitle: '路线卡',
    visualItems: [
      {
        label: '区域',
        value: 'Alien Ruins',
        note: '用外星结构、岩壁和巡逻路线做地标。',
      },
      {
        label: '目标',
        value: 'Needler Mango',
        note: '拿到材料就走，不要在 Needler 旁边久留。',
      },
      {
        label: '用途',
        value: 'Enameled Glass',
        note: '回基地后和玻璃、升级材料放在一起。',
      },
    ],
    cautionTitle: '不要一趟塞太多目标',
    cautionBody:
      'Needler Mango、Celestine、Conduit Crystal 都容易被放进同一条深水路线里，但第一趟不建议全拿。先把 Creature Enamel 带回去，熟悉撤离路线后再回来采矿。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Creature Enamel 怎么获得？',
        body: '当前攻略把它和 Needler Mango 联系在一起。去 Alien Ruins 附近的危险路线找，拿到后先回基地，再看后续加工和配方需求。',
      },
      {
        title: 'Needler Mango 在哪里？',
        body: '重点看 Alien Ruins 一带、Needler 巡逻附近，以及深水岩壁和外星结构周边。',
      },
      {
        title: 'Creature Enamel 需要 Tadpole 吗？',
        body: '强烈建议带。Tadpole 能让撤离和返程更稳定，停车时记得朝向出口。',
      },
      {
        title: 'Creature Enamel 有什么用？',
        body: '它和 Enameled Glass 以及后续升级规划有关。建议和玻璃、稀有路线材料一起存放。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Celestine, label: 'Celestine 指南' },
      { href: Routes.Subnautica2Strontium, label: 'Strontium 指南' },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal 指南',
      },
      {
        href: Routes.Subnautica2BioscannerBiomods,
        label: 'Bioscanner 和 Biomods',
      },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 载具指南' },
      { href: Routes.Subnautica2Biomes, label: '生物群系指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 25 日根据 PC Gamer 的 Creature Enamel、Celestine 当前资料，以及官方 Early Access 路线图整理。抢先体验阶段路线、敌对生物行为和配方用途都可能更新。',
    cardKicker: '危险路线卡',
    cardBody:
      'Needler Mango 路线、Alien Ruins 安全停靠、Tadpole 撤离、Bioscanner 时机和 Enameled Glass 规划。',
    cardTypeLabel: '类型',
    cardTypeValue: '资源指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
  ja: {
    metadata: {
      title:
        'Subnautica 2 Creature Enamel ガイド - Needler Mango、Alien Ruins、Enameled Glass',
      description:
        'Subnautica 2 の Creature Enamel ガイド。Needler Mango の探し方、Alien Ruins の安全ルート、Tadpole 準備、Bioscanner、Enameled Glass 用途を整理します。',
    },
    eyebrow: 'Subnautica 2 危険ルート素材',
    title: 'Subnautica 2 Creature Enamel ガイド',
    description:
      'Creature Enamel は、気軽に寄り道して取る素材ではありません。Needler がいる場所へ入り、Needler Mango を取り、車体を壊される前に戻るルートです。',
    quickLabel: '要点',
    quickAnswer:
      'Creature Enamel は現在 Needler Mango と結びついています。Alien Ruins 周辺、Needler の巡回がある深めのルートを探します。Tadpole、Repair Tool、回復、空きインベントリ、逃げ道を用意してください。Bioscanner 進行を兼ねるなら、安全に止まれる場所だけで行います。',
    contentsLabel: '目次',
    routeTitle: 'Creature Enamel ルート',
    routeSteps: [
      {
        title: 'Alien Ruins を基準に探す',
        body: '現在の情報では、Creature Enamel は Needler Mango、Needler Mango は Alien Ruins 付近の危険ルートと結びつきます。広い水域を適当に探すより、遺跡や岩壁を目印にします。',
      },
      {
        title: 'スキャンは安全な時だけ',
        body: 'Bioscanner の進行が必要なら、車を安全な角度で止められる時だけスキャンします。無理に一体追うより、素材を持ち帰るほうが大事です。',
      },
      {
        title: 'Tadpole は出口向きに止める',
        body: '岩の奥へ向けて駐車しないでください。Needler が近い場所では、戻ってすぐ離脱できる向きが一番効きます。',
      },
      {
        title: 'Needler Mango を取ったら離れる',
        body: '取ったら一度 Tadpole に戻り、距離を取ります。Celestine や Conduit Crystal は、逃げ道がわかってからの二回目で十分です。',
      },
      {
        title: '基地で用途別に保管する',
        body: 'Creature Enamel は Enameled Glass や後半のアップグレード確認に関わります。ガラスや希少素材と一緒に置くと、次の不足素材が見やすくなります。',
      },
    ],
    tableTitle: 'Needler Mango に行く前',
    tableHeaders: ['確認', '理由'],
    tableRows: [
      ['Tadpole の耐久', '傷んだ車で入ると、帰りがかなり不安定になります。'],
      [
        'Repair Tool と回復',
        'Needler の近くでは小さなミスが連続ダメージになりがちです。',
      ],
      ['空きスロット', '敵のそばでインベントリ整理をしないためです。'],
      [
        'Bioscanner 目的',
        '安全に止まれるなら、同じルートで生物スキャンも進められます。',
      ],
      [
        'Beacon かメモ',
        '一度だけの発見より、再利用できる進入ルートのほうが役に立ちます。',
      ],
    ],
    visualTitle: 'ルートカード',
    visualItems: [
      {
        label: '場所',
        value: 'Alien Ruins',
        note: '遺跡、岩壁、巡回ラインを目印にします。',
      },
      {
        label: '目標',
        value: 'Needler Mango',
        note: '取ったら長居せず離脱します。',
      },
      {
        label: '用途',
        value: 'Enameled Glass',
        note: '基地でガラス系素材とまとめて保管します。',
      },
    ],
    cautionTitle: '一回の潜水に詰め込みすぎない',
    cautionBody:
      'Needler Mango、Celestine、Conduit Crystal は近いルートで考えられますが、初回で全部取ろうとすると危険です。Creature Enamel を持ち帰り、慣れてから採掘に戻りましょう。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Creature Enamel はどう入手する？',
        body: '現在のガイドでは Needler Mango が手がかりです。Alien Ruins 周辺の危険ルートで探し、取ったら基地に戻って用途を確認します。',
      },
      {
        title: 'Needler Mango はどこ？',
        body: 'Alien Ruins 周辺、Needler の巡回がある深めの岩壁や遺跡近くを探します。',
      },
      {
        title: 'Tadpole は必要？',
        body: '強く推奨です。深度と帰り道の余裕ができ、Needler から離脱しやすくなります。',
      },
      {
        title: 'Creature Enamel の用途は？',
        body: 'Enameled Glass と後半のアップグレード計画に関係します。ガラスや希少素材と一緒に保管すると管理しやすいです。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2Celestine, label: 'Celestine ガイド' },
      { href: Routes.Subnautica2Strontium, label: 'Strontium ガイド' },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal ガイド',
      },
      {
        href: Routes.Subnautica2BioscannerBiomods,
        label: 'Bioscanner と Biomods',
      },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole ガイド' },
      { href: Routes.Subnautica2Biomes, label: 'Biomes ガイド' },
    ],
    sourcesTitle: 'ソースメモ',
    sourceBody:
      '2026年5月25日に PC Gamer の Creature Enamel / Celestine 情報と、公式 Early Access ロードマップを確認しました。Early Access 中はルート、敵の挙動、レシピ用途が変わる可能性があります。',
    cardKicker: '危険ルートカード',
    cardBody:
      'Needler Mango、Alien Ruins の安全ルート、Tadpole の停め方、Bioscanner、Enameled Glass 用途。',
    cardTypeLabel: '種類',
    cardTypeValue: '素材ガイド',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: '状態',
    cardStatusValue: 'Early Access',
  },
};

const fallbackLocaleAliases = {
  de: {
    title: 'Subnautica 2 Creature Enamel Guide',
    description:
      'Guide for Creature Enamel, Needler Mango, Alien Ruins safety, and Enameled Glass planning.',
  },
  fr: {
    title: 'Subnautica 2 Creature Enamel Guide',
    description:
      'Guide Creature Enamel pour Needler Mango, Alien Ruins, Tadpole et Enameled Glass.',
  },
  'pt-BR': {
    title: 'Subnautica 2 Creature Enamel Guide',
    description:
      'Guia de Creature Enamel com Needler Mango, Alien Ruins, Tadpole e Enameled Glass.',
  },
  'es-419': {
    title: 'Subnautica 2 Creature Enamel Guide',
    description:
      'Guia de Creature Enamel: Needler Mango, Alien Ruins, Tadpole y Enameled Glass.',
  },
  ko: {
    title: 'Subnautica 2 Creature Enamel Guide',
    description:
      'Creature Enamel, Needler Mango, Alien Ruins safety, Tadpole prep, and Enameled Glass planning.',
  },
  ru: {
    title: 'Subnautica 2 Creature Enamel Guide',
    description:
      'Guide for Creature Enamel, Needler Mango, Alien Ruins safety, and Enameled Glass planning.',
  },
} satisfies Record<string, { title: string; description: string }>;

function getCopy(locale: Locale): CreatureEnamelCopy {
  if (creatureEnamelCopy[locale]) {
    return creatureEnamelCopy[locale];
  }

  const fallback =
    fallbackLocaleAliases[locale as keyof typeof fallbackLocaleAliases] ??
    fallbackLocaleAliases.de;

  return {
    ...creatureEnamelCopy.en,
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
    pathname: Routes.Subnautica2CreatureEnamel,
  });
}

export default async function CreatureEnamelPage({
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
      icon={ShieldAlertIcon}
      locale={locale}
      pathname={Routes.Subnautica2CreatureEnamel}
      sources={sharedSources}
    />
  );
}
