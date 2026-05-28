import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { ShieldCheckIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type PlasteelIngotCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-29';

const sharedSources = [
  {
    href: 'https://subnautica2.gg/blueprints/plasteel-ingot',
    label: 'Subnautica2.gg Plasteel Ingot blueprint',
  },
  {
    href: 'https://www.gamesradar.com/games/survival/subnautica-2-ingots/',
    label: 'GamesRadar Subnautica 2 ingots guide',
  },
  {
    href: 'https://www.pcgamer.com/games/survival-crafting/subnautica-2-lithium-location/',
    label: 'PC Gamer Lithium location guide',
  },
];

const plasteelIngotCopy: Record<string, PlasteelIngotCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Plasteel Ingot Guide - Recipe, Lithium Route, and Processor Craft',
      description:
        'A practical Subnautica 2 Plasteel Ingot guide covering Titanium x2, Lithium x1, Processor crafting, Lithium route prep, High Capacity Air Tank, and vehicle-chain uses.',
    },
    eyebrow: 'Subnautica 2 processed material',
    title: 'Subnautica 2 Plasteel Ingot Guide',
    description:
      'Plasteel Ingot is the point where “I found some Lithium” turns into a real plan. Do not process it just because the recipe lights up. It is better saved for oxygen, station, or vehicle progress you can name.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'Current Subnautica2.gg data lists Plasteel Ingot as a Processor craft that makes Plasteel Ingot x1 from Titanium x2 and Lithium x1 after picking up Lithium. GamesRadar reports the same 2x Titanium plus 1x Lithium recipe and notes that ingots need a Processor. Subnautica2.gg currently ties Plasteel Ingot to High Capacity Air Tank, Fabrication Station, Scout Ray Chassis, and Vehicle Fabricator uses.',
    fieldNotesTitle: 'Field notes for Plasteel timing',
    fieldNotes: [
      {
        title: 'Lithium is the gate, not Titanium',
        body: 'Titanium is easy to replace. Lithium usually asks for a real route. Do not turn the first piece into Plasteel unless the next upgrade is already chosen.',
      },
      {
        title: 'Processor access changes the plan',
        body: 'If the Processor is not ready, the ingot is still only an intention. Stage Titanium and Lithium together, then craft once the station and target recipe are both clear.',
      },
      {
        title: 'Keep one air-tank path protected',
        body: 'High Capacity Air Tank competes with other Plasteel uses. If oxygen progression is next, that ingot should not drift into vehicle or station experiments.',
      },
    ],
    routeChecklistTitle: 'Before making Plasteel Ingot',
    routeChecklist: [
      'Confirm Processor access before converting Lithium.',
      'Name the target recipe before crafting the ingot.',
      'Protect High Capacity Air Tank materials if oxygen is the next bottleneck.',
      'Keep raw Titanium nearby for base work after the ingot craft.',
    ],
    contentsLabel: 'Contents',
    routeTitle: 'Plasteel Ingot planning route',
    routeSteps: [
      {
        title: 'Unlock the recipe through Lithium first',
        body: 'Subnautica2.gg says Plasteel Ingot unlocks after you pick up Lithium. If the Processor does not show it yet, solve the Lithium pickup before blaming the station.',
      },
      {
        title: 'Bring Titanium, but do not empty your base pile',
        body: 'The recipe is only two Titanium, but Titanium is still feeding storage, base pieces, and other ingots. Keep the first Plasteel batch separate from your general building stock.',
      },
      {
        title: 'Use the Processor for the craft',
        body: 'Both current Subnautica2.gg and GamesRadar data point to Processor crafting for ingots. If you are still missing Processor, finish that base utility before planning Plasteel at scale.',
      },
      {
        title: 'Spend the first ingot on a visible goal',
        body: 'High Capacity Air Tank is the clean early reason because more oxygen makes every later Lithium or deep-material route less tense. Vehicle and station pieces come after your survival margin feels boring.',
      },
      {
        title: 'Check the Lithium route before farming',
        body: 'PC Gamer points early Lithium hunters toward The Great Jaw route with Sonic Resonator and oxygen prep. Treat that first run as an unlock trip, then decide whether you can repeat it safely.',
      },
      {
        title: 'Re-check after patches',
        body: 'Subnautica 2 is still Early Access. Recipe counts, station requirements, and vehicle-chain uses can move, so the PDA wins if it disagrees with any public page.',
      },
    ],
    tableTitle: 'Plasteel Ingot checklist',
    tableHeaders: ['Need', 'What to confirm'],
    tableRows: [
      ['Titanium x2', 'Current public recipe count for one Plasteel Ingot.'],
      [
        'Lithium x1',
        'Pickup unlocks the blueprint in current Subnautica2.gg data.',
      ],
      ['Processor', 'Current ingot station in Subnautica2.gg and GamesRadar.'],
      [
        'Oxygen goal',
        'High Capacity Air Tank is the first clean use to check.',
      ],
      [
        'Vehicle chain',
        'Scout Ray Chassis and Vehicle Fabricator are listed uses.',
      ],
      [
        'Patch check',
        'Confirm the recipe in the PDA after Early Access updates.',
      ],
    ],
    visualTitle: 'Plasteel route card',
    visualItems: [
      {
        label: 'Input',
        value: '2 Ti + 1 Li',
        note: 'Small recipe, big opportunity cost.',
      },
      {
        label: 'Station',
        value: 'Processor',
        note: 'Do not look for this craft in the basic Fabricator.',
      },
      {
        label: 'First spend',
        value: 'Oxygen',
        note: 'High Capacity Air Tank usually pays back fastest.',
      },
    ],
    cautionTitle: 'Lithium is the real bottleneck, not Titanium',
    cautionBody:
      'The Plasteel recipe looks cheap until you remember how awkward early Lithium can be. Make one for a known upgrade, then keep the next Lithium loose until the next blueprint is visible.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'How do you make Plasteel Ingot in Subnautica 2?',
        body: 'Current Subnautica2.gg data lists Titanium x2 and Lithium x1 at the Processor. GamesRadar reports the same material count for Plasteel Ingot.',
      },
      {
        title: 'How do you unlock Plasteel Ingot?',
        body: 'Subnautica2.gg says the blueprint unlocks after picking up Lithium. If the recipe is missing, get Lithium first and then check the Processor again.',
      },
      {
        title: 'What is Plasteel Ingot used for?',
        body: 'Current Subnautica2.gg data lists High Capacity Air Tank, Fabrication Station, Scout Ray Chassis, and Vehicle Fabricator as uses.',
      },
      {
        title: 'Should I craft Plasteel as soon as I find Lithium?',
        body: 'Usually no. Make the first ingot for a named oxygen, station, or vehicle goal. Finished Plasteel is less flexible than loose Lithium while you are still scouting recipes.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2Lithium, label: 'Lithium Location Guide' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium Location Guide' },
      { href: Routes.Subnautica2Processor, label: 'Processor Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2 Guide' },
      {
        href: Routes.Subnautica2VehicleFabricator,
        label: 'Vehicle Fabricator Guide',
      },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
      { href: Routes.Subnautica2Crafting, label: 'Crafting Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 26, 2026 against Subnautica2.gg, GamesRadar, and PC Gamer. Subnautica 2 is in Early Access, so Processor station, Lithium route reliability, and listed uses can change after patches.',
    cardKicker: 'Material chain card',
    cardBody:
      'Titanium x2, Lithium x1, Processor crafting, first oxygen spend, and vehicle-chain planning.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Processed material',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title:
        'Subnautica 2 Plasteel Ingot 指南 - 配方、Lithium 路线和 Processor 制作',
      description:
        'Subnautica 2 中文 Plasteel Ingot 指南：整理 Titanium x2、Lithium x1、Processor 制作、Lithium 路线准备、High Capacity Air Tank 和载具链用途。',
    },
    eyebrow: 'Subnautica 2 加工材料',
    title: 'Subnautica 2 Plasteel Ingot 指南',
    description:
      'Plasteel Ingot 是“我拿到 Lithium 了”之后真正要开始规划的地方。别因为配方亮了就马上加工，最好先想清楚它要服务氧气、工作站，还是载具链。',
    quickLabel: '快速结论',
    quickAnswer:
      'Subnautica2.gg 当前把 Plasteel Ingot 写成 Processor 配方：Titanium x2 + Lithium x1，捡到 Lithium 后解锁，产出 Plasteel Ingot x1。GamesRadar 的 ingot 指南也写到 2x Titanium + 1x Lithium，并说明 ingot 需要 Processor。Subnautica2.gg 当前还把它关联到 High Capacity Air Tank、Fabrication Station、Scout Ray Chassis 和 Vehicle Fabricator。',
    fieldNotesTitle: 'Plasteel Ingot 时机笔记',
    fieldNotes: [
      {
        title: '真正卡你的是 Lithium',
        body: 'Titanium 比较好补，Lithium 通常需要一条认真路线。第一块 Lithium 不要急着压成 Plasteel，先确认下一个升级目标。',
      },
      {
        title: 'Processor 到位后再动手',
        body: 'Processor 没准备好时，ingot 只是一个计划。Titanium 和 Lithium 可以先放一起，等工作站和目标配方都明确后再加工。',
      },
      {
        title: '保护一条气瓶升级线',
        body: 'High Capacity Air Tank 会和其它 Plasteel 用途抢材料。如果接下来卡的是氧气，这个 ingot 不要被载具或工作站实验顺手花掉。',
      },
    ],
    routeChecklistTitle: '制作 Plasteel Ingot 前',
    routeChecklist: [
      '转换 Lithium 前先确认 Processor 已经能用。',
      '先说清楚 ingot 要给哪个配方，再开始制作。',
      '如果氧气是下一卡点，先保护 High Capacity Air Tank 材料。',
      '压 ingot 后旁边仍然保留一些原 Titanium 给基地工程。',
    ],
    contentsLabel: '目录',
    routeTitle: 'Plasteel Ingot 规划路线',
    routeSteps: [
      {
        title: '先用 Lithium 解锁配方',
        body: 'Subnautica2.gg 写到，Plasteel Ingot 会在捡到 Lithium 后解锁。如果 Processor 里还看不到，先解决第一次 Lithium 拾取。',
      },
      {
        title: '准备 Titanium，但别掏空基地库存',
        body: '配方只要 2 个 Titanium，可 Titanium 还要给储物、基地部件和其它 ingot 用。第一批 Plasteel 最好单独留出来，不要和普通建材混在一起花。',
      },
      {
        title: '在 Processor 制作',
        body: 'Subnautica2.gg 和 GamesRadar 当前都指向 Processor。还没有 Processor 的话，先把这个基地工具做出来，再谈批量 Plasteel。',
      },
      {
        title: '第一块花在看得见的目标上',
        body: 'High Capacity Air Tank 是很干净的早期用途，因为更多氧气会让后面的 Lithium、深水材料和载具路线都轻松很多。工作站和载具件可以放在生存余量稳定以后。',
      },
      {
        title: '先确认 Lithium 路线能重复',
        body: 'PC Gamer 把早期 Lithium 指向 The Great Jaw 路线，并建议准备 Sonic Resonator 和氧气余量。第一次更像解锁跑，不要一上来就当成稳定农场。',
      },
      {
        title: '更新后重新看 PDA',
        body: 'Subnautica 2 仍然是抢先体验。配方数量、制作站和载具链用途都可能变，公开资料和游戏内 PDA 冲突时，以 PDA 为准。',
      },
    ],
    tableTitle: 'Plasteel Ingot 检查表',
    tableHeaders: ['需要什么', '确认什么'],
    tableRows: [
      ['Titanium x2', '当前公开资料里一块 Plasteel Ingot 的材料数量。'],
      ['Lithium x1', 'Subnautica2.gg 当前写到捡起 Lithium 后解锁蓝图。'],
      ['Processor', 'Subnautica2.gg 和 GamesRadar 当前都指向这个制作站。'],
      ['氧气目标', 'High Capacity Air Tank 是最值得先看的用途。'],
      ['载具链', 'Scout Ray Chassis 和 Vehicle Fabricator 被列为用途。'],
      ['补丁检查', '抢先体验更新后，回到 PDA 重新确认配方。'],
    ],
    visualTitle: 'Plasteel 路线卡',
    visualItems: [
      {
        label: '材料',
        value: '2 Ti + 1 Li',
        note: '配方不大，但机会成本很高。',
      },
      {
        label: '设备',
        value: 'Processor',
        note: '不要在基础 Fabricator 里找这个加工。',
      },
      {
        label: '先花给',
        value: '氧气',
        note: 'High Capacity Air Tank 往往最先回本。',
      },
    ],
    cautionTitle: '真正卡人的通常是 Lithium，不是 Titanium',
    cautionBody:
      'Plasteel 看起来便宜，是因为 Titanium 数量少。但早期 Lithium 路线并不舒服。先为明确升级做一块，下一块 Lithium 最好保持原料状态，等新蓝图出来再决定。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Plasteel Ingot 怎么做？',
        body: 'Subnautica2.gg 当前写的是 Processor 中用 Titanium x2 和 Lithium x1 制作。GamesRadar 也写到同样的材料数量。',
      },
      {
        title: 'Plasteel Ingot 怎么解锁？',
        body: 'Subnautica2.gg 写到捡起 Lithium 后解锁。如果你看不到配方，先去拿第一块 Lithium，再回 Processor 检查。',
      },
      {
        title: 'Plasteel Ingot 有什么用？',
        body: 'Subnautica2.gg 当前列出的用途包括 High Capacity Air Tank、Fabrication Station、Scout Ray Chassis 和 Vehicle Fabricator。',
      },
      {
        title: '找到 Lithium 以后要立刻加工 Plasteel 吗？',
        body: '通常不用。第一块最好对应明确的氧气、工作站或载具目标。还在探配方时，原始 Lithium 比成品 Plasteel 更灵活。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2Lithium, label: 'Lithium 位置指南' },
      { href: Routes.Subnautica2Titanium, label: 'Titanium 位置指南' },
      { href: Routes.Subnautica2Processor, label: 'Processor 指南' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank 和氧气指南' },
      {
        href: Routes.Subnautica2VehicleFabricator,
        label: 'Vehicle Fabricator 指南',
      },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
      { href: Routes.Subnautica2Crafting, label: '制作指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 26 日核对 Subnautica2.gg、GamesRadar 和 PC Gamer。Subnautica 2 仍处于抢先体验阶段，Processor、Lithium 路线稳定性和用途列表都可能随补丁调整。',
    cardKicker: '材料链卡片',
    cardBody:
      'Titanium x2、Lithium x1、Processor 加工、第一块优先给氧气，以及载具链规划。',
    cardTypeLabel: '类型',
    cardTypeValue: '加工材料',
    cardVerifiedLabel: '核对时间',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = plasteelIngotCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  plasteelIngotCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Plasteel Ingot Guide',
      description:
        'Guide for Plasteel Ingot recipe, Titanium x2, Lithium x1, Processor crafting, High Capacity Air Tank, and vehicle-chain uses.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = plasteelIngotCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2PlasteelIngot,
  });
}

export default async function PlasteelIngotGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = plasteelIngotCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={ShieldCheckIcon}
      locale={locale}
      pathname={Routes.Subnautica2PlasteelIngot}
      sources={sharedSources}
    />
  );
}
