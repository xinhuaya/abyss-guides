import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { Flower2Icon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type NecroleiCystCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-27';
const UPDATED_AT = '2026-05-28';

const sharedSources = [
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-strong-acid-necrolei-cyst-location/',
    label: 'PC Gamer Strong Acid and Necrolei Cyst guide',
  },
  {
    href: 'https://www.gamesradar.com/games/survival/subnautica-2-necrolei-cysts/',
    label: 'GamesRadar Necrolei Cysts guide',
  },
  {
    href: 'https://games.gg/news/subnautica-2-necrolei-cysts-location/',
    label: 'GAMES.GG Necrolei Cysts guide',
  },
  {
    href: 'https://allthings.how/strong-acid-in-subnautica-2-processor-recipes-and-necrolei-cyst-farming/',
    label: 'AllThings.How Strong Acid recipe guide',
  },
];

const necroleiCystCopy: Record<string, NecroleiCystCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Necrolei Cyst Guide - Location, Harvest, and Strong Acid Recipe',
      description:
        'A practical Subnautica 2 Necrolei Cyst guide covering Old Habitat, jelly forest route, Stilt Orbs, Multitool harvest, Processor crafting, and Strong Acid x1 from Necrolei Cyst x2.',
    },
    eyebrow: 'Subnautica 2 strong acid material',
    title: 'Subnautica 2 Necrolei Cyst Guide',
    description:
      'Necrolei Cyst is the little plant piece that turns Power Cell planning from "almost ready" into actually ready. It is not hard to harvest once you know the landmark, but it is very easy to forget until the Processor is already waiting.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current PC Gamer, GamesRadar, GAMES.GG, and AllThings.How reporting points Necrolei Cysts to the jelly or neon coral forest north to northwest of the Life Pod, near the Old Habitat route. Look for Stilt Orbs with flower-like cysts on top and cut them with the Survival Multitool or Multitool. The main Strong Acid route uses Necrolei Cyst x2 at the Processor for Strong Acid x1, while sulfur plus gold is the more expensive fallback.',
    fieldNotesTitle: 'Field notes for cyst farming',
    fieldNotes: [
      {
        title: 'Harvest in pairs',
        body: 'One cyst is almost useful, which is the worst kind of useful. Strong Acid wants pairs, so leave only after the count divides cleanly.',
      },
      {
        title: 'Treat Old Habitat as the anchor',
        body: 'The cysts sit around the route zone, not in a neat chest at the landmark. Use Old Habitat to orient yourself, then look for Stilt Orbs nearby.',
      },
      {
        title: 'Cut, count, leave',
        body: 'The route can tempt you into sightseeing. Get the cysts, count the acid bottles they become, and leave before oxygen turns the trip sloppy.',
      },
    ],
    routeChecklistTitle: 'Before leaving the cyst route',
    routeChecklist: [
      'Cyst count is even, preferably four or more.',
      'Processor is ready before the materials are called done.',
      'Strong Acid, Power Cell, and Rebreather needs are counted together.',
      'Sulfur and Gold fallback is saved for emergencies.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Necrolei Cyst route',
    routeSteps: [
      {
        title: 'Aim for the Old Habitat side of the north route',
        body: 'PC Gamer points players north from the Life Pod toward the Old Habitat, while GamesRadar and GAMES.GG describe a north or north-northwest route into a bright coral forest. Treat that as a route zone, not a single magic coordinate.',
      },
      {
        title: 'Watch for Stilt Orbs, not loose loot',
        body: 'The cysts grow on top of Stilt Orbs. Look for round growths raised on thin glowing tendrils, then check the flower-like top instead of searching the sand.',
      },
      {
        title: 'Cut the top with your tool',
        body: 'PC Gamer says to use the Survival Multitool, and GamesRadar says the Multitool harvests the flower on top of the Stilt Orb. If you only swim into the plant, you are not harvesting it.',
      },
      {
        title: 'Bring back at least four',
        body: 'Two Necrolei Cysts make one Strong Acid in the Processor. Four gives you two bottles, which is a more useful first trip for Power Cell, Rebreather, Advanced Battery, or later electronics planning.',
      },
      {
        title: 'Do the Processor craft at a powered base',
        body: 'AllThings.How notes the Processor route and lists Necrolei Cyst x2 into Strong Acid x1. If the craft is not appearing, check Processor power, recipe selection, and whether you loaded two cysts.',
      },
      {
        title: 'Use sulfur and gold only when you have to',
        body: 'PC Gamer and AllThings.How both point out the sulfur plus gold fallback, but gold has other jobs. The cyst route is usually cleaner until you move far away from the jelly forest.',
      },
    ],
    tableTitle: 'Necrolei Cyst checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      [
        'Route',
        'North or northwest from the Life Pod toward Old Habitat / jelly forest.',
      ],
      ['Plant cue', 'Stilt Orbs with flower-like cysts on top.'],
      ['Tool', 'Use Survival Multitool or Multitool on the cyst top.'],
      ['Strong Acid', 'Processor recipe: Necrolei Cyst x2 -> Strong Acid x1.'],
      ['First haul', 'Four cysts is a better first trip than only two.'],
      [
        'Fallback',
        'Sulfur + Gold can work, but costs materials with other uses.',
      ],
    ],
    visualTitle: 'Cyst harvest card',
    visualItems: [
      {
        label: 'Landmark',
        value: 'Old Habitat',
        note: 'Use it as the north-route anchor.',
      },
      {
        label: 'Plant',
        value: 'Stilt Orb',
        note: 'Harvest the flower-like top.',
      },
      {
        label: 'Recipe',
        value: '2 -> 1',
        note: 'Two cysts become one Strong Acid.',
      },
    ],
    cautionTitle: 'Do not leave with only one cyst',
    cautionBody:
      'One Necrolei Cyst looks like progress, but it does not finish the Strong Acid recipe. Grab pairs, mark the route, and leave before the deeper ravine turns a quick harvest into a recovery job.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Where do you find Necrolei Cyst in Subnautica 2?',
        body: 'Current guides point north to northwest from the Life Pod, near the Old Habitat route and jelly or neon coral forest. GAMES.GG describes roughly 350 to 450 meters north, while GamesRadar describes roughly 450m north-northwest.',
      },
      {
        title: 'How do you harvest Necrolei Cysts?',
        body: 'Find Stilt Orbs and use the Survival Multitool or Multitool on the flower-like cyst growing from the top.',
      },
      {
        title: 'How many Necrolei Cysts make Strong Acid?',
        body: 'AllThings.How lists the Processor route as Necrolei Cyst x2 for Strong Acid x1. PC Gamer also says you need two cysts per Strong Acid.',
      },
      {
        title: 'Should I use sulfur and gold instead?',
        body: 'Only if the cyst route is inconvenient. Gold has pressure from electronics and late-game power chains, so Necrolei Cyst is usually the cleaner Strong Acid path.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid Guide' },
      { href: Routes.Subnautica2Processor, label: 'Processor Guide' },
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell Guide' },
      {
        href: Routes.Subnautica2AdvancedBattery,
        label: 'Advanced Battery Guide',
      },
      {
        href: Routes.Subnautica2EntangledPowerCell,
        label: 'Entangled Power Cell Guide',
      },
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 27, 2026 against PC Gamer, GamesRadar, GAMES.GG, and AllThings.How. Subnautica 2 is in Early Access, so route distance, recipe wording, and farm behavior should be rechecked after patches.',
    cardKicker: 'Harvest material card',
    cardBody:
      'Old Habitat route, Stilt Orb harvest, Multitool cut, Necrolei Cyst x2, Strong Acid x1, Processor craft, and sulfur-gold fallback.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Strong Acid material',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Necrolei Cyst 指南 - 位置、采集与 Strong Acid 配方',
      description:
        'Subnautica 2 中文 Necrolei Cyst 指南：整理 Old Habitat、jelly forest 路线、Stilt Orb、Multitool 采集、Processor 制作，以及 Necrolei Cyst x2 合成 Strong Acid x1。',
    },
    eyebrow: 'Subnautica 2 强酸材料',
    title: 'Subnautica 2 Necrolei Cyst 指南',
    description:
      'Necrolei Cyst 是 Power Cell 路线里最容易漏掉的小材料。知道地标以后它并不难采，但很多时候你是等 Processor 都摆好了，才发现 Strong Acid 少的就是它。',
    quickLabel: '快速结论',
    quickAnswer:
      '当前 PC Gamer、GamesRadar、GAMES.GG 和 AllThings.How 的资料都把 Necrolei Cyst 指向 Life Pod 北侧到西北侧的 jelly / neon coral forest，也就是 Old Habitat 路线附近。找 Stilt Orb 顶部像花一样的 cyst，用 Survival Multitool 或 Multitool 切下来。Strong Acid 主路线是在 Processor 里用 Necrolei Cyst x2 做 Strong Acid x1；Sulfur + Gold 是更贵的备用路线。',
    fieldNotesTitle: 'Necrolei Cyst 采集笔记',
    fieldNotes: [
      {
        title: '按成对数量采',
        body: '一个 cyst 看起来快够了，但 Strong Acid 要两个一组。离开前先确认数量能整齐换成 acid。',
      },
      {
        title: 'Old Habitat 是方向锚点',
        body: 'Cyst 不会像箱子一样摆在地标旁。用 Old Habitat 定方向，再在附近找 Stilt Orb。',
      },
      {
        title: '切下、数清、回家',
        body: '这条路线很容易顺手探索过头。先拿 cyst，算清能做几瓶 Strong Acid，然后在氧气节奏变乱前离开。',
      },
    ],
    routeChecklistTitle: '离开 cyst 路线前',
    routeChecklist: [
      'Cyst 数量是偶数，最好四个以上。',
      'Processor 已经准备好，再把材料算作可用。',
      'Strong Acid、Power Cell、Rebreather 的需求一起算。',
      'Sulfur 和 Gold 备用路线只留给特殊情况。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Necrolei Cyst 路线',
    routeSteps: [
      {
        title: '先找 Old Habitat 方向',
        body: 'PC Gamer 让玩家从 Life Pod 往北，靠近 Old Habitat；GamesRadar 和 GAMES.GG 则写成北到北偏西的亮色珊瑚林。把它理解成一个路线区域，不要只盯一个死坐标。',
      },
      {
        title: '找 Stilt Orb，不是找地上的散落物',
        body: 'Necrolei Cyst 长在 Stilt Orb 顶部。看到由发光细须撑起来的圆形植物后，检查顶部像花一样的部分，不要只在沙地上扫。',
      },
      {
        title: '用工具切顶部',
        body: 'PC Gamer 写的是 Survival Multitool，GamesRadar 写的是 Multitool。重点是对着 Stilt Orb 顶部的花状 cyst 使用工具，单纯撞上去不会采集。',
      },
      {
        title: '第一次至少带四个回来',
        body: 'Processor 里 2 个 Necrolei Cyst 才能做 1 个 Strong Acid。第一次带 4 个更实用，能直接做两瓶，给 Power Cell、Rebreather、Advanced Battery 或后面的电子链留余量。',
      },
      {
        title: '回有电的基地用 Processor 做',
        body: 'AllThings.How 列出的主配方是 Necrolei Cyst x2 -> Strong Acid x1。如果配方没动，先检查 Processor 是否有电、是否选对配方，以及是不是只放了 1 个 cyst。',
      },
      {
        title: 'Sulfur + Gold 只当备用',
        body: 'PC Gamer 和 AllThings.How 都提到 Sulfur + Gold 可以做 Strong Acid，但 Gold 还会被电子件和后期供电链抢。能跑 Necrolei Cyst 路线时，通常更省。',
      },
    ],
    tableTitle: 'Necrolei Cyst 检查表',
    tableHeaders: ['需要什么', '确认什么'],
    tableRows: [
      ['路线', '从 Life Pod 往北 / 西北，靠近 Old Habitat 和 jelly forest。'],
      ['植物线索', 'Stilt Orb 顶部的花状 cyst。'],
      ['工具', '用 Survival Multitool 或 Multitool 对准顶部采集。'],
      ['Strong Acid', 'Processor 配方：Necrolei Cyst x2 -> Strong Acid x1。'],
      ['第一次带回', '4 个 cyst 比只拿 2 个更稳。'],
      ['备用路线', 'Sulfur + Gold 可用，但会占用其他重要材料。'],
    ],
    visualTitle: 'Cyst 采集卡',
    visualItems: [
      {
        label: '地标',
        value: 'Old Habitat',
        note: '作为北侧路线的锚点。',
      },
      {
        label: '植物',
        value: 'Stilt Orb',
        note: '采顶部的花状 cyst。',
      },
      {
        label: '配方',
        value: '2 -> 1',
        note: '两个 cyst 做一瓶 Strong Acid。',
      },
    ],
    cautionTitle: '不要只带一个 cyst 回家',
    cautionBody:
      '一个 Necrolei Cyst 看起来像有进展，但它做不了 Strong Acid。按两个一组采，顺手记下路线，别为了多看一眼深沟把采集变成找尸体。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Necrolei Cyst 在哪里？',
        body: '当前攻略都指向 Life Pod 北到西北方向、Old Habitat 路线附近的 jelly / neon coral forest。GAMES.GG 写约 350 到 450m 往北，GamesRadar 写约 450m 北偏西。',
      },
      {
        title: 'Necrolei Cyst 怎么采？',
        body: '找到 Stilt Orb 后，用 Survival Multitool 或 Multitool 切顶部像花一样的 cyst。',
      },
      {
        title: 'Strong Acid 需要几个 Necrolei Cyst？',
        body: 'AllThings.How 列出的 Processor 主配方是 Necrolei Cyst x2 做 Strong Acid x1。PC Gamer 也写到每瓶 Strong Acid 需要两个 cyst。',
      },
      {
        title: '要不要用 Sulfur + Gold 替代？',
        body: '只有 Necrolei Cyst 路线不方便时再考虑。Gold 会被电子件和后期供电链抢，用 cyst 做 Strong Acid 通常更干净。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2StrongAcid, label: 'Strong Acid 指南' },
      { href: Routes.Subnautica2Processor, label: 'Processor 指南' },
      { href: Routes.Subnautica2PowerCell, label: 'Power Cell 指南' },
      {
        href: Routes.Subnautica2AdvancedBattery,
        label: 'Advanced Battery 指南',
      },
      {
        href: Routes.Subnautica2EntangledPowerCell,
        label: 'Entangled Power Cell 指南',
      },
      { href: Routes.Subnautica2Rebreather, label: 'Rebreather 指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 27 日核对 PC Gamer、GamesRadar、GAMES.GG 和 AllThings.How。Subnautica 2 仍处于抢先体验阶段，路线距离、配方写法和采集刷新都可能随补丁变化。',
    cardKicker: '采集材料卡',
    cardBody:
      'Old Habitat 路线、Stilt Orb 采集、Multitool 切取、Necrolei Cyst x2、Strong Acid x1、Processor 制作和 Sulfur + Gold 备用路线。',
    cardTypeLabel: '类型',
    cardTypeValue: 'Strong Acid 材料',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = necroleiCystCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  necroleiCystCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Necrolei Cyst Guide',
      description:
        'Guide for Necrolei Cyst location, Old Habitat route, Stilt Orb harvest, Processor crafting, and Strong Acid recipe planning.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = necroleiCystCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2NecroleiCyst,
  });
}

export default async function NecroleiCystGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = necroleiCystCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={Flower2Icon}
      locale={locale}
      pathname={Routes.Subnautica2NecroleiCyst}
      sources={sharedSources}
    />
  );
}
