import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { AlertTriangleIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type HammerheadCopy = ResourceGuideCopy & {
  metadata: { title: string; description: string };
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

const copyByLocale: Record<string, HammerheadCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Hammerhead After Hotfix 3 - Tadpole and Flare Safety',
      description:
        'A practical Subnautica 2 Hammerhead guide for Hotfix 3 behavior, unpiloted Tadpoles, Flares, lights, base routes, and what old advice needs retesting.',
    },
    eyebrow: 'Subnautica 2 Hammerhead guide',
    title: 'Hammerhead After Hotfix 3',
    description:
      'Hammerhead advice changed twice in the first Early Access patches. This page keeps the useful bits at the top so players can update routes without reading every patch note again.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'After Hotfix 3, Hammerheads no longer attack unpiloted Tadpoles, but they can still take an interest in Tadpoles. Hotfix 3 also fixes Hammerheads occasionally not being attracted to Flares. Hotfix 2 had already reduced Hammerhead attraction to Tadpole lights. The safe habit is simple: keep the Tadpole out of patrol lanes, do not park by a base entrance, and use Flares as a short distraction rather than a guarantee.',
    fieldNotesTitle: 'What changed in the patch notes',
    fieldNotes: [
      {
        title: 'Unpiloted Tadpoles are less punishing',
        body: 'The biggest Hotfix 3 change is that Hammerheads should stop attacking Tadpoles when nobody is piloting them. That helps scanning, gathering, and quick base work.',
      },
      {
        title: 'Interest still matters',
        body: 'Unknown Worlds did not say Hammerheads ignore Tadpoles. The note says they can still take interest, which is enough reason to keep clean parking lanes.',
      },
      {
        title: 'Old Flare advice needs a second look',
        body: 'If a launch-week tip says Flares never work, check the date. Hotfix 3 fixed a case where Hammerheads were not attracted to Flares.',
      },
    ],
    routeChecklistTitle: 'Hammerhead safety checklist',
    routeChecklist: [
      'Do not park the Tadpole directly on a Hammerhead patrol line.',
      'Point the hatch toward your return route before leaving the vehicle.',
      'Use Flares to pull attention away from the hatch or base entrance.',
      'Keep base doors and docks out of repeated creature traffic.',
      'Retest any video guide recorded before June 1, 2026.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to route around Hammerheads now',
    routeSteps: [
      {
        title: 'Treat the first sighting as a route note',
        body: 'Do not only mark where the creature appeared. Mark where it crossed your path, where your oxygen was low, and where the Tadpole was parked.',
      },
      {
        title: 'Park outside the noisy pocket',
        body: 'If Hammerheads keep passing through a resource pocket, stop the Tadpole outside that pocket and swim in with a simple return line.',
      },
      {
        title: 'Keep lights and Flares separate in your thinking',
        body: 'Hotfix 2 reduced attraction to Tadpole lights. Hotfix 3 fixed attraction to Flares. Those are different behaviors, so do not mix them into one vague rule.',
      },
      {
        title: 'Move the base route before moving the whole base',
        body: 'A base can feel unsafe because the approach lane is bad. Try a different dock angle, beacon line, or storage stop before rebuilding everything.',
      },
      {
        title: 'Check co-op positions after rejoin',
        body: 'Hotfix 3 also mentions client rejoin position fixes. In multiplayer, call out where the vehicle and players actually loaded before assuming the Hammerhead lane is clear.',
      },
    ],
    tableTitle: 'Hammerhead behavior table',
    tableHeaders: ['Question', 'Best current answer'],
    tableRows: [
      [
        'Will Hammerheads attack an empty Tadpole?',
        'Hotfix 3 says they no longer attack unpiloted Tadpoles.',
      ],
      [
        'Can they still notice the Tadpole?',
        'Yes. The official note says they can still take an interest in Tadpoles.',
      ],
      [
        'Do Flares work?',
        'They are worth retesting after Hotfix 3 because attraction to Flares was fixed.',
      ],
      [
        'Are Tadpole lights still a problem?',
        'Hotfix 2 reduced Hammerhead attraction to Tadpole lights, but routes should still avoid repeated patrols.',
      ],
      [
        'Should I move my base?',
        'Only after checking whether a safer approach lane solves the problem.',
      ],
    ],
    visualTitle: 'Hammerhead field card',
    visualItems: [
      {
        label: 'Patch',
        value: 'Hotfix 3',
        note: 'Empty Tadpoles are safer than before.',
      },
      {
        label: 'Tool',
        value: 'Flare',
        note: 'Use it to buy space, not to act brave.',
      },
      {
        label: 'Habit',
        value: 'Route',
        note: 'Record the patrol lane, not only the creature name.',
      },
    ],
    cautionTitle: 'Do not turn one patch note into a myth',
    cautionBody:
      'Hotfix 3 reduces one type of vehicle punishment. It does not mean Hammerheads are harmless, that all old clips are useless, or that every parked Tadpole is safe. Use the patch note, then still make a clean exit plan.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'What is the latest Hammerhead change in Subnautica 2?',
        body: 'As checked on June 2, 2026, Hotfix 3 says Hammerheads no longer attack unpiloted Tadpoles and fixes a Flare attraction issue.',
      },
      {
        title: 'What did Hotfix 2 change?',
        body: 'Hotfix 2 adjusted Hammerheads so they were no longer as attracted to Tadpole lights, which could lead them back toward bases.',
      },
      {
        title: 'Should I trust old Hammerhead videos?',
        body: 'Use them for visual recognition, but recheck behavior claims if the video was recorded before Hotfix 3 on June 1, 2026.',
      },
      {
        title: 'Is this a full creature guide?',
        body: 'No. This is a Hammerhead behavior page. Use the creatures guide for broader creature and leviathan watch notes.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2FlaresAfterHotfix3,
        label: 'Flares After Hotfix 3',
      },
      {
        href: Routes.Subnautica2TadpoleParkingAfterHotfix3,
        label: 'Tadpole Parking After Hotfix 3',
      },
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 Changes' },
      {
        href: Routes.Subnautica2CreaturesLeviathans,
        label: 'Creatures and Leviathans',
      },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 2, 2026 against Unknown Worlds Hotfix 3, Hotfix 2, the Early Access roadmap, and the official gameplay trailer. The page image is original Abyss Guides art and is not copied from wiki screenshots or game captures.',
    cardKicker: 'Creature safety card',
    cardBody:
      'A Hammerhead behavior page for Hotfix 3 vehicle safety, Flare retesting, light attraction, base approach lanes, and multiplayer rejoin checks.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Creature behavior',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Patch',
    cardStatusValue: 'Hotfix 3',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Hotfix 3 后 Hammerhead 怎么躲 - Tadpole 和 Flare 指南',
      description:
        'Subnautica 2 Hammerhead 攻略：Hotfix 3 后无人 Tadpole、Flare、灯光吸引、基地路线和旧视频攻略需要重测的地方。',
    },
    eyebrow: 'Subnautica 2 Hammerhead 攻略',
    title: 'Hotfix 3 后 Hammerhead 怎么躲',
    description:
      'Hammerhead 的建议在抢先体验首周已经改过两次。这里把最有用的变化放在前面，方便你更新路线，不用每次都重新翻补丁说明。',
    quickLabel: '快速结论',
    quickAnswer:
      'Hotfix 3 后，Hammerhead 不再攻击无人驾驶的 Tadpole，但官方仍说明它们可能对 Tadpole 感兴趣。Hotfix 3 还修复了 Hammerhead 偶尔不会被 Flare 吸引的问题。Hotfix 2 则已经降低了 Hammerhead 对 Tadpole 灯光的吸引。更稳的做法是：Tadpole 不停在巡逻线上，不把基地入口放在怪物常走的路上，Flare 当作短时间转移注意力的工具，而不是保命保险。',
    fieldNotesTitle: '补丁到底改了什么',
    fieldNotes: [
      {
        title: '空 Tadpole 比以前安全',
        body: 'Hotfix 3 最重要的一句是：Hammerhead 不再攻击无人驾驶的 Tadpole。这对下车扫描、采集、临时建造都很有用。',
      },
      {
        title: '感兴趣不等于无视',
        body: '官方没有说 Hammerhead 会完全忽略 Tadpole。它们仍可能感兴趣，所以停车线和返回路线还是要干净。',
      },
      {
        title: '旧 Flare 建议要重看',
        body: '如果首发周攻略说 Flare 完全不可靠，要先看发布时间。Hotfix 3 修复了 Hammerhead 偶尔不被 Flare 吸引的问题。',
      },
    ],
    routeChecklistTitle: 'Hammerhead 安全清单',
    routeChecklist: [
      '不要把 Tadpole 直接停在 Hammerhead 巡逻线上。',
      '下车前让舱门朝向返回路线。',
      '用 Flare 把注意力从舱门或基地入口附近拉开。',
      '基地门口和 Dock 尽量避开怪物重复经过的路线。',
      '2026 年 6 月 1 日之前录制的视频攻略，都要按 Hotfix 3 重测。',
    ],
    contentsLabel: '目录',
    routeTitle: '现在该怎么绕开 Hammerhead',
    routeSteps: [
      {
        title: '第一次看到就记录路线',
        body: '不要只记怪物在哪里出现。更有用的是记它穿过了哪条路、你当时氧气够不够、Tadpole 停在哪里。',
      },
      {
        title: '停在危险口袋外面',
        body: '如果 Hammerhead 经常穿过某个资源点，把 Tadpole 停在外面，最后一小段自己游进去，回程也更清楚。',
      },
      {
        title: '把灯光和 Flare 分开理解',
        body: 'Hotfix 2 降低的是 Tadpole 灯光吸引，Hotfix 3 修的是 Flare 吸引。它们不是同一个规则，不要混成一句模糊的老经验。',
      },
      {
        title: '先改基地进出路线',
        body: '有时基地本身没问题，是入口路线穿过了怪物线。先试试换 Dock 朝向、Beacon 线路或临时补给点，再决定要不要搬家。',
      },
      {
        title: '联机重连后确认位置',
        body: 'Hotfix 3 也提到修复客户端重连位置回退。多人游戏里，先确认人和 Tadpole 实际加载在哪里，再判断附近是否安全。',
      },
    ],
    tableTitle: 'Hammerhead 行为表',
    tableHeaders: ['问题', '当前更稳的答案'],
    tableRows: [
      [
        'Hammerhead 会攻击空 Tadpole 吗？',
        'Hotfix 3 说明它们不再攻击无人驾驶的 Tadpole。',
      ],
      [
        '它们还能注意到 Tadpole 吗？',
        '可以。官方仍说 Hammerhead 可能对 Tadpole 感兴趣。',
      ],
      [
        'Flare 还值得用吗？',
        '值得重测。Hotfix 3 修复了 Hammerhead 对 Flare 的吸引问题。',
      ],
      [
        'Tadpole 灯光还是问题吗？',
        'Hotfix 2 已经降低灯光吸引，但路线仍要避开反复巡逻。',
      ],
      ['我需要搬基地吗？', '先看能不能换一条更安全的进出路线，不要急着拆家。'],
    ],
    visualTitle: 'Hammerhead 现场卡',
    visualItems: [
      {
        label: '补丁',
        value: 'Hotfix 3',
        note: '空 Tadpole 比以前更安全。',
      },
      {
        label: '工具',
        value: 'Flare',
        note: '争取空间，不是硬闯理由。',
      },
      {
        label: '习惯',
        value: '路线',
        note: '记巡逻线，不只记怪物名字。',
      },
    ],
    cautionTitle: '不要把一句补丁说明变成神话',
    cautionBody:
      'Hotfix 3 降低的是一种载具惩罚，不代表 Hammerhead 无害，也不代表所有旧视频都没用，更不代表所有停车点都安全。先用补丁说明校准，再给自己留出路。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 最新 Hammerhead 改动是什么？',
        body: '截至 2026 年 6 月 2 日核对，Hotfix 3 说明 Hammerhead 不再攻击无人驾驶的 Tadpole，并修复了 Flare 吸引问题。',
      },
      {
        title: 'Hotfix 2 改了什么？',
        body: 'Hotfix 2 降低了 Hammerhead 对 Tadpole 灯光的吸引，避免它们被灯光带回基地附近。',
      },
      {
        title: '旧 Hammerhead 视频还能看吗？',
        body: '可以用来看外观和环境，但 2026 年 6 月 1 日前的视频，行为结论要按 Hotfix 3 重看。',
      },
      {
        title: '这是完整生物图鉴吗？',
        body: '不是。这页专门讲 Hammerhead 行为。更宽泛的生物和 Leviathan 观察，请看 Creatures 页面。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      {
        href: Routes.Subnautica2FlaresAfterHotfix3,
        label: 'Hotfix 3 后 Flare 怎么用',
      },
      {
        href: Routes.Subnautica2TadpoleParkingAfterHotfix3,
        label: 'Hotfix 3 后 Tadpole 停车',
      },
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 更新内容' },
      {
        href: Routes.Subnautica2CreaturesLeviathans,
        label: '生物和 Leviathan',
      },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 2 日核对 Unknown Worlds Hotfix 3、Hotfix 2、抢先体验路线图和官方实机预告。本页图片为 Abyss Guides 原创图，不复制 wiki 截图或游戏截图。',
    cardKicker: '生物安全卡',
    cardBody:
      '围绕 Hotfix 3 后 Hammerhead、Tadpole、Flare、灯光吸引、基地路线和多人重连写的行为页。',
    cardTypeLabel: '类型',
    cardTypeValue: '生物行为',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '补丁',
    cardStatusValue: 'Hotfix 3',
  },
};

function getCopy(locale: Locale): HammerheadCopy {
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
    pathname: Routes.Subnautica2HammerheadAfterHotfix3,
  });
}

export default async function HammerheadAfterHotfix3Page({
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
      pathname={Routes.Subnautica2HammerheadAfterHotfix3}
      sources={sharedSources}
    />
  );
}
