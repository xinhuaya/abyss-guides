import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { WavesIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type WakemakerCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-25';
const UPDATED_AT = '2026-05-25';

const sharedSources = [
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-wakemaker-scan-locations/',
    label: 'PC Gamer Wakemaker scan locations',
  },
  {
    href: 'https://subnautica2hub.com/blueprints/wakemaker',
    label: 'Subnautica2Hub Wakemaker blueprint',
  },
  {
    href: 'https://subnautica.fandom.com/wiki/Wakemaker',
    label: 'Subnautica Wiki Wakemaker notes',
  },
];

const wakemakerCopy: Record<string, WakemakerCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Wakemaker Guide - Fragments, Recipe, and Why It Matters',
      description:
        'A practical Subnautica 2 Wakemaker guide covering fragment scans, Life Pod 1 and Lily Pads routes, Titanium, Copper Wire, Basic Battery, Fiber Mesh, and early mobility planning.',
    },
    eyebrow: 'Subnautica 2 mobility tool',
    title: 'Subnautica 2 Wakemaker Guide',
    description:
      'The Wakemaker is the first movement upgrade that changes how the early ocean feels. It is not just speed. It is safer oxygen margins, faster loot loops, and less time staring at the surface line.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current PC Gamer reporting says Wakemaker fragments can be scanned around the safe shallows near Life Pod 1, with additional fragments in the Lily Pads. Subnautica2Hub lists the recipe as Titanium x1, Copper Wire x1, Basic Battery x1, and Fiber Mesh x1, with four scans required to unlock it.',
    contentsLabel: 'Contents',
    routeTitle: 'Wakemaker unlock route',
    routeSteps: [
      {
        title: 'Start close to Life Pod 1',
        body: 'PC Gamer calls out the safe shallows near Life Pod 1 as the first place to check. Sweep wreck edges, small debris, and obvious fragment silhouettes before making a longer trip.',
      },
      {
        title: 'Scan until the blueprint completes',
        body: 'Subnautica2Hub currently lists four scans for the Wakemaker. Do not leave after one fragment unless the PDA shows the recipe is finished.',
      },
      {
        title: 'Use Lily Pads as the backup route',
        body: 'If the shallows are dry in your save, PC Gamer points to more fragments in the Lily Pads. Bring enough oxygen and a clear return path before chasing the deeper set.',
      },
      {
        title: 'Build the ingredient pile first',
        body: 'The listed recipe is small, but it touches several early chains: Titanium, Copper Wire, Basic Battery, and Fiber Mesh. Missing Fiber Mesh is the usual annoyance because it sends you back into plant gathering.',
      },
      {
        title: 'Craft it before repeated errands',
        body: 'The Wakemaker pays for itself when you are shuttling between scan targets, resource runs, and oxygen-safe routes. If you are about to do several trips, make it now.',
      },
    ],
    tableTitle: 'Wakemaker checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      ['Fragments', 'PC Gamer reports Life Pod 1 shallows plus Lily Pads.'],
      ['Unlock count', 'Subnautica2Hub currently lists four scans.'],
      ['Titanium x1', 'Keep one spare piece out of base-building plans.'],
      ['Copper Wire x1', 'Requires Copper x2 in the usual electronics chain.'],
      ['Basic Battery x1', 'Do not spend the only battery before crafting.'],
      [
        'Fiber Mesh x1',
        'Plan the plant run before returning to the Fabricator.',
      ],
    ],
    visualTitle: 'Early swim route',
    visualItems: [
      {
        label: 'Scan',
        value: '4 fragments',
        note: 'Start around Life Pod 1, then check Lily Pads if needed.',
      },
      {
        label: 'Craft',
        value: 'Fabricator',
        note: 'Titanium, Copper Wire, Basic Battery, Fiber Mesh.',
      },
      {
        label: 'Use',
        value: 'Safer loops',
        note: 'Faster returns make oxygen routes less tight.',
      },
    ],
    cautionTitle: 'The blueprint is easy to half-finish',
    cautionBody:
      'One fragment feels like progress, but it does not help until the full scan count is done. Keep scanning the area before you swim away, especially if the last fragment is tucked into nearby debris.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Where do you find Wakemaker fragments in Subnautica 2?',
        body: 'PC Gamer reports fragments near the safe shallows around Life Pod 1, with more fragments in the Lily Pads if you still need scans.',
      },
      {
        title: 'How many Wakemaker fragments do you need?',
        body: 'Subnautica2Hub currently lists four scans for the Wakemaker blueprint.',
      },
      {
        title: 'What is the Wakemaker recipe?',
        body: 'Current blueprint data lists Titanium x1, Copper Wire x1, Basic Battery x1, and Fiber Mesh x1.',
      },
      {
        title: 'Should you craft the Wakemaker early?',
        body: 'Yes, if you are doing repeated scan or resource loops. Better movement gives you more room before oxygen gets uncomfortable.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery Guide' },
      { href: Routes.Subnautica2CopperWire, label: 'Copper Wire Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank Guide' },
      { href: Routes.Subnautica2OxygenDepth, label: 'Oxygen and Depth Guide' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 25, 2026 against PC Gamer and Subnautica2Hub. Early Access fragment placement and scan counts can change, so recheck this route after major patches.',
    cardKicker: 'Mobility card',
    cardBody:
      'Fragment route, four-scan unlock note, Fabricator recipe, Fiber Mesh reminder, and early oxygen-route timing.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Tool guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Wakemaker 指南 - 碎片、配方和前期价值',
      description:
        'Subnautica 2 中文 Wakemaker 指南：整理 Life Pod 1 与 Lily Pads 碎片路线、Titanium、Copper Wire、Basic Battery、Fiber Mesh 和前期移动规划。',
    },
    eyebrow: 'Subnautica 2 移动工具',
    title: 'Subnautica 2 Wakemaker 指南',
    description:
      'Wakemaker 是前期第一个真正改变游泳手感的工具。它不只是快一点，而是让氧气余量更舒服，跑材料和扫碎片时少一点压迫感。',
    quickLabel: '快速结论',
    quickAnswer:
      'PC Gamer 当前报道说，Wakemaker 碎片可以先在 Life Pod 1 附近的安全浅滩找，Lily Pads 也有更多碎片。Subnautica2Hub 当前配方写的是 Titanium x1、Copper Wire x1、Basic Battery x1、Fiber Mesh x1，并列出需要 4 次扫描解锁。',
    contentsLabel: '目录',
    routeTitle: 'Wakemaker 解锁路线',
    routeSteps: [
      {
        title: '先从 Life Pod 1 附近开始',
        body: 'PC Gamer 提到安全浅滩是最早该检查的区域。先沿着残骸边缘、小碎片和明显的扫描物扫一圈，再考虑长距离外出。',
      },
      {
        title: '扫到蓝图完成再走',
        body: 'Subnautica2Hub 当前写的是需要 4 次扫描。不要扫到一个碎片就离开，先看 PDA 里蓝图是否真的完成。',
      },
      {
        title: 'Lily Pads 当备用路线',
        body: '如果浅滩没有扫够，PC Gamer 还提到 Lily Pads 有更多碎片。去之前先准备氧气和返回路线，别一边缺氧一边硬找。',
      },
      {
        title: '先备好材料堆',
        body: '配方看起来不大，但会碰到 Titanium、Copper Wire、Basic Battery 和 Fiber Mesh 几条前期链路。最容易忘的是 Fiber Mesh，因为它会让你再跑一趟植物材料。',
      },
      {
        title: '重复跑图前先做出来',
        body: '如果接下来要连续扫碎片、跑资源或走氧气路线，Wakemaker 很快就能回本。先做它，后面的路会顺很多。',
      },
    ],
    tableTitle: 'Wakemaker 检查表',
    tableHeaders: ['需求', '确认什么'],
    tableRows: [
      ['碎片', 'PC Gamer 提到 Life Pod 1 浅滩和 Lily Pads。'],
      ['扫描次数', 'Subnautica2Hub 当前列出 4 次扫描。'],
      ['Titanium x1', '从建基地材料里先留一块。'],
      ['Copper Wire x1', '通常需要 Copper x2。'],
      ['Basic Battery x1', '不要把唯一电池提前花掉。'],
      ['Fiber Mesh x1', '回 Fabricator 前先规划植物材料路线。'],
    ],
    visualTitle: '前期游泳路线',
    visualItems: [
      {
        label: '扫描',
        value: '4 碎片',
        note: '先查 Life Pod 1，缺碎片再去 Lily Pads。',
      },
      {
        label: '制作',
        value: 'Fabricator',
        note: 'Titanium、Copper Wire、Basic Battery、Fiber Mesh。',
      },
      {
        label: '使用',
        value: '安全往返',
        note: '移动更快，氧气路线就没那么紧。',
      },
    ],
    cautionTitle: '别只扫到一半就离开',
    cautionBody:
      '一个碎片只是进度，不是成品。离开前多扫一下附近残骸，最后一个碎片经常就藏在旁边。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Wakemaker 碎片在哪？',
        body: 'PC Gamer 报道说可以先找 Life Pod 1 附近的安全浅滩，如果还缺扫描，再去 Lily Pads 找更多碎片。',
      },
      {
        title: 'Wakemaker 需要几个碎片？',
        body: 'Subnautica2Hub 当前列出 Wakemaker 蓝图需要 4 次扫描。',
      },
      {
        title: 'Wakemaker 配方是什么？',
        body: '当前蓝图资料写的是 Titanium x1、Copper Wire x1、Basic Battery x1、Fiber Mesh x1。',
      },
      {
        title: 'Wakemaker 值得前期做吗？',
        body: '值得，尤其是你要反复扫碎片或跑材料时。移动更快，氧气压力会小很多。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery 指南' },
      { href: Routes.Subnautica2CopperWire, label: 'Copper Wire 指南' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank 指南' },
      { href: Routes.Subnautica2OxygenDepth, label: '氧气与深度指南' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner 指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 25 日核对 PC Gamer 与 Subnautica2Hub。抢先体验阶段的碎片位置和扫描次数可能随补丁变化，重要更新后需要重新核对。',
    cardKicker: '移动工具卡',
    cardBody:
      '碎片路线、4 次扫描解锁、Fabricator 配方、Fiber Mesh 提醒和前期氧气路线时机。',
    cardTypeLabel: '类型',
    cardTypeValue: '工具指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: 'Early Access',
  },
};

const fallbackCopy = wakemakerCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  wakemakerCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Wakemaker Guide',
      description:
        'Guide for Wakemaker fragments, Life Pod 1 route, Lily Pads backup route, Titanium, Copper Wire, Basic Battery, Fiber Mesh, and early mobility planning.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = wakemakerCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2Wakemaker,
  });
}

export default async function WakemakerGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = wakemakerCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={WavesIcon}
      locale={locale}
      pathname={Routes.Subnautica2Wakemaker}
      sources={sharedSources}
    />
  );
}
