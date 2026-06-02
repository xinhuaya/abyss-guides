import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { AnchorIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type TadpoleParkingCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-06-02';
const UPDATED_AT = '2026-06-02';

const sharedSources = [
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
    href: 'https://www.youtube.com/watch?v=6t2nDHldoSk',
    label: 'Official Subnautica 2 gameplay trailer',
  },
];

const copyByLocale: Record<string, TadpoleParkingCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Tadpole Parking After Hotfix 3 - Hammerhead Safety Notes',
      description:
        'How to park the Tadpole after Subnautica 2 Hotfix 3, including Hammerhead behavior, empty Tadpoles, flares, base approach lanes, and what still is not safe.',
    },
    eyebrow: 'Subnautica 2 Tadpole parking',
    title: 'Tadpole Parking After Hotfix 3',
    description:
      'Hotfix 3 makes empty Tadpoles safer around Hammerheads, but not magically safe. Use this page when you want to leave the vehicle somewhere and not turn the return trip into a mess.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'After Hotfix 3, Hammerheads no longer attack unpiloted Tadpoles. That is the big parking change. The official note still says Hammerheads can take an interest in Tadpoles, and Hotfix 3 also fixes cases where Hammerheads were not attracted to Flares. Park the Tadpole near a landmark, leave a clean swim path to the hatch, avoid creature-heavy approach lanes, and do not treat an empty vehicle as invisible.',
    fieldNotesTitle: 'Field notes before you leave the hatch',
    fieldNotes: [
      {
        title: 'Empty is safer than before',
        body: 'The useful part of Hotfix 3 is narrow: Hammerheads should not attack an unpiloted Tadpole. That helps when you step out to scan, gather, or build.',
      },
      {
        title: 'Interest is not the same as safety',
        body: 'The patch note leaves room for Hammerheads to notice Tadpoles. If the area is already bad, the smarter move is still to park farther out and swim the last stretch.',
      },
      {
        title: 'Flares matter again',
        body: 'Hotfix 3 fixes Hammerheads occasionally not being attracted to Flares. Keep that in mind before copying an old workaround that treated Flares as unreliable.',
      },
    ],
    routeChecklistTitle: 'Parking checklist',
    routeChecklist: [
      'Park by a landmark you can find without panic-swimming.',
      'Keep the hatch side facing your return path.',
      'Do not block the Tadpole with coral, base pieces, or terrain lips.',
      'Use Flares as a tool, not as a guarantee.',
      'Move the Tadpole if Hammerheads keep passing through the approach lane.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'A safer Tadpole parking routine',
    routeSteps: [
      {
        title: 'Stop before the dangerous pocket',
        body: 'If the route narrows or a Hammerhead patrol crosses it, stop early. A short swim is usually cheaper than dragging the vehicle into a bad pocket.',
      },
      {
        title: 'Face the hatch toward home',
        body: 'Turn the Tadpole so the hatch faces the line you expect to use on the way back. It sounds small, but it saves seconds when oxygen or nerves are low.',
      },
      {
        title: 'Leave space under and around the vehicle',
        body: 'Do not wedge the Tadpole into a pretty corner. You want room to enter, reverse, and leave without tapping terrain or base pieces.',
      },
      {
        title: 'Use Flares for attention control',
        body: 'Because Hotfix 3 fixes Hammerhead attraction to Flares, update old advice that dismissed them. A Flare can buy space, but it should not replace a clean parking spot.',
      },
      {
        title: 'Recheck the lane after multiplayer rejoin',
        body: 'Hotfix 3 also fixes some client rejoin position rollback. In co-op, confirm where everyone and the Tadpole actually are before assuming the old parking spot is still clear.',
      },
    ],
    tableTitle: 'Parking risk table',
    tableHeaders: ['Situation', 'Safer call'],
    tableRows: [
      [
        'Empty Tadpole near Hammerhead',
        'Safer than before Hotfix 3, but still worth moving if Hammerheads patrol the lane.',
      ],
      [
        'Tadpole in a tight coral pocket',
        'Move it. The patch does not fix bad geometry or awkward hatch access.',
      ],
      [
        'Flares feel inconsistent in older guides',
        'Retest after Hotfix 3 because Hammerhead attraction to Flares was patched.',
      ],
      [
        'Base entrance near Tadpole route',
        'Keep the vehicle approach lane away from repeated creature traffic.',
      ],
      [
        'Co-op parking',
        'Call out the vehicle position before players split up or rejoin.',
      ],
    ],
    visualTitle: 'Tadpole parking card',
    visualItems: [
      {
        label: 'Patch',
        value: 'Hotfix 3',
        note: 'Hammerheads no longer attack unpiloted Tadpoles.',
      },
      {
        label: 'Still risky',
        value: 'Interest',
        note: 'Hammerheads can still take interest in Tadpoles.',
      },
      {
        label: 'Tool',
        value: 'Flares',
        note: 'Attraction behavior was fixed in Hotfix 3.',
      },
    ],
    cautionTitle: 'Do not park like the vehicle is invisible',
    cautionBody:
      'This patch makes one behavior less punishing. It does not turn the Tadpole into a safe locker, a creature shield, or a permanent beacon. Park for the return route, not just the screenshot.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Do Hammerheads attack empty Tadpoles after Hotfix 3?',
        body: 'The official Hotfix 3 note says Hammerheads no longer attack unpiloted Tadpoles.',
      },
      {
        title: 'Can Hammerheads still notice the Tadpole?',
        body: 'Yes. The same note says Hammerheads can still take an interest in Tadpoles, so parking in creature traffic is still a bad habit.',
      },
      {
        title: 'Should I still use Flares?',
        body: 'Yes, but carefully. Hotfix 3 fixes Hammerheads occasionally not being attracted to Flares, so they are worth retesting after the patch.',
      },
      {
        title: 'Does this change Tadpole Dock placement?',
        body: 'Indirectly. If Hammerhead traffic crosses the approach lane, put the Dock and vehicle route somewhere calmer even if the base view is worse.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 Changes' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Guide' },
      { href: Routes.Subnautica2Vehicles, label: 'Vehicles Guide' },
      { href: Routes.Subnautica2TadpoleDock, label: 'Tadpole Dock' },
      {
        href: Routes.Subnautica2CreaturesLeviathans,
        label: 'Creatures Guide',
      },
      {
        href: Routes.Subnautica2BaseLocationTierList,
        label: 'Base Location Tier List',
      },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 2, 2026 against Unknown Worlds Hotfix 3, Hotfix 2, the Early Access roadmap, and the official gameplay trailer. The parking routine is practical guidance built from those patch notes, not a claim of exact creature coordinates.',
    cardKicker: 'Vehicle field card',
    cardBody:
      'A Hotfix 3 parking guide for empty Tadpoles, Hammerhead interest, Flares, hatch direction, base approach lanes, and co-op rejoin checks.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Vehicle safety',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Patch',
    cardStatusValue: 'Hotfix 3',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Hotfix 3 后 Tadpole 怎么停 - Hammerhead 安全笔记',
      description:
        'Subnautica 2 Hotfix 3 后 Tadpole 停放指南：Hammerhead 行为、无人 Tadpole、Flare、基地靠近路线和仍然不安全的情况。',
    },
    eyebrow: 'Subnautica 2 Tadpole 停放',
    title: 'Hotfix 3 后 Tadpole 怎么停',
    description:
      'Hotfix 3 让无人 Tadpole 面对 Hammerhead 更安全，但不是绝对安全。下车扫描、采集或建造前，先把停放位置想清楚。',
    quickLabel: '快速结论',
    quickAnswer:
      'Hotfix 3 后，Hammerhead 不再攻击无人驾驶的 Tadpole，这是这次和停放最相关的变化。但官方也写明 Hammerhead 仍可能对 Tadpole 感兴趣，并且 Hotfix 3 修复了 Hammerhead 偶尔不被 Flare 吸引的问题。实际停放时，把 Tadpole 放在容易认路的地标旁，舱门朝回程方向，避开怪物反复经过的路线，不要把空载具当成隐身保险箱。',
    fieldNotesTitle: '下车前先记这几件事',
    fieldNotes: [
      {
        title: '空载具比以前安全',
        body: 'Hotfix 3 最有用的点很具体：Hammerhead 不再攻击无人驾驶的 Tadpole。你下车扫描、采集、修基地时会轻松一点。',
      },
      {
        title: '感兴趣不等于安全',
        body: '官方仍然说 Hammerhead 可能对 Tadpole 感兴趣。如果附近本来就危险，最好把车停远一点，最后一小段自己游过去。',
      },
      {
        title: 'Flare 需要重新测试',
        body: 'Hotfix 3 修复了 Hammerhead 偶尔不被 Flare 吸引的问题。旧攻略如果说 Flare 完全不靠谱，要按新补丁重新看。',
      },
    ],
    routeChecklistTitle: '停放检查清单',
    routeChecklist: [
      '停在你紧张时也能认出来的地标旁。',
      '让舱门朝向回程路线。',
      '不要把 Tadpole 卡在珊瑚、基地组件或地形边缘。',
      'Flare 可以用，但不要当万能保险。',
      '如果 Hammerhead 总从同一条路经过，就换停放点。',
    ],
    contentsLabel: '目录',
    routeTitle: '更稳的 Tadpole 停放流程',
    routeSteps: [
      {
        title: '在危险口袋前停下',
        body: '如果路线变窄，或者 Hammerhead 巡逻线穿过去，就提前停车。多游一小段通常比把载具开进麻烦区更划算。',
      },
      {
        title: '舱门朝向回家方向',
        body: '把 Tadpole 转到舱门面对回程线。氧气低或心态乱的时候，这几秒很值钱。',
      },
      {
        title: '给车身下面和周围留空间',
        body: '不要为了好看把 Tadpole 塞进角落。你需要顺利进出、倒车和离开，而不是卡在地形和基地件之间。',
      },
      {
        title: '用 Flare 控制注意力',
        body: 'Hotfix 3 修了 Hammerhead 对 Flare 的吸引问题，所以旧说法要更新。Flare 可以争取空间，但不能代替好停点。',
      },
      {
        title: '联机重连后重新看位置',
        body: 'Hotfix 3 也修了部分客户端重连位置回退问题。联机时，先确认人和 Tadpole 实际在哪，再继续按旧停放点行动。',
      },
    ],
    tableTitle: '停放风险表',
    tableHeaders: ['情况', '更稳做法'],
    tableRows: [
      [
        '空 Tadpole 靠近 Hammerhead',
        '比 Hotfix 3 前安全，但如果 Hammerhead 反复经过，还是换位置。',
      ],
      ['Tadpole 卡在狭窄珊瑚区', '挪走。补丁不会修好糟糕的地形和舱门角度。'],
      [
        '旧攻略说 Flare 不稳定',
        'Hotfix 3 后重新测试，因为 Flare 吸引行为被修复。',
      ],
      ['基地入口靠近载具路线', '让进出车道避开怪物经常经过的路线。'],
      ['联机停放', '玩家分头行动或重连前，先报一下 Tadpole 位置。'],
    ],
    visualTitle: 'Tadpole 停放卡',
    visualItems: [
      {
        label: '补丁',
        value: 'Hotfix 3',
        note: 'Hammerhead 不再攻击无人 Tadpole。',
      },
      {
        label: '仍有风险',
        value: '感兴趣',
        note: 'Hammerhead 仍可能注意到 Tadpole。',
      },
      {
        label: '工具',
        value: 'Flare',
        note: '吸引行为在 Hotfix 3 被修复。',
      },
    ],
    cautionTitle: '不要把 Tadpole 当成隐身车',
    cautionBody:
      '这个补丁只是让一个行为没那么惩罚玩家。它没有把 Tadpole 变成安全柜、怪物盾牌或永久信标。停车时优先考虑回程路线，不要只考虑截图好不好看。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Hotfix 3 后 Hammerhead 还会攻击空 Tadpole 吗？',
        body: '官方 Hotfix 3 说明写的是：Hammerhead 不再攻击无人驾驶的 Tadpole。',
      },
      {
        title: 'Hammerhead 还会注意 Tadpole 吗？',
        body: '会。官方同一条说明也说 Hammerhead 仍可能对 Tadpole 感兴趣，所以不要停在怪物交通线上。',
      },
      {
        title: '还要用 Flare 吗？',
        body: '可以，但要谨慎。Hotfix 3 修复了 Hammerhead 偶尔不被 Flare 吸引的问题，补丁后值得重新测试。',
      },
      {
        title: '这会影响 Tadpole Dock 放在哪里吗？',
        body: '会间接影响。如果 Hammerhead 经常穿过靠近路线，Dock 和载具进出线就应该放在更安静的位置，哪怕风景差一点。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 更新内容' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 攻略' },
      { href: Routes.Subnautica2Vehicles, label: '载具攻略' },
      { href: Routes.Subnautica2TadpoleDock, label: 'Tadpole Dock' },
      { href: Routes.Subnautica2CreaturesLeviathans, label: '怪物攻略' },
      { href: Routes.Subnautica2BaseLocationTierList, label: '基地位置梯度' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 2 日核对 Unknown Worlds Hotfix 3、Hotfix 2、抢先体验路线图和官方 gameplay trailer。停放流程是基于补丁说明整理的实用建议，不是精确怪物坐标。',
    cardKicker: '载具现场卡',
    cardBody:
      '围绕 Hotfix 3 后空 Tadpole、Hammerhead 兴趣、Flare、舱门朝向、基地靠近路线和联机重连写的停放指南。',
    cardTypeLabel: '类型',
    cardTypeValue: '载具安全',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '补丁',
    cardStatusValue: 'Hotfix 3',
  },
};

function getCopy(locale: Locale): TadpoleParkingCopy {
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
    pathname: Routes.Subnautica2TadpoleParkingAfterHotfix3,
  });
}

export default async function TadpoleParkingAfterHotfix3Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <LocalizedResourceGuidePage
      copy={{ ...copy, publishedAt: PUBLISHED_AT, updatedAt: UPDATED_AT }}
      icon={AnchorIcon}
      locale={locale}
      pathname={Routes.Subnautica2TadpoleParkingAfterHotfix3}
      sources={sharedSources}
    />
  );
}
