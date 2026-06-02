import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { ShipWheelIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type VehiclesCopy = ResourceGuideCopy & {
  metadata: { title: string; description: string };
};

const PUBLISHED_AT = '2026-06-01';
const UPDATED_AT = '2026-06-02';

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

const copyByLocale: Record<string, VehiclesCopy> = {
  en: {
    metadata: {
      title: 'Subnautica 2 Vehicles: Tadpole, Docking, Upgrades, and Roadmap',
      description:
        'A source-backed Subnautica 2 vehicles guide for the Tadpole, docking, vehicle bugs, future vehicle roadmap notes, and safe route planning.',
    },
    eyebrow: 'Subnautica 2 vehicles',
    title:
      'Subnautica 2 Vehicles: Tadpole Notes, Docking Checks, and What Comes Next',
    description:
      'Vehicles are one of the first things players search once short oxygen loops stop being enough. This page keeps confirmed Tadpole notes separate from future-vehicle speculation.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'The Tadpole is the vehicle to track first. Hotfix 3 says Hammerheads no longer attack unpiloted Tadpoles, though they can still take an interest in them. Hotfix 2 also touched Tadpole lights, Hammerhead behavior, a teleport bug while exploring in a Tadpole, and an oxygen bug while piloting it. Unknown Worlds says future drops will expand tools and vehicles, so treat extra vehicle names as watch items until official pages or in-game scans support them.',
    fieldNotesTitle: 'Why vehicles matter early',
    fieldNotes: [
      {
        title: 'They change route length',
        body: 'A resource loop that feels risky on fins can become reasonable once a vehicle gives you a safer return plan.',
      },
      {
        title: 'They create new bugs',
        body: 'Hotfix 2 and Hotfix 3 both touched Tadpole behavior or vehicle-adjacent bugs, so vehicle pages need update dates rather than evergreen confidence.',
      },
      {
        title: 'They connect to base planning',
        body: 'Docking, fabrication, nearby resources, and creature behavior all affect where a base should sit.',
      },
    ],
    routeChecklistTitle: 'Vehicle planning checklist',
    routeChecklist: [
      'Track Hotfix 3 before parking an empty Tadpole near Hammerhead routes.',
      'Keep bases away from routes that drag hostile creatures home.',
      'Treat future vehicle names as unconfirmed unless official sources support them.',
      'Link vehicle routes to oxygen, map, and base pages.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to use vehicles safely',
    routeSteps: [
      {
        title: 'Treat the Tadpole as the first hub vehicle',
        body: 'Build route pages around what the Tadpole actually changes: oxygen pressure, return timing, cargo planning, and risk around creatures.',
      },
      {
        title: 'Watch lights and creature behavior',
        body: 'Hotfix 3 says Hammerheads no longer attack unpiloted Tadpoles, but can still take interest in them. Hotfix 2 also adjusted Tadpole-light behavior, so old parking advice needs a fresh check.',
      },
      {
        title: 'Do not overstate future vehicles',
        body: 'The roadmap talks about future expansion for vehicles, but a guide should not turn that into a fake release date or full vehicle list.',
      },
      {
        title: 'Pair vehicle pages with base pages',
        body: 'A vehicle guide becomes more useful when it links to docking, base location, resource loops, and map planning.',
      },
    ],
    tableTitle: 'Vehicle search terms and useful answers',
    tableHeaders: ['Search term', 'What to answer'],
    tableRows: [
      [
        'subnautica 2 vehicles',
        'Start with Tadpole facts and roadmap-safe future notes.',
      ],
      [
        'subnautica 2 tadpole',
        'Explain route use, parking risk, light behavior, docking checks, and known hotfix mentions.',
      ],
      [
        'subnautica 2 vehicle docking',
        'Connect to base placement and roadmap notes.',
      ],
      [
        'subnautica 2 new vehicles',
        'Use future-vehicle watch language until official details land.',
      ],
      [
        'subnautica 2 tadpole bug',
        'Point readers to Hotfix 3 and Hotfix 2 before giving old workarounds.',
      ],
    ],
    visualTitle: 'Vehicle route card',
    visualItems: [
      {
        label: 'First vehicle',
        value: 'Tadpole',
        note: 'The current vehicle to build route pages around.',
      },
      {
        label: 'Patch risk',
        value: 'High',
        note: 'Hotfix 3 changed empty-Tadpole safety.',
      },
      {
        label: 'Future',
        value: 'Watch',
        note: 'More vehicle work is on the roadmap, but details can change.',
      },
    ],
    cautionTitle: 'Do not publish a fake full vehicle list',
    cautionBody:
      'Vehicle speculation gets clicks, but it also goes stale fast. This page is meant to be useful because it says what is confirmed and what still needs a source.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'What vehicle should I track first in Subnautica 2?',
        body: 'Track the Tadpole first because official hotfix notes already mention Tadpole lights, Hammerhead behavior, exploration, piloting bugs, and empty-vehicle safety.',
      },
      {
        title: 'Are more Subnautica 2 vehicles coming?',
        body: 'Unknown Worlds says future drops will expand the world, tools, and vehicles, but exact future vehicle details should be treated as watch items until confirmed.',
      },
      {
        title: 'Can creatures follow my vehicle back to base?',
        body: 'Hotfix 2 mentions Hammerheads following players back toward bases because of Tadpole-light attraction, and says that behavior was adjusted. Hotfix 3 later says Hammerheads no longer attack unpiloted Tadpoles, though they can still show interest.',
      },
      {
        title: 'Should vehicle pages include video?',
        body: 'Yes, with source labels. This page uses original Abyss Guides art and the official Subnautica gameplay trailer embed.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Guide' },
      { href: Routes.Subnautica2TadpoleDock, label: 'Tadpole Dock' },
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3' },
      {
        href: Routes.Subnautica2StrikeArmorStackingAfterHotfix3,
        label: 'Strike Armor After Hotfix 3',
      },
      { href: Routes.Subnautica2MapSizeBiomes, label: 'Map Size and Biomes' },
      {
        href: Routes.Subnautica2BaseLocationTierList,
        label: 'Base Location Tier List',
      },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 2, 2026 against Unknown Worlds Hotfix 3, Hotfix 2, the Early Access roadmap, Steam, and the official trailer. Page art is original Abyss Guides art; video is the official Subnautica embed.',
    cardKicker: 'Vehicle watch',
    cardBody:
      'A route-first vehicle page for Tadpole use, docking checks, creature behavior, and future vehicle watch notes.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Vehicle guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Focus',
    cardStatusValue: 'Tadpole',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 载具指南：Tadpole、停靠、升级和路线图',
      description:
        'Subnautica 2 载具中文指南：Tadpole、载具停靠、Hotfix 3 和 Hotfix 2 相关问题、未来载具路线图和安全路线规划。',
    },
    eyebrow: 'Subnautica 2 载具',
    title: 'Subnautica 2 载具指南：Tadpole、停靠和未来更新怎么判断',
    description:
      '氧气短循环不够用之后，玩家很快就会搜载具。这个页面只把 Tadpole 和官方来源说清楚，不把未来载具猜测写成事实。',
    quickLabel: '快速结论',
    quickAnswer:
      '先关注 Tadpole。Hotfix 3 写明 Hammerhead 不再攻击无人驾驶的 Tadpole，但仍可能对它感兴趣。Hotfix 2 也提到 Tadpole 灯光、Hammerhead 对 Tadpole 的行为、驾驶 Tadpole 时的传送问题和氧气问题。Unknown Worlds 说未来大更新会扩展工具和载具，所以其他载具名先当观察项，不要当成已确认列表。',
    fieldNotesTitle: '为什么载具页重要',
    fieldNotes: [
      {
        title: '它会改变路线长度',
        body: '靠脚蹼很危险的资源循环，有载具后可能就变成可规划路线。',
      },
      {
        title: '它也会带来新问题',
        body: 'Hotfix 2 和 Hotfix 3 都改过 Tadpole 相关行为或载具附近的问题，所以载具页必须有更新时间。',
      },
      {
        title: '它会影响建家',
        body: '停靠、制作、附近资源和生物行为，都会影响基地放在哪里。',
      },
    ],
    routeChecklistTitle: '载具规划清单',
    routeChecklist: [
      '把空 Tadpole 停在 Hammerhead 路线附近前，先看 Hotfix 3。',
      '基地不要放在容易把敌对生物带回家的路线旁。',
      '未来载具名没有官方来源时，只写观察项。',
      '把载具路线链接到氧气、地图和基地页面。',
    ],
    contentsLabel: '目录',
    routeTitle: '怎么安全使用载具',
    routeSteps: [
      {
        title: '把 Tadpole 当作第一核心载具',
        body: '围绕 Tadpole 写路线：氧气压力、回程时间、携带物资和生物风险。',
      },
      {
        title: '注意灯光和生物行为',
        body: 'Hotfix 3 写明 Hammerhead 不再攻击无人驾驶的 Tadpole，但仍可能对 Tadpole 感兴趣。Hotfix 2 也调整过 Tadpole 灯光相关行为，所以旧停放建议要重新看。',
      },
      {
        title: '不要夸大未来载具',
        body: '路线图提到未来会扩展载具，但不等于现在就有完整载具列表和日期。',
      },
      {
        title: '载具页要连到基地页',
        body: '停靠、建家点、资源循环和地图规划连起来，页面才会反复被用。',
      },
    ],
    tableTitle: '载具相关搜索怎么回答',
    tableHeaders: ['搜索词', '应该回答什么'],
    tableRows: [
      ['subnautica 2 vehicles', '先写 Tadpole 事实和路线图能支持的未来观察。'],
      [
        'subnautica 2 tadpole',
        '写路线用途、停放风险、灯光行为、停靠和 hotfix 记录。',
      ],
      ['subnautica 2 vehicle docking', '连接基地位置和路线图信息。'],
      ['subnautica 2 new vehicles', '没有官方细节前，只写未来观察。'],
      [
        'subnautica 2 tadpole bug',
        '先指向 Hotfix 3 和 Hotfix 2，不用旧 workaround 误导玩家。',
      ],
    ],
    visualTitle: '载具路线卡',
    visualItems: [
      { label: '第一载具', value: 'Tadpole', note: '当前最适合围绕它写路线。' },
      {
        label: '补丁风险',
        value: '高',
        note: 'Hotfix 3 改了空 Tadpole 的安全性。',
      },
      { label: '未来', value: '观察', note: '路线图有载具扩展，但细节会变。' },
    ],
    cautionTitle: '不要发布假的完整载具列表',
    cautionBody:
      '载具猜测容易吸点击，但也最容易过期。这个页面的价值是把已确认和待确认分清楚。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 先关注哪个载具？',
        body: '先关注 Tadpole，因为官方 hotfix 已经提到它的灯光、Hammerhead 行为、探索、驾驶问题和空载具安全。',
      },
      {
        title: '以后会有更多载具吗？',
        body: 'Unknown Worlds 说未来会扩展工具和载具，但具体名称和时间要等官方确认。',
      },
      {
        title: '生物会跟着载具回基地吗？',
        body: 'Hotfix 2 提到 Hammerhead 曾因为 Tadpole 灯光跟随玩家回基地附近，并已经调整。Hotfix 3 又写明 Hammerhead 不再攻击无人驾驶的 Tadpole，但仍可能对它感兴趣。',
      },
      {
        title: '载具页需要视频吗？',
        body: '需要，但要标来源。本页使用原创图和 Subnautica 官方预告嵌入。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 指南' },
      { href: Routes.Subnautica2TadpoleDock, label: 'Tadpole 停靠' },
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3' },
      {
        href: Routes.Subnautica2StrikeArmorStackingAfterHotfix3,
        label: 'Hotfix 3 后 Strike Armor',
      },
      { href: Routes.Subnautica2MapSizeBiomes, label: '地图大小和生态区' },
      { href: Routes.Subnautica2BaseLocationTierList, label: '基地位置梯度' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 2 日核对 Unknown Worlds Hotfix 3、Hotfix 2、抢先体验路线图、Steam 和官方预告。图片为 Abyss Guides 原创图，视频为 Subnautica 官方嵌入。',
    cardKicker: '载具观察',
    cardBody: '围绕 Tadpole、停靠、生物行为和未来载具更新写的路线型页面。',
    cardTypeLabel: '类型',
    cardTypeValue: '载具指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '重点',
    cardStatusValue: 'Tadpole',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 乗り物ガイド: Tadpole、ドッキング、今後の更新',
      description:
        'Subnautica 2の乗り物、Tadpole、ドッキング、Hotfix 2、今後の車両ロードマップを整理します。',
    },
    eyebrow: 'Subnautica 2 乗り物',
    title: 'Subnautica 2 乗り物ガイド: Tadpoleと今後の更新',
    description:
      '短い酸素ルートでは足りなくなった時、乗り物検索が始まります。このページはTadpoleの確認済み情報と今後の予想を分けます。',
    quickLabel: '結論',
    quickAnswer:
      'まずTadpoleを追います。Hotfix 2ではTadpoleライト、Hammerheadの挙動、Tadpole探索中のテレポート問題、操縦中の酸素問題が触れられています。今後の乗り物は公式情報が出るまで観察項目です。',
    fieldNotesTitle: '乗り物が重要な理由',
    fieldNotes: [
      {
        title: 'ルートが伸びる',
        body: 'フィンだけでは危険な資源ルートも、乗り物で現実的になります。',
      },
      {
        title: '問題も増える',
        body: 'Hotfix 2でTadpole関連の挙動が調整されています。',
      },
      {
        title: '拠点計画とつながる',
        body: 'ドッキング、製作、資源、生物の挙動が拠点位置に影響します。',
      },
    ],
    routeChecklistTitle: '乗り物チェック',
    routeChecklist: [
      '長いルート前にTadpole関連パッチを見る。',
      '危険生物を拠点へ連れてくるルートを避ける。',
      '未確認の乗り物名は観察項目にする。',
      '酸素、マップ、拠点ページへつなげる。',
    ],
    contentsLabel: '目次',
    routeTitle: '安全な使い方',
    routeSteps: [
      {
        title: 'Tadpoleを中心に見る',
        body: '酸素、帰還時間、荷物、生物リスクをTadpole基準で整理します。',
      },
      {
        title: 'ライトと生物に注意',
        body: 'Hotfix 2ではHammerheadがTadpoleライトに引かれすぎないよう調整されました。',
      },
      {
        title: '未来の乗り物を断言しない',
        body: 'ロードマップには乗り物拡張がありますが、詳細はまだ変わる可能性があります。',
      },
      {
        title: '拠点ページと組み合わせる',
        body: 'ドッキング、拠点候補、資源ルート、マップ計画にリンクします。',
      },
    ],
    tableTitle: '検索語と答え方',
    tableHeaders: ['検索語', '答えること'],
    tableRows: [
      [
        'subnautica 2 vehicles',
        'Tadpoleの事実とロードマップ上の観察を分けます。',
      ],
      [
        'subnautica 2 tadpole',
        'ルート用途、ライトリスク、ドッキング、Hotfixを説明します。',
      ],
      ['subnautica 2 vehicle docking', '拠点位置とロードマップへつなげます。'],
      ['subnautica 2 new vehicles', '公式情報が出るまで観察扱いにします。'],
      ['subnautica 2 tadpole bug', 'Hotfix 2を先に確認します。'],
    ],
    visualTitle: '乗り物ルートカード',
    visualItems: [
      { label: '最初', value: 'Tadpole', note: '現在の中心になる乗り物。' },
      {
        label: '更新リスク',
        value: '高い',
        note: 'Hotfixで挙動が変わっています。',
      },
      {
        label: '今後',
        value: '観察',
        note: '乗り物拡張はロードマップ上にあります。',
      },
    ],
    cautionTitle: '偽の全乗り物リストを作らない',
    cautionBody:
      '乗り物予想はクリックされますが、すぐ古くなります。確認済みと未確認を分けるほうが信頼されます。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: '最初に見る乗り物は？',
        body: 'Tadpoleです。Hotfix 2で公式に複数のTadpole関連点が触れられています。',
      },
      {
        title: '今後乗り物は増えますか？',
        body: 'ロードマップでは今後の乗り物拡張が示されていますが、詳細は公式確認待ちです。',
      },
      {
        title: '生物が拠点まで来ますか？',
        body: 'Hotfix 2ではHammerheadがTadpoleライトに引かれて拠点付近まで来る問題が調整されました。',
      },
      {
        title: '動画は必要ですか？',
        body: '必要です。このページはオリジナル画像と公式Subnautica動画を使います。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2Tadpole, label: 'Tadpoleガイド' },
      { href: Routes.Subnautica2TadpoleDock, label: 'Tadpoleドック' },
      {
        href: Routes.Subnautica2MapSizeBiomes,
        label: 'マップサイズとバイオーム',
      },
      { href: Routes.Subnautica2BaseLocationTierList, label: '拠点候補ランク' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2' },
    ],
    sourcesTitle: '出典メモ',
    sourceBody:
      '2026年6月1日にUnknown Worlds Hotfix 2、Early Accessロードマップ、Steam、公式トレーラーを確認。画像はAbyss Guidesオリジナル、動画は公式Subnautica埋め込みです。',
    cardKicker: 'Vehicle watch',
    cardBody:
      'Tadpole、ドッキング、生物挙動、今後の乗り物更新を追うページです。',
    cardTypeLabel: '種類',
    cardTypeValue: '乗り物ガイド',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: '中心',
    cardStatusValue: 'Tadpole',
  },
};

function getCopy(locale: Locale): VehiclesCopy {
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
    pathname: Routes.Subnautica2Vehicles,
  });
}

export default async function Subnautica2VehiclesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <LocalizedResourceGuidePage
      copy={{ ...copy, publishedAt: PUBLISHED_AT, updatedAt: UPDATED_AT }}
      icon={ShipWheelIcon}
      locale={locale}
      pathname={Routes.Subnautica2Vehicles}
      sources={sources}
    />
  );
}
