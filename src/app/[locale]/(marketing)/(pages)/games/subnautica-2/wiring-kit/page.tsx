import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { ZapIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type WiringKitCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-25';
const UPDATED_AT = '2026-05-25';

const sharedSources = [
  {
    href: 'https://subnautica2.gg/blueprints/wiring-kit',
    label: 'Subnautica2.gg Wiring Kit blueprint',
  },
  {
    href: 'https://www.dexerto.com/wikis/subnautica-2/resources/wiring-kit/',
    label: 'Dexerto Wiring Kit database',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-silver-location/',
    label: 'PC Gamer Silver guide',
  },
];

const wiringKitCopy: Record<string, WiringKitCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Wiring Kit Guide - Recipe, Silver, Copper Wire, and System Chip Uses',
      description:
        'A practical Subnautica 2 Wiring Kit guide covering the Silver and Copper Wire recipe, System Chip prep, electronics storage, and when to craft it.',
    },
    eyebrow: 'Subnautica 2 electronics material',
    title: 'Subnautica 2 Wiring Kit Guide',
    description:
      'Wiring Kit is the small electronics part that makes Silver and Copper prep matter. Get the ingredients ready, then craft it only when the next blueprint asks for one.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current blueprint data lists Wiring Kit as Silver plus Copper Wire. The usual blocker is Silver, while Copper Wire is the easy piece to forget at base. Make Wiring Kit for named recipes such as System Chip and later electronics or upgrade chains, but leave some Silver raw until you know the next craft.',
    contentsLabel: 'Contents',
    routeTitle: 'Wiring Kit craft plan',
    routeSteps: [
      {
        title: 'Fix the Silver route first',
        body: 'If Wiring Kit is blocked, the problem is usually Silver. Run the Old Habitat cave route or your best repeatable Silver loop before you start blaming the fabricator.',
      },
      {
        title: 'Keep Copper Wire beside Silver',
        body: 'Copper Wire looks basic, so it often sits in a different locker from electronics. Store a few coils with Silver, Quartz, and chips so the recipe check is fast.',
      },
      {
        title: 'Craft against a named recipe',
        body: 'Wiring Kit is useful, but it is less flexible than raw Silver plus Copper Wire. Make it when System Chip, a station, a tool, or a vehicle upgrade actually needs it.',
      },
      {
        title: 'Check the System Chip chain',
        body: 'System Chip currently sits right after Wiring Kit in the electronics chain. If a Rebreather, Scanner Station, Tadpole, or depth module plan is stuck, trace the chain back here.',
      },
      {
        title: 'Leave a raw Silver reserve',
        body: 'One spare Wiring Kit is fine once Silver is steady. Before that, keep at least a couple of Silver pieces uncrafted so a patch-sensitive recipe does not trap you.',
      },
    ],
    tableTitle: 'Wiring Kit checklist',
    tableHeaders: ['Item', 'What to confirm'],
    tableRows: [
      [
        'Silver',
        'The real bottleneck for most early Wiring Kit and System Chip crafts.',
      ],
      [
        'Copper Wire',
        'Craft from Copper and store with electronics, not only basic materials.',
      ],
      [
        'System Chip',
        'The next electronics step, usually paired with Quartz in current guides.',
      ],
      [
        'Upgrade target',
        'Confirm the recipe before turning every raw material into finished kits.',
      ],
      [
        'Locker split',
        'Keep raw Silver, Copper Wire, Wiring Kit, and Quartz in one electronics box.',
      ],
    ],
    visualTitle: 'Electronics chain',
    visualItems: [
      {
        label: 'Mine',
        value: 'Silver',
        note: 'Run the repeatable cave route before crafting kits.',
      },
      {
        label: 'Wire',
        value: 'Copper',
        note: 'Keep Copper Wire ready with the electronics stash.',
      },
      {
        label: 'Build',
        value: 'Chip',
        note: 'Spend kits on System Chip and named upgrades.',
      },
    ],
    cautionTitle: 'Do not convert every Silver piece',
    cautionBody:
      'A neat stack of Wiring Kits feels productive, but finished parts can corner you. Keep some Silver and Copper Wire loose until the next recipe is visible on your fabricator or station.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you make Wiring Kit in Subnautica 2?',
        body: 'Current blueprint data lists Wiring Kit as Silver plus Copper Wire. If the craft is blocked, check your Silver route first, then make sure you already turned Copper into Copper Wire.',
      },
      {
        title: 'What is Wiring Kit used for?',
        body: 'It feeds electronics chains, especially System Chip. Current guide data also connects those electronics to tools, stations, vehicle prep, and depth-related upgrades.',
      },
      {
        title: 'Should I stockpile Wiring Kits early?',
        body: 'Not heavily. One spare is useful after Silver becomes repeatable, but raw Silver and Copper Wire are more flexible while recipes are still patch-sensitive.',
      },
      {
        title: 'Why am I stuck making System Chip?',
        body: 'System Chip usually sends you back to Wiring Kit, and Wiring Kit sends you back to Silver. Solve that material chain in order instead of searching for the chip recipe alone.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2CopperWire, label: 'Copper Wire Guide' },
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2Copper, label: 'Copper Location' },
      { href: Routes.Subnautica2SystemChip, label: 'System Chip Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        label: 'Tadpole Depth Module Guide',
      },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 25, 2026 against current Subnautica2.gg and Dexerto Wiring Kit data, plus PC Gamer Silver route coverage. Early Access recipes and uses can change after patches.',
    cardKicker: 'Electronics card',
    cardBody:
      'Silver, Copper Wire, System Chip prep, electronics storage, and upgrade timing.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Crafting material',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Wiring Kit 指南 - 配方、Silver、Copper Wire 和 System Chip 用途',
      description:
        'Subnautica 2 中文 Wiring Kit 指南：整理 Silver 与 Copper Wire 配方、System Chip 前置、电子材料收纳和什么时候该制作。',
    },
    eyebrow: 'Subnautica 2 电子材料',
    title: 'Subnautica 2 Wiring Kit 指南',
    description:
      'Wiring Kit 是很小的电子零件，但它会把 Silver、Copper Wire 和 System Chip 串成一条链。别看到能做就全做，先看下一个蓝图到底要什么。',
    quickLabel: '快速结论',
    quickAnswer:
      '当前蓝图数据把 Wiring Kit 写成 Silver + Copper Wire。真正容易卡住的通常是 Silver，Copper Wire 则经常因为太基础而被玩家忘在别的箱子里。建议等 System Chip、工具、工作站或载具升级明确需要时再制作，并保留一部分原始 Silver。',
    contentsLabel: '目录',
    routeTitle: 'Wiring Kit 制作规划',
    routeSteps: [
      {
        title: '先把 Silver 路线跑顺',
        body: 'Wiring Kit 卡住时，十有八九是 Silver 不够。先去 Old Habitat 附近洞穴路线，或者你已经确认能重复跑的 Silver 点，不要只盯着配方界面发愣。',
      },
      {
        title: 'Copper Wire 和 Silver 放一起',
        body: 'Copper Wire 看起来太基础，很多人会把它丢到普通材料箱。最好留几卷和 Silver、Quartz、芯片放在同一个电子材料箱里，查配方会快很多。',
      },
      {
        title: '按明确配方再制作',
        body: 'Wiring Kit 有用，但它没有原始 Silver + Copper Wire 灵活。等 System Chip、工作站、工具或载具升级真的需要时再做。',
      },
      {
        title: '顺手检查 System Chip 链',
        body: 'System Chip 目前就在 Wiring Kit 后面一环。Rebreather、Scanner Station、Tadpole 或深度模块卡住时，可以先沿着这条电子链倒查。',
      },
      {
        title: '留一点原始 Silver',
        body: 'Silver 路线稳定以后，留一个备用 Wiring Kit 很舒服。在那之前，至少保留几块没加工的 Silver，避免后续配方需要原料时被自己卡住。',
      },
    ],
    tableTitle: 'Wiring Kit 检查表',
    tableHeaders: ['项目', '要确认什么'],
    tableRows: [
      ['Silver', '大多数早期 Wiring Kit 和 System Chip 的真正卡点。'],
      ['Copper Wire', '用 Copper 制作后，最好和电子材料放在一起。'],
      ['System Chip', '当前资料里下一步电子零件，通常还会接 Quartz。'],
      ['升级目标', '先确认配方，再决定要不要把原料全部做成成品。'],
      [
        '箱子分类',
        'Silver、Copper Wire、Wiring Kit、Quartz 放同一个电子材料箱。',
      ],
    ],
    visualTitle: '电子材料链',
    visualItems: [
      {
        label: '采集',
        value: 'Silver',
        note: '先跑稳定洞穴路线，再考虑批量制作。',
      },
      {
        label: '绕线',
        value: 'Copper',
        note: 'Copper Wire 要和电子材料放一起。',
      },
      {
        label: '制作',
        value: 'Chip',
        note: '把 Wiring Kit 用在 System Chip 和明确升级上。',
      },
    ],
    cautionTitle: '别把所有 Silver 都做掉',
    cautionBody:
      '一堆 Wiring Kit 看起来很整齐，但成品会让你少很多选择。除非下一个配方已经显示出来，否则保留一些 Silver 和 Copper Wire 会更稳。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Wiring Kit 怎么做？',
        body: '当前蓝图数据写的是 Silver 加 Copper Wire。做不了时，先检查 Silver 路线，再确认 Copper 已经加工成 Copper Wire。',
      },
      {
        title: 'Wiring Kit 有什么用？',
        body: '它会进入电子制作链，尤其是 System Chip。当前资料也把后续电子零件和工具、工作站、载具准备、深度相关升级联系在一起。',
      },
      {
        title: '前期要不要囤 Wiring Kit？',
        body: '不建议大量囤。Silver 稳定后可以留一个备用；在那之前，原始 Silver 和 Copper Wire 更灵活。',
      },
      {
        title: '为什么 System Chip 一直做不了？',
        body: 'System Chip 往往会倒回 Wiring Kit，而 Wiring Kit 又倒回 Silver。按 Silver、Copper Wire、Wiring Kit、System Chip 的顺序查，比单独找芯片更快。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2CopperWire, label: 'Copper Wire 指南' },
      { href: Routes.Subnautica2Silver, label: 'Silver 位置' },
      { href: Routes.Subnautica2Copper, label: 'Copper 位置' },
      { href: Routes.Subnautica2SystemChip, label: 'System Chip 指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        label: 'Tadpole Depth Module 指南',
      },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 25 日核对 Subnautica2.gg 与 Dexerto 的 Wiring Kit 数据，以及 PC Gamer 的 Silver 路线资料。抢先体验期间，配方和用途可能随补丁调整。',
    cardKicker: '电子材料卡',
    cardBody:
      'Silver、Copper Wire、System Chip 前置、电子材料收纳和升级制作时机。',
    cardTypeLabel: '类型',
    cardTypeValue: '制作材料',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: 'Early Access',
  },
  ja: {
    metadata: {
      title:
        'Subnautica 2 Wiring Kit Guide - レシピ、Silver、Copper Wire、System Chip',
      description:
        'Subnautica 2 の Wiring Kit ガイド。Silver と Copper Wire の準備、System Chip へのつなぎ方、電子素材の保管、作るタイミングを整理します。',
    },
    eyebrow: 'Subnautica 2 電子素材',
    title: 'Subnautica 2 Wiring Kit Guide',
    description:
      'Wiring Kit は小さな部品ですが、Silver、Copper Wire、System Chip をつなぐ大事な中継点です。作れるから作るのではなく、次の設計図を見てから使いましょう。',
    quickLabel: '要点',
    quickAnswer:
      '現在のブループリント情報では Wiring Kit は Silver と Copper Wire で作ります。詰まりやすいのは Silver 側です。System Chip、ツール、ステーション、ビークル強化で必要になった時に作り、Silver は少し未加工で残しておくと安全です。',
    contentsLabel: '目次',
    routeTitle: 'Wiring Kit 作成プラン',
    routeSteps: [
      {
        title: 'まず Silver ルートを安定させる',
        body: 'Wiring Kit が作れない時は、たいてい Silver が足りません。Old Habitat 周辺の洞窟ルートなど、繰り返せる採集ルートを先に決めます。',
      },
      {
        title: 'Copper Wire を電子素材に混ぜておく',
        body: 'Copper Wire は基本素材に見えますが、電子レシピではよく使います。Silver、Quartz、チップ類と同じロッカーに入れると確認が楽です。',
      },
      {
        title: '必要なレシピが出てから作る',
        body: 'Wiring Kit は便利ですが、Silver と Copper Wire のままの方が融通は利きます。System Chip やアップグレードが要求した時に作りましょう。',
      },
      {
        title: 'System Chip チェーンを見る',
        body: '現在の情報では System Chip は Wiring Kit の次に来る電子部品です。Rebreather、Scanner Station、Tadpole、深度モジュールが止まったら、ここまで戻って確認します。',
      },
      {
        title: 'Silver を少し残す',
        body: 'Silver が安定したら予備の Wiring Kit は便利です。それまでは未加工の Silver を少し残しておく方が、Early Access の変更に対応しやすいです。',
      },
    ],
    tableTitle: 'Wiring Kit チェックリスト',
    tableHeaders: ['項目', '確認すること'],
    tableRows: [
      ['Silver', '序盤の Wiring Kit と System Chip で一番詰まりやすい素材。'],
      ['Copper Wire', 'Copper から作り、電子素材の近くに保管する。'],
      ['System Chip', '現在のガイドでは次の電子部品。Quartz も一緒に確認。'],
      ['作成目標', 'すべてを完成品にせず、必要なレシピを先に見る。'],
      [
        '保管場所',
        'Silver、Copper Wire、Wiring Kit、Quartz を同じ箱にまとめる。',
      ],
    ],
    visualTitle: '電子素材チェーン',
    visualItems: [
      {
        label: '採集',
        value: 'Silver',
        note: '安定した洞窟ルートを先に作る。',
      },
      {
        label: '配線',
        value: 'Copper',
        note: 'Copper Wire を電子素材として保管する。',
      },
      {
        label: '作成',
        value: 'Chip',
        note: 'System Chip や明確な強化に使う。',
      },
    ],
    cautionTitle: 'Silver を全部加工しない',
    cautionBody:
      'Wiring Kit を並べると整理された気分になりますが、完成品は使い道が限られます。次のレシピを見るまでは Silver と Copper Wire を少し残しましょう。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 で Wiring Kit はどう作る？',
        body: '現在のブループリント情報では Silver と Copper Wire です。作れない場合は Silver ルートと Copper Wire の加工を確認してください。',
      },
      {
        title: 'Wiring Kit は何に使う？',
        body: '電子素材チェーン、特に System Chip に使います。そこからツール、ステーション、ビークル準備、深度強化につながる場合があります。',
      },
      {
        title: '序盤に大量に作るべき？',
        body: '大量には作らない方が安全です。Silver が安定したら予備を 1 個、序盤は原料のまま残す方が柔軟です。',
      },
      {
        title: 'System Chip が作れない時は？',
        body: 'System Chip は Wiring Kit に戻り、Wiring Kit は Silver に戻ります。Silver、Copper Wire、Wiring Kit、System Chip の順で確認しましょう。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2CopperWire, label: 'Copper Wire ガイド' },
      { href: Routes.Subnautica2Silver, label: 'Silver の場所' },
      { href: Routes.Subnautica2Copper, label: 'Copper の場所' },
      { href: Routes.Subnautica2SystemChip, label: 'System Chip ガイド' },
      { href: Routes.Subnautica2Crafting, label: 'クラフトガイド' },
      { href: Routes.Subnautica2Resources, label: 'リソースガイド' },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        label: 'Tadpole Depth Module ガイド',
      },
    ],
    sourcesTitle: 'ソースメモ',
    sourceBody:
      '2026年5月25日に Subnautica2.gg と Dexerto の Wiring Kit 情報、PC Gamer の Silver ルート情報を確認しました。Early Access 中はレシピや用途が変わる可能性があります。',
    cardKicker: '電子素材カード',
    cardBody:
      'Silver、Copper Wire、System Chip 準備、素材保管、アップグレードのタイミング。',
    cardTypeLabel: '種類',
    cardTypeValue: 'クラフト素材',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: '状態',
    cardStatusValue: 'Early Access',
  },
};

const fallbackLocaleAliases = {
  de: {
    title: 'Subnautica 2 Wiring Kit Guide',
    description:
      'Guide for Wiring Kit recipe, Silver, Copper Wire, System Chip prep, and electronics crafting.',
  },
  fr: {
    title: 'Subnautica 2 Wiring Kit Guide',
    description:
      'Guide Wiring Kit: Silver, Copper Wire, System Chip et préparation électronique.',
  },
  'pt-BR': {
    title: 'Subnautica 2 Wiring Kit Guide',
    description:
      'Guia de Wiring Kit com Silver, Copper Wire, System Chip e cadeia de eletrônicos.',
  },
  'es-419': {
    title: 'Subnautica 2 Wiring Kit Guide',
    description:
      'Guia de Wiring Kit: Silver, Copper Wire, System Chip y cadena de electronica.',
  },
  ko: {
    title: 'Subnautica 2 Wiring Kit Guide',
    description:
      'Wiring Kit recipe, Silver, Copper Wire, System Chip prep, and electronics crafting.',
  },
  ru: {
    title: 'Subnautica 2 Wiring Kit Guide',
    description:
      'Guide for Wiring Kit recipe, Silver, Copper Wire, System Chip prep, and electronics crafting.',
  },
} satisfies Record<string, { title: string; description: string }>;

function getCopy(locale: Locale): WiringKitCopy {
  if (wiringKitCopy[locale]) {
    return wiringKitCopy[locale];
  }

  const fallback =
    fallbackLocaleAliases[locale as keyof typeof fallbackLocaleAliases] ??
    fallbackLocaleAliases.de;

  return {
    ...wiringKitCopy.en,
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
    pathname: Routes.Subnautica2WiringKit,
  });
}

export default async function WiringKitPage({
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
      icon={ZapIcon}
      locale={locale}
      pathname={Routes.Subnautica2WiringKit}
      sources={sharedSources}
    />
  );
}
