import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { CircleIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type RubberCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-26';

const sharedSources = [
  {
    href: 'https://subnautica2-wiki.com/en/items/rubber',
    label: 'Subnautica 2 Wiki Rubber item page',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-lucifer-rotsac-location/',
    label: 'PC Gamer Lucifer Rotsac location guide',
  },
  {
    href: 'https://www.dexerto.com/wikis/subnautica-2/resources/rubber/',
    label: 'Dexerto Rubber resource page',
  },
];

const rubberCopy: Record<string, RubberCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Rubber Recipe Guide - Lucifer Rotsac, Air Bladder, Basic Fins, and Air Tank',
      description:
        'A practical Subnautica 2 Rubber guide covering Lucifer Rotsac x2, Fabricator crafting, Air Bladder, Basic Fins, Standard Air Tank, early oxygen planning, and storage timing.',
    },
    eyebrow: 'Subnautica 2 crafting route',
    title: 'Subnautica 2 Rubber Recipe Guide',
    description:
      'Rubber is one of those tiny early materials that quietly decides whether your first swim feels smooth or miserable. Make the first batch for movement and oxygen, then stop before the locker fills with half-finished plans.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Subnautica 2 Wiki lists Rubber as a Fabricator basic material made from Lucifer Rotsac x2. The same page describes Rubber as a flexible, tough insulator derived from biopolymers and lists current uses in Air Bladder, Basic Fins, Standard Air Tank, and Stool. PC Gamer has current Lucifer Rotsac location coverage, while Dexerto keeps Rubber in its Subnautica 2 resource index. For early routing, treat Rubber as an oxygen-and-mobility material first, not a decorative craft.',
    contentsLabel: 'Contents',
    routeTitle: 'Rubber route plan',
    routeSteps: [
      {
        title: 'Unlock the chain by finding Lucifer Rotsac',
        body: 'The current wiki recipe uses Lucifer Rotsac x2 for one Rubber. Once you find the plant material, check the Fabricator before assuming old Subnautica recipes still apply.',
      },
      {
        title: 'Craft only the first movement set',
        body: 'Rubber feeds Basic Fins and Air Bladder. Make the mobility pieces first so every later resource trip is shorter and less panicked.',
      },
      {
        title: 'Hold one piece for Standard Air Tank',
        body: 'The wiki use list includes Standard Air Tank. Do not spend every early Rubber on side crafts before the first oxygen upgrade is covered.',
      },
      {
        title: 'Store Lucifer Rotsac separately',
        body: 'Raw plant material and finished Rubber serve different decisions. A small plant box beside the Fabricator keeps the next batch obvious.',
      },
      {
        title: 'Recheck recipes after patches',
        body: 'Early Access crafting data can shift. Rubber is simple enough that the safest habit is to confirm the Fabricator input and output in your current save.',
      },
    ],
    tableTitle: 'Rubber checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      ['Recipe', 'Subnautica 2 Wiki lists Lucifer Rotsac x2.'],
      ['Station', 'Craft Rubber at the Fabricator.'],
      ['First use', 'Basic Fins and Air Bladder improve the first loops.'],
      ['Oxygen use', 'Standard Air Tank currently uses Rubber.'],
      ['Storage', 'Keep raw Lucifer Rotsac separate from finished Rubber.'],
    ],
    visualTitle: 'Rubber priority',
    visualItems: [
      {
        label: 'Move',
        value: 'Fins',
        note: 'Shorter swims and faster errands.',
      },
      {
        label: 'Breathe',
        value: 'Tank',
        note: 'Protect the first oxygen upgrade.',
      },
      {
        label: 'Spare',
        value: '1-2',
        note: 'Air Bladder or later checks.',
      },
    ],
    cautionTitle: 'Do not overcraft early Rubber',
    cautionBody:
      'The recipe is small, which makes it easy to click too many times. Early on, every Lucifer Rotsac you overprocess is one less clean answer when the Air Tank or fins recipe asks for Rubber.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you make Rubber in Subnautica 2?',
        body: 'Subnautica 2 Wiki lists Rubber as a Fabricator recipe using Lucifer Rotsac x2.',
      },
      {
        title: 'What is Rubber used for first?',
        body: 'The current use list includes Air Bladder, Basic Fins, Standard Air Tank, and Stool. Prioritize fins, oxygen, and safety tools before furniture.',
      },
      {
        title: 'Where do you get the ingredient for Rubber?',
        body: 'Rubber is made from Lucifer Rotsac. PC Gamer maintains a current Lucifer Rotsac location guide, and you should confirm the route against your patch version.',
      },
      {
        title: 'How much Rubber should you keep?',
        body: 'Keep enough for Basic Fins, Standard Air Tank, and one backup craft. After that, store raw Lucifer Rotsac until you know the next recipe.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2BasicFins, label: 'Basic Fins Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2 Guide' },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker Guide' },
      { href: Routes.Subnautica2FiberMesh, label: 'Fiber Mesh Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
      { href: Routes.Subnautica2Beginner, label: 'Beginner Route' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 26, 2026 against Subnautica 2 Wiki, PC Gamer, and Dexerto. Early Access ingredient locations, recipe inputs, and use lists can change, so recheck the Fabricator and PDA after patches.',
    cardKicker: 'Crafting card',
    cardBody:
      'Lucifer Rotsac x2, Fabricator craft, Basic Fins, Air Bladder, Standard Air Tank, oxygen routing, and early material storage.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Crafting guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Rubber 配方指南 - Lucifer Rotsac、Air Bladder、Basic Fins 和 Air Tank',
      description:
        'Subnautica 2 中文 Rubber 指南：整理 Lucifer Rotsac x2、Fabricator 制作、Air Bladder、Basic Fins、Standard Air Tank、前期氧气路线和收纳节奏。',
    },
    eyebrow: 'Subnautica 2 制作路线',
    title: 'Subnautica 2 Rubber 配方指南',
    description:
      'Rubber 是那种很小但很影响手感的前期材料。第一批先给移动和氧气，后面再慢慢补，别一上来就把箱子塞满半成品。',
    quickLabel: '快速结论',
    quickAnswer:
      'Subnautica 2 Wiki 把 Rubber 列为 Fabricator 基础材料，配方是 Lucifer Rotsac x2。该页面还把 Rubber 描述为来自生物聚合物的柔韧绝缘材料，并列出当前用途：Air Bladder、Basic Fins、Standard Air Tank 和 Stool。PC Gamer 有当前 Lucifer Rotsac 位置指南，Dexerto 也把 Rubber 放在 Subnautica 2 资源索引中。前期建议把 Rubber 当成氧气和移动材料，而不是装饰材料。',
    contentsLabel: '目录',
    routeTitle: 'Rubber 路线规划',
    routeSteps: [
      {
        title: '先找到 Lucifer Rotsac 打开材料链',
        body: '当前 wiki 配方是 2 个 Lucifer Rotsac 制作 1 个 Rubber。找到植物材料后，先看 Fabricator，不要直接套用旧作记忆。',
      },
      {
        title: '第一批优先做移动道具',
        body: 'Rubber 会进入 Basic Fins 和 Air Bladder。先把移动与保命工具做出来，后面的采集路线会轻松很多。',
      },
      {
        title: '给 Standard Air Tank 留一份',
        body: 'wiki 用途列表里包含 Standard Air Tank。第一轮氧气升级没做完前，不要把 Rubber 全花在旁支制作上。',
      },
      {
        title: 'Lucifer Rotsac 和成品 Rubber 分开放',
        body: '原植物材料和成品 Rubber 对应不同决策。Fabricator 旁边放一个小植物箱，下一批制作会更清楚。',
      },
      {
        title: '补丁后重新看配方',
        body: '抢先体验阶段制作数据可能调整。Rubber 很简单，所以最稳的习惯就是在当前存档里再看一次 Fabricator 输入和输出。',
      },
    ],
    tableTitle: 'Rubber 检查表',
    tableHeaders: ['需要', '确认什么'],
    tableRows: [
      ['配方', 'Subnautica 2 Wiki 列为 Lucifer Rotsac x2。'],
      ['工作台', '在 Fabricator 中制作 Rubber。'],
      ['第一用途', 'Basic Fins 和 Air Bladder 会改善前期循环。'],
      ['氧气用途', 'Standard Air Tank 当前会用到 Rubber。'],
      ['收纳', 'Lucifer Rotsac 原料和成品 Rubber 分开放。'],
    ],
    visualTitle: 'Rubber 优先级',
    visualItems: [
      {
        label: '移动',
        value: 'Fins',
        note: '缩短前期游泳和采集时间。',
      },
      {
        label: '氧气',
        value: 'Tank',
        note: '先保证第一轮氧气升级。',
      },
      {
        label: '备用',
        value: '1-2',
        note: 'Air Bladder 或后续检查。',
      },
    ],
    cautionTitle: '前期不要过量制作 Rubber',
    cautionBody:
      '配方很小，所以很容易连续点太多次。前期每多加工一份 Lucifer Rotsac，Air Tank 或 fins 要 Rubber 时就少一份余地。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Rubber 怎么做？',
        body: 'Subnautica 2 Wiki 列出 Rubber 是 Fabricator 配方，材料为 Lucifer Rotsac x2。',
      },
      {
        title: 'Rubber 前期先做什么？',
        body: '当前用途包括 Air Bladder、Basic Fins、Standard Air Tank 和 Stool。先做 fins、氧气和保命工具，再考虑家具。',
      },
      {
        title: 'Rubber 的材料在哪里找？',
        body: 'Rubber 来自 Lucifer Rotsac。PC Gamer 有当前 Lucifer Rotsac 位置指南，具体路线最好按你的补丁版本重新核对。',
      },
      {
        title: '应该留多少 Rubber？',
        body: '至少覆盖 Basic Fins、Standard Air Tank 和一份备用制作。之后先存 Lucifer Rotsac 原料，等知道下个配方再加工。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2BasicFins, label: 'Basic Fins 指南' },
      { href: Routes.Subnautica2AirTank, label: '气瓶和氧气指南' },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker 指南' },
      { href: Routes.Subnautica2FiberMesh, label: 'Fiber Mesh 指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
      { href: Routes.Subnautica2Beginner, label: '新手路线' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 26 日核对 Subnautica 2 Wiki、PC Gamer 和 Dexerto。抢先体验阶段材料位置、配方输入和用途列表都可能变化；更新后请重新检查 Fabricator 和 PDA。',
    cardKicker: '制作卡',
    cardBody:
      'Lucifer Rotsac x2、Fabricator 制作、Basic Fins、Air Bladder、Standard Air Tank、氧气路线和前期材料收纳。',
    cardTypeLabel: '类型',
    cardTypeValue: '制作指南',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = rubberCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  rubberCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Rubber Recipe Guide',
      description:
        'Guide for Rubber, Lucifer Rotsac x2, Fabricator crafting, Air Bladder, Basic Fins, Standard Air Tank, oxygen routing, and early storage.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = rubberCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2Rubber,
  });
}

export default async function RubberGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = rubberCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={CircleIcon}
      locale={locale}
      pathname={Routes.Subnautica2Rubber}
      sources={sharedSources}
    />
  );
}
