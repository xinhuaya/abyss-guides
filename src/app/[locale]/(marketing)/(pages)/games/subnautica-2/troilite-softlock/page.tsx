import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { LifeBuoyIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type TroiliteSoftlockCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-24';
const UPDATED_AT = '2026-05-29';

const sharedSources = [
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-2',
    label: 'Unknown Worlds Hotfix 2',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-troilite-location/',
    label: 'PC Gamer Troilite guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-metal-farm-scan-locations/',
    label: 'PC Gamer Metal Farm guide',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap',
    label: 'Unknown Worlds Early Access roadmap',
  },
];

const troiliteSoftlockCopy: Record<string, TroiliteSoftlockCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Troilite Softlock Fix - What to Do If You Used Your First Troilite',
      description:
        'A patch-aware Subnautica 2 Troilite softlock guide for players who spent their first Troilite, need Metal Farm progress, or are rechecking routes after Hotfix 2.',
    },
    eyebrow: 'Subnautica 2 rescue note',
    title: 'Subnautica 2 Troilite Softlock Fix',
    description:
      'If you spent your first Troilite too quickly, pause before rebuilding the whole save. Hotfix 2 changed the late-game resource picture, but you still need to treat Troilite like a scarce route item.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'You are probably not permanently stuck after Hotfix 2, because Unknown Worlds says more Troilite resource areas were added in the late-game region. Still, stop spending Troilite, check Mineralized Clinker route notes, and save the next sample until you know whether Metal Farm or Mangalloy needs it first.',
    fieldNotesTitle: 'Field notes before calling it a softlock',
    fieldNotes: [
      {
        title: 'Stop spending first',
        body: 'The worst move is to find one new sample and immediately spend it on the wrong branch. Freeze Troilite spending until the blocked recipe is written down.',
      },
      {
        title: 'Separate bug fear from route uncertainty',
        body: 'Hotfix 2 added more late-game Troilite areas, so a missing sample is more likely a route problem than a permanent save problem. Check the route calmly.',
      },
      {
        title: 'Make the next find traceable',
        body: 'When you find a sample, mark the route, note the nearby terrain, and keep the sample in a named locker. Future-you will not remember the canyon by vibes.',
      },
    ],
    routeChecklistTitle: 'Softlock triage',
    routeChecklist: [
      'Write down the exact recipe currently blocking progress.',
      'Stop spending Troilite and Mangalloy-adjacent materials.',
      'Recheck Mineralized Clinker and late-game Troilite routes after Hotfix 2.',
      'Beacon the next sample route before leaving the area.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'What to do before you panic',
    routeSteps: [
      {
        title: 'Stop crafting with Troilite',
        body: 'Do not turn every sample into Mangalloy or other late recipes just because the fabricator allows it. Treat the next piece like a recovery item until your Metal Farm route is clear.',
      },
      {
        title: 'Check the Hotfix 2 route',
        body: 'Unknown Worlds says Hotfix 2 added more Troilite resource areas in the late-game region. That means old launch-week advice about a single tight source may be out of date.',
      },
      {
        title: 'Look for Mineralized Clinker wording',
        body: 'Some route notes talk about Mineralized Clinker rather than shouting Troilite in the title. If you only search one word, you may miss the deposit clue you need.',
      },
      {
        title: 'Plan Metal Farm before spending again',
        body: 'PC Gamer route reporting ties Metal Farm progress to late rare-metal planning. If you are trying to recover, write down the next craft first, then spend only what that craft truly needs.',
      },
    ],
    tableTitle: 'Recovery checklist',
    tableHeaders: ['Problem', 'Best next move'],
    tableRows: [
      [
        'I spent my first Troilite',
        'Stop crafting, recheck Hotfix 2 Troilite routes, and keep the next sample unspent.',
      ],
      [
        'I cannot find the deposit name',
        'Search route notes for Mineralized Clinker as well as Troilite.',
      ],
      [
        'Old guides say there is only one source',
        'Treat that as launch-week advice until it has been retested after Hotfix 2.',
      ],
      [
        'I need Metal Farm progress',
        'Check the Metal Farm chain before using rare metals on optional crafts.',
      ],
      [
        'I am early game',
        'Do not force a deep recovery run yet. Fix oxygen, tools, storage, and safer resource loops first.',
      ],
    ],
    visualTitle: 'Softlock triage card',
    visualItems: [
      {
        label: 'First step',
        value: 'Stop',
        note: 'Freeze Troilite spending until the route is clear.',
      },
      {
        label: 'Patch clue',
        value: 'Hotfix 2',
        note: 'More late-game Troilite areas are now noted officially.',
      },
      {
        label: 'Search term',
        value: 'Clinker',
        note: 'Mineralized Clinker can be the wording you need.',
      },
    ],
    cautionTitle: 'Do not promise a magic fix',
    cautionBody:
      'This page is a recovery checklist, not a coordinate dump. Early Access resource placement can change, and the official note confirms more areas rather than publishing a full map.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Can I softlock myself by using Troilite in Subnautica 2?',
        body: 'Hotfix 2 makes a permanent softlock less likely because more Troilite resource areas were added, but careless spending can still slow your route badly.',
      },
      {
        title: 'What should I do with my next Troilite?',
        body: 'Hold it until you know your next required craft. If Metal Farm progress is your goal, check that chain before making optional Mangalloy crafts.',
      },
      {
        title: 'Is Mineralized Clinker the same issue?',
        body: 'Yes for search intent. Players looking for Mineralized Clinker are usually trying to solve the Troilite route or recover from spending a rare sample.',
      },
      {
        title: 'Should I restart my save?',
        body: 'Do not restart just because the first sample was spent. Recheck Hotfix 2 routes first and keep the next sample aside.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2TroiliteAfterHotfix2,
        label: 'Troilite After Hotfix 2',
      },
      {
        href: Routes.Subnautica2MineralizedClinker,
        label: 'Mineralized Clinker Guide',
      },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm Guide' },
      { href: Routes.Subnautica2Mangalloy, label: 'Mangalloy Ingot' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 28, 2026 against Unknown Worlds Hotfix 2, PC Gamer Troilite route reporting, PC Gamer Metal Farm reporting, and the official Early Access roadmap.',
    cardKicker: 'Recovery card',
    cardBody:
      'A no-drama checklist for players who spent Troilite early and need to keep Metal Farm or Mangalloy progress alive.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Recovery guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Hotfix 2',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Troilite 用完怎么办 - Troilite 软锁与 Hotfix 2 补救路线',
      description:
        '给已经花掉第一块 Troilite 的玩家看的 Subnautica 2 补救指南，整理 Hotfix 2 后的 Troilite 资源变化、Mineralized Clinker 线索和 Metal Farm 优先级。',
    },
    eyebrow: 'Subnautica 2 补救笔记',
    title: 'Subnautica 2 Troilite 用完怎么办',
    description:
      '如果你把第一块 Troilite 很快做掉了，先别急着重开存档。Hotfix 2 改了后期资源情况，但 Troilite 仍然要按稀缺材料来处理。',
    quickLabel: '快速结论',
    quickAnswer:
      'Hotfix 2 官方说明里提到后期区域增加了更多 Troilite 资源点，所以大概率不是永久软锁。但你应该立刻停止继续花 Troilite，重新检查 Mineralized Clinker 路线，并把下一块样本先留着，等确认 Metal Farm 或 Mangalloy 哪边更需要。',
    fieldNotesTitle: '判断软锁前的笔记',
    fieldNotes: [
      {
        title: '第一步是停止花材料',
        body: '最糟糕的是刚找到一块新样本，就马上花到错误分支上。先冻结 Troilite 消耗，把卡住的配方写清楚。',
      },
      {
        title: '把 bug 恐慌和路线不确定分开',
        body: 'Hotfix 2 已经增加后期 Troilite 区域，所以缺样本更可能是路线问题，不一定是永久坏档。',
      },
      {
        title: '下一次找到要能复现',
        body: '找到样本后放 Beacon，记下附近地形，再把样本放进有名字的箱子。别指望以后只靠感觉记住那条沟。',
      },
    ],
    routeChecklistTitle: '软锁排查清单',
    routeChecklist: [
      '写下当前到底是哪一个配方卡住进度。',
      '暂停花 Troilite 和 Mangalloy 相关材料。',
      '按 Hotfix 2 后路线重新检查 Mineralized Clinker 和后期 Troilite。',
      '离开区域前给下一块样本路线放 Beacon。',
    ],
    contentsLabel: '目录',
    routeTitle: '慌之前先做这几步',
    routeSteps: [
      {
        title: '先别再用 Troilite 做东西',
        body: '不是合成台允许你做，就代表现在该做。下一块 Troilite 先当补救材料保留，尤其是在 Metal Farm 还没理清的时候。',
      },
      {
        title: '按 Hotfix 2 后的路线重新查',
        body: 'Unknown Worlds 在 Hotfix 2 里写到，后期区域增加了更多 Troilite 资源点。旧攻略里“只有一个点”的说法，现在需要重新核对。',
      },
      {
        title: '同时搜 Mineralized Clinker',
        body: '有些路线记录会写 Mineralized Clinker，而不是直接把 Troilite 写在标题里。只搜一个词，可能会错过真正的矿点线索。',
      },
      {
        title: '先想清楚 Metal Farm 再花',
        body: 'Metal Farm 和后期稀有金属规划关系很紧。补救时先把下一步需要的制作链写清楚，再决定要不要花掉样本。',
      },
    ],
    tableTitle: '补救检查表',
    tableHeaders: ['问题', '下一步'],
    tableRows: [
      [
        '第一块 Troilite 已经用掉',
        '停止继续制作，重新查 Hotfix 2 后的 Troilite 路线，下一块先别花。',
      ],
      ['找不到矿点名字', '除了 Troilite，也搜索 Mineralized Clinker。'],
      [
        '旧攻略说只有一个来源',
        '先当作旧版本信息，等确认 Hotfix 2 后路线再信。',
      ],
      [
        '想推进 Metal Farm',
        '先看 Metal Farm 制作链，不要把稀有金属花在可选制作上。',
      ],
      ['还在前期', '先别硬闯深水补救。氧气、工具、储物和安全资源循环更优先。'],
    ],
    visualTitle: '软锁排查卡',
    visualItems: [
      {
        label: '第一步',
        value: '停手',
        note: '先冻结 Troilite 消耗。',
      },
      {
        label: '版本线索',
        value: 'Hotfix 2',
        note: '官方提到更多后期 Troilite 区域。',
      },
      {
        label: '搜索词',
        value: 'Clinker',
        note: 'Mineralized Clinker 可能是你漏掉的名字。',
      },
    ],
    cautionTitle: '不要把补救写成万能地图',
    cautionBody:
      '这篇是补救清单，不是坐标表。抢先体验阶段资源点会变，官方说明确认的是“更多区域”，不是完整地图。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 会因为 Troilite 用掉而软锁吗？',
        body: 'Hotfix 2 后永久软锁的可能性降低了，因为官方增加了更多 Troilite 资源区域。但乱花仍然会让进度很难受。',
      },
      {
        title: '下一块 Troilite 应该怎么处理？',
        body: '先留着。确认下一步必须制作什么以后再花，尤其要先看 Metal Farm 的制作链。',
      },
      {
        title: 'Mineralized Clinker 是同一个问题吗？',
        body: '搜索意图上基本是同一个问题。搜 Mineralized Clinker 的玩家通常是在找 Troilite 路线，或者在补救已经花掉的稀有样本。',
      },
      {
        title: '需要重开存档吗？',
        body: '不要因为第一块用掉就重开。先查 Hotfix 2 后路线，把下一块样本留出来。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      {
        href: Routes.Subnautica2TroiliteAfterHotfix2,
        label: 'Hotfix 2 后 Troilite',
      },
      {
        href: Routes.Subnautica2MineralizedClinker,
        label: 'Mineralized Clinker 指南',
      },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm 指南' },
      { href: Routes.Subnautica2Mangalloy, label: 'Mangalloy Ingot' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 变化' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 28 日核对 Unknown Worlds Hotfix 2、PC Gamer Troilite 路线、PC Gamer Metal Farm 报道和官方抢先体验路线图。',
    cardKicker: '补救卡',
    cardBody:
      '给已经花掉 Troilite、但还想保住 Metal Farm 或 Mangalloy 进度的玩家看的检查表。',
    cardTypeLabel: '类型',
    cardTypeValue: '补救指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: 'Hotfix 2',
  },
  ja: {
    metadata: {
      title:
        'Subnautica 2 Troilite を使い切った時の対処 - Hotfix 2 後の復旧メモ',
      description:
        '最初の Troilite を使った後に Metal Farm や Mangalloy 進行を守るための、Hotfix 2 対応の Subnautica 2 復旧ガイド。',
    },
    eyebrow: 'Subnautica 2 復旧メモ',
    title: 'Subnautica 2 Troilite を使い切った時の対処',
    description:
      '最初の Troilite を使ってしまっても、すぐにセーブをやり直す必要はありません。Hotfix 2 後のルートを見直し、次の一個を慎重に扱いましょう。',
    quickLabel: '短い答え',
    quickAnswer:
      'Hotfix 2 で late-game region に Troilite resource areas が追加されました。完全に詰む可能性は下がりましたが、次の Troilite は Metal Farm や Mangalloy の必要数を確認するまで使わないほうが安全です。',
    contentsLabel: '目次',
    routeTitle: '焦る前に確認すること',
    routeSteps: [
      {
        title: 'Troilite の消費を止める',
        body: '作れるから作る、という進め方は危険です。次のサンプルは復旧用として残しておきます。',
      },
      {
        title: 'Hotfix 2 後のルートを確認する',
        body: '公式ノートは late-game region に Troilite resource areas が増えたと説明しています。古い「ここだけ」系の説明は再確認が必要です。',
      },
      {
        title: 'Mineralized Clinker も探す',
        body: 'Troilite という名前だけで探すと、deposit clue を見落とすことがあります。',
      },
      {
        title: 'Metal Farm を先に考える',
        body: '復旧中は次のクラフトを先に決め、必要な分だけ素材を使います。',
      },
    ],
    tableTitle: '復旧チェック',
    tableHeaders: ['状況', '次の行動'],
    tableRows: [
      [
        '最初の Troilite を使った',
        '消費を止め、Hotfix 2 後のルートを確認する。',
      ],
      ['deposit 名が見つからない', 'Mineralized Clinker でも探す。'],
      ['古い攻略が一か所だけと言う', 'Hotfix 2 後に再検証されたか確認する。'],
      [
        'Metal Farm を進めたい',
        '任意クラフトより Metal Farm chain を優先する。',
      ],
      ['まだ序盤', '深い復旧ルートより酸素、道具、保管を先に整える。'],
    ],
    visualTitle: '復旧カード',
    visualItems: [
      { label: '最初', value: '止める', note: 'Troilite を追加で使わない。' },
      { label: 'パッチ', value: 'Hotfix 2', note: 'late-game の追加を確認。' },
      { label: '検索語', value: 'Clinker', note: '別名で探す。' },
    ],
    cautionTitle: '万能な座標表ではない',
    cautionBody:
      '公式ノートは追加エリアを示しますが、完全な座標表ではありません。Early Access では資源配置が変わります。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Troilite を使うと詰みますか？',
        body: 'Hotfix 2 後は完全な softlock の可能性は下がりました。ただし無駄遣いは進行を遅くします。',
      },
      {
        title: '次の Troilite はどうする？',
        body: 'Metal Farm や必要クラフトを確認するまで残します。',
      },
      {
        title: 'Mineralized Clinker も関係しますか？',
        body: 'はい。Troilite route を探す時の deposit clue です。',
      },
      {
        title: 'セーブをやり直すべき？',
        body: 'まず Hotfix 2 後のルートを確認してください。やり直しは最後で十分です。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      {
        href: Routes.Subnautica2TroiliteAfterHotfix2,
        label: 'Troilite After Hotfix 2',
      },
      {
        href: Routes.Subnautica2MineralizedClinker,
        label: 'Mineralized Clinker',
      },
      { href: Routes.Subnautica2MetalFarm, label: 'Metal Farm' },
      { href: Routes.Subnautica2Mangalloy, label: 'Mangalloy Ingot' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2' },
    ],
    sourcesTitle: '出典メモ',
    sourceBody:
      '2026年5月28日に Unknown Worlds Hotfix 2、PC Gamer の Troilite / Metal Farm 記事、公式ロードマップを確認。',
    cardKicker: 'Recovery card',
    cardBody: 'Troilite を使った後の進行を立て直すための短いチェックリスト。',
    cardTypeLabel: '種類',
    cardTypeValue: '復旧ガイド',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: '状態',
    cardStatusValue: 'Hotfix 2',
  },
};

const fallbackLocaleAliases = {
  de: {
    title: 'Subnautica 2 Troilite Softlock Fix',
    description:
      'Wenn du dein erstes Troilite ausgegeben hast: nicht neu starten. Stoppe weitere Crafts, pruefe Hotfix 2 Routen und halte das naechste Stueck fuer Metal Farm oder Mangalloy zurueck.',
  },
  fr: {
    title:
      'Subnautica 2 Troilite softlock: que faire apres avoir depense le premier Troilite',
    description:
      'Arrete de depenser Troilite, verifie les routes Hotfix 2 et garde le prochain echantillon avant de choisir Metal Farm ou Mangalloy.',
  },
  'pt-BR': {
    title:
      'Subnautica 2 Troilite Softlock: o que fazer se voce gastou o primeiro Troilite',
    description:
      'Pare de gastar Troilite, revise as rotas do Hotfix 2 e guarde a proxima amostra ate confirmar Metal Farm ou Mangalloy.',
  },
  'es-419': {
    title:
      'Subnautica 2 Troilite Softlock: que hacer si gastaste tu primer Troilite',
    description:
      'Deja de gastar Troilite, revisa rutas posteriores al Hotfix 2 y guarda la proxima muestra antes de avanzar Metal Farm o Mangalloy.',
  },
  ko: {
    title: 'Subnautica 2 Troilite를 써버렸을 때 복구 방법',
    description:
      '첫 Troilite를 썼다면 저장을 다시 시작하기 전에 Hotfix 2 이후 루트, Mineralized Clinker 단서, Metal Farm 우선순위를 확인하세요.',
  },
  ru: {
    title:
      'Subnautica 2 Troilite Softlock: что делать, если первый Troilite уже потрачен',
    description:
      'Останови траты Troilite, проверь маршруты после Hotfix 2 и сохрани следующий образец для Metal Farm или Mangalloy.',
  },
} satisfies Record<
  string,
  {
    title: string;
    description: string;
  }
>;

function getCopy(locale: Locale): TroiliteSoftlockCopy {
  if (troiliteSoftlockCopy[locale]) {
    return troiliteSoftlockCopy[locale];
  }

  const fallback =
    fallbackLocaleAliases[locale as keyof typeof fallbackLocaleAliases] ??
    fallbackLocaleAliases.de;

  return {
    ...troiliteSoftlockCopy.en,
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
    pathname: Routes.Subnautica2TroiliteSoftlock,
  });
}

export default async function TroiliteSoftlockPage({
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
      icon={LifeBuoyIcon}
      locale={locale}
      pathname={Routes.Subnautica2TroiliteSoftlock}
      sources={sharedSources}
    />
  );
}
