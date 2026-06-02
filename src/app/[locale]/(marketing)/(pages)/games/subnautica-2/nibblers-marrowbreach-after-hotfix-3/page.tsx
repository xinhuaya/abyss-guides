import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { FishIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type CreaturePatchCopy = ResourceGuideCopy & {
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

const copyByLocale: Record<string, CreaturePatchCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Nibblers and Marrowbreaches After Hotfix 3 - Creature Safety Guide',
      description:
        'A practical Subnautica 2 Hotfix 3 creature guide for Nibbler perception, Multitool reactions, Marrowbreach damage, slower attacks, route safety, and old video retesting.',
    },
    eyebrow: 'Subnautica 2 creature patch guide',
    title: 'Nibblers and Marrowbreaches After Hotfix 3',
    description:
      'Hotfix 3 did not add a new creature list. It changed how two early threats feel in the water. That matters more than it sounds when you are low on oxygen and trying to get home.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'After Hotfix 3, Marrowbreaches deal more damage but attack less frequently. Nibblers now have a lower perception range, move more slowly, circle longer before attacking, are more sensitive to the Multitool, and deal more damage overall. The practical answer is not "everything is easier." Routes feel less jumpy, but mistakes cost more health. Slow down before scanning, keep a clean return line, and retest any creature advice recorded before June 1, 2026.',
    fieldNotesTitle: 'What actually changed in play',
    fieldNotes: [
      {
        title: 'Marrowbreaches punish fewer mistakes harder',
        body: 'A longer gap between attacks gives you time to leave. The higher damage means you should use that time instead of trying to finish one more scan.',
      },
      {
        title: 'Nibblers should be less twitchy',
        body: 'Lower perception range, slower movement, and longer circling give careful players more warning. If you sprint through a cave at low oxygen, the extra damage still hurts.',
      },
      {
        title: 'The Multitool is worth testing again',
        body: 'Hotfix 3 says Nibblers are more sensitive to the Multitool. Treat old "it does nothing" clips as dated until you check them on the patched build.',
      },
    ],
    routeChecklistTitle: 'Creature route checklist',
    routeChecklist: [
      'Carry enough oxygen to leave after the first bad bite.',
      'Start scans from the edge of the room, not from the middle of a swarm.',
      'Use the Multitool test before committing to a tight cave route.',
      'Do not judge damage from launch-week clips without checking the patch date.',
      'In co-op, call out creature pressure before everyone crowds the same pocket.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to adjust routes after Hotfix 3',
    routeSteps: [
      {
        title: 'Watch the first circle',
        body: 'For Nibblers, the longer circling window is the cue. If it starts circling, stop scanning and move toward the exit line before the bite lands.',
      },
      {
        title: 'Leave after a Marrowbreach hit',
        body: 'The attack may not repeat as quickly, but the first hit matters more now. Back out, heal or breathe, then return with a better angle.',
      },
      {
        title: 'Test the Multitool in open water',
        body: 'Do not discover tool timing inside a narrow cave. Test at the edge of the route, then decide whether the pocket is worth farming.',
      },
      {
        title: 'Update beginner advice',
        body: 'A beginner guide should not say these creatures are harmless because they move slower. It should say you get more warning, but the damage is less forgiving.',
      },
      {
        title: 'Keep the route connected to oxygen',
        body: 'Creature risk and oxygen risk stack. A safe-looking creature route can become a bad route if the exit is hard to see or the return swim is long.',
      },
    ],
    tableTitle: 'Hotfix 3 creature behavior table',
    tableHeaders: ['Creature', 'What to do now'],
    tableRows: [
      [
        'Marrowbreach',
        'Expect more damage per hit, fewer attacks, and a stronger reason to leave after contact.',
      ],
      [
        'Nibbler',
        'Expect shorter perception range, slower movement, longer circling, more Multitool sensitivity, and higher damage.',
      ],
      [
        'Scanner routes',
        'Start at the edge of a room, scan in short bursts, and keep the exit visible.',
      ],
      [
        'Old videos',
        'Use them for recognition, but recheck damage and behavior claims after Hotfix 3.',
      ],
      [
        'Co-op routes',
        'One player should watch the exit while another scans, especially in tight pockets.',
      ],
    ],
    visualTitle: 'Creature risk card',
    visualItems: [
      {
        label: 'Patch',
        value: 'Hotfix 3',
        note: 'Creature timing and damage changed.',
      },
      {
        label: 'Nibbler',
        value: 'Slower',
        note: 'More warning, but harder bites.',
      },
      {
        label: 'Route habit',
        value: 'Exit first',
        note: 'Know the way out before scanning.',
      },
    ],
    cautionTitle: 'Slower does not mean safer',
    cautionBody:
      'The easiest mistake after this patch is reading "slower" as "safe." Hotfix 3 also raises damage. If a creature gives you more time to react, spend that time leaving cleanly, not gambling on one more pickup.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'What changed for Marrowbreaches in Subnautica 2 Hotfix 3?',
        body: 'Unknown Worlds says Marrowbreaches now deal more damage and attack less frequently. That makes route discipline more important, not less.',
      },
      {
        title: 'What changed for Nibblers in Hotfix 3?',
        body: 'The official notes list lower perception range, slower movement, longer circling before attacks, more sensitivity to the Multitool, and higher damage.',
      },
      {
        title: 'Are Nibblers easier now?',
        body: 'They should give more warning, but the damage is higher. Careful players get more room to react; careless routes still punish you.',
      },
      {
        title: 'Should I trust old Nibbler guides?',
        body: 'Use old videos for visual recognition only. Retest behavior, damage, and Multitool claims if the guide was made before Hotfix 3.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 Changes' },
      {
        href: Routes.Subnautica2CreaturesLeviathans,
        label: 'Creatures and Leviathans',
      },
      { href: Routes.Subnautica2OxygenDepth, label: 'Oxygen and Depth' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
      {
        href: Routes.Subnautica2CoopRejoinAfterHotfix3,
        label: 'Co-op Rejoin After Hotfix 3',
      },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 2, 2026 against Unknown Worlds Hotfix 3, the Early Access roadmap, Steam, and the official gameplay trailer. The page image is original Abyss Guides art and is not copied from wiki screenshots, game captures, or fan uploads.',
    cardKicker: 'Creature safety card',
    cardBody:
      'A Hotfix 3 creature page for Nibbler perception, Multitool reactions, Marrowbreach damage, oxygen pressure, and route cleanup.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Creature behavior',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Patch',
    cardStatusValue: 'Hotfix 3',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Hotfix 3 后 Nibbler 和 Marrowbreach 怎么躲 - 生物安全指南',
      description:
        'Subnautica 2 Hotfix 3 后 Nibbler 感知范围、Multitool 反应、Marrowbreach 伤害、攻击频率、路线安全和旧视频重测建议。',
    },
    eyebrow: 'Subnautica 2 生物补丁指南',
    title: 'Hotfix 3 后 Nibbler 和 Marrowbreach 怎么躲',
    description:
      'Hotfix 3 没有增加新的生物名单，但它改了两个早期威胁的手感。氧气不多、还想贪一次扫描时，这种变化很要命。',
    quickLabel: '快速结论',
    quickAnswer:
      'Hotfix 3 后，Marrowbreach 伤害更高，但攻击没那么频繁。Nibbler 的感知范围变短、移动更慢、攻击前绕圈更久、对 Multitool 更敏感，同时总体伤害更高。所以答案不是“怪变简单了”。路线会没那么突然，但犯错更疼。扫描前先放慢，确认回程线，2026 年 6 月 1 日前录的生物攻略都要按新版本重看。',
    fieldNotesTitle: '实际玩起来变了什么',
    fieldNotes: [
      {
        title: 'Marrowbreach 是少打几下，但每下更疼',
        body: '攻击间隔变长，给了你撤退时间。伤害提高后，这段时间最好拿来离开，不要硬贪最后一次扫描。',
      },
      {
        title: 'Nibbler 不该再那么突然',
        body: '感知范围更短、移动更慢、攻击前绕圈更久，这些都会给谨慎玩家更多预警。但低氧乱冲洞穴时，更高伤害还是会出事。',
      },
      {
        title: 'Multitool 值得重新测试',
        body: 'Hotfix 3 写明 Nibbler 对 Multitool 更敏感。旧视频如果说完全没用，先看发布时间，再按新补丁重测。',
      },
    ],
    routeChecklistTitle: '生物路线检查清单',
    routeChecklist: [
      '氧气要够你被咬一次后还能安全离开。',
      '从房间边缘开始扫描，不要站在一群怪中间开扫。',
      '进狭窄洞穴前，先在边缘测试 Multitool 反应。',
      '不要直接套用首发周视频里的伤害判断。',
      '多人联机时，先报怪物压力，再一起挤进同一个资源点。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Hotfix 3 后路线怎么改',
    routeSteps: [
      {
        title: '先看 Nibbler 的第一圈',
        body: '绕圈时间变长，就是你该行动的信号。它开始绕时，先停下扫描，往出口线移动，不要等咬到再反应。',
      },
      {
        title: '被 Marrowbreach 咬到就撤',
        body: '它可能不会马上接第二下，但第一下更疼。先退出去、补氧或回血，再换角度回来。',
      },
      {
        title: 'Multitool 在开阔处测试',
        body: '不要在窄洞里第一次测试工具节奏。先在路线边缘试一下，再决定这个点值不值得刷。',
      },
      {
        title: '新手攻略要改口径',
        body: '不能因为怪移动更慢就写成“无害”。更准确的说法是：预警变多了，但伤害更不宽容。',
      },
      {
        title: '生物路线要和氧气一起看',
        body: '怪物风险和氧气风险会叠加。出口不好找、回程太长时，看起来不凶的怪也会把路线变坏。',
      },
    ],
    tableTitle: 'Hotfix 3 生物行为表',
    tableHeaders: ['生物/场景', '现在怎么处理'],
    tableRows: [
      [
        'Marrowbreach',
        '单次伤害更高、攻击频率更低，被碰到后更应该撤，不要硬贪。',
      ],
      ['Nibbler', '感知更短、移动更慢、绕圈更久、更怕 Multitool，但伤害更高。'],
      ['扫描路线', '从房间边缘开始，分段扫描，始终让出口在视野里。'],
      ['旧视频', '可以用来看外观，但伤害、行为和工具反应要按 Hotfix 3 重测。'],
      ['联机路线', '一个人看出口，一个人扫描，尤其是狭窄资源点。'],
    ],
    visualTitle: '生物风险卡',
    visualItems: [
      {
        label: '补丁',
        value: 'Hotfix 3',
        note: '生物节奏和伤害都变了。',
      },
      {
        label: 'Nibbler',
        value: '更慢',
        note: '预警更多，但咬得更疼。',
      },
      {
        label: '路线习惯',
        value: '先找出口',
        note: '扫描前先知道怎么撤。',
      },
    ],
    cautionTitle: '变慢不等于安全',
    cautionBody:
      '这次补丁最容易误读的地方，就是把“变慢”看成“没危险”。Hotfix 3 同时提高了伤害。怪物给你更多反应时间，就把这段时间拿来撤，不要拿来赌最后一个材料。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 Hotfix 3 对 Marrowbreach 改了什么？',
        body: 'Unknown Worlds 写明 Marrowbreach 现在伤害更高，攻击没那么频繁。路线纪律反而更重要。',
      },
      {
        title: 'Hotfix 3 对 Nibbler 改了什么？',
        body: '官方说明包括感知范围降低、移动速度降低、攻击前绕圈更久、对 Multitool 更敏感，以及总伤害提高。',
      },
      {
        title: 'Nibbler 现在更简单了吗？',
        body: '它应该会给更多预警，但伤害更高。谨慎玩家更好反应，乱冲路线还是会被惩罚。',
      },
      {
        title: '旧 Nibbler 攻略还能看吗？',
        body: '可以看外观和场景，但行为、伤害、Multitool 反应这些结论，如果是 Hotfix 3 前的内容，都要重测。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 更新内容' },
      {
        href: Routes.Subnautica2CreaturesLeviathans,
        label: '生物和 Leviathan',
      },
      { href: Routes.Subnautica2OxygenDepth, label: '氧气和深度' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner 指南' },
      {
        href: Routes.Subnautica2CoopRejoinAfterHotfix3,
        label: 'Hotfix 3 后联机重连',
      },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 2 日核对 Unknown Worlds Hotfix 3、Early Access 路线图、Steam 页面和官方实机预告。本页图片为 Abyss Guides 原创图，不复制 wiki 截图、游戏截图或玩家上传图。',
    cardKicker: '生物安全卡',
    cardBody:
      '围绕 Hotfix 3 后 Nibbler 感知、Multitool 反应、Marrowbreach 伤害、氧气压力和路线调整写的生物行为页。',
    cardTypeLabel: '类型',
    cardTypeValue: '生物行为',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '补丁',
    cardStatusValue: 'Hotfix 3',
  },
};

function getCopy(locale: Locale): CreaturePatchCopy {
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
    pathname: Routes.Subnautica2NibblersMarrowbreachAfterHotfix3,
  });
}

export default async function NibblersMarrowbreachAfterHotfix3Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <LocalizedResourceGuidePage
      copy={{ ...copy, publishedAt: PUBLISHED_AT, updatedAt: UPDATED_AT }}
      icon={FishIcon}
      locale={locale}
      pathname={Routes.Subnautica2NibblersMarrowbreachAfterHotfix3}
      sources={sharedSources}
    />
  );
}
