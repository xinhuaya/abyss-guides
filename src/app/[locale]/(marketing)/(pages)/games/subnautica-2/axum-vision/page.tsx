import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { EyeIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type AxumVisionCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-27';
const UPDATED_AT = '2026-05-29';

const sharedSources = [
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-angel-comb-heat-tolerance-adaptation/',
    label: 'PC Gamer Angel Comb and Axum Vision update',
  },
  {
    href: 'https://subnautica2.guide/wikis/axum-vision',
    label: 'Subnautica 2 Guide Axum Vision wiki',
  },
  {
    href: 'https://subnautica2.guide/wikis/karakorum-power-plant',
    label: 'Subnautica 2 Guide Karakorum Power Plant wiki',
  },
  {
    href: 'https://games.gg/subnautica-2/guides/subnautica-2-all-angel-comb-locations-and-adaptations/',
    label: 'GAMES.GG Angel Comb adaptations guide',
  },
  {
    href: 'https://www.pcgamesn.com/subnautica-2/angel-comb-adaptations-locations',
    label: 'PCGamesN Angel Comb adaptations locations',
  },
];

const axumVisionCopy: Record<string, AxumVisionCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Axum Vision Guide - Second Angel Comb, Bloom Nodes, and Power Plant Consoles',
      description:
        'A practical Subnautica 2 Axum Vision guide covering the second Angel Comb, Feedback Resonator, Tadpole Depth Module, three Bloom Nodes, Axum glyphs, polarized screens, and Karakorum Power Plant progression.',
    },
    eyebrow: 'Subnautica 2 adaptation route',
    title: 'Subnautica 2 Axum Vision Guide',
    description:
      'Axum Vision is the adaptation that turns the Karakorum Power Plant from a sealed alien landmark into something you can actually operate. The route is not hard because of one fight. It is hard because the game asks you to clear several Bloom Nodes without losing the thread.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Axum Vision comes from cleansing the later Angel Comb in the Alien Ruins / Karakorum area. Current sources agree that you need Feedback Resonator to destroy Bloom Cankers from a distance, and PC Gamer also calls out Tadpole Depth Module because the route drops below 250m. Subnautica 2 Guide lists three Bloom Nodes around the Angel Comb: a western node near Observatory Island Caves around 190m, a southern node southwest around 300m, and an eastern node near Karakorum / Metal Farms around 300m. Once cleared, Axum Vision lets you read Axum glyphs and use the Karakorum Power Plant control screens.',
    fieldNotesTitle: 'Field notes for Axum Vision',
    fieldNotes: [
      {
        title: 'This is a multi-stop route',
        body: 'Axum Vision is not one flower and done. Treat the three Bloom Nodes as a loop that returns to the central Angel Comb, then to Karakorum controls.',
      },
      {
        title: 'Feedback Resonator changes the risk',
        body: 'The route expects ranged Bloom Canker clearing. If you try to brute-force it with close movement, the oxygen and panic cost climb fast.',
      },
      {
        title: 'Use the unlock immediately',
        body: 'The point of Axum Vision is reading glyphs and control screens. After the adaptation, go back to the Power Plant path while the route is still fresh.',
      },
    ],
    routeChecklistTitle: 'Before starting Axum Vision',
    routeChecklist: [
      'Bring Feedback Resonator, Tadpole Depth Module, Rebreather, and markers.',
      'Clear western, southern, and eastern Bloom Nodes before returning central.',
      'Watch water-color changes as progress clues, not exact completion proof.',
      'Return to Karakorum Power Plant controls after the adaptation unlocks.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Axum Vision route plan',
    routeSteps: [
      {
        title: 'Do the Heat Tolerance Angel Comb first',
        body: 'The earlier Angel Comb page is your warm-up. Axum Vision sits much later, near the Alien Ruins and Karakorum route, and assumes you already understand Bloom clearing, oxygen planning, and route marking.',
      },
      {
        title: 'Upgrade before chasing the big flower',
        body: 'PC Gamer says this Angel Comb needs Feedback Resonator and Tadpole Depth Module. The Feedback Resonator matters because close-range blooms can shut before you finish them; the depth module matters because the route goes under 250m.',
      },
      {
        title: 'Follow the purple tendrils, not your memory',
        body: 'The main Angel Comb branches into several purple-tube routes. Follow the tendrils out, clear the connected Bloom Node, then return. If you try to freestyle the whole area, every canyon wall starts to look the same.',
      },
      {
        title: 'Clear the three Bloom Nodes',
        body: 'Subnautica 2 Guide currently lists western, southern, and eastern Bloom Nodes. PC Gamer describes one under the Alien Ruins Research Base, another on a side branch, and a trickier one through a wreck route. Treat the labels as route clues, not exact GPS promises.',
      },
      {
        title: 'Watch for water-color changes',
        body: 'Subnautica 2 Guide notes that clearing Bloom Cankers shifts the infected gray water back toward normal color. That is a better progress sign than guessing whether you hit every growth in the dark.',
      },
      {
        title: 'Return to the central Angel Comb',
        body: 'After the connected nodes are clean, go back to the main Angel Comb and finish the core. PC Gamer says this unlocks Axum Vision, the adaptation that lets you interact with alien devices and start the Power Plant repair route above.',
      },
      {
        title: 'Use Axum Vision immediately at Karakorum',
        body: 'Subnautica 2 Guide says Axum Vision lets you read Axum Radial A glyphs and view the polarized screens in the Upper and Lower Generator Control rooms. In plain terms: it is the key that makes the Observatory chain readable.',
      },
    ],
    tableTitle: 'Axum Vision checklist',
    tableHeaders: ['Need', 'Why it matters'],
    tableRows: [
      [
        'Heat Tolerance progress',
        'You should already be past the first Angel Comb route.',
      ],
      [
        'Feedback Resonator',
        'Destroys Bloom Cankers from range before they close.',
      ],
      [
        'Tadpole Depth Module',
        'The route drops below comfortable early depth.',
      ],
      [
        'Rebreather and oxygen tank',
        'Three nodes plus a central return can eat air fast.',
      ],
      ['Beacon markers', 'Mark the central comb, wreck route, and exit line.'],
      [
        'Conduit Crystal planning',
        'PCGamesN flags an upgrade need near this route.',
      ],
      [
        'Power Plant follow-up',
        'Axum Vision is most useful once you go to the generator controls.',
      ],
    ],
    visualTitle: 'Adaptation card',
    visualItems: [
      {
        label: 'Tool',
        value: 'Feedback',
        note: 'Use the Feedback Resonator for Bloom Cankers.',
      },
      {
        label: 'Nodes',
        value: '3',
        note: 'Western, southern, and eastern Bloom routes.',
      },
      {
        label: 'Unlock',
        value: 'Axum',
        note: 'Read glyphs and use Power Plant screens.',
      },
    ],
    cautionTitle: 'Do not leave before checking the central comb',
    cautionBody:
      'The route can feel finished after the third side node because the water clears and the pressure drops. Go back to the main Angel Comb before leaving. Otherwise you will reach the Power Plant and wonder why the consoles still feel dead.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you get Axum Vision in Subnautica 2?',
        body: 'Clear the later Angel Comb in the Alien Ruins / Karakorum area by destroying Bloom Cankers on the connected Bloom Nodes, then return to the central Angel Comb to claim the adaptation.',
      },
      {
        title: 'What tool do you need for Axum Vision?',
        body: 'Current sources point to Feedback Resonator for the Bloom Cankers. PC Gamer also recommends the Tadpole Depth Module because the route goes below 250m.',
      },
      {
        title: 'How many Bloom Nodes are tied to Axum Vision?',
        body: 'Subnautica 2 Guide currently lists three Bloom Nodes around the Angel Comb: western, southern, and eastern. PC Gamer also describes three outer sections before the main comb.',
      },
      {
        title: 'What does Axum Vision do?',
        body: 'It lets you read Axum glyphs and view polarized screens, including the control-room screens used in the Karakorum Power Plant repair and Observatory route.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2AngelComb, label: 'Angel Comb Guide' },
      {
        href: Routes.Subnautica2FeedbackResonator,
        label: 'Feedback Resonator Guide',
      },
      {
        href: Routes.Subnautica2BioscannerBiomods,
        label: 'Bioscanner and Biomods',
      },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        label: 'Tadpole Depth Module Guide',
      },
      {
        href: Routes.Subnautica2KarakorumPowerPlant,
        label: 'Karakorum Power Plant Route',
      },
      {
        href: Routes.Subnautica2PowerPlantObservatory,
        label: 'Power Plant Observatory Guide',
      },
      {
        href: Routes.Subnautica2ConduitCrystal,
        label: 'Conduit Crystal Guide',
      },
      { href: Routes.Subnautica2HeatTolerance, label: 'Heat Tolerance Guide' },
      { href: Routes.Subnautica2BloomBiofilm, label: 'Bloom Biofilm Guide' },
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2 Guide' },
      { href: Routes.Subnautica2Biomes, label: 'Biomes Guide' },
      { href: Routes.Subnautica2Map, label: 'Map Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 27, 2026 against PC Gamer, Subnautica 2 Guide, GAMES.GG, and PCGamesN. Subnautica 2 is in Early Access, so Bloom Node locations, adaptation order, depth requirements, and Power Plant console behavior should be rechecked after patches.',
    cardKicker: 'Adaptation route card',
    cardBody:
      'Second Angel Comb route, Feedback Resonator, Tadpole depth prep, three Bloom Nodes, Axum glyphs, polarized screens, and Karakorum Power Plant follow-up.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Adaptation guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Axum Vision 指南 - 第二个 Angel Comb、Bloom Nodes 和 Power Plant 控制台',
      description:
        'Subnautica 2 中文 Axum Vision 指南：第二个 Angel Comb、Feedback Resonator、Tadpole Depth Module、三个 Bloom Nodes、Axum glyphs、polarized screens 和 Karakorum Power Plant 进度。',
    },
    eyebrow: 'Subnautica 2 适应能力路线',
    title: 'Subnautica 2 Axum Vision 指南',
    description:
      'Axum Vision 是让 Karakorum Power Plant 从“看得见但读不懂”的外星建筑，变成可以操作的关键适应能力。这条路线难点不在单个战斗，而在你要清掉好几个 Bloom Node，还不能把路线记乱。',
    quickLabel: '快速结论',
    quickAnswer:
      'Axum Vision 来自 Alien Ruins / Karakorum 区域后期的 Angel Comb。当前资料基本一致：你需要 Feedback Resonator 远距离破坏 Bloom Cankers；PC Gamer 还强调 Tadpole Depth Module，因为路线会下到 250m 以下。Subnautica 2 Guide 列出 Angel Comb 周围三个 Bloom Nodes：西侧节点在 Observatory Island Caves 附近约 190m 深，南侧节点在西南约 300m 深，东侧节点靠近 Karakorum / Metal Farms，约 300m 深。清理完成后，Axum Vision 可以让你读取 Axum glyphs，并看懂 Karakorum Power Plant 控制室的 polarized screens。',
    fieldNotesTitle: 'Axum Vision 路线笔记',
    fieldNotes: [
      {
        title: '这是一条多点路线',
        body: 'Axum Vision 不是清一朵花就结束。三个 Bloom Node 要当成一个回到中央 Angel Comb、再接 Karakorum 控制室的路线环。',
      },
      {
        title: 'Feedback Resonator 会改变风险',
        body: '这条路线默认你能远距离清 Bloom Canker。如果硬靠近身位移，氧气压力和慌乱成本都会上升。',
      },
      {
        title: '拿到后立刻使用',
        body: 'Axum Vision 的价值是读 glyph 和控制屏。适应能力到手后趁路线还记得，直接回 Power Plant 方向推进。',
      },
    ],
    routeChecklistTitle: '开始 Axum Vision 前',
    routeChecklist: [
      '带 Feedback Resonator、Tadpole Depth Module、Rebreather 和路线标记。',
      '先清西、南、东三个 Bloom Node，再回中央。',
      '水色变化可以当进度线索，但不要当唯一完成证明。',
      '适应能力解锁后回 Karakorum Power Plant 控制室推进。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Axum Vision 路线规划',
    routeSteps: [
      {
        title: '先做 Heat Tolerance 的 Angel Comb',
        body: '前一个 Angel Comb 算是热身。Axum Vision 在更后面的 Alien Ruins 和 Karakorum 路线上，默认你已经懂 Bloom 清理、氧气规划和路线标记。',
      },
      {
        title: '追大花之前先升级',
        body: 'PC Gamer 写到这条 Angel Comb 需要 Feedback Resonator 和 Tadpole Depth Module。Feedback Resonator 是为了远距离打 Bloom Cankers，深度模块则是因为路线会低于 250m。',
      },
      {
        title: '跟紫色 tendrils 走，不要凭记忆乱游',
        body: '主 Angel Comb 会分出几条紫色管线。沿着管线出去，清掉对应 Bloom Node，再回中心。硬靠记忆乱扫，几面峡谷墙很快就会长得一模一样。',
      },
      {
        title: '清掉三个 Bloom Nodes',
        body: 'Subnautica 2 Guide 当前列出西侧、南侧和东侧三个 Bloom Nodes。PC Gamer 的描述是 Research Base 下方、侧面分支、以及穿过 wreck 的更麻烦路线。把这些当作路线线索，而不是永远不变的 GPS 点。',
      },
      {
        title: '看水色变化判断进度',
        body: 'Subnautica 2 Guide 提到，Bloom Cankers 清掉后，灰色感染水域会逐渐恢复正常水色。比起在暗处猜自己有没有漏打，这个提示更可靠。',
      },
      {
        title: '回中心 Angel Comb 领取适应能力',
        body: '外圈节点清完后，回到主 Angel Comb 处理核心。PC Gamer 写到这里会解锁 Axum Vision，也就是后续操作外星装置和修 Power Plant 的关键。',
      },
      {
        title: '马上把 Axum Vision 用到 Karakorum',
        body: 'Subnautica 2 Guide 写到 Axum Vision 可以读取 Axum Radial A glyphs，也能看 Upper / Lower Generator Control 房间的 polarized screens。简单说，它让 Observatory 链路终于看得懂。',
      },
    ],
    tableTitle: 'Axum Vision 检查表',
    tableHeaders: ['需要什么', '为什么重要'],
    tableRows: [
      ['Heat Tolerance 进度', '最好已经完成第一个 Angel Comb 路线。'],
      ['Feedback Resonator', '远距离打 Bloom Cankers，避免它们合上。'],
      ['Tadpole Depth Module', '路线深度已经超过前期舒适范围。'],
      ['Rebreather 和更好的气瓶', '三个节点加中心返回，很吃氧气。'],
      ['Beacon 标记', '标中心花、wreck 路线和出口线。'],
      ['Conduit Crystal 规划', 'PCGamesN 提到这条路线附近会牵到升级需求。'],
      [
        'Power Plant 后续',
        'Axum Vision 最重要的用处是后面看懂 generator controls。',
      ],
    ],
    visualTitle: '适应能力卡',
    visualItems: [
      {
        label: '工具',
        value: 'Feedback',
        note: '用 Feedback Resonator 打 Bloom Cankers。',
      },
      {
        label: '节点',
        value: '3',
        note: '西侧、南侧、东侧三条 Bloom 路线。',
      },
      {
        label: '解锁',
        value: 'Axum',
        note: '读取 glyphs，并操作 Power Plant 屏幕。',
      },
    ],
    cautionTitle: '清完外圈后别忘了回中心',
    cautionBody:
      '第三个侧面节点清完后，水色变化会让人以为任务结束了。离开前一定回主 Angel Comb。否则你游到 Power Plant，才发现控制台还是读不明白。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Axum Vision 怎么获得？',
        body: '清理 Alien Ruins / Karakorum 区域后期 Angel Comb 周围的 Bloom Cankers 和 Bloom Nodes，然后回中心 Angel Comb 领取适应能力。',
      },
      {
        title: 'Axum Vision 需要什么工具？',
        body: '当前资料指向 Feedback Resonator，用来远距离打 Bloom Cankers。PC Gamer 还建议 Tadpole Depth Module，因为路线会低于 250m。',
      },
      {
        title: 'Axum Vision 路线有几个 Bloom Nodes？',
        body: 'Subnautica 2 Guide 当前列出三个：西侧、南侧和东侧。PC Gamer 也把它描述成外圈三个区域，加最后的主 Angel Comb。',
      },
      {
        title: 'Axum Vision 有什么用？',
        body: '它能读取 Axum glyphs，并看见 polarized screens，包括 Karakorum Power Plant 修复和 Observatory 路线中用到的控制室屏幕。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2AngelComb, label: 'Angel Comb 指南' },
      {
        href: Routes.Subnautica2FeedbackResonator,
        label: 'Feedback Resonator 指南',
      },
      {
        href: Routes.Subnautica2BioscannerBiomods,
        label: 'Bioscanner 和 Biomods',
      },
      {
        href: Routes.Subnautica2TadpoleDepthModule,
        label: 'Tadpole Depth Module 指南',
      },
      {
        href: Routes.Subnautica2KarakorumPowerPlant,
        label: 'Karakorum Power Plant 路线',
      },
      {
        href: Routes.Subnautica2PowerPlantObservatory,
        label: 'Power Plant Observatory 指南',
      },
      { href: Routes.Subnautica2ConduitCrystal, label: 'Conduit Crystal 指南' },
      { href: Routes.Subnautica2HeatTolerance, label: 'Heat Tolerance 指南' },
      { href: Routes.Subnautica2BloomBiofilm, label: 'Bloom Biofilm 指南' },
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather 指南' },
      { href: Routes.Subnautica2AirTank, label: '气瓶和氧气指南' },
      { href: Routes.Subnautica2Biomes, label: 'Biomes 指南' },
      { href: Routes.Subnautica2Map, label: '地图指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 27 日核对 PC Gamer、Subnautica 2 Guide、GAMES.GG 和 PCGamesN。Subnautica 2 仍处于抢先体验阶段，Bloom Node 位置、适应能力顺序、深度要求和 Power Plant 控制台行为都可能随补丁变化。',
    cardKicker: '适应能力路线卡',
    cardBody:
      '第二个 Angel Comb、Feedback Resonator、Tadpole 深度准备、三个 Bloom Nodes、Axum glyphs、polarized screens 和 Karakorum Power Plant 后续。',
    cardTypeLabel: '类型',
    cardTypeValue: '适应能力指南',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = axumVisionCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  axumVisionCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Axum Vision Guide',
      description:
        'Guide for Axum Vision in Subnautica 2, including the second Angel Comb, Feedback Resonator, Tadpole Depth Module, Bloom Nodes, Axum glyphs, and Karakorum Power Plant screens.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = axumVisionCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2AxumVision,
  });
}

export default async function AxumVisionGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = axumVisionCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={EyeIcon}
      locale={locale}
      pathname={Routes.Subnautica2AxumVision}
      sources={sharedSources}
    />
  );
}
