import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { ScaleIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type LawsuitCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-06-04';
const UPDATED_AT = '2026-06-04';

const sharedSources = [
  {
    href: 'https://www.pcgamer.com/gaming-industry/krafton-fires-back-at-unknown-worlds-lawsuit-says-subnautica-2-was-at-risk-of-causing-irreversible-harm-to-the-entire-franchise-like-kerbal-space-program-2/',
    label: 'PC Gamer: Krafton response coverage',
  },
  {
    href: 'https://www.ign.com/articles/judge-slams-subnautica-2-publisher-krafton-in-victory-for-fired-workers-orders-company-reinstate-boss-and-extend-250-million-bonus',
    label: 'IGN: court ruling coverage',
  },
  {
    href: 'https://www.gamespot.com/articles/ousted-subnautica-2-devs-lawsuit-demands-full-250-million-payout-and-creative-control/1100-6533246/',
    label: 'GameSpot: lawsuit filing coverage',
  },
  {
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/',
    label: 'Official Steam Early Access page',
  },
  {
    href: 'https://unknownworlds.com/en/news/subnautica-2-early-access-roadmap',
    label: 'Unknown Worlds Early Access roadmap',
  },
];

const copyByLocale: Record<string, LawsuitCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Lawsuit Response Explained - Krafton, Unknown Worlds, and What Players Should Know',
      description:
        'A source-backed Subnautica 2 lawsuit response explainer covering Krafton, Unknown Worlds, the reported leadership and bonus dispute, Early Access status, and what players should verify.',
    },
    eyebrow: 'Subnautica 2 lawsuit response',
    title: 'Subnautica 2 Lawsuit Response Explained',
    description:
      'This is a fast, careful explainer for players who saw headlines about Krafton, Unknown Worlds, Subnautica 2, leadership changes, bonus claims, and court coverage. It separates the business dispute from what players can actually verify about the game.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'The lawsuit coverage is about the business and leadership dispute around Unknown Worlds and Krafton, not a secret gameplay feature, map leak, or free-download issue. Treat every headline as date-sensitive. Read the newest source, check whether it is describing claims, a company response, or a court order, then use official Steam and Unknown Worlds pages for the current Early Access game status.',
    fieldNotesTitle: 'How to read the headlines',
    fieldNotes: [
      {
        title: 'Claims are not the same as final facts',
        body: 'A complaint, a company response, and a court ruling are different kinds of information. Good coverage should make that clear instead of flattening everything into one dramatic headline.',
      },
      {
        title: 'The player question is narrower',
        body: 'Most players need to know whether the dispute changes Early Access timing, updates, co-op, platform support, or whether they should wait before buying.',
      },
      {
        title: 'Search results can lag behind court news',
        body: 'SEMrush shows huge demand for the response term, but news snippets can age quickly. This page uses a checked-date approach instead of pretending the story is frozen.',
      },
    ],
    routeChecklistTitle: 'Before trusting a summary',
    routeChecklist: [
      'Check the publication date before reading the headline as current.',
      'Separate lawsuit claims from Krafton response wording.',
      'Separate court-order reporting from opinion or forum discussion.',
      'Use official Steam and Unknown Worlds pages for current game status.',
      'Do not use legal headlines as proof of map, release, or platform details.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'What the dispute means for players',
    routeSteps: [
      {
        title: 'Start with what the story is about',
        body: 'The reports focus on a business dispute involving Krafton, Unknown Worlds leadership, compensation claims, creative control, and court proceedings. That is separate from normal guide topics like maps, biomes, resources, or co-op setup.',
      },
      {
        title: 'Read Krafton-response coverage as one side of the record',
        body: 'Response coverage describes how Krafton disputes the allegations and frames the state of the project. It should be read next to filing and court coverage rather than treated as the whole story.',
      },
      {
        title: 'Watch what changes in official game pages',
        body: 'For players, the most practical signals are still official: Steam Early Access wording, Unknown Worlds roadmap posts, hotfix notes, platform listings, and whether current updates keep landing.',
      },
      {
        title: 'Do not turn lawsuit news into fake release dates',
        body: 'A legal update can affect confidence, but it does not automatically confirm a full 1.0 date, PS5 date, map size, or new feature timing. Those need official game sources.',
      },
      {
        title: 'Use a wait-or-play checklist',
        body: 'If the headlines make you unsure, check the current price, Game Pass availability, roadmap, recent hotfixes, and whether your main reason to play is already in Early Access.',
      },
    ],
    tableTitle: 'Common searches and safer answers',
    tableHeaders: ['Search intent', 'Careful answer'],
    tableRows: [
      [
        'krafton subnautica 2 lawsuit response',
        'Read response coverage alongside filing and court-order coverage. It is one part of the dispute, not the entire record.',
      ],
      [
        'subnautica 2 lawsuit',
        'This is a business/legal news topic. Use dated sources and avoid forum-only summaries.',
      ],
      [
        'unknown worlds lawsuit',
        'Check whether the page is about Unknown Worlds leadership, compensation claims, creative control, or a later court update.',
      ],
      [
        'will the lawsuit delay Subnautica 2?',
        'Do not assume delay from a headline. Check official Steam, Unknown Worlds roadmap, and hotfix posts for the current game timeline.',
      ],
      [
        'should I buy Subnautica 2 now?',
        'Treat this as an Early Access decision: read the roadmap, price page, platform page, and recent hotfixes before buying.',
      ],
    ],
    visualTitle: 'Briefing card',
    visualItems: [
      {
        label: 'Topic',
        value: 'Legal',
        note: 'Business dispute coverage, not a gameplay guide leak.',
      },
      {
        label: 'Player check',
        value: 'Status',
        note: 'Steam, roadmap, and hotfixes matter most for play decisions.',
      },
      {
        label: 'Risk',
        value: 'Rumors',
        note: 'Do not convert forum summaries into release facts.',
      },
    ],
    cautionTitle: 'This is not legal advice',
    cautionBody:
      'Abyss Guides is summarizing public reporting for players. We are not giving legal advice, predicting the final outcome, or claiming access to private filings. If a detail matters, open the cited reporting and check the date.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'What is the Subnautica 2 lawsuit about?',
        body: 'Public reporting describes a dispute involving Krafton, Unknown Worlds leadership, compensation claims, creative control, and related court proceedings.',
      },
      {
        title: 'What is Krafton responding to?',
        body: 'Coverage of Krafton response pieces describes the company disputing allegations and presenting its view of project risk and leadership decisions. Read it with filing and court coverage.',
      },
      {
        title: 'Does this mean Subnautica 2 is canceled?',
        body: 'Do not infer cancellation from lawsuit headlines. Check the official Steam page, Unknown Worlds posts, and current hotfix/update activity for game status.',
      },
      {
        title: 'Should this affect buying Early Access?',
        body: 'It can affect confidence, but the practical buying decision should still come from the current build, roadmap, price, platform support, co-op needs, and your tolerance for Early Access.',
      },
      {
        title: 'Why make a guide page for news?',
        body: 'The keyword has high search demand, and players need a low-drama page that points them toward dated sources instead of rumor loops.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2ReleaseDate, label: 'Release Date Status' },
      {
        href: Routes.Subnautica2EarlyAccessWorthIt,
        label: 'Is Early Access Worth It?',
      },
      { href: Routes.Subnautica2Updates, label: 'Roadmap and Updates' },
      { href: Routes.Subnautica2Price, label: 'Price Guide' },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      { href: Routes.Subnautica2FreeDownload, label: 'Safe Download Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 4, 2026 against PC Gamer response coverage, IGN court coverage, GameSpot lawsuit coverage, the official Steam page, and the Unknown Worlds Early Access roadmap. Page art is original Abyss Guides artwork; the video is the official Subnautica embed.',
    cardKicker: 'News briefing',
    cardBody:
      'A dated, source-led explainer for players searching Krafton response, Unknown Worlds lawsuit, and what it means for Early Access.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Explainer',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Scope',
    cardStatusValue: 'Public reporting',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 诉讼回应解释：Krafton、Unknown Worlds 和玩家该看什么',
      description:
        'Subnautica 2 诉讼回应中文解释页，整理 Krafton、Unknown Worlds、领导层与奖金争议、抢先体验状态，以及玩家应该核对的信息来源。',
    },
    eyebrow: 'Subnautica 2 诉讼回应',
    title: 'Subnautica 2 诉讼回应解释',
    description:
      '这页给看到 Krafton、Unknown Worlds、Subnautica 2 诉讼、奖金争议和法院报道标题的玩家一个低噪音解释。重点是分清商业争议和玩家真正能核对的游戏状态。',
    quickLabel: '快速结论',
    quickAnswer:
      '目前这些报道主要围绕 Unknown Worlds 与 Krafton 的商业和领导层争议，并不是地图泄露、隐藏玩法或免费下载信息。看任何标题前，先确认日期，再分清它是在写诉讼主张、公司回应，还是法院进展。游戏本身的当前状态仍应以 Steam 官方页面和 Unknown Worlds 更新为准。',
    fieldNotesTitle: '怎么看这些标题',
    fieldNotes: [
      {
        title: '主张、回应、裁定不是一回事',
        body: '诉讼文件、公司回应、法院报道属于不同类型的信息。靠谱的文章应该把它们分开，而不是写成一个戏剧化标题。',
      },
      {
        title: '玩家真正关心的问题更窄',
        body: '大多数玩家需要知道的是：抢先体验、更新节奏、联机、平台支持和是否值得现在购买会不会受影响。',
      },
      {
        title: '搜索结果可能滞后',
        body: 'SEMrush 显示这个词需求很高，但新闻摘要很容易过时。所以本页采用核对日期，而不是把故事写死。',
      },
    ],
    routeChecklistTitle: '信任总结前先检查',
    routeChecklist: [
      '先看发布日期。',
      '把诉讼主张和 Krafton 回应分开。',
      '把法院进展、媒体评论和论坛讨论分开。',
      '游戏当前状态看 Steam 和 Unknown Worlds 官方更新。',
      '不要把法律标题当成发售日、地图或平台信息的证据。',
    ],
    contentsLabel: '目录',
    routeTitle: '这件事对玩家意味着什么',
    routeSteps: [
      {
        title: '先看它到底是什么事',
        body: '公开报道集中在 Krafton、Unknown Worlds 管理层、奖金主张、创意控制和法院程序。这和地图、生物群系、资源、联机设置这类普通攻略不是一回事。',
      },
      {
        title: 'Krafton 回应只是记录的一部分',
        body: '公司回应报道描述的是 Krafton 如何反驳相关主张、如何解释项目风险和管理决定。它应该和诉讼文件、法院报道一起看。',
      },
      {
        title: '真正影响玩家的是官方游戏页面',
        body: '对玩家来说，最实用的信号仍然是 Steam 抢先体验说明、Unknown Worlds 路线图、Hotfix、平台商店页面和更新是否持续发布。',
      },
      {
        title: '不要把诉讼新闻写成发售日',
        body: '法律进展可能影响信心，但不会自动确认 1.0、PS5、地图大小或新功能时间。这些需要官方游戏来源确认。',
      },
      {
        title: '用是否值得玩来判断',
        body: '如果标题让你犹豫，先看价格、Game Pass、路线图、最近 Hotfix，以及你最想玩的内容是否已经在抢先体验版本里。',
      },
    ],
    tableTitle: '常见搜索和稳妥回答',
    tableHeaders: ['搜索意图', '稳妥回答'],
    tableRows: [
      [
        'krafton subnautica 2 lawsuit response',
        '把 Krafton 回应、诉讼文件和法院报道放在一起看。回应不是整件事的全部。',
      ],
      [
        'subnautica 2 lawsuit',
        '这是商业/法律新闻话题，应使用带日期的来源，不要只看论坛总结。',
      ],
      [
        'unknown worlds lawsuit',
        '先确认文章写的是管理层、奖金、创意控制，还是后续法院进展。',
      ],
      [
        'will the lawsuit delay Subnautica 2',
        '不要只凭标题推断延期。游戏时间线仍看 Steam、Unknown Worlds 路线图和 Hotfix。',
      ],
      [
        'should I buy Subnautica 2 now',
        '把它当成抢先体验购买判断：看路线图、价格、平台、补丁和自己的容忍度。',
      ],
    ],
    visualTitle: '简报卡',
    visualItems: [
      {
        label: '话题',
        value: '法律',
        note: '商业争议报道，不是玩法泄露。',
      },
      {
        label: '玩家检查',
        value: '状态',
        note: 'Steam、路线图和 Hotfix 最重要。',
      },
      {
        label: '风险',
        value: '传闻',
        note: '不要把论坛总结写成发售事实。',
      },
    ],
    cautionTitle: '这不是法律建议',
    cautionBody:
      'Abyss Guides 只是为玩家整理公开报道。我们不提供法律建议，不预测最终结果，也不声称掌握未公开文件。重要细节请打开来源并检查日期。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 诉讼主要是什么？',
        body: '公开报道显示，它主要涉及 Krafton、Unknown Worlds 管理层、奖金主张、创意控制和相关法院程序。',
      },
      {
        title: 'Krafton 在回应什么？',
        body: '相关报道描述了 Krafton 如何反驳部分主张，并解释其对项目风险和管理决定的看法。应结合诉讼和法院报道一起看。',
      },
      {
        title: '这代表 Subnautica 2 取消了吗？',
        body: '不要从诉讼标题推断取消。游戏状态要看 Steam 官方页、Unknown Worlds 更新和当前 Hotfix 活动。',
      },
      {
        title: '这会影响我买抢先体验吗？',
        body: '它可能影响信心，但购买判断仍应看当前版本、路线图、价格、平台支持、联机需求和你对抢先体验的接受度。',
      },
      {
        title: '为什么攻略站要做新闻解释页？',
        body: '这个关键词搜索需求很高，玩家需要一个低情绪、带来源日期的解释页，而不是继续掉进传闻循环。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2ReleaseDate, label: '发售时间状态' },
      {
        href: Routes.Subnautica2EarlyAccessWorthIt,
        label: '抢先体验值不值得玩',
      },
      { href: Routes.Subnautica2Updates, label: '路线图和更新' },
      { href: Routes.Subnautica2Price, label: '价格指南' },
      { href: Routes.Subnautica2XboxGamePass, label: 'Xbox Game Pass' },
      { href: Routes.Subnautica2FreeDownload, label: '安全下载说明' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 4 日核对 PC Gamer 回应报道、IGN 法院报道、GameSpot 诉讼报道、Steam 官方页面和 Unknown Worlds 抢先体验路线图。页面图片为 Abyss Guides 原创图；视频为 Subnautica 官方嵌入。',
    cardKicker: '新闻简报',
    cardBody:
      '面向 Krafton response、Unknown Worlds lawsuit 和 Early Access 影响等搜索的带日期解释页。',
    cardTypeLabel: '类型',
    cardTypeValue: '解释页',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '范围',
    cardStatusValue: '公开报道',
  },
};

function getCopy(locale: Locale): LawsuitCopy {
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
    pathname: Routes.Subnautica2LawsuitResponse,
  });
}

export default async function Subnautica2LawsuitResponsePage({
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
      icon={ScaleIcon}
      locale={locale}
      pathname={Routes.Subnautica2LawsuitResponse}
      sources={sharedSources}
    />
  );
}
