import {
  LocalizedResourceGuidePage,
  type ResourceGuideCopy,
} from '@/components/abyss/localized-resource-guide-page';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import { BatteryChargingIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

type BatteryTerminalCopy = ResourceGuideCopy & {
  metadata: {
    title: string;
    description: string;
  };
};

const PUBLISHED_AT = '2026-05-26';
const UPDATED_AT = '2026-05-26';

const sharedSources = [
  {
    href: 'https://games.gg/subnautica-2/guides/subnautica-2-how-to-unlock-battery-terminal/',
    label: 'GAMES.GG Battery Terminal guide',
  },
  {
    href: 'https://subnautica2.gg/blueprints/battery-terminal',
    label: 'Subnautica2.gg Battery Terminal blueprint',
  },
  {
    href: 'https://subnautica2hub.com/blueprints/battery-terminal',
    label: 'Subnautica2Hub Battery Terminal blueprint',
  },
];

const batteryTerminalCopy: Record<string, BatteryTerminalCopy> = {
  en: {
    metadata: {
      title:
        'Subnautica 2 Battery Terminal Guide - Fragments, Recipe, and Base Power',
      description:
        'A practical Subnautica 2 Battery Terminal guide covering Old Habitat fragments, Habitat Builder placement, Titanium, Quartz, Copper Wire, six-battery charging, and base power safety.',
    },
    eyebrow: 'Subnautica 2 base power',
    title: 'Subnautica 2 Battery Terminal Guide',
    description:
      'Battery Terminal is the moment your base stops eating fresh Copper every time a tool runs dry. Scan it, build it on a powered wall, and your early kit starts feeling much less disposable.',
    quickLabel: 'Quick answer',
    quickAnswer:
      'GAMES.GG places Battery Terminal fragments inside the Old Habitat area, roughly 380 meters north of the Lifepod, and says you scan two fragments to unlock the blueprint. Current blueprint pages list the build as a Habitat Builder deployable using Titanium x2, Quartz x2, and Copper Wire x1. GAMES.GG says the terminal can charge up to six Basic or Advanced Batteries at once. Build it only after your base has steady power, because charging dead batteries is not free.',
    contentsLabel: 'Contents',
    routeTitle: 'Battery Terminal route',
    routeSteps: [
      {
        title: 'Bring a Scanner and enough oxygen',
        body: 'Treat this as a proper wreck-side scan run, not a casual pickup. If your Air Tank is still basic, pack food, mark the exit, and turn back before the last breath becomes the plan.',
      },
      {
        title: 'Sweep Old Habitat walls and compartments',
        body: 'GAMES.GG points players toward Old Habitat for Battery Terminal fragments. Move slowly around interior walls, side rooms, and exterior debris instead of swimming straight through the main doorway.',
      },
      {
        title: 'Scan two fragments before leaving',
        body: 'The guide data currently points to a two-fragment unlock. If you only have one, make another pass before going home so the trip turns into a build, not a note to return later.',
      },
      {
        title: 'Build the power chain first',
        body: 'Battery Terminal is useful only inside a powered base. Put Habitat Builder, Titanium, Quartz, Copper Wire, and reliable solar or generator power ahead of the terminal itself.',
      },
      {
        title: 'Use it as a rotation shelf',
        body: 'Keep one working battery in each tool and rotate drained batteries through the terminal. Do not craft new Basic Batteries every time the Scanner or Repair Tool gets tired.',
      },
    ],
    tableTitle: 'Battery Terminal checklist',
    tableHeaders: ['Need', 'Why it matters'],
    tableRows: [
      ['Scanner', 'Required to unlock the fragments around Old Habitat.'],
      ['Two fragments', 'Current guide data points to a two-fragment unlock.'],
      ['Habitat Builder', 'The terminal is placed as a base deployable.'],
      ['Titanium x2', 'The cheap base-building material in the recipe.'],
      ['Quartz x2', 'Easy to forget if you only planned electronics parts.'],
      [
        'Copper Wire x1',
        'The processed ingredient that competes with base electronics.',
      ],
      [
        'Powered base',
        'A charger without power is just a wall decoration with ambition.',
      ],
    ],
    visualTitle: 'Power loop',
    visualItems: [
      {
        label: 'Scan',
        value: '2',
        note: 'Old Habitat fragments first.',
      },
      {
        label: 'Build',
        value: 'Base',
        note: 'Place it after the room has power.',
      },
      {
        label: 'Rotate',
        value: '6 slots',
        note: 'GAMES.GG currently says it charges up to six batteries.',
      },
    ],
    cautionTitle: 'Do not build it before the base can feed it',
    cautionBody:
      'Battery Terminal solves battery waste, but it adds another steady power draw. If your first base already flickers at night, fix generation before filling the charger with empty cells.',
    faqTitle: 'FAQ',
    faqs: [
      {
        title: 'Where do you find Battery Terminal fragments in Subnautica 2?',
        body: 'GAMES.GG currently points players to fragments around the Old Habitat area, north of the first Life Pod route. Search wall panels, compartments, and surrounding debris carefully.',
      },
      {
        title: 'How many Battery Terminal fragments do you need?',
        body: 'Current guide data says Battery Terminal needs two scanned fragments to unlock.',
      },
      {
        title: 'What does Battery Terminal cost to build?',
        body: 'Current blueprint pages list the terminal as a Habitat Builder deployable using Titanium x2, Quartz x2, and Copper Wire x1. Check your in-game blueprint after each Early Access patch.',
      },
      {
        title: 'Is Battery Terminal worth building early?',
        body: 'Yes, once you have a powered base. It saves Copper by letting you recharge used tool batteries instead of crafting new Basic Batteries too often.',
      },
    ],
    readNextTitle: 'Read next',
    related: [
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery Guide' },
      { href: Routes.Subnautica2CopperWire, label: 'Copper Wire Guide' },
      { href: Routes.Subnautica2Quartz, label: 'Quartz Location Guide' },
      {
        href: Routes.Subnautica2HabitatBuilder,
        label: 'Habitat Builder Guide',
      },
      { href: Routes.Subnautica2BaseBuilding, label: 'Base Building Guide' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner Guide' },
      { href: Routes.Subnautica2AirTank, label: 'Air Tank and O2 Guide' },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker Guide' },
      { href: Routes.Subnautica2Resources, label: 'Resources Guide' },
    ],
    sourcesTitle: 'Source note',
    sourceBody:
      'Checked May 26, 2026 against GAMES.GG, Subnautica2.gg, and Subnautica2Hub. Early Access fragment locations, recipes, and capacity labels can change, so the page avoids overclaiming exact coordinates and keeps the Old Habitat route as the practical search area.',
    cardKicker: 'Battery card',
    cardBody:
      'Old Habitat fragment sweep, two-scan unlock, Habitat Builder placement, Titanium, Quartz, Copper Wire, battery rotation, and base power safety.',
    cardTypeLabel: 'Type',
    cardTypeValue: 'Base utility guide',
    cardVerifiedLabel: 'Checked',
    cardStatusLabel: 'Status',
    cardStatusValue: 'Early Access',
  },
  zh: {
    metadata: {
      title: 'Subnautica 2 Battery Terminal 指南 - 碎片位置、配方和基地供电',
      description:
        'Subnautica 2 中文 Battery Terminal 指南：整理 Old Habitat 碎片路线、Habitat Builder 放置、Titanium、Quartz、Copper Wire、6 块电池充电容量，以及基地供电注意事项。',
    },
    eyebrow: 'Subnautica 2 基地供电',
    title: 'Subnautica 2 Battery Terminal 指南',
    description:
      'Battery Terminal 做出来以后，工具没电就不必一直浪费 Copper 重新做电池了。先扫蓝图，再把它装到有电的基地墙上，前期工具链会顺很多。',
    quickLabel: '快速结论',
    quickAnswer:
      'GAMES.GG 把 Battery Terminal 碎片路线指向 Old Habitat 内部，大约在 Lifepod 北侧 380 米，并写到需要扫描两个碎片来解锁。当前蓝图页面把它列为 Habitat Builder 可放置设施，配方是 Titanium x2、Quartz x2、Copper Wire x1。GAMES.GG 还写到它最多可同时给 6 块 Basic 或 Advanced Battery 充电。注意：它需要基地供电，别在基地电力还不稳定时急着塞满空电池。',
    contentsLabel: '目录',
    routeTitle: 'Battery Terminal 路线',
    routeSteps: [
      {
        title: '先带 Scanner 和足够氧气',
        body: '把它当成一次正式的残骸/旧基地扫描路线，不要当成路过捡材料。Air Tank 还低时，提前标出口，氧气不舒服就先回头。',
      },
      {
        title: '仔细扫 Old Habitat 的墙面和房间',
        body: 'GAMES.GG 目前把 Battery Terminal 碎片指向 Old Habitat。不要只从主入口穿过去，墙面、侧房间、外部残骸都要慢慢看一遍。',
      },
      {
        title: '扫满两个碎片再回家',
        body: '当前攻略资料指向两个碎片解锁。只扫到一个就回去，很容易变成“下次还得再跑一趟”。',
      },
      {
        title: '先把基地供电链做好',
        body: 'Battery Terminal 只有在有电的基地里才有意义。Habitat Builder、Titanium、Quartz、Copper Wire 和稳定发电要排在它前面。',
      },
      {
        title: '把它当成电池轮换架',
        body: '每个工具里留一块正在用的电池，快没电的放进 Battery Terminal 轮换。不要 Scanner 或 Repair Tool 一没电就重新做 Basic Battery。',
      },
    ],
    tableTitle: 'Battery Terminal 检查表',
    tableHeaders: ['需要什么', '为什么重要'],
    tableRows: [
      ['Scanner', 'Old Habitat 附近的碎片需要扫描。'],
      ['两个碎片', '当前攻略资料指向两个碎片解锁。'],
      ['Habitat Builder', 'Battery Terminal 是基地内放置设施。'],
      ['Titanium x2', '配方里最基础的基地建造材料。'],
      ['Quartz x2', '只盯着电子材料时很容易忘掉。'],
      ['Copper Wire x1', '会和基地电子材料抢同一批 Copper。'],
      ['稳定供电', '没有电的充电器，只是一块很有理想的墙面装饰。'],
    ],
    visualTitle: '供电循环',
    visualItems: [
      {
        label: '扫描',
        value: '2',
        note: '先跑 Old Habitat 碎片。',
      },
      {
        label: '建造',
        value: '基地',
        note: '确认房间有电再放。',
      },
      {
        label: '轮换',
        value: '6 格',
        note: 'GAMES.GG 当前写到最多可同时充 6 块电池。',
      },
    ],
    cautionTitle: '不要在基地缺电时硬上充电器',
    cautionBody:
      'Battery Terminal 能减少电池浪费，但它也会吃基地电力。如果第一座基地晚上已经闪电，先补发电，再把一排空电池塞进去。',
    faqTitle: '常见问题',
    faqs: [
      {
        title: 'Subnautica 2 Battery Terminal 碎片在哪？',
        body: 'GAMES.GG 当前把路线指向 Old Habitat 附近，也就是第一个 Life Pod 北侧探索线。建议检查墙面、房间隔板和周围残骸。',
      },
      {
        title: 'Battery Terminal 需要几个碎片？',
        body: '当前攻略资料写的是扫描两个碎片解锁。',
      },
      {
        title: 'Battery Terminal 配方是什么？',
        body: '当前蓝图页面把它列为 Habitat Builder 可放置设施，配方是 Titanium x2、Quartz x2、Copper Wire x1。抢先体验期间配方可能改，进游戏后仍要看一次蓝图。',
      },
      {
        title: 'Battery Terminal 值得前期做吗？',
        body: '值得，但前提是你已经有稳定供电的基地。它能让工具电池反复充电，减少 Copper 被 Basic Battery 消耗掉。',
      },
    ],
    readNextTitle: '继续阅读',
    related: [
      { href: Routes.Subnautica2BasicBattery, label: 'Basic Battery 指南' },
      { href: Routes.Subnautica2CopperWire, label: 'Copper Wire 指南' },
      { href: Routes.Subnautica2Quartz, label: 'Quartz 位置指南' },
      { href: Routes.Subnautica2HabitatBuilder, label: 'Habitat Builder 指南' },
      { href: Routes.Subnautica2BaseBuilding, label: '基地建造指南' },
      { href: Routes.Subnautica2Scanner, label: 'Scanner 指南' },
      { href: Routes.Subnautica2AirTank, label: '气瓶和氧气指南' },
      { href: Routes.Subnautica2Wakemaker, label: 'Wakemaker 指南' },
      { href: Routes.Subnautica2Resources, label: '资源指南' },
    ],
    sourcesTitle: '来源说明',
    sourceBody:
      '2026 年 5 月 26 日核对 GAMES.GG、Subnautica2.gg 和 Subnautica2Hub。抢先体验阶段碎片位置、配方和容量描述都可能调整，所以页面把重点放在 Old Habitat 搜索路线和当前可验证信息上，不硬写可疑精确坐标。',
    cardKicker: '电池卡片',
    cardBody:
      'Old Habitat 碎片路线、两个碎片解锁、Habitat Builder 放置、Titanium、Quartz、Copper Wire、电池轮换与基地供电安全。',
    cardTypeLabel: '类型',
    cardTypeValue: '基地工具指南',
    cardVerifiedLabel: '核对',
    cardStatusLabel: '状态',
    cardStatusValue: '抢先体验',
  },
};

const fallbackCopy = batteryTerminalCopy.en;

for (const locale of ['ja', 'de', 'fr', 'pt-BR', 'es-419', 'ko', 'ru']) {
  batteryTerminalCopy[locale] = {
    ...fallbackCopy,
    metadata: {
      title: 'Subnautica 2 Battery Terminal Guide',
      description:
        'Guide for Battery Terminal fragments, Old Habitat route, Habitat Builder placement, Titanium, Quartz, Copper Wire, six-battery charging, and base power safety.',
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = batteryTerminalCopy[locale] ?? fallbackCopy;

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    locale,
    pathname: Routes.Subnautica2BatteryTerminal,
  });
}

export default async function BatteryTerminalGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = batteryTerminalCopy[locale] ?? fallbackCopy;

  return (
    <LocalizedResourceGuidePage
      copy={{
        ...copy,
        publishedAt: PUBLISHED_AT,
        updatedAt: UPDATED_AT,
      }}
      icon={BatteryChargingIcon}
      locale={locale}
      pathname={Routes.Subnautica2BatteryTerminal}
      sources={sharedSources}
    />
  );
}
