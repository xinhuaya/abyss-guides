import Container from '@/components/layout/container';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { getBaseUrl, getUrlWithLocale } from '@/lib/urls';
import { Routes } from '@/routes';
import {
  AlertTriangleIcon,
  CompassIcon,
  FactoryIcon,
  GaugeIcon,
  ShieldAlertIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const PUBLISHED_AT = '2026-05-24';
const UPDATED_AT = '2026-05-29';

const zhRouteSteps = [
  {
    title: '别把 Troilite 当成前期随手捡的矿',
    body: '现有路线信息把 Troilite 指向 Alien Ruins Research Base 附近的后期危险区域。出发前先准备 Tadpole、氧气余量、治疗物品和维修工具。',
  },
  {
    title: '用 Alien Ruins Research Base 做参照点',
    body: 'PC Gamer 把路线描述为从 Alien Ruins Research Base 往东北方向走，目标是和 Metal Farm 有关的深层绿色水池区域。',
  },
  {
    title: '先想清楚深度和返程',
    body: '这条路线接近升级后 Tadpole 的安全边界，不适合临时起意去跑。把它当成一次远征，而不是一次顺手采矿。',
  },
  {
    title: '能扫描就扫描，能标记就标记',
    body: '如果你已经到达 Metal Farm 区域，优先扫描有价值的结构，并记录回来的路。这个材料真正值钱的地方，是路线可以重复。',
  },
  {
    title: '把 Entangled Power Cell 的材料单独留出来',
    body: 'Entangled Power Cell 当前会用到 Troilite、Conduit Crystal、Strong Acid 和 Gold Ingot。先留一块标记好的 Troilite，再考虑把其他材料做成 Mangalloy。',
  },
];

const zhDangerRows = [
  ['深度压力', '路线很深，通常需要提前升级载具并规划返程。'],
  [
    '掠食者',
    'PC Gamer 提到这条路线附近有掠食者和 leviathan 威胁，所以维修和治疗补给不能省。',
  ],
  [
    '材料稀缺',
    '首发周攻略普遍把 Troilite 写得很稀有，随手做错配方会拖慢后续进度。',
  ],
  [
    '电力配方冲突',
    'Entangled Power Cell 会和 Mangalloy、Metal Farm 的材料规划抢同一批资源。',
  ],
  [
    '补丁变化',
    'Unknown Worlds 在 Hotfix 2 里增加了后期区域的 Troilite resource areas，旧攻略的稀缺描述需要重新核对。',
  ],
];

const zhRules = [
  '在把 Troilite 全部做成 Mangalloy Ingot 前，至少留一块给 Metal Farm。',
  '如果 Entangled Power Cell 已经解锁或快解锁，再额外留一块标记好的 Troilite。',
  '没有在当前版本亲自核对前，不要把精确坐标写死。',
  '把这条路线和 Crafting guide 连起来，玩家才知道 Troilite 为什么重要。',
  '每次资源流、制作配方或 Early Access 大更新后，都要重新检查这页。',
];

const zhFieldNotes = [
  {
    title: '第一块样本先用来换信息',
    body: '第一次成功拿到 Troilite 后，不要急着制作。先确认路线、标记返程，再决定 Metal Farm 和 Entangled Power Cell 哪个更优先。',
  },
  {
    title: '旧的稀缺说法必须看日期',
    body: 'Hotfix 2 增加了 late-game Troilite resource areas。如果某篇攻略说只有一个很窄的来源，先看它是不是在 2026 年 5 月 28 日之后重新测过。',
  },
  {
    title: '状态不好就别硬跑',
    body: 'Troilite 路线容易把小失误叠成大麻烦：深度、怪物、电量、氧气都会一起压过来。拿到一半信息也可以先回家。',
  },
];

const zhFaqs = [
  {
    title: 'Subnautica 2 的 Troilite 在哪里找？',
    body: '现有路线信息指向 Alien Ruins Research Base 东北方向的深层后期区域，靠近绿色水池和 Metal Farm 路线。精确位置要当成补丁敏感信息处理。',
  },
  {
    title: 'Troilite 有什么用？',
    body: 'Troilite 目前和 Mangalloy、Metal Farm 复制流程，以及 Entangled Power Cell 配方都有关系。',
  },
  {
    title: '第一块 Troilite 要马上做成 Mangalloy 吗？',
    body: '通常不要急。至少留一块给 Metal Farm，如果你下一步要做 Entangled Power Cell，再多留一块。',
  },
  {
    title: 'Hotfix 2 改了 Troilite 吗？',
    body: 'Unknown Worlds 表示 Hotfix 2 增加了 late-game region 的 Troilite resource areas，所以首发周的稀缺说法需要重新核对。',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const isZh = locale === 'zh';

  return constructMetadata({
    title: isZh
      ? 'Subnautica 2 Troilite 在哪里找 - 稀有材料路线'
      : 'Where to Find Troilite in Subnautica 2 - Rare Material Guide',
    description: isZh
      ? 'Subnautica 2 Troilite 获取路线：后期区域、Metal Farm、Mangalloy、Entangled Power Cell 和 Hotfix 2 后的注意点。'
      : 'Find Troilite in Subnautica 2 with late-game route notes, Entangled Power Cell planning, Mangalloy use cases, Metal Farm warnings, and Hotfix 2 caveats.',
    locale,
    pathname: Routes.Subnautica2Troilite,
  });
}

const routeSteps = [
  {
    title: 'Do not treat Troilite like a casual early resource',
    body: 'Current reporting places Troilite in a dangerous late-route area near the Alien Ruins Research Base, so prepare the Tadpole, oxygen, healing, and repair supplies first.',
  },
  {
    title: 'Use the Alien Ruins Research Base as the anchor',
    body: 'PC Gamer reports the route as northeast of the Alien Ruins Research Base, toward a deep green-pool area associated with Metal Farms.',
  },
  {
    title: 'Watch your depth and return plan',
    body: 'Reported route depth reaches roughly the limit of an upgraded Tadpole, so this should be planned like an expedition rather than a quick material run.',
  },
  {
    title: 'Scan and mark what you can',
    body: 'If you reach the Metal Farm area, prioritize scanning valuable structures and noting the route. The best guide value comes from repeatability.',
  },
  {
    title: 'Keep the Entangled Power Cell route separate',
    body: 'Entangled Power Cell currently lists Troilite alongside Conduit Crystal, Strong Acid, and Gold Ingot. Save one tagged Troilite before converting the rest into Mangalloy.',
  },
];

const dangerRows = [
  [
    'Depth pressure',
    'The reported route goes very deep and may require upgraded vehicle planning.',
  ],
  [
    'Predators',
    'PC Gamer notes predators and a leviathan threat around the route, so repair and healing supplies matter.',
  ],
  [
    'Resource scarcity',
    'Launch-week reports describe Troilite as rare enough that careless crafting can hurt progression.',
  ],
  [
    'Power crafting',
    'Entangled Power Cell planning can compete with Mangalloy and Metal Farm use.',
  ],
  [
    'Patch drift',
    'Unknown Worlds added more Troilite resource areas in Hotfix 2, so older scarcity notes may need rechecking.',
  ],
];

const rules = [
  'Keep at least one Troilite available for Metal Farm use before converting everything into Mangalloy Ingots.',
  'Keep a second tagged Troilite if Entangled Power Cell is already unlocked or close.',
  'Do not publish exact coordinates unless checked in the current build.',
  'Pair this route with the Crafting guide so players understand why Troilite matters.',
  'Recheck this page after every resource-flow patch or major Early Access update.',
];

const fieldNotes = [
  {
    title: 'Spend the first sample on information',
    body: 'Before crafting, use the first successful Troilite run to confirm the route, mark the return path, and decide whether Metal Farm or Entangled Power Cell matters more.',
  },
  {
    title: 'Old scarcity advice needs a date',
    body: 'Hotfix 2 added more late-game Troilite resource areas. If a guide says there is only one tight source, check whether it was retested after May 28, 2026.',
  },
  {
    title: 'Do not run the route tired',
    body: 'Troilite sits in the kind of route where small mistakes stack up: depth, predators, power, and panic. Bank partial progress instead of forcing one heroic dive.',
  },
];

const faqs = [
  {
    title: 'Where do you find Troilite in Subnautica 2?',
    body: 'Current reporting points toward the deep late-route region northeast of the Alien Ruins Research Base, near green-pool and Metal Farm routes. Treat exact coordinates as patch-sensitive.',
  },
  {
    title: 'What is Troilite used for?',
    body: 'Troilite is tied to Mangalloy planning, Metal Farm duplication setup, and the Entangled Power Cell recipe in current public data.',
  },
  {
    title: 'Should you turn Troilite into Mangalloy right away?',
    body: 'Usually no. Keep at least one Troilite for Metal Farm use, and keep another if Entangled Power Cell is part of your next power route.',
  },
  {
    title: 'Did Hotfix 2 change Troilite?',
    body: 'Unknown Worlds said Hotfix 2 added more Troilite resource areas in the late-game region, so launch-week scarcity notes should be rechecked after patches.',
  },
];

export default async function TroiliteGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const isZh = locale === 'zh';
  const activeRouteSteps = isZh ? zhRouteSteps : routeSteps;
  const activeDangerRows = isZh ? zhDangerRows : dangerRows;
  const activeRules = isZh ? zhRules : rules;
  const activeFieldNotes = isZh ? zhFieldNotes : fieldNotes;
  const activeFaqs = isZh ? zhFaqs : faqs;
  const pageCopy = isZh
    ? {
        articleDescription:
          'Troilite 后期路线、Metal Farm、Mangalloy、Entangled Power Cell 和 Hotfix 2 资源变化说明。',
        breadcrumbName: 'Subnautica 2 Troilite 在哪里找',
        eyebrow: '稀有材料路线',
        title: 'Subnautica 2 Troilite 在哪里找',
        description:
          'Troilite 是后期路线材料，会影响 Mangalloy、Metal Farm 和 Entangled Power Cell。这里用保守写法整理路线，避免 Early Access 补丁变化误导你。',
        quickLabel: '快速答案',
        quickAnswer:
          '目前 Troilite 路线主要指向 Alien Ruins Research Base 东北方向的深层后期区域，也就是和 Metal Farm 有关的绿色水池路线。先留一块 Troilite 给 Metal Farm，如果下一步要做 Entangled Power Cell，再多留一块，然后再考虑把剩下的做成 Mangalloy Ingot。',
        routeTitle: 'Troilite 路线笔记',
        riskTitle: '为什么 Troilite 不能随便浪费',
        riskHeader: '风险',
        planningHeader: '规划建议',
        metalFarmTitle: 'Metal Farm 规则',
        metalFarmBody:
          '目前最稳的建议很简单：先留一块 Troilite，再考虑大量制作。PC Gamer 报道称 Metal Farm 需要先放入一种金属，才能复制这种金属；所以一块保留下来的 Troilite，往往比一次匆忙的 Mangalloy 制作更值钱。如果 Entangled Power Cell 已经解锁，也给它单独留一块。',
        faqTitle: '常见问题',
        rulesTitle: '这页的更新规则',
        fieldNotesTitle: '实用笔记',
        hotfixTitle: 'Hotfix 2 改变了资源判断',
        hotfixBody:
          'Unknown Worlds 在 Hotfix 2 里增加了 late-game region 的 Troilite resource areas。这对玩家是好事，但也意味着首发周那种“特别稀缺”的说法不能永久照搬。',
        readNextTitle: '继续看',
        related: [
          ['Mineralized Clinker 指南', Routes.Subnautica2MineralizedClinker],
          ['Hotfix 2 后的 Troilite', Routes.Subnautica2TroiliteAfterHotfix2],
          ['Entangled Power Cell 指南', Routes.Subnautica2EntangledPowerCell],
          ['Conduit Crystal 指南', Routes.Subnautica2ConduitCrystal],
          ['Karakorum Power Plant 路线', Routes.Subnautica2KarakorumPowerPlant],
          ['Troilite 卡进度修复', Routes.Subnautica2TroiliteSoftlock],
          ['制作系统指南', Routes.Subnautica2Crafting],
          ['资源总表', Routes.Subnautica2Resources],
          ['Silver 获取路线', Routes.Subnautica2Silver],
        ],
        sourceTitle: '来源说明',
        sourceBody:
          '2026 年 5 月 29 日复查：对照 Unknown Worlds Hotfix 2、当前 Troilite 路线报道和 Entangled Power Cell 配方资料。每次 Early Access 大补丁后都要重查。',
        sourceLabels: [
          'Unknown Worlds Hotfix 2',
          'PC Gamer Troilite 路线',
          'Subnautica2.gg Entangled Power Cell',
        ],
        routeMindsetTitle: '路线心态',
        routeMindsetBody:
          'Troilite 首先是规划问题，其次才是采集问题。最好的路线，是你能活着回来、能重复、也能讲给队友听的路线。',
      }
    : {
        articleDescription:
          'Late-route Troilite notes for Metal Farm, Mangalloy, Entangled Power Cell, and Hotfix 2 patch changes.',
        breadcrumbName: 'Where to Find Troilite in Subnautica 2',
        eyebrow: 'Rare material route',
        title: 'Where to Find Troilite in Subnautica 2',
        description:
          'Troilite is a late-route material tied to Mangalloy and Metal Farm planning. This page keeps the advice conservative because Early Access resource balance is already changing.',
        quickLabel: 'Quick answer',
        quickAnswer:
          'Current Troilite reporting points players toward the deep late-game region northeast of the Alien Ruins Research Base, in a green-pool area connected to Metal Farms. Save at least one Troilite for Metal Farm duplication and one more if Entangled Power Cell is your next power craft before converting the rest into Mangalloy Ingots.',
        routeTitle: 'Troilite route notes',
        riskTitle: 'Why Troilite is risky to waste',
        riskHeader: 'Risk',
        planningHeader: 'Planning note',
        metalFarmTitle: 'Metal Farm rule',
        metalFarmBody:
          'The safest current advice is simple: keep one Troilite before crafting aggressively. PC Gamer reports that Metal Farms can duplicate a metal only after you insert one of that metal first, which makes one saved Troilite more valuable than one rushed Mangalloy craft. If Entangled Power Cell is already unlocked, tag a second Troilite for that recipe too.',
        faqTitle: 'FAQ',
        rulesTitle: 'Publishing rules for this page',
        fieldNotesTitle: 'Field notes',
        hotfixTitle: 'Hotfix 2 changed the resource picture',
        hotfixBody:
          'Unknown Worlds added more Troilite resource areas in the late-game region in Hotfix 2. That is good for players, but it also means old launch-week scarcity wording should be treated as patch-sensitive rather than permanent.',
        readNextTitle: 'Read next',
        related: [
          ['Mineralized Clinker Guide', Routes.Subnautica2MineralizedClinker],
          ['Troilite After Hotfix 2', Routes.Subnautica2TroiliteAfterHotfix2],
          ['Entangled Power Cell Guide', Routes.Subnautica2EntangledPowerCell],
          ['Conduit Crystal Guide', Routes.Subnautica2ConduitCrystal],
          [
            'Karakorum Power Plant Route',
            Routes.Subnautica2KarakorumPowerPlant,
          ],
          ['Troilite Softlock Fix', Routes.Subnautica2TroiliteSoftlock],
          ['Crafting Guide', Routes.Subnautica2Crafting],
          ['Resources Guide', Routes.Subnautica2Resources],
          ['Silver Location', Routes.Subnautica2Silver],
        ],
        sourceTitle: 'Source note',
        sourceBody:
          'Checked May 29, 2026 against Unknown Worlds Hotfix 2, current Troilite route reporting, and Entangled Power Cell recipe data. Recheck after every major Early Access patch.',
        sourceLabels: [
          'Unknown Worlds Hotfix 2',
          'PC Gamer Troilite route',
          'Subnautica2.gg Entangled Power Cell',
        ],
        routeMindsetTitle: 'Route mindset',
        routeMindsetBody:
          'Troilite is a planning problem first and a harvesting problem second. The best route is the one you can survive, repeat, and explain to a co-op teammate.',
      };
  const baseUrl = getBaseUrl().replace(/\/$/, '');
  const pageUrl = getUrlWithLocale(Routes.Subnautica2Troilite, locale).replace(
    /\/$/,
    ''
  );
  const hubUrl = getUrlWithLocale(Routes.Subnautica2, locale).replace(
    /\/$/,
    ''
  );
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: pageCopy.title,
      description: pageCopy.articleDescription,
      url: pageUrl,
      datePublished: PUBLISHED_AT,
      dateModified: UPDATED_AT,
      inLanguage: locale,
      author: {
        '@type': 'Organization',
        name: 'Abyss Guides',
        url: baseUrl,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Abyss Guides',
        url: baseUrl,
      },
      mainEntityOfPage: pageUrl,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Abyss Guides',
          item: baseUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Subnautica 2',
          item: hubUrl,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: pageCopy.breadcrumbName,
          item: pageUrl,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: activeFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.title,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.body,
        },
      })),
    },
  ];

  return (
    <main className="min-h-screen bg-[#031314] text-[#dff8f0]">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <section className="relative overflow-hidden border-b border-cyan-200/10">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(106,240,224,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(106,240,224,.15) 1px, transparent 1px)',
            backgroundSize: '42px 42px',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_76%_20%,rgba(64,224,208,.18),transparent_34%),radial-gradient(circle_at_18%_78%,rgba(240,139,79,.13),transparent_30%),linear-gradient(180deg,rgba(3,19,20,.16),rgba(1,9,12,.96))]"
        />
        <Container className="relative px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
              <ShieldAlertIcon className="size-4" />
              {pageCopy.eyebrow}
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-[#e8fff9] md:text-6xl">
              {pageCopy.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#a9c9c3]">
              {pageCopy.description}
            </p>
          </div>
        </Container>
      </section>

      <Container className="px-4 py-12">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="space-y-8">
            <section className="border border-cyan-200/15 bg-[#082226] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f08b4f]">
                {pageCopy.quickLabel}
              </p>
              <p className="mt-4 text-lg leading-8 text-[#d7eee8]">
                {pageCopy.quickAnswer}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                {pageCopy.routeTitle}
              </h2>
              <div className="mt-5 grid gap-4">
                {activeRouteSteps.map((step) => (
                  <section
                    key={step.title}
                    className="border border-cyan-200/12 bg-[#071f23] p-5"
                  >
                    <div className="flex items-center gap-2 text-[#78ead7]">
                      <CompassIcon className="size-4" />
                      <h3 className="font-semibold">{step.title}</h3>
                    </div>
                    <p className="mt-3 leading-7 text-[#abc8c3]">{step.body}</p>
                  </section>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                {pageCopy.riskTitle}
              </h2>
              <div className="mt-5 overflow-hidden border border-cyan-200/12">
                <table className="w-full border-collapse bg-[#071f23] text-left text-sm">
                  <thead className="bg-[#0b2d33] text-[#dff8f0]">
                    <tr>
                      <th className="p-4 font-semibold">
                        {pageCopy.riskHeader}
                      </th>
                      <th className="p-4 font-semibold">
                        {pageCopy.planningHeader}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeDangerRows.map(([risk, note]) => (
                      <tr key={risk} className="border-t border-cyan-200/10">
                        <td className="p-4 align-top font-medium text-[#78ead7]">
                          {risk}
                        </td>
                        <td className="p-4 leading-6 text-[#abc8c3]">{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="border border-cyan-200/12 bg-[#082226] p-6">
              <div className="flex items-center gap-3">
                <FactoryIcon className="size-6 text-[#f08b4f]" />
                <h2 className="text-3xl font-semibold text-[#effffb]">
                  {pageCopy.metalFarmTitle}
                </h2>
              </div>
              <p className="mt-4 leading-8 text-[#abc8c3]">
                {pageCopy.metalFarmBody}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                {pageCopy.faqTitle}
              </h2>
              <div className="mt-5 grid gap-4">
                {activeFaqs.map((faq) => (
                  <section
                    key={faq.title}
                    className="border border-cyan-200/12 bg-[#071f23] p-5"
                  >
                    <h3 className="font-semibold text-[#78ead7]">
                      {faq.title}
                    </h3>
                    <p className="mt-3 leading-7 text-[#abc8c3]">{faq.body}</p>
                  </section>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                {pageCopy.rulesTitle}
              </h2>
              <ul className="mt-5 grid gap-3">
                {activeRules.map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-[#f08b4f] bg-[#071f23] px-4 py-3 text-sm leading-6 text-[#d1e8e2]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#effffb]">
                {pageCopy.fieldNotesTitle}
              </h2>
              <div className="mt-5 grid gap-4">
                {activeFieldNotes.map((note) => (
                  <section
                    key={note.title}
                    className="border border-cyan-200/12 bg-[#071f23] p-5"
                  >
                    <h3 className="font-semibold text-[#78ead7]">
                      {note.title}
                    </h3>
                    <p className="mt-3 leading-7 text-[#abc8c3]">{note.body}</p>
                  </section>
                ))}
              </div>
            </section>

            <section className="border border-cyan-200/12 bg-[#071f23] p-6">
              <div className="flex items-center gap-3">
                <AlertTriangleIcon className="size-6 text-[#f08b4f]" />
                <h2 className="text-3xl font-semibold text-[#effffb]">
                  {pageCopy.hotfixTitle}
                </h2>
              </div>
              <p className="mt-4 leading-8 text-[#abc8c3]">
                {pageCopy.hotfixBody}
              </p>
            </section>
          </article>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <h2 className="text-lg font-semibold text-[#effffb]">
                {pageCopy.readNextTitle}
              </h2>
              <div className="mt-4 grid gap-3 text-sm">
                {pageCopy.related.map(([label, href]) => (
                  <LocaleLink
                    className="text-[#78ead7] hover:underline"
                    href={href}
                    key={href}
                  >
                    {label}
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <h2 className="text-lg font-semibold text-[#effffb]">
                {pageCopy.sourceTitle}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                {pageCopy.sourceBody}
              </p>
              <div className="mt-4 grid gap-2 text-sm">
                <a
                  className="text-[#78ead7] hover:underline"
                  href="https://unknownworlds.com/en/news/subnautica-2-ea1-hotfix-2"
                  rel="noreferrer"
                  target="_blank"
                >
                  {pageCopy.sourceLabels[0]}
                </a>
                <a
                  className="text-[#78ead7] hover:underline"
                  href="https://www.pcgamer.com/games/survival-crafting/subnautica-2-troilite-location/"
                  rel="noreferrer"
                  target="_blank"
                >
                  {pageCopy.sourceLabels[1]}
                </a>
                <a
                  className="text-[#78ead7] hover:underline"
                  href="https://subnautica2.gg/blueprints/entangled-power-cell"
                  rel="noreferrer"
                  target="_blank"
                >
                  {pageCopy.sourceLabels[2]}
                </a>
              </div>
            </section>

            <section className="border border-cyan-200/12 bg-[#071f23] p-5">
              <GaugeIcon className="mb-4 size-6 text-[#f08b4f]" />
              <h2 className="text-lg font-semibold text-[#effffb]">
                {pageCopy.routeMindsetTitle}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#abc8c3]">
                {pageCopy.routeMindsetBody}
              </p>
            </section>
          </aside>
        </div>
      </Container>
    </main>
  );
}
