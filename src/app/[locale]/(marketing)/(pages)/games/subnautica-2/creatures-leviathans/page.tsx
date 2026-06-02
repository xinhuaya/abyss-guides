import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { AlertTriangleIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type CreaturesCopy = ResourceGuideCopy & {
  metadata: { title: string; description: string };
};

const PUBLISHED_AT = '2026-06-01';
const UPDATED_AT = '2026-06-01';

const sources = [
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-3',
    label: 'Unknown Worlds Hotfix 3',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-2',
    label: 'Unknown Worlds Hotfix 2',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap',
    label: 'Unknown Worlds Early Access roadmap',
  },
  {
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/',
    label: 'Official Steam page',
  },
  {
    href: 'https://www.youtube.com/watch?v=6t2nDHldoSk',
    label: 'Official Subnautica 2 gameplay trailer',
  },
];

const copyByLocale: Record<string, CreaturesCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Creatures and Leviathans: Safe Notes for Early Access',
      description:
        'A source-backed Subnautica 2 creatures and leviathans guide for Hammerhead behavior, creature risk, roadmap watch notes, and safe exploration routes.',
    },
    eyebrow: 'Subnautica 2 creatures',
    title: 'Subnautica 2 Creatures and Leviathans: What to Treat as Confirmed',
    description:
      'Creature pages can get messy fast. This one separates official patch notes and roadmap language from rumor lists, then turns the facts into route advice.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Hammerhead behavior is one confirmed creature topic to track because Hotfix 2 says Hammerheads were adjusted so they are no longer as attracted to Tadpole lights. The roadmap also points to future creature and leviathan work. Until official pages or in-game scans support more names, treat extra creature lists as watch notes, not settled data.',
    fieldNotesTitle: 'Creature pages need restraint',
    fieldNotes: [
      {
        title: 'Behavior matters more than names',
        body: 'For players, the useful question is not only what a creature is called. It is whether it follows, blocks a route, reacts to light, or makes a base unsafe.',
      },
      {
        title: 'Patch notes can rewrite risk',
        body: 'A creature that was a base problem before a hotfix may become less dangerous after a behavior tweak.',
      },
      {
        title: 'Leviathan searches need careful wording',
        body: 'Players will search for leviathans early, but a guide should not invent a full list before official support exists.',
      },
    ],
    routeChecklistTitle: 'Creature safety checklist',
    routeChecklist: [
      'Track patch notes for behavior changes.',
      'Separate creature names from confirmed creature behavior.',
      'Mark light, sound, vehicle, and base attraction risks.',
      'Do not route new players through deep-risk zones without return plans.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to turn creature facts into route advice',
    routeSteps: [
      {
        title: 'Start with observed behavior',
        body: 'If a creature follows light, blocks a corridor, or circles a resource loop, that is the note players can act on.',
      },
      {
        title: 'Update Hammerhead notes after hotfixes',
        body: 'Hotfix 2 changed Hammerhead attraction around Tadpole lights. Creature pages should keep that kind of note close to the top.',
      },
      {
        title: 'Use leviathan pages as watch pages',
        body: 'A leviathan page can still rank, but it should make clear what is official, what is trailer context, and what still needs a scan or patch note.',
      },
      {
        title: 'Link risk to routes',
        body: 'Creature pages should point to map, oxygen, vehicle, and base pages so a reader can change their route instead of just reading trivia.',
      },
    ],
    tableTitle: 'Creature search terms and honest answers',
    tableHeaders: ['Search term', 'Useful answer'],
    tableRows: [
      [
        'subnautica 2 creatures',
        'Track confirmed behavior, safe routes, and future roadmap creature notes.',
      ],
      [
        'subnautica 2 leviathans',
        'Use watch-page wording until official names and behavior are confirmed.',
      ],
      [
        'subnautica 2 hammerhead',
        'Hotfix 2 adjusted attraction to Tadpole lights; route pages should reflect that.',
      ],
      [
        'subnautica 2 hostile creatures',
        'Write about route risk, vehicle risk, and base placement, not only names.',
      ],
      [
        'subnautica 2 creature list',
        'Avoid fake complete lists during Early Access.',
      ],
    ],
    visualTitle: 'Creature risk card',
    visualItems: [
      {
        label: 'Confirmed note',
        value: 'Hammerhead',
        note: 'Hotfix 2 adjusted light attraction behavior.',
      },
      {
        label: 'Best page type',
        value: 'Risk routes',
        note: 'Behavior and safe pathing help players most.',
      },
      {
        label: 'Leviathans',
        value: 'Watch',
        note: 'Use official support before listing specifics.',
      },
    ],
    cautionTitle: 'A creature list is only useful if it helps players move',
    cautionBody:
      'A copied list of names is thin content. A better page explains what the creature changes: the route, the base, the vehicle, the oxygen plan, or the decision to turn back.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Are leviathans confirmed for Subnautica 2?',
        body: 'The official roadmap points to future creature and leviathan work, but this page avoids publishing a fake complete list without stronger sources.',
      },
      {
        title: 'What does Hotfix 2 say about Hammerheads?',
        body: 'Hotfix 2 says Hammerheads were adjusted so they are no longer as attracted to Tadpole lights, which had been leading some players back toward bases.',
      },
      {
        title: 'Should I build a base near creature routes?',
        body: 'Be careful. If a route attracts or drags hostile behavior toward your base, use a different location or treat it as temporary.',
      },
      {
        title: 'Why include the official trailer?',
        body: 'The trailer gives visual context, but this page labels it as source media rather than using it as exact route data.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2NibblersMarrowbreachAfterHotfix3,
        label: 'Nibblers and Marrowbreaches After Hotfix 3',
      },
      { href: Routes.Subnautica2Vehicles, label: 'Vehicles Guide' },
      {
        href: Routes.Subnautica2BaseLocationTierList,
        label: 'Base Location Tier List',
      },
      { href: Routes.Subnautica2MapSizeBiomes, label: 'Map Size and Biomes' },
      { href: Routes.Subnautica2OxygenDepth, label: 'Oxygen and Depth' },
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 1, 2026 against Unknown Worlds Hotfix 2, roadmap notes, Steam, and official trailer material. Page image is Abyss Guides original art; video is the official Subnautica embed.',
    cardKicker: 'Creature watch',
    cardBody:
      'A cautious creature page for Hammerhead behavior, leviathan searches, vehicle risk, and route planning.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Creature guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Best use',
    cardStatusValue: 'Route risk',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 生物和利维坦：抢先体验阶段怎么写才稳',
      description:
        'Subnautica 2 生物、利维坦、Hammerhead 行为、载具风险、基地安全和路线规划中文指南。',
    },
    eyebrow: 'Subnautica 2 生物',
    title: 'Subnautica 2 生物和利维坦：哪些能确认，哪些先别乱写',
    description:
      '生物页很容易变成传闻列表。这个页面把官方补丁、路线图和预告片能支持的信息分开，再转成玩家能用的路线建议。',
    quickLabel: '快速结论',
    quickAnswer:
      'Hammerhead 是当前值得追踪的确认生物话题，因为 Hotfix 2 写到它不再那么容易被 Tadpole 灯光吸引。路线图也提到未来会继续扩展生物和利维坦。在官方页面或游戏内扫描支持更多名字前，其他列表先当观察项。',
    fieldNotesTitle: '生物页要克制',
    fieldNotes: [
      {
        title: '行为比名字更重要',
        body: '玩家最需要知道的是它会不会跟随、堵路、被灯光吸引，或者让基地变危险。',
      },
      {
        title: '补丁会改风险',
        body: '热修前后，同一个生物对路线和基地的影响可能不同。',
      },
      {
        title: '利维坦搜索要谨慎',
        body: '玩家会搜 leviathan，但攻略站不能在没有来源时编完整列表。',
      },
    ],
    routeChecklistTitle: '生物安全清单',
    routeChecklist: [
      '追踪补丁里的行为变化。',
      '把生物名字和已确认行为分开。',
      '标出灯光、声音、载具和基地吸引风险。',
      '不要让新玩家无回程计划地走高风险深区。',
    ],
    contentsLabel: '目录',
    routeTitle: '怎么把生物信息写成路线建议',
    routeSteps: [
      {
        title: '先写可观察行为',
        body: '会跟灯、会堵路、会围着资源循环转，这些才是玩家能立刻用的点。',
      },
      {
        title: 'Hotfix 后更新 Hammerhead',
        body: 'Hotfix 2 调整了 Hammerhead 对 Tadpole 灯光的吸引，生物页要把这种信息放前面。',
      },
      {
        title: '利维坦页先做观察页',
        body: '可以做利维坦搜索页，但要写清哪些是官方、哪些只是预告片视觉，哪些还要等扫描或补丁。',
      },
      {
        title: '把风险连到路线',
        body: '生物页要链接地图、氧气、载具、基地页面，让读者能改变路线。',
      },
    ],
    tableTitle: '生物相关搜索怎么回答',
    tableHeaders: ['搜索词', '有用回答'],
    tableRows: [
      [
        'subnautica 2 creatures',
        '追踪已确认行为、安全路线和路线图里的未来生物信息。',
      ],
      [
        'subnautica 2 leviathans',
        '没有官方支持前，用观察页写法，不硬列具体名单。',
      ],
      ['subnautica 2 hammerhead', 'Hotfix 2 调整了对 Tadpole 灯光的吸引。'],
      [
        'subnautica 2 hostile creatures',
        '写路线风险、载具风险和基地位置，而不只是名字。',
      ],
      ['subnautica 2 creature list', '抢先体验阶段不要伪造完整列表。'],
    ],
    visualTitle: '生物风险卡',
    visualItems: [
      {
        label: '确认记录',
        value: 'Hammerhead',
        note: 'Hotfix 2 调整了灯光吸引行为。',
      },
      { label: '最佳内容', value: '风险路线', note: '行为和避险路线最有用。' },
      { label: '利维坦', value: '观察', note: '具体名单等官方支持。' },
    ],
    cautionTitle: '生物列表只有能帮助移动才有用',
    cautionBody:
      '只复制名字很薄。更好的页面要说明它改变了什么：路线、基地、载具、氧气计划，还是是否该回头。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 有利维坦吗？',
        body: '官方路线图提到未来生物和利维坦相关内容，但本页不会在缺少来源时写完整名单。',
      },
      {
        title: 'Hotfix 2 对 Hammerhead 改了什么？',
        body: 'Hotfix 2 写到 Hammerhead 不再那么容易被 Tadpole 灯光吸引，之前这会把玩家带回基地附近。',
      },
      {
        title: '基地能建在生物路线旁边吗？',
        body: '要谨慎。如果路线会把敌对行为带回基地，建议换位置或当临时基地。',
      },
      {
        title: '为什么放官方预告？',
        body: '预告片能提供视觉参考，但本页不会把它当成精确路线数据。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      {
        href: Routes.Subnautica2NibblersMarrowbreachAfterHotfix3,
        label: 'Hotfix 3 后 Nibbler 和 Marrowbreach',
      },
      { href: Routes.Subnautica2Vehicles, label: '载具指南' },
      { href: Routes.Subnautica2BaseLocationTierList, label: '基地位置梯度' },
      { href: Routes.Subnautica2MapSizeBiomes, label: '地图大小和生态区' },
      { href: Routes.Subnautica2OxygenDepth, label: '氧气和深度' },
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 1 日核对 Unknown Worlds Hotfix 2、路线图、Steam 和官方预告。图片为 Abyss Guides 原创图，视频为 Subnautica 官方嵌入。',
    cardKicker: '生物观察',
    cardBody: '围绕 Hammerhead、利维坦搜索、载具风险和路线规划写的谨慎页面。',
    cardTypeLabel: '类型',
    cardTypeValue: '生物指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '用途',
    cardStatusValue: '路线风险',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 生物とリヴァイアサン: Early Accessの確認メモ',
      description:
        'Subnautica 2の生物、リヴァイアサン、Hammerhead挙動、乗り物リスク、探索ルートを整理します。',
    },
    eyebrow: 'Subnautica 2 生物',
    title: 'Subnautica 2 生物とリヴァイアサン: 確認済み情報の見方',
    description:
      '生物ページは噂が混ざりやすいです。このページは公式パッチ、ロードマップ、トレーラー文脈を分けて、ルートに使える形にします。',
    quickLabel: '結論',
    quickAnswer:
      'Hammerheadは確認済みの注目点です。Hotfix 2ではTadpoleライトへの誘引が調整されたと書かれています。ロードマップには今後の生物とリヴァイアサン関連の更新もありますが、詳細名は公式確認待ちです。',
    fieldNotesTitle: '生物ページの考え方',
    fieldNotes: [
      {
        title: '名前より挙動',
        body: '追ってくるか、道を塞ぐか、光に反応するか、拠点を危険にするかが大事です。',
      },
      {
        title: 'パッチで危険度が変わる',
        body: 'Hotfixで生物リスクが変わる場合があります。',
      },
      {
        title: 'リヴァイアサン検索は慎重に',
        body: '検索需要はありますが、公式支援なしに完全リストを作りません。',
      },
    ],
    routeChecklistTitle: '安全チェック',
    routeChecklist: [
      '挙動変更のパッチを追う。',
      '名前と確認済み挙動を分ける。',
      'ライト、音、乗り物、拠点リスクを書く。',
      '深い危険ルートには帰還計画を入れる。',
    ],
    contentsLabel: '目次',
    routeTitle: '生物情報をルートに変える',
    routeSteps: [
      {
        title: '観察できる挙動から始める',
        body: '光に反応する、道を塞ぐ、資源ルートにいるなど、行動できる情報を優先します。',
      },
      {
        title: 'HammerheadはHotfix後に更新',
        body: 'Hotfix 2でTadpoleライトへの誘引が調整されています。',
      },
      {
        title: 'リヴァイアサンは観察ページにする',
        body: '公式情報、トレーラー文脈、未確認を分けて書きます。',
      },
      {
        title: 'リスクをルートへつなぐ',
        body: 'マップ、酸素、乗り物、拠点ページへリンクします。',
      },
    ],
    tableTitle: '検索語と答え方',
    tableHeaders: ['検索語', '答えること'],
    tableRows: [
      [
        'subnautica 2 creatures',
        '確認済み挙動、安全ルート、ロードマップを追います。',
      ],
      ['subnautica 2 leviathans', '公式確認まで観察ページとして扱います。'],
      [
        'subnautica 2 hammerhead',
        'Hotfix 2でTadpoleライト誘引が調整されています。',
      ],
      [
        'subnautica 2 hostile creatures',
        'ルート、乗り物、拠点リスクを書きます。',
      ],
      [
        'subnautica 2 creature list',
        'Early Access中に偽の完全リストを作りません。',
      ],
    ],
    visualTitle: '生物リスクカード',
    visualItems: [
      {
        label: '確認メモ',
        value: 'Hammerhead',
        note: 'ライト誘引が調整されました。',
      },
      {
        label: '役立つ形式',
        value: '危険ルート',
        note: '挙動と避け方が重要です。',
      },
      { label: 'リヴァイアサン', value: '観察', note: '詳細は公式確認待ち。' },
    ],
    cautionTitle: '名前リストだけでは薄い',
    cautionBody:
      '良い生物ページは、ルート、拠点、乗り物、酸素、引き返す判断にどう関わるかを書きます。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'リヴァイアサンはいますか？',
        body: 'ロードマップには今後の生物とリヴァイアサン関連更新がありますが、完全リストは公式確認待ちです。',
      },
      {
        title: 'Hammerheadは何が変わりましたか？',
        body: 'Hotfix 2でTadpoleライトに引かれすぎないよう調整されました。',
      },
      {
        title: '生物ルート近くに拠点を作れますか？',
        body: '危険行動を拠点へ引くなら避けたほうが安全です。',
      },
      {
        title: 'なぜ公式トレーラーを入れますか？',
        body: '視覚参考として使いますが、正確なルート情報とは扱いません。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2Vehicles, label: '乗り物ガイド' },
      { href: Routes.Subnautica2BaseLocationTierList, label: '拠点候補ランク' },
      {
        href: Routes.Subnautica2MapSizeBiomes,
        label: 'マップサイズとバイオーム',
      },
      { href: Routes.Subnautica2OxygenDepth, label: '酸素と深度' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2' },
    ],
    sourcesTitle: '出典メモ',
    sourceBody:
      '2026年6月1日にUnknown Worlds Hotfix 2、ロードマップ、Steam、公式トレーラーを確認。画像はAbyss Guidesオリジナル、動画は公式Subnautica埋め込みです。',
    cardKicker: 'Creature watch',
    cardBody:
      'Hammerhead、リヴァイアサン検索、乗り物リスク、探索ルートのページです。',
    cardTypeLabel: '種類',
    cardTypeValue: '生物ガイド',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: '用途',
    cardStatusValue: 'ルートリスク',
  },
};

function getCopy(locale: Locale): CreaturesCopy {
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
    pathname: Routes.Subnautica2CreaturesLeviathans,
  });
}

export default async function Subnautica2CreaturesLeviathansPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <LocalizedResourceGuidePage
      copy={{ ...copy, publishedAt: PUBLISHED_AT, updatedAt: UPDATED_AT }}
      icon={AlertTriangleIcon}
      locale={locale}
      pathname={Routes.Subnautica2CreaturesLeviathans}
      sources={sources}
    />
  );
}
