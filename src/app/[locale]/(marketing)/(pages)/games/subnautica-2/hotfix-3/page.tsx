import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { WrenchIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type HotfixCopy = ResourceGuideCopy & {
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
    href: 'https://store.steampowered.com/app/1962700/Subnautica_2/',
    label: 'Official Steam Early Access page',
  },
];

const hotfixCopy: Record<string, HotfixCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Hotfix 3 Changes - DLSS 4.5, Tadpoles, Creatures, and Crashes',
      description:
        'A practical Subnautica 2 Hotfix 3 guide covering DLSS 4.5, Frame Generation, Interior Wall costs, Hammerheads, Tadpoles, Marrowbreaches, Nibblers, multiplayer rejoin fixes, and Strike Armor.',
    },
    eyebrow: 'Subnautica 2 Hotfix 3 notes',
    title: 'Subnautica 2 Hotfix 3 Changes',
    description:
      'Hotfix 3 is a small patch with a real guide impact: PC graphics settings, base-building costs, vehicle safety, creature risk, co-op rejoin behavior, and one armor exploit all need another look.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Hotfix 3 was published by Unknown Worlds on June 1, 2026. It fixes DLSS crashes and saved-setting issues, restores Frame Generation availability for some versions, upgrades DLSS to 4.5, cuts Interior Wall costs to one quarter, stops Hammerheads from attacking unpiloted Tadpoles, changes Marrowbreach and Nibbler behavior, fixes a rare start crash, fixes some multiplayer rejoin position rollback, and closes a Strike Armor stacking problem.',
    fieldNotesTitle: 'Field notes after Hotfix 3',
    fieldNotes: [
      {
        title: 'PC settings guides need a fresh check',
        body: 'DLSS and Frame Generation are the headline items. If a launch-week guide says a graphics option is missing or unsafe, retest it after this patch.',
      },
      {
        title: 'Unpiloted Tadpoles are less risky',
        body: 'Hammerheads no longer attack empty Tadpoles, but the official note says they can still take an interest in them. Park smarter, but do not treat the vehicle as invisible.',
      },
      {
        title: 'Creature advice got more specific',
        body: 'Marrowbreaches hit harder but attack less often. Nibblers see less, move slower, circle longer before attacking, react more to the Multitool, and also hit harder. Old creature notes need cleanup.',
      },
    ],
    routeChecklistTitle: 'After installing Hotfix 3',
    routeChecklist: [
      'Retest DLSS, Frame Generation, and saved graphics settings.',
      'Update base-building cost notes for Interior Walls.',
      'Rewrite Tadpole parking advice around unpiloted Hammerhead attacks.',
      'Recheck creature-risk notes for Marrowbreaches and Nibblers.',
      'Warn co-op players about rejoin fixes before blaming a save.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'What changed in Hotfix 3',
    routeSteps: [
      {
        title: 'DLSS and Frame Generation were patched',
        body: 'Unknown Worlds says Hotfix 3 fixes DLSS crashes, fixes DLSS settings not saving correctly, restores Frame Generation in some versions, and upgrades DLSS to version 4.5.',
      },
      {
        title: 'Base-building got one cheaper piece',
        body: 'Interior Wall costs were reduced to one quarter of their previous price. That is narrow, but it matters for early base layouts where players overbuild storage and room dividers.',
      },
      {
        title: 'Hammerhead and Tadpole behavior changed',
        body: 'Hammerheads no longer attack unpiloted Tadpoles, though they can still show interest. The patch also fixes cases where Hammerheads were not attracted to Flares.',
      },
      {
        title: 'Marrowbreaches and Nibblers changed feel',
        body: 'Marrowbreaches now deal more damage but attack less often. Nibblers have lower perception range, slower movement, longer circling before attacks, more Multitool sensitivity, and higher damage.',
      },
      {
        title: 'Co-op and crash fixes need retesting',
        body: 'Hotfix 3 fixes a rare crash when starting games and a multiplayer issue where clients could revert to their previous position after rejoining a session.',
      },
    ],
    tableTitle: 'Patch impact table',
    tableHeaders: ['Area', 'What to recheck'],
    tableRows: [
      [
        'PC performance',
        'DLSS, Frame Generation, and saved graphics settings should be retested before repeating launch-week advice.',
      ],
      [
        'Base building',
        'Interior Wall cost notes should mention the one-quarter cost reduction.',
      ],
      [
        'Tadpole safety',
        'Parking advice should say Hammerheads no longer attack unpiloted Tadpoles, but can still notice them.',
      ],
      [
        'Creature routes',
        'Marrowbreach and Nibbler danger notes need new wording because both behavior and damage changed.',
      ],
      [
        'Co-op sessions',
        'Rejoin-position rollback reports should be checked against the patched build.',
      ],
      [
        'Armor builds',
        'Strike Armor stacking advice should be removed if it relied on the additive stacking bug.',
      ],
    ],
    visualTitle: 'Hotfix 3 field scan',
    visualItems: [
      {
        label: 'PC',
        value: 'DLSS 4.5',
        note: 'Graphics settings and crashes were patched.',
      },
      {
        label: 'Vehicle',
        value: 'Tadpole',
        note: 'Empty Tadpoles are safer around Hammerheads.',
      },
      {
        label: 'Creature',
        value: 'Nibblers',
        note: 'Less visible, slower, but more damaging.',
      },
    ],
    cautionTitle: 'Do not treat Hotfix 3 as a content drop',
    cautionBody:
      'This is a stability, settings, cost, and creature-behavior patch. It does not confirm new biomes, story chapters, or a 1.0 date. Keep roadmap claims separate from hotfix claims.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'When did Subnautica 2 Hotfix 3 release?',
        body: 'Unknown Worlds published Hotfix 3 on June 1, 2026.',
      },
      {
        title: 'Did Hotfix 3 upgrade DLSS?',
        body: 'Yes. The official notes say DLSS was upgraded to version 4.5, with fixes for DLSS crashes and saved settings.',
      },
      {
        title: 'Are Tadpoles safer after Hotfix 3?',
        body: 'Unpiloted Tadpoles are safer around Hammerheads because Hammerheads no longer attack them, but the notes still say Hammerheads can take an interest in Tadpoles.',
      },
      {
        title: 'Did Hotfix 3 change resources?',
        body: 'The official Hotfix 3 notes do not list broad resource-location changes. The cost change to watch is Interior Walls being reduced to one quarter of the previous cost.',
      },
      {
        title: 'Why does this patch matter for guides?',
        body: 'It changes advice for PC settings, base interiors, Tadpole parking, creature avoidance, multiplayer rejoin problems, and Strike Armor builds.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Updates, label: 'Roadmap and Updates' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 Changes' },
      { href: Routes.Subnautica2Vehicles, label: 'Vehicle Guide' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole Guide' },
      {
        href: Routes.Subnautica2NibblersMarrowbreachAfterHotfix3,
        label: 'Nibblers and Marrowbreaches',
      },
      {
        href: Routes.Subnautica2StrikeArmorStackingAfterHotfix3,
        label: 'Strike Armor Stacking',
      },
      { href: Routes.Subnautica2CreaturesLeviathans, label: 'Creatures Guide' },
      {
        href: Routes.Subnautica2MultiplayerNotWorking,
        label: 'Multiplayer Fixes',
      },
      { href: Routes.Subnautica2BaseBuilding, label: 'Base Building' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 2, 2026 against the official Unknown Worlds Hotfix 3 post, Hotfix 2 post, Early Access roadmap, and Steam Early Access page. Hotfix 3 is treated as a patch note, not as a roadmap or platform announcement.',
    cardKicker: 'Patch field card',
    cardBody:
      'A patch-aware guide to Hotfix 3 changes that affect DLSS, Frame Generation, Interior Walls, Tadpoles, creature behavior, co-op rejoining, and Strike Armor.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Patch guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Live patch',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Hotfix 3 更新内容 - DLSS 4.5、Tadpole、怪物与崩溃修复',
      description:
        'Subnautica 2 Hotfix 3 中文整理：DLSS 4.5、Frame Generation、Interior Wall 成本、Hammerhead、Tadpole、Marrowbreach、Nibbler、联机重连和 Strike Armor 修复。',
    },
    eyebrow: 'Subnautica 2 Hotfix 3 笔记',
    title: 'Subnautica 2 Hotfix 3 更新内容',
    description:
      'Hotfix 3 不是大型内容更新，但会影响攻略写法：PC 图形设置、基地墙体成本、Tadpole 停放、怪物风险、联机重连和 Strike Armor 都需要重新核对。',
    quickLabel: '快速结论',
    quickAnswer:
      'Unknown Worlds 在 2026 年 6 月 1 日发布了 Hotfix 3。它修复 DLSS 崩溃和设置保存问题，让部分版本重新可用 Frame Generation，并把 DLSS 升级到 4.5；Interior Wall 成本降到原来的四分之一；Hammerhead 不再攻击无人驾驶的 Tadpole；Marrowbreach 和 Nibbler 行为有调整；还修复了少见的开局崩溃、联机重连位置回退，以及 Strike Armor 叠加问题。',
    fieldNotesTitle: 'Hotfix 3 后的实用笔记',
    fieldNotes: [
      {
        title: 'PC 设置攻略要重新测',
        body: 'DLSS 和 Frame Generation 是这次最明显的更新。首发周说某个图形选项缺失、无法保存或容易崩溃的攻略，都应该按这个补丁重新核对。',
      },
      {
        title: '无人 Tadpole 更安全，但不是隐身',
        body: 'Hammerhead 不再攻击无人驾驶的 Tadpole，不过官方也写明它们仍可能对 Tadpole 感兴趣。可以更放心地停放，但别把载具丢在危险区不管。',
      },
      {
        title: '怪物建议要写得更细',
        body: 'Marrowbreach 伤害更高但攻击没那么频繁。Nibbler 视野更短、移动更慢、攻击前绕玩家更久，对 Multitool 更敏感，同时伤害更高。旧怪物攻略需要改写。',
      },
    ],
    routeChecklistTitle: '安装 Hotfix 3 后先看这些',
    routeChecklist: [
      '重新测试 DLSS、Frame Generation 和图形设置保存。',
      '把 Interior Wall 成本说明更新为原来的四分之一。',
      'Tadpole 停放建议要写清 Hammerhead 不再攻击无人载具。',
      '重查 Marrowbreach 和 Nibbler 的危险提示。',
      '联机玩家遇到重连位置问题时，先确认是否已经是新补丁。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Hotfix 3 改了什么',
    routeSteps: [
      {
        title: 'DLSS 和 Frame Generation 被修复',
        body: '官方说明 Hotfix 3 修复了 DLSS 导致游戏崩溃、DLSS 设置不能正确保存、部分版本没有 Frame Generation 的问题，并把 DLSS 升级到 4.5。',
      },
      {
        title: '基地建造有一个成本变化',
        body: 'Interior Wall 成本降到原来的四分之一。范围不大，但对前期喜欢分隔房间、堆储物区的玩家很有用。',
      },
      {
        title: 'Hammerhead 和 Tadpole 行为变了',
        body: 'Hammerhead 不再攻击无人驾驶的 Tadpole，但仍可能对 Tadpole 感兴趣。补丁也修复了 Hammerhead 偶尔不被 Flare 吸引的问题。',
      },
      {
        title: 'Marrowbreach 和 Nibbler 手感变了',
        body: 'Marrowbreach 伤害提高，但攻击间隔变长。Nibbler 感知距离降低、速度变慢、攻击前绕圈更久、对 Multitool 更敏感，同时总体伤害提高。',
      },
      {
        title: '联机和崩溃问题需要复测',
        body: 'Hotfix 3 修复了少见的开局崩溃，也修复了客户端玩家重进多人游戏后回到旧位置的问题。',
      },
    ],
    tableTitle: '补丁影响表',
    tableHeaders: ['影响区域', '需要复查什么'],
    tableRows: [
      [
        'PC 性能',
        'DLSS、Frame Generation 和图形设置保存问题，不要继续照搬首发周结论。',
      ],
      ['基地建造', 'Interior Wall 成本要更新为原来的四分之一。'],
      [
        'Tadpole 安全',
        '停放建议要写清：Hammerhead 不再攻击无人 Tadpole，但仍可能注意到它。',
      ],
      [
        '怪物路线',
        'Marrowbreach 和 Nibbler 的行为、伤害都变了，危险提示需要重写。',
      ],
      ['联机体验', '客户端重连位置回退问题需要按新版本重新判断。'],
      ['护甲 Build', '如果旧建议依赖 Strike Armor 叠加 bug，就应该删掉。'],
    ],
    visualTitle: 'Hotfix 3 扫描卡',
    visualItems: [
      {
        label: 'PC',
        value: 'DLSS 4.5',
        note: '图形设置和崩溃问题被修复。',
      },
      {
        label: '载具',
        value: 'Tadpole',
        note: '无人 Tadpole 面对 Hammerhead 更安全。',
      },
      {
        label: '怪物',
        value: 'Nibbler',
        note: '更难发现玩家、更慢，但伤害更高。',
      },
    ],
    cautionTitle: '不要把 Hotfix 3 当成内容大更新',
    cautionBody:
      '这次是稳定性、设置、建造成本和怪物行为补丁。它没有确认新生态区、剧情章节或正式版 1.0 日期。路线图信息和热修信息要分开写。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 Hotfix 3 什么时候发布？',
        body: 'Unknown Worlds 在 2026 年 6 月 1 日发布了 Hotfix 3。',
      },
      {
        title: 'Hotfix 3 升级了 DLSS 吗？',
        body: '是的。官方说明 DLSS 已升级到 4.5，并修复了 DLSS 崩溃和设置保存问题。',
      },
      {
        title: 'Hotfix 3 后 Tadpole 更安全吗？',
        body: '无人驾驶的 Tadpole 更安全，因为 Hammerhead 不再攻击它们。但官方也提醒 Hammerhead 仍可能对 Tadpole 感兴趣。',
      },
      {
        title: 'Hotfix 3 改了资源位置吗？',
        body: '官方 Hotfix 3 没有列出大范围资源位置变化。需要注意的成本变化是 Interior Wall 降到原来的四分之一。',
      },
      {
        title: '为什么这次补丁对攻略重要？',
        body: '它会影响 PC 设置、基地内部建造、Tadpole 停放、怪物规避、多人重连问题和 Strike Armor Build。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2Updates, label: '路线图和更新' },
      { href: Routes.Subnautica2Hotfix2, label: 'Hotfix 2 更新内容' },
      { href: Routes.Subnautica2Vehicles, label: '载具攻略' },
      { href: Routes.Subnautica2Tadpole, label: 'Tadpole 攻略' },
      {
        href: Routes.Subnautica2NibblersMarrowbreachAfterHotfix3,
        label: 'Nibbler 和 Marrowbreach',
      },
      {
        href: Routes.Subnautica2StrikeArmorStackingAfterHotfix3,
        label: 'Strike Armor 叠加',
      },
      { href: Routes.Subnautica2CreaturesLeviathans, label: '怪物攻略' },
      { href: Routes.Subnautica2MultiplayerNotWorking, label: '联机问题修复' },
      { href: Routes.Subnautica2BaseBuilding, label: '基地建造' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 2 日核对 Unknown Worlds 官方 Hotfix 3、Hotfix 2、Early Access 路线图和 Steam 抢先体验页面。Hotfix 3 只按补丁说明处理，不当成路线图或平台公告。',
    cardKicker: '补丁扫描卡',
    cardBody:
      '面向 DLSS、Frame Generation、Interior Wall、Tadpole、怪物行为、联机重连和 Strike Armor 的 Hotfix 3 攻略页。',
    cardTypeLabel: '类型',
    cardTypeValue: '补丁攻略',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '当前补丁',
  },
};

function getCopy(locale: Locale): HotfixCopy {
  return hotfixCopy[locale] ?? hotfixCopy.en;
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
    pathname: Routes.Subnautica2Hotfix3,
  });
}

export default async function Hotfix3GuidePage({
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
      icon={WrenchIcon}
      locale={locale}
      pathname={Routes.Subnautica2Hotfix3}
      sources={sharedSources}
    />
  );
}
