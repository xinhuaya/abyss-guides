import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { GaugeIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type OxygenDepthCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-24';
const UPDATED_AT = '2026-05-24';

const sharedSources = [
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-o2-oxygen-air-tank/',
    label: 'PC Gamer O2 guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-tips/',
    label: 'PC Gamer beginner tips',
  },
  {
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/',
    label: 'Official Steam page',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap',
    label: 'Unknown Worlds Early Access roadmap',
  },
];

const oxygenDepthCopy: Record<string, OxygenDepthCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Oxygen and Depth Guide - When to Dive Deeper and When to Turn Back',
      description:
        'A practical Subnautica 2 oxygen and depth guide covering O2 planning, Air Bladders, Standard Air Tank timing, route limits, cave checks, and safe turn-back rules.',
    },
    eyebrow: 'Subnautica 2 depth planning',
    title: 'Subnautica 2 Oxygen and Depth Guide',
    description:
      'Depth is not only a number. It is oxygen, visibility, panic distance, and whether you can explain the way home after one bad turn.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Do not push a deeper route just because you reached the entrance once. Use environmental oxygen, carry Air Bladders, upgrade to the Standard Air Tank when Silver allows it, and turn back when the route has two unknowns at the same time: low oxygen plus poor landmarks, hostile pressure, or a cave you have not mapped.',
    contentsLabel: 'Contents',
    routeTitle: 'How to judge a deeper dive',
    routeSteps: [
      {
        title: 'Check the return before the reward',
        body: 'Before chasing a scan, wreck, or rare material, ask how you will get back. If the route only works when nothing goes wrong, it is not ready yet.',
      },
      {
        title: 'Use temporary oxygen on scouting trips',
        body: 'Oxygen Tunics, Bloom Sap funnels, cave air pockets, and Air Bladders are route tools. Use them to learn the area before spending materials on a longer plan.',
      },
      {
        title: 'Upgrade when Silver stops blocking you',
        body: 'The Standard Air Tank changes how caves feel. If Silver is the bottleneck, fix that route first instead of forcing deeper trips with the starter timer.',
      },
      {
        title: 'Treat depth as a checklist',
        body: 'A deeper route needs enough O2, a landmark chain, empty inventory slots, one backup air source, and a reason to be there. Curiosity alone is how long swims turn ugly.',
      },
    ],
    tableTitle: 'Depth readiness checks',
    tableHeaders: ['Question', 'Safe answer'],
    tableRows: [
      [
        'Can I describe the way back?',
        'Yes, with a starting landmark, midpoint cue, and return cue.',
      ],
      [
        'Do I have backup oxygen?',
        'Carry an Air Bladder or know where the next environmental oxygen reset is.',
      ],
      [
        'Is this a cave or wreck route?',
        'Leave earlier than open water. Bad turns cost more in enclosed routes.',
      ],
      [
        'Am I low on inventory space?',
        'Go home first. A full backpack makes every deep trip less useful.',
      ],
      [
        'Is the goal patch-sensitive?',
        'Check current notes before trusting old resource or biome advice.',
      ],
    ],
    visualTitle: 'Dive decision card',
    visualItems: [
      {
        label: 'Green',
        value: 'Repeat',
        note: 'Known route, clear landmark chain, spare oxygen.',
      },
      {
        label: 'Yellow',
        value: 'Scout',
        note: 'One unknown is fine if you have a clean return plan.',
      },
      {
        label: 'Red',
        value: 'Leave',
        note: 'Low O2 plus bad visibility, cave turns, or no backup.',
      },
    ],
    cautionTitle: 'Depth greed wastes more time than turning back',
    cautionBody:
      'The best Subnautica 2 runs often end early. A clean return with one useful note beats a long panic swim that leaves you with no route, no inventory space, and no idea where the cave entrance was.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do I know when I can dive deeper in Subnautica 2?',
        body: 'Dive deeper when you have better oxygen, a route you can describe, a backup air source, and a clear objective such as a scan, material, or base staging check.',
      },
      {
        title: 'What should I do if I keep running out of oxygen?',
        body: 'Shorten the route, use environmental oxygen, carry Air Bladders, and work toward the Standard Air Tank instead of trying to brute-force the same cave.',
      },
      {
        title: 'Is the Standard Air Tank worth rushing?',
        body: 'Yes, once you can spare Silver, Titanium, and Rubber. It makes early cave and scan routes much less brittle.',
      },
      {
        title: 'Should I ignore a deep resource if oxygen is tight?',
        body: 'Usually yes. Mark the route, leave, upgrade, and come back. A known route is more useful than one risky grab.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather Guide' },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker Guide' },
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2Lithium, label: 'Lithium Location Guide' },
      { href: Routes.Subnautica2Biomes, label: 'Biomes Guide' },
      { href: Routes.Subnautica2Map, label: 'Map and Routes' },
      { href: Routes.Subnautica2Beginner, label: 'Beginner Route' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 24, 2026 against current O2 reporting, beginner-route guidance, the official Steam page, and the Early Access roadmap. Exact route difficulty can change as Subnautica 2 patches land.',
    cardKicker: 'Depth check card',
    cardBody:
      'A practical dive-readiness guide for oxygen upgrades, scouting trips, cave returns, and knowing when to leave.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Survival route',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 氧气和下潜深度指南 - 什么时候该继续下潜',
      description:
        'Subnautica 2 中文氧气和深度指南，整理 O2 规划、Air Bladder、Standard Air Tank、洞穴返程、深潜前检查表和安全回头规则。',
    },
    eyebrow: 'Subnautica 2 深潜规划',
    title: 'Subnautica 2 氧气和下潜深度指南',
    description:
      '深度不是单纯的数字。它还包括氧气、能见度、返程距离，以及你转错一个弯以后还能不能说清楚怎么回家。',
    quickLabel: '快速结论',
    quickAnswer:
      '不要因为“到过入口一次”就硬闯更深路线。先利用环境氧气，背包带 Air Bladder，Silver 够了就尽快升级 Standard Air Tank。只要低氧气和另一个未知风险同时出现，比如地标不清、敌对生物压力、没走过的洞穴，就该回头。',
    contentsLabel: '目录',
    routeTitle: '怎么判断能不能继续下潜',
    routeSteps: [
      {
        title: '先想返程，再想奖励',
        body: '在追扫描、残骸或稀有材料之前，先问自己怎么回来。如果这条路线只有在完全不出错时才安全，它就还没准备好。',
      },
      {
        title: '侦察时先用临时氧气',
        body: 'Oxygen Tunic、Bloom Sap funnel、洞穴空气口和 Air Bladder 都是路线工具。先用它们认识区域，再决定要不要投入材料做长路线。',
      },
      {
        title: 'Silver 不再卡住时升级气瓶',
        body: 'Standard Air Tank 会明显改变洞穴体验。如果卡点是 Silver，先解决 Silver 路线，不要拿初始氧气硬拼更深洞穴。',
      },
      {
        title: '把深潜当成检查表',
        body: '更深路线至少需要足够 O2、清楚地标链、空背包格、一个备用氧气来源，以及明确目的。只靠好奇心，很容易把长泳变成事故。',
      },
    ],
    tableTitle: '深潜前检查表',
    tableHeaders: ['问题', '安全答案'],
    tableRows: [
      ['我能说清楚怎么回来吗？', '可以。有起点地标、中途提示和返程提示。'],
      ['我有备用氧气吗？', '有 Air Bladder，或者知道下一个环境氧气点在哪里。'],
      [
        '这是洞穴或残骸路线吗？',
        '比开放水域更早回头。封闭路线转错弯代价更高。',
      ],
      ['背包空间快满了吗？', '先回家。满背包会让深潜收益变低。'],
      [
        '目标会受补丁影响吗？',
        '先看当前资料，不要盲信旧资源点或旧 biome 说法。',
      ],
    ],
    visualTitle: '下潜判断卡',
    visualItems: [
      {
        label: '绿色',
        value: '复跑',
        note: '路线熟、地标清楚、氧气有余量。',
      },
      {
        label: '黄色',
        value: '侦察',
        note: '只有一个未知点，且返程计划清楚。',
      },
      {
        label: '红色',
        value: '回头',
        note: '低氧气加上低能见度、洞穴岔路或没有备用氧气。',
      },
    ],
    cautionTitle: '贪深度比回头更浪费时间',
    cautionBody:
      '很多好的 Subnautica 2 路线，其实是提前结束的。带着一条清楚笔记安全回家，比慌忙游半天、背包没空间、还忘了洞口在哪里要强得多。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 什么时候可以下潜更深？',
        body: '当你有更稳的氧气、能说清楚路线、带了备用氧气，并且有明确目标，比如扫描、材料或基地中转点检查时。',
      },
      {
        title: '总是氧气不够怎么办？',
        body: '缩短路线，利用环境氧气，带 Air Bladder，并优先推进 Standard Air Tank，不要一直硬闯同一个洞。',
      },
      {
        title: 'Standard Air Tank 值得优先做吗？',
        body: '值得。只要 Silver、Titanium 和 Rubber 够，它会让早期洞穴和扫描路线稳定很多。',
      },
      {
        title: '氧气紧张时要不要硬拿深处资源？',
        body: '通常不要。先标记路线，回家升级，再回来。稳定路线比一次冒险捡到东西更有价值。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2AirTank, label: '气瓶和氧气' },
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather 指南' },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker 指南' },
      { href: Routes.Subnautica2Silver, label: 'Silver 位置' },
      { href: Routes.Subnautica2Lithium, label: 'Lithium 位置指南' },
      { href: Routes.Subnautica2Biomes, label: '生物群系指南' },
      { href: Routes.Subnautica2Map, label: '地图和路线' },
      { href: Routes.Subnautica2Beginner, label: '新手路线' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 24 日核对当前 O2 攻略、入门路线资料、Steam 官方页面和抢先体验路线图。Subnautica 2 后续补丁可能改变具体路线难度。',
    cardKicker: '深潜检查卡',
    cardBody: '给氧气升级、侦察潜水、洞穴返程和判断何时回头用的实用路线指南。',
    cardTypeLabel: '类型',
    cardTypeValue: '生存路线',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
  ja: {
    metadata: {
      title: 'Subnautica 2 Oxygen and Depth Guide - 深く潜る前の判断メモ',
      description:
        'Subnautica 2 の酸素と深度ガイド。O2、Air Bladder、Standard Air Tank、洞窟帰還、深潜り前チェックを整理します。',
    },
    eyebrow: 'Subnautica 2 depth planning',
    title: 'Subnautica 2 Oxygen and Depth Guide',
    description:
      'Depth は数字だけではありません。酸素、視界、帰還距離、迷った時に戻れるかがセットです。',
    quickLabel: '短い答え',
    quickAnswer:
      '入口まで行けたからといって深く進む必要はありません。環境酸素を使い、Air Bladder を持ち、Silver が揃ったら Standard Air Tank を作ります。低酸素に加えて地標不足、敵、未確認の洞窟があるなら戻ります。',
    contentsLabel: '目次',
    routeTitle: '深く潜る前の判断',
    routeSteps: [
      {
        title: '報酬より帰り道を先に考える',
        body: 'scan、wreck、rare material を追う前に、どう戻るかを確認します。',
      },
      {
        title: 'scouting では temporary oxygen を使う',
        body: 'Oxygen Tunic、Bloom Sap funnel、air pocket、Air Bladder はルート確認用の道具です。',
      },
      {
        title: 'Silver が揃ったら tank を上げる',
        body: 'Standard Air Tank は洞窟ルートをかなり安定させます。',
      },
      {
        title: 'depth を checklist として見る',
        body: 'O2、landmarks、inventory、backup air、目的が揃ってから進みます。',
      },
    ],
    tableTitle: 'Depth readiness checks',
    tableHeaders: ['Question', 'Safe answer'],
    tableRows: [
      ['帰り道を説明できる？', '開始地点、中間サイン、帰還サインがある。'],
      ['backup oxygen は？', 'Air Bladder か環境酸素ポイントがある。'],
      ['洞窟や残骸？', 'open water より早く戻る。'],
      ['inventory は空いている？', '少ないなら一度戻る。'],
      ['patch-sensitive？', '古い資源情報をそのまま信じない。'],
    ],
    visualTitle: 'Dive decision card',
    visualItems: [
      { label: 'Green', value: 'Repeat', note: 'known route, spare oxygen.' },
      { label: 'Yellow', value: 'Scout', note: 'one unknown, clear return.' },
      { label: 'Red', value: 'Leave', note: 'low O2 plus bad visibility.' },
    ],
    cautionTitle: '深追いより早めの帰還',
    cautionBody:
      '安全に戻って一つメモを残すほうが、迷って何も覚えていない長い泳ぎより役に立ちます。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'いつ深く潜れる？',
        body: 'oxygen、route、backup air、明確な目的が揃った時です。',
      },
      {
        title: '酸素が足りない時は？',
        body: 'route を短くし、environmental oxygen、Air Bladder、Standard Air Tank を使います。',
      },
      {
        title: 'Standard Air Tank は優先？',
        body: 'Silver などが揃ったら優先する価値があります。',
      },
      {
        title: '深い resource は無理して取る？',
        body: '基本は戻ってから再挑戦します。',
      },
    ],
    readNextTitle: '次に読む',
    related: [
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2' },
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather Guide' },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker Guide' },
      { href: Routes.Subnautica2Silver, label: 'Silver Location' },
      { href: Routes.Subnautica2Lithium, label: 'Lithium Location Guide' },
      { href: Routes.Subnautica2Biomes, label: 'Biomes Guide' },
      { href: Routes.Subnautica2Map, label: 'Map and Routes' },
      { href: Routes.Subnautica2Beginner, label: 'Beginner Route' },
    ],
    sourcesTitle: '出典メモ',
    sourceBody:
      '2026年5月24日に O2 guide、beginner tips、Steam、Early Access roadmap を確認。',
    cardKicker: 'Depth check card',
    cardBody:
      'oxygen upgrades、scouting、cave returns、turn-back rules のメモ。',
    cardTypeLabel: '種類',
    cardTypeValue: 'Survival route',
    cardVerifiedLabel: '確認日',
    cardStatusLabel: '状態',
    cardStatusValue: 'Early Access',
  },
};

const fallbackLocaleAliases = {
  de: {
    title: 'Subnautica 2 Oxygen and Depth Guide',
    description:
      'Route-first Guide fuer Sauerstoff, Tiefe, Air Bladders, Standard Air Tank, Cave Returns und sichere Umkehrpunkte.',
  },
  fr: {
    title: 'Subnautica 2 Oxygen and Depth Guide',
    description:
      'Guide pratique pour oxygene, profondeur, Air Bladders, Standard Air Tank, grottes et moment ou il faut faire demi-tour.',
  },
  'pt-BR': {
    title: 'Subnautica 2 Oxygen and Depth Guide',
    description:
      'Guia de oxigenio e profundidade com Air Bladders, Standard Air Tank, cavernas, retorno seguro e quando parar.',
  },
  'es-419': {
    title: 'Subnautica 2 Oxygen and Depth Guide',
    description:
      'Guia de oxigeno y profundidad: Air Bladders, Standard Air Tank, cuevas, regreso seguro y cuando volver.',
  },
  ko: {
    title: 'Subnautica 2 Oxygen and Depth Guide',
    description:
      '산소와 깊이 가이드: Air Bladder, Standard Air Tank, cave return, deep route checklist.',
  },
  ru: {
    title: 'Subnautica 2 Oxygen and Depth Guide',
    description:
      'Гайд по кислороду и глубине: Air Bladders, Standard Air Tank, пещеры, возврат и чеклист перед глубоким маршрутом.',
  },
} satisfies Record<
  string,
  {
    title: string;
    description: string;
  }
>;

function getCopy(locale: Locale): OxygenDepthCopy {
  if (oxygenDepthCopy[locale]) {
    return oxygenDepthCopy[locale];
  }

  const fallback =
    fallbackLocaleAliases[locale as keyof typeof fallbackLocaleAliases] ??
    fallbackLocaleAliases.de;

  return {
    ...oxygenDepthCopy.en,
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
    pathname: Routes.Subnautica2OxygenDepth,
  });
}

export default async function OxygenDepthPage({
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
      icon={GaugeIcon}
      locale={locale}
      pathname={Routes.Subnautica2OxygenDepth}
      sources={sharedSources}
    />
  );
}
