import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { FlameIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type FlaresCopy = ResourceGuideCopy & {
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

const copyByLocale: Record<string, FlaresCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Flares After Hotfix 3 - Hammerhead Distraction Guide',
      description:
        'How to use Flares after Subnautica 2 Hotfix 3, including Hammerhead attraction, Tadpole parking, base approach lanes, and old guide warnings.',
    },
    eyebrow: 'Subnautica 2 Flares guide',
    title: 'Flares After Hotfix 3',
    description:
      'Flares are easy to dismiss until a patch changes the behavior around them. Hotfix 3 makes this tool worth retesting, especially around Hammerheads and parked Tadpoles.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Hotfix 3 fixes Hammerheads occasionally not being attracted to Flares. That does not make Flares a panic button, but it does mean old launch-week advice can be stale. Use a Flare to pull attention away from your hatch, parking lane, or base entrance, then move. Do not throw one and wait around to see whether the creature likes the show.',
    fieldNotesTitle: 'What Flares are good for',
    fieldNotes: [
      {
        title: 'They buy a little space',
        body: 'A Flare is useful when it creates a safer angle or a cleaner return line. The goal is not to win a fight. The goal is to stop making the creature and your exit share the same spot.',
      },
      {
        title: 'They are patch-sensitive',
        body: 'Hotfix 3 specifically mentions Hammerhead attraction to Flares. Any guide that tested them before June 1, 2026, needs a fresh note.',
      },
      {
        title: 'They pair with parking discipline',
        body: 'A Flare helps most when the Tadpole is already parked with room around the hatch. It helps least when the vehicle is wedged into a tight pocket.',
      },
    ],
    routeChecklistTitle: 'Flare use checklist',
    routeChecklist: [
      'Throw the Flare away from the hatch, not beside it.',
      'Move while the creature is distracted instead of watching the reaction.',
      'Keep one clean swim line back to the Tadpole or base door.',
      'Do not use Flares to justify bad parking.',
      'Recheck old clips that call Flares useless.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'A cleaner Flare routine',
    routeSteps: [
      {
        title: 'Decide the exit before throwing',
        body: 'Pick the route back to oxygen first. If you do not know where you are going, a Flare just adds light to a bad decision.',
      },
      {
        title: 'Throw across the lane',
        body: 'Put the Flare to the side of the creature path, not directly on your return line. You want attention to move away from you.',
      },
      {
        title: 'Use the gap immediately',
        body: 'Once the lane opens, swim, enter, or reposition the Tadpole. The mistake is treating the Flare like a long timer.',
      },
      {
        title: 'Retest after every behavior patch',
        body: 'Creature attraction is exactly the kind of thing that can change during Early Access. Keep patch dates near Flare advice.',
      },
      {
        title: 'Do not stack risk',
        body: 'Low oxygen, a tight hatch, a bad base entrance, and a Flare test all at once is how a small problem becomes a restart story.',
      },
    ],
    tableTitle: 'Flare decision table',
    tableHeaders: ['Situation', 'Better call'],
    tableRows: [
      [
        'Hammerhead near parked Tadpole',
        'Throw the Flare away from the hatch, then enter or move the vehicle.',
      ],
      [
        'Base entrance gets creature traffic',
        'Use a temporary Flare only while you rebuild the safer approach lane.',
      ],
      [
        'Old guide says Flares do nothing',
        'Check whether it was tested before Hotfix 3.',
      ],
      [
        'Tadpole is stuck in a tight pocket',
        'Fix the parking first. A Flare cannot make bad geometry safe.',
      ],
      [
        'Co-op team splits up',
        'Call out who has Flares and where the safe return line is.',
      ],
    ],
    visualTitle: 'Flare field card',
    visualItems: [
      {
        label: 'Patch note',
        value: 'Fixed',
        note: 'Hammerhead attraction to Flares was patched.',
      },
      {
        label: 'Best use',
        value: 'Space',
        note: 'Pull attention away from the exit.',
      },
      {
        label: 'Bad use',
        value: 'Panic',
        note: 'Do not wait beside the danger to admire it.',
      },
    ],
    cautionTitle: 'A Flare is not a shield',
    cautionBody:
      'The safest Flare use still starts with boring route planning: oxygen checked, hatch clear, return line visible, and a reason to move right now. Treat it like a tool, not a dare.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Did Hotfix 3 change Flares in Subnautica 2?',
        body: 'Yes. Unknown Worlds says Hotfix 3 fixes Hammerheads occasionally not being attracted to Flares.',
      },
      {
        title: 'Do Flares make Hammerheads harmless?',
        body: 'No. The patch note only supports retesting attraction behavior. It does not turn Flares into guaranteed protection.',
      },
      {
        title: 'Where should I throw a Flare?',
        body: 'Away from your hatch, base door, or return line. The point is to move attention away from the place you need to use.',
      },
      {
        title: 'Why does this page mention Tadpoles?',
        body: 'Because Hotfix 3 also changed Hammerhead behavior around unpiloted Tadpoles, so vehicle parking and Flare use now belong in the same route plan.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      {
        href: Routes.Subnautica2HammerheadAfterHotfix3,
        label: 'Hammerhead After Hotfix 3',
      },
      {
        href: Routes.Subnautica2TadpoleParkingAfterHotfix3,
        label: 'Tadpole Parking After Hotfix 3',
      },
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 Changes' },
      { href: Routes.Subnautica2Vehicles, label: 'Vehicles Guide' },
      {
        href: Routes.Subnautica2BaseLocationTierList,
        label: 'Base Location Tier List',
      },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 2, 2026 against Unknown Worlds Hotfix 3, Hotfix 2, the Early Access roadmap, and the official gameplay trailer. Flare recommendations here are cautious route guidance built from official behavior notes, not exact creature coordinates.',
    cardKicker: 'Tool field card',
    cardBody:
      'A practical Flare guide for Hotfix 3 Hammerhead attraction, parked Tadpoles, base entrances, co-op callouts, and old-video retesting.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Tool use',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Patch',
    cardStatusValue: 'Hotfix 3',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Hotfix 3 后 Flare 怎么用 - Hammerhead 诱导指南',
      description:
        'Subnautica 2 Flare 攻略：Hotfix 3 后 Hammerhead 吸引、Tadpole 停车、基地入口路线和旧攻略需要重测的地方。',
    },
    eyebrow: 'Subnautica 2 Flare 攻略',
    title: 'Hotfix 3 后 Flare 怎么用',
    description:
      'Flare 很容易被玩家当成没用的小道具，直到补丁改了相关行为。Hotfix 3 后，它值得重新测试，尤其是在 Hammerhead 和停车路线附近。',
    quickLabel: '快速结论',
    quickAnswer:
      'Hotfix 3 修复了 Hammerhead 偶尔不会被 Flare 吸引的问题。这不代表 Flare 变成万能按钮，但代表首发周的旧建议可能过期。更稳的用法是：把 Flare 扔到远离舱门、停车线或基地入口的位置，趁注意力被拉开时立刻移动。不要扔完以后站在旁边观察它到底喜不喜欢。',
    fieldNotesTitle: 'Flare 适合做什么',
    fieldNotes: [
      {
        title: '争取一点空间',
        body: 'Flare 有价值，是因为它能帮你换一个角度，或者让返回路线更干净。目的不是打赢怪物，而是让怪物和出口不要挤在同一个地方。',
      },
      {
        title: '它很吃补丁版本',
        body: 'Hotfix 3 明确提到 Hammerhead 对 Flare 的吸引问题。2026 年 6 月 1 日前测试 Flare 的攻略，都应该加上新补丁说明。',
      },
      {
        title: '它要和停车习惯一起用',
        body: 'Tadpole 本来就停得宽松、舱门清楚时，Flare 最有用。车卡在狭窄角落里，Flare 也救不了糟糕停车。',
      },
    ],
    routeChecklistTitle: 'Flare 使用清单',
    routeChecklist: [
      '把 Flare 扔到远离舱门的位置，不要扔在脚边。',
      '看到路线打开就移动，不要停下来看反应。',
      '保留一条清楚的游回 Tadpole 或基地门口的路线。',
      '不要用 Flare 给糟糕停车找借口。',
      '说 Flare 完全没用的旧视频，要先看录制日期。',
    ],
    contentsLabel: '目录',
    routeTitle: '更稳的 Flare 使用流程',
    routeSteps: [
      {
        title: '先决定怎么离开',
        body: '扔之前先确认回氧气的路线。如果你不知道下一步去哪，Flare 只是把一个坏决定照亮了。',
      },
      {
        title: '扔到路线侧面',
        body: '把 Flare 扔到怪物路线的一侧，不要扔在自己的返回线上。你要的是把注意力从你身边移开。',
      },
      {
        title: '空隙出现就立刻走',
        body: '路线一打开，就游走、进舱或调整 Tadpole。最常见的错误是把 Flare 当成很长时间的安全计时器。',
      },
      {
        title: '每次行为补丁后都重测',
        body: '怪物吸引规则正是抢先体验期间会改的东西。Flare 建议旁边最好带上补丁日期。',
      },
      {
        title: '不要叠风险',
        body: '低氧气、舱门卡角、基地入口糟糕、还顺手测试 Flare，这几件事叠在一起，很容易把小问题变成大事故。',
      },
    ],
    tableTitle: 'Flare 判断表',
    tableHeaders: ['场景', '更稳做法'],
    tableRows: [
      [
        'Hammerhead 靠近停好的 Tadpole',
        '把 Flare 扔离舱门，然后上车或移动车。',
      ],
      ['基地入口经常有怪物经过', 'Flare 只能临时用，真正要改的是进出路线。'],
      ['旧攻略说 Flare 没用', '先看是不是 Hotfix 3 之前测试的。'],
      ['Tadpole 卡在狭窄角落', '先修停车位置。Flare 不能让糟糕地形变安全。'],
      ['联机队伍分开行动', '提前说明谁带 Flare，以及哪条路线能安全返回。'],
    ],
    visualTitle: 'Flare 现场卡',
    visualItems: [
      {
        label: '补丁说明',
        value: '已修复',
        note: 'Hammerhead 对 Flare 的吸引问题已修。',
      },
      {
        label: '最好用途',
        value: '空间',
        note: '把注意力从出口拉开。',
      },
      {
        label: '错误用途',
        value: '硬赌',
        note: '不要站在危险旁边看热闹。',
      },
    ],
    cautionTitle: 'Flare 不是盾牌',
    cautionBody:
      '最安全的 Flare 用法仍然很朴素：氧气看过、舱门清楚、返回线可见，而且你知道现在就要移动。把它当工具，不要当挑战书。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Hotfix 3 改了 Subnautica 2 的 Flare 吗？',
        body: '是的。Unknown Worlds 说明 Hotfix 3 修复了 Hammerhead 偶尔不会被 Flare 吸引的问题。',
      },
      {
        title: 'Flare 会让 Hammerhead 无害吗？',
        body: '不会。补丁只支持重新测试吸引行为，不代表 Flare 能提供保证保护。',
      },
      {
        title: 'Flare 应该扔在哪里？',
        body: '扔到远离舱门、基地门口或返回路线的位置。重点是把注意力从你要用的位置拉走。',
      },
      {
        title: '为什么 Flare 页会提 Tadpole？',
        body: '因为 Hotfix 3 同时改了 Hammerhead 对无人 Tadpole 的行为。停车和 Flare 使用现在应该放在同一个路线计划里看。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      {
        href: Routes.Subnautica2HammerheadAfterHotfix3,
        label: 'Hotfix 3 后 Hammerhead',
      },
      {
        href: Routes.Subnautica2TadpoleParkingAfterHotfix3,
        label: 'Hotfix 3 后 Tadpole 停车',
      },
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 更新内容' },
      { href: Routes.Subnautica2Vehicles, label: '载具指南' },
      { href: Routes.Subnautica2BaseLocationTierList, label: '基地位置分级' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 2 日核对 Unknown Worlds Hotfix 3、Hotfix 2、抢先体验路线图和官方实机预告。本页 Flare 建议基于官方行为说明整理，不声称提供精确怪物坐标。',
    cardKicker: '工具现场卡',
    cardBody:
      '围绕 Hotfix 3 后 Flare、Hammerhead 吸引、Tadpole 停车、基地入口、联机沟通和旧视频重测写的工具页。',
    cardTypeLabel: '类型',
    cardTypeValue: '工具使用',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '补丁',
    cardStatusValue: 'Hotfix 3',
  },
};

function getCopy(locale: Locale): FlaresCopy {
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
    pathname: Routes.Subnautica2FlaresAfterHotfix3,
  });
}

export default async function FlaresAfterHotfix3Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <LocalizedResourceGuidePage
      copy={{ ...copy, publishedAt: PUBLISHED_AT, updatedAt: UPDATED_AT }}
      icon={FlameIcon}
      locale={locale}
      pathname={Routes.Subnautica2FlaresAfterHotfix3}
      sources={sharedSources}
    />
  );
}
