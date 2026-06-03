import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { TimerResetIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type WorthItCopy = ResourceGuideCopy & {
  metadata: { title: string; description: string };
};

const PUBLISHED_AT = '2026-06-01';
const UPDATED_AT = '2026-06-01';

const sharedSources = [
  {
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/?l=english',
    label: 'Official Steam Early Access page',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap',
    label: 'Unknown Worlds Early Access roadmap',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-2',
    label: 'Unknown Worlds Hotfix 2',
  },
  {
    href: 'https://www.youtube.com/watch?v=6t2nDHldoSk',
    label: 'Official Subnautica 2 gameplay trailer',
  },
];

const copyByLocale: Record<string, WorthItCopy> = {
  en: {
    metadata: {
      title: 'Is Subnautica 2 Early Access Worth It? Buy Now or Wait',
      description:
        'A source-backed Subnautica 2 Early Access buying guide for players deciding whether to buy now, wait for updates, or use Game Pass.',
    },
    eyebrow: 'Subnautica 2 buying guide',
    title: 'Is Subnautica 2 Early Access Worth It, or Should You Wait?',
    description:
      'The honest answer depends on what you enjoy. Early Access is best for players who like discovering systems early and tolerating rough edges. If you want a finished story and polished balance, waiting is the safer call.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Buy now if you want to explore early, play co-op, follow patches, and do not mind content changing under your feet. Wait if you mainly want a complete story arc, stable saves, mature performance, and fully settled guides. Game Pass can be the lower-risk way to sample it where available.',
    fieldNotesTitle: 'Who should buy now',
    fieldNotes: [
      {
        title: 'You enjoy patch culture',
        body: 'If reading hotfix notes and testing routes sounds fun, Early Access can feel alive rather than unfinished.',
      },
      {
        title: 'You want co-op early',
        body: 'A friend group may get value before 1.0 if everyone understands the build can change.',
      },
      {
        title: 'You use guides as notes, not final answers',
        body: 'Routes, resources, and balance can shift. Treat every guide as a checked snapshot.',
      },
    ],
    routeChecklistTitle: 'Buy or wait checklist',
    routeChecklist: [
      'Buy now if you like unfinished exploration and patch notes.',
      'Wait if spoilers, save stability, or complete story pacing matter most.',
      'Use Game Pass first if you are unsure and it is available to you.',
      'Read Hotfix 2 and roadmap notes before deciding.',
      'Check PC specs if you are buying on Steam.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to make the decision',
    routeSteps: [
      {
        title: 'Read the roadmap first',
        body: 'The roadmap tells you what kind of future updates Unknown Worlds is talking about. If those updates sound exciting, Early Access may fit you.',
      },
      {
        title: 'Check recent hotfix speed',
        body: 'Hotfix cadence matters because it shows how actively problems are being addressed after launch.',
      },
      {
        title: 'Decide how much roughness you tolerate',
        body: 'Some players love a changing survival game. Others want to wait until systems, saves, performance, and story are more settled.',
      },
      {
        title: 'Pick the lowest-risk platform path',
        body: 'If you have Game Pass access, trying before buying can be smarter. If you buy on Steam, check specs and refund-window rules yourself.',
      },
    ],
    tableTitle: 'Search intent and clear answer',
    tableHeaders: ['Search term', 'Useful answer'],
    tableRows: [
      [
        'is subnautica 2 worth it',
        'Worth it for Early Access explorers; wait if you need a finished game.',
      ],
      [
        'subnautica 2 early access worth it',
        'Read roadmap and hotfix notes before buying.',
      ],
      [
        'should i buy subnautica 2',
        'Buy for co-op and discovery; wait for 1.0 if polish matters most.',
      ],
      [
        'subnautica 2 game pass worth it',
        'Game Pass is a lower-risk test path where available.',
      ],
      [
        'subnautica 2 wait for full release',
        'Waiting is reasonable if story, performance, and stable guides matter.',
      ],
    ],
    visualTitle: 'Decision card',
    visualItems: [
      {
        label: 'Buy now',
        value: 'Explorer',
        note: 'You enjoy updates and changing routes.',
      },
      {
        label: 'Try first',
        value: 'Game Pass',
        note: 'Lower-risk if available in your region.',
      },
      {
        label: 'Wait',
        value: '1.0',
        note: 'Best for polished story and settled balance.',
      },
    ],
    cautionTitle: 'A buying guide should not pretend Early Access is finished',
    cautionBody:
      'Players trust a page more when it admits the tradeoff. The game can be exciting and still unfinished. That is the point of the decision.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Is Subnautica 2 worth buying in Early Access?',
        body: 'It can be worth it if you like exploration, co-op, and watching the game grow. Wait if you need a complete, polished release.',
      },
      {
        title: 'Should I play through Game Pass first?',
        body: 'If it is available to you, Game Pass can reduce risk because you can test performance, co-op, and the current amount of content.',
      },
      {
        title: 'Will guides change during Early Access?',
        body: 'Yes. Routes, materials, balance, and fixes can change, so update dates and source notes matter.',
      },
      {
        title: 'What should I check before buying?',
        body: 'Check the roadmap, recent hotfixes, PC system requirements, platform availability, and whether your friends are playing the same build.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Price, label: 'Price Guide' },
      {
        href: Routes.Subnautica2SystemRequirements,
        label: 'System Requirements',
      },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      { href: Routes.Subnautica2MacReleaseDate, label: 'Mac Release Date' },
      { href: Routes.Subnautica2ReleaseDate, label: 'Release Date' },
      {
        href: Routes.Subnautica2Switch2ReleaseDate,
        label: 'Switch 2 Release Date',
      },
      { href: Routes.Subnautica2Crossplay, label: 'Crossplay' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 1, 2026 against Steam Early Access wording, Unknown Worlds roadmap notes, Hotfix 2, and the official trailer. Page visuals use Abyss Guides original art plus the official Subnautica video embed.',
    cardKicker: 'Buy or wait',
    cardBody:
      'A decision page for players comparing Early Access, Game Pass, co-op, and waiting for 1.0.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Buying guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Best for',
    cardStatusValue: 'Early explorers',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 抢先体验值不值得买？现在买还是等正式版',
      description:
        'Subnautica 2 抢先体验购买建议：现在买、等正式版、先玩 Game Pass、看路线图和 hotfix 后再决定。',
    },
    eyebrow: 'Subnautica 2 购买建议',
    title: 'Subnautica 2 抢先体验值不值得买？还是等正式版？',
    description:
      '答案取决于你想要什么。如果你喜欢早点探索、跟补丁一起玩，抢先体验很适合；如果你想要完整剧情和成熟平衡，等正式版更稳。',
    quickLabel: '快速结论',
    quickAnswer:
      '如果你想早点探索、玩联机、追补丁，并且能接受内容变化，现在买可以。若你更在意完整剧情、稳定存档、成熟性能和稳定攻略，等正式版更适合。能用 Game Pass 先试的话，风险最低。',
    fieldNotesTitle: '适合现在买的人',
    fieldNotes: [
      {
        title: '你喜欢看补丁',
        body: '如果读 hotfix、试路线本身就有乐趣，抢先体验会更像参与游戏成长。',
      },
      {
        title: '你想早点联机',
        body: '朋友一起玩会更有价值，但大家都要接受版本会变。',
      },
      {
        title: '你把攻略当笔记',
        body: '资源、路线和平衡可能变化，攻略要当成带日期的快照。',
      },
    ],
    routeChecklistTitle: '买还是等',
    routeChecklist: [
      '喜欢未完成探索和补丁文化，可以现在买。',
      '重视剧情完整、存档稳定和成熟平衡，建议等。',
      '不确定时先用 Game Pass 试。',
      '决定前看路线图和 Hotfix 2。',
      'Steam 购买前先查 PC 配置。',
    ],
    contentsLabel: '目录',
    routeTitle: '怎么做决定',
    routeSteps: [
      {
        title: '先读路线图',
        body: '路线图能告诉你 Unknown Worlds 后续准备补什么。如果这些内容让你兴奋，抢先体验更适合你。',
      },
      {
        title: '看 hotfix 节奏',
        body: '热修速度能反映上线后问题处理是否积极。',
      },
      {
        title: '判断自己能接受多少粗糙感',
        body: '有人喜欢变化中的生存游戏，有人只想等系统、存档、性能和剧情稳定。',
      },
      {
        title: '选低风险平台',
        body: '有 Game Pass 就先试；Steam 购买前自己看配置和退款规则。',
      },
    ],
    tableTitle: '热门搜索怎么回答',
    tableHeaders: ['搜索词', '清楚回答'],
    tableRows: [
      ['is subnautica 2 worth it', '喜欢抢先体验探索就值；想要完整游戏就等。'],
      ['subnautica 2 early access worth it', '买前先看路线图和 hotfix。'],
      ['should i buy subnautica 2', '想联机和探索可以买，重视打磨就等 1.0。'],
      ['subnautica 2 game pass worth it', '能用 Game Pass 先试，风险更低。'],
      [
        'subnautica 2 wait for full release',
        '在意剧情、性能和稳定攻略，等正式版很合理。',
      ],
    ],
    visualTitle: '购买决策卡',
    visualItems: [
      { label: '现在买', value: '探索党', note: '喜欢更新和变化中的路线。' },
      { label: '先试', value: 'Game Pass', note: '可用时风险更低。' },
      { label: '等待', value: '1.0', note: '适合重视完整剧情和成熟平衡。' },
    ],
    cautionTitle: '购买建议不能把抢先体验说成正式版',
    cautionBody:
      '页面越诚实，越容易获得信任。游戏可以很有潜力，也可以仍然未完成，这正是玩家要判断的地方。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 抢先体验值得买吗？',
        body: '喜欢探索、联机和看游戏成长就值得；想要完整打磨就等。',
      },
      {
        title: '要不要先玩 Game Pass？',
        body: '如果你能用，Game Pass 是更低风险的试玩路径。',
      },
      {
        title: '抢先体验期间攻略会变吗？',
        body: '会。路线、材料、平衡和修复都可能变化。',
      },
      {
        title: '购买前先查什么？',
        body: '路线图、最近 hotfix、PC 配置、平台可用性，以及朋友是否同版本。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2SystemRequirements, label: '配置要求' },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      { href: Routes.Subnautica2MacReleaseDate, label: 'Mac 发售日' },
      { href: Routes.Subnautica2ReleaseDate, label: '发售时间' },
      { href: Routes.Subnautica2Switch2ReleaseDate, label: 'Switch 2 发售日' },
      { href: Routes.Subnautica2Crossplay, label: '跨平台联机' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 1 日核对 Steam 抢先体验说明、Unknown Worlds 路线图、Hotfix 2 和官方预告。页面图片为 Abyss Guides 原创图，视频为 Subnautica 官方嵌入。',
    cardKicker: '买还是等',
    cardBody: '给正在比较抢先体验、Game Pass、联机和等 1.0 的玩家看。',
    cardTypeLabel: '类型',
    cardTypeValue: '购买建议',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '更适合',
    cardStatusValue: '早期探索玩家',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 Early Accessは買うべき？待つべき？',
      description:
        'Subnautica 2 Early Accessを今買うか、正式版まで待つか、Game Passで試すかを整理します。',
    },
    eyebrow: 'Subnautica 2 購入ガイド',
    title: 'Subnautica 2 Early Accessは買うべき？それとも待つべき？',
    description:
      '答えは遊び方で変わります。早く探索し、更新を追うのが好きなら向いています。完成した物語と安定性を重視するなら待つほうが安全です。',
    quickLabel: '結論',
    quickAnswer:
      '探索、co-op、パッチ追跡、変化する内容を楽しめるなら今買う価値があります。完成したストーリー、安定した保存、成熟した性能を重視するなら待つのがおすすめです。Game Passが使えるなら低リスクで試せます。',
    fieldNotesTitle: '今買う人に向く条件',
    fieldNotes: [
      {
        title: 'パッチを読むのが好き',
        body: 'Hotfixを読んでルートを試すこと自体が楽しいなら向いています。',
      },
      {
        title: '早くco-opしたい',
        body: 'フレンドと遊ぶ価値はありますが、ビルドが変わる前提です。',
      },
      {
        title: '攻略をメモとして読む',
        body: '資源、ルート、バランスは変わるため、日付つきの情報として見ます。',
      },
    ],
    routeChecklistTitle: '買うか待つか',
    routeChecklist: [
      '未完成の探索と更新が好きなら今買う。',
      '物語、保存、バランスを重視するなら待つ。',
      '迷うならGame Passで先に試す。',
      'ロードマップとHotfix 2を読む。',
      'Steam購入前にPCスペックを見る。',
    ],
    contentsLabel: '目次',
    routeTitle: '判断のしかた',
    routeSteps: [
      {
        title: 'ロードマップを見る',
        body: '今後どんな更新が予定されているかを確認します。',
      },
      {
        title: 'Hotfixの速さを見る',
        body: '問題にどれくらい早く対応しているかを見る材料になります。',
      },
      {
        title: '粗さを許せるか考える',
        body: '変化するゲームが好きな人と、完成版を待ちたい人で答えは違います。',
      },
      {
        title: '低リスクな方法を選ぶ',
        body: 'Game Passが使えるなら試しやすいです。Steamならスペックと返金条件を確認します。',
      },
    ],
    tableTitle: '検索意図と答え',
    tableHeaders: ['検索語', '答え方'],
    tableRows: [
      [
        'is subnautica 2 worth it',
        'Early Access探索が好きなら価値あり。完成版が欲しいなら待つ。',
      ],
      [
        'subnautica 2 early access worth it',
        'ロードマップとHotfixを読んで判断します。',
      ],
      [
        'should i buy subnautica 2',
        'co-opと探索目的なら買い。完成度重視なら待ち。',
      ],
      ['subnautica 2 game pass worth it', '使えるなら低リスクで試せます。'],
      [
        'subnautica 2 wait for full release',
        '物語、性能、安定性を重視するなら合理的です。',
      ],
    ],
    visualTitle: '判断カード',
    visualItems: [
      { label: '今買う', value: '探索派', note: '更新と変化を楽しめる人。' },
      { label: '試す', value: 'Game Pass', note: '使えるなら低リスク。' },
      { label: '待つ', value: '1.0', note: '完成度を重視する人。' },
    ],
    cautionTitle: 'Early Accessを完成版として扱わない',
    cautionBody:
      '正直にトレードオフを書くほうが信頼されます。期待できるゲームでも、まだ未完成です。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Early Accessで買う価値はありますか？',
        body: '探索、co-op、更新を楽しめるなら価値があります。完成度重視なら待ちです。',
      },
      {
        title: 'Game Passで先に試すべき？',
        body: '使えるなら性能、co-op、内容量を低リスクで確認できます。',
      },
      {
        title: '攻略は変わりますか？',
        body: '変わります。ルート、素材、バランス、修正が更新されます。',
      },
      {
        title: '買う前に何を見るべき？',
        body: 'ロードマップ、Hotfix、PCスペック、対応プラットフォーム、フレンドのビルドです。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2SystemRequirements, label: '必要スペック' },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      { href: Routes.Subnautica2ReleaseDate, label: '発売日' },
      { href: Routes.Subnautica2Crossplay, label: 'クロスプレイ' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2' },
    ],
    sourcesTitle: '出典メモ',
    sourceBody:
      '2026年6月1日にSteam Early Access表記、Unknown Worldsロードマップ、Hotfix 2、公式トレーラーを確認。画像はAbyss Guidesオリジナル、動画は公式Subnautica埋め込みです。',
    cardKicker: 'Buy or wait',
    cardBody: 'Early Access、Game Pass、co-op、1.0待ちを比べる人向けです。',
    cardTypeLabel: '種類',
    cardTypeValue: '購入ガイド',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: '向いている人',
    cardStatusValue: '早期探索派',
  },
};

function getCopy(locale: Locale): WorthItCopy {
  return copyByLocale[locale] ?? copyByLocale.en;
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
    pathname: Routes.Subnautica2EarlyAccessWorthIt,
  });
}

export default async function Subnautica2EarlyAccessWorthItPage({
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
      icon={TimerResetIcon}
      locale={locale}
      pathname={Routes.Subnautica2EarlyAccessWorthIt}
      sources={sharedSources}
    />
  );
}
