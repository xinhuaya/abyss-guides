import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { ShieldIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type StrikeArmorCopy = ResourceGuideCopy & {
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

const copyByLocale: Record<string, StrikeArmorCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Strike Armor Stacking After Hotfix 3 - Does the Build Still Work?',
      description:
        'A practical Subnautica 2 Strike Armor guide after Hotfix 3, covering the additive stacking fix, old build advice, module retesting, Tadpole safety, and what not to assume.',
    },
    eyebrow: 'Subnautica 2 Strike Armor guide',
    title: 'Strike Armor Stacking After Hotfix 3',
    description:
      'Hotfix 3 quietly kills one kind of overpowered armor advice. If a guide tells you to stack Strike Armor upgrades for additive damage, treat it as old until tested again.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'After Hotfix 3, do not plan around Strike Armor and its upgrades stacking damage additively. Unknown Worlds lists that stacking behavior as fixed. That does not mean Strike Armor is useless, and it does not prove every module setup is solved. It means launch-week builds that relied on additive stacking should be rewritten, especially if they promised easy damage, safe brute force routes, or no-risk creature pressure.',
    fieldNotesTitle: 'What this fix changes',
    fieldNotes: [
      {
        title: 'Old damage claims are stale',
        body: 'If the math came from stacking Strike Armor upgrades before June 1, 2026, it needs a new test. Do not copy the number into a fresh guide.',
      },
      {
        title: 'Armor is not a route plan',
        body: 'A fixed stacking bug should push players back toward normal route habits: oxygen, exits, vehicle parking, and creature timing.',
      },
      {
        title: 'Do not invent exact numbers',
        body: 'The official note says the additive stacking problem was fixed. It does not publish a full damage table, so this page avoids fake precision.',
      },
    ],
    routeChecklistTitle: 'Before trusting a Strike Armor build',
    routeChecklist: [
      'Check whether the guide mentions Hotfix 3 or June 1, 2026.',
      'Remove any advice built around additive stacking damage.',
      'Test one controlled creature encounter before using the build on a real route.',
      'Keep oxygen and exit planning separate from armor confidence.',
      'In co-op, make sure everyone is on the patched build before comparing results.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'How to update a Strike Armor setup',
    routeSteps: [
      {
        title: 'Start by checking the patch date',
        body: 'A build recorded before Hotfix 3 may still show the old behavior. Use it for visual recognition, not for final damage advice.',
      },
      {
        title: 'Strip out additive-stacking claims',
        body: 'Any line that says the armor becomes strong because multiple upgrades add damage together should be treated as broken advice after Hotfix 3.',
      },
      {
        title: 'Retest with a boring route first',
        body: 'Do not validate a build during a deep, low-oxygen run. Try a short route where you can leave, heal, and repeat the same encounter.',
      },
      {
        title: 'Rebalance around survivability',
        body: 'If the old build let you ignore creatures, the patched build should go back to safer parking, cleaner exits, and fewer greedy scans.',
      },
      {
        title: 'Update related guides',
        body: 'Strike Armor advice touches creature routes, Tadpole safety, co-op roles, and Hotfix 3 notes. Link the update instead of leaving old claims scattered around the site.',
      },
    ],
    tableTitle: 'Strike Armor advice after Hotfix 3',
    tableHeaders: ['Old advice', 'Current safer wording'],
    tableRows: [
      [
        'Stack upgrades for additive damage',
        'Do not rely on additive stacking; Hotfix 3 lists that behavior as fixed.',
      ],
      [
        'Use armor to brute force hostile routes',
        'Use armor as backup, then plan oxygen, exits, and vehicle parking normally.',
      ],
      [
        'Trust launch-week build math',
        'Retest any Strike Armor number or claim made before June 1, 2026.',
      ],
      [
        'Assume the module is useless now',
        'Avoid that jump too. The fix targets a stacking problem, not the whole idea of armor.',
      ],
      [
        'Compare results across co-op players',
        'First confirm every player is on the same patched build and similar module setup.',
      ],
    ],
    visualTitle: 'Armor retest card',
    visualItems: [
      {
        label: 'Patch',
        value: 'Hotfix 3',
        note: 'Additive stacking was fixed.',
      },
      {
        label: 'Risk',
        value: 'Old builds',
        note: 'Damage math needs retesting.',
      },
      {
        label: 'Habit',
        value: 'Route first',
        note: 'Armor backs up a plan; it is not the plan.',
      },
    ],
    cautionTitle: 'Do not replace one bad assumption with another',
    cautionBody:
      'The wrong conclusion is "Strike Armor is dead." The other wrong conclusion is "old stacking builds still work." The useful answer is narrower: the additive stacking bug was fixed, so damage-focused advice needs a fresh patched-build test.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Does Strike Armor still stack after Subnautica 2 Hotfix 3?',
        body: 'Do not rely on additive damage stacking after Hotfix 3. Unknown Worlds lists Strike Armor and upgrade additive stacking as fixed.',
      },
      {
        title: 'Does this make Strike Armor useless?',
        body: 'No. The patch note targets additive stacking behavior. It does not say Strike Armor has no value, and this page avoids guessing exact post-fix numbers.',
      },
      {
        title: 'Should old Strike Armor videos be ignored?',
        body: 'Use them for visuals and general context, but retest any damage, stacking, or build-strength claim if the video predates Hotfix 3.',
      },
      {
        title: 'What should I do before using an armor build in co-op?',
        body: 'Confirm everyone updated, then test a short encounter together before using the build on a long route.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 Changes' },
      {
        href: Routes.Subnautica2NibblersMarrowbreachAfterHotfix3,
        label: 'Nibblers and Marrowbreaches After Hotfix 3',
      },
      {
        href: Routes.Subnautica2CreaturesLeviathans,
        label: 'Creatures and Leviathans',
      },
      { href: Routes.Subnautica2Vehicles, label: 'Vehicles Guide' },
      { href: Routes.Subnautica2Coop, label: 'Co-op Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked June 2, 2026 against Unknown Worlds Hotfix 3, the Early Access roadmap, Steam, and the official gameplay trailer. The page image is original Abyss Guides art. This page explains the patch impact and does not claim a complete Strike Armor damage table.',
    cardKicker: 'Build retest card',
    cardBody:
      'A Hotfix 3 build page for Strike Armor stacking, stale damage math, creature-route confidence, and safe module retesting.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Build patch',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Patch',
    cardStatusValue: 'Hotfix 3',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Hotfix 3 后 Strike Armor 还能叠加吗 - Build 复测指南',
      description:
        'Subnautica 2 Hotfix 3 后 Strike Armor 叠加修复中文指南：旧 Build 是否失效、伤害堆叠、模块复测、Tadpole 安全和联机测试。',
    },
    eyebrow: 'Subnautica 2 Strike Armor 指南',
    title: 'Hotfix 3 后 Strike Armor 还能叠加吗',
    description:
      'Hotfix 3 悄悄修掉了一类过强的装甲说法。如果攻略还让你靠 Strike Armor 升级做加法叠伤害，先当作旧版本内容。',
    quickLabel: '快速结论',
    quickAnswer:
      'Hotfix 3 后，不要再围绕 Strike Armor 及其升级“伤害加法叠加”来做 Build。Unknown Worlds 已经把这种叠加行为列为已修复。这不代表 Strike Armor 没用了，也不代表所有模块搭配都已经有定论。它只说明首发周那些依赖加法叠伤害的 Build 要重写，尤其是承诺轻松打伤害、硬闯怪物路线、几乎无风险的说法。',
    fieldNotesTitle: '这个修复影响什么',
    fieldNotes: [
      {
        title: '旧伤害结论已经过期',
        body: '如果伤害数字来自 2026 年 6 月 1 日前的 Strike Armor 堆叠测试，就要重新测，不要直接写进新攻略。',
      },
      {
        title: '装甲不是路线计划',
        body: '叠加 Bug 修掉后，玩家更应该回到正常路线习惯：氧气、出口、载具停放和怪物节奏。',
      },
      {
        title: '不要编精确数字',
        body: '官方只说修复了加法叠加问题，没有公布完整伤害表，所以这页不会假装有精确倍率。',
      },
    ],
    routeChecklistTitle: '相信 Strike Armor Build 前先检查',
    routeChecklist: [
      '看攻略是否提到 Hotfix 3 或 2026 年 6 月 1 日。',
      '删掉依赖加法叠伤害的建议。',
      '正式跑路线前，先做一次可控的短怪物遭遇测试。',
      '氧气和出口计划不要被装甲自信替代。',
      '联机时先确认所有人都在同一个补丁版本。',
    ],
    contentsLabel: '目录',
    routeTitle: '怎么更新 Strike Armor 配装',
    routeSteps: [
      {
        title: '先看补丁日期',
        body: 'Hotfix 3 前录的 Build 可能还显示旧行为。可以用来看外观和位置感，但不要直接信最终伤害结论。',
      },
      {
        title: '删掉加法叠加说法',
        body: '凡是说多个 Strike Armor 升级会把伤害加起来、因此变得很强的内容，Hotfix 3 后都要当作失效建议。',
      },
      {
        title: '先在普通路线复测',
        body: '不要在深水、低氧、回程很长的路线里验证 Build。选一段短路线，能撤退、能回血，也方便重复同一次遭遇。',
      },
      {
        title: '重新按生存性配装',
        body: '如果旧 Build 让你无视怪物，修复后就应该重新考虑停车点、出口线和扫描贪不贪。',
      },
      {
        title: '同步更新相关页面',
        body: 'Strike Armor 会影响生物路线、Tadpole 安全、联机分工和 Hotfix 3 说明。要把更新链接接过去，不要让旧说法散在站内。',
      },
    ],
    tableTitle: 'Hotfix 3 后 Strike Armor 怎么写',
    tableHeaders: ['旧说法', '更稳的当前写法'],
    tableRows: [
      [
        '叠多个升级做加法伤害',
        '不要依赖加法叠加；Hotfix 3 已把这种行为列为修复。',
      ],
      [
        '靠装甲硬闯危险路线',
        '装甲只能兜底，氧气、出口和载具停放仍要正常规划。',
      ],
      [
        '相信首发周 Build 数字',
        '2026 年 6 月 1 日前的 Strike Armor 数字和结论都要复测。',
      ],
      [
        '直接说这个模块废了',
        '也别跳到这个结论。补丁修的是叠加问题，不是宣布装甲没价值。',
      ],
      ['联机互相比伤害结果', '先确认所有人补丁版本一致，模块设置也差不多。'],
    ],
    visualTitle: '装甲复测卡',
    visualItems: [
      {
        label: '补丁',
        value: 'Hotfix 3',
        note: '加法叠加已修复。',
      },
      {
        label: '风险',
        value: '旧 Build',
        note: '伤害数字需要复测。',
      },
      {
        label: '习惯',
        value: '路线优先',
        note: '装甲是兜底，不是路线本身。',
      },
    ],
    cautionTitle: '不要用一个错误结论替换另一个',
    cautionBody:
      '“Strike Armor 废了”是错的；“旧叠加 Build 还能照用”也不稳。更准确的结论是：加法叠加 Bug 已修复，所有伤害导向建议都要在新版本重新测试。',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Subnautica 2 Hotfix 3 后 Strike Armor 还能叠加吗？',
        body: '不要再依赖加法伤害叠加。Unknown Worlds 已经把 Strike Armor 及其升级的加法叠加列为修复项。',
      },
      {
        title: '这代表 Strike Armor 没用了吗？',
        body: '不代表。补丁针对的是加法叠加行为，不是说 Strike Armor 完全没价值。本页也不会猜测精确伤害数字。',
      },
      {
        title: '旧 Strike Armor 视频还能看吗？',
        body: '可以看画面和大概思路，但伤害、叠加、Build 强度这些结论，如果早于 Hotfix 3，都要重测。',
      },
      {
        title: '联机使用装甲 Build 前该做什么？',
        body: '先确认所有人都更新到同一版本，再一起做一次短遭遇测试，不要直接拿长路线冒险。',
      },
    ],
    readNextTitle: '继续看',
    related: [
      { href: Routes.Subnautica2Hotfix3, label: 'Hotfix 3 更新内容' },
      {
        href: Routes.Subnautica2NibblersMarrowbreachAfterHotfix3,
        label: 'Hotfix 3 后 Nibbler 和 Marrowbreach',
      },
      {
        href: Routes.Subnautica2CreaturesLeviathans,
        label: '生物和 Leviathan',
      },
      { href: Routes.Subnautica2Vehicles, label: '载具指南' },
      { href: Routes.Subnautica2Coop, label: '联机指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 6 月 2 日核对 Unknown Worlds Hotfix 3、Early Access 路线图、Steam 页面和官方实机预告。本页图片为 Abyss Guides 原创图。本页只解释补丁影响，不假装拥有完整 Strike Armor 伤害表。',
    cardKicker: 'Build 复测卡',
    cardBody:
      '围绕 Hotfix 3 后 Strike Armor 叠加、旧伤害数字、生物路线自信和模块复测写的 Build 页面。',
    cardTypeLabel: '类型',
    cardTypeValue: 'Build 补丁',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '补丁',
    cardStatusValue: 'Hotfix 3',
  },
};

function getCopy(locale: Locale): StrikeArmorCopy {
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
    pathname: Routes.Subnautica2StrikeArmorStackingAfterHotfix3,
  });
}

export default async function StrikeArmorStackingAfterHotfix3Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCopy(locale);

  return (
    <LocalizedResourceGuidePage
      copy={{ ...copy, publishedAt: PUBLISHED_AT, updatedAt: UPDATED_AT }}
      icon={ShieldIcon}
      locale={locale}
      pathname={Routes.Subnautica2StrikeArmorStackingAfterHotfix3}
      sources={sharedSources}
    />
  );
}
